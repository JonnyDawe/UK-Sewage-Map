import {
  aj as u,
  A as i,
  B as n,
  R as y,
  en as d,
  ep as l,
  eo as h,
  P as x,
} from './index.lazy-BFilFZ3v.js';
import { d as G } from './Association-6taCEdyQ.js';
import './index-DShQM7Xx.js';
let r = class extends u {
  constructor(t) {
    super(t), (this.maxGeometryCountExceeded = !1), (this.associations = []);
  }
};
i([n({ type: Boolean, json: { write: !0 } })], r.prototype, 'maxGeometryCountExceeded', void 0),
  i([n({ type: [G], json: { write: !0 } })], r.prototype, 'associations', void 0),
  (r = i([y('esri.rest.networks.support.AssociationGeometriesResult')], r));
const R = r;
async function w(t, o, e) {
  const s = d(t),
    a = { ...o.toJSON(), f: 'json' },
    c = l({ ...s.query, ...a });
  e ? (e.method = 'post') : (e = { method: 'post' });
  const p = h(c, e),
    m = `${s.path}/synthesizeAssociationGeometries`;
  return x(m, p).then((f) => $(f, o.outSpatialReference));
}
function $(t, o) {
  const { data: e } = t;
  if (o)
    for (const s of e.associations)
      s.geometry.spatialReference || (s.geometry.spatialReference = o.clone());
  return R.fromJSON(e);
}
export { w as synthesizeAssociationGeometries };
