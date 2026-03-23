import { en as r, hF as f, gQ as c, hG as e } from './index.lazy-BHTpPf8X.js';
async function p(a, s, t) {
  const n = r(a),
    { data: o } = await f(n, c.from(s), t);
  return o.count;
}
async function u(a, s, t) {
  const n = r(a),
    { data: o } = await e(n, c.from(s), t);
  return o.objectIds ?? [];
}
export { u as a, p as s };
