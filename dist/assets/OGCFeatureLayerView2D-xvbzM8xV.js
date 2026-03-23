import { A as t, B as p, R as e } from './index.lazy-BHTpPf8X.js';
import { d as a } from './FeatureLayerView2D-CGHXOwgG.js';
import './index-DqxZnyqH.js';
import './Container-C7rRVI4T.js';
import './featureConversionUtils-VaE6vOn5.js';
import './timeSupport-BvvjsfUu.js';
import './AttributeBinsFeatureSet-CUF6bWHg.js';
import './AttributeBinsQuery-DsxUxBMj.js';
import './queryUtils-BQJHb1Wr.js';
import './json-Wa8cmqdu.js';
import './FixedIntervalBinParameters-CKrks9ad.js';
import './LayerView-DyLUQry8.js';
import './TechniqueInstance-B6XeE7un.js';
import './UpdateTracking2D-DyH6ccIi.js';
import './BidiEngine-QXap_35O.js';
import './GeometryUtils-CELdmOaY.js';
import './rasterizingUtils-7XTZfmJg.js';
import './floatRGBA-zr9iyZUb.js';
import './Rect-CUzevAry.js';
import './dataViewUtils-5KhH7jWv.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './FramebufferObject-5Em36vKP.js';
import './VertexArrayObject-D1MxHjFY.js';
import './TileContainer-CI-QS1wH.js';
import './WGLContainer-GeLJ7UJ1.js';
import './ProgramTemplate-YbO5C86v.js';
import './vec3f32-nZdmKIgz.js';
import './StyleDefinition-BrictxHk.js';
import './config-BOD8--da.js';
import './earcut-D9gy186-.js';
import './FeatureCommandQueue-CYjn6XOO.js';
import './TechniqueType-uMFRS8dR.js';
import './GraphShaderModule-BYUbwtin.js';
import './ShaderBuilder-BRSlH2aw.js';
import './BindType-BBwFZqyN.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-B6WA7qpe.js';
import './CircularArray-CujHzHWW.js';
import './SDFHelper-DMVafzV1.js';
import './constants-B4mRqufT.js';
import './parquet-CGfJbsoQ.js';
import './floorFilterUtils-DZ5C6FQv.js';
import './popupUtils-DSw4WkC7.js';
import './RefreshableLayerView-x0QgxRaS.js';
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
