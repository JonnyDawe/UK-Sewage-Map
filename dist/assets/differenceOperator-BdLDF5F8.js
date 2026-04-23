import './Transformation2D-Bb72B6CZ.js';
import { Q as y } from './ProjectionTransformation-Cq_-pOos.js';
import './index.lazy-BFilFZ3v.js';
import './jsonConverter-DC7TwnBw.js';
import { s } from './SimpleGeometryCursor-B92kdZ15.js';
import {
  fromGeometry as n,
  getSpatialReference as c,
  fromSpatialReference as a,
  toGeometry as p,
} from './apiConverter-BgKw0xnw.js';
const u = new y();
function x(e, r, t) {
  return u.execute(e, r, t, null);
}
function _(e, r, t) {
  const o = u.executeMany(new s(e), new s([r]), t, null);
  return Array.from(o);
}
function b() {
  return u.supportsCurves();
}
function m(e, r) {
  const t = c(e);
  return p(x(n(e), n(r), a(t)), t);
}
function f(e, r) {
  const t = e.map(n),
    o = c(e);
  return _(t, n(r), a(o)).map((l) => p(l, o));
}
const i = b(),
  O = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: m, executeMany: f, supportsCurves: i },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  C = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: m, executeMany: f, supportsCurves: i },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { C as d, O as m };
