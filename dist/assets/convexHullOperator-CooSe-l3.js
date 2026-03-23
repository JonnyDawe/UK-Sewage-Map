import { M as i, v as s, _ as p } from './operatorConvexHull-BhJ39CvM.js';
import {
  fromGeometry as f,
  toGeometry as r,
  fromGeometries as c,
  fromGeometryToGXGeometry as u,
} from './jsonConverter-kXdRGJAn.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-DO3Gv-47.js';
import './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
function B(e) {
  const o = f(e);
  return r(i(o.getGeometry()), o.getSpatialReference());
}
function C(e, o = {}) {
  const { merge: t = !1 } = o,
    [m, a] = c(e);
  return s(m, t).map((n) => r(n, a));
}
function P(e) {
  return p(u(e));
}
export { B as execute, C as executeMany, P as isConvex };
