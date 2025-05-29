import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const legendOpen = atomWithStorage(
  `legendOpen-${import.meta.env.VITE_CACHE_ID}`,
  true,
  undefined,
  {
    getOnInit: true,
  },
);

export type MapTool = 'layer-filter' | 'rain-radar' | undefined;
export const currentMapTool = atom<MapTool>(undefined);

const storedFilteredLayers = atomWithStorage<string[] | 'all'>(
  `filteredLayers-${import.meta.env.VITE_CACHE_ID}`,
  'all',
  undefined,
  {
    getOnInit: true,
  },
);

export const filteredLayersAtom = atom(
  (get) => {
    const value = get(storedFilteredLayers);
    return value === 'all' ? 'all' : new Set(value);
  },
  (_get, set, newValue: Set<string> | 'all') => {
    if (newValue === 'all') {
      set(storedFilteredLayers, 'all');
      return;
    }
    // if it is an empty set, set it to 'all'
    if (newValue.size === 0) {
      set(storedFilteredLayers, 'all');
    } else {
      set(storedFilteredLayers, Array.from(newValue));
    }
  },
);
