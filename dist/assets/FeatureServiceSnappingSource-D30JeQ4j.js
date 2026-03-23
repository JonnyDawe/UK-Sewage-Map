const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/WhereClause-DynWr3o5.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
    ]),
) => i.map((i) => d[i]);
import { _ as B } from './index-DqxZnyqH.js';
import {
  bH as k,
  O as K,
  bk as j,
  gw as x,
  o9 as A,
  oa as X,
  bi as Y,
  ob as ee,
  oc as te,
  od as ie,
  oe as se,
  di as ne,
  A as r,
  B as a,
  R as I,
  d0 as re,
  a5 as oe,
  jw as ae,
  gN as N,
  cv as _,
  cw as Z,
  f5 as S,
  aU as le,
  bM as de,
  bQ as ue,
  dm as he,
  g3 as Q,
  g4 as pe,
  lc as ce,
  bI as L,
  e0 as ye,
  bB as ge,
  bJ as fe,
  dQ as we,
  j as _e,
  jv as ve,
  dg as me,
  aT as U,
  f3 as be,
  iR as f,
  g5 as D,
  fl as J,
  of as Se,
  fQ as Ie,
} from './index.lazy-BHTpPf8X.js';
import { t as Oe } from './memoize-DmxaQ-k8.js';
import { y as He } from './elevationInfoUtils-BlCBaVBo.js';
import { g as ke, t as Te, W as $e } from './boundedPlane-CbbYT-eM.js';
import { h as Fe } from './SketchOptions-B_OdQfgz.js';
import { o as Pe, i as Me } from './queryEngineUtils-DTS1qNhd.js';
import { h as Ce } from './WorkerHandle-CqUuhb7p.js';
import { e as Ee } from './projectVectorToVector-BxN8sKqR.js';
import './sphere-vpbSSw5q.js';
import './mat3f64-q3fE-ZOt.js';
import './plane-BJrN7SUI.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './lineSegment-CpxDVaaQ.js';
import './geodesicUtils-skq4VGxm.js';
import './RouteLayerInteraction-DEhpUOu7.js';
import './GraphicsLayer-bicIzXAH.js';
import './Stop-BpwwBp10.js';
import './networkEnums-BPK_eLv5.js';
import './VertexSnappingCandidate-CNnzD8v3.js';
import './PointSnappingHint-CLIQKZ-U.js';
import './projectPointToVector-BJ7KR9p7.js';
const ze = [
  [0, 179, 255],
  [117, 62, 128],
  [0, 104, 255],
  [215, 189, 166],
  [32, 0, 193],
  [98, 162, 206],
  [102, 112, 129],
  [52, 125, 0],
  [142, 118, 246],
  [138, 83, 0],
  [92, 122, 255],
  [122, 55, 83],
  [0, 142, 255],
  [81, 40, 179],
  [0, 200, 244],
  [13, 24, 127],
  [0, 170, 147],
  [19, 58, 241],
  [22, 44, 35],
];
let H = class extends k {
  constructor(e) {
    super(e),
      (this.updating = !1),
      (this.enablePolygons = !0),
      (this.enableLabels = !0),
      (this._polygons = new Map()),
      (this._labels = new Map()),
      (this._enabled = !0);
  }
  initialize() {
    (this._symbols = ze.map(
      (e) => new K({ color: [e[0], e[1], e[2], 0.6], outline: { color: 'black', width: 1 } }),
    )),
      this.update();
  }
  destroy() {
    (this._enabled = !1), this.clear();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._enabled !== e && ((this._enabled = e), this.update());
  }
  update() {
    if (!this._enabled) return void this.clear();
    const e = (n) => {
        if (n.label != null) return n.label;
        let l = n.lij.toString();
        return (
          n.loadPriority != null && (l += ` (${n.loadPriority})`),
          n.measures && (l += `[${n.measures.lodLevel}]`),
          l
        );
      },
      t = this.getTiles(),
      i = new Array(),
      o = new Set((this._labels.size, this._labels.keys()));
    t.forEach((n, l) => {
      var T;
      const d = n.lij.toString();
      o.delete(d);
      const c = ((T = n.measures) == null ? void 0 : T.lodLevel) ?? n.level,
        p = n.geometry;
      if (this.enablePolygons && !this._polygons.has(d)) {
        const m = new j({ geometry: p, symbol: this._symbols[c % this._symbols.length] });
        this._polygons.set(d, m), i.push(m);
      }
      if (this.enableLabels) {
        const m = e(n),
          $ = l / (t.length - 1),
          O = A(0, 200, $),
          F = A(20, 6, $) / 0.75,
          P = n.loadPriority != null && n.loadPriority >= t.length,
          M = new x([O, P ? 0 : O, P ? 0 : O]),
          C =
            this.view.type === '3d'
              ? () =>
                  new X({
                    verticalOffset: new te({ screenLength: 40 / 0.75 }),
                    callout: new ee({
                      color: new x('white'),
                      border: new se({ color: new x('black') }),
                    }),
                    symbolLayers: new Y([
                      new ie({
                        text: m,
                        halo: { color: 'white', size: 1 / 0.75 },
                        material: { color: M },
                        size: F,
                      }),
                    ]),
                  })
              : () =>
                  new ne({ text: m, haloColor: 'white', haloSize: 1 / 0.75, color: M, size: F }),
          u = this._labels.get(d);
        if (u) {
          const g = C();
          (u.symbol != null && JSON.stringify(g) === JSON.stringify(u.symbol)) || (u.symbol = g);
        } else {
          const g = new j({ geometry: p.extent.center, symbol: C() });
          this._labels.set(d, g), i.push(g);
        }
      }
    });
    const s = new Array();
    o.forEach((n) => {
      const l = this._polygons.get(n);
      l != null && (s.push(l), this._polygons.delete(n));
      const d = this._labels.get(n);
      d != null && (s.push(d), this._labels.delete(n));
    }),
      this.view.graphics.removeMany(s),
      this.view.graphics.addMany(i);
  }
  clear() {
    this.view.graphics.removeMany(Array.from(this._polygons.values())),
      this.view.graphics.removeMany(Array.from(this._labels.values())),
      this._polygons.clear(),
      this._labels.clear();
  }
};
r([a({ constructOnly: !0 })], H.prototype, 'view', void 0),
  r([a({ readOnly: !0 })], H.prototype, 'updating', void 0),
  r([a()], H.prototype, 'enabled', null),
  (H = r([I('esri.views.support.TileTreeDebugger')], H));
