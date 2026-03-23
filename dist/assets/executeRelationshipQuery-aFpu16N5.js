import { f_ as j, P as R, d9 as m, jo as l, en as y, cs as p } from './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
function F(r, t) {
  const e = r.toJSON();
  return (
    e.objectIds && (e.objectIds = e.objectIds.join(',')),
    e.orderByFields && (e.orderByFields = e.orderByFields.join(',')),
    e.outFields && !(t != null && t.returnCountOnly)
      ? e.outFields.includes('*')
        ? (e.outFields = '*')
        : (e.outFields = e.outFields.join(','))
      : delete e.outFields,
    e.outSR && (e.outSR = m(e.outSR)),
    e.dynamicDataSource &&
      ((e.layer = JSON.stringify({ source: e.dynamicDataSource })), delete e.dynamicDataSource),
    e
  );
}
async function b(r, t, e) {
  const n = await f(r, t, e),
    o = n.data,
    a = o.geometryType,
    s = o.spatialReference,
    c = {};
  for (const d of o.relatedRecordGroups) {
    const u = {
      fields: void 0,
      objectIdFieldName: void 0,
      geometryType: a,
      spatialReference: s,
      hasZ: !!o.hasZ,
      hasM: !!o.hasM,
      features: d.relatedRecords,
    };
    if (d.objectId != null) c[d.objectId] = u;
    else for (const i of Object.keys(d)) i !== 'relatedRecords' && (c[d[i]] = u);
  }
  return { ...n, data: c };
}
async function h(r, t, e) {
  const n = await f(r, t, e, { returnCountOnly: !0 }),
    o = n.data,
    a = {};
  for (const s of o.relatedRecordGroups) s.objectId != null && (a[s.objectId] = s.count);
  return { ...n, data: a };
}
async function f(r, t, e = {}, n) {
  const o = j({ ...r.query, f: 'json', ...n, ...F(t, n) });
  return R(r.path + '/queryRelatedRecords', { ...e, query: { ...e.query, ...o } });
}
async function O(r, t, e) {
  t = l.from(t);
  const n = y(r);
  return b(n, t, e).then((o) => {
    const a = o.data,
      s = {};
    return Object.keys(a).forEach((c) => (s[c] = p.fromJSON(a[c]))), s;
  });
}
async function q(r, t, e) {
  t = l.from(t);
  const n = y(r);
  return h(n, t, { ...e }).then((o) => o.data);
}
export { O as executeRelationshipQuery, q as executeRelationshipQueryForCount };
