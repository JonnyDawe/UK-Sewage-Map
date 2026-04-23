import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import Field from '@arcgis/core/layers/support/Field';
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

// Explicitly declare fields so ArcGIS includes the array-type CSOs property.
// Without this, GeoJSONLayer's schema inference silently drops array-valued fields.
// ArcGIS feature-layer fields do not support array types, so CSOs is declared as
// 'string' — ArcGIS will serialize the JSON array to a string on ingest, and
// getPropertiesFromGraphic() in popupfactory.tsx deserializes it back via JSON.parse().
const downstreamImpactFields = [
  new Field({ name: 'CSOs', alias: 'CSOs', type: 'string' }),
  new Field({ name: 'number_upstream_CSOs', alias: 'number_upstream_CSOs', type: 'double' }),
  new Field({ name: 'number_CSOs_per_km2', alias: 'number_CSOs_per_km2', type: 'double' }),
];

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
        fields: downstreamImpactFields,
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
