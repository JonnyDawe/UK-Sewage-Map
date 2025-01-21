"use client";
import { ThemeProps } from "@radix-ui/themes";
import * as React from "react";

import { useThemeLogic } from "./hooks/useThemeLogic";
import { useInitialTheme } from "./hooks/useThemeState";
import { AppThemeContext } from "./ThemeContext";

interface AppThemeProviderProps {
    theme: Partial<ThemeProps>;
    isChild: boolean;
    children: React.ReactNode;
}

export const AppThemeProvider = ({ theme, isChild, children }: AppThemeProviderProps) => {
    const initialTheme = useInitialTheme();
    const { toggleColorMode } = useThemeLogic(isChild, initialTheme);

    const contextValue = React.useMemo(
        () => ({
            toggleColorMode,
            theme: { ...theme }
        }),
        [toggleColorMode, theme]
    );

    return <AppThemeContext.Provider value={contextValue}>{children}</AppThemeContext.Provider>;
};
