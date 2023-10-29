import { Chart } from "react-google-charts";
import styled from "@emotion/styled";
import useSWR from "swr";

import {
    DischargeDateInterval,
    DischargeHistoricalData,
    DischargeHistoricalDataJSON,
    DischargeHistoryPeriod,
    DischargeInterval
} from "../types";
import {
    calculateTotalDischargeLength,
    formatTime,
    getDatenMonthsAgo,
    getDischargeDataForLocation,
    getDischargeDateObject,
    getFormattedTimeInterval,
    isDateWithin2023,
    isDateWithinLastnMonths
} from "../utils";
import { Text } from "@radix-ui/themes";
import { InLineSelect } from "../../common/Select/InlineSelect";
import React from "react";

const CustomChart = styled(Chart)`
    svg {
        // Background Color
        g:nth-child(2) {
            rect {
                fill: var(--gray-a2);
            }
            path {
                stroke: var(--gray-4);
            }
        }

        // Text
        g:nth-child(3) {
            text {
                fill: var(--gray-12);
            }
        }

        // Fill
        g:nth-child(5) {
            rect {
                fill: var(--brown-10);
            }
        }
    }
`;

function getFilteredDischarges(
    dischargeData: DischargeHistoricalData,
    period: DischargeHistoryPeriod
) {
    switch (period) {
        case DischargeHistoryPeriod.Last12Months:
            return dischargeData.discharges.filter((discharge) =>
                isDateWithinLastnMonths(discharge.start, 12)
            );
        case DischargeHistoryPeriod.Last6Months:
            return dischargeData.discharges.filter((discharge) =>
                isDateWithinLastnMonths(discharge.start, 6)
            );
        case DischargeHistoryPeriod.Last3Months:
            return dischargeData.discharges.filter((discharge) =>
                isDateWithinLastnMonths(discharge.start, 3)
            );
        case DischargeHistoryPeriod.StartOf2023:
            return dischargeData.discharges.filter((discharge) =>
                isDateWithin2023(discharge.start)
            );
        default:
            return [];
    }
}

function getStartDateOfInterest(period: DischargeHistoryPeriod) {
    switch (period) {
        case DischargeHistoryPeriod.Last12Months:
            return getDatenMonthsAgo(new Date(), 12);
        case DischargeHistoryPeriod.Last6Months:
            return getDatenMonthsAgo(new Date(), 6);
        case DischargeHistoryPeriod.Last3Months:
            return getDatenMonthsAgo(new Date(), 3);
        case DischargeHistoryPeriod.StartOf2023:
            return new Date(2023, 0, 1);
        default:
            return undefined;
    }
}

function processDataForLocation(
    jsonData: DischargeHistoricalDataJSON,
    locationName: string,
    selectedPeriod: DischargeHistoryPeriod
) {
    const dischargeData = getDischargeDataForLocation(jsonData, locationName);
    const columns = [
        { type: "string", id: "Location" },
        { type: "string", id: "Start Date String" },
        { type: "string", role: "tooltip" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" }
    ];

    const dischargesForSelectedPeriod = getFilteredDischarges(dischargeData, selectedPeriod);

    const rows = dischargesForSelectedPeriod.map((discharge) => {
        return [
            "Discharge Date",
            "",
            getHTMLContentForTooltip(discharge),
            discharge.start,
            discharge.end
        ];
    });

    return {
        dischargeChartData: [columns, ...rows],
        totalDischarge: calculateTotalDischargeLength(dischargesForSelectedPeriod)
    };
}

async function fetchHistoricDischargeData(url: string) {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the historic discharge data.");
        throw error;
    }

    return res.json();
}

function getHTMLContentForTooltip(discharge: { start: Date; end: Date }) {
    const startFormatted = getDischargeDateObject(discharge.start);
    return `<div
            style="  
            min-width:160px;
            background-color: var(--color-panel-solid);
            color: var(--gray-12);
            padding: 5px;
        >
            <h2 style="font-size:1.1rem; margin-bottom:4px">${startFormatted.day} ${
        startFormatted.month
    } ${startFormatted.year}</h2>
            <p>Duration: ${getFormattedTimeInterval(
                discharge.start.getTime(),
                discharge.end.getTime()
            )}</p>
        </div>`;
}

const SubText = styled.span`
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 0.7rem;
`;

const TimeLineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
function Timeline({ locationName }: { locationName: string }) {
    const [selectedPeriod, setSelectedPeriod] = React.useState<DischargeHistoryPeriod>(
        DischargeHistoryPeriod.Last6Months
    );

    const {
        data: historicDataJSON,
        isLoading,
        error
    } = useSWR(
        "https://thamessewage.s3.eu-west-2.amazonaws.com/discharges_to_date/up_to_now.json",
        fetchHistoricDischargeData
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load historic discharge data.</p>;
    }

    const locationData = processDataForLocation(historicDataJSON, locationName, selectedPeriod);

    //no data rows
    if (locationData?.dischargeChartData?.length === 1) {
        const dateobj = getDischargeDateObject(
            getStartDateOfInterest(selectedPeriod) ?? new Date()
        );
        return (
            <p>{`No Recorded Discharge since ${dateobj.day} ${dateobj.month} ${dateobj.year} `}</p>
        );
    }

    return (
        <TimeLineWrapper>
            <Text size={"2"}>
                Discharge events from the:{" "}
                <InLineSelect
                    options={[
                        { value: DischargeHistoryPeriod.Last3Months, label: "Last 3 months" },
                        { value: DischargeHistoryPeriod.Last6Months, label: "Last 6 months" },
                        { value: DischargeHistoryPeriod.Last12Months, label: "Last 12 months" },
                        { value: DischargeHistoryPeriod.StartOf2023, label: "Start of the year" }
                    ]}
                    value={selectedPeriod}
                    onChange={(selectedPeriod) => {
                        setSelectedPeriod(selectedPeriod as DischargeHistoryPeriod);
                    }}
                />
            </Text>
            <CustomChart
                chartType="Timeline"
                data={locationData.dischargeChartData}
                width="100%"
                height="120px"
                options={{
                    timeline: {
                        showRowLabels: false,
                        singleColor: "#733f2e",
                        barLabelStyle: {
                            fontSize: 20
                        }
                    },
                    hAxis: {
                        minValue: getStartDateOfInterest(selectedPeriod),
                        maxValue: new Date()
                    },
                    tooltip: { html: true },
                    avoidOverlappingGridLines: false
                }}
            ></CustomChart>
            <SubText>
                Total Duration <b>{formatTime(locationData.totalDischarge, false)}</b>
            </SubText>
        </TimeLineWrapper>
    );
}

export default Timeline;
