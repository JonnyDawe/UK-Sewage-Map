const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/knowledgeGraphService-DT4x32j1.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/networkEnums-BPK_eLv5.js',
      'assets/GPMessage-Ca3itvIO.js',
      'assets/Path-C328oXXQ.js',
    ]),
) => i.map((i) => d[i]);
import { _ as G } from './index-DqxZnyqH.js';
import {
  aZ as b,
  g9 as y,
  gc as _,
  aY as K,
  fT as q,
  gb as x,
  eR as j,
  y as J,
  bS as M,
  bT as N,
  bR as O,
  W as I,
  eS as U,
  eT as V,
  gi as Q,
  gj as L,
} from './index.lazy-BHTpPf8X.js';
import {
  u as P,
  O as z,
  y as W,
  a6 as B,
  M as X,
  C as k,
  J as Y,
  K as D,
  F as Z,
  z as H,
  a7 as $,
  U as A,
} from './arcade-Cy3NLj9n.js';
import { a as u, r as l } from './unitConversion-C4eA5kB7.js';
import { l as tt } from './portalUtils-MzUBtkBy.js';
import { c as nt, t as et, p as at, a as rt } from './Path-C328oXXQ.js';
import { p as it } from './GraphQueryStreaming-Bej1Bhys.js';
import './ImmutableArray-BPVd6ESQ.js';
import './number-mfVjrx65.js';
import './featureConversionUtils-VaE6vOn5.js';
import './WhereClause-DynWr3o5.js';
let f = null;
async function ot(t) {
  const n = J.geometryServiceUrl ?? '';
  if (!n) {
    M() || (await N());
    for (const e of t) e.container[e.indexer] = O(e.container[e.indexer], I.WGS84);
    return;
  }
  const a = t.map((e) => e.container[e.indexer]),
    i = new U({ geometries: a, outSpatialReference: I.WGS84 }),
    s = await V(n, i);
  for (let e = 0; e < s.length; e++) {
    const r = t[e];
    r.container[r.indexer] = s[e];
  }
}
async function F(t, n) {
  const a = new K({ portal: t, id: n });
  return (
    await a.load(),
    f === null &&
      (f = await G(
        () => import('./knowledgeGraphService-DT4x32j1.js').then((i) => i.k),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      )),
    await f.fetchKnowledgeGraph(a.url)
  );
}
function v(t, n, a, i, s) {
  if (t === null) return null;
  if (y(t) || q(t)) return t;
  if (D(t) || D(t)) return t.toJSDate();
  if (Z(t)) return t.toStorageFormat();
  if (H(t)) return t.toStorageString();
  if ($(t)) {
    const e = {};
    for (const r of t.keys())
      (e[r] = v(t.field(r), n, a, i, s)), e[r] instanceof x && s.push({ container: e, indexer: r });
    return e;
  }
  if (_(t)) {
    const e = t.map((r) => v(r, n, a, i, s));
    for (let r = 0; r < e.length; r++) e[r] instanceof x && s.push({ container: e, indexer: r });
    return e;
  }
  return A(t)
    ? t.spatialReference.isWGS84
      ? t
      : t.spatialReference.isWebMercator && n
        ? j(t)
        : t
    : void 0;
}
function st(t, n) {
  if (!t) return t;
  if (t.spatialReference.isWGS84 && n.spatialReference.isWebMercator) return L(t);
  if (t.spatialReference.equals(n.spatialReference)) return t;
  throw new u(n, l.WrongSpatialReference, null);
}
function R(t, n) {
  if (!t) return null;
  const a = {};
  for (const i in t) a[i] = g(t[i], n);
  return a;
}
function g(t, n) {
  return t === null
    ? null
    : _(t)
      ? t.map((a) => g(a, n))
      : t instanceof nt
        ? {
            graphTypeName: t.typeName,
            id: t.id,
            graphType: 'entity',
            properties: R(t.properties, n),
          }
        : t instanceof et
          ? { graphType: 'object', properties: R(t.properties, n) }
          : t instanceof at
            ? {
                graphTypeName: t.typeName,
                id: t.id,
                graphType: 'relationship',
                originId: t.originId ?? null,
                destinationId: t.destinationId ?? null,
                properties: R(t.properties, n),
              }
            : t instanceof rt
              ? { graphType: 'path', path: t.path ? t.path.map((a) => g(a, n)) : null }
              : A(t)
                ? st(t, n)
                : y(t) || q(t) || Q(t)
                  ? t
                  : null;
}
function St(t) {
  t.mode === 'async' &&
    ((t.functions.knowledgegraphbyportalitem = function (n, a) {
      return t.standardFunctionAsync(n, a, (i, s, e) => {
        var m, d;
        if ((P(e, 2, 2, n, a), e[0] === null)) throw new u(n, l.PortalRequired, a);
        if (e[0] instanceof z) {
          const p = W(e[1]);
          let h;
          return (
            (h = (m = n.services) != null && m.portal ? n.services.portal : b.getDefault()),
            F(tt(e[0], h), p)
          );
        }
        if (y(e[0]) === !1) throw new u(n, l.InvalidParameter, a);
        const r = W(e[0]);
        return F(((d = n.services) == null ? void 0 : d.portal) ?? b.getDefault(), r);
      });
    }),
    t.signatures.push({ name: 'knowledgegraphbyportalitem', min: 2, max: 2 }),
    (t.functions.querygraph = function (n, a) {
      return t.standardFunctionAsync(n, a, async (i, s, e) => {
        var T;
        P(e, 2, 4, n, a);
        const r = e[0];
        if (!B(r)) throw new u(n, l.InvalidParameter, a);
        const m = e[1];
        if (!y(m)) throw new u(n, l.InvalidParameter, a);
        f === null &&
          (f = await G(
            () => import('./knowledgeGraphService-DT4x32j1.js').then((o) => o.k),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
          ));
        let d = null;
        const p = X(e[2], null);
        if (!(p instanceof k || p === null)) throw new u(n, l.InvalidParameter, a);
        if (p) {
          let o = [];
          (d = v(p, !0, !1, n, o)),
            (o = o.filter((c) => !c.container[c.indexer].spatialReference.isWGS84)),
            o.length > 0 && (await ot(o));
        }
        const h = new it({ openCypherQuery: m, bindParameters: d });
        (((T = r == null ? void 0 : r.serviceDefinition) == null ? void 0 : T.currentVersion) ??
          11.3) > 11.2 && (h.outputSpatialReference = n.spatialReference);
        const C = (await f.executeQueryStreaming(r, h)).resultRowsStream.getReader(),
          S = [];
        try {
          for (;;) {
            const { done: o, value: c } = await C.read();
            if (o) break;
            if (_(c)) for (const w of c) S.push(g(w, n));
            else {
              const w = [];
              for (const E of c) w.push(g(c[E], n));
              S.push(w);
            }
          }
        } catch (o) {
          throw o;
        }
        return k.convertJsonToArcade(S, Y(n), !1, !0);
      });
    }),
    t.signatures.push({ name: 'querygraph', min: 2, max: 4 }));
}
export { St as registerFunctions };
