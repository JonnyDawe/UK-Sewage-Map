import { en as a } from './index.lazy-BFilFZ3v.js';
import { m as e } from './queryTopFeatures-BrFXxVcE.js';
import s from './TopFeaturesQuery-6cJ5QvAM.js';
import './index-DShQM7Xx.js';
async function c(o, r, t) {
  const m = a(o);
  return (await e(m, s.from(r), { ...t })).data.objectIds;
}
export { c as executeForTopIds };
