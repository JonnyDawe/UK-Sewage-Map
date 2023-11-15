import React from "react";
import { createPortal } from "react-dom";

import { MapContext } from "./MapView";

function MapOverlay({ children }: React.PropsWithChildren) {
    const { mapView } = React.useContext(MapContext);

    if (!mapView) {
        return null;
    }

    return (
        <>
            {createPortal(
                // The React elements to render:
                <>{children}</>,
                // The target DOM container to hold the output:
                mapView.container.querySelector("#__MapOverlay") as HTMLDivElement
            )}
        </>
    );
}

export default MapOverlay;
