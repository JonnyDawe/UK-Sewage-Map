import {
  lC as Z,
  gn as k,
  a5 as N,
  jU as z,
  ah as _,
  av as u,
  ag as A,
  d3 as y,
  cY as x,
  c_ as b,
  d0 as l,
  bd as G,
  _ as Q,
  ar as v,
  Z as M,
} from './index.lazy-BFilFZ3v.js';
import { e as J } from './mat3f64-q3fE-ZOt.js';
import { e as K } from './mat4f64-Dk4dwAN8.js';
import { e as W } from './quatf64-aQ5IuZRd.js';
let S = class E {
  constructor(e) {
    (this._create = e), (this._items = new Array()), (this._itemsPtr = 0);
  }
  get() {
    return (
      this._itemsPtr === 0 && Z(() => this._reset()),
      this._itemsPtr >= this._items.length && this._items.push(this._create()),
      this._items[this._itemsPtr++]
    );
  }
  _reset() {
    const e = 2 * this._itemsPtr;
    this._items.length > e && (this._items.length = e), (this._itemsPtr = 0);
  }
  static createVec2f64() {
    return new E(k);
  }
  static createVec3f64() {
    return new E(N);
  }
  static createVec4f64() {
    return new E(z);
  }
  static createMat3f64() {
    return new E(J);
  }
  static createMat4f64() {
    return new E(K);
  }
  static createQuatf64() {
    return new E(W);
  }
  get test() {}
};
const Nt = S.createVec2f64(),
  f = S.createVec3f64(),
  B = S.createVec4f64();
S.createMat3f64();
const Et = S.createMat4f64(),
  ht = S.createQuatf64();
function Tt(t, e, r) {
  const n = u(t, e) / u(t, t);
  return b(r, t, n);
}
function X(t, e) {
  return u(t, e) / x(t);
}
function _t(t, e) {
  const r = u(t, e) / (x(t) * x(e));
  return -y(r);
}
function Mt(t, e, r) {
  _(U, t), _(L, e);
  const n = u(U, L),
    c = y(n),
    s = A(U, U, L);
  return u(s, r) < 0 ? 2 * Math.PI - c : c;
}
const U = N(),
  L = N();
function St(t) {
  const e = t[0] * t[0] + t[4] * t[4] + t[8] * t[8],
    r = t[1] * t[1] + t[5] * t[5] + t[9] * t[9],
    n = t[2] * t[2] + t[6] * t[6] + t[10] * t[10];
  return Math.sqrt(Math.max(e, r, n));
}
function mt(t, e) {
  const r = Math.sqrt(e[0] * e[0] + e[4] * e[4] + e[8] * e[8]),
    n = Math.sqrt(e[1] * e[1] + e[5] * e[5] + e[9] * e[9]),
    c = Math.sqrt(e[2] * e[2] + e[6] * e[6] + e[10] * e[10]);
  return l(t, r, n, c), t;
}
function tt(t, e, r) {
  Math.abs(t[0]) > Math.abs(t[1]) ? l(e, 0, 1, 0) : l(e, 1, 0, 0),
    A(r, t, e),
    A(e, r, t),
    _(r, r),
    _(e, e);
}
function j(t = g) {
  return [t[0], t[1], t[2], t[3]];
}
function $t(t = g[0], e = g[1], r = g[2], n = g[3]) {
  return H(t, e, r, n, B.get());
}
function et(t, e) {
  return H(e[0], e[1], e[2], e[3], t);
}
function gt(t) {
  return t;
}
function H(t, e, r, n, c = j()) {
  return (c[0] = t), (c[1] = e), (c[2] = r), (c[3] = n), c;
}
function rt(t, e, r) {
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
    c = Math.abs(n - 1) > 1e-5 && n > 1e-12 ? 1 / Math.sqrt(n) : 1;
  return (
    (r[0] = e[0] * c),
    (r[1] = e[1] * c),
    (r[2] = e[2] * c),
    (r[3] = -(r[0] * t[0] + r[1] * t[1] + r[2] * t[2])),
    r
  );
}
function nt(t, e, r, n = j()) {
  const c = r[0] - e[0],
    s = r[1] - e[1],
    a = r[2] - e[2],
    i = t[0] - e[0],
    D = t[1] - e[1],
    O = t[2] - e[2],
    m = s * O - a * D,
    w = a * i - c * O,
    d = c * D - s * i,
    p = m * m + w * w + d * d,
    V = Math.abs(p - 1) > 1e-5 && p > 1e-12 ? 1 / Math.sqrt(p) : 1;
  return (
    (n[0] = m * V),
    (n[1] = w * V),
    (n[2] = d * V),
    (n[3] = -(n[0] * t[0] + n[1] * t[1] + n[2] * t[2])),
    n
  );
}
function Y(t, e, r, n = 0, c = Math.floor(r * (1 / 3)), s = Math.floor(r * (2 / 3))) {
  if (r < 3) return !1;
  e($, n);
  let a = c,
    i = !1;
  for (; a < r - 1 && !i; ) e(T, a), a++, (i = !v($, T));
  if (!i) return !1;
  for (a = Math.max(a, s), i = !1; a < r && !i; )
    e(h, a),
      a++,
      M(C, $, T),
      _(C, C),
      M(P, T, h),
      _(P, P),
      (i = !v($, h) && !v(T, h) && Math.abs(u(C, P)) < ct);
  return i ? (nt($, T, h, t), !0) : (n !== 0 || c !== 1 || s !== 2) && Y(t, e, r, 0, 1, 2);
}
function lt(t, e, r = !0) {
  const n = e.length / 3;
  return Y(t, (c, s) => l(c, e[3 * s + 0], e[3 * s + 1], e[3 * s + 2]), r ? n - 1 : n);
}
const ct = 0.99619469809,
  $ = N(),
  T = N(),
  h = N(),
  C = N(),
  P = N();
