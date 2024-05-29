"use client";
import { ThemeOptions } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import * as React from "react";

import useInitialTheme from "@/hooks/useInitialTheme";

interface ThemeContextProps {
    theme: Partial<ThemeOptions>;
    toggleColorMode: () => void;
}

type ColorMode = "light" | "dark";

function updateDarkMode(colorMode: ColorMode) {
    const dark = document.querySelector<HTMLLinkElement>("#arcgis-maps-sdk-theme-dark");
    const light = document.querySelector<HTMLLinkElement>("#arcgis-maps-sdk-theme-light");

    if (dark && light) {
        dark.disabled = colorMode === "light";
        light.disabled = colorMode === "dark";
    }

    const calciteMode = document.querySelector(
        `.calcite-mode-${colorMode === "dark" ? "light" : "dark"}`
    );
    if (calciteMode) {
        calciteMode.classList.remove("calcite-mode-dark", "calcite-mode-light");
        calciteMode.classList.add(`calcite-mode-${colorMode}`);
    }
}

const AppThemeContext = React.createContext<ThemeContextProps>({
    theme: {},
    toggleColorMode: () => {}
});

function useAppTheme() {
    return React.useContext(AppThemeContext);
}

function AppThemeProvider({
    theme,
    isChild,
    children
}: React.PropsWithChildren<{ theme: Partial<ThemeOptions>; isChild: boolean }>) {
    const { resolvedTheme: currentTheme, setTheme } = useTheme();

    const initialTheme = useInitialTheme();

    React.useEffect(() => {
        if (initialTheme && !isChild) {
            updateDarkMode(initialTheme === "light" ? "light" : "dark");
        }
    }, [initialTheme, isChild]);

    const toggleColorMode = () => {
        const newMode = currentTheme === "light" ? "dark" : "light";
        setTheme(newMode);
        updateDarkMode(newMode);
    };

    return (
        <AppThemeContext.Provider value={{ toggleColorMode, theme: { ...theme } }}>
            {children}
        </AppThemeContext.Provider>
    );
}

export { AppThemeContext, AppThemeProvider, useAppTheme };
