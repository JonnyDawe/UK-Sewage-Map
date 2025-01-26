import Basemap from '@arcgis/core/Basemap';

import { useCurrentMapView } from '@/arcgis/hooks';
import { useCallbackRef } from '@/hooks/useCallbackRef';

import MapButton from '../common/Buttons/MapButton';
import { MoonIcon, SunIcon } from '../common/Icons';
import { useTheme } from '../Theme/hooks/useTheme';

export function DarkModeToggle() {
  const mapView = useCurrentMapView();
  const { toggleTheme, currentTheme } = useTheme();

  const updateBasemap = useCallbackRef(() => {
    const newBasemap =
      currentTheme === 'light'
        ? import.meta.env.VITE_ESRI_BASEMAP_ID_DARK
        : import.meta.env.VITE_ESRI_BASEMAP_ID_LIGHT;
    const map = mapView.map;
    map.set(
      'basemap',
      new Basemap({
        portalItem: { id: newBasemap },
      }),
    );
  });

  return (
    <MapButton
      onClick={() => {
        toggleTheme();
        updateBasemap();
        if (mapView.popup.visible) {
          const currentFeatures = [...mapView.popup.features];
          mapView.popup.close();
          mapView.popup.open({ features: currentFeatures });
        }
      }}
    >
      {currentTheme === 'light' ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
    </MapButton>
  );
}
