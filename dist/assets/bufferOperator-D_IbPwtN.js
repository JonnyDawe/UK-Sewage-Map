import { gl as c, bI as x } from './index.lazy-BFilFZ3v.js';
import { f as G, l as g } from './operatorBuffer-Cf5hrSF5.js';
import {
  getSpatialReference as f,
  fromGeometry as y,
  toGeometry as u,
  fromGeometries as I,
} from './jsonConverter-DC7TwnBw.js';
import './index-DShQM7Xx.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './GeometryCleaner-BEJM7I4l-BHcstiW-.js';
import './OperatorGeneralize-BoGEiiFA.js';
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
