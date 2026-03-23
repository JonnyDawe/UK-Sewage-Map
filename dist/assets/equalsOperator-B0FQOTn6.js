import { B as m, V as i } from './ProjectionTransformation-DO3Gv-47.js';
import {
  fromGeometry as t,
  fromSpatialReference as a,
  getSpatialReference as f,
} from './apiConverter-Dm_24RD5.js';
import './Transformation2D-Bb72B6CZ.js';
import './index.lazy-BHTpPf8X.js';
import './jsonConverter-kXdRGJAn.js';
class y extends m {
  getOperatorType() {
    return 2;
  }
  execute(r, s, p, l) {
    return i(r, s, p, 3, l);
  }
}
const o = new y();
function c(e) {
  const r = f(e);
  return o.accelerateGeometry(t(e), a(r), 1);
}
function n(e, r) {
  return o.execute(t(e), t(r), a(e.spatialReference), null);
}
const u = o.supportsCurves(),
  S = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: c, execute: n, supportsCurves: u },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  d = Object.freeze(
    Object.defineProperty(
      { __proto__: null, accelerateGeometry: c, execute: n, supportsCurves: u },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { d as e, S as l };
