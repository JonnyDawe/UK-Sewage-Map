const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/objectResourceUtils-B-lW6TjJ.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-Bz5HPDxq.css',
      'assets/devEnvironmentUtils-CnNDiFMM.js',
      'assets/mat3f64-q3fE-ZOt.js',
      'assets/mat4f64-Dk4dwAN8.js',
      'assets/VerticalOffset.glsl-Bjx816Em.js',
      'assets/Indices-CUXWe50Q.js',
      'assets/InterleavedLayout-m9En8PyM.js',
      'assets/BufferView-CJw8SoI8.js',
      'assets/types-D0PSWh4d.js',
      'assets/triangle-VbRNTYuY.js',
      'assets/sphere-CNvInDV-.js',
      'assets/plane-pBXJ95gF.js',
      'assets/quatf64-aQ5IuZRd.js',
      'assets/lineSegment-DLB3mRkx.js',
      'assets/basicInterfaces-CZwQPxTp.js',
      'assets/VertexAttribute-Cq4MnHjR.js',
      'assets/ShaderOutput-DnYY5J1_.js',
      'assets/BindType-BBwFZqyN.js',
      'assets/glsl-BH37Aalp.js',
      'assets/boundedPlane-DtGHuX-9.js',
      'assets/requestImageUtils-BT4HlYYT.js',
      'assets/TextureFormat-1mYWTFa-.js',
      'assets/renderState-B15oA7pm.js',
      'assets/orientedBoundingBox-DM-4coU-.js',
      'assets/quat-DOUEtkz6.js',
      'assets/spatialReferenceEllipsoidUtils-B1ThbZT4.js',
      'assets/computeTranslationToOriginAndRotation-CPeb_cTX.js',
      'assets/vec3-B-IGRPcz.js',
      'assets/vec4-0pFsYPaF.js',
      'assets/indexUtils-ObiYTKib.js',
      'assets/resourceUtils-Duvd__I9.js',
      'assets/NestedMap-GuqgquCN.js',
      'assets/RealisticTree.glsl-DPn5ywJL.js',
      'assets/NormalAttribute.glsl-MGCUnh4w.js',
      'assets/ShaderBuilder-C7-5kguK.js',
      'assets/doublePrecisionUtils-B0owpBza.js',
    ]),
) => i.map((i) => d[i]);
import { _ as p } from './index-DShQM7Xx.js';
import {
  a7 as s,
  fw as l,
  a5 as f,
  cn as y,
  fx as b,
  cO as w,
  P as _,
} from './index.lazy-BFilFZ3v.js';
let a = h();
function h() {
  return new w(50);
}
function T() {
  a = h();
}
async function $(e, r) {
  var i, t;
  if ((i = e.resource) != null && i.href)
    return g(e.resource.href).then((n) => [n.width, n.height]);
  if ((t = e.resource) != null && t.primitive) return r != null ? [r, r] : [256, 256];
  throw new s(
    'symbol3d:invalid-symbol-layer',
    'symbol layers of type Icon must have either an href or a primitive resource',
  );
}
function g(e) {
  return _(e, { responseType: 'image' }).then((r) => r.data);
}
async function B(e, r = null) {
  var t, n;
  if (!e.isPrimitive) {
    const o = (t = e.resource) == null ? void 0 : t.href;
    if (!o) throw new s('symbol:invalid-resource', 'The symbol does not have a valid resource');
    const u = a.get(o);
    if (u !== void 0) return u;
    const { fetch: m } = await p(
        () => import('./objectResourceUtils-B-lW6TjJ.js').then((v) => v.o),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        ]),
      ),
      d = await m(o, {
        disableTextures: !0,
        spherical: !0,
        doublePrecisionRequiresObfuscation: !0,
      }),
      c = l(d.referenceBoundingBox, f());
    return a.put(o, c), c;
  }
  if (!((n = e.resource) != null && n.primitive))
    throw new s('symbol:invalid-resource', 'The symbol does not have a valid resource');
  const i = y(b(e.resource.primitive));
  if (r != null) for (let o = 0; o < i.length; o++) i[o] *= r;
  return l(i, f());
}
export {
  T as clearBoundingBoxCache,
  $ as computeIconLayerResourceSize,
  B as computeObjectLayerResourceSize,
};