function z(e, t) {
  return Te(t.extent, W), ke(W, re(xe, e.x, e.y, 0));
}
const W = $e(),
  xe = oe();
let w = class extends k {
  get tiles() {
    const e = this.tilesCoveringView,
      t = this.pointOfInterest != null ? this.pointOfInterest : this.view.center;
    return e.sort((i, o) => z(t, i) - z(t, o)), e;
  }
  _scaleEnabled() {
    return ae(this.view.scale, this.layer.minScale || 0, this.layer.maxScale || 0);
  }
  get tilesCoveringView() {
    if (
      !this.view.ready ||
      !this.view.featuresTilingScheme ||
      !this.view.state ||
      this.tileInfo == null
    )
      return [];
    if (!this._scaleEnabled) return [];
    const { spans: e, lodInfo: t } = this.view.featuresTilingScheme.getTileCoverage(
        this.view.state,
        0,
      ),
      { level: i } = t,
      o = [];
    for (const { row: s, colFrom: n, colTo: l } of e)
      for (let d = n; d <= l; d++) {
        const c = t.normalizeCol(d),
          p = new N(null, i, s, c);
        this.tileInfo.updateTileInfo(p), o.push(p);
      }
    return o;
  }
  get tileInfo() {
    var e;
    return ((e = this.view.featuresTilingScheme) == null ? void 0 : e.tileInfo) ?? null;
  }
  get tileSize() {
    return this.tileInfo != null ? this.tileInfo.size[0] : 256;
  }
  constructor(e) {
    super(e), (this.pointOfInterest = null);
  }
  initialize() {
    this.addHandles(
      _(
        () => {
          var e, t;
          return (t = (e = this.view) == null ? void 0 : e.state) == null ? void 0 : t.viewpoint;
        },
        () => this.notifyChange('tilesCoveringView'),
        Z,
      ),
    );
  }
};
r([a({ readOnly: !0 })], w.prototype, 'tiles', null),
  r([a({ readOnly: !0 })], w.prototype, '_scaleEnabled', null),
  r([a({ readOnly: !0 })], w.prototype, 'tilesCoveringView', null),
  r([a({ readOnly: !0 })], w.prototype, 'tileInfo', null),
  r([a({ readOnly: !0 })], w.prototype, 'tileSize', null),
  r([a({ constructOnly: !0 })], w.prototype, 'view', void 0),
  r([a({ constructOnly: !0 })], w.prototype, 'layer', void 0),
  r([a()], w.prototype, 'pointOfInterest', void 0),
  (w = r(
    [
      I(
        'esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D',
      ),
    ],
    w,
  ));
