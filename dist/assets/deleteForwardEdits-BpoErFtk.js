import { a7 as p, en as f, eo as u, ep as c, P as m } from './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
async function g(e, s, i, o) {
  if (!s) throw new p('post:missing-guid', 'guid for version is missing');
  const t = f(e),
    r = i.toJSON(),
    a = u(t.query, { query: c({ ...r, f: 'json' }), ...o, method: 'post' });
  s.startsWith('{') && (s = s.slice(1, -1));
  const d = `${t.path}/versions/${s}/deleteForwardEdits`,
    { data: n } = await m(d, a);
  return n;
}
export { g as deleteForwardEdits };
