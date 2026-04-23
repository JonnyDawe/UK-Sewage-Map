import { t as r } from './OperatorTouches-7ReCoj68.js';
import { fromGeometry as m, fromGeometryToGXGeometry as i } from './jsonConverter-DC7TwnBw.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './Transformation2D-Bb72B6CZ.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
const n = new r();
function y(t, o) {
  const e = m(t);
  return n.execute(e.getGeometry(), i(o), e.getSpatialReference(), null);
}
export { y as execute };
