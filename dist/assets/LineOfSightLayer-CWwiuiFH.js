import {
  aj as w,
  bF as O,
  bH as T,
  kP as y,
  A as t,
  B as i,
  j as R,
  cF as j,
  R as h,
  cv as L,
  fl as S,
  bi as v,
  fi as $,
  lJ as F,
  dl as M,
  lK as N,
  lL as C,
  fj as H,
  q as J,
  u as k,
  z as B,
} from './index.lazy-BHTpPf8X.js';
import { c as K } from './Analysis-DIXlC3Wm.js';
import { c as q, b as E } from './featureReferenceUtils-IP8Rq9sc.js';
import { v as f } from './persistable-BzqtFNgb.js';
import { i as V } from './elevationInfoUtils-BlCBaVBo.js';
import './index-DqxZnyqH.js';
import './sphere-vpbSSw5q.js';
import './mat3f64-q3fE-ZOt.js';
import './plane-BJrN7SUI.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './IntersectorInterfaces-CmNINbyF.js';
import './boundedPlane-CbbYT-eM.js';
import './lineSegment-CpxDVaaQ.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './resourceExtension-DaIfonE_.js';
let l = class extends w.JSONSupportMixin(O.ClonableMixin(T)) {
  constructor(e) {
    super(e), (this.position = null), (this.elevationInfo = null), (this.feature = null);
  }
  equals(e) {
    return (
      y(this.position, e.position) &&
      y(this.elevationInfo, e.elevationInfo) &&
      q(this.feature, e.feature)
    );
  }
};
t([i({ type: R, json: { write: { isRequired: !0 } } })], l.prototype, 'position', void 0),
  t([i({ type: j }), f()], l.prototype, 'elevationInfo', void 0),
  t([i(E)], l.prototype, 'feature', void 0),
  (l = t([h('esri.analysis.LineOfSightAnalysisObserver')], l));
const I = l;
let a = class extends w.JSONSupportMixin(O) {
  constructor(s) {
    super(s), (this.position = null), (this.elevationInfo = null), (this.feature = null);
  }
  equals(s) {
    return (
      y(this.position, s.position) &&
      y(this.elevationInfo, s.elevationInfo) &&
      q(this.feature, s.feature)
    );
  }
};
t(
  [
    i({ type: R, json: { write: !0, origins: { 'web-scene': { write: { isRequired: !0 } } } } }),
    f(),
  ],
  a.prototype,
  'position',
  void 0,
),
  t([i({ type: j }), f()], a.prototype, 'elevationInfo', void 0),
  t([i(E)], a.prototype, 'feature', void 0),
  (a = t([h('esri.analysis.LineOfSightAnalysisTarget')], a));
const z = a,
  c = v.ofType(z);
