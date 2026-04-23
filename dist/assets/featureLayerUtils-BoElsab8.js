const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/CatalogLayer-D9G9U0kc.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-Bz5HPDxq.css',
      'assets/utils-V_r4ZCew.js',
      'assets/ClassBreaksDefinition-BrSl-9Bg.js',
      'assets/FeatureLayerSource-DxGZuImO.js',
      'assets/MeshLocalVertexSpace-7O0-32Cx.js',
      'assets/meshVertexSpaceUtils-Dx1K8Ka4.js',
      'assets/External-DqFhi187.js',
      'assets/MeshTransform-CL1w8m2X.js',
      'assets/mat4f64-Dk4dwAN8.js',
      'assets/quat-DOUEtkz6.js',
      'assets/mat3f64-q3fE-ZOt.js',
      'assets/quatf64-aQ5IuZRd.js',
      'assets/axisAngleDegrees-C8h4I4TV.js',
      'assets/editingSupport-CzYSD5MK.js',
      'assets/QueryTask-DCcZ9lCh.js',
      'assets/executeForIds-BZ7PtCi1.js',
      'assets/featureConversionUtils-GdT3zBJg.js',
      'assets/OrientedImageryLayer-_3ILYYiV.js',
    ]),
) => i.map((i) => d[i]);
import { _ as I } from './index-DShQM7Xx.js';
import {
  aX as m,
  bI as k,
  fm as O,
  a7 as u,
  eK as B,
  fn as f,
  eN as V,
  eO as y,
  aU as z,
  fo as j,
  eU as X,
} from './index.lazy-BFilFZ3v.js';
import { i as w } from './originUtils-D69mHv66.js';
import {
  P as q,
  w as N,
  d as H,
  v as Q,
  $ as W,
  p as x,
  f as Z,
  I as g,
  m as L,
} from './utils-CWFwb689.js';
import { t as aa, i as ea } from './fetchService-BQV0514J.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './saveUtils-BoTSfpwK.js';
const v = 'Feature Service',
  T = 'feature-layer-utils',
  ta = `${T}-save`,
  ra = `${T}-save-as`,
  p = `${T}-saveall`,
  d = `${T}-saveall-as`;
