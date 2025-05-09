import { Flex, Heading } from '@radix-ui/themes';

import { useCurrentMapView } from '@/lib/arcgis/hooks';

import MapButton from '../common/Buttons/MapButton';
import Popover from '../common/Popover/Popover';
import SvgIcon from '../common/SvgIcon/SvgIcon';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { AppTheme } from '../Theme/AppTheme';
import RainRadar from './RainRadar';
const RainRadarPopover = () => {
  const view = useCurrentMapView();

  return (
    <ErrorBoundary>
      <Popover.Root>
        <Popover.Trigger asChild>
          <MapButton aria-label="Rainfall data" tooltipPosition="left">
            <SvgIcon name="icon-rain" size={24}></SvgIcon>
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
              <Flex direction={'column'} gap={'2'}>
                <Heading as="h3" size={'3'}>
                  🌧️ Rainfall Radar
                </Heading>
                <RainRadar
                  view={view}
                  opacity={0.3}
                  colorScheme="2"
                  playOnLoad={false}
                  playSpeed={1}
                  relativeTime={false}
                ></RainRadar>
              </Flex>
              <Popover.CloseCornerButton aria-label="Close">
                <SvgIcon name="icon-x" size={24}></SvgIcon>
              </Popover.CloseCornerButton>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </AppTheme>
        </Popover.Portal>
      </Popover.Root>
    </ErrorBoundary>
  );
};

export default RainRadarPopover;
