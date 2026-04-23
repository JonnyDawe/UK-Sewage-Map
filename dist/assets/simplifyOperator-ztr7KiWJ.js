import { t as i, o as n, u as s } from './operatorSimplify-D6nu8byc.js';
import {
  fromGeometry as o,
  toGeometry as m,
  fromGeometries as p,
} from './jsonConverter-DC7TwnBw.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
function x(t) {
  const e = o(t),
    r = e.getSpatialReference();
  return m(i(e.getGeometry(), r, !1), r);
}
function S(t) {
  const [e, r] = p(t);
  return n(e, r, !1).map((a) => m(a, r));
}
function M(t) {
  const e = o(t);
  return s(e.getGeometry(), e.getSpatialReference(), !1);
}
export { x as execute, S as executeMany, M as isSimple };
