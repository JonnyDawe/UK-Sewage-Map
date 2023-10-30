import { ImageResponse } from "@vercel/og";
import type { VercelRequest } from "@vercel/node";
import {
    DischargeHistoricalDataJSON,
    DischargeHistoryPeriod
} from "../src/components/DischargePopup/types";
import {
    calculateTotalDischargeLength,
    getDischargeDataForLocation
} from "../src/components/DischargePopup/utils";

export const config = {
    runtime: "edge"
};

function processDataForLocation(jsonData: DischargeHistoricalDataJSON, locationName: string) {
    const dischargeData = getDischargeDataForLocation(jsonData, locationName);

    return {
        totalDischarge: calculateTotalDischargeLength(dischargeData.discharges)
    };
}

export default async function handler(request: VercelRequest) {
    try {
        const { searchParams } = new URL(request.url ?? "");

        // ?title=<title>
        const hasTitle = searchParams.has("title");
        const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "My default title";

        const res = await fetch(
            "https://thamessewage.s3.eu-west-2.amazonaws.com/discharges_to_date/up_to_now.json"
        );

        // If the status code is not in the range 200-299,
        // we still try to parse and throw it.
        if (!res.ok || title === undefined) {
            const error = new Error(
                "An error occurred while fetching the historic discharge data."
            );
            throw error;
        }

        const historicDataJSON = await res.json();
        const topItem = historicDataJSON as DischargeHistoricalDataJSON;

        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundColor: "black",
                        backgroundSize: "150px 150px",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexWrap: "nowrap"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            justifyItems: "center"
                        }}
                    >
                        <img
                            alt="Vercel"
                            height={200}
                            src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
                            style={{ margin: "0 30px" }}
                            width={232}
                        />
                    </div>
                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: "normal",
                            letterSpacing: "-0.025em",
                            color: "white",
                            marginTop: 30,
                            padding: "0 120px",
                            lineHeight: 1.4,
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {title}
                        {processDataForLocation(historicDataJSON, title).totalDischarge}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500
        });
    }
}
