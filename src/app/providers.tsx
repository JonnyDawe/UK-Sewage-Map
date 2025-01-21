"use client";

import { AppTheme } from "@/components/Theme/AppTheme";

import { AppThemeProvider } from "../components/Theme/ThemeProvider";

export function Providers({ children }: React.PropsWithChildren) {
    return (
        <AppThemeProvider
            theme={{
                accentColor: "blue",
                grayColor: "gray",
                panelBackground: "solid"
            }}
            isChild={false}
        >
            <AppTheme>{children}</AppTheme>
        </AppThemeProvider>
    );
}
