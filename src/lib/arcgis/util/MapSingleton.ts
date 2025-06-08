import EsriMap from '@arcgis/core/Map';

import type { MapCommand, ViewCommand } from '@/lib/arcgis/typings/commandtypes';

class MapSingleton {
  private static instance: MapSingleton;
  private mapData: { map: EsriMap; postInitCommands: ViewCommand[] } | null = null;
  private initializationPromise: Promise<{ map: EsriMap; postInitCommands: ViewCommand[] }> | null =
    null;

  private constructor() {}

  static getInstance(): MapSingleton {
    if (!MapSingleton.instance) {
      MapSingleton.instance = new MapSingleton();
    }
    return MapSingleton.instance;
  }

  async getOrCreateMap(
    commands: MapCommand[],
    executeCommands: (map: EsriMap, commands: MapCommand[]) => Promise<(ViewCommand | void)[]>,
    initialMap?: EsriMap,
  ): Promise<{ map: EsriMap; postInitCommands: ViewCommand[] }> {
    if (this.mapData?.map.destroyed) {
      this.reset();
    }

    // Return existing map if available
    if (this.mapData) {
      return this.mapData;
    }

    // Return ongoing initialization if in progress
    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    // Start new initialization
    this.initializationPromise = initialMap
      ? this.initializeExistingMap(initialMap, commands, executeCommands)
      : this.createMap(commands, executeCommands);

    try {
      this.mapData = await this.initializationPromise;
      return this.mapData;
    } finally {
      this.initializationPromise = null;
    }
  }

  private async initializeExistingMap(
    map: EsriMap,
    commands: MapCommand[],
    executeCommands: (map: EsriMap, commands: MapCommand[]) => Promise<(ViewCommand | void)[]>,
  ): Promise<{ map: EsriMap; postInitCommands: ViewCommand[] }> {
    console.log('Initializing existing map instance (singleton)');
    const results = await executeCommands(map, commands);
    const postInitCommands = results.filter((result): result is ViewCommand => result != null);
    return { map, postInitCommands };
  }

  private async createMap(
    commands: MapCommand[],
    executeCommands: (map: EsriMap, commands: MapCommand[]) => Promise<(ViewCommand | void)[]>,
  ): Promise<{ map: EsriMap; postInitCommands: ViewCommand[] }> {
    console.log('Creating new map instance (singleton)');

    const map = new EsriMap();
    const results = await executeCommands(map, commands);
    const postInitCommands = results.filter((result): result is ViewCommand => result != null);

    return { map, postInitCommands };
  }

  getMap(): EsriMap | null {
    if (this.mapData?.map.destroyed) {
      this.reset();
      return null;
    }
    return this.mapData?.map ?? null;
  }

  getPostInitCommands(): ViewCommand[] {
    return this.mapData?.postInitCommands ?? [];
  }

  isInitialized(): boolean {
    return this.mapData !== null;
  }

  reset(): void {
    this.mapData = null;
    this.initializationPromise = null;
  }
}

export const mapSingleton = MapSingleton.getInstance();
