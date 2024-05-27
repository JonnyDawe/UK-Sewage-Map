import styled from "@emotion/styled";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { ERRORICON, GREENTICKICON, POOICON } from "../../../constants/hostedImages";
import { AlertStatus } from "../../../utils/discharge/types";
import { Em } from "../../common/Text";

const Icon = styled.img`
    width: 30px;
    height: 30px;
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
