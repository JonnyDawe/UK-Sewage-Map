const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/geodesicBufferOperator-DqN3eU72.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-Bz5HPDxq.css',
      'assets/operatorGeodesicBuffer-DX7y1HPL.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/geodeticCurveType-CirnHLSB.js',
    ]),
) => i.map((i) => d[i]);
import { _ as T } from './index-DqxZnyqH.js';
import {
  dL as h,
  bs as c,
  hI as g,
  bt as f,
  hJ as R,
  bI as j,
  aM as Z,
  hK as k,
  hL as U,
  bh as N,
  hM as O,
  bj as E,
  h as q,
  be as I,
  hN as L,
  br as P,
  dF as y,
  bw as S,
  a7 as D,
  du as _,
  bx as J,
  aK as K,
} from './index.lazy-BHTpPf8X.js';
import { t as b } from './json-Wa8cmqdu.js';
const m = [0, 0];
function w(e, i) {
  if (!i) return null;
  if ('x' in i) {
    const s = { x: 0, y: 0 };
    return ([s.x, s.y] = e(i.x, i.y, m)), i.z != null && (s.z = i.z), i.m != null && (s.m = i.m), s;
  }
  if ('xmin' in i) {
    const s = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return (
      ([s.xmin, s.ymin] = e(i.xmin, i.ymin, m)),
      ([s.xmax, s.ymax] = e(i.xmax, i.ymax, m)),
      i.hasZ && ((s.zmin = i.zmin), (s.zmax = i.zmax), (s.hasZ = !0)),
      i.hasM && ((s.mmin = i.mmin), (s.mmax = i.mmax), (s.hasM = !0)),
      s
    );
  }
  return 'rings' in i
    ? { rings: x(i.rings, e), hasM: i.hasM, hasZ: i.hasZ }
    : 'paths' in i
      ? { paths: x(i.paths, e), hasM: i.hasM, hasZ: i.hasZ }
      : 'points' in i
        ? { points: v(i.points, e), hasM: i.hasM, hasZ: i.hasZ }
        : null;
}
function x(e, i) {
  const s = [];
  for (const n of e) s.push(v(n, i));
  return s;
}
function v(e, i) {
  const s = [];
  for (const n of e) {
    const a = i(n[0], n[1], [0, 0]);
    s.push(a), n.length > 2 && a.push(n[2]), n.length > 3 && a.push(n[3]);
  }
  return s;
}
async function F(e, i) {
  if (!e || !i) return;
  const s = Array.isArray(e)
    ? e.map((n) => (n.geometry != null ? n.geometry.spatialReference : null)).filter(j)
    : [e];
  await Z(s.map((n) => ({ source: n, dest: i })));
}
const B = w.bind(null, k),
  M = w.bind(null, U);
