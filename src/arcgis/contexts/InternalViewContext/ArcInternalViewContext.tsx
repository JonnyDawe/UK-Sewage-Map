import React from 'react';

export const MapInternalContext = React.createContext<
  __esri.MapView | __esri.SceneView | undefined
>(undefined);
