const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/OperatorGeodeticDensifyByLength-CjvvQm1Y.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/ProjectionTransformation-Cq_-pOos.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
    ]),
) => i.map((i) => d[i]);
import { _ as i } from './index-DShQM7Xx.js';
import { s as a } from './SimpleGeometryCursor-B92kdZ15.js';
import { ek as s, el as _, em as c } from './index.lazy-BFilFZ3v.js';
let n;
function f() {
  return !!n && _();
}
async function y() {
  if (!f()) {
    const [t, r] = await Promise.all([
      i(
        () => import('./OperatorGeodeticDensifyByLength-CjvvQm1Y.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
      i(
        () => import('./ProjectionTransformation-Cq_-pOos.js').then((e) => e.aW),
        __vite__mapDeps([3, 2, 1, 4, 5, 6, 7]),
      )
        .then((e) => e.aG)
        .then(({ injectPe: e }) => e),
      s(),
    ]);
    (n = new t.OperatorGeodeticDensifyByLength()), r(c);
  }
}
function P(t, r, e, o) {
  return n.execute(t, r, e, o, null);
}
function d(t, r, e, o) {
  const u = n.executeMany(new a(t), r, e, o, null);
  return Array.from(u);
}
function h() {
  return n.supportsCurves();
}
export { h as a, d as c, y as i, f as s, P as u };
