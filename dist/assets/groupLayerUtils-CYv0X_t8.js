import { P as l, $ as y } from './utils-CWFwb689.js';
import { eK as f, eO as s, bP as v, eN as P, eP as d } from './index.lazy-BFilFZ3v.js';
import { p as i } from './resourceUtils-Dmo_NMux.js';
import './originUtils-D69mHv66.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './saveUtils-BoTSfpwK.js';
import './index-DShQM7Xx.js';
import './resourceUtils-BQ_80v0v.js';
const n = 'Group Layer',
  I = 'group-layer-save',
  g = 'group-layer-save-as',
  o = s.GROUP_LAYER_MAP;
function c(e) {
  return { isValid: e.type === 'group', errorMessage: "Layer.type should be 'group'" };
}
function A(e) {
  return { isValid: v(e, o), errorMessage: `Layer.portalItem.typeKeywords should have '${o}'` };
}
function u(e, r) {
  return { ...f(e, 'web-map', !0), initiator: r };
}
function m(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function R(e, r) {
  r.title || (r.title = e.title), P(r, s.METADATA), d(r, o);
}
async function T(e, r) {
  return l(
    {
      layer: e,
      itemType: n,
      validateLayer: c,
      validateItem: A,
      createJSONContext: (t) => u(t, e),
      createItemData: m,
      errorNamePrefix: I,
      saveResources: async (t, a) => (
        e.sourceIsPortalItem || (await t.removeAllResources().catch(() => {})),
        i(e.resourceReferences, a)
      ),
    },
    r,
  );
}
async function D(e, r, t) {
  return y(
    {
      layer: e,
      itemType: n,
      validateLayer: c,
      createJSONContext: (a) => u(a, e),
      createItemData: m,
      errorNamePrefix: g,
      newItem: r,
      setItemProperties: R,
      saveResources: (a, p) => i(e.resourceReferences, p),
    },
    t,
  );
}
export { T as save, D as saveAs };
