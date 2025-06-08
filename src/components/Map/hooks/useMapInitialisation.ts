import EsriMap from '@arcgis/core/Map';

import { useCallbackRef } from '@/lib/hooks/useCallbackRef';

import { useMapCommands } from './useMapCommands';
import { useMapSingleton } from './useMapSingleton';

interface UseMapInitializationProps {
  initialAssetId?: string;
  initialCompany?: string;
}

interface UseMapInitializationResult {
  map: EsriMap | null;
  error: Error | null;
  isLoading: boolean;
  handleViewReady: (view: __esri.MapView) => Promise<void>;
}

export function useMapInitialization({
  initialAssetId,
  initialCompany,
}: UseMapInitializationProps): UseMapInitializationResult {
  const commands = useMapCommands({ initialAssetId, initialCompany });
  const { map, postInitCommands, isLoading, error } = useMapSingleton(commands);

  const handleViewReady = useCallbackRef(async (view: __esri.MapView) => {
    await Promise.all(postInitCommands.map((cmd) => cmd.executeOnView(view)));
  });

  return {
    map,
    error,
    isLoading,
    handleViewReady,
  };
}
