"use client";

import dynamic from "next/dynamic";
import React from "react";

const MapNoSSR = dynamic<React.PropsWithChildren<{ csoId?: string }>>(
    () => import("@/components/SewageMap/MapView"),
    {
        ssr: false
    }
);

const SewageMapView = ({ csoId }: { csoId?: string }) => {
    const { current: initialCSOId } = React.useRef(csoId);

    return <MapNoSSR csoId={initialCSOId}></MapNoSSR>;
};

export { SewageMapView };
