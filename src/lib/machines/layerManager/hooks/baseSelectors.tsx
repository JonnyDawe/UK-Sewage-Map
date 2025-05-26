import { useSelector } from '@xstate/react';
import { useEffect, useState } from 'react';
import React from 'react';

import { LayerManagerActor } from '../layerManagerMachine';
import { LayerGroupMachineActor, LayerMachineActor } from '../types';
import { getLayerGroupChildrenInOrder, getTopLevelLayersInOrder } from '../utils';

export function useLayerById<T>(actor: LayerManagerActor<T>, layerId: string) {
  const layer = useSelector(actor, ({ context }) => {
    return context.layers.find((layer) => layer.layerActor.id === layerId);
  });

  return layer;
}

export function useTopLevelLayers<T>({
  actor,
  filterHiddenGroups = false,
}: {
  actor: LayerManagerActor<T>;
  filterHiddenGroups?: boolean;
}) {
  const { childLayerOrder, layers } = useSelector(actor, ({ context }) => ({
    childLayerOrder: context.childLayerOrder,
    layers: context.layers,
  }));

  const topLevelLayers = React.useMemo(() => {
    const allTopLevelLayers = getTopLevelLayersInOrder(childLayerOrder, layers);
    if (!filterHiddenGroups) return allTopLevelLayers;

    return allTopLevelLayers.filter((layer) => {
      if (layer.type !== 'layerGroup') return true;
      const { listMode } = layer.layerActor.getSnapshot().context;
      return listMode !== 'hide';
    });
  }, [childLayerOrder, layers, filterHiddenGroups]);

  return topLevelLayers;
}

export function useLayerGroupChildLayers<T>(actor: LayerGroupMachineActor<T>) {
  const { childLayerOrder, children } = useSelector(actor, ({ context }) => ({
    childLayerOrder: context.childLayerOrder,
    children: context.children,
  }));

  const layers = React.useMemo(
    () => getLayerGroupChildrenInOrder(childLayerOrder, children),
    [childLayerOrder, children],
  );

  return layers;
}

export function useEnabledChildCount(children: LayerMachineActor[]) {
  const [enabledChildCount, setEnabledChildCount] = useState(0);

  useEffect(() => {
    function countEnabledChildren() {
      return children.filter((child) => child.getSnapshot().matches('enabled')).length;
    }

    setEnabledChildCount(countEnabledChildren());

    const subscriptions = children.map((child) =>
      child.subscribe(() => {
        setEnabledChildCount(countEnabledChildren());
      }),
    );

    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe());
    };
  }, [children]);
  return enabledChildCount;
}

export interface LayerVisibility {
  id: string;
  parentId?: string | null;
}

export function useVisibleLayerIds<T>(actor: LayerManagerActor<T>) {
  return useSelector(actor, ({ context }) => {
    const visibleLayers: LayerVisibility[] = [];

    // Process each layer
    context.layers.forEach((layer) => {
      const layerActor = layer.layerActor;
      const snapshot = layerActor.getSnapshot();

      if (isLayerVisible(layerActor)) {
        // Add the layer with its parent information
        visibleLayers.push({
          id: layerActor.id,
          ...(snapshot.context.parentRef?.id && {
            parentId: snapshot.context.parentRef?.id,
          }),
        });
      }
    });

    return visibleLayers;
  });
}

export function isLayerVisible(actor: LayerMachineActor | LayerGroupMachineActor) {
  const snapshot = actor.getSnapshot();
  return snapshot.matches({ enabled: 'visible' });
}

export function useLayerVisibility<T>(actor: LayerManagerActor<T>, layerId: string | null) {
  return useSelector(actor, ({ context }) => {
    if (!layerId) return false;
    const layer = context.layers.find((layer) => layer.layerActor.id === layerId);
    if (!layer) return false;
    return isLayerVisible(layer.layerActor);
  });
}
