import { bL as s, a8 as p, A as r, B as a, R as m } from './index.lazy-BHTpPf8X.js';
import { r as n } from './BitmapContainer-BVhLL0-6.js';
import { S as h, y as d } from './LayerView-DyLUQry8.js';
import { _ as y } from './ExportStrategy-DHZqdB9L.js';
import { i as c } from './RefreshableLayerView-x0QgxRaS.js';
import './index-DqxZnyqH.js';
import './WGLContainer-GeLJ7UJ1.js';
import './dataViewUtils-5KhH7jWv.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './ProgramTemplate-YbO5C86v.js';
import './VertexArrayObject-D1MxHjFY.js';
import './vec3f32-nZdmKIgz.js';
import './Container-C7rRVI4T.js';
import './StyleDefinition-BrictxHk.js';
import './config-BOD8--da.js';
import './earcut-D9gy186-.js';
import './featureConversionUtils-VaE6vOn5.js';
import './BitmapTechnique-DLPJsOYP.js';
import './GraphShaderModule-BYUbwtin.js';
import './FramebufferObject-5Em36vKP.js';
import './ShaderBuilder-BRSlH2aw.js';
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
