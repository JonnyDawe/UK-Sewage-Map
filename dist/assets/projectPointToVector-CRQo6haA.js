import { aK as i, a5 as s, a1 as u, aL as o, aM as l } from './index.lazy-BFilFZ3v.js';
function p(n, r, t, e) {
  if (i(n.spatialReference, t)) {
    (c[0] = n.x), (c[1] = n.y);
    const f = n.z;
    return (c[2] = f ?? e ?? 0), u(c, n.spatialReference, 0, r, t, 0);
  }
  const a = o(n, t);
  return (
    !!a &&
    ((r[0] = a == null ? void 0 : a.x),
    (r[1] = a == null ? void 0 : a.y),
    (r[2] = (a == null ? void 0 : a.z) ?? e ?? 0),
    !0)
  );
}
async function y(n, r, t, e, a) {
  return await l(n.spatialReference, t, null, a), p(n, r, t, e);
}
const c = s();
export { p as c, y as i };
