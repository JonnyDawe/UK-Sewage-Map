const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/FeatureServiceSnappingSource-D30JeQ4j.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-Bz5HPDxq.css',
      'assets/memoize-DmxaQ-k8.js',
      'assets/elevationInfoUtils-BlCBaVBo.js',
      'assets/boundedPlane-CbbYT-eM.js',
      'assets/sphere-vpbSSw5q.js',
      'assets/mat3f64-q3fE-ZOt.js',
      'assets/plane-BJrN7SUI.js',
      'assets/mat4f64-Dk4dwAN8.js',
      'assets/quatf64-aQ5IuZRd.js',
      'assets/lineSegment-CpxDVaaQ.js',
      'assets/SketchOptions-B_OdQfgz.js',
      'assets/geodesicUtils-skq4VGxm.js',
      'assets/projectVectorToVector-BxN8sKqR.js',
      'assets/projectPointToVector-BJ7KR9p7.js',
      'assets/queryEngineUtils-DTS1qNhd.js',
      'assets/RouteLayerInteraction-DEhpUOu7.js',
      'assets/GraphicsLayer-bicIzXAH.js',
      'assets/Stop-BpwwBp10.js',
      'assets/networkEnums-BPK_eLv5.js',
      'assets/VertexSnappingCandidate-CNnzD8v3.js',
      'assets/PointSnappingHint-CLIQKZ-U.js',
      'assets/WorkerHandle-CqUuhb7p.js',
      'assets/FeatureCollectionSnappingSource-Dvc02EAu.js',
      'assets/symbologySnappingCandidates-rFBXgnyN.js',
      'assets/GraphicsSnappingSource-Bd-gL5_I.js',
      'assets/normalizeUtilsSync-CsyE3cY3.js',
      'assets/featureConversionUtils-VaE6vOn5.js',
      'assets/executeQueryForSnapping-DfQiMSU0.js',
      'assets/queryUtils-BQJHb1Wr.js',
      'assets/json-Wa8cmqdu.js',
      'assets/QueryEngine-mREQOvCF.js',
      'assets/WhereClauseCache-CnHr_Ntn.js',
      'assets/WhereClause-DynWr3o5.js',
      'assets/timeSupport-C377IZe7.js',
      'assets/quantizationUtils-DsF8tesB.js',
      'assets/utils-Ca511slb.js',
      'assets/utils-qS_J3TRF.js',
      'assets/ClassBreaksDefinition-yFyTg9cf.js',
      'assets/SnappingCandidate-DGkpYqI6.js',
      'assets/FixedIntervalBinParameters-CKrks9ad.js',
      'assets/FeatureStore-D4Qn6CHR.js',
      'assets/BoundsStore-BGfZSiDX.js',
      'assets/PooledRBush-MuiPo_Vg.js',
      'assets/optimizedFeatureQueryEngineAdapter-Dv2fz0sF.js',
      'assets/SceneLayerSnappingSource-CI4n7IeT.js',
      'assets/workerHelper-CxRMfAyU.js',
      'assets/InterleavedLayout-Cj1mfS53.js',
      'assets/BufferView-vfJHrNws.js',
      'assets/types-D0PSWh4d.js',
      'assets/edgeProcessing-Qp_0KG47.js',
      'assets/deduplicate-CegCCvIa.js',
      'assets/Indices-CNwiYcS5.js',
      'assets/VertexAttribute-Cq4MnHjR.js',
      'assets/glUtil-BNu-mDGV.js',
      'assets/VertexElementDescriptor-BLyltQyJ.js',
      'assets/Normals-DXu46XgO.js',
    ]),
) => i.map((i) => d[i]);
import { _ as x } from './index-DqxZnyqH.js';
import {
  bH as G,
  jv as $,
  jw as B,
  cv as P,
  fl as V,
  dg as z,
  iS as L,
  jx as I,
  cH as X,
  a8 as Z,
  A as d,
  B as h,
  R as N,
  g3 as q,
  jy as J,
  g5 as K,
  cw as W,
  bI as Y,
  gC as ee,
  aT as C,
  js as O,
  a5 as U,
  bU as te,
  gZ as re,
  a0 as ie,
  d6 as ae,
  as as se,
} from './index.lazy-BHTpPf8X.js';
import { j as k } from './elevationInfoUtils-BlCBaVBo.js';
import {
  h as j,
  i as A,
  E as ne,
  N as H,
  s as w,
  j as oe,
  b as le,
  k as ue,
} from './SketchOptions-B_OdQfgz.js';
import { o as ce } from './floorFilterUtils-DZ5C6FQv.js';
import {
  d as de,
  o as pe,
  s as Q,
  n as he,
  c as ye,
  b as ge,
} from './RouteLayerInteraction-DEhpUOu7.js';
import './geodesicUtils-skq4VGxm.js';
import './plane-BJrN7SUI.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './sphere-vpbSSw5q.js';
import './projectVectorToVector-BxN8sKqR.js';
import './projectPointToVector-BJ7KR9p7.js';
import './GraphicsLayer-bicIzXAH.js';
import './Stop-BpwwBp10.js';
import './networkEnums-BPK_eLv5.js';
let y = class extends G {
  set attributeRulesEnabled(e) {
    this._set('attributeRulesEnabled', e), e && this.loadRules();
  }
  get layerView() {
    var e, t;
    return (t = (e = this.view) == null ? void 0 : e.allLayerViews) == null
      ? void 0
      : t.find((r) => r.layer === this.layer);
  }
  get valid() {
    const { _valid: e, snappingSource: t, layer: r } = this;
    return !(!t || !r) && e;
  }
  get subtypeFilter() {
    var a, o;
    const { layer: e, snappingSource: t } = this;
    if (!$(e) || !((a = e.subtypes) != null && a.length) || !t)
      return { mode: 'not-in-use', filter: null };
    const r = t.layerSource.sublayerSources
      .filter((s) => {
        var n;
        return (
          s.enabled &&
          s.layer.visible &&
          B(
            (n = this.view) == null ? void 0 : n.scale,
            s.layer.effectiveScaleRange.minScale,
            s.layer.effectiveScaleRange.maxScale,
          )
        );
      })
      .map((s) => s.layer.subtypeCode);
    if (!r.length) return { mode: 'none-visible', filter: null };
    if (r.length === e.subtypes.length) return { mode: 'all-visible', filter: null };
    const i = ((o = e.fieldsIndex.get(e.subtypeField)) == null ? void 0 : o.name) ?? e.subtypeField;
    return r.length === 1
      ? { mode: 'in-use', filter: `${i} = ${r.getItemAt(0)}` }
      : { mode: 'in-use', filter: `${i} IN (${r.join(', ')})` };
  }
  get floorFilter() {
    const { view: e, layer: t } = this;
    return e && t ? ce({ view: e, layer: t }) : null;
  }
  constructor(e) {
    super(e),
      (this.layer = null),
      (this.snappingSource = null),
      (this.rulesTable = null),
      (this._valid = null);
  }
  initialize() {
    if (!this.snappingSource || !this.layer) return void (this._valid = !1);
    const { layer: e, snappingSource: t } = this;
    if ('refresh' in e) {
      const r = e;
      this.addHandles(r.on('refresh', () => t.refresh()));
    }
    this.loadRules(),
      this.addHandles([
        P(
          () => t.updating,
          (r) => (t.layerSource.updating = r),
          V,
        ),
        P(
          () => t.availability,
          (r) => (t.layerSource.availability = r),
          V,
        ),
      ]);
  }
  getFetchCandidatesParameters(e, t, r) {
    var p, g, f, S, b;
    if (!this.valid) return [];
    const { layer: i, layerView: a, floorFilter: o, rulesTable: s, subtypeFilter: n } = this,
      l = {
        distance: r,
        mode: ((p = this.view) == null ? void 0 : p.type) ?? '2d',
        point: e,
        coordinateHelper: t.coordinateHelper,
        ...fe(),
        filter: a && 'filter' in a ? a.filter : null,
      };
    if ((o && (l.filter = T(l.filter, o)), n.mode !== 'not-in-use' && n.mode !== 'all-visible')) {
      if (n.mode === 'none-visible') return [];
      l.filter
        ? (l.filter.where = z(l.filter.where, n.mode))
        : (l.filter = new L({ where: n.filter }));
    }
    if (!this.attributeRulesEnabled) return [l];
    const u = t.feature,
      c =
        ((g = u == null ? void 0 : u.sourceLayer) == null ? void 0 : g.type) === 'subtype-sublayer'
          ? u.sourceLayer.parent
          : u == null
            ? void 0
            : u.sourceLayer;
    if (
      s &&
      u &&
      j((f = this.view) == null ? void 0 : f.map) &&
      (I(i) || $(i)) &&
      (I(c) || $(c)) &&
      (S = this.view.map.utilityNetworks) != null &&
      S.find((m) => m.isUtilityLayer(c))
    ) {
      if (s.loadStatus !== 'loaded') return [];
      const m = [],
        E = i.layerId,
        v = (b = s.getFeatureSQL(c, u)) == null ? void 0 : b[E];
      if (!v) return [];
      const R = v.anyVertex;
      let F = v.endVertex;
      return (
        F && R && F === R && (F = ''),
        F && m.push({ ...l, returnEdge: !1, vertexMode: 'ends', filter: T(l.filter, F) }),
        R &&
          m.push({
            ...l,
            returnEdge: X('snapping-include-edges-when-applying-any-vertex-rule') ?? !1,
            vertexMode: 'all',
            filter: T(l.filter, R),
          }),
        m
      );
    }
    return [l];
  }
  async loadRules() {
    var i, a, o;
    this._valid = null;
    const { layer: e, view: t, attributeRulesEnabled: r } = this;
    if (r && e && t && j(t == null ? void 0 : t.map) && (I(e) || $(e)))
      try {
        await Promise.allSettled(
          ((i = t.map.utilityNetworks) == null ? void 0 : i.map((n) => n.load())) ?? [],
        );
        const s = (a = t.map.utilityNetworks) == null ? void 0 : a.find((n) => n.isUtilityLayer(e));
        s &&
          ((this.rulesTable = await s.getRulesTable()),
          await ((o = this.rulesTable) == null ? void 0 : o.load()));
      } catch {
        return (
          (this._valid = !1),
          void Z.getLogger('esri.views.interactive.snapping.FeatureSnappingSourceInfo').error(
            'Failed to load rules table for snapping source',
            e.title,
          )
        );
      }
    this._valid = !0;
  }
  remove() {
    this.destroy();
  }
  destroy() {
    var e;
    (e = this.snappingSource) == null || e.destroy();
  }
};
function fe() {
  return { returnEdge: !0, vertexMode: 'all' };
}
function T(e, t) {
  return e == null
    ? new L({ where: t })
    : e.where
      ? new L({ where: z(e.where, t) })
      : new L({ where: t });
}
d([h({ constructOnly: !0 })], y.prototype, 'layer', void 0),
  d([h({ constructOnly: !0 })], y.prototype, 'snappingSource', void 0),
  d([h({ constructOnly: !0 })], y.prototype, 'view', void 0),
  d([h({ value: !1 })], y.prototype, 'attributeRulesEnabled', null),
  d([h()], y.prototype, 'layerView', null),
  d([h()], y.prototype, 'rulesTable', void 0),
  d([h()], y.prototype, 'valid', null),
  d([h()], y.prototype, 'subtypeFilter', null),
  d([h()], y.prototype, 'floorFilter', null),
  d([h()], y.prototype, '_valid', void 0),
  (y = d([N('esri.views.interactive.snapping.FeatureSnappingSourceInfo')], y));
