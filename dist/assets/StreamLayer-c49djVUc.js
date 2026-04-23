const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/streamLayerUtils-CEJRroeP.js',
      'assets/utils-CWFwb689.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/originUtils-D69mHv66.js',
      'assets/multiOriginJSONSupportUtils-C0wm8_Yw.js',
      'assets/saveUtils-BoTSfpwK.js',
      'assets/createConnection-C8zdgg43.js',
    ]),
) => i.map((i) => d[i]);
import { _ as f } from './index-DShQM7Xx.js';
import {
  aj as P,
  A as t,
  B as s,
  R as I,
  hP as _,
  hQ as A,
  hR as E,
  l as O,
  d7 as k,
  hT as D,
  t as U,
  o as C,
  T as V,
  q as N,
  r as L,
  u as G,
  U as J,
  bF as M,
  z as q,
  W as x,
  g4 as z,
  gV as u,
  a7 as d,
  w as W,
  hU as v,
  i4 as Q,
  a8 as B,
  i5 as X,
  e0 as y,
  i6 as Y,
  hV as Z,
  gQ as H,
  P as K,
  dq as ee,
  fB as te,
  hW as ie,
  cF as se,
  hX as re,
  G as oe,
  h_ as ne,
  hY as ae,
  hZ as le,
  I as pe,
  df as g,
  i7 as de,
  i8 as ce,
  h$ as ue,
  cu as he,
  i0 as ye,
  i1 as me,
  F as w,
  ap as fe,
  i2 as ve,
  Q as ge,
} from './index.lazy-BFilFZ3v.js';
import { _ as we } from './streamLayerUtils-CKwt2uXH.js';
var m;
let p = (m = class extends P {
  constructor() {
    super(...arguments),
      (this.age = null),
      (this.ageReceived = null),
      (this.displayCount = null),
      (this.maxObservations = 1);
  }
  clone() {
    return new m({
      age: this.age,
      ageReceived: this.ageReceived,
      displayCount: this.displayCount,
      maxObservations: this.maxObservations,
    });
  }
});
t([s({ type: Number, json: { write: !0 } })], p.prototype, 'age', void 0),
  t([s({ type: Number, json: { write: !0 } })], p.prototype, 'ageReceived', void 0),
  t([s({ type: Number, json: { write: !0 } })], p.prototype, 'displayCount', void 0),
  t([s({ type: Number, json: { write: !0 } })], p.prototype, 'maxObservations', void 0),
  (p = m = t([I('esri.layers.support.PurgeOptions')], p));
const R = p,
  b = re();
