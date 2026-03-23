import { bI as c } from './index.lazy-BHTpPf8X.js';
import { o as f, u as n } from './operatorIntersection-BtbFFy6m.js';
import {
  fromGeometry as p,
  toGeometry as m,
  fromGeometryToGXGeometry as i,
  fromGeometries as s,
} from './jsonConverter-kXdRGJAn.js';
import './index-DqxZnyqH.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-DO3Gv-47.js';
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
