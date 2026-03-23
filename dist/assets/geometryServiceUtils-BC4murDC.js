import { y as s, a7 as l, aZ as c, eS as g, eT as m } from './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
async function u(e = null, o) {
  var n, a;
  if (s.geometryServiceUrl) return s.geometryServiceUrl;
  if (!e) throw new l('internal:geometry-service-url-not-configured');
  let r;
  (r = 'portal' in e ? e.portal || c.getDefault() : e), await r.load({ signal: o });
  const t = (a = (n = r.helperServices) == null ? void 0 : n.geometry) == null ? void 0 : a.url;
  if (!t) throw new l('internal:geometry-service-url-not-configured');
  return t;
}
async function w(e, o, r = null, t) {
  const n = await u(r, t),
    a = new g({ geometries: [e], outSpatialReference: o }),
    i = await m(n, a, { signal: t });
  if (i && Array.isArray(i) && i.length === 1) return i[0];
  throw new l('internal:geometry-service-projection-failed');
}
export { u as getGeometryServiceURL, w as projectGeometry };
