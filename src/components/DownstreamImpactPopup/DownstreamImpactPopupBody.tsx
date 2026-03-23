import styled from '@emotion/styled';
import { Box, Heading, ScrollArea, Text } from '@radix-ui/themes';
import Wave from 'react-wavify';

import { usePrefersReducedMotion } from '../../lib/hooks/usePrefersReducedMotion';
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
`;

const CsoList = styled.ul`
  margin: 4px 0 0;
  padding-left: 16px;
  list-style-type: disc;
`;

const CsoListItem = styled.li`
  font-size: var(--font-size-2);
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
        <DataCardWrapper>
          <StatRow>
            <Text size="2">
              <Em>Upstream CSOs:</Em>
            </Text>
            <Text size="3" weight="bold">
              {number_upstream_CSOs}
            </Text>
          </StatRow>
          <StatRow>
            <Text size="2">
              <Em>CSOs per km²:</Em>
            </Text>
            <Text size="3" weight="bold">
              {parseFloat(number_CSOs_per_km2.toPrecision(3)).toString()}
            </Text>
          </StatRow>
        </DataCardWrapper>
        {CSOs.length > 0 && (
          <DataCardWrapper>
            <Heading size="2" mb="1">
              Upstream CSO sources
            </Heading>
            <ScrollArea type="auto" scrollbars="vertical" style={{ maxHeight: 160 }}>
              <CsoList>
                {CSOs.map((name, index) => (
                  <CsoListItem key={`${index}-${name}`}>{name}</CsoListItem>
                ))}
              </CsoList>
            </ScrollArea>
          </DataCardWrapper>
        )}
      </ContentWrapper>
    </BodyWrapper>
  );
}
