import React from "react";
import styled from "styled-components";

import MapOverlay from "./MapOverlay";

const MapContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

async function loadMap(container: HTMLDivElement) {
    const { initialiseMapview } = await import("./mapviewlogic");
    return initialiseMapview(container);
}

function MapView() {
    const [mapView, setMapView] = React.useState<__esri.MapView | null>(null);
    const mapRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        let asyncCleanup: Promise<() => void>;

        // runs after the first render
        if (mapRef.current) {
            asyncCleanup = loadMap(mapRef.current).then(({ app, cleanup }) => {
                setMapView(app.view ?? null);
                return cleanup;
            });
        }

        return () => {
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
