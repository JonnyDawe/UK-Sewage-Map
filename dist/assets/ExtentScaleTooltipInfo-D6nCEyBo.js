import { A as t, B as o, R as x, lv as u, gv as v } from './index.lazy-BHTpPf8X.js';
import { r as f, u as p } from './automaticLengthMeasurementUtils-CeA0cPqM.js';
let r = class extends f {
  constructor(i) {
    super(i), (this.type = 'extent-rotate'), (this.angle = 0);
  }
};
t([o()], r.prototype, 'type', void 0),
  t([o()], r.prototype, 'angle', void 0),
  (r = t([x('esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo')], r));
function d({ topLeft: i, topRight: n, bottomRight: l, bottomLeft: a, spatialReference: s }) {
  const c = u(p(a, l, s), p(i, n, s));
  if (c == null) return null;
  const y = u(p(l, n, s), p(a, i, s));
  return y == null ? null : { xSize: c, ySize: y };
}
let e = class extends f {
  constructor(i) {
    super(i),
      (this.type = 'extent-scale'),
      (this.xScale = 0),
      (this.yScale = 0),
      (this.xSize = v),
      (this.ySize = v);
  }
};
t([o()], e.prototype, 'type', void 0),
  t([o()], e.prototype, 'xScale', void 0),
  t([o()], e.prototype, 'yScale', void 0),
  t([o()], e.prototype, 'xSize', void 0),
  t([o()], e.prototype, 'ySize', void 0),
  (e = t([x('esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo')], e));
export { e as i, d as o, r as s };
