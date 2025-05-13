import { atomWithStorage } from 'jotai/utils';

export const legendOpen = atomWithStorage(
  `legendOpen-${import.meta.env.VITE_CACHE_ID}`,
  true,
  undefined,
  {
    getOnInit: true,
  },
);