let _ = class extends G {
  get updating() {
    return (
      this._snappingSources.some((e) => {
        var t;
        return (
          (e == null ? void 0 : e.valid) == null ||
          (e.valid === !0 && ((t = e.snappingSource) == null ? void 0 : t.updating) === !0)
        );
      }) || this._updatingHandles.updating
    );
  }
  constructor(e) {
    super(e),
      (this.options = null),
      (this._domain = A.FEATURE),
      (this._updatingHandles = new q()),
      (this._sourceModules = {
        featureService: { module: null, loader: null },
        featureCollection: { module: null, loader: null },
        graphics: { module: null, loader: null },
        notes: { module: null, loader: null },
        scene: { module: null, loader: null },
      });
  }
  initialize() {
    const e = J(
      () => {
        var t;
        return (t = this.options) == null ? void 0 : t._effectiveFeatureSources;
      },
      (t, r) => this._createSourceInfo(t, r),
    );
    (this._snappingSources = e),
      this.addHandles([
        K(e),
        P(
          () => {
            var t;
            return {
              rulesEnabled: !!((t = this.options) != null && t.attributeRulesEnabled),
              sources: this._snappingSources.filter(Y),
            };
          },
          ({ rulesEnabled: t, sources: r }) => {
            for (const i of r) i.attributeRulesEnabled = t;
          },
          W,
        ),
      ]);
  }
  destroy() {
    this._set('options', null), this._updatingHandles.destroy();
  }
  async fetchCandidates(e, t, r, i) {
    var n, l, u;
    if (!(t & this._domain && this.options != null && this.options.effectiveFeatureEnabled))
      return [];
    const a = [],
      o = this._computeScreenSizeDistanceParameters(e, r);
    for (const c of this._snappingSources) {
      if (
        !(c != null && c.valid) ||
        !((l = (n = c.snappingSource) == null ? void 0 : n.layerSource) != null && l.enabled) ||
        ((u = c.layerView) != null && u.suspended)
      )
        continue;
      const p = c.getFetchCandidatesParameters(e, r, o);
      for (const g of p)
        a.push(
          c.snappingSource
            .fetchCandidates(g, i)
            .then((f) =>
              f.filter((S) => !this._candidateIsExcluded(c.snappingSource, S, r.excludeFeature)),
            ),
        );
    }
    const s = (await ee(a)).flat();
    return this._addRightAngleCandidates(s, e, o, r), C(i), ne(e, s), s;
  }
  _addRightAngleCandidates(e, t, r, i) {
    var c, p, g, f, S, b, m, E;
    const a =
        i.vertexHandle != null
          ? (p = (c = i.vertexHandle.rightEdge) == null ? void 0 : c.rightVertex) == null
            ? void 0
            : p.pos
          : i.editGeometryOperations != null && i.editGeometryOperations.data.type === 'polygon'
            ? (f =
                (g = i.editGeometryOperations.data.components[0]) == null
                  ? void 0
                  : g.getFirstVertex()) == null
              ? void 0
              : f.pos
            : null,
      o =
        i.vertexHandle != null
          ? (b = (S = i.vertexHandle.leftEdge) == null ? void 0 : S.leftVertex) == null
            ? void 0
            : b.pos
          : i.editGeometryOperations != null
            ? (E =
                (m = i.editGeometryOperations.data.components[0]) == null
                  ? void 0
                  : m.getLastVertex()) == null
              ? void 0
              : E.pos
            : null,
      { view: s } = this,
      n = H(a, s, i),
      l = H(o, s, i),
      u = e.length;
    for (let v = 0; v < u; v++)
      this._addRightAngleCandidate(e[v], l, t, r, e),
        this._addRightAngleCandidate(e[v], n, t, r, e);
  }
  _addRightAngleCandidate(e, t, r, i, a) {
    if (t == null || !Se(e)) return;
    const o = e.constraint.closestTo(t),
      s = (o[0] - r[0]) / i.x,
      n = (o[1] - r[1]) / i.y,
      { start: l, end: u } = e.constraint;
    if (s * s + n * n <= 1) {
      const c = O(w(o), w(l)) > O(w(o), w(u)) ? l : u,
        p = new de({
          targetPoint: le(o),
          otherVertex: t,
          otherVertexType: pe.NEXT,
          previousVertex: c,
          constraint: new oe(t, o),
          objectId: e.objectId,
          isDraped: e.isDraped,
          domain: A.FEATURE,
        });
      a.push(p);
    }
  }
  _computeScreenSizeDistanceParameters(e, t) {
    let r =
      this.options != null
        ? this.options.distance *
          (t.pointer === 'touch' ? this.options.touchSensitivityMultiplier : 1)
        : 0;
    return this.view == null
      ? { x: r, y: r, z: r, distance: r }
      : this.view.type === '2d'
        ? ((r *= this.view.resolution), { x: r, y: r, z: r, distance: r })
        : this._computeScreenSizeDistanceParameters3D(e, r, this.view, t);
  }
  _computeScreenSizeDistanceParameters3D(e, t, r, i) {
    const { spatialReference: a } = i;
    r.renderCoordsHelper.toRenderCoords(e, a, D);
    const o = r.state.camera.computeScreenPixelSizeAt(D),
      s = o * r.renderCoordsHelper.unitInMeters,
      n = s / te(a),
      l = s / re(a),
      u = t * n,
      c = t * l,
      p = Q(e, a, k, r),
      g = p ? M(p, e, n, 0, 0, r, i) : 0,
      f = p ? M(p, e, 0, n, 0, r, i) : 0,
      S = p ? M(p, e, 0, 0, l, r, i) : 0;
    return {
      x: g === 0 ? 0 : u / g,
      y: f === 0 ? 0 : u / f,
      z: S === 0 ? 0 : c / S,
      distance: o * t,
    };
  }
  _candidateIsExcluded(e, t, r) {
    if (r == null) return !1;
    const i = this._getCandidateObjectId(t);
    if (i == null) return !1;
    const a = e.layerSource.layer;
    return a.type === 'graphics'
      ? r.uid === i
      : r.sourceLayer === a &&
          !(!r.attributes || !('objectIdField' in a)) &&
          r.attributes[a.objectIdField] === i;
  }
  _getCandidateObjectId(e) {
    return e instanceof he ? e.objectId : null;
  }
  async _createSourceInfo(e, t) {
    const r = e.layer;
    r.loaded || (await r.load(), C(t));
    const { view: i } = this,
      a = await this._createFeatureSnappingSourceType(e);
    return C(t), new y(a == null ? {} : { snappingSource: a, view: i, layer: r });
  }
  async _createFeatureSnappingSourceType(e) {
    switch (e.layer.type) {
      case 'feature':
      case 'geojson':
      case 'csv':
      case 'oriented-imagery':
      case 'subtype-group':
      case 'wfs':
        return this._createFeatureSnappingSourceFeatureLayer(e);
      case 'graphics':
        return this._createFeatureSnappingSourceGraphicsLayer(e);
      case 'map-notes':
        return this._createFeatureSnappingSourceMapNotesLayer(e);
      case 'scene':
      case 'building-scene':
        return this._createFeatureSnappingSourceSceneLayer(e);
    }
    return null;
  }
  async _createFeatureSnappingSourceSceneLayer(e) {
    const { view: t } = this;
    return t == null || t.type !== '3d'
      ? null
      : new (await this._getSourceModule('scene')).SceneLayerSnappingSource({
          layerSource: e,
          view: t,
        });
  }
  async _createFeatureSnappingSourceFeatureLayer(e) {
    var t;
    switch ((t = e.layer.source) == null ? void 0 : t.type) {
      case 'feature-layer':
      case 'oriented-imagery':
        return new (await this._getSourceModule('featureService')).FeatureServiceSnappingSource({
          spatialReference: this.spatialReference,
          view: this.view,
          layerSource: e,
        });
      case 'memory':
      case 'csv':
      case 'geojson':
      case 'wfs':
        return e.layer.geometryType === 'mesh'
          ? null
          : new (await this._getSourceModule('featureCollection')).FeatureCollectionSnappingSource({
              layerSource: e,
              view: this.view,
            });
    }
    return null;
  }
  async _createFeatureSnappingSourceGraphicsLayer(e) {
    return new (await this._getSourceModule('graphics')).GraphicsSnappingSource({
      getGraphicsLayers: () => [e.layer],
      spatialReference: this.spatialReference,
      view: this.view,
      layerSource: e,
    });
  }
  async _createFeatureSnappingSourceMapNotesLayer(e) {
    return new (await this._getSourceModule('notes')).GraphicsSnappingSource({
      getGraphicsLayers: () => {
        var t;
        return ((t = e.layer.sublayers) == null ? void 0 : t.toArray()) ?? [];
      },
      spatialReference: this.spatialReference,
      view: this.view,
      layerSource: e,
    });
  }
  async _getSourceModule(e) {
    const t = this._sourceModules[e];
    if (t.loader == null) {
      const r = this._loadSourceModule(e),
        i = { module: null, loader: r };
      this._sourceModules[e] = i;
      const a = await r,
        o = { module: a, loader: r };
      return (this._sourceModules[e] = o), a;
    }
    return t.module == null ? t.loader : t.module;
  }
  _loadSourceModule(e) {
    const t = this._updatingHandles;
    switch (e) {
      case 'featureService':
        return t.addPromise(
          x(
            () => import('./FeatureServiceSnappingSource-D30JeQ4j.js'),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
              24, 25,
            ]),
          ),
        );
      case 'featureCollection':
        return t.addPromise(
          x(
            () => import('./FeatureCollectionSnappingSource-Dvc02EAu.js'),
            __vite__mapDeps([
              26, 3, 1, 2, 4, 5, 6, 14, 15, 10, 9, 11, 12, 8, 16, 17, 18, 19, 20, 21, 22, 23, 24,
              27,
            ]),
          ),
        );
      case 'graphics':
      case 'notes':
        return t.addPromise(
          x(
            () => import('./GraphicsSnappingSource-Bd-gL5_I.js'),
            __vite__mapDeps([
              28, 3, 1, 2, 4, 5, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
              46, 47, 6, 14, 15, 10, 9, 11, 12, 8, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27,
            ]),
          ),
        );
      case 'scene':
        return t.addPromise(
          x(
            () => import('./SceneLayerSnappingSource-CI4n7IeT.js'),
            __vite__mapDeps([
              48, 3, 1, 2, 4, 25, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 8, 9, 10, 11, 12, 14,
              15, 16, 17, 6, 19, 20, 21, 22, 23, 24,
            ]),
          ),
        );
    }
  }
  get test() {}
};
function Se(e) {
  return (e instanceof ye || e instanceof ge) && !me(e);
}
function me({ constraint: { start: e, end: t } }) {
  const r = ae(e, t),
    i = O(w(e), w(t));
  return r < se() || i / r < _e;
}
function M(e, t, r, i, a, o, { spatialReference: s }) {
  const n = ie(ve, t);
  (n[0] += r), (n[1] += i), (n[2] += a);
  const l = Q(n, s, k, o);
  return l ? ue(l, e) : 1 / 0;
}
d([h({ constructOnly: !0 })], _.prototype, 'spatialReference', void 0),
  d([h({ constructOnly: !0 })], _.prototype, 'view', void 0),
  d([h()], _.prototype, 'options', void 0),
  d([h({ readOnly: !0 })], _.prototype, 'updating', null),
  d([h()], _.prototype, '_snappingSources', void 0),
  (_ = d([N('esri.views.interactive.snapping.FeatureSnappingEngine')], _));
const D = U(),
  ve = U(),
  _e = 1e-4;
export { _ as FeatureSnappingEngine };
