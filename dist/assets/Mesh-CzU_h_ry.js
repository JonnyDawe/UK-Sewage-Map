const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/loadGLTFMesh-CICy_fWg.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/mat3f64-q3fE-ZOt.js',
      'assets/MeshComponent-B8voAMau.js',
      'assets/meshProperties-C4iW0Ukm.js',
      'assets/MeshVertexAttributes-BlN25Y3i.js',
      'assets/meshVertexSpaceUtils-Dx1K8Ka4.js',
      'assets/MeshLocalVertexSpace-7O0-32Cx.js',
      'assets/BufferView-CJw8SoI8.js',
      'assets/vec3-B-IGRPcz.js',
      'assets/vec4-0pFsYPaF.js',
      'assets/types-D0PSWh4d.js',
      'assets/loader-BG-PhafZ.js',
      'assets/mat4f64-Dk4dwAN8.js',
      'assets/quat-DOUEtkz6.js',
      'assets/quatf64-aQ5IuZRd.js',
      'assets/resourceUtils-Duvd__I9.js',
      'assets/basicInterfaces-CZwQPxTp.js',
      'assets/indexUtils-ObiYTKib.js',
      'assets/Indices-CUXWe50Q.js',
      'assets/vertexSpaceConversion-DReBTI7u.js',
      'assets/spatialReferenceEllipsoidUtils-B1ThbZT4.js',
      'assets/computeTranslationToOriginAndRotation-CPeb_cTX.js',
      'assets/projectPointToVector-CRQo6haA.js',
      'assets/gltfexport-DIwMMoKE.js',
    ]),
) => i.map((i) => d[i]);
import { _ as ie } from './index-DShQM7Xx.js';
import {
  a7 as te,
  eb as it,
  a8 as ne,
  a5 as w,
  Z as lt,
  _ as ct,
  Y as le,
  oJ as ut,
  lL as xe,
  oK as ce,
  aK as pt,
  G as ft,
  a1 as ht,
  h0 as mt,
  gB as Fe,
  aT as re,
  j as _,
  fC as dt,
  oL as gt,
  gC as xt,
  k2 as vt,
  c6 as yt,
  bF as wt,
  bi as $t,
  f3 as At,
  A as d,
  B as g,
  R as Oe,
  h2 as ue,
  ah as bt,
  d0 as pe,
  oM as Le,
  hf as Ee,
  oN as Ce,
  hc as Pe,
  oO as De,
  oP as ze,
  h6 as Rt,
  jN as se,
  c$ as St,
  $ as Mt,
  oQ as _t,
  c_ as Ft,
  gO as Ot,
  o4 as Lt,
  gb as Et,
  cv as Ct,
  cn as Pt,
  bQ as Dt,
  oR as zt,
} from './index.lazy-BFilFZ3v.js';
import { z as Te, w as Q, k as Be, j as je, d as Tt } from './axisAngleDegrees-C8h4I4TV.js';
import { f as U } from './MeshComponent-B8voAMau.js';
import { a as fe, n as Z } from './MeshLocalVertexSpace-7O0-32Cx.js';
import { N as V } from './MeshTransform-CL1w8m2X.js';
import { p as J } from './MeshVertexAttributes-BlN25Y3i.js';
import { t as K, l as Y, c as Ie, u as Bt } from './meshVertexSpaceUtils-Dx1K8Ka4.js';
import { f as jt } from './triangulationUtils-Csz6C4Ml.js';
import { c as M } from './projectPointToVector-CRQo6haA.js';
import {
  F as v,
  B as he,
  O as E,
  n as It,
  k as Ue,
  g as ke,
  E as Ge,
  w as Ne,
  h as Ve,
  R as qe,
  G as Ke,
} from './vertexSpaceConversion-DReBTI7u.js';
import { e as oe } from './mat4f64-Dk4dwAN8.js';
import { a as de } from './spatialReferenceEllipsoidUtils-B1ThbZT4.js';
import { m as We } from './computeTranslationToOriginAndRotation-CPeb_cTX.js';
import { r as ve, a as Ut } from './vec3-B-IGRPcz.js';
import { o as ye, h as kt, m as Gt } from './External-DqFhi187.js';
import { e as He } from './mat3f64-q3fE-ZOt.js';
import { b as Nt } from './quat-DOUEtkz6.js';
import { e as Vt, r as qt } from './quatf64-aQ5IuZRd.js';
import './meshProperties-C4iW0Ukm.js';
import './earcut-D9gy186-.js';
import './Indices-CUXWe50Q.js';
import './plane-pBXJ95gF.js';
import './deduplicate-BUWTlRxn.js';
import './BufferView-CJw8SoI8.js';
import './vec4-0pFsYPaF.js';
const Kt = 'Mesh must be loaded before applying operations',
  Wt = 'Provided component is not part of the list of components',
  Ht = 'Expected polygon to be a Polygon instance',
  N = 'Expected location to be a Point instance';
