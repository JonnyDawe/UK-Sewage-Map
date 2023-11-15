import Basemap from "@arcgis/core/Basemap";
import React from "react";

import { useBaseMapToggleModel } from "../../hooks/useBaseMapToggleModel";
import MapButton from "../common/Buttons/MapButton";
import { MoonIcon, SunIcon } from "../common/Icons";
import { AppThemeContext } from "../Theme/ThemeProvider";

export function DarkModeToggle({ view }: { view: __esri.MapView }) {
    const { theme, toggleColorMode } = React.useContext(AppThemeContext);
    const [initialTheme] = React.useState(theme.appearance);

    const baseMapToggleModelInput = React.useMemo(
        () => ({
            view,
            nextBasemap:
                initialTheme === "light"
                    ? new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_DARK } })
                    : new Basemap({
                          portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_LIGHT }
                      })
        }),
        [view, initialTheme]
    );

    const { toggle, state } = useBaseMapToggleModel(baseMapToggleModelInput);

    return (
        <MapButton
            disabled={state === "disabled"}
            onClick={() => {
                toggleColorMode();
                toggle();

                if (view.popup.visible) {
                    const currentFeatures = [...view.popup.features];
                    view.popup.close();
                    view.popup.open({ features: currentFeatures });
                }
            }}
        >
            {theme.appearance === "light" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
        </MapButton>
    );
}
