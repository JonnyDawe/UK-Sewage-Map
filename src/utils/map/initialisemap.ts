import Basemap from "@arcgis/core/Basemap";
import esriConfig from "@arcgis/core/config";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Extent from "@arcgis/core/geometry/Extent.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";
import esriMap from "@arcgis/core/Map";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import esriMapView from "@arcgis/core/views/MapView";
import Locate from "@arcgis/core/widgets/Locate.js";
import Popup from "@arcgis/core/widgets/Popup.js";
import Search from "@arcgis/core/widgets/Search";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource";
import { SymbolAnimationManager } from "arcgis-animate-markers-plugin";

import { getDischargePointLayer } from "../layers/dischargeSources";
import { getRiverDischargeLayer } from "../layers/riverDischarge";
import { getThamesTidalLayer } from "../layers/thamesTidalPolygon";
import { MarkerHoverPopAnimation } from "../MarkerHoverPopAnimation";
import { removeURLParameter, updateURLParameter } from "../url";

esriConfig.apiKey = import.meta.env.VITE_ESRI_PUBLIC_API_KEY;

export async function initialiseMapview(
    mapElement: HTMLDivElement,
    theme: "light" | "dark",
    csoId: string
): Promise<__esri.MapView> {
    const dischargeSourceLayer = getDischargePointLayer();
    const dischargeTraceLayer = getRiverDischargeLayer();
    const thamesTidalLayer = getThamesTidalLayer();

    const map = new esriMap({
        basemap:
            theme === "light"
                ? new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_LIGHT } })
                : new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_DARK } }),
        layers: [thamesTidalLayer, dischargeTraceLayer, dischargeSourceLayer]
    });

    const mapView = new esriMapView({
        container: mapElement,
        constraints: {
            minZoom: 7
        },
        map: map,
        extent: new Extent({
            xmin: -316027,
            ymin: 6602768,
            xmax: 133422,
            ymax: 6847978,
            spatialReference: SpatialReference.WebMercator
        }),
        highlightOptions: {
            fillOpacity: 0,
            haloOpacity: 1
        },
        popup: new Popup({
            collapseEnabled: false,
            highlightEnabled: false
        })
    });

    initialiseMapViewWidgets(mapView);

    const sourceLayerView = await mapView.whenLayerView(dischargeSourceLayer);

    if (csoId) {
        const query = dischargeSourceLayer.createQuery();
        query.where = `PermitNumber = '${csoId}'`;
        query.returnGeometry = true;

        const { features } = await dischargeSourceLayer.queryFeatures(query);
        if (features.length) {
            mapView.popup.open({ features });
            mapView.goTo({ target: features[0], zoom: 12 });
        }
    }

    const symbolAnimationManager = new SymbolAnimationManager({
        mapView: mapView,
        layerView: sourceLayerView
    });

    const MarkerPopEffectManager = new MarkerHoverPopAnimation({
        symbolAnimationManager: symbolAnimationManager,
        mapView,
        layerView: sourceLayerView,
        to: { scale: 1.5, rotate: 5 },
        easingConfig: {
            type: "spring",
            options: {
                tension: 280,
                friction: 80
            }
        }
    });

    reactiveUtils.watch(
        () => mapView.popup?.selectedFeature,
        async (graphic) => {
            if (graphic?.layer === dischargeSourceLayer || graphic?.layer === null) {
                updateURLParameter("PermitNumber", graphic.attributes["PermitNumber"] ?? "");

                mapView.popup.viewModel.location = mapView.popup.selectedFeature
                    .geometry as __esri.Point;
                const selectedAnimatedGraphic = symbolAnimationManager.getAnimatedGraphic({
                    graphic: mapView.popup.selectedFeature
                });
                if (selectedAnimatedGraphic) {
                    const graphicsLayerView = mapView.whenLayerView(
                        symbolAnimationManager.animationGraphicsLayer
                    );
                    (await graphicsLayerView).highlight(selectedAnimatedGraphic);
                }
                graphic.symbol = await symbolUtils.getDisplayedSymbol(graphic);
                MarkerPopEffectManager.activeGraphic = graphic;

                mapView.goTo({ target: mapView.popup.selectedFeature, zoom: 12 });
            }
        }
    );

    // Ensure graphic made no longer active when popup closes
    reactiveUtils.watch(
        () => mapView.popup?.visible,
        (visible, wasVisible) => {
            if (wasVisible && !visible && mapView.ready) {
                MarkerPopEffectManager.activeGraphic = null;
                removeURLParameter("PermitNumber");
            }
        }
    );

    mapView.popup.on("trigger-action", function (event) {
        if (event.action.id === "copy-link") {
            navigator.clipboard.writeText(window.location.href);
        }
    });

    if (mapView.width <= 544) {
        mapView.padding.bottom = window.visualViewport?.height
            ? window.visualViewport.height * 0.3
            : 0;
    }
    return mapView;
}
function initialiseMapViewWidgets(mapView: esriMapView) {
    initialiseSearchWidget(mapView);
    initialiseLocatorWidget(mapView);
    initialiseOverlayDiv(mapView);
}

function initialiseLocatorWidget(mapView: esriMapView) {
    const locate = new Locate({
        view: mapView
    });
    mapView.ui.add(locate, "top-left");
}

function initialiseSearchWidget(mapView: esriMapView) {
    const searchWrapper = document.createElement("div");
    searchWrapper.classList.add("searchWrapper");
    const searchWidgetDiv = document.createElement("div");
    searchWidgetDiv.classList.add("searchWidget");
    searchWrapper.appendChild(searchWidgetDiv);
    new Search({
        view: mapView,
        includeDefaultSources: false,
        popupEnabled: false,
        sources: [
            new LocatorSearchSource({
                placeholder: "Find address or place",
                url: "https://utility.arcgis.com/usrsvcs/servers/4b613e3cb0ca4e7fb3ce8e99e5cd7a41/rest/services/World/GeocodeServer",
                countryCode: "GB",
                suggestionsEnabled: true,
                minSuggestCharacters: 2,
                maxSuggestions: 4
            })
        ],
        container: searchWidgetDiv
    });

    mapView.ui.add(searchWrapper, "manual");
}

function initialiseOverlayDiv(mapView: esriMapView) {
    const OverlayWrapper = document.createElement("div");
    OverlayWrapper.id = "__MapOverlay";
    OverlayWrapper.classList.add("mapoverlay");
    mapView.ui.add(OverlayWrapper, "manual");
}
