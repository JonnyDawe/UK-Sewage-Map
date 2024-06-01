import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const useInitialTheme = () => {
    const { resolvedTheme } = useTheme();
    const [initialTheme, setInitialTheme] = useState<"light" | "dark" | undefined>(undefined);

    useEffect(() => {
        if (resolvedTheme && !initialTheme) {
            setInitialTheme(resolvedTheme === "dark" ? "dark" : "light");
        }
    }, [resolvedTheme, initialTheme]);

    const memoizedInitialTheme = useMemo(() => initialTheme, [initialTheme]);

    return memoizedInitialTheme;
};

export default useInitialTheme;
