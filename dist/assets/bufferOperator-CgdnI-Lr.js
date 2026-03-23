import { gl as c, bI as x } from './index.lazy-BHTpPf8X.js';
import { f as G, l as g } from './operatorBuffer-Jc2YoKAs.js';
import {
  getSpatialReference as f,
  fromGeometry as y,
  toGeometry as u,
  fromGeometries as I,
} from './jsonConverter-kXdRGJAn.js';
import './index-DqxZnyqH.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-DO3Gv-47.js';
import './GeometryCleaner-BEJM7I4l-BHcstiW-.js';
import './OperatorGeneralize-BakAlj2i.js';
function C(o, e, i = {}) {
  const { unit: t } = i,
    a = f(o);
  t && a && (e = c(e, t, a));
  const m = y(o),
    r = m.getSpatialReference();
  return u(G(m.getGeometry(), r, e), r);
}
function D(o, e, i = {}) {
  let { maxDeviation: t = NaN, maxVerticesInFullCircle: a = 96, union: m = !1, unit: r } = i;
  const n = f(o);
  r && n && ((e = e.map((p) => c(p, r, n))), t && (t = c(t, r, n)));
  const [l, s] = I(o);
  return g(l, s, e, t, a, m)
    .map((p) => u(p, s))
    .filter(x);
}
export { C as execute, D as executeMany };
