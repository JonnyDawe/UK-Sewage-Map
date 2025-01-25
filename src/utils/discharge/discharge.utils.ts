import {
  differenceInHours,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInSeconds,
  endOfYear,
  format,
  isWithinInterval,
  startOfYear,
  subMonths,
} from 'date-fns';

import {
  ThamesWaterDischargeAttributes,
  validateThamesWaterDischargeAttributes,
  validateWaterCompanyDischargeAttributes,
  WaterCompanyDischargeAttributes,
} from './schemas';
import {
  AlertStatus,
  DischargeData,
  DischargeHistoricalData,
  DischargeHistoricalDataJSON,
} from './types';

/**
 * Converts an ESRI Graphic object to a DischargeData object.
 * @param graphic The ESRI Graphic object containing discharge data attributes.
 * @returns A DischargeData object containing relevant discharge information.
 * @throws Error if the graphic attributes are invalid
 */
export function getRenderPropsFromGraphic(graphic: __esri.Graphic): DischargeData {
  const validatedThamesWaterAttributes = validateThamesWaterDischargeAttributes(graphic.attributes);
  const validatedWaterCompanyAttributes = validateWaterCompanyDischargeAttributes(
    graphic.attributes,
  );

  if (validatedThamesWaterAttributes) {
    return getRenderPropsFromThamesWaterAttributes(validatedThamesWaterAttributes);
  }

  if (validatedWaterCompanyAttributes) {
    return getRenderPropsFromWaterCompanyAttributes(validatedWaterCompanyAttributes);
  }

  throw new Error('Invalid discharge attributes');
}

function getRenderPropsFromThamesWaterAttributes(
  attributes: ThamesWaterDischargeAttributes,
): DischargeData {
  const alertPast48Hours = attributes.AlertPast48Hours === 'true';
  const alertStatusField = attributes.AlertStatus?.trim().toLocaleLowerCase() ?? 'not discharging';

  return {
    id: attributes.PermitNumber,
    company: 'Thames Water',
    alertStatus: getAlertStatus(alertPast48Hours, alertStatusField),
    dischargeInterval: {
      start: attributes.MostRecentDischargeAlertStart,
      end: attributes.MostRecentDischargeAlertStop,
    },
    feeds: attributes.ReceivingWaterCourse?.toLowerCase() ?? '',
    location: attributes.LocationName,
  };
}

function getRenderPropsFromWaterCompanyAttributes(
  attributes: WaterCompanyDischargeAttributes,
): DischargeData {
  const isDischarging = attributes.Status === 1;
  const isOffline = attributes.Status === -1;
  const isRecentDischarge =
    attributes.Status === 0 &&
    attributes.LatestEventEnd &&
    differenceInHours(new Date(), attributes.LatestEventEnd) <= 48;

  return {
    id: attributes.Id,
    company: attributes.Company,
    alertStatus: isDischarging
      ? 'Discharging'
      : isOffline
        ? 'Offline'
        : isRecentDischarge
          ? 'Recent Discharge'
          : 'Not Discharging',
    dischargeInterval: {
      start: attributes.LatestEventStart,
      end: attributes.LatestEventEnd,
    },
    feeds: attributes.ReceivingWaterCourse?.toLowerCase() ?? '',
    location: '',
  };
}

/**
 * Determines the alert status based on the provided conditions.
 * @param alertPast48Hours Whether there has been an alert in the past 48 hours.
 * @param alertStatusField The status of the alert (e.g., "discharging", "offline").
 * @returns An AlertStatus value ("Not Discharging", "Recent Discharge", or "Discharging").
 */
function getAlertStatus(alertPast48Hours: boolean, alertStatusField: string): AlertStatus {
  switch (alertStatusField) {
    case 'offline':
      return 'Offline';
    case 'discharging':
      return 'Discharging';
    case 'not discharging':
      if (alertPast48Hours) {
        return 'Recent Discharge';
      } else {
        return 'Not Discharging';
      }
    default:
      return 'Not Discharging';
  }
}

/**
 * Formats a time interval in milliseconds to a human-readable string.
 * @param start The start time in milliseconds.
 * @param end The end time in milliseconds.
 * @param includeSeconds (Optional) Whether to include seconds in the formatted string.
 * @returns A formatted time interval string (e.g., "2 hours 15 mins" or "1 hour 30 mins 45 sec").
 */
export function getFormattedTimeInterval(
  start: number,
  end: number,
  includeSeconds = false,
): string {
  const difference = differenceInMilliseconds(end, start);
  return formatTime(difference, includeSeconds);
}

/**
 * Formats a time difference in milliseconds to a human-readable string.
 * @param difference The time difference in milliseconds.
 * @param includeSeconds (Optional) Whether to include seconds in the formatted string.
 * @returns A formatted time string.
 */
export function formatTime(difference: number, includeSeconds: boolean) {
  const hours = differenceInHours(difference, 0);
  const minutes = differenceInMinutes(difference, 0) % 60;
  const seconds = differenceInSeconds(difference, 0) % 60;

  return `${hours > 0 ? `${hours} hours ` : ''}${minutes < 10 ? '0' + minutes : minutes} mins ${
    includeSeconds ? `${seconds < 10 ? '0' + seconds : seconds} sec` : ''
  } `;
}

