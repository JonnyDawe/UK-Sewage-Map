export type AlertStatus = "Not Discharging" | "Recent Discharge" | "Discharging";

export type DischargeInterval = {
    start: number | null;
    end: number | null;
};

export type DischargeData = {
    alertStatus: AlertStatus;
    dischargeInterval: DischargeInterval;
    feeds: string;
    location: string;
};

export interface DischargeHistoricalDataJSON {
    LocationName: Record<string, string>;
    StartDateTime: Record<string, string>;
    StopDateTime: Record<string, string>;
}

export interface DischargeHistoricalData {
    locationName: string;
    discharges: {
        start: Date;
        end: Date;
    }[];
}

export enum DischargeHistoryPeriod {
    Last12Months,
    Last6Months,
    Last3Months,
    StartOf2023
}
