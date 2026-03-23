import { en as n } from './index.lazy-BHTpPf8X.js';
import { c as a } from './queryTopFeatures-CTRWZtOW.js';
import c from './TopFeaturesQuery-BAUiz4gP.js';
import './index-DqxZnyqH.js';
async function u(o, t, r) {
  const m = n(o);
  return (await a(m, c.from(t), { ...r })).data.count;
}
export { u as executeForTopCount };
