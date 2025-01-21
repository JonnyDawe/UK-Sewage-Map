export type ColorMode = "light" | "dark";

export function isValidTheme(theme: string): theme is ColorMode {
    return theme === "light" || theme === "dark";
}
