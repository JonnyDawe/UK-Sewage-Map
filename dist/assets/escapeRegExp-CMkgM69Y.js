import { mf as a, mg as i } from './index.lazy-BFilFZ3v.js';
function y(r, e) {
  for (var n = -1, t = r == null ? 0 : r.length, o = Array(t); ++n < t; ) o[n] = e(r[n], n, r);
  return o;
}
var c = Array.isArray,
  f = i ? i.prototype : void 0,
  p = f ? f.toString : void 0;
function s(r) {
  if (typeof r == 'string') return r;
  if (c(r)) return y(r, s) + '';
  if (a(r)) return p ? p.call(r) : '';
  var e = r + '';
  return e == '0' && 1 / r == -1 / 0 ? '-0' : e;
}
function g(r) {
  return r == null ? '' : s(r);
}
var u = /[\\^$.*+?()[\]{}|]/g,
  l = RegExp(u.source);
function x(r) {
  return (r = g(r)), r && l.test(r) ? r.replace(u, '\\$&') : r;
}
export { x as e, c as i };
