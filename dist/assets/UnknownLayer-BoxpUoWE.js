import {
  r as i,
  u as l,
  c7 as u,
  a7 as y,
  z as p,
  A as s,
  B as t,
  R as d,
} from './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
let e = class extends i(l(p)) {
  constructor(r) {
    super(r), (this.resourceInfo = null), (this.type = 'unknown');
  }
  initialize() {
    this.addResolvingPromise(
      new Promise((r, o) => {
        u(() => {
          const n = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
          let a = 'Unknown layer type';
          n && (a += ' ' + n), o(new y('layer:unknown-layer-type', a, { layerType: n }));
        });
      }),
    );
  }
  read(r, o) {
    super.read({ resourceInfo: r }, o);
  }
  write(r, o) {
    return null;
  }
};
s([t({ readOnly: !0 })], e.prototype, 'resourceInfo', void 0),
  s([t({ type: ['show', 'hide'] })], e.prototype, 'listMode', void 0),
  s([t({ json: { read: !1 }, readOnly: !0, value: 'unknown' })], e.prototype, 'type', void 0),
  (e = s([d('esri.layers.UnknownLayer')], e));
const w = e;
export { w as default };
