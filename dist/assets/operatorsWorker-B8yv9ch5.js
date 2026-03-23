const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/disjointOperator-D0uJ1cEg.js',
      'assets/ProjectionTransformation-DO3Gv-47.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BHTpPf8X.js',
      'assets/index-DqxZnyqH.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/jsonConverter-kXdRGJAn.js',
      'assets/intersectsOperator-DYtekBvS.js',
      'assets/OperatorIntersects-CsrmV5js.js',
      'assets/touchesOperator-Don_izbz.js',
      'assets/OperatorTouches-R2Thm4g6.js',
      'assets/crossesOperator-Cb92fgt0.js',
      'assets/OperatorCrosses-pDriAxY1.js',
      'assets/withinOperator-hxgtnkci.js',
      'assets/OperatorWithin-B3evWj5I.js',
      'assets/containsOperator-I1S3OKwv.js',
      'assets/overlapsOperator-CTxt1H3m.js',
      'assets/OperatorOverlaps-HF4Qao06.js',
      'assets/equalsOperator-B0FQOTn6.js',
      'assets/apiConverter-Dm_24RD5.js',
      'assets/relateOperator-C9Hn_-dM.js',
      'assets/intersectionOperator-NiGgFCo9.js',
      'assets/operatorIntersection-BtbFFy6m.js',
      'assets/unionOperator-C8t3xUM0.js',
      'assets/operatorUnion-Bu6hZMxu.js',
      'assets/differenceOperator-BbqvLoQJ.js',
      'assets/symmetricDifferenceOperator-BI-0FVTq.js',
      'assets/clipOperator-B2w1xEci.js',
      'assets/cutOperator-BMO98Zex.js',
      'assets/areaOperator-BN4hRQzc.js',
      'assets/unitConversion-C4eA5kB7.js',
      'assets/geodeticAreaOperator-FqCaCI7k.js',
      'assets/geodeticCurveType-CirnHLSB.js',
      'assets/lengthOperator-Or5v9awC.js',
      'assets/geodeticLengthOperator-BwUUkHRL.js',
      'assets/distanceOperator-yohXhHPI.js',
      'assets/densifyOperator-D2FBkJvc.js',
      'assets/geodeticDensifyOperator-DI6lMp64.js',
      'assets/operatorGeodeticDensify-C_6Mtlou.js',
      'assets/generalizeOperator-2va1Ujlw.js',
      'assets/OperatorGeneralize-BakAlj2i.js',
      'assets/bufferOperator-CgdnI-Lr.js',
      'assets/operatorBuffer-Jc2YoKAs.js',
      'assets/GeometryCleaner-BEJM7I4l-BHcstiW-.js',
      'assets/geodesicBufferOperator-DqN3eU72.js',
      'assets/operatorGeodesicBuffer-DX7y1HPL.js',
      'assets/offsetOperator-BoQU-695.js',
      'assets/operatorOffset-hvDmN3h3.js',
      'assets/affineTransformOperator-D9i6l6p3.js',
      'assets/Transformation-24g8v2l8.js',
      'assets/centroidOperator-BdD-760q.js',
      'assets/Centroid-DZi-eb9F-C125OHYY.js',
      'assets/labelPointOperator-DswOXe7V.js',
      'assets/OperatorProximity-D9PsRk7y.js',
      'assets/simplifyOperator-BkgownDA.js',
      'assets/operatorSimplify-BC_thSEM.js',
      'assets/convexHullOperator-CooSe-l3.js',
      'assets/operatorConvexHull-BhJ39CvM.js',
      'assets/proximityOperator-CoUv5t0O.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './index-DqxZnyqH.js';
