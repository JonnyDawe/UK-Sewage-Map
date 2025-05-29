import { LayerManagerContext, ManagedItem } from '../types';

/**
 * Cleans up references when removing a layer, ensuring parent-child
 * relationships are properly maintained.
 */
export function cleanupLayerReferences<T>(layer: ManagedItem<T>): void {
  const { parentRef } = layer.layerActor.getSnapshot().context;
  if (parentRef) {
    parentRef.send({ type: 'LAYERS.REMOVE_CHILD', id: layer.layerActor.id });
  }
}

/**
 * Updates the layer structure after removing a layer, maintaining
 * both the layer collection and ordering.
 */
export function getUpdatedLayerStructureAfterRemoval<T>(
  context: LayerManagerContext<T>,
  layerId: string,
): Partial<LayerManagerContext<T>> {
  return {
    layers: context.layers.filter((layer) => layer.layerActor.id !== layerId),
    childLayerOrder: context.childLayerOrder.filter((id) => id !== layerId),
  };
}
