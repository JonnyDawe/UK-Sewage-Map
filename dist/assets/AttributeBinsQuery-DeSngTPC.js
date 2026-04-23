import {
  bF as l,
  aj as u,
  e6 as d,
  a8 as y,
  be as m,
  A as t,
  B as o,
  b2 as r,
  W as a,
  h as c,
  e7 as h,
  e8 as v,
  e9 as w,
  db as b,
  R as f,
  ea as j,
} from './index.lazy-BFilFZ3v.js';
import { g as n } from './queryUtils-DePK7lxY.js';
import { c as g, m as S, u as R, a as T, b as $ } from './FixedIntervalBinParameters-CKl391iV.js';
import './index-DShQM7Xx.js';
import './json-Wa8cmqdu.js';
const B = new m({ asc: 'ascending', desc: 'descending' }),
  A = {
    base: $,
    key: 'type',
    typeMap: { 'auto-interval': T, date: R, 'fixed-boundaries': S, 'fixed-interval': g },
  };
let e = class extends l.ClonableMixin(u) {
  constructor(i) {
    super(i),
      (this.binParameters = null),
      (this.binOrder = 'ascending'),
      (this.cacheHint = void 0),
      (this.datumTransformation = null),
      (this.defaultSpatialReference = null),
      (this.distance = void 0),
      (this.geometry = null),
      (this.lowerBoundaryAlias = null),
      (this.outSpatialReference = null),
      (this.outStatistics = null),
      (this.returnDistinctValues = null),
      (this.spatialRelationship = 'intersects'),
      (this.timeExtent = null),
      (this.upperBoundaryAlias = null),
      (this.units = null),
      (this.where = '1=1');
  }
  set outTimeZone(i) {
    this._set('outTimeZone', i),
      i &&
        !d(i) &&
        y
          .getLogger(this)
          .warn('#outTimeZone', `the parsed value '${i}' may not be a valid IANA time zone`);
  }
};
t([o({ types: A, json: { name: 'bin', write: !0 } })], e.prototype, 'binParameters', void 0),
  t([r(B)], e.prototype, 'binOrder', void 0),
  t([o({ type: Boolean, json: { write: !0 } })], e.prototype, 'cacheHint', void 0),
  t([o({ json: { write: !0 } })], e.prototype, 'datumTransformation', void 0),
  t(
    [o({ type: a, json: { name: 'defaultSR', write: !0 } })],
    e.prototype,
    'defaultSpatialReference',
    void 0,
  ),
  t(
    [o({ type: Number, json: { write: { overridePolicy: (i) => ({ enabled: i > 0 }) } } })],
    e.prototype,
    'distance',
    void 0,
  ),
  t([o({ types: h, json: { read: c, write: !0 } })], e.prototype, 'geometry', void 0),
  t([o({ type: String, json: { write: !0 } })], e.prototype, 'lowerBoundaryAlias', void 0),
  t(
    [o({ type: a, json: { name: 'outSR', write: !0 } })],
    e.prototype,
    'outSpatialReference',
    void 0,
  ),
  t(
    [
      o({
        type: [v],
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return { enabled: this.outStatistics != null && this.outStatistics.length > 0 };
            },
          },
        },
      }),
    ],
    e.prototype,
    'outStatistics',
    void 0,
  ),
  t(
    [
      o({
        value: null,
        json: {
          name: 'outTimeReference',
          read: { reader: (i) => i.ianaTimeZone },
          write: {
            writer: (i, s, p) => {
              i && (s[p] = { ianaTimeZone: i });
            },
          },
        },
      }),
    ],
    e.prototype,
    'outTimeZone',
    null,
  ),
  t([o({ type: Boolean, json: { write: !0 } })], e.prototype, 'returnDistinctValues', void 0),
  t([r(w, { name: 'spatialRel' })], e.prototype, 'spatialRelationship', void 0),
  t([o({ type: b, json: { write: !0 } })], e.prototype, 'timeExtent', void 0),
  t([o({ type: String, json: { write: !0 } })], e.prototype, 'upperBoundaryAlias', void 0),
  t(
    [
      o({
        type: String,
        json: {
          read: n.read,
          write: {
            writer: n.write,
            overridePolicy(i) {
              return { enabled: i != null && this.distance != null };
            },
          },
        },
      }),
    ],
    e.prototype,
    'units',
    void 0,
  ),
  t([o({ type: String, json: { write: !0 } })], e.prototype, 'where', void 0),
  (e = t([f('esri.rest.support.AttributeBinsQuery')], e));
const H = e;
e.from = j(e);
export { H as default };
