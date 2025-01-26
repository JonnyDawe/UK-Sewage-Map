import * as coordinateFormatter from '@arcgis/core/geometry/coordinateFormatter.js';
import * as geodesicBufferOperator from '@arcgis/core/geometry/operators/geodesicBufferOperator.js';
import * as geodeticDistanceOperator from '@arcgis/core/geometry/operators/geodeticDistanceOperator.js';
import * as geodeticLengthOperator from '@arcgis/core/geometry/operators/geodeticLengthOperator.js';
import * as ProjectionEngine from '@arcgis/core/geometry/projection.js';
import { useEffect, useState } from 'react';

export default function GeometryToolsLoader({ children }: React.PropsWithChildren) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      coordinateFormatter.load(),
      ProjectionEngine.load(),
      geodeticLengthOperator.load(),
      geodeticDistanceOperator.load(),
      geodesicBufferOperator.load(),
    ]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
}
