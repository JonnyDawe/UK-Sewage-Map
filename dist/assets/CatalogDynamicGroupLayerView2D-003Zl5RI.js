import {
  A as n,
  B as l,
  R as S,
  bi as $,
  g4 as U,
  i6 as _,
  bM as x,
  iR as H,
  a8 as I,
  dg as g,
} from './index.lazy-BFilFZ3v.js';
import { S as O, y as A } from './LayerView-DO8JWPob.js';
import './index-DShQM7Xx.js';
import './Container-JJ8D-RVy.js';
const u = Symbol(),
  T = (p) => {
    let r = class extends p {
      constructor() {
        super(...arguments),
          (this.layerViews = new $()),
          (this._debouncedUpdate = U(async () => {
            const { layer: e, parent: t } = this,
              i = t == null ? void 0 : t.footprintLayerView;
            let s = [];
            const d = this._createQuery();
            if (d && i) {
              const { features: h } = await i.queryFeatures(d);
              this.suspended || (s = h.map((c) => e.acquireLayer(c)));
            }
            this.removeHandles(u), this.addHandles(s, u);
          }));
      }
      get creatingLayerViews() {
        var e;
        return (
          ((e = this.view) == null
            ? void 0
            : e.layerViewManager.isCreatingLayerViewsForLayer(this.layer)) ?? !1
        );
      }
      isUpdating() {
        return (
          this.creatingLayerViews || this.layer.updating || this.layerViews.some((e) => e.updating)
        );
      }
      enableLayerUpdates() {
        return _([
          this._updatingHandles.addWhen(
            () => {
              var e, t;
              return (
                ((t = (e = this.parent) == null ? void 0 : e.footprintLayerView) == null
                  ? void 0
                  : t.dataUpdating) === !1
              );
            },
            () => this.updateLayers(),
          ),
          this._updatingHandles.add(
            () => {
              var e, t, i, s, d;
              return [
                this.layer.maximumVisibleSublayers,
                (e = this.layer.parent) == null ? void 0 : e.orderBy,
                (i = (t = this.parent) == null ? void 0 : t.footprintLayerView) == null
                  ? void 0
                  : i.filter,
                (d = (s = this.parent) == null ? void 0 : s.footprintLayerView) == null
                  ? void 0
                  : d.timeExtent,
                this.suspended,
              ];
            },
            () => this.updateLayers(),
          ),
          x(() => this.removeHandles(u)),
        ]);
      }
      updateLayers() {
        this.suspended
          ? this.removeHandles(u)
          : this._updatingHandles.addPromise(
              H(this._debouncedUpdate()).catch((e) => {
                I.getLogger(this).error(e);
              }),
            );
      }
      _createQuery() {
        var V, v;
        const e = (V = this.parent) == null ? void 0 : V.footprintLayerView,
          t = (v = this.layer) == null ? void 0 : v.parent;
        if (!e || !t || t.destroyed) return null;
        const {
          layer: { maximumVisibleSublayers: i },
          view: { scale: s },
        } = this;
        if (!i) return null;
        const {
            itemTypeField: d,
            itemSourceField: h,
            itemNameField: c,
            minScaleField: m,
            maxScaleField: L,
            objectIdField: b,
            orderBy: w,
          } = t,
          C = g(`${m} IS NULL OR ${s} <= ${m} OR ${m} = 0`, `${L} IS NULL OR ${s} >= ${L}`),
          o = w == null ? void 0 : w.find((y) => y.field && !y.valueExpression),
          a = e.createQuery();
        if (
          ((a.returnGeometry = !1),
          (a.num = i),
          (a.outFields = [b, h, c]),
          (a.where = g(a.where, C)),
          this.unsupportedItemTypes != null)
        ) {
          const y = `${d} NOT IN (${this.unsupportedItemTypes.map((F) => `'${F}'`)})`;
          a.where = g(a.where, y);
        }
        return (
          o != null &&
            o.field &&
            ((a.orderByFields = [`${o.field} ${o.order === 'descending' ? 'DESC' : 'ASC'}`]),
            a.outFields.push(o.field)),
          a
        );
      }
    };
    return (
      n([l({ readOnly: !0 })], r.prototype, 'creatingLayerViews', null),
      n([l()], r.prototype, 'layer', void 0),
      n([l()], r.prototype, 'layerViews', void 0),
      n([l({ readOnly: !0 })], r.prototype, 'unsupportedItemTypes', void 0),
      n([l()], r.prototype, 'parent', void 0),
      n([l({ readOnly: !0 })], r.prototype, 'isUpdating', null),
      (r = n([S('esri.views.layers.CatalogDynamicGroupLayerView')], r)),
      r
    );
  };
let f = class extends T(O(A)) {
  constructor() {
    super(...arguments),
      (this.unsupportedItemTypes = ['Scene Service']),
      (this.layerViews = new $());
  }
  attach() {
    this.addAttachHandles([
      this.layerViews.on('after-changes', () => this._updateStageChildren()),
      this.enableLayerUpdates(),
    ]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(p) {
    this.updateLayers();
  }
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(),
      this.layerViews.forEach((p, r) => this.container.addChildAt(p.container, r));
  }
};
f = n([S('esri.views.2d.layers.CatalogDynamicGroupLayerView2D')], f);
const D = f;
export { D as default };
