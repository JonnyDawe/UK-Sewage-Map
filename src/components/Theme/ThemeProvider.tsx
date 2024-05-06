"use client";
import { ThemeOptions } from "@radix-ui/themes";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

interface ThemeContextProps {
    theme: Partial<ThemeOptions>;
    toggleColorMode: () => void;
}

type ColorMode = "light" | "dark";

function updateDocumentBodyThemeClass(colorMode: ColorMode) {
    if (document?.body) {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(colorMode);
    }
}

function updateDarkMode(colorMode: ColorMode) {
    updateDocumentBodyThemeClass(colorMode);

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
    const { setTheme } = useTheme();

    React.useEffect(() => {
        if (!isChild) {
            updateDarkMode(theme.appearance === "light" ? "light" : "dark");
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = theme.appearance === "light" ? "dark" : "light";
        setTheme(newMode);
        updateDarkMode(newMode);
    };

    return (
        <AppThemeContext.Provider value={{ toggleColorMode, theme: { ...theme } }}>
            {children}
        </AppThemeContext.Provider>
    );
}

function NextThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export { AppThemeContext, AppThemeProvider, NextThemeProvider, useAppTheme };
