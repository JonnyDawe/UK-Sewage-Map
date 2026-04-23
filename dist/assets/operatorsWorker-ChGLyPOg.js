const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/disjointOperator-DWWhnELm.js',
      'assets/ProjectionTransformation-Cq_-pOos.js',
      'assets/Transformation2D-Bb72B6CZ.js',
      'assets/SimpleGeometryCursor-B92kdZ15.js',
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/jsonConverter-DC7TwnBw.js',
      'assets/intersectsOperator-BzfgqYk8.js',
      'assets/OperatorIntersects-CMM0rkAf.js',
      'assets/touchesOperator-ChwLpC72.js',
      'assets/OperatorTouches-7ReCoj68.js',
      'assets/crossesOperator-DS1zlM-H.js',
      'assets/OperatorCrosses-CNDoPNHq.js',
      'assets/withinOperator-DXp68ZuP.js',
      'assets/OperatorWithin-CdWK5fUi.js',
      'assets/containsOperator-Cam0DK9p.js',
      'assets/overlapsOperator-CbuFiJ21.js',
      'assets/OperatorOverlaps-x4Lh2dpk.js',
      'assets/equalsOperator-CURi6xjQ.js',
      'assets/apiConverter-BgKw0xnw.js',
      'assets/relateOperator-DorNjG3I.js',
      'assets/intersectionOperator-XT5lKxPM.js',
      'assets/operatorIntersection-Dod0SDIQ.js',
      'assets/unionOperator-Cxxt5Upp.js',
      'assets/operatorUnion-BJSWo6dj.js',
      'assets/differenceOperator-BdLDF5F8.js',
      'assets/symmetricDifferenceOperator-CAA-zjRV.js',
      'assets/clipOperator-D3RHfzv0.js',
      'assets/cutOperator-B5OqypEB.js',
      'assets/areaOperator-CzFebgHD.js',
      'assets/unitConversion-B9NexLEg.js',
      'assets/geodeticAreaOperator-CNngGhsV.js',
      'assets/geodeticCurveType-CirnHLSB.js',
      'assets/lengthOperator-D-6L-XpP.js',
      'assets/geodeticLengthOperator-DwgM6aU8.js',
      'assets/distanceOperator-CY5SN3Ti.js',
      'assets/densifyOperator-CM0dPtg4.js',
      'assets/geodeticDensifyOperator-BlFwI1id.js',
      'assets/operatorGeodeticDensify-B7U1DmkD.js',
      'assets/generalizeOperator-BKdMkOTk.js',
      'assets/OperatorGeneralize-BoGEiiFA.js',
      'assets/bufferOperator-D_IbPwtN.js',
      'assets/operatorBuffer-Cf5hrSF5.js',
      'assets/GeometryCleaner-BEJM7I4l-BHcstiW-.js',
      'assets/geodesicBufferOperator-Bqw_gIkZ.js',
      'assets/operatorGeodesicBuffer-CIu7QxqH.js',
      'assets/offsetOperator-BRMv9PTT.js',
      'assets/operatorOffset-Dlj7Z6NQ.js',
      'assets/affineTransformOperator-ZV-cRPZy.js',
      'assets/Transformation-Bxceu7vP.js',
      'assets/centroidOperator-BxtjsKPE.js',
      'assets/Centroid-DZi-eb9F-C125OHYY.js',
      'assets/labelPointOperator-3hfhZXOM.js',
      'assets/OperatorProximity-XFT4mP8r.js',
      'assets/simplifyOperator-ztr7KiWJ.js',
      'assets/operatorSimplify-D6nu8byc.js',
      'assets/convexHullOperator-4B1py1ZC.js',
      'assets/operatorConvexHull-ApsfuIpf.js',
      'assets/proximityOperator-CiqFrHBd.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './index-DShQM7Xx.js';
