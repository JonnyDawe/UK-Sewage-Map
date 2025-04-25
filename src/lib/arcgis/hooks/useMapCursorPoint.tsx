import { useEffect, useState } from 'react';

import { getLonLatFromMapPoint } from '../util/geometry';

interface MapCursorPosition {
  mapPoint: __esri.Point | null;
  screenPoint: { x: number; y: number } | null;
  latitude: number | undefined;
  longitude: number | undefined;
}

export function useMapCursorPoint(mapView: __esri.MapView): MapCursorPosition {
  const [position, setPosition] = useState<MapCursorPosition>({
    mapPoint: null,
    latitude: undefined,
    longitude: undefined,
    screenPoint: null,
  });

  useEffect(() => {
    const pointerMoveHandler = mapView.on('pointer-move', (e) => {
      const point = mapView.toMap({
        x: e.x,
        y: e.y,
      });

      const lonLatPoint = getLonLatFromMapPoint(point);
      if (!lonLatPoint) {
        return;
      }

      const { longitude, latitude } = lonLatPoint;

      setPosition({
        mapPoint: point,
        latitude,
        longitude,
        screenPoint: { x: e.x, y: e.y },
      });
    });

    const mapViewContainerLeaveHandler = () => {
      setPosition({
        mapPoint: null,
        latitude: undefined,
        longitude: undefined,
        screenPoint: null,
      });
    };
    mapView.container?.addEventListener('pointerleave', mapViewContainerLeaveHandler);

    return () => {
      pointerMoveHandler.remove();
      mapView.container?.removeEventListener('pointerleave', mapViewContainerLeaveHandler);
    };
  }, [mapView]);

  return position;
}
