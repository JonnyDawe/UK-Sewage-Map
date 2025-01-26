import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import EsriMap from '@arcgis/core/Map';

import { MapCommand, ViewCommand } from '@/arcgis/typings/commandtypes';
import {
  validateThamesWaterDischargeAttributes,
  validateWaterCompanyDischargeAttributes,
} from '@/utils/discharge/schemas';

import { streamApiUrls, thamesWaterApiUrl } from './config/constants';
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
  private layers: __esri.FeatureLayer[] = [];

  constructor(
    private setPathname: (assetId: string, company: string) => void,
    private initialCsoId?: string,
    private initialCompany?: string,
  ) {
    this.initializeLayers();
  }

  private initializeLayers(): void {
    // Add Thames Water layer
    this.layers.push(
      new FeatureLayer({
        url: thamesWaterApiUrl,
        title: 'Thames Water',
        id: 'Thames Water',
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
    );

    // Add other water company layers
    Object.entries(streamApiUrls).forEach(([title, url]) => {
      this.layers.push(
        new FeatureLayer({
          title,
          id: title,
          url,
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
      );
    });
  }

  async executeOnMap(map: EsriMap): Promise<ViewCommand> {
    this.layers.forEach((layer) => map.add(layer));

    return {
      executeOnView: async (view: __esri.MapView) => {
        const layerViews = await Promise.all(this.layers.map((layer) => view.whenLayerView(layer)));

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
    reactiveUtils.when(
      () => !!view.popup.viewModel,
      () => {
        if (!view.popup.viewModel.hasEventListener('trigger-action')) {
          view.popup.viewModel.addHandles([
            view.popup.viewModel.on('trigger-action', (event) => {
              if (event.action.id === 'copy-link') {
                navigator.clipboard.writeText(window.location.href);
              }
            }),
          ]);
        }
      },
      { once: true },
    );
  }

  private setupFeatureSelectionHandling(
    view: __esri.MapView,
    layerView: __esri.FeatureLayerView,
  ): void {
    reactiveUtils.watch(
      () => view.popup.visible,
      (visible) => {
        if (!visible) {
          this.setPathname('', '');
        }
      },
    );

    reactiveUtils.watch(
      () => view.popup.selectedFeature,
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
          this.setPathname(id, layerView.layer.title);
          await this.zoomToFeature(view, graphic);
        }
      },
    );
  }

  private async zoomToFeature(view: __esri.MapView, graphic: __esri.Graphic): Promise<void> {
    view.popup.location = graphic.geometry as __esri.Point;
    await view.goTo({
      target: view.popup.location,
      zoom: 12,
    });
  }

  private async handleInitialCso(view: __esri.MapView): Promise<void> {
    const company = this.initialCompany;
    const csoId = this.initialCsoId;

    if (!company || !csoId) return;

    // find the layer with the company
    const layer = view.map.findLayerById(company) as __esri.FeatureLayer;
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
        view.openPopup({ features });
        view.goTo({ target: features[0], zoom: 12 }, { animate: false });
      }
    }
  }
}
