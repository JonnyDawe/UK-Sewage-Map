'use client';
import '@arcgis/map-components/dist/components/arcgis-locate';
import '@arcgis/map-components/dist/components/arcgis-placement';

import styled from '@emotion/styled';

import InformationModal from '../../Modal/InformationModal';
import { DarkModeToggle } from './DarkModeToggle/DarkModeToggle';
import Footer from './Footer/Footer';
import LayerFilterPopover from './LayerFilter/LayerFilter';
import LegendPopover from './Legend/LegendPopover';
import LocateControl from './LocateControl/LocateControl';
import RainRadarPopover from './RainRadar/RainRadarPopover';
import { SearchWidget } from './SearchWidget/SearchWidget';
import ZoomControl from './ZoomControl/ZoomControl';

const ButtonsGroup = styled.div`
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
        <ZoomControl />
      </arcgis-placement>
      <arcgis-placement position="top-left">
        <ButtonsGroup>
          <LocateControl />
          <LegendPopover />
        </ButtonsGroup>
      </arcgis-placement>

      <arcgis-placement position="top-right">
        <ButtonsGroup>
          <InformationModal />
          <DarkModeToggle />
          <RainRadarPopover />
          <LayerFilterPopover />
        </ButtonsGroup>
      </arcgis-placement>
      <arcgis-placement position="manual">
        <ManualPositioned>
          <SearchWidget />
          <Footer></Footer>
        </ManualPositioned>
      </arcgis-placement>
    </>
  );
}
