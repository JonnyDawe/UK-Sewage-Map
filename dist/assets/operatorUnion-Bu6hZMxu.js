import { s as o } from './SimpleGeometryCursor-B92kdZ15.js';
import './Transformation2D-Bb72B6CZ.js';
import { A as u } from './ProjectionTransformation-DO3Gv-47.js';
const e = new u();
function p(n, t, r) {
  return e.execute(n, t, r, null);
}
function f(n, t) {
  return e.executeMany(new o(n), t, null).next();
}
function l() {
  return e.supportsCurves();
}
export { p as o, l as s, f as t };