class Qt extends te {
  constructor() {
    super('invalid-input:location', N);
  }
}
function ge(e, t, n, r) {
  if (r !== void 0) {
    it(e(), 'option: geographic', {
      replacement:
        'Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.',
      version: '4.30',
      warnOnce: !0,
    });
    const s = t.type === 'local';
    if (!K(t) || r === s) return n.isGeographic || (n.isWebMercator && r);
    e().warnOnce(
      `Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`,
    );
  }
  switch (t.type) {
    case 'georeferenced':
      return n.isGeographic;
    case 'local':
      return n.isGeographic || n.isWebMercator;
  }
}
const q = () => ne.getLogger('esri.geometry.support.meshUtils.centerAt');
function Zt(e, t, n) {
  var a;
  if (!((a = e.vertexAttributes) != null && a.position)) return;
  const { vertexSpace: r } = e,
    s = (n == null ? void 0 : n.origin) ?? e.origin,
    o = ge(q, r, s.spatialReference, n == null ? void 0 : n.geographic);
  K(r) ? Jt(e, t, s) : o ? Yt(e, t, s) : Xt(e, t, s);
}
function Jt(e, t, n) {
  const { vertexSpace: r } = e;
  if (!K(r)) return;
  const s = Ze,
    o = Qe;
  if (!M(t, o, e.spatialReference)) return void v(q(), t.spatialReference, e.spatialReference, E);
  if (!M(n, s, e.spatialReference)) {
    const i = e.origin;
    return (
      (s[0] = i.x),
      (s[1] = i.y),
      (s[2] = i.z),
      void v(q(), n.spatialReference, e.spatialReference, E)
    );
  }
  const a = lt(tn, o, s);
  r.origin = ct(w(), r.origin, a);
}
function Yt(e, t, n) {
  const r = le(n.x, n.y, n.z ?? 0),
    s = he(e, new fe({ origin: r }));
  if (!s) return;
  const o = le(t.x, t.y, t.z ?? 0),
    a = he(
      {
        vertexAttributes: s,
        spatialReference: e.spatialReference,
        vertexSpace: new fe({ origin: o }),
      },
      Z.absolute,
    );
  if (!a) return;
  const { position: i, normal: l, tangent: u } = a;
  (e.vertexAttributes.position = i),
    (e.vertexAttributes.normal = l),
    (e.vertexAttributes.tangent = u),
    e.vertexAttributesChanged();
}
function Xt(e, t, n) {
  const r = Ze,
    s = Qe;
  if (M(t, s, e.spatialReference)) {
    if (!M(n, r, e.spatialReference)) {
      const o = e.origin;
      return (
        (r[0] = o.x),
        (r[1] = o.y),
        (r[2] = o.z),
        void v(q(), n.spatialReference, e.spatialReference, E)
      );
    }
    en(e.vertexAttributes.position, s, r), e.vertexAttributesChanged();
  } else v(q(), t.spatialReference, e.spatialReference, E);
}
function en(e, t, n) {
  if (e) for (let r = 0; r < e.length; r += 3) for (let s = 0; s < 3; s++) e[r + s] += t[s] - n[s];
}
const Qe = w(),
  Ze = w(),
  tn = w();
function nn(e) {
  const { spatialReference: t, vertexSpace: n, untransformedBounds: r } = e,
    s = ut(r, rn);
  if ((K(n) && e.transform && ve(s, s, e.transform.localMatrix), n.type === 'georeferenced')) {
    const i = n.origin;
    return i && Ut(s, s, i), xe(ce(s), t);
  }
  const o = de(t),
    a = n.origin;
  if (!pt(o, t)) {
    const [i, l, u] = a;
    return new ft({ xmin: i, ymin: l, zmin: u, xmax: i, ymax: l, zmax: u, spatialReference: t });
  }
  return We(t, a, we, o), ve(s, s, we), ht(s, o, 0, s, t, 0), xe(ce(s), t);
}
const we = oe(),
  rn = mt(24);
