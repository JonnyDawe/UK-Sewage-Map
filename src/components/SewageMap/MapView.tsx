import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-locate";
import "@arcgis/map-components/dist/components/arcgis-placement";
import "@arcgis/map-components/dist/components/arcgis-scale-bar";
import "@arcgis/map-components/dist/components/arcgis-search";

import Basemap from "@arcgis/core/Basemap";
import esriConfig from "@arcgis/core/config";
import Extent from "@arcgis/core/geometry/Extent.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";
import esriMap from "@arcgis/core/Map";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource";
import styled from "@emotion/styled";
import React from "react";

import { DischargePointFeatureLayer } from "@/components/SewageMap/layers/dischargeSources";
import { RiverDischargeGeoJsonLayer } from "@/components/SewageMap/layers/riverDischarge";
import { ThamesTidalFeatureLayer } from "@/components/SewageMap/layers/thamesTidalPolygon";
import { MapUI } from "@/components/SewageMap/MapUI";
import useInitialTheme from "@/hooks/useInitialTheme";

esriConfig.apiKey = process.env.NEXT_PUBLIC_ESRI_PUBLIC_API_KEY ?? "";
esriConfig.apiKey = process.env.NEXT_PUBLIC_ESRI_PUBLIC_API_KEY ?? "";
const darkBasemapId = process.env.NEXT_PUBLIC_ESRI_BASEMAP_ID_DARK ?? "darkbasemapid";
const lightBasemapId = process.env.NEXT_PUBLIC_ESRI_BASEMAP_ID_LIGHT ?? "lightbasemapid";

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 0px;
    top: 0;
    bottom: unset;
    @media (max-width: 640px) {
        bottom: 0;
        top: unset;
        padding-top: 0px;
        padding-bottom: 50px;
    }
`;

const MemoizedMapView = React.memo(
    ({ initialCSOId, map }: { initialCSOId: string | undefined; map: esriMap }) => (
        <arcgis-map
            style={{ height: "100%" }}
            constraints={{
                minZoom: 7
            }}
            map={map}
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
            <DischargePointFeatureLayer initialCsoId={initialCSOId} />
            <arcgis-placement position="top-left">
                <arcgis-locate />
            </arcgis-placement>

            <arcgis-placement position="top-right">
                <SearchWrapper>
                    <SearchHackWrapper />
                </SearchWrapper>
            </arcgis-placement>

            <arcgis-placement position="bottom-left">
                <MapUI />
            </arcgis-placement>
        </arcgis-map>
    )
);

export default function MapView({ csoId }: { csoId?: string }) {
    const { current: initialCSOId } = React.useRef(csoId);
    const initialTheme = useInitialTheme();

    const map = React.useMemo(
        () =>
            new esriMap({
                basemap:
                    initialTheme === "light"
                        ? new Basemap({ portalItem: { id: lightBasemapId } })
                        : new Basemap({ portalItem: { id: darkBasemapId } })
            }),
        [initialTheme]
    );

    if (!initialTheme) {
        return null; // block rendering until the initial theme is resolved
    }

    return <MemoizedMapView map={map} initialCSOId={initialCSOId}></MemoizedMapView>;
}

const SearchHackWrapper = () => {
    const props = {
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
        ]
    };
    return <arcgis-search {...props} />;
};
