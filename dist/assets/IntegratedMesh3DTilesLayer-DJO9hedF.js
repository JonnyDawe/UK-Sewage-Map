import {
  T as z,
  q as U,
  r as X,
  t as j,
  u as P,
  U as W,
  V as G,
  W as w,
  G as A,
  X as b,
  Y as x,
  Z as k,
  _ as p,
  $ as _,
  a0 as S,
  a1 as E,
  a2 as L,
  a3 as R,
  a4 as T,
  a5 as g,
  a6 as f,
  a7 as q,
  w as N,
  P as F,
  a8 as D,
  z as K,
  A as c,
  B as d,
  a9 as Z,
  Q as B,
  R as O,
} from './index.lazy-BFilFZ3v.js';
import { $ as V, Z as Q, w as Y } from './elevationInfoUtils-qqhoEgjX.js';
import './index-DShQM7Xx.js';
let y = class extends z(U(X(j(P(W(G(K))))))) {
  constructor(a) {
    super(a),
      (this.operationalLayerType = 'IntegratedMesh3DTilesLayer'),
      (this.spatialReference = new w({ wkid: 4326, vcsWkid: 115700 })),
      (this.fullExtent = new A(-180, -90, 180, 90, this.spatialReference)),
      (this.url = null),
      (this.type = 'integrated-mesh-3dtiles'),
      (this.path = null),
      (this.minScale = 0),
      (this.maxScale = 0);
  }
  set elevationInfo(a) {
    (a != null && a.mode !== 'absolute-height') || this._set('elevationInfo', a),
      this._validateElevationInfo(a);
  }
  _verifyArray(a, s) {
    if (!Array.isArray(a) || a.length < s) return !1;
    for (const o of a) if (typeof o != 'number') return !1;
    return !0;
  }
  _initFullExtent(a) {
    var M, I;
    const s = (M = a.root) == null ? void 0 : M.boundingVolume;
    if (!s) return;
    if (s.box) {
      const t = s == null ? void 0 : s.box;
      if (t[3] > 7972671 && t[7] > 7972671 && t[11] > 7945940) return;
    }
    const o = (I = a.root) == null ? void 0 : I.transform,
      u = g();
    if (s.region && this._verifyArray(s.region, 6)) {
      const t = s.region,
        l = b(t[0]),
        n = b(t[1]),
        i = t[4],
        r = b(t[2]),
        e = b(t[3]),
        h = t[5];
      this.fullExtent = new A({
        xmin: l,
        ymin: n,
        zmin: i,
        xmax: r,
        ymax: e,
        zmax: h,
        spatialReference: this.spatialReference,
      });
    } else if (s.sphere && this._verifyArray(s.sphere, 4)) {
      const t = s.sphere,
        l = x(t[0], t[1], t[2]),
        n = t[3] / Math.sqrt(3),
        i = g();
      k(i, l, x(n, n, n));
      const r = g();
      if ((p(r, l, x(n, n, n)), o && this._verifyArray(o, 16))) {
        const v = o;
        _(u, i, v), S(i, u), _(u, r, v), S(r, u);
      }
      E(i, L, 0, i, w.WGS84, 0), E(r, L, 0, r, w.WGS84, 0);
      const e = g(),
        h = g();
      R(e, i, r),
        T(h, i, r),
        (this.fullExtent = new A({
          xmin: e[0],
          ymin: e[1],
          zmin: e[2],
          xmax: h[0],
          ymax: h[1],
          zmax: h[2],
          spatialReference: this.spatialReference,
        }));
    } else if (s.box && this._verifyArray(s.box, 12)) {
      const t = s.box,
        l = x(t[0], t[1], t[2]),
        n = x(t[3], t[4], t[5]),
        i = x(t[6], t[7], t[8]),
        r = x(t[9], t[10], t[11]),
        e = [];
      for (let m = 0; m < 8; ++m) e.push(g());
      if (
        (p(e[0], l, n),
        p(e[0], e[0], i),
        p(e[0], e[0], r),
        f(e[1], l, n),
        p(e[1], e[1], i),
        p(e[1], e[1], r),
        p(e[2], l, n),
        f(e[2], e[2], i),
        p(e[2], e[2], r),
        f(e[3], l, n),
        f(e[3], e[3], i),
        p(e[3], e[3], r),
        p(e[4], l, n),
        p(e[4], e[4], i),
        f(e[4], e[4], r),
        f(e[5], l, n),
        p(e[5], e[5], i),
        f(e[5], e[5], r),
        p(e[6], l, n),
        f(e[6], e[6], i),
        f(e[6], e[6], r),
        f(e[7], l, n),
        f(e[7], e[7], i),
        f(e[7], e[7], r),
        o && this._verifyArray(o, 16))
      ) {
        const m = o;
        for (let $ = 0; $ < 8; ++$) _(e[$], e[$], m);
      }
      const h = x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
        v = x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let m = 0; m < 8; ++m) E(e[m], L, 0, e[m], w.WGS84, 0), R(v, v, e[m]), T(h, h, e[m]);
      this.fullExtent = new A({
        xmin: v[0],
        ymin: v[1],
        zmin: v[2],
        xmax: h[0],
        ymax: h[1],
        zmax: h[2],
        spatialReference: this.spatialReference,
      });
    }
  }
  async load(a) {
    return this.addResolvingPromise(this._doLoad(a)), this;
  }
  async _doLoad(a) {
    const s = a != null ? a.signal : null;
    try {
      await this.loadFromPortal(
        {
          supportedTypes: ['3DTiles Service'],
          validateItem: (o) => {
            var u;
            if ((u = o.typeKeywords) != null && u.includes('IntegratedMesh')) return !0;
            throw new q(
              'portal:invalid-layer-item-type',
              "Invalid layer item, expected '${expectedType}' ",
              { expectedType: '3DTiles Service containing IntegratedMesh' },
            );
          },
        },
        a,
      );
    } catch (o) {
      N(o);
    }
    this.url &&
      (await F(this.url, {
        query: { f: 'json', ...this.customParameters, token: this.apiKey },
        responseType: 'json',
        signal: s,
      }).then(
        (u) => {
          this._initFullExtent(u.data);
        },
        (u) => {
          N(u);
        },
      ));
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo(a) {
    const s = 'Integrated mesh 3d tiles layers';
    V(D.getLogger(this), Q(s, 'absolute-height', a)), V(D.getLogger(this), Y(s, a));
  }
};
c([d({ type: ['IntegratedMesh3DTilesLayer'] })], y.prototype, 'operationalLayerType', void 0),
  c([d({ type: w })], y.prototype, 'spatialReference', void 0),
  c([d({ type: A })], y.prototype, 'fullExtent', void 0),
  c([d(Z)], y.prototype, 'elevationInfo', null),
  c([d({ type: ['show', 'hide'] })], y.prototype, 'listMode', void 0),
  c([d(B)], y.prototype, 'url', void 0),
  c([d({ readOnly: !0 })], y.prototype, 'type', void 0),
  c(
    [
      d({
        type: String,
        json: {
          origins: { 'web-scene': { read: !0, write: !0 }, 'portal-item': { read: !0, write: !0 } },
          read: !1,
        },
      }),
    ],
    y.prototype,
    'path',
    void 0,
  ),
  c(
    [
      d({
        type: Number,
        json: {
          name: 'layerDefinition.minScale',
          write: !0,
          origins: { service: { read: !1, write: !1 } },
        },
      }),
    ],
    y.prototype,
    'minScale',
    void 0,
  ),
  c(
    [
      d({
        type: Number,
        json: {
          name: 'layerDefinition.maxScale',
          write: !0,
          origins: { service: { read: !1, write: !1 } },
        },
      }),
    ],
    y.prototype,
    'maxScale',
    void 0,
  ),
  (y = c([O('esri.layers.IntegratedMesh3DTilesLayer')], y));
const ee = y;
export { ee as default };
