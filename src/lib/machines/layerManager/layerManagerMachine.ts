/**
 * This state machine manages a hierarchical layer structure, supporting both individual layers
 * and layer groups. It handles layer visibility, ordering, and state management while maintaining
 * parent-child relationships between layers.
 */

import { ActorRefFrom, assign, emit, enqueueActions, setup, stopChild } from 'xstate';

import { layerGroupMachine } from './layers/layerGroupMachine';
import { layerMachine } from './layers/layerMachine';
import {
  AddLayerParams,
  LayerManagerContext,
  LayerManagerEmittedEvent,
  LayerManagerEvent,
  ManagedItem,
} from './types';
import {
  canRemoveLayer,
  cleanupLayerReferences,
  findLayerById,
  findParentActor,
  getFlatLayerOrder,
  getUpdatedLayerStructure,
  getUpdatedLayerStructureAfterRemoval,
  isLayerVisible,
  isValidLayerConfig,
  isValidParentRef,
} from './utils';

export type LayerManagerActor<T> = ActorRefFrom<ReturnType<typeof createLayerManagerMachine<T>>>;

export function createLayerManagerMachine<T>() {
  return setup({
    types: {
      context: {} as LayerManagerContext<T>,
      events: {} as LayerManagerEvent<T>,
      emitted: {} as LayerManagerEmittedEvent<T>,
      input: {} as {
        /**
         * Controls whether layer groups can contain other layer groups.
         * When false, layer groups can only contain individual layers.
         */
        allowNestedGroupLayers: boolean;
      },
    },
    actors: {
      /**
       * Spawned for individual layer management. Each layer maintains its own
       * visibility, opacity, and data state.
       */
      layerMachine: layerMachine<T>(),
      /**
       * Spawned for group layer management. Groups can contain both individual
       * layers and other groups (if allowNestedGroupLayers is true).
       */
      layerGroupMachine: layerGroupMachine<T>(),
    },

    guards: {
      'validate new layer configuration': ({ context }, params: AddLayerParams<T>) => {
        return isValidLayerConfig(params.layerConfig, context, context.allowNestedGroupLayers);
      },
    },

    actions: {
      /**
       * Handles the creation and initialization of new layers or layer groups.
       * The action:
       * 1. Validates the layer configuration
       * 2. Finds the appropriate parent reference
       * 3. Spawns the correct actor type (layer or group)
       * 4. Updates the layer structure maintaining parent-child relationships
       * 5. Emits a layer added event
       */
      'Add new layer': enqueueActions(
        ({ enqueue, check, context, self }, params: AddLayerParams<T>) => {
          const { layerConfig, index, position, visible } = params;
          let computedVisible = false;

          // @ts-expect-error - https://github.com/statelyai/xstate/issues/4820
          if (!check({ type: 'validate new layer configuration', params })) {
            return;
          }

          const parentRef = findParentActor(context.layers, layerConfig);
          if (!isValidParentRef(layerConfig, parentRef)) {
            return;
          }

          enqueue.assign(({ spawn }) => {
            let newManagedLayer: ManagedItem<T>;
            if (layerConfig.layerType === 'layerGroup') {
              const newLayer = spawn('layerGroupMachine', {
                id: layerConfig.layerId,
                input: {
                  layerManagerRef: self,
                  parentRef,
                  ...layerConfig,
                },
              });
              newManagedLayer = {
                type: 'layerGroup',
                layerActor: newLayer,
              };
            } else {
              const newLayer = spawn('layerMachine', {
                id: layerConfig.layerId,
                input: {
                  layerManagerRef: self,
                  parentRef,
                  ...layerConfig,
                },
              });
              newManagedLayer = {
                type: 'layer',
                layerActor: newLayer,
              };
            }

            if (visible === 'inherit') {
              if (parentRef) {
                const parentVisible = isLayerVisible(parentRef);
                computedVisible = parentVisible;
              }
            }
            if (visible) {
              newManagedLayer.layerActor.send({ type: 'LAYER.ENABLED' });
              computedVisible = true;
            }

            return getUpdatedLayerStructure(context, newManagedLayer, parentRef, index, position);
          });

          enqueue.emit(({ context }) => ({
            type: 'LAYER.ADDED',
            layerId: layerConfig.layerId,
            visible: computedVisible,
            layerActor: findLayerById(context.layers, layerConfig.layerId)!.layerActor,
          }));
        },
      ),

      /**
       * Handles layer removal, including:
       * 1. Validation of removal possibility
       * 2. Cleanup of layer references
       * 3. Stopping the layer actor
       * 4. Updating the layer structure
       * 5. Emitting removal and order change events
       */
      'Remove layer': enqueueActions(({ enqueue, context }, params: { layerId: string }) => {
        const { layerId } = params;

        const layerToRemove = findLayerById(context.layers, layerId);

        if (!layerToRemove || !canRemoveLayer(layerToRemove)) {
          return;
        }
        cleanupLayerReferences(layerToRemove);
        enqueue.stopChild(layerId);
        enqueue.assign(() => {
          return getUpdatedLayerStructureAfterRemoval(context, layerId);
        });
        enqueue.emit({ type: 'LAYER.REMOVED', layerId });
        enqueue.emit({
          type: 'LAYER.ORDER_CHANGED',
          layerOrder: getFlatLayerOrder(context.layers, context.childLayerOrder),
        });
      }),

      /**
       * Emits layer order changes to notify subscribers of structure updates.
       * The flat layer order represents the visual stacking of layers.
       */
      'Emit update layer order': emit(({ context }) => ({
        type: 'LAYER.ORDER_CHANGED' as const,
        layerOrder: getFlatLayerOrder(context.layers, context.childLayerOrder),
      })),

      /**
       * Performs a complete reset of the layer manager:
       * 1. Stops all spawned layer actors
       * 2. Clears the layer structure
       * 3. Resets the layer order
       */
      'Reset layer manager': assign(({ context }) => {
        // stop all spawned actors:
        context.layers.forEach((layer) => {
          stopChild(layer.layerActor.id);
        });

        return {
          layers: [],
          childLayerOrder: [],
        };
      }),
    },
  }).createMachine({
    id: 'layerManager',
    context: ({ input }) => ({
      layers: [],
      childLayerOrder: [],
      allowNestedGroupLayers: input.allowNestedGroupLayers,
    }),
    /**
     * The machine handles various layer-related events:
     * - Visibility updates
     * - Layer reordering
     * - Opacity changes
     * - Time information updates
     * - Layer data modifications
     * - Layer addition/removal
     * - Complete reset
     *
     * Each event triggers appropriate actions and emits corresponding events
     * to notify subscribers of state changes.
     */
    on: {
      'LAYER.UPDATE_VISIBILITY': {
        actions: emit(({ event, context }) => {
          return {
            type: 'LAYER.VISIBILITY_CHANGED',
            layerId: event.layerId,
            visible: event.visible,
            layerActor: findLayerById(context.layers, event.layerId)!.layerActor,
          };
        }),
      },
      'LAYER.REORDER': {
        actions: [
          {
            type: 'Emit update layer order',
          },
        ],
      },
      'LAYER.UPDATE_OPACITY': {
        actions: emit(({ event, context }) => {
          return {
            type: 'LAYER.OPACITY_CHANGED',
            layerId: event.layerId,
            opacity: event.opacity,
            layerActor: findLayerById(context.layers, event.layerId)!.layerActor,
          };
        }),
      },
      'LAYER.UPDATE_TIME_INFO': {
        actions: emit(({ event, context }) => {
          return {
            type: 'LAYER.TIME_INFO_CHANGED',
            layerId: event.layerId,
            timeInfo: event.timeInfo,
            layerActor: findLayerById(context.layers, event.layerId)!.layerActor,
          };
        }),
      },
      'LAYER.UPDATE_LAYER_DATA': {
        actions: emit(({ event, context }) => {
          return {
            type: 'LAYER.LAYER_DATA_CHANGED',
            layerId: event.layerId,
            layerData: event.layerData,
            layerActor: findLayerById(context.layers, event.layerId)!.layerActor,
          };
        }),
      },
      'LAYER.ADD': {
        actions: [
          {
            type: 'Add new layer',
            params: ({ event }) => event.params,
          },
          {
            type: 'Emit update layer order',
          },
        ],
      },
      'LAYER.REMOVE': {
        actions: [
          {
            type: 'Remove layer',
            params: ({ event }) => ({ layerId: event.layerId }),
          },
          {
            type: 'Emit update layer order',
          },
        ],
      },

      RESET: {
        actions: ['Reset layer manager'],
      },
    },
  });
}
