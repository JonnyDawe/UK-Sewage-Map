import React from "react";
import { MapContext } from "./MapView";

type MountedMapsContextValue = {
    maps: { [id: string]: __esri.MapView };
    onMapMount: (map: __esri.MapView, id: string) => void;
    onMapUnmount: (id: string) => void;
};

export const MountedMapsContext = React.createContext<MountedMapsContextValue>({
    maps: {},
    onMapMount: () => {},
    onMapUnmount: () => {}
});

export const MapProvider = ({ children }: React.PropsWithChildren) => {
    const [maps, setMaps] = React.useState<{ [id: string]: __esri.MapView }>({});

    const onMapMount = React.useCallback((map: __esri.MapView, id: string = "default") => {
        setMaps((currMaps) => {
            if (id === "current") {
                throw new Error("'current' cannot be used as map id");
            }
            if (currMaps[id]) {
                throw new Error(`Multiple maps with the same id: ${id}`);
            }
            return { ...currMaps, [id]: map };
        });
    }, []);

    const onMapUnmount = React.useCallback((id: string = "default") => {
        setMaps((currMaps) => {
            if (currMaps[id]) {
                const nextMaps = { ...currMaps };
                delete nextMaps[id];
                return nextMaps;
            }
            return currMaps;
        });
    }, []);

    return (
        <MountedMapsContext.Provider
            value={{
                maps,
                onMapMount,
                onMapUnmount
            }}
        >
            {children}
        </MountedMapsContext.Provider>
    );
};

export type MapCollection = {
    [id: string]: __esri.MapView | undefined;
    current?: __esri.MapView;
};

export function useMap(): MapCollection {
    const maps = React.useContext(MountedMapsContext)?.maps;
    const currentMap = React.useContext(MapContext);

    if (!maps && !currentMap) {
        throw new Error("useMap must be used within a MapProvider");
    }

    const mapsWithCurrent: MapCollection = React.useMemo(() => {
        return { ...maps, current: currentMap.mapView };
    }, [maps, currentMap]);

    return mapsWithCurrent;
}
