import {
  cP as z,
  cQ as O,
  cR as C,
  W as R,
  cS as A,
  bX as G,
  j as S,
  cT as V,
  cU as j,
  cV as Y,
  a7 as U,
  cW as D,
} from './index.lazy-BHTpPf8X.js';
import { j as P } from './quantizationUtils-DsF8tesB.js';
import { m as v, B as L } from './utils-qS_J3TRF.js';
let f = null;
const W = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function _(e, t, n) {
  return e.x < 0 ? (e.x += t) : e.x > n && (e.x -= t), e;
}
function J(e, t, n, i) {
  const r = A(n) ? G(n) : null,
    o = r ? Math.round((r.valid[1] - r.valid[0]) / t.scale[0]) : null;
  return e.map((l) => {
    const a = new S(l.geometry);
    return P(t, a, a), (l.geometry = r ? _(a, o ?? 0, i[0]) : a), l;
  });
}
function K(e, t = 18, n, i, r) {
  const o = new Float64Array(i * r);
  t = Math.round(D(t));
  let l = Number.POSITIVE_INFINITY,
    a = Number.NEGATIVE_INFINITY;
  const b = V(n);
  for (const { geometry: p, attributes: F } of e) {
    const { x: g, y: c } = p,
      $ = Math.max(0, g - t),
      N = Math.max(0, c - t),
      M = Math.min(r, c + t),
      w = Math.min(i, g + t),
      h = +b(F);
    for (let m = N; m < M; m++)
      for (let d = $; d < w; d++) {
        const x = m * i + d,
          I = Y(d - g, m - c, t) * h,
          u = (o[x] += I);
        (l = Math.min(l, u)), (a = Math.max(a, u));
      }
  }
  return { min: l, max: a };
}
function k(e) {
  const t = W.exec(e);
  if (!t) return null;
  const { hh: n, mm: i, ss: r, ms: o } = t.groups;
  return Number(n) * j.hours + Number(i) * j.minutes + Number(r) * j.seconds + Number(o || 0);
}
async function ee(e, t, n = !0) {
  if (!t) return [];
  const { field: i, field2: r, field3: o, fieldDelimiter: l, fieldInfos: a, timeZone: b } = e,
    p = i && (a == null ? void 0 : a.find((u) => u.name.toLowerCase() === i.toLowerCase())),
    F = !!p && z(p),
    g = !!p && O(p),
    c = e.valueExpression,
    $ = e.normalizationType,
    N = e.normalizationField,
    M = e.normalizationTotal,
    w = [],
    h = e.viewInfoParams;
  let m = null,
    d = null;
  if (c) {
    if (!f) {
      const { arcadeUtils: u } = await C();
      f = u;
    }
    f.hasGeometryOperations(c) && (await f.enableGeometryOperations()),
      (m = f.createFunction(c)),
      (d = h
        ? f.getViewInfo({
            viewingMode: h.viewingMode,
            scale: h.scale,
            spatialReference: new R(h.spatialReference),
          })
        : null);
  }
  const x = e.fieldInfos,
    I =
      !(t[0] && 'declaredClass' in t[0] && t[0].declaredClass === 'esri.Graphic') && x
        ? { fields: x }
        : null;
  return (
    t.forEach((u) => {
      const y = u.attributes;
      let s;
      if (c) {
        const T = I ? { ...u, layer: I } : u,
          E = f.createExecContext(T, d, b);
        s = f.executeFunction(m, E);
      } else
        y &&
          ((s = y[i]),
          r
            ? ((s = `${v(s)}${l}${v(y[r])}`), o && (s = `${s}${l}${v(y[o])}`))
            : typeof s == 'string' &&
              n &&
              (g ? (s = s ? new Date(s).getTime() : null) : F && (s = s ? k(s) : null)));
      if ($ && typeof s == 'number' && isFinite(s)) {
        const T = y && parseFloat(y[N]);
        s = L(s, $, T, M);
      }
      w.push(s);
    }),
    w
  );
}
function te(e) {
  const t = e.field,
    n = e.normalizationType,
    i = e.normalizationField;
  let r;
  return (
    n === 'field'
      ? (r = '(NOT ' + i + ' = 0)')
      : (n !== 'log' && n !== 'natural-log' && n !== 'square-root') || (r = `(${t} > 0)`),
    r
  );
}
function ne(e, t, n) {
  const i = t != null ? e + ' >= ' + t : '',
    r = n != null ? e + ' <= ' + n : '';
  let o = '';
  return (o = i && r ? q(i, r) : i || r), o ? '(' + o + ')' : '';
}
function q(e, t) {
  let n = e ?? '';
  return t != null && t && (n = n ? '(' + n + ') AND (' + t + ')' : t), n;
}
function ie(e, t) {
  if (e && e.spatialRelationship !== 'intersects')
    return new U(t, "Only 'intersects' spatialRelationship is supported for featureFilter");
}
function re(e, t, n) {
  const i = B({ layer: e, fields: t });
  if (i.length)
    return new U(
      n,
      'Unknown fields: ' + i.join(', ') + '. You can only use fields defined in the layer schema',
    );
  const r = Q({ layer: e, fields: t });
  return r.length
    ? new U(
        n,
        'Unsupported fields: ' +
          r.join(', ') +
          '. You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true',
      )
    : void 0;
}
function B(e) {
  const t = e.layer;
  return e.fields.filter((n) => !t.getField(n));
}
function Q(e) {
  const t = e.layer;
  return e.fields.filter((n) => {
    const i = t.getFieldUsageInfo(n);
    return !i || !i.supportsStatistics;
  });
}
export { te as F, k as I, ie as M, ne as N, re as T, q as U, ee as b, K as w, J as x };
