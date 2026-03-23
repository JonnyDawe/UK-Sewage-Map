import {
  fZ as y,
  a8 as d,
  cA as l,
  G as S,
  cs as g,
  W as N,
  bk as D,
} from './index.lazy-BHTpPf8X.js';
import E from './Mesh-DyPbeJ-H.js';
import { i as M, a as F } from './External-CgGCgwxl.js';
import { n as T, i as b } from './meshFeatureAttributes-DaPlnEF2.js';
import './index-DqxZnyqH.js';
import './axisAngleDegrees-CyDyao6S.js';
import './quat-DoRHSg5X.js';
import './mat3f64-q3fE-ZOt.js';
import './quatf64-aQ5IuZRd.js';
import './MeshComponent-EHsts0H0.js';
import './meshProperties-C4iW0Ukm.js';
import './MeshLocalVertexSpace-cTk7IO-v.js';
import './MeshTransform-B6wPxgq-.js';
import './mat4f64-Dk4dwAN8.js';
import './MeshVertexAttributes-DQWxSiHS.js';
import './meshVertexSpaceUtils-BhxP4Ndr.js';
import './triangulationUtils-rZ1X1HtS.js';
import './earcut-D9gy186-.js';
import './Indices-CNwiYcS5.js';
import './plane-BJrN7SUI.js';
import './deduplicate-CegCCvIa.js';
import './projectPointToVector-BJ7KR9p7.js';
import './vertexSpaceConversion-VNZxL1Ci.js';
import './spatialReferenceEllipsoidUtils-Dh_5G9X2.js';
import './computeTranslationToOriginAndRotation-DHcz8NsR.js';
import './vec3-DUd4WD2P.js';
import './BufferView-vfJHrNws.js';
import './vec4-CM3JMZiB.js';
const w = () => d.getLogger('esri.rest.support.meshFeatureSet');
function at(t, o, e) {
  const r = e.features;
  (e.features = []), delete e.geometryType;
  const s = g.fromJSON(e);
  if (((s.geometryType = 'mesh'), !e.assetMaps)) return s;
  const n = O(o, e.assetMaps),
    i = t.sourceSpatialReference ?? N.WGS84,
    m = e.globalIdFieldName,
    { outFields: a } = t,
    c = a != null && a.length > 0 ? I(a.includes('*') ? null : new Set(a)) : () => ({});
  for (const u of r) {
    const p = L(u, m, i, o, n);
    s.features.push(new D({ geometry: p, attributes: c(u) }));
  }
  return s;
}
function I(t) {
  return ({ attributes: o }) => {
    if (!o) return {};
    if (!t) return o;
    for (const e in o) t.has(e) || delete o[e];
    return o;
  };
}
function L(t, o, e, r, s) {
  const n = t.attributes[o],
    i = s.get(n);
  if (i == null || !t.geometry) return null;
  const m = T(t.attributes, e, r.transformFieldRoles),
    a = S.fromJSON(t.geometry);
  a.spatialReference = e;
  const c = b(t.attributes, r.transformFieldRoles),
    u = e.isGeographic ? 'local' : 'georeferenced',
    p = P(i);
  return p
    ? E.createWithExternalSource(m, p, {
        extent: a,
        transform: c,
        vertexSpace: u,
        unitConversionDisabled: !0,
      })
    : E.createIncomplete(m, { extent: a, transform: c, vertexSpace: u });
}
var f;
function O(t, o) {
  const e = new Map();
  for (const r of o) {
    const s = r.parentGlobalId;
    if (s == null) continue;
    const n = r.assetName,
      i = r.assetType,
      m = r.assetHash,
      a = r.assetURL,
      c = r.conversionStatus,
      u = r.seqNo,
      p = y(i, t.supportedFormats);
    if (!p) {
      w().error(
        'mesh-feature-set:unknown-format',
        `Service returned an asset of type ${i}, but it does not list it as a supported type`,
      );
      continue;
    }
    const h = l(e, s, () => ({ files: new Map() }));
    l(h.files, n, () => ({ name: n, type: i, mimeType: p, status: A(c), parts: [] })).parts[u] = {
      hash: m,
      url: a,
    };
  }
  return e;
}
function P(t) {
  const o = Array.from(t.files.values()),
    e = new Array();
  for (const r of o) {
    if (r.status !== f.COMPLETED) return null;
    const s = new Array();
    for (const n of r.parts) {
      if (!n) return null;
      s.push(new M(n.url, n.hash));
    }
    e.push(new F(r.name, r.mimeType, s));
  }
  return e;
}
function A(t) {
  switch (t) {
    case 'COMPLETED':
    case 'SUBMITTED':
      return f.COMPLETED;
    case 'INPROGRESS':
      return f.PENDING;
    default:
      return f.FAILED;
  }
}
(function (t) {
  (t[(t.FAILED = 0)] = 'FAILED'),
    (t[(t.PENDING = 1)] = 'PENDING'),
    (t[(t.COMPLETED = 2)] = 'COMPLETED');
})(f || (f = {}));
export { O as assetMapFromAssetMapsJSON, L as extractMesh, at as meshFeatureSetFromJSON };
