import {
    AlertStatus,
    DischargeData,
    DischargeHistoricalData,
    DischargeHistoricalDataJSON
} from "./types";

/**
 * Converts an ESRI Graphic object to a DischargeData object.
 * @param graphic The ESRI Graphic object containing discharge data attributes.
 * @returns A DischargeData object containing relevant discharge information.
 */
export function getRenderPropsFromGraphic(graphic: __esri.Graphic): DischargeData {
    // Extract relevant attributes from the graphic

    const { attributes } = graphic;
    const alertPast48Hours: boolean = attributes["AlertPast48Hours"] === "true";
    const alertStatusField = (attributes["AlertStatus"] as string).trim().toLocaleLowerCase();
    const dischargeStart = attributes["MostRecentDischargeAlertStart"];
    const dischargeEnd = attributes["MostRecentDischargeAlertStop"];
    const feeds = attributes["ReceivingWaterCourse"];
    const location = attributes["LocationName"];
    return {
        alertStatus: getAlertStatus(alertPast48Hours, alertStatusField),
        dischargeInterval: {
            start: dischargeStart,
            end: dischargeEnd
        },
        feeds,
        location
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
        case "offline":
            return "Offline";
        case "discharging":
            return "Discharging";
        case "not discharging":
            return "Not Discharging";
        default:
            return alertPast48Hours ? "Recent Discharge" : "Not Discharging";
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
    includeSeconds = false
): string {
    const difference = end - start;
    return formatTime(difference, includeSeconds);
}

/**
 * Formats a time difference in milliseconds to a human-readable string.
 * @param difference The time difference in milliseconds.
 * @param includeSeconds (Optional) Whether to include seconds in the formatted string.
 * @returns A formatted time string.
 */
export function formatTime(difference: number, includeSeconds: boolean) {
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${hours > 0 ? `${hours} hours ` : ""}${minutes < 10 ? "0" + minutes : minutes} mins ${
        includeSeconds ? `${seconds < 10 ? "0" + seconds : seconds} sec` : ""
    } `;
}

const MONTH_NAMES_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
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
        month: MONTH_NAMES_SHORT[date.getMonth()],
        day: date.getDate(),
        year: date.getFullYear()
    };
}

/**
 * Formats a Date or number representing a date to a short date string with AM/PM time.
 * @param dateNumber A Date object or a number representing a date.
 * @returns A formatted short date string (e.g., "15/02/2023 03:45 pm").
 */
export function formatShortDate(dateNumber: Date | number): string {
    const date = new Date(dateNumber);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${unixToAmPm(
        dateNumber
    )}`;
}

/**
 * Converts a Unix timestamp (Date or number) to a string with AM/PM time.
 * @param timestamp A Unix timestamp (Date object or number).
 * @returns A formatted time string in AM/PM format (e.g., "03:45 pm").
 */
export function unixToAmPm(timestamp: Date | number): string {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const outMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${outMinutes} ${ampm}`;
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
 * Converts discharge historical data in JSON format to a structured object.
 * @param jsonData The JSON data containing discharge historical information.
 * @param locationName The location name to filter the data.
 * @returns A structured object containing location name and associated discharge intervals.
 */
export function getDischargeDataForLocation(
    jsonData: DischargeHistoricalDataJSON,
    locationName: string
): DischargeHistoricalData {
    const dischargeKeys = findKeysByValue(jsonData.LocationName, locationName);
    return {
        locationName,
        receivingWaterCourse:
            dischargeKeys.length > 0 ? jsonData.ReceivingWaterCourse[dischargeKeys[0]] : "",
        permitNumber: dischargeKeys.length > 0 ? jsonData.PermitNumber[dischargeKeys[0]] : "",
        discharges: dischargeKeys.map((key) => {
            return {
                start: new Date(jsonData.StartDateTime[key]),
                end: new Date(jsonData.StopDateTime[key])
            };
        })
    };
}

/**
 * Converts discharge historical data in JSON format to a structured object.
 * @param jsonData The JSON data containing discharge historical information.
 * @param locationName The location name to filter the data.
 * @returns A structured object containing location name and associated discharge intervals.
 */
export function getDischargeDataForPermitNumber(
    jsonData: DischargeHistoricalDataJSON,
    permitNumber: string
): DischargeHistoricalData {
    const dischargeKeys = findKeysByValue(jsonData.PermitNumber, permitNumber);
    return {
        permitNumber,
        receivingWaterCourse:
            dischargeKeys.length > 0 ? jsonData.ReceivingWaterCourse[dischargeKeys[0]] : "",
        locationName: dischargeKeys.length > 0 ? jsonData.LocationName[dischargeKeys[0]] : "",
        discharges: dischargeKeys.map((key) => {
            return {
                start: new Date(jsonData.StartDateTime[key]),
                end: new Date(jsonData.StopDateTime[key])
            };
        })
    };
}

/**
 * Calculates the date a specified number of months ago from the current date.
 * @param currentDate The current date.
 * @param monthsAgo The number of months ago.
 * @returns A Date object representing the calculated date.
 */
export function getDatenMonthsAgo(currentDate: Date, monthsAgo: number): Date {
    const calculatedDate = new Date(currentDate);
    calculatedDate.setMonth(calculatedDate.getMonth() - monthsAgo);
    return calculatedDate;
}

/**
 * Checks if a given date is within the last n months from the current date.
 * @param date The date to check.
 * @param n The number of months
 * @returns true if the date is within the last n months, false otherwise.
 */
export function isDateWithinLastnMonths(date: Date, n: number) {
    const today = new Date();
    const monthsAgo = new Date(today.getFullYear(), today.getMonth() - n, today.getDate());
    return date >= monthsAgo && date <= today;
}

/**
 * Checks if a given date is within a specified year.
 *
 * @param {Date} date - The date to check.
 * @param {number} year - The year to check within.
 * @returns {boolean} Returns true if the date is within the specified year, false otherwise.
 */
export function isDateWithinYear(date: Date, year: number) {
    const startOfYear = new Date(year, 0, 1); // January is 0-based
    const endOfYear = new Date(year, 11, 31);
    return date >= startOfYear && date <= endOfYear;
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
    }[]
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
