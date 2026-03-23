import { ei as h, ej as S } from './index.lazy-BHTpPf8X.js';
import { P as G, j as P, a as f, f as v, d as E } from './Transformation2D-Bb72B6CZ.js';
import { w } from './OperatorShapePreservingLength-hchA6jEC.js';
import {
  G as T,
  g as L,
  N as j,
  o as C,
  i as X,
  j as D,
  k as N,
  L as Y,
  y as b,
  v as k,
} from './ProjectionTransformation-DO3Gv-47.js';
import './index-DqxZnyqH.js';
import './SimpleGeometryCursor-B92kdZ15.js';
class V {
  getOperatorType() {
    return 10311;
  }
  supportsCurves() {
    return !0;
  }
  accelerateGeometry(t, r, l) {
    return !1;
  }
  canAccelerateGeometry(t) {
    return !1;
  }
  execute(t, r, l, a) {
    if (l === 4) return new w().execute(t, r, a);
    if ((r.getCoordinateSystemType() === 0 && G(''), P(t), t.isEmpty() || t.getDimension() < 1))
      return 0;
    const s = r.getGCS(),
      n = T();
    s.querySpheroidData(n);
    const c = n.majorSemiAxis,
      m = n.e2,
      u = s.getUnit().getUnitToBaseFactor();
    let e;
    const o = t.getGeometryType();
    if (
      (o === f.enumPolygon
        ? (e = t.getBoundary())
        : o === f.enumEnvelope
          ? (e = L(t))
          : v(o)
            ? ((e = new j({ vd: t.getDescription() })), e.addSegment(t, !0))
            : (e = t),
      e.hasNonLinearSegments() && (e = new C().execute(e, 0, r.getTolerance(0), 0, a)),
      s !== r)
    ) {
      const i = r.getSRToGCSTransform();
      if (r.isPannable()) {
        (e = X(e, r)), o === f.enumPolyline && e === t && (e = t.clone());
        const y = new E();
        r.getPannableExtent().queryIntervalX(y);
        for (let g = 0, d = e.getPointCount(); g < d; g++) {
          const p = e.getXY(g);
          (p.x = D(p.x, y)), e.setXY(g, p);
        }
      }
      const x = e.createInstance();
      e = Y(i, e, x, a) ? x : new N().execute(e, i, a);
    }
    return this._ExecuteMultiPathGeodeticLength(e, l, c, m, u);
  }
  _ExecuteMultiPathGeodeticLength(t, r, l, a, s) {
    const n = { stack: [], error: void 0, hasError: !1 };
    try {
      const c = h(n, new b(), !1);
      let m = 0;
      const u = t.querySegmentIterator();
      for (; u.nextPath(); )
        for (; u.hasNextSegment(); ) {
          const e = u.nextSegment(),
            o = e.getStartXY(),
            i = e.getEndXY();
          o.scale(s),
            i.scale(s),
            k.geodeticDistance(l, a, o.x, o.y, i.x, i.y, c, null, null, r),
            (m += c.val);
        }
      return m;
    } catch (c) {
      (n.error = c), (n.hasError = !0);
    } finally {
      S(n);
    }
  }
}
export { V as OperatorGeodeticLength };
