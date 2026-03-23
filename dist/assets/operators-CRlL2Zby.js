const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/apiConverter-Dm_24RD5.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/ProjectionTransformation-DO3Gv-47.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/jsonConverter-kXdRGJAn.js',
    ]),
) => i.map((i) => d[i]);
import { execute as h } from './affineTransformOperator-D9i6l6p3.js';
import { _ as L } from './index-DqxZnyqH.js';
import { gl as $, bI as _, b0 as y, gk as N } from './index.lazy-BHTpPf8X.js';
import { u as E, a as I, s as A, c as X, i as k } from './operatorGeodesicBuffer-DX7y1HPL.js';
import { e as G } from './geodeticCurveType-CirnHLSB.js';
import { m as q } from './geodeticAreaOperator-FqCaCI7k.js';
import { f as ar } from './geodeticAreaOperator-FqCaCI7k.js';
import { l as V } from './geodeticDensifyOperator-DI6lMp64.js';
import { g as ir } from './geodeticDensifyOperator-DI6lMp64.js';
import { m as B } from './geodeticLengthOperator-BwUUkHRL.js';
import { f as pr } from './geodeticLengthOperator-BwUUkHRL.js';
import F from './Transformation-24g8v2l8.js';
import { i as mr } from './areaOperator-BN4hRQzc.js';
import { x as H, l as Z, f as J } from './operatorBuffer-Jc2YoKAs.js';
import {
  getSpatialReference as a,
  fromGeometry as r,
  fromSpatialReference as u,
  toPolygon as T,
  toGeometry as p,
} from './apiConverter-Dm_24RD5.js';
import { p as yr } from './centroidOperator-BdD-760q.js';
import { i as xr } from './clipOperator-B2w1xEci.js';
import { X as K, h as Q } from './ProjectionTransformation-DO3Gv-47.js';
import { X as U, _ as W, v as Y, M as ee } from './operatorConvexHull-BhJ39CvM.js';
import { t as te } from './OperatorCrosses-pDriAxY1.js';
import { i as dr } from './cutOperator-BMO98Zex.js';
import { l as vr } from './densifyOperator-D2FBkJvc.js';
import { m as Sr } from './differenceOperator-BbqvLoQJ.js';
import { i as Cr } from './distanceOperator-yohXhHPI.js';
import { l as Pr } from './equalsOperator-B0FQOTn6.js';
import { c as Tr } from './generalizeOperator-2va1Ujlw.js';
import { s as re, u as oe, o as ne, t as se } from './operatorIntersection-BtbFFy6m.js';
import { t as ue } from './OperatorIntersects-CsrmV5js.js';
import { c as Rr } from './labelPointOperator-DswOXe7V.js';
import { D as ae, j as ce, w as ie } from './operatorOffset-hvDmN3h3.js';
import { t as le } from './OperatorOverlaps-HF4Qao06.js';
import { g as Dr } from './proximityOperator-CoUv5t0O.js';
import { f as Lr } from './relateOperator-C9Hn_-dM.js';
import { s as pe, u as fe, o as me, t as $e } from './operatorSimplify-BC_thSEM.js';
import { i as Er } from './symmetricDifferenceOperator-BI-0FVTq.js';
import { t as ye } from './OperatorTouches-R2Thm4g6.js';
import { s as _e, t as xe, o as be } from './operatorUnion-Bu6hZMxu.js';
import { t as de } from './OperatorWithin-B3evWj5I.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import './jsonConverter-kXdRGJAn.js';
import './operatorGeodeticDensify-C_6Mtlou.js';
import './GeometryCleaner-BEJM7I4l-BHcstiW-.js';
import './OperatorGeneralize-BakAlj2i.js';
import './Centroid-DZi-eb9F-C125OHYY.js';
import './OperatorProximity-D9PsRk7y.js';
function ge(e, t, o = {}) {
  const { unit: n } = o,
    s = a(e);
  return n && (t = $(t, n, s)), T(J(r(e), u(s), t), s);
}
function ve(e, t, o = {}) {
  let { maxDeviation: n = NaN, maxVerticesInFullCircle: s = 96, union: l = !1, unit: c } = o;
  const i = a(e);
  c && ((t = t.map((f) => $(f, c, i))), n && (n = $(n, c, i)));
  const m = e.map(r);
  return Z(m, u(i), t, n, s, l)
    .map((f) => T(f, i))
    .filter(_);
}
const je = H(),
  qt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: ge, executeMany: ve, supportsCurves: je },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  b = new K();
