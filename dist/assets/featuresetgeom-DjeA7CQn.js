import { a as u, r as c } from './unitConversion-B9NexLEg.js';
import { gg as d } from './index.lazy-BFilFZ3v.js';
import { T as O, u as J, U as i, y as m, B as l } from './arcade-BYupZNCK.js';
import { u as f, l as w } from './SpatialFilter-DRv1yMiJ.js';
import { a } from './operatorsWorkerConnection-DEba2fGp.js';
import './index-DShQM7Xx.js';
import './ImmutableArray-BPVd6ESQ.js';
import './number-DhAHC4zg.js';
import './featureConversionUtils-GdT3zBJg.js';
import './WhereClause-CwCHdxIr.js';
function o(s) {
  return async (n, r, e) => {
    if ((J(e, 2, 2, n, r), (e = O(e))[0] === null && e[1] === null)) return !1;
    if (l(e[0])) {
      if (i(e[1])) return new w({ parentfeatureset: e[0], relation: s, relationGeom: e[1] });
      if (e[1] === null) return new f({ parentfeatureset: e[0] });
      throw new u(n, c.InvalidParameter, r);
    }
    if (i(e[0])) {
      if (i(e[1])) {
        switch (s) {
          case 'esriSpatialRelEnvelopeIntersects': {
            const p = d(e[0]),
              t = d(e[1]);
            return p != null && t != null && a('intersects', [p.toJSON(), t.toJSON()]);
          }
          case 'esriSpatialRelIntersects':
            return a('intersects', [e[0].toJSON(), e[1].toJSON()]);
          case 'esriSpatialRelContains':
            return a('contains', [e[0].toJSON(), e[1].toJSON()]);
          case 'esriSpatialRelOverlaps':
            return a('overlaps', [e[0].toJSON(), e[1].toJSON()]);
          case 'esriSpatialRelWithin':
            return a('within', [e[0].toJSON(), e[1].toJSON()]);
          case 'esriSpatialRelTouches':
            return a('touches', [e[0].toJSON(), e[1].toJSON()]);
          case 'esriSpatialRelCrosses':
            return a('crosses', [e[0].toJSON(), e[1].toJSON()]);
        }
        throw new u(n, c.InvalidParameter, r);
      }
      if (l(e[1])) return new w({ parentfeatureset: e[1], relation: s, relationGeom: e[0] });
      if (e[1] === null) return !1;
      throw new u(n, c.InvalidParameter, r);
    }
    if (e[0] === null) {
      if (l(e[1])) return new f({ parentfeatureset: e[1] });
      if (i(e[1]) || e[1] === null) return !1;
    }
    throw new u(n, c.InvalidParameter, r);
  };
}
function C(s) {
  s.mode === 'async' &&
    ((s.functions.intersects = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelIntersects'));
    }),
    (s.functions.envelopeintersects = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelEnvelopeIntersects'));
    }),
    s.signatures.push({ name: 'envelopeintersects', min: 2, max: 2 }),
    (s.functions.contains = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelContains'));
    }),
    (s.functions.overlaps = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelOverlaps'));
    }),
    (s.functions.within = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelWithin'));
    }),
    (s.functions.touches = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelTouches'));
    }),
    (s.functions.crosses = function (n, r) {
      return s.standardFunctionAsync(n, r, o('esriSpatialRelCrosses'));
    }),
    (s.functions.relate = function (n, r) {
      return s.standardFunctionAsync(n, r, async (e, p, t) => {
        if (((t = O(t)), J(t, 3, 3, n, r), i(t[0]) && i(t[1])))
          return a('relate', [t[0].toJSON(), t[1].toJSON(), m(t[2])]);
        if ((i(t[0]) && t[1] === null) || (i(t[1]) && t[0] === null)) return !1;
        if (l(t[0]) && t[1] === null) return new f({ parentfeatureset: t[0] });
        if (l(t[1]) && t[0] === null) return new f({ parentfeatureset: t[1] });
        if (l(t[0]) && i(t[1])) return t[0].relate(t[1], m(t[2]));
        if (l(t[1]) && i(t[0])) return t[1].relate(t[0], m(t[2]));
        if (t[0] === null && t[1] === null) return !1;
        throw new u(n, c.InvalidParameter, r);
      });
    }));
}
export { C as registerFunctions };