function $(a) {
  return {
    isValid: X(a) && (!('dynamicDataSource' in a) || !a.dynamicDataSource),
    errorMessage: 'Feature layer should be a layer or table in a map or feature service',
  };
}
function b(a, e) {
  const t = B(a, 'portal-item');
  return e != null && e.isTable && (t.layerContainerType = 'tables'), t;
}
function R(a) {
  const e = b(a),
    t = b(a);
  return (t.layerContainerType = 'tables'), { forLayers: e, forTables: t };
}
function U(a) {
  const e = [],
    t = [];
  for (const { layer: r, layerJSON: o } of a) r.isTable ? t.push(o) : e.push(o);
  return { layers: e, tables: t };
}
function D(a) {
  return U([a]);
}
async function J(a, e) {
  return /\/\d+\/?$/.test(a.url) ? D(e[0]) : G(e, a);
}
async function G(a, e) {
  if ((a.reverse(), !e)) return U(a);
  const t = await sa(e, a);
  for (const r of a) F(r.layer, r.layerJSON, t);
  return la(t, a), t;
}
async function sa(a, e) {
  let t = await a.fetchData('json');
  if (na(t)) return t;
  t || (t = {}), oa(t);
  const {
    layer: { url: r, customParameters: o, apiKey: s },
  } = e[0];
  return (
    await ia(
      t,
      { url: r ?? '', customParameters: o, apiKey: s },
      e.map((n) => n.layer.layerId),
    ),
    t
  );
}
function na(a) {
  return !!(a && Array.isArray(a.layers) && Array.isArray(a.tables));
}
function oa(a) {
  a.layers || (a.layers = []), a.tables || (a.tables = []);
}
function la(a, e) {
  const t = [],
    r = [];
  for (const { layer: o } of e) {
    const { isTable: s, layerId: n } = o;
    s ? r.push(n) : t.push(n);
  }
  E(a.layers, t), E(a.tables, r);
}
function E(a, e) {
  if (a.length < 2) return;
  const t = [];
  for (const { id: r } of a) t.push(r);
  z(t.sort(S), e.slice().sort(S)) &&
    a.sort((r, o) => {
      const s = e.indexOf(r.id),
        n = e.indexOf(o.id);
      return s < n ? -1 : s > n ? 1 : 0;
    });
}
function S(a, e) {
  return a < e ? -1 : a > e ? 1 : 0;
}
async function ia(a, e, t) {
  const { url: r, customParameters: o, apiKey: s } = e,
    { serviceJSON: n, layersJSON: l } = await aa(r, { customParameters: o, apiKey: s }),
    i = _(a.layers, n.layers, t),
    c = _(a.tables, n.tables, t);
  (a.layers = i.itemResources), (a.tables = c.itemResources);
  const h = [...i.added, ...c.added],
    K = l ? [...l.layers, ...l.tables] : [];
  await ca(a, h, r, K);
}
function _(a, e, t) {
  const r = j(a, e, (s, n) => s.id === n.id);
  a = a.filter((s) => !r.removed.some((n) => n.id === s.id));
  const o = r.added;
  return (
    o.forEach(({ id: s }) => {
      a.push({ id: s });
    }),
    { itemResources: a, added: o.filter(({ id: s }) => !t.includes(s)) }
  );
}
async function ca(a, e, t, r) {
  const o = await ua(e),
    s = e.map(
      ({ id: n, type: l }) =>
        new (o.get(l))({ url: t, layerId: n, sourceJSON: r.find(({ id: i }) => i === n) }),
    );
  await Promise.allSettled(s.map((n) => n.load())),
    s.forEach((n) => {
      const { layerId: l, loaded: i, defaultPopupTemplate: c } = n;
      if (!i || c == null) return;
      const h = { id: l, popupInfo: c.toJSON() };
      n.operationalLayerType !== 'ArcGISFeatureLayer' && (h.layerType = n.operationalLayerType),
        F(n, h, a);
    });
}
async function ua(a) {
  const e = [];
  a.forEach(({ type: o }) => {
    switch (ea(o)) {
      case 'CatalogLayer':
        e.push(
          I(
            () => import('./CatalogLayer-D9G9U0kc.js'),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            ]),
          ).then((s) => s.default),
        );
        break;
      case 'FeatureLayer':
        e.push(
          I(
            () => import('./index.lazy-BFilFZ3v.js').then((s) => s.wa),
            __vite__mapDeps([3, 1, 2, 4]),
          ).then((s) => s.default),
        );
        break;
      case 'OrientedImageryLayer':
        e.push(
          I(
            () => import('./OrientedImageryLayer-_3ILYYiV.js'),
            __vite__mapDeps([21, 3, 1, 2, 4]),
          ).then((s) => s.default),
        );
    }
  });
  const t = await Promise.all(e),
    r = new Map();
  return (
    a.forEach(({ type: o }, s) => {
      r.set(o, t[s]);
    }),
    r
  );
}
function F(a, e, t) {
  a.isTable ? A(t.tables, e) : A(t.layers, e);
}
function A(a, e) {
  const t = a.findIndex(({ id: r }) => r === e.id);
  t === -1 ? a.push(e) : (a[t] = e);
}
function M(a, e) {
  if (!a.length)
    throw new u(
      `${e}:missing-parameters`,
      "'layers' array should contain at least one feature layer",
    );
}
function ya(a, e) {
  const t = a.map((r) => r.portalItem.id);
  if (new Set(t).size > 1)
    throw new u(
      `${e}:invalid-parameters`,
      "All layers in the 'layers' array should be loaded from the same portal item",
    );
}
function Y(a, e) {
  const t = a.map((r) => r.layerId);
  if (new Set(t).size !== t.length)
    throw new u(
      `${e}:invalid-parameters`,
      "'layers' array should contain only one instance each of layer or table in a feature service",
    );
}
async function fa(a) {
  M(a, p), await Promise.all(a.map((e) => e.load()));
  for (const e of a) x(e, p, $), Z({ layer: e, itemType: v, errorNamePrefix: p });
  ya(a, p), Y(a, p);
}
function P(a, e) {
  let t = 0,
    r = 0,
    o = 0;
  for (const { layerType: s } of [...e.layers, ...e.tables])
    switch (s) {
      case 'OrientedImageryLayer':
        t++;
        break;
      case 'SubtypeGroupLayer':
        r++;
        break;
      case 'SubtypeGroupTable':
        o++;
    }
  f(a, y.ORIENTED_IMAGERY_LAYER, t > 0),
    f(a, y.SUBTYPE_GROUP_LAYER, r > 0),
    f(a, y.SUBTYPE_GROUP_TABLE, o > 0);
}
function C(a, e, t) {
  V(e, y.METADATA),
    f(e, y.MULTI_LAYER, a.length > 1),
    f(e, y.SINGLE_LAYER, a.length === 1),
    f(e, y.TABLE, t.tables.length > 0 && t.layers.length === 0),
    P(e, t);
}
async function pa(a, e, t) {
  P(e, t);
}
async function da(a, e, t) {
  const { url: r, layerId: o, title: s, fullExtent: n, isTable: l } = a,
    i = m(r);
  (e.url = ((i == null ? void 0 : i.serverType) === 'FeatureServer' ? r : `${r}/${o}`) ?? null),
    e.title || (e.title = s),
    (e.extent = null),
    l || n == null || (e.extent = await O(n)),
    C([a], e, t);
}
function ma(a, e) {
  for (const s of a) {
    const n = s.parsedUrl.path,
      l = m(n);
    if (!(l == null ? void 0 : l.url.path))
      throw new u(`${e}:invalid-parameters`, L(s, `has unsupported url pattern: ${n}`), {
        layer: s,
      });
    const c = l == null ? void 0 : l.serverType;
    if (c !== 'FeatureServer' && c !== 'MapServer')
      throw new u(`${e}:invalid-parameters`, L(s, `has unsupported server type: ${c}`), {
        layer: s,
      });
    if (c === 'MapServer' && a.length > 1)
      throw new u(
        `${e}:invalid-parameters`,
        'Only one layer or table in a map service can be saved',
      );
  }
  const t = m(a[0].parsedUrl.path),
    r = t == null ? void 0 : t.url.path;
  if (
    !a.every((s) => {
      const n = m(s.parsedUrl.path);
      return (n == null ? void 0 : n.url.path) === r;
    })
  )
    throw new u(
      `${e}:invalid-parameters`,
      "'layers' array should only contain layers or tables that belong to the same feature service",
    );
}
async function ha(a) {
  M(a, d), await Promise.all(a.map((e) => e.load()));
  for (const e of a) x(e, d, $);
  ma(a, d), Y(a, d);
}
function wa(a, e) {
  P(a, e), g(a);
}
async function ba(a, e, t) {
  let r = 0;
  for (const { isTable: n } of a) n || r++;
  const o = a[0].parsedUrl.path,
    s = m(o);
  if (
    ((e.url = (s == null ? void 0 : s.serverType) === 'FeatureServer' ? s.url.path : o),
    e.title || (e.title = s.title),
    (e.extent = null),
    r > 0)
  ) {
    const n = a
      .map((l) => l.fullExtent)
      .filter(k)
      .reduce((l, i) => l.clone().union(i));
    n && (e.extent = await O(n));
  }
  C(a, e, t), g(e);
}
async function Sa(a, e) {
  return q(
    {
      layer: a,
      itemType: v,
      validateLayer: $,
      createJSONContext: (t) => b(t, a),
      createItemData: (t, r) => J(r, [t]),
      errorNamePrefix: ta,
      setItemProperties: pa,
    },
    e,
  );
}
async function _a(a, e) {
  await fa(a);
  const t = a[0].portalItem,
    r = R(t),
    o = await Promise.all(a.map((n) => N(n, n.isTable ? r.forTables : r.forLayers, e))),
    s = await J(
      t,
      a.map((n, l) => ({ layer: n, layerJSON: o[l] })),
    );
  return (
    wa(t, s),
    await t.update({ data: s }),
    await Promise.all(a.slice(1).map((n) => n.portalItem.reload())),
    w(r.forLayers),
    w(r.forTables),
    t.clone()
  );
}
async function Aa(a, e, t) {
  return W(
    {
      layer: a,
      itemType: v,
      validateLayer: $,
      createJSONContext: (r) => b(r, a),
      createItemData: (r, o) => Promise.resolve(D(r)),
      errorNamePrefix: ra,
      newItem: e,
      setItemProperties: da,
    },
    t,
  );
}
async function Oa(a, e, t) {
  await ha(a);
  const r = H({ itemType: v, errorNamePrefix: d, newItem: e }),
    o = R(r),
    s = await Promise.all(a.map((l) => N(l, l.isTable ? o.forTables : o.forLayers, t))),
    n = await G(a.map((l, i) => ({ layer: l, layerJSON: s[i] })));
  await ba(a, r, n), await Q(r, n, t);
  for (const l of a) l.portalItem = r.clone();
  return w(o.forLayers), w(o.forTables), r;
}
export { Sa as save, _a as saveAll, Oa as saveAllAs, Aa as saveAs };
