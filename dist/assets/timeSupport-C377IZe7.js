const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/intersectsOperator-DYtekBvS.js',
      'assets/OperatorIntersects-CsrmV5js.js',
      'assets/ProjectionTransformation-DO3Gv-47.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/jsonConverter-kXdRGJAn.js',
      'assets/containsOperator-I1S3OKwv.js',
      'assets/crossesOperator-Cb92fgt0.js',
      'assets/OperatorCrosses-pDriAxY1.js',
      'assets/disjointOperator-D0uJ1cEg.js',
      'assets/overlapsOperator-CTxt1H3m.js',
      'assets/OperatorOverlaps-HF4Qao06.js',
      'assets/touchesOperator-Don_izbz.js',
      'assets/OperatorTouches-R2Thm4g6.js',
      'assets/withinOperator-hxgtnkci.js',
      'assets/OperatorWithin-B3evWj5I.js',
    ]),
) => i.map((i) => d[i]);
import { _ as y } from './index-DqxZnyqH.js';
import {
  bv as d,
  mj as C,
  mk as V,
  bw as A,
  du as M,
  ml as D,
  mm as L,
  a7 as h,
  dL as w,
  fR as q,
  cL as I,
} from './index.lazy-BHTpPf8X.js';
import {
  m as x,
  R as j,
  K as F,
  C as U,
  j as E,
  d as P,
  b as W,
  W as T,
} from './featureConversionUtils-VaE6vOn5.js';
import { x as Z } from './queryUtils-BQJHb1Wr.js';
const N = new d(),
  J = new d(),
  g = new d(),
  c = {
    esriGeometryPoint: E,
    esriGeometryPolyline: U,
    esriGeometryPolygon: F,
    esriGeometryMultipoint: j,
  };
function ae(e, t, r, i = e.hasZ, s = e.hasM) {
  if (t == null) return null;
  const l = e.hasZ && i,
    n = e.hasM && s;
  if (r) {
    const o = P(g, t, e.hasZ, e.hasM, 'esriGeometryPoint', r, i, s);
    return E(o, l, n);
  }
  return E(t, l, n);
}
function S(e, t, r, i, s, l, n = t, o = r) {
  var R, m, _;
  const u = t && n,
    a = r && o,
    f = i != null ? ('coords' in i ? i : i.geometry) : null;
  if (f == null) return null;
  if (s) {
    let p = x(J, f, t, r, e, s, n, o);
    return (
      l && (p = P(g, p, u, a, e, l)), ((R = c[e]) == null ? void 0 : R.call(c, p, u, a)) ?? null
    );
  }
  if (l) {
    const p = P(g, f, t, r, e, l, n, o);
    return ((m = c[e]) == null ? void 0 : m.call(c, p, u, a)) ?? null;
  }
  return W(N, f, t, r, n, o), ((_ = c[e]) == null ? void 0 : _.call(c, N, u, a)) ?? null;
}
function fe(e) {
  return e && b in e ? JSON.parse(JSON.stringify(e, Y)) : e;
}
const b = '_geVersion',
  Y = (e, t) => (e === b ? void 0 : t);
