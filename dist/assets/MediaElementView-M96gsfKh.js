import {
  kf as d,
  d0 as y,
  a5 as R,
  h2 as g,
  kg as h,
  kh as b,
  ki as k,
  kj as i,
  bH as S,
  kk as p,
  dl as N,
  bQ as V,
  A as s,
  B as l,
  R as w,
} from './index.lazy-BFilFZ3v.js';
import { e as c } from './mat3f64-q3fE-ZOt.js';
import { p as A } from './normalizeUtilsSync-CFqnyNoA.js';
const n = R(),
  u = c(),
  a = c(),
  f = c();
function D(o, e, r) {
  return (
    y(n, e[0], e[1], 1),
    g(n, n, h(u, r)),
    n[2] === 0 ? d(o, n[0], n[1]) : d(o, n[0] / n[2], n[1] / n[2])
  );
}
function F(o, e, r) {
  return (
    m(a, e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
    m(f, r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]),
    b(o, k(a, a), f),
    o[8] !== 0 &&
      ((o[0] /= o[8]),
      (o[1] /= o[8]),
      (o[2] /= o[8]),
      (o[3] /= o[8]),
      (o[4] /= o[8]),
      (o[5] /= o[8]),
      (o[6] /= o[8]),
      (o[7] /= o[8]),
      (o[8] /= o[8])),
    o
  );
}
function m(o, e, r, x, z, $, j, C, v) {
  i(o, e, x, $, r, z, j, 1, 1, 1), y(n, C, v, 1), k(u, o);
  const [B, E, I] = g(n, n, h(u, u));
  return i(u, B, 0, 0, 0, E, 0, 0, 0, I), b(o, u, o);
}
const H = Symbol('ImageElementInstance'),
  J = Symbol('VideoElementInstance');
function M(o) {
  return o != null && typeof o == 'object' && H in o;
}
function O(o) {
  return o != null && typeof o == 'object' && J in o;
}
function G(o) {
  return M(o) || O(o);
}
let t = class extends S {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return (o == null ? void 0 : o.extent) == null ? null : p(o.extent);
  }
  get coords() {
    var e;
    const o = (e = this.element.georeference) == null ? void 0 : e.coords;
    return N(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return V.fromJSON(A(this.coords));
  }
  get normalizedBounds() {
    const o = this.normalizedCoords != null ? this.normalizedCoords.extent : null;
    return o != null ? p(o) : null;
  }
};
s([l()], t.prototype, 'spatialReference', void 0),
  s([l()], t.prototype, 'element', void 0),
  s([l()], t.prototype, 'bounds', null),
  s([l()], t.prototype, 'coords', null),
  s([l()], t.prototype, 'normalizedCoords', null),
  s([l()], t.prototype, 'normalizedBounds', null),
  (t = s([w('esri.layers.support.MediaElementView')], t));
export { G as c, J as e, F as j, t as m, H as n, O as o, D as p };
