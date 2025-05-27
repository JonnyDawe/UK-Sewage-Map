import { DateValue } from '@internationalized/date';
import { ActorRef, ActorRefFrom, Snapshot } from 'xstate';

import { layerGroupMachine } from './layers/layerGroupMachine';
import { layerMachine } from './layers/layerMachine';

// Type inference helpers
export type InferLayerData<T> = T extends LayerActor<infer U> ? U : never;
export type InferContextLayerData<T> = T extends LayerContextBase<infer U> ? U : never;

// Base types
export type LayerType = 'layer' | 'layerGroup';

export interface BaseLayerConfig<T> {
  layerId: string;
  layerName: string;
  parentId: string | null;
  layerData: T;
}

export interface LayerConfig<T> extends BaseLayerConfig<T> {
  layerType: 'layer';
  opacity?: number;
  timeInfo?: LayerTimeInfo;
}

export interface LayerGroupConfig<T> extends BaseLayerConfig<T> {
  layerType: 'layerGroup';
  listMode?: 'show' | 'hide' | 'hide-children';
}

// Time-related types
export interface SingleTimeInfo extends BaseTimeInfo {
  type: 'single';
  value: DateValue;
}

export function isSingleTimeInfo(timeInfo?: LayerTimeInfo): timeInfo is SingleTimeInfo {
  return timeInfo?.type === 'single';
}

export interface RangeTimeInfo extends BaseTimeInfo {
  type: 'range';
  start: DateValue;
  end: DateValue;
}

export function isRangeTimeInfo(timeInfo?: LayerTimeInfo): timeInfo is RangeTimeInfo {
  return timeInfo?.type === 'range';
}

export interface BaseTimeInfo {
  precision: 'date' | 'datetime';
}

export type LayerTimeInfo = BaseTimeInfo & (SingleTimeInfo | RangeTimeInfo);

// Context types
export interface LayerContextBase<T> {
  layerManagerRef: LayerManager<T>;
  parentRef: ParentLayerActor | null;
  layerId: string;
  layerName: string;
  layerType: LayerType;
  layerData: T;
}

export interface LayerContext<T> extends LayerContextBase<T> {
  layerType: 'layer';
  listMode: 'show' | 'hide';
  timeInfo?: LayerTimeInfo;
  opacity: number;
}

export interface LayerGroupContext<T> extends LayerContextBase<T> {
  layerType: 'layerGroup';
  children: ChildLayerActor[];
  childLayerOrder: string[];
  listMode: 'show' | 'hide' | 'hide-children';
}

export interface AddLayerParams<T> {
  layerConfig: LayerConfig<T> | LayerGroupConfig<T>;
  visible?: boolean | 'inherit';
  index?: number;
  position?: 'top' | 'bottom';
}

export interface LayerManagerContext<T> {
  layers: ManagedItem<T>[];
  childLayerOrder: string[];
  allowNestedGroupLayers: boolean;
}

// Event types
export type LayerManagerEvent<T> =
  | { type: 'LAYER.ADD'; params: AddLayerParams<T> }
  | { type: 'LAYER.REMOVE'; layerId: string }
  | { type: 'LAYER.UPDATE_VISIBILITY'; layerId: string; visible: boolean }
  | { type: 'LAYER.UPDATE_OPACITY'; layerId: string; opacity: number }
  | { type: 'LAYER.UPDATE_TIME_INFO'; layerId: string; timeInfo: LayerTimeInfo }
  | { type: 'LAYER.UPDATE_LAYER_DATA'; layerId: string; layerData: T }
  | { type: 'RESET' };

export type LayerManagerEmittedEvent<T> =
  | { type: 'LAYER.ADDED'; layerId: string; visible: boolean; layerActor: LayerActor<T> }
  | { type: 'LAYER.REMOVED'; layerId: string }
  | { type: 'LAYER.ORDER_CHANGED'; layerOrder: string[] }
  | {
      type: 'LAYER.VISIBILITY_CHANGED';
      layerId: string;
      visible: boolean;
      layerActor: LayerActor<T>;
    }
  | { type: 'LAYER.OPACITY_CHANGED'; layerId: string; opacity: number; layerActor: LayerActor<T> }
  | {
      type: 'LAYER.TIME_INFO_CHANGED';
      layerId: string;
      timeInfo: LayerTimeInfo;
      layerActor: LayerActor<T>;
    }
  | { type: 'LAYER.LAYER_DATA_CHANGED'; layerId: string; layerData: T; layerActor: LayerActor<T> };

export type ParentEvent =
  | { type: 'CHILD.VISIBLE'; layerId: string }
  | {
      type: 'LAYERS.ADD_CHILD';
      child: ChildLayerActor;
      index?: number;
      position?: 'top' | 'bottom';
    }
  | { type: 'LAYERS.REMOVE_CHILD'; id: string };

export type ChildEvent =
  | { type: 'LAYER.ENABLED' }
  | { type: 'LAYER.DISABLED' }
  | { type: 'PARENT.VISIBLE' }
  | { type: 'PARENT.HIDDEN' };

// Actor types

export type LayerManager<T> = ActorRef<Snapshot<unknown>, LayerManagerEvent<T>>;
export type ParentLayerActor = ActorRef<Snapshot<unknown>, ParentEvent>;
export type ChildLayerActor = ActorRef<Snapshot<unknown>, ChildEvent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LayerMachineActor<T = any> = ActorRefFrom<ReturnType<typeof layerMachine<T>>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LayerGroupMachineActor<T = any> = ActorRefFrom<ReturnType<typeof layerGroupMachine<T>>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LayerActor<T = any> = LayerMachineActor<T> | LayerGroupMachineActor<T>;

// Utility types
export type ManagedLayer<T> = {
  type: 'layer';
  layerActor: LayerMachineActor<T>;
};

export type ManagedLayerGroup<T> = {
  type: 'layerGroup';
  layerActor: LayerGroupMachineActor<T>;
};

export type ManagedItem<T> = ManagedLayer<T> | ManagedLayerGroup<T>;

// Type guards
export function isLayerMachine<T>(layer: LayerActor<T>): layer is LayerMachineActor<T> {
  return layer.getSnapshot().context.layerType === 'layer';
}

export function isLayerGroupMachine<T>(layer: LayerActor<T>): layer is LayerGroupMachineActor<T> {
  return layer.getSnapshot().context.layerType === 'layerGroup';
}

// Utility functions for type inference
export function inferLayerData<T extends LayerActor<unknown>>(layer: T): InferLayerData<T> {
  return layer.getSnapshot().context.layerData as InferLayerData<T>;
}

export function inferContextLayerData<T extends LayerContextBase<unknown>>(
  context: T,
): InferContextLayerData<T> {
  return context.layerData as InferContextLayerData<T>;
}

export interface LayerVisibility {
  id: string;
  parentId?: string | null;
}
