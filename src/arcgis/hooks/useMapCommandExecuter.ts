import EsriMap from '@arcgis/core/Map';
import { useCallback, useState } from 'react';

import { MapCommand, ViewCommand } from '@/arcgis/typings/commandtypes';

export function useMapCommandExecuter() {
  const [map, setMap] = useState<EsriMap | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const executeCommand = useCallback(async (map: EsriMap, command: MapCommand) => {
    setIsExecuting(true);
    try {
      const result = await command.executeOnMap(map);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsExecuting(false);
    }
  }, []);

  const executeCommands = useCallback(
    async (map: EsriMap, commands: MapCommand[]) => {
      const results: ViewCommand[] = [];
      for (const command of commands) {
        const result = await executeCommand(map, command);
        if (result) {
          results.push(result);
        }
      }
      return results;
    },
    [executeCommand],
  );

  return {
    map,
    setMap,
    error,
    isExecuting,
    executeCommands,
  };
}
