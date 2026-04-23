import {
  bH as F,
  gB as E,
  aT as s,
  cv as m,
  f3 as $,
  f5 as d,
  dg as D,
  A as o,
  B as a,
  R as C,
} from './index.lazy-BFilFZ3v.js';
import { t as A } from './memoize-DmxaQ-k8.js';
import { y as I } from './elevationInfoUtils-qqhoEgjX.js';
import { y as G } from './SketchOptions-C5ta2Z9F.js';
import { o as P, i as R } from './queryEngineUtils-vWPl9AWg.js';
import { i as v, r as q, n as w } from './symbologySnappingCandidates-BnyNAQdK.js';
import './index-DShQM7Xx.js';
import './geodesicUtils-8M3LRICx.js';
import './plane-pBXJ95gF.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './sphere-CNvInDV-.js';
import './projectVectorToVector-wO633bLe.js';
import './projectPointToVector-CRQo6haA.js';
import './RouteLayerInteraction-KMUBv1U3.js';
import './GraphicsLayer-DtlaGTcb.js';
import './Stop-Cjo0peC9.js';
import './networkEnums-sJ0thXEO.js';
import './VertexSnappingCandidate-CFCqilfD.js';
import './PointSnappingHint-CiCc_ndE.js';
let n = class extends F {
  get availability() {
    return 1;
  }
  get _snappingElevationAligner() {
    const { view: e } = this,
      { layer: t } = this.layerSource,
      i = e != null && e.type === '3d';
    if (!i || t.type === 'subtype-group') return v();
    const r = async (l, p) => (await E(e.whenLayerView(t), p)).elevationAlignPointsInFeatures(l, p);
    return v(i, { elevationInfo: t.elevationInfo, alignPointsInFeatures: r });
  }
  get _snappingElevationFilter() {
    const { view: e } = this,
      t = e != null && e.type === '3d' && this.layerSource.layer.type !== 'subtype-group';
    return q(t);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this,
      { layer: t } = this.layerSource;
    return e != null && e.type === '3d' && t.type !== 'subtype-group'
      ? w(this._symbologySnappingSupported, async (i, r) => {
          const l = await e.whenLayerView(t);
          return (
            s(r),
            l.queryForSymbologySnapping({ candidates: i, spatialReference: e.spatialReference }, r)
          );
        })
      : w();
  }
  get _layerView() {
    const { view: e } = this;
    if (e == null) return null;
    const { layer: t } = this.layerSource;
    return e.allLayerViews.find((i) => i.layer === t);
  }
  get _layerView3D() {
    const { view: e } = this;
    return e == null || e.type === '2d' ? null : this._layerView;
  }
  get _symbologySnappingSupported() {
    return this._layerView3D != null && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e } = this,
      { layer: t } = this.layerSource;
    e != null &&
      e.type === '3d' &&
      t.type !== 'subtype-group' &&
      this.addHandles([
        e.elevationProvider.on('elevation-change', ({ context: i }) => {
          const { elevationInfo: r } = t;
          I(i, r) && this._snappingElevationAligner.notifyElevationSourceChange();
        }),
        m(
          () => t.elevationInfo,
          () => this._snappingElevationAligner.notifyElevationSourceChange(),
          d,
        ),
        m(
          () => {
            var i;
            return this._layerView3D != null
              ? (i = this._layerView3D.layer) == null
                ? void 0
                : i.renderer
              : null;
          },
          () => this._symbologySnappingFetcher.notifySymbologyChange(),
          d,
        ),
        $(
          () => {
            var i;
            return (i = this._layerView3D) == null ? void 0 : i.layer;
          },
          ['edits', 'apply-edits', 'graphic-update'],
          () => this._symbologySnappingFetcher.notifySymbologyChange(),
        ),
      ]);
  }
  constructor(e) {
    super(e),
      (this.view = null),
      (this.updating = !1),
      (this._memoizedMakeGetGroundElevation = A(R));
  }
  refresh() {}
  async fetchCandidates(e, t) {
    var c, h;
    const { layer: i } = this.layerSource,
      r = i.source;
    if (!(r != null && r.querySnapping)) return [];
    const l = i.createQuery();
    this._layerView &&
      'effectiveDisplayFilter' in this._layerView &&
      (l.where = D(
        l.where,
        (c = this._layerView.effectiveDisplayFilter) == null ? void 0 : c.where,
      ));
    const p = G(e, ((h = this.view) == null ? void 0 : h.type) ?? '2d', l),
      f = await r.querySnapping(p, { signal: t });
    s(t);
    const u = e.coordinateHelper.spatialReference,
      y = await this._snappingElevationAligner.alignCandidates(f.candidates, u, t);
    s(t);
    const g = await this._symbologySnappingFetcher.fetch(y, t);
    s(t);
    const S = g.length === 0 ? y : [...y, ...g],
      _ = this._snappingElevationFilter.filter(p, S),
      b = this._memoizedMakeGetGroundElevation(this.view, u);
    return _.map((V) => P(V, b));
  }
};
o([a({ constructOnly: !0 })], n.prototype, 'layerSource', void 0),
  o([a({ constructOnly: !0 })], n.prototype, 'view', void 0),
  o([a()], n.prototype, '_snappingElevationAligner', null),
  o([a()], n.prototype, '_snappingElevationFilter', null),
  o([a()], n.prototype, '_symbologySnappingFetcher', null),
  o([a()], n.prototype, '_layerView', null),
  o([a()], n.prototype, '_layerView3D', null),
  o([a()], n.prototype, '_symbologySnappingSupported', null),
  (n = o([C('esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource')], n));
export { n as FeatureCollectionSnappingSource };
