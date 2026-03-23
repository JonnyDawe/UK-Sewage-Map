import { cv as a, f5 as n, cH as d, A as u, R as l } from './index.lazy-BHTpPf8X.js';
import { d as g } from './FeatureLayerView2D-CGHXOwgG.js';
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
let i = class extends g {
  initialize() {
    this.addHandles(
      [
        a(
          () => this.view.scale,
          () => this._update(),
          n,
        ),
      ],
      'constructor',
    );
  }
  isUpdating() {
    const t = this.layer.sublayers.some((s) => s.renderer != null),
      r = this._commandsQueue.updateTracking.updating,
      o = this._updatingRequiredPromise != null,
      p = !this._workerProxy,
      m = this.dataUpdating,
      e = t && (r || o || p || m);
    return (
      d('esri-2d-log-updating') &&
        console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),
      e
    );
  }
};
i = u([l('esri.views.2d.layers.SubtypeGroupLayerView2D')], i);
const pi = i;
export { pi as default };
