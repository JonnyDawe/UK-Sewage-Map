import styled from '@emotion/styled';
import { Flex, Heading, Text } from '@radix-ui/themes';

import MapButton from '../../../common/Buttons/MapButton';
import Popover from '../../../common/Popover/Popover';
import SvgIcon from '../../../common/SvgIcon/SvgIcon';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';
import { AppTheme } from '../../../Theme/AppTheme';

const LegendIcon = styled.img`
  width: 24px;
  height: 24px;
`;

function LegendItem({ icon, label }: { icon: string; label: string }) {
  return (
    <Flex direction={'row'} gap={'2'} align={'center'}>
      <LegendIcon src={icon} alt={label} />
      <Text>{label}</Text>
    </Flex>
  );
}
const LegendPopover = () => {
  return (
    <ErrorBoundary>
      <Popover.Root>
        <Popover.Trigger asChild>
          <MapButton aria-label="Legend" tooltipPosition="right">
            <SvgIcon name="icon-legend" size={20}></SvgIcon>
          </MapButton>
        </Popover.Trigger>
        <Popover.Portal>
          <AppTheme>
            <Popover.Content
              className="PopoverContent"
              sideOffset={5}
              collisionPadding={{ top: 16 }}
              side={'left'}
              onInteractOutside={(ev) => {
                ev.preventDefault();
              }}
            >
              <Flex direction={'column'} gap={'4'}>
                <Heading as="h3" size={'4'}>
                  Legend
                </Heading>
                <Flex direction={'column'} gap={'2'}>
                  <LegendItem icon={'images/poo.png'} label="Discharging" />
                  <LegendItem icon={'images/error-warning-fill.png'} label="Recent Discharge" />
                  <LegendItem icon={'images/shield-check-fill.png'} label="Not Discharging" />
                  <LegendItem icon={'images/unknown-source.png'} label="Offline" />
                </Flex>
              </Flex>
              <Popover.CloseCornerButton aria-label="Close">
                <SvgIcon name="icon-x" size={24}></SvgIcon>
              </Popover.CloseCornerButton>
              <Popover.Arrow />
            </Popover.Content>
          </AppTheme>
        </Popover.Portal>
      </Popover.Root>
    </ErrorBoundary>
  );
};

export default LegendPopover;