let n = class extends K {
  constructor(e) {
    super(e), (this.type = 'line-of-sight'), (this.observer = null), (this.extent = null);
  }
  initialize() {
    this.addHandles(
      L(
        () => this._computeExtent(),
        (e) => {
          (e == null ? void 0 : e.pending) == null &&
            this._set('extent', e != null ? e.extent : null);
        },
        S,
      ),
    );
  }
  get targets() {
    return this._get('targets') || new c();
  }
  set targets(e) {
    this._set('targets', $(e, this.targets, c));
  }
  get spatialReference() {
    var e;
    return ((e = this.observer) == null ? void 0 : e.position) != null
      ? this.observer.position.spatialReference
      : null;
  }
  get requiredPropertiesForEditing() {
    var e;
    return [(e = this.observer) == null ? void 0 : e.position];
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    return e != null ? e.pending : Promise.resolve();
  }
  _computeExtent() {
    var x;
    const e = this.spatialReference;
    if (((x = this.observer) == null ? void 0 : x.position) == null || e == null) return null;
    const m = (p) => V(p.position, p.elevationInfo) === 'absolute-height',
      o = this.observer.position,
      b = F(o.x, o.y, o.z, o.x, o.y, o.z);
    for (const p of this.targets)
      if (p.position != null) {
        const u = M(p.position, e);
        if (u.pending != null) return { pending: u.pending, extent: null };
        if (u.geometry != null) {
          const { x: A, y: _, z: P } = u.geometry;
          N(b, [A, _, P]);
        }
      }
    const d = C(b, e);
    return (
      (m(this.observer) && this.targets.every(m)) || ((d.zmin = void 0), (d.zmax = void 0)),
      { pending: null, extent: d }
    );
  }
  clear() {
    (this.observer = null), this.targets.removeAll();
  }
};
t([i({ type: ['line-of-sight'] })], n.prototype, 'type', void 0),
  t([i({ type: I, json: { read: !0, write: !0 } })], n.prototype, 'observer', void 0),
  t(
    [i({ cast: H, type: c, nonNullable: !0, json: { read: !0, write: !0 } })],
    n.prototype,
    'targets',
    null,
  ),
  t([i({ value: null, readOnly: !0 })], n.prototype, 'extent', void 0),
  t([i({ readOnly: !0 })], n.prototype, 'spatialReference', null),
  t([i({ readOnly: !0 })], n.prototype, 'requiredPropertiesForEditing', null),
  (n = t([h('esri.analysis.LineOfSightAnalysis')], n));
const g = n,
  X = v.ofType(z);
let r = class extends J(k(B)) {
  constructor(s) {
    super(s),
      (this.type = 'line-of-sight'),
      (this.operationalLayerType = 'LineOfSightLayer'),
      (this.analysis = new g()),
      (this.opacity = 1);
  }
  initialize() {
    this.addHandles(
      L(
        () => this.analysis,
        (s, e) => {
          e != null && e.parent === this && (e.parent = null), s != null && (s.parent = this);
        },
        S,
      ),
    );
  }
  async load() {
    return (
      this.analysis != null && this.addResolvingPromise(this.analysis.waitComputeExtent()), this
    );
  }
  get observer() {
    var s;
    return (s = this.analysis) == null ? void 0 : s.observer;
  }
  set observer(s) {
    const { analysis: e } = this;
    e && (e.observer = s);
  }
  get targets() {
    return this.analysis != null ? this.analysis.targets : new v();
  }
  set targets(s) {
    var e;
    $(s, (e = this.analysis) == null ? void 0 : e.targets);
  }
  get fullExtent() {
    return this.analysis != null ? this.analysis.extent : null;
  }
  get spatialReference() {
    return this.analysis != null ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(s) {
    this.analysis === s && (this.analysis = new g());
  }
};
t([i({ json: { read: !1 }, readOnly: !0 })], r.prototype, 'type', void 0),
  t([i({ type: ['LineOfSightLayer'] })], r.prototype, 'operationalLayerType', void 0),
  t(
    [i({ type: I, json: { read: !0, write: { isRequired: !0, ignoreOrigin: !0 } } })],
    r.prototype,
    'observer',
    null,
  ),
  t(
    [i({ type: X, json: { read: !0, write: { ignoreOrigin: !0, isRequired: !0 } } })],
    r.prototype,
    'targets',
    null,
  ),
  t(
    [i({ type: g, nonNullable: !0, json: { read: !1, write: !1 } })],
    r.prototype,
    'analysis',
    void 0,
  ),
  t([i({ readOnly: !0 })], r.prototype, 'fullExtent', null),
  t([i({ readOnly: !0 })], r.prototype, 'spatialReference', null),
  t(
    [
      i({
        readOnly: !0,
        json: {
          read: !1,
          write: !1,
          origins: {
            service: { read: !1, write: !1 },
            'portal-item': { read: !1, write: !1 },
            'web-document': { read: !1, write: !1 },
          },
        },
      }),
    ],
    r.prototype,
    'opacity',
    void 0,
  ),
  t([i({ type: ['show', 'hide'] })], r.prototype, 'listMode', void 0),
  (r = t([h('esri.layers.LineOfSightLayer')], r));
const ye = r;
export { ye as default };
