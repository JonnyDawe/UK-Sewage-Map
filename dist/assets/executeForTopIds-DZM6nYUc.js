import { en as a } from './index.lazy-BHTpPf8X.js';
import { m as e } from './queryTopFeatures-CTRWZtOW.js';
import s from './TopFeaturesQuery-BAUiz4gP.js';
import './index-DqxZnyqH.js';
async function c(o, r, t) {
  const m = a(o);
  return (await e(m, s.from(r), { ...t })).data.objectIds;
}
export { c as executeForTopIds };
