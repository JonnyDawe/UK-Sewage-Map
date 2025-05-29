/**
 * This state machine manages an individual layer within the layer management system.
 * It handles the layer's visibility, opacity, time information, and data state while
 * maintaining communication with its parent layer group and the layer manager.
 */

import { enqueueActions, setup } from 'xstate';

import { ChildEvent, LayerContext, LayerManager, LayerTimeInfo, ParentLayerActor } from '../types';

export type LayerEvent<T> =
  | ChildEvent
  | {
      type: 'LAYER.SET_OPACITY';
      opacity: number;
    }
  | { type: 'LAYER.SET_TIME_INFO'; timeInfo: LayerTimeInfo }
  | { type: 'LAYER.SET_LAYER_DATA'; layerData: T };

export function layerMachine<T>() {
  return setup({
    types: {
      context: {} as LayerContext<T>,
      events: {} as LayerEvent<T>,
      input: {} as {
        layerManagerRef: LayerManager<T>;
        layerId: string;
        parentRef: ParentLayerActor | null;
        layerName: string;
        listMode?: 'show' | 'hide';
        opacity?: number;
        timeInfo?: LayerTimeInfo;
        layerData: T;
      },
    },
    actions: {
      /**
       * Notifies the parent layer group when this layer becomes visible.
       * This helps maintain the visibility hierarchy in nested layer structures.
       */
      'Notify Parent that layer is visible': enqueueActions(({ context, enqueue }) => {
        if (context.parentRef) {
          enqueue.sendTo(context.parentRef, {
            type: 'CHILD.VISIBLE',
            layerId: context.layerId,
          });
        }
      }),
      /**
       * Updates the layer manager about changes in this layer's visibility.
       * This ensures the manager can track and respond to visibility changes.
       */
      'Notify Manager of visibility change': enqueueActions(
        ({ context, enqueue }, params: { visible: boolean }) =>
          enqueue.sendTo(context.layerManagerRef, {
            type: 'LAYER.UPDATE_VISIBILITY',
            layerId: context.layerId,
            visible: params.visible,
          }),
      ),
      /**
       * Handles opacity changes for the layer, updating both local state
       * and notifying the layer manager of the change.
       */
      'Change Layer Opacity': enqueueActions(
        ({ context, enqueue }, params: { opacity: number }) => {
          enqueue.sendTo(context.layerManagerRef, {
            type: 'LAYER.UPDATE_OPACITY',
            layerId: context.layerId,
            opacity: params.opacity,
          });
          enqueue.assign({
            opacity: params.opacity,
          });
        },
      ),
      /**
       * Updates the layer's time information and notifies the layer manager.
       * This is used for temporal data visualization features.
       */
      'Change Layer Time Info': enqueueActions(
        ({ context, enqueue }, params: { timeInfo: LayerTimeInfo }) => {
          enqueue.assign({
            timeInfo: params.timeInfo,
          });
          enqueue.sendTo(context.layerManagerRef, {
            type: 'LAYER.UPDATE_TIME_INFO',
            layerId: context.layerId,
            timeInfo: params.timeInfo,
          });
        },
      ),
      /**
       * Updates the layer's data and notifies the layer manager.
       * This handles the core data that the layer visualizes.
       */
      'Change Layer Data': enqueueActions(({ context, enqueue }, params: { layerData: T }) => {
        enqueue.assign({ layerData: params.layerData });
        enqueue.sendTo(context.layerManagerRef, {
          type: 'LAYER.UPDATE_LAYER_DATA',
          layerId: context.layerId,
          layerData: params.layerData,
        });
      }),
    },
  }).createMachine({
    id: 'layer',
    description: 'A machine that represents a layer on the map.',
    context: ({ input }) => ({
      layerManagerRef: input.layerManagerRef,
      parentRef: input.parentRef,
      layerId: input.layerId,
      layerName: input.layerName,
      listMode: input.listMode ?? 'show',
      opacity: input.opacity ?? 1,
      layerType: 'layer',
      timeInfo: input.timeInfo,
      layerData: input.layerData,
    }),
    initial: 'disabled',
    states: {
      enabled: {
        initial: 'visible',
        description: 'The layer is enabled',
        states: {
          visible: {
            description: 'The layer should appear visible on the map',
            entry: [
              {
                type: 'Notify Parent that layer is visible',
              },
              {
                type: 'Notify Manager of visibility change',
                params: {
                  visible: true,
                },
              },
            ],
            exit: [
              {
                type: 'Notify Manager of visibility change',
                params: {
                  visible: false,
                },
              },
            ],

            on: {
              'PARENT.HIDDEN': {
                target: 'hidden',
              },
            },
          },
          hidden: {
            description: 'The layer should appear hidden on the map as its parent is hidden',
            on: {
              'PARENT.VISIBLE': {
                target: 'visible',
              },
            },
          },
        },
        on: {
          'LAYER.DISABLED': {
            target: 'disabled',
          },
        },
      },
      disabled: {
        description: 'The layer is disabled',
        initial: 'hidden',
        states: {
          hidden: {
            description: 'The layer should always appear hidden on the map',
          },
        },
        on: {
          'LAYER.ENABLED': {
            target: 'enabled',
          },
        },
      },
    },
    /**
     * The machine handles various layer-specific events:
     * - Opacity changes
     * - Time information updates
     * - Layer data modifications
     *
     * Each event triggers appropriate actions to update local state
     * and notify the layer manager of changes.
     */
    on: {
      'LAYER.SET_OPACITY': {
        actions: [
          {
            type: 'Change Layer Opacity',
            params: ({ event }) => ({ opacity: event.opacity }),
          },
        ],
      },
      'LAYER.SET_TIME_INFO': {
        actions: [
          {
            type: 'Change Layer Time Info',
            params: ({ event }) => ({ timeInfo: event.timeInfo }),
          },
        ],
      },
      'LAYER.SET_LAYER_DATA': {
        actions: [
          {
            type: 'Change Layer Data',
            params: ({ event }) => ({ layerData: event.layerData }),
          },
        ],
      },
    },
  });
}
