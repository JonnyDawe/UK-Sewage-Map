import { useTheme as useNextTheme } from "next-themes";
import React from "react";

import { isValidTheme } from "../utils/themeValidation";

export function useThemeState() {
    return useNextTheme();
}

export function useInitialTheme() {
    const { resolvedTheme } = useThemeState();
    const [initialTheme, setInitialTheme] = React.useState<"light" | "dark" | undefined>(undefined);
    const hasSetInitialTheme = React.useRef(false);

    React.useEffect(() => {
        if (resolvedTheme && isValidTheme(resolvedTheme) && !hasSetInitialTheme.current) {
            setInitialTheme(resolvedTheme);
            hasSetInitialTheme.current = true;
        }
    }, [resolvedTheme]);

    return initialTheme;
}

export function useThemeRef() {
    const { resolvedTheme } = useThemeState();
    const themeRef = React.useRef<"light" | "dark" | undefined>(undefined);

    React.useEffect(() => {
        if (resolvedTheme && isValidTheme(resolvedTheme)) {
            themeRef.current = resolvedTheme;
        }
    }, [resolvedTheme]);

    return themeRef.current;
}
