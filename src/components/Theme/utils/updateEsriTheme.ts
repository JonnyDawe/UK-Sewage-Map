import { ColorMode } from "../types";

export function updateEsriTheme(colorMode: ColorMode) {
    const themes = {
        dark: document.querySelector<HTMLLinkElement>("#arcgis-maps-sdk-theme-dark"),
        light: document.querySelector<HTMLLinkElement>("#arcgis-maps-sdk-theme-light")
    };

    if (themes.dark && themes.light) {
        themes.dark.disabled = colorMode === "light";
        themes.light.disabled = colorMode === "dark";
    }

    const oppositeMode = colorMode === "dark" ? "light" : "dark";
    const calciteMode = document.querySelector(`.calcite-mode-${oppositeMode}`);

    if (calciteMode) {
        calciteMode.classList.remove("calcite-mode-dark", "calcite-mode-light");
        calciteMode.classList.add(`calcite-mode-${colorMode}`);
    }
}
