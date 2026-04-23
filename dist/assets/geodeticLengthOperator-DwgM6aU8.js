const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/OperatorGeodeticLength-ps8QpBdB.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/OperatorShapePreservingLength-DLdn29Lg.js',
      'assets/ProjectionTransformation-Cq_-pOos.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/apiConverter-BgKw0xnw.js',
      'assets/jsonConverter-DC7TwnBw.js',
    ]),
) => i.map((i) => d[i]);
import { ek as g, em as v, el as O, b0 as P } from './index.lazy-BFilFZ3v.js';
import { _ as i } from './index-DShQM7Xx.js';
import { e as y } from './geodeticCurveType-CirnHLSB.js';
let n;
function _() {
  return !!n && O();
}
async function b() {
  if (!_()) {
    const [e, r] = await Promise.all([
      i(
        () => import('./OperatorGeodeticLength-ps8QpBdB.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      ),
      i(
        () => import('./ProjectionTransformation-Cq_-pOos.js').then((t) => t.aW),
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
      i(() => import('./apiConverter-BgKw0xnw.js'), __vite__mapDeps([9, 5, 7, 8, 1, 2, 3, 4, 10])),
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
