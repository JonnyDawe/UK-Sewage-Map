import { LayerActor, LayerVisibility, ManagedItem } from '../types';

/**
 * Returns an array of visible layers in the hierarchy, including their
 * parent-child relationships.
 */
export function getVisibleLayers<T>(layers: ManagedItem<T>[]): LayerVisibility[] {
  const visibleLayers: LayerVisibility[] = [];

  layers.forEach((layer) => {
    const layerActor = layer.layerActor;
    const snapshot = layerActor.getSnapshot();

    if (isLayerVisible(layerActor)) {
      visibleLayers.push({
        id: layerActor.id,
        ...(snapshot.context.parentRef?.id && {
          parentId: snapshot.context.parentRef?.id,
        }),
      });
    }
  });

  return visibleLayers;
}

/**
 * Determines if a layer is currently visible based on its state.
 */
export function isLayerVisible(actor: LayerActor) {
  const snapshot = actor.getSnapshot();
  return snapshot.matches({ enabled: 'visible' });
}

/**
 * Counts the number of enabled child layers within a group.
 */
export function countEnabledChildren(children: LayerActor[]) {
  return children.filter((child) => child.getSnapshot().matches('enabled')).length;
}
