const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/geometryEngineAsync-DX3-Egp-.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
    ]),
) => i.map((i) => d[i]);
import {
  cs as Ve,
  cH as mt,
  lG as dt,
  gQ as Ue,
  a7 as p,
  k as pt,
  en as yt,
  P as ft,
  e8 as G,
  ct as ht,
  aj as Ze,
  A as F,
  B as v,
  R as M,
  b2 as gt,
  qd as We,
  qe as R,
  gO as wt,
  dN as Ft,
  dq as St,
  bI as vt,
  cQ as N,
  cP as C,
  qf as xt,
  qg as qt,
  qh as Vt,
  aT as q,
  dO as Lt,
  n1 as zt,
  qi as Tt,
  n0 as _t,
  eM as Se,
  qj as He,
  a8 as bt,
  qk as B,
  dA as Le,
  cR as Et,
  ql as Q,
  bE as $t,
  qm as Ct,
  qn as D,
  dT as Nt,
  dI as Ke,
  bk as ze,
  qo as Mt,
} from './index.lazy-BFilFZ3v.js';
import { F as ye, U as V, N as ue, b as Pe, T as It, M as Ot } from './utils-UHukwwn8.js';
import {
  d as At,
  c as kt,
  j as Te,
  m as ge,
  q as Xe,
  C as ce,
  $ as me,
  P as Ye,
  a as Pt,
  n as Bt,
} from './utils-V_r4ZCew.js';
import { _ as Qt } from './index-DShQM7Xx.js';
import { s as Rt } from './quantizationUtils-QwHxl707.js';
import {
  summaryStatistics as J,
  uniqueValues as _e,
  histogram as de,
  classBreaks as be,
  heatmapStatistics as Gt,
} from './statsWorker-DSgPcnQF.js';
import Dt from './AttributeBinsQuery-DeSngTPC.js';
import { u as Jt, c as jt, m as Ut, a as Zt } from './FixedIntervalBinParameters-CKl391iV.js';
import './ClassBreaksDefinition-BrSl-9Bg.js';
import './queryUtils-DePK7lxY.js';
import './json-Wa8cmqdu.js';
async function Wt(e, t, a, r) {
  return Kt(t, await Ht(e, t, a, r));
}
async function Ht(e, t, a, r) {
  var c;
  const i = { ...r },
    s = Xt(t, a),
    o = ((c = t.outStatistics) == null ? void 0 : c[0]) != null,
    n = mt('featurelayer-pbf-statistics'),
    l = !o || n;
  let u;
  return l || (u = await dt(e, s, i)), a == null || a.fieldsIndex, u.fields, u;
}
async function Kt(e, t, a, r) {
  return Ve.fromJSON(t);
}
function Xt(e, t) {
  let a = Ue.from(e);
  return (
    (a.sourceSpatialReference =
      a.sourceSpatialReference ?? (t == null ? void 0 : t.sourceSpatialReference) ?? null),
    a
  );
}
function Yt(e, t) {
  if (!e.view) throw new p(`${t}:missing-parameters`, "'view' parameter is required for binning");
  if (e.sqlExpression)
    throw new p(
      `${t}:invalid-parameters`,
      "'sqlExpression' parameter is not supported for binning",
    );
  if (e.view.type === '3d')
    throw new p(`${t}:invalid-parameters`, '3d view is not supported for binning');
}
let ae = class Z {
  constructor() {
    this.connection = null;
  }
  async open(t) {
    this.connection = await pt('statsWorker', { strategy: 'distributed', signal: t });
  }
  destroy() {
    var t;
    (t = this.connection) == null || t.close();
  }
  static getInstance() {
    return Z.instance || (Z.instance = new Z()), Z.instance;
  }
  async summaryStatistics(t, a) {
    if (!this.connection) throw new p('worker-client:summary-statistics', 'connection is required');
    return this.connection.invoke('summaryStatistics', { attribute: t, features: a });
  }
  async uniqueValues(t, a) {
    if (!this.connection) throw new p('worker-client:unique-values', 'connection is required');
    return this.connection.invoke('uniqueValues', { attribute: t, features: a });
  }
  async classBreaks(t, a) {
    if (!this.connection) throw new p('worker-client:class-breaks', 'connection is required');
    return this.connection.invoke('classBreaks', { attribute: t, features: a });
  }
  async histogram(t, a) {
    if (!this.connection) throw new p('worker-client:histogram', 'connection is required');
    return this.connection.invoke('histogram', { attribute: t, features: a });
  }
  async heatmapStatistics(t, a) {
    if (!this.connection) throw new p('worker-client:heatmap-statistics', 'connection is required');
    return this.connection.invoke('heatmapStatistics', { attribute: t, features: a });
  }
};
async function ea(e, t, a, r) {
  const i = yt(e),
    { source: s, checkValueRange: o } = t,
    { classificationDefinition: n } = a,
    l = { ...a.toJSON(), f: 'json' };
  let u = null;
  if (
    ((u =
      (n == null ? void 0 : n.type) === 'class-breaks-definition'
        ? n.classificationField
        : n == null
          ? void 0
          : n.attributeField),
    s)
  ) {
    const y = { source: s == null ? void 0 : s.toJSON() };
    l.layer = JSON.stringify(y);
  }
  l.classificationDef && (l.classificationDef = JSON.stringify(l.classificationDef));
  let c = { query: l };
  r && (c = { ...r, ...c });
  const m = { url: i.path, field: u, checkValueRange: o },
    d = i.path + '/generateRenderer';
  return ft(d, c).then((y) => ta(m, y));
}
function ta(e, t) {
  const { field: a, checkValueRange: r, url: i } = e,
    s = t == null ? void 0 : t.data;
  if (!s) return;
  if (!r) {
    const u = Be(s);
    return Promise.resolve(u);
  }
  const o = new G({ statisticType: 'min', onStatisticField: a }),
    n = new G({ statisticType: 'max', onStatisticField: a }),
    l = new Ue({ outStatistics: [o, n] });
  return Wt(i, l).then((u) => {
    const c = u.features[0].attributes;
    let m = null,
      d = null;
    for (const y in c) y.toLowerCase().indexOf('min') === 0 ? (m = c[y]) : (d = c[y]);
    return Be(s, m, d);
  });
}
function Be(e, t, a) {
  if (e.type === 'classBreaks') {
    const i = ht(e);
    return {
      classBreaks: i.classBreakInfos.map(
        (s, o) => (
          o === 0 && t != null && (s.minValue = t),
          o === i.classBreakInfos.length - 1 && a != null && (s.maxValue = a),
          { minValue: s.minValue, maxValue: s.maxValue, label: s.label }
        ),
      ),
      normalizationTotal: i.normalizationTotal,
    };
  }
  const { uniqueValueInfos: r } = e;
  return {
    uniqueValues:
      (r == null
        ? void 0
        : r.map(
            (i, s) => (
              s === 0 && t != null && (i.value = t),
              s === r.length - 1 && a != null && (i.value = a),
              { count: i.count, value: i.value, label: i.label }
            ),
          )) ?? [],
  };
}
let W = class extends Ze {
  constructor(e) {
    super(e), (this.classificationDefinition = null), (this.where = null);
  }
};
F(
  [v({ json: { name: 'classificationDef', write: !0 } })],
  W.prototype,
  'classificationDefinition',
  void 0,
),
  F([v({ type: String, json: { write: !0 } })], W.prototype, 'where', void 0),
  (W = F([M('esri.rest.support.GenerateRendererParameters')], W));
const ve = W;
let I = class extends Ze {
  constructor(t) {
    super(t),
      (this.type = 'unique-value-definition'),
      (this.attributeField = null),
      (this.attributeField2 = null),
      (this.attributeField3 = null),
      (this.fieldDelimiter = null);
  }
  get uniqueValueFields() {
    const t = [];
    return (
      this.attributeField && t.push(this.attributeField),
      this.attributeField2 && t.push(this.attributeField2),
      this.attributeField3 && t.push(this.attributeField3),
      t
    );
  }
};
F([gt({ uniqueValueDef: 'unique-value-definition' })], I.prototype, 'type', void 0),
  F([v()], I.prototype, 'attributeField', void 0),
  F([v()], I.prototype, 'attributeField2', void 0),
  F([v()], I.prototype, 'attributeField3', void 0),
  F([v({ json: { write: !0 } })], I.prototype, 'fieldDelimiter', void 0),
  F([v({ json: { write: !0 } })], I.prototype, 'uniqueValueFields', null),
  (I = F([M('esri.rest.support.UniqueValueDefinition')], I));
const aa = I,
  et = 'no_dominant_category';
function ra(e) {
  return { expression: ia(e, { defaultValue: `'${et}'` }) };
}
function ia(e, t) {
  const { defaultValue: a, layer: r } = t,
    i = [];
  if (a) {
    const s = e.map((o) => `${o} <= 0`).join(' AND ');
    i.push(`WHEN ${s} THEN ${a}`);
  }
  for (const s of e) {
    const o = e.reduce((u, c) => (s !== c && u.push(`${s} > ${c}`), u), []).join(' AND '),
      n = r && We(r, s),
      l = `'${s}'` ? `'${s}'` : n ? R(s) : s;
    i.push(`WHEN ${o} THEN ${l}`);
  }
  return `CASE ${i.join(' ')} ELSE ${a || '0'} END`;
}
function sa(e) {
  return (
    (e &&
      e.map((t) => `$feature["${t}"];`).join(`
`) +
        `
`) ||
    ''
  );
}
function na(e, t = !1) {
  const a = e.map((i) => `"${i}"`);
  return `
  var fieldNames = [ ${a.join(', ')} ];
  var numFields = ${a.length};
  var maxValueField = null;
  var maxValue = -Infinity;
  var value, i, totalValue = null;

  for(i = 0; i < numFields; i++) {
    value = $feature[fieldNames[i]];

    if(value > 0) {
      if(value > maxValue) {
        maxValue = value;
        maxValueField = fieldNames[i];
      }
      else if (value == maxValue) {
        maxValueField = null;
      }
    }
    ${
      t
        ? `
  if(value != null && value >= 0) {
    if (totalValue == null) { totalValue = 0; }
    totalValue = totalValue + value;
  }
  `
        : ''
    }
  }
  `;
}
function Ee(e) {
  const t = na(e);
  return `
  ${sa(e)}
  ${t}
  return maxValueField;
  `;
}
let b = class extends wt {
  constructor(t) {
    super(t), (this.adapterName = 'layer-adapter');
  }
};
F([v({ readOnly: !0 })], b.prototype, 'adapterName', void 0),
  F([v({ constructOnly: !0 })], b.prototype, 'layer', void 0),
  F([v()], b.prototype, 'geometryType', void 0),
  F([v()], b.prototype, 'objectIdField', void 0),
  F([v()], b.prototype, 'supportsSQLExpression', void 0),
  F([v()], b.prototype, 'hasQueryEngine', void 0),
  F([v()], b.prototype, 'minScale', void 0),
  F([v()], b.prototype, 'maxScale', void 0),
  F([v()], b.prototype, 'fullExtent', void 0),
  (b = F([M('esri.smartMapping.support.adapters.LayerAdapter')], b));
const $e = b,
  oa = /_value$/i,
  la = Math.LOG10E,
  ua = { SECOND: 1e3, MINUTE: 6e4, HOUR: 36e5 },
  ee = 10;
