import {
  dL as $,
  bU as h,
  W as y,
  j as M,
  eR as x,
  eh as b,
  iC as G,
} from './index.lazy-BHTpPf8X.js';
import { y as w, R as S } from './geodesicUtils-skq4VGxm.js';
const d = 50,
  L = 5;
function j(t, o) {
  return Math.log(t) / Math.log(o);
}
function N(t, o, a) {
  const e = t === 1 ? 10 : t;
  return e ** (a ? Math.round(j(d / o, e)) : 0);
}
function U(t) {
  const { isGeographic: o, isWebMercator: a } = t;
  return !o && !a;
}
function P(t, o, a) {
  const e = typeof t == 'number' ? null : t,
    r = a ?? (e == null ? void 0 : e.spatialReference);
  if (r == null || !$(r) || U(r)) return h(r);
  let s = (e == null ? void 0 : e.x) ?? t,
    c = (e == null ? void 0 : e.y) ?? o;
  const f = 1 / Math.sqrt(2);
  let i = s + f,
    l = c + f;
  const { isWebMercator: R, isGeographic: g } = r;
  let u = g && !w(r) ? y.WGS84 : r;
  if (R) {
    let n = new M({ x: s, y: c, spatialReference: r });
    x(n, !0, n),
      (s = n.x),
      (c = n.y),
      (n = new M({ x: i, y: l, spatialReference: r })),
      x(n, !0, n),
      (i = n.x),
      (l = n.y),
      (u = y.WGS84);
  }
  const m = new b({
      paths: [
        [
          [s, c],
          [i, l],
        ],
      ],
      spatialReference: u,
    }),
    W = G(m, 10);
  let p;
  try {
    [p] = S([W], 'meters');
  } catch {
    return h(r);
  }
  return p;
}
export { N as l, L as t, P as u };
