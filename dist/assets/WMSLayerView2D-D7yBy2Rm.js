import {
  A as a,
  B as m,
  R as E,
  f8 as S,
  a7 as f,
  aT as F,
  bL as M,
  a8 as C,
  cv as R,
  G as q,
} from './index.lazy-BFilFZ3v.js';
import { r as $ } from './BitmapContainer-DnEm5kqd.js';
import { S as L, y as U } from './LayerView-DO8JWPob.js';
import { _ as V } from './ExportStrategy-ZTwoIdN2.js';
import { i as W } from './RefreshableLayerView-eBNYOMvq.js';
import { a as A } from './ExportWMSImageParameters-BQvly8Qt.js';
import { i as H } from './timeSupport-BYd6FGru.js';
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
const _ = (r) => {
  let t = class extends r {
    initialize() {
      this.exportImageParameters = new A({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = S(this.exportImageParameters);
    }
    get exportImageVersion() {
      var e;
      return (
        (e = this.exportImageParameters) == null || e.commitProperty('version'),
        this.commitProperty('timeExtent'),
        (this._get('exportImageVersion') || 0) + 1
      );
    }
    get timeExtent() {
      var e;
      return H(
        this.layer,
        (e = this.view) == null ? void 0 : e.timeExtent,
        this._get('timeExtent'),
      );
    }
    async fetchPopupFeaturesAtLocation(e, s) {
      const { layer: o } = this;
      if (!e)
        throw new f('wmslayerview:fetchPopupFeatures', 'Nothing to fetch without area', {
          layer: o,
        });
      const { popupEnabled: d } = o;
      if (!d)
        throw new f('wmslayerview:fetchPopupFeatures', 'popupEnabled should be true', {
          popupEnabled: d,
        });
      const i = this.createFetchPopupFeaturesQuery(e);
      if (!i) return [];
      const { extent: n, width: p, height: h, x: c, y: l } = i;
      if (!(n && p && h))
        throw new f(
          'wmslayerview:fetchPopupFeatures',
          'WMSLayer does not support fetching features.',
          { extent: n, width: p, height: h },
        );
      const y = await o.fetchFeatureInfo(n, p, h, c, l);
      return F(s), y;
    }
  };
  return (
    a([m()], t.prototype, 'exportImageParameters', void 0),
    a([m({ readOnly: !0 })], t.prototype, 'exportImageVersion', null),
    a([m()], t.prototype, 'layer', void 0),
    a([m({ readOnly: !0 })], t.prototype, 'timeExtent', null),
    (t = a([E('esri.views.layers.WMSLayerView')], t)),
    t
  );
};
let u = class extends _(W(L(U))) {
  constructor() {
    super(...arguments), (this.bitmapContainer = new $());
  }
  supportsSpatialReference(r) {
    return this.layer.serviceSupportsSpatialReference(r);
  }
  update(r) {
    this.strategy.update(r).catch((t) => {
      M(t) || C.getLogger(this).error(t);
    });
  }
  attach() {
    const { layer: r } = this,
      { imageMaxHeight: t, imageMaxWidth: e } = r;
    (this.bitmapContainer = new $()),
      this.container.addChild(this.bitmapContainer),
      (this.strategy = new V({
        container: this.bitmapContainer,
        fetchSource: this.fetchImage.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
        imageMaxHeight: t,
        imageMaxWidth: e,
        imageRotationSupported: !1,
        imageNormalizationSupported: !1,
        hidpi: !1,
      })),
      this.addAttachHandles(
        R(
          () => this.exportImageVersion,
          () => this.requestUpdate(),
        ),
      );
  }
  detach() {
    (this.strategy = S(this.strategy)), this.container.removeAllChildren();
  }
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(r) {
    const { view: t, bitmapContainer: e } = this,
      { x: s, y: o } = r,
      { spatialReference: d } = t;
    let i,
      n = 0,
      p = 0;
    if (
      (e.children.some((y) => {
        const { width: w, height: v, resolution: b, x: g, y: x } = y,
          I = g + b * w,
          P = x - b * v;
        return (
          s >= g &&
          s <= I &&
          o <= x &&
          o >= P &&
          ((i = new q({ xmin: g, ymin: P, xmax: I, ymax: x, spatialReference: d })),
          (n = w),
          (p = v),
          !0)
        );
      }),
      !i)
    )
      return null;
    const h = i.width / n,
      c = Math.round((s - i.xmin) / h),
      l = Math.round((i.ymax - o) / h);
    return { extent: i, width: n, height: p, x: c, y: l };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(r, t, e, s) {
    return this.layer.fetchImageBitmap(r, t, e, { timeExtent: this.timeExtent, ...s });
  }
};
a([m()], u.prototype, 'strategy', void 0),
  a([m()], u.prototype, 'updating', void 0),
  (u = a([E('esri.views.2d.layers.WMSLayerView2D')], u));
const mt = u;
export { mt as default };
