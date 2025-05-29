import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai';

import { currentMapTool } from '@/lib/atoms';

import MapButton from '../../../common/Buttons/MapButton';
import Popover from '../../../common/Popover/Popover';
import SvgIcon from '../../../common/SvgIcon/SvgIcon';
import { AppTheme } from '../../../Theme/AppTheme';
import { LayerListFilter } from './LayerListFilter';

const LayerFilterPopover = () => {
  const [activeMapTool, setActiveMapTool] = useAtom(currentMapTool);

  return (
    <Popover.Root
      open={activeMapTool === 'layer-filter'}
      onOpenChange={(open) => {
        if (open) {
          setActiveMapTool('layer-filter');
        } else {
          setActiveMapTool(undefined);
        }
      }}
    >
      <Popover.Trigger asChild>
        <MapButton aria-label="Layer Filter" tooltipPosition="right">
          <SvgIcon name="icon-layer-filter" size={20}></SvgIcon>
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
            <Flex direction={'column'} gap={'4'} width={'260px'}>
              <Box>
                <Heading as="h3" size={'4'} mb={'2'}>
                  Layer Filter
                </Heading>
                <Text size={'3'}>Select the layers you want to see on the map.</Text>
              </Box>
              <LayerListFilter />
            </Flex>
            <Popover.CloseCornerButton aria-label="Close">
              <SvgIcon name="icon-x" size={24}></SvgIcon>
            </Popover.CloseCornerButton>
            <Popover.Arrow />
          </Popover.Content>
        </AppTheme>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default LayerFilterPopover;
