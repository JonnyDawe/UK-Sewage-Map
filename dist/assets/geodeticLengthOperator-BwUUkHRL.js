const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/OperatorGeodeticLength-Dk0pflxf.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/OperatorShapePreservingLength-hchA6jEC.js',
      'assets/ProjectionTransformation-DO3Gv-47.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
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
        () => import('./OperatorGeodeticLength-Dk0pflxf.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      ),
      i(
        () => import('./ProjectionTransformation-DO3Gv-47.js').then((t) => t.aW),
        __vite__mapDeps([7, 5, 8, 1, 2, 3, 4]),
      )
        .then((t) => t.aG)
        .then(({ injectPe: t }) => t),
      g(),
    ]);
    (n = new e.OperatorGeodeticLength()), r(v);
  }
}
function L(e, r, t) {
  return n.execute(e, r, t, null);
}
function E() {
  return n.supportsCurves();
}
let u, l, p, a;
function c() {
  return !!u && _();
}
async function f() {
  if (!c()) {
    const [e] = await Promise.all([
      i(() => import('./apiConverter-Dm_24RD5.js'), __vite__mapDeps([9, 5, 7, 8, 1, 2, 3, 4, 10])),
      b(),
    ]);
    (u = e.fromGeometry), (l = e.fromSpatialReference), (p = e.getSpatialReference), (a = E());
  }
}
function m(e, r = {}) {
  const { curveType: t = 'geodesic', unit: s } = r,
    d = p(e);
  let o = L(u(e), l(d), y[t]);
  return o && s && (o = P(o, 'meters', s)), o;
}
const j = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        execute: m,
        isLoaded: c,
        load: f,
        get supportsCurves() {
          return a;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  x = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        execute: m,
        isLoaded: c,
        load: f,
        get supportsCurves() {
          return a;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { j as f, x as g, f as m };
