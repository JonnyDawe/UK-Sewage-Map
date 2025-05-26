import { Flex, Heading } from '@radix-ui/themes';

import MapButton from '../../../common/Buttons/MapButton';
import Popover from '../../../common/Popover/Popover';
import SvgIcon from '../../../common/SvgIcon/SvgIcon';
import { AppTheme } from '../../../Theme/AppTheme';
import { LayerListFilter } from './LayerListFilterV2';

const LayerFilterPopover = () => {
  return (
    <Popover.Root>
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
            <Flex direction={'column'} gap={'4'} width={'240px'}>
              <Heading as="h3" size={'4'}>
                Layer Filter
              </Heading>
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