let v = class extends k {
  get _sortedTilesCoveringView() {
    var o, s;
    const t = (
        ((s = (o = this.view.featureTiles) == null ? void 0 : o.tiles) == null
          ? void 0
          : s.toArray()) ?? []
      ).map(Ne),
      i = this._effectivePointOfInterest;
    return i != null && t.sort((n, l) => z(i, n) - z(i, l)), t;
  }
  get tileInfo() {
    var t, i;
    return (
      ((i = (t = this.view.featureTiles) == null ? void 0 : t.tilingScheme) == null
        ? void 0
        : i.toTileInfo()) ?? null
    );
  }
  get tileSize() {
    var t;
    return ((t = this.view.featureTiles) == null ? void 0 : t.tileSize) ?? 256;
  }
  get _effectivePointOfInterest() {
    var i;
    const t = this.pointOfInterest;
    return t ?? ((i = this.view.pointsOfInterest) == null ? void 0 : i.focus.location);
  }
  constructor(t) {
    super(t), (this.tiles = []), (this.pointOfInterest = null);
  }
  initialize() {
    this.addHandles([
      _(
        () => this.view.featureTiles,
        (t) => {
          this.removeHandles(q), t && this.addHandles(t.addClient(), q);
        },
        S,
      ),
      _(
        () => this._sortedTilesCoveringView,
        (t) => this._set('tiles', t),
        { initial: !0, equals: (t, i) => le(t, i, (o, s) => o.id === s.id) },
      ),
    ]);
  }
};
function Ne({ lij: [e, t, i], extent: o }) {
  return new N(`${e}/${t}/${i}`, e, t, i, o);
}
r([a({ readOnly: !0 })], v.prototype, 'tiles', void 0),
  r([a({ readOnly: !0 })], v.prototype, '_sortedTilesCoveringView', null),
  r([a({ readOnly: !0 })], v.prototype, 'tileInfo', null),
  r([a({ readOnly: !0 })], v.prototype, 'tileSize', null),
  r([a({ constructOnly: !0 })], v.prototype, 'view', void 0),
  r([a()], v.prototype, 'pointOfInterest', void 0),
  r([a()], v.prototype, '_effectivePointOfInterest', null),
  (v = r(
    [
      I(
        'esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D',
      ),
    ],
    v,
  ));
const q = 'feature-tiles';
let E = class extends H {
  constructor(e) {
    super(e);
  }
  initialize() {
    const e = setInterval(() => this._fetchDebugInfo(), 2e3);
    this.addHandles(de(() => clearInterval(e)));
  }
  getTiles() {
    if (!this._debugInfo) return [];
    const e = new Map(),
      t = new Map();
    this._debugInfo.storedTiles.forEach((s) => {
      e.set(s.data.id, s.featureCount);
    }),
      this._debugInfo.pendingTiles.forEach((s) => {
        e.set(s.data.id, s.featureCount), t.set(s.data.id, s.state);
      });
    const i = (s) => {
        const n = t.get(s),
          l = e.get(s) ?? '?';
        return n
          ? `${n}:${l}
${s}`
          : `store:${l}
${s}`;
      },
      o = new Map();
    return (
      this._debugInfo.storedTiles.forEach((s) => {
        o.set(s.data.id, s.data);
      }),
      this._debugInfo.pendingTiles.forEach((s) => {
        o.set(s.data.id, s.data);
      }),
      Array.from(o.values()).map((s) => ({
        lij: [s.level, s.row, s.col],
        level: s.level,
        geometry: ue.fromExtent(he(s.extent, this.view.spatialReference)),
        label: i(s.id),
      }))
    );
  }
  _fetchDebugInfo() {
    this.handle.getDebugInfo(null).then((e) => {
      (this._debugInfo = e), this.update();
    });
  }
};
r([a({ constructOnly: !0 })], E.prototype, 'handle', void 0),
  (E = r([I('esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger')], E));
