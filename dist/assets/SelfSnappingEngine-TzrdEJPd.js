import {
  bU as Z,
  n9 as H,
  a5 as F,
  na as K,
  nb as D,
  nc as G,
  nd as A,
  js as z,
  gn as I,
  gm as U,
  ne as W,
  nf as X,
  ng as Y,
  jm as ee,
  Z as te,
  d0 as se,
  nh as ie,
  bH as re,
  bi as ne,
  A as S,
  B as q,
  R as oe,
} from './index.lazy-BFilFZ3v.js';
import { j as x } from './elevationInfoUtils-qqhoEgjX.js';
import {
  p as P,
  N as f,
  u as y,
  s as p,
  o as $,
  b as C,
  n as B,
  q as R,
  M as J,
  J as ae,
  r as he,
  I as M,
  e as N,
  j as de,
  t as le,
  i as ce,
  E as pe,
} from './SketchOptions-C5ta2Z9F.js';
import {
  s as m,
  r as ge,
  g as fe,
  p as L,
  d as ue,
  o as xe,
  h as me,
} from './RouteLayerInteraction-KMUBv1U3.js';
import { u as Q } from './geodesicLengthMeasurementUtils-BaZc0q_w.js';
import './index-DShQM7Xx.js';
import './geodesicUtils-8M3LRICx.js';
import './plane-pBXJ95gF.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './sphere-CNvInDV-.js';
import './projectVectorToVector-wO633bLe.js';
import './projectPointToVector-CRQo6haA.js';
import './GraphicsLayer-DtlaGTcb.js';
import './Stop-Cjo0peC9.js';
import './networkEnums-sJ0thXEO.js';
import './geometryEngine-Bbu98ZOV.js';
import './geometryEngineBase-B0ZyeKAX.js';
import './_commonjsHelpers-DCkdB7M8.js';
import './hydrated-C5R_oxgR.js';
class k {
  constructor(s, e) {
    (this.view = s),
      (this.options = e),
      (this.squaredShortLineThreshold = P.shortLineThreshold * P.shortLineThreshold);
  }
  snap(s, e) {
    return e.vertexHandle != null
      ? e.vertexHandle.type !== 'vertex'
        ? []
        : this.snapExistingVertex(s, e)
      : this.snapNewVertex(s, e);
  }
  edgeExceedsShortLineThreshold(s, e) {
    return this.exceedsShortLineThreshold(
      f(s.leftVertex.pos, this.view, e),
      f(s.rightVertex.pos, this.view, e),
      e,
    );
  }
  exceedsShortLineThreshold(s, e, { spatialReference: t }) {
    return (
      this.squaredShortLineThreshold === 0 ||
      y(m(e, t, x, this.view), m(s, t, x, this.view)) > this.squaredShortLineThreshold
    );
  }
  isVertical(s, e, { spatialReference: t }) {
    const i = Z(t);
    return H(p(s), p(e)) * i < P.verticalLineThresholdMeters;
  }
  squaredProximityThreshold(s) {
    return s === 'touch'
      ? this._squaredTouchProximityThreshold
      : this._squaredMouseProximityThreshold;
  }
  get _squaredMouseProximityThreshold() {
    return this.options.distance * this.options.distance;
  }
  get _squaredTouchProximityThreshold() {
    const { distance: s, touchSensitivityMultiplier: e } = this.options,
      t = s * e;
    return t * t;
  }
}
class ve extends k {
  snapNewVertex(s, e) {
    const t = e.editGeometryOperations.data.components[0],
      i = t.edges.length,
      r = [];
    if (i < 1) return r;
    const { spatialReference: n } = e,
      a = m(s, n, x, this.view),
      { view: o } = this,
      h = t.edges[i - 1];
    let d = h;
    do {
      if (this.edgeExceedsShortLineThreshold(d, e)) {
        const g = $(d, o, e);
        this._processCandidateProposal(g.left, g.right, s, a, e, r);
      }
      d = d.leftVertex.leftEdge;
    } while (d && d !== h);
    return r;
  }
  snapExistingVertex(s, e) {
    const t = [],
      i = e.vertexHandle,
      r = i.component;
    if (r.edges.length < 2) return t;
    const { view: n } = this,
      { spatialReference: a } = e,
      o = m(s, a, x, n),
      h = i.leftEdge,
      d = i.rightEdge;
    h &&
      d &&
      this.edgeExceedsShortLineThreshold(h, e) &&
      this.edgeExceedsShortLineThreshold(d, e) &&
      this._processCandidateProposal(
        f(h.leftVertex.pos, n, e),
        f(d.rightVertex.pos, n, e),
        s,
        o,
        e,
        t,
      );
    const g = r.edges[0];
    let c = g;
    do {
      if (c !== i.leftEdge && c !== i.rightEdge && this.edgeExceedsShortLineThreshold(c, e)) {
        const u = $(c, n, e);
        this._processCandidateProposal(u.left, u.right, s, o, e, t);
      }
      c = c.rightVertex.rightEdge;
    } while (c && c !== g);
    return t;
  }
  _processCandidateProposal(s, e, t, i, r, n) {
    var g;
    const { spatialReference: a, pointer: o } = r,
      h = F();
    Ee(h, s, e, t, r);
    const d = C(B(h));
    y(i, m(d, a, x, this.view)) < this.squaredProximityThreshold(o) &&
      n.push(
        new ge({
          lineStart: s,
          lineEnd: e,
          targetPoint: d,
          isDraped: ((g = r.elevationInfo) == null ? void 0 : g.mode) === 'on-the-ground',
        }),
      );
  }
}
function Ee(l, s, e, t, i) {
  we(l, s, e, t, i) || Ve(l, t, s, e);
}
function we(l, s, e, t, { spatialReference: i }) {
  const r = R(s, e, i, i);
  if (r == null) return !1;
  const n = R(e, t, i, i);
  if (n == null) return !1;
  const a = Q(e, t, i);
  if (a == null) return !1;
  const o = Math.abs(K.shortestSignedDiff(r, n)) > Math.PI / 2 ? D.normalize(r + Math.PI) : r;
  return J(l, e, i, G(a, 'meters'), A(o, 'radians', 'geographic'), 'geodesic'), (l[2] = t[2]), !0;
}
function Ve(l, s, e, t) {
  ae(s, { start: e, end: t, type: he.LINE }, l), (l[2] = s[2]);
}
let Pe = class extends k {
  snapNewVertex(s, e) {
    const t = e.editGeometryOperations.data.components[0],
      i = t.edges.length,
      r = t.vertices.length,
      n = [];
    if (i < 2) return n;
    const { view: a } = this,
      o = m(s, e.spatialReference, x, a),
      h = f(t.vertices[r - 1].pos, a, e),
      d = f(t.vertices[0].pos, a, e),
      g = t.edges[i - 1];
    let c = g;
    do {
      if (this.edgeExceedsShortLineThreshold(c, e)) {
        const u = $(c, a, e);
        this._checkEdgeForParallelLines(u, h, s, o, e, n),
          this._checkEdgeForParallelLines(u, d, s, o, e, n);
      }
      c = c.leftVertex.leftEdge;
    } while (c && c !== g);
    return n;
  }
  snapExistingVertex(s, e) {
    const t = [],
      i = e.vertexHandle,
      r = i.component;
    if (r.edges.length < 3) return t;
    const { view: n } = this,
      a = m(s, e.spatialReference, x, n),
      o = i.leftEdge,
      h = i.rightEdge,
      d = r.vertices[0],
      g = f(d.pos, n, e),
      c = r.vertices.length,
      u = r.vertices[c - 1],
      w = f(u.pos, n, e),
      _ = r.edges[0];
    let v = _;
    do {
      if (v !== o && v !== h && this.edgeExceedsShortLineThreshold(v, e)) {
        const T = $(v, n, e);
        o && this._checkEdgeForParallelLines(T, f(o.leftVertex.pos, n, e), s, a, e, t),
          h && this._checkEdgeForParallelLines(T, f(h.rightVertex.pos, n, e), s, a, e, t),
          i === d
            ? this._checkEdgeForParallelLines(T, w, s, a, e, t)
            : i === u && this._checkEdgeForParallelLines(T, g, s, a, e, t);
      }
      v = v.rightVertex.rightEdge;
    } while (v && v !== _);
    return t;
  }
  _checkEdgeForParallelLines(s, e, t, i, r, n) {
    var c;
    const a = s.left,
      o = s.right;
    if ((M(E, p(e), p(a), p(o)), z(E, p(e)) < P.parallelLineThreshold)) return;
    M(E, p(t), p(a), p(o), p(e));
    const { spatialReference: h, pointer: d } = r,
      g = C(N(E[0], E[1], t[2]));
    if (y(i, m(g, h, x, this.view)) < this.squaredProximityThreshold(d)) {
      if (this.isVertical(g, e, r) || this.isVertical(a, o, r) || ye(s, n)) return;
      n.push(
        new fe({
          referenceLine: s,
          lineStart: e,
          targetPoint: g,
          isDraped: ((c = r.elevationInfo) == null ? void 0 : c.mode) === 'on-the-ground',
        }),
      );
    }
  }
};
function ye(l, s) {
  const e = l.left,
    t = l.right;
  for (const i of s)
    if (
      (M(E, p(t), p(i.constraint.start), p(i.constraint.end), p(e)),
      z(E, p(t)) < P.parallelLineThreshold)
    )
      return i.addReferenceLine(l), !0;
  return !1;
}
const E = I();
class _e extends k {
  snapNewVertex(s, e) {
    const t = e.editGeometryOperations.data.components[0],
      i = [];
    if (t.vertices.length < 2) return i;
    const { view: r } = this,
      n = m(s, e.spatialReference, x, r),
      a = t.vertices.at(-1);
    this._checkForSnappingCandidate(L.LastVertex, i, a.leftEdge, a, a.leftEdge.leftVertex, s, n, e);
    const o = t.vertices[0];
    return (
      this._checkForSnappingCandidate(
        L.FirstVertex,
        i,
        o.rightEdge,
        o,
        o.rightEdge.rightVertex,
        s,
        n,
        e,
      ),
      i
    );
  }
  snapExistingVertex(s, e) {
    const t = [],
      i = e.vertexHandle;
    if (i.component.vertices.length < 3) return t;
    const { view: r } = this,
      n = m(s, e.spatialReference, x, r),
      a = i.leftEdge,
      o = i.rightEdge;
    if (a != null && a.leftVertex.leftEdge) {
      const h = a.leftVertex.leftEdge;
      this._checkForSnappingCandidate(L.ExistingEdge, t, h, h.rightVertex, h.leftVertex, s, n, e);
    }
    if (o != null && o.rightVertex.rightEdge) {
      const h = o.rightVertex.rightEdge;
      this._checkForSnappingCandidate(L.ExistingEdge, t, h, h.leftVertex, h.rightVertex, s, n, e);
    }
    return t;
  }
  _checkForSnappingCandidate(s, e, t, i, r, n, a, o) {
    if (!this.edgeExceedsShortLineThreshold(t, o)) return;
    const h = this.view,
      d = f(i.pos, h, o),
      g = f(r.pos, h, o);
    Te(b, g, d, n, o), this._checkForSnappingCandidateAlongProjectedRay(s, e, g, d, b, n, a, o);
  }
  _checkForSnappingCandidateAlongProjectedRay(s, e, t, i, r, n, a, o) {
    var v;
    const { spatialReference: h, pointer: d } = o,
      g = U(j, p(n), p(i)),
      c = W(r, g) / X(r),
      u = Y(j, p(i), r, c),
      w = C(N(u[0], u[1], n[2]));
    if (
      y(a, m(w, h, x, this.view)) > this.squaredProximityThreshold(d) ||
      this.isVertical(w, i, o) ||
      this.isVertical(i, t, o)
    )
      return;
    const _ = ee(F(), i, r, Math.sign(c));
    e.push(
      new ue({
        targetPoint: w,
        constraint: new de(i, B(_)),
        previousVertex: t,
        otherVertex: i,
        otherVertexType: xe.CENTER,
        selfSnappingType: s,
        isDraped: ((v = o.elevationInfo) == null ? void 0 : v.mode) === 'on-the-ground',
      }),
    );
  }
}
function Te(l, s, e, t, i) {
  Se(l, s, e, t, i) || Le(l, s, e);
}
function Se(l, s, e, t, { spatialReference: i }) {
  const r = R(s, e, i, i);
  if (r == null) return !1;
  const n = R(e, t, i, i);
  if (n == null) return !1;
  const a = Math.sign(D.shortestSignedDiff(r, n)) * Math.PI * 0.5,
    o = A(r + a, 'radians', 'geographic'),
    h = F(),
    d = Q(e, t, i);
  return d != null && (J(h, e, i, G(d, 'meters'), o, 'geodesic'), te(l, h, e), !0);
}
function Le(l, s, e) {
  const t = U(j, p(e), p(s));
  se(l, t[1], -t[0], 0);
}
const j = I(),
  b = F();
