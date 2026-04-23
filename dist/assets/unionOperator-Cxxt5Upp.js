import { o as i, t as n } from './operatorUnion-BJSWo6dj.js';
import {
  fromGeometry as p,
  toGeometry as m,
  fromGeometryToGXGeometry as a,
  fromGeometries as c,
} from './jsonConverter-DC7TwnBw.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
function M(o, t) {
  const e = p(o),
    r = e.getSpatialReference();
  return m(i(e.getGeometry(), a(t), r), r);
}
function l(o) {
  const [t, e] = c(o);
  return m(n(t, e), e);
}
export { M as execute, l as executeMany };