let y = class extends k {
  get updating() {
    return this._updatingHandles.updating || this._workerHandleUpdating;
  }
  constructor(e) {
    super(e),
      (this._updatingHandles = new Q()),
      (this._suspendController = null),
      (this.schedule = null),
      (this.hasZ = !1),
      (this.elevationAlignPointsInFeatures = async (t) => {
        const i = [];
        for (const { points: o } of t.pointsInFeatures) for (const { z: s } of o) i.push(s);
        return { elevations: i, drapedObjectIds: new Set(), failedObjectIds: new Set() };
      }),
      (this.queryForSymbologySnapping = async () => ({
        candidates: [],
        sourceCandidateIndices: [],
      })),
      (this.availability = 0),
      (this._workerHandleUpdating = !0),
      (this.updateOutFields = pe(async (t, i) => {
        await this._updatingHandles.addPromise(
          this._workerHandle.invokeMethod('updateOutFields', [...t], i),
        ),
          this._updatingHandles.addPromise(
            this._workerHandle.invokeMethod('whenNotUpdating', {}, i),
          );
      }));
  }
  destroy() {
    (this._suspendController = ce(this._suspendController)),
      this._workerHandle.destroy(),
      this._updatingHandles.destroy();
  }
  initialize() {
    (this._workerHandle = new Re(this.schedule, {
      alignElevation: async (e, { signal: t }) => ({
        result: await this.elevationAlignPointsInFeatures(e.query, t),
      }),
      getSymbologyCandidates: async (e, { signal: t }) => ({
        result: await this.queryForSymbologySnapping(e, t),
      }),
    })),
      this.addHandles([
        this._workerHandle.on(
          'notify-updating',
          ({ updating: e }) => (this._workerHandleUpdating = e),
        ),
        this._workerHandle.on('notify-availability', ({ availability: e }) =>
          this._set('availability', e),
        ),
      ]);
  }
  async setup(e, t) {
    var s;
    const i = Ve(e.layer);
    if (i == null) return;
    const o = {
      configuration: G(e.configuration),
      serviceInfo: i,
      spatialReference: e.spatialReference.toJSON(),
      hasZ: this.hasZ,
      elevationInfo: (s = e.layer.elevationInfo) == null ? void 0 : s.toJSON(),
    };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod('setup', o, t)),
      this._updatingHandles.addPromise(this._workerHandle.invokeMethod('whenNotUpdating', {}, t));
  }
  async configure(e, t) {
    const i = G(e);
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod('configure', i, t)),
      this._updatingHandles.addPromise(this._workerHandle.invokeMethod('whenNotUpdating', {}, t));
  }
  async refresh(e) {
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod('refresh', {}, e)),
      this._updatingHandles.addPromise(this._workerHandle.invokeMethod('whenNotUpdating', {}, e));
  }
  async fetchCandidates(e, t) {
    const { point: i, filter: o, coordinateHelper: s } = e,
      n = {
        ...e,
        point: Ee(i[0], i[1], i[2], s.spatialReference.toJSON()),
        filter: o == null ? void 0 : o.toJSON(),
      };
    return this._workerHandle.invoke(n, t);
  }
  async updateTiles(e, t) {
    const i = {
      tiles: e.tiles,
      tileInfo: e.tileInfo != null ? e.tileInfo.toJSON() : null,
      tileSize: e.tileSize,
    };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod('updateTiles', i, t)),
      this._updatingHandles.addPromise(this._workerHandle.invokeMethod('whenNotUpdating', {}, t));
  }
  async handleEdits(
    { historicMoment: e, addedFeatures: t, deletedFeatures: i, updatedFeatures: o },
    s,
  ) {
    const n = {
      historicMoment: e,
      addedFeatures: (t == null ? void 0 : t.map(({ objectId: l }) => l).filter(L)) ?? [],
      deletedFeatures:
        (i == null
          ? void 0
          : i.map(({ objectId: l, globalId: d }) => ({ objectId: l, globalId: d }))) ?? [],
      updatedFeatures: (o == null ? void 0 : o.map(({ objectId: l }) => l).filter(L)) ?? [],
    };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod('handleEdits', n, s)),
      this._updatingHandles.addPromise(this._workerHandle.invokeMethod('whenNotUpdating', {}, s));
  }
  async setHistoricMoment(e, t) {
    await this._updatingHandles.addPromise(
      this._workerHandle.invokeMethod('setHistoricMoment', { moment: e }, t),
    );
  }
  getDebugInfo(e) {
    return this._workerHandle.invokeMethod('getDebugInfo', {}, e);
  }
  async notifyElevationSourceChange() {
    await this._workerHandle.invokeMethod('notifyElevationSourceChange', {});
  }
  async notifySymbologyChange() {
    await this._workerHandle.invokeMethod('notifySymbologyChange', {});
  }
  async setSymbologySnappingSupported(e) {
    await this._workerHandle.invokeMethod('setSymbologySnappingSupported', e);
  }
  async setSuspended(e) {
    var t;
    (t = this._suspendController) == null || t.abort(),
      (this._suspendController = new AbortController()),
      await this._workerHandle.invokeMethod('setSuspended', e, this._suspendController.signal);
  }
};
function G(e) {
  return {
    filter: e.filter != null ? e.filter.toJSON() : null,
    customParameters: e.customParameters,
    viewType: e.viewType,
  };
}
function Ve(e) {
  var t, i;
  return e.geometryType === 'multipatch' || e.geometryType === 'mesh'
    ? null
    : {
        url: ((t = e.parsedUrl) == null ? void 0 : t.path) ?? '',
        fieldsIndex: e.fieldsIndex.toJSON(),
        geometryType: ye.toJSON(e.geometryType),
        capabilities: e.capabilities,
        objectIdField: e.objectIdField,
        globalIdField: e.globalIdField,
        spatialReference: e.spatialReference.toJSON(),
        timeInfo: (i = e.timeInfo) == null ? void 0 : i.toJSON(),
      };
}
r([a({ constructOnly: !0 })], y.prototype, 'schedule', void 0),
  r([a({ constructOnly: !0 })], y.prototype, 'hasZ', void 0),
  r([a({ constructOnly: !0 })], y.prototype, 'elevationAlignPointsInFeatures', void 0),
  r([a({ constructOnly: !0 })], y.prototype, 'queryForSymbologySnapping', void 0),
  r([a({ readOnly: !0 })], y.prototype, 'updating', null),
  r([a({ readOnly: !0 })], y.prototype, 'availability', void 0),
  r([a()], y.prototype, '_workerHandleUpdating', void 0),
  (y = r(
    [
      I(
        'esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle',
      ),
    ],
    y,
  ));
