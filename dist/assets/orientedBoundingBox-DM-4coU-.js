import {
  a5 as d,
  Y as zt,
  c_ as it,
  gn as Lt,
  _ as lt,
  jN as Ut,
  jO as kt,
  d0 as D,
  jl as w,
  jP as mt,
  jQ as At,
  jR as ta,
  jS as pt,
  jT as aa,
  h2 as sa,
  jU as ea,
  jV as ia,
  jW as Rt,
  jX as Ct,
  a1 as Pt,
  jY as na,
  a6 as Xt,
  a4 as oa,
  jZ as ra,
  a3 as ha,
  cY as Qt,
  jm as jt,
  j_ as ca,
  j$ as ua,
  af as Ft,
} from './index.lazy-BFilFZ3v.js';
import { t as da, e as fa } from './mat3f64-q3fE-ZOt.js';
import { e as la } from './mat4f64-Dk4dwAN8.js';
import { X as ma, O as k, x as _a } from './quat-DOUEtkz6.js';
import { r as Wt, e as xt } from './quatf64-aQ5IuZRd.js';
import { a as _t } from './spatialReferenceEllipsoidUtils-B1ThbZT4.js';
import { m as ja } from './computeTranslationToOriginAndRotation-CPeb_cTX.js';
import { c as Tt, o as ga, O as Nt } from './plane-pBXJ95gF.js';
class Vt {
  constructor(t, a, s = a) {
    (this.data = t), (this.size = a), (this.stride = s);
  }
}
class Ja extends Vt {
  constructor(t, a, s, n = !1, o = s) {
    super(t, s, o), (this.indices = a), (this.exclusive = n);
  }
}
const nt = 1e-6,
  ot = d(),
  gt = d();
function ba(e, t) {
  const { data: a, size: s } = e,
    n = a.length / s;
  if (n <= 0) return;
  const o = new qa(e);
  qt(ot, o.minProj, o.maxProj), dt(ot, ot, 0.5), V(gt, o.maxProj, o.minProj);
  const r = It(gt),
    c = new wa();
  (c.quality = r), n < 14 && (e = new Vt(new Float64Array(o.buffer, 112, 42), 3));
  const i = d(),
    h = d(),
    g = d(),
    m = d(),
    z = d(),
    A = d(),
    b = d();
  switch ($a(o, e, b, i, h, g, m, z, A, c)) {
    case 1:
      return void Ot(ot, gt, t);
    case 2:
      return void pa(e, m, t);
  }
  Ma(e, b, i, h, g, m, z, A, c), Zt(e, c.b0, c.b1, c.b2, at, st);
  const Y = d();
  V(Y, st, at),
    (c.quality = It(Y)),
    c.quality < r ? Bt(c.b0, c.b1, c.b2, at, st, Y, t) : Ot(ot, gt, t);
}
function $a(e, t, a, s, n, o, r, c, i, h) {
  return (
    Pa(e, s, n),
    wt(s, n) < nt
      ? 1
      : (V(r, s, n),
        j(r, r),
        xa(t, s, r, o) < nt
          ? 2
          : (V(c, n, o), j(c, c), V(i, o, s), j(i, i), y(a, c, r), j(a, a), B(t, a, r, c, i, h), 0))
  );
}
const rt = d(),
  ht = d(),
  N = d(),
  p = d(),
  I = d(),
  H = d(),
  R = d(),
  X = d();
