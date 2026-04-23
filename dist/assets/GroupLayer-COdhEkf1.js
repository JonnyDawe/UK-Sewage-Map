const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/groupLayerUtils-CYv0X_t8.js',
      'assets/utils-CWFwb689.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/originUtils-D69mHv66.js',
      'assets/multiOriginJSONSupportUtils-C0wm8_Yw.js',
      'assets/saveUtils-BoTSfpwK.js',
      'assets/resourceUtils-Dmo_NMux.js',
      'assets/resourceUtils-BQ_80v0v.js',
    ]),
) => i.map((i) => d[i]);
import { _ as b } from './index-DShQM7Xx.js';
import {
  l as c,
  t as v,
  q as m,
  r as f,
  gS as g,
  gT as _,
  u as w,
  fk as L,
  gU as I,
  g4 as O,
  gV as p,
  cv as y,
  fl as S,
  f3 as $,
  a8 as A,
  cw as h,
  cx as V,
  gW as E,
  aY as P,
  w as M,
  dc as C,
  gX as T,
  z as x,
  A as r,
  B as l,
  cB as u,
  F as G,
  R,
} from './index.lazy-BFilFZ3v.js';
import { populateGroupLayer as j } from './layersCreator-DUfzkQg_.js';
import { a as F } from './lazyLayerLoader-Ca0N3MNm.js';
import { r as H } from './saveUtils-BoTSfpwK.js';
import './loadUtils-CT2ZBLlH.js';
import './fetchService-BQV0514J.js';
import './associatedFeatureServiceUtils-DP8DQfqy.js';
import './portalLayers-wAeKvAft.js';
const k = Symbol('WebScene');
let s = class extends c(v(m(f(g(_(w(x))))))) {
  constructor(e) {
    super(e),
      (this.allLayers = new L({
        getCollections: () => [this.layers],
        getChildrenFunction: (i) => ('layers' in i ? i.layers : null),
      })),
      (this.allTables = I(this)),
      (this.fullExtent = void 0),
      (this.operationalLayerType = 'GroupLayer'),
      (this.spatialReference = void 0),
      (this.type = 'group'),
      (this._debouncedSaveOperations = O(async (i, t, a) => {
        const { save: o, saveAs: n } = await b(
          () => import('./groupLayerUtils-CYv0X_t8.js'),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        );
        switch (i) {
          case p.SAVE:
            return o(this, t);
          case p.SAVE_AS:
            return n(this, a, t);
        }
      }));
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible),
      this.addHandles([
        y(
          () => {
            let e = this.parent;
            for (; e && 'parent' in e && e.parent; ) e = e.parent;
            return e && k in e;
          },
          (e) => {
            const i = 'prevent-adding-tables';
            this.removeHandles(i),
              e &&
                (this.tables.removeAll(),
                this.addHandles(
                  $(
                    () => this.tables,
                    'before-add',
                    (t) => {
                      t.preventDefault(),
                        A.getLogger(this).errorOnce(
                          'tables',
                          'tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.',
                        );
                    },
                  ),
                  i,
                ));
          },
          S,
        ),
        y(() => this.visible, this._onVisibilityChange.bind(this), h),
      ]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf('portalItem') === V.USER;
  }
  _writeLayers(e, i, t, a) {
    const o = [];
    if (!e) return o;
    e.forEach((n) => {
      const d = E(n, a.webmap ? a.webmap.getLayerJSONFromResourceInfo(n) : null, a);
      d != null && d.layerType && o.push(d);
    }),
      (i.layers = o);
  }
  set portalItem(e) {
    this._set('portalItem', e);
  }
  readPortalItem(e, i, t) {
    const { itemId: a, layerType: o } = i;
    if (o === 'GroupLayer' && a) return new P({ id: a, portal: t == null ? void 0 : t.portal });
  }
  writePortalItem(e, i) {
    e != null && e.id && (i.itemId = e.id);
  }
  set visibilityMode(e) {
    const i = this._get('visibilityMode') !== e;
    this._set('visibilityMode', e), i && this._enforceVisibility(e, this.visible);
  }
  async beforeSave() {
    return H(this);
  }
  load(e) {
    const i = this.loadFromPortal(
      {
        supportedTypes: ['Feature Service', 'Feature Collection', 'Group Layer', 'Scene Service'],
        layerModuleTypeMap: F,
        populateGroupLayer: j,
      },
      e,
    ).catch((t) => {
      if ((M(t), this.sourceIsPortalItem)) throw t;
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  async loadAll() {
    return C(this, (e) => {
      e(this.layers, this.tables);
    });
  }
  async save(e) {
    return this._debouncedSaveOperations(p.SAVE, e);
  }
  async saveAs(e, i) {
    return this._debouncedSaveOperations(p.SAVE_AS, i, e);
  }
  layerAdded(e) {
    e.visible && this.visibilityMode === 'exclusive'
      ? this._turnOffOtherLayers(e)
      : this.visibilityMode === 'inherited' && (e.visible = this.visible),
      this.hasHandles(e.uid)
        ? console.error(`Layer read to Grouplayer: uid=${e.uid}`)
        : this.addHandles(
            y(
              () => e.visible,
              (i) => this._onChildVisibilityChange(e, i),
              h,
            ),
            e.uid,
          );
  }
  layerRemoved(e) {
    this.removeHandles(e.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e) {
    this.layers.forEach((i) => {
      i !== e && (i.visible = !1);
    });
  }
  _enforceVisibility(e, i) {
    if (!T(this).initialized) return;
    const t = this.layers;
    let a = t.find((o) => o.visible);
    switch (e) {
      case 'exclusive':
        t.length && !a && ((a = t.at(0)), (a.visible = !0)), this._turnOffOtherLayers(a);
        break;
      case 'inherited':
        t.forEach((o) => {
          o.visible = i;
        });
    }
  }
  _onVisibilityChange(e) {
    this.visibilityMode === 'inherited' &&
      this.layers.forEach((i) => {
        i.visible = e;
      });
  }
  _onChildVisibilityChange(e, i) {
    switch (this.visibilityMode) {
      case 'exclusive':
        i ? this._turnOffOtherLayers(e) : this._isAnyLayerVisible() || (e.visible = !0);
        break;
      case 'inherited':
        e.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e) => e.visible);
  }
};
r([l({ readOnly: !0, dependsOn: [] })], s.prototype, 'allLayers', void 0),
  r([l({ readOnly: !0 })], s.prototype, 'allTables', void 0),
  r([l({ json: { read: !0, write: !0 } })], s.prototype, 'blendMode', void 0),
  r([l()], s.prototype, 'fullExtent', void 0),
  r([l({ readOnly: !0 })], s.prototype, 'sourceIsPortalItem', null),
  r([l({ json: { read: !1, write: { ignoreOrigin: !0 } } })], s.prototype, 'layers', void 0),
  r([u('layers')], s.prototype, '_writeLayers', null),
  r([l({ type: ['GroupLayer'] })], s.prototype, 'operationalLayerType', void 0),
  r(
    [
      l({
        json: {
          origins: {
            'web-map': {
              read: !1,
              write: {
                overridePolicy(e, i, t) {
                  return {
                    enabled:
                      (e == null ? void 0 : e.type) === 'Group Layer' &&
                      (t == null ? void 0 : t.initiator) !== this,
                  };
                },
              },
            },
            'web-scene': { read: !1, write: !1 },
          },
        },
      }),
    ],
    s.prototype,
    'portalItem',
    null,
  ),
  r([G('web-map', 'portalItem', ['itemId'])], s.prototype, 'readPortalItem', null),
  r(
    [u('web-map', 'portalItem', { itemId: { type: String } })],
    s.prototype,
    'writePortalItem',
    null,
  ),
  r([l()], s.prototype, 'spatialReference', void 0),
  r([l({ json: { read: !1 }, readOnly: !0, value: 'group' })], s.prototype, 'type', void 0),
  r(
    [
      l({
        type: ['independent', 'inherited', 'exclusive'],
        value: 'independent',
        json: {
          write: !0,
          origins: {
            'web-map': {
              type: ['independent', 'exclusive'],
              write: (e, i, t) => {
                e !== 'inherited' && (i[t] = e);
              },
            },
          },
        },
      }),
    ],
    s.prototype,
    'visibilityMode',
    null,
  ),
  (s = r([R('esri.layers.GroupLayer')], s));
const Y = s;
export { Y as default };
