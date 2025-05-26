import EsriMap from '@arcgis/core/Map';
import { useRouter } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

import { SetBasemapCommand } from '@/components/Map/commands/SetBasemapCommand';
import { useThemeRef } from '@/components/Theme/hooks/useTheme';
import { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';
import { useCallbackRef } from '@/lib/hooks/useCallbackRef';

import { useMapCommandExecuter } from '../../../lib/arcgis/hooks/useMapCommandExecuter';
import { AddDischargeSourcesCommand } from '../commands/AddDischargeSources/AddDischargeSourcesCommand';
import { AddRiverDischargeCommand } from '../commands/AddRiverDischarge/AddRiverDischargeCommand';
import { AddTidalPolygonCommand } from '../commands/AddTidalPolygons/AddTidalPolygonCommand';
import { SetupLayerManagerControlCommand } from '../commands/SetupLayerManagerControlCommand';
import { LayerManagerContext } from '../layermanagement/LayerManagerProvider';

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
  const { map, setMap, error, isExecuting, executeCommands } = useMapCommandExecuter();
  const layerManagerActor = LayerManagerContext.useActorRef();
  const postInitCommandsRef = useRef<ViewCommand[]>([]);
  const theme = useThemeRef();
  const router = useRouter();
  const setPathname = useCallbackRef((assetId: string, company: string) => {
    router.navigate({
      to: '/',
      search: assetId && company ? { asset_id: assetId, company: company } : {},
    });
  });

  useEffect(() => {
    if (!map) {
      layerManagerActor.send({ type: 'RESET' });
      const mapInstance = new EsriMap();
      setMap(mapInstance);
      const commands: MapCommand[] = [];
      commands.push(new SetupLayerManagerControlCommand(layerManagerActor));
      commands.push(new SetBasemapCommand(theme.current ?? 'light'));
      commands.push(new AddTidalPolygonCommand());
      commands.push(new AddRiverDischargeCommand(layerManagerActor));
      commands.push(
        new AddDischargeSourcesCommand(
          setPathname,
          layerManagerActor,
          initialAssetId,
          initialCompany,
        ),
      );

      executeCommands(mapInstance, commands).then((results) => {
        const postInitCommands = results.filter((result): result is ViewCommand => result != null);
        postInitCommandsRef.current = postInitCommands;
      });
    }
  }, [
    map,
    theme,
    executeCommands,
    setMap,
    initialAssetId,
    initialCompany,
    setPathname,
    layerManagerActor,
  ]);

  const handleViewReady = useCallbackRef(async (view: __esri.MapView) => {
    // Execute any pending post-init commands
    await Promise.all(postInitCommandsRef.current.map((cmd) => cmd.executeOnView(view)));
  });

  return {
    map,
    error,
    isLoading: isExecuting,
    handleViewReady,
  };
}
