import './index.lazy-BFilFZ3v.js';
function H(t) {
  return t
    ? {
        originPosition:
          t.originPosition === 'upper-left'
            ? 'upperLeft'
            : t.originPosition === 'lower-left'
              ? 'lowerLeft'
              : t.originPosition,
        scale: t.tolerance ? [t.tolerance, t.tolerance, 1, 1] : [1, 1, 1, 1],
        translate:
          t.extent != null
            ? [t.extent.xmin, t.extent.ymax, t.extent.zmin ?? 0, t.extent.mmin ?? 0]
            : [0, 0, 0, 0],
      }
    : null;
}
function z(t) {
  return t.originPosition === 'lowerLeft' && t.scale.length === 4 && t.translate.length === 4;
}
function x(t) {
  if (z(t)) return t;
  const { originPosition: r, scale: n, translate: o } = t,
    l = n[0] ?? 1,
    s = n[1] ?? 1;
  return {
    originPosition: 'lowerLeft',
    scale: [l, r === 'lowerLeft' ? s : -s, n[2] ?? 1, n[3] ?? 1],
    translate: [o[0] ?? 0, o[1] ?? 0, o[2] ?? 0, o[3] ?? 0],
  };
}
function Z({ scale: t, translate: r }, n) {
  return Math.round((n - r[0]) / t[0]);
}
function A({ scale: t, translate: r }, n) {
  return Math.round((n - r[1]) / t[1]);
}
function d({ scale: t, translate: r }, n) {
  return Math.round(((n ?? 0) - r[2]) / t[2]);
}
function b({ scale: t, translate: r }, n) {
  return n ? Math.round((n - r[3]) / t[3]) : 0;
}
function P({ scale: t, translate: r }, n) {
  return n * t[0] + r[0];
}
function y({ scale: t, translate: r }, n) {
  return n * t[1] + r[1];
}
function w({ scale: t, translate: r }, n) {
  return (n ?? 0) * t[2] + r[2];
}
function m({ scale: t, translate: r }, n) {
  return n ? n * t[3] + r[3] : 0;
}
function p(t, r) {
  return t && r ? D : t && !r ? B : !t && r ? C : j;
}
const j = (t, r) => {
    const n = new Array(r.length);
    if (!r.length) return n;
    const o = r[0];
    let l = P(t, o[0]),
      s = y(t, o[1]);
    n[0] = [l, s];
    const { scale: e, originPosition: a } = t,
      u = e[0],
      c = a === 'lowerLeft' ? e[1] : -e[1];
    for (let i = 1; i < r.length; i++) {
      const [f, h] = r[i];
      (l += u * f), (s += c * h), (n[i] = [l, s]);
    }
    return n;
  },
  B = (t, r) => {
    const n = new Array(r.length);
    if (!r.length) return n;
    const o = r[0];
    let l = P(t, o[0]),
      s = y(t, o[1]);
    n[0] = [l, s, w(t, o[2])];
    const { scale: e, originPosition: a } = t,
      u = e[0],
      c = a === 'lowerLeft' ? e[1] : -e[1];
    for (let i = 1; i < r.length; i++) {
      const [f, h, g] = r[i];
      (l += u * f), (s += c * h), (n[i] = [l, s, w(t, g)]);
    }
    return n;
  },
  C = (t, r) => {
    const n = new Array(r.length);
    if (!r.length) return n;
    const o = r[0];
    let l = P(t, o[0]),
      s = y(t, o[1]);
    n[0] = [l, s, m(t, o[2])];
    const { scale: e, originPosition: a } = t,
      u = e[0],
      c = a === 'lowerLeft' ? e[1] : -e[1];
    for (let i = 1; i < r.length; i++) {
      const [f, h, g] = r[i];
      (l += u * f), (s += c * h), (n[i] = [l, s, m(t, g)]);
    }
    return n;
  },
  D = (t, r) => {
    const n = new Array(r.length);
    if (!r.length) return n;
    const o = r[0];
    let l = P(t, o[0]),
      s = y(t, o[1]);
    n[0] = [l, s, w(t, o[2]), m(t, o[3])];
    const { scale: e, originPosition: a } = t,
      u = e[0],
      c = a === 'lowerLeft' ? e[1] : -e[1];
    for (let i = 1; i < r.length; i++) {
      const [f, h, g, M] = r[i];
      (l += u * f), (s += c * h), (n[i] = [l, s, w(t, g), m(t, M)]);
    }
    return n;
  };
function L(t, r, n) {
  const o = new Array(n.length);
  for (let l = 0; l < n.length; l++) o[l] = r(t, n[l]);
  return o;
}
function T(t, r, n) {
  const o = x(t);
  return (
    (r.x = Z(o, n.x)),
    (r.y = A(o, n.y)),
    n.z != null && (r.z = d(o, n.z)),
    n.m != null && (r.m = b(o, n.m)),
    r
  );
}
function k(
  t,
  r,
  n,
  o = (n == null ? void 0 : n.hasZ) ?? !1,
  l = (n == null ? void 0 : n.hasM) ?? !1,
) {
  if (n != null) {
    const s = x(t);
    (r.points = p(o, l)(s, n.points)), (r.hasZ = o), (r.hasM = l);
  }
  return r;
}
function q(
  t,
  r,
  n,
  o = (n == null ? void 0 : n.z) != null,
  l = (n == null ? void 0 : n.m) != null,
) {
  if (n == null) return r;
  const s = x(t);
  return (r.x = P(s, n.x)), (r.y = y(s, n.y)), o && (r.z = w(s, n.z)), l && (r.m = m(s, n.m)), r;
}
function v(
  t,
  r,
  n,
  o = (n == null ? void 0 : n.hasZ) ?? !1,
  l = (n == null ? void 0 : n.hasM) ?? !1,
) {
  if (n != null) {
    const s = x(t);
    (r.rings = L(s, p(o, l), n.rings)), (r.hasZ = o), (r.hasM = l);
  }
  return r;
}
function F(
  t,
  r,
  n,
  o = (n == null ? void 0 : n.hasZ) ?? !1,
  l = (n == null ? void 0 : n.hasM) ?? !1,
) {
  if (n != null) {
    const s = x(t);
    (r.paths = L(s, p(o, l), n.paths)), (r.hasZ = o), (r.hasM = l);
  }
  return r;
}
export { k as B, q as C, v as D, F as H, A as a, Z as i, T as j, H as s, x as u };
