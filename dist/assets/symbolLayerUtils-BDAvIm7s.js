const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/objectResourceUtils-DRM7HzC6.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-Bz5HPDxq.css',
      'assets/devEnvironmentUtils-CnNDiFMM.js',
      'assets/mat3f64-q3fE-ZOt.js',
      'assets/mat4f64-Dk4dwAN8.js',
      'assets/VerticalOffset.glsl-oJpwTEaL.js',
      'assets/Indices-CNwiYcS5.js',
      'assets/InterleavedLayout-Cj1mfS53.js',
      'assets/BufferView-vfJHrNws.js',
      'assets/types-D0PSWh4d.js',
      'assets/triangle-CWN75Rhw.js',
      'assets/sphere-vpbSSw5q.js',
      'assets/plane-BJrN7SUI.js',
      'assets/quatf64-aQ5IuZRd.js',
      'assets/lineSegment-CpxDVaaQ.js',
      'assets/basicInterfaces-CZwQPxTp.js',
      'assets/VertexAttribute-Cq4MnHjR.js',
      'assets/ShaderOutput-DnYY5J1_.js',
      'assets/BindType-BBwFZqyN.js',
      'assets/glsl-BH37Aalp.js',
      'assets/boundedPlane-CbbYT-eM.js',
      'assets/requestImageUtils-BsdA-v4w.js',
      'assets/TextureFormat-1mYWTFa-.js',
      'assets/renderState-Ccp904Cp.js',
      'assets/orientedBoundingBox-D53iZWkg.js',
      'assets/quat-DoRHSg5X.js',
      'assets/spatialReferenceEllipsoidUtils-Dh_5G9X2.js',
      'assets/computeTranslationToOriginAndRotation-DHcz8NsR.js',
      'assets/vec3-DUd4WD2P.js',
      'assets/vec4-CM3JMZiB.js',
      'assets/indexUtils-D9ofW2WR.js',
      'assets/resourceUtils-B7fLzfh4.js',
      'assets/NestedMap-GuqgquCN.js',
      'assets/RealisticTree.glsl-CB4Pc1SN.js',
      'assets/NormalAttribute.glsl-CnjZu8iL.js',
      'assets/ShaderBuilder-BRSlH2aw.js',
      'assets/doublePrecisionUtils-B0owpBza.js',
    ]),
) => i.map((i) => d[i]);
import { _ as p } from './index-DqxZnyqH.js';
import {
  a7 as s,
  fw as l,
  a5 as f,
  cn as y,
  fx as b,
  cO as w,
  P as _,
} from './index.lazy-BHTpPf8X.js';
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
        () => import('./objectResourceUtils-DRM7HzC6.js').then((v) => v.o),
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
