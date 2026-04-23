import {
  l as $,
  d7 as T,
  t as O,
  T as P,
  q as L,
  r as E,
  u as F,
  o as M,
  V as R,
  U as _,
  w as j,
  ce as v,
  cx as g,
  d8 as q,
  d9 as J,
  da as N,
  P as f,
  db as U,
  G as A,
  dc as V,
  dd as k,
  a7 as x,
  bL as z,
  z as B,
  A as a,
  B as o,
  de as S,
  F as G,
  cB as Z,
  Q as C,
  R as D,
  df as H,
} from './index.lazy-BFilFZ3v.js';
import { m as K, f as W, s as Q } from './SublayersOwner-DURVvZa8.js';
import { y as X } from './ExportImageParameters-i1IPwMV_.js';
import { e as I } from './sublayerUtils-CRYkrmMG.js';
import './index-DShQM7Xx.js';
import './QueryTask-DCcZ9lCh.js';
import './executeForIds-BZ7PtCi1.js';
import './featureConversionUtils-GdT3zBJg.js';
import './floorFilterUtils-DZ5C6FQv.js';
let s = class extends $(T(O(K(W(P(L(E(F(M(R(_(B)))))))))))) {
  constructor(...e) {
    super(...e),
      (this._exportImageParameters = new X({ layer: this })),
      (this.dateFieldsTimeZone = null),
      (this.datesInUnknownTimezone = !1),
      (this.dpi = 96),
      (this.gdbVersion = null),
      (this.imageFormat = 'png24'),
      (this.imageMaxHeight = 2048),
      (this.imageMaxWidth = 2048),
      (this.imageTransparency = !0),
      (this.isReference = null),
      (this.labelsVisible = !1),
      (this.operationalLayerType = 'ArcGISMapServiceLayer'),
      (this.preferredTimeZone = null),
      (this.sourceJSON = null),
      (this.sublayers = null),
      (this.type = 'map-image'),
      (this.url = null);
  }
  normalizeCtorArgs(e, r) {
    return typeof e == 'string' ? { url: e, ...r } : e;
  }
  load(e) {
    const r = e != null ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ['Map Service'] }, e)
          .catch(j)
          .then(() => this._fetchService(r)),
      ),
      Promise.resolve(this)
    );
  }
  destroy() {
    this._exportImageParameters.destroy();
  }
  readImageFormat(e, r) {
    const p = r.supportedImageFormatTypes;
    return p && p.includes('PNG32') ? 'png32' : 'png24';
  }
  writeSublayers(e, r, p, t) {
    var m, c, b;
    if (!this.loaded || !e) return;
    const i = e
      .slice()
      .reverse()
      .flatten(({ sublayers: l }) => l && l.toArray().reverse())
      .toArray();
    let n = !1;
    const d = v(t.origin);
    if (
      (m = this.capabilities) != null &&
      m.operations.supportsExportMap &&
      (b = (c = this.capabilities) == null ? void 0 : c.exportMap) != null &&
      b.supportsDynamicLayers
    ) {
      if (d === g.PORTAL_ITEM) {
        const l = this.createSublayersForOrigin('service').sublayers;
        n = I(i, l, g.SERVICE);
      } else if (d > g.PORTAL_ITEM) {
        const l = this.createSublayersForOrigin('portal-item');
        n = I(i, l.sublayers, v(l.origin));
      }
    }
    const u = [],
      y = { writeSublayerStructure: n, ...t };
    let h = n || this.hasVisibleLayersForOrigin(d);
    i.forEach((l) => {
      const w = l.write({}, y);
      u.push(w), (h = h || l.originOf('visible') === 'user');
    }),
      u.some((l) => Object.keys(l).length > 1) && (r.layers = u),
      h && (r.visibleLayers = i.filter((l) => l.visible).map((l) => l.id));
  }
  createExportImageParameters(e, r, p, t) {
    const i = (t == null ? void 0 : t.pixelRatio) || 1;
    e && this.version >= 10 && (e = e.clone().shiftCentralMeridian()),
      (this._exportImageParameters.floors = (t == null ? void 0 : t.floors) ?? null),
      (this._exportImageParameters.scale = q({ extent: e, width: r }) * i);
    const n = this._exportImageParameters.toJSON(),
      d = !(t != null && t.rotation) || this.version < 10.3 ? {} : { rotation: -t.rotation },
      u = e == null ? void 0 : e.spatialReference,
      y = J(u);
    n.dpi *= i;
    const h = {};
    if (t != null && t.timeExtent) {
      const { start: m, end: c } = t.timeExtent.toJSON();
      h.time = m && c && m === c ? '' + m : `${m ?? 'null'},${c ?? 'null'}`;
    } else this.timeInfo && !this.timeInfo.hasLiveData && (h.time = 'null,null');
    return {
      bbox: e ? e.xmin + ',' + e.ymin + ',' + e.xmax + ',' + e.ymax : void 0,
      bboxSR: y,
      imageSR: y,
      size: r + ',' + p,
      ...n,
      ...d,
      ...h,
    };
  }
  async fetchImage(e, r, p, t) {
    const { data: i } = await this._fetchImage('image', e, r, p, t);
    return i;
  }
  async fetchImageBitmap(e, r, p, t) {
    const { data: i, url: n } = await this._fetchImage('blob', e, r, p, t);
    return N(i, n, t == null ? void 0 : t.signal);
  }
  async fetchRecomputedExtents(e = {}) {
    const r = {
        ...e,
        query: { returnUpdates: !0, f: 'json', ...this.customParameters, token: this.apiKey },
      },
      { data: p } = await f(this.url, r),
      { extent: t, fullExtent: i, timeExtent: n } = p,
      d = t || i;
    return {
      fullExtent: d && A.fromJSON(d),
      timeExtent: n && U.fromJSON({ start: n[0], end: n[1] }),
    };
  }
  loadAll() {
    return V(this, (e) => {
      e(this.allSublayers), e(this.subtables);
    });
  }
  serviceSupportsSpatialReference(e) {
    return k(this, e);
  }
  async _fetchImage(e, r, p, t, i) {
    var u, y, h;
    const n = {
        responseType: e,
        signal: (i == null ? void 0 : i.signal) ?? null,
        query: {
          ...this.parsedUrl.query,
          ...this.createExportImageParameters(r, p, t, i),
          f: 'image',
          ...this.refreshParameters,
          ...this.customParameters,
          token: this.apiKey,
        },
      },
      d = this.parsedUrl.path + '/export';
    if (
      ((u = n.query) == null ? void 0 : u.dynamicLayers) != null &&
      !(
        (h = (y = this.capabilities) == null ? void 0 : y.exportMap) != null &&
        h.supportsDynamicLayers
      )
    )
      throw new x(
        'mapimagelayer:dynamiclayer-not-supported',
        `service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,
        { query: n.query },
      );
    try {
      const { data: m } = await f(d, n);
      return { data: m, url: d };
    } catch (m) {
      throw z(m)
        ? m
        : new x('mapimagelayer:image-fetch-error', `Unable to load image: ${d}`, { error: m });
    }
  }
  async _fetchService(e) {
    if (this.sourceJSON)
      return void this.read(this.sourceJSON, { origin: 'service', url: this.parsedUrl });
    const { data: r, ssl: p } = await f(this.parsedUrl.path, {
      query: { f: 'json', ...this.parsedUrl.query, ...this.customParameters, token: this.apiKey },
      signal: e,
    });
    p && (this.url = this.url.replace(/^http:/i, 'https:')),
      (this.sourceJSON = r),
      this.read(r, { origin: 'service', url: this.parsedUrl });
  }
  hasVisibleLayersForOrigin(e) {
    var r;
    return !(e == null || !((r = this.sublayersSourceJSON[e]) != null && r.visibleLayers));
  }
};
a([o(S('dateFieldsTimeReference'))], s.prototype, 'dateFieldsTimeZone', void 0),
  a([o({ type: Boolean })], s.prototype, 'datesInUnknownTimezone', void 0),
  a([o()], s.prototype, 'dpi', void 0),
  a([o()], s.prototype, 'gdbVersion', void 0),
  a([o()], s.prototype, 'imageFormat', void 0),
  a([G('imageFormat', ['supportedImageFormatTypes'])], s.prototype, 'readImageFormat', null),
  a(
    [o({ json: { origins: { service: { read: { source: 'maxImageHeight' } } } } })],
    s.prototype,
    'imageMaxHeight',
    void 0,
  ),
  a(
    [o({ json: { origins: { service: { read: { source: 'maxImageWidth' } } } } })],
    s.prototype,
    'imageMaxWidth',
    void 0,
  ),
  a([o()], s.prototype, 'imageTransparency', void 0),
  a(
    [
      o({
        type: Boolean,
        json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } },
      }),
    ],
    s.prototype,
    'isReference',
    void 0,
  ),
  a([o({ json: { read: !1, write: !1 } })], s.prototype, 'labelsVisible', void 0),
  a([o({ type: ['ArcGISMapServiceLayer'] })], s.prototype, 'operationalLayerType', void 0),
  a([o({ json: { read: !1, write: !1 } })], s.prototype, 'popupEnabled', void 0),
  a([o(S('preferredTimeReference'))], s.prototype, 'preferredTimeZone', void 0),
  a([o()], s.prototype, 'sourceJSON', void 0),
  a([o({ json: { write: { ignoreOrigin: !0 } } })], s.prototype, 'sublayers', void 0),
  a(
    [Z('sublayers', { layers: { type: [Q] }, visibleLayers: { type: [H] } })],
    s.prototype,
    'writeSublayers',
    null,
  ),
  a([o({ type: ['show', 'hide', 'hide-children'] })], s.prototype, 'listMode', void 0),
  a([o({ json: { read: !1 }, readOnly: !0, value: 'map-image' })], s.prototype, 'type', void 0),
  a([o(C)], s.prototype, 'url', void 0),
  (s = a([D('esri.layers.MapImageLayer')], s));
const le = s;
export { le as default };