function te(e) {
  return e.map((t) => t.toJSON());
}
function Qe(e, t) {
  var n;
  const a = [],
    r = e.layer,
    i = 'featureReduction' in r ? r.featureReduction : null,
    s = (i == null ? void 0 : i.type) === 'binning',
    o =
      i != null && 'fields' in i
        ? (n = i.fields) == null
          ? void 0
          : n
              .map((l) => {
                var u;
                return (u = l.name) == null ? void 0 : u.toLowerCase();
              })
              .filter(Boolean)
        : [];
  if (!s || !t) return a;
  for (const l of t) o.includes(l.toLowerCase()) || a.push(l);
  return a;
}
function pe(e, t, a) {
  var i;
  const r = [];
  if (t)
    for (const s of t) {
      const o = e.getField(s);
      o &&
        a &&
        'availableFields' in a &&
        !((i = a.availableFields) != null && i.includes(o.name)) &&
        r.push(o.name);
    }
  return r;
}
function Ce(e, t) {
  var s;
  const a = e && e.features;
  if ((a == null ? void 0 : a.length) === 0)
    return {
      avg: null,
      count: 0,
      max: null,
      median: null,
      min: null,
      nullcount: 0,
      stddev: null,
      sum: null,
      variance: null,
    };
  const r = (s = a == null ? void 0 : a[0]) == null ? void 0 : s.attributes,
    i = {};
  for (const o in r) i[o.replace(oa, '').toLowerCase()] = r[o];
  return (
    i.totalcount != null && i.totalcount >= i.count && (i.nullcount = i.totalcount - i.count),
    delete i.totalcount,
    i.min === i.max && i.min != null && i.stddev == null && (i.stddev = i.variance = 0),
    t &&
      (['min', 'max', 'avg', 'stddev', 'sum', 'variance'].forEach((o) => {
        i[o] != null && (i[o] = Math.ceil(i[o]));
      }),
      i.min === i.max && i.min != null && ((i.avg = i.min), (i.stddev = i.variance = 0))),
    i
  );
}
function ca(e) {
  const t = [],
    a = e.classBreaks,
    r = a[0].minValue,
    i = a[a.length - 1].maxValue;
  a.forEach((o) => {
    t.push([o.minValue, o.maxValue]);
  });
  const s = {
    field: e.field,
    normalizationType: e.normalizationType,
    normalizationField: e.normalizationField,
    normalizationTotal: e.normalizationTotal,
    layer: e.layer,
  };
  return {
    min: r,
    max: i,
    intervals: t,
    sqlExpr: j(s),
    excludeZerosExpr: e.where,
    normTotal: e.normalizationTotal,
  };
}
function j(e) {
  const {
      field: t,
      normalizationType: a,
      normalizationField: r,
      normalizationTotal: i,
      layer: s,
    } = e,
    o = We(s, t);
  let n = t;
  return (
    a === 'percent-of-total'
      ? (n = `((${o ? R(t) : t} / ${i}) * 100)`)
      : a === 'log'
        ? (n = `(log(${t}) * ${la})`)
        : a === 'field'
          ? (n = `(${o ? R(t) : t} / ${r})`)
          : a === 'natural-log'
            ? (n = `(log(${o ? R(t) : t}))`)
            : a === 'square-root' && (n = `(power(${o ? R(t) : t}, 0.5))`),
    n
  );
}
function tt(e, t) {
  let a;
  if (((t = t.toLowerCase()), e)) {
    for (const r in e)
      if (r.toLowerCase() !== t) {
        a = e[r];
        break;
      }
  }
  return a;
}
function H(e, t) {
  let a;
  if (((t = t.toLowerCase()), e)) {
    for (const r in e)
      if (r.toLowerCase() === t) {
        a = e[r];
        break;
      }
  }
  return a;
}
function at(e, t, a, r, i) {
  const s = {},
    o = 'countOFExpr';
  e &&
    e.features &&
    e.features.forEach((l) => {
      const u = l.attributes,
        c = tt(u, o),
        m = H(u, o);
      c != null && m != null && c !== 0 && (s[c] = m);
    });
  const n = [];
  return (
    Te(t, a, r).forEach((l, u) => {
      const c = (u + 1).toString();
      n.push({ minValue: l[0], maxValue: l[1], count: s.hasOwnProperty(c) ? s[c] : 0 });
    }),
    { bins: n, minValue: t, maxValue: a, normalizationTotal: i }
  );
}
async function Ne(e, t) {
  const a = e && e.features,
    {
      field: r,
      field2: i,
      field3: s,
      fieldDelimiter: o,
      layer: n,
      view: l,
      signal: u,
      labels: c,
    } = t,
    m = `countOF${((!r || !i) && r) || 'Expr'}`,
    d = {};
  let y = !1;
  for (const g of a) {
    const h = g.attributes,
      S = H(h, m);
    let w = r ? H(h, r) : tt(h, m),
      x = i ? H(h, i) : null,
      z = s ? H(h, s) : null;
    w === null && S === 0 && (y = !0),
      (w == null || (typeof w == 'string' && w.trim() === '')) && (w = null),
      i && (x == null || (typeof x == 'string' && x.trim() === '')) && (x = null),
      s && (z == null || (typeof z == 'string' && z.trim() === '')) && (z = null);
    let L = w;
    i && ((L = `${ge(L)}${o}${ge(x)}`), s && (L = `${L}${o}${ge(z)}`)),
      d[L] == null ? (d[L] = { count: S, data: L }) : (d[L].count = d[L].count + S);
  }
  if (r && y) {
    const g = r + ' is NULL';
    try {
      const h = await n.queryFeatureCount({ whereClause: g, view: l, signal: u });
      return (d.null.count = d.null.count + h), we(d, c);
    } catch {
      return q(u), we(d, c);
    }
  }
  return we(d, c);
}
function we(e, t) {
  if (t) for (const a in e) e[a].label = t[a];
  return { count: e };
}
async function Fe(e, t, a) {
  const r = e ? a.getField(e) : null,
    i = r ? a.getFieldDomain(r.name) : null;
  if (i) return i;
  const { uniqueValueInfos: s } = await a.uniqueValues({
      field: e,
      sqlWhere: t.sqlWhere,
      features: t.features,
      useFeaturesInView: t.useFeaturesInView,
      view: t.view,
      signal: t.signal,
    }),
    o = s.map((n) => new xt({ code: n.value }));
  return new qt({ codedValues: o });
}
async function fe(e, t) {
  if (!e.returnAllCodedValues) return [];
  const { field: a, field2: r, field3: i } = e;
  if (a && !r) {
    const o = a ? t.getField(a) : null,
      n = o ? t.getFieldDomain(o.name) : null;
    return n ? [n] : [];
  }
  const s = [];
  return (
    a && (s.push(Fe(a, e, t)), r && (s.push(Fe(r, e, t)), i && s.push(Fe(i, e, t)))), Promise.all(s)
  );
}
function ma(e, t) {
  return Vt(e, new Date(0), t, 'milliseconds').sqlExpression;
}
function da(e, t) {
  return `EXTRACT(${t} FROM ${e}) * ${ua[t]}`;
}
function pa(e) {
  return e ? R(['HOUR', 'MINUTE', 'SECOND'].map((t) => `(${da(e, t)})`).join(' + ')) : null;
}
function E(e) {
  var t;
  return {
    viewingMode: e.type === '2d' ? 'map' : e.viewingMode,
    scale: e.scale,
    spatialReference: (t = e.spatialReference) == null ? void 0 : t.toJSON(),
  };
}
function Me(e, t) {
  const a = new Set(e.map((i) => i.value)),
    r = t.filter((i) => !a.has(i));
  for (const i of r) e.push({ value: i, count: 0 });
  e.sort((i, s) => t.indexOf(i.value) - t.indexOf(s.value));
  for (const i of e) i.value === et && (i.value = null);
  return { predominantCategoryInfos: e };
}
function Re(e) {
  const t = 'featureReduction' in e ? e.featureReduction : null;
  return ((t != null && 'fields' in t ? t.fields : null) ?? [])
    .map((a) => {
      const r = ya(a, e.fieldsIndex);
      return r ? new St({ type: r, name: a.name, alias: a.alias }) : null;
    })
    .filter(vt);
}
function ya(e, t) {
  var a, r;
  switch (e.statisticType) {
    case 'avg':
    case 'avg_angle':
      return 'double';
    case 'count':
      return 'integer';
    case 'min':
    case 'max':
    case 'sum':
      return e.onStatisticField
        ? (((a = t.get(e.onStatisticField)) == null ? void 0 : a.type) ?? null)
        : e.onStatisticExpression
          ? e.onStatisticExpression.returnType === 'string'
            ? null
            : 'double'
          : null;
    case 'mode':
      return e.onStatisticField
        ? (((r = t.get(e.onStatisticField)) == null ? void 0 : r.type) ?? null)
        : e.onStatisticExpression
          ? e.onStatisticExpression.returnType === 'string'
            ? 'string'
            : 'double'
          : null;
    default:
      return null;
  }
}
function rt(e, t) {
  return N(t) ? ma(e, t == null ? void 0 : t.name) : C(t) ? pa(t == null ? void 0 : t.name) : null;
}
function Ie(e, t, a) {
  const {
      field: r,
      normalizationType: i,
      normalizationField: s,
      normalizationTotal: o,
      minValue: n,
      maxValue: l,
      filter: u,
    } = t,
    c = e.supportsSQLExpression ? rt(e, a) || t.sqlExpression : null,
    m = j({
      field: r,
      normalizationType: i,
      normalizationField: s,
      normalizationTotal: o,
      layer: e,
    }),
    d = c || m,
    y = d ? ue(d, n, l) : null,
    g = ye({ field: r, normalizationField: s, normalizationType: i }),
    h = V(t.sqlWhere, g),
    S = V(h, y),
    w = At({
      normalizationField: s,
      normalizationType: i,
      sqlExpression: c,
      supportsSQLExpression: e.supportsSQLExpression,
      minValue: n,
      maxValue: l,
    }),
    x = Ft(e.getField(r ?? void 0)),
    { include: z, exclude: L } = t.outStatisticTypes || {},
    O = kt.filter(
      (_) =>
        (!z || z.includes(_)) &&
        (!L || !L.includes(_)) &&
        (_ === 'nullcount' ? w : !x || _ === 'count'),
    ),
    A = e.createQuery();
  return (
    (A.where = V(A.where, S)),
    (A.sqlFormat = c ? 'standard' : null),
    (A.outStatistics = O.map((_) => {
      const k = new G();
      let P = null,
        U = null,
        ke = `${_}_value`;
      if (_ === 'variance') (P = 'var'), (U = d);
      else if (_ === 'nullcount') {
        const he = e.objectIdField;
        (P = 'count'), (U = he && e.getField(he) ? he : '1'), (ke = 'totalcount_value');
      } else
        _ === 'median'
          ? ((P = 'percentile-continuous'), (U = d), (k.statisticParameters = { value: 0.5 }))
          : ((P = _), (U = d));
      return (k.statisticType = P), (k.onStatisticField = U), (k.outStatisticFieldName = ke), k;
    })),
    $(A, u),
    A
  );
}
function $(e, t) {
  t && ((e.geometry = t.geometry), (e.spatialRelationship = t.spatialRelationship));
}
function it(e, t) {
  const { field: a, field2: r, field3: i, sqlExpression: s } = t,
    o = !(!a || !r),
    n = e.createQuery();
  return (
    (n.where = V(n.where, t.sqlWhere)),
    (n.sqlFormat = s ? 'standard' : null),
    (n.outStatistics = [fa(o ? null : a, o ? '1' : s)].filter(Boolean)),
    (n.groupByFieldsForStatistics = [a || s, r, i].filter(Boolean)),
    $(n, t.filter),
    n
  );
}
function fa(e, t) {
  const a = 'countOF' + (e || 'Expr'),
    r = new G();
  return (
    (r.statisticType = 'count'),
    (r.onStatisticField = t ? '1' : e),
    (r.outStatisticFieldName = a),
    r
  );
}
function ie(e, t, a, r = ee, i, s, o) {
  const { min: n, max: l, normTotal: u, excludeZerosExpr: c } = t,
    m = t.intervals || Te(n, l, r),
    d = t.sqlExpr || a;
  return ha(e, m, d, c, i, s, o).then((y) => ({
    bins: y.map((g, h) => ({
      minValue: m[h][0],
      maxValue: m[h][1],
      count: g.status === 'fulfilled' ? g.value : 0,
    })),
    minValue: n,
    maxValue: l,
    normalizationTotal: u,
  }));
}
function ha(e, t, a, r, i, s, o) {
  const n = [],
    l = t.length;
  for (let u = 0; u < l; u++) {
    const c = V(
      r,
      V(a + ' >= ' + t[u][0], t[u][1] !== null ? a + (u === l - 1 ? ' <= ' : ' < ') + t[u][1] : ''),
    );
    n.push(c);
  }
  return Promise.allSettled(
    n.map((u) => e.queryFeatureCount({ whereClause: u, view: i, filter: s, signal: o })),
  );
}
const st = 'countOFExpr',
  ga = 'lowerBoundary',
  wa = 'upperBoundary';
