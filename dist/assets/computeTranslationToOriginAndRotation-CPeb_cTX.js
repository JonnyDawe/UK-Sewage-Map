import {
  cZ as h,
  hi as N,
  hj as s,
  bs as O,
  hk as S,
  hl as L,
  a5 as A,
  hm as M,
  ab as P,
} from './index.lazy-BFilFZ3v.js';
function R(e, a, t) {
  const l = Math.sin(e),
    i = Math.cos(e),
    u = Math.sin(a),
    r = Math.cos(a),
    n = t;
  return (
    (n[0] = -l),
    (n[4] = -u * i),
    (n[8] = r * i),
    (n[12] = 0),
    (n[1] = i),
    (n[5] = -u * l),
    (n[9] = r * l),
    (n[13] = 0),
    (n[2] = 0),
    (n[6] = r),
    (n[10] = u),
    (n[14] = 0),
    (n[3] = 0),
    (n[7] = 0),
    (n[11] = 0),
    (n[15] = 1),
    n
  );
}
function T(e, a, t) {
  return R(e, a, t), h(t, t), t;
}
function p(e, a, t, l) {
  const i = N(e, l);
  if (i == null) return !1;
  const u = i.source.spatialReferenceId,
    r = i.dest.spatialReferenceId;
  if (u === r && !f(r) && (u !== s.UNKNOWN || O(e, l))) return S(t, a), !0;
  if (f(r)) {
    const C = L[u][s.LON_LAT],
      E = L[s.LON_LAT][r];
    return (
      C != null &&
      E != null &&
      (C(a, 0, o, 0),
      E(o, 0, c, 0),
      R(_ * o[0], _ * o[1], t),
      (t[12] = c[0]),
      (t[13] = c[1]),
      (t[14] = c[2]),
      !0)
    );
  }
  const n = f(u);
  if (
    (r === s.WEB_MERCATOR || r === s.PLATE_CARREE || r === s.WGS84 || r === s.CGCS2000) &&
    (u === s.WGS84 || n || u === s.WEB_MERCATOR || u === s.CGCS2000)
  ) {
    const C = L[u][s.LON_LAT],
      E = L[s.LON_LAT][r];
    return (
      C != null &&
      E != null &&
      (C(a, 0, o, 0),
      E(o, 0, c, 0),
      n ? T(_ * o[0], _ * o[1], t) : M(t),
      (t[12] = c[0]),
      (t[13] = c[1]),
      (t[14] = c[2]),
      !0)
    );
  }
  return !1;
}
function f(e) {
  return (
    e === s.SPHERICAL_ECEF ||
    e === s.SPHERICAL_MARS_PCPF ||
    e === s.SPHERICAL_MOON_PCPF ||
    e === s.WGS84_ECEF
  );
}
const _ = P(1),
  o = A(),
  c = A();
export { p as m, R as n };