const MONTH_NAMES_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * Converts a Date or number representing a date to an object containing month, day, and year.
 * @param date A Date object or a number representing a date.
 * @returns An object with month, day, and year properties.
 */
export function getDischargeDateObject(date: Date | number): {
  month: string;
  day: number;
  year: number;
} {
  date = new Date(date);
  return {
    month: MONTH_NAMES_SHORT[date.getMonth()] ?? '',
    day: date.getDate(),
    year: date.getFullYear(),
  };
}

/**
 * Formats a date to a specified format
 * @param date A Date object or timestamp
 * @param formatType 'full' for date and time, 'timeOnly' for just time
 */
export function formatDate(date: Date | number, formatType: 'full' | 'timeOnly' = 'full'): string {
  const dateObj = new Date(date);
  return formatType === 'full'
    ? format(dateObj, 'dd/MM/yyyy h:mm a').toLowerCase()
    : format(dateObj, 'h:mm a').toLowerCase();
}

/**
 * Finds keys in a dictionary that match a given value.
 * @param dictionary A dictionary object.
 * @param searchValue The value to search for in the dictionary.
 * @returns An array of keys that match the search value.
 */
function findKeysByValue<T>(dictionary: Record<string, T>, searchValue: T): string[] {
  const keys: string[] = [];

  for (const key in dictionary) {
    if (dictionary[key] === searchValue) {
      keys.push(key);
    }
  }

  return keys;
}

/**
 * Gets discharge data based on a search criterion
 * @param jsonData The JSON data containing discharge historical information
 * @param searchKey The key to search by ('LocationName' or 'PermitNumber')
 * @param searchValue The value to search for
 */
export function getDischargeData(
  jsonData: DischargeHistoricalDataJSON,
  searchKey: 'LocationName' | 'PermitNumber',
  searchValue: string,
): DischargeHistoricalData {
  const dischargeKeys = findKeysByValue(jsonData[searchKey], searchValue);
  const [firstValue] = dischargeKeys;

  return {
    locationName: firstValue ? (jsonData.LocationName[firstValue] ?? '') : '',
    permitNumber: firstValue ? (jsonData.PermitNumber[firstValue] ?? '') : '',
    receivingWaterCourse: firstValue ? (jsonData.ReceivingWaterCourse[firstValue] ?? '') : '',
    discharges: dischargeKeys.map((key) => ({
      start: new Date(jsonData.StartDateTime[key]!),
      end: new Date(jsonData.StopDateTime[key]!),
    })),
  };
}

/**
 * Converts discharge historical data in JSON format to a structured object.
 * @param jsonData The JSON data containing discharge historical information.
 * @param locationName The location name to filter the data.
 * @returns A structured object containing location name and associated discharge intervals.
 */
export function getDischargeDataForLocation(
  jsonData: DischargeHistoricalDataJSON,
  locationName: string,
): DischargeHistoricalData {
  return getDischargeData(jsonData, 'LocationName', locationName);
}

/**
 * Converts discharge historical data in JSON format to a structured object.
 * @param jsonData The JSON data containing discharge historical information.
 * @param permitNumber The permit number to filter the data.
 * @returns A structured object containing permit number and associated discharge intervals.
 */
export function getDischargeDataForPermitNumber(
  jsonData: DischargeHistoricalDataJSON,
  permitNumber: string,
): DischargeHistoricalData {
  return getDischargeData(jsonData, 'PermitNumber', permitNumber);
}

/**
 * Calculates the date a specified number of months ago from the current date.
 * @param currentDate The current date.
 * @param monthsAgo The number of months ago.
 * @returns A Date object representing the calculated date.
 */
export function getDatenMonthsAgo(currentDate: Date, monthsAgo: number): Date {
  return subMonths(currentDate, monthsAgo);
}

/**
 * Checks if a given date is within the last n months from the current date.
 * @param date The date to check.
 * @param n The number of months
 * @returns true if the date is within the last n months, false otherwise.
 */
export function isDateWithinLastnMonths(date: Date, n: number) {
  const today = new Date();
  const monthsAgo = subMonths(today, n);
  return isWithinInterval(date, { start: monthsAgo, end: today });
}

/**
 * Checks if a given date is within a specified year.
 *
 * @param {Date} date - The date to check.
 * @param {number} year - The year to check within.
 * @returns {boolean} Returns true if the date is within the specified year, false otherwise.
 */
export function isDateWithinYear(date: Date, year: number) {
  return isWithinInterval(date, {
    start: startOfYear(new Date(year, 0)),
    end: endOfYear(new Date(year, 0)),
  });
}

/**
 * Calculates the total length of discharge across a list of discharges.
 * @param discharges An array of discharge objects containing start and end dates.
 * @returns The total length of discharge in milliseconds.
 */
export function calculateTotalDischargeLength(
  discharges: {
    start: Date;
    end: Date;
  }[],
): number {
  let totalLength = 0;

  // Iterate through each discharge to calculate the time difference and accumulate the total length
  for (const discharge of discharges) {
    // Calculate the length of the discharge in milliseconds
    const dischargeLength = discharge.end.getTime() - discharge.start.getTime();

    // Add the current discharge length to the total
    totalLength += dischargeLength;
  }

  // Return the total length of discharge in milliseconds
  return totalLength;
}
