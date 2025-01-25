/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CACHE_ID: string;
  readonly VITE_ESRI_BASEMAP_ID_DARK: string;
  readonly VITE_ESRI_BASEMAP_ID_LIGHT: string;
  readonly VITE_ESRI_BASEMAP_ID_LIGHT_GRAY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
