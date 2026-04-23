import { a7 as v, bO as m, bP as y, aY as h } from './index.lazy-BFilFZ3v.js';
import { s as M } from './associatedFeatureServiceUtils-DP8DQfqy.js';
import { i as T } from './fetchService-BQV0514J.js';
import { l as p, u as d, a as C, s as P, i as G, o as b, e as F } from './loadUtils-CT2ZBLlH.js';
import { a as K } from './lazyLayerLoader-Ca0N3MNm.js';
import './index-DShQM7Xx.js';
async function oe(e) {
  let { portalItem: a } = e;
  !a || a instanceof h || (a = new h(a));
  const r = await W(a);
  return new r.constructor({ portalItem: a, ...r.properties });
}
async function W(e) {
  await e.load();
  const a = new F();
  return O(await j(e, a));
}
async function j(e, a) {
  switch (e.type) {
    case '3DTiles Service':
      return e.typeKeywords.includes('3DObject') ? E() : R();
    case 'CSV':
      return Y();
    case 'Feature Collection':
      return k(e);
    case 'Feature Service':
      return V(e, a);
    case 'Feed':
      return Z();
    case 'GeoJson':
      return A();
    case 'Group Layer':
      return _();
    case 'Image Service':
      return x(e, a);
    case 'KML':
      return q();
    case 'Knowledge Graph Layer':
      return z();
    case 'Map Service':
      return D(e, a);
    case 'Media Layer':
      return ee();
    case 'Scene Service':
      return J(e, a);
    case 'Stream Service':
      return $();
    case 'Vector Tile Service':
      return U();
    case 'WCS':
      return B();
    case 'WFS':
      return H();
    case 'WMS':
      return Q();
    case 'WMTS':
      return X();
    default:
      throw new v('portal:unknown-item-type', "Unknown item type '${type}'", { type: e.type });
  }
}
async function O(e) {
  const a = e.className,
    r = K[a];
  return { constructor: await r(), properties: e.properties };
}
async function D(e, a) {
  return (await ae(e, a)) ? { className: 'TileLayer' } : { className: 'MapImageLayer' };
}
async function V(e, a) {
  const r = await I(e, a);
  if (typeof r == 'object') {
    const { sourceJSON: s, className: n } = r,
      t = { sourceJSON: s };
    return r.id != null && (t.layerId = r.id), { className: n || 'FeatureLayer', properties: t };
  }
  return { className: 'GroupLayer' };
}
async function J(e, a) {
  var s;
  const r = await I(e, a, async () => {
    try {
      if (!e.url) return [];
      const { serverUrl: n } = await M(e.url, { sceneLayerItem: e }),
        t = await a.fetchServiceMetadata(n);
      return (t == null ? void 0 : t.tables) ?? [];
    } catch {
      return [];
    }
  });
  if (typeof r == 'object') {
    const n = {};
    let t;
    if (
      (r.id != null ? ((n.layerId = r.id), (t = `${e.url}/layers/${r.id}`)) : (t = e.url),
      (s = e.typeKeywords) == null ? void 0 : s.length)
    ) {
      for (const o of Object.keys(m)) if (e.typeKeywords.includes(o)) return { className: m[o] };
    }
    const c = await a.fetchServiceMetadata(t, {
      customParameters: await a.fetchCustomParameters(e, (o) => {
        var i;
        return (i = p(o)) == null ? void 0 : i.customParameters;
      }),
    });
    return { className: m[c == null ? void 0 : c.layerType] || 'SceneLayer', properties: n };
  }
  if (r === !1) {
    const n = await a.fetchServiceMetadata(e.url);
    if ((n == null ? void 0 : n.layerType) === 'Voxel') return { className: 'VoxelLayer' };
  }
  return { className: 'GroupLayer' };
}
async function k(e) {
  await e.load();
  const a = y(e, 'Map Notes'),
    r = y(e, 'Markup');
  if (a || r) return { className: 'MapNotesLayer' };
  if (y(e, 'Route Layer')) return { className: 'RouteLayer' };
  const s = await e.fetchData();
  return d(s) === 1 ? { className: 'FeatureLayer' } : { className: 'GroupLayer' };
}
async function x(e, a) {
  var u, w, L, N, S;
  await e.load();
  const r = ((u = e.typeKeywords) == null ? void 0 : u.map((g) => g.toLowerCase())) ?? [];
  if (r.includes('elevation 3d layer')) return { className: 'ElevationLayer' };
  if (r.includes('tiled imagery')) return { className: 'ImageryTileLayer' };
  const s = await a.fetchItemData(e),
    n = s == null ? void 0 : s.layerType;
  if (n === 'ArcGISTiledImageServiceLayer') return { className: 'ImageryTileLayer' };
  if (n === 'ArcGISImageServiceLayer') return { className: 'ImageryLayer' };
  const t = await a.fetchServiceMetadata(e.url, {
      customParameters: await a.fetchCustomParameters(e),
    }),
    c = (w = t.cacheType) == null ? void 0 : w.toLowerCase(),
    o = (L = t.capabilities) == null ? void 0 : L.toLowerCase().includes('tilesonly'),
    i =
      ((S = (N = t.tileInfo) == null ? void 0 : N.format) == null ? void 0 : S.toLowerCase()) ?? '',
    l = c == null && ['jpg', 'jpeg', 'png', 'png8', 'png24', 'png32', 'mixed'].includes(i);
  return c === 'map' || l || o ? { className: 'ImageryTileLayer' } : { className: 'ImageryLayer' };
}
function $() {
  return { className: 'StreamLayer' };
}
function U() {
  return { className: 'VectorTileLayer' };
}
function A() {
  return { className: 'GeoJSONLayer' };
}
function R() {
  return { className: 'IntegratedMesh3DTilesLayer' };
}
function E() {
  return { className: 'UnsupportedLayer' };
}
function Y() {
  return { className: 'CSVLayer' };
}
function q() {
  return { className: 'KMLLayer' };
}
function z() {
  return { className: 'KnowledgeGraphLayer' };
}
function B() {
  return { className: 'WCSLayer' };
}
function H() {
  return { className: 'WFSLayer' };
}
function Q() {
  return { className: 'WMSLayer' };
}
function X() {
  return { className: 'WMTSLayer' };
}
function Z() {
  return { className: 'StreamLayer' };
}
function _() {
  return { className: 'GroupLayer' };
}
function ee() {
  return { className: 'MediaLayer' };
}
async function ae(e, a) {
  const { tileInfo: r } = await a.fetchServiceMetadata(e.url, {
    customParameters: await a.fetchCustomParameters(e),
  });
  return r;
}
async function I(e, a, r) {
  const { url: s, type: n } = e,
    t = n === 'Feature Service';
  if (!s) return {};
  if (/\/\d+$/.test(s)) {
    if (t) {
      const i = await a.fetchServiceMetadata(s, {
        customParameters: await a.fetchCustomParameters(e, (l) => {
          var u;
          return (u = p(l)) == null ? void 0 : u.customParameters;
        }),
      });
      return { id: i.id, className: T(i.type), sourceJSON: i };
    }
    return {};
  }
  await e.load();
  let c = await a.fetchItemData(e);
  if (t) {
    const i = await C(c, s, a),
      l = f(i);
    if (typeof l == 'object') {
      const u = P(i, l.id);
      l.className = G(u == null ? void 0 : u.layerType);
    }
    return l;
  }
  if ((n === 'Scene Service' && (c = await b(e, c, a)), d(c) > 0)) return f(c);
  const o = await a.fetchServiceMetadata(s);
  return r && (o.tables = await r()), f(o);
}
function f(e) {
  var a;
  return d(e) === 1 && { id: (a = p(e)) == null ? void 0 : a.id };
}
export { oe as fromItem, j as selectLayerClassPath };
