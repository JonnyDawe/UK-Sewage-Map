import {
  aj as l,
  A as o,
  B as m,
  iW as d,
  R as p,
  en as y,
  ep as N,
  eo as h,
  P as C,
} from './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
let t = class extends l {
  constructor(r) {
    super(r), (this.namedTraceConfigurations = []);
  }
};
o(
  [
    m({
      type: [d],
      json: { read: { source: 'traceConfigurations' }, write: { target: 'traceConfigurations' } },
    }),
  ],
  t.prototype,
  'namedTraceConfigurations',
  void 0,
),
  (t = o([p('esri.rest.networks.support.QueryNamedTraceConfigurationsResult')], t));
const S = t;
async function $(r, s, i) {
  const e = y(r),
    a = s.toJSON();
  s.globalIds && s.globalIds.length > 0 && (a.globalIds = JSON.stringify(s.globalIds)),
    s.creators && s.creators.length > 0 && (a.creators = JSON.stringify(s.creators)),
    s.tags && s.tags.length > 0 && (a.tags = JSON.stringify(s.tags)),
    s.names && s.names.length > 0 && (a.names = JSON.stringify(s.names));
  const n = { ...a, f: 'json' },
    g = N({ ...e.query, ...n }),
    c = h(g, { ...i, method: 'post' }),
    u = `${e.path}/traceConfigurations/query`,
    { data: f } = await C(u, c);
  return S.fromJSON(f);
}
export { $ as queryNamedTraceConfigurations };
