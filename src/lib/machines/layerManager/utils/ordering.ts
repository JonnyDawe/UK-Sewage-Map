import { ChildLayerActor, ManagedItem } from '../types';
import { isValidLayerIndex } from './validation';

/**
 * Creates a flattened order of all layers in the hierarchy, including
 * nested layers within groups. Used for rendering and z-index management.
 */
export function getFlatLayerOrder<T>(
  layers: ManagedItem<T>[],
  topLevelLayerOrder: string[],
): string[] {
  const flatOrder: string[] = [];

  const traverseLayers = (layerIds: string[]) => {
    layerIds.forEach((layerId) => {
      const layer = layers.find((l) => l.layerActor.id === layerId);
      if (!layer) return;

      flatOrder.push(layerId);

      const snapshot = layer.layerActor.getSnapshot();
      if (snapshot.context.layerType === 'layerGroup') {
        const groupContext = snapshot.context;
        traverseLayers(groupContext.childLayerOrder);
      }
    });
  };

  traverseLayers(topLevelLayerOrder);
  return flatOrder;
}

/**
 * Updates the layer order when adding or moving layers. Handles positioning
 * at specific indices or at the top/bottom of the stack.
 */
export function updateLayerOrder(
  currentOrder: string[],
  newLayerId: string,
  index?: number,
  position?: 'top' | 'bottom',
): string[] {
  const newOrder = [...currentOrder];
  if (index !== undefined && isValidLayerIndex(index, currentOrder.length)) {
    // insert the new layer after the index
    newOrder.splice(index, 0, newLayerId);
  } else if (position === 'top') {
    // top layer goes at the end of the array
    newOrder.push(newLayerId);
  } else {
    // bottom layer goes at the beginning of the array
    newOrder.unshift(newLayerId);
  }
  return newOrder;
}

/**
 * Retrieves top-level layers in their specified order, filtering out
 * any invalid or missing layer references.
 */
export function getTopLevelLayersInOrder<T>(
  layerOrder: string[],
  layers: ManagedItem<T>[],
): ManagedItem<T>[] {
  return layerOrder
    .map((layerId) => layers.find((l) => l.layerActor.id === layerId))
    .filter((layer): layer is ManagedItem<T> => layer !== undefined);
}

/**
 * Retrieves child layers of a group in their specified order, filtering out
 * any invalid or missing layer references.
 */
export function getLayerGroupChildrenInOrder(
  childLayerOrder: string[],
  layers: ChildLayerActor[],
): ChildLayerActor[] {
  return childLayerOrder
    .map((layerId) => layers.find((l) => l.id === layerId))
    .filter((layer): layer is ChildLayerActor => layer !== undefined);
}
