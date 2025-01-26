import '@arcgis/map-components/dist/components/arcgis-map';

import { ArcgisMapCustomEvent } from '@arcgis/map-components';
import React, { JSX } from 'react';

import { ArcInternalViewProvider } from '../../contexts/InternalViewContext/ArcInternalViewProvider';
import { useCreateView } from '../../hooks/useCreateView';

export function ArcMapView({
  children,
  onarcgisViewReadyChange,
  ...props
}: JSX.IntrinsicElements['arcgis-map']) {
  const { view, onViewReady } = useCreateView(props.id);
  const containerRef = React.useRef<HTMLArcgisMapElement>(null);

  const arcgisViewReadyCb = React.useCallback(
    (ev: ArcgisMapCustomEvent<void>) => {
      if (ev.target !== containerRef.current) return;
      onViewReady(ev.target.view);
      onarcgisViewReadyChange?.(ev);
    },
    [onViewReady, onarcgisViewReadyChange],
  );

  return (
    <ArcInternalViewProvider view={view}>
      <arcgis-map ref={containerRef} {...props} onarcgisViewReadyChange={arcgisViewReadyCb}>
        {view && children}
      </arcgis-map>
    </ArcInternalViewProvider>
  );
}
