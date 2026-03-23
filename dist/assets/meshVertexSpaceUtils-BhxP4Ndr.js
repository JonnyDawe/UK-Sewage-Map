import { j as l, ar as f } from './index.lazy-BHTpPf8X.js';
import { a, n as g } from './MeshLocalVertexSpace-cTk7IO-v.js';
function m(n) {
  return n.origin == null;
}
function u(n) {
  return n.origin != null;
}
function y(n) {
  return u(n.vertexSpace);
}
function w(n, r) {
  if (!u(n)) return null;
  const [i, e, o] = n.origin;
  return new l({ x: i, y: e, z: o, spatialReference: r });
}
function v(n, r) {
  const { x: i, y: e, z: o, spatialReference: c } = n,
    t = [i, e, o ?? 0];
  return ((r == null ? void 0 : r.vertexSpace) ?? p(c)) === 'local'
    ? new a({ origin: t })
    : new g({ origin: t });
}
function p(n) {
  return n.isGeographic || n.isWebMercator ? 'local' : 'georeferenced';
}
function z(n, r) {
  return (
    n.type === r.type &&
    (n.origin === r.origin || (n.origin != null && r.origin != null && f(n.origin, r.origin)))
  );
}
export { y as c, v as l, m as o, z as p, u as t, w as u };
