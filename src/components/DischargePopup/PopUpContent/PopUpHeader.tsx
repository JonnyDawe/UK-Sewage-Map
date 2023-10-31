import styled from "@emotion/styled";

import { ERRORICON, GREENTICKICON, POOICON } from "../../../static/hostedImages";
import { AlertStatus } from "../../../utils/discharge/types";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { Em } from "../../common/Text";

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
        <Flex gap="2">
            <Icon src={getDischargeIcon(alertStatus)}></Icon>
            <div>
                <Heading size={"4"} as="h3" trim={"end"}>
                    {location}
                </Heading>
                <Text size={"2"}>
                    <Em>
                        Feeds into: <b>{feeds}</b>
                    </Em>
                </Text>
            </div>
        </Flex>
    );
}