function Ma(e, t, a, s, n, o, r, c, i) {
  Sa(e, t, a, rt, ht),
    rt[0] !== void 0 &&
      (V(N, rt, a),
      j(N, N),
      V(p, rt, s),
      j(p, p),
      V(I, rt, n),
      j(I, I),
      y(H, p, o),
      j(H, H),
      y(R, I, r),
      j(R, R),
      y(X, N, c),
      j(X, X),
      B(e, H, o, p, N, i),
      B(e, R, r, I, p, i),
      B(e, X, c, N, I, i)),
    ht[0] !== void 0 &&
      (V(N, ht, a),
      j(N, N),
      V(p, ht, s),
      j(p, p),
      V(I, ht, n),
      j(I, I),
      y(H, p, o),
      j(H, H),
      y(R, I, r),
      j(R, R),
      y(X, N, c),
      j(X, X),
      B(e, H, o, p, N, i),
      B(e, R, r, I, p, i),
      B(e, X, c, N, I, i));
}
function Pa(e, t, a) {
  let s = wt(e.maxVert[0], e.minVert[0]),
    n = 0;
  for (let o = 1; o < 7; ++o) {
    const r = wt(e.maxVert[o], e.minVert[o]);
    r > s && ((s = r), (n = o));
  }
  S(t, e.minVert[n]), S(a, e.maxVert[n]);
}
const q = [0, 0, 0];
function xa(e, t, a, s) {
  const { data: n, size: o } = e;
  let r = Number.NEGATIVE_INFINITY,
    c = 0;
  for (let i = 0; i < n.length; i += o) {
    (q[0] = n[i] - t[0]), (q[1] = n[i + 1] - t[1]), (q[2] = n[i + 2] - t[2]);
    const h = a[0] * q[0] + a[1] * q[1] + a[2] * q[2],
      g = a[0] * a[0] + a[1] * a[1] + a[2] * a[2],
      m = q[0] * q[0] + q[1] * q[1] + q[2] * q[2] - (h * h) / g;
    m > r && ((r = m), (c = i));
  }
  return S(s, n, c), r;
}
const _ = Lt();
function Sa(e, t, a, s, n) {
  Na(e, t, _, n, s);
  const o = Jt(a, t);
  _[1] - nt <= o && (s[0] = void 0), _[0] + nt >= o && (n[0] = void 0);
}
const vt = d(),
  Yt = d(),
  Et = d(),
  J = d(),
  K = d(),
  bt = d();
function B(e, t, a, s, n, o) {
  if (Dt(t) < nt) return;
  y(vt, a, t),
    y(Yt, s, t),
    y(Et, n, t),
    tt(e, t, _),
    (K[1] = _[0]),
    (J[1] = _[1]),
    (bt[1] = J[1] - K[1]);
  const r = [a, s, n],
    c = [vt, Yt, Et];
  for (let i = 0; i < 3; ++i) {
    tt(e, r[i], _),
      (K[0] = _[0]),
      (J[0] = _[1]),
      tt(e, c[i], _),
      (K[2] = _[0]),
      (J[2] = _[1]),
      (bt[0] = J[0] - K[0]),
      (bt[2] = J[2] - K[2]);
    const h = It(bt);
    h < o.quality && (S(o.b0, r[i]), S(o.b1, t), S(o.b2, c[i]), (o.quality = h));
  }
}
const za = d();
function tt(e, t, a) {
  const { data: s, size: n } = e;
  (a[0] = Number.POSITIVE_INFINITY), (a[1] = Number.NEGATIVE_INFINITY);
  for (let o = 0; o < s.length; o += n) {
    const r = s[o] * t[0] + s[o + 1] * t[1] + s[o + 2] * t[2];
    (a[0] = Math.min(a[0], r)), (a[1] = Math.max(a[1], r));
  }
}
function Na(e, t, a, s, n) {
  const { data: o, size: r } = e;
  S(s, o), S(n, s), (a[0] = Jt(za, t)), (a[1] = a[0]);
  for (let c = r; c < o.length; c += r) {
    const i = o[c] * t[0] + o[c + 1] * t[1] + o[c + 2] * t[2];
    i < a[0] && ((a[0] = i), S(s, o, c)), i > a[1] && ((a[1] = i), S(n, o, c));
  }
}
function Ot(e, t, a) {
  (a.center = e), (a.halfSize = it(t, t, 0.5)), (a.quaternion = Wt);
}
const E = d(),
  L = d(),
  ct = d(),
  at = d(),
  st = d(),
  Gt = d();
