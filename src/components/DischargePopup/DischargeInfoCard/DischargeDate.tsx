import styled from "styled-components";

import { AlertStatus, DischargeInterval } from "../types";
import { getDischargeDateObject } from "../utils";

function getColorFromAlertStatus(alertStatus: AlertStatus): string {
    switch (alertStatus) {
        case "Discharging":
            return "--danger";
        case "Recent Discharge":
            return "--warning";
        case "Not Discharging":
            return "--good";
    }
}

const Container = styled.div`
    background-color: var(--backgroundcardcolor);
    border-radius: 8px;
    padding: 10px;
    width: 60px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SmallText = styled.p`
    font-size: 0.9rem;
    line-height: 1;
`;
const LargeText = styled.p`
    font-size: 1.6rem;
    line-height: 1.1;
`;

type DischargeDateProps = {
    alertStatus: AlertStatus;
    dischargeInterval: DischargeInterval;
};

export function DischargeDate({ alertStatus, dischargeInterval }: DischargeDateProps) {
    if (dischargeInterval.start === null) {
        return (
            <Container
                style={
                    {
                        "--backgroundcardcolor": "var(--good)"
                    } as React.CSSProperties
                }
            >
                <LargeText>N/A</LargeText>
            </Container>
        );
    }

    return (
        <Container
            style={
                {
                    "--backgroundcardcolor": `var(${getColorFromAlertStatus(alertStatus)})`
                } as React.CSSProperties
            }
        >
            <>
                <SmallText>
                    {getDischargeDateObject(dischargeInterval.end ?? Date.now()).month}
                </SmallText>
                <LargeText>
                    {getDischargeDateObject(dischargeInterval.end ?? Date.now()).day}
                </LargeText>
                <SmallText>
                    {getDischargeDateObject(dischargeInterval.end ?? Date.now()).year}
                </SmallText>
            </>
        </Container>
    );
}
