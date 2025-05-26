'use client';

import { createActorContext } from '@xstate/react';
import React from 'react';

import { createLayerManagerMachine } from '@/lib/machines/layerManager/layerManagerMachine';

export type LayerData = null;

export const LayerManagerContext = createActorContext(createLayerManagerMachine<LayerData>(), {
  input: {
    allowNestedGroupLayers: false,
  },
});

export const LayerManagerProvider = React.memo(({ children }: { children: React.ReactNode }) => {
  return <LayerManagerContext.Provider>{children}</LayerManagerContext.Provider>;
});
