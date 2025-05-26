import { LayerManagerActor } from '@/lib/machines/layerManager/layerManagerMachine';
import { LayerGroupMachineActor, LayerMachineActor } from '@/lib/machines/layerManager/types';

import { LayerData } from './LayerManagerProvider';

export type SewageMapLayerManagerActor = LayerManagerActor<LayerData>;

export type SewageMapLayerGroupMachineActor = LayerGroupMachineActor<LayerData>;

export type SewageMapLayerMachineActor = LayerMachineActor<LayerData>;
