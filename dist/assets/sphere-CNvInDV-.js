import {
  lC as B,
  a0 as S,
  Z as f,
  av as T,
  _ as p,
  c_ as d,
  ag as q,
  ah as Z,
  al as A,
  a5 as l,
  cY as g,
  lD as G,
  d0 as x,
  d6 as H,
  aE as y,
  jU as k,
  ll as I,
  aC as L,
  d1 as Y,
  lm as J,
  d5 as M,
  as as K,
  d4 as Q,
  c$ as W,
  $ as tt,
  d3 as nt,
  jm as et,
} from './index.lazy-BFilFZ3v.js';
import './mat3f64-q3fE-ZOt.js';
import { c as u, a as it, b as rt } from './plane-pBXJ95gF.js';
class st {
  constructor(e) {
    (this._allocator = e), (this._items = []), (this._itemsPtr = 0), this._grow();
  }
  get() {
    return (
      this._itemsPtr === 0 && B(() => this._reset()),
      this._itemsPtr === this._items.length && this._grow(),
      this._items[this._itemsPtr++]
    );
  }
  _reset() {
    const e = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * E);
    (this._items.length = Math.min(e, this._items.length)), (this._itemsPtr = 0);
  }
  _grow() {
    for (let e = 0; e < Math.max(8, Math.min(this._items.length, E)); e++)
      this._items.push(this._allocator());
  }
}
const E = 1024;
function P(t) {
  return t ? R(A(t.origin), A(t.direction)) : R(l(), l());
}
function R(t, e) {
  return { origin: t, direction: e };
}
function kt(t, e) {
  const n = ut.get();
  return (n.origin = t), (n.direction = e), n;
}
function It(t, e = P()) {
  return ct(t.origin, t.direction, e);
}
function ot(t, e, n = P()) {
  return S(n.origin, t), f(n.direction, e, t), n;
}
function ct(t, e, n = P()) {
  return S(n.origin, t), S(n.direction, e), n;
}
function Lt(t, e) {
  const n = q(u.get(), Z(u.get(), t.direction), f(u.get(), e, t.origin));
  return T(n, n);
}
function at(t, e, n) {
  const i = T(t.direction, f(n, e, t.origin));
  return p(n, t.origin, d(n, t.direction, i)), n;
}
const ut = new st(() => P());
function O(t, e) {
  const n = g(t),
    i = G(t[2] / n),
    r = Math.atan2(t[1] / n, t[0] / n);
  return x(e, n, i, r), e;
}
const ft = j();
function j() {
  return k();
}
const ht = L,
  lt = L;
