import { waterCompanyConfig } from '@/constants/sewagemapdata';
import { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';

import { SewageMapLayerManagerActor } from '../layermanagement/types';

export class SetupLayerManagerControlCommand implements MapCommand {
  constructor(private layerManagerActor: SewageMapLayerManagerActor) {}

  async executeOnMap(map: __esri.Map): Promise<ViewCommand | void> {
    this.layerManagerActor.send({ type: 'RESET' });

    // create a layer group for each water company
    Object.keys(waterCompanyConfig).forEach((title) => {
      this.layerManagerActor.send({
        type: 'LAYER.ADD',
        params: {
          layerConfig: {
            layerType: 'layerGroup',
            layerId: title,
            layerName: title,
            parentId: null,
            layerData: null,
          },
          visible: true,
        },
      });
    });

    const opacityChangedHandle = this.layerManagerActor.on(
      'LAYER.OPACITY_CHANGED',
      ({ layerId, opacity }) => {
        const mapLayer = map.findLayerById(layerId);
        if (mapLayer) {
          mapLayer.set('opacity', opacity);
        }
      },
    );

    const visibilityChangedHandle = this.layerManagerActor.on(
      'LAYER.VISIBILITY_CHANGED',
      ({ layerId, visible }) => {
        const mapLayer = map.findLayerById(layerId);
        if (mapLayer) {
          mapLayer.set('visible', visible);
        }
      },
    );

    return {
      executeOnView: (mapView: __esri.MapView) => {
        const handles: IHandle[] = [
          { remove: () => opacityChangedHandle.unsubscribe() },
          { remove: () => visibilityChangedHandle.unsubscribe() },
        ];

        mapView.addHandles(handles);
      },
    };
  }
}
