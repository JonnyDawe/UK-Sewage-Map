import { aT as s, a7 as m, ap as p } from './index.lazy-BHTpPf8X.js';
import { p as a } from './MeshVertexAttributes-DQWxSiHS.js';
import { B as n } from './vertexSpaceConversion-VNZxL1Ci.js';
import './index-DqxZnyqH.js';
import './meshProperties-C4iW0Ukm.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './spatialReferenceEllipsoidUtils-Dh_5G9X2.js';
import './computeTranslationToOriginAndRotation-DHcz8NsR.js';
import './projectPointToVector-BJ7KR9p7.js';
import './meshVertexSpaceUtils-BhxP4Ndr.js';
import './MeshLocalVertexSpace-cTk7IO-v.js';
import './vec3-DUd4WD2P.js';
import './BufferView-vfJHrNws.js';
import './vec4-CM3JMZiB.js';
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