async function sn(e, t, n) {
  const { source: r } = t,
    { loadGLTFMesh: s } = await Fe(
      ie(
        () => import('./loadGLTFMesh-CICy_fWg.js'),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26,
        ]),
      ),
      n,
    ),
    o = await an(r, n);
  re(n);
  const a = s(new _({ x: 0, y: 0, z: 0, spatialReference: e.spatialReference }), o.url, {
    resolveFile: on(o),
    signal: n == null ? void 0 : n.signal,
    expectedType: o.type,
    unitConversionDisabled: t.unitConversionDisabled,
  });
  a.then(
    () => o.dispose(),
    () => o.dispose(),
  );
  const { vertexAttributes: i, components: l } = await a;
  (e.vertexAttributes = i), (e.components = l);
}
function on(e) {
  const t = dt(e.url);
  return (n) => {
    const r = gt(n, t, t),
      s = r ? r.replace(/^ *\.\//, '') : null;
    return (s ? e.files.get(s) : null) ?? n;
  };
}
async function an(e, t) {
  if (Array.isArray(e)) {
    if (!e.length)
      throw new te('mesh-load-external:missing-assets', 'There must be at least one file to load');
    return e[0] instanceof File ? cn(e) : un(e, t);
  }
  return Je(e);
}
async function ln(e, t) {
  const { parts: n, assetMimeType: r, assetName: s } = e;
  if (n.length === 1) return new X(n[0].partUrl);
  const o = await e.toBlob(t);
  return re(t), X.fromBlob(o, nt(s, r));
}
function Je(e) {
  return X.fromBlob(e, nt(e.name, e.type));
}
function cn(e) {
  return et(e.map((t) => ({ name: t.name, mimeType: t.type, source: Je(t) })));
}
async function un(e, t) {
  const n = await xt(
    e.map(async (r) => {
      const s = await ln(r);
      return re(t), { name: r.assetName, mimeType: r.assetMimeType, source: s };
    }),
  );
  if (vt(t)) throw (n.forEach((r) => r.source.dispose()), yt());
  return et(n);
}
const Ye = /^model\/gltf\+json$/,
  Xe = /^model\/gltf-binary$/,
  me = /\.gltf$/i,
  pn = /\.glb$/i;
function $e({ mimeType: e, source: t, name: n }) {
  return Ye.test(e) || me.test(n)
    ? { url: t.url, type: 'gltf' }
    : Xe.test(e) || pn.test(n)
      ? { url: t.url, type: 'glb' }
      : null;
}
function et(e) {
  const t = new Map();
  let n = null,
    r = null;
  for (const o of e) {
    const { source: a, name: i } = o;
    n ?? (n = $e(o)),
      i === 'ESRI3DO_NORM.glb' && (r = $e(o)),
      t.set(i, a.url),
      a.files.forEach((l, u) => t.set(u, l));
  }
  const s = r ?? n;
  if (s == null)
    throw new te('mesh-load-external:missing-files', 'Missing files to load external mesh source');
  return new X(s.url, () => e.forEach(({ source: o }) => o.dispose()), t, s.type);
}
let X = class tt {
  constructor(t, n = () => {}, r = new Map(), s) {
    (this.url = t), (this.dispose = n), (this.files = r), (this.type = s);
  }
  static fromBlob(t, n) {
    const r = URL.createObjectURL(t);
    return new tt(r, () => URL.revokeObjectURL(r), void 0, n);
  }
};
function nt(e, t) {
  return Ye.test(t) || me.test(e) ? 'gltf' : Xe.test(t) || me.test(e) ? 'glb' : void 0;
}
let S = class extends wt {
  constructor(e) {
    super(e),
      (this.externalSources = new $t()),
      (this._explicitDisplaySource = null),
      (this.georeferenced = !1),
      this.addHandles(
        At(
          () => this.externalSources,
          'after-remove',
          ({ item: t }) => {
            t === this._explicitDisplaySource && (this._explicitDisplaySource = null);
          },
          { sync: !0, onListenerRemove: () => (this._explicitDisplaySource = null) },
        ),
      );
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e) {
    if (e != null && !ye(e))
      throw new Error('Cannot use this source for display: it is not in a supported format.');
    (this._explicitDisplaySource = e),
      e && this.externalSources.every((t) => !kt(t, e)) && this.externalSources.add(e);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e) {
    return this.externalSources.items.filter((t) => Gt(t, e));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(ye);
  }
};
d([g()], S.prototype, 'externalSources', void 0),
  d([g()], S.prototype, 'displaySource', null),
  d([g()], S.prototype, '_implicitDisplaySource', null),
  d([g()], S.prototype, '_explicitDisplaySource', void 0),
  d([g()], S.prototype, 'georeferenced', void 0),
  (S = d([Oe('esri.geometry.support.meshUtils.Metadata')], S));
function fn() {
  const { faceDescriptions: e, faceVertexOffsets: t, uvScales: n } = $n,
    r = 4 * e.length,
    s = new Float64Array(3 * r),
    o = new Float32Array(3 * r),
    a = new Float32Array(2 * r),
    i = new Uint32Array(2 * e.length * 3);
  let l = 0,
    u = 0,
    c = 0,
    f = 0;
  for (let h = 0; h < e.length; h++) {
    const p = e[h],
      x = l / 3;
    for (const A of t) i[f++] = x + A;
    const C = p.corners;
    for (let A = 0; A < 4; A++) {
      const P = C[A];
      let $ = 0;
      (a[c++] = 0.25 * n[A][0] + p.uvOrigin[0]), (a[c++] = p.uvOrigin[1] - 0.25 * n[A][1]);
      for (let R = 0; R < 3; R++)
        p.axis[R] !== 0
          ? ((s[l++] = 0.5 * p.axis[R]), (o[u++] = p.axis[R]))
          : ((s[l++] = 0.5 * P[$++]), (o[u++] = 0));
    }
  }
  return { position: s, normal: o, uv: a, faces: i };
}
function hn(e, t) {
  const n = e.components[0],
    r = n.faces,
    s = An[t],
    o = 6 * s,
    a = new Array(6),
    i = new Array(r.length - 6);
  let l = 0,
    u = 0;
  for (let c = 0; c < r.length; c++) c >= o && c < o + 6 ? (a[l++] = r[c]) : (i[u++] = r[c]);
  if (e.vertexAttributes.uv != null) {
    const c = new Float32Array(e.vertexAttributes.uv),
      f = 4 * s * 2,
      h = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let p = 0; p < h.length; p++) c[f + p] = h[p];
    e.vertexAttributes.uv = c;
  }
  return (e.components = [new U({ faces: a, material: n.material }), new U({ faces: i })]), e;
}
function mn(e = 0) {
  const t = Math.round(8 * 2 ** e),
    n = 2 * t,
    r = (t - 1) * (n + 1) + 2 * n,
    s = new Float64Array(3 * r),
    o = new Float32Array(3 * r),
    a = new Float32Array(2 * r),
    i = new Uint32Array(3 * ((t - 1) * n * 2));
  let l = 0,
    u = 0,
    c = 0,
    f = 0;
  for (let h = 0; h <= t; h++) {
    const p = (h / t) * Math.PI + 0.5 * Math.PI,
      x = Math.cos(p),
      C = Math.sin(p);
    m[2] = C;
    const A = h === 0 || h === t,
      P = A ? n - 1 : n;
    for (let $ = 0; $ <= P; $++) {
      const R = ($ / P) * 2 * Math.PI;
      (m[0] = -Math.sin(R) * x), (m[1] = Math.cos(R) * x);
      for (let F = 0; F < 3; F++) (s[l] = 0.5 * m[F]), (o[l] = m[F]), ++l;
      (a[u++] = ($ + (A ? 0.5 : 0)) / n),
        (a[u++] = h / t),
        h !== 0 &&
          $ !== n &&
          (h !== t && ((i[c++] = f), (i[c++] = f + 1), (i[c++] = f - n)),
          h !== 1 && ((i[c++] = f), (i[c++] = f - n), (i[c++] = f - n - 1))),
        f++;
    }
  }
  return { position: s, normal: o, uv: a, faces: i };
}
function dn(e = 0) {
  const n = Math.round(16 * 2 ** e),
    r = 4 * (n + 1) + 2 * n,
    s = new Float64Array(3 * r),
    o = new Float32Array(3 * r),
    a = new Float32Array(2 * r),
    i = new Uint32Array(3 * (4 * n));
  let l = 0,
    u = 0,
    c = 0,
    f = 0,
    h = 0;
  for (let p = 0; p <= 5; p++) {
    const x = p === 0 || p === 5,
      C = p <= 1 || p >= 4,
      A = p === 2 || p === 4,
      P = x ? n - 1 : n;
    for (let $ = 0; $ <= P; $++) {
      const R = ($ / P) * 2 * Math.PI,
        F = x ? 0 : 0.5;
      (m[0] = F * Math.sin(R)), (m[1] = F * -Math.cos(R)), (m[2] = p <= 2 ? 0.5 : -0.5);
      for (let T = 0; T < 3; T++)
        (s[l++] = m[T]), (o[u++] = C ? (T === 2 ? (p <= 1 ? 1 : -1) : 0) : T === 2 ? 0 : m[T] / F);
      (a[c++] = ($ + (x ? 0.5 : 0)) / n),
        (a[c++] =
          p <= 1 ? (1 * p) / 3 : p <= 3 ? (1 * (p - 2)) / 3 + 1 / 3 : (1 * (p - 4)) / 3 + 2 / 3),
        A ||
          p === 0 ||
          $ === n ||
          (p !== 5 && ((i[f++] = h), (i[f++] = h + 1), (i[f++] = h - n)),
          p !== 1 && ((i[f++] = h), (i[f++] = h - n), (i[f++] = h - n - 1))),
        h++;
    }
  }
  return { position: s, normal: o, uv: a, faces: i };
}
function gn(e, t) {
  const n = typeof t == 'number' ? t : t != null ? t.width : 1,
    r = typeof t == 'number' ? t : t != null ? t.height : 1;
  switch (e) {
    case 'up':
    case 'down':
      return { width: n, depth: r };
    case 'north':
    case 'south':
      return { width: n, height: r };
    case 'east':
    case 'west':
      return { depth: n, height: r };
  }
}
function xn(e) {
  const t = G.facingAxisOrderSwap[e],
    n = G.position,
    r = G.normal,
    s = new Float64Array(n.length),
    o = new Float32Array(r.length);
  let a = 0;
  for (let i = 0; i < 4; i++) {
    const l = a;
    for (let u = 0; u < 3; u++) {
      const c = t[u],
        f = Math.abs(c) - 1,
        h = c >= 0 ? 1 : -1;
      (s[a] = n[l + f] * h), (o[a] = r[l + f] * h), a++;
    }
  }
  return {
    position: s,
    normal: o,
    uv: new Float32Array(G.uv),
    faces: new Uint32Array(G.faces),
    isPlane: !0,
  };
}
const W = 1,
  k = 2,
  ae = 3,
  G = {
    position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    uv: [0, 1, 1, 1, 1, 0, 0, 0],
    faces: [0, 1, 2, 0, 2, 3],
    facingAxisOrderSwap: {
      east: [ae, W, k],
      west: [-3, -1, k],
      north: [-1, ae, k],
      south: [W, -3, k],
      up: [W, k, ae],
      down: [W, -2, -3],
    },
  };
