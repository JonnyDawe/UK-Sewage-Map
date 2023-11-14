import React from "react";
import styled from "@emotion/styled";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import Footer from "../Footer/Footer";
import InformationModal from "../Modal/InformationModal";
import RainRadarPopover from "../RainRadar/RainRadarPopover";
import { MapContext } from "../common/Map/MapView";
import { useMap } from "../common/Map/useMapView";

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
    const { current: currentMapView } = useMap();

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
