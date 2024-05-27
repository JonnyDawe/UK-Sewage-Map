"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import React from "react";

const MapNoSSR = dynamic<
    React.PropsWithChildren<{ defaultTheme: "light" | "dark"; csoId?: string }>
>(() => import("@/components/SewageMap/MapView"), {
    ssr: false
});

const SewageMapView = ({ csoId }: { csoId?: string }) => {
    const { resolvedTheme } = useTheme();
    const { current: initialCSOId } = React.useRef(csoId);
    const { current: initialTheme } = React.useRef<"light" | "dark">(
        resolvedTheme === "dark" ? "dark" : "light"
    );

    return <MapNoSSR defaultTheme={initialTheme} csoId={initialCSOId}></MapNoSSR>;
};

export { SewageMapView };