function z(t, e) {
  return y(e, t);
}
function gt(t, e) {
  return I(t[0], t[1], t[2], e);
}
function mt(t) {
  return t;
}
function dt(t) {
  t[0] = t[1] = t[2] = t[3] = 0;
}
function _t(t, e) {
  return (t[0] = t[1] = t[2] = 0), (t[3] = e), t;
}
function _(t) {
  return t[3];
}
function Mt(t) {
  return t;
}
function $t(t, e, n, i) {
  return I(t, e, n, i);
}
function pt(t, e, n) {
  return t !== n && ((n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2])), (n[3] = t[3] + e), n;
}
function Pt(t, e, n) {
  return t !== n && z(t, n), n;
}
function bt(t, e) {
  return e;
}
function b(t, e, n) {
  if (e == null || !D(t, e, $)) return !1;
  let { t0: i, t1: r } = $;
  if (((i < 0 || (r < i && r > 0)) && (i = r), i < 0)) return !1;
  if (n) {
    const { origin: s, direction: o } = e;
    (n[0] = s[0] + o[0] * i), (n[1] = s[1] + o[1] * i), (n[2] = s[2] + o[2] * i);
  }
  return !0;
}
function wt(t, e, n) {
  const i = ot(e, n);
  if (!D(t, i, $)) return [];
  const { origin: r, direction: s } = i,
    { t0: o, t1: c } = $,
    a = (h) => {
      const m = l();
      return et(m, r, s, h), v(t, m, m);
    };
  return Math.abs(o - c) < K() ? [a(o)] : [a(o), a(c)];
}
const $ = { t0: 0, t1: 0 };
function D(t, e, n) {
  const { origin: i, direction: r } = e,
    s = St;
  (s[0] = i[0] - t[0]), (s[1] = i[1] - t[1]), (s[2] = i[2] - t[2]);
  const o = r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
  if (o === 0) return !1;
  const c = 2 * (r[0] * s[0] + r[1] * s[1] + r[2] * s[2]),
    a = c * c - 4 * o * (s[0] * s[0] + s[1] * s[1] + s[2] * s[2] - t[3] * t[3]);
  if (a < 0) return !1;
  const h = Math.sqrt(a);
  return (n.t0 = (-c - h) / (2 * o)), (n.t1 = (-c + h) / (2 * o)), !0;
}
const St = l();
function qt(t, e) {
  return b(t, e, null);
}
function xt(t, e, n) {
  if (b(t, e, n)) return n;
  const i = F(t, e, u.get());
  return p(n, e.origin, d(u.get(), e.direction, Y(e.origin, i) / g(e.direction))), n;
}
function F(t, e, n) {
  const i = u.get(),
    r = it.get();
  q(i, e.origin, e.direction);
  const s = _(t);
  q(n, i, e.origin), d(n, n, (1 / g(n)) * s);
  const o = N(t, e.origin),
    c = rt(e.origin, n);
  return W(r, c + o, i), tt(n, n, r), n;
}
function yt(t, e, n, i) {
  const r = _(t),
    s = r * r,
    o = e + 0.5 * Math.PI,
    c = n * n + s - 2 * Math.cos(o) * n * r,
    a = Math.sqrt(c),
    h = c - s;
  if (h <= 0) return 0.5;
  const m = Math.sqrt(h),
    X = Math.acos(m / a) - Math.asin(r / (a / Math.sin(o)));
  return Math.min(1, (X + 0.5 * i) / i);
}
function Ct(t, e, n) {
  return b(t, e, n) ? n : (at(e, t, n), v(t, n, n));
}
function v(t, e, n) {
  const i = f(u.get(), e, t),
    r = d(u.get(), i, t[3] / g(i));
  return p(n, r, t);
}
function jt(t, e) {
  const n = f(u.get(), e, t),
    i = Q(n),
    r = t[3] * t[3];
  return Math.sqrt(Math.abs(i - r));
}
function N(t, e) {
  const n = f(u.get(), e, t),
    i = g(n),
    r = _(t),
    s = r + Math.abs(r - i);
  return nt(r / s);
}
const w = l();
function U(t, e, n, i) {
  const r = f(w, e, t);
  switch (n) {
    case M.X: {
      const s = O(r, w)[2];
      return x(i, -Math.sin(s), Math.cos(s), 0);
    }
    case M.Y: {
      const s = O(r, w),
        o = s[1],
        c = s[2],
        a = Math.sin(o);
      return x(i, -a * Math.cos(c), -a * Math.sin(c), Math.cos(o));
    }
    case M.Z:
      return Z(i, r);
    default:
      return;
  }
}
function V(t, e) {
  const n = f(C, e, t);
  return g(n) - t[3];
}
function vt(t, e, n, i) {
  const r = V(t, e),
    s = U(t, e, M.Z, C),
    o = d(C, s, n - r);
  return p(i, e, o);
}
function At(t, e) {
  const n = H(t, e),
    i = _(t);
  return n <= i * i;
}
function Et(t, e, n = k()) {
  const i = Y(t, e),
    r = t[3],
    s = e[3];
  return i + s < r
    ? (y(n, t), n)
    : i + r < s
      ? (y(n, e), n)
      : (J(n, t, e, (i + s - r) / (2 * i)), (n[3] = (i + r + s) / 2), n);
}
const C = l(),
  Rt = j(),
  Yt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        NullSphere: ft,
        altitudeAt: V,
        angleToSilhouette: N,
        axisAt: U,
        cameraFrustumCoverage: yt,
        clear: dt,
        closestPoint: Ct,
        closestPointOnSilhouette: F,
        containsPoint: At,
        copy: z,
        create: j,
        distanceToSilhouette: jt,
        elevate: pt,
        equals: lt,
        exactEquals: ht,
        fromCenterAndRadius: gt,
        fromRadius: _t,
        fromValues: $t,
        getCenter: Mt,
        getExtent: bt,
        getRadius: _,
        intersectLine: wt,
        intersectRay: b,
        intersectRayClosestSilhouette: xt,
        intersectsRay: qt,
        projectPoint: v,
        setAltitudeAt: vt,
        setExtent: Pt,
        tmpSphere: Rt,
        union: Et,
        wrap: mt,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export {
  v as $,
  ft as C,
  j as E,
  qt as H,
  wt as I,
  _ as N,
  gt as O,
  ot as S,
  mt as T,
  Mt as U,
  $t as V,
  ht as _,
  z as a,
  P as b,
  Yt as f,
  At as i,
  kt as k,
  st as s,
  It as v,
  Lt as w,
};
