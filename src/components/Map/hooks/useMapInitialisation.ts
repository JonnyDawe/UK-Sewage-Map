import EsriMap from "@arcgis/core/Map";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { MapCommand, ViewCommand } from "@/arcgis/typings/commandtypes";
import { SetBasemapCommand } from "@/components/Map/commands/SetBasemapCommand";
import { useCallbackRef } from "@/hooks/useCallbackRef";

import { useMapCommandExecuter } from "../../../arcgis/hooks/useMapCommandExecuter";
import { AddDischargeSourcesCommand } from "../commands/AddDischargeSources/AddDischargeSourcesCommand";
import { AddRiverDischargeCommand } from "../commands/AddRiverDischarge/AddRiverDischargeCommand";
import { AddTidalPolygonCommand } from "../commands/AddTidalPolygons/AddTidalPolygonCommand";

interface UseMapInitializationProps {
    initialAssetId?: string;
    initialTheme: "light" | "dark";
}

interface UseMapInitializationResult {
    map: EsriMap | null;
    error: Error | null;
    isLoading: boolean;
    handleViewReady: (view: __esri.MapView) => Promise<void>;
}

export function useMapInitialization({
    initialAssetId,
    initialTheme
}: UseMapInitializationProps): UseMapInitializationResult {
    const { map, setMap, error, isExecuting, executeCommands } = useMapCommandExecuter();
    const postInitCommandsRef = useRef<ViewCommand[]>([]);

    const router = useRouter();
    const pathname = usePathname();
    const setPathname = useCallbackRef((assetId: string) => {
        if (!assetId) {
            router.push(pathname);
        } else {
            router.push(`${pathname}?PermitNumber=${assetId}`);
        }
    });

    useEffect(() => {
        if (!map) {
            const mapInstance = new EsriMap();
            setMap(mapInstance);
            const commands: MapCommand[] = [];

            commands.push(new SetBasemapCommand(initialTheme));
            commands.push(new AddTidalPolygonCommand());
            commands.push(new AddRiverDischargeCommand());
            commands.push(new AddDischargeSourcesCommand(setPathname, initialAssetId));
            executeCommands(mapInstance, commands).then((results) => {
                const postInitCommands = results.filter(
                    (result): result is ViewCommand => result != null
                );
                postInitCommandsRef.current = postInitCommands;
            });
        }
    }, [map, initialTheme, executeCommands, setMap, initialAssetId, setPathname]);

    const handleViewReady = async (view: __esri.MapView) => {
        // Execute any pending post-init commands
        await Promise.all(postInitCommandsRef.current.map((cmd) => cmd.executeOnView(view)));
    };

    return {
        map,
        error,
        isLoading: isExecuting,
        handleViewReady
    };
}
