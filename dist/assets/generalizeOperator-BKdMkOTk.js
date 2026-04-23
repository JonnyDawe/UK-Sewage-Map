import { gl as c, bI as x } from './index.lazy-BFilFZ3v.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-Cq_-pOos.js';
import './jsonConverter-DC7TwnBw.js';
import { s as _ } from './SimpleGeometryCursor-B92kdZ15.js';
import { P as b } from './OperatorGeneralize-BoGEiiFA.js';
import {
  fromGeometry as i,
  getSpatialReference as m,
  toGeometry as p,
} from './apiConverter-BgKw0xnw.js';
const a = new b();
function v(t, e, r) {
  return a.execute(t, e, r, null);
}
function M(t, e, r) {
  const o = a.executeMany(new _(t), e, r, null);
  return Array.from(o);
}
function O() {
  return a.supportsCurves();
}
function f(t, e, r = {}) {
  const { removeDegenerateParts: o = !1, unit: n } = r,
    u = m(t);
  return n && (e = c(e, n, u)), p(v(i(t), e, o), u);
}
function l(t, e, r = {}) {
  const { removeDegenerateParts: o = !1, unit: n } = r,
    u = t.map(i),
    s = m(t);
  return (
    n && (e = c(e, n, s)),
    M(u, e, o)
      .map((y) => p(y, s))
      .filter(x)
  );
}
const g = O(),
  w = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: f, executeMany: l, supportsCurves: g },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  D = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: f, executeMany: l, supportsCurves: g },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { w as c, D as g };