function k(e) {
  return e === 'mesh' ? C : V(e);
}
function O(e, t) {
  return e ? (t ? 4 : 3) : t ? 3 : 2;
}
function K(e, t, r, i) {
  return $(e, t, r, i.coords[0], i.coords[1]);
}
function z(e, t, r, i, s, l) {
  const n = O(s, l),
    { coords: o, lengths: u } = i;
  if (!u) return !1;
  for (let a = 0, f = 0; a < u.length; a++, f += n) if (!$(e, t, r, o[f], o[f + 1])) return !1;
  return !0;
}
function $(e, t, r, i, s) {
  if (!e) return !1;
  const l = O(t, r),
    { coords: n, lengths: o } = e;
  let u = !1,
    a = 0;
  for (const f of o) (u = B(u, n, l, a, f, i, s)), (a += f * l);
  return u;
}
function B(e, t, r, i, s, l, n) {
  let o = e,
    u = i;
  for (let a = i, f = i + s * r; a < f; a += r) {
    (u = a + r), u === f && (u = i);
    const R = t[a],
      m = t[a + 1],
      _ = t[u],
      p = t[u + 1];
    ((m < n && p >= n) || (p < n && m >= n)) && R + ((n - m) / (p - m)) * (_ - R) < l && (o = !o);
  }
  return o;
}
const G = 'unsupported-query',
  v = {
    spatialRelationship: {
      esriSpatialRelIntersects: !0,
      esriSpatialRelContains: !0,
      esriSpatialRelWithin: !0,
      esriSpatialRelCrosses: !0,
      esriSpatialRelDisjoint: !0,
      esriSpatialRelTouches: !0,
      esriSpatialRelOverlaps: !0,
      esriSpatialRelEnvelopeIntersects: !0,
      esriSpatialRelIndexIntersects: !1,
      esriSpatialRelRelation: !1,
    },
    queryGeometry: {
      esriGeometryPoint: !0,
      esriGeometryMultiPatch: !1,
      esriGeometryMultipoint: !0,
      esriGeometryPolyline: !0,
      esriGeometryPolygon: !0,
      esriGeometryEnvelope: !0,
    },
    layerGeometry: {
      esriGeometryPoint: !0,
      esriGeometryMultiPatch: !0,
      esriGeometryMultipoint: !0,
      esriGeometryPolyline: !0,
      esriGeometryPolygon: !0,
      esriGeometryEnvelope: !1,
    },
  };
