import React from "react";

import { updateEsriTheme } from "../utils/updateEsriTheme";
import { useThemeState } from "./useThemeState";

export function useThemeLogic(isChild: boolean, initialTheme: string | undefined) {
    const { resolvedTheme: currentTheme, setTheme } = useThemeState();

    React.useEffect(() => {
        if (initialTheme && !isChild) {
            updateEsriTheme(initialTheme === "light" ? "light" : "dark");
        }
    }, [initialTheme, isChild]);

    const toggleColorMode = React.useCallback(() => {
        const newMode = currentTheme === "light" ? "dark" : "light";
        setTheme(newMode);
        updateEsriTheme(newMode);
    }, [currentTheme, setTheme]);

    return { toggleColorMode };
}
