import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import React from 'react';

import { useCurrentMapView } from './useViewContext';

export function useHasActiveMapTool() {
  const currentMapView = useCurrentMapView();
  const [hasActiveTool, setHasActiveTool] = React.useState(false);

  React.useEffect(() => {
    if (!currentMapView) return;
    const handle = reactiveUtils.watch(
      // @ts-expect-error - activeTool is a private property
      () => !!currentMapView.activeTool,
      (val) => setHasActiveTool(val),
      { initial: true },
    );
    return () => handle.remove();
  }, [currentMapView]);

  return hasActiveTool;
}
