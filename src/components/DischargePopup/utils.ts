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
    if (
        alertPast48Hours === true &&
        alertStatusField != "discharging" &&
        alertStatusField != "offline"
    ) {
        return "Recent Discharge";
    } else if (alertStatusField == "not discharging") {
        return "Not Discharging";
    } else if (alertStatusField == "discharging") {
        return "Discharging";
    }

    return "Not Discharging"; // Default to "Not Discharging" if conditions are not met.
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
        discharges: dischargeKeys.map((key) => {
            return {
                start: new Date(jsonData.StartDateTime[key]),
                end: new Date(jsonData.StopDateTime[key])
            };
        })
    };
}

/**
 * Calculates the date six months ago from the current date.
 * @param currentDate The current date.
 * @returns A Date object representing the date six months ago.
 */
export function getDateSixMonthsAgo(currentDate: Date): Date {
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return sixMonthsAgo;
}

/**
 * Checks if a given date is within the last six months from the current date.
 * @param date The date to check.
 * @returns true if the date is within the last six months, false otherwise.
 */
export function isDateWithinLast6Months(date: Date): boolean {
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    return date >= sixMonthsAgo && date <= currentDate;
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
