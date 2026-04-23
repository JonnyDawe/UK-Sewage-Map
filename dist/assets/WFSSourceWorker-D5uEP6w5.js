import {
  a7 as f,
  aT as p,
  dB as S,
  dC as E,
  fT as q,
  fQ as P,
  a8 as g,
  dr as y,
  bL as w,
  bs as I,
} from './index.lazy-BFilFZ3v.js';
import { s as b, u as $ } from './featureConversionUtils-GdT3zBJg.js';
import { u as j } from './executeQueryForSnapping-BvvkDwHr.js';
import { f as Q } from './FeatureStore-Dji6Fle5.js';
import { x as N, j as O } from './queryUtils-DePK7lxY.js';
import { L } from './QueryEngine-Xnls7vPP.js';
import { E as M, N as k } from './geojson-B3vrvhWT.js';
import { g as A } from './sourceUtils-xtWeP91x.js';
import { o as U, e as Z, K as _ } from './wfsUtils-B8OROoh4.js';
import './index-DShQM7Xx.js';
import './timeSupport-JKWk7KR2.js';
import './BoundsStore-CCC3qzFi.js';
import './PooledRBush-5_hwDN_k.js';
import './optimizedFeatureQueryEngineAdapter-BbFBGDEz.js';
import './json-Wa8cmqdu.js';
import './WhereClauseCache-D8uWzHNT.js';
import './WhereClause-CwCHdxIr.js';
import './quantizationUtils-QwHxl707.js';
import './utils-UHukwwn8.js';
import './utils-V_r4ZCew.js';
import './ClassBreaksDefinition-BrSl-9Bg.js';
import './SnappingCandidate-DGkpYqI6.js';
import './FixedIntervalBinParameters-CKl391iV.js';
import './date-Ctp1FiBW.js';
import './xmlUtils-CtUoQO7q.js';
const x = 'esri.layers.WFSLayer';
class ft {
  constructor() {
    (this._customParameters = null), (this._queryEngine = null), (this._supportsPagination = !0);
  }
  destroy() {
    var t;
    (t = this._queryEngine) == null || t.destroy(), (this._queryEngine = null);
  }
  async load(t, e = {}) {
    const {
        getFeatureUrl: a,
        getFeatureOutputFormat: s,
        fields: i,
        geometryType: u,
        featureType: o,
        maxRecordCount: n,
        maxTotalRecordCount: m,
        maxPageCount: R,
        objectIdField: d,
        customParameters: F,
      } = t,
      { spatialReference: h, getFeatureSpatialReference: c } = U(a, o, t.spatialReference);
    try {
      await N(c, h);
    } catch {
      throw new f('unsupported-projection', 'Projection not supported', {
        inSpatialReference: c,
        outSpatialReference: h,
      });
    }
    p(e),
      (this._customParameters = F),
      (this._featureType = o),
      (this._fieldsIndex = S.fromLayerJSON({
        fields: i,
        dateFieldsTimeReference: i.some((T) => T.type === 'esriFieldTypeDate')
          ? { timeZoneIANA: E }
          : null,
      })),
      (this._geometryType = u),
      (this._getFeatureUrl = a),
      (this._getFeatureOutputFormat = s),
      (this._getFeatureSpatialReference = c),
      (this._maxRecordCount = n),
      (this._maxTotalRecordCount = m),
      (this._maxPageCount = R),
      (this._objectIdField = d),
      (this._spatialReference = h);
    let l = await this._snapshotFeatures(e);
    if (
      l.errors.length > 0 &&
      ((this._supportsPagination = !1), (l = await this._snapshotFeatures(e)), l.errors.length > 0)
    )
      throw l.errors[0];
    return (
      (this._queryEngine = new L({
        fieldsIndex: this._fieldsIndex,
        geometryType: u,
        hasM: !1,
        hasZ: !1,
        objectIdField: d,
        spatialReference: h,
        timeInfo: null,
        featureStore: new Q({ geometryType: u, hasM: !1, hasZ: !1 }),
      })),
      this._queryEngine.featureStore.addMany(l.features),
      { warnings: C(l), extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent }
    );
  }
  async applyEdits() {
    throw new f('wfs-source:editing-not-supported', 'applyEdits() is not supported on WFSLayer');
  }
  async queryFeatures(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(t, e.signal);
  }
  async queryFeatureCount(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(t, e.signal);
  }
  async queryObjectIds(t = {}, e = {}) {
    return (
      await this._waitSnapshotComplete(),
      (await this._queryEngine.executeQueryForIds(t, e.signal)).filter(q)
    );
  }
  async queryExtent(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(t, e.signal);
  }
  async querySnapping(t, e = {}) {
    return await this._waitSnapshotComplete(), j(this._queryEngine, t, e.signal);
  }
  async queryAttributeBins(t, e = {}) {
    return (
      await this._waitSnapshotComplete(), this._queryEngine.executeAttributeBinsQuery(t, e.signal)
    );
  }
  async refresh(t) {
    var e;
    return (
      (this._customParameters = t.customParameters),
      (this._maxRecordCount = t.maxRecordCount),
      (this._maxTotalRecordCount = t.maxTotalRecordCount),
      (this._maxPageCount = t.maxPageCount),
      (e = this._snapshotTask) == null || e.abort(),
      (this._snapshotTask = P((a) => this._snapshotFeatures({ signal: a }))),
      this._snapshotTask.promise.then(
        (a) => {
          var s;
          this._queryEngine.featureStore.clear(),
            this._queryEngine.featureStore.addMany(a.features);
          for (const i of C(a))
            g.getLogger(x).warn(new y('wfs-layer:refresh-warning', i.message, i.details));
          (s = a.errors) != null &&
            s.length &&
            g
              .getLogger(x)
              .warn(
                new y('wfs-layer:refresh-error', 'Refresh completed with errors', {
                  errors: a.errors,
                }),
              );
        },
        () => {
          this._queryEngine.featureStore.clear();
        },
      ),
      await this._waitSnapshotComplete(),
      { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent }
    );
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {}
      return this._waitSnapshotComplete();
    }
  }
  async _snapshotFeatures(t) {
    const e = t == null ? void 0 : t.signal,
      a = this._maxTotalRecordCount,
      s = this._maxPageCount,
      i = this._supportsPagination
        ? await Z(this._getFeatureUrl, this._featureType.typeName, {
            customParameters: this._customParameters,
            signal: e,
          })
        : void 0;
    let u = [];
    const o = [];
    if (i == null)
      try {
        u = await this._singleQuery(e);
      } catch (n) {
        w(n) || o.push(n);
      }
    else {
      const n = Math.min(i, a),
        m = J(this, Math.max(1, Math.min(Math.ceil(n / this._maxRecordCount), s)), e);
      await Promise.allSettled(Array.from({ length: 10 }).map(() => v(m, u, o)));
    }
    return (
      p(e), { features: u, totalRecordCount: i, maxTotalRecordCount: a, maxPageCount: s, errors: o }
    );
  }
  async _singleQuery(t) {
    const e = await _(
      this._getFeatureUrl,
      this._featureType.typeName,
      this._getFeatureSpatialReference,
      this._getFeatureOutputFormat,
      { customParameters: this._customParameters, signal: t },
    );
    return this._processGeoJSON(e, { signal: t });
  }
  async _pageQuery(t, e) {
    const a = t * this._maxRecordCount,
      s = await _(
        this._getFeatureUrl,
        this._featureType.typeName,
        this._getFeatureSpatialReference,
        this._getFeatureOutputFormat,
        {
          customParameters: this._customParameters,
          startIndex: a,
          count: this._maxRecordCount,
          signal: e,
        },
      );
    return this._processGeoJSON(s, { startIndex: a, signal: e });
  }
  _processGeoJSON(t, e) {
    M(t, this._getFeatureSpatialReference.wkid);
    const { startIndex: a, signal: s } = e;
    p(s);
    const i = k(t, {
      geometryType: this._geometryType,
      hasZ: !1,
      objectIdField: this._objectIdField,
    });
    if (!I(this._spatialReference, this._getFeatureSpatialReference))
      for (const o of i)
        o.geometry != null &&
          (o.geometry = b(
            O(
              $(o.geometry, this._geometryType, !1, !1),
              this._getFeatureSpatialReference,
              this._spatialReference,
            ),
          ));
    let u = a ?? 1;
    for (const o of i) {
      const n = {};
      A(this._fieldsIndex, n, o.attributes, !0),
        (o.attributes = n),
        n[this._objectIdField] == null && (o.objectId = n[this._objectIdField] = u++);
    }
    return i;
  }
}
function* J(r, t, e) {
  for (let a = 0; a < t; a++) yield r._pageQuery(a, e);
}
async function v(r, t, e) {
  let a = r.next();
  for (; !a.done; ) {
    try {
      const s = await a.value;
      t.push(...s);
    } catch (s) {
      w(s) || e.push(s);
    }
    a = r.next();
  }
}
function C(r) {
  const t = [];
  return (
    r.totalRecordCount != null &&
      (r.features.length < r.totalRecordCount &&
        t.push({
          name: 'wfs-layer:maxRecordCount-too-low',
          message: `Could only fetch ${r.features.length} of ${r.totalRecordCount} in ${r.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,
          details: { recordCount: r.features.length, totalRecordCount: r.totalRecordCount },
        }),
      r.totalRecordCount > r.maxTotalRecordCount &&
        t.push({
          name: 'wfs-layer:large-dataset',
          message: `The number of ${r.totalRecordCount} features exceeds the maximum allowed of ${r.maxTotalRecordCount}.`,
          details: {
            recordCount: r.features.length,
            totalRecordCount: r.totalRecordCount,
            maxTotalRecordCount: r.maxTotalRecordCount,
          },
        })),
    t
  );
}
export { ft as default };