function H(e) {
  return e != null && v.spatialRelationship[e] === !0;
}
function Q(e) {
  return e != null && v.queryGeometry[q(e)] === !0;
}
function X(e) {
  return e != null && v.layerGeometry[e] === !0;
}
const ee = {
  esriSpatialRelIntersects: () =>
    y(
      () => import('./intersectsOperator-DYtekBvS.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelContains: () =>
    y(
      () => import('./containsOperator-I1S3OKwv.js'),
      __vite__mapDeps([10, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelCrosses: () =>
    y(
      () => import('./crossesOperator-Cb92fgt0.js'),
      __vite__mapDeps([11, 12, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelDisjoint: () =>
    y(
      () => import('./disjointOperator-D0uJ1cEg.js'),
      __vite__mapDeps([13, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelEnvelopeIntersects: null,
  esriSpatialRelIndexIntersects: null,
  esriSpatialRelOverlaps: () =>
    y(
      () => import('./overlapsOperator-CTxt1H3m.js'),
      __vite__mapDeps([14, 15, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelTouches: () =>
    y(
      () => import('./touchesOperator-Don_izbz.js'),
      __vite__mapDeps([16, 17, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelWithin: () =>
    y(
      () => import('./withinOperator-hxgtnkci.js'),
      __vite__mapDeps([18, 19, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  esriSpatialRelRelation: null,
};
function te(e) {
  const t = ee[e];
  if (t == null) throw new Error(`Cannot load unsupported spatial operator: ${e}`);
  return t();
}
async function pe(e, t, r, i, s) {
  if (A(t)) {
    if (
      r === 'esriGeometryPoint' &&
      (e === 'esriSpatialRelIntersects' || e === 'esriSpatialRelContains')
    ) {
      const n = T(new d(), t, !1, !1);
      return (o) => K(n, !1, !1, o);
    }
    if (r === 'esriGeometryMultipoint') {
      const n = T(new d(), t, !1, !1);
      if (e === 'esriSpatialRelContains') return (o) => z(n, !1, !1, o, i, s);
    }
  }
  if (M(t)) {
    if (
      r === 'esriGeometryPoint' &&
      (e === 'esriSpatialRelIntersects' || e === 'esriSpatialRelContains')
    )
      return (n) => D(t, S(r, i, s, n));
    if (r === 'esriGeometryMultipoint' && e === 'esriSpatialRelContains')
      return (n) => L(t, S(r, i, s, n));
    if (e === 'esriSpatialRelIntersects') {
      const n = k(r);
      return (o) => n(t, S(r, i, s, o));
    }
  }
  e === 'esriSpatialRelEnvelopeIntersects' && (e = 'esriSpatialRelIntersects');
  const l = await te(e);
  return (n) => l.execute(t, S(r, i, s, n));
}
async function ce(e, t, r) {
  var l;
  const { spatialRel: i, geometry: s } = e;
  if (s) {
    if (!H(i)) throw new h(G, 'Unsupported query spatial relationship', { query: e });
    if (w(s.spatialReference) && w(r)) {
      if (!Q(s)) throw new h(G, 'Unsupported query geometry type', { query: e });
      if (!X(t)) throw new h(G, 'Unsupported layer geometry type', { query: e });
      if (e.outSR) return Z((l = e.geometry) == null ? void 0 : l.spatialReference, e.outSR);
    }
  }
}
function me(e) {
  if (M(e)) return !0;
  if (A(e)) {
    for (const t of e.rings)
      if (
        t.length !== 5 ||
        t[0][0] !== t[1][0] ||
        t[0][0] !== t[4][0] ||
        t[2][0] !== t[3][0] ||
        t[0][1] !== t[3][1] ||
        t[0][1] !== t[4][1] ||
        t[1][1] !== t[2][1]
      )
        return !1;
    return !0;
  }
  return !1;
}
async function ye(e, t) {
  if (!e) return null;
  const r = t.featureAdapter,
    { startTimeField: i, endTimeField: s } = e;
  let l = Number.POSITIVE_INFINITY,
    n = Number.NEGATIVE_INFINITY;
  if (i && s)
    await t.forEach((o) => {
      const u = r.getAttribute(I(o), i),
        a = r.getAttribute(I(o), s);
      u == null || isNaN(u) || (l = Math.min(l, u)), a == null || isNaN(a) || (n = Math.max(n, a));
    });
  else {
    const o = i || s;
    await t.forEach((u) => {
      const a = r.getAttribute(I(u), o);
      a == null || isNaN(a) || ((l = Math.min(l, a)), (n = Math.max(n, a)));
    });
  }
  return { start: l, end: n };
}
function Re(e, t, r) {
  var u;
  if (!t || !e) return null;
  const { startTimeField: i, endTimeField: s } = e;
  if (!i && !s) return null;
  const { start: l, end: n } = t;
  if (l === null && n === null) return null;
  if (l === void 0 && n === void 0) return ie();
  const o =
    ((u = r.getAttributeAsTimestamp) == null ? void 0 : u.bind(r)) ?? r.getAttribute.bind(r);
  return i && s ? re(o, i, s, l, n) : ne(o, i || s, l, n);
}
function re(e, t, r, i, s) {
  return i != null && s != null
    ? (l) => {
        const n = e(l, t),
          o = e(l, r);
        return (n == null || n <= s) && (o == null || o >= i);
      }
    : i != null
      ? (l) => {
          const n = e(l, r);
          return n == null || n >= i;
        }
      : s != null
        ? (l) => {
            const n = e(l, t);
            return n == null || n <= s;
          }
        : void 0;
}
function ne(e, t, r, i) {
  return r != null && i != null && r === i
    ? (s) => e(s, t) === r
    : r != null && i != null
      ? (s) => {
          const l = e(s, t);
          return l != null && l >= r && l <= i;
        }
      : r != null
        ? (s) => {
            const l = e(s, t);
            return l != null && l >= r;
          }
        : i != null
          ? (s) => {
              const l = e(s, t);
              return l != null && l <= i;
            }
          : void 0;
}
function ie() {
  return () => !1;
}
export { pe as I, S as a, me as d, fe as h, Re as l, ye as n, ce as w, ae as y };
