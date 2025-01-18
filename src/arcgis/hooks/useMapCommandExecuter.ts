import EsriMap from "@arcgis/core/Map";
import { useCallback, useState } from "react";

import { MapCommand } from "@/arcgis/typings/commandtypes";

export function useMapCommandExecuter() {
    const [map, setMap] = useState<EsriMap | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isExecuting, setIsExecuting] = useState(false);

    const executeCommand = useCallback(async (command: MapCommand) => {
        setIsExecuting(true);
        try {
            await command.execute();
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An error occurred"));
        } finally {
            setIsExecuting(false);
        }
    }, []);

    const executeCommands = useCallback(
        async (commands: MapCommand[]) => {
            for (const command of commands) {
                await executeCommand(command);
            }
        },
        [executeCommand]
    );

    return {
        map,
        setMap,
        error,
        isExecuting,
        executeCommands
    };
}
