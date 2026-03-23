import {
  W as e,
  a2 as k,
  aN as r,
  aO as f,
  aP as u,
  aQ as m,
  aR as C,
} from './index.lazy-BHTpPf8X.js';
const U = new e(C),
  a = new e(u),
  n = new e(m),
  W = new e(k);
function x(t) {
  const w = c.get(t);
  if (w) return w;
  let s = U;
  if (t)
    if (t === a) s = a;
    else if (t === n) s = n;
    else {
      const o = t.wkid,
        p = t.latestWkid;
      if (o != null || p != null) r(o) || r(p) ? (s = a) : (f(o) || f(p)) && (s = n);
      else {
        const i = t.wkt2 ?? t.wkt;
        if (i) {
          const l = i.toUpperCase();
          l === $ ? (s = a) : l === d && (s = n);
        }
      }
    }
  return c.set(t, s), s;
}
const c = new Map(),
  $ = a.wkt.toUpperCase(),
  d = n.wkt.toUpperCase();
export { x as a, W as w };
