const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/OperatorGeodesicBuffer-DJjA13kc.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/ProjectionTransformation-Cq_-pOos.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/GeometryCleaner-BEJM7I4l-BHcstiW-.js',
    ]),
) => i.map((i) => d[i]);
import { _ as u } from './index-DShQM7Xx.js';
import { s as c } from './SimpleGeometryCursor-B92kdZ15.js';
import { ek as f, em as _, el as l } from './index.lazy-BFilFZ3v.js';
let n;
function m() {
  return !!n && l();
}
async function v() {
  if (!m()) {
    const [t, r] = await Promise.all([
      u(
        () => import('./OperatorGeodesicBuffer-DJjA13kc.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      ),
      u(
        () => import('./ProjectionTransformation-Cq_-pOos.js').then((e) => e.aW),
        __vite__mapDeps([3, 2, 1, 4, 5, 6, 7]),
      )
        .then((e) => e.aG)
        .then(({ injectPe: e }) => e),
      f(),
    ]);
    (n = new t.OperatorGeodesicBuffer()), r(_);
  }
}
function E(t, r, e, o, i) {
  return n.execute(t, r, e, o, i, !1, null);
}
function h(t, r, e, o, i, a) {
  const s = n.executeMany(new c(t), r, e, o, i, !1, a, null);
  return Array.from(s);
}
function w() {
  return n.supportsCurves();
}
export { w as a, h as c, E as i, m as s, v as u };
