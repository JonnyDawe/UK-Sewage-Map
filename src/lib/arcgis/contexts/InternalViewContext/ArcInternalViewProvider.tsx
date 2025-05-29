import { MapInternalContext } from './ArcInternalViewContext';

export const ArcInternalViewProvider = ({
  children,
  view,
}: React.PropsWithChildren<{ view: __esri.MapView | __esri.SceneView | undefined }>) => {
  return <MapInternalContext.Provider value={view}>{children}</MapInternalContext.Provider>;
};
