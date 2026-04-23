import {
  nj as Ge,
  nk as _e,
  e as H,
  s as x,
  nl as Ve,
  nm as Ye,
  nn as We,
  no as Xe,
  np as De,
  i as Ne,
  L as Ie,
  fs as Ze,
  j4 as $e,
  b as Qe,
  a as Je,
  nq as he,
  c as L,
  j6 as et,
  m as Se,
  gH as tt,
  jd as nt,
  iP as at,
  nr as it,
  j9 as rt,
  ns as Oe,
  nt as ot,
  nu as st,
  n as M,
  fu as lt,
  x as I,
  nv as ct,
  nw as ut,
  jg as ve,
  S as Be,
  nx as dt,
  E as Q,
} from './index.lazy-BFilFZ3v.js';
import { t as Re } from './key-ak3_eHKH.js';
const ft = ({ children: a, ...e }) => {
  const t = e.level ? Ge(`h${e.level}`) : _e`div`;
  return H(e.key, Ve`<${t} class=${x(e.class)}>${a}</${t}>`);
};
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Le = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])',
  ],
  U = Le.join(','),
  Me = typeof Element > 'u',
  D = Me
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  q =
    !Me && Element.prototype.getRootNode
      ? function (a) {
          var e;
          return a == null || (e = a.getRootNode) === null || e === void 0 ? void 0 : e.call(a);
        }
      : function (a) {
          return a == null ? void 0 : a.ownerDocument;
        },
  G = function a(e, t) {
    var n;
    t === void 0 && (t = !0);
    var i =
        e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, 'inert'),
      l = i === '' || i === 'true',
      r = l || (t && e && a(e.parentNode));
    return r;
  },
  ht = function (e) {
    var t,
      n =
        e == null || (t = e.getAttribute) === null || t === void 0
          ? void 0
          : t.call(e, 'contenteditable');
    return n === '' || n === 'true';
  },
  je = function (e, t, n) {
    if (G(e)) return [];
    var i = Array.prototype.slice.apply(e.querySelectorAll(U));
    return t && D.call(e, U) && i.unshift(e), (i = i.filter(n)), i;
  },
  Ke = function a(e, t, n) {
    for (var i = [], l = Array.from(e); l.length; ) {
      var r = l.shift();
      if (!G(r, !1))
        if (r.tagName === 'SLOT') {
          var d = r.assignedElements(),
            u = d.length ? d : r.children,
            v = a(u, !0, n);
          n.flatten ? i.push.apply(i, v) : i.push({ scopeParent: r, candidates: v });
        } else {
          var E = D.call(r, U);
          E && n.filter(r) && (t || !e.includes(r)) && i.push(r);
          var w = r.shadowRoot || (typeof n.getShadowRoot == 'function' && n.getShadowRoot(r)),
            P = !G(w, !1) && (!n.shadowRootFilter || n.shadowRootFilter(r));
          if (w && P) {
            var $ = a(w === !0 ? r.children : w.children, !0, n);
            n.flatten ? i.push.apply(i, $) : i.push({ scopeParent: r, candidates: $ });
          } else l.unshift.apply(l, r.children);
        }
    }
    return i;
  },
  ze = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  A = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ht(e)) && !ze(e)
      ? 0
      : e.tabIndex;
  },
  vt = function (e, t) {
    var n = A(e);
    return n < 0 && t && !ze(e) ? 0 : n;
  },
  pt = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  He = function (e) {
    return e.tagName === 'INPUT';
  },
  bt = function (e) {
    return He(e) && e.type === 'hidden';
  },
  mt = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (n) {
        return n.tagName === 'SUMMARY';
      });
    return t;
  },
  gt = function (e, t) {
    for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
  },
  yt = function (e) {
    if (!e.name) return !0;
    var t = e.form || q(e),
      n = function (d) {
        return t.querySelectorAll('input[type="radio"][name="' + d + '"]');
      },
      i;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      i = n(window.CSS.escape(e.name));
    else
      try {
        i = n(e.name);
      } catch (r) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            r.message,
          ),
          !1
        );
      }
    var l = gt(i, e.form);
    return !l || l === e;
  },
  Et = function (e) {
    return He(e) && e.type === 'radio';
  },
  wt = function (e) {
    return Et(e) && !yt(e);
  },
  kt = function (e) {
    var t,
      n = e && q(e),
      i = (t = n) === null || t === void 0 ? void 0 : t.host,
      l = !1;
    if (n && n !== e) {
      var r, d, u;
      for (
        l = !!(
          ((r = i) !== null &&
            r !== void 0 &&
            (d = r.ownerDocument) !== null &&
            d !== void 0 &&
            d.contains(i)) ||
          (e != null && (u = e.ownerDocument) !== null && u !== void 0 && u.contains(e))
        );
        !l && i;

      ) {
        var v, E, w;
        (n = q(i)),
          (i = (v = n) === null || v === void 0 ? void 0 : v.host),
          (l = !!(
            (E = i) !== null &&
            E !== void 0 &&
            (w = E.ownerDocument) !== null &&
            w !== void 0 &&
            w.contains(i)
          ));
      }
    }
    return l;
  },
  pe = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      i = t.height;
    return n === 0 && i === 0;
  },
  xt = function (e, t) {
    var n = t.displayCheck,
      i = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var l = D.call(e, 'details>summary:first-of-type'),
      r = l ? e.parentElement : e;
    if (D.call(r, 'details:not([open]) *')) return !0;
    if (!n || n === 'full' || n === 'legacy-full') {
      if (typeof i == 'function') {
        for (var d = e; e; ) {
          var u = e.parentElement,
            v = q(e);
          if (u && !u.shadowRoot && i(u) === !0) return pe(e);
          e.assignedSlot
            ? (e = e.assignedSlot)
            : !u && v !== e.ownerDocument
              ? (e = v.host)
              : (e = u);
        }
        e = d;
      }
      if (kt(e)) return !e.getClientRects().length;
      if (n !== 'legacy-full') return !0;
    } else if (n === 'non-zero-area') return pe(e);
    return !1;
  },
  Tt = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var i = t.children.item(n);
            if (i.tagName === 'LEGEND')
              return D.call(t, 'fieldset[disabled] *') ? !0 : !i.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  _ = function (e, t) {
    return !(t.disabled || G(t) || bt(t) || xt(t, e) || mt(t) || Tt(t));
  },
  ee = function (e, t) {
    return !(wt(t) || A(t) < 0 || !_(e, t));
  },
  Ct = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Pt = function a(e) {
    var t = [],
      n = [];
    return (
      e.forEach(function (i, l) {
        var r = !!i.scopeParent,
          d = r ? i.scopeParent : i,
          u = vt(d, r),
          v = r ? a(i.candidates) : d;
        u === 0
          ? r
            ? t.push.apply(t, v)
            : t.push(d)
          : n.push({ documentOrder: l, tabIndex: u, item: i, isScope: r, content: v });
      }),
      n
        .sort(pt)
        .reduce(function (i, l) {
          return l.isScope ? i.push.apply(i, l.content) : i.push(l.content), i;
        }, [])
        .concat(t)
    );
  },
  Ft = function (e, t) {
    t = t || {};
    var n;
    return (
      t.getShadowRoot
        ? (n = Ke([e], t.includeContainer, {
            filter: ee.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: Ct,
          }))
        : (n = je(e, t.includeContainer, ee.bind(null, t))),
      Pt(n)
    );
  },
  At = function (e, t) {
    t = t || {};
    var n;
    return (
      t.getShadowRoot
        ? (n = Ke([e], t.includeContainer, {
            filter: _.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot,
          }))
        : (n = je(e, t.includeContainer, _.bind(null, t))),
      n
    );
  },
  N = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return D.call(e, U) === !1 ? !1 : ee(t, e);
  },
  Dt = Le.concat('iframe').join(','),
  J = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return D.call(e, Dt) === !1 ? !1 : _(t, e);
  };