function H(e, t, n) {
  e.isPlane || vn(e),
    wn(e, yn(n == null ? void 0 : n.size, n == null ? void 0 : n.unit, t.spatialReference));
  const r = Y(t, n),
    s = t.spatialReference.isGeographic ? Y(t) : r,
    o = he({ vertexAttributes: e, vertexSpace: s, spatialReference: t.spatialReference }, r, {
      allowBufferReuse: !0,
    });
  return {
    vertexAttributes: new J({ ...o, uv: e.uv }),
    vertexSpace: r,
    components: [new U({ faces: e.faces, material: (n == null ? void 0 : n.material) || null })],
    spatialReference: t.spatialReference,
  };
}
function vn(e) {
  for (let t = 0; t < e.position.length; t += 3) e.position[t + 2] += 0.5;
}
function yn(e, t, n) {
  const r = It(t, n);
  if (e == null && r === 1) return null;
  if (e == null) return [r, r, r];
  if (typeof e == 'number') {
    const s = e * r;
    return [s, s, s];
  }
  return [
    e.width != null ? e.width * r : r,
    e.depth != null ? e.depth * r : r,
    e.height != null ? e.height * r : r,
  ];
}
function wn(e, t) {
  if (t != null) {
    (O[0] = t[0]), (O[4] = t[1]), (O[8] = t[2]);
    for (let n = 0; n < e.position.length; n += 3) {
      for (let r = 0; r < 3; r++) m[r] = e.position[n + r];
      ue(m, m, O);
      for (let r = 0; r < 3; r++) e.position[n + r] = m[r];
    }
    if (t[0] !== t[1] || t[1] !== t[2]) {
      (O[0] = 1 / t[0]), (O[4] = 1 / t[1]), (O[8] = 1 / t[2]);
      for (let n = 0; n < e.normal.length; n += 3) {
        for (let r = 0; r < 3; r++) m[r] = e.normal[n + r];
        ue(m, m, O), bt(m, m);
        for (let r = 0; r < 3; r++) e.normal[n + r] = m[r];
      }
    }
  }
}
const $n = {
    faceDescriptions: [
      {
        axis: [0, -1, 0],
        uvOrigin: [0, 0.625],
        corners: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
      },
      {
        axis: [1, 0, 0],
        uvOrigin: [0.25, 0.625],
        corners: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
      },
      {
        axis: [0, 1, 0],
        uvOrigin: [0.5, 0.625],
        corners: [
          [1, -1],
          [-1, -1],
          [-1, 1],
          [1, 1],
        ],
      },
      {
        axis: [-1, 0, 0],
        uvOrigin: [0.75, 0.625],
        corners: [
          [1, -1],
          [-1, -1],
          [-1, 1],
          [1, 1],
        ],
      },
      {
        axis: [0, 0, 1],
        uvOrigin: [0, 0.375],
        corners: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
      },
      {
        axis: [0, 0, -1],
        uvOrigin: [0, 0.875],
        corners: [
          [-1, 1],
          [1, 1],
          [1, -1],
          [-1, -1],
        ],
      },
    ],
    uvScales: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    faceVertexOffsets: [0, 1, 2, 0, 2, 3],
  },
  An = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 },
  m = w(),
  O = He(),
  D = () => ne.getLogger('esri.geometry.support.meshUtils.rotate');
