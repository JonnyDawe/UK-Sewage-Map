import { s as i } from './sphere-CNvInDV-.js';
import { Z as c, a5 as o, cY as v, ag as w, al as a } from './index.lazy-BFilFZ3v.js';
import { v as M } from './lineSegment-DLB3mRkx.js';
import './plane-pBXJ95gF.js';
function b(r) {
  return r ? { p0: a(r.p0), p1: a(r.p1), p2: a(r.p2) } : { p0: o(), p1: o(), p2: o() };
}
function x(r, p, n) {
  const m = p[0] - r[0],
    f = p[1] - r[1],
    u = n[0] - r[0],
    e = n[1] - r[1];
  return 0.5 * Math.abs(m * e - f * u);
}
function O(r, p, n) {
  return c(s, p, r), c(t, n, r), 0.5 * v(w(s, s, t));
}
new i(M);
new i(() => b());
const s = o(),
  t = o();
export { O as S, x as v };
