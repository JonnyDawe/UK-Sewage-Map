import EsriMap from '@arcgis/core/Map';
import { useEffect, useState } from 'react';

import { useMapCommandExecuter } from '@/lib/arcgis/hooks/useMapCommandExecuter';
import type { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';
import { mapSingleton } from '@/lib/arcgis/util/MapSingleton';

interface UseMapSingletonResult {
  map: EsriMap | null;
  postInitCommands: ViewCommand[];
  isLoading: boolean;
  error: Error | null;
}

export function useMapSingleton(
  commands: MapCommand[],
  initialMap?: EsriMap,
): UseMapSingletonResult {
  const { error, isExecuting, executeCommands } = useMapCommandExecuter();
  const [map, setMap] = useState<EsriMap | null>(() => mapSingleton.getMap());
  const [postInitCommands, setPostInitCommands] = useState<ViewCommand[]>(() =>
    mapSingleton.getPostInitCommands(),
  );
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    if (map) return; // Already have a map

    let isCancelled = false;

    const initializeMap = async () => {
      setIsInitializing(true);

      try {
        const result = await mapSingleton.getOrCreateMap(commands, executeCommands, initialMap);

        if (!isCancelled) {
          setMap(result.map);
          setPostInitCommands(result.postInitCommands);
        }
      } catch (initError) {
        if (!isCancelled) {
          console.error('Map initialization error:', initError);
        }
      } finally {
        if (!isCancelled) {
          setIsInitializing(false);
        }
      }
    };

    initializeMap();

    return () => {
      isCancelled = true;
    };
  }, [map, commands, executeCommands, initialMap]);

  return {
    map,
    postInitCommands,
    isLoading: isExecuting || isInitializing,
    error,
  };
}
