import styled from '@emotion/styled';
import { Box, ScrollArea, Text } from '@radix-ui/themes';
import Wave from 'react-wavify';

import { usePrefersReducedMotion } from '../../lib/hooks/usePrefersReducedMotion';
import Tabs from '../common/Tabs/Tabs';
import { Em } from '../common/Text';
import { DownstreamImpactProperties } from './types';

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

const ContentWrapper = styled(Box)`
  width: 100%;
  padding: 0px 4px;
  position: relative;
  overflow: hidden;
`;

const DataCardWrapper = styled.div`
  --shadow-color: var(--river-blue);
  --shadow-elevation-medium:
    0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.1),
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

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  gap: 8px;
`;

type DownstreamImpactPopupBodyProps = DownstreamImpactProperties;

export function DownstreamImpactPopupBody({
  number_upstream_CSOs,
  number_CSOs_per_km2,
  CSOs,
}: DownstreamImpactPopupBodyProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <BodyWrapper>
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
        <Tabs.Root defaultValue="summary" aria-label="Choose which information to see:">
          <Tabs.List>
            <Tabs.Trigger value="summary">Summary</Tabs.Trigger>
            <Tabs.Trigger value="spills">Upstream Spills</Tabs.Trigger>
          </Tabs.List>
          <Box pt={'3'}>
            <Tabs.Content value="summary">
              <DataCardWrapper>
                <StatRow>
                  <Text size="2">
                    <Em>Number of upstream spills:</Em>
                  </Text>
                  <Text size="3" weight="bold">
                    {number_upstream_CSOs}
                  </Text>
                </StatRow>
                <StatRow>
                  <Text size="2">
                    <Em>Number of upstream spills per km²:</Em>
                  </Text>
                  <Text size="3" weight="bold">
                    {parseFloat(number_CSOs_per_km2.toPrecision(3)).toString()}
                  </Text>
                </StatRow>
                <Text size="1" color="gray" mt="2" as="p">
                  Values include all spills that have occurred in the previous 48 hours
                </Text>
              </DataCardWrapper>
            </Tabs.Content>
            <Tabs.Content value="spills">
              <DataCardWrapper>
                <ScrollArea type="auto" scrollbars="vertical" style={{ maxHeight: 160 }}>
                  {CSOs.length > 0 ? (
                    <Text size="2" as="p">
                      {CSOs.join(', ')}
                    </Text>
                  ) : (
                    <Text size="2" color="gray" as="p">
                      No upstream spills recorded.
                    </Text>
                  )}
                </ScrollArea>
                <Text size="1" color="gray" mt="2" as="p">
                  These are the names/IDs of CSOs upstream of this point that have spilled in the
                  last 48 hours.
                </Text>
              </DataCardWrapper>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </ContentWrapper>
    </BodyWrapper>
  );
}