function bn(e, t, n) {
  var l;
  if (!((l = e.vertexAttributes) != null && l.position) || t[3] === 0) return;
  const { spatialReference: r, vertexSpace: s } = e,
    o = (n == null ? void 0 : n.origin) ?? e.origin,
    a = n == null ? void 0 : n.geographic,
    i = ge(D, s, r, a);
  Ie(e) ? Rn(e, t, o) : i ? Sn(e, t, o) : Mn(e, t, o);
}
function Rn(e, t, n) {
  e.transform ?? (e.transform = new V());
  const { vertexSpace: r, transform: s, spatialReference: o } = e,
    [a, i, l] = r.origin,
    u = new _({ x: a, y: i, z: l, spatialReference: o }),
    c = B;
  if (u.equals(n)) pe(c, 0, 0, 0);
  else if (!Ue(c, n, e)) return void v(D(), n.spatialReference, o, E);
  Nt(Se, Q(t), Te(t));
  const f = Le(Ae, Se, se, _t, c),
    { localMatrix: h } = s,
    p = Ee(Ae, f, h);
  (s.scale = Ce(w(), p)), Pe(p, p, De(B, s.scale));
  const x = s.rotationAxis;
  (s.rotation = Be(p)), s.rotationAngle === 0 && (s.rotationAxis = x), (s.translation = ze(w(), p));
}
function Sn(e, t, n) {
  const r = e.spatialReference,
    s = de(r),
    o = rt;
  if (
    !M(n, o, s) &&
    (v(D(), n.spatialReference, s, 'Falling back to mesh origin'), !M(e.origin, o, s))
  )
    return void v(D(), e.origin.spatialReference, s);
  const a = e.vertexAttributes.position,
    i = e.vertexAttributes.normal,
    l = e.vertexAttributes.tangent,
    u = new Float64Array(a.length),
    c = i != null ? new Float32Array(i.length) : null,
    f = l != null ? new Float32Array(l.length) : null;
  We(s, o, ee, s), Rt(Re, ee);
  const h = be;
  ue(Q(be), Q(t), Re),
    (h[3] = t[3]),
    ke(a, r, u, s) &&
    (i == null || c == null || Ge(i, a, r, u, s, c)) &&
    (l == null || f == null || Ne(l, a, r, u, s, f))
      ? (I(u, h, 3, o),
        Ve(u, s, a, r) &&
        (i == null || c == null || (I(c, h, 3), qe(c, a, r, u, s, i))) &&
        (l == null || f == null || (I(f, h, 4), Ke(f, a, r, u, s, l)))
          ? e.vertexAttributesChanged()
          : v(D(), s, r))
      : v(D(), r, s);
}
function Mn(e, t, n) {
  const r = rt;
  if (!M(n, r, e.spatialReference)) {
    const s = e.origin;
    return (
      (r[0] = s.x),
      (r[1] = s.y),
      (r[2] = s.z),
      void v(D(), n.spatialReference, e.spatialReference, E)
    );
  }
  I(e.vertexAttributes.position, t, 3, r),
    I(e.vertexAttributes.normal, t, 3),
    I(e.vertexAttributes.tangent, t, 4),
    e.vertexAttributesChanged();
}
function I(e, t, n, r = se) {
  if (e != null) {
    St(ee, Te(t), Q(t));
    for (let s = 0; s < e.length; s += n) {
      for (let o = 0; o < 3; o++) B[o] = e[s + o] - r[o];
      Mt(B, B, ee);
      for (let o = 0; o < 3; o++) e[s + o] = B[o] + r[o];
    }
  }
}
const B = w(),
  Ae = oe(),
  be = je(),
  ee = oe(),
  Re = He(),
  rt = w(),
  Se = Vt(),
  z = () => ne.getLogger('esri.geometry.support.meshUtils.scale');
