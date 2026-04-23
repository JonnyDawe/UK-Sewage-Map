import { A as t, B as p, R as e } from './index.lazy-BFilFZ3v.js';
import { d as a } from './FeatureLayerView2D-BQNifWSj.js';
import './index-DShQM7Xx.js';
import './Container-JJ8D-RVy.js';
import './featureConversionUtils-GdT3zBJg.js';
import './timeSupport-BYd6FGru.js';
import './AttributeBinsFeatureSet-CGcDoN76.js';
import './AttributeBinsQuery-DeSngTPC.js';
import './queryUtils-DePK7lxY.js';
import './json-Wa8cmqdu.js';
import './FixedIntervalBinParameters-CKl391iV.js';
import './LayerView-DO8JWPob.js';
import './TechniqueInstance-ORh6ZjaS.js';
import './UpdateTracking2D-FxGawpd5.js';
import './BidiEngine-QXap_35O.js';
import './GeometryUtils-BZmtlwi1.js';
import './rasterizingUtils-01n90i7R.js';
import './floatRGBA-B-1sPYTQ.js';
import './Rect-CUzevAry.js';
import './dataViewUtils-Dzpw_nGB.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './FramebufferObject-CkZvVgCW.js';
import './VertexArrayObject-B9LXzLl2.js';
import './TileContainer-DUIdLrEG.js';
import './WGLContainer-CljHC-xu.js';
import './ProgramTemplate-BU9lAWen.js';
import './vec3f32-nZdmKIgz.js';
import './StyleDefinition-x3fS7pcj.js';
import './config-BOD8--da.js';
import './earcut-D9gy186-.js';
import './FeatureCommandQueue-BbqTKNbG.js';
import './TechniqueType-uMFRS8dR.js';
import './GraphShaderModule-B9XcBcNV.js';
import './ShaderBuilder-C7-5kguK.js';
import './BindType-BBwFZqyN.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-ErTuyLry.js';
import './CircularArray-CujHzHWW.js';
import './SDFHelper-lUmGGtMZ.js';
import './constants-B4mRqufT.js';
import './parquet-NbhOgLSk.js';
import './floorFilterUtils-DZ5C6FQv.js';
import './popupUtils-7mh6XgqI.js';
import './RefreshableLayerView-eBNYOMvq.js';
const s = (i) => {
  let r = class extends i {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((m) => m.name);
    }
  };
  return (
    t([p()], r.prototype, 'layer', void 0),
    t([p({ readOnly: !0 })], r.prototype, 'availableFields', null),
    (r = t([e('esri.views.layers.OGCFeatureLayerView')], r)),
    r
  );
};
let o = class extends s(a) {
  supportsSpatialReference(i) {
    return this.layer.serviceSupportsSpatialReference(i);
  }
};
o = t([e('esri.views.2d.layers.OGCFeatureLayerView2D')], o);
const _ = o;
export { _ as default };
