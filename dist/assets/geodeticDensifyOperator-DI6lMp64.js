const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/apiConverter-Dm_24RD5.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/ProjectionTransformation-DO3Gv-47.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/jsonConverter-kXdRGJAn.js',
    ]),
) => i.map((i) => d[i]);
import { b0 as l } from './index.lazy-BHTpPf8X.js';
import { _ as b } from './index-DqxZnyqH.js';
import { i as x, a as O, s as S, c as P, u as T } from './operatorGeodeticDensify-C_6Mtlou.js';
import { e as d } from './geodeticCurveType-CirnHLSB.js';
let n, u, c, s, m;
function p() {
  return !!n && S();
}
async function _() {
  if (!p()) {
    const [e] = await Promise.all([
      b(() => import('./apiConverter-Dm_24RD5.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])),
      x(),
    ]);
    (n = e.fromGeometry),
      (u = e.fromSpatialReference),
      (c = e.getSpatialReference),
      (s = e.toGeometry),
      (m = O());
  }
}
function y(e, t, a = {}) {
  const { curveType: i = 'geodesic', unit: r } = a;
  r && (t = l(t, r, 'meters'));
  const o = c(e);
  return s(T(n(e), t, u(o), d[i]), o);
}
function g(e, t, a = {}) {
  const { curveType: i = 'geodesic', unit: r } = a;
  r && (t = l(t, r, 'meters'));
  const o = e.map(n),
    f = c(e);
  return P(o, t, u(f), d[i]).map((v) => s(v, f));
}
const $ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        execute: y,
        executeMany: g,
        isLoaded: p,
        load: _,
        get supportsCurves() {
          return m;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  z = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        execute: y,
        executeMany: g,
        isLoaded: p,
        load: _,
        get supportsCurves() {
          return m;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { z as a, $ as g, _ as l };
