import React from "react";
import { usePageContext } from "../../../renderer/usePageContext";
import { AppThemeContext } from "../Theme/ThemeProvider";
import MapView from "../common/Map/MapView";

async function loadMap(container: HTMLDivElement, theme: "dark" | "light", csoId: string) {
    const { initialiseMapview } = await import("../../utils/map/initialisemap");
    return initialiseMapview(container, theme, csoId);
}

export function SewageMapView({ children }: React.PropsWithChildren) {
    const { appearance } = React.useContext(AppThemeContext).theme;
    const mode = appearance === "dark" ? "dark" : "light";
    const { urlParsed } = usePageContext();
    const csoId = urlParsed.search?.["PermitNumber"] ?? "";

    return (
        <MapView
            id="sewagemap"
            initialiseMap={(container) => {
                return loadMap(container, mode, csoId);
            }}
        >
            {children}
        </MapView>
    );
}
