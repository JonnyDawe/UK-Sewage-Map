"use client";
import styled from "@emotion/styled";
import { useCurrentMapView } from "arcgis-react";

import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
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

export function SewageMapOverlay() {
    const currentMapView = useCurrentMapView();

    if (!currentMapView) {
        return null;
    }

    return (
        <>
            <ModalLaunchButtonWrapper>
                <InformationModal></InformationModal>
                <RainRadarPopover view={currentMapView}></RainRadarPopover>
                <DarkModeToggle view={currentMapView}></DarkModeToggle>
            </ModalLaunchButtonWrapper>
            <Footer></Footer>
        </>
    );
}
