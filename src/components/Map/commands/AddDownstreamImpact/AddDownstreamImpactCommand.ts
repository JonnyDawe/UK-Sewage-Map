import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import EsriMap from '@arcgis/core/Map';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

import { createDownstreamImpactPopupTemplate } from '@/components/DownstreamImpactPopup/popupfactory';
import { waterCompanyConfig } from '@/constants/sewagemapdata';
import { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';

import { SewageMapLayerManagerActor } from '../../layermanagement/types';

const transparentPointRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 12,
    color: [0, 0, 0, 0],
    outline: {
      color: [0, 0, 0, 0],
      width: 0,
    },
  }),
});

export class AddDownstreamImpactCommand implements MapCommand {
  private mapLayers: Array<{ layer: __esri.GeoJSONLayer; companyName: string }> = [];

  constructor(private layerManagerActor: SewageMapLayerManagerActor) {
    this.initializeLayers();
  }

  private generateLayerId(company: string): string {
    return `downstream-impact-${company}`;
  }

  private generateLayerName(company: string): string {
    return `${company} Downstream Impact`;
  }

  private initializeLayers(): void {
    this.mapLayers = Object.entries(waterCompanyConfig).map(([companyName, config]) => ({
      layer: new GeoJSONLayer({
        url: config.infoUrl,
        copyright: 'Sewage Map',
        renderer: transparentPointRenderer,
        id: this.generateLayerId(companyName),
        title: this.generateLayerName(companyName),
        popupTemplate: createDownstreamImpactPopupTemplate(companyName),
        popupEnabled: true,
        outFields: ['*'],
      }),
      companyName,
    }));
  }

  async executeOnMap(map: EsriMap): Promise<ViewCommand | void> {
    this.mapLayers.forEach(({ layer, companyName }) => {
      map.add(layer);
      this.layerManagerActor.send({
        type: 'LAYER.ADD',
        params: {
          layerConfig: {
            layerType: 'layer',
            layerId: layer.id,
            layerName: layer.title ?? layer.id,
            parentId: companyName,
            layerData: null,
          },
          visible: 'inherit',
        },
      });
    });
  }
}
