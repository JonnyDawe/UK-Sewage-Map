const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/i3s-LRXEsQU1.js',
      'assets/_commonjsHelpers-DCkdB7M8.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/projectMeshVertexPositions-BJvIEXwY.js',
      'assets/MeshLocalVertexSpace-7O0-32Cx.js',
      'assets/vertexSpaceConversion-DReBTI7u.js',
      'assets/mat3f64-q3fE-ZOt.js',
      'assets/mat4f64-Dk4dwAN8.js',
      'assets/spatialReferenceEllipsoidUtils-B1ThbZT4.js',
      'assets/computeTranslationToOriginAndRotation-CPeb_cTX.js',
      'assets/projectPointToVector-CRQo6haA.js',
      'assets/meshVertexSpaceUtils-Dx1K8Ka4.js',
      'assets/vec3-B-IGRPcz.js',
      'assets/BufferView-CJw8SoI8.js',
      'assets/vec4-0pFsYPaF.js',
    ]),
) => i.map((i) => d[i]);
import { _ as I } from './index-DShQM7Xx.js';
import { f4 as Q, cJ as X, W as $, h5 as Z } from './index.lazy-BFilFZ3v.js';
import { n as ee, a as te } from './MeshLocalVertexSpace-7O0-32Cx.js';
import { n as re, d as oe } from './vec3-B-IGRPcz.js';
import './projectVectorToVector-wO633bLe.js';
import './sphere-CNvInDV-.js';
import './I3SUtil-CttXfUUT.js';
import './projectPointToVector-CRQo6haA.js';
import './mat3f64-q3fE-ZOt.js';
import './plane-pBXJ95gF.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './I3SBinaryReader-fDtk4xlH.js';
import './VertexAttribute-Cq4MnHjR.js';
import './edgeUtils-DaWuOoUm.js';
import './floatRGBA-B-1sPYTQ.js';
import './NormalAttribute.glsl-MGCUnh4w.js';
import './glsl-BH37Aalp.js';
import './ShaderOutput-DnYY5J1_.js';
import './BindType-BBwFZqyN.js';
import './orientedBoundingBox-DM-4coU-.js';
import './quat-DOUEtkz6.js';
import './spatialReferenceEllipsoidUtils-B1ThbZT4.js';
import './computeTranslationToOriginAndRotation-CPeb_cTX.js';
var N, B;
(function (e) {
  (e[(e.None = 0)] = 'None'), (e[(e.Int16 = 1)] = 'Int16'), (e[(e.Int32 = 2)] = 'Int32');
})(N || (N = {})),
  (function (e) {
    (e[(e.Replace = 0)] = 'Replace'),
      (e[(e.Outside = 1)] = 'Outside'),
      (e[(e.Inside = 2)] = 'Inside'),
      (e[(e.Finished = 3)] = 'Finished');
  })(B || (B = {}));
function ne() {
  return (
    U ||
      (U = new Promise((e) =>
        I(() => import('./i3s-LRXEsQU1.js'), __vite__mapDeps([0, 1]))
          .then((t) => t.i)
          .then(({ default: t }) => {
            const r = t({ locateFile: ie, onRuntimeInitialized: () => e(r) });
            delete r.then;
          }),
      ).catch((e) => {
        throw e;
      })),
    U
  );
}
function ie(e) {
  return Q(`esri/libs/i3s/${e}`);
}
let U;
class se {
  constructor(t, r, s, i, c, a) {
    (this.layout = t),
      (this.interleavedVertexData = r),
      (this.indices = s),
      (this.hasColors = i),
      (this.hasModifications = c),
      (this.positionData = a);
  }
}
let ae = class {
  constructor(t, r, s, i, c, a, f) {
    (this.componentOffsets = t),
      (this.featureIds = r),
      (this.anchorIds = s),
      (this.anchors = i),
      (this.transformedGeometry = c),
      (this.globalTrafo = a),
      (this.obb = f);
  }
};
new X({ deallocator: null });
var V, w, k, H, J;
(function (e) {
  (e[(e.Unmodified = 0)] = 'Unmodified'),
    (e[(e.Culled = 1)] = 'Culled'),
    (e[(e.NotChecked = 2)] = 'NotChecked');
})(V || (V = {})),
  (function (e) {
    (e[(e.Unmodified = 0)] = 'Unmodified'),
      (e[(e.PotentiallyModified = 1)] = 'PotentiallyModified'),
      (e[(e.Culled = 2)] = 'Culled'),
      (e[(e.Unknown = 3)] = 'Unknown'),
      (e[(e.NotChecked = 4)] = 'NotChecked');
  })(w || (w = {}));
