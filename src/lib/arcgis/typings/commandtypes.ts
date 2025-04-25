export interface ViewCommand {
  executeOnView: (view: __esri.MapView) => Promise<void> | void;
}

export interface MapCommand {
  executeOnMap: (map: __esri.Map) => Promise<ViewCommand | void>;
}
