import { ThemeOptions } from "@radix-ui/themes";
import React from "react";

interface ThemeContextProps {
    theme: Partial<ThemeOptions>;
    toggleColorMode: () => void;
}

type ColorMode = "light" | "dark";

function isColorMode(value: string): value is ColorMode {
    return value === "light" || value === "dark";
}

function updateDocumentBodyThemeClass(colorMode: ColorMode) {
    if (document?.body) {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(colorMode);
    }
}

const updateDarkMode = (colorMode: ColorMode) => {
    updateDocumentBodyThemeClass(colorMode);

    // Get references to the dark and light theme links in the DOM
    const dark = document.querySelector<HTMLLinkElement>("#arcgis-maps-sdk-theme-dark");
    const light = document.querySelector<HTMLLinkElement>("#arcgis-maps-sdk-theme-light");

    // Check if both dark and light theme links were found
    if (dark && light) {
        // Set the 'disabled' property of the links based on the colorMode
        dark.disabled = colorMode === "light";
        light.disabled = colorMode === "dark";
    }

    // Toggle Calcite mode if the element with class 'calcite-mode-dark' is found
    const calciteMode = document.querySelector(
        `.calcite-mode-${colorMode === "dark" ? "light" : "dark"}`
    );
    if (calciteMode) {
        calciteMode.classList.remove("calcite-mode-dark", "calcite-mode-light");
        calciteMode.classList.add(`calcite-mode-${colorMode}`);
    }
};

const AppThemeContext = React.createContext<ThemeContextProps>({
    theme: {},
    toggleColorMode: () => {}
});

const AppThemeProvider = ({
    theme,
    children
}: React.PropsWithChildren<{ theme: Partial<ThemeOptions> }>) => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [colorMode, setColorMode] = React.useState<ColorMode>(() => {
        let colorMode: ColorMode;
        if (theme.appearance) {
            colorMode = theme.appearance === "light" ? "light" : "dark";
        } else {
            const localStorageValue = window.localStorage.getItem("color-mode");
            colorMode = localStorageValue
                ? isColorMode(localStorageValue)
                    ? localStorageValue
                    : prefersDarkMode
                    ? "dark"
                    : "light"
                : prefersDarkMode
                ? "dark"
                : "light";
        }

        window.localStorage.setItem("color-mode", colorMode);

        return colorMode;
    });

    React.useEffect(() => {
        window.localStorage.setItem("color-mode", colorMode);
        updateDarkMode(colorMode);
    }, [colorMode]);

    const toggleColorMode = () => {
        setColorMode((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
    };

    return (
        <AppThemeContext.Provider
            value={{ toggleColorMode, theme: { ...theme, appearance: colorMode } }}
        >
            {children}
        </AppThemeContext.Provider>
    );
};

export { AppThemeContext, AppThemeProvider };
