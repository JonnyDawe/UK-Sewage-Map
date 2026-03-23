import {
  rw as Jt,
  rx as Tt,
  ry as At,
  rz as _n,
  rA as Pn,
  i as _t,
  L as Pt,
  ft as fe,
  e as Oe,
  s as $,
  x as P,
  S as Ot,
  gG as Qt,
  gJ as en,
  fs as On,
  a as tn,
  c as he,
  m as nn,
  d as rn,
  p as an,
  n as on,
  b as Fn,
  rB as $n,
  j4 as Ln,
} from './index.lazy-BHTpPf8X.js';
import './customElement-qhwLU-ok.js';
import './index-BXhxFG7-.js';
import { q as kt } from './index-C8TmRuL7.js';
import { i as Mn, e as Nn } from './escapeRegExp-CEZwNgWI.js';
import { i as Te, c as at, h as kn, a as Et, p as ot, o as Rn } from './utils-DBnkUeOL.js';
import './index-DqxZnyqH.js';
import './key-ak3_eHKH.js';
function jn(n) {
  return n;
}
var Gn = '[object AsyncFunction]',
  Bn = '[object Function]',
  Hn = '[object GeneratorFunction]',
  zn = '[object Proxy]';
function Xn(n) {
  if (!Jt(n)) return !1;
  var e = Tt(n);
  return e == Bn || e == Hn || e == Gn || e == zn;
}
var Yn = 9007199254740991,
  Un = /^(?:0|[1-9]\d*)$/;
function Wn(n, e) {
  var t = typeof n;
  return (
    (e = e ?? Yn),
    !!e && (t == 'number' || (t != 'symbol' && Un.test(n))) && n > -1 && n % 1 == 0 && n < e
  );
}
var qn = 9007199254740991;
function sn(n) {
  return typeof n == 'number' && n > -1 && n % 1 == 0 && n <= qn;
}
function Kn(n) {
  return n != null && sn(n.length) && !Xn(n);
}
var Vn = Object.prototype;
function Zn(n) {
  var e = n && n.constructor,
    t = (typeof e == 'function' && e.prototype) || Vn;
  return n === t;
}
function Jn(n, e) {
  for (var t = -1, i = Array(n); ++t < n; ) i[t] = e(t);
  return i;
}
var Qn = '[object Arguments]';
function Rt(n) {
  return At(n) && Tt(n) == Qn;
}
var ln = Object.prototype,
  ei = ln.hasOwnProperty,
  ti = ln.propertyIsEnumerable,
  ni = Rt(
    (function () {
      return arguments;
    })(),
  )
    ? Rt
    : function (n) {
        return At(n) && ei.call(n, 'callee') && !ti.call(n, 'callee');
      };
function ii() {
  return !1;
}
var cn = typeof exports == 'object' && exports && !exports.nodeType && exports,
  jt = cn && typeof module == 'object' && module && !module.nodeType && module,
  ri = jt && jt.exports === cn,
  Gt = ri ? _n.Buffer : void 0,
  ai = Gt ? Gt.isBuffer : void 0,
  oi = ai || ii,
  si = '[object Arguments]',
  li = '[object Array]',
  ci = '[object Boolean]',
  di = '[object Date]',
  hi = '[object Error]',
  ui = '[object Function]',
  fi = '[object Map]',
  pi = '[object Number]',
  gi = '[object Object]',
  mi = '[object RegExp]',
  vi = '[object Set]',
  bi = '[object String]',
  Ei = '[object WeakMap]',
  yi = '[object ArrayBuffer]',
  wi = '[object DataView]',
  Ii = '[object Float32Array]',
  Si = '[object Float64Array]',
  Di = '[object Int8Array]',
  xi = '[object Int16Array]',
  Ci = '[object Int32Array]',
  Ti = '[object Uint8Array]',
  Ai = '[object Uint8ClampedArray]',
  _i = '[object Uint16Array]',
  Pi = '[object Uint32Array]',
  I = {};
I[Ii] = I[Si] = I[Di] = I[xi] = I[Ci] = I[Ti] = I[Ai] = I[_i] = I[Pi] = !0;
I[si] =
  I[li] =
  I[yi] =
  I[ci] =
  I[wi] =
  I[di] =
  I[hi] =
  I[ui] =
  I[fi] =
  I[pi] =
  I[gi] =
  I[mi] =
  I[vi] =
  I[bi] =
  I[Ei] =
    !1;
function Oi(n) {
  return At(n) && sn(n.length) && !!I[Tt(n)];
}
function Fi(n) {
  return function (e) {
    return n(e);
  };
}
var dn = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Fe = dn && typeof module == 'object' && module && !module.nodeType && module,
  $i = Fe && Fe.exports === dn,
  st = $i && Pn.process,
  Bt = (function () {
    try {
      var n = Fe && Fe.require && Fe.require('util').types;
      return n || (st && st.binding && st.binding('util'));
    } catch {}
  })(),
  Ht = Bt && Bt.isTypedArray,
  Li = Ht ? Fi(Ht) : Oi;
