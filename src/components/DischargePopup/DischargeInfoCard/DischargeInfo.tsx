import { Box, Flex, Separator, Text } from '@radix-ui/themes';

import useUTCTime from '@/lib/hooks/useUTCTime';

import { formatDate, getFormattedTimeInterval } from '../../../utils/discharge/discharge.utils';
import { AlertStatus, DischargeInterval } from '../../../utils/discharge/types';
import PulsatingBadge from '../../ActiveBadge/ActiveBadge';

function getDischargeDescriptionFromAlert(alertStatus: AlertStatus, dischargeStart: number | null) {
  switch (alertStatus) {
    case 'Discharging':
      return 'Discharging Now 🤮';
    case 'Recent Discharge':
      return 'Discharge in last 48 hours 🤢';
    case 'Not Discharging':
      return dischargeStart
        ? 'Historic Discharge Event 🤕'
        : 'No Recorded Discharge since 1st April 2022';
    case 'Offline':
      return 'Data Unavailable 🤔';
  }
}

function DateText({ dateNumber, label }: { dateNumber: number; label: string }) {
  return (
    <Box>
      <Text as="p" size={'2'}>
        {label}
      </Text>
      <Text as="p" size={'1'}>
        {formatDate(dateNumber, 'full')}
      </Text>
    </Box>
  );
}

function DateRange({ dischargeInterval }: { dischargeInterval: DischargeInterval }) {
  if (!dischargeInterval?.start) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <DateText dateNumber={dischargeInterval.start} label={'Started:'}></DateText>

      <Separator
        decorative
        orientation="vertical"
        size={'2'}
        style={{
          ...(dischargeInterval.end ? {} : { backgroundColor: 'unset' }),
        }}
      />
      {dischargeInterval.end ? (
        <DateText dateNumber={dischargeInterval.end} label={'Ended:'}></DateText>
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
  const currentUTCTime = useUTCTime();

  return (
    <Flex direction={'column'} justify={'center'} gap={'1'} flexGrow={'1'} pr="2">
      <Text as="p" size="3">
        {getDischargeDescriptionFromAlert(alertStatus, dischargeInterval.start)}
      </Text>
      {alertStatus === 'Offline' && (
        <Text as="p" size={'2'}>
          This monitoring station is currently showing as offline...
        </Text>
      )}
      {dischargeInterval.start != null && (
        <>
          <DateRange dischargeInterval={dischargeInterval}></DateRange>
          <Text as="p" size={'2'}>
            Duration:{' '}
            {dischargeInterval.end
              ? getFormattedTimeInterval(dischargeInterval.start, dischargeInterval.end)
              : getFormattedTimeInterval(
                  dischargeInterval.start,
                  currentUTCTime.toDate().getTime(),
                  true,
                )}
          </Text>
        </>
      )}
    </Flex>
  );
}
