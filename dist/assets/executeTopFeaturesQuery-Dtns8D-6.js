import { en as s, cs as i } from './index.lazy-BHTpPf8X.js';
import { p } from './queryTopFeatures-CTRWZtOW.js';
import n from './TopFeaturesQuery-BAUiz4gP.js';
import './index-DqxZnyqH.js';
async function y(r, o, t, m) {
  const a = s(r),
    e = { ...m },
    { data: f } = await p(a, n.from(o), t, e);
  return i.fromJSON(f);
}
export { y as executeTopFeaturesQuery };