function pa(e, t, a) {
  S(E, t),
    Math.abs(t[0]) > Math.abs(t[1]) && Math.abs(t[0]) > Math.abs(t[2])
      ? (E[0] = 0)
      : Math.abs(t[1]) > Math.abs(t[2])
        ? (E[1] = 0)
        : (E[2] = 0),
    Dt(E) < nt && (E[0] = E[1] = E[2] = 1),
    y(L, t, E),
    j(L, L),
    y(ct, t, L),
    j(ct, ct),
    Zt(e, t, L, ct, at, st),
    V(Gt, st, at),
    Bt(t, L, ct, at, st, Gt, a);
}
function Zt(e, t, a, s, n, o) {
  tt(e, t, _),
    (n[0] = _[0]),
    (o[0] = _[1]),
    tt(e, a, _),
    (n[1] = _[0]),
    (o[1] = _[1]),
    tt(e, s, _),
    (n[2] = _[0]),
    (o[2] = _[1]);
}
const W = d(),
  ut = d(),
  $t = d(),
  T = da(1, 0, 0, 0, 1, 0, 0, 0, 1),
  Ia = xt();
function Bt(e, t, a, s, n, o, r) {
  (T[0] = e[0]),
    (T[1] = e[1]),
    (T[2] = e[2]),
    (T[3] = t[0]),
    (T[4] = t[1]),
    (T[5] = t[2]),
    (T[6] = a[0]),
    (T[7] = a[1]),
    (T[8] = a[2]),
    (r.quaternion = Va(Ia, T)),
    qt(W, s, n),
    dt(W, W, 0.5),
    dt(ut, e, W[0]),
    dt($t, t, W[1]),
    qt(ut, ut, $t),
    dt($t, a, W[2]),
    (r.center = lt(ut, ut, $t)),
    (r.halfSize = it(W, o, 0.5));
}
const M = 7;
let qa = class {
    constructor(t) {
      (this.minVert = new Array(M)), (this.maxVert = new Array(M));
      const a = 64 * M;
      this.buffer = new ArrayBuffer(a);
      let s = 0;
      (this.minProj = new Float64Array(this.buffer, s, M)),
        (s += 8 * M),
        (this.maxProj = new Float64Array(this.buffer, s, M)),
        (s += 8 * M);
      for (let i = 0; i < M; ++i)
        (this.minVert[i] = new Float64Array(this.buffer, s, 3)), (s += 24);
      for (let i = 0; i < M; ++i)
        (this.maxVert[i] = new Float64Array(this.buffer, s, 3)), (s += 24);
      for (let i = 0; i < M; ++i)
        (this.minProj[i] = Number.POSITIVE_INFINITY), (this.maxProj[i] = Number.NEGATIVE_INFINITY);
      const n = new Array(M),
        o = new Array(M),
        { data: r, size: c } = t;
      for (let i = 0; i < r.length; i += c) {
        let h = r[i];
        h < this.minProj[0] && ((this.minProj[0] = h), (n[0] = i)),
          h > this.maxProj[0] && ((this.maxProj[0] = h), (o[0] = i)),
          (h = r[i + 1]),
          h < this.minProj[1] && ((this.minProj[1] = h), (n[1] = i)),
          h > this.maxProj[1] && ((this.maxProj[1] = h), (o[1] = i)),
          (h = r[i + 2]),
          h < this.minProj[2] && ((this.minProj[2] = h), (n[2] = i)),
          h > this.maxProj[2] && ((this.maxProj[2] = h), (o[2] = i)),
          (h = r[i] + r[i + 1] + r[i + 2]),
          h < this.minProj[3] && ((this.minProj[3] = h), (n[3] = i)),
          h > this.maxProj[3] && ((this.maxProj[3] = h), (o[3] = i)),
          (h = r[i] + r[i + 1] - r[i + 2]),
          h < this.minProj[4] && ((this.minProj[4] = h), (n[4] = i)),
          h > this.maxProj[4] && ((this.maxProj[4] = h), (o[4] = i)),
          (h = r[i] - r[i + 1] + r[i + 2]),
          h < this.minProj[5] && ((this.minProj[5] = h), (n[5] = i)),
          h > this.maxProj[5] && ((this.maxProj[5] = h), (o[5] = i)),
          (h = r[i] - r[i + 1] - r[i + 2]),
          h < this.minProj[6] && ((this.minProj[6] = h), (n[6] = i)),
          h > this.maxProj[6] && ((this.maxProj[6] = h), (o[6] = i));
      }
      for (let i = 0; i < M; ++i) {
        let h = n[i];
        S(this.minVert[i], r, h), (h = o[i]), S(this.maxVert[i], r, h);
      }
    }
  },
  wa = class {
    constructor() {
      (this.b0 = zt(1, 0, 0)), (this.b1 = zt(0, 1, 0)), (this.b2 = zt(0, 0, 1)), (this.quality = 0);
    }
  };
