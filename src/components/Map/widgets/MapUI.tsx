"use client";
import styled from "@emotion/styled";

import { DarkModeToggle } from "../../DarkModeToggle/DarkModeToggle";
import Footer from "../../Footer/Footer";
import InformationModal from "../../Modal/InformationModal";
import RainRadarPopover from "../../RainRadar/RainRadarPopover";

const ButtonsGroup = styled.div`
    pointer-events: all;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export function MapUI() {
    return (
        <>
            <ButtonsGroup>
                <InformationModal></InformationModal>
                <RainRadarPopover></RainRadarPopover>
                <DarkModeToggle></DarkModeToggle>
            </ButtonsGroup>
            <Footer></Footer>
        </>
    );
}
