import React from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

import GlobalStyles from "../App/GlobalStyles";
import { PopUpBody } from "./PopUpContent/PopUpBody";
import { PopUpHeader } from "./PopUpContent/PopUpHeader";
import { getRenderPropsFromGraphic } from "./utils";

export function setEsriPopupHTMLContent({ graphic }: { graphic: __esri.Graphic }) {
    const container = document.createElement("div");
    const root = createRoot(container);
    const { dischargeInterval, alertStatus, location } = getRenderPropsFromGraphic(graphic);

    root.render(
        <React.StrictMode>
            <GlobalStyles></GlobalStyles>
            <PopUpBody {...{ dischargeInterval, alertStatus, locationName: location }}></PopUpBody>
        </React.StrictMode>
    );
    return container;
}

export function setEsriPopupTitle({ graphic }: { graphic: __esri.Graphic }) {
    const container = document.createElement("div");
    const root = createRoot(container);
    const { alertStatus, feeds, location } = getRenderPropsFromGraphic(graphic);
    flushSync(() => {
        root.render(
            <React.StrictMode>
                <PopUpHeader {...{ alertStatus, feeds, location }}></PopUpHeader>
            </React.StrictMode>
        );
    });

    return container.innerHTML;
}