function Dt(t, e, r) {
  return e !== t && et(t, e), (t[3] = -u(t, r)), t;
}
function Ot(t, e) {
  return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e;
}
function Ut(t, e, r, n) {
  return A(h, e, t), rt(r, h, n);
}
function Ct(t, e, r, n) {
  return R(q(t, e, M(f.get(), r, e), at, n));
}
function Pt(t, e, r) {
  return e != null && R(q(t, e.origin, e.direction, st, r));
}
function At(t, e, r) {
  return R(q(t, e.origin, e.vector, I.NONE, r));
}
function bt(t, e, r) {
  return R(q(t, e.origin, e.vector, I.CLAMP, r));
}
function Ft(t, e) {
  return F(t, e) >= 0;
}
function Rt(t, e) {
  const r = u(t, e.ray.direction),
    n = -F(t, e.ray.origin);
  if (r > -1e-6 && r < 1e-6) return n > 0;
  const c = n / r;
  return r > 0 ? c < e.c1 && (e.c1 = c) : c > e.c0 && (e.c0 = c), e.c0 <= e.c1;
}
function qt(t, e, r) {
  const n = b(f.get(), t, -t[3]),
    c = it(t, M(f.get(), e, n), f.get());
  return Q(r, c, n), r;
}
function wt(t, e, r, n) {
  const c = t,
    s = f.get(),
    a = f.get();
  tt(c, s, a);
  const i = M(f.get(), r, e),
    D = X(s, i),
    O = X(a, i),
    m = X(c, i);
  return l(n, D, O, m);
}
function it(t, e, r) {
  const n = b(f.get(), t, u(t, e));
  return M(r, e, n), r;
}
function dt(t, e) {
  return Math.abs(F(t, e));
}
function F(t, e) {
  return u(t, e) + t[3];
}
var o;
function R(t) {
  return t === o.INTERSECTS_INSIDE_OUT || t === o.INTERSECTS_OUTSIDE_IN;
}
function q(t, e, r, n, c) {
  const s = u(t, r),
    a = F(t, e);
  if (s === 0) return a >= 0 ? o.INSIDE : o.OUTSIDE;
  let i = -a / s;
  return (
    n & I.CLAMP && (i = G(i, 0, 1)),
    (!(n & I.INFINITE_MIN) && i < 0) || (!(n & I.INFINITE_MAX) && i > 1)
      ? a >= 0
        ? o.INSIDE
        : o.OUTSIDE
      : (Q(c, e, b(c, r, i)), a >= 0 ? o.INTERSECTS_INSIDE_OUT : o.INTERSECTS_OUTSIDE_IN)
  );
}
(function (t) {
  (t[(t.INTERSECTS_INSIDE_OUT = 0)] = 'INTERSECTS_INSIDE_OUT'),
    (t[(t.INTERSECTS_OUTSIDE_IN = 1)] = 'INTERSECTS_OUTSIDE_IN'),
    (t[(t.INSIDE = 2)] = 'INSIDE'),
    (t[(t.OUTSIDE = 3)] = 'OUTSIDE');
})(o || (o = {}));
const g = [0, 0, 1, 0];
var I;
(function (t) {
  (t[(t.NONE = 0)] = 'NONE'),
    (t[(t.CLAMP = 1)] = 'CLAMP'),
    (t[(t.INFINITE_MIN = 4)] = 'INFINITE_MIN'),
    (t[(t.INFINITE_MAX = 8)] = 'INFINITE_MAX');
})(I || (I = {}));
const at = I.INFINITE_MIN | I.INFINITE_MAX,
  st = I.INFINITE_MAX;
export {
  lt as A,
  $t as D,
  Rt as G,
  qt as H,
  wt as J,
  Ot as L,
  j as M,
  gt as O,
  Ut as P,
  dt as Q,
  H as U,
  F as V,
  Et as a,
  _t as b,
  f as c,
  tt as d,
  X as f,
  mt as g,
  et as h,
  Tt as i,
  Ct as k,
  rt as l,
  St as m,
  ht as o,
  nt as p,
  At as q,
  B as r,
  Nt as t,
  Mt as u,
  Y as v,
  bt as w,
  Pt as x,
  Dt as y,
  Ft as z,
};
