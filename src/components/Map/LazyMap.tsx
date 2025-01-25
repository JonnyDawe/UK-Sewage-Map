'use client';

import dynamic from 'next/dynamic';

const MapNoSSR = dynamic(() => import('@/components/Map/Map'), {
  ssr: false,
});

const SewageMapView = ({ csoId }: { csoId?: string }) => {
  return <MapNoSSR csoId={csoId}></MapNoSSR>;
};

export { SewageMapView };
