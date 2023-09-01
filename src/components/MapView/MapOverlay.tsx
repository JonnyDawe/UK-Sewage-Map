import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Footer from "../Footer/Footer";
import InformationModal from "../Modal/InformationModal";
import RainRadarPopover from "../RainRadar/RainRadarPopover";

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
    if (!view) return;

    return (
        <>
            {createPortal(
                // The React elements to render:
                <>
                    <ModalLaunchButtonWrapper>
                        <InformationModal></InformationModal>
                        <RainRadarPopover view={view}></RainRadarPopover>
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
