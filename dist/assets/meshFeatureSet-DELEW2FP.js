import {
  fZ as y,
  a8 as d,
  cA as l,
  G as S,
  cs as g,
  W as N,
  bk as D,
} from './index.lazy-BFilFZ3v.js';
import E from './Mesh-CzU_h_ry.js';
import { i as M, a as F } from './External-DqFhi187.js';
import { n as T, i as b } from './meshFeatureAttributes-BWSHvMZ7.js';
import './index-DShQM7Xx.js';
import './axisAngleDegrees-C8h4I4TV.js';
import './quat-DOUEtkz6.js';
import './mat3f64-q3fE-ZOt.js';
import './quatf64-aQ5IuZRd.js';
import './MeshComponent-B8voAMau.js';
import './meshProperties-C4iW0Ukm.js';
import './MeshLocalVertexSpace-7O0-32Cx.js';
import './MeshTransform-CL1w8m2X.js';
import './mat4f64-Dk4dwAN8.js';
import './MeshVertexAttributes-BlN25Y3i.js';
import './meshVertexSpaceUtils-Dx1K8Ka4.js';
import './triangulationUtils-Csz6C4Ml.js';
import './earcut-D9gy186-.js';
import './Indices-CUXWe50Q.js';
import './plane-pBXJ95gF.js';
import './deduplicate-BUWTlRxn.js';
import './projectPointToVector-CRQo6haA.js';
import './vertexSpaceConversion-DReBTI7u.js';
import './spatialReferenceEllipsoidUtils-B1ThbZT4.js';
import './computeTranslationToOriginAndRotation-CPeb_cTX.js';
import './vec3-B-IGRPcz.js';
import './BufferView-CJw8SoI8.js';
import './vec4-0pFsYPaF.js';
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
