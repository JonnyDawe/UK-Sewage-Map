import { eX as u, dz as f } from './index.lazy-BFilFZ3v.js';
function d(e, a) {
  var n, t, r, s;
  return !(
    !(
      (t = (n = e.basemap) == null ? void 0 : n.referenceLayers) != null &&
      t.some((l) => l.uid === a)
    ) &&
    !((s = (r = e.basemap) == null ? void 0 : r.baseLayers) != null && s.some((l) => l.uid === a))
  );
}
function R(e) {
  return !!(e != null && e.baseLayers.concat(e.referenceLayers).some(o));
}
function o(e) {
  if (i(e.url)) return !0;
  if (e.type === 'vector-tile')
    for (const a in e.sourceNameToSource) {
      const n = e.sourceNameToSource[a];
      if (i(n == null ? void 0 : n.sourceUrl)) return !0;
    }
  return !1;
}
function m(e, a) {
  var s;
  if (a == null || e == null) return { spatialReference: null, updating: !1 };
  if (a.loadStatus === 'not-loaded') return a.load(), { spatialReference: null, updating: !0 };
  if (a.spatialReference) return { spatialReference: a.spatialReference, updating: !1 };
  if (a.baseLayers.length === 0) return { spatialReference: null, updating: !1 };
  const n = a.baseLayers.at(0);
  switch (n.loadStatus) {
    case 'not-loaded':
      n.load();
    case 'loading':
      return { spatialReference: null, updating: !0 };
    case 'failed':
      return { spatialReference: null, updating: !1 };
  }
  const t = (
      ('supportedSpatialReferences' in n ? n.supportedSpatialReferences : null) || [
        'tileInfo' in n
          ? (s = n.tileInfo) == null
            ? void 0
            : s.spatialReference
          : n.spatialReference,
      ]
    ).filter(Boolean),
    r = e.spatialReference;
  return r
    ? { spatialReference: t.find((l) => r.equals(l)) ?? t[0] ?? null, updating: !1 }
    : { spatialReference: t[0], updating: !1 };
}
const c = /^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;
function i(e) {
  if (!e) return !1;
  const a = new u(f(e));
  return !!a.authority && c.test(a.authority);
}
export { o as b, d as c, m as d, R as m };
