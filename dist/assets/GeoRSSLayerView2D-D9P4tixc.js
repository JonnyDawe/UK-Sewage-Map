import {
  cv as l,
  f5 as h,
  cs as g,
  bi as w,
  cu as f,
  ct as d,
  f6 as n,
  A as u,
  R as b,
} from './index.lazy-BFilFZ3v.js';
import { S as V, y as S } from './LayerView-DO8JWPob.js';
import { t as _ } from './GraphicContainer-B7RGckIJ.js';
import { A as T } from './GraphicsView2D-BJGQDb66.js';
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
let y = class extends V(S) {
  constructor() {
    super(...arguments),
      (this._graphicsViewMap = {}),
      (this._popupTemplates = new Map()),
      (this.graphicsViews = []);
  }
  async hitTest(e, r) {
    if (!this.graphicsViews.length) return null;
    const o = this.layer;
    return this.graphicsViews
      .reverse()
      .flatMap((i) => {
        const t = this._popupTemplates.get(i),
          p = i.hitTest(e);
        for (const s of p) (s.layer = o), (s.sourceLayer = o), (s.popupTemplate = t);
        return p;
      })
      .map((i) => ({ type: 'graphic', graphic: i, layer: o, mapPoint: e }));
  }
  update(e) {
    if (this.graphicsViews) for (const r of this.graphicsViews) r.processUpdate(e);
  }
  attach() {
    this.addAttachHandles([
      l(
        () => {
          var e;
          return (e = this.layer) == null ? void 0 : e.featureCollections;
        },
        (e) => {
          this._clear();
          for (const { popupInfo: r, featureSet: o, layerDefinition: i } of e) {
            const t = g.fromJSON(o),
              p = new w(t.features),
              s = i.drawingInfo,
              c = r ? f.fromJSON(r) : null,
              a = d(s.renderer),
              m = new T({
                requestUpdateCallback: () => this.requestUpdate(),
                view: this.view,
                graphics: p,
                renderer: a,
                container: new _(this.view.featuresTilingScheme),
              });
            (this._graphicsViewMap[t.geometryType] = m),
              this._popupTemplates.set(m, c),
              t.geometryType !== 'polygon' || this.layer.polygonSymbol
                ? t.geometryType !== 'polyline' || this.layer.lineSymbol
                  ? t.geometryType !== 'point' ||
                    this.layer.pointSymbol ||
                    (this.layer.pointSymbol = a.symbol)
                  : (this.layer.lineSymbol = a.symbol)
                : (this.layer.polygonSymbol = a.symbol),
              this.graphicsViews.push(m),
              this.container.addChild(m.container);
          }
        },
        h,
      ),
      l(
        () => {
          var e;
          return (e = this.layer) == null ? void 0 : e.polygonSymbol;
        },
        (e) => {
          this._graphicsViewMap.polygon.renderer = new n({ symbol: e });
        },
        h,
      ),
      l(
        () => {
          var e;
          return (e = this.layer) == null ? void 0 : e.lineSymbol;
        },
        (e) => {
          this._graphicsViewMap.polyline.renderer = new n({ symbol: e });
        },
        h,
      ),
      l(
        () => {
          var e;
          return (e = this.layer) == null ? void 0 : e.pointSymbol;
        },
        (e) => {
          this._graphicsViewMap.point.renderer = new n({ symbol: e });
        },
        h,
      ),
    ]);
  }
  detach() {
    this._clear();
  }
  moveEnd() {}
  viewChange() {
    for (const e of this.graphicsViews) e.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const e of this.graphicsViews) e.destroy();
    (this._graphicsViewMap = {}), this._popupTemplates.clear(), (this.graphicsViews.length = 0);
  }
};
y = u([b('esri.views.2d.layers.GeoRSSLayerView2D')], y);
const ye = y;
export { ye as default };
