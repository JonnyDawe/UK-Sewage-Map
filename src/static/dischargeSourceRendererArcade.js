/* eslint-disable */
var statuses = ["Not Discharging", "Recent Discharge", "Discharging", "Offline"];

var index = 3;

if (
    Boolean($feature.AlertPast48Hours) == true &&
    Lower(Trim($feature.AlertStatus)) != "discharging" &&
    Lower(Trim($feature.AlertStatus)) != "offline"
) {
    index = 1;
} else if (Lower(Trim($feature.AlertStatus)) == "not discharging") {
    index = 0;
} else if ($feature.AlertStatus == null || IsEmpty($feature.AlertStatus)) {
    index = 3;
} else if (Lower(Trim($feature.AlertStatus)) == "discharging") {
    index = 2;
} else if (Lower(Trim($feature.AlertStatus)) == "offline") {
    index = 3;
}
return statuses[index];
