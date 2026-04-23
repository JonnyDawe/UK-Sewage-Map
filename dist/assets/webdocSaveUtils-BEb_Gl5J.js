const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/geometryServiceUtils-BZQ8p6Al.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
    ]),
) => i.map((i) => d[i]);
import { _ as B } from './index-DShQM7Xx.js';
import {
  eK as U,
  eL as K,
  eM as w,
  a7 as m,
  bs as F,
  aY as H,
  aZ as J,
  eN as i,
  eO as y,
  eP as c,
  eQ as z,
  dG as q,
  eR as Q,
  eS as Y,
  W as Z,
  eT as X,
  bP as d,
  eU as I,
  eV as $,
  eW as ee,
} from './index.lazy-BFilFZ3v.js';
import { i as ae } from './originUtils-D69mHv66.js';
import { m as te, b as oe, d as re } from './basemapUtils-9I4LGvIi.js';
import { p as A } from './resourceUtils-Dmo_NMux.js';
import { r as P, t as T } from './saveUtils-BoTSfpwK.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './resourceUtils-BQ_80v0v.js';
const ne = [
  'NatGeo_World_Map',
  'Ocean_Basemap',
  'USA_Topo_Maps',
  'World_Imagery',
  'World_Street_Map',
  'World_Terrain_Base',
  'World_Topo_Map',
  'World_Hillshade',
  'Canvas/World_Light_Gray_Base',
  'Canvas/World_Light_Gray_Reference',
  'Canvas/World_Dark_Gray_Base',
  'Canvas/World_Dark_Gray_Reference',
  'Ocean/World_Ocean_Base',
  'Ocean/World_Ocean_Reference',
  'Reference/World_Boundaries_and_Places',
  'Reference/World_Reference_Overlay',
  'Reference/World_Transportation',
].map((a) => a.toLowerCase());
async function je(a, e, t) {
  t ?? (t = {}),
    ie(a, e),
    await w(() => !e.updatingFromView),
    await e.load(),
    await E(e),
    await P(e),
    await C(a, e);
  const o = e.portalItem,
    { json: r, jsonContext: n } = await O(e, o, a.origin);
  return (
    T(n, { errorName: `${a.name}:save` }, t),
    await V(e, o),
    await Oe(a, e, o, r, n),
    await Promise.all([e.updateItemThumbnail(), A(e.resourceReferences, n)]),
    o
  );
}
async function O(a, e, t) {
  const o = U(e, t, !0),
    r = a.write({}, o);
  return await Promise.all(o.resources.pendingOperations), { json: r, jsonContext: o };
}
async function Be(a, e, t, o) {
  o ?? (o = {});
  const r = se(a, t);
  await w(() => !e.updatingFromView), await e.load(), await E(e), await P(e), await C(a, e);
  const { json: n, jsonContext: s } = await O(e, r, a.origin);
  T(s, { errorName: `${a.name}:save` }, o), await ue(e, r);
  const l = e.getThumbnailState();
  return (
    (await Se(a, e, r, n, s, o)) && (e.resourceReferences.portalItem = r),
    e.restoreThumbnailFromState(l),
    await Promise.all([e.updateItemThumbnail(), A(e.resourceReferences, s)]),
    r
  );
}
function ie(a, e) {
  if (!e.portalItem)
    throw new m(
      `${a.name}:portal-item-not-set`,
      'Portal item to save to has not been set on the WebMap',
    );
  S(a, e.portalItem);
}
function S(a, e) {
  if (e.type !== a.itemType)
    throw new m(
      `${a.name}:portal-item-wrong-type`,
      `Portal item needs to have type "${a.itemType}"`,
    );
}
async function C(a, e) {
  var o;
  if (a.name === 'linkchart') return;
  if (!((o = e.basemap) != null && o.baseLayers.length))
    throw new m(`${a.name}:save`, 'Map does not have a valid basemap with a base layer.');
  let t = null;
  if (
    (await w(() => {
      const r = re(e.initialViewProperties, e.basemap);
      return (t = r.spatialReference), !r.updating;
    }),
    !F(t, e.initialViewProperties.spatialReference))
  )
    throw new m(
      `${a.name}:save`,
      'The spatial reference of the basemap is not compatible with the one from the map.',
      { expected: e.initialViewProperties.spatialReference, actual: t },
    );
}
function se(a, e) {
  let t = H.from(e);
  return (
    t.id && ((t = t.clone()), (t.id = null)),
    t.type || (t.type = a.itemType),
    t.portal || (t.portal = J.getDefault()),
    S(a, t),
    t
  );
}
function E(a) {
  const e = [];
  return (
    a.basemap && e.push(a.basemap.load()),
    a.ground && e.push(a.ground.load()),
    Promise.allSettled(e).then(() => {})
  );
}
async function V(a, e) {
  (e.extent = await Re(a.portalItem, a.initialViewProperties.viewpoint.targetGeometry)),
    await de(a, e);
}
const le = y.JSAPI,
  D = 'CollectorDisabled',
  _ = 'Collector',
  g = 'Data Editing',
  M = 'OfflineDisabled',
  b = 'Offline',
  L = 'Workforce Project',
  k = 'Workforce Worker',
  G = 'Workforce Dispatcher',
  ce = 'Offline Map Areas',
  pe = 'FieldMapsDisabled',
  R = y.DEVELOPER_BASEMAP,
  v = 'UtilityNetwork',
  W = 'IPS';
