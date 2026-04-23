import { X as r } from './ProjectionTransformation-Cq_-pOos.js';
import { fromGeometry as m, fromGeometryToGXGeometry as n } from './jsonConverter-DC7TwnBw.js';
import './Transformation2D-Bb72B6CZ.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
const i = new r();
function G(t, o) {
  const e = m(t);
  return i.execute(e.getGeometry(), n(o), e.getSpatialReference(), null);
}
export { G as execute };
