import { i as E } from './CIMResourceManager-D6lvw3rx.js';
import { a as G, h as T, u as q } from './UpdateTracking2D-FxGawpd5.js';
import { y as A } from './OverrideHelper-Cyqn0SsG.js';
import { T as S, R as D } from './rasterizingUtils-01n90i7R.js';
import { gF as z } from './index.lazy-BFilFZ3v.js';
import './BidiEngine-QXap_35O.js';
import './GeometryUtils-BZmtlwi1.js';
import './Rect-CUzevAry.js';
import './dataViewUtils-Dzpw_nGB.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './quantizationUtils-QwHxl707.js';
import './floatRGBA-B-1sPYTQ.js';
import './index-DShQM7Xx.js';
const L = 96 / 72;
class $ {
  constructor(o) {
    (this._spatialReference = o),
      (this._imageDataCanvas = null),
      (this._cimResourceManager = new E());
  }
  get _canvas() {
    return (
      this._imageDataCanvas || (this._imageDataCanvas = document.createElement('canvas')),
      this._imageDataCanvas
    );
  }
  get resourceManager() {
    return this._cimResourceManager;
  }
  async rasterizeCIMSymbolAsync(o, a, m, M, I, n, c, l, y, f) {
    if (!o) return null;
    const { data: w } = o;
    if (!w || w.type !== 'CIMSymbolReference' || !w.symbol) return null;
    const { symbol: v } = w;
    n || (n = z(v));
    const s = await A.resolveSymbolOverrides(w, a, this._spatialReference, I, n, c, l),
      d = this._cimResourceManager,
      x = [];
    G.fetchResources(s, d, x), G.fetchFonts(s, d, x), x.length > 0 && (await Promise.all(x));
    const { width: e, height: h } = m;
    let b = F(n, e, h, M, f);
    const t = G.getEnvelope(s, b, d);
    if (!t) return null;
    t.x === 1 / 0 && (t.x = e + 2),
      t.y === 1 / 0 && (t.y = -h / 2),
      t.width === -1 / 0 && (t.width = e),
      t.height === -1 / 0 && (t.height = h);
    let g = 1,
      _ = 0,
      C = 0;
    switch (v.type) {
      case 'CIMPointSymbol':
      case 'CIMTextSymbol':
        {
          let i = 1;
          t.width > e && (i = e / t.width);
          let r = 1;
          t.height > h && (r = h / t.height),
            M === 'preview' &&
              (t.width < e && (i = e / t.width), t.height < h && (r = h / t.height)),
            (g = Math.min(i, r)),
            (_ = t.x + t.width / 2),
            (C = t.y + t.height / 2);
        }
        break;
      case 'CIMLineSymbol':
        if (f) {
          (C = t.y + t.height / 2), (_ = t.x + t.width / 2);
          const i = t.width - e,
            r = t.height - h;
          b = {
            paths: S(b.paths, {
              xmin: (-1 * t.width) / 2 + i,
              xmax: t.width / 2 - i,
              ymin: (-1 * t.height) / 2 + r,
              ymax: t.height / 2 - r,
              width: t.width - 2 * i,
              height: t.height - 2 * r,
            }),
          };
        } else {
          (y || t.height > h) && (g = h / t.height), (C = t.y + t.height / 2);
          const i = t.x * g + e / 2,
            r = (t.x + t.width) * g + e / 2,
            { paths: R } = b;
          (R[0][0][0] -= i / g), (R[0][2][0] -= (r - e) / g);
        }
        break;
      case 'CIMPolygonSymbol':
        if (f) {
          (C = t.y + t.height / 2), (_ = t.x + t.width / 2);
          const i = t.width - e,
            r = t.height - h;
          b = {
            paths: S(b.rings, {
              xmin: (-1 * t.width) / 2 + i,
              xmax: t.width / 2 - i,
              ymin: (-1 * t.height) / 2 + r,
              ymax: t.height / 2 - r,
              width: t.width - 2 * i,
              height: t.height - 2 * r,
            }),
          };
        } else {
          (_ = t.x + t.width / 2), (C = t.y + t.height / 2);
          const i = t.x * g + e / 2,
            r = (t.x + t.width) * g + e / 2,
            R = t.y * g + h / 2,
            P = (t.y + t.height) * g + h / 2,
            { rings: u } = b;
          i < 0 && ((u[0][0][0] -= i), (u[0][3][0] -= i), (u[0][4][0] -= i)),
            R < 0 && ((u[0][0][1] += R), (u[0][1][1] += R), (u[0][4][1] += R)),
            r > e && ((u[0][1][0] -= r - e), (u[0][2][0] -= r - e)),
            P > h && ((u[0][2][1] += P - h), (u[0][3][1] += P - h));
        }
    }
    const k = { type: 'cim', data: { type: 'CIMSymbolReference', symbol: s } };
    return this.rasterize(k, e, h, _, C, g, n, 1, b);
  }
  rasterize(o, a, m, M, I, n, c, l = 0, y = null, f = window.devicePixelRatio || 1) {
    const { data: w } = o;
    if (!w || w.type !== 'CIMSymbolReference' || !w.symbol) return null;
    const { symbol: v } = w,
      s = this._canvas,
      d = f * L;
    (s.width = a * d),
      (s.height = m * d),
      c || (c = z(v)),
      y || (y = F(c, a, m, 'legend')),
      (s.width += 2 * l),
      (s.height += 2 * l);
    const x = s.getContext('2d', { willReadFrequently: !0 }),
      e = T.createIdentity();
    return (
      e.translate(-M, -I),
      e.scale(n * d, -n * d),
      e.translate((a * d) / 2 + l, (m * d) / 2 + l),
      x.clearRect(0, 0, s.width, s.height),
      new q(x, this._cimResourceManager, e, !0).drawSymbol(v, y),
      x.getImageData(0, 0, s.width, s.height)
    );
  }
}
function O(p, o, a, m) {
  return o === 'esriGeometryPolygon'
    ? {
        rings: D(S(p.rings, { xmin: 0, ymin: 0, width: a, height: m }), (-1 * a) / 2, (-1 * m) / 2),
      }
    : o === 'esriGeometryPolyline'
      ? {
          paths: D(
            S(p.paths, { xmin: 0, ymin: 0, width: a, height: m }),
            (-1 * a) / 2,
            (-1 * m) / 2,
          ),
        }
      : null;
}
function F(p, o, a, m, M) {
  const n = -o / 2 + 1,
    c = o / 2 - 1,
    l = a / 2 - 1,
    y = -a / 2 + 1;
  if (M && (p === 'esriGeometryPolygon' || p === 'esriGeometryPolyline')) {
    const f = O(M, p, o, a);
    if (f) return f;
  }
  switch (p) {
    case 'esriGeometryPoint':
      return { x: 0, y: 0 };
    case 'esriGeometryPolyline':
      return {
        paths: [
          [
            [n, 0],
            [0, 0],
            [c, 0],
          ],
        ],
      };
    default:
      return m === 'legend'
        ? {
            rings: [
              [
                [n, l],
                [c, 0],
                [c, y],
                [n, y],
                [n, l],
              ],
            ],
          }
        : {
            rings: [
              [
                [n, l],
                [c, l],
                [c, y],
                [n, y],
                [n, l],
              ],
            ],
          };
  }
}
export { $ as CIMSymbolRasterizer };
