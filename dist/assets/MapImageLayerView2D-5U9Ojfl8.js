import {
  A as r,
  B as a,
  R as n,
  cE as l,
  bL as d,
  a8 as u,
  cv as c,
  f0 as y,
  bM as m,
  f1 as f,
} from './index.lazy-BFilFZ3v.js';
import { r as _ } from './BitmapContainer-DnEm5kqd.js';
import { S as x, y as H } from './LayerView-DO8JWPob.js';
import { A as w } from './GraphicsView2D-BJGQDb66.js';
import { h as v } from './HighlightGraphicContainer-BBlVjBz4.js';
import { _ as I } from './ExportStrategy-ZTwoIdN2.js';
import { y as E } from './ExportImageParameters-i1IPwMV_.js';
import { i as V } from './timeSupport-BYd6FGru.js';
import { i as b } from './RefreshableLayerView-eBNYOMvq.js';
import { S as G } from './MapServiceLayerViewHelper-BYmZedMw.js';
import { r as P } from './drapedUtils-DZuQhYsU.js';
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
import './UpdateTracking2D-FxGawpd5.js';
import './BidiEngine-QXap_35O.js';
import './GeometryUtils-BZmtlwi1.js';
import './rasterizingUtils-01n90i7R.js';
import './floatRGBA-B-1sPYTQ.js';
import './Rect-CUzevAry.js';
import './OverrideHelper-Cyqn0SsG.js';
import './quantizationUtils-QwHxl707.js';
import './FeatureMetadata-FL6gOESI.js';
import './queryUtils-DePK7lxY.js';
import './json-Wa8cmqdu.js';
import './timeSupport-JKWk7KR2.js';
import './FeatureCommandQueue-BbqTKNbG.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-ErTuyLry.js';
import './mat3f64-q3fE-ZOt.js';
import './normalizeUtilsSync-CFqnyNoA.js';
import './dehydratedFeatures-BPTFaWS4.js';
import './AGraphicContainer-a01TvULg.js';
import './TechniqueInstance-ORh6ZjaS.js';
import './TileContainer-DUIdLrEG.js';
import './floorFilterUtils-DZ5C6FQv.js';
import './sublayerUtils-CRYkrmMG.js';
import './popupUtils-7mh6XgqI.js';
const U = (i) => {
  let t = class extends i {
    initialize() {
      this.exportImageParameters = new E({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), (this.exportImageParameters = null);
    }
    get floors() {
      var e;
      return ((e = this.view) == null ? void 0 : e.floors) ?? null;
    }
    get exportImageVersion() {
      var e;
      return (
        (e = this.exportImageParameters) == null || e.commitProperty('version'),
        this.commitProperty('timeExtent'),
        this.commitProperty('floors'),
        (this._get('exportImageVersion') || 0) + 1
      );
    }
    get timeExtent() {
      var e;
      return V(
        this.layer,
        (e = this.view) == null ? void 0 : e.timeExtent,
        this._get('timeExtent'),
      );
    }
    canResume() {
      var e;
      return !!super.canResume() && !((e = this.timeExtent) != null && e.isEmpty);
    }
  };
  return (
    r([a()], t.prototype, 'exportImageParameters', void 0),
    r([a({ readOnly: !0 })], t.prototype, 'floors', null),
    r([a({ readOnly: !0 })], t.prototype, 'exportImageVersion', null),
    r([a()], t.prototype, 'layer', void 0),
    r([a()], t.prototype, 'suspended', void 0),
    r([a({ readOnly: !0 })], t.prototype, 'timeExtent', null),
    (t = r([n('esri.views.layers.MapImageLayerView')], t)),
    t
  );
};
let h = class extends U(b(x(H))) {
  constructor() {
    super(...arguments), (this._highlightGraphics = new l()), (this._updateHash = '');
  }
  fetchPopupFeaturesAtLocation(i, t) {
    return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(i, t);
  }
  update(i) {
    const t = `${this.exportImageVersion}/${i.state.id}/${i.pixelRatio}/${i.stationary}`;
    this._updateHash !== t &&
      ((this._updateHash = t),
      this.strategy.update(i).catch((e) => {
        d(e) || u.getLogger(this).error(e);
      }),
      i.stationary && this._popupHighlightHelper.updateHighlightedFeatures(i.state.resolution)),
      this._highlightView.processUpdate(i);
  }
  attach() {
    const { imageMaxWidth: i, imageMaxHeight: t, version: e } = this.layer,
      s = e >= 10.3,
      g = e >= 10;
    (this._bitmapContainer = new _()),
      this.container.addChild(this._bitmapContainer),
      (this._highlightView = new w({
        view: this.view,
        graphics: this._highlightGraphics,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new v(this.view.featuresTilingScheme),
        defaultPointSymbolEnabled: !1,
      })),
      this.container.addChild(this._highlightView.container),
      (this._popupHighlightHelper = new G({
        createFetchPopupFeaturesQueryGeometry: (o, p) => P(o, p, this.view),
        highlightGraphics: this._highlightGraphics,
        highlightGraphicUpdated: (o, p) => {
          this._highlightView.graphicUpdateHandler({ graphic: o, property: p });
        },
        layerView: this,
        updatingHandles: this._updatingHandles,
      })),
      (this.strategy = new I({
        container: this._bitmapContainer,
        fetchSource: this.fetchImageBitmap.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
        imageMaxWidth: i,
        imageMaxHeight: t,
        imageRotationSupported: s,
        imageNormalizationSupported: g,
        hidpi: !0,
      })),
      this.addAttachHandles(
        c(
          () => this.exportImageVersion,
          () => this.requestUpdate(),
        ),
      ),
      this.requestUpdate();
  }
  detach() {
    this.strategy.destroy(),
      this.container.removeAllChildren(),
      this._bitmapContainer.removeAllChildren(),
      this._highlightView.destroy(),
      this._popupHighlightHelper.destroy();
  }
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(i) {
    return this.layer.serviceSupportsSpatialReference(i);
  }
  async doRefresh() {
    (this._updateHash = ''), this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(i, t, e, s) {
    return this.layer.fetchImage(i, t, e, {
      timeExtent: this.timeExtent,
      floors: this.floors,
      ...s,
    });
  }
  fetchImageBitmap(i, t, e, s) {
    return this.layer.fetchImageBitmap(i, t, e, {
      timeExtent: this.timeExtent,
      floors: this.floors,
      ...s,
    });
  }
  highlight(i, t) {
    const e = y(i);
    if (e.length === 0) return m();
    const s = (t == null ? void 0 : t.name) ?? f;
    return (
      this._addHighlightGraphics(e, s),
      m(() => !this.destroyed && this._removeHighlightGraphics(e, s))
    );
  }
  _processHighlight() {
    var t;
    const i = this._getHighlights();
    (t = this._highlightView) == null || t.setHighlight(i);
  }
  _addHighlightGraphics(i, t) {
    this._highlightGraphics.addMany(i),
      this._addHighlights(
        i.map((e) => e.uid),
        t,
      );
  }
  _removeHighlightGraphics(i, t) {
    this._highlightGraphics.removeMany(i),
      this._removeHighlights(
        i.map((e) => e.uid),
        t,
      );
  }
};
r([a()], h.prototype, 'strategy', void 0),
  r([a()], h.prototype, 'updating', void 0),
  (h = r([n('esri.views.2d.layers.MapImageLayerView2D')], h));
const Ut = h;
export { Ut as default };
