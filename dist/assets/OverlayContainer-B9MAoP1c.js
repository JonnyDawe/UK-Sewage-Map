import {
  A as r,
  lf as D,
  lg as R,
  lh as Q,
  f8 as Y,
  eG as J,
  eE as G,
  l4 as V,
  er as Z,
  l5 as tt,
  l6 as et,
  kh as st,
  l7 as ot,
  l8 as it,
  jT as rt,
  l9 as at,
  bX as nt,
  li as pt,
  lj as L,
} from './index.lazy-BFilFZ3v.js';
import { r as dt } from './vec3f32-nZdmKIgz.js';
import { n as lt } from './WGLContainer-CljHC-xu.js';
import { o as ht } from './FeatureCommandQueue-BbqTKNbG.js';
import { t as U } from './utils-ehcGqGxa.js';
import {
  j as ut,
  _ as P,
  p as ct,
  X as ft,
  C as w,
  Y as vt,
  a as mt,
  w as yt,
  h as q,
  g as n,
  r as gt,
  U as wt,
  m as B,
  b as xt,
  P as N,
  v as _t,
  t as Mt,
} from './GraphShaderModule-B9XcBcNV.js';
import { e as St } from './TechniqueType-uMFRS8dR.js';
import { t as W } from './VertexElementDescriptor-BLyltQyJ.js';
class T extends xt {}
r([q(0, w)], T.prototype, 'pos', void 0), r([q(1, w)], T.prototype, 'uv', void 0);
class $t extends _t {}
class k extends N {}
r([n(gt)], k.prototype, 'dvs', void 0);
class m extends N {}
r([n(w)], m.prototype, 'perspective', void 0),
  r([n(w)], m.prototype, 'texSize', void 0),
  r([n(P)], m.prototype, 'wrapAroundShift', void 0),
  r([n(P)], m.prototype, 'opacity', void 0),
  r([n(wt)], m.prototype, 'texture', void 0);
class g extends ut {
  constructor() {
    super(...arguments), (this.type = 'OverlayShader');
  }
  vertex(e) {
    const t = e.uv.divide(this.config.texSize),
      s = new P(1).add(ct(t, this.config.perspective)),
      o = new ft(e.pos.add(new w(this.config.wrapAroundShift, 0)), 1),
      i = this.transform.dvs.multiply(o);
    return { uv: t, glPosition: new vt(i.xy.multiply(s), 0, s) };
  }
  fragment(e) {
    const t = mt(this.config.texture, e.uv).multiply(this.config.opacity),
      s = new yt();
    return (s.fragColor = t), s;
  }
}
r([n(k)], g.prototype, 'transform', void 0),
  r([n(m)], g.prototype, 'config', void 0),
  r([D(0, B(T))], g.prototype, 'vertex', null),
  r([D(0, B($t))], g.prototype, 'fragment', null);
class bt extends Mt {
  constructor() {
    super(...arguments),
      (this.type = St.Overlay),
      (this._mesh = null),
      (this.shaders = { overlay: new g() });
  }
  render(e, t) {
    const { context: s, painter: o } = e,
      i = this._getMesh(e, t);
    o.setPipelineState(U);
    const { isWrapAround: p, wrapAroundShift: u } = t.config,
      c = { ...t.config, wrapAroundShift: 0 },
      f = {
        shader: this.shaders.overlay,
        uniforms: { transform: t.transform, config: c },
        defines: null,
        optionalAttributes: null,
        useComputeBuffer: !1,
      };
    o.setPipelineState({
      ...U,
      stencil: {
        write: !1,
        test: {
          compare: Q.EQUAL,
          op: { fail: R.KEEP, zFail: R.KEEP, zPass: R.REPLACE },
          ref: 0,
          mask: 255,
        },
      },
    }),
      o.submitDrawMeshUntyped(s, f, i),
      p && ((c.wrapAroundShift = u), o.submitDrawMeshUntyped(s, f, i));
  }
  shutdown() {
    Y(this._mesh);
  }
  _getMesh(e, t) {
    const { context: s } = e;
    if (this._mesh) {
      const o = this._mesh.vertexBuffers.get('positions');
      if (!o) throw new Error('Buffer not found');
      o.buffer.setData(t.position);
    } else {
      const o = t.index != null ? t.index.length : t.position.length / 2;
      this._mesh = new ht(s, {
        vertex: {
          positions: { data: t.position, attributes: [new W('pos', 2, G.FLOAT, 0, 8)] },
          uvs: { data: t.tex, attributes: [new W('uv', 2, G.UNSIGNED_SHORT, 0, 4)] },
        },
        index: t.index != null ? { index: { data: t.index } } : void 0,
        groups: [{ index: t.index != null ? 'index' : void 0, primitive: J.TRIANGLE_STRIP }],
        parts: [{ group: 0, start: 0, count: o }],
      });
    }
    return this._mesh;
  }
}
class It extends lt {
  constructor() {
    super(...arguments),
      (this._viewStateId = -1),
      (this._dvsMat3 = V()),
      (this._overlayTechnique = new bt());
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(e) {
    this._updateMatrices(e), this._updateOverlays(e, this.children);
    for (const t of this.children) t.beforeRender(e);
  }
  doRender(e) {
    if (e.drawPhase !== Z.MAP || !this.visible) return;
    super.doRender(e);
    const t = this._overlayTechnique;
    for (const s of this.children) s.draw(e, t);
  }
  onDetach() {
    this._overlayTechnique.shutdown();
  }
  _updateMatrices(e) {
    const { state: t } = e,
      {
        id: s,
        size: o,
        pixelRatio: i,
        resolution: p,
        rotation: u,
        viewpoint: c,
        displayMat3: f,
      } = t;
    if (this._viewStateId === s) return;
    const x = L(u),
      d = i * o[0],
      v = i * o[1];
    this._localOrigin = c.targetGeometry.clone();
    const { x: y, y: S } = this._localOrigin,
      _ = tt(y, t.spatialReference);
    (this._localOrigin.x = _), (this._localOrigin.y = S);
    const $ = p * d,
      b = p * v,
      a = et(this._dvsMat3);
    st(a, a, f),
      ot(a, a, it(d / 2, v / 2)),
      rt(a, a, dt(d / $, -v / b, 1)),
      at(a, a, -x),
      (this._viewStateId = s);
  }
  _updateOverlays(e, t) {
    const { state: s } = e,
      { rotation: o, spatialReference: i, worldScreenWidth: p, size: u, viewpoint: c } = s,
      f = this._localOrigin;
    let x,
      d = 0;
    const v = nt(i);
    if (v && i.isWrappable) {
      const y = u[0],
        S = u[1],
        _ = L(o),
        $ = Math.abs(Math.cos(_)),
        b = Math.abs(Math.sin(_)),
        a = Math.round(y * $ + S * b),
        [j, C] = v.valid,
        l = pt(i),
        { x: I, y: F } = c.targetGeometry,
        K = [I, F],
        O = [0, 0];
      s.toScreen(O, K);
      const M = [0, 0];
      let A;
      A = a > p ? 0.5 * p : 0.5 * a;
      const z = Math.floor((I + 0.5 * l) / l),
        X = j + z * l,
        H = C + z * l,
        E = [O[0] + A, 0];
      s.toMap(M, E),
        M[0] > H && (d = l),
        (E[0] = O[0] - A),
        s.toMap(M, E),
        M[0] < X && (d = -l),
        (x = { worldWidth: l, xBounds: [j, C] });
    }
    for (const y of t) y.updateDrawCoords(f, d, i, x);
  }
}
export { It as u };
