import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import EsriMap from '@arcgis/core/Map';

import { waterCompanyConfig } from '@/constants/sewagemapdata';
import { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';
import {
  validateThamesWaterDischargeAttributes,
  validateWaterCompanyDischargeAttributes,
} from '@/utils/discharge/schemas';

import { SewageMapLayerManagerActor } from '../../layermanagement/types';
import { dischargePopupTemplate } from './config/dischargePopup';
import {
  otherWaterAlertStatusRenderer,
  thamesWaterAlertStatusRenderer,
} from './config/dischargeRenderer';
import {
  otherWaterAlertStatusSymbolArcade,
  thamesWaterAlertStatusSymbolArcade,
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

    // Add Thames Water layer
    this.layers.push({
      layer: new FeatureLayer({
        portalItem: {
          id: thamesWaterConfig.apiLayerId,
        },
        title: 'Thames Water',
        id: this.generateLayerId('Thames Water'),
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

    const otherWaterCompanyConfigs = Object.entries(waterCompanyConfig).filter(
      ([, config]) => config.apiType === 'stream',
    );

    // Add other water company layers
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

          if (!thamesAttributes && !otherAttributes) return;

          const id = thamesAttributes?.PermitNumber ?? otherAttributes?.Id ?? '';
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

    if (layer.title === 'Thames Water') {
      const query = layer.createQuery();
      query.where = `PermitNumber = '${this.initialCsoId}'`;
      query.returnGeometry = true;

      const { features } = await layer.queryFeatures(query);
      if (features.length > 0) {
        view.openPopup({ features });
        view.goTo({ target: features[0], zoom: 12 }, { animate: false });
      }
    } else {
      const query = layer.createQuery();
      query.where = `Id = '${this.initialCsoId}'`;
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