import { h as c } from './index.lazy-BFilFZ3v.js';
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
      () => import('./disjointOperator-DWWhnELm.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  intersects: _('intersects', () =>
    a(
      () => import('./intersectsOperator-BzfgqYk8.js'),
      __vite__mapDeps([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  touches: _('touches', () =>
    a(
      () => import('./touchesOperator-ChwLpC72.js'),
      __vite__mapDeps([11, 12, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  crosses: _('crosses', () =>
    a(
      () => import('./crossesOperator-DS1zlM-H.js'),
      __vite__mapDeps([13, 14, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  within: _('within', () =>
    a(
      () => import('./withinOperator-DXp68ZuP.js'),
      __vite__mapDeps([15, 16, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  contains: _('contains', () =>
    a(
      () => import('./containsOperator-Cam0DK9p.js'),
      __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  overlaps: _('overlaps', () =>
    a(
      () => import('./overlapsOperator-CbuFiJ21.js'),
      __vite__mapDeps([18, 19, 1, 2, 3, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  equals: _('equals', async () => {
    const t = await a(
      () => import('./equalsOperator-CURi6xjQ.js').then((e) => e.e),
      __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 21, 8]),
    );
    return (e, i) => t.execute(c(e), c(i));
  }),
  relate: _('relate', async () => {
    const t = await a(
      () => import('./relateOperator-DorNjG3I.js').then((e) => e.r),
      __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 7, 21, 8]),
    );
    return (e, i, n) => t.execute(c(e), c(i), n);
  }),
  intersection: _('intersection', () =>
    a(
      () => import('./intersectionOperator-XT5lKxPM.js'),
      __vite__mapDeps([23, 4, 5, 6, 7, 24, 3, 2, 1, 8]),
    ).then((t) => t.execute),
  ),
  union: _('union', () =>
    a(
      () => import('./unionOperator-Cxxt5Upp.js'),
      __vite__mapDeps([25, 26, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.executeMany),
  ),
  difference: _('difference', async () => {
    const t = await a(
      () => import('./differenceOperator-BdLDF5F8.js').then((e) => e.d),
      __vite__mapDeps([27, 2, 1, 3, 4, 5, 6, 7, 8, 21]),
    );
    return (e, i) => s(t.execute(c(e), c(i)));
  }),
  symmetricDifference: _('symmetricDifference', async () => {
    const t = await a(
      () => import('./symmetricDifferenceOperator-CAA-zjRV.js').then((e) => e.s),
      __vite__mapDeps([28, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
    );
    return (e, i) => s(t.execute(c(e), c(i)));
  }),
  clip: _('clip', async () => {
    const t = await a(
      () => import('./clipOperator-D3RHfzv0.js').then((e) => e.c),
      __vite__mapDeps([29, 2, 1, 3, 4, 5, 6, 7, 8, 21]),
    );
    return (e, i) => s(t.execute(c(e), c(i)));
  }),
  cut: _('cut', async () => {
    const t = await a(
      () => import('./cutOperator-B5OqypEB.js').then((e) => e.c),
      __vite__mapDeps([30, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
    );
    return (e, i) => t.execute(c(e), c(i)).map((n) => s(n));
  }),
  area: _('area', async () => {
    const t = await a(
        () => import('./areaOperator-CzFebgHD.js').then((n) => n.a),
        __vite__mapDeps([31, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
      ),
      { convertFromSpatialReferenceUnit: e, toAreaUnit: i } = await a(
        async () => {
          const { convertFromSpatialReferenceUnit: n, toAreaUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
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
        () => import('./geodeticAreaOperator-CNngGhsV.js').then((r) => r.g),
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
          } = await import('./unitConversion-B9NexLEg.js').then((p) => p.e);
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
        () => import('./lengthOperator-D-6L-XpP.js'),
        __vite__mapDeps([35, 4, 5, 6, 7, 8, 2, 1, 3]),
      ),
      { convertFromSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertFromSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
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
        () => import('./geodeticLengthOperator-DwgM6aU8.js').then((r) => r.g),
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
          } = await import('./unitConversion-B9NexLEg.js').then((p) => p.e);
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
        () => import('./distanceOperator-CY5SN3Ti.js').then((n) => n.d),
        __vite__mapDeps([37, 2, 4, 5, 6, 7, 1, 3, 21, 8]),
      ),
      { convertFromSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertFromSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
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
        () => import('./densifyOperator-CM0dPtg4.js').then((n) => n.d),
        __vite__mapDeps([38, 4, 5, 6, 7, 2, 1, 3, 8, 21]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o) => ((r = e(i(o), n.spatialReference, r)), s(t.execute(c(n), r)));
  }),
  geodeticDensify: _('geodeticDensify', async () => {
    const t = await a(
        () => import('./geodeticDensifyOperator-BlFwI1id.js').then((r) => r.a),
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
          } = await import('./unitConversion-B9NexLEg.js').then((p) => p.e);
          return { convert: r, meters: o, toLengthUnit: u };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return await t.load(), (r, o, u) => ((o = e(n(u), i, o)), s(t.execute(c(r), o)));
  }),
  generalize: _('generalize', async () => {
    const t = await a(
        () => import('./generalizeOperator-BKdMkOTk.js').then((n) => n.g),
        __vite__mapDeps([41, 4, 5, 6, 7, 2, 1, 3, 8, 42, 21]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o, u) => ((r = e(i(o), n.spatialReference, r)), s(t.execute(c(n), r, u)));
  }),
  buffer: _('buffer', async () => {
    const t = await a(
        () => import('./bufferOperator-D_IbPwtN.js'),
        __vite__mapDeps([43, 4, 5, 6, 7, 44, 3, 2, 1, 45, 42, 8]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o) => ((r = e(i(o), n.spatialReference, r)), t.execute(n, r));
  }),
  geodesicBuffer: _('geodesicBuffer', async () => {
    const t = await a(
        () => import('./geodesicBufferOperator-Bqw_gIkZ.js'),
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
          } = await import('./unitConversion-B9NexLEg.js').then((p) => p.e);
          return { convert: r, meters: o, toLengthUnit: u };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return await t.load(), (r, o, u) => ((o = e(n(u), i, o)), t.execute(r, o));
  }),
  offset: _('offset', async () => {
    const t = await a(
        () => import('./offsetOperator-BRMv9PTT.js'),
        __vite__mapDeps([48, 4, 5, 6, 7, 49, 3, 1, 2, 8]),
      ),
      { convertToSpatialReferenceUnit: e, toLengthUnit: i } = await a(
        async () => {
          const { convertToSpatialReferenceUnit: n, toLengthUnit: r } = await import(
            './unitConversion-B9NexLEg.js'
          ).then((o) => o.e);
          return { convertToSpatialReferenceUnit: n, toLengthUnit: r };
        },
        __vite__mapDeps([32, 4, 5, 6, 7]),
      );
    return (n, r, o, u) => ((r = e(i(o), n.spatialReference, r)), t.execute(n, r, u));
  }),
  rotate: _('rotate', async () => {
    const t = await a(
        () => import('./affineTransformOperator-ZV-cRPZy.js'),
        __vite__mapDeps([50, 4, 5, 6, 7, 3, 2, 21, 1, 8]),
      ),
      { default: e } = await a(
        async () => {
          const { default: i } = await import('./Transformation-Bxceu7vP.js');
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
      () => import('./centroidOperator-BxtjsKPE.js').then((e) => e.c),
      __vite__mapDeps([52, 53, 2, 21, 1, 3, 4, 5, 6, 7, 8]),
    );
    return (e) => s(t.execute(c(e)));
  }),
  labelPoint: _('labelPoint', async () => {
    const t = await a(
      () => import('./labelPointOperator-3hfhZXOM.js').then((e) => e.l),
      __vite__mapDeps([54, 2, 1, 3, 4, 5, 6, 7, 8, 53, 55, 21]),
    );
    return (e) => s(t.execute(c(e)));
  }),
  simplify: _('simplify', () =>
    a(
      () => import('./simplifyOperator-ztr7KiWJ.js'),
      __vite__mapDeps([56, 57, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  isSimple: _('isSimple', () =>
    a(
      () => import('./simplifyOperator-ztr7KiWJ.js'),
      __vite__mapDeps([56, 57, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.isSimple),
  ),
  convexHull: _('convexHull', () =>
    a(
      () => import('./convexHullOperator-4B1py1ZC.js'),
      __vite__mapDeps([58, 59, 3, 2, 1, 4, 5, 6, 7, 8]),
    ).then((t) => t.execute),
  ),
  getNearestCoordinate: _('getNearestCoordinate', async () => {
    const t = await a(
      () => import('./proximityOperator-CiqFrHBd.js').then((e) => e.p),
      __vite__mapDeps([60, 2, 1, 3, 4, 5, 6, 7, 8, 55, 21]),
    );
    return (e, i, n) => {
      const r = t.getNearestCoordinate(c(e), c(i), n);
      return { ...r, coordinate: s(r.coordinate) };
    };
  }),
  getNearestVertex: _('getNearestVertex', async () => {
    const t = await a(
      () => import('./proximityOperator-CiqFrHBd.js').then((e) => e.p),
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
