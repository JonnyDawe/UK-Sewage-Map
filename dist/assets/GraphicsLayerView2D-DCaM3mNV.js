import {
  f7 as m,
  f8 as c,
  bk as g,
  bi as n,
  bI as l,
  bM as h,
  f1 as d,
  A as o,
  B as w,
  R as u,
} from './index.lazy-BHTpPf8X.js';
import { S as y, y as V } from './LayerView-DyLUQry8.js';
import { t as f } from './GraphicContainer-veuVqmEF.js';
import { A as v } from './GraphicsView2D-CZ0wAFJ7.js';
import './index-DqxZnyqH.js';
import './Container-C7rRVI4T.js';
import './AGraphicContainer-C_lgpK-h.js';
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
import './featureConversionUtils-VaE6vOn5.js';
import './FeatureCommandQueue-CYjn6XOO.js';
import './TechniqueType-uMFRS8dR.js';
import './GraphShaderModule-BYUbwtin.js';
import './ShaderBuilder-BRSlH2aw.js';
import './BindType-BBwFZqyN.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-B6WA7qpe.js';
import './OverrideHelper-paiOG-RJ.js';
import './quantizationUtils-DsF8tesB.js';
import './FeatureMetadata-ChM8hzdp.js';
import './queryUtils-BQJHb1Wr.js';
import './json-Wa8cmqdu.js';
import './timeSupport-C377IZe7.js';
import './mat3f64-q3fE-ZOt.js';
import './normalizeUtilsSync-CsyE3cY3.js';
import './dehydratedFeatures-CmWEPnaj.js';
let p = class extends y(V) {
  attach() {
    (this.graphicsView = new v({
      requestUpdateCallback: () => this.requestUpdate(),
      view: this.view,
      graphics: this.layer.graphics,
      container: new f(this.view.featuresTilingScheme),
      layerId: this.layer.id,
    })),
      this.container.addChild(this.graphicsView.container),
      this.addAttachHandles([
        this.layer.on('graphic-update', this.graphicsView.graphicUpdateHandler),
        m(
          () => {
            var i;
            return (i = this.layer) == null ? void 0 : i.visible;
          },
          () => {
            this.graphicsView.update({ state: this.view.state }), this.graphicsView.pushUpdate();
          },
        ),
      ]),
      this._processHighlight();
  }
  detach() {
    this.container.removeAllChildren(), (this.graphicsView = c(this.graphicsView));
  }
  async hitTest(i) {
    return this.graphicsView
      ? this.graphicsView
          .hitTest(i)
          .map((t) => ({ type: 'graphic', graphic: t, mapPoint: i, layer: this.layer }))
      : null;
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {}
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i, t) {
    let r;
    typeof i == 'number'
      ? (r = [i])
      : i instanceof g
        ? (r = [i.uid])
        : Array.isArray(i) && i.length > 0
          ? (r = typeof i[0] == 'number' ? i : i.map((s) => s && s.uid))
          : n.isCollection(i) && i.length > 0 && (r = i.map((s) => s && s.uid).toArray());
    const e = r == null ? void 0 : r.filter(l);
    if (!(e != null && e.length)) return h();
    const a = (t == null ? void 0 : t.name) ?? d;
    return this._addHighlights(e, a), h(() => !this.destroyed && this._removeHighlights(e, a));
  }
  _processHighlight() {
    var t;
    const i = this._getHighlights();
    (t = this.graphicsView) == null || t.setHighlight(i);
  }
};
o([w()], p.prototype, 'graphicsView', void 0),
  (p = o([u('esri.views.2d.layers.GraphicsLayerView2D')], p));
const mi = p;
export { mi as default };
