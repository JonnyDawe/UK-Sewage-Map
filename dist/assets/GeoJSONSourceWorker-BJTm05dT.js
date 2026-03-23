import {
  dF as _,
  dB as R,
  a7 as I,
  dA as A,
  fN as D,
  e1 as Q,
  fO as P,
  dC as v,
  fP as Z,
  dD as G,
  fQ as M,
  bL as N,
  a8 as B,
  bs as z,
  P as L,
  fR as O,
} from './index.lazy-BHTpPf8X.js';
import { s as J, u as U, n as W, r as H, o as V } from './featureConversionUtils-VaE6vOn5.js';
import { u as Y } from './executeQueryForSnapping-DfQiMSU0.js';
import { f as K } from './FeatureStore-D4Qn6CHR.js';
import { x as F, j as b } from './queryUtils-BQJHb1Wr.js';
import { L as X } from './QueryEngine-mREQOvCF.js';
import { I as ee, N as te, E as se } from './geojson-BFxaYRqY.js';
import { S as ie, E as re, g as w, f as T, p as E, h as C } from './sourceUtils-DI7Ktlg0.js';
import './index-DqxZnyqH.js';
import './timeSupport-C377IZe7.js';
import './BoundsStore-BGfZSiDX.js';
import './PooledRBush-MuiPo_Vg.js';
import './optimizedFeatureQueryEngineAdapter-Dv2fz0sF.js';
import './json-Wa8cmqdu.js';
import './WhereClauseCache-CnHr_Ntn.js';
import './WhereClause-DynWr3o5.js';
import './quantizationUtils-DsF8tesB.js';
import './utils-Ca511slb.js';
import './utils-qS_J3TRF.js';
import './ClassBreaksDefinition-yFyTg9cf.js';
import './SnappingCandidate-DGkpYqI6.js';
import './FixedIntervalBinParameters-CKrks9ad.js';
import './date-Ctp1FiBW.js';
const ne = {
  hasAttachments: !1,
  capabilities: 'query, editing, create, delete, update',
  useStandardizedQueries: !0,
  supportsCoordinatesQuantization: !0,
  supportsReturningQueryGeometry: !0,
  advancedQueryCapabilities: {
    supportsQueryAttachments: !1,
    supportsQueryAttachmentOrderByFields: !1,
    supportsQueryBins: !0,
    supportsQueryWithCacheHint: !0,
    supportsQueryWithDistance: !0,
    supportsQueryWithResultType: !0,
    supportsStatistics: !0,
    supportsPercentileStatistics: !0,
    supportsReturningGeometryCentroid: !0,
    supportsDistinct: !0,
    supportsReturningQueryExtent: !0,
    supportsReturningGeometryProperties: !1,
    supportsHavingClause: !0,
    supportsOrderBy: !0,
    supportsPagination: !0,
    supportsSqlExpression: !0,
    supportsDisjointSpatialRel: !0,
  },
  queryBinsCapabilities: ie,
};
class Oe {
  constructor() {
    (this._queryEngine = null),
      (this._snapshotFeatures = async (e) => {
        const t = await this._fetch(e);
        return this._createFeatures(t);
      });
  }
  destroy() {
    var e;
    (e = this._queryEngine) == null || e.destroy(),
      (this._queryEngine = this._createDefaultAttributes = null);
  }
  async load(e, t = {}) {
    this._loadOptions = { url: e.url, customParameters: e.customParameters };
    const r = [],
      [s] = await Promise.all([
        e.url ? this._fetch(t == null ? void 0 : t.signal) : null,
        this._checkProjection(e.spatialReference),
      ]),
      i = ee(s, { geometryType: e.geometryType }),
      o = e.fields || i.fields || [],
      d = e.hasZ != null ? e.hasZ : i.hasZ,
      p = i.geometryType;
    let y = e.objectIdField || i.objectIdFieldName || '__OBJECTID';
    const m = e.spatialReference || _;
    let n = e.timeInfo;
    o === i.fields &&
      i.unknownFields.length > 0 &&
      r.push({
        name: 'geojson-layer:unknown-field-types',
        message: "Some fields types couldn't be inferred from the features and were dropped",
        details: { unknownFields: i.unknownFields },
      });
    const u = new R(o);
    let l = u.get(y);
    l
      ? (l.type !== 'esriFieldTypeString' && (l.type = 'esriFieldTypeOID'),
        (l.editable = !1),
        (l.nullable = !1),
        (y = l.name))
      : ((l = {
          alias: y,
          name: y,
          type: i.objectIdFieldType === 'string' ? 'esriFieldTypeString' : 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
        }),
        o.unshift(l));
    const h = {};
    for (const a of o) {
      if ((a.name == null && (a.name = a.alias), a.alias == null && (a.alias = a.name), !a.name))
        throw new I('geojson-layer:invalid-field-name', 'field name is missing', { field: a });
      if (!A.jsonValues.includes(a.type))
        throw new I('geojson-layer:invalid-field-type', `invalid type for field "${a.name}"`, {
          field: a,
        });
      if (a.name !== l.name) {
        const g = D(a);
        g !== void 0 && (h[a.name] = g);
      }
      a.length == null && (a.length = Q(a));
    }
    if (n) {
      if (n.startTimeField) {
        const a = u.get(n.startTimeField);
        a
          ? ((n.startTimeField = a.name), (a.type = 'esriFieldTypeDate'))
          : (n.startTimeField = null);
      }
      if (n.endTimeField) {
        const a = u.get(n.endTimeField);
        a ? ((n.endTimeField = a.name), (a.type = 'esriFieldTypeDate')) : (n.endTimeField = null);
      }
      if (n.trackIdField) {
        const a = u.get(n.trackIdField);
        a
          ? (n.trackIdField = a.name)
          : ((n.trackIdField = null),
            r.push({
              name: 'geojson-layer:invalid-timeInfo-trackIdField',
              message: 'trackIdField is missing',
              details: { timeInfo: n },
            }));
      }
      n.startTimeField ||
        n.endTimeField ||
        (r.push({
          name: 'geojson-layer:invalid-timeInfo',
          message: 'startTimeField and endTimeField are missing',
          details: { timeInfo: n },
        }),
        (n = null));
    }
    const c = p ? G(p) : void 0,
      q = u.dateFields.length ? { timeZoneIANA: v } : null,
      f = {
        warnings: r,
        featureErrors: [],
        layerDefinition: {
          ...ne,
          drawingInfo: c ?? void 0,
          templates: P(h),
          extent: void 0,
          geometryType: p,
          objectIdField: y,
          fields: o,
          hasZ: !!d,
          timeInfo: n,
          dateFieldsTimeReference: q,
        },
      };
    this._queryEngine = new X({
      fieldsIndex: R.fromLayerJSON({ fields: o, timeInfo: n, dateFieldsTimeReference: q }),
      geometryType: p,
      hasM: !1,
      hasZ: d,
      objectIdField: y,
      spatialReference: m,
      timeInfo: n,
      featureStore: new K({ geometryType: p, hasM: !1, hasZ: d }),
    });
    const j = this._queryEngine.fieldsIndex.requiredFields.indexOf(l);
    j > -1 && this._queryEngine.fieldsIndex.requiredFields.splice(j, 1),
      (this._createDefaultAttributes = Z(h, y));
    const x = await this._createFeatures(s);
    this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, x);
    const $ = this._normalizeFeatures(x, f.featureErrors);
    this._queryEngine.featureStore.addMany($);
    const { fullExtent: k, timeExtent: S } = await this._queryEngine.fetchRecomputedExtents();
    if (((f.layerDefinition.extent = k), S)) {
      const { start: a, end: g } = S;
      f.layerDefinition.timeInfo.timeExtent = [a, g];
    }
    return f;
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: r } = this._queryEngine;
    return (
      await Promise.all([re(t, r), F(e.adds, t), F(e.updates, t)]),
      await this._waitSnapshotComplete(),
      this._applyEdits(e)
    );
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t.signal);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), Y(this._queryEngine, e, t.signal);
  }
  async queryAttributeBins(e, t = {}) {
    return (
      await this._waitSnapshotComplete(), this._queryEngine.executeAttributeBinsQuery(e, t.signal)
    );
  }
  async refresh(e) {
    var s;
    (this._loadOptions.customParameters = e),
      (s = this._snapshotTask) == null || s.abort(),
      (this._snapshotTask = M(this._snapshotFeatures)),
      this._snapshotTask.promise.then(
        (i) => {
          this._queryEngine.featureStore.clear(),
            (this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, i));
          const o = this._normalizeFeatures(i);
          o && this._queryEngine.featureStore.addMany(o);
        },
        (i) => {
          this._queryEngine.featureStore.clear(),
            N(i) ||
              B.getLogger('esri.layers.GeoJSONLayer').error(
                new I('geojson-layer:refresh', 'An error occurred during refresh', { error: i }),
              );
        },
      ),
      await this._waitSnapshotComplete();
    const { fullExtent: t, timeExtent: r } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: t, timeExtent: r };
  }
  async _createFeatures(e) {
    if (e == null) return [];
    const { geometryType: t, hasZ: r, objectIdField: s } = this._queryEngine,
      i = te(e, { geometryType: t, hasZ: r, objectIdField: s });
    if (!z(this._queryEngine.spatialReference, _))
      for (const o of i)
        o.geometry != null &&
          (o.geometry = J(
            b(
              U(o.geometry, this._queryEngine.geometryType, this._queryEngine.hasZ, !1),
              _,
              this._queryEngine.spatialReference,
            ),
          ));
    return i;
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {}
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(e) {
    const { url: t, customParameters: r } = this._loadOptions,
      s = (await L(t ?? '', { responseType: 'json', query: { ...r }, signal: e })).data;
    return se(s), s;
  }
  _normalizeFeatures(e, t) {
    const { objectIdField: r, fieldsIndex: s } = this._queryEngine,
      i = [];
    for (const o of e) {
      const d = this._createDefaultAttributes(),
        p = w(s, d, o.attributes, !0);
      p
        ? t == null || t.push(p)
        : (this._assignObjectId(d, o.attributes, !0),
          (o.attributes = d),
          (o.objectId = d[r]),
          i.push(o));
    }
    return i;
  }
  async _applyEdits(e) {
    const { adds: t, updates: r, deletes: s } = e,
      i = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (
      (t != null && t.length && this._applyAddEdits(i, t),
      r != null && r.length && this._applyUpdateEdits(i, r),
      s == null ? void 0 : s.length)
    ) {
      for (const p of s) i.deleteResults.push(T(p));
      this._queryEngine.featureStore.removeManyById(s);
    }
    const { fullExtent: o, timeExtent: d } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: o, timeExtent: d, featureEditResults: i };
  }
  _applyAddEdits(e, t) {
    const { addResults: r } = e,
      {
        geometryType: s,
        hasM: i,
        hasZ: o,
        objectIdField: d,
        spatialReference: p,
        featureStore: y,
        fieldsIndex: m,
      } = this._queryEngine,
      n = [];
    for (const u of t) {
      if (u.geometry && s !== O(u.geometry)) {
        r.push(E('Incorrect geometry type.'));
        continue;
      }
      const l = this._createDefaultAttributes(),
        h = w(m, l, u.attributes);
      if (h) r.push(h);
      else {
        if ((this._assignObjectId(l, u.attributes), (u.attributes = l), u.uid != null)) {
          const c = u.attributes[d];
          e.uidToObjectId[u.uid] = c;
        }
        if (u.geometry != null) {
          const c = u.geometry.spatialReference ?? p;
          u.geometry = b(C(u.geometry, c), c, p);
        }
        n.push(u), r.push(T(u.attributes[d]));
      }
    }
    y.addMany(W([], n, s, o, i, d));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const {
      geometryType: r,
      hasM: s,
      hasZ: i,
      objectIdField: o,
      spatialReference: d,
      featureStore: p,
      fieldsIndex: y,
    } = this._queryEngine;
    for (const m of t) {
      const { attributes: n, geometry: u } = m,
        l = n == null ? void 0 : n[o];
      if (l == null) {
        e.push(E(`Identifier field ${o} missing`));
        continue;
      }
      if (!p.has(l)) {
        e.push(E(`Feature with object id ${l} missing`));
        continue;
      }
      const h = H(p.getFeature(l), r, i, s);
      if (u != null) {
        if (r !== O(u)) {
          e.push(E('Incorrect geometry type.'));
          continue;
        }
        const c = u.spatialReference ?? d;
        h.geometry = b(C(u, c), c, d);
      }
      if (n) {
        const c = w(y, h.attributes, n);
        if (c) {
          e.push(c);
          continue;
        }
      }
      p.add(V(h, r, i, s, o)), e.push(T(l));
    }
  }
  _createObjectIdGenerator(e, t) {
    const r = e.fieldsIndex.get(e.objectIdField);
    if (r.type === 'esriFieldTypeString') return () => r.name + '-' + Date.now().toString(16);
    let s = Number.NEGATIVE_INFINITY;
    for (const i of t) i.objectId && (s = Math.max(s, i.objectId));
    return (s = Math.max(0, s) + 1), () => s++;
  }
  _assignObjectId(e, t, r = !1) {
    const s = this._queryEngine.objectIdField;
    e[s] = r && s in t ? t[s] : this._objectIdGenerator();
  }
  async _checkProjection(e) {
    try {
      await F(_, e);
    } catch {
      throw new I('geojson-layer', 'Projection not supported');
    }
  }
}
export { Oe as default };
