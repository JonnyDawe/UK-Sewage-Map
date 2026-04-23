import { bs as p, a1 as e } from './index.lazy-BFilFZ3v.js';
import { n as s } from './MeshLocalVertexSpace-7O0-32Cx.js';
import { B as m } from './vertexSpaceConversion-DReBTI7u.js';
import './index-DShQM7Xx.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './spatialReferenceEllipsoidUtils-B1ThbZT4.js';
import './computeTranslationToOriginAndRotation-CPeb_cTX.js';
import './projectPointToVector-CRQo6haA.js';
import './meshVertexSpaceUtils-Dx1K8Ka4.js';
import './vec3-B-IGRPcz.js';
import './BufferView-CJw8SoI8.js';
import './vec4-0pFsYPaF.js';
function w(t, i) {
  const o = m(t, s.absolute);
  if (!o) return null;
  let r = o.position;
  return p(t.spatialReference, i) ||
    ((r = new Float64Array(o.position.length)), e(o.position, t.spatialReference, 0, r, i, 0))
    ? r
    : null;
}
export { w as projectMeshVertexPositions };
