import styled from '@emotion/styled';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import React from 'react';

import { ERRORICON, GREENTICKICON, POOICON, UNKNOWNICON } from '@/constants/hostedImages';
import useIsMobile from '@/lib/hooks/useIsMobile';

import { legendOpen } from '../../../../lib/atoms';
import MapButton from '../../../common/Buttons/MapButton';
import Popover from '../../../common/Popover/Popover';
import SvgIcon from '../../../common/SvgIcon/SvgIcon';
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

const useLegendDefaultOpen = (isMobile: boolean | undefined, isLegendOpen: boolean) => {
  return React.useMemo(() => {
    if (isMobile === undefined) {
      return undefined;
    }
    return isMobile ? false : isLegendOpen;
  }, [isMobile, isLegendOpen]);
};

const LegendPopover = () => {
  const [isLegendOpen, setIsLegendOpen] = useAtom(legendOpen);
  const isMobile = useIsMobile();
  const defaultOpen = useLegendDefaultOpen(isMobile, isLegendOpen);

  if (isMobile === undefined) {
    return null;
  }
  return (
    <Popover.Root defaultOpen={defaultOpen} onOpenChange={setIsLegendOpen}>
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
            side={'right'}
            onInteractOutside={(ev) => {
              ev.preventDefault();
            }}
          >
            <Flex direction={'column'} gap={'4'}>
              <Heading as="h3" size={'4'}>
                Legend
              </Heading>
              <Flex direction={'column'} gap={'2'}>
                <LegendItem icon={POOICON} label="Discharging" />
                <LegendItem icon={ERRORICON} label="Recent Discharge" />
                <LegendItem icon={GREENTICKICON} label="Not Discharging" />
                <LegendItem icon={UNKNOWNICON} label="Offline" />
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
  );
};

export default LegendPopover;
