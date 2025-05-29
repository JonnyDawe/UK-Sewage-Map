import { useSetAtom } from 'jotai';
import { Selection, useListData } from 'react-stately';

import { filteredLayersAtom } from '@/lib/atoms';
import { isLayerVisible, useTopLevelLayers } from '@/lib/machines/layerManager/hooks/baseSelectors';

import { LayerManagerContext } from '../../layermanagement/LayerManagerProvider';
import { SewageMapLayerMachineActor } from '../../layermanagement/types';

export function useLayerManagement() {
  const actorRef = LayerManagerContext.useActorRef();
  const layers = useTopLevelLayers({ actor: actorRef });
  const setFilteredLayers = useSetAtom(filteredLayersAtom);

  const visibleLayers = layers.filter((layer) => isLayerVisible(layer.layerActor));

  const list = useListData({
    initialItems: layers.map((layer) => layer.layerActor as SewageMapLayerMachineActor),
    initialSelectedKeys: visibleLayers.map((layer) => layer.layerActor.id),
    getKey: (item) => item.id,
  });

  const isAllSelected = list.selectedKeys === 'all' || list.selectedKeys.size === list.items.length;

  const handleSelectAll = (isSelected: boolean) => {
    layers.forEach((layer) => {
      layer.layerActor.send({
        type: isSelected ? 'LAYER.ENABLED' : 'LAYER.DISABLED',
      });
    });
    list.setSelectedKeys(isSelected ? 'all' : new Set());
    setFilteredLayers(isSelected ? 'all' : new Set());
  };

  const handleFocusItem = (item: SewageMapLayerMachineActor) => {
    layers.forEach((layer) => {
      if (layer.layerActor.id !== item.id) {
        layer.layerActor.send({
          type: 'LAYER.DISABLED',
        });
      }
    });

    if (!isLayerVisible(item)) {
      item.send({
        type: 'LAYER.ENABLED',
      });
    }

    list.setSelectedKeys(new Set([item.id]));
    setFilteredLayers(new Set([item.id]));
  };

  const handleSelectionChange = (keys: Selection) => {
    if (keys === 'all') {
      handleSelectAll(true);
    } else {
      const selectedKeys = new Set(Array.from(keys).map((key) => key.toString()));
      setFilteredLayers(selectedKeys);
      layers.forEach((layer) => {
        layer.layerActor.send({
          type: 'LAYER.DISABLED',
        });
      });
      layers.forEach((layer) => {
        if (selectedKeys.has(layer.layerActor.id)) {
          layer.layerActor.send({
            type: 'LAYER.ENABLED',
          });
        }
      });
    }
    list.setSelectedKeys(keys);
  };

  return {
    list,
    isAllSelected,
    handleSelectAll,
    handleFocusItem,
    handleSelectionChange,
  };
}
