import { bs as p, a1 as e } from './index.lazy-BHTpPf8X.js';
import { n as s } from './MeshLocalVertexSpace-cTk7IO-v.js';
import { B as m } from './vertexSpaceConversion-VNZxL1Ci.js';
import './index-DqxZnyqH.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './spatialReferenceEllipsoidUtils-Dh_5G9X2.js';
import './computeTranslationToOriginAndRotation-DHcz8NsR.js';
import './projectPointToVector-BJ7KR9p7.js';
import './meshVertexSpaceUtils-BhxP4Ndr.js';
import './vec3-DUd4WD2P.js';
import './BufferView-vfJHrNws.js';
import './vec4-CM3JMZiB.js';
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
