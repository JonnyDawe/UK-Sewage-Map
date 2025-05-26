import { ManagedItem } from '../types';

/**
 * Finds a layer by its ID within the layer collection.
 */
export function findLayerById<T>(layers: ManagedItem<T>[], layerId: string) {
  return layers.find((layer) => layer.layerActor.id === layerId);
}

/**
 * Retrieves the layer data associated with a specific layer ID.
 * Returns undefined if the layer is not found.
 */
export function getLayerDataFromLayerId<T>(
  layers: ManagedItem<T>[],
  layerId: string,
): T | undefined {
  const layer = findLayerById(layers, layerId);
  if (!layer) {
    return undefined;
  }
  return layer.layerActor.getSnapshot().context.layerData;
}