import { h as c } from './index.lazy-BHTpPf8X.js';
function _(t, e) {
  let i;
  return {
    loaded: !1,
    load: () =>
      i ??
      (i = e().then((n) => {
        E[t] = { loaded: !0, execute: n };
      })),
  };
}
function s(t) {
  return t == null ? null : t.toJSON();
}
const E = {
  disjoint: _('disjoint', () =>
    a(
      () => import('./disjointOperator-D0uJ1cEg.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  intersects: _('intersects', () =>
    a(
      () => import('./intersectsOperator-DYtekBvS.js'),
      __vite__mapDeps([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  touches: _('touches', () =>
    a(
      () => import('./touchesOperator-Don_izbz.js'),
      __vite__mapDeps([11, 12, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  crosses: _('crosses', () =>
    a(
      () => import('./crossesOperator-Cb92fgt0.js'),
      __vite__mapDeps([13, 14, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  within: _('within', () =>
    a(
      () => import('./withinOperator-hxgtnkci.js'),
      __vite__mapDeps([15, 16, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  contains: _('contains', () =>
    a(
      () => import('./containsOperator-I1S3OKwv.js'),
      __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  overlaps: _('overlaps', () =>
    a(
      () => import('./overlapsOperator-CTxt1H3m.js'),
      __vite__mapDeps([18, 19, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  equals: _('equals', async () => {
    const t = await a(
      () => import('./equalsOperator-B0FQOTn6.js').then((e) => e.e),
      __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 21, 8]),
    );
    return (e, i) => t.execute(c(e), c(i));
  }),
  relate: _('relate', async () => {
    const t = await a(
      () => import('./relateOperator-C9Hn_-dM.js').then((e) => e.r),
      __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 7, 21, 8]),
    );
    return (e, i, n) => t.execute(c(e), c(i), n);
  }),
  intersection: _('intersection', () =>
    a(
      () => import('./intersectionOperator-NiGgFCo9.js'),
      __vite__mapDeps([23, 4, 5, 6, 7, 24, 3, 2, 1, 8]),
    ).then((t) => t.execute),
  ),
  union: _('union', () =>
    a(
      () => import('./unionOperator-C8t3xUM0.js'),
      __vite__mapDeps([25, 26, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.executeMany),
  ),
  difference: _('difference', async () => {
    const t = await a(
      () => import('./differenceOperator-BbqvLoQJ.js').then((e) => e.d),
      __vite__mapDeps([27, 2, 1, 3, 4, 5, 6, 7, 8, 21]),
    );
    return (e, i) => s(t.execute(c(e), c(i)));
  }),
  symmetricDifference: _('symmetricDifference', async () => {
    const t = await a(
      () => import('./symmetricDifferenceOperator-BI-0FVTq.js').then((e) => e.s),
      __vite__mapDeps([28, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
    );
    return (e, i) => s(t.execute(c(e), c(i)));
  }),
  clip: _('clip', async () => {
    const t = await a(
      () => import('./clipOperator-B2w1xEci.js').then((e) => e.c),
      __vite__mapDeps([29, 2, 1, 3, 4, 5, 6, 7, 8, 21]),
    );
    return (e, i) => s(t.execute(c(e), c(i)));
  }),
  cut: _('cut', async () => {
    const t = await a(
      () => import('./cutOperator-BMO98Zex.js').then((e) => e.c),
      __vite__mapDeps([30, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
    );
    return (e, i) => t.execute(c(e), c(i)).map((n) => s(n));
  }),
  area: _('area', async () => {
    const t = await a(
        () => import('./areaOperator-BN4hRQzc.js').then((n) => n.a),
        __vite__mapDeps([31, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
      ),
      { convertFromSpatialReferenceUnit: e, toAreaUnit: i } = await a(
        async () => {
          const { convertFromSpatialReferenceUnit: n, toAreaUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertFromSpatialReferenceUnit: n, toAreaUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r) => {
      const o = t.execute(c(n));
      return e(n.spatialReference, i(r), o);
    };
  }),
  geodeticArea: _('geodeticArea', async () => {
    const t = await a(
        () => import('./geodeticAreaOperator-FqCaCI7k.js').then((r) => r.g),
        __vite__mapDeps([33, 4, 5, 6, 7, 34]),
      ),
      {
        convert: e,
        squareMeters: i,
        toAreaUnit: n,
      } = await a(
        async () => {
          const {
            convert: r,
            squareMeters: o,
            toAreaUnit: u,
          } = await import('./unitConversion-C4eA5kB7.js').then((p) => p.e);
          return { convert: r, squareMeters: o, toAreaUnit: u };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (
      await t.load(),
      (r, o) => {
        const u = t.execute(c(r));
        return e(i, n(o), u);
      }
    );
  }),
  length: _('length', async () => {
    const t = await a(
        () => import('./lengthOperator-Or5v9awC.js'),
        __vite__mapDeps([35, 4, 5, 6, 7, 8, 2, 1, 3]),
      ),
      { convertFromSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertFromSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertFromSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r) => {
      const o = t.execute(n);
      return e(n.spatialReference, i(r), o);
    };
  }),
  geodeticLength: _('geodeticLength', async () => {
    const t = await a(
        () => import('./geodeticLengthOperator-BwUUkHRL.js').then((r) => r.g),
        __vite__mapDeps([36, 4, 5, 6, 7, 34]),
      ),
      {
        convert: e,
        meters: i,
        toLengthUnit: n,
      } = await a(
        async () => {
          const {
            convert: r,
            meters: o,
            toLengthUnit: u,
          } = await import('./unitConversion-C4eA5kB7.js').then((p) => p.e);
          return { convert: r, meters: o, toLengthUnit: u };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (
      await t.load(),
      (r, o) => {
        const u = t.execute(c(r));
        return e(i, n(o), u);
      }
    );
  }),
  distance: _('distance', async () => {
    const t = await a(
        () => import('./distanceOperator-yohXhHPI.js').then((n) => n.d),
        __vite__mapDeps([37, 2, 4, 5, 6, 7, 1, 3, 21, 8]),
      ),
      { convertFromSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertFromSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertFromSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o) => {
      const u = t.execute(c(n), c(r));
      return e(n.spatialReference, i(o), u);
    };
  }),
  densify: _('densify', async () => {
    const t = await a(
        () => import('./densifyOperator-D2FBkJvc.js').then((n) => n.d),
        __vite__mapDeps([38, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o) => ((r = e(i(o), n.spatialReference, r)), s(t.execute(c(n), r)));
  }),
  geodeticDensify: _('geodeticDensify', async () => {
    const t = await a(
        () => import('./geodeticDensifyOperator-DI6lMp64.js').then((r) => r.a),
        __vite__mapDeps([39, 4, 5, 6, 7, 40, 3, 34]),
      ),
      {
        convert: e,
        meters: i,
        toLengthUnit: n,
      } = await a(
        async () => {
          const {
            convert: r,
            meters: o,
            toLengthUnit: u,
          } = await import('./unitConversion-C4eA5kB7.js').then((p) => p.e);
          return { convert: r, meters: o, toLengthUnit: u };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return await t.load(), (r, o, u) => ((o = e(n(u), i, o)), s(t.execute(c(r), o)));
  }),
  generalize: _('generalize', async () => {
    const t = await a(
        () => import('./generalizeOperator-2va1Ujlw.js').then((n) => n.g),
        __vite__mapDeps([41, 4, 5, 6, 7, 2, 1, 3, 8, 42, 21]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o, u) => ((r = e(i(o), n.spatialReference, r)), s(t.execute(c(n), r, u)));
  }),
  buffer: _('buffer', async () => {
    const t = await a(
        () => import('./bufferOperator-CgdnI-Lr.js'),
        __vite__mapDeps([43, 4, 5, 6, 7, 44, 3, 2, 1, 45, 42, 8]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o) => ((r = e(i(o), n.spatialReference, r)), t.execute(n, r));
  }),
  geodesicBuffer: _('geodesicBuffer', async () => {
    const t = await a(
        () => import('./geodesicBufferOperator-DqN3eU72.js'),
        __vite__mapDeps([46, 5, 6, 4, 7, 47, 3, 34]),
      ),
      {
        convert: e,
        meters: i,
        toLengthUnit: n,
      } = await a(
        async () => {
          const {
            convert: r,
            meters: o,
            toLengthUnit: u,
          } = await import('./unitConversion-C4eA5kB7.js').then((p) => p.e);
          return { convert: r, meters: o, toLengthUnit: u };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return await t.load(), (r, o, u) => ((o = e(n(u), i, o)), t.execute(r, o));
  }),
  offset: _('offset', async () => {
    const t = await a(
        () => import('./offsetOperator-BoQU-695.js'),
        __vite__mapDeps([48, 4, 5, 6, 7, 49, 3, 1, 2, 8]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-C4eA5kB7.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o, u) => ((r = e(i(o), n.spatialReference, r)), t.execute(n, r, u));
  }),
  rotate: _('rotate', async () => {
    const t = await a(
        () => import('./affineTransformOperator-D9i6l6p3.js'),
        __vite__mapDeps([50, 4, 5, 6, 7, 3, 2, 21, 1, 8]),
      ),
      { default: e } = await a(
        async () => {
          const { default: i } = await import('./Transformation-24g8v2l8.js');
          return { default: i };
        },
        __vite__mapDeps([51, 2, 4, 5, 6, 7]),
      );
    return (i, n, r, o) => {
      const u = new e().rotate(n, r, o);
      return s(t.execute(c(i), u));
    };
  }),
  centroid: _('centroid', async () => {
    const t = await a(
      () => import('./centroidOperator-BdD-760q.js').then((e) => e.c),
      __vite__mapDeps([52, 53, 2, 21, 1, 3, 4, 5, 6, 7, 8]),
    );
    return (e) => s(t.execute(c(e)));
  }),
  labelPoint: _('labelPoint', async () => {
    const t = await a(
      () => import('./labelPointOperator-DswOXe7V.js').then((e) => e.l),
      __vite__mapDeps([54, 2, 1, 3, 4, 5, 6, 7, 8, 53, 55, 21]),
    );
    return (e) => s(t.execute(c(e)));
  }),
  simplify: _('simplify', () =>
    a(
      () => import('./simplifyOperator-BkgownDA.js'),
      __vite__mapDeps([56, 57, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  isSimple: _('isSimple', () =>
    a(
      () => import('./simplifyOperator-BkgownDA.js'),
      __vite__mapDeps([56, 57, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.isSimple),
  ),
  convexHull: _('convexHull', () =>
    a(
      () => import('./convexHullOperator-CooSe-l3.js'),
      __vite__mapDeps([58, 59, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  getNearestCoordinate: _('getNearestCoordinate', async () => {
    const t = await a(
      () => import('./proximityOperator-CoUv5t0O.js').then((e) => e.p),
      __vite__mapDeps([60, 2, 1, 3, 4, 5, 6, 7, 8, 55, 21]),
    );
    return (e, i, n) => {
      const r = t.getNearestCoordinate(c(e), c(i), n);
      return { ...r, coordinate: s(r.coordinate) };
    };
  }),
  getNearestVertex: _('getNearestVertex', async () => {
    const t = await a(
      () => import('./proximityOperator-CoUv5t0O.js').then((e) => e.p),
      __vite__mapDeps([60, 2, 1, 3, 4, 5, 6, 7, 8, 55, 21]),
    );
    return (e, i) => {
      const n = t.getNearestVertex(c(e), c(i));
      return { ...n, coordinate: s(n.coordinate) };
    };
  }),
};
function d(t, e) {
  const i = E[t];
  return i.loaded ? i.execute.apply(void 0, e) : i.load().then(() => d(t, e));
}
export { d as invokeGeometryOp };
