/**
 * This state machine manages a group of layers within the layer management system.
 * It handles collective visibility control, child layer management, and maintains
 * parent-child relationships in the layer hierarchy. Layer groups can contain both
 * individual layers and other layer groups (if nested groups are allowed).
 */

import { assign, enqueueActions, setup } from 'xstate';

import {
  ChildEvent,
  ChildLayerActor,
  LayerGroupContext,
  LayerManager,
  ParentEvent,
  ParentLayerActor,
} from '../types';
import { updateLayerOrder } from '../utils';

export type LayerGroupEvent<T> =
  | ChildEvent
  | ParentEvent
  | { type: 'LAYER.SET_LAYER_DATA'; layerData: T };

export function layerGroupMachine<T>() {
  return setup({
    types: {
      context: {} as LayerGroupContext<T>,
      events: {} as LayerGroupEvent<T>,
      input: {} as {
        layerId: string;
        parentRef: ParentLayerActor | null;
        layerName: string;
        layerManagerRef: LayerManager<T>;
        listMode?: 'show' | 'hide' | 'hide-children';
        layerData: T;
      },
    },
    actions: {
      /**
       * Propagates visibility changes to all child layers in the group.
       * This ensures consistent visibility state throughout the layer hierarchy.
       */
      'Notify children of visibility change': enqueueActions(
        ({ context, enqueue }, params: { visible: boolean }) => {
          context.children.forEach((child) => {
            enqueue.sendTo(child, { type: params.visible ? 'PARENT.VISIBLE' : 'PARENT.HIDDEN' });
          });
        },
      ),
      /**
       * Notifies the parent layer group when this group becomes visible.
       * This maintains visibility consistency up the layer hierarchy.
       */
      'Notify Parent of visibility change': enqueueActions(({ context, enqueue }) => {
        if (context.parentRef) {
          enqueue.sendTo(context.parentRef, {
            type: 'CHILD.VISIBLE',
            layerId: context.layerId,
          });
        }
      }),
      /**
       * Updates the layer manager about changes in this group's visibility.
       * This ensures the manager can track and respond to visibility changes.
       */
      'Notify Manager of visibility change': enqueueActions(
        ({ context, enqueue }, params: { visible: boolean }) => {
          enqueue.sendTo(context.layerManagerRef, {
            type: 'LAYER.UPDATE_VISIBILITY',
            layerId: context.layerId,
            visible: params.visible,
          });
        },
      ),
      /**
       * Updates the layer group's data and notifies the layer manager.
       * This handles metadata and configuration for the entire group.
       */
      'Change Layer Data': enqueueActions(({ context, enqueue }, params: { layerData: T }) => {
        enqueue.assign({ layerData: params.layerData });
        enqueue.sendTo(context.layerManagerRef, {
          type: 'LAYER.UPDATE_LAYER_DATA',
          layerId: context.layerId,
          layerData: params.layerData,
        });
      }),
      /**
       * Adds a new child layer to the group and updates the layer order.
       * Handles both individual layers and nested layer groups.
       */
      'Update Children': assign(
        (
          { context },
          params: {
            child: ChildLayerActor;
            index?: number;
            position?: 'top' | 'bottom';
          },
        ) => {
          const newOrder = updateLayerOrder(
            context.childLayerOrder,
            params.child.id,
            params.index,
            params.position,
          );
          return {
            children: [...context.children, params.child],
            childLayerOrder: newOrder,
          };
        },
      ),
      /**
       * Removes a child layer from the group and updates the layer order.
       * Maintains consistency in the layer hierarchy after removal.
       */
      'Remove Child': enqueueActions(({ context, enqueue }, params: { id: string }) => {
        enqueue.assign({
          children: context.children.filter((layer) => layer.id !== params.id),
          childLayerOrder: context.childLayerOrder.filter((layerId) => layerId !== params.id),
        });
      }),
    },
  }).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBsCGBPMAnA4lg9gK4AOAxAMIASAkgDIAiAdAGrUDK1AQrQKIDaABgC6iUMXywAlgBdJ+AHaiQAD0QBOABwAmRmoCMAgCwa1mjQGYArAHYNAGhDp1jPRu221WgVssDLPgF8AhzRMXAISUloAQQBNHgAlNkZo+noAfSo6ekERJBBxKVkFJVUEa3M1XT0tDWtrY0tDNUMANgcnBCrXd1a9c2tLDT1LNVagkIxsPCIyGPikxgSeAFkAeWYeTJoGXKVCmTlFfLLDY0YK2wFXATcbGw7EEZdzZp99Hz0R14mQUOmIsRGGB5KgAEbISBROKJRj0djRbg8HLCfYSQ4lE6ILT9Ri3NRWNr9ATmcytcyPBADVqMJpfDSteqGLTWPSDX7-cKzYGgiGQRgAN0kUj5pAACtFlgA5AAqjBoaR4Ur2+QOxWOoDK9R01wMagalkqX2slN8hgu+j05Is5NG1g5Uy5JB54MhEEYAAtJBAICDxZKlXLWBwkSqxOj1aVENrdMZWk0NIZrK0tJ5KWcBBavpZGbc9IYbONgn9HTNnRBha6ofNYUrEbwUXlw0UjlGEDjzHiTIS+uYSWSKY5EEnrLTDDU-EMNL5GQ6wmWgRXYFWIBQdkxg1xeGGChHW1j27j8T3iaTyemWXjx3oxq5+t2gsX5PhffB8pyF2iW5jNYgALQ4ro8bmDU5g2imYxaJSXydkYxr9jmwF6HOALciCK5fhiGoqIgYHmrUBbDGy1g+EMlJaK05p0myWikomRhWChTpAuhfLukKIqQphkYHoY5g6ARQzGiRlhkUOVJjGO2bMhYzR+ExC4umxnrer62Fqvuv5dKJjAEa0AgGQYWiGCS6bNIwAwFgY46mDihgKYCjBLhhqp7j+OHtjSJJtHUfTkgMJL2OJpJ6Iw44pgI+pybUWgOdyznKV6PogtxmkeQ0eKvK0vlWqS1hGOm5JhVaN5Wi0Xx8eYj4BEAA */
    id: 'layerGroup',
    description: 'A machine that represents a collection of layers that can be toggled as a group',
    initial: 'disabled',
    context: ({ input }) => ({
      layerManagerRef: input.layerManagerRef,
      layerId: input.layerId,
      parentRef: input.parentRef,
      children: [],
      childLayerOrder: [],
      layerName: input.layerName,
      layerType: 'layerGroup',
      listMode: input.listMode ?? 'show',
      layerData: input.layerData,
    }),
    states: {
      enabled: {
        initial: 'visible',
        description: 'The layer group is enabled',
        states: {
          visible: {
            description: 'The layer group should appear visible on the map',
            entry: [
              {
                type: 'Notify Parent of visibility change',
              },
              {
                type: 'Notify children of visibility change',
                params: ({ context }) => ({
                  children: context.children,
                  visible: true,
                }),
              },
              {
                type: 'Notify Manager of visibility change',
                params: ({ context }) => ({
                  layerManagerRef: context.layerManagerRef,
                  layerId: context.layerId,
                  visible: true,
                }),
              },
            ],
            exit: [
              {
                type: 'Notify Manager of visibility change',
                params: ({ context }) => ({
                  layerManagerRef: context.layerManagerRef,
                  layerId: context.layerId,
                  visible: false,
                }),
              },
              {
                type: 'Notify children of visibility change',
                params: ({ context }) => ({
                  children: context.children,
                  visible: false,
                }),
              },
            ],
            on: {
              'PARENT.HIDDEN': {
                target: 'hidden',
              },
            },
          },
          hidden: {
            description: 'The layer group should appear hidden on the map as its parent is hidden',
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
        description: 'The layer group is disabled',
        initial: 'hidden',
        states: {
          hidden: {},
        },
        on: {
          'LAYER.ENABLED': {
            target: 'enabled',
          },
          'CHILD.VISIBLE': {
            target: 'enabled',
          },
        },
      },
    },
    /**
     * The machine handles various layer group events:
     * - Child visibility notifications
     * - Child layer addition/removal
     * - Layer group data modifications
     *
     * Each event maintains the layer hierarchy and ensures
     * consistent state throughout the group structure.
     */
    on: {
      'CHILD.VISIBLE': {
        actions: [
          {
            type: 'Notify Parent of visibility change',
          },
        ],
      },
      'LAYERS.ADD_CHILD': {
        actions: [
          {
            type: 'Update Children',
            params: ({ event }) => ({
              child: event.child,
              index: event.index,
              position: event.position,
            }),
          },
        ],
      },
      'LAYERS.REMOVE_CHILD': {
        actions: [
          {
            type: 'Remove Child',
            params: ({ event }) => ({
              id: event.id,
            }),
          },
        ],
      },
      'LAYER.SET_LAYER_DATA': {
        actions: [
          {
            type: 'Change Layer Data',
            params: ({ event }) => ({
              layerData: event.layerData,
            }),
          },
        ],
      },
    },
  });
}
