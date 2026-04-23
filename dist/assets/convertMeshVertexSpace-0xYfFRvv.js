import { aT as s, a7 as m, ap as p } from './index.lazy-BFilFZ3v.js';
import { p as a } from './MeshVertexAttributes-BlN25Y3i.js';
import { B as n } from './vertexSpaceConversion-DReBTI7u.js';
import './index-DShQM7Xx.js';
import './meshProperties-C4iW0Ukm.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './spatialReferenceEllipsoidUtils-B1ThbZT4.js';
import './computeTranslationToOriginAndRotation-CPeb_cTX.js';
import './projectPointToVector-CRQo6haA.js';
import './meshVertexSpaceUtils-Dx1K8Ka4.js';
import './MeshLocalVertexSpace-7O0-32Cx.js';
import './vec3-B-IGRPcz.js';
import './BufferView-CJw8SoI8.js';
import './vec4-0pFsYPaF.js';
async function S(t, o, r) {
  await Promise.resolve(), s(r);
  const e = n(t, o, { useEllipsoid: r == null ? void 0 : r.useEllipsoid });
  if (!e)
    throw new m(
      'meshUtils:convertVertexSpace()',
      'Failed to convert to provided vertex space due to projection errors',
    );
  const i = t.cloneAndModifyVertexAttributes(
    new a({ ...e, uv: p(t.vertexAttributes.uv), color: p(t.vertexAttributes.color) }),
    o,
  );
  return (i.transform = null), i;
}
export { S as convertMeshVertexSpace };
