import { bt as o, bs as l, a5 as i, ju as a } from './index.lazy-BHTpPf8X.js';
import { geodesicLength as c } from './geometryEngine-52MaUfF4.js';
import { y as f, q as m, b as y, R } from './geodesicUtils-skq4VGxm.js';
function q(e) {
  return f(e) || o(e);
}
function p(e, n, r, ...u) {
  return f(e) ? n.apply(void 0, u) : o(e) ? r.apply(void 0, u) : null;
}
function w(e) {
  const { spatialReference: n } = e;
  return p(n, g, x, e);
}
function L(e, n) {
  if (!l(e.spatialReference, n.spatialReference)) return null;
  const { spatialReference: r } = e;
  return (
    (t[0] = e.x),
    (t[1] = e.y),
    (t[2] = e.hasZ ? e.z : 0),
    (s[0] = n.x),
    (s[1] = n.y),
    (s[2] = n.hasZ ? n.z : 0),
    d(t, s, r)
  );
}
function d(e, n, r) {
  return p(r, h, b, e, n, r);
}
function h(e, n, r) {
  return a(m(j, e, n, r).distance, 'meters');
}
function b(e, n, r) {
  return a(c($(e, n, r), 'meters'), 'meters');
}
function g(e) {
  return a(R([e], 'meters')[0], 'meters');
}
function x(e) {
  return a(c(e, 'meters'), 'meters');
}
function $(e, n, r) {
  return { type: 'polyline', spatialReference: r, paths: [[[...e], [...n]]] };
}
const j = new y(),
  t = i(),
  s = i();
export { q as e, L as f, w as m, p as r, d as u };