function Se(e) {
  const t = a(e);
  return b.accelerateGeometry(r(e), u(t), 1);
}
function Oe(e, t) {
  return b.execute(r(e), r(t), u(e.spatialReference), null);
}
const Ce = b.supportsCurves(),
  Vt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: Se, execute: Oe, supportsCurves: Ce },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function Me(e) {
  const t = a(e);
  return p(ee(r(e)), t);
}
function Pe(e, t = {}) {
  const { merge: o = !1 } = t,
    n = e.map(r),
    s = a(e);
  return Y(n, o).map((l) => p(l, s));
}
function Ge(e) {
  return W(r(e));
}
const Te = U(),
  Bt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: Me, executeMany: Pe, isConvex: Ge, supportsCurves: Te },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  d = new te();
function ze(e) {
  const t = a(e);
  return d.accelerateGeometry(r(e), u(t), 1);
}
function Re(e, t) {
  return d.execute(r(e), r(t), u(e.spatialReference), null);
}
const we = d.supportsCurves(),
  Ft = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: ze, execute: Re, supportsCurves: we },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  g = new Q();
function De(e) {
  const t = a(e);
  return g.accelerateGeometry(r(e), u(t), 1);
}
function he(e, t) {
  return g.execute(r(e), r(t), u(e.spatialReference));
}
const Le = g.supportsCurves(),
  Ht = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: De, execute: he, supportsCurves: Le },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
let x, v, j, S, z;
function R() {
  return !!x && A();
}
async function w() {
  if (!R()) {
    const [e] = await Promise.all([
      L(() => import('./apiConverter-Dm_24RD5.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])),
      E(),
    ]);
    (x = e.fromGeometry),
      (v = e.fromSpatialReference),
      (j = e.getSpatialReference),
      (S = e.toPolygon),
      (z = I());
  }
}
function Ne(e, t, o = {}) {
  let { curveType: n = 'geodesic', maxDeviation: s = NaN, unit: l } = o;
  l && ((t = y(t, l, 'meters')), s && (s = y(s, l, 'meters')));
  const c = j(e);
  return S(k(x(e), v(c), G[n], t, s), c);
}
function Ee(e, t, o = {}) {
  let { curveType: n = 'geodesic', maxDeviation: s = NaN, union: l = !1, unit: c } = o;
  c && ((t = t.map((f) => y(f, c, 'meters'))), s && (s = y(s, c, 'meters')));
  const i = e.map(x),
    m = j(e);
  return X(i, v(m), G[n], t, s, l)
    .map((f) => S(f, m))
    .filter(_);
}
const Zt = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      execute: Ne,
      executeMany: Ee,
      isLoaded: R,
      load: w,
      get supportsCurves() {
        return z;
      },
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
function Ie(e) {
  const t = a(e);
  return se(r(e), u(t));
}
function Ae(e, t) {
  const o = a(e);
  return p(ne(r(e), r(t), u(o)), o);
}
function Xe(e, t) {
  const o = e.map(r),
    n = a(e);
  return oe(o, r(t), u(n), 7)
    .map((s) => p(s, n))
    .filter(_);
}
const ke = re(),
  Jt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: Ie, execute: Ae, executeMany: Xe, supportsCurves: ke },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  O = new ue();
function qe(e) {
  const t = a(e);
  return O.accelerateGeometry(r(e), u(t), 1);
}
function Ve(e, t) {
  return O.execute(r(e), r(t), u(e.spatialReference), null);
}
const Be = O.supportsCurves(),
  Kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: qe, execute: Ve, supportsCurves: Be },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function Fe(e, t = {}) {
  const { unit: o } = t;
  let n = r(e).calculateLength2D();
  if (n && o) {
    const s = a(e);
    n = N(n, s, o);
  }
  return n;
}
const He = !0,
  Qt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: Fe, supportsCurves: He },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  D = { round: 0, bevel: 1, miter: 2, square: 3 };
