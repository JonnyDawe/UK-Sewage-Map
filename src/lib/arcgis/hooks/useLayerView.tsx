import React from 'react';

export function useLayerView<Layer extends __esri.Layer, LayerView extends __esri.LayerView>(
  mapView: __esri.View | undefined,
  layer: Layer,
  removeLayerOnUnmount = false,
): { layer: Layer; layerView: LayerView | undefined } {
  const [layerView, setLayerView] = React.useState<LayerView | undefined>(undefined);

  React.useEffect(() => {
    if (!mapView) return;

    // Only add the layer if it's not already in the map
    const isLayerInMap = mapView.map.layers.includes(layer);

    if (isLayerInMap) {
      mapView.whenLayerView(layer).then((layerView) => {
        setLayerView(layerView as LayerView);
      });
    } else {
      layer.on('layerview-create', (event) => {
        setLayerView(event.layerView as LayerView);
      });

      mapView.map.add(layer);
    }

    return () => {
      if (removeLayerOnUnmount) {
        mapView.map.remove(layer);
      }
    };
  }, [mapView, layer, removeLayerOnUnmount]);

  return { layer, layerView };
}
