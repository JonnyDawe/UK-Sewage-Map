import {
  cE as w,
  eY as y,
  eZ as I,
  e_ as T,
  e$ as V,
  f0 as H,
  bM as g,
  f1 as v,
  bs as C,
  bL as n,
  f2 as f,
  bK as b,
  a8 as q,
  A as c,
  B as d,
  R as U,
} from './index.lazy-BHTpPf8X.js';
import './floatRGBA-zr9iyZUb.js';
import './UpdateTracking2D-DyH6ccIi.js';
import './GeometryUtils-CELdmOaY.js';
import './OverrideHelper-paiOG-RJ.js';
import './Container-C7rRVI4T.js';
import './WGLContainer-GeLJ7UJ1.js';
import './dataViewUtils-5KhH7jWv.js';
import './StyleDefinition-BrictxHk.js';
import './enums-BRzLM11V.js';
import './GridShader-CksCwdiC.js';
import './TechniqueType-uMFRS8dR.js';
import './FramebufferObject-5Em36vKP.js';
import './FeatureCommandQueue-CYjn6XOO.js';
import './PieChartMeshWriter-B3o0Lcyj.js';
import './renderState-Ccp904Cp.js';
import './glsl-BH37Aalp.js';
import './testSVGPremultipliedAlpha-BgmmCHUI.js';
import { A as S } from './GraphicsView2D-CZ0wAFJ7.js';
import './earcut-D9gy186-.js';
import './vec3f32-nZdmKIgz.js';
import { r as $, o as p, n as _ } from './imageUtils-DvfyuJBl.js';
import { S as Q, y as G } from './LayerView-DyLUQry8.js';
import { h as L } from './HighlightGraphicContainer-BwD2wM8C.js';
import { i as P } from './RefreshableLayerView-x0QgxRaS.js';
import { P as k, S as A } from './MapServiceLayerViewHelper-CW8iBuXc.js';
import { r as E } from './drapedUtils-DLFS0c48.js';
import './index-DqxZnyqH.js';
import './BidiEngine-QXap_35O.js';
import './rasterizingUtils-7XTZfmJg.js';
import './Rect-CUzevAry.js';
import './quantizationUtils-DsF8tesB.js';
import './ProgramTemplate-YbO5C86v.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './VertexArrayObject-D1MxHjFY.js';
import './config-BOD8--da.js';
import './featureConversionUtils-VaE6vOn5.js';
import './GraphShaderModule-BYUbwtin.js';
import './ShaderBuilder-BRSlH2aw.js';
import './BindType-BBwFZqyN.js';
import './CircularArray-CujHzHWW.js';
import './FeatureMetadata-ChM8hzdp.js';
import './queryUtils-BQJHb1Wr.js';
import './json-Wa8cmqdu.js';
import './timeSupport-C377IZe7.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-B6WA7qpe.js';
import './libtess-DK8QBy4g.js';
import './utils-Cmqt8ueB.js';
import './basicInterfaces-CZwQPxTp.js';
import './mat3f64-q3fE-ZOt.js';
import './normalizeUtilsSync-CsyE3cY3.js';
import './dehydratedFeatures-CmWEPnaj.js';
import './BitmapTechnique-DLPJsOYP.js';
import './TileContainer-CI-QS1wH.js';
import './AGraphicContainer-C_lgpK-h.js';
import './TechniqueInstance-B6XeE7un.js';
import './floorFilterUtils-DZ5C6FQv.js';
import './sublayerUtils-BEPt5qGF.js';
import './popupUtils-DSw4WkC7.js';
const F = [0, 0];
let l = class extends P($(Q(G))) {
  constructor() {
    super(...arguments),
      (this._fetchQueue = null),
      (this._highlightGraphics = new w()),
      (this._highlightView = null),
      (this._popupHighlightHelper = null),
      (this._tileStrategy = null),
      (this.layer = null);
  }
  get resampling() {
    return !('resampling' in this.layer) || this.layer.resampling !== !1;
  }
  get tilemapCache() {
    return 'tilemapCache' in this.layer ? this.layer.tilemapCache : null;
  }
  update(t) {
    var e;
    this._fetchQueue.pause(),
      (this._fetchQueue.state = t.state),
      this._tileStrategy.update(t),
      this._fetchQueue.resume(),
      (e = this._highlightView) == null || e.processUpdate(t);
  }
  attach() {
    const t = 'tileServers' in this.layer ? this.layer.tileServers : null,
      e = this.tilemapCache;
    if (
      ((this._tileInfoView = new y(
        this.layer.tileInfo,
        this.layer.fullExtent,
        e == null ? void 0 : e.effectiveMinLOD,
        e == null ? void 0 : e.effectiveMaxLOD,
      )),
      (this._fetchQueue = new I({
        tileInfoView: this._tileInfoView,
        concurrency: (t && 10 * t.length) || 10,
        process: (i, h) => this.fetchTile(i, h),
        scheduler: this.scheduler,
        priority: T.MAPVIEW_FETCH_QUEUE,
      })),
      (this._tileStrategy = new V({
        cachePolicy: 'keep',
        resampling: this.resampling,
        acquireTile: (i) => this.acquireTile(i),
        releaseTile: (i) => this.releaseTile(i),
        tileInfoView: this._tileInfoView,
      })),
      k(this, this.layer))
    ) {
      const i = (this._highlightView = new S({
        view: this.view,
        graphics: this._highlightGraphics,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new L(this.view.featuresTilingScheme),
        defaultPointSymbolEnabled: !1,
      }));
      this.container.addChild(this._highlightView.container),
        (this._popupHighlightHelper = new A({
          createFetchPopupFeaturesQueryGeometry: (h, s) => E(h, s, this.view),
          highlightGraphics: this._highlightGraphics,
          highlightGraphicUpdated: (h, s) => {
            i.graphicUpdateHandler({ graphic: h, property: s });
          },
          layerView: this,
          updatingHandles: this._updatingHandles,
        }));
    }
    this.requestUpdate(),
      this.addAttachHandles(
        this._updatingHandles.add(
          () => this.resampling,
          () => {
            this.doRefresh();
          },
        ),
      ),
      super.attach();
  }
  detach() {
    var t, e;
    super.detach(),
      this._tileStrategy.destroy(),
      this._fetchQueue.clear(),
      this.container.removeAllChildren(),
      (t = this._popupHighlightHelper) == null || t.destroy(),
      (e = this._highlightView) == null || e.destroy(),
      (this._fetchQueue =
        this._tileStrategy =
        this._tileInfoView =
        this._popupHighlightHelper =
          null);
  }
  async fetchPopupFeaturesAtLocation(t, e) {
    return this._popupHighlightHelper
      ? this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t, e)
      : [];
  }
  highlight(t, e) {
    const i = H(t);
    if (i.length === 0) return g();
    const h = (e == null ? void 0 : e.name) ?? v;
    return (
      this._addHighlightGraphics(i, h),
      g(() => !this.destroyed && this._removeHighlightGraphics(i, h))
    );
  }
  _processHighlight() {
    var e;
    const t = this._getHighlights();
    (e = this._highlightView) == null || e.setHighlight(t);
  }
  _addHighlightGraphics(t, e) {
    this._highlightGraphics.addMany(t),
      this._addHighlights(
        t.map((i) => i.uid),
        e,
      );
  }
  _removeHighlightGraphics(t, e) {
    this._highlightGraphics.removeMany(t),
      this._removeHighlights(
        t.map((i) => i.uid),
        e,
      );
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    var e;
    return C((e = this.layer.tileInfo) == null ? void 0 : e.spatialReference, t);
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(),
        this._tileStrategy.refresh((t) =>
          this._updatingHandles.addPromise(this._enqueueTileFetch(t)),
        );
    }
  }
  acquireTile(t) {
    const e = this._bitmapView.createTile(t),
      i = e.bitmap;
    return (
      ([i.x, i.y] = this._tileInfoView.getTileCoords(F, e.key)),
      (i.resolution = this._tileInfoView.getTileResolution(e.key)),
      ([i.width, i.height] = this._tileInfoView.tileInfo.size),
      this._updatingHandles.addPromise(this._enqueueTileFetch(e)),
      this._bitmapView.addChild(e),
      this.requestUpdate(),
      e
    );
  }
  releaseTile(t) {
    this._fetchQueue.abort(t.key.id),
      this._bitmapView.removeChild(t),
      t.once('detach', () => t.destroy()),
      this.requestUpdate();
  }
  async fetchTile(t, e = {}) {
    return this.tilemapCache
      ? this._fetchTileWithTilemapCache(t, e)
      : this._fetchTileWithoutTilemapCache(t, e);
  }
  async _fetchTileWithoutTilemapCache(t, e = {}) {
    const { signal: i, resamplingLevel: h = 0 } = e;
    try {
      return await this._fetchImage(t, i);
    } catch (s) {
      if (n(s)) throw s;
      if (!this.resampling) return p(this._tileInfoView.tileInfo.size);
      if (h < 3) {
        const r = this._tileInfoView.getTileParentId(t.id);
        if (r) {
          const a = new f(r),
            o = await this._fetchTileWithoutTilemapCache(a, { ...e, resamplingLevel: h + 1 });
          return _(this._tileInfoView, o, a, t);
        }
      }
      return p(this._tileInfoView.tileInfo.size);
    }
  }
  async _fetchTileWithTilemapCache(t, e = {}) {
    const i = this.tilemapCache,
      { signal: h, resamplingLevel: s = 0 } = e,
      r = new f(0, 0, 0, 0);
    let a,
      o = null;
    try {
      if (
        ((o = await i.fetchAvailabilityUpsample(t.level, t.row, t.col, r, { signal: h })),
        !this.resampling && r.level !== t.level)
      )
        return await b(e), p(this._tileInfoView.tileInfo.size);
      a = await this._fetchImage(r, h);
    } catch (m) {
      if (n(m)) throw m;
      if (this.resampling && o === 'unknown' && s < 3) {
        const u = this._tileInfoView.getTileParentId(t.id);
        if (u) {
          r.set(u);
          try {
            a = await this._fetchTileWithTilemapCache(r, { ...e, resamplingLevel: s + 1 });
          } catch {}
        }
      }
    }
    return a
      ? this.resampling
        ? _(this._tileInfoView, a, r, t)
        : a
      : p(this._tileInfoView.tileInfo.size);
  }
  async _enqueueTileFetch(t) {
    if (!this._fetchQueue.has(t.key.id)) {
      try {
        const e = await this._fetchQueue.push(t.key);
        (t.bitmap.source = e),
          (t.bitmap.width = this._tileInfoView.tileInfo.size[0]),
          (t.bitmap.height = this._tileInfoView.tileInfo.size[1]),
          t.once('attach', () => this.requestUpdate());
      } catch (e) {
        n(e) || q.getLogger(this).error(e);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(t, e) {
    return this.layer.fetchImageBitmapTile(t.level, t.row, t.col, { signal: e });
  }
};
c([d()], l.prototype, 'resampling', null),
  c([d()], l.prototype, 'tilemapCache', null),
  (l = c([U('esri.views.2d.layers.TileLayerView2D')], l));
const Bt = l;
export { Bt as default };
