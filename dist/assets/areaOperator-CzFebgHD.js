import { rm as c, b0 as n, bU as l } from './index.lazy-BFilFZ3v.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './jsonConverter-DC7TwnBw.js';
import { fromGeometry as p, getSpatialReference as m } from './apiConverter-BgKw0xnw.js';
function s(a, i = {}) {
  const { unit: r } = i;
  let e = p(a).calculateArea2D();
  if (e && r) {
    const t = m(a);
    if (t.isGeographic)
      throw new Error('Unable to convert from an angular area unit to a linear area unit.');
    const o = c(t);
    o !== r &&
      (o
        ? (e = n(e, o, r))
        : ((e = Math.sqrt(e)), (e *= l(t)), (e **= 2), (e = n(e, 'square-meters', r))));
  }
  return e;
}
const u = !0,
  x = Object.freeze(
    Object.defineProperty({ __proto__: null, execute: s, supportsCurves: u }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, execute: s, supportsCurves: u }, Symbol.toStringTag, {
      value: 'Module',
    }),
  );
export { y as a, x as i };
