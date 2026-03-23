import { e as L } from './mat3f64-q3fE-ZOt.js';
import { e as x } from './quatf64-aQ5IuZRd.js';
import {
  as as I,
  at as Y,
  au as O,
  av as S,
  aw as T,
  ag as d,
  Y as _,
  a5 as w,
  ax as B,
  ah as C,
  ay as D,
  az as F,
  aA as G,
  aB as W,
  aC as X,
  aD as Z,
  aE as k,
  aF as H,
  aG as J,
} from './index.lazy-BHTpPf8X.js';
function K(a) {
  return (a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 1), a;
}
function b(a, o, r) {
  r *= 0.5;
  const s = Math.sin(r);
  return (a[0] = s * o[0]), (a[1] = s * o[1]), (a[2] = s * o[2]), (a[3] = Math.cos(r)), a;
}
function N(a, o) {
  const r = 2 * Math.acos(o[3]),
    s = Math.sin(r / 2);
  return (
    s > I()
      ? ((a[0] = o[0] / s), (a[1] = o[1] / s), (a[2] = o[2] / s))
      : ((a[0] = 1), (a[1] = 0), (a[2] = 0)),
    r
  );
}
function j(a, o, r) {
  const s = o[0],
    e = o[1],
    c = o[2],
    t = o[3],
    u = r[0],
    i = r[1],
    n = r[2],
    h = r[3];
  return (
    (a[0] = s * h + t * u + e * n - c * i),
    (a[1] = e * h + t * i + c * u - s * n),
    (a[2] = c * h + t * n + s * i - e * u),
    (a[3] = t * h - s * u - e * i - c * n),
    a
  );
}
function Q(a, o, r) {
  r *= 0.5;
  const s = o[0],
    e = o[1],
    c = o[2],
    t = o[3],
    u = Math.sin(r),
    i = Math.cos(r);
  return (
    (a[0] = s * i + t * u),
    (a[1] = e * i + c * u),
    (a[2] = c * i - e * u),
    (a[3] = t * i - s * u),
    a
  );
}
function R(a, o, r) {
  r *= 0.5;
  const s = o[0],
    e = o[1],
    c = o[2],
    t = o[3],
    u = Math.sin(r),
    i = Math.cos(r);
  return (
    (a[0] = s * i - c * u),
    (a[1] = e * i + t * u),
    (a[2] = c * i + s * u),
    (a[3] = t * i - e * u),
    a
  );
}
function U(a, o, r) {
  r *= 0.5;
  const s = o[0],
    e = o[1],
    c = o[2],
    t = o[3],
    u = Math.sin(r),
    i = Math.cos(r);
  return (
    (a[0] = s * i + e * u),
    (a[1] = e * i - s * u),
    (a[2] = c * i + t * u),
    (a[3] = t * i - c * u),
    a
  );
}
function V(a, o) {
  const r = o[0],
    s = o[1],
    e = o[2];
  return (
    (a[0] = r), (a[1] = s), (a[2] = e), (a[3] = Math.sqrt(Math.abs(1 - r * r - s * s - e * e))), a
  );
}
function g(a, o, r, s) {
  const e = o[0],
    c = o[1],
    t = o[2],
    u = o[3];
  let i,
    n,
    h,
    f,
    l,
    m = r[0],
    $ = r[1],
    p = r[2],
    q = r[3];
  return (
    (n = e * m + c * $ + t * p + u * q),
    n < 0 && ((n = -n), (m = -m), ($ = -$), (p = -p), (q = -q)),
    1 - n > I()
      ? ((i = Math.acos(n)),
        (h = Math.sin(i)),
        (f = Math.sin((1 - s) * i) / h),
        (l = Math.sin(s * i) / h))
      : ((f = 1 - s), (l = s)),
    (a[0] = f * e + l * m),
    (a[1] = f * c + l * $),
    (a[2] = f * t + l * p),
    (a[3] = f * u + l * q),
    a
  );
}
function aa(a) {
  const o = J,
    r = o(),
    s = o(),
    e = o(),
    c = Math.sqrt(1 - r),
    t = Math.sqrt(r);
  return (
    (a[0] = c * Math.sin(2 * Math.PI * s)),
    (a[1] = c * Math.cos(2 * Math.PI * s)),
    (a[2] = t * Math.sin(2 * Math.PI * e)),
    (a[3] = t * Math.cos(2 * Math.PI * e)),
    a
  );
}
function oa(a, o) {
  const r = o[0],
    s = o[1],
    e = o[2],
    c = o[3],
    t = r * r + s * s + e * e + c * c,
    u = t ? 1 / t : 0;
  return (a[0] = -r * u), (a[1] = -s * u), (a[2] = -e * u), (a[3] = c * u), a;
}
function sa(a, o) {
  return (a[0] = -o[0]), (a[1] = -o[1]), (a[2] = -o[2]), (a[3] = o[3]), a;
}
function E(a, o) {
  const r = o[0] + o[4] + o[8];
  let s;
  if (r > 0)
    (s = Math.sqrt(r + 1)),
      (a[3] = 0.5 * s),
      (s = 0.5 / s),
      (a[0] = (o[5] - o[7]) * s),
      (a[1] = (o[6] - o[2]) * s),
      (a[2] = (o[1] - o[3]) * s);
  else {
    let e = 0;
    o[4] > o[0] && (e = 1), o[8] > o[3 * e + e] && (e = 2);
    const c = (e + 1) % 3,
      t = (e + 2) % 3;
    (s = Math.sqrt(o[3 * e + e] - o[3 * c + c] - o[3 * t + t] + 1)),
      (a[e] = 0.5 * s),
      (s = 0.5 / s),
      (a[3] = (o[3 * c + t] - o[3 * t + c]) * s),
      (a[c] = (o[3 * c + e] + o[3 * e + c]) * s),
      (a[t] = (o[3 * t + e] + o[3 * e + t]) * s);
  }
  return a;
}
function ea(a, o, r, s) {
  const e = (0.5 * Math.PI) / 180;
  (o *= e), (r *= e), (s *= e);
  const c = Math.sin(o),
    t = Math.cos(o),
    u = Math.sin(r),
    i = Math.cos(r),
    n = Math.sin(s),
    h = Math.cos(s);
  return (
    (a[0] = c * i * h - t * u * n),
    (a[1] = t * u * h + c * i * n),
    (a[2] = t * i * n - c * u * h),
    (a[3] = t * i * h + c * u * n),
    a
  );
}
function ra(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
const ca = k,
  ta = Y,
  ua = H,
  ia = j,
  na = F,
  ha = Z,
  Ma = G,
  v = W,
  fa = v,
  z = D,
  la = z,
  y = T,
  ma = O,
  $a = X;
function pa(a, o, r) {
  const s = S(o, r);
  return s < -0.999999
    ? (d(M, qa, o), B(M) < 1e-6 && d(M, ga, o), C(M, M), b(a, M, Math.PI), a)
    : s > 0.999999
      ? ((a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 1), a)
      : (d(M, o, r), (a[0] = M[0]), (a[1] = M[1]), (a[2] = M[2]), (a[3] = 1 + s), y(a, a));
}
const M = w(),
  qa = _(1, 0, 0),
  ga = _(0, 1, 0);
function da(a, o, r, s, e, c) {
  return g(A, o, e, c), g(P, r, s, c), g(a, A, P, 2 * c * (1 - c)), a;
}
const A = x(),
  P = x();
function ya(a, o, r, s) {
  const e = Aa;
  return (
    (e[0] = r[0]),
    (e[3] = r[1]),
    (e[6] = r[2]),
    (e[1] = s[0]),
    (e[4] = s[1]),
    (e[7] = s[2]),
    (e[2] = -o[0]),
    (e[5] = -o[1]),
    (e[8] = -o[2]),
    y(a, E(a, e))
  );
}
const Aa = L();
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      add: ua,
      calculateW: V,
      conjugate: sa,
      copy: ca,
      dot: ha,
      equals: $a,
      exactEquals: ma,
      fromEuler: ea,
      fromMat3: E,
      getAxisAngle: N,
      identity: K,
      invert: oa,
      len: fa,
      length: v,
      lerp: Ma,
      mul: ia,
      multiply: j,
      normalize: y,
      random: aa,
      rotateX: Q,
      rotateY: R,
      rotateZ: U,
      rotationTo: pa,
      scale: na,
      set: ta,
      setAxes: ya,
      setAxisAngle: b,
      slerp: g,
      sqlerp: da,
      sqrLen: la,
      squaredLength: z,
      str: ra,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
export { oa as L, ma as N, sa as O, pa as R, ea as T, ta as X, b, N as v, j as x };
