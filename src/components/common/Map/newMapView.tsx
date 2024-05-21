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
import styled from "@emotion/styled";
import { Flex } from "@radix-ui/themes";
import { SymbolAnimationManager } from "arcgis-animate-markers-plugin";
import { ArcLocate, ArcMapView, ArcSearch, ArcUI } from "arcgis-react";

import { DarkModeToggle } from "@/components/DarkModeToggle/DarkModeToggle";
import Footer from "@/components/Footer/Footer";
import InformationModal from "@/components/Modal/InformationModal";
import RainRadarPopover from "@/components/RainRadar/RainRadarPopover";
import { SewageMapOverlay } from "@/components/SewageMap/SewageMapOverlay";
import { getDischargePointLayer } from "@/constants/layers/dischargeSources";
import { getRiverDischargeLayer } from "@/constants/layers/riverDischarge";
import { getThamesTidalLayer } from "@/constants/layers/thamesTidalPolygon";

esriConfig.apiKey = process.env.NEXT_PUBLIC_ESRI_PUBLIC_API_KEY ?? "";
const darkBasemapId = process.env.NEXT_PUBLIC_ESRI_BASEMAP_ID_DARK ?? "darkbasemapid";
const lightBasemapId = process.env.NEXT_PUBLIC_ESRI_BASEMAP_ID_LIGHT ?? "lightbasemapid";

const SearchWrapper = styled(ArcUI)`
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

const MapOverlay = styled(ArcUI)`
    inset: 0;
    pointer-events: none !important;
`;

export default function MapView({ defaultTheme }: { defaultTheme: "light" | "dark" }) {
    const dischargeSourceLayer = getDischargePointLayer();
    const dischargeTraceLayer = getRiverDischargeLayer();
    const thamesTidalLayer = getThamesTidalLayer();

    const map = new esriMap({
        basemap:
            defaultTheme === "light"
                ? new Basemap({ portalItem: { id: lightBasemapId } })
                : new Basemap({ portalItem: { id: darkBasemapId } }),
        layers: [thamesTidalLayer, dischargeTraceLayer, dischargeSourceLayer]
    });

    return (
        <ArcMapView
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
            popup={
                new Popup({
                    visibleElements: {
                        collapseButton: false
                    },
                    highlightEnabled: false
                })
            }
        >
            <ArcUI position="top-left">
                <ArcLocate />
            </ArcUI>
            <SearchWrapper position="manual">
                <ArcSearch
                    includeDefaultSources={false}
                    popupEnabled={false}
                    sources={[
                        new LocatorSearchSource({
                            placeholder: "Find address or place",
                            url: "https://utility.arcgis.com/usrsvcs/servers/4b613e3cb0ca4e7fb3ce8e99e5cd7a41/rest/services/World/GeocodeServer",
                            countryCode: "GB",
                            suggestionsEnabled: true,
                            minSuggestCharacters: 2,
                            maxSuggestions: 4
                        })
                    ]}
                />
            </SearchWrapper>
            <MapOverlay position="manual">
                <SewageMapOverlay />
            </MapOverlay>
        </ArcMapView>
    );
}
