import {
  bk as u,
  bi as f,
  bI as w,
  bM as c,
  cv as a,
  f5 as o,
  f3 as y,
  A as _,
  R as V,
} from './index.lazy-BFilFZ3v.js';
import { S as v, y as b } from './LayerView-DO8JWPob.js';
import { t as g } from './GraphicContainer-B7RGckIJ.js';
import { A as d } from './GraphicsView2D-BJGQDb66.js';
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
const m = 'sublayers',
  l = 'layerView',
  C = new Set(['default']);
let n = class extends v(b) {
  constructor() {
    super(...arguments), (this._highlightIds = new Map());
  }
  *graphicsViews() {
    this._graphicsViewsFeatureCollectionMap == null
      ? this._graphicsViews == null
        ? yield* []
        : yield* this._graphicsViews
      : yield* this._graphicsViewsFeatureCollectionMap.keys();
  }
  async hitTest(i, e) {
    return Array.from(this.graphicsViews(), (t) => {
      const s = t.hitTest(i);
      if (this._graphicsViewsFeatureCollectionMap != null) {
        const h = this._graphicsViewsFeatureCollectionMap.get(t);
        for (const r of s)
          !r.popupTemplate && h.popupTemplate && (r.popupTemplate = h.popupTemplate),
            (r.sourceLayer = r.layer = this.layer);
      }
      return s;
    })
      .flat()
      .map((t) => ({ type: 'graphic', graphic: t, layer: this.layer, mapPoint: i }));
  }
  highlight(i, e = 'default') {
    let t;
    typeof i == 'number'
      ? (t = [i])
      : i instanceof u
        ? (t = [i.uid])
        : Array.isArray(i) && i.length > 0
          ? (t = typeof i[0] == 'number' ? i : i.map((h) => h && h.uid))
          : f.isCollection(i) && (t = i.map((h) => h && h.uid).toArray());
    const s = t == null ? void 0 : t.filter(w);
    return s != null && s.length ? (this._addHighlight(s), c(() => this._removeHighlight(s))) : c();
  }
  update(i) {
    for (const e of this.graphicsViews()) e.processUpdate(i);
  }
  attach() {
    const i = this.view,
      e = () => this.requestUpdate(),
      t = this.layer.featureCollections;
    if (t != null && t.length) {
      this._graphicsViewsFeatureCollectionMap = new Map();
      for (const s of t) {
        const h = new g(this.view.featuresTilingScheme),
          r = new d({
            view: i,
            graphics: s.source,
            renderer: s.renderer,
            requestUpdateCallback: e,
            container: h,
          });
        this._graphicsViewsFeatureCollectionMap.set(r, s),
          this.container.addChild(r.container),
          this.addHandles(
            [
              a(
                () => s.visible,
                (p) => (r.container.visible = p),
                o,
              ),
              a(
                () => r.updating,
                () => this.notifyChange('updating'),
                o,
              ),
            ],
            l,
          );
      }
      this._updateHighlight();
    } else
      this.layer.sublayers != null &&
        this.addHandles(
          y(
            () => this.layer.sublayers,
            'change',
            () => this._createGraphicsViews(),
            {
              onListenerAdd: () => this._createGraphicsViews(),
              onListenerRemove: () => this._destroyGraphicsViews(),
            },
          ),
          m,
        );
  }
  detach() {
    this._destroyGraphicsViews(), this.removeHandles(m);
  }
  moveEnd() {}
  viewChange() {
    for (const i of this.graphicsViews()) i.viewChange();
  }
  isUpdating() {
    for (const i of this.graphicsViews()) if (i.updating) return !0;
    return !1;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.removeHandles(l);
    for (const i of this.graphicsViews()) i.destroy();
    (this._graphicsViews = null), (this._graphicsViewsFeatureCollectionMap = null);
  }
  _createGraphicsViews() {
    if ((this._destroyGraphicsViews(), this.layer.sublayers == null)) return;
    const i = [],
      e = this.view,
      t = () => this.requestUpdate();
    for (const s of this.layer.sublayers) {
      const h = new g(this.view.featuresTilingScheme);
      h.fadeTransitionEnabled = !0;
      const r = new d({ view: e, graphics: s.graphics, requestUpdateCallback: t, container: h });
      this.addHandles(
        [
          s.on('graphic-update', r.graphicUpdateHandler),
          a(
            () => s.visible,
            (p) => (r.container.visible = p),
            o,
          ),
          a(
            () => r.updating,
            () => this.notifyChange('updating'),
            o,
          ),
        ],
        l,
      ),
        this.container.addChild(r.container),
        i.push(r);
    }
    (this._graphicsViews = i), this._updateHighlight();
  }
  _addHighlight(i) {
    for (const e of i)
      if (this._highlightIds.has(e)) {
        const t = this._highlightIds.get(e);
        this._highlightIds.set(e, t + 1);
      } else this._highlightIds.set(e, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const e of i)
      if (this._highlightIds.has(e)) {
        const t = this._highlightIds.get(e) - 1;
        t === 0 ? this._highlightIds.delete(e) : this._highlightIds.set(e, t);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const i = Array.from(this._highlightIds.keys()),
      e = this._getHighlightBits(C.values());
    for (const t of this.graphicsViews())
      t.setHighlight(i.map((s) => ({ objectId: s, highlightFlags: e })));
  }
};
n = _([V('esri.views.2d.layers.MapNotesLayerView2D')], n);
const gi = n;
export { gi as default };
