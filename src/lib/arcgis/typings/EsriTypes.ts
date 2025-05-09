import { Overloads } from './utilityTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventHandlerLookup<LayerEvents extends any[]> = {
  [EventName in LayerEvents[0]]?: LayerEvents extends [EventName, infer CallbackHandler]
    ? CallbackHandler
    : never;
};

export type EsriEvented = {
  on: <K extends string, F extends __esri.EventHandler>(name: K, eventHandler: F) => IHandle;
};

export type EventHandlers<T extends EsriEvented> = EventHandlerLookup<
  Parameters<Overloads<T['on']>>
>;
