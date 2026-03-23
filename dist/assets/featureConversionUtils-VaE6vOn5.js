import {
  bu as tn,
  bv as I,
  bw as sn,
  bx as un,
  by as ln,
  a8 as cn,
  a7 as j,
  bz as an,
  bA as fn,
  bB as hn,
  bC as v,
  bD as dn,
  bE as gn,
} from './index.lazy-BHTpPf8X.js';
function b(n, r) {
  return n ? (r ? 4 : 3) : r ? 3 : 2;
}
const z = () => cn.getLogger('esri.layers.graphics.featureConversionUtils'),
  Y = {
    esriGeometryPoint: 0,
    esriGeometryPolyline: 2,
    esriGeometryPolygon: 3,
    esriGeometryMultipoint: 0,
    esriGeometryMultiPatch: 3,
    esriGeometryEnvelope: 0,
  },
  mn = (n, r, o, e, s, t) => {
    (n[o] = s), (n[o + 1] = t);
  },
  B = (n, r, o, e, s, t) => {
    (n[o] = s), (n[o + 1] = t), (n[o + 2] = r[e + 2]);
  },
  yn = (n, r, o, e, s, t) => {
    (n[o] = s), (n[o + 1] = t), (n[o + 2] = r[e + 3]);
  },
  pn = (n, r, o, e, s, t) => {
    (n[o] = s), (n[o + 1] = t), (n[o + 2] = r[e + 2]), (n[o + 3] = r[e + 3]);
  };
