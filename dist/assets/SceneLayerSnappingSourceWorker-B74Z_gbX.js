import {
  jm as f,
  d1 as _,
  _ as h,
  a5 as p,
  aT as v,
  al as u,
  A as y,
  R as L,
} from './index.lazy-BHTpPf8X.js';
import { v as j, b as x, j as $ } from './lineSegment-CpxDVaaQ.js';
import { E as P, U as l, i as C } from './sphere-vpbSSw5q.js';
import { b } from './Octree-DeNmc_oR.js';
import { m as S } from './edgeProcessing-Qp_0KG47.js';
import './index-DqxZnyqH.js';
import './plane-BJrN7SUI.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './InterleavedLayout-Cj1mfS53.js';
import './BufferView-vfJHrNws.js';
import './types-D0PSWh4d.js';
import './deduplicate-CegCCvIa.js';
import './Indices-CNwiYcS5.js';
import './VertexAttribute-Cq4MnHjR.js';
import './glUtil-BNu-mDGV.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './Normals-DXu46XgO.js';
const I = 1e3;
function T(t, o, n) {
  const s = P(),
    e = l(s);
  return f(e, e, t, 0.5), f(e, e, o, 0.5), (s[3] = _(e, t)), h(e, e, n), s;
}
let g = class {
  constructor() {
    (this._idToComponent = new Map()),
      (this._components = new b((t) => t.bounds)),
      (this._edges = new b((t) => t.bounds)),
      (this._tmpLineSegment = j()),
      (this._tmpP1 = p()),
      (this._tmpP2 = p()),
      (this._tmpP3 = p()),
      (this.remoteClient = null);
  }
  async fetchCandidates(t, o) {
    await Promise.resolve(), v(o), await this._ensureEdgeLocations(t, o);
    const n = [];
    return (
      this._edges.forEachNeighbor((s) => (this._addCandidates(t, s, n), n.length < I), t.bounds),
      { result: { candidates: n } }
    );
  }
  async _ensureEdgeLocations(t, o) {
    const n = [];
    if (
      (this._components.forEachNeighbor((i) => {
        if (i.info == null) {
          const { id: c, uid: r } = i;
          n.push({ id: c, uid: r });
        }
        return !0;
      }, t.bounds),
      !n.length)
    )
      return;
    const s = { components: n },
      e = await this.remoteClient.invoke('fetchAllEdgeLocations', s, o ?? {});
    for (const i of e.components) this._setFetchEdgeLocations(i);
  }
  async add(t) {
    const o = new m(t.id, t.bounds);
    return this._idToComponent.set(o.id, o), this._components.add([o]), { result: {} };
  }
  async remove(t) {
    const o = this._idToComponent.get(t.id);
    if (o) {
      const n = [];
      this._edges.forEachNeighbor((s) => (s.component === o && n.push(s), !0), o.bounds),
        this._edges.remove(n),
        this._components.remove([o]),
        this._idToComponent.delete(o.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(t) {
    const o = this._idToComponent.get(t.id);
    if (o == null || t.uid !== o.uid) return;
    const n = S.createView(t.locations),
      s = new Array(n.count),
      e = p(),
      i = p();
    for (let d = 0; d < n.count; d++) {
      n.position0.getVec(d, e), n.position1.getVec(d, i);
      const a = T(e, i, t.origin),
        E = new V(o, d, a);
      s[d] = E;
    }
    this._edges.add(s);
    const { objectIds: c, origin: r } = t;
    o.info = { locations: n, objectIds: c, origin: r };
  }
  _addCandidates(t, o, n) {
    const { info: s } = o.component,
      { origin: e, objectIds: i } = s,
      c = s.locations,
      r = c.position0.getVec(o.index, this._tmpP1),
      d = c.position1.getVec(o.index, this._tmpP2);
    h(r, r, e), h(d, d, e);
    const a = i[c.componentIndex.get(o.index)];
    this._addEdgeCandidate(t, a, r, d, n), w(t, a, r, n), w(t, a, d, n);
  }
  _addEdgeCandidate(t, o, n, s, e) {
    if (!t.returnEdge) return;
    const i = l(t.bounds),
      c = x(n, s, this._tmpLineSegment),
      r = $(c, i, this._tmpP3);
    C(t.bounds, r) &&
      e.push({
        type: 'edge',
        objectId: o,
        target: u(r),
        distance: _(i, r),
        start: u(n),
        end: u(s),
      });
  }
};
g = y(
  [
    L(
      'esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker',
    ),
  ],
  g,
);
const Y = g;
function w(t, o, n, s) {
  if (!t.returnVertex || !C(t.bounds, n)) return;
  const e = l(t.bounds);
  s.push({ type: 'vertex', objectId: o, target: u(n), distance: _(e, n) });
}
class m {
  constructor(o, n) {
    (this.id = o), (this.bounds = n), (this.info = null), (this.uid = ++m.uid);
  }
}
m.uid = 0;
class V {
  constructor(o, n, s) {
    (this.component = o), (this.index = n), (this.bounds = s);
  }
}
export { Y as default };