function z(e, i, s, n) {
  if (!e) return null;
  if ((s || ((s = i), (i = e.spatialReference)), !h(i) || !h(s) || c(i, s))) return e;
  if (g(i, s)) {
    const a = f(s) ? B(e) : M(e);
    return (a.spatialReference = s), a;
  }
  return R(b, [e], i, s, null, n)[0];
}
class V {
  constructor() {
    (this._jobs = []), (this._timer = null), (this._process = this._process.bind(this));
  }
  async push(i, s, n, a) {
    if (!(i != null && i.length) || !s || !n || c(s, n)) return i;
    const r = {
      geometries: i,
      inSpatialReference: s,
      outSpatialReference: n,
      geographicTransformation: a,
      resolve: N(),
    };
    return (
      this._jobs.push(r),
      this._timer ?? (this._timer = setTimeout(this._process, 10)),
      r.resolve.promise
    );
  }
  _process() {
    this._timer = null;
    const i = this._jobs.shift();
    if (!i) return;
    const {
      geometries: s,
      inSpatialReference: n,
      outSpatialReference: a,
      resolve: r,
      geographicTransformation: o,
    } = i;
    g(n, a) ? (f(a) ? r(s.map(B)) : r(s.map(M))) : r(R(b, s, n, a, o, null)),
      this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
}
const G = new V();
function ne(e, i, s, n) {
  return G.push(e, i, s, n);
}
const Q = new I({
    esriSRUnit_Meter: 'meters',
    esriSRUnit_Kilometer: 'kilometers',
    esriSRUnit_Foot: 'feet',
    esriSRUnit_StatuteMile: 'miles',
    esriSRUnit_NauticalMile: 'nautical-miles',
    esriSRUnit_USNauticalMile: 'us-nautical-miles',
  }),
  d = Object.freeze({}),
  $ = 'frequency';
async function se(e, i, s) {
  var a, r;
  const n = e.bin;
  return (
    n.onField && (n.onField = n.onField.trim()),
    (a = n.onExpression) != null && a.value && (n.onExpression.value = n.onExpression.value.trim()),
    n.splitBy &&
      (n.splitBy.value && (n.splitBy.value = n.splitBy.value.trim()),
      n.splitBy.outAlias && (n.splitBy.outAlias = n.splitBy.outAlias.trim())),
    n.stackBy &&
      (n.stackBy.value && (n.stackBy.value = n.stackBy.value.trim()),
      n.stackBy.outAlias && (n.stackBy.outAlias = n.stackBy.outAlias.trim())),
    'normalizationField' in n.parameters &&
      n.parameters.normalizationField &&
      (n.parameters.normalizationField = n.parameters.normalizationField.trim()),
    ((r = e.outStatistics) != null && r.length) ||
      (e.outStatistics = [
        { statisticType: 'count', onStatisticField: '1', outStatisticFieldName: $ },
      ]),
    C(e, i, s)
  );
}
async function C(e, i, s) {
  const { outFields: n, orderByFields: a, groupByFieldsForStatistics: r, outStatistics: o } = e;
  if (n) for (let t = 0; t < n.length; t++) n[t] = n[t].trim();
  if (a) for (let t = 0; t < a.length; t++) a[t] = a[t].trim();
  if (r) for (let t = 0; t < r.length; t++) r[t] = r[t].trim();
  if (o)
    for (let t = 0; t < o.length; t++)
      o[t].onStatisticField && (o[t].onStatisticField = o[t].onStatisticField.trim());
  return e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference), H(e, i, s);
}
async function H(e, i, s) {
  var r;
  if (!e) return null;
  let { where: n } = e;
  if (
    ((e.where = n = n == null ? void 0 : n.trim()),
    (!n || /^1 *= *1$/.test(n) || (i && i === n)) && (e.where = null),
    !e.geometry)
  )
    return e;
  let a = await X(e);
  if (((e.distance = 0), (e.units = null), e.spatialRel === 'esriSpatialRelEnvelopeIntersects')) {
    const { spatialReference: o } = e.geometry;
    (a = O(a)), (a.spatialReference = o);
  }
  if (a) {
    await F(a.spatialReference, s), (a = W(a, s));
    const o = (await E(q(a)))[0];
    if (o == null) throw d;
    const t =
        ('quantizationParameters' in e &&
          ((r = e.quantizationParameters) == null ? void 0 : r.tolerance)) ||
        ('maxAllowableOffset' in e && e.maxAllowableOffset) ||
        0,
      l = t && A(a, s) ? { densificationStep: 8 * t } : void 0,
      p = o.toJSON(),
      u = z(p, p.spatialReference, s, l);
    if (!u) throw d;
    (u.spatialReference = s), (e.geometry = u);
  }
  return e;
}
function A(e, i) {
  if (!e) return !1;
  const s = e.spatialReference;
  return (_(e) || S(e) || J(e)) && !c(s, i) && !K(s, i);
}
function W(e, i) {
  const s = e.spatialReference;
  return A(e, i) && _(e)
    ? {
        spatialReference: s,
        rings: [
          [
            [e.xmin, e.ymin],
            [e.xmin, e.ymax],
            [e.xmax, e.ymax],
            [e.xmax, e.ymin],
            [e.xmin, e.ymin],
          ],
        ],
      }
    : e;
}
async function X(e) {
  const { distance: i, units: s } = e,
    n = e.geometry;
  if (i == null || 'vertexAttributes' in n) return n;
  const a = n.spatialReference,
    r = s ? Q.fromJSON(s) : L(a),
    o = a && (P(a) || f(a)) ? n : await F(a, y).then(() => z(n, y)),
    t = await T(
      () => import('./geodesicBufferOperator-DqN3eU72.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
    );
  await t.load();
  const l = t.execute(o, i || 1, { unit: r }) ?? void 0;
  if (!l || !S(l) || l.rings.length === 0)
    throw new D('unsupported-query:invalid-parameters', 'Invalid parameters for query by distance');
  return l;
}
function ae(e, i) {
  return e == null
    ? null
    : typeof e == 'string'
      ? i
        ? new Date(`1970-01-01T${e}Z`).getTime()
        : new Date(e).getTime()
      : e instanceof Date
        ? e.getTime()
        : e;
}
export { H as B, d as S, C as a, ne as b, Q as g, ae as h, z as j, se as w, F as x };
