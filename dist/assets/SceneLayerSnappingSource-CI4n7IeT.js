import {
  aI as m,
  io as C,
  bH as f,
  a5 as k,
  A as s,
  B as o,
  R as w,
  g3 as H,
  c3 as E,
  lc as x,
  g5 as _,
  k2 as I,
  aT as $,
  bI as O,
} from './index.lazy-BHTpPf8X.js';
import { h as L } from './WorkerHandle-CqUuhb7p.js';
import { t as h } from './workerHelper-CxRMfAyU.js';
import { f as A } from './edgeProcessing-Qp_0KG47.js';
import { V } from './sphere-vpbSSw5q.js';
import { b as v, n as R } from './SketchOptions-B_OdQfgz.js';
import { c as D } from './RouteLayerInteraction-DEhpUOu7.js';
import { r as P } from './VertexSnappingCandidate-CNnzD8v3.js';
import './index-DqxZnyqH.js';
import './InterleavedLayout-Cj1mfS53.js';
import './BufferView-vfJHrNws.js';
import './types-D0PSWh4d.js';
import './deduplicate-CegCCvIa.js';
import './Indices-CNwiYcS5.js';
import './VertexAttribute-Cq4MnHjR.js';
import './glUtil-BNu-mDGV.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './Normals-DXu46XgO.js';
import './mat3f64-q3fE-ZOt.js';
import './plane-BJrN7SUI.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './geodesicUtils-skq4VGxm.js';
import './projectVectorToVector-BxN8sKqR.js';
import './projectPointToVector-BJ7KR9p7.js';
import './elevationInfoUtils-BlCBaVBo.js';
import './GraphicsLayer-bicIzXAH.js';
import './Stop-BpwwBp10.js';
import './networkEnums-BPK_eLv5.js';
import './PointSnappingHint-CLIQKZ-U.js';
class B extends L {
  constructor(t) {
    super(
      'EdgeProcessingWorker',
      'extract',
      {
        extract: (r) => [r.dataBuffer],
        extractComponentsEdgeLocations: (r) => [r.dataBuffer],
        extractEdgeLocations: (r) => [r.dataBuffer],
      },
      t,
    );
  }
  async process(t, r, i) {
    return i ? A(t) : j(await this.invoke(new y(t), r));
  }
  async extractEdgeLocations(t, r) {
    const i = await this.invokeMethod('extractEdgeLocations', new y(t), r);
    return h(i);
  }
  async extractComponentsEdgeLocations(t, r) {
    const i = await this.invokeMethod('extractComponentsEdgeLocations', new y(t), r);
    return h(i);
  }
}
function j(e) {
  return {
    regular: {
      instancesData: h(e.regular.instancesData),
      lodInfo: { lengths: new Float32Array(e.regular.lodInfo.lengths) },
    },
    silhouette: {
      instancesData: h(e.silhouette.instancesData),
      lodInfo: { lengths: new Float32Array(e.silhouette.lodInfo.lengths) },
    },
    averageEdgeLength: e.averageEdgeLength,
  };
}
class y {
  constructor(t) {
    (this.dataBuffer = t.data.buffer),
      (this.writerSettings = t.writerSettings),
      (this.skipDeduplicate = t.skipDeduplicate),
      (this.indices = m(t.indices) ? t.indices.buffer : t.indices),
      (this.indicesType = m(t.indices) ? (C(t.indices) ? 'Uint32Array' : 'Uint16Array') : 'Array'),
      (this.indicesLength = t.indicesLength);
  }
}
let d = class extends f {
  constructor(e) {
    super(e), (this.availability = 0), (this._ids = new Set());
  }
  destroy() {
    this._workerHandle.destroy(), (this._workerHandle = null);
  }
  initialize() {
    this._workerHandle = new W(this.schedule, {
      fetchAllEdgeLocations: (e, t) => this._fetchAllEdgeLocations(e, t),
    });
  }
  async fetchCandidates(e, t) {
    const r = e.coordinateHelper,
      { point: i } = e,
      n = M;
    this.renderCoordsHelper.toRenderCoords(i, r.spatialReference, n);
    const u = e.distance,
      c = typeof u == 'number' ? u : u.distance,
      p = await this._workerHandle.invoke(
        {
          bounds: V(n[0], n[1], n[2], c),
          returnEdge: e.returnEdge,
          returnVertex: e.vertexMode !== 'none',
        },
        t,
      );
    return (
      p.candidates.sort((g, b) => g.distance - b.distance),
      p.candidates.map((g) => this._convertCandidate(r, g))
    );
  }
  async add(e, t) {
    this._ids.add(e.id), await this._workerHandle.invokeMethod('add', e, t);
  }
  async remove(e, t) {
    this._ids.delete(e.id), await this._workerHandle.invokeMethod('remove', e, t);
  }
  _convertCandidate(e, t) {
    switch (t.type) {
      case 'edge':
        return new D({
          objectId: t.objectId,
          targetPoint: v(this._convertRenderCoordinate(e, t.target)),
          edgeStart: this._convertRenderCoordinate(e, t.start),
          edgeEnd: this._convertRenderCoordinate(e, t.end),
          isDraped: !1,
        });
      case 'vertex':
        return new P({
          objectId: t.objectId,
          targetPoint: v(this._convertRenderCoordinate(e, t.target)),
          isDraped: !1,
        });
    }
  }
  _convertRenderCoordinate({ spatialReference: e }, t) {
    const r = k();
    return this.renderCoordsHelper.fromRenderCoords(t, r, e), R(r);
  }
  async _fetchAllEdgeLocations(e, t) {
    const r = [],
      i = [];
    for (const { id: n, uid: u } of e.components)
      this._ids.has(n) &&
        r.push(
          (async () => {
            const c = await this.fetchEdgeLocations(n, t.signal),
              p = c.locations.buffer;
            return (
              i.push(p),
              {
                id: n,
                uid: u,
                objectIds: c.objectIds,
                locations: p,
                origin: c.origin,
                type: c.type,
              }
            );
          })(),
        );
    return {
      result: { components: (await Promise.all(r)).filter(({ id: n }) => this._ids.has(n)) },
      transferList: i,
    };
  }
};
s([o({ constructOnly: !0 })], d.prototype, 'renderCoordsHelper', void 0),
  s([o({ constructOnly: !0 })], d.prototype, 'fetchEdgeLocations', void 0),
  s([o({ constructOnly: !0 })], d.prototype, 'schedule', void 0),
  s([o({ readOnly: !0 })], d.prototype, 'availability', void 0),
  (d = s(
    [
      w(
        'esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle',
      ),
    ],
    d,
  ));