function _n(e, t, n) {
  var l;
  if (!((l = e.vertexAttributes) != null && l.position)) return;
  const { vertexSpace: r, spatialReference: s } = e,
    o = (n == null ? void 0 : n.origin) ?? e.origin,
    a = n == null ? void 0 : n.geographic,
    i = ge(z, r, s, a);
  Ie(e) ? Fn(e, t, o) : i ? On(e, t, o) : Ln(e, t, o);
}
function Fn(e, t, n) {
  e.transform ?? (e.transform = new V());
  const { vertexSpace: r, transform: s, spatialReference: o } = e,
    [a, i, l] = r.origin,
    u = new _({ x: a, y: i, z: l, spatialReference: o }),
    c = j;
  if (u.equals(n)) pe(c, 0, 0, 0);
  else if (!Ue(c, n, e)) return void v(z(), n.spatialReference, o, E);
  const f = pe(En, t, t, t),
    h = Le(Me, qt, se, f, c),
    { localMatrix: p } = s,
    x = Ee(Me, h, p);
  (s.scale = Ce(w(), x)), Pe(x, x, De(j, s.scale));
  const C = s.rotationAxis;
  (s.rotation = Be(x)), s.rotationAngle === 0 && (s.rotationAxis = C), (s.translation = ze(w(), x));
}
function On(e, t, n) {
  const r = e.spatialReference,
    s = de(r),
    o = ot;
  if (
    !M(n, o, s) &&
    (v(z(), n.spatialReference, s, 'Falling back to mesh origin'), !M(e.origin, o, s))
  )
    return void v(z(), e.origin.spatialReference, s);
  const a = e.vertexAttributes.position,
    i = e.vertexAttributes.normal,
    l = e.vertexAttributes.tangent,
    u = new Float64Array(a.length),
    c = i != null ? new Float32Array(i.length) : null,
    f = l != null ? new Float32Array(l.length) : null;
  ke(a, r, u, s) &&
  (i == null || c == null || Ge(i, a, r, u, s, c)) &&
  (l == null || f == null || Ne(l, a, r, u, s, f))
    ? (st(u, t, o),
      Ve(u, s, a, r) &&
      (i == null || c == null || qe(c, a, r, u, s, i)) &&
      (l == null || f == null || Ke(f, a, r, u, s, l))
        ? e.vertexAttributesChanged()
        : v(z(), s, r))
    : v(z(), r, s);
}
function Ln(e, t, n) {
  const r = ot;
  if (!M(n, r, e.spatialReference)) {
    const s = e.origin;
    return (
      (r[0] = s.x),
      (r[1] = s.y),
      (r[2] = s.z),
      void v(z(), n.spatialReference, e.spatialReference, E)
    );
  }
  st(e.vertexAttributes.position, t, r), e.vertexAttributesChanged();
}
function st(e, t, n = se) {
  if (e)
    for (let r = 0; r < e.length; r += 3) {
      for (let s = 0; s < 3; s++) j[s] = e[r + s] - n[s];
      Ft(j, j, t);
      for (let s = 0; s < 3; s++) e[r + s] = j[s] + n[s];
    }
}
const j = w(),
  En = w(),
  Me = oe(),
  ot = w();
