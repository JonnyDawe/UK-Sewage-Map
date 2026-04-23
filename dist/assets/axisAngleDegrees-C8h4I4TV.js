import {
  a0 as x,
  X as v,
  ab as y,
  ac as A,
  ad as B,
  ae as g,
  af as h,
  ag as k,
  ah as q,
  ai as w,
} from './index.lazy-BFilFZ3v.js';
import { b as f, x as z, v as b } from './quat-DOUEtkz6.js';
import { e as d } from './quatf64-aQ5IuZRd.js';
function a(n = C) {
  return [n[0], n[1], n[2], n[3]];
}
function s(n, r, t = a()) {
  return x(t, n), (t[3] = r), t;
}
function H(n, r, t) {
  return k(t, n, r), q(t, t), (t[3] = -w(n, r)), t;
}
function M(n, r = a()) {
  const t = A(u, n);
  return j(r, v(b(r, t))), r;
}
function c(n, r, t = a()) {
  return f(u, n, i(n)), f($, r, i(r)), z(u, $, u), j(t, v(b(t, u)));
}
function N(n, r, t, e = a()) {
  return s(B, n, o), s(g, r, m), s(h, t, p), c(o, m, o), c(o, p, e), e;
}
function U(n) {
  return n;
}
function X(n) {
  return n[3];
}
function i(n) {
  return y(n[3]);
}
function j(n, r) {
  return (n[3] = r), n;
}
const C = [0, 0, 1, 0],
  u = d(),
  $ = d();
a();
const o = a(),
  m = a(),
  p = a();
export { C as B, N as d, a as j, M as k, s as q, H as v, U as w, X as y, i as z };
