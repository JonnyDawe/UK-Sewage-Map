import { en as m, G as r } from './index.lazy-BFilFZ3v.js';
import { d as s } from './queryTopFeatures-BrFXxVcE.js';
import x from './TopFeaturesQuery-6cJ5QvAM.js';
import './index-DShQM7Xx.js';
async function p(o, n, e) {
  const i = m(o),
    a = await s(i, x.from(n), { ...e }),
    t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax)
    ? { count: a.data.count, extent: null }
    : { count: a.data.count, extent: r.fromJSON(t) };
}
export { p as executeForTopExtents };
