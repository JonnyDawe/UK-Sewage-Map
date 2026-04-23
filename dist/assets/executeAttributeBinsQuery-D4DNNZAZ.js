import {
  dG as f,
  bj as c,
  f_ as y,
  P as S,
  bb as R,
  d9 as l,
  fR as p,
  bs as g,
  en as d,
} from './index.lazy-BFilFZ3v.js';
import { c as b } from './AttributeBinsFeatureSet-CGcDoN76.js';
import x from './AttributeBinsQuery-DeSngTPC.js';
import './index-DShQM7Xx.js';
import './queryUtils-DePK7lxY.js';
import './json-Wa8cmqdu.js';
import './FixedIntervalBinParameters-CKl391iV.js';
function J(i) {
  const e = i.geometry,
    n = i.toJSON(),
    t = n;
  let r, a, o;
  if (
    (e != null &&
      ((a = e.spatialReference),
      (o = l(a)),
      (t.geometryType = p(e)),
      (t.geometry = JSON.stringify(e)),
      (t.inSR = o)),
    n.outSR
      ? ((t.outSR = l(n.outSR)), (r = i.outSpatialReference))
      : e && ((t.outSR = t.inSR), (r = a)),
    t.bin && (t.bin = JSON.stringify(t.bin)),
    t.quantizationParameters &&
      (t.quantizationParameters = JSON.stringify(t.quantizationParameters)),
    t.outStatistics && (t.outStatistics = JSON.stringify(t.outStatistics)),
    t.outTimeReference && (t.outTimeReference = JSON.stringify(t.outTimeReference)),
    n.timeExtent)
  ) {
    const u = n.timeExtent,
      { start: s, end: m } = u;
    (s == null && m == null) || (t.time = s === m ? s : `${s ?? 'null'},${m ?? 'null'}`),
      delete n.timeExtent;
  }
  return (
    i.defaultSpatialReference && g(a, r) && ((t.defaultSR = t.inSR), delete t.inSR, delete t.outSR),
    t
  );
}
async function N(i, e, n) {
  return e.timeExtent != null && e.timeExtent.isEmpty
    ? { data: { features: [] } }
    : await O(i, e, n);
}
async function O(i, e, n = {}) {
  const t = typeof i == 'string' ? f(i) : i,
    r = e.geometry ? [e.geometry] : [],
    a = await c(r, null, { signal: n.signal }),
    o = a == null ? void 0 : a[0];
  o != null && ((e = e.clone()).geometry = o);
  const u = y({ ...t.query, f: 'json', ...J(e) });
  return S(R(t.path, 'queryBins'), { ...n, query: { ...u, ...n.query } });
}
async function z(i, e, n) {
  const { data: t } = await N(d(i), x.from(e), n);
  return b.fromJSON(t);
}
export { z as executeAttributeBinsQuery };
