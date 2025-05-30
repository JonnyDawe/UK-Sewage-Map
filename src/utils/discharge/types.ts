export type AlertStatus = 'Not Discharging' | 'Recent Discharge' | 'Discharging' | 'Offline';

export type DischargeInterval = {
  start: number | null;
  end: number | null;
};

export type DischargeDateInterval = {
  start: Date;
  end: Date;
};

export type DischargeData = {
  company: string | null;
  id: string | null;
  alertStatus: AlertStatus;
  dischargeInterval: DischargeInterval;
  feeds: string | null;
  location: string | null;
};

export interface DischargeHistoricalDataJSON {
  LocationName: Record<string, string>;
  PermitNumber: Record<string, string>;
  ReceivingWaterCourse: Record<string, string>;
  StartDateTime: Record<string, string>;
  StopDateTime: Record<string, string>;
}

export interface DischargeHistoricalData {
  locationName: string;
  permitNumber: string;
  receivingWaterCourse: string;
  discharges: DischargeDateInterval[];
}

export enum DischargeHistoryPeriod {
  Last12Months,
  Last6Months,
  Last3Months,
  StartOf2023,
  StartOf2024,
  StartOf2025,
}
