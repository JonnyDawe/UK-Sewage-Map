import ZoomVM from '@arcgis/core/widgets/Zoom/ZoomViewModel';
import styled from '@emotion/styled';
import { Flex, IconButton, Separator } from '@radix-ui/themes';
import * as React from 'react';

import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import { useArcState, useCurrentMapView } from '@/lib/arcgis/hooks';

const ZoomButton = styled(IconButton)`
  --accent-9: var(--gray-2);
  --accent-10: var(--gray-3);
  --accent-contrast: var(--gray-12);
`;

const ZoomButtonContainer = styled(Flex)`
  background-color: var(--gray-3);
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-1);

  // first child
  & > *:first-of-type {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  // last child
  & > *:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

function ZoomControl() {
  const mapView = useCurrentMapView();
  const widget = React.useMemo(() => new ZoomVM({ view: mapView }), [mapView]);

  const [canZoomIn] = useArcState(widget, 'canZoomIn');
  const [canZoomOut] = useArcState(widget, 'canZoomOut');
  return (
    <ZoomButtonContainer direction={'column'} gap={'0'}>
      <ZoomButton
        aria-label="Zoom In"
        disabled={!canZoomIn}
        onClick={() => widget.zoomIn()}
        variant="solid"
        radius="small"
      >
        <SvgIcon name="icon-plus" size={16}></SvgIcon>
      </ZoomButton>
      <Separator color="gray" orientation="horizontal" size="4" />
      <ZoomButton
        aria-label="Zoom Out"
        disabled={!canZoomOut}
        onClick={() => widget.zoomOut()}
        variant="solid"
        radius="small"
      >
        <SvgIcon name="icon-minus" size={16}></SvgIcon>
      </ZoomButton>
    </ZoomButtonContainer>
  );
}

export default ZoomControl;
