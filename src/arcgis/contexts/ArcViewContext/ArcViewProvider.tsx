import type MapView from '@arcgis/core/views/MapView';
import type SceneView from '@arcgis/core/views/SceneView';
import { useCallback, useState } from 'react';

import { ArcViewContext } from './ArcViewContext';

export const ArcViewProvider = ({ children }: React.PropsWithChildren) => {
  const [views, setViews] = useState<{
    [id: string]: MapView | SceneView | undefined;
  }>({});

  const onViewMount = useCallback((view: MapView | SceneView, id: string) => {
    setViews((currViews) => {
      if (id === 'current') {
        throw new Error("'current' cannot be used as map id");
      }
      return { ...currViews, [id]: view };
    });
  }, []);

  const onViewUnmount = useCallback((id: string) => {
    setViews((currViews) => {
      if (currViews[id]) {
        const nextViews = { ...currViews };
        nextViews[id] = undefined;
        return nextViews;
      }
      return currViews;
    });
  }, []);

  return (
    <ArcViewContext.Provider
      value={{
        views,
        onViewMount,
        onViewUnmount,
      }}
    >
      {children}
    </ArcViewContext.Provider>
  );
};
