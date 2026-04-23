import { en as n } from './index.lazy-BFilFZ3v.js';
import { c as a } from './queryTopFeatures-BrFXxVcE.js';
import c from './TopFeaturesQuery-6cJ5QvAM.js';
import './index-DShQM7Xx.js';
async function u(o, t, r) {
  const m = n(o);
  return (await a(m, c.from(t), { ...r })).data.count;
}
export { u as executeForTopCount };
