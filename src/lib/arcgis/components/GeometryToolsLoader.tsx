import * as coordinateFormatter from '@arcgis/core/geometry/coordinateFormatter.js';
import * as geodesicBufferOperator from '@arcgis/core/geometry/operators/geodesicBufferOperator.js';
import * as geodeticDensifyOperator from '@arcgis/core/geometry/operators/geodeticDensifyOperator.js';
import * as geodeticDistanceOperator from '@arcgis/core/geometry/operators/geodeticDistanceOperator.js';
import * as geodeticLengthOperator from '@arcgis/core/geometry/operators/geodeticLengthOperator.js';
import * as projectOperator from '@arcgis/core/geometry/operators/projectOperator.js';
import { useEffect, useState } from 'react';

export default function GeometryToolsLoader({ children }: React.PropsWithChildren) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      coordinateFormatter.load(),
      projectOperator.load(),
      geodeticLengthOperator.load(),
      geodeticDistanceOperator.load(),
      geodeticDensifyOperator.load(),
      geodesicBufferOperator.load(),
    ]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
}
