import React from "react";
import styled from "@emotion/styled";
import * as promiseUtils from "@arcgis/core/core/promiseUtils";
import MapOverlay from "./MapOverlay";

const MapContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

async function loadMap(container: HTMLDivElement, signal?: AbortSignal) {
    const { initialiseMapview } = await import("../../utils/map/initialisemap");
    return initialiseMapview(container, signal);
}

function MapView() {
    const [mapView, setMapView] = React.useState<__esri.MapView | null>(null);
    const mapRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        let asyncCleanup: Promise<() => void>;
        let abortController: AbortController = new AbortController();

        // runs after the first render
        if (mapRef.current) {
            asyncCleanup = loadMap(mapRef.current, abortController.signal)
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
                {mapView && mapView.ready && <MapOverlay view={mapView}></MapOverlay>}
            </MapContainer>
        </>
    );
}

export default MapView;
