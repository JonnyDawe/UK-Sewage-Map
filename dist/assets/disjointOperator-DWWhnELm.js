import { h as r } from './ProjectionTransformation-Cq_-pOos.js';
import { fromGeometry as m, fromGeometryToGXGeometry as i } from './jsonConverter-DC7TwnBw.js';
import './Transformation2D-Bb72B6CZ.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
const n = new r();
function u(t, o) {
  const e = m(t);
  return n.execute(e.getGeometry(), i(o), e.getSpatialReference());
}
export { u as execute };
