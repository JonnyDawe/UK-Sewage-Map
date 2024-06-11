import PopupTemplate from "@arcgis/core/PopupTemplate";
import UniqueValueClass from "@arcgis/core/renderers/support/UniqueValueClass";
import UniqueValueGroup from "@arcgis/core/renderers/support/UniqueValueGroup";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import { SymbolAnimationManager } from "arcgis-animate-markers-plugin";
import { ArcFeatureLayer, useCurrentMapView, useWatchEffect, useWhenEffect } from "arcgis-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import arcadeRenderer from "@/constants/dischargeSourceRendererArcade";
import { ERRORICON, GREENTICKICON, POOICON, UNKNOWNICON } from "@/constants/hostedImages";

import { setEsriPopupHTMLContent, setEsriPopupTitle } from "../../DischargePopup/popupfactory";
import { MarkerHoverPopAnimation } from "../helpers/MarkerHoverPopAnimation";

const uniqueValueGroups = [
    new UniqueValueGroup({
        classes: [
            new UniqueValueClass({
                label: "Discharging",
                symbol: new PictureMarkerSymbol({ url: POOICON, width: "40", height: "40" }),
                values: "Discharging"
            }),
            new UniqueValueClass({
                label: "Not Discharging",
                symbol: new PictureMarkerSymbol({ url: GREENTICKICON, width: "20", height: "20" }),
                values: "Not Discharging"
            }),
            new UniqueValueClass({
                label: "Recent Discharge",
                symbol: new PictureMarkerSymbol({ url: ERRORICON, width: "24", height: "24" }),
                values: "Recent Discharge"
            }),
            new UniqueValueClass({
                label: "Unknown Status",
                symbol: new PictureMarkerSymbol({ url: UNKNOWNICON, width: "20", height: "20" }),
                values: "Offline"
            })
        ]
    })
];

const sizeVariable = new SizeVariable({
    valueExpression: "$view.scale",
    stops: [
        { size: 40, value: 4504.2581702617545 },
        { size: 24, value: 36034.065362094036 },
        { size: 12, value: 2306180.183174018 }
    ]
});

const dischargeRenderer = new UniqueValueRenderer({
    valueExpression: arcadeRenderer,
    uniqueValueGroups,
    visualVariables: [sizeVariable]
});

const popUpTemplate = new PopupTemplate({
    title: setEsriPopupTitle,
    returnGeometry: true,
    content: setEsriPopupHTMLContent,
    actions: [
        {
            id: "copy-link",
            className: "esri-icon-share2",
            title: "Copy Link",
            type: "button"
        }
    ]
});

const useOnDischargeSourceLayerCreate = (
    mapView?: __esri.MapView,
    initialCsoId?: string,
    layerView?: __esri.FeatureLayerView
) => {
    const pathname = usePathname();
    const { replace } = useRouter();
    const [symbolAnimationManager, setSymbolAnimationManager] =
        React.useState<SymbolAnimationManager>();

    React.useEffect(() => {
        if (!mapView || !layerView) return;

        const symbolAnimationManager = new SymbolAnimationManager({
            mapView: mapView,
            layerView: layerView
        });

        const animationLayer = symbolAnimationManager.animationGraphicsLayer;

        // ensure the animation layer is always on top
        const index = mapView.map.layers.findIndex((layer) => layer === layerView.layer);
        mapView.map.layers.reorder(animationLayer, index);

        setSymbolAnimationManager(symbolAnimationManager);

        const markerHoverPopAnimation = new MarkerHoverPopAnimation({
            symbolAnimationManager: symbolAnimationManager,
            mapView,
            layerView: layerView,
            to: { scale: 1.5, rotate: 5 },
            easingConfig: {
                type: "spring",
                options: { tension: 280, friction: 80 }
            }
        });

        const handleLayerCreated = async () => {
            if (initialCsoId) {
                const query = layerView.layer.createQuery();
                query.where = `PermitNumber = '${initialCsoId}'`;
                query.returnGeometry = true;

                const { features } = await layerView.layer.queryFeatures(query);
                if (features.length) {
                    mapView.openPopup({ features });
                    mapView.goTo({ target: features[0], zoom: 12 });
                }
            }
        };

        handleLayerCreated();

        return () => {
            symbolAnimationManager.removeAllAnimatedGraphics();

            markerHoverPopAnimation.destroy();
        };
    }, [initialCsoId, layerView, mapView]);

    useWhenEffect(
        () => mapView?.popup?.viewModel,
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

    useWatchEffect(
        () => mapView?.popup?.visible,
        (visible) => {
            if (!visible) {
                replace(pathname);
            }
        }
    );

    useWatchEffect(
        () => mapView?.popup?.selectedFeature,
        async (graphic) => {
            if (!mapView || !layerView || !symbolAnimationManager) return;
            if (graphic?.layer === layerView.layer || graphic?.layer === null) {
                symbolAnimationManager.removeAllAnimatedGraphics();

                if (graphic.attributes["PermitNumber"]) {
                    const params = new URLSearchParams();
                    params.set("PermitNumber", graphic.attributes["PermitNumber"]);
                    replace(`${pathname}?${params.toString()}`);
                }

                mapView.popup.location = mapView.popup.selectedFeature.geometry as __esri.Point;
                await mapView.goTo({ target: mapView.popup.location, zoom: 12, duration: 0 });
            }
        }
    );
};

export function DischargePointFeatureLayer({ initialCsoId }: { initialCsoId?: string }) {
    const mapView = useCurrentMapView();
    const [featureLayerView, setFeatureLayerView] = React.useState<__esri.FeatureLayerView>();

    useOnDischargeSourceLayerCreate(mapView, initialCsoId, featureLayerView);

    return (
        <ArcFeatureLayer
            url="https://services2.arcgis.com/g6o32ZDQ33GpCIu3/arcgis/rest/services/STEServiceProduction/FeatureServer"
            outFields={["*"]}
            title="Thames Water CSOs"
            renderer={dischargeRenderer}
            popupTemplate={popUpTemplate}
            popupEnabled={true}
            effect="drop-shadow(0.3px 0.5px 0.7px #a0a0925c) drop-shadow(0.4px 0.8px 1px #a0a0925c) drop-shadow(1px 2px 2.5px #a0a0925c)"
            orderBy={[{ field: "MostRecentDischargeAlertStart", order: "descending" }]}
            onLayerCreated={async (layer) => {
                const layerView = await mapView.whenLayerView(layer);
                setFeatureLayerView(layerView);
            }}
        />
    );
}
