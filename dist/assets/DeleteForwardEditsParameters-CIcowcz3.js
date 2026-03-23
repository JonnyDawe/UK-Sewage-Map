import { aj as a, e2 as n, A as s, B as o, R as m } from './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
var r;
let t = (r = class extends a {
  static from(e) {
    return n(r, e);
  }
  constructor(e) {
    super(e), (this.sessionId = void 0), (this.moment = null);
  }
});
s([o({ type: String, json: { write: !0 } })], t.prototype, 'sessionId', void 0),
  s(
    [
      o({
        type: Date,
        json: {
          type: Number,
          write: {
            writer: (e, i) => {
              i.moment = e ? e.getTime() : null;
            },
          },
        },
      }),
    ],
    t.prototype,
    'moment',
    void 0,
  ),
  (t = r =
    s([m('esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters')], t));
const u = t;
export { u as default };
