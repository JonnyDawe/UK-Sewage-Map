import { en as s, cs as i } from './index.lazy-BFilFZ3v.js';
import { p } from './queryTopFeatures-BrFXxVcE.js';
import n from './TopFeaturesQuery-6cJ5QvAM.js';
import './index-DShQM7Xx.js';
async function y(r, o, t, m) {
  const a = s(r),
    e = { ...m },
    { data: f } = await p(a, n.from(o), t, e);
  return i.fromJSON(f);
}
export { y as executeTopFeaturesQuery };
