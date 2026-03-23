import {
  bH as V,
  ab as U,
  gx as E,
  bR as F,
  gy as X,
  a8 as Y,
  b0 as A,
  gz as D,
  gA as z,
  A as o,
  B as p,
  R as H,
} from './index.lazy-BHTpPf8X.js';
import { l as W, u as B, t as I } from './gridUtils-BHNOV58f.js';
import { f as g, d as T, c as _ } from './SketchOptions-B_OdQfgz.js';
import { r as G, a as k } from './RouteLayerInteraction-DEhpUOu7.js';
import './index-DqxZnyqH.js';
import './geodesicUtils-skq4VGxm.js';
import './plane-BJrN7SUI.js';
import './mat3f64-q3fE-ZOt.js';
import './mat4f64-Dk4dwAN8.js';
import './quatf64-aQ5IuZRd.js';
import './sphere-vpbSSw5q.js';
import './projectVectorToVector-BxN8sKqR.js';
import './projectPointToVector-BJ7KR9p7.js';
import './elevationInfoUtils-BlCBaVBo.js';
import './GraphicsLayer-bicIzXAH.js';
import './Stop-BpwwBp10.js';
import './networkEnums-BPK_eLv5.js';
let s = class extends V {
  constructor(t) {
    super(t), (this.options = null);
  }
  destroy() {
    this._set('options', null);
  }
  get grid() {
    return this.view.grid;
  }
  get effectiveViewRotation() {
    var t;
    return (t = this.grid) != null && t.rotateWithMap ? 0 : U(this.view.rotation ?? 0);
  }
  get gridRotation() {
    var t;
    return U(((t = this.grid) == null ? void 0 : t.rotation) ?? 0);
  }
  get gridCenter() {
    var e;
    const { spatialReference: t, grid: i } = this;
    if (!i || !t || !E(i.center.spatialReference, t)) return null;
    try {
      const r = F(i.center, t),
        n =
          t.isWrappable && ((e = this.view) == null ? void 0 : e.center) != null
            ? X(r.x, this.view.center.x, t)
            : r.x;
      return g(n, r.y, r.z);
    } catch (r) {
      return Y.getLogger(this).errorOnce('Grid Snapping - Failed to project grid center.', r), null;
    }
  }
  get offsetScaleFactor() {
    const { pixelsPerStride: t, grid: i } = this;
    if (!i || !t) return 1;
    const { majorLineInterval: e, dynamicScaling: r } = i;
    return e < 1 ? null : W(e, t, r);
  }
  get spatialReference() {
    return this.view.spatialReference;
  }
  get gridMetersPerStride() {
    const { grid: t } = this;
    return t ? A(t.spacing, t.units, 'meters') : null;
  }
  get viewMetersPerPixel() {
    const { viewMetersPerSRUnit: t } = this;
    return t == null ? null : t * D(this.view.scale, this.view.spatialReference);
  }
  get viewMetersPerSRUnit() {
    const { spatialReference: t } = this.view;
    return this.gridCenter ? B(this.gridCenter[0], this.gridCenter[1], t) : null;
  }
  get pixelsPerStride() {
    const { gridMetersPerStride: t, viewMetersPerPixel: i } = this;
    return i && t ? t / i : null;
  }
  get updating() {
    return this.grid != null && this.spatialReference != null && this.viewMetersPerSRUnit == null;
  }
  async fetchCandidates(t, i, e) {
    var u;
    const { options: r, view: n } = this;
    if (
      !(r != null && r.effectiveGridEnabled) ||
      !n.grid ||
      ((u = e.feature) != null && u.attributes && T in e.feature.attributes)
    )
      return [];
    const a = e.coordinateHelper.arrayToPoint(t),
      l = r.distance * (e.pointer === 'touch' ? r.touchSensitivityMultiplier : 1);
    return this.fetchCandidatesSync(a, l);
  }
  fetchCandidatesSync(t, i) {
    const e = [],
      {
        grid: r,
        effectiveViewRotation: n,
        gridRotation: a,
        gridCenter: l,
        viewMetersPerPixel: u,
        viewMetersPerSRUnit: f,
        offsetScaleFactor: v,
        spatialReference: h,
        gridMetersPerStride: b,
        pixelsPerStride: C,
      } = this;
    if (
      !(r && u && f && l && h && v && b && C) ||
      (!r.dynamicScaling && C < I) ||
      !E(t.spatialReference, h)
    )
      return e;
    const m = F(t, h),
      L = g(m.x, m.y, m.z),
      c = S(L, -a, l, -n),
      P = (b / f) * v,
      d = q(c, P, l),
      { shouldSnapX: w, shouldSnapY: y } = J(d, c, i, u, f);
    if (!w && !y) return [];
    const O = g((w ? d : c)[0], (y ? d : c)[1]),
      R = S(O, a, l, n),
      $ = S(d, a, l, n);
    if (y) {
      const M = j(d, c, P, 'y'),
        x = S(M, a, l, n);
      e.push(new G({ lineStart: $, lineEnd: x, targetPoint: R, isDraped: !1 }));
    }
    if (w) {
      const M = j(d, c, P, 'x'),
        x = S(M, a, l, n);
      e.push(new G({ lineStart: $, lineEnd: x, targetPoint: R, isDraped: !1 }));
    }
    return w && y && e.push(new k(R, e[0], e[1], !1)), e;
  }
};
o([p({ constructOnly: !0 })], s.prototype, 'view', void 0),
  o([p()], s.prototype, 'options', void 0),
  o([p()], s.prototype, 'grid', null),
  o([p()], s.prototype, 'effectiveViewRotation', null),
  o([p()], s.prototype, 'gridRotation', null),
  o([p()], s.prototype, 'gridCenter', null),
  o([p()], s.prototype, 'offsetScaleFactor', null),
  o([p()], s.prototype, 'spatialReference', null),
  o([p()], s.prototype, 'gridMetersPerStride', null),
  o([p()], s.prototype, 'viewMetersPerPixel', null),
  o([p()], s.prototype, 'viewMetersPerSRUnit', null),
  o([p()], s.prototype, 'pixelsPerStride', null),
  o([p()], s.prototype, 'updating', null),
  (s = o([H('esri.views.interactive.snapping.GridSnappingEngine')], s));
const S = (t, i, e, r) => {
    const n = _(t[0], t[1], t[2]);
    return z(n, z(n, n, e, i), e, r);
  },
  q = (t, i, e) => {
    const r = (t[0] - e[0]) / i,
      n = (t[1] - e[1]) / i,
      a = Math.trunc(r),
      l = Math.trunc(n),
      u = Math.round(r % 1),
      f = Math.round(n % 1),
      v = e[0] + (a + u) * i,
      h = e[1] + (l + f) * i;
    return g(v, h);
  },
  J = (t, i, e, r, n) => {
    if (r <= 0) return { shouldSnapX: !1, shouldSnapY: !1 };
    const a = (t[0] - i[0]) / r,
      l = (t[1] - i[1]) / r;
    return { shouldSnapX: Math.abs(a * n) < e, shouldSnapY: Math.abs(l * n) < e };
  },
  j = (t, i, e, r) => {
    if (r === 'y') {
      const a = i[0] > t[0] ? 1 : -1;
      return g(t[0] + e * a, t[1]);
    }
    const n = i[1] > t[1] ? 1 : -1;
    return g(t[0], t[1] + e * n);
  };
export { s as GridSnappingEngine };
