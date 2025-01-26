'use client';

import '@arcgis/map-components/dist/components/arcgis-map';

import Extent from '@arcgis/core/geometry/Extent.js';
import SpatialReference from '@arcgis/core/geometry/SpatialReference.js';
import React from 'react';

import { ArcMapView } from '@/arcgis/components/ArcView/ArcMapView';
import useIsMobile from '@/hooks/useIsMobile';

import { useMapInitialization } from './hooks/useMapInitialisation';
import { MapUI } from './widgets/MapUI';

type MapViewProps = {
  initialCSOId: string | undefined;
  initialCompany: string | undefined;
};

const initialMapProps = {
  constraints: {
    minZoom: 6,
  },
  extent: new Extent({
    xmin: -767095,
    ymin: 6482731,
    xmax: 451004,
    ymax: 7386522,
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

  const isMobile = useIsMobile();
  const padding: __esri.ViewPadding = React.useMemo(
    () => ({
      bottom: isMobile ? window.innerWidth / 2 : 0,
    }),
    [isMobile],
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ArcMapView
      map={map}
      onarcgisViewReadyChange={(ev) => {
        console.log('view ready', ev.target.view);
        handleViewReady(ev.target.view);
      }}
      {...initialMapProps}
      padding={padding}
    >
      <MapUI />
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
