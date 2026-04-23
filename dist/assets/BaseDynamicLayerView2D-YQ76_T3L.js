import { bL as s, a8 as p, A as r, B as a, R as m } from './index.lazy-BFilFZ3v.js';
import { r as n } from './BitmapContainer-DnEm5kqd.js';
import { S as h, y as d } from './LayerView-DO8JWPob.js';
import { _ as y } from './ExportStrategy-ZTwoIdN2.js';
import { i as c } from './RefreshableLayerView-eBNYOMvq.js';
import './index-DShQM7Xx.js';
import './WGLContainer-CljHC-xu.js';
import './dataViewUtils-Dzpw_nGB.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './ProgramTemplate-BU9lAWen.js';
import './VertexArrayObject-B9LXzLl2.js';
import './vec3f32-nZdmKIgz.js';
import './Container-JJ8D-RVy.js';
import './StyleDefinition-x3fS7pcj.js';
import './config-BOD8--da.js';
import './earcut-D9gy186-.js';
import './featureConversionUtils-GdT3zBJg.js';
import './BitmapTechnique-FMpr9zIt.js';
import './GraphShaderModule-B9XcBcNV.js';
import './FramebufferObject-CkZvVgCW.js';
import './ShaderBuilder-C7-5kguK.js';
import './BindType-BBwFZqyN.js';
import './TechniqueType-uMFRS8dR.js';
let t = class extends c(h(d)) {
  update(e) {
    this._strategy.update(e).catch((i) => {
      s(i) || p.getLogger(this).error(i);
    }),
      this.notifyChange('updating');
  }
  attach() {
    (this._bitmapContainer = new n()),
      this.container.addChild(this._bitmapContainer),
      (this._strategy = new y({
        container: this._bitmapContainer,
        fetchSource: this.fetchBitmapData.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
      }));
  }
  detach() {
    this._strategy.destroy(),
      (this._strategy = null),
      this.container.removeChild(this._bitmapContainer),
      this._bitmapContainer.removeAllChildren();
  }
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(e, i, o) {
    return this.layer.fetchImageBitmap(e, i, o);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
r([a()], t.prototype, '_strategy', void 0),
  r([a()], t.prototype, 'updating', void 0),
  (t = r([m('esri.views.2d.layers.BaseDynamicLayerView2D')], t));
const k = t;
export { k as default };