function Mi(n, e) {
  var t = Mn(n),
    i = !t && ni(n),
    r = !t && !i && oi(n),
    a = !t && !i && !r && Li(n),
    o = t || i || r || a,
    s = o ? Jn(n.length, String) : [],
    l = s.length;
  for (var c in n)
    (o &&
      (c == 'length' ||
        (r && (c == 'offset' || c == 'parent')) ||
        (a && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
        Wn(c, l))) ||
      s.push(c);
  return s;
}
function Ni(n) {
  var e = [];
  if (n != null) for (var t in Object(n)) e.push(t);
  return e;
}
var ki = Object.prototype,
  Ri = ki.hasOwnProperty;
function ji(n) {
  if (!Jt(n)) return Ni(n);
  var e = Zn(n),
    t = [];
  for (var i in n) (i == 'constructor' && (e || !Ri.call(n, i))) || t.push(i);
  return t;
}
function Gi(n) {
  return Kn(n) ? Mi(n) : ji(n);
}
function Bi(n) {
  return function (e, t, i) {
    for (var r = -1, a = Object(e), o = i(e), s = o.length; s--; ) {
      var l = o[++r];
      if (t(a[l], l, a) === !1) break;
    }
    return e;
  };
}
var Hi = Bi();
function zi(n) {
  return typeof n == 'function' ? n : jn;
}
function Xi(n, e) {
  return n == null ? n : Hi(n, zi(e), Gi);
}
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const pe = {
    container: 'container',
    actionsStart: 'actions-start',
    contentStart: 'content-start',
    content: 'content',
    contentEnd: 'content-end',
    actionsEnd: 'actions-end',
  },
  be = {
    actionsStart: 'actions-start',
    contentStart: 'content-start',
    contentEnd: 'content-end',
    actionsEnd: 'actions-end',
  };
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const Yi = _t`:host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, .75rem);padding-block:var(--calcite-stack-padding-block, .5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}`,
  tt = class tt extends Pt {
    constructor() {
      super(...arguments),
        (this.hasActionsEnd = !1),
        (this.hasActionsStart = !1),
        (this.hasContentEnd = !1),
        (this.hasContentStart = !1),
        (this.disabled = !1);
    }
    handleActionsStartSlotChange(e) {
      this.hasActionsStart = fe(e);
    }
    handleActionsEndSlotChange(e) {
      this.hasActionsEnd = fe(e);
    }
    handleContentStartSlotChange(e) {
      this.hasContentStart = fe(e);
    }
    handleContentEndSlotChange(e) {
      this.hasContentEnd = fe(e);
    }
    renderActionsStart() {
      const { hasActionsStart: e } = this;
      return Oe(
        'actions-start-container',
        P`<div class=${$(pe.actionsStart)} .hidden=${!e}><slot name=${be.actionsStart} @slotchange=${this.handleActionsStartSlotChange}></slot></div>`,
      );
    }
    renderActionsEnd() {
      const { hasActionsEnd: e } = this;
      return Oe(
        'actions-end-container',
        P`<div class=${$(pe.actionsEnd)} .hidden=${!e}><slot name=${be.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot></div>`,
      );
    }
    renderContentStart() {
      const { hasContentStart: e } = this;
      return P`<div class=${$(pe.contentStart)} .hidden=${!e}><slot name=${be.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`;
    }
    renderDefaultContent() {
      return P`<div class=${$(pe.content)}><slot></slot></div>`;
    }
    renderContentEnd() {
      const { hasContentEnd: e } = this;
      return P`<div class=${$(pe.contentEnd)} .hidden=${!e}><slot name=${be.contentEnd} @slotchange=${this.handleContentEndSlotChange}></slot></div>`;
    }
    render() {
      return P`<div class=${$(pe.container)}>${this.renderActionsStart()}${this.renderContentStart()}${this.renderDefaultContent()}${this.renderContentEnd()}${this.renderActionsEnd()}</div>`;
    }
  };
(tt.properties = {
  hasActionsEnd: 16,
  hasActionsStart: 16,
  hasContentEnd: 16,
  hasContentStart: 16,
  disabled: 7,
}),
  (tt.styles = Yi);
let yt = tt;
Ot('calcite-stack', yt);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const lt = (n, e, t) => {
  const i = Nn(e),
    r = new RegExp(i, 'i');
  n.length === 0 &&
    console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  const a = (o, s, l) => {
    if ((o != null && o.constant) || (o != null && o.filterDisabled)) return !0;
    let c = !1;
    return (
      Xi(o, (u, d) => {
        typeof u == 'function' ||
          u == null ||
          (l && !l.includes(d)) ||
          (Array.isArray(u) || (typeof u == 'object' && u !== null)
            ? a(u, s) && (c = !0)
            : s.test(u) && (c = !0));
      }),
      c
    );
  };
  return n.filter((o) => a(o, r, t));
};
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const Ui = { container: 'container' },
  Wi = { search: 'search' },
  qi = _t`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%}:host([scale=s]) .container{padding:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding:var(--calcite-spacing-md)}:host([scale=l]) .container{padding:var(--calcite-spacing-lg)}label{position:relative;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}calcite-input{inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}`;
var ae;
let Ki =
  ((ae = class extends Pt {
    constructor() {
      super(...arguments),
        (this.filterDebounced = Qt(
          (e, t = !1, i) => this.updateFiltered(lt(this.items ?? [], e, this.filterProps), t, i),
          en.filter,
        )),
        (this.textInput = On()),
        (this._value = ''),
        (this.disabled = !1),
        (this.filteredItems = []),
        (this.items = []),
        (this.messages = tn()),
        (this.scale = 'm'),
        (this.calciteFilterChange = he({ cancelable: !1 }));
    }
    get value() {
      return this._value;
    }
    set value(e) {
      const t = this._value;
      e !== t && ((this._value = e), this.valueHandler(e));
    }
    async filter(e = this.value) {
      return new Promise((t) => {
        (this.value = e), this.updateFiltered(lt(this.items ?? [], e, this.filterProps), !1, t);
      });
    }
    async setFocus() {
      var e;
      return await nn(this), (e = this.textInput.value) == null ? void 0 : e.setFocus();
    }
    async load() {
      this.updateFiltered(lt(this.items ?? [], this.value, this.filterProps));
    }
    willUpdate(e) {
      var t;
      ((e.has('items') &&
        (this.hasUpdated || ((t = this.items) == null ? void 0 : t.length) > 0)) ||
        e.has('filterProps')) &&
        this.filterDebounced(this.value);
    }
    updated() {
      rn(this);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.filterDebounced.cancel();
    }
    valueHandler(e) {
      this.filterDebounced(e);
    }
    inputHandler(e) {
      const t = e.target;
      (this.value = t.value), this.filterDebounced(t.value, !0);
    }
    keyDownHandler(e) {
      e.defaultPrevented ||
        (e.key === 'Escape' && (this.clear(), e.preventDefault()),
        e.key === 'Enter' && e.preventDefault());
    }
    clear() {
      (this.value = ''), this.filterDebounced('', !0), this.setFocus();
    }
    updateFiltered(e, t = !1, i) {
      (this.filteredItems = e), t && this.calciteFilterChange.emit(), i == null || i();
    }
    render() {
      const { disabled: e, scale: t } = this;
      return an({
        disabled: e,
        children: P`<div class=${$(Ui.container)}><label><calcite-input clearable .disabled=${e} .icon=${Wi.search} .label=${this.label ?? this.messages.label} .messageOverrides=${{ clear: this.messages.clear }} @keydown=${this.keyDownHandler} @calciteInputInput=${this.inputHandler} .placeholder=${this.placeholder} .scale=${t} type=text .value=${this.value} ${on(this.textInput)}></calcite-input></label></div>`,
      });
    }
  }),
  (ae.properties = {
    disabled: 7,
    filterProps: 0,
    filteredItems: 0,
    items: 0,
    label: 1,
    messageOverrides: 0,
    placeholder: 1,
    scale: 3,
    value: 1,
  }),
  (ae.shadowRootOptions = { mode: 'open', delegatesFocus: !0 }),
  (ae.styles = qi),
  ae);
Ot('calcite-filter', Ki);
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function zt(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(n, r).enumerable;
      })),
      t.push.apply(t, i);
  }
  return t;
}
function W(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? zt(Object(t), !0).forEach(function (i) {
          Vi(n, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
        : zt(Object(t)).forEach(function (i) {
            Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
          });
  }
  return n;
}
function Ye(n) {
  '@babel/helpers - typeof';
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Ye = function (e) {
          return typeof e;
        })
      : (Ye = function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        }),
    Ye(n)
  );
}
function Vi(n, e, t) {
  return (
    e in n
      ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (n[e] = t),
    n
  );
}
function Z() {
  return (
    (Z =
      Object.assign ||
      function (n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }
        return n;
      }),
    Z.apply(this, arguments)
  );
}
function Zi(n, e) {
  if (n == null) return {};
  var t = {},
    i = Object.keys(n),
    r,
    a;
  for (a = 0; a < i.length; a++) (r = i[a]), !(e.indexOf(r) >= 0) && (t[r] = n[r]);
  return t;
}
function Ji(n, e) {
  if (n == null) return {};
  var t = Zi(n, e),
    i,
    r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (r = 0; r < a.length; r++)
      (i = a[r]),
        !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (t[i] = n[i]);
  }
  return t;
}
var Qi = '1.15.6';
function V(n) {
  if (typeof window < 'u' && window.navigator) return !!navigator.userAgent.match(n);
}
var J = V(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  Re = V(/Edge/i),
  Xt = V(/firefox/i),
  $e = V(/safari/i) && !V(/chrome/i) && !V(/android/i),
  Ft = V(/iP(ad|od|hone)/i),
  hn = V(/chrome/i) && V(/android/i),
  un = { capture: !1, passive: !1 };
function b(n, e, t) {
  n.addEventListener(e, t, !J && un);
}
function v(n, e, t) {
  n.removeEventListener(e, t, !J && un);
}
function Ve(n, e) {
  if (e) {
    if ((e[0] === '>' && (e = e.substring(1)), n))
      try {
        if (n.matches) return n.matches(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function fn(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function X(n, e, t, i) {
  if (n) {
    t = t || document;
    do {
      if (
        (e != null && (e[0] === '>' ? n.parentNode === t && Ve(n, e) : Ve(n, e))) ||
        (i && n === t)
      )
        return n;
      if (n === t) break;
    } while ((n = fn(n)));
  }
  return null;
}
var Yt = /\s+/g;
function R(n, e, t) {
  if (n && e)
    if (n.classList) n.classList[t ? 'add' : 'remove'](e);
    else {
      var i = (' ' + n.className + ' ').replace(Yt, ' ').replace(' ' + e + ' ', ' ');
      n.className = (i + (t ? ' ' + e : '')).replace(Yt, ' ');
    }
}
function f(n, e, t) {
  var i = n && n.style;
  if (i) {
    if (t === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (t = document.defaultView.getComputedStyle(n, ''))
          : n.currentStyle && (t = n.currentStyle),
        e === void 0 ? t : t[e]
      );
    !(e in i) && e.indexOf('webkit') === -1 && (e = '-webkit-' + e),
      (i[e] = t + (typeof t == 'string' ? '' : 'px'));
  }
}
function ye(n, e) {
  var t = '';
  if (typeof n == 'string') t = n;
  else
    do {
      var i = f(n, 'transform');
      i && i !== 'none' && (t = i + ' ' + t);
    } while (!e && (n = n.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function pn(n, e, t) {
  if (n) {
    var i = n.getElementsByTagName(e),
      r = 0,
      a = i.length;
    if (t) for (; r < a; r++) t(i[r], r);
    return i;
  }
  return [];
}
function U() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function T(n, e, t, i, r) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var a, o, s, l, c, u, d;
    if (
      (n !== window && n.parentNode && n !== U()
        ? ((a = n.getBoundingClientRect()),
          (o = a.top),
          (s = a.left),
          (l = a.bottom),
          (c = a.right),
          (u = a.height),
          (d = a.width))
        : ((o = 0),
          (s = 0),
          (l = window.innerHeight),
          (c = window.innerWidth),
          (u = window.innerHeight),
          (d = window.innerWidth)),
      (e || t) && n !== window && ((r = r || n.parentNode), !J))
    )
      do
        if (
          r &&
          r.getBoundingClientRect &&
          (f(r, 'transform') !== 'none' || (t && f(r, 'position') !== 'static'))
        ) {
          var m = r.getBoundingClientRect();
          (o -= m.top + parseInt(f(r, 'border-top-width'))),
            (s -= m.left + parseInt(f(r, 'border-left-width'))),
            (l = o + a.height),
            (c = s + a.width);
          break;
        }
      while ((r = r.parentNode));
    if (i && n !== window) {
      var w = ye(r || n),
        E = w && w.a,
        y = w && w.d;
      w && ((o /= y), (s /= E), (d /= E), (u /= y), (l = o + u), (c = s + d));
    }
    return { top: o, left: s, bottom: l, right: c, width: d, height: u };
  }
}
function Ut(n, e, t) {
  for (var i = re(n, !0), r = T(n)[e]; i; ) {
    var a = T(i)[t],
      o = void 0;
    if (((o = r >= a), !o)) return i;
    if (i === U()) break;
    i = re(i, !1);
  }
  return !1;
}
function we(n, e, t, i) {
  for (var r = 0, a = 0, o = n.children; a < o.length; ) {
    if (
      o[a].style.display !== 'none' &&
      o[a] !== p.ghost &&
      (i || o[a] !== p.dragged) &&
      X(o[a], t.draggable, n, !1)
    ) {
      if (r === e) return o[a];
      r++;
    }
    a++;
  }
  return null;
}
function $t(n, e) {
  for (
    var t = n.lastElementChild;
    t && (t === p.ghost || f(t, 'display') === 'none' || (e && !Ve(t, e)));

  )
    t = t.previousElementSibling;
  return t || null;
}
function G(n, e) {
  var t = 0;
  if (!n || !n.parentNode) return -1;
  for (; (n = n.previousElementSibling); )
    n.nodeName.toUpperCase() !== 'TEMPLATE' && n !== p.clone && (!e || Ve(n, e)) && t++;
  return t;
}
function Wt(n) {
  var e = 0,
    t = 0,
    i = U();
  if (n)
    do {
      var r = ye(n),
        a = r.a,
        o = r.d;
      (e += n.scrollLeft * a), (t += n.scrollTop * o);
    } while (n !== i && (n = n.parentNode));
  return [e, t];
}
function er(n, e) {
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      for (var i in e) if (e.hasOwnProperty(i) && e[i] === n[t][i]) return Number(t);
    }
  return -1;
}
function re(n, e) {
  if (!n || !n.getBoundingClientRect) return U();
  var t = n,
    i = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = f(t);
      if (
        (t.clientWidth < t.scrollWidth && (r.overflowX == 'auto' || r.overflowX == 'scroll')) ||
        (t.clientHeight < t.scrollHeight && (r.overflowY == 'auto' || r.overflowY == 'scroll'))
      ) {
        if (!t.getBoundingClientRect || t === document.body) return U();
        if (i || e) return t;
        i = !0;
      }
    }
  while ((t = t.parentNode));
  return U();
}
function tr(n, e) {
  if (n && e) for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
  return n;
}
function ct(n, e) {
  return (
    Math.round(n.top) === Math.round(e.top) &&
    Math.round(n.left) === Math.round(e.left) &&
    Math.round(n.height) === Math.round(e.height) &&
    Math.round(n.width) === Math.round(e.width)
  );
}
var Le;
function gn(n, e) {
  return function () {
    if (!Le) {
      var t = arguments,
        i = this;
      t.length === 1 ? n.call(i, t[0]) : n.apply(i, t),
        (Le = setTimeout(function () {
          Le = void 0;
        }, e));
    }
  };
}
function nr() {
  clearTimeout(Le), (Le = void 0);
}
function mn(n, e, t) {
  (n.scrollLeft += e), (n.scrollTop += t);
}
function vn(n) {
  var e = window.Polymer,
    t = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(n).cloneNode(!0) : t ? t(n).clone(!0)[0] : n.cloneNode(!0);
}
function bn(n, e, t) {
  var i = {};
  return (
    Array.from(n.children).forEach(function (r) {
      var a, o, s, l;
      if (!(!X(r, e.draggable, n, !1) || r.animated || r === t)) {
        var c = T(r);
        (i.left = Math.min((a = i.left) !== null && a !== void 0 ? a : 1 / 0, c.left)),
          (i.top = Math.min((o = i.top) !== null && o !== void 0 ? o : 1 / 0, c.top)),
          (i.right = Math.max((s = i.right) !== null && s !== void 0 ? s : -1 / 0, c.right)),
          (i.bottom = Math.max((l = i.bottom) !== null && l !== void 0 ? l : -1 / 0, c.bottom));
      }
    }),
    (i.width = i.right - i.left),
    (i.height = i.bottom - i.top),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
var M = 'Sortable' + new Date().getTime();
function ir() {
  var n = [],
    e;
  return {
    captureAnimationState: function () {
      if (((n = []), !!this.options.animation)) {
        var i = [].slice.call(this.el.children);
        i.forEach(function (r) {
          if (!(f(r, 'display') === 'none' || r === p.ghost)) {
            n.push({ target: r, rect: T(r) });
            var a = W({}, n[n.length - 1].rect);
            if (r.thisAnimationDuration) {
              var o = ye(r, !0);
              o && ((a.top -= o.f), (a.left -= o.e));
            }
            r.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function (i) {
      n.push(i);
    },
    removeAnimationState: function (i) {
      n.splice(er(n, { target: i }), 1);
    },
    animateAll: function (i) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof i == 'function' && i();
        return;
      }
      var a = !1,
        o = 0;
      n.forEach(function (s) {
        var l = 0,
          c = s.target,
          u = c.fromRect,
          d = T(c),
          m = c.prevFromRect,
          w = c.prevToRect,
          E = s.rect,
          y = ye(c, !0);
        y && ((d.top -= y.f), (d.left -= y.e)),
          (c.toRect = d),
          c.thisAnimationDuration &&
            ct(m, d) &&
            !ct(u, d) &&
            (E.top - d.top) / (E.left - d.left) === (u.top - d.top) / (u.left - d.left) &&
            (l = ar(E, m, w, r.options)),
          ct(d, u) ||
            ((c.prevFromRect = u),
            (c.prevToRect = d),
            l || (l = r.options.animation),
            r.animate(c, E, d, l)),
          l &&
            ((a = !0),
            (o = Math.max(o, l)),
            clearTimeout(c.animationResetTimer),
            (c.animationResetTimer = setTimeout(function () {
              (c.animationTime = 0),
                (c.prevFromRect = null),
                (c.fromRect = null),
                (c.prevToRect = null),
                (c.thisAnimationDuration = null);
            }, l)),
            (c.thisAnimationDuration = l));
      }),
        clearTimeout(e),
        a
          ? (e = setTimeout(function () {
              typeof i == 'function' && i();
            }, o))
          : typeof i == 'function' && i(),
        (n = []);
    },
    animate: function (i, r, a, o) {
      if (o) {
        f(i, 'transition', ''), f(i, 'transform', '');
        var s = ye(this.el),
          l = s && s.a,
          c = s && s.d,
          u = (r.left - a.left) / (l || 1),
          d = (r.top - a.top) / (c || 1);
        (i.animatingX = !!u),
          (i.animatingY = !!d),
          f(i, 'transform', 'translate3d(' + u + 'px,' + d + 'px,0)'),
          (this.forRepaintDummy = rr(i)),
          f(
            i,
            'transition',
            'transform ' + o + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''),
          ),
          f(i, 'transform', 'translate3d(0,0,0)'),
          typeof i.animated == 'number' && clearTimeout(i.animated),
          (i.animated = setTimeout(function () {
            f(i, 'transition', ''),
              f(i, 'transform', ''),
              (i.animated = !1),
              (i.animatingX = !1),
              (i.animatingY = !1);
          }, o));
      }
    },
  };
}
function rr(n) {
  return n.offsetWidth;
}
function ar(n, e, t, i) {
  return (
    (Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) /
      Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2))) *
    i.animation
  );
}
var ge = [],
  dt = { initializeByDefault: !0 },
  je = {
    mount: function (e) {
      for (var t in dt) dt.hasOwnProperty(t) && !(t in e) && (e[t] = dt[t]);
      ge.forEach(function (i) {
        if (i.pluginName === e.pluginName)
          throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once');
      }),
        ge.push(e);
    },
    pluginEvent: function (e, t, i) {
      var r = this;
      (this.eventCanceled = !1),
        (i.cancel = function () {
          r.eventCanceled = !0;
        });
      var a = e + 'Global';
      ge.forEach(function (o) {
        t[o.pluginName] &&
          (t[o.pluginName][a] && t[o.pluginName][a](W({ sortable: t }, i)),
          t.options[o.pluginName] &&
            t[o.pluginName][e] &&
            t[o.pluginName][e](W({ sortable: t }, i)));
      });
    },
    initializePlugins: function (e, t, i, r) {
      ge.forEach(function (s) {
        var l = s.pluginName;
        if (!(!e.options[l] && !s.initializeByDefault)) {
          var c = new s(e, t, e.options);
          (c.sortable = e), (c.options = e.options), (e[l] = c), Z(i, c.defaults);
        }
      });
      for (var a in e.options)
        if (e.options.hasOwnProperty(a)) {
          var o = this.modifyOption(e, a, e.options[a]);
          typeof o < 'u' && (e.options[a] = o);
        }
    },
    getEventProperties: function (e, t) {
      var i = {};
      return (
        ge.forEach(function (r) {
          typeof r.eventProperties == 'function' &&
            Z(i, r.eventProperties.call(t[r.pluginName], e));
        }),
        i
      );
    },
    modifyOption: function (e, t, i) {
      var r;
      return (
        ge.forEach(function (a) {
          e[a.pluginName] &&
            a.optionListeners &&
            typeof a.optionListeners[t] == 'function' &&
            (r = a.optionListeners[t].call(e[a.pluginName], i));
        }),
        r
      );
    },
  };
function or(n) {
  var e = n.sortable,
    t = n.rootEl,
    i = n.name,
    r = n.targetEl,
    a = n.cloneEl,
    o = n.toEl,
    s = n.fromEl,
    l = n.oldIndex,
    c = n.newIndex,
    u = n.oldDraggableIndex,
    d = n.newDraggableIndex,
    m = n.originalEvent,
    w = n.putSortable,
    E = n.extraEventProperties;
  if (((e = e || (t && t[M])), !!e)) {
    var y,
      B = e.options,
      q = 'on' + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !J && !Re
      ? (y = new CustomEvent(i, { bubbles: !0, cancelable: !0 }))
      : ((y = document.createEvent('Event')), y.initEvent(i, !0, !0)),
      (y.to = o || t),
      (y.from = s || t),
      (y.item = r || t),
      (y.clone = a),
      (y.oldIndex = l),
      (y.newIndex = c),
      (y.oldDraggableIndex = u),
      (y.newDraggableIndex = d),
      (y.originalEvent = m),
      (y.pullMode = w ? w.lastPutMode : void 0);
    var O = W(W({}, E), je.getEventProperties(i, e));
    for (var H in O) y[H] = O[H];
    t && t.dispatchEvent(y), B[q] && B[q].call(e, y);
  }
}
var sr = ['evt'],
  L = function (e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = i.evt,
      a = Ji(i, sr);
    je.pluginEvent.bind(p)(
      e,
      t,
      W(
        {
          dragEl: h,
          parentEl: x,
          ghostEl: g,
          rootEl: S,
          nextEl: ue,
          lastDownEl: Ue,
          cloneEl: D,
          cloneHidden: ie,
          dragStarted: Ae,
          putSortable: A,
          activeSortable: p.active,
          originalEvent: r,
          oldIndex: Ee,
          oldDraggableIndex: Me,
          newIndex: j,
          newDraggableIndex: ne,
          hideGhostForTarget: In,
          unhideGhostForTarget: Sn,
          cloneNowHidden: function () {
            ie = !0;
          },
          cloneNowShown: function () {
            ie = !1;
          },
          dispatchSortableEvent: function (s) {
            F({ sortable: t, name: s, originalEvent: r });
          },
        },
        a,
      ),
    );
  };
function F(n) {
  or(
    W(
      {
        putSortable: A,
        cloneEl: D,
        targetEl: h,
        rootEl: S,
        oldIndex: Ee,
        oldDraggableIndex: Me,
        newIndex: j,
        newDraggableIndex: ne,
      },
      n,
    ),
  );
}
var h,
  x,
  g,
  S,
  ue,
  Ue,
  D,
  ie,
  Ee,
  j,
  Me,
  ne,
  Be,
  A,
  ve = !1,
  Ze = !1,
  Je = [],
  ce,
  z,
  ht,
  ut,
  qt,
  Kt,
  Ae,
  me,
  Ne,
  ke = !1,
  He = !1,
  We,
  _,
  ft = [],
  wt = !1,
  Qe = [],
  it = typeof document < 'u',
  ze = Ft,
  Vt = Re || J ? 'cssFloat' : 'float',
  lr = it && !hn && !Ft && 'draggable' in document.createElement('div'),
  En = (function () {
    if (it) {
      if (J) return !1;
      var n = document.createElement('x');
      return (n.style.cssText = 'pointer-events:auto'), n.style.pointerEvents === 'auto';
    }
  })(),
  yn = function (e, t) {
    var i = f(e),
      r =
        parseInt(i.width) -
        parseInt(i.paddingLeft) -
        parseInt(i.paddingRight) -
        parseInt(i.borderLeftWidth) -
        parseInt(i.borderRightWidth),
      a = we(e, 0, t),
      o = we(e, 1, t),
      s = a && f(a),
      l = o && f(o),
      c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + T(a).width,
      u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + T(o).width;
    if (i.display === 'flex')
      return i.flexDirection === 'column' || i.flexDirection === 'column-reverse'
        ? 'vertical'
        : 'horizontal';
    if (i.display === 'grid')
      return i.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (a && s.float && s.float !== 'none') {
      var d = s.float === 'left' ? 'left' : 'right';
      return o && (l.clear === 'both' || l.clear === d) ? 'vertical' : 'horizontal';
    }
    return a &&
      (s.display === 'block' ||
        s.display === 'flex' ||
        s.display === 'table' ||
        s.display === 'grid' ||
        (c >= r && i[Vt] === 'none') ||
        (o && i[Vt] === 'none' && c + u > r))
      ? 'vertical'
      : 'horizontal';
  },
  cr = function (e, t, i) {
    var r = i ? e.left : e.top,
      a = i ? e.right : e.bottom,
      o = i ? e.width : e.height,
      s = i ? t.left : t.top,
      l = i ? t.right : t.bottom,
      c = i ? t.width : t.height;
    return r === s || a === l || r + o / 2 === s + c / 2;
  },
  dr = function (e, t) {
    var i;
    return (
      Je.some(function (r) {
        var a = r[M].options.emptyInsertThreshold;
        if (!(!a || $t(r))) {
          var o = T(r),
            s = e >= o.left - a && e <= o.right + a,
            l = t >= o.top - a && t <= o.bottom + a;
          if (s && l) return (i = r);
        }
      }),
      i
    );
  },
  wn = function (e) {
    function t(a, o) {
      return function (s, l, c, u) {
        var d =
          s.options.group.name &&
          l.options.group.name &&
          s.options.group.name === l.options.group.name;
        if (a == null && (o || d)) return !0;
        if (a == null || a === !1) return !1;
        if (o && a === 'clone') return a;
        if (typeof a == 'function') return t(a(s, l, c, u), o)(s, l, c, u);
        var m = (o ? s : l).options.group.name;
        return a === !0 || (typeof a == 'string' && a === m) || (a.join && a.indexOf(m) > -1);
      };
    }
    var i = {},
      r = e.group;
    (!r || Ye(r) != 'object') && (r = { name: r }),
      (i.name = r.name),
      (i.checkPull = t(r.pull, !0)),
      (i.checkPut = t(r.put)),
      (i.revertClone = r.revertClone),
      (e.group = i);
  },
  In = function () {
    !En && g && f(g, 'display', 'none');
  },
  Sn = function () {
    !En && g && f(g, 'display', '');
  };
it &&
  !hn &&
  document.addEventListener(
    'click',
    function (n) {
      if (Ze)
        return (
          n.preventDefault(),
          n.stopPropagation && n.stopPropagation(),
          n.stopImmediatePropagation && n.stopImmediatePropagation(),
          (Ze = !1),
          !1
        );
    },
    !0,
  );
var de = function (e) {
    if (h) {
      e = e.touches ? e.touches[0] : e;
      var t = dr(e.clientX, e.clientY);
      if (t) {
        var i = {};
        for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
        (i.target = i.rootEl = t),
          (i.preventDefault = void 0),
          (i.stopPropagation = void 0),
          t[M]._onDragOver(i);
      }
    }
  },
  hr = function (e) {
    h && h.parentNode[M]._isOutsideThisEl(e.target);
  };
function p(n, e) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(n));
  (this.el = n), (this.options = e = Z({}, e)), (n[M] = this);
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return yn(n, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (o, s) {
      o.setData('Text', s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: p.supportPointer !== !1 && 'PointerEvent' in window && (!$e || Ft),
    emptyInsertThreshold: 5,
  };
  je.initializePlugins(this, n, t);
  for (var i in t) !(i in e) && (e[i] = t[i]);
  wn(e);
  for (var r in this)
    r.charAt(0) === '_' && typeof this[r] == 'function' && (this[r] = this[r].bind(this));
  (this.nativeDraggable = e.forceFallback ? !1 : lr),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer
      ? b(n, 'pointerdown', this._onTapStart)
      : (b(n, 'mousedown', this._onTapStart), b(n, 'touchstart', this._onTapStart)),
    this.nativeDraggable && (b(n, 'dragover', this), b(n, 'dragenter', this)),
    Je.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    Z(this, ir());
}
p.prototype = {
  constructor: p,
  _isOutsideThisEl: function (e) {
    !this.el.contains(e) && e !== this.el && (me = null);
  },
  _getDirection: function (e, t) {
    return typeof this.options.direction == 'function'
      ? this.options.direction.call(this, e, t, h)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        i = this.el,
        r = this.options,
        a = r.preventOnFilter,
        o = e.type,
        s = (e.touches && e.touches[0]) || (e.pointerType && e.pointerType === 'touch' && e),
        l = (s || e).target,
        c =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) ||
          l,
        u = r.filter;
      if (
        (Er(i),
        !h &&
          !((/mousedown|pointerdown/.test(o) && e.button !== 0) || r.disabled) &&
          !c.isContentEditable &&
          !(!this.nativeDraggable && $e && l && l.tagName.toUpperCase() === 'SELECT') &&
          ((l = X(l, r.draggable, i, !1)), !(l && l.animated) && Ue !== l))
      ) {
        if (((Ee = G(l)), (Me = G(l, r.draggable)), typeof u == 'function')) {
          if (u.call(this, e, l, this)) {
            F({ sortable: t, rootEl: c, name: 'filter', targetEl: l, toEl: i, fromEl: i }),
              L('filter', t, { evt: e }),
              a && e.preventDefault();
            return;
          }
        } else if (
          u &&
          ((u = u.split(',').some(function (d) {
            if (((d = X(c, d.trim(), i, !1)), d))
              return (
                F({ sortable: t, rootEl: d, name: 'filter', targetEl: l, fromEl: i, toEl: i }),
                L('filter', t, { evt: e }),
                !0
              );
          })),
          u)
        ) {
          a && e.preventDefault();
          return;
        }
        (r.handle && !X(c, r.handle, i, !1)) || this._prepareDragStart(e, s, l);
      }
    }
  },
  _prepareDragStart: function (e, t, i) {
    var r = this,
      a = r.el,
      o = r.options,
      s = a.ownerDocument,
      l;
    if (i && !h && i.parentNode === a) {
      var c = T(i);
      if (
        ((S = a),
        (h = i),
        (x = h.parentNode),
        (ue = h.nextSibling),
        (Ue = i),
        (Be = o.group),
        (p.dragged = h),
        (ce = { target: h, clientX: (t || e).clientX, clientY: (t || e).clientY }),
        (qt = ce.clientX - c.left),
        (Kt = ce.clientY - c.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (h.style['will-change'] = 'all'),
        (l = function () {
          if ((L('delayEnded', r, { evt: e }), p.eventCanceled)) {
            r._onDrop();
            return;
          }
          r._disableDelayedDragEvents(),
            !Xt && r.nativeDraggable && (h.draggable = !0),
            r._triggerDragStart(e, t),
            F({ sortable: r, name: 'choose', originalEvent: e }),
            R(h, o.chosenClass, !0);
        }),
        o.ignore.split(',').forEach(function (u) {
          pn(h, u.trim(), pt);
        }),
        b(s, 'dragover', de),
        b(s, 'mousemove', de),
        b(s, 'touchmove', de),
        o.supportPointer
          ? (b(s, 'pointerup', r._onDrop),
            !this.nativeDraggable && b(s, 'pointercancel', r._onDrop))
          : (b(s, 'mouseup', r._onDrop),
            b(s, 'touchend', r._onDrop),
            b(s, 'touchcancel', r._onDrop)),
        Xt && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (h.draggable = !0)),
        L('delayStart', this, { evt: e }),
        o.delay && (!o.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Re || J)))
      ) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        o.supportPointer
          ? (b(s, 'pointerup', r._disableDelayedDrag), b(s, 'pointercancel', r._disableDelayedDrag))
          : (b(s, 'mouseup', r._disableDelayedDrag),
            b(s, 'touchend', r._disableDelayedDrag),
            b(s, 'touchcancel', r._disableDelayedDrag)),
          b(s, 'mousemove', r._delayedDragTouchMoveHandler),
          b(s, 'touchmove', r._delayedDragTouchMoveHandler),
          o.supportPointer && b(s, 'pointermove', r._delayedDragTouchMoveHandler),
          (r._dragStartTimer = setTimeout(l, o.delay));
      } else l();
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >=
      Math.floor(
        this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1),
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    h && pt(h), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    v(e, 'mouseup', this._disableDelayedDrag),
      v(e, 'touchend', this._disableDelayedDrag),
      v(e, 'touchcancel', this._disableDelayedDrag),
      v(e, 'pointerup', this._disableDelayedDrag),
      v(e, 'pointercancel', this._disableDelayedDrag),
      v(e, 'mousemove', this._delayedDragTouchMoveHandler),
      v(e, 'touchmove', this._delayedDragTouchMoveHandler),
      v(e, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, t) {
    (t = t || (e.pointerType == 'touch' && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? b(document, 'pointermove', this._onTouchMove)
          : t
            ? b(document, 'touchmove', this._onTouchMove)
            : b(document, 'mousemove', this._onTouchMove)
        : (b(h, 'dragend', this), b(S, 'dragstart', this._onDragStart));
    try {
      document.selection
        ? qe(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch {}
  },
  _dragStarted: function (e, t) {
    if (((ve = !1), S && h)) {
      L('dragStarted', this, { evt: t }), this.nativeDraggable && b(document, 'dragover', hr);
      var i = this.options;
      !e && R(h, i.dragClass, !1),
        R(h, i.ghostClass, !0),
        (p.active = this),
        e && this._appendGhost(),
        F({ sortable: this, name: 'start', originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (z) {
      (this._lastX = z.clientX), (this._lastY = z.clientY), In();
      for (
        var e = document.elementFromPoint(z.clientX, z.clientY), t = e;
        e && e.shadowRoot && ((e = e.shadowRoot.elementFromPoint(z.clientX, z.clientY)), e !== t);

      )
        t = e;
      if ((h.parentNode[M]._isOutsideThisEl(e), t))
        do {
          if (t[M]) {
            var i = void 0;
            if (
              ((i = t[M]._onDragOver({
                clientX: z.clientX,
                clientY: z.clientY,
                target: e,
                rootEl: t,
              })),
              i && !this.options.dragoverBubble)
            )
              break;
          }
          e = t;
        } while ((t = fn(t)));
      Sn();
    }
  },
  _onTouchMove: function (e) {
    if (ce) {
      var t = this.options,
        i = t.fallbackTolerance,
        r = t.fallbackOffset,
        a = e.touches ? e.touches[0] : e,
        o = g && ye(g, !0),
        s = g && o && o.a,
        l = g && o && o.d,
        c = ze && _ && Wt(_),
        u = (a.clientX - ce.clientX + r.x) / (s || 1) + (c ? c[0] - ft[0] : 0) / (s || 1),
        d = (a.clientY - ce.clientY + r.y) / (l || 1) + (c ? c[1] - ft[1] : 0) / (l || 1);
      if (!p.active && !ve) {
        if (i && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < i)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        o
          ? ((o.e += u - (ht || 0)), (o.f += d - (ut || 0)))
          : (o = { a: 1, b: 0, c: 0, d: 1, e: u, f: d });
        var m = 'matrix('
          .concat(o.a, ',')
          .concat(o.b, ',')
          .concat(o.c, ',')
          .concat(o.d, ',')
          .concat(o.e, ',')
          .concat(o.f, ')');
        f(g, 'webkitTransform', m),
          f(g, 'mozTransform', m),
          f(g, 'msTransform', m),
          f(g, 'transform', m),
          (ht = u),
          (ut = d),
          (z = a);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : S,
        t = T(h, !0, ze, !0, e),
        i = this.options;
      if (ze) {
        for (
          _ = e;
          f(_, 'position') === 'static' && f(_, 'transform') === 'none' && _ !== document;

        )
          _ = _.parentNode;
        _ !== document.body && _ !== document.documentElement
          ? (_ === document && (_ = U()), (t.top += _.scrollTop), (t.left += _.scrollLeft))
          : (_ = U()),
          (ft = Wt(_));
      }
      (g = h.cloneNode(!0)),
        R(g, i.ghostClass, !1),
        R(g, i.fallbackClass, !0),
        R(g, i.dragClass, !0),
        f(g, 'transition', ''),
        f(g, 'transform', ''),
        f(g, 'box-sizing', 'border-box'),
        f(g, 'margin', 0),
        f(g, 'top', t.top),
        f(g, 'left', t.left),
        f(g, 'width', t.width),
        f(g, 'height', t.height),
        f(g, 'opacity', '0.8'),
        f(g, 'position', ze ? 'absolute' : 'fixed'),
        f(g, 'zIndex', '100000'),
        f(g, 'pointerEvents', 'none'),
        (p.ghost = g),
        e.appendChild(g),
        f(
          g,
          'transform-origin',
          (qt / parseInt(g.style.width)) * 100 + '% ' + (Kt / parseInt(g.style.height)) * 100 + '%',
        );
    }
  },
  _onDragStart: function (e, t) {
    var i = this,
      r = e.dataTransfer,
      a = i.options;
    if ((L('dragStart', this, { evt: e }), p.eventCanceled)) {
      this._onDrop();
      return;
    }
    L('setupClone', this),
      p.eventCanceled ||
        ((D = vn(h)),
        D.removeAttribute('id'),
        (D.draggable = !1),
        (D.style['will-change'] = ''),
        this._hideClone(),
        R(D, this.options.chosenClass, !1),
        (p.clone = D)),
      (i.cloneId = qe(function () {
        L('clone', i),
          !p.eventCanceled &&
            (i.options.removeCloneOnHide || S.insertBefore(D, h),
            i._hideClone(),
            F({ sortable: i, name: 'clone' }));
      })),
      !t && R(h, a.dragClass, !0),
      t
        ? ((Ze = !0), (i._loopId = setInterval(i._emulateDragOver, 50)))
        : (v(document, 'mouseup', i._onDrop),
          v(document, 'touchend', i._onDrop),
          v(document, 'touchcancel', i._onDrop),
          r && ((r.effectAllowed = 'move'), a.setData && a.setData.call(i, r, h)),
          b(document, 'drop', i),
          f(h, 'transform', 'translateZ(0)')),
      (ve = !0),
      (i._dragStartId = qe(i._dragStarted.bind(i, t, e))),
      b(document, 'selectstart', i),
      (Ae = !0),
      window.getSelection().removeAllRanges(),
      $e && f(document.body, 'user-select', 'none');
  },
  _onDragOver: function (e) {
    var t = this.el,
      i = e.target,
      r,
      a,
      o,
      s = this.options,
      l = s.group,
      c = p.active,
      u = Be === l,
      d = s.sort,
      m = A || c,
      w,
      E = this,
      y = !1;
    if (wt) return;
    function B(Ce, Tn) {
      L(
        Ce,
        E,
        W(
          {
            evt: e,
            isOwner: u,
            axis: w ? 'vertical' : 'horizontal',
            revert: o,
            dragRect: r,
            targetRect: a,
            canSort: d,
            fromSortable: m,
            target: i,
            completed: O,
            onMove: function (Nt, An) {
              return Xe(S, t, h, r, Nt, T(Nt), e, An);
            },
            changed: H,
          },
          Tn,
        ),
      );
    }
    function q() {
      B('dragOverAnimationCapture'),
        E.captureAnimationState(),
        E !== m && m.captureAnimationState();
    }
    function O(Ce) {
      return (
        B('dragOverCompleted', { insertion: Ce }),
        Ce &&
          (u ? c._hideClone() : c._showClone(E),
          E !== m &&
            (R(h, A ? A.options.ghostClass : c.options.ghostClass, !1), R(h, s.ghostClass, !0)),
          A !== E && E !== p.active ? (A = E) : E === p.active && A && (A = null),
          m === E && (E._ignoreWhileAnimating = i),
          E.animateAll(function () {
            B('dragOverAnimationComplete'), (E._ignoreWhileAnimating = null);
          }),
          E !== m && (m.animateAll(), (m._ignoreWhileAnimating = null))),
        ((i === h && !h.animated) || (i === t && !i.animated)) && (me = null),
        !s.dragoverBubble &&
          !e.rootEl &&
          i !== document &&
          (h.parentNode[M]._isOutsideThisEl(e.target), !Ce && de(e)),
        !s.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (y = !0)
      );
    }
    function H() {
      (j = G(h)),
        (ne = G(h, s.draggable)),
        F({
          sortable: E,
          name: 'change',
          toEl: t,
          newIndex: j,
          newDraggableIndex: ne,
          originalEvent: e,
        });
    }
    if (
      (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
      (i = X(i, s.draggable, t, !0)),
      B('dragOver'),
      p.eventCanceled)
    )
      return y;
    if (
      h.contains(e.target) ||
      (i.animated && i.animatingX && i.animatingY) ||
      E._ignoreWhileAnimating === i
    )
      return O(!1);
    if (
      ((Ze = !1),
      c &&
        !s.disabled &&
        (u
          ? d || (o = x !== S)
          : A === this ||
            ((this.lastPutMode = Be.checkPull(this, c, h, e)) && l.checkPut(this, c, h, e))))
    ) {
      if (
        ((w = this._getDirection(e, i) === 'vertical'),
        (r = T(h)),
        B('dragOverValid'),
        p.eventCanceled)
      )
        return y;
      if (o)
        return (
          (x = S),
          q(),
          this._hideClone(),
          B('revert'),
          p.eventCanceled || (ue ? S.insertBefore(h, ue) : S.appendChild(h)),
          O(!0)
        );
      var N = $t(t, s.draggable);
      if (!N || (gr(e, w, this) && !N.animated)) {
        if (N === h) return O(!1);
        if ((N && t === e.target && (i = N), i && (a = T(i)), Xe(S, t, h, r, i, a, e, !!i) !== !1))
          return (
            q(),
            N && N.nextSibling ? t.insertBefore(h, N.nextSibling) : t.appendChild(h),
            (x = t),
            H(),
            O(!0)
          );
      } else if (N && pr(e, w, this)) {
        var oe = we(t, 0, s, !0);
        if (oe === h) return O(!1);
        if (((i = oe), (a = T(i)), Xe(S, t, h, r, i, a, e, !1) !== !1))
          return q(), t.insertBefore(h, oe), (x = t), H(), O(!0);
      } else if (i.parentNode === t) {
        a = T(i);
        var Y = 0,
          se,
          Ie = h.parentNode !== t,
          k = !cr((h.animated && h.toRect) || r, (i.animated && i.toRect) || a, w),
          Se = w ? 'top' : 'left',
          Q = Ut(i, 'top', 'top') || Ut(h, 'top', 'top'),
          De = Q ? Q.scrollTop : void 0;
        me !== i && ((se = a[Se]), (ke = !1), (He = (!k && s.invertSwap) || Ie)),
          (Y = mr(
            e,
            i,
            a,
            w,
            k ? 1 : s.swapThreshold,
            s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold,
            He,
            me === i,
          ));
        var K;
        if (Y !== 0) {
          var le = G(h);
          do (le -= Y), (K = x.children[le]);
          while (K && (f(K, 'display') === 'none' || K === g));
        }
        if (Y === 0 || K === i) return O(!1);
        (me = i), (Ne = Y);
        var xe = i.nextElementSibling,
          ee = !1;
        ee = Y === 1;
        var Ge = Xe(S, t, h, r, i, a, e, ee);
        if (Ge !== !1)
          return (
            (Ge === 1 || Ge === -1) && (ee = Ge === 1),
            (wt = !0),
            setTimeout(fr, 30),
            q(),
            ee && !xe ? t.appendChild(h) : i.parentNode.insertBefore(h, ee ? xe : i),
            Q && mn(Q, 0, De - Q.scrollTop),
            (x = h.parentNode),
            se !== void 0 && !He && (We = Math.abs(se - T(i)[Se])),
            H(),
            O(!0)
          );
      }
      if (t.contains(h)) return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    v(document, 'mousemove', this._onTouchMove),
      v(document, 'touchmove', this._onTouchMove),
      v(document, 'pointermove', this._onTouchMove),
      v(document, 'dragover', de),
      v(document, 'mousemove', de),
      v(document, 'touchmove', de);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    v(e, 'mouseup', this._onDrop),
      v(e, 'touchend', this._onDrop),
      v(e, 'pointerup', this._onDrop),
      v(e, 'pointercancel', this._onDrop),
      v(e, 'touchcancel', this._onDrop),
      v(document, 'selectstart', this);
  },
  _onDrop: function (e) {
    var t = this.el,
      i = this.options;
    if (
      ((j = G(h)),
      (ne = G(h, i.draggable)),
      L('drop', this, { evt: e }),
      (x = h && h.parentNode),
      (j = G(h)),
      (ne = G(h, i.draggable)),
      p.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (ve = !1),
      (He = !1),
      (ke = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      It(this.cloneId),
      It(this._dragStartId),
      this.nativeDraggable && (v(document, 'drop', this), v(t, 'dragstart', this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      $e && f(document.body, 'user-select', ''),
      f(h, 'transform', ''),
      e &&
        (Ae && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()),
        g && g.parentNode && g.parentNode.removeChild(g),
        (S === x || (A && A.lastPutMode !== 'clone')) &&
          D &&
          D.parentNode &&
          D.parentNode.removeChild(D),
        h &&
          (this.nativeDraggable && v(h, 'dragend', this),
          pt(h),
          (h.style['will-change'] = ''),
          Ae && !ve && R(h, A ? A.options.ghostClass : this.options.ghostClass, !1),
          R(h, this.options.chosenClass, !1),
          F({
            sortable: this,
            name: 'unchoose',
            toEl: x,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e,
          }),
          S !== x
            ? (j >= 0 &&
                (F({ rootEl: x, name: 'add', toEl: x, fromEl: S, originalEvent: e }),
                F({ sortable: this, name: 'remove', toEl: x, originalEvent: e }),
                F({ rootEl: x, name: 'sort', toEl: x, fromEl: S, originalEvent: e }),
                F({ sortable: this, name: 'sort', toEl: x, originalEvent: e })),
              A && A.save())
            : j !== Ee &&
              j >= 0 &&
              (F({ sortable: this, name: 'update', toEl: x, originalEvent: e }),
              F({ sortable: this, name: 'sort', toEl: x, originalEvent: e })),
          p.active &&
            ((j == null || j === -1) && ((j = Ee), (ne = Me)),
            F({ sortable: this, name: 'end', toEl: x, originalEvent: e }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    L('nulling', this),
      (S =
        h =
        x =
        g =
        ue =
        D =
        Ue =
        ie =
        ce =
        z =
        Ae =
        j =
        ne =
        Ee =
        Me =
        me =
        Ne =
        A =
        Be =
        p.dragged =
        p.ghost =
        p.clone =
        p.active =
          null),
      Qe.forEach(function (e) {
        e.checked = !0;
      }),
      (Qe.length = ht = ut = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(e);
        break;
      case 'dragenter':
      case 'dragover':
        h && (this._onDragOver(e), ur(e));
        break;
      case 'selectstart':
        e.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (var e = [], t, i = this.el.children, r = 0, a = i.length, o = this.options; r < a; r++)
      (t = i[r]), X(t, o.draggable, this.el, !1) && e.push(t.getAttribute(o.dataIdAttr) || br(t));
    return e;
  },
  sort: function (e, t) {
    var i = {},
      r = this.el;
    this.toArray().forEach(function (a, o) {
      var s = r.children[o];
      X(s, this.options.draggable, r, !1) && (i[a] = s);
    }, this),
      t && this.captureAnimationState(),
      e.forEach(function (a) {
        i[a] && (r.removeChild(i[a]), r.appendChild(i[a]));
      }),
      t && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, t) {
    return X(e, t || this.options.draggable, this.el, !1);
  },
  option: function (e, t) {
    var i = this.options;
    if (t === void 0) return i[e];
    var r = je.modifyOption(this, e, t);
    typeof r < 'u' ? (i[e] = r) : (i[e] = t), e === 'group' && wn(i);
  },
  destroy: function () {
    L('destroy', this);
    var e = this.el;
    (e[M] = null),
      v(e, 'mousedown', this._onTapStart),
      v(e, 'touchstart', this._onTapStart),
      v(e, 'pointerdown', this._onTapStart),
      this.nativeDraggable && (v(e, 'dragover', this), v(e, 'dragenter', this)),
      Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), function (t) {
        t.removeAttribute('draggable');
      }),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      Je.splice(Je.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!ie) {
      if ((L('hideClone', this), p.eventCanceled)) return;
      f(D, 'display', 'none'),
        this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D),
        (ie = !0);
    }
  },
  _showClone: function (e) {
    if (e.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (ie) {
      if ((L('showClone', this), p.eventCanceled)) return;
      h.parentNode == S && !this.options.group.revertClone
        ? S.insertBefore(D, h)
        : ue
          ? S.insertBefore(D, ue)
          : S.appendChild(D),
        this.options.group.revertClone && this.animate(h, D),
        f(D, 'display', ''),
        (ie = !1);
    }
  },
};
function ur(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = 'move'), n.cancelable && n.preventDefault();
}
function Xe(n, e, t, i, r, a, o, s) {
  var l,
    c = n[M],
    u = c.options.onMove,
    d;
  return (
    window.CustomEvent && !J && !Re
      ? (l = new CustomEvent('move', { bubbles: !0, cancelable: !0 }))
      : ((l = document.createEvent('Event')), l.initEvent('move', !0, !0)),
    (l.to = e),
    (l.from = n),
    (l.dragged = t),
    (l.draggedRect = i),
    (l.related = r || e),
    (l.relatedRect = a || T(e)),
    (l.willInsertAfter = s),
    (l.originalEvent = o),
    n.dispatchEvent(l),
    u && (d = u.call(c, l, o)),
    d
  );
}
function pt(n) {
  n.draggable = !1;
}
function fr() {
  wt = !1;
}
function pr(n, e, t) {
  var i = T(we(t.el, 0, t.options, !0)),
    r = bn(t.el, t.options, g),
    a = 10;
  return e
    ? n.clientX < r.left - a || (n.clientY < i.top && n.clientX < i.right)
    : n.clientY < r.top - a || (n.clientY < i.bottom && n.clientX < i.left);
}
function gr(n, e, t) {
  var i = T($t(t.el, t.options.draggable)),
    r = bn(t.el, t.options, g),
    a = 10;
  return e
    ? n.clientX > r.right + a || (n.clientY > i.bottom && n.clientX > i.left)
    : n.clientY > r.bottom + a || (n.clientX > i.right && n.clientY > i.top);
}
function mr(n, e, t, i, r, a, o, s) {
  var l = i ? n.clientY : n.clientX,
    c = i ? t.height : t.width,
    u = i ? t.top : t.left,
    d = i ? t.bottom : t.right,
    m = !1;
  if (!o) {
    if (s && We < c * r) {
      if ((!ke && (Ne === 1 ? l > u + (c * a) / 2 : l < d - (c * a) / 2) && (ke = !0), ke)) m = !0;
      else if (Ne === 1 ? l < u + We : l > d - We) return -Ne;
    } else if (l > u + (c * (1 - r)) / 2 && l < d - (c * (1 - r)) / 2) return vr(e);
  }
  return (
    (m = m || o), m && (l < u + (c * a) / 2 || l > d - (c * a) / 2) ? (l > u + c / 2 ? 1 : -1) : 0
  );
}
function vr(n) {
  return G(h) < G(n) ? 1 : -1;
}
function br(n) {
  for (var e = n.tagName + n.className + n.src + n.href + n.textContent, t = e.length, i = 0; t--; )
    i += e.charCodeAt(t);
  return i.toString(36);
}
function Er(n) {
  Qe.length = 0;
  for (var e = n.getElementsByTagName('input'), t = e.length; t--; ) {
    var i = e[t];
    i.checked && Qe.push(i);
  }
}
function qe(n) {
  return setTimeout(n, 0);
}
function It(n) {
  return clearTimeout(n);
}
it &&
  b(document, 'touchmove', function (n) {
    (p.active || ve) && n.cancelable && n.preventDefault();
  });
p.utils = {
  on: b,
  off: v,
  css: f,
  find: pn,
  is: function (e, t) {
    return !!X(e, t, e, !1);
  },
  extend: tr,
  throttle: gn,
  closest: X,
  toggleClass: R,
  clone: vn,
  index: G,
  nextTick: qe,
  cancelNextTick: It,
  detectDirection: yn,
  getChild: we,
  expando: M,
};
p.get = function (n) {
  return n[M];
};
p.mount = function () {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]),
    e.forEach(function (i) {
      if (!i.prototype || !i.prototype.constructor)
        throw 'Sortable: Mounted plugin must be a constructor function, not '.concat(
          {}.toString.call(i),
        );
      i.utils && (p.utils = W(W({}, p.utils), i.utils)), je.mount(i);
    });
};
p.create = function (n, e) {
  return new p(n, e);
};
p.version = Qi;
var C = [],
  _e,
  St,
  Dt = !1,
  gt,
  mt,
  et,
  Pe;
function yr() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0,
    };
    for (var e in this)
      e.charAt(0) === '_' && typeof this[e] == 'function' && (this[e] = this[e].bind(this));
  }
  return (
    (n.prototype = {
      dragStarted: function (t) {
        var i = t.originalEvent;
        this.sortable.nativeDraggable
          ? b(document, 'dragover', this._handleAutoScroll)
          : this.options.supportPointer
            ? b(document, 'pointermove', this._handleFallbackAutoScroll)
            : i.touches
              ? b(document, 'touchmove', this._handleFallbackAutoScroll)
              : b(document, 'mousemove', this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (t) {
        var i = t.originalEvent;
        !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? v(document, 'dragover', this._handleAutoScroll)
          : (v(document, 'pointermove', this._handleFallbackAutoScroll),
            v(document, 'touchmove', this._handleFallbackAutoScroll),
            v(document, 'mousemove', this._handleFallbackAutoScroll)),
          Zt(),
          Ke(),
          nr();
      },
      nulling: function () {
        (et = St = _e = Dt = Pe = gt = mt = null), (C.length = 0);
      },
      _handleFallbackAutoScroll: function (t) {
        this._handleAutoScroll(t, !0);
      },
      _handleAutoScroll: function (t, i) {
        var r = this,
          a = (t.touches ? t.touches[0] : t).clientX,
          o = (t.touches ? t.touches[0] : t).clientY,
          s = document.elementFromPoint(a, o);
        if (((et = t), i || this.options.forceAutoScrollFallback || Re || J || $e)) {
          vt(t, this.options, s, i);
          var l = re(s, !0);
          Dt &&
            (!Pe || a !== gt || o !== mt) &&
            (Pe && Zt(),
            (Pe = setInterval(function () {
              var c = re(document.elementFromPoint(a, o), !0);
              c !== l && ((l = c), Ke()), vt(t, r.options, c, i);
            }, 10)),
            (gt = a),
            (mt = o));
        } else {
          if (!this.options.bubbleScroll || re(s, !0) === U()) {
            Ke();
            return;
          }
          vt(t, this.options, re(s, !1), !1);
        }
      },
    }),
    Z(n, { pluginName: 'scroll', initializeByDefault: !0 })
  );
}
function Ke() {
  C.forEach(function (n) {
    clearInterval(n.pid);
  }),
    (C = []);
}
function Zt() {
  clearInterval(Pe);
}
var vt = gn(function (n, e, t, i) {
    if (e.scroll) {
      var r = (n.touches ? n.touches[0] : n).clientX,
        a = (n.touches ? n.touches[0] : n).clientY,
        o = e.scrollSensitivity,
        s = e.scrollSpeed,
        l = U(),
        c = !1,
        u;
      St !== t &&
        ((St = t), Ke(), (_e = e.scroll), (u = e.scrollFn), _e === !0 && (_e = re(t, !0)));
      var d = 0,
        m = _e;
      do {
        var w = m,
          E = T(w),
          y = E.top,
          B = E.bottom,
          q = E.left,
          O = E.right,
          H = E.width,
          N = E.height,
          oe = void 0,
          Y = void 0,
          se = w.scrollWidth,
          Ie = w.scrollHeight,
          k = f(w),
          Se = w.scrollLeft,
          Q = w.scrollTop;
        w === l
          ? ((oe =
              H < se &&
              (k.overflowX === 'auto' || k.overflowX === 'scroll' || k.overflowX === 'visible')),
            (Y =
              N < Ie &&
              (k.overflowY === 'auto' || k.overflowY === 'scroll' || k.overflowY === 'visible')))
          : ((oe = H < se && (k.overflowX === 'auto' || k.overflowX === 'scroll')),
            (Y = N < Ie && (k.overflowY === 'auto' || k.overflowY === 'scroll')));
        var De = oe && (Math.abs(O - r) <= o && Se + H < se) - (Math.abs(q - r) <= o && !!Se),
          K = Y && (Math.abs(B - a) <= o && Q + N < Ie) - (Math.abs(y - a) <= o && !!Q);
        if (!C[d]) for (var le = 0; le <= d; le++) C[le] || (C[le] = {});
        (C[d].vx != De || C[d].vy != K || C[d].el !== w) &&
          ((C[d].el = w),
          (C[d].vx = De),
          (C[d].vy = K),
          clearInterval(C[d].pid),
          (De != 0 || K != 0) &&
            ((c = !0),
            (C[d].pid = setInterval(
              function () {
                i && this.layer === 0 && p.active._onTouchMove(et);
                var xe = C[this.layer].vy ? C[this.layer].vy * s : 0,
                  ee = C[this.layer].vx ? C[this.layer].vx * s : 0;
                (typeof u == 'function' &&
                  u.call(p.dragged.parentNode[M], ee, xe, n, et, C[this.layer].el) !==
                    'continue') ||
                  mn(C[this.layer].el, ee, xe);
              }.bind({ layer: d }),
              24,
            )))),
          d++;
      } while (e.bubbleScroll && m !== l && (m = re(m, !1)));
      Dt = c;
    }
  }, 30),
  Dn = function (e) {
    var t = e.originalEvent,
      i = e.putSortable,
      r = e.dragEl,
      a = e.activeSortable,
      o = e.dispatchSortableEvent,
      s = e.hideGhostForTarget,
      l = e.unhideGhostForTarget;
    if (t) {
      var c = i || a;
      s();
      var u = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        d = document.elementFromPoint(u.clientX, u.clientY);
      l(), c && !c.el.contains(d) && (o('spill'), this.onSpill({ dragEl: r, putSortable: i }));
    }
  };
function Lt() {}
Lt.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (e) {
    var t = e.dragEl,
      i = e.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var r = we(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      i && i.animateAll();
  },
  drop: Dn,
};
Z(Lt, { pluginName: 'revertOnSpill' });
function Mt() {}
Mt.prototype = {
  onSpill: function (e) {
    var t = e.dragEl,
      i = e.putSortable,
      r = i || this.sortable;
    r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll();
  },
  drop: Dn,
};
Z(Mt, { pluginName: 'removeOnSpill' });
p.mount(new yr());
p.mount(Mt, Lt);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const rt = new Set(),
  wr = {
    ghostClass: 'calcite-sortable--ghost',
    chosenClass: 'calcite-sortable--chosen',
    dragClass: 'calcite-sortable--drag',
    fallbackClass: 'calcite-sortable--fallback',
  };
function Ir(n) {
  if (Cn(n)) return;
  xn(n), rt.add(n);
  const e = 'id',
    { group: t, handleSelector: i, dragSelector: r } = n;
  n.sortable = p.create(n.el, {
    dataIdAttr: e,
    ...wr,
    ...(!!r && { draggable: r }),
    ...(!!t && {
      group: {
        name: t,
        ...(!!n.canPull && {
          pull: (a, o, s, { newDraggableIndex: l, oldDraggableIndex: c }) =>
            n.canPull({ toEl: a.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c }),
        }),
        ...(!!n.canPut && {
          put: (a, o, s, { newDraggableIndex: l, oldDraggableIndex: c }) =>
            n.canPut({ toEl: a.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c }),
        }),
      },
    }),
    onMove: ({ from: a, dragged: o, to: s, related: l }) => {
      n.onDragMove && n.onDragMove({ fromEl: a, dragEl: o, toEl: s, relatedEl: l });
    },
    handle: i,
    filter: `${i}[disabled]`,
    onStart: ({ from: a, item: o, to: s, newDraggableIndex: l, oldDraggableIndex: c }) => {
      (xt.active = !0),
        Sr(),
        n.onDragStart({ fromEl: a, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
    onEnd: ({ from: a, item: o, to: s, newDraggableIndex: l, oldDraggableIndex: c }) => {
      (xt.active = !1),
        Dr(),
        n.onDragEnd({ fromEl: a, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
    onSort: ({ from: a, item: o, to: s, newDraggableIndex: l, oldDraggableIndex: c }) => {
      n.onDragSort({ fromEl: a, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
  });
}
function xn(n) {
  var e;
  Cn(n) || (rt.delete(n), (e = n.sortable) == null || e.destroy(), (n.sortable = null));
}
const xt = { active: !1 };
function Cn(n) {
  return n.dragEnabled && xt.active;
}
function Sr() {
  Array.from(rt).forEach((n) => n.onGlobalDragStart());
}
function Dr() {
  Array.from(rt).forEach((n) => n.onGlobalDragEnd());
}
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const te = {
    container: 'container',
    table: 'table',
    scrim: 'scrim',
    stack: 'stack',
    tableContainer: 'table-container',
    sticky: 'sticky-pos',
    assistiveText: 'assistive-text',
  },
  bt = {
    filterNoResults: 'filter-no-results',
    filterActionsStart: 'filter-actions-start',
    filterActionsEnd: 'filter-actions-end',
  },
  xr = _t`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}.stack{--calcite-stack-padding-inline: 0;--calcite-stack-padding-block: 0}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`,
  Cr = `${Et}, ${Te}`,
  nt = class nt extends Pt {
    constructor() {
      super(),
        (this.dragSelector = Te),
        (this.focusableItems = []),
        (this.handleSelector = 'calcite-sort-handle'),
        (this.listItems = []),
        (this.listItemGroups = []),
        (this.mutationObserver = Fn('mutation', () => {
          (this.willPerformFilter = !0), this.updateListItems();
        })),
        (this.updateListItems = Qt(() => {
          this.updateGroupItems();
          const {
              selectionAppearance: e,
              selectionMode: t,
              interactionMode: i,
              dragEnabled: r,
              el: a,
              filterEl: o,
              moveToItems: s,
              displayMode: l,
              scale: c,
            } = this,
            u = Array.from(this.el.querySelectorAll(Te));
          if (
            (u.forEach((d) => {
              (d.scale = c),
                (d.selectionAppearance = e),
                (d.selectionMode = t),
                (d.interactionMode = i),
                d.closest(at) === a &&
                  ((d.moveToItems = s.filter((m) => m.element !== a && !d.contains(m.element))),
                  (d.dragHandle = r),
                  (d.displayMode = l));
            }),
            this.parentListEl)
          ) {
            this.setUpSorting();
            return;
          }
          (this.listItems = u),
            this.filterEnabled &&
              this.willPerformFilter &&
              ((this.willPerformFilter = !1),
              (this.dataForFilter = this.getItemData()),
              o && ((o.items = this.dataForFilter), this.filterAndUpdateData())),
            (this.visibleItems = this.listItems.filter((d) => !d.closed && !d.hidden)),
            this.updateFilteredItems(),
            this.borderItems(),
            (this.focusableItems = this.filteredItems.filter((d) => !d.disabled)),
            this.setActiveListItem(),
            this.updateSelectedItems(),
            this.setUpSorting();
        }, en.nextTick)),
        (this.visibleItems = []),
        (this.willFilterEmit = !1),
        (this.willPerformFilter = !1),
        (this.dataForFilter = []),
        (this.hasFilterActionsEnd = !1),
        (this.hasFilterActionsStart = !1),
        (this.hasFilterNoResults = !1),
        (this.moveToItems = []),
        (this.disabled = !1),
        (this.dragEnabled = !1),
        (this.filterEnabled = !1),
        (this.filteredData = []),
        (this.filteredItems = []),
        (this.interactionMode = 'interactive'),
        (this.loading = !1),
        (this.messages = tn({ blocking: !0 })),
        (this.displayMode = 'flat'),
        (this.scale = 'm'),
        (this.selectedItems = []),
        (this.selectionAppearance = 'icon'),
        (this.selectionMode = 'none'),
        (this.calciteInternalListDefaultSlotChange = he({ cancelable: !1 })),
        (this.calciteListChange = he({ cancelable: !1 })),
        (this.calciteListDragEnd = he({ cancelable: !1 })),
        (this.calciteListDragStart = he({ cancelable: !1 })),
        (this.calciteListFilter = he({ cancelable: !1 })),
        (this.calciteListOrderChange = he({ cancelable: !1 })),
        this.listen('calciteInternalListItemToggle', this.handleCalciteListItemToggle),
        this.listen(
          'calciteInternalFocusPreviousItem',
          this.handleCalciteInternalFocusPreviousItem,
        ),
        this.listen('calciteInternalListItemActive', this.handleCalciteInternalListItemActive),
        this.listen('calciteListItemSelect', this.handleCalciteListItemSelect),
        this.listen(
          'calciteInternalAssistiveTextChange',
          this.handleCalciteInternalAssistiveTextChange,
        ),
        this.listen('calciteSortHandleReorder', this.handleSortReorder),
        this.listen('calciteSortHandleMove', this.handleSortMove),
        this.listen('calciteInternalListItemSelect', this.handleCalciteInternalListItemSelect),
        this.listen(
          'calciteInternalListItemSelectMultiple',
          this.handleCalciteInternalListItemSelectMultiple,
        ),
        this.listen('calciteInternalListItemChange', this.handleCalciteInternalListItemChange),
        this.listen(
          'calciteInternalListItemGroupDefaultSlotChange',
          this.handleCalciteInternalListItemGroupDefaultSlotChange,
        );
    }
    get hasActiveFilter() {
      return (
        this.filterEnabled &&
        this.filterText &&
        this.filteredItems.length !== this.visibleItems.length
      );
    }
    get showNoResultsContainer() {
      return (
        this.filterEnabled &&
        this.filterText &&
        this.hasFilterNoResults &&
        this.visibleItems.length &&
        !this.filteredItems.length
      );
    }
    async setFocus() {
      var e, t;
      return (
        await nn(this),
        this.filterEnabled
          ? (e = this.filterEl) == null
            ? void 0
            : e.setFocus()
          : (t = this.focusableItems.find((i) => i.active)) == null
            ? void 0
            : t.setFocus()
      );
    }
    connectedCallback() {
      super.connectedCallback(),
        this.connectObserver(),
        (this.willPerformFilter = !0),
        this.updateListItems(),
        this.setUpSorting(),
        this.setParentList(),
        this.setListItemGroups();
    }
    async load() {
      this.handleInteractionModeWarning();
    }
    willUpdate(e) {
      (e.has('filterText') || e.has('filterProps') || e.has('filterPredicate')) &&
        this.performFilter(),
        ((e.has('filterEnabled') && (this.hasUpdated || this.filterEnabled !== !1)) ||
          e.has('group') ||
          (e.has('dragEnabled') && (this.hasUpdated || this.dragEnabled !== !1)) ||
          (e.has('selectionMode') && (this.hasUpdated || this.selectionMode !== 'none')) ||
          (e.has('selectionAppearance') &&
            (this.hasUpdated || this.selectionAppearance !== 'icon')) ||
          (e.has('displayMode') && this.hasUpdated) ||
          (e.has('scale') && this.hasUpdated) ||
          (e.has('filterPredicate') && this.hasUpdated)) &&
          this.handleListItemChange();
    }
    updated() {
      rn(this);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.disconnectObserver(), xn(this);
    }
    handleListItemChange() {
      (this.willPerformFilter = !0), this.updateListItems();
    }
    handleCalciteListItemToggle(e) {
      this.parentListEl || (e.stopPropagation(), this.borderItems());
    }
    handleCalciteInternalFocusPreviousItem(e) {
      if (this.parentListEl) return;
      e.stopPropagation();
      const { focusableItems: t } = this,
        i = t.findIndex((r) => r.active) - 1;
      t[i] && this.focusRow(t[i]);
    }
    handleCalciteInternalListItemActive(e) {
      if (this.parentListEl) return;
      e.stopPropagation();
      const t = e.target,
        { listItems: i } = this;
      i.forEach((r) => {
        r.active = r === t;
      });
    }
    handleCalciteListItemSelect() {
      this.parentListEl || this.updateSelectedItems(!0);
    }
    handleCalciteInternalAssistiveTextChange(e) {
      (this.assistiveText = e.detail.message), e.stopPropagation();
    }
    handleSortReorder(e) {
      this.parentListEl || this.handleReorder(e);
    }
    handleSortMove(e) {
      this.parentListEl || this.handleMove(e);
    }
    handleCalciteInternalListItemSelect(e) {
      if (this.parentListEl) return;
      e.stopPropagation();
      const t = e.target,
        { listItems: i, selectionMode: r } = this;
      t.selected &&
        (r === 'single' || r === 'single-persist') &&
        i.forEach((a) => (a.selected = a === t)),
        this.updateSelectedItems();
    }
    handleCalciteInternalListItemSelectMultiple(e) {
      if (this.parentListEl) return;
      e.stopPropagation();
      const { target: t, detail: i } = e,
        { focusableItems: r, lastSelectedInfo: a } = this,
        o = t;
      if (i.selectMultiple && a) {
        const s = r.indexOf(o),
          l = r.indexOf(a.selectedItem),
          c = Math.min(l, s),
          u = Math.max(l, s);
        r.slice(c, u + 1).forEach((d) => (d.selected = a.selected));
      } else this.lastSelectedInfo = { selectedItem: o, selected: o.selected };
    }
    handleCalciteInternalListItemChange(e) {
      this.parentListEl || (e.stopPropagation(), this.updateListItems());
    }
    handleCalciteInternalListItemGroupDefaultSlotChange(e) {
      e.stopPropagation();
    }
    connectObserver() {
      var e;
      (e = this.mutationObserver) == null || e.observe(this.el, { childList: !0, subtree: !0 });
    }
    disconnectObserver() {
      var e;
      (e = this.mutationObserver) == null || e.disconnect();
    }
    setUpSorting() {
      const { dragEnabled: e } = this;
      e && Ir(this);
    }
    onGlobalDragStart() {
      this.disconnectObserver();
    }
    onGlobalDragEnd() {
      this.connectObserver();
    }
    onDragEnd(e) {
      this.calciteListDragEnd.emit(e);
    }
    onDragMove({ relatedEl: e }) {
      e.expanded = !0;
    }
    onDragStart(e) {
      (e.dragEl.sortHandleOpen = !1), this.calciteListDragStart.emit(e);
    }
    onDragSort(e) {
      this.setParentList(), this.updateListItems(), this.calciteListOrderChange.emit(e);
    }
    setParentList() {
      var e;
      this.parentListEl = (e = this.el.parentElement) == null ? void 0 : e.closest(at);
    }
    handleDefaultSlotChange(e) {
      kn(e.target), this.parentListEl && this.calciteInternalListDefaultSlotChange.emit();
    }
    setListItemGroups() {
      this.listItemGroups = Array.from(this.el.querySelectorAll(Et));
    }
    handleFilterActionsStartSlotChange(e) {
      this.hasFilterActionsStart = fe(e);
    }
    handleFilterActionsEndSlotChange(e) {
      this.hasFilterActionsEnd = fe(e);
    }
    handleFilterNoResultsSlotChange(e) {
      this.hasFilterNoResults = fe(e);
    }
    setActiveListItem() {
      const { focusableItems: e } = this;
      e.some((t) => t.active) || (e[0] && (e[0].active = !0));
    }
    async updateSelectedItems(e = !1) {
      await this.updateComplete,
        (this.selectedItems = this.visibleItems.filter((t) => t.selected)),
        e && this.calciteListChange.emit();
    }
    filterElements({ el: e, filteredItems: t, visibleParents: i }) {
      const r = !i.has(e) && !t.includes(e);
      e.filterHidden = r;
      const a = e.parentElement.closest(Cr);
      a && (r || i.add(a), this.filterElements({ el: a, filteredItems: t, visibleParents: i }));
    }
    allParentListItemsExpanded(e) {
      var i;
      const t = (i = e.parentElement) == null ? void 0 : i.closest(Te);
      if (t) {
        if (!t.expanded) return !1;
      } else return !0;
      return this.allParentListItemsExpanded(t);
    }
    borderItems() {
      const e = this.visibleItems.filter(
        (t) => !t.filterHidden && this.allParentListItemsExpanded(t),
      );
      e.forEach((t) => (t.bordered = t !== e[e.length - 1]));
    }
    updateFilteredItems() {
      const { visibleItems: e, filteredData: t, filterText: i, filterPredicate: r } = this,
        a = e == null ? void 0 : e.filter((l) => e.every((c) => c === l || !l.contains(c))),
        o = r ? e.filter(r) : i ? t.map((l) => l.el) : e || [],
        s = new WeakSet();
      a.forEach((l) => this.filterElements({ el: l, filteredItems: o, visibleParents: s })),
        (this.filteredItems = o),
        this.willFilterEmit && ((this.willFilterEmit = !1), this.calciteListFilter.emit());
    }
    updateFilteredData() {
      const { filterEl: e } = this;
      e && (e.filteredItems && (this.filteredData = e.filteredItems), this.updateListItems());
    }
    async filterAndUpdateData() {
      var e;
      await ((e = this.filterEl) == null ? void 0 : e.filter(this.filterText)),
        this.updateFilteredData();
    }
    get effectiveFilterProps() {
      return this.filterProps
        ? this.filterProps.filter((e) => e !== 'el')
        : ['description', 'label', 'metadata', 'heading'];
    }
    performFilter() {
      const { filterEl: e, filterText: t, effectiveFilterProps: i } = this;
      e && ((e.value = t), (e.filterProps = i), this.filterAndUpdateData());
    }
    setFilterEl(e) {
      (this.filterEl = e), this.performFilter();
    }
    handleFilterChange(e) {
      e.stopPropagation();
      const { value: t } = e.currentTarget;
      (this.filterText = t), (this.willFilterEmit = !0), this.updateFilteredData();
    }
    getItemData() {
      return this.listItems.map((e) => ({
        label: e.label,
        description: e.description,
        metadata: e.metadata,
        heading: this.getGroupHeading(e),
        el: e,
      }));
    }
    getGroupHeading(e) {
      return this.listItemGroups.filter((t) => t.contains(e)).map((t) => t.heading);
    }
    updateGroupItems() {
      const { el: e, group: t, scale: i } = this,
        r = $n(e),
        a = t
          ? Array.from(r.querySelectorAll(`${at}[group="${t}"]`)).filter(
              (o) => !o.disabled && o.dragEnabled,
            )
          : [];
      (this.moveToItems = a.map((o) => ({ element: o, label: o.label ?? o.id, id: Ln() }))),
        Array.from(this.el.querySelectorAll(Et)).forEach((o) => {
          o.scale = i;
        });
    }
    focusRow(e) {
      const { focusableItems: t } = this;
      e && (t.forEach((i) => (i.active = i === e)), e.setFocus());
    }
    isNavigable(e) {
      var i;
      const t = (i = e.parentElement) == null ? void 0 : i.closest(Te);
      return t ? t.expanded && this.isNavigable(t) : !0;
    }
    handleListKeydown(e) {
      var a;
      if (e.defaultPrevented || this.parentListEl) return;
      const { key: t } = e,
        i = this.focusableItems.filter((o) => this.isNavigable(o)),
        r = i.findIndex((o) => o.active);
      if (t === 'ArrowDown') {
        e.preventDefault();
        const o = e.target === this.filterEl ? 0 : r + 1;
        i[o] && this.focusRow(i[o]);
      } else if (t === 'ArrowUp') {
        if ((e.preventDefault(), r === 0 && this.filterEnabled)) {
          (a = this.filterEl) == null || a.setFocus();
          return;
        }
        const o = r - 1;
        i[o] && this.focusRow(i[o]);
      } else if (t === 'Home') {
        e.preventDefault();
        const o = i[0];
        o && this.focusRow(o);
      } else if (t === 'End') {
        e.preventDefault();
        const o = i[i.length - 1];
        o && this.focusRow(o);
      }
    }
    handleInteractionModeWarning() {
      this.interactionMode === 'static' &&
        this.selectionMode !== 'none' &&
        this.selectionAppearance === 'border' &&
        console.warn('selection-appearance="border" requires interaction-mode="interactive"');
    }
    handleMove(e) {
      const { moveTo: t } = e.detail,
        i = e.target,
        r = i == null ? void 0 : i.parentElement,
        a = t.element,
        o = Array.from(r.children).filter(ot).indexOf(i);
      if (!r) return;
      (i.sortHandleOpen = !1), this.disconnectObserver(), a.prepend(i), Rn(i);
      const s = Array.from(a.children).filter(ot).indexOf(i);
      this.updateListItems(),
        this.connectObserver(),
        this.calciteListOrderChange.emit({
          dragEl: i,
          fromEl: r,
          toEl: a,
          newIndex: s,
          oldIndex: o,
        });
    }
    handleReorder(e) {
      const { reorder: t } = e.detail,
        i = e.target,
        r = i == null ? void 0 : i.parentElement;
      if (!r) return;
      i.sortHandleOpen = !1;
      const a = Array.from(r.children).filter(ot),
        o = a.length - 1,
        s = a.indexOf(i);
      let l = s;
      switch (t) {
        case 'top':
          l = 0;
          break;
        case 'bottom':
          l = o;
          break;
        case 'up':
          l = s === 0 ? 0 : s - 1;
          break;
        case 'down':
          l = s === o ? o : s + 1;
          break;
      }
      this.disconnectObserver();
      const c = t === 'up' || t === 'top' ? a[l] : a[l].nextSibling;
      r.insertBefore(i, c),
        this.updateListItems(),
        this.connectObserver(),
        this.calciteListOrderChange.emit({
          dragEl: i,
          fromEl: r,
          toEl: r,
          newIndex: l,
          oldIndex: s,
        });
    }
    render() {
      const {
        loading: e,
        label: t,
        disabled: i,
        dataForFilter: r,
        filterEnabled: a,
        filterPlaceholder: o,
        filterText: s,
        filterLabel: l,
        hasFilterActionsStart: c,
        hasFilterActionsEnd: u,
        effectiveFilterProps: d,
      } = this;
      return an({
        disabled: this.disabled,
        children: P`<div class=${$(te.container)}>${this.dragEnabled ? P`<span aria-live=assertive class=${$(te.assistiveText)}>${this.assistiveText}</span>` : null}${this.renderItemAriaLive()}${e ? P`<calcite-scrim class=${$(te.scrim)} .loading=${e}></calcite-scrim>` : null}<div .ariaBusy=${e} .ariaLabel=${t || ''} class=${$(te.table)} @keydown=${this.handleListKeydown} role=treegrid>${a || c || u ? P`<div class=${$(te.sticky)} role=rowgroup><div role=row><div role=columnheader><calcite-stack class=${$(te.stack)}><slot name=${bt.filterActionsStart} @slotchange=${this.handleFilterActionsStartSlotChange} slot=${be.actionsStart}></slot><calcite-filter .ariaLabel=${o} .disabled=${i} .filterProps=${d} .items=${r} .label=${l} @calciteFilterChange=${this.handleFilterChange} .placeholder=${o} .scale=${this.scale} .value=${s} ${on(this.setFilterEl)}></calcite-filter><slot name=${bt.filterActionsEnd} @slotchange=${this.handleFilterActionsEndSlotChange} slot=${be.actionsEnd}></slot></calcite-stack></div></div></div>` : null}<div class=${$(te.tableContainer)} role=rowgroup><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div><div aria-live=polite data-test-id=no-results-container .hidden=${!this.showNoResultsContainer}><slot name=${bt.filterNoResults} @slotchange=${this.handleFilterNoResultsSlotChange}></slot></div></div>`,
      });
    }
    renderItemAriaLive() {
      const {
        messages: e,
        filteredItems: t,
        parentListEl: i,
        messages: { _lang: r },
        numberingSystem: a,
      } = this;
      return (
        (kt.numberFormatOptions = { locale: r, numberingSystem: a }),
        i
          ? null
          : P`<div aria-live=polite class=${$(te.assistiveText)}>${this.hasActiveFilter ? Oe('aria-filter-enabled', P`<div>${e.filterEnabled}</div>`) : null}${Oe('aria-item-count', P`<div>${e.total.replace('{count}', kt.localize(t.length.toString()))}</div>`)}${t.length ? Oe('aria-item-list', P`<ol>${t.map((o) => P`<li>${o.label}</li>`)}</ol>`) : null}</div>`
      );
    }
  };
(nt.properties = {
  assistiveText: 16,
  dataForFilter: 16,
  hasFilterActionsEnd: 16,
  hasFilterActionsStart: 16,
  hasFilterNoResults: 16,
  moveToItems: 16,
  hasActiveFilter: 16,
  showNoResultsContainer: 16,
  canPull: 0,
  canPut: 0,
  disabled: 7,
  dragEnabled: 7,
  filterEnabled: 7,
  filterPredicate: 0,
  filterLabel: 3,
  filterPlaceholder: 3,
  filterProps: 0,
  filterText: 3,
  filteredData: 0,
  filteredItems: 0,
  group: 3,
  interactionMode: 3,
  label: 1,
  loading: 7,
  messageOverrides: 0,
  displayMode: 3,
  numberingSystem: 1,
  scale: 3,
  selectedItems: 0,
  selectionAppearance: 3,
  selectionMode: 3,
}),
  (nt.styles = xr);
let Ct = nt;
Ot('calcite-list', Ct);
export { Ct as List };