class Re extends Ce {
  constructor(t, i) {
    super('FeatureServiceSnappingSourceWorker', 'fetchCandidates', {}, t, {
      strategy: 'dedicated',
      client: i,
    });
  }
}
let b = class extends k {
  get tiles() {
    return [new N('0/0/0', 0, 0, 0, ge(-1e8, -1e8, 1e8, 1e8))];
  }
  get tileInfo() {
    return new fe({
      origin: new _e({ x: -1e8, y: 1e8, spatialReference: this.layer.spatialReference }),
      size: [512, 512],
      lods: [new we({ level: 0, scale: 1, resolution: 390625 })],
      spatialReference: this.layer.spatialReference,
    });
  }
  get tileSize() {
    return this.tileInfo.size[0];
  }
  constructor(e) {
    super(e), (this.pointOfInterest = null);
  }
};
r([a({ readOnly: !0 })], b.prototype, 'tiles', null),
  r([a({ readOnly: !0 })], b.prototype, 'tileInfo', null),
  r([a({ readOnly: !0 })], b.prototype, 'tileSize', null),
  r([a({ constructOnly: !0 })], b.prototype, 'layer', void 0),
  r([a()], b.prototype, 'pointOfInterest', void 0),
  (b = r(
    [
      I(
        'esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple',
      ),
    ],
    b,
  ));
