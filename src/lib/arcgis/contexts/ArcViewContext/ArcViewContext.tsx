import React from 'react';

type MountedViewsContextValue = {
  views: { [id: string]: __esri.MapView | __esri.SceneView | undefined };
  onViewMount: (map: __esri.MapView | __esri.SceneView, id: string) => void;
  onViewUnmount: (id: string) => void;
};

export const ArcViewContext = React.createContext<MountedViewsContextValue | undefined>(undefined);
