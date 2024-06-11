import { Flex, Heading, Text } from "@radix-ui/themes";

import { ERRORICON, GREENTICKICON, POOICON, UNKNOWNICON } from "../../../constants/hostedImages";
import { AlertStatus } from "../../../utils/discharge/types";
import { Em } from "../../common/Text";

function getDischargeIcon(alertStatus: AlertStatus): string {
    switch (alertStatus) {
        case "Discharging":
            return POOICON;
        case "Recent Discharge":
            return ERRORICON;
        case "Not Discharging":
            return GREENTICKICON;
        case "Offline":
            return UNKNOWNICON;
    }
}

type DischargePopupHeaderType = {
    alertStatus: AlertStatus;
    location: string;
    feeds: string;
};

export function PopUpHeader({ alertStatus, location, feeds }: DischargePopupHeaderType) {
    const pathname = window.location.origin;
    return (
        <Flex gap="2">
            <img
                alt={alertStatus}
                width={30}
                height={30}
                src={pathname + getDischargeIcon(alertStatus)}
            ></img>
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
