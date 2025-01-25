import Basemap from '@arcgis/core/Basemap';
import BasemapToggleVM from '@arcgis/core/widgets/BasemapToggle/BasemapToggleViewModel';
import React from 'react';

import { useArcState, useCurrentMapView } from '@/arcgis/hooks';

import MapButton from '../common/Buttons/MapButton';
import { MoonIcon, SunIcon } from '../common/Icons';
import { useTheme, useThemeRef } from '../Theme/hooks/useTheme';

export function DarkModeToggle() {
  const mapView = useCurrentMapView();
  const { toggleTheme, currentTheme } = useTheme();
  const themeRef = useThemeRef();

  const widget = React.useMemo(() => {
    return new BasemapToggleVM({
      view: mapView,
      nextBasemap:
        themeRef.current === 'light'
          ? new Basemap({
              portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_DARK },
            })
          : new Basemap({
              portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_LIGHT },
            }),
    });
  }, [mapView, themeRef]);

  const [state] = useArcState(widget, 'state');

  return (
    <MapButton
      disabled={state !== 'ready'}
      onClick={() => {
        toggleTheme();
        widget.toggle();

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
