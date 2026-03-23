import { en as m, G as r } from './index.lazy-BHTpPf8X.js';
import { d as s } from './queryTopFeatures-CTRWZtOW.js';
import x from './TopFeaturesQuery-BAUiz4gP.js';
import './index-DqxZnyqH.js';
async function p(o, n, e) {
  const i = m(o),
    a = await s(i, x.from(n), { ...e }),
    t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax)
    ? { count: a.data.count, extent: null }
    : { count: a.data.count, extent: r.fromJSON(t) };
}
export { p as executeForTopExtents };
