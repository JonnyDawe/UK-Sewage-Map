import { en as i, eo as u, ep as y, P as p, eq as f } from './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
async function O(e, t, a) {
  const r = i(e),
    s = t.toJSON();
  (s.traceLocations = JSON.stringify(t.traceLocations)),
    t.resultTypes && (s.resultTypes = JSON.stringify(t.resultTypes));
  const o = u(r.query, { query: y({ ...s, f: 'json' }), ...a }),
    c = `${r.path}/trace`;
  return p(c, o).then((n) => l(n));
}
async function S(e, t, a) {
  const r = i(e),
    s = t.toJSON();
  (s.traceLocations = JSON.stringify(t.traceLocations)),
    t.resultTypes && (s.resultTypes = JSON.stringify(t.resultTypes));
  const o = u(r.query, { query: y({ ...s, async: !0, f: 'json' }), ...a }),
    c = `${r.path}/trace`,
    { data: n } = await p(c, o);
  return n.statusUrl;
}
function l(e) {
  const { data: t } = e;
  return f.fromJSON(t.traceResults);
}
export { S as submitTraceJob, O as trace };
