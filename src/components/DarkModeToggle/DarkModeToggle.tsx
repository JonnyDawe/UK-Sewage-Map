import Basemap from "@arcgis/core/Basemap";
import { useCurrentMapView } from "arcgis-react";
import { useTheme } from "next-themes";
import React from "react";

import { useBaseMapToggleModel } from "../../hooks/useBaseMapToggleModel";
import MapButton from "../common/Buttons/MapButton";
import { MoonIcon, SunIcon } from "../common/Icons";
import { AppThemeContext } from "../Theme/ThemeProvider";

export function DarkModeToggle() {
    const view = useCurrentMapView();
    const { toggleColorMode } = React.useContext(AppThemeContext);
    const { theme } = useTheme();
    const [initialTheme] = React.useState(theme === "dark" ? "dark" : "light");

    const baseMapToggleModelInput = React.useMemo(
        () => ({
            view,
            nextBasemap:
                initialTheme === "light"
                    ? new Basemap({
                          portalItem: { id: process.env.NEXT_PUBLIC_ESRI_BASEMAP_ID_DARK }
                      })
                    : new Basemap({
                          portalItem: { id: process.env.NEXT_PUBLIC_ESRI_BASEMAP_ID_LIGHT }
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
            {theme === "light" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
        </MapButton>
    );
}