function It(e) {
  return e[0] * e[1] + e[0] * e[2] + e[1] * e[2];
}
function qt(e, t, a) {
  (e[0] = t[0] + a[0]), (e[1] = t[1] + a[1]), (e[2] = t[2] + a[2]);
}
function V(e, t, a) {
  (e[0] = t[0] - a[0]), (e[1] = t[1] - a[1]), (e[2] = t[2] - a[2]);
}
function dt(e, t, a) {
  (e[0] = t[0] * a), (e[1] = t[1] * a), (e[2] = t[2] * a);
}
function S(e, t, a = 0) {
  (e[0] = t[a]), (e[1] = t[a + 1]), (e[2] = t[a + 2]);
}
function y(e, t, a) {
  const s = t[0],
    n = t[1],
    o = t[2],
    r = a[0],
    c = a[1],
    i = a[2];
  (e[0] = n * i - o * c), (e[1] = o * r - s * i), (e[2] = s * c - n * r);
}
function j(e, t) {
  const a = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
  if (a > 0) {
    const s = 1 / Math.sqrt(a);
    (e[0] = t[0] * s), (e[1] = t[1] * s), (e[2] = t[2] * s);
  }
}
function Dt(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function wt(e, t) {
  const a = t[0] - e[0],
    s = t[1] - e[1],
    n = t[2] - e[2];
  return a * a + s * s + n * n;
}
function Jt(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Va(e, t) {
  const a = t[0] + t[4] + t[8];
  if (a > 0) {
    let s = Math.sqrt(a + 1);
    (e[3] = 0.5 * s),
      (s = 0.5 / s),
      (e[0] = (t[5] - t[7]) * s),
      (e[1] = (t[6] - t[2]) * s),
      (e[2] = (t[1] - t[3]) * s);
  } else {
    let s = 0;
    t[4] > t[0] && (s = 1), t[8] > t[3 * s + s] && (s = 2);
    const n = (s + 1) % 3,
      o = (s + 2) % 3;
    let r = Math.sqrt(t[3 * s + s] - t[3 * n + n] - t[3 * o + o] + 1);
    (e[s] = 0.5 * r),
      (r = 0.5 / r),
      (e[3] = (t[3 * n + o] - t[3 * o + n]) * r),
      (e[n] = (t[3 * n + s] + t[3 * s + n]) * r),
      (e[o] = (t[3 * o + s] + t[3 * s + o]) * r);
  }
  return e;
}
class ft {
  constructor(t = Ut, a = Oa, s = Wt) {
    this._data = [t[0], t[1], t[2], a[0], a[1], a[2], s[0], s[1], s[2], s[3]];
  }
  clone() {
    const t = new ft();
    return (t._data = this._data.slice()), t;
  }
  invalidate() {
    this._data[3] = -1;
  }
  get isValid() {
    return this._data[3] >= 0;
  }
  static fromData(t) {
    const a = new ft();
    return (a._data = t.slice()), a;
  }
  static fromJSON(t) {
    return new ft(t.center, t.halfSize, t.quaternion);
  }
  copy(t) {
    this._data = t.data.slice();
  }
  get center() {
    return D(Tt.get(), this._data[0], this._data[1], this._data[2]);
  }
  get centerX() {
    return this._data[0];
  }
  get centerY() {
    return this._data[1];
  }
  get centerZ() {
    return this._data[2];
  }
  getCenter(t) {
    return (t[0] = this._data[0]), (t[1] = this._data[1]), (t[2] = this._data[2]), t;
  }
  set center(t) {
    (this._data[0] = t[0]), (this._data[1] = t[1]), (this._data[2] = t[2]);
  }
  setCenter(t, a, s) {
    (this._data[0] = t), (this._data[1] = a), (this._data[2] = s);
  }
  get halfSize() {
    return D(Tt.get(), this._data[3], this._data[4], this._data[5]);
  }
  get halfSizeX() {
    return this._data[3];
  }
  get halfSizeY() {
    return this._data[4];
  }
  get halfSizeZ() {
    return this._data[5];
  }
  getHalfSize(t) {
    return (t[0] = this._data[3]), (t[1] = this._data[4]), (t[2] = this._data[5]), t;
  }
  set halfSize(t) {
    (this._data[3] = t[0]), (this._data[4] = t[1]), (this._data[5] = t[2]);
  }
  get quaternion() {
    return ma(ga.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
  }
  getQuaternion(t) {
    return (
      (t[0] = this._data[6]),
      (t[1] = this._data[7]),
      (t[2] = this._data[8]),
      (t[3] = this._data[9]),
      t
    );
  }
  set quaternion(t) {
    (this._data[6] = t[0]), (this._data[7] = t[1]), (this._data[8] = t[2]), (this._data[9] = t[3]);
  }
  get data() {
    return this._data;
  }
  getCorners(t) {
    const a = l,
      s = this._data;
    (a[0] = s[6]), (a[1] = s[7]), (a[2] = s[8]), (a[3] = s[9]);
    for (let n = 0; n < 8; ++n) {
      const o = t[n];
      (o[0] = (1 & n ? -1 : 1) * s[3]),
        (o[1] = (2 & n ? -1 : 1) * s[4]),
        (o[2] = (4 & n ? -1 : 1) * s[5]),
        w(o, o, a),
        (o[0] += s[0]),
        (o[1] += s[1]),
        (o[2] += s[2]);
    }
  }
  doesIntersectFrustumConservativeApproximation(t) {
    return (
      this.intersectPlane(t[0]) <= 0 &&
      this.intersectPlane(t[1]) <= 0 &&
      this.intersectPlane(t[2]) <= 0 &&
      this.intersectPlane(t[3]) <= 0 &&
      this.intersectPlane(t[4]) <= 0 &&
      this.intersectPlane(t[5]) <= 0
    );
  }
  get radius() {
    const t = this._data[3],
      a = this._data[4],
      s = this._data[5];
    return Math.sqrt(t * t + a * a + s * s);
  }
  intersectSphere(t) {
    (u[0] = this._data[0] - t[0]), (u[1] = this._data[1] - t[1]), (u[2] = this._data[2] - t[2]);
    const a = this.getQuaternion(G);
    return (
      k(l, a),
      w(u, u, l),
      mt(u, u),
      (O[0] = Math.min(u[0], this._data[3])),
      (O[1] = Math.min(u[1], this._data[4])),
      (O[2] = Math.min(u[2], this._data[5])),
      At(O, u) < t[3] * t[3]
    );
  }
  intersectSphereWithMBS(t, a = this.radius) {
    const s = this._data;
    (u[0] = s[0] - t[0]), (u[1] = s[1] - t[1]), (u[2] = s[2] - t[2]);
    const n = t[3],
      o = n + a;
    return (
      !(ta(u) > o * o) &&
      ((l[0] = -s[6]),
      (l[1] = -s[7]),
      (l[2] = -s[8]),
      (l[3] = s[9]),
      w(u, u, l),
      mt(u, u),
      (O[0] = Math.min(u[0], s[3])),
      (O[1] = Math.min(u[1], s[4])),
      (O[2] = Math.min(u[2], s[5])),
      At(O, u) < n * n)
    );
  }
  intersectPlane(t) {
    const a = t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3],
      s = this.projectedRadius(Nt(t));
    return a > s ? 1 : a < -s ? -1 : 0;
  }
  intersectRay(t, a, s = 0) {
    const n = this._data,
      o = l;
    (o[0] = -n[6]),
      (o[1] = -n[7]),
      (o[2] = -n[8]),
      (o[3] = n[9]),
      (u[0] = t[0] - n[0]),
      (u[1] = t[1] - n[1]),
      (u[2] = t[2] - n[2]);
    const r = w(u, u, l),
      c = w(O, a, l);
    let i = -1 / 0,
      h = 1 / 0;
    const g = this.getHalfSize(et);
    for (let m = 0; m < 3; m++) {
      const z = r[m],
        A = c[m],
        b = g[m] + s;
      if (Math.abs(A) > 1e-6) {
        const Y = (b - z) / A,
          $ = (-b - z) / A;
        (i = Math.max(i, Math.min(Y, $))), (h = Math.min(h, Math.max(Y, $)));
      } else if (z > b || z < -b) return !1;
    }
    return i <= h;
  }
  projectedArea(t, a, s, n) {
    const o = this.getQuaternion(G);
    k(l, o),
      (u[0] = t[0] - this._data[0]),
      (u[1] = t[1] - this._data[1]),
      (u[2] = t[2] - this._data[2]),
      w(u, u, l);
    const r = this.getHalfSize(et),
      c = u[0] < -r[0] ? -1 : u[0] > r[0] ? 1 : 0,
      i = u[1] < -r[1] ? -1 : u[1] > r[1] ? 1 : 0,
      h = u[2] < -r[2] ? -1 : u[2] > r[2] ? 1 : 0,
      g = Math.abs(c) + Math.abs(i) + Math.abs(h);
    if (g === 0) return 1 / 0;
    const m = g === 1 ? 4 : 6,
      z = 6 * (c + 3 * i + 9 * h + 13);
    pt(U, o), aa(U, U, r);
    const A = this.getCenter(F);
    for (let $ = 0; $ < m; $++) {
      const St = Ca[z + $];
      D(u, ((1 & St) << 1) - 1, (2 & St) - 1, ((4 & St) >> 1) - 1),
        sa(u, u, U),
        lt(Z, A, u),
        (Z[3] = 1),
        ia(Z, Z, a);
      const yt = 1 / Math.max(1e-6, Z[3]);
      (C[2 * $] = Z[0] * yt), (C[2 * $ + 1] = Z[1] * yt);
    }
    const b = 2 * m - 2;
    let Y = C[0] * (C[3] - C[b + 1]) + C[b] * (C[1] - C[b - 1]);
    for (let $ = 2; $ < b; $ += 2) Y += C[$] * (C[$ + 3] - C[$ - 1]);
    return Math.abs(Y) * s * n * 0.125;
  }
  projectedRadius(t) {
    const a = this.getQuaternion(G);
    return (
      k(l, a),
      w(u, t, l),
      Math.abs(u[0] * this._data[3]) +
        Math.abs(u[1] * this._data[4]) +
        Math.abs(u[2] * this._data[5])
    );
  }
  minimumDistancePlane(t) {
    return (
      t[0] * this._data[0] +
      t[1] * this._data[1] +
      t[2] * this._data[2] +
      t[3] -
      this.projectedRadius(Nt(t))
    );
  }
  maximumDistancePlane(t) {
    return (
      t[0] * this._data[0] +
      t[1] * this._data[1] +
      t[2] * this._data[2] +
      t[3] +
      this.projectedRadius(Nt(t))
    );
  }
  toAaBoundingBox(t) {
    const a = this.getQuaternion(G),
      s = pt(U, a),
      n =
        this._data[3] * Math.abs(s[0]) +
        this._data[4] * Math.abs(s[3]) +
        this._data[5] * Math.abs(s[6]),
      o =
        this._data[3] * Math.abs(s[1]) +
        this._data[4] * Math.abs(s[4]) +
        this._data[5] * Math.abs(s[7]),
      r =
        this._data[3] * Math.abs(s[2]) +
        this._data[4] * Math.abs(s[5]) +
        this._data[5] * Math.abs(s[8]);
    (t[0] = this._data[0] - n),
      (t[1] = this._data[1] - o),
      (t[2] = this._data[2] - r),
      (t[3] = this._data[0] + n),
      (t[4] = this._data[1] + o),
      (t[5] = this._data[2] + r);
  }
  transform(t, a, s, n = 0, o = _t(s), r = _t(a), c = Rt(a, r)) {
    if (s === o) a.isGeographic ? va(this, t, a, n, r) : Ta(this, t, a, n, r, c);
    else if (a.isWGS84 && (s.isWebMercator || Ct(s))) Qa(a, this, s, t, n);
    else if (a.isWebMercator && Ct(s)) Fa(a, this, s, t, n);
    else {
      const i = this.getCenter(F);
      (i[2] += n),
        Pt(i, a, 0, i, s, 0),
        (t.center = i),
        this !== t && ((t.quaternion = this.getQuaternion(G)), (t.halfSize = this.getHalfSize(et)));
    }
  }
}
const l = xt(),
  G = xt(),
  ya = xt(),
  u = d(),
  O = d(),
  Z = ea();
function Aa(e, t = new ft()) {
  return ba(e, t), t;
}
const C = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2],
  Ca = (() => {
    const e = new Int8Array(162);
    let t = 0;
    const a = (s) => {
      for (let n = 0; n < s.length; n++) e[t + n] = s[n];
      t += 6;
    };
    return (
      a([6, 2, 3, 1, 5, 4]),
      a([0, 2, 3, 1, 5, 4]),
      a([0, 2, 3, 7, 5, 4]),
      a([0, 1, 3, 2, 6, 4]),
      a([0, 1, 3, 2, 0, 0]),
      a([0, 1, 5, 7, 3, 2]),
      a([0, 1, 3, 7, 6, 4]),
      a([0, 1, 3, 7, 6, 2]),
      a([0, 1, 5, 7, 6, 2]),
      a([0, 1, 5, 4, 6, 2]),
      a([0, 1, 5, 4, 0, 0]),
      a([0, 1, 3, 7, 5, 4]),
      a([0, 2, 6, 4, 0, 0]),
      a([0, 0, 0, 0, 0, 0]),
      a([1, 3, 7, 5, 0, 0]),
      a([2, 3, 7, 6, 4, 0]),
      a([2, 3, 7, 6, 0, 0]),
      a([2, 3, 1, 5, 7, 6]),
      a([0, 1, 5, 7, 6, 2]),
      a([0, 1, 5, 7, 6, 4]),
      a([0, 1, 3, 7, 6, 4]),
      a([4, 5, 7, 6, 2, 0]),
      a([4, 5, 7, 6, 0, 0]),
      a([4, 5, 1, 3, 7, 6]),
      a([0, 2, 3, 7, 5, 4]),
      a([6, 2, 3, 7, 5, 4]),
      a([6, 2, 3, 1, 5, 4]),
      e
    );
  })();
function Ua(e, t, a, s, n) {
  const o = e.getQuaternion(G);
  (n.quaternion = o), k(l, o);
  const r = e.getCenter(F),
    c = e.getHalfSize(et);
  if (s === ra.Global) {
    w(f, r, l), mt(Q, f), ha(x, Q, c), Xt(x, Q, x);
    const i = Qt(x);
    lt(x, Q, c);
    const h = Qt(x);
    if (i < a) (n.center = r), D(f, a, a, a), (n.halfSize = lt(f, c, f));
    else {
      const g = h > 0 ? 1 + t / h : 1,
        m = i > 0 ? 1 + a / i : 1,
        z = (m + g) / 2,
        A = (m - g) / 2;
      it(x, Q, A),
        (n.halfSize = jt(x, x, c, z)),
        it(x, Q, z),
        jt(x, x, c, A),
        ca(f, f),
        ua(f, x, f);
      const b = e.getQuaternion(ya);
      n.center = w(f, f, b);
    }
  } else {
    n.center = jt(f, r, Ft, (a + t) / 2);
    const i = w(f, Ft, l);
    mt(i, i), (n.halfSize = jt(Q, c, i, (a - t) / 2));
  }
  return n;
}
function Qa(e, t, a, s, n) {
  t.getCenter(F), (F[2] += n);
  const o = _t(a);
  Pt(F, e, 0, F, o, 0), Kt(o, t, F, a, s);
}
function Fa(e, t, a, s, n) {
  t.getCenter(F), (F[2] += n), Kt(e, t, F, a, s);
}
function Kt(e, t, a, s, n) {
  const o = t.getQuaternion(G),
    r = pt(U, o),
    c = t.getHalfSize(et);
  for (let i = 0; i < 8; ++i) {
    for (let h = 0; h < 3; ++h) v[h] = c[h] * (i & (1 << h) ? -1 : 1);
    for (let h = 0; h < 3; ++h) {
      let g = a[h];
      for (let m = 0; m < 3; ++m) g += v[m] * r[3 * m + h];
      Mt[3 * i + h] = g;
    }
  }
  Pt(Mt, e, 0, Mt, s, 0, 8), Aa(Ya, n);
}
function Ta(e, t, a, s, n = _t(a), o = Rt(a, n)) {
  e.getCorners(Ht), e.getCenter(v), (v[2] += s), ja(a, v, P, n), t.setCenter(P[12], P[13], P[14]);
  const r = 2 * Math.sqrt(1 + P[0] + P[5] + P[10]);
  (l[0] = (P[6] - P[9]) / r),
    (l[1] = (P[8] - P[2]) / r),
    (l[2] = (P[1] - P[4]) / r),
    (l[3] = 0.25 * r);
  const c = e.getQuaternion(G);
  (t.quaternion = _a(l, l, c)), k(l, l), D(Q, 0, 0, 0);
  const i = t.getCenter(Ea);
  for (const h of Ht) (h[2] += s), o(h, 0, h, 0), Xt(f, h, i), w(f, f, l), mt(f, f), oa(Q, Q, f);
  t.halfSize = Q;
}
function va(e, t, a, s, n = _t(a)) {
  const o = na(a),
    r = 1 + Math.max(0, s) / (o.radius + e.centerZ);
  e.getCenter(v), (v[2] += s), Pt(v, a, 0, v, n, 0), (t.center = v);
  const c = e.getQuaternion(G);
  (t.quaternion = c), k(l, c), D(f, 0, 0, 1), w(f, f, l);
  const i = e.getHalfSize(et);
  D(f, i[0] * Math.abs(f[0]), i[1] * Math.abs(f[1]), i[2] * Math.abs(f[2])),
    it(f, f, o.inverseFlattening),
    lt(f, i, f),
    (t.halfSize = it(f, f, r));
}
const Mt = new Array(24),
  Ya = new Vt(Mt, 3),
  v = d(),
  F = d(),
  Ea = d(),
  et = d(),
  U = fa(),
  P = la(),
  Ht = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  f = d(),
  Q = d(),
  x = d(),
  Oa = kt(-1, -1, -1);
export { ft as I, Ua as L, Vt as s, Ja as t };
