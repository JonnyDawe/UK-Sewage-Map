import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import EsriMap from '@arcgis/core/Map';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import CIMSymbol from '@arcgis/core/symbols/CIMSymbol';
import LineSymbol from '@arcgis/core/symbols/LineSymbol';

import { waterCompanyConfig } from '@/constants/sewagemapdata';
import { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';

import { SewageMapLayerManagerActor } from '../../layermanagement/types';

export class AddRiverDischargeCommand implements MapCommand {
  private mapLayers: Array<{ layer: __esri.GeoJSONLayer; companyName: string }> = [];
  private lastTimestamp: number | undefined;
  private stepDuration = 100;
  private offset = 0;

  constructor(private layerManagerActor: SewageMapLayerManagerActor) {
    this.initializeLayers();
  }

  private initializeLayers(): void {
    this.mapLayers = Object.entries(waterCompanyConfig).map(([companyName, config]) => ({
      layer: new GeoJSONLayer({
        url: config.dischargeUrl,
        copyright: 'Sewage Map',
        renderer: new SimpleRenderer({
          symbol: new LineSymbol({
            color: '#733f2e',
            width: '6px',
          }),
        }),
        id: `${companyName}-discharge`,
        title: `${companyName} Discharge`,
      }),
      companyName,
    }));
  }

  private animateDischargeRenderer(
    layers: Array<{ layer: __esri.GeoJSONLayer; companyName: string }>,
    timestamp: number,
  ) {
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
    }

    const elapsed = timestamp - this.lastTimestamp;

    if (elapsed >= this.stepDuration) {
      this.offset++;
      this.lastTimestamp = timestamp;
    }

    const renderer = new SimpleRenderer({
      symbol: new CIMSymbol({
        data: {
          type: 'CIMSymbolReference',
          symbol: {
            type: 'CIMLineSymbol',
            symbolLayers: [
              {
                type: 'CIMSolidStroke',
                effects: [
                  {
                    type: 'CIMGeometricEffectDashes',
                    offsetAlongLine: this.offset,
                    dashTemplate: [3, 5, 3, 5],
                    lineDashEnding: 'NoConstraint',
                  },
                ],
                enable: true,
                capStyle: 'Round',
                joinStyle: 'Round',
                width: 2,
                color: [115, 63, 46, 255],
              },
              {
                type: 'CIMSolidStroke',
                enable: true,
                capStyle: 'Round',
                joinStyle: 'Round',
                width: 3,
                color: [170, 93, 68, 255],
              },
              {
                type: 'CIMSolidStroke',
                enable: true,
                capStyle: 'Round',
                joinStyle: 'Round',
                width: 6,
                color: [115, 63, 46, 255],
              },
            ],
          },
        },
      }),
    });

    layers.forEach(({ layer }) => {
      layer.renderer = renderer;
    });

    requestAnimationFrame((timestamp) => this.animateDischargeRenderer(layers, timestamp));
  }

  async executeOnMap(map: EsriMap): Promise<ViewCommand> {
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
          visible: true,
        },
      });
    });

    return {
      executeOnView: async () => {
        requestAnimationFrame((timestamp) =>
          this.animateDischargeRenderer(this.mapLayers, timestamp),
        );
      },
    };
  }
}
