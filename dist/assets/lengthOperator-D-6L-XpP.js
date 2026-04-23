import { gk as i } from './index.lazy-BFilFZ3v.js';
import {
  fromGeometryToGXGeometry as a,
  getSpatialReference as c,
} from './jsonConverter-DC7TwnBw.js';
import './index-DShQM7Xx.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './SimpleGeometryCursor-B92kdZ15.js';
function g(e, m = {}) {
  const { unit: o } = m;
  let t = a(e).calculateLength2D();
  const r = c(e);
  return t && o && r && (t = i(t, r, o)), t;
}
export { g as execute };
