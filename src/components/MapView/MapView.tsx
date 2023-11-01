import React from "react";
import styled from "@emotion/styled";
import * as promiseUtils from "@arcgis/core/core/promiseUtils";
import MapOverlay from "./MapOverlay";
import { AppThemeContext } from "../Theme/ThemeProvider";
import { usePageContext } from "../../../renderer/usePageContext";

const MapContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

async function loadMap(
    container: HTMLDivElement,
    theme: "dark" | "light",
    csoId: string,
    signal?: AbortSignal
) {
    const { initialiseMapview } = await import("../../utils/map/initialisemap");
    return initialiseMapview(container, theme, csoId, signal);
}

// To do:
// Refactor out a function that creates a map view - allow a slot for post initialisation logic
// to be added.
// create a provider which if it exists is given the reference to the mapview.

function MapView() {
    const [mapView, setMapView] = React.useState<__esri.MapView | null>(null);
    const mapRef = React.useRef<HTMLDivElement>(null);
    const { appearance } = React.useContext(AppThemeContext).theme;
    const mode = appearance === "dark" ? "dark" : "light";

    const { urlParsed } = usePageContext();
    const csoId = urlParsed.search?.["PermitNumber"] ?? "";

    React.useEffect(() => {
        let asyncCleanup: Promise<() => void>;
        let abortController: AbortController = new AbortController();

        // runs after the first render
        if (mapRef.current) {
            asyncCleanup = loadMap(mapRef.current, mode, csoId, abortController.signal)
                .then(({ app, cleanup }) => {
                    setMapView(app.view ?? null);
                    return cleanup;
                })
                .catch((error) => {
                    if (!promiseUtils.isAbortError(error)) {
                        throw error;
                    } else {
                        return () => {};
                    }
                });
        }

        return () => {
            abortController.abort();
            asyncCleanup && asyncCleanup.then((cleanup) => cleanup());
        };
    }, [mapRef]);

    return (
        <>
            <MapContainer ref={mapRef}>
                {mapView && <MapOverlay view={mapView}></MapOverlay>}
            </MapContainer>
        </>
    );
}

export default MapView;