function S(e, r) {
  return new d(
    'layer:unsupported',
    `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,
    { layer: e },
  );
}
let i = class extends _(A(E(O(k(D(U(C(V(N(L(G(J(M.ClonableMixin(q)))))))))))))) {
  constructor(...e) {
    super(...e),
      (this.copyright = null),
      (this.definitionExpression = null),
      (this.displayField = null),
      (this.elevationInfo = null),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.geometryDefinition = null),
      (this.geometryType = null),
      (this.labelsVisible = !0),
      (this.labelingInfo = null),
      (this.legendEnabled = !0),
      (this.maxReconnectionAttempts = 0),
      (this.maxReconnectionInterval = 20),
      (this.maxScale = 0),
      (this.minScale = 0),
      (this.objectIdField = null),
      (this.operationalLayerType = 'ArcGISStreamLayer'),
      (this.outFields = ['*']),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.purgeOptions = new R()),
      (this.refreshInterval = 0),
      (this.screenSizePerspectiveEnabled = !0),
      (this.sourceJSON = null),
      (this.spatialReference = x.WGS84),
      (this.type = 'stream'),
      (this.url = null),
      (this.updateInterval = 300),
      (this.useViewTime = !0),
      (this.webSocketUrl = null),
      (this._debouncedSaveOperations = z(async (r, o, a) => {
        const { save: n, saveAs: l } = await f(
          () => import('./streamLayerUtils-CEJRroeP.js'),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
        );
        switch (r) {
          case u.SAVE:
            return n(this, o);
          case u.SAVE_AS:
            return l(this, a, o);
        }
      }));
  }
  normalizeCtorArgs(e, r) {
    return typeof e == 'string' ? { url: e, ...r } : e;
  }
  load(e) {
    if (!('WebSocket' in globalThis))
      return (
        this.addResolvingPromise(
          Promise.reject(
            new d(
              'stream-layer:websocket-unsupported',
              'WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service.',
            ),
          ),
        ),
        Promise.resolve(this)
      );
    const r = e != null ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ['Stream Service', 'Feed'] }, e)
          .catch(W)
          .then(() => this._fetchService(r)),
      ),
      Promise.resolve(this)
    );
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e) {
    const r = this._normalizeFeatureReduction(e);
    this._set('featureReduction', r);
  }
  set renderer(e) {
    v(e, this.fieldsIndex), this._set('renderer', e);
  }
  readRenderer(e, r, o) {
    var n;
    r = r.layerDefinition || r;
    const a = (n = r.drawingInfo) == null ? void 0 : n.renderer;
    if (a) {
      const l = Q(a, r, o) || void 0;
      return (
        l ||
          B.getLogger(this).error('Failed to create renderer', {
            rendererDefinition: r.drawingInfo.renderer,
            layer: this,
            context: o,
          }),
        l
      );
    }
    return X(r, o);
  }
  async connect(e) {
    const [{ createConnection: r }] = await Promise.all([
        f(() => import('./createConnection-C8zdgg43.js'), __vite__mapDeps([9, 3, 4, 2, 5])),
        this.load(),
      ]),
      o = this.geometryType ? y.toJSON(this.geometryType) : null,
      {
        customParameters: a = null,
        definitionExpression: n = null,
        geometryDefinition: l = null,
        maxReconnectionAttempts: $ = 0,
        maxReconnectionInterval: j = 20,
        spatialReference: T = this.spatialReference,
      } = e || this.createConnectionParameters(),
      c = r(this.parsedUrl, this.spatialReference, T, o, n, l, $, j, a ?? void 0),
      F = Y([
        this.on('send-message-to-socket', (h) => c.sendMessageToSocket(h)),
        this.on('send-message-to-client', (h) => c.sendMessageToClient(h)),
      ]);
    return c.once('destroy', F.remove), c;
  }
  createConnectionParameters() {
    return {
      spatialReference: this.spatialReference,
      customParameters: this.customParameters,
      definitionExpression: this.definitionExpression,
      geometryDefinition: this.geometryDefinition,
      maxReconnectionAttempts: this.maxReconnectionAttempts,
      maxReconnectionInterval: this.maxReconnectionInterval,
    };
  }
  createPopupTemplate(e) {
    return Z(this, e);
  }
  createQuery() {
    const e = new H();
    return (
      (e.returnGeometry = !0),
      (e.outFields = ['*']),
      (e.where = this.definitionExpression || '1=1'),
      e
    );
  }
  getFieldDomain(e, r) {
    if (!this.fields) return null;
    let o = null;
    return this.fields.some((a) => (a.name === e && (o = a.domain), !!o)), o;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  serviceSupportsSpatialReference(e) {
    return !0;
  }
  sendMessageToSocket(e) {
    this.emit('send-message-to-socket', e);
  }
  sendMessageToClient(e) {
    this.emit('send-message-to-client', e);
  }
  async save(e) {
    return this._debouncedSaveOperations(u.SAVE, e);
  }
  async saveAs(e, r) {
    return this._debouncedSaveOperations(u.SAVE_AS, r, e);
  }
  write(e, r) {
    const o = r == null ? void 0 : r.messages;
    return this.webSocketUrl
      ? (o == null ||
          o.push(
            S(
              this,
              'using a custom websocket connection cannot be written to web scenes and web maps',
            ),
          ),
        null)
      : this.parsedUrl
        ? super.write(e, r)
        : (o == null ||
            o.push(
              S(
                this,
                'using a client-side only connection without a url cannot be written to web scenes and web maps',
              ),
            ),
          null);
  }
  async _fetchService(e) {
    var r, o, a;
    if (!this.webSocketUrl && this.parsedUrl) {
      if (!this.sourceJSON) {
        const { data: n } = await K(this.parsedUrl.path, {
          query: { f: 'json', ...this.customParameters, ...this.parsedUrl.query },
          responseType: 'json',
          signal: e,
        });
        this.sourceJSON = n;
      }
    } else {
      if (!((r = this.timeInfo) != null && r.trackIdField))
        throw new d(
          'stream-layer:missing-metadata',
          'The stream layer trackIdField must be specified.',
        );
      if (!this.objectIdField) {
        const n = (o = this.fields.find((l) => l.type === 'oid')) == null ? void 0 : o.name;
        if (!n)
          throw new d(
            'stream-layer:missing-metadata',
            'The stream layer objectIdField must be specified.',
          );
        this.objectIdField = n;
      }
      if (!this.fields)
        throw new d('stream-layer:missing-metadata', 'The stream layer fields must be specified.');
      if (
        (this.fields.some((n) => n.name === this.objectIdField) ||
          this.fields.push(
            new ee({ name: this.objectIdField, alias: this.objectIdField, type: 'oid' }),
          ),
        !this.geometryType)
      )
        throw new d(
          'stream-layer:missing-metadata',
          'The stream layer geometryType must be specified.',
        );
      this.webSocketUrl && (this.url = this.webSocketUrl);
    }
    return (
      this.read(this.sourceJSON, {
        origin: 'service',
        portalItem: this.portalItem,
        portal: (a = this.portalItem) == null ? void 0 : a.portal,
        url: this.parsedUrl,
      }),
      v(this.renderer, this.fieldsIndex),
      ie(this.timeInfo, this.fieldsIndex),
      this.objectIdField || (this.objectIdField = we),
      te(this, { origin: 'service' })
    );
  }
};
t([s({ type: String })], i.prototype, 'copyright', void 0),
  t([s({ readOnly: !0 })], i.prototype, 'defaultPopupTemplate', null),
  t(
    [
      s({
        type: String,
        json: {
          name: 'layerDefinition.definitionExpression',
          write: { enabled: !0, allowNull: !0 },
        },
      }),
    ],
    i.prototype,
    'definitionExpression',
    void 0,
  ),
  t([s({ type: String })], i.prototype, 'displayField', void 0),
  t([s({ type: se })], i.prototype, 'elevationInfo', void 0),
  t(
    [
      s({
        json: {
          origins: {
            'web-map': { read: !1, write: !1 },
            'portal-item': { read: !1, write: !1 },
            'web-scene': { read: !1, write: !1 },
          },
        },
      }),
    ],
    i.prototype,
    'featureReduction',
    null,
  ),
  t([s(b.fields)], i.prototype, 'fields', void 0),
  t([s(b.fieldsIndex)], i.prototype, 'fieldsIndex', void 0),
  t(
    [s({ type: oe, json: { name: 'layerDefinition.definitionGeometry', write: !0 } })],
    i.prototype,
    'geometryDefinition',
    void 0,
  ),
  t(
    [s({ type: y.apiValues, json: { read: { reader: y.read } } })],
    i.prototype,
    'geometryType',
    void 0,
  ),
  t([s(ne)], i.prototype, 'labelsVisible', void 0),
  t(
    [
      s({
        type: [le],
        json: { name: 'layerDefinition.drawingInfo.labelingInfo', read: { reader: ae }, write: !0 },
      }),
    ],
    i.prototype,
    'labelingInfo',
    void 0,
  ),
  t([s(pe)], i.prototype, 'legendEnabled', void 0),
  t(
    [s({ type: ['show', 'hide'], json: { origins: { 'portal-item': { read: !1, write: !1 } } } })],
    i.prototype,
    'listMode',
    void 0,
  ),
  t([s({ type: g })], i.prototype, 'maxReconnectionAttempts', void 0),
  t([s({ type: g })], i.prototype, 'maxReconnectionInterval', void 0),
  t([s(de)], i.prototype, 'maxScale', void 0),
  t([s(ce)], i.prototype, 'minScale', void 0),
  t([s({ type: String })], i.prototype, 'objectIdField', void 0),
  t(
    [s({ value: 'ArcGISStreamLayer', type: ['ArcGISStreamLayer'] })],
    i.prototype,
    'operationalLayerType',
    void 0,
  ),
  t([s({ readOnly: !0 })], i.prototype, 'outFields', void 0),
  t([s(ue)], i.prototype, 'popupEnabled', void 0),
  t(
    [s({ type: he, json: { name: 'popupInfo', write: !0 } })],
    i.prototype,
    'popupTemplate',
    void 0,
  ),
  t([s({ type: R })], i.prototype, 'purgeOptions', void 0),
  t([s({ json: { read: !1, write: !1 } })], i.prototype, 'refreshInterval', void 0),
  t(
    [
      s({
        types: me,
        json: {
          origins: {
            service: { write: { target: 'drawingInfo.renderer', enabled: !1 } },
            'web-scene': { name: 'layerDefinition.drawingInfo.renderer', types: ye, write: !0 },
          },
          write: { target: 'layerDefinition.drawingInfo.renderer' },
        },
      }),
    ],
    i.prototype,
    'renderer',
    null,
  ),
  t(
    [
      w('service', 'renderer', ['drawingInfo.renderer', 'defaultSymbol']),
      w('renderer', ['layerDefinition.drawingInfo.renderer', 'layerDefinition.defaultSymbol']),
    ],
    i.prototype,
    'readRenderer',
    null,
  ),
  t(
    [
      s(
        (() => {
          const e = fe(ve);
          return (e.json.origins['portal-item'] = { read: !1, write: !1 }), e;
        })(),
      ),
    ],
    i.prototype,
    'screenSizePerspectiveEnabled',
    void 0,
  ),
  t([s()], i.prototype, 'sourceJSON', void 0),
  t(
    [s({ type: x, json: { origins: { service: { read: { source: 'spatialReference' } } } } })],
    i.prototype,
    'spatialReference',
    void 0,
  ),
  t([s({ json: { read: !1 } })], i.prototype, 'type', void 0),
  t([s(ge)], i.prototype, 'url', void 0),
  t([s({ type: Number })], i.prototype, 'updateInterval', void 0),
  t([s({ json: { read: !1, write: !1 } })], i.prototype, 'useViewTime', void 0),
  t([s({ type: String })], i.prototype, 'webSocketUrl', void 0),
  (i = t([I('esri.layers.StreamLayer')], i));
const xe = i;
export { xe as default };
