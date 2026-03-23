import {
  r as n,
  u as p,
  c7 as l,
  a7 as d,
  z as u,
  A as t,
  B as i,
  R as y,
} from './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
let s = class extends n(p(u)) {
  constructor(e) {
    super(e),
      (this.resourceInfo = null),
      (this.persistenceEnabled = !0),
      (this.type = 'unsupported');
  }
  initialize() {
    this.addResolvingPromise(
      new Promise((e, o) => {
        l(() => {
          const r = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
          let a = 'Unsupported layer type';
          r && (a += ' ' + r), o(new d('layer:unsupported-layer-type', a, { layerType: r }));
        });
      }),
    );
  }
  read(e, o) {
    const r = { resourceInfo: e };
    e.id != null && (r.id = e.id), e.title != null && (r.title = e.title), super.read(r, o);
  }
  write(e, o) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
t([i({ readOnly: !0 })], s.prototype, 'resourceInfo', void 0),
  t([i({ type: ['show', 'hide'] })], s.prototype, 'listMode', void 0),
  t([i({ type: Boolean, readOnly: !1 })], s.prototype, 'persistenceEnabled', void 0),
  t([i({ json: { read: !1 }, readOnly: !0, value: 'unsupported' })], s.prototype, 'type', void 0),
  (s = t([y('esri.layers.UnsupportedLayer')], s));
const h = s;
export { h as default };
