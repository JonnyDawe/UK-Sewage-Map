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
                ? new Basemap({ portalItem: { id: "a72079f8d71b411db805debac9a69421" } })
                : new Basemap({ portalItem: { id: "d9f8389625d54a139349c7ca2c9783db" } })
    });

    return (
        <MapButton
            disabled={state === "disabled"}
            onClick={() => {
                toggleColorMode();
                toggle();
                view.popup?.close();
            }}
        >
            {theme.appearance === "light" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
        </MapButton>
    );
}