let h = class extends k {
  get _updateTilesParameters() {
    return {
      tiles: this._tilesOfInterest.tiles,
      tileInfo: this._tilesOfInterest.tileInfo,
      tileSize: this._tilesOfInterest.tileSize,
    };
  }
  get _layerView() {
    var e;
    return (e = this.view) == null ? void 0 : e.allLayerViews.find((t) => t.layer === this._layer);
  }
  get _isSuspended() {
    var e;
    return ve(this._layer) &&
      !this.layerSource.sublayerSources.some((t) => t.enabled && t.layer.visible)
      ? !0
      : !!this.view &&
          (((e = this._layerView) == null ? void 0 : e.suspended) !== !1 ||
            !this.layerSource.enabled);
  }
  get updating() {
    var e;
    return (
      ((e = this._workerHandle) == null ? void 0 : e.updating) || this._updatingHandles.updating
    );
  }
  get _outFields() {
    var T, m, $, O, F, P, M, C;
    const { view: e, _layerView: t, layerSource: i } = this,
      { layer: o } = i,
      { fieldsIndex: s, timeInfo: n, floorInfo: l, subtypeField: d } = o,
      c = t && 'filter' in t ? t.filter : null,
      p = c != null && c.where && c.where !== '1=1' ? this._getOrLoadWhereFields(c.where, s) : [];
    if (c != null && c.timeExtent && n) {
      const { startField: u, endField: g } = n,
        V = ((T = s.get(u)) == null ? void 0 : T.name) ?? u,
        R = ((m = s.get(g)) == null ? void 0 : m.name) ?? g;
      V && p.push(V), R && p.push(R);
    }
    if (
      e != null &&
      e.map &&
      Fe(e.map) &&
      ($ = e.map.utilityNetworks) != null &&
      $.find((u) => u.isUtilityLayer(o))
    ) {
      const u = (O = o.fieldsIndex.get('assetGroup')) == null ? void 0 : O.name,
        g = (F = o.fieldsIndex.get('assetType')) == null ? void 0 : F.name;
      u && g && (p.push(u), p.push(g));
    }
    if (o && l != null && l.floorField && (P = e == null ? void 0 : e.floors) != null && P.length) {
      const u = ((M = s.get(l.floorField)) == null ? void 0 : M.name) ?? l.floorField;
      u && p.push(u);
    }
    if (d) {
      const u = ((C = s.get(d)) == null ? void 0 : C.name) ?? d;
      u && p.push(u);
    }
    return new Set(p);
  }
  get configuration() {
    var n;
    const { view: e } = this,
      { apiKey: t, customParameters: i } = this._layer,
      o = e != null ? e.type : '2d',
      s = this._layer.createQuery();
    return (
      this._layerView &&
        'effectiveDisplayFilter' in this._layerView &&
        (s.where = me(
          s.where,
          (n = this._layerView.effectiveDisplayFilter) == null ? void 0 : n.where,
        )),
      { filter: s, customParameters: t ? { ...i, token: t } : i, viewType: o }
    );
  }
  get availability() {
    var e;
    return ((e = this._workerHandle) == null ? void 0 : e.availability) ?? 0;
  }
  get _layer() {
    return this.layerSource.layer;
  }
  constructor(e) {
    super(e),
      (this._updatingHandles = new Q()),
      (this._workerHandle = null),
      (this._debug = null),
      (this._memoizedMakeGetGroundElevation = Oe(Me));
  }
  initialize() {
    let e;
    const t = this.view;
    if (t == null || t.destroyed)
      (this._tilesOfInterest = new b({ layer: this._layer })), (e = this._workerHandle = new y());
    else
      switch (t.type) {
        case '2d':
          (this._tilesOfInterest = new w({ view: t, layer: this._layer })),
            (e = this._workerHandle = new y());
          break;
        case '3d': {
          const { resourceController: i } = t,
            o = this._layer;
          (this._tilesOfInterest = new v({ view: t })),
            (e = this._workerHandle =
              new y({
                schedule: (s) => i.immediate.schedule(s),
                hasZ: this._layer.hasZ && (this._layer.returnZ ?? !0),
                elevationAlignPointsInFeatures: async (s, n) => {
                  const l = await t.whenLayerView(o);
                  return U(n), l.elevationAlignPointsInFeatures(s, n);
                },
                queryForSymbologySnapping: async (s, n) => {
                  const l = await t.whenLayerView(o);
                  return U(n), l.queryForSymbologySnapping(s, n);
                },
              })),
            this.addHandles([
              t.elevationProvider.on('elevation-change', ({ context: s }) => {
                const { elevationInfo: n } = o;
                He(s, n) && f(e.notifyElevationSourceChange());
              }),
              _(
                () => o.elevationInfo,
                () => f(e.notifyElevationSourceChange()),
                S,
              ),
              _(
                () => {
                  var s, n;
                  return (n = (s = this._layerView) == null ? void 0 : s.layer) == null
                    ? void 0
                    : n.renderer;
                },
                () => f(e.notifySymbologyChange()),
                S,
              ),
              _(
                () => {
                  var s;
                  return (
                    ((s = this._layerView) == null ? void 0 : s.symbologySnappingSupported) ?? !1
                  );
                },
                (s) => f(e.setSymbologySnappingSupported(s)),
                S,
              ),
              be(
                () => {
                  var s;
                  return (s = this._layerView) == null ? void 0 : s.layer;
                },
                ['edits', 'apply-edits', 'graphic-update'],
                () => e.notifySymbologyChange(),
              ),
            ]);
          break;
        }
      }
    this.addHandles([D(e)]),
      f(
        e.setup(
          {
            layer: this._layer,
            spatialReference: this.spatialReference,
            configuration: this.configuration,
          },
          null,
        ),
      ),
      this._updatingHandles.add(
        () => this._updateTilesParameters,
        () => f(e.updateTiles(this._updateTilesParameters, null)),
        S,
      ),
      this.addHandles([
        _(
          () => this.configuration,
          (i) => f(e.configure(i, null)),
          Z,
        ),
        _(
          () => this._layer.historicMoment,
          (i) => f(e.setHistoricMoment(i)),
          J,
        ),
        _(
          () => this._outFields,
          (i) => f(e.updateOutFields(i)),
          S,
        ),
        _(
          () => this._isSuspended,
          (i) => f(e.setSuspended(i)),
          J,
        ),
      ]),
      t != null &&
        this.addHandles(
          _(
            () => Se.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,
            (i) => {
              i && !this._debug
                ? ((this._debug = new E({ view: t, handle: e })),
                  this.addHandles(D(this._debug), 'debug'))
                : !i && this._debug && this.removeHandles('debug');
            },
            S,
          ),
        ),
      this.addHandles([
        this.layerSource.layer.on('edits', (i) => f(e.handleEdits(i, null))),
        this.layerSource.layer.on('apply-edits', (i) => this._updatingHandles.addPromise(i.result)),
      ]);
  }
  destroy() {
    this._updatingHandles.destroy(), this._tilesOfInterest.destroy();
  }
  refresh() {
    var e;
    (e = this._workerHandle) == null || e.refresh(null);
  }
  async fetchCandidates(e, t) {
    const { coordinateHelper: i, point: o } = e;
    this._tilesOfInterest.pointOfInterest = i.arrayToPoint(o);
    const s = this._memoizedMakeGetGroundElevation(this.view, i.spatialReference);
    return (await this._workerHandle.fetchCandidates({ ...e }, t)).candidates.map((n) => Pe(n, s));
  }
  getDebugInfo(e) {
    return this._workerHandle.getDebugInfo(e);
  }
  _getOrLoadWhereFields(e, t) {
    const { _whereModule: i } = this;
    if (!this._loadWhereModuleTask && !i) {
      const o = Ie(async () => {
        const s = await B(
          () => import('./WhereClause-DynWr3o5.js').then((n) => n.W),
          __vite__mapDeps([0, 1, 2, 3, 4]),
        );
        return (this._whereModule = s.default), this._whereModule;
      });
      return (this._loadWhereModuleTask = o), this._updatingHandles.addPromise(o.promise), [];
    }
    if (!i) return [];
    try {
      return i.create(e, { fieldsIndex: t }).fieldNames;
    } catch {
      return [];
    }
  }
};
r([a({ constructOnly: !0 })], h.prototype, 'spatialReference', void 0),
  r([a({ constructOnly: !0 })], h.prototype, 'layerSource', void 0),
  r([a({ constructOnly: !0 })], h.prototype, 'view', void 0),
  r([a()], h.prototype, '_tilesOfInterest', void 0),
  r([a({ readOnly: !0 })], h.prototype, '_updateTilesParameters', null),
  r([a()], h.prototype, '_layerView', null),
  r([a()], h.prototype, '_isSuspended', null),
  r([a({ readOnly: !0 })], h.prototype, 'updating', null),
  r([a()], h.prototype, '_outFields', null),
  r([a({ readOnly: !0 })], h.prototype, 'configuration', null),
  r([a({ readOnly: !0 })], h.prototype, 'availability', null),
  r([a()], h.prototype, '_loadWhereModuleTask', void 0),
  r([a()], h.prototype, '_whereModule', void 0),
  (h = r([I('esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource')], h));
export { h as FeatureServiceSnappingSource };