function _(n, r, o, e) {
  if (n) {
    if (o) return r && e ? pn : B;
    if (r && e) return yn;
  } else if (r && e) return B;
  return mn;
}
function L({ scale: n, translate: r }, o) {
  return Math.round((o - r[0]) / n[0]);
}
function q({ scale: n, translate: r }, o) {
  return Math.round((r[1] - o) / n[1]);
}
function U({ scale: n, translate: r }, o) {
  return Math.round((o - r[0]) / n[0]);
}
function R({ scale: n, translate: r }, o) {
  return Math.round((o - r[1]) / n[1]);
}
function S({ scale: n, translate: r }, o, e) {
  return o * n[e] + r[e];
}
function Sn(n, r, o) {
  return n ? (r ? (o ? D(n) : A(n)) : o ? C(n) : E(n)) : null;
}
function E(n) {
  const r = n.coords;
  return { x: r[0], y: r[1] };
}
function K(n, r) {
  return (n.coords[0] = r.x), (n.coords[1] = r.y), n;
}
function A(n) {
  const r = n.coords;
  return { x: r[0], y: r[1], z: r[2] };
}
function bn(n, r) {
  return (n.coords[0] = r.x), (n.coords[1] = r.y), (n.coords[2] = r.z), n;
}
function C(n) {
  const r = n.coords;
  return { x: r[0], y: r[1], m: r[2] };
}
function wn(n, r) {
  return (n.coords[0] = r.x), (n.coords[1] = r.y), (n.coords[2] = r.m), n;
}
function D(n) {
  const r = n.coords;
  return { x: r[0], y: r[1], z: r[2], m: r[3] };
}
function Mn(n, r) {
  return (n.coords[0] = r.x), (n.coords[1] = r.y), (n.coords[2] = r.z), (n.coords[3] = r.m), n;
}
function Gn(n, r, o, e) {
  let s = E;
  o && e ? (s = D) : o ? (s = A) : e && (s = C);
  for (const t of r) {
    const { geometry: u, attributes: l } = t,
      i = u != null ? s(u) : null;
    n.push({ attributes: l, geometry: i });
  }
  return n;
}
function O(n, r) {
  return n && r ? Mn : n ? bn : r ? wn : K;
}
function In(n, r, o, e, s) {
  const t = O(o, e);
  for (const { geometry: u, attributes: l } of r) {
    const i = u != null ? t(new I(), u) : null;
    n.push(new v(i, l, null, s ? l[s] : void 0));
  }
  return n;
}
function Nn(n, r, o = O(r.z != null, r.m != null)) {
  return o(n, r);
}
function Tn(n, r, o, e) {
  for (const { geometry: s, attributes: t } of r)
    n.push({ attributes: t, geometry: s != null ? Q(s, o, e) : null });
  return n;
}
function Q(n, r, o) {
  if (n == null) return null;
  const e = b(r, o),
    s = [];
  for (let t = 0; t < n.coords.length; t += e) {
    const u = [];
    for (let l = 0; l < e; l++) u.push(n.coords[t + l]);
    s.push(u);
  }
  return r
    ? o
      ? { points: s, hasZ: r, hasM: o }
      : { points: s, hasZ: r }
    : o
      ? { points: s, hasM: o }
      : { points: s };
}
function Pn(n, r, o, e, s) {
  const t = b(o, e);
  for (const { geometry: u, attributes: l } of r) {
    const i = u != null ? W(new I(), u, t) : null;
    n.push(new v(i, l, null, s ? l[s] : void 0));
  }
  return n;
}
function W(n, r, o = b(r.hasZ, r.hasM)) {
  n.lengths[0] = r.points.length;
  const e = n.coords;
  let s = 0;
  for (const t of r.points) for (let u = 0; u < o; u++) e[s++] = t[u];
  return n;
}
function Fn(n, r, o, e) {
  for (const { geometry: s, attributes: t } of r)
    n.push({ attributes: t, geometry: s != null ? X(s, o, e) : null });
  return n;
}
function X(n, r, o) {
  if (!n) return null;
  const e = b(r, o),
    { coords: s, lengths: t } = n,
    u = [];
  let l = 0;
  for (const i of t) {
    const c = [];
    for (let a = 0; a < i; a++) {
      const f = [];
      for (let h = 0; h < e; h++) f.push(s[l++]);
      c.push(f);
    }
    u.push(c);
  }
  return r
    ? o
      ? { paths: u, hasZ: r, hasM: o }
      : { paths: u, hasZ: r }
    : o
      ? { paths: u, hasM: o }
      : { paths: u };
}
function xn(n, r, o, e, s) {
  const t = b(o, e);
  for (const { geometry: u, attributes: l, centroid: i } of r) {
    const c = u != null ? $(new I(), u, t) : null,
      a = i != null ? Nn(new I(), i) : null;
    n.push(new v(c, l, a, s ? l[s] : void 0));
  }
  return n;
}
function $(n, r, o = b(r.hasZ, r.hasM)) {
  const { lengths: e, coords: s } = n;
  let t = 0;
  for (const u of r.paths) {
    for (const l of u) for (let i = 0; i < o; i++) s[t++] = l[i];
    e.push(u.length);
  }
  return n;
}
function Zn(n, r, o, e) {
  for (const { geometry: s, attributes: t, centroid: u } of r) {
    const l = s != null ? nn(s, o, e) : null;
    if (u != null) {
      const i = E(u);
      n.push({ attributes: t, centroid: i, geometry: l });
    } else n.push({ attributes: t, geometry: l });
  }
  return n;
}
function nn(n, r, o) {
  if (!n) return null;
  const e = b(r, o),
    { coords: s, lengths: t } = n,
    u = [];
  let l = 0;
  for (const i of t) {
    const c = [];
    for (let a = 0; a < i; a++) {
      const f = [];
      for (let h = 0; h < e; h++) f.push(s[l++]);
      c.push(f);
    }
    u.push(c);
  }
  return r
    ? o
      ? { rings: u, hasZ: r, hasM: o }
      : { rings: u, hasZ: r }
    : o
      ? { rings: u, hasM: o }
      : { rings: u };
}
function vn(n, r, o, e, s) {
  for (const { geometry: t, centroid: u, attributes: l } of r) {
    const i = t != null ? rn(new I(), t, o, e) : null,
      c = s ? l[s] : void 0;
    u != null ? n.push(new v(i, l, K(new I(), u), c)) : n.push(new v(i, l, null, c));
  }
  return n;
}
function rn(n, r, o = r.hasZ, e = r.hasM) {
  return kn(n, r.rings, o, e);
}
function kn(n, r, o, e) {
  const s = b(o, e),
    { lengths: t, coords: u } = n;
  let l = 0;
  P(n);
  for (const i of r) {
    for (const c of i) for (let a = 0; a < s; a++) u[l++] = c[a];
    t.push(i.length);
  }
  return n;
}
const Z = [],
  k = [];
