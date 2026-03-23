import {
  Y as x,
  a0 as u,
  al as E,
  av as h,
  cY as I,
  a8 as en,
  an,
  cZ as cn,
  $ as m,
  c_ as l,
  a5 as $,
  _ as p,
  c$ as un,
  Z as F,
  d0 as M,
  d1 as gn,
  bB as bn,
  ar as S,
  d2 as fn,
  d3 as ln,
  d4 as Z,
  d5 as O,
  ah as D,
} from './index.lazy-BHTpPf8X.js';
import { s as k, w as pn } from './sphere-vpbSSw5q.js';
import { e as G } from './mat4f64-Dk4dwAN8.js';
import { A as R, M as dn, v as mn } from './lineSegment-CpxDVaaQ.js';
import {
  M as T,
  P as j,
  D as hn,
  O as N,
  y as In,
  c as e,
  f as w,
  H as Pn,
  x as $n,
  U as Mn,
  z as K,
  h as wn,
  q as Nn,
  w as vn,
} from './plane-BJrN7SUI.js';
const V = () => en.getLogger('esri.views.3d.support.geometryUtils.boundedPlane');
class Tn {
  constructor() {
    (this.plane = T()), (this.origin = $()), (this.basis1 = $()), (this.basis2 = $());
  }
}
const _n = Tn;
function P(n = on) {
  return { plane: T(n.plane), origin: E(n.origin), basis1: E(n.basis1), basis2: E(n.basis2) };
}
function yn(n, s, i) {
  const t = Dn.get();
  return (t.origin = n), (t.basis1 = s), (t.basis2 = i), (t.plane = hn(0, 0, 0, 0)), y(t), t;
}
function _(n, s = P()) {
  return L(n.origin, n.basis1, n.basis2, s);
}
function An(n, s) {
  u(s.origin, n.origin), u(s.basis1, n.basis1), u(s.basis2, n.basis2), wn(s.plane, n.plane);
}
function L(n, s, i, t = P()) {
  return u(t.origin, n), u(t.basis1, s), u(t.basis2, i), y(t), Hn(t, 'fromValues()'), t;
}
function y(n) {
  j(n.basis2, n.basis1, n.origin, n.plane);
}
function W(n, s, i) {
  n !== i && _(n, i);
  const t = l(e.get(), f(n), s);
  return p(i.origin, i.origin, t), (i.plane[3] -= s), i;
}
function xn(n, s, i) {
  return X(s, i), W(i, B(n, n.origin), i), i;
}
function En(n, s) {
  const i = n.basis1[0],
    t = n.basis2[1],
    [r, o] = n.origin;
  return bn(r - i, o - t, r + i, o + t, s);
}
function X(n, s = P()) {
  const i = (n[2] - n[0]) / 2,
    t = (n[3] - n[1]) / 2;
  return (
    M(s.origin, n[0] + i, n[1] + t, 0),
    M(s.basis1, i, 0, 0),
    M(s.basis2, 0, t, 0),
    Mn(0, 0, 1, 0, s.plane),
    s
  );
}
function q(n, s, i) {
  return !!$n(n.plane, s, i) && tn(n, i);
}
function Sn(n, s, i) {
  if (q(n, s, i)) return i;
  const t = J(n, s, e.get());
  return p(i, s.origin, l(e.get(), s.direction, gn(s.origin, t) / I(s.direction))), i;
}
function J(n, s, i) {
  const t = v.get();
  rn(n, s, t, v.get());
  let r = Number.POSITIVE_INFINITY;
  for (const o of H) {
    const a = C(n, o, A.get()),
      g = e.get();
    if (Nn(t, a, g)) {
      const c = fn(e.get(), s.origin, g),
        b = Math.abs(ln(h(s.direction, c)));
      b < r && ((r = b), u(i, g));
    }
  }
  return r === Number.POSITIVE_INFINITY ? Q(n, s, i) : i;
}
function On(n, s) {
  return (s - n) / s;
}
function Q(n, s, i) {
  if (q(n, s, i)) return i;
  const t = v.get(),
    r = v.get();
  rn(n, s, t, r);
  let o = Number.POSITIVE_INFINITY;
  for (const a of H) {
    const g = C(n, a, A.get()),
      c = e.get();
    if (vn(t, g, c)) {
      const b = pn(s, c);
      if (!K(r, c)) continue;
      b < o && ((o = b), u(i, c));
    }
  }
  return z(n, s.origin) < o && nn(n, s.origin, i), i;
}
function nn(n, s, i) {
  const t = Pn(n.plane, s, e.get()),
    r = R(U(n, n.basis1), t, -1, 1, e.get()),
    o = R(U(n, n.basis2), t, -1, 1, e.get());
  return F(i, p(e.get(), r, o), n.origin), i;
}
function sn(n, s, i) {
  const { origin: t, basis1: r, basis2: o } = n,
    a = F(e.get(), s, t),
    g = w(r, a),
    c = w(o, a),
    b = w(f(n), a);
  return M(i, g, c, b);
}
function z(n, s) {
  const i = sn(n, s, e.get()),
    { basis1: t, basis2: r } = n,
    o = I(t),
    a = I(r),
    g = Math.max(Math.abs(i[0]) - o, 0),
    c = Math.max(Math.abs(i[1]) - a, 0),
    b = i[2];
  return g * g + c * c + b * b;
}
function Vn(n, s) {
  return Math.sqrt(z(n, s));
}
function Yn(n, s) {
  let i = Number.NEGATIVE_INFINITY;
  for (const t of H) {
    const r = C(n, t, A.get()),
      o = dn(r, s);
    o > i && (i = o);
  }
  return Math.sqrt(i);
}
function jn(n, s) {
  return K(n.plane, s) && tn(n, s);
}
function Fn(n, s, i, t) {
  return Cn(n, i, t);
}
function B(n, s) {
  const i = -n.plane[3];
  return w(f(n), s) - i;
}
function kn(n, s, i, t) {
  const r = B(n, s),
    o = l(Zn, f(n), i - r);
  return p(t, s, o), t;
}
function qn(n, s) {
  return S(n.basis1, s.basis1) && S(n.basis2, s.basis2) && S(n.origin, s.origin);
}
function zn(n, s, i) {
  return (
    n !== i && _(n, i),
    an(d, s),
    cn(d, d),
    m(i.basis1, n.basis1, d),
    m(i.basis2, n.basis2, d),
    m(N(i.plane), N(n.plane), d),
    m(i.origin, n.origin, s),
    In(i.plane, i.plane, i.origin),
    i
  );
}
function Bn(n, s, i, t) {
  return (
    n !== t && _(n, t), un(Y, s, i), m(t.basis1, n.basis1, Y), m(t.basis2, n.basis2, Y), y(t), t
  );
}
function f(n) {
  return N(n.plane);
}
function Cn(n, s, i) {
  switch (s) {
    case O.X:
      u(i, n.basis1), D(i, i);
      break;
    case O.Y:
      u(i, n.basis2), D(i, i);
      break;
    case O.Z:
      u(i, f(n));
  }
  return i;
}
function tn(n, s) {
  const i = F(e.get(), s, n.origin),
    t = Z(n.basis1),
    r = Z(n.basis2),
    o = h(n.basis1, i),
    a = h(n.basis2, i);
  return -o - t < 0 && o - t < 0 && -a - r < 0 && a - r < 0;
}
function U(n, s) {
  const i = A.get();
  return u(i.origin, n.origin), u(i.vector, s), i;
}
function C(n, s, i) {
  const { basis1: t, basis2: r, origin: o } = n,
    a = l(e.get(), t, s.origin[0]),
    g = l(e.get(), r, s.origin[1]);
  p(i.origin, a, g), p(i.origin, i.origin, o);
  const c = l(e.get(), t, s.direction[0]),
    b = l(e.get(), r, s.direction[1]);
  return l(i.vector, p(c, c, b), 2), i;
}
function Hn(n, s) {
  Math.abs(h(n.basis1, n.basis2) / (I(n.basis1) * I(n.basis2))) > 1e-6 &&
    V().warn(s, 'Provided basis vectors are not perpendicular'),
    Math.abs(h(n.basis1, f(n))) > 1e-6 &&
      V().warn(s, 'Basis vectors and plane normal are not perpendicular'),
    Math.abs(-h(f(n), n.origin) - n.plane[3]) > 1e-6 &&
      V().warn(s, 'Plane offset is not consistent with plane origin');
}
function rn(n, s, i, t) {
  const r = f(n);
  j(r, s.direction, s.origin, i), j(N(i), r, s.origin, t);
}
const on = { plane: T(), origin: x(0, 0, 0), basis1: x(1, 0, 0), basis2: x(0, 1, 0) },
  v = new k(T),
  A = new k(mn),
  Zn = $(),
  Dn = new k(() => P()),
  H = [
    { origin: [-1, -1], direction: [1, 0] },
    { origin: [1, -1], direction: [0, 1] },
    { origin: [1, 1], direction: [-1, 0] },
    { origin: [-1, 1], direction: [0, -1] },
  ],
  d = G(),
  Y = G(),
  Wn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BoundedPlaneClass: _n,
        altitudeAt: B,
        axisAt: Fn,
        cameraFrustumCoverage: On,
        closestPoint: Q,
        closestPointOnSilhouette: J,
        copy: _,
        copyWithoutVerify: An,
        create: P,
        distance: Vn,
        distance2: z,
        distanceToSilhouette: Yn,
        elevate: W,
        equals: qn,
        extrusionContainsPoint: jn,
        fromAABoundingRect: X,
        fromValues: L,
        getExtent: En,
        intersectRay: q,
        intersectRayClosestSilhouette: Sn,
        normal: f,
        projectPoint: nn,
        projectPointLocal: sn,
        rotate: Bn,
        setAltitudeAt: kn,
        setExtent: xn,
        transform: zn,
        up: on,
        updateUnboundedPlane: y,
        wrap: yn,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { L as J, y as K, P as W, _ as Z, Vn as g, Wn as k, X as t };
