import {
  LayerConfig,
  LayerGroupConfig,
  LayerGroupContext,
  LayerGroupMachineActor,
  LayerManagerContext,
  ManagedItem,
} from '../types';

/**
 * Validates a layer configuration against the current context and nesting rules.
 * Checks for duplicate layer IDs and enforces group nesting restrictions.
 */
export function isValidLayerConfig<T>(
  layerConfig: LayerConfig<T> | LayerGroupConfig<T>,
  context: LayerManagerContext<T>,
  allowNestedGroupLayers: boolean,
): boolean {
  if (layerConfig.layerType === 'layerGroup' && layerConfig.parentId && !allowNestedGroupLayers) {
    console.warn('Nested group layers are not allowed.');
    return false;
  }

  if (context.layers.some((layer) => layer.layerActor.id === layerConfig.layerId)) {
    console.warn(`Layer with ID ${layerConfig.layerId} already exists. Layer not added.`);
    return false;
  }

  return true;
}

/**
 * Validates that a layer's parent reference exists if a parent ID is specified.
 * Ensures parent-child relationships are properly maintained.
 */
export function isValidParentRef<T>(
  layerConfig: LayerConfig<T> | LayerGroupConfig<T>,
  parentRef: LayerGroupMachineActor<T> | null,
): boolean {
  if (layerConfig.parentId && !parentRef) {
    console.warn('Unable to find valid parent layer. Layer not added.');
    return false;
  }
  return true;
}

/**
 * Validates if a given index is within the bounds of the layer order array.
 */
export function isValidLayerIndex(index: number, length: number): boolean {
  return index >= 0 && index <= length;
}

/**
 * Validates if a layer can be safely removed from the hierarchy.
 * Prevents removal of group layers that still contain children.
 */
export function canRemoveLayer<T>(layer: ManagedItem<T>): boolean {
  if (!layer) {
    console.warn('Unable to find layer to remove.');
    return false;
  }

  const { layerType } = layer.layerActor.getSnapshot().context;
  if (layerType === 'layerGroup') {
    const { children } = layer.layerActor.getSnapshot().context as LayerGroupContext<T>;
    if (children.length > 0) {
      console.warn('Layer group has children. Not removed.');
      return false;
    }
  }
  return true;
}
