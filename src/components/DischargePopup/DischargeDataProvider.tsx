import React from "react";

import { DischargeData } from "../../utils/discharge/types";

export const DischargeDataContext: React.Context<DischargeData> = React.createContext({
    alertStatus: "Not Discharging",
    dischargeInterval: { start: null, end: null },
    feeds: "",
    location: ""
} as DischargeData);

export function DischargeDataProvider({
    children,
    ...props
}: React.PropsWithChildren<DischargeData>) {
    return <DischargeDataContext.Provider value={props}>{children}</DischargeDataContext.Provider>;
}
