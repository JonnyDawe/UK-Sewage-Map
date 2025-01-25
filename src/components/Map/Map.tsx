'use client';

import '@arcgis/map-components/dist/components/arcgis-map';
import '@arcgis/map-components/dist/components/arcgis-legend';
import '@arcgis/map-components/dist/components/arcgis-locate';
import '@arcgis/map-components/dist/components/arcgis-placement';
import '@arcgis/map-components/dist/components/arcgis-scale-bar';
import '@arcgis/map-components/dist/components/arcgis-search';
import '@arcgis/map-components/dist/components/arcgis-zoom';

import Extent from '@arcgis/core/geometry/Extent.js';
import SpatialReference from '@arcgis/core/geometry/SpatialReference.js';
import styled from '@emotion/styled';
import React from 'react';

import { ArcMapView } from '@/arcgis/components/ArcView/ArcMapView';

import { useMapInitialization } from './hooks/useMapInitialisation';
import { MapUI } from './widgets/MapUI';
import { SearchWidget } from './widgets/SearchWidget/SearchWidget';

const ManualPositionWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

function ManualPositioned({ children }: { children: React.ReactNode }) {
  return <ManualPositionWrapper className="map-overlay">{children}</ManualPositionWrapper>;
}

type MapViewProps = {
  initialCSOId: string | undefined;
  initialCompany: string | undefined;
};

const initialMapProps = {
  constraints: {
    minZoom: 7,
  },
  extent: new Extent({
    xmin: -316027,
    ymin: 6602768,
    xmax: 133422,
    ymax: 6847978,
    spatialReference: SpatialReference.WebMercator,
  }),
  highlightOptions: {
    fillOpacity: 0,
    haloOpacity: 1,
  },
  popup: {
    defaultPopupTemplateEnabled: false,
    visibleElements: {
      collapseButton: false,
    },
    dockOptions: {
      buttonEnabled: false,
    },
    highlightEnabled: true,
  },
};

const Map = React.memo(function Map({ initialCSOId, initialCompany }: MapViewProps) {
  const { map, error, isLoading, handleViewReady } = useMapInitialization({
    initialAssetId: initialCSOId,
    initialCompany: initialCompany,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ArcMapView
      map={map}
      onarcgisViewReadyChange={(ev) => handleViewReady(ev.target.view)}
      {...initialMapProps}
    >
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
          <MapUI />
        </ManualPositioned>
      </arcgis-placement>
    </ArcMapView>
  );
});

export default function MapView({ csoId, company }: { csoId?: string; company?: string }) {
  const csoIdRef = React.useRef(csoId);
  const initialCSOId = csoIdRef.current;
  const companyRef = React.useRef(company);
  const initialCompany = companyRef.current;
  return <Map initialCSOId={initialCSOId} initialCompany={initialCompany} />;
}
