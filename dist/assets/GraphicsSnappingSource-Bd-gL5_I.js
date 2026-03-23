import {
  bH as v,
  gB as S,
  aT as c,
  g3 as w,
  f5 as y,
  cv as b,
  f3 as k,
  gC as E,
  fQ as C,
  aM as F,
  gD as $,
  bQ as A,
  gE as m,
  aK as P,
  bR as G,
  bC as R,
  e0 as H,
  e_ as I,
  dB as O,
  A as a,
  B as l,
  R as Z,
} from './index.lazy-BHTpPf8X.js';
import { t as x } from './memoize-DmxaQ-k8.js';
import { a as L } from './normalizeUtilsSync-CsyE3cY3.js';
import { s as z } from './featureConversionUtils-VaE6vOn5.js';
import { u as M } from './executeQueryForSnapping-DfQiMSU0.js';
import { f as W } from './FeatureStore-D4Qn6CHR.js';
import { L as B } from './QueryEngine-mREQOvCF.js';
import { y as N } from './elevationInfoUtils-BlCBaVBo.js';
import { E as T, y as j } from './SketchOptions-B_OdQfgz.js';
import { o as q, i as D } from './queryEngineUtils-DTS1qNhd.js';
import { i as g, r as J, n as f } from './symbologySnappingCandidates-rFBXgnyN.js';
import './index-DqxZnyqH.js';
import './queryUtils-BQJHb1Wr.js';
import './json-Wa8cmqdu.js';
import './timeSupport-C377IZe7.js';
import './BoundsStore-BGfZSiDX.js';
import './PooledRBush-MuiPo_Vg.js';
import './optimizedFeatureQueryEngineAdapter-Dv2fz0sF.js';
import './WhereClauseCache-CnHr_Ntn.js';
import './WhereClause-DynWr3o5.js';
import './quantizationUtils-DsF8tesB.js';
import './utils-Ca511slb.js';
import './utils-qS_J3TRF.js';
import './ClassBreaksDefinition-yFyTg9cf.js';
import './SnappingCandidate-DGkpYqI6.js';
import './FixedIntervalBinParameters-CKrks9ad.js';
import './geodesicUtils-skq4VGxm.js';
import './plane-BJrN7SUI.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './sphere-vpbSSw5q.js';
import './projectVectorToVector-BxN8sKqR.js';
import './projectPointToVector-BJ7KR9p7.js';
import './RouteLayerInteraction-DEhpUOu7.js';
import './GraphicsLayer-bicIzXAH.js';
import './Stop-BpwwBp10.js';
import './networkEnums-BPK_eLv5.js';
import './VertexSnappingCandidate-CNnzD8v3.js';
import './PointSnappingHint-CLIQKZ-U.js';
const _ = 'graphics-collections';
let n = class extends v {
  get updating() {
    return this._updatingHandles.updating;
  }
  get _hasZ() {
    const e = this.view;
    return e != null && e.type === '3d' && this.layerSource.layer.type !== 'map-notes';
  }
  get _snappingElevationAligner() {
    const { view: e } = this,
      { layer: t } = this.layerSource,
      i = e != null && e.type === '3d';
    if (!i || t.type === 'map-notes') return g();
    const s = async (o, r) => (await S(e.whenLayerView(t), r)).elevationAlignPointsInFeatures(o, r);
    return g(i, { elevationInfo: t.elevationInfo, alignPointsInFeatures: s });
  }
  get _snappingElevationFilter() {
    const { view: e } = this,
      t = e != null && e.type === '3d' && this.layerSource.layer.type !== 'map-notes';
    return J(t);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this,
      { layer: t } = this.layerSource,
      i = e != null && e.type === '3d',
      s = this._extrudedPolygonSymbolsCount > 0;
    return i && t.type !== 'map-notes' && s
      ? f(s, async (o, r) => {
          const p = await e.whenLayerView(t);
          return (
            c(r),
            p.queryForSymbologySnapping({ candidates: o, spatialReference: e.spatialReference }, r)
          );
        })
      : f();
  }
  constructor(e) {
    super(e),
      (this.availability = 1),
      (this._sources = { multipoint: null, point: null, polygon: null, polyline: null }),
      (this._loadedWkids = new Set()),
      (this._loadedWkts = new Set()),
      (this._pendingAdds = []),
      (this._extrudedPolygonSymbolsCount = 0),
      (this._updatingHandles = new w()),
      (this._memoizedMakeGetGroundElevation = x(D));
  }
  destroy() {
    for (const e of this._pendingAdds) e.task.abort();
    (this._pendingAdds.length = 0),
      this._mapSources((e) => this._destroySource(e)),
      this._updatingHandles.destroy();
  }
  initialize() {
    this._updatingHandles.add(
      () => this.getGraphicsLayers(),
      (i) => {
        this._updatingHandles.removeHandles(_);
        for (const s of i)
          this._addMany(s.graphics.toArray()),
            this.addHandles(
              [
                s.on('graphic-update', (o) => this._onGraphicUpdate(o)),
                this._updatingHandles.addOnCollectionChange(
                  () => s.graphics,
                  (o) => this._onGraphicsChanged(o),
                ),
              ],
              _,
            );
      },
      y,
    );
    const { view: e } = this,
      { layer: t } = this.layerSource;
    e != null &&
      e.type === '3d' &&
      t.type !== 'map-notes' &&
      e.elevationProvider &&
      this.addHandles([
        e.elevationProvider.on('elevation-change', ({ context: i }) => {
          N(i, t.elevationInfo) && this._snappingElevationAligner.notifyElevationSourceChange();
        }),
        b(
          () => t.elevationInfo,
          () => this._snappingElevationAligner.notifyElevationSourceChange(),
          y,
        ),
        k(
          () => t,
          ['edits', 'apply-edits', 'graphic-update'],
          () => this._symbologySnappingFetcher.notifySymbologyChange(),
        ),
      ]);
  }
  async fetchCandidates(e, t) {
    const {
        point: i,
        coordinateHelper: { spatialReference: s },
      } = e,
      o = await E(this._mapSources((d) => this._fetchCandidatesForSource(d, e, t)));
    c(t);
    const r = this._memoizedMakeGetGroundElevation(this.view, s),
      p = o.flat().map((d) => q(d, r));
    return T(i, p), p;
  }
  async _fetchCandidatesForSource(e, t, i) {
    var u;
    const s = j(t, ((u = this.view) == null ? void 0 : u.type) ?? '2d'),
      o = await M(e.queryEngine, s, i);
    c(i);
    const r = await this._snappingElevationAligner.alignCandidates(
      o.candidates,
      t.coordinateHelper.spatialReference,
      i,
    );
    c(i);
    const p = await this._symbologySnappingFetcher.fetch(r, i);
    c(i);
    const d = p.length === 0 ? r : [...r, ...p];
    return this._snappingElevationFilter.filter(s, d);
  }
  refresh() {}
  _onGraphicUpdate(e) {
    if (this.getGraphicsLayers().some((t) => t.graphics.includes(e.graphic)))
      switch (e.property) {
        case 'geometry':
        case 'visible':
          this._remove(e.graphic), this._addMany([e.graphic]);
      }
  }
  _onGraphicsChanged(e) {
    for (const t of e.removed) this._remove(t);
    this._addMany(e.added);
  }
  _addMany(e) {
    const t = [],
      i = new Map();
    for (const s of e)
      s.geometry != null &&
        (this._needsInitializeProjection(s.geometry.spatialReference)
          ? (t.push(s.geometry.spatialReference), i.set(s.uid, s))
          : this._add(s));
    this._createPendingAdd(t, i);
  }
  _createPendingAdd(e, t) {
    if (!e.length) return;
    const i = C(async (r) => {
      await F(
        e.map((p) => ({ source: p, dest: this.spatialReference })),
        { signal: r },
      ),
        this._markLoadedSpatialReferences(e);
      for (const p of t.values()) this._add(p);
    });
    this._updatingHandles.addPromise(i.promise);
    const s = { task: i, graphics: t },
      o = () => $(this._pendingAdds, s);
    i.promise.then(o, o), this._pendingAdds.push(s);
  }
  _markLoadedSpatialReferences(e) {
    for (const t of e) {
      t.wkid != null && this._loadedWkids.add(t.wkid);
      const i = t.wkt2 || t.wkt;
      i && this._loadedWkts.add(i);
    }
  }
  _add(e) {
    if (e.geometry == null || !e.visible) return;
    let t = e.geometry;
    if (t.type === 'mesh') return;
    t.type === 'extent' && (t = A.fromExtent(t));
    const i = this._ensureSource(t.type);
    if (i == null) return;
    const s = this._createOptimizedFeature(e.uid, t);
    s != null && (i.featureStore.add(s), m(e.symbol) && this._extrudedPolygonSymbolsCount++);
  }
  _needsInitializeProjection(e) {
    if (e.wkid != null && this._loadedWkids.has(e.wkid)) return !1;
    const t = e.wkt2 || e.wkt;
    return (!t || !this._loadedWkts.has(t)) && !P(e, this.spatialReference);
  }
  _createOptimizedFeature(e, t) {
    const i = G(L(t), this.spatialReference);
    if (!i) return null;
    const s = this._ensureGeometryHasZ(i),
      o = z(s, this._hasZ, !1);
    return new R(o, { [h]: e }, null, e);
  }
  _ensureGeometryHasZ(e) {
    if (!this._hasZ) return e;
    const t = (s) => {
        for (; s.length < 3; ) s.push(0);
      },
      i = e.clone();
    switch (((i.hasZ = !0), i.type)) {
      case 'point':
        i.z = i.z ?? 0;
        break;
      case 'multipoint':
        i.points.forEach(t);
        break;
      case 'polyline':
        i.paths.forEach((s) => s.forEach(t));
        break;
      case 'polygon':
        i.rings.forEach((s) => s.forEach(t));
    }
    return i;
  }
  _ensureSource(e) {
    const t = this._sources[e];
    if (t != null) return t;
    const i = this._createSource(e);
    return (this._sources[e] = i), i;
  }
  _createSource(e) {
    const t = H.toJSON(e),
      i = this._hasZ,
      s = new W({ geometryType: t, hasZ: i, hasM: !1 });
    return {
      featureStore: s,
      queryEngine: new B({
        featureStore: s,
        fieldsIndex: O.fromLayerJSON({ fields: [{ name: h, type: 'esriFieldTypeOID', alias: h }] }),
        geometryType: t,
        hasM: !1,
        hasZ: i,
        objectIdField: h,
        spatialReference: this.spatialReference,
        priority: I.SNAPPING,
        scheduler:
          this.view != null && this.view.type === '3d'
            ? this.view.resourceController.scheduler
            : null,
      }),
      type: e,
    };
  }
  _remove(e) {
    this._mapSources((t) => this._removeFromSource(t, e));
    for (const t of this._pendingAdds)
      t.graphics.delete(e.uid), t.graphics.size === 0 && t.task.abort();
  }
  _removeFromSource(e, t) {
    const i = t.uid;
    e.featureStore.has(i) &&
      (e.featureStore.removeById(t.uid), m(t.symbol) && this._extrudedPolygonSymbolsCount--);
  }
  _destroySource(e) {
    e.queryEngine.destroy(), (this._sources[e.type] = null);
  }
  _mapSources(e) {
    const { point: t, polygon: i, polyline: s, multipoint: o } = this._sources,
      r = [];
    return (
      t != null && r.push(e(t)),
      i != null && r.push(e(i)),
      s != null && r.push(e(s)),
      o != null && r.push(e(o)),
      r
    );
  }
};
a([l()], n.prototype, 'getGraphicsLayers', void 0),
  a([l({ constructOnly: !0 })], n.prototype, 'layerSource', void 0),
  a([l({ constructOnly: !0 })], n.prototype, 'spatialReference', void 0),
  a([l({ constructOnly: !0 })], n.prototype, 'view', void 0),
  a([l({ readOnly: !0 })], n.prototype, 'updating', null),
  a([l({ readOnly: !0 })], n.prototype, 'availability', void 0),
  a([l()], n.prototype, '_hasZ', null),
  a([l()], n.prototype, '_snappingElevationAligner', null),
  a([l()], n.prototype, '_snappingElevationFilter', null),
  a([l()], n.prototype, '_symbologySnappingFetcher', null),
  a([l()], n.prototype, '_extrudedPolygonSymbolsCount', void 0),
  (n = a([Z('esri.views.interactive.snapping.featureSources.GraphicsSnappingSource')], n));
const h = 'OBJECTID';
export { n as GraphicsSnappingSource };
