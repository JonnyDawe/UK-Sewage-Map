import { AlertStatus, DischargeInterval } from '../../../utils/discharge/types';
import { DischargeDate } from './DischargeDate';
import { DischargeInfo } from './DischargeInfo';

export function DischargeInfoCard({
  alertStatus,
  dischargeInterval,
}: {
  alertStatus: AlertStatus;
  dischargeInterval: DischargeInterval;
}) {
  return (
    <>
      <DischargeDate
        alertStatus={alertStatus}
        dischargeInterval={dischargeInterval}
      ></DischargeDate>
      <DischargeInfo
        alertStatus={alertStatus}
        dischargeInterval={dischargeInterval}
      ></DischargeInfo>
    </>
  );
}
