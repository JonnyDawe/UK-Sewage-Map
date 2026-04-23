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
} from './index.lazy-BFilFZ3v.js';
import { S as y, y as V } from './LayerView-DO8JWPob.js';
import { t as f } from './GraphicContainer-B7RGckIJ.js';
import { A as v } from './GraphicsView2D-BJGQDb66.js';
import './index-DShQM7Xx.js';
import './Container-JJ8D-RVy.js';
import './AGraphicContainer-a01TvULg.js';
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
import './featureConversionUtils-GdT3zBJg.js';
import './FeatureCommandQueue-BbqTKNbG.js';
import './TechniqueType-uMFRS8dR.js';
import './GraphShaderModule-B9XcBcNV.js';
import './ShaderBuilder-C7-5kguK.js';
import './BindType-BBwFZqyN.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-ErTuyLry.js';
import './OverrideHelper-Cyqn0SsG.js';
import './quantizationUtils-QwHxl707.js';
import './FeatureMetadata-FL6gOESI.js';
import './queryUtils-DePK7lxY.js';
import './json-Wa8cmqdu.js';
import './timeSupport-JKWk7KR2.js';
import './mat3f64-q3fE-ZOt.js';
import './normalizeUtilsSync-CFqnyNoA.js';
import './dehydratedFeatures-BPTFaWS4.js';
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
