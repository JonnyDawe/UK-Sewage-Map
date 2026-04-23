const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/jsonConverter-DC7TwnBw.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/ProjectionTransformation-Cq_-pOos.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
    ]),
) => i.map((i) => d[i]);
import { _ } from './index-DShQM7Xx.js';
import { b0 as m, bI as d } from './index.lazy-BFilFZ3v.js';
import { i as v, c as x, u as G, s as g } from './operatorGeodesicBuffer-CIu7QxqH.js';
import { e as l } from './geodeticCurveType-CirnHLSB.js';
import './SimpleGeometryCursor-B92kdZ15.js';
let c, y, f;
function N() {
  return !!c && g();
}
async function E() {
  if (!N()) {
    const [t] = await Promise.all([
      _(() => import('./jsonConverter-DC7TwnBw.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])),
      G(),
    ]);
    (c = t.fromGeometries), (y = t.fromGeometry), (f = t.toGeometry);
  }
}
function I(t, o, s = {}) {
  let { curveType: n = 'geodesic', maxDeviation: e = NaN, unit: a } = s;
  a && ((o = m(o, a, 'meters')), e && (e = m(e, a, 'meters')));
  const r = y(t),
    i = r.getSpatialReference();
  return f(v(r.getGeometry(), i, l[n], o, e), i);
}
function L(t, o, s = {}) {
  let { curveType: n = 'geodesic', maxDeviation: e = NaN, union: a = !1, unit: r } = s;
  r && ((o = o.map((u) => m(u, r, 'meters'))), e && (e = m(e, r, 'meters')));
  const [i, p] = c(t);
  return x(i, p, l[n], o, e, a)
    .map((u) => f(u, p))
    .filter(d);
}
export { I as execute, L as executeMany, N as isLoaded, E as load };
