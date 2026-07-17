// Discharging = 3
// Not Discharging = 0
// Recent Discharge = 2
// Offline = 1
// unknown = 999

export const thamesWaterAlertStatusSymbolArcade = ` 
if (
    Boolean($feature.AlertPast48Hours) == true &&
    Lower(Trim($feature.AlertStatus)) != "discharging" &&
    Lower(Trim($feature.AlertStatus)) != "offline"
) {
    return 2 // Recent Discharge
} else if (Lower(Trim($feature.AlertStatus)) == "not discharging") {
    return 0 // Not Discharging
} else if ($feature.AlertStatus == null || IsEmpty($feature.AlertStatus)) {
    return 999 // Unknown Status
} else if (Lower(Trim($feature.AlertStatus)) == "discharging") {
    return 3 // Discharging
} else if (Lower(Trim($feature.AlertStatus)) == "offline") {
    return 1 // Offline
}
return 999 // Unknown Status
`;

export const otherWaterAlertStatusSymbolArcade = ` 
if (
    ($feature.Status == 0) && (DateDiff(Now(), $feature.LatestEventEnd, 'hours') <= 48)
) {
    return 2 // Recent Discharge
} else if ($feature.Status == 0) {
    return 0 // Not Discharging
} else if ($feature.Status == null || IsEmpty($feature.Status)) {
    return 999 // Unknown Status
} else if ($feature.Status == 1) {
    return 3 // Discharging
} else if ($feature.Status == -1) {
    return 1 // Offline
}
return 999 // Unknown Status
`;

// Scottish Water OVERFLOW_STATUS_ID:
// 13 = Overflowing, 14 = Recent Overflow, 15 = No Overflows, 16 = No Data Available
export const scottishWaterAlertStatusSymbolArcade = `
if ($feature.OVERFLOW_STATUS_ID == 13) {
    return 3 // Discharging (Overflowing)
} else if ($feature.OVERFLOW_STATUS_ID == 14) {
    return 2 // Recent Discharge (Recent Overflow)
} else if ($feature.OVERFLOW_STATUS_ID == 15) {
    return 0 // Not Discharging (No Overflows)
} else if ($feature.OVERFLOW_STATUS_ID == 16) {
    return 1 // Offline (No Data Available)
}
return 999 // Unknown Status
`;

// Welsh Water status string values:
// "Overflow Operating" = Currently discharging
// "Overflow Not Operating (Has in the last 24 hours)" = Recent discharge (within 48hr threshold)
// "Overflow Not Operating" = Not discharging; check stop_date_time_discharge for 48hr window
export const welshWaterAlertStatusSymbolArcade = `
var status = Lower(Trim($feature.status));
if (status == "overflow operating") {
    return 3 // Discharging
} else if (Find("has in the last", status) != -1) {
    return 2 // Recent Discharge
} else if (status == "overflow not operating") {
    if (IsEmpty($feature.stop_date_time_discharge)) {
        return 0
    }
    var stopDate = Date($feature.stop_date_time_discharge);
    if (!IsEmpty(stopDate) && DateDiff(Now(), stopDate, 'hours') <= 48) {
        return 2 // Recent Discharge
    }
    return 0 // Not Discharging
}
return 999 // Unknown Status
`;
