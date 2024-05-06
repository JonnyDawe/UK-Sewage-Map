"use client";

import { useTheme } from "next-themes";

import { MapProvider } from "../components/common/Map/useMapView";
import AppTheme from "../components/Theme/AppTheme";
import { AppThemeProvider } from "../components/Theme/ThemeProvider";

export function Providers({ children }: React.PropsWithChildren) {
    const { resolvedTheme } = useTheme();
    return (
        <AppThemeProvider
            theme={{
                accentColor: "blue",
                grayColor: "gray",
                panelBackground: "solid",
                appearance: resolvedTheme === "dark" ? "dark" : "light"
            }}
            isChild={false}
        >
            <AppTheme>
                <MapProvider>{children}</MapProvider>
            </AppTheme>
        </AppThemeProvider>
    );
}
