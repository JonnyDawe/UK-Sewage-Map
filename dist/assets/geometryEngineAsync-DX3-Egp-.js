import { j as l, h as w, k as h } from './index.lazy-BFilFZ3v.js';
import './index-DShQM7Xx.js';
function n(e) {
  var t;
  return Array.isArray(e)
    ? (t = e[0]) == null
      ? void 0
      : t.spatialReference
    : e == null
      ? void 0
      : e.spatialReference;
}
function p(e) {
  return e && (Array.isArray(e) ? e.map(p) : e.toJSON ? e.toJSON() : e);
}
function s(e) {
  return Array.isArray(e) ? e.map((t) => w(t)) : w(e);
}
function S(e, t) {
  let r;
  return Array.isArray(e) ? (r = e) : ((r = []), r.push(e), t != null && r.push(t)), r;
}
let f;
async function d() {
  return f || (f = h('geometryEngineWorker', { strategy: 'distributed' })), f;
}
async function a(e, t) {
  return (await d()).invoke('executeGEOperation', { operation: e, parameters: p(t) });
}
async function m(e, t) {
  const r = await d();
  return Promise.all(r.broadcast('executeGEOperation', { operation: e, parameters: p(t) }));
}
function A(e) {
  return a('extendedSpatialReferenceInfo', [e]);
}
async function O(e, t) {
  return s(await a('clip', [n(e), e, t]));
}
async function D(e, t) {
  return s(await a('cut', [n(e), e, t]));
}
function J(e, t) {
  return a('contains', [n(e), e, t]);
}
function N(e, t) {
  return a('crosses', [n(e), e, t]);
}
function L(e, t, r) {
  return a('distance', [n(e), e, t, r]);
}
function T(e, t) {
  return a('equals', [n(e), e, t]);
}
function V(e, t) {
  return a('intersects', [n(e), e, t]);
}
function v(e, t) {
  return a('touches', [n(e), e, t]);
}
function E(e, t) {
  return a('within', [n(e), e, t]);
}
function b(e, t) {
  return a('disjoint', [n(e), e, t]);
}
function j(e, t) {
  return a('overlaps', [n(e), e, t]);
}
function z(e, t, r) {
  return a('relate', [n(e), e, t, r]);
}
function H(e) {
  return a('isSimple', [n(e), e]);
}
async function k(e) {
  return s(await a('simplify', [n(e), e]));
}
async function I(e, t = !1) {
  return s(await a('convexHull', [n(e), e, t]));
}
async function P(e, t) {
  return s(await a('difference', [n(e), e, t]));
}
async function q(e, t) {
  return s(await a('symmetricDifference', [n(e), e, t]));
}
async function B(e, t) {
  return s(await a('intersect', [n(e), e, t]));
}
async function C(e, t = null) {
  const r = S(e, t);
  return s(await a('union', [n(r), r]));
}
async function G(e, t, r, i, c, u) {
  return s(await a('offset', [n(e), e, t, r, i, c, u]));
}
async function $(e, t, r, i = !1) {
  const c = [n(e), e, t, r, i];
  return s(await a('buffer', c));
}
async function W(e, t, r, i, c, u) {
  const g = [n(e), e, t, r, i, c, u];
  return s(await a('geodesicBuffer', g));
}
async function F(e, t, r = !0) {
  const i = await a('nearestCoordinate', [n(e), e, t, r]);
  return { ...i, coordinate: l.fromJSON(i.coordinate) };
}
async function K(e, t) {
  const r = await a('nearestVertex', [n(e), e, t]);
  return { ...r, coordinate: l.fromJSON(r.coordinate) };
}
async function M(e, t, r, i) {
  return (await a('nearestVertices', [n(e), e, t, r, i])).map((c) => ({
    ...c,
    coordinate: l.fromJSON(c.coordinate),
  }));
}
function y(e) {
  var t;
  return 'xmin' in e ? e.center : 'x' in e ? e : (t = e.extent) == null ? void 0 : t.center;
}
async function Q(e, t, r) {
  if (e == null) throw new o();
  const i = e.spatialReference;
  if ((r = r ?? y(e)) == null) throw new o();
  const c = e.constructor.fromJSON(await a('rotate', [i, e, t, r]));
  return (c.spatialReference = i), c;
}
async function U(e, t) {
  if (e == null) throw new o();
  const r = e.spatialReference;
  if ((t = t ?? y(e)) == null) throw new o();
  const i = e.constructor.fromJSON(await a('flipHorizontal', [r, e, t]));
  return (i.spatialReference = r), i;
}
async function X(e, t) {
  if (e == null) throw new o();
  const r = e.spatialReference;
  if ((t = t ?? y(e)) == null) throw new o();
  const i = e.constructor.fromJSON(await a('flipVertical', [r, e, t]));
  return (i.spatialReference = r), i;
}
async function Y(e, t, r, i) {
  return s(await a('generalize', [n(e), e, t, r, i]));
}
async function Z(e, t, r) {
  return s(await a('densify', [n(e), e, t, r]));
}
async function _(e, t, r, i = 0) {
  return s(await a('geodesicDensify', [n(e), e, t, r, i]));
}
function ee(e, t) {
  return a('planarArea', [n(e), e, t]);
}
function te(e, t) {
  return a('planarLength', [n(e), e, t]);
}
function re(e, t, r) {
  return a('geodesicArea', [n(e), e, t, r]);
}
function ae(e, t, r) {
  return a('geodesicLength', [n(e), e, t, r]);
}
async function ne(e, t) {
  return s(await a('intersectLinesToPoints', [n(e), e, t]));
}
async function ie(e, t) {
  await m('changeDefaultSpatialReferenceTolerance', [e, t]);
}
async function se(e) {
  await m('clearDefaultSpatialReferenceTolerance', [e]);
}
class o extends Error {
  constructor() {
    super('Illegal Argument Exception');
  }
}
export {
  $ as buffer,
  ie as changeDefaultSpatialReferenceTolerance,
  se as clearDefaultSpatialReferenceTolerance,
  O as clip,
  J as contains,
  I as convexHull,
  N as crosses,
  D as cut,
  Z as densify,
  P as difference,
  b as disjoint,
  L as distance,
  T as equals,
  A as extendedSpatialReferenceInfo,
  U as flipHorizontal,
  X as flipVertical,
  Y as generalize,
  re as geodesicArea,
  W as geodesicBuffer,
  _ as geodesicDensify,
  ae as geodesicLength,
  B as intersect,
  ne as intersectLinesToPoints,
  V as intersects,
  H as isSimple,
  F as nearestCoordinate,
  K as nearestVertex,
  M as nearestVertices,
  G as offset,
  j as overlaps,
  ee as planarArea,
  te as planarLength,
  z as relate,
  Q as rotate,
  k as simplify,
  q as symmetricDifference,
  v as touches,
  C as union,
  E as within,
};
