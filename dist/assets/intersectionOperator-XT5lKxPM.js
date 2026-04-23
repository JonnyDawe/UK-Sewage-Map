import { bI as c } from './index.lazy-BFilFZ3v.js';
import { o as f, u as n } from './operatorIntersection-Dod0SDIQ.js';
import {
  fromGeometry as p,
  toGeometry as m,
  fromGeometryToGXGeometry as i,
  fromGeometries as s,
} from './jsonConverter-DC7TwnBw.js';
import './index-DShQM7Xx.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
function b(t, r) {
  const o = p(t),
    e = o.getSpatialReference();
  return m(f(o.getGeometry(), i(r), e), e);
}
function B(t, r) {
  const [o, e] = s(t);
  return n(o, i(r), e, 7)
    .map((a) => m(a, e))
    .filter(c);
}
export { b as execute, B as executeMany };
