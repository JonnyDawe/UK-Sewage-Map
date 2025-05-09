import { Point } from '@arcgis/core/geometry';
import { SpatialReference } from '@arcgis/core/geometry';
import * as projectOperator from '@arcgis/core/geometry/operators/projectOperator.js';

import { isDefined } from '@/lib/types/typeGuards';
export function getLonLatFromMapPoint(
  point: Point,
): { longitude: number; latitude: number } | null {
  const WGS84Point = projectOperator.execute(point, SpatialReference.WGS84);

  if (!isDefined(WGS84Point) || Array.isArray(WGS84Point) || WGS84Point.type !== 'point') {
    return null;
  }

  const { longitude, latitude } = WGS84Point;
  if (!isDefined(longitude) || !isDefined(latitude)) {
    return null;
  }

  return {
    longitude,
    latitude,
  };
}