/*!
 * focus-trap 7.6.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function te(a, e) {
  (e == null || e > a.length) && (e = a.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = a[t];
  return n;
}
function Nt(a) {
  if (Array.isArray(a)) return te(a);
}
function It(a, e, t) {
  return (
    (e = Rt(e)) in a
      ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (a[e] = t),
    a
  );
}
function $t(a) {
  if ((typeof Symbol < 'u' && a[Symbol.iterator] != null) || a['@@iterator'] != null)
    return Array.from(a);
}
function St() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function be(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(a);
    e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function me(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? be(Object(t), !0).forEach(function (n) {
          It(a, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
        : be(Object(t)).forEach(function (n) {
            Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return a;
}
function Ot(a) {
  return Nt(a) || $t(a) || Lt(a) || St();
}
function Bt(a, e) {
  if (typeof a != 'object' || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(a, e);
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(a);
}
function Rt(a) {
  var e = Bt(a, 'string');
  return typeof e == 'symbol' ? e : e + '';
}
function Lt(a, e) {
  if (a) {
    if (typeof a == 'string') return te(a, e);
    var t = {}.toString.call(a).slice(8, -1);
    return (
      t === 'Object' && a.constructor && (t = a.constructor.name),
      t === 'Map' || t === 'Set'
        ? Array.from(a)
        : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? te(a, e)
          : void 0
    );
  }
}
var ge = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var n = e[e.length - 1];
        n !== t && n._setPausedState(!0);
      }
      var i = e.indexOf(t);
      i === -1 || e.splice(i, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var n = e.indexOf(t);
      n !== -1 && e.splice(n, 1),
        e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1);
    },
  },
  Mt = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  jt = function (e) {
    return (
      (e == null ? void 0 : e.key) === 'Escape' ||
      (e == null ? void 0 : e.key) === 'Esc' ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  j = function (e) {
    return (e == null ? void 0 : e.key) === 'Tab' || (e == null ? void 0 : e.keyCode) === 9;
  },
  Kt = function (e) {
    return j(e) && !e.shiftKey;
  },
  zt = function (e) {
    return j(e) && e.shiftKey;
  },
  ye = function (e) {
    return setTimeout(e, 0);
  },
  R = function (e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return typeof e == 'function' ? e.apply(void 0, n) : e;
  },
  z = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function'
      ? e.composedPath()[0]
      : e.target;
  },
  Ht = [],
  Ut = function (e, t) {
    var n = (t == null ? void 0 : t.document) || document,
      i = (t == null ? void 0 : t.trapStack) || Ht,
      l = me(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: Kt,
          isKeyBackward: zt,
        },
        t,
      ),
      r = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        manuallyPaused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      d,
      u = function (o, s, c) {
        return o && o[s] !== void 0 ? o[s] : l[c || s];
      },
      v = function (o, s) {
        var c =
          typeof (s == null ? void 0 : s.composedPath) == 'function' ? s.composedPath() : void 0;
        return r.containerGroups.findIndex(function (h) {
          var p = h.container,
            m = h.tabbableNodes;
          return (
            p.contains(o) ||
            (c == null ? void 0 : c.includes(p)) ||
            m.find(function (f) {
              return f === o;
            })
          );
        });
      },
      E = function (o) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          c = s.hasFallback,
          h = c === void 0 ? !1 : c,
          p = s.params,
          m = p === void 0 ? [] : p,
          f = l[o];
        if (
          (typeof f == 'function' && (f = f.apply(void 0, Ot(m))), f === !0 && (f = void 0), !f)
        ) {
          if (f === void 0 || f === !1) return f;
          throw new Error(
            '`'.concat(o, '` was specified but was not a node, or did not return a node'),
          );
        }
        var g = f;
        if (typeof f == 'string') {
          try {
            g = n.querySelector(f);
          } catch (y) {
            throw new Error(
              '`'.concat(o, '` appears to be an invalid selector; error="').concat(y.message, '"'),
            );
          }
          if (!g && !h) throw new Error('`'.concat(o, '` as selector refers to no known node'));
        }
        return g;
      },
      w = function () {
        var o = E('initialFocus', { hasFallback: !0 });
        if (o === !1) return !1;
        if (o === void 0 || (o && !J(o, l.tabbableOptions)))
          if (v(n.activeElement) >= 0) o = n.activeElement;
          else {
            var s = r.tabbableGroups[0],
              c = s && s.firstTabbableNode;
            o = c || E('fallbackFocus');
          }
        else o === null && (o = E('fallbackFocus'));
        if (!o) throw new Error('Your focus-trap needs to have at least one focusable element');
        return o;
      },
      P = function () {
        if (
          ((r.containerGroups = r.containers.map(function (o) {
            var s = Ft(o, l.tabbableOptions),
              c = At(o, l.tabbableOptions),
              h = s.length > 0 ? s[0] : void 0,
              p = s.length > 0 ? s[s.length - 1] : void 0,
              m = c.find(function (y) {
                return N(y);
              }),
              f = c
                .slice()
                .reverse()
                .find(function (y) {
                  return N(y);
                }),
              g = !!s.find(function (y) {
                return A(y) > 0;
              });
            return {
              container: o,
              tabbableNodes: s,
              focusableNodes: c,
              posTabIndexesFound: g,
              firstTabbableNode: h,
              lastTabbableNode: p,
              firstDomTabbableNode: m,
              lastDomTabbableNode: f,
              nextTabbableNode: function (F) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  C = s.indexOf(F);
                return C < 0
                  ? O
                    ? c.slice(c.indexOf(F) + 1).find(function (B) {
                        return N(B);
                      })
                    : c
                        .slice(0, c.indexOf(F))
                        .reverse()
                        .find(function (B) {
                          return N(B);
                        })
                  : s[C + (O ? 1 : -1)];
              },
            };
          })),
          (r.tabbableGroups = r.containerGroups.filter(function (o) {
            return o.tabbableNodes.length > 0;
          })),
          r.tabbableGroups.length <= 0 && !E('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times',
          );
        if (
          r.containerGroups.find(function (o) {
            return o.posTabIndexesFound;
          }) &&
          r.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.",
          );
      },
      $ = function (o) {
        var s = o.activeElement;
        if (s) return s.shadowRoot && s.shadowRoot.activeElement !== null ? $(s.shadowRoot) : s;
      },
      T = function (o) {
        if (o !== !1 && o !== $(document)) {
          if (!o || !o.focus) {
            T(w());
            return;
          }
          o.focus({ preventScroll: !!l.preventScroll }),
            (r.mostRecentlyFocusedNode = o),
            Mt(o) && o.select();
        }
      },
      ie = function (o) {
        var s = E('setReturnFocus', { params: [o] });
        return s || (s === !1 ? !1 : o);
      },
      re = function (o) {
        var s = o.target,
          c = o.event,
          h = o.isBackward,
          p = h === void 0 ? !1 : h;
        (s = s || z(c)), P();
        var m = null;
        if (r.tabbableGroups.length > 0) {
          var f = v(s, c),
            g = f >= 0 ? r.containerGroups[f] : void 0;
          if (f < 0)
            p
              ? (m = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode)
              : (m = r.tabbableGroups[0].firstTabbableNode);
          else if (p) {
            var y = r.tabbableGroups.findIndex(function (X) {
              var Z = X.firstTabbableNode;
              return s === Z;
            });
            if (
              (y < 0 &&
                (g.container === s ||
                  (J(s, l.tabbableOptions) &&
                    !N(s, l.tabbableOptions) &&
                    !g.nextTabbableNode(s, !1))) &&
                (y = f),
              y >= 0)
            ) {
              var F = y === 0 ? r.tabbableGroups.length - 1 : y - 1,
                O = r.tabbableGroups[F];
              m = A(s) >= 0 ? O.lastTabbableNode : O.lastDomTabbableNode;
            } else j(c) || (m = g.nextTabbableNode(s, !1));
          } else {
            var C = r.tabbableGroups.findIndex(function (X) {
              var Z = X.lastTabbableNode;
              return s === Z;
            });
            if (
              (C < 0 &&
                (g.container === s ||
                  (J(s, l.tabbableOptions) &&
                    !N(s, l.tabbableOptions) &&
                    !g.nextTabbableNode(s))) &&
                (C = f),
              C >= 0)
            ) {
              var B = C === r.tabbableGroups.length - 1 ? 0 : C + 1,
                fe = r.tabbableGroups[B];
              m = A(s) >= 0 ? fe.firstTabbableNode : fe.firstDomTabbableNode;
            } else j(c) || (m = g.nextTabbableNode(s));
          }
        } else m = E('fallbackFocus');
        return m;
      },
      K = function (o) {
        var s = z(o);
        if (!(v(s, o) >= 0)) {
          if (R(l.clickOutsideDeactivates, o)) {
            d.deactivate({ returnFocus: l.returnFocusOnDeactivate });
            return;
          }
          R(l.allowOutsideClick, o) || o.preventDefault();
        }
      },
      oe = function (o) {
        var s = z(o),
          c = v(s, o) >= 0;
        if (c || s instanceof Document) c && (r.mostRecentlyFocusedNode = s);
        else {
          o.stopImmediatePropagation();
          var h,
            p = !0;
          if (r.mostRecentlyFocusedNode)
            if (A(r.mostRecentlyFocusedNode) > 0) {
              var m = v(r.mostRecentlyFocusedNode),
                f = r.containerGroups[m].tabbableNodes;
              if (f.length > 0) {
                var g = f.findIndex(function (y) {
                  return y === r.mostRecentlyFocusedNode;
                });
                g >= 0 &&
                  (l.isKeyForward(r.recentNavEvent)
                    ? g + 1 < f.length && ((h = f[g + 1]), (p = !1))
                    : g - 1 >= 0 && ((h = f[g - 1]), (p = !1)));
              }
            } else
              r.containerGroups.some(function (y) {
                return y.tabbableNodes.some(function (F) {
                  return A(F) > 0;
                });
              }) || (p = !1);
          else p = !1;
          p &&
            (h = re({
              target: r.mostRecentlyFocusedNode,
              isBackward: l.isKeyBackward(r.recentNavEvent),
            })),
            T(h || r.mostRecentlyFocusedNode || w());
        }
        r.recentNavEvent = void 0;
      },
      Ue = function (o) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        r.recentNavEvent = o;
        var c = re({ event: o, isBackward: s });
        c && (j(o) && o.preventDefault(), T(c));
      },
      se = function (o) {
        (l.isKeyForward(o) || l.isKeyBackward(o)) && Ue(o, l.isKeyBackward(o));
      },
      le = function (o) {
        jt(o) && R(l.escapeDeactivates, o) !== !1 && (o.preventDefault(), d.deactivate());
      },
      ce = function (o) {
        var s = z(o);
        v(s, o) >= 0 ||
          R(l.clickOutsideDeactivates, o) ||
          R(l.allowOutsideClick, o) ||
          (o.preventDefault(), o.stopImmediatePropagation());
      },
      ue = function () {
        if (r.active)
          return (
            ge.activateTrap(i, d),
            (r.delayInitialFocusTimer = l.delayInitialFocus
              ? ye(function () {
                  T(w());
                })
              : T(w())),
            n.addEventListener('focusin', oe, !0),
            n.addEventListener('mousedown', K, { capture: !0, passive: !1 }),
            n.addEventListener('touchstart', K, { capture: !0, passive: !1 }),
            n.addEventListener('click', ce, { capture: !0, passive: !1 }),
            n.addEventListener('keydown', se, { capture: !0, passive: !1 }),
            n.addEventListener('keydown', le),
            d
          );
      },
      de = function () {
        if (r.active)
          return (
            n.removeEventListener('focusin', oe, !0),
            n.removeEventListener('mousedown', K, !0),
            n.removeEventListener('touchstart', K, !0),
            n.removeEventListener('click', ce, !0),
            n.removeEventListener('keydown', se, !0),
            n.removeEventListener('keydown', le),
            d
          );
      },
      qe = function (o) {
        var s = o.some(function (c) {
          var h = Array.from(c.removedNodes);
          return h.some(function (p) {
            return p === r.mostRecentlyFocusedNode;
          });
        });
        s && T(w());
      },
      W = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(qe) : void 0,
      S = function () {
        W &&
          (W.disconnect(),
          r.active &&
            !r.paused &&
            r.containers.map(function (o) {
              W.observe(o, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (d = {
        get active() {
          return r.active;
        },
        get paused() {
          return r.paused;
        },
        activate: function (o) {
          if (r.active) return this;
          var s = u(o, 'onActivate'),
            c = u(o, 'onPostActivate'),
            h = u(o, 'checkCanFocusTrap');
          h || P(),
            (r.active = !0),
            (r.paused = !1),
            (r.nodeFocusedBeforeActivation = n.activeElement),
            s == null || s();
          var p = function () {
            h && P(), ue(), S(), c == null || c();
          };
          return h ? (h(r.containers.concat()).then(p, p), this) : (p(), this);
        },
        deactivate: function (o) {
          if (!r.active) return this;
          var s = me(
            {
              onDeactivate: l.onDeactivate,
              onPostDeactivate: l.onPostDeactivate,
              checkCanReturnFocus: l.checkCanReturnFocus,
            },
            o,
          );
          clearTimeout(r.delayInitialFocusTimer),
            (r.delayInitialFocusTimer = void 0),
            de(),
            (r.active = !1),
            (r.paused = !1),
            S(),
            ge.deactivateTrap(i, d);
          var c = u(s, 'onDeactivate'),
            h = u(s, 'onPostDeactivate'),
            p = u(s, 'checkCanReturnFocus'),
            m = u(s, 'returnFocus', 'returnFocusOnDeactivate');
          c == null || c();
          var f = function () {
            ye(function () {
              m && T(ie(r.nodeFocusedBeforeActivation)), h == null || h();
            });
          };
          return m && p ? (p(ie(r.nodeFocusedBeforeActivation)).then(f, f), this) : (f(), this);
        },
        pause: function (o) {
          return r.active ? ((r.manuallyPaused = !0), this._setPausedState(!0, o)) : this;
        },
        unpause: function (o) {
          return r.active
            ? ((r.manuallyPaused = !1),
              i[i.length - 1] !== this ? this : this._setPausedState(!1, o))
            : this;
        },
        updateContainerElements: function (o) {
          var s = [].concat(o).filter(Boolean);
          return (
            (r.containers = s.map(function (c) {
              return typeof c == 'string' ? n.querySelector(c) : c;
            })),
            r.active && P(),
            S(),
            this
          );
        },
      }),
      Object.defineProperties(d, {
        _isManuallyPaused: {
          value: function () {
            return r.manuallyPaused;
          },
        },
        _setPausedState: {
          value: function (o, s) {
            if (r.paused === o) return this;
            if (((r.paused = o), o)) {
              var c = u(s, 'onPause'),
                h = u(s, 'onPostPause');
              c == null || c(), de(), S(), h == null || h();
            } else {
              var p = u(s, 'onUnpause'),
                m = u(s, 'onPostUnpause');
              p == null || p(), P(), ue(), S(), m == null || m();
            }
            return this;
          },
        },
      }),
      d.updateContainerElements(e),
      d
    );
  };
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ function qt(a, e) {
  return {
    clickOutsideDeactivates: !0,
    fallbackFocus: (e == null ? void 0 : e.fallbackFocus) || a,
    setReturnFocus: (t) => (De(t), !1),
    ...e,
    document: a.ownerDocument,
    tabbableOptions: Xe,
    trapStack: We,
  };
}
function Ee(a, { focusTrapOptions: e }, t) {
  return !(e != null && e.extraContainers) && !t
    ? a
    : [a, ...we(e == null ? void 0 : e.extraContainers), ...we(t)];
}
function we(a = []) {
  return Array.isArray(a) ? a : [a];
}
const Gt = (a) =>
  Ye((e, t) => {
    let n, i, l;
    const r = a.focusTrapOptions;
    t.onConnected(() => {
      e[a.triggerProp] && n && d.activate();
    }),
      t.onUpdate((u) => {
        e.hasUpdated &&
          u.has('focusTrapDisabled') &&
          (e.focusTrapDisabled ? d.deactivate() : d.activate());
      }),
      t.onDisconnected(() => d.deactivate());
    const d = {
      activate: () => {
        const u = i || e.el;
        if (u.isConnected) {
          if (!n) {
            const v = { ...r, ...e.focusTrapOptions };
            l || (l = Ee(u, e)), (n = Ut(l, qt(u, v)));
          }
          (typeof e.focusTrapDisabledOverride == 'function'
            ? !e.focusTrapDisabledOverride()
            : !e.focusTrapDisabled) && n.activate();
        }
      },
      deactivate: () => (n == null ? void 0 : n.deactivate()),
      overrideFocusTrapEl: (u) => {
        if (n) throw new Error('Focus trap already created');
        i = u;
      },
      setExtraContainers: (u) => {
        const v = i || e.el;
        l = Ee(v, e, u);
      },
      updateContainerElements: () => (n == null ? void 0 : n.updateContainerElements(l)),
    };
    return d;
  });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ class _t {
  constructor() {
    (this.registeredElements = new Map()),
      (this.registeredElementCount = 0),
      (this.queryPopover = (e) => {
        const { registeredElements: t } = this,
          n = e.find((i) => t.has(i));
        return t.get(n);
      }),
      (this.togglePopovers = (e) => {
        const t = e.composedPath(),
          n = this.queryPopover(t);
        n && !n.triggerDisabled && (n.open = !n.open),
          Array.from(this.registeredElements.values())
            .filter((i) => i !== n && i.autoClose && i.open && !t.includes(i))
            .forEach((i) => (i.open = !1));
      }),
      (this.keyDownHandler = (e) => {
        e.defaultPrevented ||
          (e.key === 'Escape' ? this.closeAllPopovers() : Re(e.key) && this.togglePopovers(e));
      }),
      (this.clickHandler = (e) => {
        dt(e) || e.defaultPrevented || this.togglePopovers(e);
      });
  }
  registerElement(e, t) {
    this.registeredElementCount++,
      this.registeredElements.set(e, t),
      this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    this.registeredElements.delete(e) && this.registeredElementCount--,
      this.registeredElementCount === 0 && this.removeListeners();
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((e) => (e.open = !1));
  }
  addListeners() {
    window.addEventListener('click', this.clickHandler),
      window.addEventListener('keydown', this.keyDownHandler);
  }
  removeListeners() {
    window.removeEventListener('click', this.clickHandler),
      window.removeEventListener('keydown', this.keyDownHandler);
  }
}
const k = {
    positionContainer: 'position-container',
    container: 'container',
    closeButtonContainer: 'close-button-container',
    closeButton: 'close-button',
    content: 'content',
    hasHeader: 'has-header',
    header: 'header',
    headerContainer: 'headerContainer',
    heading: 'heading',
  },
  ke = 'auto',
  xe = 'aria-controls',
  Te = 'aria-expanded',
  Vt = Ne`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-popover-z-index, var(--calcite-z-index-popup))}.position-container{inline-size:max-content;display:none;max-inline-size:100vw;max-block-size:100vh;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding:.5rem .75rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding:.75rem 1rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding:1rem 1.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;height:100%;flex-direction:row;flex-wrap:nowrap;border-radius:.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;height:100%;width:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}:host([hidden]){display:none}[hidden]{display:none}`,
  Ce = new _t(),
  V = class V extends Ie {
    constructor() {
      super(...arguments),
        (this.closeButtonEl = Ze()),
        (this.focusTrap = Gt({
          triggerProp: 'open',
          focusTrapOptions: {
            allowOutsideClick: !0,
            escapeDeactivates: (e) => (
              e.defaultPrevented || ((this.open = !1), e.preventDefault()), !1
            ),
          },
        })(this)),
        (this.guid = `calcite-popover-${$e()}`),
        (this.hasLoaded = !1),
        (this.mutationObserver = Qe('mutation', () => this.focusTrap.updateContainerElements())),
        (this.transitionProp = 'opacity'),
        (this.floatingLayout = 'vertical'),
        (this.autoClose = !1),
        (this.closable = !1),
        (this.flipDisabled = !1),
        (this.focusTrapDisabled = !1),
        (this.messages = Je()),
        (this.offsetDistance = he),
        (this.offsetSkidding = 0),
        (this.open = !1),
        (this.overlayPositioning = 'absolute'),
        (this.placement = ke),
        (this.pointerDisabled = !1),
        (this.scale = 'm'),
        (this.triggerDisabled = !1),
        (this.calcitePopoverBeforeClose = L({ cancelable: !1 })),
        (this.calcitePopoverBeforeOpen = L({ cancelable: !1 })),
        (this.calcitePopoverClose = L({ cancelable: !1 })),
        (this.calcitePopoverOpen = L({ cancelable: !1 }));
    }
    async reposition(e = !1) {
      const {
        referenceEl: t,
        placement: n,
        overlayPositioning: i,
        flipDisabled: l,
        filteredFlipPlacements: r,
        offsetDistance: d,
        offsetSkidding: u,
        arrowEl: v,
        floatingEl: E,
      } = this;
      return et(
        this,
        {
          floatingEl: E,
          referenceEl: t,
          overlayPositioning: i,
          placement: n,
          flipDisabled: l,
          flipPlacements: r,
          offsetDistance: d,
          offsetSkidding: u,
          arrowEl: v,
          type: 'popover',
        },
        e,
      );
    }
    async setFocus() {
      await Se(this), this.requestUpdate(), tt(this.el);
    }
    async updateFocusTrapElements() {
      this.focusTrap.updateContainerElements();
    }
    connectedCallback() {
      var e;
      super.connectedCallback(),
        (e = this.mutationObserver) == null || e.observe(this.el, { childList: !0, subtree: !0 }),
        this.setFilteredPlacements(),
        requestAnimationFrame(() => this.setUpReferenceElement(this.hasLoaded));
    }
    willUpdate(e) {
      e.has('flipPlacements') && this.flipPlacementsHandler(),
        e.has('open') && (this.hasUpdated || this.open !== !1) && this.openHandler(),
        ((e.has('offsetDistance') && (this.hasUpdated || this.offsetDistance !== he)) ||
          (e.has('offsetSkidding') && (this.hasUpdated || this.offsetSkidding !== 0)) ||
          (e.has('overlayPositioning') &&
            (this.hasUpdated || this.overlayPositioning !== 'absolute')) ||
          (e.has('placement') && (this.hasUpdated || this.placement !== ke))) &&
          this.reposition(!0),
        e.has('referenceElement') && this.referenceElementHandler();
    }
    loaded() {
      this.referenceElement && !this.referenceEl && this.setUpReferenceElement(),
        (this.hasLoaded = !0);
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(),
        (e = this.mutationObserver) == null || e.disconnect(),
        this.removeReferences(),
        nt(this);
    }
    flipPlacementsHandler() {
      this.setFilteredPlacements(), this.reposition(!0);
    }
    openHandler() {
      at(this), this.reposition(!0), this.setExpandedAttr();
    }
    referenceElementHandler() {
      this.setUpReferenceElement(), this.reposition(!0);
    }
    setFloatingEl(e) {
      (this.floatingEl = e), e && requestAnimationFrame(() => this.setUpReferenceElement());
    }
    setTransitionEl(e) {
      e && (this.transitionEl = e);
    }
    setFilteredPlacements() {
      const { el: e, flipPlacements: t } = this;
      this.filteredFlipPlacements = t ? it(t, e) : null;
    }
    setUpReferenceElement(e = !0) {
      this.removeReferences(), (this.referenceEl = this.getReferenceElement()), rt(this);
      const { el: t, referenceElement: n, referenceEl: i } = this;
      e &&
        n &&
        !i &&
        console.warn(`${t.tagName}: reference-element id "${n}" was not found.`, { el: t }),
        this.addReferences();
    }
    getId() {
      return this.el.id || this.guid;
    }
    setExpandedAttr() {
      const { referenceEl: e, open: t } = this;
      e && 'setAttribute' in e && e.setAttribute(Te, Oe(t));
    }
    addReferences() {
      const { referenceEl: e } = this;
      if (!e) return;
      const t = this.getId();
      'setAttribute' in e && e.setAttribute(xe, t),
        Ce.registerElement(e, this.el),
        this.setExpandedAttr();
    }
    removeReferences() {
      const { referenceEl: e } = this;
      e &&
        ('removeAttribute' in e && (e.removeAttribute(xe), e.removeAttribute(Te)),
        Ce.unregisterElement(e));
    }
    getReferenceElement() {
      const { referenceElement: e, el: t } = this;
      return (typeof e == 'string' ? ot(t, { id: e }) : e) || null;
    }
    hide() {
      this.open = !1;
    }
    onBeforeOpen() {
      this.calcitePopoverBeforeOpen.emit();
    }
    onOpen() {
      this.calcitePopoverOpen.emit(), this.focusTrap.activate();
    }
    onBeforeClose() {
      this.calcitePopoverBeforeClose.emit();
    }
    onClose() {
      this.calcitePopoverClose.emit(), st(this), this.focusTrap.deactivate();
    }
    storeArrowEl(e) {
      (this.arrowEl = e), this.reposition(!0);
    }
    renderCloseButton() {
      const { messages: e, closable: t } = this;
      return t
        ? H(
            k.closeButtonContainer,
            I`<div class=${x(k.closeButtonContainer)}><calcite-action appearance=transparent class=${x(k.closeButton)} @click=${this.hide} .scale=${this.scale} .text=${e.close} ${M(this.closeButtonEl)}><calcite-icon icon=x .scale=${lt(this.scale)}></calcite-icon></calcite-action></div>`,
          )
        : null;
    }
    renderHeader() {
      const { heading: e, headingLevel: t } = this,
        n = e ? ft({ class: k.heading, level: t, children: e }) : null;
      return n
        ? H(k.header, I`<div class=${x(k.header)}>${n}${this.renderCloseButton()}</div>`)
        : null;
    }
    render() {
      const {
          referenceEl: e,
          heading: t,
          label: n,
          open: i,
          pointerDisabled: l,
          floatingLayout: r,
        } = this,
        d = e && i,
        u = !d,
        v = l ? null : H('floating-arrow', ct({ floatingLayout: r, ref: this.storeArrowEl }));
      return (
        (this.el.inert = u),
        (this.el.ariaLabel = n),
        (this.el.ariaLive = 'polite'),
        ut(this.el, 'id', this.getId()),
        (this.el.role = 'dialog'),
        I`<div class=${x(k.positionContainer)} ${M(this.setFloatingEl)}><div class=${x({ [k.container]: !0, [ve.animation]: !0, [ve.animationActive]: d })} ${M(this.setTransitionEl)}>${v}<div class=${x({ [k.hasHeader]: !!t, [k.headerContainer]: !0 })}>${this.renderHeader()}<div class=${x(k.content)}><slot></slot></div>${t ? null : this.renderCloseButton()}</div></div></div>`
      );
    }
  };
(V.properties = {
  floatingLayout: 16,
  referenceEl: 16,
  autoClose: 7,
  closable: 7,
  flipDisabled: 7,
  flipPlacements: 0,
  focusTrapDisabled: 7,
  focusTrapOptions: 0,
  heading: 1,
  headingLevel: 11,
  label: 1,
  messageOverrides: 0,
  offsetDistance: 11,
  offsetSkidding: 11,
  open: 7,
  overlayPositioning: 3,
  placement: 3,
  pointerDisabled: 7,
  referenceElement: 1,
  scale: 3,
  triggerDisabled: 7,
}),
  (V.styles = Vt);
let ne = V;
Be('calcite-popover', ne);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ function Pe(a, e) {
  return (a + e) % e;
}
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const Fe = { menu: 'menu', defaultTrigger: 'default-trigger' },
  Ae = { tooltip: 'tooltip', trigger: 'trigger' },
  Yt = { menu: 'ellipsis' },
  Wt = 'data-active';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const Xt = Ne`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}`,
  Zt = ['ArrowUp', 'ArrowDown', 'End', 'Home'],
  Y = class Y extends Ie {
    constructor() {
      super(...arguments),
        (this.guid = `calcite-action-menu-${$e()}`),
        (this.actionElements = []),
        (this.menuButtonClick = () => {
          this.toggleOpen();
        }),
        (this.menuButtonId = `${this.guid}-menu-button`),
        (this.menuButtonKeyDown = (e) => {
          const { key: t } = e,
            { actionElements: n, activeMenuItemIndex: i, open: l } = this;
          if (n.length) {
            if (Re(t)) {
              if ((e.preventDefault(), !l)) {
                this.toggleOpen();
                return;
              }
              const r = n[i];
              r ? r.click() : this.toggleOpen(!1);
            }
            if (t === 'Tab') {
              this.open = !1;
              return;
            }
            if (t === 'Escape') {
              this.toggleOpen(!1), e.preventDefault();
              return;
            }
            this.handleActionNavigation(e, t, n);
          }
        }),
        (this.menuId = `${this.guid}-menu`),
        (this._open = !1),
        (this.updateAction = (e, t) => {
          const { guid: n, activeMenuItemIndex: i } = this,
            l = `${n}-action-${t}`;
          (e.tabIndex = -1),
            e.setAttribute('role', 'menuitem'),
            e.id || (e.id = l),
            e.toggleAttribute(Wt, t === i);
        }),
        (this.activeMenuItemIndex = -1),
        (this.appearance = 'solid'),
        (this.expanded = !1),
        (this.overlayPositioning = 'absolute'),
        (this.placement = 'auto'),
        (this.scale = 'm'),
        (this.calciteActionMenuOpen = L({ cancelable: !1 }));
    }
    get open() {
      return this._open;
    }
    set open(e) {
      const t = this._open;
      e !== t && ((this._open = e), this.openHandler(e));
    }
    async setFocus() {
      return await Se(this), De(this.menuButtonEl);
    }
    connectedCallback() {
      super.connectedCallback(), this.connectMenuButtonEl();
    }
    willUpdate(e) {
      e.has('expanded') && (this.hasUpdated || this.expanded !== !1) && this.expandedHandler(),
        e.has('activeMenuItemIndex') &&
          (this.hasUpdated || this.activeMenuItemIndex !== -1) &&
          this.updateActions(this.actionElements);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.disconnectMenuButtonEl();
    }
    expandedHandler() {
      (this.open = !1), this.setTooltipReferenceElement();
    }
    openHandler(e) {
      this.menuButtonEl && (this.menuButtonEl.active = e),
        this.popoverEl && (this.popoverEl.open = e),
        (this.activeMenuItemIndex = this.open ? 0 : -1),
        this.calciteActionMenuOpen.emit(),
        this.setTooltipReferenceElement();
    }
    connectMenuButtonEl() {
      const { menuButtonId: e, menuId: t, open: n, label: i } = this,
        l = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      this.menuButtonEl !== l &&
        (this.disconnectMenuButtonEl(),
        (this.menuButtonEl = l),
        this.setTooltipReferenceElement(),
        l &&
          ((l.active = n),
          l.setAttribute('aria-controls', t),
          l.setAttribute('aria-expanded', Oe(n)),
          l.setAttribute('aria-haspopup', 'true'),
          l.id || (l.id = e),
          l.label || (l.label = i),
          l.text || (l.text = i),
          l.addEventListener('click', this.menuButtonClick),
          l.addEventListener('keydown', this.menuButtonKeyDown)));
    }
    disconnectMenuButtonEl() {
      const { menuButtonEl: e } = this;
      e &&
        (e.removeEventListener('click', this.menuButtonClick),
        e.removeEventListener('keydown', this.menuButtonKeyDown),
        (this.menuButtonEl = null));
    }
    setMenuButtonEl(e) {
      const t = e.target
        .assignedElements({ flatten: !0 })
        .filter((n) => (n == null ? void 0 : n.matches('calcite-action')));
      (this.slottedMenuButtonEl = t[0]), this.connectMenuButtonEl();
    }
    setDefaultMenuButtonEl(e) {
      (this.defaultMenuButtonEl = e), e && this.connectMenuButtonEl();
    }
    setPopoverEl(e) {
      e && ((this.popoverEl = e), (e.open = this.open));
    }
    handleCalciteActionClick() {
      (this.open = !1), this.setFocus();
    }
    updateTooltip(e) {
      const t = e.target
        .assignedElements({ flatten: !0 })
        .filter((n) => (n == null ? void 0 : n.matches('calcite-tooltip')));
      (this.tooltipEl = t[0]), this.setTooltipReferenceElement();
    }
    setTooltipReferenceElement() {
      const { tooltipEl: e, expanded: t, menuButtonEl: n, open: i } = this;
      e && (e.referenceElement = !t && !i ? n : null);
    }
    updateActions(e) {
      e == null || e.forEach(this.updateAction);
    }
    handleDefaultSlotChange(e) {
      const t = e.target
        .assignedElements({ flatten: !0 })
        .reduce(
          (n, i) =>
            i != null && i.matches('calcite-action')
              ? (n.push(i), n)
              : i != null && i.matches('calcite-action-group')
                ? n.concat(Array.from(i.querySelectorAll('calcite-action')))
                : n,
          [],
        );
      this.actionElements = t.filter((n) => !n.disabled && !n.hidden);
    }
    isValidKey(e, t) {
      return !!t.find((n) => n === e);
    }
    handleActionNavigation(e, t, n) {
      if (!this.isValidKey(t, Zt)) return;
      if ((e.preventDefault(), !this.open)) {
        this.toggleOpen(),
          (t === 'Home' || t === 'ArrowDown') && (this.activeMenuItemIndex = 0),
          (t === 'End' || t === 'ArrowUp') && (this.activeMenuItemIndex = n.length - 1);
        return;
      }
      t === 'Home' && (this.activeMenuItemIndex = 0),
        t === 'End' && (this.activeMenuItemIndex = n.length - 1);
      const i = this.activeMenuItemIndex;
      t === 'ArrowUp' && (this.activeMenuItemIndex = Pe(Math.max(i - 1, -1), n.length)),
        t === 'ArrowDown' && (this.activeMenuItemIndex = Pe(i + 1, n.length));
    }
    toggleOpen(e = !this.open) {
      this.open = e;
    }
    handlePopoverOpen() {
      (this.open = !0), this.setFocus();
    }
    handlePopoverClose() {
      this.open = !1;
    }
    renderMenuButton() {
      const { appearance: e, label: t, scale: n, expanded: i } = this;
      return I`<slot name=${Ae.trigger} @slotchange=${this.setMenuButtonEl}><calcite-action .appearance=${e} class=${x(Fe.defaultTrigger)} .icon=${Yt.menu} .scale=${n} .text=${t} .textEnabled=${i} ${M(this.setDefaultMenuButtonEl)}></calcite-action></slot>`;
    }
    renderMenuItems() {
      var E;
      const {
          actionElements: e,
          activeMenuItemIndex: t,
          menuId: n,
          menuButtonEl: i,
          label: l,
          placement: r,
          overlayPositioning: d,
          flipPlacements: u,
        } = this,
        v = ((E = e[t]) == null ? void 0 : E.id) || null;
      return I`<calcite-popover auto-close .flipPlacements=${u} focus-trap-disabled .label=${l} offset-distance=0 @calcitePopoverClose=${this.handlePopoverClose} @calcitePopoverOpen=${this.handlePopoverOpen} .overlayPositioning=${d} .placement=${r} pointer-disabled .referenceElement=${i} trigger-disabled ${M(this.setPopoverEl)}><div aria-activedescendant=${v ?? Q} aria-labelledby=${(i == null ? void 0 : i.id) ?? Q} class=${x(Fe.menu)} id=${n ?? Q} @click=${this.handleCalciteActionClick} role=menu tabindex=-1><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></calcite-popover>`;
    }
    render() {
      return I`${this.renderMenuButton()}${this.renderMenuItems()}<slot name=${Ae.tooltip} @slotchange=${this.updateTooltip}></slot>`;
    }
  };
(Y.properties = {
  activeMenuItemIndex: 16,
  menuButtonEl: 16,
  appearance: 3,
  expanded: 7,
  flipPlacements: 0,
  label: 1,
  open: 7,
  overlayPositioning: 3,
  placement: 3,
  scale: 3,
}),
  (Y.styles = Xt);
let ae = Y;
Be('calcite-action-menu', ae);
export { Ae as e, ft as h, Gt as k };
