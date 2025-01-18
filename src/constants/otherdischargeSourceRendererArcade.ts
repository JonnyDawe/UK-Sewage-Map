const arcade = ` 
if (
    ($feature.Status == 0) && (DateDiff(Now(), $feature.LatestEventEnd, 'hours') <= 48)
) {
    return "Recent Discharge";
} else if ($feature.Status == 0) {
    return "Not Discharging";
} else if ($feature.Status == null || IsEmpty($feature.Status)) {
    return "Unknown Status";
} else if ($feature.Status == 1) {
    return "Discharging";
} else if ($feature.Status == -1) {
    return "Offline";
}
return "Something has gone wrong...";
`;
export default arcade;
