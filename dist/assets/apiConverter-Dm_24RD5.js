import { a as m, e as M } from './Transformation2D-Bb72B6CZ.js';
import { r as V, C as w, e as h, M as P, U as Z } from './ProjectionTransformation-DO3Gv-47.js';
import { G as v, eg as R, j as p, bQ as d, eh as E } from './index.lazy-BHTpPf8X.js';
import { fromGeometryToGXGeometry as g, toGeometry as y } from './jsonConverter-kXdRGJAn.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './index-DqxZnyqH.js';
const a = '_gxVersion',
  C = 2,
  x = 1;
function T(t) {
  return Array.isArray(t) ? t[0].spatialReference : t.spatialReference;
}
function b(t) {
  switch (t.type) {
    case 'point':
      return X(t);
    case 'multipoint':
      return z(t);
    case 'polyline':
      return k(t);
    case 'polygon':
      return Y(t);
    case 'extent':
      return G(t);
    default:
      throw new Error(`Unsupported geometry type: ${t.type}`);
  }
}
function G(t) {
  if (!t.getCacheValue(a)) {
    const e = new V();
    e.setCoords(t.xmin, t.ymin, t.xmax, t.ymax),
      t.hasM && e.setInterval(C, 0, t.mmin, t.mmax),
      t.hasZ && e.setInterval(x, 0, t.zmin, t.zmax),
      t.setCacheValue(a, e);
  }
  return t.getCacheValue(a);
}
function z(t) {
  if (!t.getCacheValue(a)) {
    const e = new w(),
      n = new h(),
      r = t.points,
      s = t.hasM,
      o = t.hasZ,
      i = o ? 3 : 2;
    for (let u = 0, l = r.length; u < l; u++) {
      const c = r[u];
      n.setXYCoords(c[0], c[1]), o && n.setZ(c[2] ?? 0), s && n.setM(c[i] ?? NaN), e.add(n);
    }
    t.setCacheValue(a, e);
  }
  return t.getCacheValue(a);
}
function X(t) {
  if (!t.getCacheValue(a)) {
    const e = new h();
    e.setXYCoords(t.x, t.y), t.hasM && e.setM(t.m), t.hasZ && e.setZ(t.z), t.setCacheValue(a, e);
  }
  return t.getCacheValue(a);
}
function Y(t) {
  if (!t.getCacheValue(a)) {
    const { curveRings: e, hasM: n, hasZ: r, rings: s } = t,
      o = g({ curveRings: e, hasM: n, hasZ: r, rings: s });
    t.setCacheValue(a, o);
  }
  return t.getCacheValue(a);
}
function k(t) {
  if (!t.getCacheValue(a)) {
    const { curvePaths: e, hasM: n, hasZ: r, paths: s } = t,
      o = g({ curvePaths: e, hasM: n, hasZ: r, paths: s });
    t.setCacheValue(a, o);
  }
  return t.getCacheValue(a);
}
function B(t) {
  if (t.wkid) return P(t.wkid);
  const e = t.wkt2 || t.wkt;
  return e ? Z(e) : null;
}
function Q(t, e) {
  if (t)
    switch (t.getGeometryType()) {
      case m.enumPoint:
        return I(t, e);
      case m.enumEnvelope:
        return $(t, e);
      case m.enumMultiPoint:
        return j(t, e);
      case m.enumPolyline:
        return S(t, e);
      case m.enumPolygon:
        return N(t, e);
    }
  return null;
}
function $(t, e) {
  if (t.isEmpty()) return null;
  const n = new v({
      xmin: t.getXMin(),
      ymin: t.getYMin(),
      xmax: t.getXMax(),
      ymax: t.getYMax(),
      spatialReference: e,
    }),
    r = t.getDescription();
  if (r.hasM()) {
    const s = t.queryInterval(C, 0);
    (n.mmin = s.vmin), (n.mmax = s.vmax);
  }
  if (r.hasZ()) {
    const s = t.queryInterval(x, 0);
    (n.zmin = s.vmin), (n.zmax = s.vmax);
  }
  return n.setCacheValue(a, t), n;
}
function j(t, e) {
  if (t.isEmpty()) return null;
  const n = t.getDescription(),
    r = n.hasM(),
    s = n.hasZ(),
    o = [],
    i = new h();
  for (let l = 0, c = t.getPointCount(); l < c; l++) {
    t.getPointByVal(l, i);
    const f = [i.getX(), i.getY()];
    s && f.push(i.getZ()), r && f.push(i.getM()), o.push(f);
  }
  const u = new R({ hasM: r, hasZ: s, points: o, spatialReference: e });
  return u.setCacheValue(a, t), u;
}
function I(t, e) {
  if (t instanceof M) return new p({ x: t.x, y: t.y, spatialReference: e });
  if (t.isEmpty()) return null;
  const n = new p({ x: t.getX(), y: t.getY(), spatialReference: e }),
    r = t.getDescription();
  return r.hasM() && (n.m = t.getM()), r.hasZ() && (n.z = t.getZ()), n.setCacheValue(a, t), n;
}
function N(t, e) {
  if (t.isEmpty()) return null;
  const n = d.fromJSON({ spatialReference: e, ...y(t, null) });
  return n.setCacheValue(a, t), n;
}
function S(t, e) {
  if (t.isEmpty()) return null;
  const n = E.fromJSON({ spatialReference: e, ...y(t, null) });
  return n.setCacheValue(a, t), n;
}
export {
  G as fromExtent,
  b as fromGeometry,
  z as fromMultipoint,
  X as fromPoint,
  Y as fromPolygon,
  k as fromPolyline,
  B as fromSpatialReference,
  T as getSpatialReference,
  $ as toExtent,
  Q as toGeometry,
  j as toMultipoint,
  I as toPoint,
  N as toPolygon,
  S as toPolyline,
};
