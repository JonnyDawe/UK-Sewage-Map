import { fM as I, ap as S, bs as T, bj as h, h as w } from './index.lazy-BHTpPf8X.js';
import { B as j, x as v, j as g } from './queryUtils-BQJHb1Wr.js';
import { c as M, C as Q, V as q } from './QueryEngine-mREQOvCF.js';
import { I as E } from './timeSupport-C377IZe7.js';
async function C(e, i, u) {
  const a = I(u),
    { point: t, distance: n, returnEdge: f, vertexMode: o } = i;
  if (!f && o === 'none') return { candidates: [] };
  let s = S(i.query);
  (s = await e.schedule(() => j(s, e.definitionExpression, e.spatialReference), a)),
    (s = await e.reschedule(
      () =>
        M(s, {
          availableFields: e.availableFields,
          fieldsIndex: e.fieldsIndex,
          geometryType: e.geometryType,
          spatialReference: e.spatialReference,
        }),
      a,
    ));
  const p = !T(t.spatialReference, e.spatialReference);
  p && (await v(t.spatialReference, e.spatialReference));
  const m = typeof n == 'number' ? n : n.x,
    d = typeof n == 'number' ? n : n.y,
    y = {
      xmin: t.x - m,
      xmax: t.x + m,
      ymin: t.y - d,
      ymax: t.y + d,
      spatialReference: t.spatialReference,
    },
    r = p ? g(y, e.spatialReference) : y;
  if (!r) return { candidates: [] };
  const x = (await h(w(t), null, { signal: a }))[0],
    c = (await h(w(r), null, { signal: a }))[0];
  if (x == null || c == null) return { candidates: [] };
  const l = new Q(await e.reschedule(() => e.searchFeatures(q(c.toJSON())), a), s, e);
  await e.reschedule(() => e.executeObjectIdsQuery(l), a),
    await e.reschedule(() => e.executeTimeQuery(l), a),
    await e.reschedule(() => e.executeAttributesQuery(l), a),
    await e.reschedule(() => O(e, l, a), a);
  const R = x.toJSON(),
    b = p ? g(R, e.spatialReference) : R,
    F = p ? Math.max(r.xmax - r.xmin, r.ymax - r.ymin) / 2 : n;
  return l.createSnappingResponse({ ...i, point: b, distance: F }, t.spatialReference);
}
async function O(e, i, u) {
  var o;
  const { query: a } = i,
    { spatialRel: t } = a;
  if (!((o = i == null ? void 0 : i.items) != null && o.length) || !a.geometry || !t) return;
  const n = await E(t, a.geometry, e.geometryType, e.hasZ, e.hasM),
    f = await e.runSpatialFilter(i.items, (s) => n(s.geometry), u);
  i.items = f;
}
export { C as u };