let $e = class extends k {
  snapNewVertex(s, e) {
    const t = e.editGeometryOperations.data.components[0],
      i = [],
      r = t.vertices.length;
    if (e.editGeometryOperations.data.type !== 'polygon' || r < 2) return i;
    const { view: n } = this,
      a = t.vertices[0],
      o = t.vertices[r - 1],
      h = f(a.pos, n, e),
      d = f(o.pos, n, e);
    return this._processCandidateProposal(h, d, s, e, i), i;
  }
  snapExistingVertex(s, e) {
    const t = [],
      i = e.vertexHandle,
      r = i.component;
    if (
      r.edges.length < 2 ||
      (e.editGeometryOperations.data.type === 'polyline' &&
        (i.index === 0 || i.index === r.vertices.length - 1))
    )
      return t;
    const { view: n } = this,
      a = f(i.leftEdge.leftVertex.pos, n, e),
      o = f(i.rightEdge.rightVertex.pos, n, e);
    return this._processCandidateProposal(a, o, s, e, t), t;
  }
  _processCandidateProposal(s, e, t, i, r) {
    var u;
    if (!this.exceedsShortLineThreshold(s, e, i)) return;
    const n = ie(O, p(s), p(e), 0.5),
      a = 0.5 * H(p(s), p(e)),
      o = le(O, p(t), n, a),
      h = C(N(o[0], o[1], t[2])),
      { spatialReference: d, pointer: g } = i,
      c = m(t, d, x, this.view);
    if (y(c, m(h, d, x, this.view)) < this.squaredProximityThreshold(g)) {
      if (this.isVertical(s, h, i) || this.isVertical(h, e, i)) return;
      r.push(
        new me({
          targetPoint: h,
          point1: s,
          point2: e,
          isDraped: ((u = i.elevationInfo) == null ? void 0 : u.mode) === 'on-the-ground',
        }),
      );
    }
  }
};
const O = I();
let V = class extends re {
  constructor(l) {
    super(l), (this.updating = !1), (this._snappers = new ne()), (this._domain = ce.SELF);
  }
  initialize() {
    this._snappers.push(
      new Pe(this.view, this.options),
      new ve(this.view, this.options),
      new _e(this.view, this.options),
      new $e(this.view, this.options),
    );
  }
  set options(l) {
    this._set('options', l);
    for (const s of this._snappers) s.options = l;
  }
  async fetchCandidates(l, s, e) {
    if (!(s & this._domain && this.options.effectiveSelfEnabled)) return [];
    const t = [];
    for (const i of this._snappers.items) for (const r of i.snap(l, e)) t.push(r);
    return pe(l, t), t;
  }
};
S([q({ readOnly: !0 })], V.prototype, 'updating', void 0),
  S([q({ constructOnly: !0 })], V.prototype, 'view', void 0),
  S([q()], V.prototype, 'options', null),
  (V = S([oe('esri.views.interactive.snapping.SelfSnappingEngine')], V));
export { V as SelfSnappingEngine };
