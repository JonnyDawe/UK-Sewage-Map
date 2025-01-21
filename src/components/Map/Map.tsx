"use client";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-locate";
import "@arcgis/map-components/dist/components/arcgis-placement";
import "@arcgis/map-components/dist/components/arcgis-scale-bar";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-zoom";

import Extent from "@arcgis/core/geometry/Extent.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";
import styled from "@emotion/styled";
import React from "react";

import { ArcMapView } from "@/arcgis/components/ArcView/ArcMapView";
import { useInitialTheme } from "@/components/Theme/hooks/useThemeState";

import { ColorMode } from "../Theme/types";
import { useMapInitialization } from "./hooks/useMapInitialisation";
import { RiverDischargeGeoJsonLayer } from "./layers/riverDischarge";
import { ThamesTidalFeatureLayer } from "./layers/thamesTidalPolygon";
import { MapUI } from "./widgets/MapUI";
import { SearchWidget } from "./widgets/SearchWidget/SearchWidget";

const ManualPositionWrapper = styled.div`
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

function ManualPositioned({ children }: { children: React.ReactNode }) {
    return <ManualPositionWrapper className="map-overlay">{children}</ManualPositionWrapper>;
}

type MapViewProps = {
    initialCSOId: string | undefined;
    initialTheme: ColorMode;
};

const Map = React.memo(({ initialCSOId, initialTheme }: MapViewProps) => {
    const { map, error, isLoading, handleViewReady } = useMapInitialization({
        initialTheme,
        initialAssetId: initialCSOId
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ArcMapView
            constraints={{
                minZoom: 7
            }}
            map={map}
            onarcgisViewReadyChange={(event) => handleViewReady(event.target.view)}
            extent={
                new Extent({
                    xmin: -316027,
                    ymin: 6602768,
                    xmax: 133422,
                    ymax: 6847978,
                    spatialReference: SpatialReference.WebMercator
                })
            }
            highlightOptions={{
                fillOpacity: 0,
                haloOpacity: 1
            }}
            popup={{
                defaultPopupTemplateEnabled: false,
                visibleElements: {
                    collapseButton: false
                },
                dockOptions: {
                    buttonEnabled: false
                },
                highlightEnabled: true
            }}
        >
            <ThamesTidalFeatureLayer />
            <RiverDischargeGeoJsonLayer />

            <arcgis-placement position="top-left">
                <arcgis-zoom />
            </arcgis-placement>
            <arcgis-placement position="top-left">
                <arcgis-locate />
            </arcgis-placement>

            <arcgis-placement position="manual">
                <ManualPositioned>
                    <SearchWidget />
                </ManualPositioned>
            </arcgis-placement>

            <arcgis-placement position="manual">
                <ManualPositioned>
                    <MapUI />
                </ManualPositioned>
            </arcgis-placement>
        </ArcMapView>
    );
});

export default function MapView({ csoId }: { csoId?: string }) {
    const { current: initialCSOId } = React.useRef(csoId);
    const initialTheme = useInitialTheme();

    if (!initialTheme) {
        return null; // block rendering until the initial theme is resolved
    }

    return <Map initialCSOId={initialCSOId} initialTheme={initialTheme} />;
}
