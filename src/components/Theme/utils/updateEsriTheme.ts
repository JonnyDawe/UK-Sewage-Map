import { ColorMode } from '../types';

export function updateEsriTheme(colorMode: ColorMode) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(colorMode);
  document.body.setAttribute('data-color-mode', colorMode);
  document.documentElement.style.colorScheme = colorMode;

  const themes = {
    dark: document.querySelector<HTMLLinkElement>('#arcgis-maps-sdk-theme-dark'),
    light: document.querySelector<HTMLLinkElement>('#arcgis-maps-sdk-theme-light'),
  };

  if (themes.dark && themes.light) {
    themes.dark.media = colorMode === 'dark' ? 'all' : 'not all';
    themes.light.media = colorMode === 'light' ? 'all' : 'not all';
  }

  const oppositeMode = colorMode === 'dark' ? 'light' : 'dark';
  const calciteMode = document.querySelector(`.calcite-mode-${oppositeMode}`);

  if (calciteMode) {
    calciteMode.classList.remove('calcite-mode-dark', 'calcite-mode-light');
    calciteMode.classList.add(`calcite-mode-${colorMode}`);
  }
}
