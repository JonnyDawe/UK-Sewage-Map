import Basemap from '@arcgis/core/Basemap';

import { useCurrentMapView } from '@/lib/arcgis/hooks';
import { useCallbackRef } from '@/lib/hooks/useCallbackRef';

import MapButton from '../common/Buttons/MapButton';
import SvgIcon from '../common/SvgIcon';
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
      aria-label={`switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
      onClick={() => {
        toggleTheme();
        updateBasemap();
        if (mapView.popup?.visible) {
          const currentFeatures = [...mapView.popup.features];
          mapView.popup.close();
          mapView.popup.open({ features: currentFeatures });
        }
      }}
    >
      <SvgIcon name={currentTheme === 'light' ? 'icon-moon' : 'icon-sun'} size={16}></SvgIcon>
    </MapButton>
  );
}
