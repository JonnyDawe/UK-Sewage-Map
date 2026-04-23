import { P as c, $ as y } from './utils-CWFwb689.js';
import { fm as f, eK as d, eN as v, eO as x } from './index.lazy-BFilFZ3v.js';
import { p as s } from './resourceUtils-Dmo_NMux.js';
import './originUtils-D69mHv66.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './saveUtils-BoTSfpwK.js';
import './index-DShQM7Xx.js';
import './resourceUtils-BQ_80v0v.js';
const o = 'Media Layer',
  E = 'media-layer-save',
  N = 'media-layer-save-as',
  i = ['media-layer:unsupported-source'];
function n(e) {
  return { isValid: e.type === 'media', errorMessage: "Layer.type should be 'media'" };
}
function m(e) {
  return d(e, 'portal-item', !0);
}
function p(e) {
  return Promise.resolve(e.layerJSON);
}
async function u(e, r) {
  r.extent = e.fullExtent ? await f(e.fullExtent) : null;
}
async function P(e, r) {
  r.title || (r.title = e.title), await u(e, r), v(r, x.METADATA);
}
async function J(e, r) {
  return c(
    {
      layer: e,
      itemType: o,
      validateLayer: n,
      createJSONContext: (t) => m(t),
      createItemData: p,
      errorNamePrefix: E,
      supplementalUnsupportedErrors: i,
      setItemProperties: u,
      saveResources: (t, a) => s(e.resourceReferences, a),
    },
    r,
  );
}
async function M(e, r, t) {
  return y(
    {
      layer: e,
      itemType: o,
      validateLayer: n,
      createJSONContext: (a) => m(a),
      createItemData: p,
      errorNamePrefix: N,
      supplementalUnsupportedErrors: i,
      newItem: r,
      setItemProperties: P,
      saveResources: (a, l) => s(e.resourceReferences, l),
    },
    t,
  );
}
export { J as save, M as saveAs };
