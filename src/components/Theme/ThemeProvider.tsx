"use client";
import { ThemeOptions } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import * as React from "react";

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
    const { theme: appearance, setTheme } = useTheme();

    React.useEffect(() => {
        if (!isChild) {
            updateDarkMode(appearance === "light" ? "light" : "dark");
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = appearance === "light" ? "dark" : "light";
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
