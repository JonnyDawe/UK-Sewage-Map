import {
  lp as c,
  lq as y,
  aT as d,
  P as m,
  lr as p,
  a7 as _,
  w as g,
  aI as h,
  ls as b,
  lt as w,
  lu as A,
  eG as l,
  il as B,
} from './index.lazy-BHTpPf8X.js';
import { i as I, o as R } from './Indices-CNwiYcS5.js';
let E = class {
  constructor(t) {
    this._streamDataRequester = t;
  }
  async loadJSON(t, o) {
    return this._load('json', t, o);
  }
  async loadBinary(t, o) {
    return y(t) ? (d(o), c(t)) : this._load('binary', t, o);
  }
  async loadImage(t, o) {
    return this._load('image', t, o);
  }
  async _load(t, o, r) {
    if (this._streamDataRequester == null) return (await m(o, { responseType: S[t] })).data;
    const a = await p(this._streamDataRequester.request(o, t, r));
    if (a.ok === !0) return a.value;
    throw (
      (g(a.error), new _('glt-loader-request-error', `Request for resource failed: ${a.error}`))
    );
  }
};
const S = { image: 'image', binary: 'array-buffer', json: 'json', 'image+type': void 0 };
function q(e, t) {
  f(e.typedBuffer, t.typedBuffer, e.typedBufferStride, t.typedBufferStride);
}
function f(e, t, o = 2, r = o) {
  const a = t.length / 2;
  let n = 0,
    u = 0;
  if (!h(t) || b(t)) {
    for (let s = 0; s < a; ++s) (e[n] = t[u]), (e[n + 1] = t[u + 1]), (n += o), (u += r);
    return;
  }
  const i = w(t);
  if (A(t))
    for (let s = 0; s < a; ++s)
      (e[n] = Math.max(t[u] / i, -1)), (e[n + 1] = Math.max(t[u + 1] / i, -1)), (n += o), (u += r);
  else for (let s = 0; s < a; ++s) (e[n] = t[u] / i), (e[n + 1] = t[u + 1] / i), (n += o), (u += r);
}
function T(e, t, o, r) {
  const a = e.typedBuffer,
    n = e.typedBufferStride,
    u = (r == null ? void 0 : r.count) ?? e.count;
  let i = ((r == null ? void 0 : r.dstIndex) ?? 0) * n;
  for (let s = 0; s < u; ++s) (a[i] = t), (a[i + 1] = o), (i += n);
}
Object.freeze(
  Object.defineProperty(
    { __proto__: null, fill: T, normalizeIntegerBuffer: f, normalizeIntegerBufferView: q },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
function P(e, t) {
  switch (t) {
    case l.TRIANGLES:
      return $(e);
    case l.TRIANGLE_STRIP:
      return j(e);
    case l.TRIANGLE_FAN:
      return N(e);
  }
}
function $(e) {
  return typeof e == 'number' ? R(e) : B(e) ? new Uint16Array(e) : e;
}
function j(e) {
  const t = typeof e == 'number' ? e : e.length;
  if (t < 3) return [];
  const o = t - 2,
    r = I(3 * o);
  if (typeof e == 'number') {
    let a = 0;
    for (let n = 0; n < o; n += 1)
      n % 2 == 0
        ? ((r[a++] = n), (r[a++] = n + 1), (r[a++] = n + 2))
        : ((r[a++] = n + 1), (r[a++] = n), (r[a++] = n + 2));
  } else {
    let a = 0;
    for (let n = 0; n < o; n += 1)
      n % 2 == 0
        ? ((r[a++] = e[n]), (r[a++] = e[n + 1]), (r[a++] = e[n + 2]))
        : ((r[a++] = e[n + 1]), (r[a++] = e[n]), (r[a++] = e[n + 2]));
  }
  return r;
}
function N(e) {
  const t = typeof e == 'number' ? e : e.length;
  if (t < 3) return new Uint16Array(0);
  const o = t - 2,
    r = o <= 65536 ? new Uint16Array(3 * o) : new Uint32Array(3 * o);
  if (typeof e == 'number') {
    let i = 0;
    for (let s = 0; s < o; ++s) (r[i++] = 0), (r[i++] = s + 1), (r[i++] = s + 2);
    return r;
  }
  const a = e[0];
  let n = e[1],
    u = 0;
  for (let i = 0; i < o; ++i) {
    const s = e[i + 2];
    (r[u++] = a), (r[u++] = n), (r[u++] = s), (n = s);
  }
  return r;
}
export { f as a, q as b, T as l, E as n, P as o };
