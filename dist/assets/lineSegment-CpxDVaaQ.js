import {
  al as q,
  a5 as A,
  a0 as B,
  Z as $,
  av as M,
  d4 as C,
  _ as d,
  c_ as P,
  bd as j,
  d6 as w,
} from './index.lazy-BHTpPf8X.js';
import { s as D } from './sphere-vpbSSw5q.js';
import { c as a } from './plane-BJrN7SUI.js';
function k(t) {
  return t ? { origin: q(t.origin), vector: q(t.vector) } : { origin: A(), vector: A() };
}
function E(t, r) {
  const n = H.get();
  return (n.origin = t), (n.vector = r), n;
}
function L(t, r = k()) {
  return F(t.origin, t.vector, r);
}
function F(t, r, n = k()) {
  return B(n.origin, t), B(n.vector, r), n;
}
function N(t, r, n = k()) {
  return B(n.origin, t), $(n.vector, r, t), n;
}
function O(t, r) {
  const n = $(a.get(), r, t.origin),
    c = M(t.vector, n),
    g = M(t.vector, t.vector),
    e = j(c / g, 0, 1),
    f = $(a.get(), P(a.get(), t.vector, e), n);
  return M(f, f);
}
function Q(t, r, n) {
  return G(t, r, 0, 1, n);
}
function R(t, r, n) {
  return d(n, t.origin, P(n, t.vector, r));
}
function G(t, r, n, c, g) {
  const { vector: e, origin: f } = t,
    s = $(a.get(), r, f),
    b = M(e, s) / C(e);
  return P(g, e, j(b, n, c)), d(g, g, t.origin);
}
function T(t, r) {
  if (y(t, E(r.origin, r.direction), !1, x)) {
    const { tA: n, pB: c, distance2: g } = x;
    if (n >= 0 && n <= 1) return g;
    if (n < 0) return w(t.origin, c);
    if (n > 1) return w(d(a.get(), t.origin, t.vector), c);
  }
  return null;
}
function U(t, r, n) {
  return !!y(t, r, !0, x) && (B(n, x.pA), !0);
}
function y(t, r, n, c) {
  const e = t.origin,
    f = d(a.get(), e, t.vector),
    s = r.origin,
    b = d(a.get(), s, r.vector),
    u = a.get(),
    i = a.get();
  if (
    ((u[0] = e[0] - s[0]),
    (u[1] = e[1] - s[1]),
    (u[2] = e[2] - s[2]),
    (i[0] = b[0] - s[0]),
    (i[1] = b[1] - s[1]),
    (i[2] = b[2] - s[2]),
    Math.abs(i[0]) < 1e-6 && Math.abs(i[1]) < 1e-6 && Math.abs(i[2]) < 1e-6)
  )
    return !1;
  const o = a.get();
  if (
    ((o[0] = f[0] - e[0]),
    (o[1] = f[1] - e[1]),
    (o[2] = f[2] - e[2]),
    Math.abs(o[0]) < 1e-6 && Math.abs(o[1]) < 1e-6 && Math.abs(o[2]) < 1e-6)
  )
    return !1;
  const S = u[0] * i[0] + u[1] * i[1] + u[2] * i[2],
    m = i[0] * o[0] + i[1] * o[1] + i[2] * o[2],
    z = u[0] * o[0] + u[1] * o[1] + u[2] * o[2],
    _ = i[0] * i[0] + i[1] * i[1] + i[2] * i[2],
    Z = (o[0] * o[0] + o[1] * o[1] + o[2] * o[2]) * _ - m * m;
  if (Math.abs(Z) < 1e-6) return !1;
  let v = (S * m - z * _) / Z,
    p = (S + m * v) / _;
  n && ((v = j(v, 0, 1)), (p = j(p, 0, 1)));
  const h = a.get(),
    l = a.get();
  return (
    (h[0] = e[0] + v * o[0]),
    (h[1] = e[1] + v * o[1]),
    (h[2] = e[2] + v * o[2]),
    (l[0] = s[0] + p * i[0]),
    (l[1] = s[1] + p * i[1]),
    (l[2] = s[2] + p * i[2]),
    (c.tA = v),
    (c.tB = p),
    (c.pA = h),
    (c.pB = l),
    (c.distance2 = w(h, l)),
    !0
  );
}
const x = { tA: 0, tB: 0, pA: A(), pB: A(), distance2: 0 },
  H = new D(() => k());
export { G as A, U as B, O as M, N as b, T as d, F as h, Q as j, R as l, L as p, k as v };
