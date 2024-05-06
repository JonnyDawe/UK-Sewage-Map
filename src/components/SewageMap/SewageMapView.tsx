"use client";
import dynamic from "next/dynamic";
import React from "react";

import MapView from "../common/Map/newMapView";
import { AppThemeContext } from "../Theme/ThemeProvider";

async function loadMap(container: HTMLDivElement, theme: "dark" | "light", csoId: string) {
    const { initialiseMapview } = await import("../../utils/map/initialisemap");
    return initialiseMapview(container, theme, csoId);
}

const MapNoSSR = dynamic<{ defaultTheme: "light" | "dark" }>(
    () => import("@components/common/Map/newMapView"),
    {
        ssr: false
    }
);

export function SewageMapView({ children }: React.PropsWithChildren) {
    const { appearance } = React.useContext(AppThemeContext).theme;
    const mode = appearance === "dark" ? "dark" : "light";
    const csoId = "";

    return <MapNoSSR defaultTheme={mode} />;
}
