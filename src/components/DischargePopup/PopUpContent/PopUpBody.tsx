import Wave from "react-wavify";
import styled from "styled-components";

import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";
import Tabs from "../../Tabs";
import { DischargeDate } from "../DischargeInfoCard/DischargeDate";
import { DischargeInfo } from "../DischargeInfoCard/DischargeInfo";
import Timeline from "../DischargeTimeline";
import { AlertStatus, DischargeInterval } from "../types";

const ContentWrapper = styled.div`
    width: 100%;
    padding: 10px 4px 0px;
    position: relative;
    overflow: hidden;
`;

const BodyWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const BackgroundWave = styled(Wave)`
    position: absolute;
    max-width: unset;
    min-width: 100%;
    height: 400px;
    top: -24px;
`;

const DataCardWrapper = styled.div`
    --shadow-color: var(--river-blue);
    --shadow-elevation-medium: 0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.1),
        0.5px 1px 1.2px -0.8px hsl(var(--shadow-color) / 0.09),
        1.2px 2.5px 3.1px -1.7px hsl(var(--shadow-color) / 0.09),
        3px 6px 7.5px -2.5px hsl(var(--shadow-color) / 0.09);
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: var(--shadow-elevation-medium);
    border: var(--river-blue) solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    position: relative;
    min-height: 50px;
`;

const ActiveDischargeContent = styled.div`
    display: flex;
    gap: 8px;
`;

type DischargeMainContentType = {
    alertStatus: AlertStatus;
    dischargeInterval: DischargeInterval;
    locationName: string;
};

export function PopUpBody({
    alertStatus,
    dischargeInterval,
    locationName
}: DischargeMainContentType) {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <BodyWrapper>
            {alertStatus != "Not Discharging" && (
                <BackgroundWave
                    fill="#997c74"
                    paused={prefersReducedMotion}
                    options={{
                        height: 30,
                        amplitude: 20,
                        speed: 0.1,
                        points: 6
                    }}
                />
            )}

            <BackgroundWave
                fill="#E6F5FF"
                paused={prefersReducedMotion}
                options={{
                    height: 25,
                    amplitude: 15,
                    speed: 0.175,
                    points: 5
                }}
            />
            <ContentWrapper>
                <Tabs.Root defaultValue="latest" aria-label="Choose which information to see:">
                    <Tabs.List>
                        <Tabs.Trigger value="latest">Latest</Tabs.Trigger>
                        <Tabs.Trigger value="history">History</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="latest">
                        <DataCardWrapper>
                            <ActiveDischargeContent>
                                <DischargeDate
                                    alertStatus={alertStatus}
                                    dischargeInterval={dischargeInterval}
                                ></DischargeDate>
                                <DischargeInfo
                                    alertStatus={alertStatus}
                                    dischargeInterval={dischargeInterval}
                                ></DischargeInfo>
                            </ActiveDischargeContent>
                        </DataCardWrapper>
                    </Tabs.Content>
                    <Tabs.Content value="history">
                        <DataCardWrapper>
                            <Timeline locationName={locationName}></Timeline>
                        </DataCardWrapper>
                    </Tabs.Content>
                </Tabs.Root>
            </ContentWrapper>
        </BodyWrapper>
    );
}