var b;
const at = 'esri.geometry.Mesh';
function L() {
  return ne.getLogger(at);
}
const Cn = {
  base: null,
  key: 'type',
  defaultKeyValue: 'georeferenced',
  typeMap: { georeferenced: Z, local: fe },
};
let y = (b = class extends Ot.LoadableMixin(Lt.EsriPromiseMixin(Et)) {
  constructor(e) {
    super(e),
      (this.components = null),
      (this.vertexSpace = new Z()),
      (this.transform = null),
      (this.metadata = new S()),
      (this.hasZ = !0),
      (this.hasM = !1),
      (this.vertexAttributes = new J()),
      (this.type = 'mesh');
  }
  initialize() {
    (this.metadata.externalSources.length === 0 || this.vertexAttributes.position.length) &&
      (this.loadStatus = 'loaded'),
      this.when(() => {
        this.addHandles(
          Ct(
            () => {
              var e;
              return {
                vertexAttributes: this.vertexAttributes,
                components: (e = this.components) == null ? void 0 : e.map((t) => t.clone()),
              };
            },
            () => this._clearSources(),
            { once: !0, sync: !0 },
          ),
        );
      });
  }
  get hasExtent() {
    var e;
    return this.loaded
      ? this.vertexAttributes.position.length > 0 &&
          (!this.components || this.components.length > 0)
      : ((e = this.metadata.displaySource) == null ? void 0 : e.extent) != null;
  }
  get _transformedExtent() {
    const { spatialReference: e, vertexSpace: t } = this,
      n = this;
    return nn({
      get transform() {
        return n.transform;
      },
      vertexSpace: t,
      spatialReference: e,
      untransformedBounds: this._untransformedBounds,
    });
  }
  get _untransformedBounds() {
    const {
      vertexAttributes: { position: e },
      components: t,
    } = this;
    return e.length === 0 || (t == null ? void 0 : t.length) === 0 ? Pt(zt) : ce(e);
  }
  get origin() {
    const e = Bt(this.vertexSpace, this.spatialReference);
    if (e != null) return e;
    const { center: t, zmin: n } = this._transformedExtent;
    return new _({ x: t.x, y: t.y, z: n, spatialReference: this.spatialReference });
  }
  get extent() {
    var e, t;
    return this.loaded ||
      ((t = (e = this.metadata) == null ? void 0 : e.displaySource) == null ? void 0 : t.extent) ==
        null
      ? this._transformedExtent
      : this.metadata.displaySource.extent.clone();
  }
  addComponent(e) {
    this._checkIfLoaded('addComponent()') &&
      (this.components || (this.components = []),
      this.components.push(U.from(e)),
      this.notifyChange('components'));
  }
  removeComponent(e) {
    if (this._checkIfLoaded('removeComponent()')) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1) return this.components.splice(t, 1), void this.notifyChange('components');
      }
      L().error('removeComponent()', Wt);
    }
  }
  rotate(e, t, n, r) {
    return Tt(e, t, n, _e), bn(this, _e, r), this;
  }
  offset(e, t, n) {
    if (!this._checkIfLoaded('offset()')) return this;
    const { vertexSpace: r, vertexAttributes: s } = this,
      o = s == null ? void 0 : s.position;
    if (!o) return this;
    if (K(r)) {
      const [a, i, l] = r.origin;
      r.origin = le(a + e, i + t, l + n);
    } else {
      for (let a = 0; a < o.length; a += 3) (o[a] += e), (o[a + 1] += t), (o[a + 2] += n);
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e, t) {
    return this._checkIfLoaded('scale()') ? (_n(this, e, t), this) : this;
  }
  centerAt(e, t) {
    return this._checkIfLoaded('centerAt()') ? (Zt(this, e, t), this) : this;
  }
  load(e) {
    const {
      metadata: { displaySource: t },
    } = this;
    return t && this.addResolvingPromise(sn(this, t, e)), Promise.resolve(this);
  }
  addExternalSources(e) {
    this.metadata.externalSources.addMany(e);
  }
  updateDisplaySource(e) {
    this.metadata.displaySource = e;
  }
  clone() {
    return this.cloneAndModifyVertexAttributes(
      this.vertexAttributes.clone(),
      this.vertexSpace.clone(),
      { preserveMetadata: !0 },
    );
  }
  cloneAndModifyVertexAttributes(e, t, n) {
    var o;
    let r = null;
    if (this.components) {
      const a = new Map(),
        i = new Map();
      r = this.components.map((l) => l.cloneWithDeduplication(a, i));
    }
    const s = {
      components: r,
      spatialReference: this.spatialReference,
      vertexAttributes: e,
      vertexSpace: t,
      transform: ((o = this.transform) == null ? void 0 : o.clone()) ?? null,
      metadata: n != null && n.preserveMetadata ? this.metadata.clone() : new S(),
    };
    return new b(s);
  }
  cloneShallow() {
    return new b({
      components: this.components,
      spatialReference: this.spatialReference,
      vertexAttributes: this.vertexAttributes,
      vertexSpace: this.vertexSpace.clone(),
      transform: this.transform,
      metadata: this.metadata,
    });
  }
  vertexAttributesChanged() {
    this.notifyChange('vertexAttributes');
  }
  async toBinaryGLTF(e) {
    const [{ toBinaryGLTF: t }] = await Promise.all([
      ie(
        () => import('./gltfexport-DIwMMoKE.js'),
        __vite__mapDeps([
          27, 1, 2, 3, 4, 17, 5, 18, 6, 7, 23, 16, 24, 25, 26, 9, 10, 12, 11, 13, 19, 20,
        ]),
      ),
      this.load(e),
    ]);
    return re(e), await t(this, e);
  }
  get usedMemory() {
    return this.components
      ? this.components.reduce((e, t) => e + t.memoryUsage, this.vertexAttributes.usedMemory)
      : this.vertexAttributes.usedMemory;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  _checkIfLoaded(e) {
    return !!this.loaded || (L().error(e, Kt), !1);
  }
  static createBox(e, t) {
    if (!(e instanceof _)) return L().error('.createBox()', N), null;
    const n = new b(H(fn(), e, t));
    return t != null && t.imageFace && t.imageFace !== 'all' ? hn(n, t.imageFace) : n;
  }
  static createSphere(e, t) {
    return e instanceof _
      ? new b(H(mn((t == null ? void 0 : t.densificationFactor) || 0), e, t))
      : (L().error('.createSphere()', N), null);
  }
  static createCylinder(e, t) {
    return e instanceof _
      ? new b(H(dn((t == null ? void 0 : t.densificationFactor) || 0), e, t))
      : (L().error('.createCylinder()', N), null);
  }
  static createPlane(e, t) {
    if (!(e instanceof _)) return L().error('.createPlane()', N), null;
    const n = (t == null ? void 0 : t.facing) ?? 'up',
      r = gn(n, t == null ? void 0 : t.size);
    return new b(H(xn(n), e, { ...t, size: r }));
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof Dt)) return L().error('.createFromPolygon()', Ht), null;
    const n = jt(e);
    return new b({
      vertexAttributes: new J({ position: n.position }),
      components: [
        new U({
          faces: n.faces,
          shading: 'flat',
          material: (t == null ? void 0 : t.material) ?? null,
        }),
      ],
      spatialReference: e.spatialReference,
      vertexSpace: new Z(),
    });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof _)) {
      const s = new Qt();
      throw (L().error('.createfromGLTF()', s.message), s);
    }
    const { loadGLTFMesh: r } = await Fe(
      ie(
        () => import('./loadGLTFMesh-CICy_fWg.js'),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26,
        ]),
      ),
      n,
    );
    return new b(await r(e, t, n));
  }
  static createWithExternalSource(e, t, n) {
    var c;
    const r = (n == null ? void 0 : n.extent) ?? null,
      { spatialReference: s } = e,
      o = ((c = n == null ? void 0 : n.transform) == null ? void 0 : c.clone()) ?? new V(),
      a = Y(e, n),
      i = n == null ? void 0 : n.unitConversionDisabled,
      l = { source: t, extent: r, unitConversionDisabled: i },
      u = new S();
    return (
      u.externalSources.push(l),
      new b({ metadata: u, transform: o, vertexSpace: a, spatialReference: s })
    );
  }
  static createIncomplete(e, t) {
    var a;
    const { spatialReference: n } = e,
      r = ((a = t == null ? void 0 : t.transform) == null ? void 0 : a.clone()) ?? new V(),
      s = Y(e, t),
      o = new b({ transform: r, vertexSpace: s, spatialReference: n });
    return (
      o.addResolvingPromise(
        Promise.reject(new te('mesh-incomplete', 'Mesh resources are not complete')),
      ),
      o
    );
  }
});
d([g({ type: [U], json: { write: !0 } })], y.prototype, 'components', void 0),
  d(
    [g({ nonNullable: !0, types: Cn, constructOnly: !0, json: { write: !0 } })],
    y.prototype,
    'vertexSpace',
    void 0,
  ),
  d([g({ type: V, json: { write: !0 } })], y.prototype, 'transform', void 0),
  d([g({ constructOnly: !0 })], y.prototype, 'metadata', void 0),
  d([g()], y.prototype, 'hasExtent', null),
  d([g()], y.prototype, '_transformedExtent', null),
  d([g()], y.prototype, '_untransformedBounds', null),
  d([g()], y.prototype, 'origin', null),
  d([g({ readOnly: !0, json: { read: !1 } })], y.prototype, 'extent', null),
  d([g({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })], y.prototype, 'hasZ', void 0),
  d([g({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })], y.prototype, 'hasM', void 0),
  d(
    [g({ type: J, nonNullable: !0, json: { write: !0 } })],
    y.prototype,
    'vertexAttributes',
    void 0,
  ),
  (y = b = d([Oe(at)], y));
const _e = je(),
  or = y;
export { or as default };
