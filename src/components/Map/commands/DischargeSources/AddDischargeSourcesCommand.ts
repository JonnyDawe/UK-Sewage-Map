import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import EsriMap from "@arcgis/core/Map";

import { MapCommand, ViewCommand } from "@/arcgis/typings/commandtypes";

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
                console.log("view", view);
                const layerView = await view.whenLayerView(this.featureLayer);

                reactiveUtils.when(
                    () => view.popup.viewModel,
                    (popupViewModel) => {
                        if (!popupViewModel) return;
                        popupViewModel.on("trigger-action", function (event) {
                            if (event.action.id === "copy-link") {
                                navigator.clipboard.writeText(window.location.href);
                            }
                        });
                    },
                    {
                        once: true
                    }
                );

                reactiveUtils.when(
                    () => view.popup.visible,
                    (visible) => {
                        if (!visible) {
                            this.setPathname("");
                        }
                    }
                );

                reactiveUtils.when(
                    () => view.popup.selectedFeature,
                    async (graphic) => {
                        if (!graphic) return;
                        if (graphic?.layer === layerView.layer || graphic?.layer === null) {
                            if (graphic.attributes["PermitNumber"]) {
                                this.setPathname(graphic.attributes["PermitNumber"]);
                            }

                            view.popup.location = view.popup.selectedFeature
                                .geometry as __esri.Point;
                            await view.goTo({
                                target: view.popup.location,
                                zoom: 12
                            });
                        }
                    }
                );

                if (this.initialCsoId) {
                    const query = layerView.layer.createQuery();
                    query.where = `PermitNumber = '${this.initialCsoId}'`;
                    query.returnGeometry = true;

                    const { features } = await layerView.layer.queryFeatures(query);
                    view.openPopup({ features });
                    view.goTo({ target: features[0], zoom: 12 }, { animate: false });
                }
            }
        };
    }
}
