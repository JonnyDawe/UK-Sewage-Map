import { e as Z } from './earcut-D9gy186-.js';
import {
  d5 as g,
  ab as H,
  bU as N,
  gZ as S,
  d0 as W,
  g_ as X,
  g$ as Y,
  h0 as E,
  h1 as I,
} from './index.lazy-BHTpPf8X.js';
import { t as M } from './Indices-CNwiYcS5.js';
import { O as $, v, M as F } from './plane-BJrN7SUI.js';
import { e as O } from './deduplicate-CegCCvIa.js';
function Q(n, o, l) {
  const s = R(x, n, o, l) ? $(x) : [0, 0, 1];
  return Math.abs(s[2]) > Math.cos(H(80)) ? g.Z : Math.abs(s[1]) > Math.abs(s[0]) ? g.Y : g.X;
}
function R(n, o, l, s) {
  const e = ((a) => !Array.isArray(a[0]))(o) ? (a, t) => o[3 * a + t] : (a, t) => o[a][t],
    r = s ? N(s) / S(s) : 1;
  return v(n, (a, t) => W(a, e(t, 0) * r, e(t, 1) * r, e(t, 2)), l);
}
const x = F();
function J(n) {
  const o = j(n.rings, n.hasZ, C.CCW_IS_HOLE, n.spatialReference),
    l = new Array();
  let s = 0,
    e = 0;
  for (const t of o.polygons) {
    const h = t.count,
      i = t.index,
      d = X(o.position, 3 * i, 3 * h),
      A = t.holeIndices.map((f) => f - i),
      y = M(Z(d, A, 3));
    l.push({ position: d, faces: y }), (s += d.length), (e += y.length);
  }
  const r = U(l, s, e),
    a = Array.isArray(r.position)
      ? O(r.position, 3, { originalIndices: r.faces })
      : O(r.position.buffer, 6, { originalIndices: r.faces });
  return (r.position = Y(new Float64Array(a.buffer))), (r.faces = a.indices), r;
}
function U(n, o, l) {
  if (n.length === 1) return n[0];
  const s = E(o),
    e = new Array(l);
  let r = 0,
    a = 0,
    t = 0;
  for (const h of n) {
    for (let i = 0; i < h.position.length; i++) s[r++] = h.position[i];
    for (const i of h.faces) e[a++] = i + t;
    t = r / 3;
  }
  return { position: s, faces: M(e) };
}
function j(n, o, l, s) {
  const e = n.length,
    r = new Array(e),
    a = new Array(e),
    t = new Array(e);
  let h = 0;
  for (let u = 0; u < e; ++u) h += n[u].length;
  let i = 0,
    d = 0,
    A = 0;
  const y = E(3 * h);
  let f = 0;
  for (let u = e - 1; u >= 0; u--) {
    const c = n[u],
      b = l === C.CCW_IS_HOLE && k(c, o, s);
    if (b && e !== 1) r[i++] = c;
    else {
      let L = c.length;
      for (let p = 0; p < i; ++p) L += r[p].length;
      const m = { index: f, pathLengths: new Array(i + 1), count: L, holeIndices: new Array(i) };
      (m.pathLengths[0] = c.length),
        c.length > 0 && (t[A++] = { index: f, count: c.length }),
        (f = b ? _(c, c.length - 1, -1, y, f, c.length, o) : _(c, 0, 1, y, f, c.length, o));
      for (let p = 0; p < i; ++p) {
        const w = r[p];
        (m.holeIndices[p] = f),
          (m.pathLengths[p + 1] = w.length),
          w.length > 0 && (t[A++] = { index: f, count: w.length }),
          (f = _(w, 0, 1, y, f, w.length, o));
      }
      (i = 0), m.count > 0 && (a[d++] = m);
    }
  }
  for (let u = 0; u < i; ++u) {
    const c = r[u];
    c.length > 0 && (t[A++] = { index: f, count: c.length }), (f = _(c, 0, 1, y, f, c.length, o));
  }
  return (a.length = d), (t.length = A), { position: y, polygons: a, outlines: t };
}
function _(n, o, l, s, e, r, a) {
  e *= 3;
  for (let t = 0; t < r; ++t) {
    const h = n[o];
    (s[e++] = h[0]), (s[e++] = h[1]), (s[e++] = a && h[2] ? h[2] : 0), (o += l);
  }
  return e / 3;
}
function k(n, o, l) {
  if (!o) return !I(n);
  const s = n.length - 1;
  switch (Q(n, s, l)) {
    case g.X:
      return !I(n, g.Y, g.Z);
    case g.Y:
      return !I(n, g.X, g.Z);
    case g.Z:
      return !I(n, g.X, g.Y);
  }
}
var C;
(function (n) {
  (n[(n.NONE = 0)] = 'NONE'), (n[(n.CCW_IS_HOLE = 1)] = 'CCW_IS_HOLE');
})(C || (C = {}));
export { j as a, Q as c, J as f, C as p };
