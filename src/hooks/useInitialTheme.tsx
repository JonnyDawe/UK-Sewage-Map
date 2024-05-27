import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useInitialTheme = () => {
    const { resolvedTheme } = useTheme();
    const [initialTheme, setInitialTheme] = useState<"light" | "dark" | undefined>(undefined);

    useEffect(() => {
        if (resolvedTheme && !initialTheme) {
            setInitialTheme(resolvedTheme === "dark" ? "dark" : "light");
        }
    }, [resolvedTheme, initialTheme]);

    return initialTheme;
};

export default useInitialTheme;