function Ze(e, t, o = {}) {
  const { miterLimit: n = 10, flattenError: s = 0, joins: l = 'round', unit: c } = o,
    i = a(e);
  return c && (t = $(t, c, i)), p(ie(r(e), u(i), t, D[l], n, s), i);
}
function Je(e, t, o = {}) {
  const { miterLimit: n = 10, flattenError: s = 0, joins: l = 'round', unit: c } = o,
    i = a(e);
  c && (t = $(t, c, i));
  const m = e.map(r);
  return ce(m, u(i), t, D[l], n, s)
    .map((f) => p(f, i))
    .filter(_);
}
const Ke = ae(),
  Ut = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: Ze, executeMany: Je, supportsCurves: Ke },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  C = new le();
function Qe(e) {
  const t = a(e);
  return C.accelerateGeometry(r(e), u(t), 1);
}
function Ue(e, t) {
  return C.execute(r(e), r(t), u(e.spatialReference), null);
}
const We = C.supportsCurves(),
  Wt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: Qe, execute: Ue, supportsCurves: We },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function Ye(e) {
  const t = a(e);
  return p($e(r(e), u(t), !1), t);
}
function et(e) {
  const t = e.map(r),
    o = a(e);
  return me(t, u(o), !1).map((n) => p(n, o));
}
function tt(e) {
  return fe(r(e), u(a(e)), !1);
}
const rt = pe(),
  Yt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: Ye, executeMany: et, isSimple: tt, supportsCurves: rt },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  M = new ye();
function ot(e) {
  const t = a(e);
  return M.accelerateGeometry(r(e), u(t), 1);
}
function nt(e, t) {
  return M.execute(r(e), r(t), u(e.spatialReference), null);
}
const st = M.supportsCurves(),
  er = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: ot, execute: nt, supportsCurves: st },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function ut(e, t) {
  const o = a(e);
  return p(be(r(e), r(t), u(o)), o);
}
function at(e) {
  const t = e.map(r),
    o = a(e);
  return p(xe(t, u(o)), o);
}
const ct = _e(),
  tr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, execute: ut, executeMany: at, supportsCurves: ct },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  P = new de();
function it(e) {
  const t = a(e);
  return P.accelerateGeometry(r(e), u(t), 1);
}
function lt(e, t) {
  return P.execute(r(e), r(t), u(e.spatialReference), null);
}
const pt = P.supportsCurves(),
  rr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: it, execute: lt, supportsCurves: pt },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function or(e, t, o, n) {
  const s = new F().rotate(t, o, n);
  return h(e, s);
}
async function nr() {
  await Promise.all([q(), w(), V(), B()]);
}
export {
  mr as area,
  qt as buffer,
  yr as centroid,
  xr as clip,
  Vt as contains,
  Bt as convexHull,
  Ft as crosses,
  dr as cut,
  vr as densify,
  Sr as difference,
  Ht as disjoint,
  Cr as distance,
  Pr as equals,
  Tr as generalize,
  Zt as geodesicBuffer,
  ar as geodeticArea,
  ir as geodeticDensify,
  pr as geodeticLength,
  Jt as intersection,
  Kt as intersects,
  Rr as labelPoint,
  Qt as length,
  nr as loadAll,
  Ut as offset,
  Wt as overlaps,
  Dr as proximity,
  Lr as relate,
  or as rotate,
  Yt as simplify,
  Er as symmetricDifference,
  er as touches,
  tr as union,
  rr as within,
};