async function ue(a, e) {
  i(e, D), i(e, pe), i(e, y.METADATA), i(e, M), i(e, ce), i(e, G), i(e, L), i(e, k), await V(a, e);
}
async function de(a, e) {
  c(e, le),
    await me(a),
    we(a, e),
    ye(a, e),
    he(a, e),
    _e(a, e),
    ge(a, e),
    be(a, e),
    e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((t, o, r) => r.indexOf(t) === o));
}
function me(a) {
  const e = h(a)
    .map((t) => t.load())
    .toArray();
  return Promise.allSettled(e).then(() => {});
}
function h(a) {
  return a.allLayers.concat(a.allTables);
}
function N(a) {
  return h(a).some(
    (e) =>
      e.loaded &&
      I(e) &&
      e.capabilities.operations.supportsEditing &&
      e.editingEnabled &&
      (e.type !== 'subtype-group' || e.sublayers.some((t) => t.editingEnabled)),
  );
}
function fe(a) {
  return h(a)
    .filter((e) => e.type !== 'group')
    .every((e) => e.loaded && Ie(a, e));
}
function we(a, e) {
  d(e, D) || d(e, L) || d(e, k) || d(e, G) || !N(a) ? i(e, _) : c(e, _);
}
function ye(a, e) {
  N(a) ? c(e, g) : i(e, g);
}
function he(a, e) {
  !d(e, M) && fe(a) ? c(e, b) : i(e, b);
}
function _e(a, e) {
  te(a.basemap) ? c(e, R) : i(e, R);
}
function ge(a, e) {
  var t;
  (t = a.utilityNetworks) != null && t.length ? c(e, v) : i(e, v);
}
function be(a, e) {
  a.ipsInfo ? c(e, W) : i(e, W);
}
async function Re(a, e) {
  const t = e.clone().normalize();
  let o;
  if (t.length > 1) for (const r of t) o ? r.width > o.width && (o = r) : (o = r);
  else o = t[0];
  return ve(a, o);
}
async function ve(a, e) {
  const t = e.spatialReference;
  if (t.isWGS84) return e.clone();
  if (t.isWebMercator) return Q(e);
  const { getGeometryServiceURL: o } = await B(
      () => import('./geometryServiceUtils-BZQ8p6Al.js'),
      __vite__mapDeps([0, 1, 2, 3, 4]),
    ),
    r = await o(a),
    n = new Y({ geometries: [e], outSpatialReference: Z.WGS84 });
  return (await X(r, n))[0];
}
function We(a) {
  return $(a) || a.type === 'map-notes' || a.type === 'route';
}
function Ie(a, e) {
  return (
    (I(e) && e.capabilities.operations.supportsSync) ||
    (We(e) && !e.portalItem) ||
    (Ae(e) && !Pe(e) && e.spatialReference.equals(a.initialViewProperties.spatialReference))
  );
}
function Ae(a) {
  return (
    (a.type === 'tile' || a.type === 'vector-tile') &&
    (a.capabilities.operations.supportsExportTiles || Te(a) || oe(a))
  );
}
function Pe(a) {
  return a.type === 'vector-tile' && Object.keys(a.sourceNameToSource).length > 1;
}
function Te(a) {
  return (
    a.type === 'tile' &&
    ee(a.url) &&
    ne.some((e) => {
      var t;
      return (t = a.url) == null ? void 0 : t.toLowerCase().includes('/' + e + '/');
    })
  );
}
async function Oe(a, e, t, o, r) {
  await t.update({ data: o }), x(a, e, t, o, r);
}
async function Se(a, e, t, o, r, n) {
  const s = e.portalItem,
    l = { item: s, authenticated: !(!(s != null && s.id) || !s.portal.user) },
    p = t.portal;
  await p.signIn();
  const { copyAllowed: u, itemReloaded: f } = await Ce(l, p);
  if ((l.authenticated || (l.authenticated = f), !u))
    throw new m(
      `${a.name}:save-as-copy-not-allowed`,
      'Owner of this map does not allow others to save a copy',
    );
  const j = await Ee(t, l, o, n);
  return (e.portalItem = t), x(a, e, t, o, r), j;
}
async function Ce(a, e) {
  var r;
  const { item: t, authenticated: o } = a;
  return t != null && t.id && (r = t.typeKeywords) != null && r.includes('useOnly')
    ? t.portal.portalHostname !== e.portalHostname
      ? { copyAllowed: !1, itemReloaded: !1 }
      : (o || (await t.reload()),
        { copyAllowed: t.itemControl === 'admin' || t.itemControl === 'update', itemReloaded: !0 })
    : { copyAllowed: !0, itemReloaded: !1 };
}
async function Ee(a, e, t, o) {
  const r = a.portal,
    { item: n } = e,
    { folder: s, copyAllResources: l } = o;
  let p = !1;
  if (
    l &&
    n != null &&
    n.id &&
    K(n.portal.url, r.url) &&
    parseInt(n.portal.currentVersion, 10) >= 2023
  ) {
    const { total: u } = await n.fetchResources();
    p = !!u;
  }
  if (p) {
    const u = await n.copy({ copyResources: 'all', folder: s });
    (a.id = u.id), (a.portal = u.portal);
    const f = a.toJSON();
    await a.load(), a.read(f), await a.update({ data: t });
  } else await r.user.addItem({ item: a, folder: s, data: t });
  return p;
}
function x(a, e, t, o, r) {
  z.prototype.read.call(
    e,
    {
      version: o.version,
      authoringApp: o.authoringApp,
      authoringAppVersion: o.authoringAppVersion,
    },
    { origin: a.origin, ignoreDefaults: !0, url: t.itemUrl ? q(t.itemUrl) : void 0 },
  ),
    ae(r),
    (e.resourceInfo = o);
}
export { O as createJSON, Ee as initializeNewItem, Ce as isCopyAllowed, je as save, Be as saveAs };
