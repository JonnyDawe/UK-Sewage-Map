import { a as n } from './Centroid-DZi-eb9F-C125OHYY.js';
import {
  fromGeometry as p,
  toPoint as c,
  getSpatialReference as a,
} from './apiConverter-Dm_24RD5.js';
import './Transformation2D-Bb72B6CZ.js';
import './ProjectionTransformation-DO3Gv-47.js';
import './index.lazy-BHTpPf8X.js';
import './jsonConverter-kXdRGJAn.js';
class l {
  getOperatorType() {
    return 10205;
  }
  accelerateGeometry(e, s, i) {
    return !1;
  }
  canAccelerateGeometry(e) {
    return !1;
  }
  supportsCurves() {
    return !0;
  }
  execute(e, s) {
    return n(e);
  }
}
const r = new l();
function o(t) {
  const e = r.execute(p(t), null);
  return c(e, a(t));
}
const u = r.supportsCurves(),
  v = Object.freeze(
    Object.defineProperty({ __proto__: null, execute: o, supportsCurves: u }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  x = Object.freeze(
    Object.defineProperty({ __proto__: null, execute: o, supportsCurves: u }, Symbol.toStringTag, {
      value: 'Module',
    }),
  );
export { x as c, v as p };
