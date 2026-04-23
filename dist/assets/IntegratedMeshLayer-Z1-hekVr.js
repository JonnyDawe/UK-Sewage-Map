import {
  aj as _,
  aK as I,
  dr as L,
  bQ as O,
  jM as b,
  ap as N,
  A as i,
  B as a,
  cB as R,
  R as f,
  bi as M,
  dG as A,
  P as V,
  T as j,
  q as J,
  r as P,
  t as $,
  u as D,
  U as E,
  V as K,
  f3 as U,
  cw as z,
  cz as G,
  w as q,
  a7 as c,
  a8 as S,
  z as B,
  F as C,
  a9 as F,
} from './index.lazy-BFilFZ3v.js';
import { v as u } from './persistable-CSUxhaiT.js';
import { R as k, V as w } from './SceneService-DEXu7bJD.js';
import { p as H, a as Q, y as Z, m as W } from './I3SLayerDefinitions-B-5d5Qyf.js';
import { $ as T, Z as X, w as Y } from './elevationInfoUtils-qqhoEgjX.js';
import './index-DShQM7Xx.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './resourceExtension-D8MjDpRQ.js';
import './originUtils-D69mHv66.js';
import './resourceUtils-Dmo_NMux.js';
import './resourceUtils-BQ_80v0v.js';
import './saveUtils-BoTSfpwK.js';
var h;
let n = (h = class extends _ {
  constructor(e) {
    super(e), (this.geometry = null), (this.type = 'clip');
  }
  writeGeometry(e, t, r, o) {
    var l;
    if (
      (l = o.layer) != null &&
      l.spatialReference &&
      !o.layer.spatialReference.equals(this.geometry.spatialReference)
    ) {
      if (!I(e.spatialReference, o.layer.spatialReference))
        return void (
          (o == null ? void 0 : o.messages) &&
          o.messages.push(
            new L(
              'scenemodification:unsupported',
              'Scene modifications with incompatible spatial references are not supported',
              { modification: this, spatialReference: o.layer.spatialReference, context: o },
            ),
          )
        );
      const y = new O();
      b(e, y, o.layer.spatialReference), (t[r] = y.toJSON(o));
    } else t[r] = e.toJSON(o);
    delete t[r].spatialReference;
  }
  clone() {
    return new h({ geometry: N(this.geometry), type: this.type });
  }
});
i([a({ type: O }), u()], n.prototype, 'geometry', void 0),
  i([R(['web-scene', 'portal-item'], 'geometry')], n.prototype, 'writeGeometry', null),
  i([a({ type: ['clip', 'mask', 'replace'], nonNullable: !0 }), u()], n.prototype, 'type', void 0),
  (n = h = i([f('esri.layers.support.SceneModification')], n));
const m = n;
var p;
let d = (p = class extends _.JSONSupportMixin(M.ofType(m)) {
  constructor(e) {
    super(e), (this.url = null);
  }
  clone() {
    return new p({ url: this.url, items: this.items.map((e) => e.clone()) });
  }
  toJSON(e) {
    return this.toArray()
      .map((t) => t.toJSON(e))
      .filter((t) => !!t.geometry);
  }
  static fromJSON(e, t) {
    const r = new p();
    for (const o of e) r.add(m.fromJSON(o, t));
    return r;
  }
  static async fromUrl(e, t, r) {
    const o = { url: A(e), origin: 'service' },
      l = await V(e, { responseType: 'json', signal: r == null ? void 0 : r.signal }),
      y = t.toJSON(),
      g = [];
    for (const v of l.data)
      g.push(m.fromJSON({ ...v, geometry: { ...v.geometry, spatialReference: y } }, o));
    return new p({ url: e, items: g });
  }
});
i([a({ type: String })], d.prototype, 'url', void 0),
  (d = p = i([f('esri.layers.support.SceneModifications')], d));
