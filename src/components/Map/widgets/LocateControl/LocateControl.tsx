import LocateVM from '@arcgis/core/widgets/Locate/LocateViewModel';
import * as React from 'react';

import MapButton from '@/components/common/Buttons/MapButton';
import { ErrorTooltip } from '@/components/common/ErrorTooltip';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import { useArcState, useCurrentMapView } from '@/lib/arcgis/hooks';

function LocateControl() {
  const mapView = useCurrentMapView();
  const widget = React.useMemo(() => new LocateVM({ view: mapView }), [mapView]);
  const [state] = useArcState(widget, 'state');
  const [locateError, setLocateError] = React.useState<Error | null>(null);

  const handleLocate = React.useCallback(async () => {
    try {
      setLocateError(null);
      await widget.locate();
    } catch (error) {
      console.error(error);
      setLocateError(new Error('Unable to find location'));
    }
  }, [widget]);

  return (
    <ErrorTooltip error={locateError} position="bottom">
      <MapButton
        aria-label="Locate"
        onClick={handleLocate}
        variant="solid"
        radius="small"
        disabled={state === 'disabled'}
        loading={state === 'locating'}
        tooltipPosition="right"
      >
        <SvgIcon name="icon-current-location" size={24}></SvgIcon>
      </MapButton>
    </ErrorTooltip>
  );
}

export default LocateControl;
