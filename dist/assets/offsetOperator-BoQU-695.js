import { gl as f, bI as x } from './index.lazy-BHTpPf8X.js';
import { w as G, j as d } from './operatorOffset-hvDmN3h3.js';
import {
  getSpatialReference as p,
  fromGeometry as g,
  toGeometry as u,
  fromGeometries as y,
} from './jsonConverter-kXdRGJAn.js';
import './index-DqxZnyqH.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './ProjectionTransformation-DO3Gv-47.js';
import './Transformation2D-Bb72B6CZ.js';
const l = { round: 0, bevel: 1, miter: 2, square: 3 };
function $(t, e, m = {}) {
  const { miterLimit: a = 10, flattenError: s = 0, joins: c = 'round', unit: r } = m,
    o = p(t);
  r && o && (e = f(e, r, o));
  const i = g(t),
    n = i.getSpatialReference();
  return u(G(i.getGeometry(), n, e, l[c], a, s), n);
}
function q(t, e, m = {}) {
  const { miterLimit: a = 10, flattenError: s = 0, joins: c = 'round', unit: r } = m,
    o = p(t);
  r && o && (e = f(e, r, o));
  const [i, n] = y(t);
  return d(i, n, e, l[c], a, s)
    .map((j) => u(j, n))
    .filter(x);
}
export { $ as execute, q as executeMany };
