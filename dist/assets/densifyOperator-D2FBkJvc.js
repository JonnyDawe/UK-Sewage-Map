import { gl as s, bI as _, ab as l } from './index.lazy-BHTpPf8X.js';
import './Transformation2D-Bb72B6CZ.js';
import { o as v } from './ProjectionTransformation-DO3Gv-47.js';
import './jsonConverter-kXdRGJAn.js';
import { s as d } from './SimpleGeometryCursor-B92kdZ15.js';
import {
  fromGeometry as p,
  getSpatialReference as m,
  toGeometry as f,
} from './apiConverter-Dm_24RD5.js';
const i = new v();
function M(r, e, o, n) {
  return i.execute(r, e, o, n, null);
}
function O(r, e, o, n) {
  const t = i.executeMany(new d(r), e, o, n, null);
  return Array.from(t);
}
function S() {
  return i.supportsCurves();
}
function x(r, e, o = {}) {
  let { maxAngleInDegrees: n = 0, maxDeviation: t = 0, unit: u } = o;
  const a = m(r);
  return u && ((e = s(e, u, a)), t && (t = s(t, u, a))), f(M(p(r), e, t, l(n)), a);
}
function y(r, e, o = {}) {
  let { maxAngleInDegrees: n = 0, maxDeviation: t = 0, unit: u } = o;
  const a = r.map(p),
    c = m(r);
  return (
    u && ((e = s(e, u, c)), t && (t = s(t, u, c))),
    O(a, e, t, l(n))
      .map((b) => f(b, c))
      .filter(_)
  );
}
const g = S(),
  G = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: x, executeMany: y, supportsCurves: g },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  w = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: x, executeMany: y, supportsCurves: g },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { w as d, G as l };
