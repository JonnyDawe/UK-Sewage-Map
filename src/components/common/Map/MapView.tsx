import React from "react";
import * as promiseUtils from "@arcgis/core/core/promiseUtils";
import MapOverlay from "./MapOverlay";
import { MountedMapsContext } from "./useMapView";

interface MapViewProps {
    id: string;
    style?: React.CSSProperties;
    initialiseMap: (container: HTMLDivElement) => Promise<__esri.MapView>;
}

export type MapContextValue = {
    mapView: __esri.MapView;
};

export type MapViewRef = {
    mapView: __esri.MapView | null;
};

// MapContext value will always be defined when used
export const MapContext = React.createContext<MapContextValue>({} as MapContextValue);

const MapView = React.forwardRef(function MapView(
    { id, style, initialiseMap, children }: React.PropsWithChildren<MapViewProps>,
    ref: React.Ref<MapViewRef>
) {
    const mountedMapsContext = React.useContext(MountedMapsContext);
    const [mapViewInstance, setMapViewInstance] = React.useState<__esri.MapView | null>(null);
    const mapContainerRef = React.useRef<HTMLDivElement>(null);
    const mapViewContextValue = React.useRef<MapViewRef>({
        mapView: null
    });

    React.useEffect(() => {
        let isMounted = true;
        let mapview: __esri.MapView;

        // runs after the first render
        if (mapContainerRef.current) {
            Promise.resolve(initialiseMap(mapContainerRef.current))
                .then(async (loadedMapView) => {
                    // if in vite development mode add a small wait here to handle
                    // React strict mode double run of useEffect.
                    if (import.meta.env.DEV) {
                        await setTimeout(() => {}, 1000);
                    }

                    if (!isMounted) {
                        return () => {};
                    }

                    // store the mapView instance in state
                    mapview = loadedMapView;
                    setMapViewInstance(mapview);

                    // store the mapView instance in context
                    mapViewContextValue.current.mapView = mapview;

                    // call the onMapMount function to notify the parent component of the new attached mapView.
                    mountedMapsContext.onMapMount(mapview, id);
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
            isMounted = false;
            if (mapview) {
                // call the onMapUnmount function to notify the parent component of the new detached mapView.
                mountedMapsContext.onMapUnmount(id);

                // Destroy the map and view
                mapview.map.destroy();
                mapview.destroy();
            }
        };
    }, []);

    const containerStyle: React.CSSProperties = React.useMemo(
        () => ({
            position: "relative",
            width: "100%",
            height: "100%",
            ...style
        }),
        [style]
    );

    React.useImperativeHandle(ref, () => mapViewContextValue.current);

    return (
        <div ref={mapContainerRef} id={id} style={containerStyle}>
            {mapViewInstance && mapViewInstance.ready && (
                <MapContext.Provider value={{ mapView: mapViewInstance }}>
                    <MapOverlay>{children}</MapOverlay>
                </MapContext.Provider>
            )}
        </div>
    );
});

export default MapView;