(function (e) {
  (e[(e.Unknown = 0)] = 'Unknown'),
    (e[(e.Uncached = 1)] = 'Uncached'),
    (e[(e.Cached = 2)] = 'Cached');
})(k || (k = {})),
  (function (e) {
    (e[(e.None = 0)] = 'None'),
      (e[(e.MaxScreenThreshold = 1)] = 'MaxScreenThreshold'),
      (e[(e.ScreenSpaceRelative = 2)] = 'ScreenSpaceRelative'),
      (e[(e.RemovedFeatureDiameter = 3)] = 'RemovedFeatureDiameter'),
      (e[(e.DistanceRangeFromDefaultCamera = 4)] = 'DistanceRangeFromDefaultCamera');
  })(H || (H = {})),
  (function (e) {
    (e[(e.Hole = 0)] = 'Hole'), (e[(e.Leaf = 1)] = 'Leaf');
  })(J || (J = {}));
async function De(e) {
  o = await g();
  const t = [e.geometryBuffer];
  return { result: Y(o, e, t), transferList: t };
}
async function Ce(e) {
  var b;
  o = await g();
  const t = [e.geometryBuffer],
    { geometryBuffer: r } = e,
    s = r.byteLength,
    i = o._malloc(s),
    c = new Uint8Array(o.HEAPU8.buffer, i, s);
  c.set(new Uint8Array(r));
  const a = o.dracoDecompressPointCloudData(i, c.byteLength);
  if ((o._free(i), a.error.length > 0)) throw new Error(`i3s.wasm: ${a.error}`);
  const f = ((b = a.featureIds) == null ? void 0 : b.length) > 0 ? a.featureIds.slice() : null,
    d = a.positions.slice();
  return (
    f && t.push(f.buffer),
    t.push(d.buffer),
    { result: { positions: d, featureIds: f }, transferList: t }
  );
}
async function je(e) {
  await g(), le(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function $e(e) {
  await g(), ce(e);
}
async function Be(e) {
  (o = await g()), o.setLegacySchema(e.context, e.jsonSchema);
}
async function Ve(e) {
  const { localMatrix: t, origin: r, positions: s, vertexSpace: i } = e,
    c = $.fromJSON(e.inSpatialReference),
    a = $.fromJSON(e.outSpatialReference);
  let f;
  const [{ projectBuffer: d }, { initializeProjection: b }] = await Promise.all([
    I(() => import('./index.lazy-BFilFZ3v.js').then((l) => l.w5), __vite__mapDeps([2, 3, 4, 5])),
    I(() => import('./index.lazy-BFilFZ3v.js').then((l) => l.w6), __vite__mapDeps([2, 3, 4, 5])),
  ]);
  await b(c, a);
  const E = [0, 0, 0];
  if (!d(r, c, 0, E, a, 0)) throw new Error('Failed to project');
  if (i.type === 'georeferenced' && i.origin == null) {
    if (((f = new Float64Array(s.length)), !d(s, c, 0, f, a, 0, f.length / 3)))
      throw new Error('Failed to project');
  } else {
    const l = i.type === 'georeferenced' ? ee.fromJSON(i) : te.fromJSON(i),
      { projectMeshVertexPositions: u } = await I(
        async () => {
          const { projectMeshVertexPositions: h } = await import(
            './projectMeshVertexPositions-BJvIEXwY.js'
          );
          return { projectMeshVertexPositions: h };
        },
        __vite__mapDeps([6, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
      ),
      m = u(
        {
          vertexAttributes: { position: s },
          transform: t ? { localMatrix: t } : void 0,
          vertexSpace: l,
          spatialReference: c,
        },
        a,
      );
    if (!m) throw new Error('Failed to project');
    f = m;
  }
  const R = f.length,
    [_, L, A] = E;
  for (let l = 0; l < R; l += 3) (f[l] -= _), (f[l + 1] -= L), (f[l + 2] -= A);
  return {
    result: { projected: f, original: s, projectedOrigin: E },
    transferList: [f.buffer, s.buffer],
  };
}
async function ke({ normalMatrix: e, normals: t }) {
  const r = new Float32Array(t.length);
  return (
    re(r, t, e),
    Z(e) && oe(r, r),
    { result: { transformed: r, original: t }, transferList: [r.buffer, t.buffer] }
  );
}
function He(e) {
  z(e);
}
let fe, o;
function ce(e) {
  if (!o) return;
  const t = e.modifications,
    r = o._malloc(8 * t.length),
    s = new Float64Array(o.HEAPU8.buffer, r, t.length);
  for (let i = 0; i < t.length; ++i) s[i] = t[i];
  o.setModifications(e.context, r, t.length, e.isGeodetic), o._free(r);
}
function Y(e, t, r) {
  const {
      context: s,
      globalTrafo: i,
      mbs: c,
      obbData: a,
      elevationOffset: f,
      geometryBuffer: d,
      geometryDescriptor: b,
      indexToVertexProjector: E,
      vertexToRenderProjector: R,
    } = t,
    _ = e._malloc(d.byteLength),
    L = 33,
    A = e._malloc(L * Float64Array.BYTES_PER_ELEMENT),
    l = new Uint8Array(e.HEAPU8.buffer, _, d.byteLength);
  l.set(new Uint8Array(d));
  const u = new Float64Array(e.HEAPU8.buffer, A, L);
  P(u, [NaN, NaN, NaN]);
  let m = u.byteOffset + 3 * u.BYTES_PER_ELEMENT,
    h = new Float64Array(u.buffer, m);
  P(h, i),
    (m += 16 * u.BYTES_PER_ELEMENT),
    (h = new Float64Array(u.buffer, m)),
    P(h, c),
    (m += 4 * u.BYTES_PER_ELEMENT),
    a && ((h = new Float64Array(u.buffer, m)), P(h, a));
  const x = b,
    G = {
      isDraco: !1,
      isLegacy: !1,
      color: t.layouts.some((p) => p.some((y) => y.name === 'color')),
      normal: t.needNormals && t.layouts.some((p) => p.some((y) => y.name === 'normalCompressed')),
      uv0: t.layouts.some((p) => p.some((y) => y.name === 'uv0')),
      uvRegion: t.layouts.some((p) => p.some((y) => y.name === 'uvRegion')),
      featureIndex: x.featureIndex,
    },
    n = e.process(s, !!t.obbData, _, l.byteLength, x, G, A, f, E, R, t.normalReferenceFrame);
  if ((e._free(A), e._free(_), n.error.length > 0)) throw new Error(`i3s.wasm: ${n.error}`);
  if (n.discarded) return null;
  const M = n.componentOffsets.length > 0 ? n.componentOffsets.slice() : null,
    S = n.featureIds.length > 0 ? n.featureIds.slice() : null,
    W = n.anchorIds.length > 0 ? Array.from(n.anchorIds) : null,
    q = n.anchors.length > 0 ? Array.from(n.anchors) : null,
    F = n.interleavedVertedData.slice().buffer,
    v =
      n.indicesType === N.Int16
        ? new Uint16Array(n.indices.buffer, n.indices.byteOffset, n.indices.byteLength / 2).slice()
        : new Uint32Array(n.indices.buffer, n.indices.byteOffset, n.indices.byteLength / 4).slice(),
    O = n.positions.slice(),
    { buffer: T, byteOffset: D, byteLength: C } = n.positionIndices,
    j =
      n.positionIndicesType === N.Int16
        ? new Uint16Array(T, D, C / 2).slice()
        : new Uint32Array(T, D, C / 4).slice(),
    K = new se(t.layouts[0], F, v, n.hasColors, n.hasModifications, { data: O, indices: j });
  return (
    S && r.push(S.buffer),
    M && r.push(M.buffer),
    r.push(F),
    r.push(v.buffer),
    r.push(O.buffer),
    r.push(j.buffer),
    new ae(M, S, W, q, K, i, n.obb)
  );
}
function Je(e) {
  return e === 0 ? w.Unmodified : e === 1 ? w.PotentiallyModified : e === 2 ? w.Culled : w.Unknown;
}
function le(e) {
  if (!o) return;
  const { context: t, buffer: r } = e,
    s = o._malloc(r.byteLength),
    i = r.byteLength / Float64Array.BYTES_PER_ELEMENT,
    c = new Float64Array(o.HEAPU8.buffer, s, i),
    a = new Float64Array(r);
  c.set(a), o.filterOBBs(t, s, i), a.set(c), o._free(s);
}
function z(e) {
  o && o.destroy(e) === 0 && (o = null);
}
function P(e, t) {
  for (let r = 0; r < t.length; ++r) e[r] = t[r];
}
async function Ye() {
  o || (await g());
}
async function g() {
  return o || (o = await (fe ?? (fe = ne()))), o;
}
const ze = { transform: (e, t) => o && Y(o, e, t), destroy: z };
export {
  He as destroyContext,
  Ce as dracoDecompressPointCloudData,
  je as filterObbsForModifications,
  le as filterObbsForModificationsSync,
  Ye as initialize,
  Je as interpretObbModificationResults,
  De as process,
  Ve as project,
  Be as setLegacySchema,
  $e as setModifications,
  ce as setModificationsSync,
  ze as test,
  ke as transformNormals,
};
