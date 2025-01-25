import '@arcgis/map-components/dist/components/arcgis-scene';

import { ArcgisSceneCustomEvent } from '@arcgis/map-components';
import React, { JSX } from 'react';

import { ArcInternalViewProvider } from '../../contexts/InternalViewContext/ArcInternalViewProvider';
import { useCreateView } from '../../hooks/useCreateView';

export function ArcSceneView({
  children,
  onarcgisViewReadyChange,
  ...props
}: JSX.IntrinsicElements['arcgis-scene']) {
  const { view, onViewReady } = useCreateView(props.id);
  const containerRef = React.useRef<HTMLArcgisSceneElement>(null);

  const arcgisViewReadyCb = React.useCallback(
    (ev: ArcgisSceneCustomEvent<void>) => {
      if (ev.target !== containerRef.current) return;
      onViewReady(ev.target.view);
      onarcgisViewReadyChange?.(ev);
    },
    [onViewReady, onarcgisViewReadyChange],
  );

  return (
    <ArcInternalViewProvider view={view}>
      <arcgis-scene
        ref={containerRef}
        {...props}
        onarcgisViewReadyChange={arcgisViewReadyCb}
        alphaCompositingEnabled={true}
      >
        {view && children}
      </arcgis-scene>
    </ArcInternalViewProvider>
  );
}
