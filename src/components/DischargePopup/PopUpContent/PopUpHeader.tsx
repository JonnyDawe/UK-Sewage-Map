import styled from "styled-components";

import { ERRORICON, GREENTICKICON, POOICON } from "../../../static/hostedImages";
import { AlertStatus } from "../types";

const Header = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px 0px;
    flex-direction: row;
    font-family: "Lato", sans-serif;
    font-weight: 400;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

const Title = styled.p`
    font-size: 1.2rem;
    line-height: 1;
    color: var(--font-1);
    font-weight: 500;
`;

const SubTitle = styled.p`
    font-size: 0.9rem;
    color: var(--river-blue);
`;

function getDischargeIcon(alertStatus: AlertStatus) {
    switch (alertStatus) {
        case "Discharging":
            return POOICON;
        case "Recent Discharge":
            return ERRORICON;
        case "Not Discharging":
            return GREENTICKICON;
    }
}

type DischargePopupHeaderType = {
    alertStatus: AlertStatus;
    location: string;
    feeds: string;
};

export function PopUpHeader({ alertStatus, location, feeds }: DischargePopupHeaderType) {
    return (
        <Header>
            <Icon src={getDischargeIcon(alertStatus)}></Icon>
            <div>
                <Title>{location}</Title>
                <SubTitle>
                    Feeds into: <b>{feeds}</b>
                </SubTitle>
            </div>
        </Header>
    );
}
