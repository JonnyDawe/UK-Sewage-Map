import styled from '@emotion/styled';
import { IconButton as PrimitiveIconButton, Tooltip } from '@radix-ui/themes';
import React from 'react';

const IconButton = styled(PrimitiveIconButton)`
  box-shadow: var(--shadow-2);
  pointer-events: all;
`;

const MapButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof PrimitiveIconButton> & {
    'aria-label': string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  }
>(function MapButton({ children, tooltipPosition = 'bottom', ...delegated }, ref) {
  return (
    <Tooltip content={delegated['aria-label']} side={tooltipPosition} delayDuration={700}>
      <IconButton size={'2'} radius="small" {...delegated} ref={ref}>
        {children}
      </IconButton>
    </Tooltip>
  );
});

export default MapButton;
