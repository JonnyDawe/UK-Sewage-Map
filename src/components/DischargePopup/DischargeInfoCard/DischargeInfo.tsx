import * as Separator from "@radix-ui/react-separator";
import styled from "styled-components";

import { useUTCTime } from "../../../hooks/useUTCTime";
import PulsatingBadge from "../../ActiveBadge";
import { AlertStatus, DischargeInterval } from "../types";
import { formatShortDate, getFormattedTimeInterval } from "../utils";

const TextContainer = styled.div`
    display: flex;
    flex-grow: 1;
    padding-right: 16px;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
`;

const DetailText = styled.p`
    font-size: 0.9rem;
`;

function getDischargeDescriptionFromAlert(alertStatus: AlertStatus, dischargeStart: number | null) {
    switch (alertStatus) {
        case "Discharging":
            return "Discharging Now 🤮";
        case "Recent Discharge":
            return "Discharge in last 48 hours 🤢";
        case "Not Discharging":
            return dischargeStart
                ? "Historic Discharge Event 🤕"
                : "No Recorded Discharge since 1st April 2022";
    }
}

function DateText({ dateNumber, label }: { dateNumber: number; label: string }) {
    return (
        <div style={{ lineHeight: "1.2" }}>
            <DetailText>{label}</DetailText>
            <p style={{ fontSize: "0.75rem" }}>{formatShortDate(dateNumber)}</p>
        </div>
    );
}

function DateRange({ dischargeInterval }: { dischargeInterval: DischargeInterval }) {
    if (!dischargeInterval?.start) {
        return null;
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <DateText dateNumber={dischargeInterval.start} label={"Started:"}></DateText>
            <Separator.Root
                className="SeparatorRoot"
                decorative
                orientation="vertical"
                style={{
                    margin: "0px 4px",
                    height: "32px",
                    width: "0.5px",
                    backgroundColor: dischargeInterval.end ? "black" : "unset"
                }}
            />
            {dischargeInterval.end ? (
                <DateText dateNumber={dischargeInterval.end} label={"Ended:"}></DateText>
            ) : (
                <PulsatingBadge>ACTIVE</PulsatingBadge>
            )}
        </div>
    );
}

type DischargeInfoType = {
    alertStatus: AlertStatus;
    dischargeInterval: DischargeInterval;
};
export function DischargeInfo({ alertStatus, dischargeInterval }: DischargeInfoType) {
    const [currentUTCTime] = useUTCTime();

    return (
        <TextContainer>
            <p>{getDischargeDescriptionFromAlert(alertStatus, dischargeInterval.start)}</p>
            {dischargeInterval.start != null && (
                <>
                    <DateRange dischargeInterval={dischargeInterval}></DateRange>
                    <DetailText>
                        Duration:{" "}
                        {dischargeInterval.end
                            ? getFormattedTimeInterval(
                                  dischargeInterval.start,
                                  dischargeInterval.end
                              )
                            : getFormattedTimeInterval(
                                  dischargeInterval.start,
                                  currentUTCTime,
                                  true
                              )}
                    </DetailText>
                </>
            )}
        </TextContainer>
    );
}
