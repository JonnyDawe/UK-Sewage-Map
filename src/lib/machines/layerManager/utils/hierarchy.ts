import {
  LayerConfig,
  LayerGroupConfig,
  LayerGroupMachineActor,
  LayerManagerContext,
  ManagedItem,
  ParentLayerActor,
} from '../types';
import { isLayerGroupMachine } from '../types';
import { updateLayerOrder } from './ordering';
import { findLayerById } from './search';

/**
 * Locates a parent layer group actor by its ID within the layer hierarchy.
 * Returns null if no matching parent is found or if the found layer is not a group.
 */
export function findParentLayerGroupActor<T>(
  layers: ManagedItem<T>[],
  parentId: string,
): LayerGroupMachineActor<T> | null {
  const layer = findLayerById(layers, parentId);

  if (!layer || !isLayerGroupMachine(layer.layerActor)) {
    return null;
  }

  return layer.layerActor;
}

/**
 * Retrieves the parent actor for a layer based on its configuration.
 * Returns null if no parent is specified or found.
 */
export function findParentActor<T>(
  layers: ManagedItem<T>[],
  layerConfig: LayerConfig<T> | LayerGroupConfig<T>,
): LayerGroupMachineActor<T> | null {
  return layerConfig.parentId ? findParentLayerGroupActor(layers, layerConfig.parentId) : null;
}

/**
 * Updates the layer structure when adding a new layer, handling both
 * parent-child relationships and layer ordering.
 */
export function getUpdatedLayerStructure<T>(
  context: LayerManagerContext<T>,
  newManagedLayer: ManagedItem<T>,
  parentRef: LayerGroupMachineActor<T> | null,
  index?: number,
  position?: 'top' | 'bottom',
): Partial<LayerManagerContext<T>> {
  return parentRef
    ? addLayerToParent(context.layers, newManagedLayer, parentRef, index, position)
    : addLayerToTopLevel(context.layers, newManagedLayer, context.childLayerOrder, index, position);
}

/**
 * Adds a layer to a parent group, updating the parent's child references
 * and maintaining the layer hierarchy.
 */
export function addLayerToParent<T>(
  layers: ManagedItem<T>[],
  newLayer: ManagedItem<T>,
  parentRef: ParentLayerActor,
  index?: number,
  position?: 'top' | 'bottom',
): Partial<LayerManagerContext<T>> {
  parentRef.send({ type: 'LAYERS.ADD_CHILD', child: newLayer.layerActor, index, position });
  return {
    layers: [...layers, newLayer],
  };
}

/**
 * Adds a layer to the top level of the hierarchy, updating the global
 * layer order and maintaining proper stacking.
 */
export function addLayerToTopLevel<T>(
  layers: ManagedItem<T>[],
  newLayer: ManagedItem<T>,
  childLayerOrder: string[],
  index?: number,
  position?: 'top' | 'bottom',
): Partial<LayerManagerContext<T>> {
  const newLayerOrder = updateLayerOrder(childLayerOrder, newLayer.layerActor.id, index, position);
  return {
    layers: [...layers, newLayer],
    childLayerOrder: newLayerOrder,
  };
}
