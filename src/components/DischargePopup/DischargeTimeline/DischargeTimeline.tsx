import { Chart } from "react-google-charts";
import styled from "@emotion/styled";
import useSWR from "swr";

import { DischargeHistoricalDataJSON } from "../types";
import {
    calculateTotalDischargeLength,
    formatTime,
    getDateSixMonthsAgo,
    getDischargeDataForLocation,
    getDischargeDateObject,
    getFormattedTimeInterval,
    isDateWithinLast6Months
} from "../utils";
import { Text } from "@radix-ui/themes";

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

function processDataForLocation(jsonData: DischargeHistoricalDataJSON, locationName: string) {
    const dischargeData = getDischargeDataForLocation(jsonData, locationName);
    const columns = [
        { type: "string", id: "Location" },
        { type: "string", id: "Start Date String" },
        { type: "string", role: "tooltip" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" }
    ];

    const dischargesInLast6Months: {
        start: Date;
        end: Date;
    }[] = dischargeData.discharges.filter((discharge) => isDateWithinLast6Months(discharge.start));

    const rows = dischargesInLast6Months.map((discharge) => {
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
        totalDischarge: calculateTotalDischargeLength(dischargesInLast6Months)
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

    const locationData = processDataForLocation(historicDataJSON, locationName);

    //no data rows
    if (locationData?.dischargeChartData?.length === 1) {
        const dateobj = getDischargeDateObject(getDateSixMonthsAgo(new Date()));
        return (
            <p>{`No Recorded Discharge since ${dateobj.day} ${dateobj.month} ${dateobj.year} `}</p>
        );
    }

    return (
        <TimeLineWrapper>
            <Text size={"2"}>
                Discharge events from the last <b>6 months</b>
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
                        minValue: getDateSixMonthsAgo(new Date()),
                        maxValue: Date.now()
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
