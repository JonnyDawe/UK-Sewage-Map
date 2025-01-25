import styled from '@emotion/styled';
import { Box } from '@radix-ui/themes';
import Wave from 'react-wavify';

import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import { AlertStatus, DischargeInterval } from '../../../utils/discharge/types';
import Tabs from '../../common/Tabs/Tabs';
import { DischargeInfoCard } from '../DischargeInfoCard/DischargeInfoCard';
import HistoricDischarges from '../DischargeTimeline/DischargeTimeline';

const ContentWrapper = styled(Box)`
  width: 100%;
  padding: 0px 4px;
  position: relative;
  overflow: hidden;
`;

const BodyWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const BackgroundWave = styled(Wave)`
  position: absolute;
  max-width: unset;
  min-width: 100%;
  height: 400px;
  top: -24px;
`;

const DataCardWrapper = styled.div`
  --shadow-color: var(--river-blue);
  --shadow-elevation-medium: 0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.1),
    0.5px 1px 1.2px -0.8px hsl(var(--shadow-color) / 0.09),
    1.2px 2.5px 3.1px -1.7px hsl(var(--shadow-color) / 0.09),
    3px 6px 7.5px -2.5px hsl(var(--shadow-color) / 0.09);
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: var(--shadow-elevation-medium);
  border: var(--river-blue) solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-panel);

  position: relative;
  min-height: 50px;
`;

const ActiveDischargeContent = styled.div`
  display: flex;
  gap: 8px;
`;

type DischargeMainContentType = {
  alertStatus: AlertStatus;
  dischargeInterval: DischargeInterval;
  company: string;
  locationName: string;
};

export function PopUpBody({
  alertStatus,
  dischargeInterval,
  company,
  locationName,
}: DischargeMainContentType) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <BodyWrapper>
      {alertStatus != 'Not Discharging' && (
        <BackgroundWave
          fill="var(--wave-brown)"
          paused={prefersReducedMotion}
          options={{
            height: 30,
            amplitude: 20,
            speed: 0.1,
            points: 6,
          }}
        />
      )}

      <BackgroundWave
        fill="var(--wave-blue)"
        paused={prefersReducedMotion}
        options={{
          height: 25,
          amplitude: 15,
          speed: 0.175,
          points: 5,
        }}
      />
      <ContentWrapper>
        <Tabs.Root defaultValue="latest" aria-label="Choose which information to see:">
          <Tabs.List>
            <Tabs.Trigger value="latest">Latest</Tabs.Trigger>
            <Tabs.Trigger value="history">History</Tabs.Trigger>
          </Tabs.List>
          <Box pt={'3'}>
            <Tabs.Content value="latest">
              <DataCardWrapper>
                <ActiveDischargeContent>
                  <DischargeInfoCard
                    dischargeInterval={dischargeInterval}
                    alertStatus={alertStatus}
                  ></DischargeInfoCard>
                </ActiveDischargeContent>
              </DataCardWrapper>
            </Tabs.Content>
            <Tabs.Content value="history">
              <DataCardWrapper>
                <HistoricDischarges company={company} locationName={locationName} />
              </DataCardWrapper>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </ContentWrapper>
    </BodyWrapper>
  );
}
