import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Field from '@arcgis/core/layers/support/Field';
import EsriMap from '@arcgis/core/Map';

import {
  ArcGISWaterCompanyConfig,
  waterCompanyConfig,
  WelshWaterCompanyConfig,
} from '@/constants/sewagemapdata';
import { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';
import {
  validateScottishWaterApiResponse,
  validateScottishWaterDischargeAttributes,
  validateThamesWaterDischargeAttributes,
  validateWaterCompanyDischargeAttributes,
  validateWelshWaterDischargeAttributes,
} from '@/utils/discharge/schemas';

import { SewageMapLayerManagerActor } from '../../layermanagement/types';
import { dischargePopupTemplate } from './config/dischargePopup';
import {
  otherWaterAlertStatusRenderer,
  scottishWaterAlertStatusRenderer,
  thamesWaterAlertStatusRenderer,
  welshWaterAlertStatusRenderer,
} from './config/dischargeRenderer';
import {
  otherWaterAlertStatusSymbolArcade,
  scottishWaterAlertStatusSymbolArcade,
  thamesWaterAlertStatusSymbolArcade,
  welshWaterAlertStatusSymbolArcade,
} from './config/dischargeSourceRendererArcade';

export class AddDischargeSourcesCommand implements MapCommand {
  private layers: Array<{ layer: __esri.FeatureLayer; companyName: string }> = [];

  constructor(
    private setPathname: (assetId: string, company: string) => void,
    private layerManagerActor: SewageMapLayerManagerActor,
    private initialCsoId?: string,
    private initialCompany?: string,
  ) {
    this.initializeLayers();
  }

  private generateLayerId(company: string): string {
    return `discharge-sources-${company}`;
  }

  private initializeLayers(): void {
    const thamesWaterConfig = waterCompanyConfig['Thames Water'];

    // Add Thames Water layer (ArcGIS portal item, thames schema)
    if (thamesWaterConfig.apiType === 'thames') {
      this.layers.push({
        layer: new FeatureLayer({
          portalItem: {
            id: thamesWaterConfig.apiLayerId,
          },
          title: 'Thames Water',
          id: this.generateLayerId('Thames Water'),
          copyright: 'Thames Water',
          outFields: ['*'],
          renderer: thamesWaterAlertStatusRenderer,
          popupTemplate: dischargePopupTemplate,
          popupEnabled: true,
          orderBy: [
            {
              valueExpression: thamesWaterAlertStatusSymbolArcade,
              order: 'descending',
            },
          ],
        }),
        companyName: 'Thames Water',
      });
    }

    const otherWaterCompanyConfigs = Object.entries(waterCompanyConfig).filter(
      (entry): entry is [string, ArcGISWaterCompanyConfig] => entry[1].apiType === 'stream',
    );

    // Add other water company layers (ArcGIS portal items, stream schema)
    otherWaterCompanyConfigs.forEach(([companyName, config]) => {
      this.layers.push({
        layer: new FeatureLayer({
          title: companyName,
          id: this.generateLayerId(companyName),
          portalItem: {
            id: config.apiLayerId,
          },
          outFields: ['*'],
          renderer: otherWaterAlertStatusRenderer,
          popupTemplate: dischargePopupTemplate,
          popupEnabled: true,
          orderBy: [
            {
              valueExpression: otherWaterAlertStatusSymbolArcade,
              order: 'descending',
            },
          ],
        }),
        companyName,
      });
    });

    const welshWaterCompanyConfigs = Object.entries(waterCompanyConfig).filter(
      (entry): entry is [string, WelshWaterCompanyConfig] => entry[1].apiType === 'welshwater',
    );

    // Add Welsh Water layers (ArcGIS FeatureServer URL, welsh water status string schema)
    welshWaterCompanyConfigs.forEach(([companyName, config]) => {
      this.layers.push({
        layer: new FeatureLayer({
          title: 'Welsh Water/Dŵr Cymru',
          id: this.generateLayerId(companyName),
          url: config.apiUrl,
          copyright: 'Welsh Water/Dŵr Cymru',
          outFields: ['*'],
          renderer: welshWaterAlertStatusRenderer,
          popupTemplate: dischargePopupTemplate,
          popupEnabled: true,
          orderBy: [
            {
              valueExpression: welshWaterAlertStatusSymbolArcade,
              order: 'descending',
            },
          ],
        }),
        companyName,
      });
    });
  }

  private parseTimestamp(dateString: string): number | null {
    const ts = new Date(dateString).getTime();
    return Number.isNaN(ts) ? null : ts;
  }

  private async createScottishWaterLayer(): Promise<__esri.FeatureLayer | null> {
    const scottishWaterConfig = waterCompanyConfig['Scottish Water'];
    if (!scottishWaterConfig || scottishWaterConfig.apiType !== 'scottishwater') return null;

    try {
      const response = await fetch(scottishWaterConfig.apiUrl);
      if (!response.ok) {
        console.error(`Failed to fetch Scottish Water data: HTTP ${response.status}`);
        return null;
      }

      const data: unknown = await response.json();
      const validated = validateScottishWaterApiResponse(data);
      if (!validated) {
        console.error('Scottish Water API response did not match expected schema');
        return null;
      }

      const withCoords = validated.results.filter(
        (
          item,
        ): item is typeof item & {
          DISCHARGE_OVERFLOW_LOCATION_LATITUDE: number;
          DISCHARGE_OVERFLOW_LOCATION_LONGITUDE: number;
        } =>
          item.DISCHARGE_OVERFLOW_LOCATION_LATITUDE != null &&
          item.DISCHARGE_OVERFLOW_LOCATION_LONGITUDE != null,
      );

      if (withCoords.length === 0) return null;

      const graphics = withCoords.map(
        (item, index) =>
          new Graphic({
            geometry: new Point({
              longitude: item.DISCHARGE_OVERFLOW_LOCATION_LONGITUDE,
              latitude: item.DISCHARGE_OVERFLOW_LOCATION_LATITUDE,
              spatialReference: { wkid: 4326 },
            }),
            attributes: {
              OBJECTID: index,
              ASSET_ID: item.ASSET_ID,
              ASSET_NAME: item.ASSET_NAME,
              OVERFLOW_STATUS_ID: item.OVERFLOW_STATUS_ID,
              RECEIVING_WATER: item.RECEIVING_WATER,
              OVERFLOW_START_DATETIME: item.OVERFLOW_START_DATETIME
                ? this.parseTimestamp(item.OVERFLOW_START_DATETIME)
                : null,
              OVERFLOW_END_DATETIME: item.OVERFLOW_END_DATETIME
                ? this.parseTimestamp(item.OVERFLOW_END_DATETIME)
                : null,
            },
          }),
      );

      return new FeatureLayer({
        title: 'Scottish Water',
        id: this.generateLayerId('Scottish Water'),
        copyright: 'Scottish Water',
        source: graphics,
        geometryType: 'point',
        spatialReference: { wkid: 4326 },
        objectIdField: 'OBJECTID',
        fields: [
          new Field({ name: 'OBJECTID', type: 'oid' }),
          new Field({ name: 'ASSET_ID', type: 'string' }),
          new Field({ name: 'ASSET_NAME', type: 'string' }),
          new Field({ name: 'OVERFLOW_STATUS_ID', type: 'integer' }),
          new Field({ name: 'RECEIVING_WATER', type: 'string' }),
          new Field({ name: 'OVERFLOW_START_DATETIME', type: 'date' }),
          new Field({ name: 'OVERFLOW_END_DATETIME', type: 'date' }),
        ],
        outFields: ['*'],
        renderer: scottishWaterAlertStatusRenderer,
        popupTemplate: dischargePopupTemplate,
        popupEnabled: true,
        orderBy: [
          {
            valueExpression: scottishWaterAlertStatusSymbolArcade,
            order: 'descending',
          },
        ],
      });
    } catch (error) {
      console.error('Failed to load Scottish Water data:', error);
      return null;
    }
  }

  async executeOnMap(map: EsriMap): Promise<ViewCommand> {
    this.layers.forEach(({ layer, companyName }) => {
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

    // Scottish Water uses a direct REST API rather than an ArcGIS portal item,
    // so it is fetched and added asynchronously here.
    const scottishWaterLayer = await this.createScottishWaterLayer();
    if (scottishWaterLayer) {
      map.add(scottishWaterLayer);
      this.layers.push({ layer: scottishWaterLayer, companyName: 'Scottish Water' });
      this.layerManagerActor.send({
        type: 'LAYER.ADD',
        params: {
          layerConfig: {
            layerType: 'layer',
            layerId: scottishWaterLayer.id,
            layerName: scottishWaterLayer.title ?? scottishWaterLayer.id,
            parentId: 'Scottish Water',
            layerData: null,
          },
          visible: 'inherit',
        },
      });
    }

    return {
      executeOnView: async (view: __esri.MapView) => {
        const layerViews = await Promise.all(
          this.layers.map(({ layer }) => view.whenLayerView(layer)),
        );

        this.setupPopupActionHandlers(view);
        layerViews.forEach((layerView) => {
          this.setupFeatureSelectionHandling(view, layerView);
        });

        if (this.initialCsoId) {
          await this.handleInitialCso(view);
        }
      },
    };
  }

  private setupPopupActionHandlers(view: __esri.MapView): void {
    reactiveUtils
      .whenOnce(() => !!view.popup?.visible)
      .then(() => {
        view.popup?.viewModel?.addHandles([
          view.popup?.viewModel?.on('trigger-action', (event) => {
            if (event.action.id === 'copy-link') {
              navigator.clipboard.writeText(window.location.href);
            }
          }),
        ]);
      });
  }

  private setupFeatureSelectionHandling(
    view: __esri.MapView,
    layerView: __esri.FeatureLayerView,
  ): void {
    reactiveUtils.watch(
      () => view.popup?.visible,
      (visible) => {
        if (!visible) {
          this.setPathname('', '');
        }
      },
    );

    reactiveUtils.watch(
      () => view.popup?.selectedFeature,
      async (graphic) => {
        if (!graphic) {
          this.setPathname('', '');
          return;
        }
        if (graphic?.layer === layerView.layer || graphic?.layer === null) {
          const thamesAttributes = validateThamesWaterDischargeAttributes(graphic.attributes);
          const otherAttributes = validateWaterCompanyDischargeAttributes(graphic.attributes);
          const scottishWaterAttributes = validateScottishWaterDischargeAttributes(
            graphic.attributes,
          );
          const welshWaterAttributes = validateWelshWaterDischargeAttributes(graphic.attributes);

          if (
            !thamesAttributes &&
            !otherAttributes &&
            !scottishWaterAttributes &&
            !welshWaterAttributes
          )
            return;

          const id =
            thamesAttributes?.PermitNumber ??
            otherAttributes?.Id ??
            scottishWaterAttributes?.ASSET_ID ??
            welshWaterAttributes?.DCWW_ID ??
            '';
          this.setPathname(id, layerView.layer.title ?? '');
          await this.goToFeature(view, graphic);
        }
      },
    );
  }

  private async goToFeature(view: __esri.MapView, graphic: __esri.Graphic): Promise<void> {
    if (!view.popup?.location) return;
    view.popup.location = graphic.geometry as __esri.Point;
    await view.goTo({
      target: view.popup?.location,
    });
  }

  private async handleInitialCso(view: __esri.MapView): Promise<void> {
    const company = this.initialCompany;
    const csoId = this.initialCsoId;

    if (!company || !csoId) return;

    // find the layer with the company
    const layer = view.map.findLayerById(this.generateLayerId(company)) as __esri.FeatureLayer;
    if (!layer) return;

    // Escape single quotes to prevent SQL injection in the where clause
    const escapedCsoId = csoId.replace(/'/g, "''");

    if (layer.title === 'Thames Water') {
      const query = layer.createQuery();
      query.where = `PermitNumber = '${escapedCsoId}'`;
      query.returnGeometry = true;

      const { features } = await layer.queryFeatures(query);
      if (features.length > 0) {
        view.openPopup({ features });
        view.goTo({ target: features[0], zoom: 12 }, { animate: false });
      }
    } else if (layer.title === 'Scottish Water') {
      const query = layer.createQuery();
      query.where = `ASSET_ID = '${escapedCsoId}'`;
      query.returnGeometry = true;

      const { features } = await layer.queryFeatures(query);
      if (features.length > 0) {
        view.openPopup({ features });
        view.goTo({ target: features[0], zoom: 12 }, { animate: false });
      }
    } else if (layer.title === 'Welsh Water/Dŵr Cymru') {
      const query = layer.createQuery();
      query.where = `DCWW_ID = '${escapedCsoId}'`;
      query.returnGeometry = true;

      const { features } = await layer.queryFeatures(query);
      if (features.length > 0) {
        view.openPopup({ features });
        view.goTo({ target: features[0], zoom: 12 }, { animate: false });
      }
    } else {
      const query = layer.createQuery();
      query.where = `Id = '${escapedCsoId}'`;
      query.returnGeometry = true;

      const { features } = await layer.queryFeatures(query);
      if (features.length > 0) {
        view.openPopup({ features }).then(() => {
          view.goTo({ target: features[0], zoom: 12 }, { animate: false });
        });
      }
    }
  }
}
