import { c as x, a as S } from './devEnvironmentUtils-CnNDiFMM.js';
import {
  aZ as U,
  dG as u,
  a7 as f,
  cz as w,
  fC as F,
  fD as v,
  fE as E,
  fF as I,
  fG as z,
  fH as N,
  fI as D,
  fJ as A,
  fK as H,
  fL as J,
} from './index.lazy-BFilFZ3v.js';
import { e as K } from './webStyleAcceptedFormats-CG7ZQ6BV.js';
import './index-DShQM7Xx.js';
function q(t, e, a) {
  const l = t.name;
  return l == null
    ? Promise.reject(
        new f(
          'symbolstyleutils:style-symbol-reference-name-missing',
          'Missing name in style symbol reference',
        ),
      )
    : t.styleName === 'Esri2DPointSymbolsStyle'
      ? R(l, e, a)
      : A(t, e, a).then((n) => M(n, l, e, H, a));
}
function L(t, e) {
  return e.items.find((a) => a.name === t);
}
async function M(t, e, a, l, n) {
  var h, d;
  const o = (a == null ? void 0 : a.portal) != null ? a.portal : U.getDefault(),
    r = { portal: o, url: u(t.baseUrl) },
    m = L(e, t.data);
  if (!m)
    throw new f(
      'symbolstyleutils:symbol-name-not-found',
      `The symbol name '${e}' could not be found`,
      { symbolName: e },
    );
  const c = (n == null ? void 0 : n.acceptedFormats) ?? K,
    p = l(m, c);
  if (!p)
    throw new f(
      'symbolstyleutils:symbol-reference-no-accepted-format',
      `The symbol name '${e}' does not have an accepted format (one of ${c})`,
      { symbolName: e },
    );
  const { url: O, format: P } = p;
  let i = w(O, r),
    y = ((h = m.thumbnail) == null ? void 0 : h.href) ?? null;
  const b = (d = m.thumbnail) == null ? void 0 : d.imageData;
  x() && ((i = S(i) ?? ''), (y = S(y)));
  const T = { portal: o, url: u(F(i)), origin: 'portal-item' };
  return v(i, n).then((g) => {
    const C = P === 'cim' ? E(g.data) : g.data,
      s = I(C, T);
    if (s && z(s)) {
      if (y) {
        const G = w(y, r);
        s.thumbnail = new N({ url: G });
      } else b && (s.thumbnail = new N({ url: `data:image/png;base64,${b}` }));
      t.styleUrl
        ? (s.styleOrigin = new D({ portal: a.portal, styleUrl: t.styleUrl, name: e }))
        : t.styleName &&
          (s.styleOrigin = new D({ portal: a.portal, styleName: t.styleName, name: e }));
    }
    return s;
  });
}
function R(t, e, a) {
  const l = J.replaceAll(/\{SymbolName\}/gi, t),
    n = e.portal != null ? e.portal : U.getDefault();
  return v(l, a).then((o) => {
    const r = E(o.data);
    return I(r, { portal: n, url: u(F(l)), origin: 'portal-item' });
  });
}
export { M as fetchSymbolFromStyle, L as getStyleItemFromStyle, q as resolveWebStyleSymbol };
