import { useBaseMapToggleModel } from "../../hooks/useBaseMapToggleModel";
import Basemap from "@arcgis/core/Basemap";
import MapButton from "../common/Buttons/MapButton";
import { MoonIcon, RainIcon, SunIcon } from "../common/Icons";
import { AppThemeContext } from "../Theme/ThemeProvider";
import React from "react";

export function DarkModeToggle({ view }: { view: __esri.MapView }) {
    const { theme, toggleColorMode } = React.useContext(AppThemeContext);
    const { toggle, state } = useBaseMapToggleModel({
        view,
        nextBasemap:
            theme.appearance === "light"
                ? new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_DARK } })
                : new Basemap({ portalItem: { id: import.meta.env.VITE_ESRI_BASEMAP_ID_LIGHT } })
    });

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
