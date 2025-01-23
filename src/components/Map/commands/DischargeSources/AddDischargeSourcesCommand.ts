import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import EsriMap from "@arcgis/core/Map";

import { MapCommand, ViewCommand } from "@/arcgis/typings/commandtypes";
import { validateDischargeAttributes } from "@/utils/discharge/schemas";

import { dischargePopupTemplate } from "./config/dischargePopup";
import { dischargeRenderer } from "./config/dischargeRenderer";

export class AddDischargeSourcesCommand implements MapCommand {
    private featureLayer: __esri.FeatureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/g6o32ZDQ33GpCIu3/arcgis/rest/services/STEServiceProduction/FeatureServer",
        outFields: ["*"],
        renderer: dischargeRenderer,
        popupTemplate: dischargePopupTemplate,
        popupEnabled: true,
        effect: "drop-shadow(0.3px 0.5px 0.7px #a0a0925c) drop-shadow(0.4px 0.8px 1px #a0a0925c) drop-shadow(1px 2px 2.5px #a0a0925c)"
    });

    constructor(
        private setPathname: (assetId: string) => void,
        private initialCsoId?: string
    ) {}

    async executeOnMap(map: EsriMap): Promise<ViewCommand> {
        map.add(this.featureLayer);
        return {
            executeOnView: async (view: __esri.MapView) => {
                const layerView = await view.whenLayerView(this.featureLayer);

                this.setupPopupActionHandlers(view);
                this.setupFeatureSelectionHandling(view, layerView);

                if (this.initialCsoId) {
                    await this.handleInitialCso(view, layerView);
                }
            }
        };
    }

    private setupPopupActionHandlers(view: __esri.MapView): void {
        reactiveUtils.when(
            () => !!view.popup.viewModel,
            () => {
                if (!view.popup.viewModel.hasEventListener("trigger-action")) {
                    view.popup.viewModel.addHandles([
                        view.popup.viewModel.on("trigger-action", (event) => {
                            if (event.action.id === "copy-link") {
                                navigator.clipboard.writeText(window.location.href);
                            }
                        })
                    ]);
                }
            },
            { once: true }
        );
    }

    private setupFeatureSelectionHandling(
        view: __esri.MapView,
        layerView: __esri.FeatureLayerView
    ): void {
        reactiveUtils.watch(
            () => view.popup.visible,
            (visible) => {
                if (!visible) {
                    this.setPathname("");
                }
            }
        );

        reactiveUtils.watch(
            () => view.popup.selectedFeature,
            async (graphic) => {
                if (!graphic) {
                    this.setPathname("");
                    return;
                }
                if (graphic?.layer === layerView.layer || graphic?.layer === null) {
                    const attributes = validateDischargeAttributes(graphic.attributes);
                    if (!attributes) return;

                    this.setPathname(attributes.PermitNumber ?? "");
                    await this.zoomToFeature(view, graphic);
                }
            }
        );
    }

    private async zoomToFeature(view: __esri.MapView, graphic: __esri.Graphic): Promise<void> {
        view.popup.location = graphic.geometry as __esri.Point;
        await view.goTo({
            target: view.popup.location,
            zoom: 12
        });
    }

    private async handleInitialCso(
        view: __esri.MapView,
        layerView: __esri.FeatureLayerView
    ): Promise<void> {
        const query = layerView.layer.createQuery();
        query.where = `PermitNumber = '${this.initialCsoId}'`;
        query.returnGeometry = true;

        const { features } = await layerView.layer.queryFeatures(query);
        view.openPopup({ features });
        view.goTo({ target: features[0], zoom: 12 }, { animate: false });
    }
}
