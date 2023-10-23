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

function createEsriStylesheet(href: string) {
    const linkElement = document.createElement("link");
    linkElement.type = "text/css";
    linkElement.rel = "stylesheet";
    linkElement.href = href;
    linkElement.id = "themeStylesheet";

    const head = document.head || document.getElementsByTagName("head")[0];
    const existingLink = document.getElementById("themeStylesheet");

    if (existingLink) {
        head.insertBefore(linkElement, existingLink);
        head.removeChild(existingLink);
    } else {
        head.insertBefore(linkElement, head.firstChild);
    }
}

function updateDocumentBodyThemeClass(colorMode: ColorMode) {
    if (document?.body) {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(colorMode);
    }
}

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

        return colorMode;
    });

    React.useEffect(() => {
        window.localStorage.setItem("color-mode", colorMode);
        updateDocumentBodyThemeClass(colorMode);
        createEsriStylesheet(
            `https://js.arcgis.com/4.27/@arcgis/core/assets/esri/themes/${colorMode}/main.css`
        );
    }, [colorMode]);

    const toggleColorMode = () => {
        const esriStyleSheet = document.getElementById("themeStylesheet");
        if (!esriStyleSheet) return;

        const newTheme = colorMode === "light" ? "dark" : "light";
        setColorMode(newTheme);
        (
            esriStyleSheet as HTMLLinkElement
        ).href = `https://js.arcgis.com/4.27/@arcgis/core/assets/esri/themes/${newTheme}/main.css`;
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