const x = d;
let s = class extends k(j(J(P($(D(E(K(B)))))))) {
  constructor(...e) {
    super(...e),
      (this.geometryType = 'mesh'),
      (this.operationalLayerType = 'IntegratedMeshLayer'),
      (this.type = 'integrated-mesh'),
      (this.nodePages = null),
      (this.materialDefinitions = null),
      (this.textureSetDefinitions = null),
      (this.geometryDefinitions = null),
      (this.serviceUpdateTimeStamp = null),
      (this.profile = 'mesh-pyramids'),
      (this.modifications = null),
      (this._modificationsSource = null),
      (this.path = null),
      (this.definitionExpression = null);
  }
  initialize() {
    this.addHandles(
      U(
        () => this.modifications,
        'after-changes',
        () => (this.modifications = this.modifications),
        z,
      ),
    );
  }
  normalizeCtorArgs(e, t) {
    return typeof e == 'string' ? { url: e, ...t } : e;
  }
  readModifications(e, t, r) {
    this._modificationsSource = { url: G(e, r), context: r };
  }
  set elevationInfo(e) {
    (e != null && e.mode !== 'absolute-height') || this._set('elevationInfo', e),
      this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const t = e == null ? void 0 : e.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ['Scene Service'] }, e);
    } catch (r) {
      q(r);
    }
    if ((await this._fetchService(t), this._modificationsSource != null)) {
      const r = await x.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin('modifications', r, this._modificationsSource.context.origin),
        (this._modificationsSource = null);
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t);
  }
  beforeSave() {
    if (this._modificationsSource != null)
      return this.load().then(
        () => {},
        () => {},
      );
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(
      w.SAVE_AS,
      {
        ...t,
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: 'integrated-mesh',
      },
      e,
    );
  }
  async save() {
    const e = {
      getTypeKeywords: () => this._getTypeKeywords(),
      portalItemLayerType: 'integrated-mesh',
    };
    return this._debouncedSaveOperations(w.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== 'IntegratedMesh')
      throw new c(
        'integrated-mesh-layer:layer-type-not-supported',
        'IntegratedMeshLayer does not support this layer type',
        { layerType: e.layerType },
      );
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new c('layer:service-version-not-supported', 'Service version is not supported.', {
        serviceVersion: this.version.versionString,
        supportedVersions: '1.x',
      });
    if (this.version.major > 1)
      throw new c('layer:service-version-too-new', 'Service version is too new.', {
        serviceVersion: this.version.versionString,
        supportedVersions: '1.x',
      });
  }
  _getTypeKeywords() {
    return ['IntegratedMeshLayer'];
  }
  _validateElevationInfo(e) {
    const t = 'Integrated mesh layers';
    T(S.getLogger(this), X(t, 'absolute-height', e)), T(S.getLogger(this), Y(t, e));
  }
};
i([a({ type: String, readOnly: !0 })], s.prototype, 'geometryType', void 0),
  i([a({ type: ['show', 'hide'] })], s.prototype, 'listMode', void 0),
  i([a({ type: ['IntegratedMeshLayer'] })], s.prototype, 'operationalLayerType', void 0),
  i([a({ json: { read: !1 }, readOnly: !0 })], s.prototype, 'type', void 0),
  i([a({ type: H, readOnly: !0 })], s.prototype, 'nodePages', void 0),
  i([a({ type: [Q], readOnly: !0 })], s.prototype, 'materialDefinitions', void 0),
  i([a({ type: [Z], readOnly: !0 })], s.prototype, 'textureSetDefinitions', void 0),
  i([a({ type: [W], readOnly: !0 })], s.prototype, 'geometryDefinitions', void 0),
  i([a({ readOnly: !0 })], s.prototype, 'serviceUpdateTimeStamp', void 0),
  i(
    [
      a({ type: x }),
      u({ origins: ['web-scene', 'portal-item'], type: 'resource', prefix: 'modifications' }),
    ],
    s.prototype,
    'modifications',
    void 0,
  ),
  i([C(['web-scene', 'portal-item'], 'modifications')], s.prototype, 'readModifications', null),
  i([a(F)], s.prototype, 'elevationInfo', null),
  i(
    [
      a({
        type: String,
        json: {
          origins: { 'web-scene': { read: !0, write: !0 }, 'portal-item': { read: !0, write: !0 } },
          read: !1,
        },
      }),
    ],
    s.prototype,
    'path',
    void 0,
  ),
  (s = i([f('esri.layers.IntegratedMeshLayer')], s));
const ce = s;
export { ce as default };
