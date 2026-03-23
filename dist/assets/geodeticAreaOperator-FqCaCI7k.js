const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/OperatorGeodeticArea-DkvmrexT.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/ProjectionTransformation-DO3Gv-47.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/OperatorShapePreservingLength-hchA6jEC.js',
      'assets/apiConverter-Dm_24RD5.js',
      'assets/jsonConverter-kXdRGJAn.js',
    ]),
) => i.map((i) => d[i]);
import { ek as g, em as v, el as O, b0 as P } from './index.lazy-BHTpPf8X.js';
import { _ as i } from './index-DqxZnyqH.js';
import { e as y } from './geodeticCurveType-CirnHLSB.js';
let n;
function _() {
  return !!n && O();
}
async function b() {
  if (!_()) {
    const [e, r] = await Promise.all([
      i(
        () => import('./OperatorGeodeticArea-DkvmrexT.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      ),
      i(
        () => import('./ProjectionTransformation-DO3Gv-47.js').then((t) => t.aW),
        __vite__mapDeps([2, 1, 3, 4, 5, 6, 7]),
      )
        .then((t) => t.aG)
        .then(({ injectPe: t }) => t),
      g(),
    ]);
    (n = new e.OperatorGeodeticArea()), r(v);
  }
}
function E(e, r, t) {
  return n.execute(e, r, t, null);
}
function S() {
  return n.supportsCurves();
}
let u, l, p, a;
function s() {
  return !!u && _();
}
async function f() {
  if (!s()) {
    const [e] = await Promise.all([
      i(() => import('./apiConverter-Dm_24RD5.js'), __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7, 10])),
      b(),
    ]);
    (u = e.fromGeometry), (l = e.fromSpatialReference), (p = e.getSpatialReference), (a = S());
  }
}
function m(e, r = {}) {
  const { curveType: t = 'geodesic', unit: c } = r,
    d = p(e);
  let o = E(u(e), l(d), y[t]);
  return o && c && (o = P(o, 'square-meters', c)), o;
}
const A = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        execute: m,
        isLoaded: s,
        load: f,
        get supportsCurves() {
          return a;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  L = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        execute: m,
        isLoaded: s,
        load: f,
        get supportsCurves() {
          return a;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { A as f, L as g, f as m };