let W = class extends L {
  constructor(t, r) {
    super('SceneLayerSnappingSourceWorker', 'fetchCandidates', {}, t, {
      strategy: 'dedicated',
      client: r,
    });
  }
};
const M = k();
let a = class extends f {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e) {
    super(e),
      (this.availability = 1),
      (this._updatingHandles = new H()),
      (this._abortController = new AbortController());
  }
  destroy() {
    (this._tracker = E(this._tracker)),
      (this._abortController = x(this._abortController)),
      this._updatingHandles.destroy();
  }
  initialize() {
    const { view: e } = this,
      t = e.resourceController;
    (this._edgeWorker = new B(S(t))),
      (this._workerHandle = new d({
        renderCoordsHelper: this.view.renderCoordsHelper,
        schedule: S(t),
        fetchEdgeLocations: async (r, i) => {
          if (this._tracker == null) throw new Error('tracker-not-initialized');
          return this._tracker.fetchEdgeLocations(r, this._edgeWorker, i);
        },
      })),
      this._updatingHandles.addPromise(this._setupLayerView()),
      this.addHandles([_(this._workerHandle), _(this._edgeWorker)]);
  }
  async fetchCandidates(e, t) {
    return this._workerHandle.fetchCandidates(e, t);
  }
  refresh() {}
  async _setupLayerView() {
    var r;
    if (this.destroyed) return;
    const e = (r = this._abortController) == null ? void 0 : r.signal,
      t = await this.getLayerView();
    t == null ||
      I(e) ||
      (this._tracker = t.trackSnappingSources({
        add: (i, n) => {
          this._updatingHandles.addPromise(this._workerHandle.add({ id: i, bounds: n }, e));
        },
        remove: (i) => {
          this._updatingHandles.addPromise(this._workerHandle.remove({ id: i }, e));
        },
      }));
  }
};
function S(e) {
  return (t) => e.immediate.schedule(t);
}
s([o({ constructOnly: !0 })], a.prototype, 'getLayerView', void 0),
  s([o({ constructOnly: !0 })], a.prototype, 'view', void 0),
  s([o({ readOnly: !0 })], a.prototype, 'updating', null),
  s([o({ readOnly: !0 })], a.prototype, 'availability', void 0),
  (a = s([w('esri.views.interactive.snapping.featureSources.I3SSnappingSource')], a));
let l = class extends f {
  get updating() {
    return this._i3sSources.some((e) => e.updating);
  }
  constructor(e) {
    super(e), (this.availability = 1), (this._i3sSources = []);
  }
  destroy() {
    this._i3sSources.forEach((e) => e.destroy()), (this._i3sSources.length = 0);
  }
  initialize() {
    const { view: e } = this,
      t = this.layerSource.layer;
    this._i3sSources =
      t.type === 'building-scene'
        ? this._getBuildingSceneI3SSources(e, t)
        : [this._getSceneLayerI3SSource(e, t)];
  }
  async fetchCandidates(e, t) {
    const r = await Promise.all(this._i3sSources.map((i) => i.fetchCandidates(e, t)));
    return $(t), r.flat();
  }
  refresh() {
    this._i3sSources.forEach((e) => e.refresh());
  }
  _getBuildingSceneI3SSources(e, t) {
    return t.allSublayers
      .toArray()
      .map((r) =>
        r.type === 'building-component'
          ? new a({
              getLayerView: async () => (await e.whenLayerView(t)).whenSublayerView(r),
              view: e,
            })
          : null,
      )
      .filter(O);
  }
  _getSceneLayerI3SSource(e, t) {
    return new a({
      getLayerView: async () => {
        const r = await e.whenLayerView(t);
        return r.type === 'scene-layer-graphics-3d' ? void 0 : r;
      },
      view: e,
    });
  }
};
s([o({ constructOnly: !0 })], l.prototype, 'layerSource', void 0),
  s([o({ constructOnly: !0 })], l.prototype, 'view', void 0),
  s([o({ readOnly: !0 })], l.prototype, 'updating', null),
  s([o({ readOnly: !0 })], l.prototype, 'availability', void 0),
  (l = s([w('esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource')], l));
export { l as SceneLayerSnappingSource };
