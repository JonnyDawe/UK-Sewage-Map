import { P as m, $ as c } from './utils-QN2dJcAe.js';
import { fm as u, eN as y, eO as s, eP as p } from './index.lazy-BHTpPf8X.js';
import './originUtils-D69mHv66.js';
import './multiOriginJSONSupportUtils-C0wm8_Yw.js';
import './saveUtils-Bk5ftWB2.js';
import './index-DqxZnyqH.js';
const i = 'Stream Service',
  f = 'Feed',
  d = 'stream-layer-save',
  v = 'stream-layer-save-as';
function n(r) {
  return {
    isValid: r.type === 'stream' && !!r.url && !r.webSocketUrl,
    errorMessage: 'Stream layer should be created using a url to a stream service',
  };
}
function l(r) {
  const e = r.layerJSON;
  return Promise.resolve(e && Object.keys(e).length ? e : null);
}
async function x(r, e) {
  const { parsedUrl: a, title: o, fullExtent: t } = r;
  (e.url = a.path),
    e.title || (e.title = o),
    (e.extent = null),
    t != null && (e.extent = await u(t)),
    y(e, s.METADATA),
    p(e, s.SINGLE_LAYER);
}
async function T(r, e) {
  return m(
    {
      layer: r,
      itemType: i,
      additionalItemType: f,
      validateLayer: n,
      createItemData: l,
      errorNamePrefix: d,
    },
    e,
  );
}
async function L(r, e, a) {
  return c(
    {
      layer: r,
      itemType: i,
      validateLayer: n,
      createItemData: l,
      errorNamePrefix: v,
      newItem: e,
      setItemProperties: x,
    },
    a,
  );
}
export { T as save, L as saveAs };
