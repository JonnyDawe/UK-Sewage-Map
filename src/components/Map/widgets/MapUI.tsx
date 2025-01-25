'use client';
import '@arcgis/map-components/dist/components/arcgis-locate';
import '@arcgis/map-components/dist/components/arcgis-placement';
import '@arcgis/map-components/dist/components/arcgis-zoom';

import styled from '@emotion/styled';

import { DarkModeToggle } from '../../DarkModeToggle/DarkModeToggle';
import Footer from '../../Footer/Footer';
import InformationModal from '../../Modal/InformationModal';
import RainRadarPopover from '../../RainRadar/RainRadarPopover';
import { SearchWidget } from './SearchWidget/SearchWidget';

const ButtonsGroup = styled.div`
  pointer-events: all;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ManualPositionWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

function ManualPositioned({ children }: { children: React.ReactNode }) {
  return <ManualPositionWrapper className="map-overlay">{children}</ManualPositionWrapper>;
}

export function MapUI() {
  return (
    <>
      <arcgis-placement position="top-left">
        <arcgis-zoom />
      </arcgis-placement>
      <arcgis-placement position="top-left">
        <arcgis-locate />
      </arcgis-placement>
      <arcgis-placement position="manual">
        <ManualPositioned>
          <SearchWidget />
        </ManualPositioned>
      </arcgis-placement>
      <arcgis-placement position="manual">
        <ManualPositioned>
          <ButtonsGroup>
            <InformationModal></InformationModal>
            <RainRadarPopover></RainRadarPopover>
            <DarkModeToggle></DarkModeToggle>
          </ButtonsGroup>
          <Footer></Footer>
        </ManualPositioned>
      </arcgis-placement>
    </>
  );
}
