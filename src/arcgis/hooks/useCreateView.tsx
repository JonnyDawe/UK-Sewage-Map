import { useCallback, useContext, useEffect, useId, useState } from 'react';

import { ArcViewContext } from '../contexts/ArcViewContext/ArcViewContext';

export function useCreateView(id?: string) {
  const [view, setView] = useState<__esri.MapView | __esri.SceneView>();

  const internalId = useId();
  const mapId = id ?? internalId;

  const mountedViewsContext = useContext(ArcViewContext);
  const { onViewMount, onViewUnmount } = mountedViewsContext ?? {};

  const onViewReady = useCallback(
    (view: __esri.MapView | __esri.SceneView) => {
      setView(view);
      onViewMount?.(view, mapId);
    },
    [mapId, onViewMount],
  );

  useEffect(
    () => () => {
      onViewUnmount?.(mapId);
    },
    [mapId, onViewUnmount],
  );

  return { view, mapId, onViewReady };
}