function Vn(n, r, o, e, s) {
  Z[0] = n;
  const [t] = on(k, Z, r, o, e, s);
  return N(Z), N(k), t;
}
function on(n, r, o, e, s, t) {
  if ((N(n), !o)) {
    for (const u of r) {
      const l = t ? u.attributes[t] : void 0;
      n.push(new v(null, u.attributes, null, l));
    }
    return n;
  }
  switch (o) {
    case 'esriGeometryPoint':
      return In(n, r, e, s, t);
    case 'esriGeometryMultipoint':
      return Pn(n, r, e, s, t);
    case 'esriGeometryPolyline':
      return xn(n, r, e, s, t);
    case 'esriGeometryPolygon':
    case 'esriGeometryMultiPatch':
      return vn(n, r, e, s, t);
    default:
      z().error(
        'convertToFeatureSet:unknown-geometry',
        new j(`Unable to parse unknown geometry type '${o}'`),
      ),
        N(n);
  }
  return n;
}
function Yn(n, r, o, e) {
  (k[0] = n), en(Z, k, r, o, e);
  const s = Z[0];
  return N(Z), N(k), s;
}
function _n(n, r, o) {
  if (n == null) return null;
  const e = new I();
  return (
    'hasZ' in n && r == null && (r = n.hasZ),
    'hasM' in n && o == null && (o = n.hasM),
    tn(n)
      ? O(r ?? n.z != null, o ?? n.m != null)(e, n)
      : sn(n)
        ? rn(e, n, r, o)
        : un(n)
          ? $(e, n, b(r, o))
          : ln(n)
            ? W(e, n, b(r, o))
            : void z().error(
                'convertFromGeometry:unknown-geometry',
                new j(`Unable to parse unknown geometry type '${n}'`),
              )
  );
}
function jn(n, r, o, e) {
  const s = n && ('coords' in n ? n : n.geometry);
  if (s == null) return null;
  switch (r) {
    case 'esriGeometryPoint': {
      let t = E;
      return o && e ? (t = D) : o ? (t = A) : e && (t = C), t(s);
    }
    case 'esriGeometryMultipoint':
      return Q(s, o, e);
    case 'esriGeometryPolyline':
      return X(s, o, e);
    case 'esriGeometryPolygon':
      return nn(s, o, e);
    default:
      return (
        z().error(
          'convertToGeometry:unknown-geometry',
          new j(`Unable to parse unknown geometry type '${r}'`),
        ),
        null
      );
  }
}
function zn(n, r) {
  for (const o of r) n.push({ attributes: o.attributes });
  return n;
}
function en(n, r, o, e, s) {
  if ((N(n), o == null)) return zn(n, r);
  switch (o) {
    case 'esriGeometryPoint':
      return Gn(n, r, e, s);
    case 'esriGeometryMultipoint':
      return Tn(n, r, e, s);
    case 'esriGeometryPolyline':
      return Fn(n, r, e, s);
    case 'esriGeometryPolygon':
      return Zn(n, r, e, s);
    default:
      z().error(
        'convertToFeatureSet:unknown-geometry',
        new j(`Unable to parse unknown geometry type '${o}'`),
      );
  }
  return n;
}
function An(n) {
  const {
      objectIdFieldName: r,
      spatialReference: o,
      transform: e,
      fields: s,
      hasM: t,
      hasZ: u,
      features: l,
      geometryType: i,
      exceededTransferLimit: c,
      uniqueIdField: a,
      queryGeometry: f,
      queryGeometryType: h,
    } = n,
    d = {
      features: en([], l, i, u, t),
      fields: s,
      geometryType: i,
      objectIdFieldName: r,
      spatialReference: o,
      uniqueIdField: a,
      queryGeometry: jn(f, h, !1, !1),
    };
  return (
    e && (d.transform = e),
    c && (d.exceededTransferLimit = c),
    t && (d.hasM = t),
    u && (d.hasZ = u),
    d
  );
}
function Cn(n, r) {
  const o = new dn(),
    {
      hasM: e,
      hasZ: s,
      features: t,
      objectIdFieldName: u,
      spatialReference: l,
      geometryType: i,
      exceededTransferLimit: c,
      transform: a,
      fields: f,
    } = n;
  return (
    f && (o.fields = f),
    (o.geometryType = i ?? null),
    (o.objectIdFieldName = u ?? r ?? null),
    (o.spatialReference = l ?? null),
    o.objectIdFieldName
      ? (t && on(o.features, t, i, s, e, o.objectIdFieldName),
        c && (o.exceededTransferLimit = c),
        e && (o.hasM = e),
        s && (o.hasZ = s),
        a && (o.transform = a),
        o)
      : (z().error(
          new j('optimized-features:invalid-objectIdFieldName', 'objectIdFieldName is missing'),
        ),
        o)
  );
}
function Dn(n) {
  const { transform: r, features: o, hasM: e, hasZ: s } = n;
  if (!r) return n;
  for (const t of o)
    t.geometry != null && J(t.geometry, t.geometry, e, s, r),
      t.centroid != null && J(t.centroid, t.centroid, e, s, r);
  return (n.transform = null), n;
}
function On(n, r) {
  const { geometryType: o, features: e, hasM: s, hasZ: t } = r;
  if (!n) return r;
  for (let u = 0; u < e.length; u++) {
    const l = e[u],
      i = l.weakClone();
    (i.geometry = new I()),
      H(i.geometry, l.geometry, s, t, o, n),
      l.centroid &&
        ((i.centroid = new I()), H(i.centroid, l.centroid, s, t, 'esriGeometryPoint', n)),
      (e[u] = i);
  }
  return (r.transform = n), r;
}
function H(n, r, o, e, s, t, u = o, l = e) {
  if ((P(n), !(r != null && r.coords.length))) return null;
  const i = Y[s],
    { coords: c, lengths: a } = r,
    f = b(o, e),
    h = b(o && u, e && l),
    d = _(o, e, u, l);
  if (!a.length) return d(n.coords, c, 0, 0, L(t, c[0]), q(t, c[1])), P(n, f, 0), n;
  let g,
    y,
    w,
    G,
    p = 0,
    m = 0,
    M = m;
  for (const F of a) {
    if (F < i) continue;
    let T = 0;
    (m = M),
      (w = g = L(t, c[p])),
      (G = y = q(t, c[p + 1])),
      d(n.coords, c, m, p, w, G),
      T++,
      (p += f),
      (m += h);
    for (let x = 1; x < F; x++, p += f)
      (w = L(t, c[p])),
        (G = q(t, c[p + 1])),
        (w === g && G === y) ||
          (d(n.coords, c, m, p, w - g, G - y), (m += h), T++, (g = w), (y = G));
    T >= i && (n.lengths.push(T), (M = m));
  }
  return N(n.coords, M), n.coords.length ? n : null;
}
function Bn(n, r, o, e, s, t, u = o, l = e) {
  if ((P(n), !(r != null && r.coords.length))) return null;
  const i = Y[s],
    { coords: c, lengths: a } = r,
    f = b(o, e),
    h = b(o && u, e && l),
    d = _(o, e, u, l);
  if (!a.length) return d(n.coords, c, 0, 0, c[0], c[1]), P(n, f, 0), n;
  let g = 0;
  const y = t * t;
  for (const w of a) {
    if (w < i) {
      g += w * f;
      continue;
    }
    const G = n.coords.length / h,
      p = g,
      m = g + (w - 1) * f;
    d(n.coords, c, n.coords.length, p, c[p], c[p + 1]),
      V(n.coords, c, f, y, d, p, m),
      d(n.coords, c, n.coords.length, m, c[m], c[m + 1]);
    const M = n.coords.length / h - G;
    M >= i ? n.lengths.push(M) : N(n.coords, G * h), (g += w * f);
  }
  return n.coords.length ? n : null;
}
function En(n, r, o, e) {
  const s = n[r],
    t = n[r + 1],
    u = n[o],
    l = n[o + 1],
    i = n[e],
    c = n[e + 1];
  let a = u,
    f = l,
    h = i - a,
    d = c - f;
  if (h !== 0 || d !== 0) {
    const g = ((s - a) * h + (t - f) * d) / (h * h + d * d);
    g > 1 ? ((a = i), (f = c)) : g > 0 && ((a += h * g), (f += d * g));
  }
  return (h = s - a), (d = t - f), h * h + d * d;
}
function V(n, r, o, e, s, t, u) {
  let l,
    i = e,
    c = 0;
  for (let a = t + o; a < u; a += o) (l = En(r, a, t, u)), l > i && ((c = a), (i = l));
  i > e &&
    (c - t > o && V(n, r, o, e, s, t, c),
    s(n, r, n.length, c, r[c], r[c + 1]),
    u - c > o && V(n, r, o, e, s, c, u));
}
function Hn(n, r, o, e) {
  var c;
  if (!((c = r == null ? void 0 : r.coords) != null && c.length)) return null;
  const s = b(o, e);
  let t = Number.POSITIVE_INFINITY,
    u = Number.POSITIVE_INFINITY,
    l = Number.NEGATIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY;
  if (r && r.coords) {
    const a = r.coords;
    for (let f = 0; f < a.length; f += s) {
      const h = a[f],
        d = a[f + 1];
      (t = Math.min(t, h)), (l = Math.max(l, h)), (u = Math.min(u, d)), (i = Math.max(i, d));
    }
  }
  return an(n) ? fn(n, t, u, l, i) : hn(t, u, l, i, n), n;
}
function J(n, r, o, e, s) {
  const { coords: t, lengths: u } = r,
    l = b(o, e);
  if (!t.length) return n !== r && P(n), n;
  gn(s);
  const { originPosition: i, scale: c, translate: a } = s,
    f = Un;
  f.originPosition = i;
  const h = f.scale;
  (h[0] = c[0] ?? 1), (h[1] = -(c[1] ?? 1)), (h[2] = c[2] ?? 1), (h[3] = c[3] ?? 1);
  const d = f.translate;
  if (((d[0] = a[0] ?? 0), (d[1] = a[1] ?? 0), (d[2] = a[2] ?? 0), (d[3] = a[3] ?? 0), !u.length)) {
    for (let y = 0; y < l; ++y) n.coords[y] = S(f, t[y], y);
    return n !== r && P(n, l, 0), n;
  }
  let g = 0;
  for (let y = 0; y < u.length; y++) {
    const w = u[y];
    n.lengths[y] = w;
    for (let m = 0; m < l; ++m) n.coords[g + m] = S(f, t[g + m], m);
    let G = n.coords[g],
      p = n.coords[g + 1];
    g += l;
    for (let m = 1; m < w; m++, g += l) {
      (G += t[g] * h[0]), (p += t[g + 1] * h[1]), (n.coords[g] = G), (n.coords[g + 1] = p);
      for (let M = 2; M < l; ++M) n.coords[g + M] = S(f, t[g + M], M);
    }
  }
  return n !== r && P(n, t.length, u.length), n;
}
function Jn(n, r, o, e, s, t) {
  if ((P(n), n.lengths.push(...r.lengths), o === s && e === t))
    for (let u = 0; u < r.coords.length; u++) n.coords.push(r.coords[u]);
  else {
    const u = b(o, e),
      l = _(o, e, s, t),
      i = r.coords;
    for (let c = 0; c < i.length; c += u) l(n.coords, i, n.coords.length, c, i[c], i[c + 1]);
  }
  return n;
}
function Ln(n, r, o, e) {
  let s = 0,
    t = n[e * r],
    u = n[e * (r + 1)];
  for (let l = 1; l < o; l++) {
    const i = t + n[e * (r + l)],
      c = u + n[e * (r + l) + 1],
      a = (i - t) * (c + u);
    (t = i), (u = c), (s += a);
  }
  return 0.5 * s;
}
function Kn(n, r) {
  const { coords: o, lengths: e } = n;
  let s = 0,
    t = 0;
  for (let u = 0; u < e.length; u++) {
    const l = e[u];
    (t += Ln(o, s, l, r)), (s += l);
  }
  return Math.abs(t);
}
function qn(n, r, o, e) {
  return n * e - o * r === 0 && n * o + r * e > 0;
}
function Qn(n, r, o, e, s) {
  const t = b(e, s);
  if (!n.lengths.length) {
    if (n.coords.length < 2) return null;
    const [f, h] = n.coords,
      d = U(r, f),
      g = R(r, h);
    return new I([], [d, g]);
  }
  const u = new I([], [0, 0]),
    l = Y[o],
    i = o === 'esriGeometryPolygon' || o === 'esriGeometryPolyline';
  let c = 0,
    a = 0;
  for (let f = 0; f < n.lengths.length; f++) {
    const h = n.lengths[f],
      d = a;
    let g = U(r, n.coords[t * c]),
      y = R(r, n.coords[t * c + 1]);
    (u.coords[a++] = g), (u.coords[a++] = y);
    let w = 0,
      G = 0,
      p = 1;
    for (let m = 1; m < h; m++) {
      const M = U(r, n.coords[t * (m + c)]),
        F = R(r, n.coords[t * (m + c) + 1]);
      if (M !== g || F !== y) {
        const T = M - g,
          x = F - y;
        i && qn(w, G, T, x)
          ? ((u.coords[a - 2] += T), (u.coords[a - 1] += x), (g += T), (y += x))
          : ((u.coords[a++] = M),
            (u.coords[a++] = F),
            (g = M),
            (y = F),
            (w = T),
            (G = x),
            (p += 1));
      }
    }
    p < l ? (a = d) : u.lengths.push(p), (c += h);
  }
  return u.lengths.length === 0 ? null : u;
}
function P(n, r = 0, o = 0) {
  N(n.lengths, o), N(n.coords, r);
}
function N(n, r = 0) {
  n.length !== r && (n.length = r);
}
const Un = { originPosition: 'lowerLeft', scale: [1, 1, 1, 1], translate: [0, 0, 0, 0] };
export {
  X as C,
  Qn as F,
  Kn as G,
  nn as K,
  J as M,
  q as N,
  Q as R,
  Nn as U,
  rn as W,
  kn as X,
  Dn as a,
  Jn as b,
  H as d,
  Cn as f,
  On as h,
  An as i,
  Sn as j,
  Bn as m,
  on as n,
  Vn as o,
  Hn as p,
  Yn as r,
  _n as s,
  jn as u,
  L as w,
};