function nt(e, t, a) {
  const r = e.valueExpression || e.sqlExpression,
    i = e.signal;
  if (!r) {
    const { field: s, normalizationType: o, normalizationField: n } = e,
      l = s ? t.getField(s) : null,
      u = N(l) || C(l);
    return {
      sqlExpression: u
        ? rt(t, l)
        : j({
            field: s,
            normalizationType: o,
            normalizationField: n,
            normalizationTotal: a,
            layer: t,
          }),
      sqlWhere: u
        ? null
        : e.sqlWhere || ye({ field: s, normalizationType: o, normalizationField: n }),
      filter: e.filter,
      signal: i,
    };
  }
  return {
    valueExpression: e.valueExpression,
    sqlExpression: e.sqlExpression,
    sqlWhere: e.sqlWhere,
    filter: e.filter,
    signal: i,
  };
}
async function xe(e, t, a) {
  const { field: r, normalizationType: i, normalizationField: s, signal: o } = e,
    n = ye({ field: r, normalizationType: i, normalizationField: s }),
    l = new ve({
      classificationDefinition: Xe({
        field: r,
        normalizationType: i,
        normalizationField: s,
        classificationMethod: e.classificationMethod,
        standardDeviationInterval: e.standardDeviationInterval,
        definedInterval: e.definedInterval,
        breakCount: e.numBins || ee,
      }),
      where: V(n, a),
    });
  return t.generateRenderer(l, o).then((u) => {
    const { normalizationTotal: c, classBreaks: m } = u;
    return ca({
      field: r,
      normalizationType: i,
      normalizationField: s,
      normalizationTotal: c,
      classBreaks: m,
      where: n,
      layer: t,
    });
  });
}
async function Fa(e, t, a, r, i) {
  const {
      field: s,
      sqlExpression: o,
      normalizationField: n,
      classificationMethod: l,
      normalizationType: u,
    } = e,
    c = s ? t.getField(s) : null,
    m = C(c),
    d = _t(c) || m,
    y = e.numBins || ee;
  if (d) {
    if (u || l)
      throw new p(
        `${t.adapterName}:not-supported`,
        'NormalizationType and classificationMethod are not supported for date-only and time-only fields',
      );
    const g = (r - a) / y / 1e3,
      h = g / 86400;
    return new Jt({
      field: s,
      expression: o,
      interval: { unit: m ? 'seconds' : 'days', value: Math.ceil(m ? g : h) },
      start: a,
      end: r,
    });
  }
  if (l === 'defined-interval')
    return new jt({
      field: s,
      expression: o,
      normalizationField: n,
      normalizationTotal: i,
      normalizationType: u,
      interval: e.definedInterval ?? Math.ceil((r - a) / y),
      start: u ? null : a,
      end: u ? null : r,
      normalizationMinValue: u ? a : null,
      normalizationMaxValue: u ? r : null,
    });
  if (l === 'manual')
    throw new p(
      `${t.adapterName}:not-supported`,
      'Layer does not support manual classificationMethod',
    );
  if (l === 'natural-breaks' || l === 'quantile' || l === 'standard-deviation') {
    const g = j({
        field: s,
        normalizationField: n,
        normalizationTotal: i,
        normalizationType: u,
        layer: t,
      }),
      h = e.minValue !== null && e.maxValue !== null ? ue(g, e.minValue, e.maxValue) : void 0,
      S = await xe(e, t, h);
    if (!S.intervals)
      throw new p(`${t.adapterName}:invalid`, 'Invalid intervals returned from generate renderer');
    const w = [a, ...S.intervals.map((x) => x[1])];
    return new Ut({ field: u ? null : s, expression: u ? g : o, boundaries: w });
  }
  return new Zt({
    field: s,
    normalizationField: n,
    normalizationTotal: i,
    normalizationType: u,
    expression: o,
    numBins: y,
    start: u ? null : a,
    end: u ? null : r,
    normalizationMinValue: u ? a : null,
    normalizationMaxValue: u ? r : null,
  });
}
function ot(e, t, a, r) {
  return a != null && r != null
    ? Promise.resolve({ min: a, max: r })
    : t
        .summaryStatistics({ ...e, outStatisticTypes: { include: ['min', 'max'] } })
        .then((i) => ({ min: i.min, max: i.max }));
}
async function lt(e, t, a, r) {
  const { field: i, minValue: s, maxValue: o, filter: n, view: l } = e,
    u = i ? t.getField(i) : null,
    c = Lt(u) || zt(u),
    m = nt(e, t, a),
    { min: d, max: y } = await ot(m, t, s, o);
  if (d == null || y == null) return { query: null, min: d, max: y };
  const g = new G({ statisticType: 'count', outStatisticFieldName: st, onStatisticField: '1' }),
    h = V(r, m.sqlWhere),
    S = 'lowerBoundary',
    w = 'upperBoundary',
    x = new Dt({
      binParameters: await Fa(e, t, d, y, a),
      outStatistics: [g],
      binOrder: e.sortOrder,
      where: h,
      lowerBoundaryAlias: S,
      upperBoundaryAlias: w,
      outTimeZone: l != null && l.timeZone && c ? Tt(l.timeZone) : null,
    });
  return $(x, n), { query: x, min: d, max: y };
}
function Ge(e, t = !1) {
  return typeof e != 'string' ? e : (t ? new Date(`1970-01-01T${e}Z`) : new Date(e)).getTime();
}
function ut(e, t, a) {
  const r = C(t);
  return {
    ...a,
    bins: e.features.map((i) => ({
      minValue: Ge(i.attributes[ga], r),
      maxValue: Ge(i.attributes[wa], r),
      count: i.attributes[st],
    })),
  };
}
function De(e, t, a) {
  const { valueExpression: r, view: i } = e,
    { featuresJSON: s, graphics: o, fieldInfos: n } = t,
    l = {
      field: e.field,
      valueExpression: r,
      normalizationType: e.normalizationType,
      normalizationField: e.normalizationField,
      normalizationTotal: a,
      minValue: e.minValue,
      maxValue: e.maxValue,
      standardDeviationInterval: e.standardDeviationInterval,
      classificationMethod: e.classificationMethod,
      numBins: e.numBins,
    };
  return (
    r &&
      i &&
      (s || o) &&
      ((l.viewInfoParams = E(i)), (l.timeZone = i.timeZone), (l.fieldInfos = n)),
    l
  );
}
const Sa = 5;
let re = null,
  K = class extends $e {
    constructor() {
      super(...arguments),
        (this._hasLocalSource = !1),
        (this.adapterName = 'in-memory-layer-adapter');
    }
    destroy() {
      var e;
      (e = this.workerClient) == null || e.destroy();
    }
    async _waitForLayerViewUpdate(e) {
      if (!e)
        throw new p(
          `${this.adapterName}:insufficient-data", "layerView is required to fetch the features`,
        );
      const t = new AbortController(),
        a = Se(() => !e.updating, t.signal);
      await He(a, 5e3, t).catch((r) => {
        throw (
          (bt
            .getLogger(this)
            .warn('LayerView is taking too long to update. Aborting fetch from layerView.'),
          r)
        );
      });
    }
    async _fetchFeatureSetFromMemory(e, t, a) {
      const r = this.layer;
      if (this._hasLocalSource && 'queryFeatures' in r) return r.queryFeatures(e);
      if (!t)
        throw new p(
          `${this.adapterName}:insufficient-data`,
          'view is required to fetch the features from layerView',
        );
      const i = await t.whenLayerView(this.layer);
      return await this._waitForLayerViewUpdate(i), i.queryFeatures(e, { signal: a });
    }
    async _fetchFeaturesFromMemory(e, t, a, r) {
      const i = this.layer,
        s = r === 'json';
      if (this._hasLocalSource && 'queryFeatures' in i) {
        const n = await i.queryFeatures(t);
        return s ? te(n.features) : n.features;
      }
      if (
        (await this._waitForLayerViewUpdate(e),
        s && 'queryFeaturesJSON' in e && e.queryFeaturesJSON)
      ) {
        const { features: n } = await e.queryFeaturesJSON(t, { signal: a });
        return n;
      }
      if (!('queryFeatures' in e))
        throw new p(
          `${this.adapterName}:not-supported`,
          "'queryFeatures' is not supported on the layerView",
        );
      const o = await e.queryFeatures(t, { signal: a });
      return s ? te(o.features) : o.features;
    }
    _fetchFeaturesForStats(e, t) {
      return B({
        field: e.field,
        field2: e.field2,
        field3: e.field3,
        normalizationField: e.normalizationField,
        valueExpression: e.valueExpression,
      }).then((a) =>
        this.getSampleFeatures(
          {
            sampleSize: -1,
            view: e.view,
            returnGeometry: e.returnGeometry,
            filter: e.filter,
            requiredFields: a,
            signal: e.signal,
          },
          t,
        ),
      );
    }
    async _summaryStatsFromClientQuery(e, t) {
      const { view: a, signal: r } = e,
        i = Ie(this, e, t),
        s = await this._fetchFeatureSetFromMemory(i, a, r),
        o = Ce(s, N(t) || C(t));
      return ce(o, e.outStatisticTypes);
    }
    async _getNormalizationTotalFromMemory(e, t, a) {
      const { featuresJSON: r, graphics: i, layerView: s, query: o } = t,
        n = { include: ['sum'] },
        l = (
          !r && !i && s && 'querySummaryStatistics' in s
            ? await s.querySummaryStatistics(o, { field: e }, { signal: a })
            : r
              ? await this.workerClient.summaryStatistics({ field: e, outStatisticTypes: n }, r)
              : await J({ attribute: { field: e, outStatisticTypes: n }, features: i ?? [] })
        ).sum;
      if (l == null) throw new p(`${this.adapterName}:invalid`, 'invalid normalizationTotal');
      return l;
    }
    async _summaryStatsFromMemory(e, t) {
      const { view: a, field: r, valueExpression: i, normalizationType: s, signal: o } = e,
        n = {
          field: r,
          valueExpression: i,
          normalizationType: s,
          normalizationField: e.normalizationField,
          normalizationTotal: e.normalizationTotal,
          minValue: e.minValue,
          maxValue: e.maxValue,
          outStatisticTypes: e.outStatisticTypes,
        },
        {
          featuresJSON: l,
          graphics: u,
          layerView: c,
          query: m,
          fieldInfos: d,
        } = await this._processStatsFromMemoryParams({
          ...e,
          layerViewFunc: 'querySummaryStatistics',
        });
      return (
        i &&
          a &&
          (l || u) &&
          ((n.fieldType = t != null && t.type ? Le.toJSON(t.type) : null),
          (n.viewInfoParams = E(a)),
          (n.timeZone = a.timeZone),
          (n.fieldInfos = d)),
        s === 'percent-of-total' &&
          e.normalizationTotal == null &&
          (n.normalizationTotal = await this._getNormalizationTotalFromMemory(
            r,
            { featuresJSON: l, graphics: u, layerView: c, query: m },
            o,
          )),
        !l && !u && c && 'querySummaryStatistics' in c
          ? c.querySummaryStatistics(m, n, { signal: o })
          : l
            ? this.workerClient.summaryStatistics(n, l)
            : J({ attribute: n, features: u })
      );
    }
    async _getFilteredFeatures(e, t) {
      let a = [];
      if ((t == null ? void 0 : t.spatialRelationship) === 'intersects') {
        const { intersect: r } = await Qt(
            () => import('./geometryEngineAsync-DX3-Egp-.js'),
            __vite__mapDeps([0, 1, 2, 3, 4]),
          ),
          i = t.geometry != null ? t.geometry : null;
        for (const s of e) {
          const o = s.geometry != null ? s.geometry : null;
          o && i && (await r(o, i)) && a.push(s);
        }
      } else a = e;
      return e.length && 'declaredClass' in e[0] && e[0].declaredClass === 'esri.Graphic'
        ? { graphics: a }
        : { featuresJSON: a };
    }
    async _processStatsFromMemoryParams(e) {
      const { features: t, filter: a } = e;
      if (t != null && t.length) return this._getFilteredFeatures(t, a);
      const {
        view: r,
        field: i,
        field2: s,
        field3: o,
        normalizationField: n,
        valueExpression: l,
        layerViewFunc: u,
        signal: c,
      } = e;
      let m = e.returnGeometry;
      if (m == null && l) {
        if (!re) {
          const { arcadeUtils: x } = await Et();
          re = x;
        }
        const w = re.hasGeometryOperations(l);
        w && (await re.enableGeometryOperations()), (m = w);
      }
      let d = null,
        y = null,
        g = null,
        h = null,
        S = null;
      if (r)
        try {
          const w = this.layer.type === 'subtype-sublayer' ? this.layer.parent : this.layer;
          (d = await r.whenLayerView(w)), (y = u != null && u in d && typeof d[u] == 'function');
        } catch {
          y = !1;
        }
      if (y)
        try {
          await this._waitForLayerViewUpdate(d);
          const w = await B({
            field: i,
            field2: s,
            field3: o,
            normalizationField: n,
            valueExpression: l,
          });
          pe(this, w, d).length
            ? (y = !1)
            : ((g = this.layer.createQuery()), (g.outFields = w), (g.returnGeometry = !1), $(g, a)),
            d.suspended && (y = !1);
        } catch {
          y = !1;
        }
      return (
        y ||
          ((h = await this._fetchFeaturesForStats(
            {
              field: i,
              field2: s,
              field3: o,
              valueExpression: l,
              normalizationField: n,
              returnGeometry: m,
              filter: a,
              view: r,
              signal: c,
            },
            'json',
          )),
          (S = (await B({ valueExpression: l }))
            .map((w) => {
              var x;
              return (x = this.getField(w)) == null ? void 0 : x.toJSON();
            })
            .filter(Boolean))),
        { layerView: d, query: g, featuresJSON: h, fieldInfos: S }
      );
    }
    async _uvFromClientQuery(e, t) {
      const { view: a, signal: r } = e,
        i = it(this, e),
        s = await this._fetchFeatureSetFromMemory(i, a, r),
        o = await Ne(s, {
          layer: this,
          field: e.field,
          field2: e.field2,
          field3: e.field3,
          fieldDelimiter: Q,
          view: e.view,
          signal: e.signal,
        });
      return me(o, t, e.returnAllCodedValues, Q);
    }
    async _uvFromMemory(e, t) {
      const { view: a, field: r, valueExpression: i, returnAllCodedValues: s, signal: o } = e,
        {
          featuresJSON: n,
          graphics: l,
          layerView: u,
          query: c,
          fieldInfos: m,
        } = await this._processStatsFromMemoryParams({ ...e, layerViewFunc: 'queryUniqueValues' }),
        d = {
          field: r,
          field2: e.field2,
          field3: e.field3,
          fieldDelimiter: Q,
          valueExpression: i,
          domains: t,
          returnAllCodedValues: s,
        };
      return (
        i &&
          a &&
          (n || l) &&
          ((d.viewInfoParams = E(a)), (d.timeZone = a.timeZone), (d.fieldInfos = m)),
        !n && !l && u && 'queryUniqueValues' in u
          ? u.queryUniqueValues(c, d, { signal: o })
          : n
            ? this.workerClient.uniqueValues(d, n)
            : _e({ attribute: d, features: l })
      );
    }
    _histogramForField(e) {
      let t = null;
      return (
        (t =
          e.minValue != null && e.maxValue != null
            ? Promise.resolve({ min: e.minValue, max: e.maxValue })
            : this.summaryStatistics({
                ...e,
                outStatisticTypes: { include: ['min', 'max', 'count'] },
              }).then((a) => {
                if (!a.count)
                  throw new p(
                    `${this.adapterName}:insufficient-data`,
                    'Either the layer has no features or none of the features have data for the field',
                  );
                return { min: a.min, max: a.max };
              })),
        t.then((a) =>
          ie(
            this,
            { min: a.min, max: a.max },
            e.field,
            e.numBins ?? void 0,
            e.view,
            e.filter,
            e.signal,
          ),
        )
      );
    }
    async _histogramFromQueryAttributeBinsFromMemory(e) {
      const { field: t, normalizationType: a, signal: r } = e,
        i = await this._processStatsFromMemoryParams({ ...e, layerViewFunc: 'queryAttributeBins' }),
        { featuresJSON: s, graphics: o, layerView: n, query: l } = i,
        u =
          a === 'percent-of-total'
            ? (e.normalizationTotal ?? (await this._getNormalizationTotalFromMemory(t, i, r)))
            : void 0;
      if (!n || !('queryAttributeBins' in n) || s || o) {
        const g = De(e, i, u);
        return s ? this.workerClient.histogram(g, s) : de({ attribute: g, features: o });
      }
      const { query: c, min: m, max: d } = await lt(e, this, u, l == null ? void 0 : l.where);
      if (!c) return { bins: [], minValue: m, maxValue: d, normalizationTotal: u };
      const y = await n.queryAttributeBins(c, { signal: r });
      return ut(y, t ? this.getField(t) : null, {
        minValue: m,
        maxValue: d,
        normalizationTotal: u,
      });
    }
    async _histogramFromMemory(e) {
      const { field: t, signal: a } = e,
        r = await this._processStatsFromMemoryParams({ ...e, layerViewFunc: 'queryHistogram' }),
        { featuresJSON: i, graphics: s, layerView: o, query: n } = r,
        l =
          e.normalizationType === 'percent-of-total'
            ? (e.normalizationTotal ?? (await this._getNormalizationTotalFromMemory(t, r, a)))
            : void 0,
        u = De(e, r, l);
      return !i && !s && o && 'queryHistogram' in o
        ? o.queryHistogram(n, u, { signal: a })
        : i
          ? this.workerClient.histogram(u, i)
          : de({ attribute: u, features: s });
    }
    _classBreaksFromInterpolation(e) {
      const { minValue: t, maxValue: a } = e,
        r = e.numClasses || Sa,
        i = [],
        s = (a - t) / r;
      for (let l = 0; l < r; l++) {
        const u = t + l * s;
        i.push({ minValue: u, maxValue: u + s });
      }
      i[r - 1].maxValue = a;
      const o = { classBreaks: i, normalizationTotal: e.normalizationTotal },
        n = Ye(o, e.classificationMethod);
      return Promise.resolve(n);
    }
    async _classBreaksFromMemory(e) {
      const { view: t, field: a, valueExpression: r, signal: i } = e,
        {
          featuresJSON: s,
          graphics: o,
          layerView: n,
          query: l,
          fieldInfos: u,
        } = await this._processStatsFromMemoryParams({ ...e, layerViewFunc: 'queryClassBreaks' }),
        c = {
          field: a,
          valueExpression: r,
          normalizationType: e.normalizationType,
          normalizationField: e.normalizationField,
          normalizationTotal: e.normalizationTotal,
          minValue: e.minValue,
          maxValue: e.maxValue,
          standardDeviationInterval: e.standardDeviationInterval,
          classificationMethod: e.classificationMethod,
          numClasses: e.numClasses,
        };
      return (
        r &&
          t &&
          (s || o) &&
          ((c.viewInfoParams = E(t)), (c.timeZone = t.timeZone), (c.fieldInfos = u)),
        e.normalizationType === 'percent-of-total' &&
          e.normalizationTotal == null &&
          (c.normalizationTotal = await this._getNormalizationTotalFromMemory(
            a,
            { featuresJSON: s, graphics: o, layerView: n, query: l },
            i,
          )),
        !s && !o && n && 'queryClassBreaks' in n
          ? n.queryClassBreaks(l, c, { signal: i })
          : s
            ? this.workerClient.classBreaks(c, s)
            : be({ attribute: c, features: o })
      );
    }
    async _heatmapStatsFromMemory(e) {
      var u, c;
      const { view: t, field: a, radius: r, signal: i } = e;
      $t(t, 'InMemoryLayerAdapter: must have a view');
      try {
        const m = await t.whenLayerView(this.layer);
        if ('queryHeatmapStatistics' in m && !m.updating && !e.filter)
          return await m.queryHeatmapStatistics({ field: e.field, radius: e.radius });
      } catch {
        q(i);
      }
      const { featuresJSON: s, graphics: o } = await this._processStatsFromMemoryParams({
          ...e,
          returnGeometry: !0,
        }),
        n = new Ct({
          extent: t.extent,
          tolerance:
            t.type === '2d'
              ? t.state.resolution
              : (u = t.pixelSizeAt) == null
                ? void 0
                : u.call(t, t.center),
        }),
        l = {
          field: a,
          radius: r,
          transform: Rt(n),
          spatialReference: (c = t.spatialReference) == null ? void 0 : c.toJSON(),
          size: t.size,
        };
      return (s != null && s.length) || (o != null && o.length)
        ? s
          ? this.workerClient.heatmapStatistics(l, s)
          : Gt({ attribute: l, features: o })
        : { min: null, max: null };
    }
    getField(e = '') {
      return this.layer.getField(e);
    }
    getFieldUsageInfo(e) {
      return this.getField(e)
        ? {
            supportsLabelingInfo: !0,
            supportsRenderer: !0,
            supportsPopupTemplate: !0,
            supportsLayerQuery: !0,
            supportsStatistics: !0,
          }
        : null;
    }
    getFieldDomain(e, t) {
      return this.layer.getFieldDomain(e, t);
    }
    createQuery() {
      return this.layer.createQuery();
    }
    async summaryStatistics(e) {
      const { field: t, valueExpression: a, sqlExpression: r, features: i, view: s } = e,
        o = t ? this.getField(t) : null,
        n = !!a,
        l = (s == null ? void 0 : s.type) === '3d';
      if (!a && r && !this.supportsSQLExpression)
        throw new p(
          `${this.adapterName}:not-supported`,
          'Layer does not support standardized SQL expression for queries',
        );
      return n || i || l
        ? this._summaryStatsFromMemory(e, o)
        : this._summaryStatsFromClientQuery(e, o);
    }
    async uniqueValues(e) {
      const { valueExpression: t, sqlExpression: a, features: r, view: i } = e,
        s = await fe(e, this),
        o = !!t,
        n = (i == null ? void 0 : i.type) === '3d';
      if (!t && a && !this.supportsSQLExpression)
        throw new p(
          `${this.adapterName}:not-supported`,
          'Layer does not support standardized SQL expression for queries',
        );
      return o || r || n ? this._uvFromMemory(e, s) : this._uvFromClientQuery(e, s);
    }
    async histogram(e) {
      const { features: t, valueExpression: a, normalizationType: r, sqlExpression: i } = e,
        s = t || !!a;
      if (!a && i && !this.supportsSQLExpression)
        throw new p(
          `${this.adapterName}:not-supported`,
          'Layer does not support standardized SQL expression for queries',
        );
      return s || r ? this._histogramFromMemory(e) : this._histogramForField(e);
    }
    async classBreaks(e) {
      return e.analyzeData !== !1
        ? this._classBreaksFromMemory(e)
        : this._classBreaksFromInterpolation(e);
    }
    async queryFeatureCount(e) {
      const { whereClause: t, view: a, signal: r } = e;
      if (!a)
        throw new p(
          `${this.adapterName}:insufficient-data`,
          'view is required to fetch the features from layerView',
        );
      const i = this.layer.createQuery();
      i.where = V(i.where, t);
      const s = await a.whenLayerView(this.layer);
      return await Se(() => !s.updating, r), s.queryFeatureCount(i, { signal: r });
    }
    async generateRenderer(e, t) {
      throw new p(
        `${this.adapterName}:not-supported`,
        'Layer does not support generateRenderer operation',
      );
    }
    async predominantCategories(e) {
      const { fields: t, view: a, signal: r, filter: i } = e,
        s = Ee(t),
        o = await this._uvFromMemory({ valueExpression: s, view: a, signal: r, filter: i });
      return Me(o.uniqueValueInfos, t);
    }
    async heatmapStatistics(e) {
      return this._heatmapStatsFromMemory(e);
    }
    async getSampleFeatures(e, t) {
      const {
          view: a,
          sampleSize: r,
          requiredFields: i,
          returnGeometry: s,
          filter: o,
          signal: n,
        } = e,
        l = this.layer.createQuery(),
        u = 1;
      if (
        ((l.outSpatialReference = a == null ? void 0 : a.spatialReference),
        (l.returnGeometry = !!s),
        (l.outFields = i),
        $(l, o),
        !a)
      )
        throw new p(
          `${this.adapterName}:not-supported`,
          'view is required to get sample features for Layer',
        );
      const c = await a.whenLayerView(this.layer);
      if (pe(this, i, c).length)
        throw new p(
          `${this.adapterName}:not-supported`,
          'Required fields need to be passed in the outFields for Layer',
        );
      const m = await this._fetchFeaturesFromMemory(c, l, n, t),
        d = r != null && r > 0 && r <= m.length ? r : m.length;
      return D(m, d, u);
    }
    load(e) {
      const t = this.layer.load(e).then(async (a) => {
        var r, i, s;
        (this.geometryType = a.geometryType),
          (this.objectIdField = a.objectIdField),
          (this.supportsSQLExpression =
            a.type === 'stream' ||
            !!(
              (i = (r = a.capabilities) == null ? void 0 : r.query) != null &&
              i.supportsSqlExpression
            )),
          (this.minScale = a.minScale),
          (this.maxScale = a.maxScale),
          (this.fullExtent =
            'fullExtent' in a ? a.fullExtent : (s = a.parent) == null ? void 0 : s.fullExtent),
          (this._hasLocalSource = !1),
          (this.hasQueryEngine = !0),
          (this.workerClient = ae.getInstance()),
          await this.workerClient.open(e.signal);
      });
      return this.addResolvingPromise(t), Promise.resolve(this);
    }
  };
