import {
  aj as a,
  e2 as n,
  A as r,
  B as s,
  e3 as m,
  e4 as o,
  R as u,
} from './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
var i;
let e = (i = class extends a {
  static from(t) {
    return n(i, t);
  }
  constructor(t) {
    super(t),
      (this.returnDeletes = !1),
      (this.elements = []),
      (this.types = []),
      (this.gdbVersion = null),
      (this.moment = null);
  }
});
r([s({ type: Boolean, json: { write: !0 } })], e.prototype, 'returnDeletes', void 0),
  r([s({ type: [m], json: { write: !0 } })], e.prototype, 'elements', void 0),
  r(
    [s({ type: [o.apiValues], json: { type: o.jsonValues, read: o.read, write: o.write } })],
    e.prototype,
    'types',
    void 0,
  ),
  r([s({ type: String, json: { write: !0 } })], e.prototype, 'gdbVersion', void 0),
  r(
    [
      s({
        type: Date,
        json: {
          type: Number,
          write: {
            writer: (t, p) => {
              p.moment = t == null ? void 0 : t.getTime();
            },
          },
        },
      }),
    ],
    e.prototype,
    'moment',
    void 0,
  ),
  (e = i = r([u('esri.rest.networks.support.QueryAssociationsParameters')], e));
const d = e;
export { d as default };
