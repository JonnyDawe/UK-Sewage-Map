import React from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

import Footer from "../Footer/Footer";
import InformationModal from "../Modal/InformationModal";
import RainRadarPopover from "../RainRadar/RainRadarPopover";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

const ModalLaunchButtonWrapper = styled.div`
    pointer-events: all;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

function MapOverlay({ view }: { view: __esri.MapView }) {
    if (!view.container) {
        return;
    }

    return (
        <>
            {createPortal(
                // The React elements to render:
                <>
                    <ModalLaunchButtonWrapper>
                        <InformationModal></InformationModal>
                        <RainRadarPopover view={view}></RainRadarPopover>
                        <DarkModeToggle view={view}></DarkModeToggle>
                    </ModalLaunchButtonWrapper>
                    <Footer></Footer>
                </>,
                // The target DOM container to hold the output:
                view.container.querySelector("#__MapOverlay") as HTMLDivElement
            )}
        </>
    );
}

export default MapOverlay;
