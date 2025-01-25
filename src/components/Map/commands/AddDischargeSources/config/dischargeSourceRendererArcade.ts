// Discharging = 3
// Not Discharging = 0
// Recent Discharge = 2
// Offline = 1
// unknown = 999

export const thamesWaterAlertStatusSymbolArcade = ` 
var statuses = ["Not Discharging", "Recent Discharge", "Discharging", "Offline"];

var index = 3;

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
