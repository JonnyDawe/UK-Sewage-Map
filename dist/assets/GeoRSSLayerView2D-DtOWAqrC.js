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
} from './index.lazy-BHTpPf8X.js';
import { S as V, y as S } from './LayerView-DyLUQry8.js';
import { t as _ } from './GraphicContainer-veuVqmEF.js';
import { A as T } from './GraphicsView2D-CZ0wAFJ7.js';
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