F([v({ readOnly: !0 })], K.prototype, 'adapterName', void 0),
  F([v({ constructOnly: !0 })], K.prototype, 'layer', void 0),
  (K = F([M('esri.smartMapping.support.adapters.InMemoryLayerAdapter')], K));
const Oe = K,
  Je = 5,
  je = 2e4,
  va = 4e5;
let X = class extends Oe {
  constructor() {
    super(...arguments), (this.adapterName = 'feature-layer-adapter');
  }
  _isStatsSupportedOnService() {
    var t, a;
    const e = this.layer;
    if (
      !((a = (t = e.capabilities) == null ? void 0 : t.query) != null && a.supportsStatistics) ||
      (this.geometryType === 'multipatch' && !Nt(e.url) && e.version < 10.5)
    )
      throw new p(`${this.adapterName}:not-supported`, 'Layer does not support statistics query');
    return Promise.resolve();
  }
  _fetchFeaturesFromService(e, t) {
    return this.layer.queryFeatures(e, { signal: t }).then((a) => a.features);
  }
  _fetchFeaturesJSONFromService(e, t) {
    return this._fetchFeaturesFromService(e, t).then(te);
  }
  _summaryStatsFromGenRend(e) {
    const t = e.normalizationType,
      a = e.normalizationField;
    return this.classBreaks({
      field: e.field,
      numClasses: Je,
      classificationMethod: 'standard-deviation',
      standardDeviationInterval: 0.25,
      normalizationType: t,
      normalizationField: t === 'field' ? a : void 0,
      minValue: e.minValue,
      maxValue: e.maxValue,
      filter: e.filter,
      signal: e.signal,
    }).then((r) => {
      var l;
      let i, s, o;
      if (((l = r.classBreakInfos) == null || l.some((u) => (u.hasAvg && (i = u), !!i)), i)) {
        const u = i.maxValue - i.minValue;
        (s = i.minValue + u / 2), (o = 4 * u);
      }
      const n = { min: r.minValue, max: r.maxValue, avg: s, stddev: o };
      return ce(n, e.outStatisticTypes);
    });
  }
  async _summaryStatsFromServiceQuery(e, t) {
    await this._isStatsSupportedOnService(),
      e.normalizationType === 'percent-of-total' &&
        (e.normalizationTotal = await this._getNormalizationTotal(
          e.field,
          e.normalizationType,
          e.filter,
        ));
    const a = N(t) || C(t),
      r = Ie(this, e, t),
      i = await this.layer.queryFeatures(r, { signal: e.signal }),
      s = Ce(i, a);
    return ce(s, e.outStatisticTypes);
  }
  _uvFromGenRenderer(e, t) {
    const a = e.field ?? void 0,
      r = new aa({ attributeField: a }),
      i = new ve({ classificationDefinition: r });
    return this.generateRenderer(i, e.signal)
      .then((s) => {
        const o = {},
          n = this.getField(a);
        return (
          s.uniqueValues.forEach((l) => {
            let u = l.value;
            (u != null &&
              u !== '' &&
              (typeof u != 'string' || (u.trim() !== '' && u.toLowerCase() !== '<null>'))) ||
              (u = null),
              o[u] == null
                ? (o[u] = { count: l.count, data: Ke(n) && u ? Number(u) : u })
                : (o[u].count = o[u].count + l.count);
          }),
          { count: o }
        );
      })
      .then((s) => me(s, [t], e.returnAllCodedValues));
  }
  async _uvFromServiceQuery(e, t) {
    return this._isStatsSupportedOnService()
      .then(() => this.layer.queryFeatures(it(this, e), { signal: e.signal }))
      .then((a) =>
        Ne(a, {
          layer: this,
          field: e.field,
          field2: e.field2,
          field3: e.field3,
          fieldDelimiter: Q,
          view: e.view,
          signal: e.signal,
        }),
      )
      .then((a) => me(a, t, e.returnAllCodedValues, Q));
  }
  _getNormalizationTotal(e, t, a, r) {
    return e && t === 'percent-of-total'
      ? this.summaryStatistics({
          field: e,
          outStatisticTypes: { include: ['sum'] },
          filter: a,
          signal: r,
        }).then((i) => i.sum)
      : Promise.resolve(null);
  }
  _histogramForExpr(e) {
    return this._getNormalizationTotal(e.field, e.normalizationType, e.filter, e.signal).then(
      (t) => {
        const a = nt(e, this, t);
        return ot(a, this, e.minValue, e.maxValue).then((r) => {
          const i = r.min,
            s = r.max;
          if (i == null || s == null)
            return { bins: [], minValue: i, maxValue: s, normalizationTotal: t };
          const o = e.numBins || ee,
            n = Te(i, s, o),
            l = xa(a.sqlExpression, n, e.minValue != null && e.maxValue != null),
            u = new G({
              statisticType: 'count',
              outStatisticFieldName: 'countOFExpr',
              onStatisticField: '1',
            }),
            c = this.layer.createQuery();
          return (
            (c.where = V(c.where, a.sqlWhere)),
            (c.sqlFormat = 'standard'),
            (c.outStatistics = [u]),
            (c.groupByFieldsForStatistics = [l]),
            (c.orderByFields = [l]),
            $(c, e.filter),
            this._isStatsSupportedOnService()
              .then(() => this.layer.queryFeatures(c, { signal: a.signal }))
              .then((m) => at(m, i, s, o, t))
          );
        });
      },
    );
  }
  async _histogramFromQueryAttributeBins(e) {
    const { field: t, normalizationType: a, filter: r, signal: i } = e,
      s = await this._getNormalizationTotal(t, a, r, i),
      o = this.layer.createQuery(),
      { query: n, min: l, max: u } = await lt(e, this, s, o == null ? void 0 : o.where);
    if (!n) return { bins: [], minValue: l, maxValue: u, normalizationTotal: s };
    const c = await this.layer.queryAttributeBins(n, { signal: i });
    return ut(c, t ? this.getField(t) : null, { minValue: l, maxValue: u, normalizationTotal: s });
  }
  _classBreaksFromGenRend(e) {
    const {
        field: t,
        normalizationType: a,
        normalizationField: r,
        normalizationTotal: i,
        signal: s,
      } = e,
      o = ye({ field: t, normalizationType: a, normalizationField: r }),
      n = j({
        field: t,
        normalizationType: a,
        normalizationField: r,
        normalizationTotal: i,
        layer: this,
      }),
      l = ue(n, e.minValue, e.maxValue),
      u = Xe({
        field: t,
        normalizationType: a,
        normalizationField: r,
        classificationMethod: e.classificationMethod,
        standardDeviationInterval: e.standardDeviationInterval,
        breakCount: e.numClasses || Je,
      }),
      c = new ve({ classificationDefinition: u });
    return (
      (c.where = V(o, l)), this.generateRenderer(c, s).then((m) => Ye(m, e.classificationMethod))
    );
  }
  async summaryStatistics(e) {
    const {
        field: t,
        normalizationType: a,
        valueExpression: r,
        sqlExpression: i,
        view: s,
        features: o,
        useFeaturesInView: n,
      } = e,
      l = t ? this.getField(t) : null,
      u = N(l) || C(l),
      c = r && !(i && this.supportsSQLExpression),
      m = this._hasLocalSource || o || n,
      d = s && s.type === '3d';
    if (m || c)
      return c || o || n || d
        ? this._summaryStatsFromMemory(e, l)
        : this._summaryStatsFromClientQuery(e, l);
    if (!this.supportsSQLExpression && (u || i || a === 'natural-log' || a === 'square-root'))
      throw new p(
        `${this.adapterName}:not-supported`,
        'Layer does not support standardized SQL expression for queries',
      );
    return (
      a && !this.supportsSQLExpression
        ? this._summaryStatsFromGenRend(e)
        : this._summaryStatsFromServiceQuery(e, l)
    ).catch(() => (q(e.signal), this._summaryStatsFromMemory(e, l)));
  }
  async uniqueValues(e) {
    const {
        valueExpression: t,
        sqlExpression: a,
        features: r,
        useFeaturesInView: i,
        signal: s,
      } = e,
      o = t && !(a && this.supportsSQLExpression),
      n = this._hasLocalSource || r || i || o,
      l = e.view,
      u = l && l.type === '3d',
      c = await fe(e, this);
    return n
      ? o || r || i || u
        ? this._uvFromMemory(e, c)
        : this._uvFromClientQuery(e, c)
      : this._uvFromServiceQuery(e, c)
          .catch(
            (m) => (
              q(s),
              !e.field || e.field2 || e.field3 || e.filter ? m : this._uvFromGenRenderer(e, c[0])
            ),
          )
          .catch(() => (q(s), u ? this._uvFromMemory(e, c) : this._uvFromClientQuery(e, c)));
  }
  async histogram(e) {
    var z, L;
    const {
        field: t,
        normalizationType: a,
        normalizationField: r,
        classificationMethod: i,
        view: s,
        filter: o,
        signal: n,
      } = e,
      l = t ? this.getField(t) : null,
      u = N(l) || C(l),
      c = e.valueExpression || e.sqlExpression,
      m = e.valueExpression && !(e.sqlExpression && this.supportsSQLExpression),
      d = this._hasLocalSource || e.features || e.useFeaturesInView || m,
      y = this.supportsSQLExpression,
      g = !i || i === 'equal-interval',
      h = e.minValue,
      S = e.maxValue,
      w = h != null && S != null,
      x = e.numBins || ee;
    if (d) return this._histogramFromMemory(e);
    if (
      (L = (z = this.layer.capabilities) == null ? void 0 : z.operations) != null &&
      L.supportsQueryBins &&
      e.useQueryAttributeBins
    )
      try {
        return await this._histogramFromQueryAttributeBins(e);
      } catch {
        return q(n), this._histogramFromQueryAttributeBinsFromMemory(e);
      }
    if ((c || y) && g) {
      if (!y && (c || a === 'natural-log' || a === 'square-root'))
        throw new p(
          `${this.adapterName}:not-supported`,
          'Layer does not support standardized SQL expression for queries',
        );
      return this._histogramForExpr(e);
    }
    if (u && g)
      throw new p(
        `${this.adapterName}:not-supported`,
        'Normalization and date field are not allowed when layer does not support standardized SQL expression for queries',
      );
    return a || !g
      ? xe(e, this).then((O) => {
          if (!w) return ie(this, O, t, x, s, o, n);
          if (h > O.max || S < O.min)
            throw new p(
              `${this.adapterName}:insufficient-data`,
              "Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field",
            );
          if (g)
            return ie(
              this,
              { min: h, max: S, sqlExpr: O.sqlExpr, excludeZerosExpr: O.excludeZerosExpr },
              t,
              x,
              s,
              o,
              n,
            );
          {
            const A = {
                field: t,
                normalizationType: a,
                normalizationField: r,
                normalizationTotal: O.normTotal,
                layer: this,
              },
              _ = j(A),
              k = ue(_, h, S);
            return xe(e, this, k).then((P) => ie(this, P, t, x, s, o, n));
          }
        })
      : this._histogramForField(e);
  }
  async classBreaks(e) {
    const t = e.analyzeData !== !1,
      a =
        this._hasLocalSource || e.features || e.useFeaturesInView || e.valueExpression || e.filter;
    return t && a
      ? this._classBreaksFromMemory(e)
      : (t ? this._classBreaksFromGenRend(e) : this._classBreaksFromInterpolation(e)).catch(
          () => (q(e.signal), this._classBreaksFromMemory(e)),
        );
  }
  async queryFeatureCount(e) {
    if (this._hasLocalSource)
      throw new p(`${this.adapterName}:not-supported`, 'Layer does not support count query');
    const t = this.layer,
      a = t.createQuery();
    return (
      (a.where = V(a.where, e.whereClause)),
      $(a, e.filter),
      t.queryFeatureCount(a, { signal: e.signal })
    );
  }
  async generateRenderer(e, t) {
    var i;
    const a = this.layer;
    if (this._hasLocalSource || a.version < 10.1)
      throw new p(
        `${this.adapterName}:not-supported`,
        'Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)',
      );
    const r = a.createQuery();
    return (
      (e.where = V(e.where, r.where)),
      ea(
        ((i = a.parsedUrl) == null ? void 0 : i.path) ?? '',
        { source: a.dynamicDataSource ?? void 0, gdbVersion: a.gdbVersion ?? void 0 },
        e,
        { signal: t },
      )
    );
  }
  async predominantCategories(e) {
    if (!this._hasLocalSource && !this.supportsSQLExpression)
      throw new p(
        `${this.adapterName}:not-supported`,
        'Layer does not support advanced SQL expressions and standardized queries',
      );
    const { fields: t, view: a, signal: r, filter: i } = e,
      s = Ee(t),
      o = ra(t),
      n =
        a && this._hasLocalSource
          ? await this._uvFromMemory({ valueExpression: s, view: a, signal: r, filter: i })
          : await this._uvFromServiceQuery({
              sqlExpression: o.expression,
              valueExpression: s,
              signal: r,
              filter: i,
            });
    return Me(n.uniqueValueInfos, t);
  }
  async getSampleFeatures(e, t) {
    var y, g;
    const { view: a, requiredFields: r, returnGeometry: i, filter: s, signal: o } = e,
      n = e.sampleSize;
    if (n == null || n === 0) return [];
    const l = this.layer.createQuery(),
      u = 1,
      c = t === 'json';
    (l.outSpatialReference = a == null ? void 0 : a.spatialReference),
      (l.returnGeometry = !!i),
      (l.outFields = r),
      $(l, s);
    let m = [],
      d = !1;
    if (a)
      try {
        const h = await a.whenLayerView(this.layer);
        if (((d = !pe(this, r, h).length), d)) {
          if (n >= 1 && !e.filter && 'getSampleFeatures' in h) {
            await this._waitForLayerViewUpdate(h);
            const S = await h.getSampleFeatures({ minFeatureCount: n, sampleSize: n });
            if (S != null) return c ? S : S.map((w) => ze.fromJSON(w));
          }
          if (((m = await this._fetchFeaturesFromMemory(h, l, o, t)), m.length >= n && n > 0))
            return D(m, n, u);
        }
      } catch {
        q(o);
      }
    try {
      if (this._hasLocalSource)
        return d
          ? m
          : c
            ? await this._fetchFeaturesJSONFromService(l, o)
            : await this._fetchFeaturesFromService(l, o);
      const h = await this.queryFeatureCount({ view: a, filter: s, signal: o }),
        S = this.layer.capabilities.query.maxRecordCount;
      let w = n === -1 ? h : n;
      if (((w = S && w > S ? S : w), h <= m.length || m.length >= S)) return m;
      if (
        ((l.maxAllowableOffset =
          e.resolution ||
          (a ? a.extent.width / a.width / a.scale : Mt(this.layer.spatialReference)) * va),
        h <= w)
      )
        return c
          ? await this._fetchFeaturesJSONFromService(l, o)
          : await this._fetchFeaturesFromService(l, o);
      if (h <= je) {
        const x = this.layer.createQuery();
        $(x, s);
        const z = await this.layer.queryObjectIds();
        return (
          (l.objectIds = D(z, w, u)),
          c
            ? await this._fetchFeaturesJSONFromService(l, o)
            : await this._fetchFeaturesFromService(l, o)
        );
      }
      return (
        (g = (y = this.layer.capabilities) == null ? void 0 : y.query) != null &&
          g.supportsPagination &&
          (l.num = Math.min(w, je)),
        c
          ? await this._fetchFeaturesJSONFromService(l, o)
          : await this._fetchFeaturesFromService(l, o)
      );
    } catch {
      return q(o), m;
    }
  }
  load(e) {
    const t = this.layer.load(e).then(async (a) => {
      var r, i;
      (this.geometryType = a.geometryType),
        (this.objectIdField = a.objectIdField),
        (this.supportsSQLExpression =
          (i = (r = a.capabilities) == null ? void 0 : r.query) == null
            ? void 0
            : i.supportsSqlExpression),
        (this._hasLocalSource = !a.url && !!a.source),
        (this.hasQueryEngine = this._hasLocalSource),
        (this.minScale = a.minScale),
        (this.maxScale = a.maxScale),
        (this.fullExtent = a.fullExtent),
        (this.workerClient = ae.getInstance()),
        await this.workerClient.open(e.signal);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
};
function xa(e, t, a) {
  const r = [],
    i = t.length;
  return (
    t.forEach((s, o) => {
      const [n, l] = s;
      let u = null;
      (u =
        o !== 0 || a
          ? o !== i - 1 || a
            ? V(`${e} >= ${n}`, `${e} ${o === i - 1 ? ' <= ' : ' < '} ${l}`)
            : `${e} >= ${n}`
          : `${e} < ${l}`),
        r.push('WHEN (' + u + ') THEN ' + (o + 1));
    }),
    ['CASE', r.join(' '), 'ELSE 0', 'END'].join(' ')
  );
}
F([v({ readOnly: !0 })], X.prototype, 'adapterName', void 0),
  F([v({ constructOnly: !0 })], X.prototype, 'layer', void 0),
  (X = F([M('esri.smartMapping.support.adapters.FeatureLayerAdapter')], X));
const T = X;
let se = class extends T {
  constructor() {
    super(...arguments), (this.adapterName = 'csv-layer-adapter');
  }
  async _createGenerateRendererResult(t, a, r, i, s) {
    const o = t == null ? void 0 : t.features;
    if (!(o == null ? void 0 : o.length))
      throw new p(
        'csv-layer-adapter:insufficient-data',
        'No features are available to calculate statistics',
      );
    const l = te(o);
    let u = null;
    if (
      i === 'percent-of-total' &&
      ((u = (await this.workerClient.summaryStatistics({ field: a }, l)).sum), u == null)
    )
      throw new p('csv-layer-adapter:invalid', 'invalid normalizationTotal');
    if ((s == null ? void 0 : s.type) === 'class-breaks-definition') {
      const m = (
        await Pe(
          { field: a, normalizationType: i, normalizationField: r, normalizationTotal: u },
          l,
        )
      ).filter((d) => Number.isFinite(d));
      return Pt({ definition: s, values: m, normalizationTotal: u });
    }
    const c = (await Pe({ field: a }, l)).filter(
      (m) => m != null && typeof m == 'string' && m.trim() !== '',
    );
    return Bt(c);
  }
  generateRenderer(t, a) {
    const r = t.classificationDefinition;
    let i = null,
      s = null,
      o = null;
    (r == null ? void 0 : r.type) === 'class-breaks-definition'
      ? ((i = r.classificationField), (s = r.normalizationField), (o = r.normalizationType))
      : (i = r == null ? void 0 : r.attributeField);
    const n = this.layer;
    return B({ field: i, normalizationField: s }).then((l) => {
      const u = n.createQuery();
      return (
        (u.returnGeometry = !1),
        (u.outFields = l),
        (u.where = V(u.where, t.where)),
        n
          .queryFeatures(u, { signal: a })
          .then((c) => this._createGenerateRendererResult(c, i, s, o, r))
      );
    });
  }
  load(t) {
    const a = this.layer.load(t).then(async (r) => {
      (this.geometryType = r.geometryType),
        (this.objectIdField = r.objectIdField),
        (this.supportsSQLExpression = !0),
        (this._hasLocalSource = !1),
        (this.hasQueryEngine = !0),
        (this.workerClient = ae.getInstance()),
        await this.workerClient.open(t.signal);
    });
    return this.addResolvingPromise(a), Promise.resolve(this);
  }
};
F([v({ readOnly: !0 })], se.prototype, 'adapterName', void 0),
  (se = F([M('esri.smartMapping.support.adapters.CSVLayerAdapter')], se));
const qa = se;
let ne = class extends T {
  constructor() {
    super(...arguments), (this.adapterName = 'feature-layer-binning-adapter');
  }
  async _getNormalizationTotalFromMemory(e, t, a) {
    const { featuresJSON: r, graphics: i, layerView: s, query: o } = t,
      n = { include: ['sum'] },
      l = (
        !r && !i && s && 'queryAggregateSummaryStatistics' in s
          ? await s.queryAggregateSummaryStatistics(
              o,
              { field: e, outStatisticTypes: n },
              { signal: a },
            )
          : r
            ? await this.workerClient.summaryStatistics({ field: e }, r)
            : await J({ attribute: { field: e, outStatisticTypes: n }, features: i })
      ).sum;
    if (l == null) throw new p(`${this.adapterName}:invalid`, 'invalid normalizationTotal');
    return l;
  }
  async _processStatsFromMemoryParams(e) {
    const { features: t, filter: a } = e;
    if (t != null && t.length) return this._getFilteredFeatures(t, a);
    const {
      view: r,
      field: i,
      field2: s,
      field3: o,
      normalizationField: n,
      valueExpression: l,
      returnGeometry: u,
      layerViewFunc: c,
      signal: m,
    } = e;
    let d = null,
      y = null,
      g = null,
      h = null,
      S = null;
    if (r)
      try {
        if (
          ((d = await r.whenLayerView(this.layer)),
          (y = c != null && c in d && typeof d[c] == 'function'),
          y)
        ) {
          await this._waitForLayerViewUpdate(d);
          const w = await B({
            field: i,
            field2: s,
            field3: o,
            normalizationField: n,
            valueExpression: l,
          });
          Qe(this, w).length
            ? (y = !1)
            : ((g = 'createAggregateQuery' in d ? d.createAggregateQuery() : null),
              g ? ((g.outFields = w), (g.returnGeometry = !1), $(g, a)) : (y = !1)),
            d.suspended && (y = !1);
        }
      } catch {
        y = !1;
      }
    if (
      !y &&
      ((S = Re(this.layer).map((w) => w.toJSON())),
      (h = await this._fetchFeaturesForStats(
        {
          field: i,
          field2: s,
          field3: o,
          valueExpression: l,
          normalizationField: n,
          returnGeometry: u,
          filter: a,
          view: r,
          signal: m,
        },
        'json',
      )),
      !(h != null && h.length))
    )
      throw new p(
        `${this.adapterName}:insufficient-data`,
        'No features are available to calculate statistics',
      );
    return { layerView: d, query: g, featuresJSON: h, fieldInfos: S };
  }
  async _summaryStatsFromMemory(e, t) {
    const { view: a, field: r, valueExpression: i, normalizationType: s, signal: o } = e,
      n = {
        field: r,
        valueExpression: i,
        normalizationType: s,
        normalizationField: e.normalizationField,
        normalizationTotal: e.normalizationTotal,
        minValue: e.minValue,
        maxValue: e.maxValue,
        outStatisticTypes: e.outStatisticTypes,
      },
      {
        featuresJSON: l,
        graphics: u,
        layerView: c,
        query: m,
        fieldInfos: d,
      } = await this._processStatsFromMemoryParams({
        ...e,
        layerViewFunc: 'queryAggregateSummaryStatistics',
      });
    return (
      i &&
        a &&
        (l || u) &&
        ((n.fieldType = t != null && t.type ? Le.toJSON(t.type) : null),
        (n.viewInfoParams = E(a)),
        (n.timeZone = a.timeZone),
        (n.fieldInfos = d)),
      s === 'percent-of-total' &&
        e.normalizationTotal == null &&
        (n.normalizationTotal = await this._getNormalizationTotalFromMemory(
          r,
          { featuresJSON: l, graphics: u, layerView: c, query: m },
          o,
        )),
      !l && !u && c && 'queryAggregateSummaryStatistics' in c
        ? c.queryAggregateSummaryStatistics(m, n, { signal: o })
        : l
          ? this.workerClient.summaryStatistics(n, l)
          : J({ attribute: n, features: u })
    );
  }
  async _uvFromMemory(e, t) {
    const { view: a, field: r, valueExpression: i, returnAllCodedValues: s, signal: o } = e,
      {
        featuresJSON: n,
        graphics: l,
        layerView: u,
        query: c,
        fieldInfos: m,
      } = await this._processStatsFromMemoryParams({
        ...e,
        layerViewFunc: 'queryAggregateUniqueValues',
      }),
      d = {
        field: r,
        field2: e.field2,
        field3: e.field3,
        fieldDelimiter: Q,
        valueExpression: i,
        domains: t,
        returnAllCodedValues: s,
      };
    return (
      i &&
        a &&
        (n || l) &&
        ((d.viewInfoParams = E(a)), (d.timeZone = a.timeZone), (d.fieldInfos = m)),
      !n && !l && u && 'queryAggregateUniqueValues' in u
        ? u.queryAggregateUniqueValues(c, d, { signal: o })
        : n
          ? this.workerClient.uniqueValues(d, n)
          : _e({ attribute: d, features: l })
    );
  }
  async _histogramFromMemory(e) {
    const { view: t, field: a, valueExpression: r, signal: i } = e,
      {
        featuresJSON: s,
        graphics: o,
        layerView: n,
        query: l,
        fieldInfos: u,
      } = await this._processStatsFromMemoryParams({
        ...e,
        layerViewFunc: 'queryAggregateHistogram',
      }),
      c = {
        field: a,
        valueExpression: r,
        normalizationType: e.normalizationType,
        normalizationField: e.normalizationField,
        normalizationTotal: e.normalizationTotal,
        minValue: e.minValue,
        maxValue: e.maxValue,
        standardDeviationInterval: e.standardDeviationInterval,
        classificationMethod: e.classificationMethod,
        numBins: e.numBins,
      };
    return (
      r &&
        t &&
        (s || o) &&
        ((c.viewInfoParams = E(t)), (c.timeZone = t.timeZone), (c.fieldInfos = u)),
      e.normalizationType === 'percent-of-total' &&
        e.normalizationTotal == null &&
        (c.normalizationTotal = await this._getNormalizationTotalFromMemory(
          a,
          { featuresJSON: s, graphics: o, layerView: n, query: l },
          i,
        )),
      !s && !o && n && 'queryAggregateHistogram' in n
        ? n.queryAggregateHistogram(l, c, { signal: i })
        : s
          ? this.workerClient.histogram(c, s)
          : de({ attribute: c, features: o })
    );
  }
  async _classBreaksFromMemory(e) {
    const { view: t, field: a, valueExpression: r, signal: i } = e,
      {
        featuresJSON: s,
        graphics: o,
        layerView: n,
        query: l,
        fieldInfos: u,
      } = await this._processStatsFromMemoryParams({
        ...e,
        layerViewFunc: 'queryAggregateClassBreaks',
      }),
      c = {
        field: a,
        valueExpression: r,
        normalizationType: e.normalizationType,
        normalizationField: e.normalizationField,
        normalizationTotal: e.normalizationTotal,
        minValue: e.minValue,
        maxValue: e.maxValue,
        standardDeviationInterval: e.standardDeviationInterval,
        classificationMethod: e.classificationMethod,
        numClasses: e.numClasses,
      };
    return (
      r &&
        t &&
        (s || o) &&
        ((c.viewInfoParams = E(t)), (c.timeZone = t.timeZone), (c.fieldInfos = u)),
      e.normalizationType === 'percent-of-total' &&
        e.normalizationTotal == null &&
        (c.normalizationTotal = await this._getNormalizationTotalFromMemory(
          a,
          { featuresJSON: s, graphics: o, layerView: n, query: l },
          i,
        )),
      !s && !o && n && 'queryAggregateClassBreaks' in n
        ? n.queryAggregateClassBreaks(l, c, { signal: i })
        : s
          ? this.workerClient.classBreaks(c, s)
          : be({ attribute: c, features: o })
    );
  }
  getField(e = '') {
    const t = Re(this.layer);
    return t == null
      ? void 0
      : t.find((a) => a.name.toLowerCase() === (e == null ? void 0 : e.toLowerCase()));
  }
  getFieldUsageInfo(e) {
    return this.getField(e)
      ? {
          supportsLabelingInfo: !0,
          supportsRenderer: !0,
          supportsPopupTemplate: !0,
          supportsLayerQuery: !1,
          supportsStatistics: !0,
        }
      : null;
  }
  getFieldDomain(e, t) {
    return null;
  }
  async summaryStatistics(e) {
    const { field: t } = e,
      a = t ? this.getField(t) : null,
      r = N(a) || C(a),
      i = e.sqlExpression && !e.valueExpression && !t;
    if (r || i)
      throw new p(
        `${this.adapterName}:not-supported`,
        'Date field and sqlExpression are not supported',
      );
    return this._summaryStatsFromMemory(e, a);
  }
  async uniqueValues(e) {
    const t = await fe(e, this);
    return this._uvFromMemory(e, t);
  }
  async histogram(e) {
    const { field: t } = e,
      a = t ? this.getField(t) : null,
      r = N(a) || C(a),
      i = e.sqlExpression && !e.valueExpression && !t;
    if (r || i)
      throw new p(
        `${this.adapterName}:not-supported`,
        'Date field and sqlExpression are not supported',
      );
    return this._histogramFromMemory(e);
  }
  async classBreaks(e) {
    return (
      e.analyzeData !== !1 ? this._classBreaksFromMemory(e) : this._classBreaksFromInterpolation(e)
    ).catch(() => (q(e.signal), this._classBreaksFromMemory(e)));
  }
  async queryFeatureCount(e) {
    var r;
    const t = await ((r = e.view) == null ? void 0 : r.whenLayerView(this.layer));
    if (!t || !('queryAggregateCount' in t) || !t.queryAggregateCount)
      throw new p(`${this.adapterName}:not-supported`, 'LayerView is not supported.');
    await this._waitForLayerViewUpdate(t);
    const a = t.createAggregateQuery();
    return (
      (a.where = V(a.where, e.whereClause)),
      $(a, e.filter),
      t.queryAggregateCount(a, { signal: e.signal })
    );
  }
  generateRenderer(e, t) {
    throw new p(`${this.adapterName}:not-supported`, "'generateRenderer' is not supported.");
  }
  heatmapStatistics(e) {
    throw new p(`${this.adapterName}:not-supported`, "'heatmapStatistics' is not supported.");
  }
  async predominantCategories(e) {
    const { fields: t, view: a, signal: r } = e,
      i = Ee(t),
      s = await this._uvFromMemory({ valueExpression: i, view: a, signal: r });
    return Me(s.uniqueValueInfos, t);
  }
  async getSampleFeatures(e, t) {
    const {
      view: a,
      sampleSize: r,
      requiredFields: i,
      returnGeometry: s,
      filter: o,
      signal: n,
    } = e;
    if (!a)
      throw new p(
        `${this.adapterName}:not-supported`,
        "'view' is required to get sample features for binning.",
      );
    if (a.type === '3d')
      throw new p(
        `${this.adapterName}:not-supported`,
        "3d 'view' is not supported to get sample features for binning.",
      );
    const l = await a.whenLayerView(this.layer);
    if (
      !(
        'queryAggregateJSON' in l &&
        l.queryAggregateJSON &&
        'queryAggregates' in l &&
        l.queryAggregates
      )
    )
      throw new p(`${this.adapterName}:not-supported`, 'LayerView is not supported.');
    if ((await this._waitForLayerViewUpdate(l), Qe(this, i).length))
      throw new p(`${this.adapterName}:insufficient-data`, 'Layer does not have required fields');
    const u = 1,
      c = t === 'json',
      m = l.createAggregateQuery();
    (m.outSpatialReference = a == null ? void 0 : a.spatialReference),
      (m.returnGeometry = !!s),
      (m.outFields = i),
      $(m, o);
    const { features: d } = c
      ? await l.queryAggregateJSON(m, { signal: n })
      : await l.queryAggregates(m, { signal: n });
    return d.length && r != null && r > 0 && r <= d.length ? D(d, r, u) : d;
  }
  load(e) {
    const t = this.layer.load(e).then(async (a) => {
      (this.geometryType = 'polygon'),
        (this.objectIdField = null),
        (this.supportsSQLExpression = !1),
        (this._hasLocalSource = !1),
        (this.hasQueryEngine = !0),
        (this.minScale = a.minScale),
        (this.maxScale = a.maxScale),
        (this.fullExtent = a.fullExtent);
      const r = 'featureReduction' in a ? a.featureReduction : null;
      if (
        (r == null ? void 0 : r.type) !== 'binning' &&
        (r == null ? void 0 : r.type) !== 'cluster'
      )
        throw new p(
          `${this.adapterName}:invalid-parameters`,
          `Feature reduction type ${r == null ? void 0 : r.type} is not supported`,
        );
      (this.workerClient = ae.getInstance()), await this.workerClient.open(e.signal);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
};
F([v({ readOnly: !0 })], ne.prototype, 'adapterName', void 0),
  (ne = F([M('esri.smartMapping.support.adapters.FeatureLayerBinningAdapter')], ne));
const Va = ne;
let Y = class extends $e {
  constructor(e) {
    super(e),
      (this._featureLayerAdapter = null),
      (this.workerClient = null),
      (this.adapterName = 'scene-layer-adapter');
  }
  destroy() {
    var e;
    (e = this.workerClient) == null || e.destroy();
  }
  _hasCachedStatistics(e) {
    return this.layer.hasCachedStatistics(e);
  }
  _updateQuery(e, t = [], a = []) {
    if (!e || !a.length) return e;
    const r = this.layer.objectIdField,
      i = e.clone(),
      s = t.filter((n) => {
        const l = this.layer.getField(n);
        return !a.includes(l.name);
      }),
      o = s.some((n) => this.layer.getField(n).name === r);
    return (i.outFields = o ? s : [...s, r]), i;
  }
  async _fetchFeaturesFromMemory(e, t, a) {
    if (!e)
      throw new p(
        'scene-layer-adapter:insufficient-data',
        'view is required to fetch the features from layerView',
      );
    const r = await e.whenLayerView(this.layer),
      i = new AbortController(),
      s = i.signal,
      o = Se(() => !r.updating, s);
    await He(o, 5e3, i);
    const n = pe(this, a, r);
    q(s);
    const l = this._updateQuery(t, a ?? [], n),
      u = await r.queryFeatures(l, { signal: s });
    q(s);
    const c = u.features;
    return n.length ? r.whenGraphicAttributes(c, n) : c;
  }
  async _fetchFeaturesJSONFromMemory(e, t, a) {
    return this._fetchFeaturesFromMemory(e, t, a).then(te);
  }
  _fetchFeaturesForStats(e, t) {
    return B({
      field: e.field,
      normalizationField: e.normalizationField,
      valueExpression: e.valueExpression,
    }).then((a) =>
      this.getSampleFeatures(
        {
          sampleSize: -1,
          view: e.view,
          returnGeometry: e.returnGeometry,
          requiredFields: a,
          signal: e.signal,
        },
        t,
      ),
    );
  }
  async _processStatsFromMemoryParams(e) {
    const t = e.features;
    if (t != null && t.length)
      return t.length && 'declaredClass' in t[0] && t[0].declaredClass === 'esri.Graphic'
        ? { graphics: t }
        : { featuresJSON: t };
    const { view: a, field: r, normalizationField: i, valueExpression: s, signal: o } = e,
      n = await this._fetchFeaturesForStats(
        { field: r, valueExpression: s, normalizationField: i, view: a, signal: o },
        null,
      );
    if (!(n != null && n.length))
      throw new p(
        'scene-layer-adapter:insufficient-data',
        'No features are available to calculate statistics',
      );
    return { graphics: n };
  }
  _getCachedStatistics(e, t) {
    const a = this.layer;
    return e.valueExpression || e.sqlExpression || e.sqlWhere || e.minValue || e.maxValue
      ? Promise.reject(
          new p(
            'scene-layer-adapter:not-supported',
            "This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression', 'sqlWhere', 'minValue' or 'maxValue' is specified",
          ),
        )
      : a.queryCachedStatistics(t == null ? void 0 : t.name, { signal: e.signal }).then((r) => {
          const i = r.stats,
            { min: s, max: o, totalValuesCount: n } = i;
          let { avg: l, stddev: u, sum: c, variance: m, count: d } = i;
          return (
            (s === 0 && o === 0) ||
              ((l = l === 0 ? null : l),
              (c = c === 0 ? null : c),
              (u = u === 0 ? null : u),
              (m = m === 0 ? null : m),
              (d = d === 0 ? null : d)),
            d == null && (c != null && l != null ? (d = Math.round(c / l)) : n != null && (d = n)),
            { avg: l, count: d, max: o, min: s, stddev: u, sum: c, variance: m }
          );
        });
  }
  async _getNormalizationTotal(e, t, a) {
    const r = { include: ['sum'] },
      i = (
        t
          ? await this.workerClient.summaryStatistics({ field: e, outStatisticTypes: r }, t)
          : await J({ attribute: { field: e, outStatisticTypes: r }, features: a })
      ).sum;
    if (i == null) throw new p('scene-layer-adapter:invalid', 'invalid normalizationTotal');
    return i;
  }
  async _getSummaryStatisticsFromMemory(e, t) {
    const { view: a, field: r, normalizationField: i, valueExpression: s } = e,
      { featuresJSON: o, graphics: n } = await this._processStatsFromMemoryParams(e),
      l = {
        field: r,
        valueExpression: s,
        normalizationType: e.normalizationType,
        normalizationField: i,
        normalizationTotal: e.normalizationTotal,
        minValue: e.minValue,
        maxValue: e.maxValue,
        outStatisticTypes: e.outStatisticTypes,
      };
    return (
      e.valueExpression &&
        a &&
        o &&
        ((l.fieldType = t != null && t.type ? Le.toJSON(t.type) : null),
        (l.viewInfoParams = E(a)),
        (l.timeZone = a.timeZone)),
      e.normalizationType === 'percent-of-total' &&
        e.normalizationTotal == null &&
        (l.normalizationTotal = await this._getNormalizationTotal(r, o, n)),
      o ? this.workerClient.summaryStatistics(l, o) : J({ attribute: l, features: n })
    );
  }
  _getCachedStatisticsForUniqueValues(e, t) {
    const a = this.layer,
      r = t == null ? void 0 : t.name,
      i = t && e.field ? this.getFieldDomain(e.field) : null;
    return e.valueExpression || e.sqlExpression || e.sqlWhere
      ? Promise.reject(
          new p(
            'scene-layer-adapter:not-supported',
            "This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression' or 'sqlWhere' is specified",
          ),
        )
      : a
          .queryCachedStatistics(r, { signal: e.signal })
          .then((s) => {
            var d;
            const o = s.stats;
            if (!o.mostFrequentValues) throw new Error();
            const n = (d = s.labels) == null ? void 0 : d.labels,
              l = {},
              u = [],
              c = 'countOF' + r;
            o.mostFrequentValues.forEach((y) => {
              const g = new ze({ attributes: {} });
              (g.attributes[r] =
                t && t.name !== a.objectIdField && (Ke(t) || N(t)) ? Number(y.value) : y.value),
                (g.attributes[c] = y.count),
                u.push(g);
            }),
              n &&
                n.forEach((y) => {
                  l[y.value] = y.label;
                });
            const m = new Ve({ features: u });
            return Ne(m, {
              layer: this,
              field: e.field,
              labels: l,
              view: e.view,
              signal: e.signal,
            });
          })
          .then((s) => me(s, [i], e.returnAllCodedValues));
  }
  async _getUniqueValuesFromMemory(e, t) {
    const {
        view: a,
        field: r,
        field2: i,
        field3: s,
        valueExpression: o,
        returnAllCodedValues: n,
      } = e,
      l = {
        field: r,
        field2: i,
        field3: s,
        fieldDelimiter: Q,
        valueExpression: o,
        domains: t,
        returnAllCodedValues: n,
      },
      { featuresJSON: u, graphics: c } = await this._processStatsFromMemoryParams(e);
    return (
      e.valueExpression && a && u && ((l.viewInfoParams = E(a)), (l.timeZone = a.timeZone)),
      u ? this.workerClient.uniqueValues(l, u) : _e({ attribute: l, features: c })
    );
  }
  _getCachedStatisticsForHistogram(e, t) {
    const a = this.layer;
    return e.valueExpression || e.sqlExpression || e.sqlWhere || e.normalizationType
      ? Promise.reject(
          new p(
            'scene-layer-adapter:not-supported',
            "This Layer does not support calculating statistics when 'valueExpression' or 'sqlExpression' or 'sqlWhere' or 'normalizationType' is specified",
          ),
        )
      : a.queryCachedStatistics(t && t.name, { signal: e.signal }).then((r) => {
          const i = r.stats,
            { minValue: s, maxValue: o } = e,
            n = s ?? i.min,
            l = o ?? i.max,
            u = e.numBins || 10,
            c = La(i.histogram, n, l, u);
          return at(c, n, l, u);
        });
  }
  async _getClassBreaksFromMemory(e) {
    const { view: t, field: a, normalizationField: r, valueExpression: i } = e,
      { featuresJSON: s, graphics: o } = await this._processStatsFromMemoryParams(e),
      n = {
        field: a,
        valueExpression: i,
        normalizationType: e.normalizationType,
        normalizationField: r,
        normalizationTotal: e.normalizationTotal,
        minValue: e.minValue,
        maxValue: e.maxValue,
        standardDeviationInterval: e.standardDeviationInterval,
        classificationMethod: e.classificationMethod,
        numClasses: e.numClasses,
      };
    return (
      e.valueExpression && t && s && ((n.viewInfoParams = E(t)), (n.timeZone = t.timeZone)),
      e.normalizationType === 'percent-of-total' &&
        e.normalizationTotal == null &&
        (n.normalizationTotal = await this._getNormalizationTotal(a, s, o)),
      s ? this.workerClient.classBreaks(n, s) : be({ attribute: n, features: o })
    );
  }
  async _getHistogramFromMemory(e) {
    const { view: t, field: a } = e,
      { featuresJSON: r, graphics: i } = await this._processStatsFromMemoryParams(e),
      s = {
        field: a,
        valueExpression: e.valueExpression,
        normalizationType: e.normalizationType,
        normalizationField: e.normalizationField,
        normalizationTotal: e.normalizationTotal,
        minValue: e.minValue,
        maxValue: e.maxValue,
        standardDeviationInterval: e.standardDeviationInterval,
        classificationMethod: e.classificationMethod,
        numBins: e.numBins,
      };
    return (
      e.valueExpression && t && r && ((s.viewInfoParams = E(t)), (s.timeZone = t.timeZone)),
      e.normalizationType === 'percent-of-total' &&
        e.normalizationTotal == null &&
        (s.normalizationTotal = await this._getNormalizationTotal(a, r, i)),
      r ? this.workerClient.histogram(s, r) : de({ attribute: s, features: i })
    );
  }
  getField(e) {
    return this.layer.getField(e ?? '');
  }
  getFieldUsageInfo(e) {
    const t = this.getField(e);
    if (!t) return null;
    const a = this.layer.getFieldUsageInfo(t.name);
    return {
      supportsLabelingInfo: a.supportsLabelingInfo,
      supportsPopupTemplate: a.supportsPopupTemplate,
      supportsRenderer: a.supportsRenderer,
      supportsLayerQuery: a.supportsLayerQuery,
      supportsStatistics: !0,
    };
  }
  getFieldDomain(e, t) {
    return this._featureLayerAdapter ? this._featureLayerAdapter.getFieldDomain(e, t) : null;
  }
  createQuery() {
    return this.layer.createQuery();
  }
  summaryStatistics(e) {
    const t = this.getField(e.field);
    if (this._featureLayerAdapter) return this._featureLayerAdapter.summaryStatistics(e);
    if (e.filter) throw new p('scene-layer-adapter:not-supported', 'filter is not supported');
    return this._hasCachedStatistics(t == null ? void 0 : t.name)
      ? this._getCachedStatistics(e, t).catch(
          () => (q(e.signal), this._getSummaryStatisticsFromMemory(e, t)),
        )
      : this._getSummaryStatisticsFromMemory(e, t);
  }
  async uniqueValues(e) {
    if (this._featureLayerAdapter) return this._featureLayerAdapter.uniqueValues(e);
    if (e.filter) throw new p('scene-layer-adapter:not-supported', 'filter is not supported');
    const t = await fe(e, this),
      { field: a, field2: r } = e,
      i = a && r,
      s = this.getField(a);
    return !i && s && this._hasCachedStatistics(s.name)
      ? this._getCachedStatisticsForUniqueValues(e, s).catch(
          () => (q(e.signal), this._getUniqueValuesFromMemory(e, t)),
        )
      : this._getUniqueValuesFromMemory(e, t);
  }
  histogram(e) {
    const t = this.getField(e.field);
    if (this._featureLayerAdapter) return this._featureLayerAdapter.histogram(e);
    if (e.filter) throw new p('scene-layer-adapter:not-supported', 'filter is not supported');
    return t && this._hasCachedStatistics(t.name)
      ? this._getCachedStatisticsForHistogram(e, t).catch(
          () => (q(e.signal), this._getHistogramFromMemory(e)),
        )
      : this._getHistogramFromMemory(e);
  }
  classBreaks(e) {
    const t = this.getField(e.field);
    if (this._featureLayerAdapter) return this._featureLayerAdapter.classBreaks(e);
    if (e.filter) throw new p('scene-layer-adapter:not-supported', 'filter is not supported');
    return this._hasCachedStatistics(t == null ? void 0 : t.name)
      ? Promise.reject(new p('scene-layer-adapter:not-supported', 'Cached stats not supported'))
      : this._getClassBreaksFromMemory(e);
  }
  queryFeatureCount(e) {
    return this._featureLayerAdapter
      ? this._featureLayerAdapter.queryFeatureCount(e)
      : Promise.reject(
          new p(
            'scene-layer-adapter:not-supported',
            'SceneLayer without associated FeatureLayer does not support count query',
          ),
        );
  }
  generateRenderer(e, t) {
    return this._featureLayerAdapter
      ? this._featureLayerAdapter.generateRenderer(e, t)
      : Promise.reject(
          new p(
            'scene-layer-adapter:not-supported',
            'SceneLayer without associated FeatureLayer does not support generateRenderer operation',
          ),
        );
  }
  heatmapStatistics(e) {
    return this._featureLayerAdapter
      ? this._featureLayerAdapter.heatmapStatistics(e)
      : Promise.reject(
          new p(
            'scene-layer-adapter:not-supported',
            'SceneLayer without associated FeatureLayer does not support heatmapStatistics operation',
          ),
        );
  }
  async predominantCategories(e) {
    if (this._featureLayerAdapter) return this._featureLayerAdapter.predominantCategories(e);
    throw new p(
      'scene-layer-adapter:not-supported',
      'SceneLayer without associated FeatureLayer does not support predominantCategories',
    );
  }
  async getSampleFeatures(e, t) {
    if (e.filter) throw new p('scene-layer-adapter:not-supported', 'filter is not supported');
    const { view: a, sampleSize: r, requiredFields: i, returnGeometry: s, signal: o } = e,
      n = 1,
      l = t === 'json',
      u = this.createQuery();
    (u.outFields = i), (u.returnGeometry = !!s), (u.where = null), (u.num = r);
    let c = [];
    try {
      if (
        ((c = l
          ? await this._fetchFeaturesJSONFromMemory(a, u, i)
          : await this._fetchFeaturesFromMemory(a, u, i)),
        c.length && r != null && r > 0 && r <= c.length)
      )
        return D(c, r, n);
    } catch {
      q(o);
    }
    let m = null;
    if (this._featureLayerAdapter) {
      const d = { ...e };
      delete d.view, (m = await this._featureLayerAdapter.getSampleFeatures(d, t));
    }
    return m != null && m.length ? m : D(c, c.length, n);
  }
  load(e) {
    const t = this.layer.load(e).then(async (a) => {
      (this.workerClient = ae.getInstance()), await this.workerClient.open(e.signal);
      const r = a.associatedLayer;
      if (((this.geometryType = a.geometryType), r != null))
        return (
          (this._featureLayerAdapter = new T({ layer: r })),
          this._featureLayerAdapter.load(e).then(() => {
            (this.objectIdField = this._featureLayerAdapter.objectIdField),
              (this.supportsSQLExpression = this._featureLayerAdapter.supportsSQLExpression),
              (this.minScale = this._featureLayerAdapter.minScale),
              (this.maxScale = this._featureLayerAdapter.maxScale),
              (this.fullExtent = this._featureLayerAdapter.fullExtent);
          })
        );
      (this.objectIdField = a.objectIdField),
        (this.supportsSQLExpression = !1),
        (this.hasQueryEngine = !1),
        (this.fullExtent = a.fullExtent);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
};
function La(e, t = e.minimum, a = e.maximum, r) {
  const i = [];
  for (let u = 0; u < r; u++) i[u] = 0;
  const s = e.counts.length,
    o = e.minimum,
    n = e.maximum;
  for (let u = 0; u < s; u++) {
    const c = (u + 0.5) / s,
      m = (((1 - c) * o + c * n - t) / (a - t)) * r;
    m >= 0 && m <= r && (i[m === r ? r - 1 : Math.floor(m)] += e.counts[u]);
  }
  const l = [];
  return (
    i.forEach((u, c) => {
      const m = new ze({ attributes: {} });
      (m.attributes.EXPR_1 = c + 1), (m.attributes.countOFExpr = u), l.push(m);
    }),
    new Ve({ features: l })
  );
}
F([v({ readOnly: !0 })], Y.prototype, 'adapterName', void 0),
  F([v({ constructOnly: !0 })], Y.prototype, 'layer', void 0),
  (Y = F([M('esri.smartMapping.support.adapters.SceneLayerAdapter')], Y));
const ct = Y;
let oe = class extends ct {
  constructor(e) {
    super(e), (this.adapterName = 'point-cloud-layer-adapter');
  }
  getField(e) {
    return this.layer.fieldsIndex.get(e ?? '');
  }
  getFieldUsageInfo(e) {
    const t = this.getField(e);
    if (!t) return null;
    const a = this._hasCachedStatistics(t.name);
    return {
      supportsLabelingInfo: a,
      supportsPopupTemplate: a,
      supportsRenderer: a,
      supportsLayerQuery: !1,
      supportsStatistics: a,
    };
  }
  getFieldDomain() {
    return null;
  }
  load(e) {
    const t = this.layer.load(e).then(() => {
      (this.geometryType = 'point'),
        (this.objectIdField = null),
        (this.supportsSQLExpression = !1),
        (this.hasQueryEngine = !1);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
};
F([v({ readOnly: !0 })], oe.prototype, 'adapterName', void 0),
  (oe = F([M('esri.smartMapping.support.adapters.PointCloudLayerAdapter')], oe));
const za = oe;
let le = class extends Oe {
  constructor() {
    super(...arguments), (this.adapterName = 'stream-layer-adapter');
  }
  async _summaryStatsFromClientQuery(e, t) {
    var n;
    const { signal: a, view: r } = e,
      i = Ie(this, e, t);
    i.outStatistics =
      (n = i.outStatistics) == null
        ? void 0
        : n.filter((l) => l.outStatisticFieldName !== 'totalcount_value');
    const s = await this._fetchFeatureSetFromMemory(i, r, a),
      o = Ce(s, N(t) || C(t));
    return ce(o, e.outStatisticTypes);
  }
};
F([v({ readOnly: !0 })], le.prototype, 'adapterName', void 0),
  (le = F([M('esri.smartMapping.support.adapters.StreamLayerAdapter')], le));
const Ta = le;
var f;
(function (e) {
  (e[(e.CatalogLayer = 0)] = 'CatalogLayer'),
    (e[(e.CatalogFootprintLayer = 1)] = 'CatalogFootprintLayer'),
    (e[(e.CSVLayer = 2)] = 'CSVLayer'),
    (e[(e.FeatureLayer = 3)] = 'FeatureLayer'),
    (e[(e.GeoJSONLayer = 4)] = 'GeoJSONLayer'),
    (e[(e.KnowledgeGraphSublayer = 5)] = 'KnowledgeGraphSublayer'),
    (e[(e.OGCFeatureLayer = 6)] = 'OGCFeatureLayer'),
    (e[(e.OrientedImageryLayer = 7)] = 'OrientedImageryLayer'),
    (e[(e.ParquetLayer = 8)] = 'ParquetLayer'),
    (e[(e.PointCloudLayer = 9)] = 'PointCloudLayer'),
    (e[(e.SceneLayer = 10)] = 'SceneLayer'),
    (e[(e.StreamLayer = 11)] = 'StreamLayer'),
    (e[(e.SubtypeGroupLayer = 12)] = 'SubtypeGroupLayer'),
    (e[(e.SubtypeSublayer = 13)] = 'SubtypeSublayer'),
    (e[(e.WFSLayer = 14)] = 'WFSLayer');
})(f || (f = {}));
const qe = {
    [f.CatalogLayer]: { adapter: T, type: 'catalog', label: 'CatalogLayer' },
    [f.CatalogFootprintLayer]: {
      adapter: T,
      type: 'catalog-footprint',
      label: 'CatalogFootprintLayer',
    },
    [f.CSVLayer]: { adapter: qa, type: 'csv', label: 'CSVLayer' },
    [f.FeatureLayer]: { adapter: T, type: 'feature', label: 'FeatureLayer' },
    [f.GeoJSONLayer]: { adapter: T, type: 'geojson', label: 'GeoJSONLayer' },
    [f.KnowledgeGraphSublayer]: {
      adapter: T,
      type: 'knowledge-graph-sublayer',
      label: 'KnowledgeGraphSublayer',
    },
    [f.OGCFeatureLayer]: { adapter: Oe, type: 'ogc-feature', label: 'OGCFeatureLayer' },
    [f.OrientedImageryLayer]: {
      adapter: T,
      type: 'oriented-imagery',
      label: 'OrientedImageryLayer',
    },
    [f.ParquetLayer]: { adapter: T, type: 'parquet', label: 'ParquetLayer' },
    [f.PointCloudLayer]: { adapter: za, type: 'point-cloud', label: 'PointCloudLayer' },
    [f.SceneLayer]: { adapter: ct, type: 'scene', label: 'SceneLayer' },
    [f.StreamLayer]: { adapter: Ta, type: 'stream', label: 'StreamLayer' },
    [f.SubtypeGroupLayer]: { adapter: T, type: 'subtype-group', label: 'SubtypeGroupLayer' },
    [f.SubtypeSublayer]: { adapter: T, type: 'subtype-sublayer', label: 'SubtypeSublayer' },
    [f.WFSLayer]: { adapter: T, type: 'wfs', label: 'WFSLayer' },
  },
  Ae = [
    f.CatalogLayer,
    f.CatalogFootprintLayer,
    f.CSVLayer,
    f.FeatureLayer,
    f.GeoJSONLayer,
    f.KnowledgeGraphSublayer,
    f.OGCFeatureLayer,
    f.OrientedImageryLayer,
    f.ParquetLayer,
    f.PointCloudLayer,
    f.SceneLayer,
    f.StreamLayer,
    f.SubtypeGroupLayer,
    f.SubtypeSublayer,
    f.WFSLayer,
  ];
f.CatalogFootprintLayer,
  f.CSVLayer,
  f.FeatureLayer,
  f.GeoJSONLayer,
  f.KnowledgeGraphSublayer,
  f.OGCFeatureLayer,
  f.OrientedImageryLayer,
  f.ParquetLayer,
  f.SceneLayer,
  f.StreamLayer,
  f.SubtypeGroupLayer,
  f.SubtypeSublayer,
  f.WFSLayer;
const _a = [
  f.CSVLayer,
  f.FeatureLayer,
  f.GeoJSONLayer,
  f.OGCFeatureLayer,
  f.KnowledgeGraphSublayer,
  f.OrientedImageryLayer,
  f.ParquetLayer,
  f.StreamLayer,
  f.WFSLayer,
];
function ba(e) {
  return e.map((t) => qe[t].label);
}
function Ea(e, t = Ae, a) {
  if (e instanceof $e) return e;
  const r = $a(e, t);
  return r ? (a ? new Va({ layer: e }) : new r({ layer: e })) : null;
}
function $a(e, t = Ae) {
  let a = null;
  return (
    t.some((r) => {
      const i = e.type === qe[r].type;
      return i && (a = qe[r].adapter), i;
    }),
    a
  );
}
async function Ca(e) {
  if (!(e != null && e.layer) || (!e.field && !e.valueExpression))
    throw new p(
      'unique-values:missing-parameters',
      "'layer' and 'field' or 'valueExpression' parameters are required",
    );
  const t = e.valueExpression || e.sqlExpression,
    a = t && !e.sqlExpression;
  if (t) {
    if (a) {
      if (!e.view)
        throw new p(
          'unique-values:missing-parameters',
          "View is required when 'valueExpression' is specified",
        );
    } else if (!e.valueExpression)
      throw new p('unique-values:missing-parameters', "'valueExpression' parameters are required");
  }
  e.forBinning && Yt(e, 'unique-values');
  const { layer: r, ...i } = e,
    s = e.forBinning ? _a : Ae,
    o = Ea(r, s, e.forBinning);
  if (!o)
    throw new p(
      'unique-values:invalid-parameters',
      "'layer' must be one of these types: " + ba(s).join(', '),
    );
  const n = { layerAdapter: o, ...i },
    l = n.signal != null ? { signal: n.signal } : null;
  await o.load(l);
  const u = await B({
      field: n.field,
      field2: n.field2,
      field3: n.field3,
      valueExpression: n.valueExpression,
    }),
    c = It(o, u, 'unique-values:invalid-parameters');
  if (c) throw c;
  n.filter && !n.filter.spatialRelationship && (n.filter.spatialRelationship = 'intersects');
  const m = Ot(n.filter, 'summary-statistics:invalid-parameters');
  if (m) throw m;
  return n;
}
async function Ua(e) {
  const { layerAdapter: t, ...a } = await Ca(e);
  return t.uniqueValues(a);
}
export { Ua as default };
