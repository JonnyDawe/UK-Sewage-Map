import { useRouter } from '@tanstack/react-router';
import { useMemo } from 'react';

import { SetBasemapCommand } from '@/components/Map/commands/SetBasemapCommand';
import { useThemeRef } from '@/components/Theme/hooks/useTheme';
import { MapCommand } from '@/lib/arcgis/typings/commandtypes';
import { useCallbackRef } from '@/lib/hooks/useCallbackRef';

import { AddDischargeSourcesCommand } from '../commands/AddDischargeSources/AddDischargeSourcesCommand';
import { AddRiverDischargeCommand } from '../commands/AddRiverDischarge/AddRiverDischargeCommand';
import { AddTidalPolygonCommand } from '../commands/AddTidalPolygons/AddTidalPolygonCommand';
import { SetupLayerManagerControlCommand } from '../commands/SetupLayerManagerControlCommand';
import { LayerManagerContext } from '../layermanagement/LayerManagerProvider';

interface UseMapCommandsProps {
  initialAssetId?: string;
  initialCompany?: string;
}

export function useMapCommands({
  initialAssetId,
  initialCompany,
}: UseMapCommandsProps): MapCommand[] {
  const layerManagerActor = LayerManagerContext.useActorRef();
  const theme = useThemeRef();
  const router = useRouter();

  const setPathname = useCallbackRef((assetId: string, company: string) => {
    router.navigate({
      to: '/',
      search: assetId && company ? { asset_id: assetId, company: company } : {},
    });
  });

  return useMemo(
    (): MapCommand[] => [
      new SetupLayerManagerControlCommand(layerManagerActor),
      new SetBasemapCommand(theme.current ?? 'light'),
      new AddTidalPolygonCommand(),
      new AddRiverDischargeCommand(layerManagerActor),
      new AddDischargeSourcesCommand(
        setPathname,
        layerManagerActor,
        initialAssetId,
        initialCompany,
      ),
    ],
    [layerManagerActor, theme, setPathname, initialAssetId, initialCompany],
  );
}
