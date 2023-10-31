import styled from "@emotion/styled";

import { useUTCTime } from "../../../hooks/useUTCTime";
import PulsatingBadge from "../../ActiveBadge/ActiveBadge";
import { AlertStatus, DischargeInterval } from "../../../utils/discharge/types";
import {
    formatShortDate,
    getFormattedTimeInterval
} from "../../../utils/discharge/discharge.utils";
import { Box, Text, Separator, Flex } from "@radix-ui/themes";

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
        <Box>
            <Text as="p" size={"2"}>
                {label}
            </Text>
            <Text as="p" size={"1"}>
                {formatShortDate(dateNumber)}
            </Text>
        </Box>
    );
}

function DateRange({ dischargeInterval }: { dischargeInterval: DischargeInterval }) {
    if (!dischargeInterval?.start) {
        return null;
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <DateText dateNumber={dischargeInterval.start} label={"Started:"}></DateText>

            <Separator
                decorative
                orientation="vertical"
                size={"2"}
                style={{
                    ...(dischargeInterval.end ? {} : { backgroundColor: "unset" })
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
        <Flex direction={"column"} justify={"center"} gap={"1"} grow={"1"} pr="2">
            <Text as="p" size="3">
                {getDischargeDescriptionFromAlert(alertStatus, dischargeInterval.start)}
            </Text>
            {dischargeInterval.start != null && (
                <>
                    <DateRange dischargeInterval={dischargeInterval}></DateRange>
                    <Text as="p" size={"2"}>
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
                    </Text>
                </>
            )}
        </Flex>
    );
}
