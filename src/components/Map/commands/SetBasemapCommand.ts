import Basemap from '@arcgis/core/Basemap';
import EsriMap from '@arcgis/core/Map';

import { MapCommand } from '@/arcgis/typings/commandtypes';
import { ColorMode } from '@/components/Theme/types';

export class SetBasemapCommand implements MapCommand {
  constructor(private theme: ColorMode) {}

  async executeOnMap(map: EsriMap): Promise<void> {
    map.basemap =
      this.theme === 'light'
        ? new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_LIGHT } })
        : new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_DARK } });
  }
}
