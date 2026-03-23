const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/index.lazy-BHTpPf8X.js', 'assets/index-Bz5HPDxq.css']),
) => i.map((i) => d[i]);
function i1(n, a) {
  for (var i = 0; i < a.length; i++) {
    const s = a[i];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const o in s)
        if (o !== 'default' && !(o in n)) {
          const u = Object.getOwnPropertyDescriptor(s, o);
          u && Object.defineProperty(n, o, u.get ? u : { enumerable: !0, get: () => s[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === 'childList')
        for (const f of u.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = i(o);
    fetch(o.href, u);
  }
})();
function mu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Xf = { exports: {} },
  Ns = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bv;
function r1() {
  if (bv) return Ns;
  bv = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function i(s, o, u) {
    var f = null;
    if ((u !== void 0 && (f = '' + u), o.key !== void 0 && (f = '' + o.key), 'key' in o)) {
      u = {};
      for (var h in o) h !== 'key' && (u[h] = o[h]);
    } else u = o;
    return (o = u.ref), { $$typeof: n, type: s, key: f, ref: o !== void 0 ? o : null, props: u };
  }
  return (Ns.Fragment = a), (Ns.jsx = i), (Ns.jsxs = i), Ns;
}
var _v;
function s1() {
  return _v || ((_v = 1), (Xf.exports = r1())), Xf.exports;
}
var ee = s1(),
  If = { exports: {} },
  xe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sv;
function l1() {
  if (Sv) return xe;
  Sv = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    f = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function b(A) {
    return A === null || typeof A != 'object'
      ? null
      : ((A = (v && A[v]) || A['@@iterator']), typeof A == 'function' ? A : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    E = {};
  function R(A, q, ae) {
    (this.props = A), (this.context = q), (this.refs = E), (this.updater = ae || S);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (A, q) {
      if (typeof A != 'object' && typeof A != 'function' && A != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, A, q, 'setState');
    }),
    (R.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, 'forceUpdate');
    });
  function M() {}
  M.prototype = R.prototype;
  function L(A, q, ae) {
    (this.props = A), (this.context = q), (this.refs = E), (this.updater = ae || S);
  }
  var U = (L.prototype = new M());
  (U.constructor = L), x(U, R.prototype), (U.isPureReactComponent = !0);
  var X = Array.isArray,
    C = { H: null, A: null, T: null, S: null, V: null },
    Z = Object.prototype.hasOwnProperty;
  function H(A, q, ae, Q, re, ve) {
    return (
      (ae = ve.ref), { $$typeof: n, type: A, key: q, ref: ae !== void 0 ? ae : null, props: ve }
    );
  }
  function Y(A, q) {
    return H(A.type, q, void 0, void 0, void 0, A.props);
  }
  function V(A) {
    return typeof A == 'object' && A !== null && A.$$typeof === n;
  }
  function F(A) {
    var q = { '=': '=0', ':': '=2' };
    return (
      '$' +
      A.replace(/[=:]/g, function (ae) {
        return q[ae];
      })
    );
  }
  var ne = /\/+/g;
  function W(A, q) {
    return typeof A == 'object' && A !== null && A.key != null ? F('' + A.key) : q.toString(36);
  }
  function te() {}
  function de(A) {
    switch (A.status) {
      case 'fulfilled':
        return A.value;
      case 'rejected':
        throw A.reason;
      default:
        switch (
          (typeof A.status == 'string'
            ? A.then(te, te)
            : ((A.status = 'pending'),
              A.then(
                function (q) {
                  A.status === 'pending' && ((A.status = 'fulfilled'), (A.value = q));
                },
                function (q) {
                  A.status === 'pending' && ((A.status = 'rejected'), (A.reason = q));
                },
              )),
          A.status)
        ) {
          case 'fulfilled':
            return A.value;
          case 'rejected':
            throw A.reason;
        }
    }
    throw A;
  }
  function le(A, q, ae, Q, re) {
    var ve = typeof A;
    (ve === 'undefined' || ve === 'boolean') && (A = null);
    var ue = !1;
    if (A === null) ue = !0;
    else
      switch (ve) {
        case 'bigint':
        case 'string':
        case 'number':
          ue = !0;
          break;
        case 'object':
          switch (A.$$typeof) {
            case n:
            case a:
              ue = !0;
              break;
            case y:
              return (ue = A._init), le(ue(A._payload), q, ae, Q, re);
          }
      }
    if (ue)
      return (
        (re = re(A)),
        (ue = Q === '' ? '.' + W(A, 0) : Q),
        X(re)
          ? ((ae = ''),
            ue != null && (ae = ue.replace(ne, '$&/') + '/'),
            le(re, q, ae, '', function (Ze) {
              return Ze;
            }))
          : re != null &&
            (V(re) &&
              (re = Y(
                re,
                ae +
                  (re.key == null || (A && A.key === re.key)
                    ? ''
                    : ('' + re.key).replace(ne, '$&/') + '/') +
                  ue,
              )),
            q.push(re)),
        1
      );
    ue = 0;
    var Oe = Q === '' ? '.' : Q + ':';
    if (X(A))
      for (var pe = 0; pe < A.length; pe++)
        (Q = A[pe]), (ve = Oe + W(Q, pe)), (ue += le(Q, q, ae, ve, re));
    else if (((pe = b(A)), typeof pe == 'function'))
      for (A = pe.call(A), pe = 0; !(Q = A.next()).done; )
        (Q = Q.value), (ve = Oe + W(Q, pe++)), (ue += le(Q, q, ae, ve, re));
    else if (ve === 'object') {
      if (typeof A.then == 'function') return le(de(A), q, ae, Q, re);
      throw (
        ((q = String(A)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (q === '[object Object]' ? 'object with keys {' + Object.keys(A).join(', ') + '}' : q) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return ue;
  }
  function N(A, q, ae) {
    if (A == null) return A;
    var Q = [],
      re = 0;
    return (
      le(A, Q, '', '', function (ve) {
        return q.call(ae, ve, re++);
      }),
      Q
    );
  }
  function G(A) {
    if (A._status === -1) {
      var q = A._result;
      (q = q()),
        q.then(
          function (ae) {
            (A._status === 0 || A._status === -1) && ((A._status = 1), (A._result = ae));
          },
          function (ae) {
            (A._status === 0 || A._status === -1) && ((A._status = 2), (A._result = ae));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = q));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var K =
    typeof reportError == 'function'
      ? reportError
      : function (A) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var q = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == 'object' && A !== null && typeof A.message == 'string'
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(q)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', A);
            return;
          }
          console.error(A);
        };
  function ce() {}
  return (
    (xe.Children = {
      map: N,
      forEach: function (A, q, ae) {
        N(
          A,
          function () {
            q.apply(this, arguments);
          },
          ae,
        );
      },
      count: function (A) {
        var q = 0;
        return (
          N(A, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (A) {
        return (
          N(A, function (q) {
            return q;
          }) || []
        );
      },
      only: function (A) {
        if (!V(A))
          throw Error('React.Children.only expected to receive a single React element child.');
        return A;
      },
    }),
    (xe.Component = R),
    (xe.Fragment = i),
    (xe.Profiler = o),
    (xe.PureComponent = L),
    (xe.StrictMode = s),
    (xe.Suspense = m),
    (xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
    (xe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return C.H.useMemoCache(A);
      },
    }),
    (xe.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (xe.cloneElement = function (A, q, ae) {
      if (A == null) throw Error('The argument must be a React element, but you passed ' + A + '.');
      var Q = x({}, A.props),
        re = A.key,
        ve = void 0;
      if (q != null)
        for (ue in (q.ref !== void 0 && (ve = void 0), q.key !== void 0 && (re = '' + q.key), q))
          !Z.call(q, ue) ||
            ue === 'key' ||
            ue === '__self' ||
            ue === '__source' ||
            (ue === 'ref' && q.ref === void 0) ||
            (Q[ue] = q[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) Q.children = ae;
      else if (1 < ue) {
        for (var Oe = Array(ue), pe = 0; pe < ue; pe++) Oe[pe] = arguments[pe + 2];
        Q.children = Oe;
      }
      return H(A.type, re, void 0, void 0, ve, Q);
    }),
    (xe.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: u, _context: A }),
        A
      );
    }),
    (xe.createElement = function (A, q, ae) {
      var Q,
        re = {},
        ve = null;
      if (q != null)
        for (Q in (q.key !== void 0 && (ve = '' + q.key), q))
          Z.call(q, Q) && Q !== 'key' && Q !== '__self' && Q !== '__source' && (re[Q] = q[Q]);
      var ue = arguments.length - 2;
      if (ue === 1) re.children = ae;
      else if (1 < ue) {
        for (var Oe = Array(ue), pe = 0; pe < ue; pe++) Oe[pe] = arguments[pe + 2];
        re.children = Oe;
      }
      if (A && A.defaultProps)
        for (Q in ((ue = A.defaultProps), ue)) re[Q] === void 0 && (re[Q] = ue[Q]);
      return H(A, ve, void 0, void 0, null, re);
    }),
    (xe.createRef = function () {
      return { current: null };
    }),
    (xe.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (xe.isValidElement = V),
    (xe.lazy = function (A) {
      return { $$typeof: y, _payload: { _status: -1, _result: A }, _init: G };
    }),
    (xe.memo = function (A, q) {
      return { $$typeof: p, type: A, compare: q === void 0 ? null : q };
    }),
    (xe.startTransition = function (A) {
      var q = C.T,
        ae = {};
      C.T = ae;
      try {
        var Q = A(),
          re = C.S;
        re !== null && re(ae, Q),
          typeof Q == 'object' && Q !== null && typeof Q.then == 'function' && Q.then(ce, K);
      } catch (ve) {
        K(ve);
      } finally {
        C.T = q;
      }
    }),
    (xe.unstable_useCacheRefresh = function () {
      return C.H.useCacheRefresh();
    }),
    (xe.use = function (A) {
      return C.H.use(A);
    }),
    (xe.useActionState = function (A, q, ae) {
      return C.H.useActionState(A, q, ae);
    }),
    (xe.useCallback = function (A, q) {
      return C.H.useCallback(A, q);
    }),
    (xe.useContext = function (A) {
      return C.H.useContext(A);
    }),
    (xe.useDebugValue = function () {}),
    (xe.useDeferredValue = function (A, q) {
      return C.H.useDeferredValue(A, q);
    }),
    (xe.useEffect = function (A, q, ae) {
      var Q = C.H;
      if (typeof ae == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return Q.useEffect(A, q);
    }),
    (xe.useId = function () {
      return C.H.useId();
    }),
    (xe.useImperativeHandle = function (A, q, ae) {
      return C.H.useImperativeHandle(A, q, ae);
    }),
    (xe.useInsertionEffect = function (A, q) {
      return C.H.useInsertionEffect(A, q);
    }),
    (xe.useLayoutEffect = function (A, q) {
      return C.H.useLayoutEffect(A, q);
    }),
    (xe.useMemo = function (A, q) {
      return C.H.useMemo(A, q);
    }),
    (xe.useOptimistic = function (A, q) {
      return C.H.useOptimistic(A, q);
    }),
    (xe.useReducer = function (A, q, ae) {
      return C.H.useReducer(A, q, ae);
    }),
    (xe.useRef = function (A) {
      return C.H.useRef(A);
    }),
    (xe.useState = function (A) {
      return C.H.useState(A);
    }),
    (xe.useSyncExternalStore = function (A, q, ae) {
      return C.H.useSyncExternalStore(A, q, ae);
    }),
    (xe.useTransition = function () {
      return C.H.useTransition();
    }),
    (xe.version = '19.1.0'),
    xe
  );
}
var xv;
function ul() {
  return xv || ((xv = 1), (If.exports = l1())), If.exports;
}
var w = ul();
const _r = mu(w),
  Go = i1({ __proto__: null, default: _r }, [w]);
function o1(n) {
  if (n.sheet) return n.sheet;
  for (var a = 0; a < document.styleSheets.length; a++)
    if (document.styleSheets[a].ownerNode === n) return document.styleSheets[a];
}
function u1(n) {
  var a = document.createElement('style');
  return (
    a.setAttribute('data-emotion', n.key),
    n.nonce !== void 0 && a.setAttribute('nonce', n.nonce),
    a.appendChild(document.createTextNode('')),
    a.setAttribute('data-s', ''),
    a
  );
}
var c1 = (function () {
    function n(i) {
      var s = this;
      (this._insertTag = function (o) {
        var u;
        s.tags.length === 0
          ? s.insertionPoint
            ? (u = s.insertionPoint.nextSibling)
            : s.prepend
              ? (u = s.container.firstChild)
              : (u = s.before)
          : (u = s.tags[s.tags.length - 1].nextSibling),
          s.container.insertBefore(o, u),
          s.tags.push(o);
      }),
        (this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = i.nonce),
        (this.key = i.key),
        (this.container = i.container),
        (this.prepend = i.prepend),
        (this.insertionPoint = i.insertionPoint),
        (this.before = null);
    }
    var a = n.prototype;
    return (
      (a.hydrate = function (s) {
        s.forEach(this._insertTag);
      }),
      (a.insert = function (s) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(u1(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = o1(o);
          try {
            u.insertRule(s, u.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(s));
        this.ctr++;
      }),
      (a.flush = function () {
        this.tags.forEach(function (s) {
          var o;
          return (o = s.parentNode) == null ? void 0 : o.removeChild(s);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      n
    );
  })(),
  mt = '-ms-',
  $o = '-moz-',
  Le = '-webkit-',
  Mg = 'comm',
  Xd = 'rule',
  Id = 'decl',
  f1 = '@import',
  Dg = '@keyframes',
  d1 = '@layer',
  h1 = Math.abs,
  yu = String.fromCharCode,
  p1 = Object.assign;
function m1(n, a) {
  return ft(n, 0) ^ 45
    ? (((((((a << 2) ^ ft(n, 0)) << 2) ^ ft(n, 1)) << 2) ^ ft(n, 2)) << 2) ^ ft(n, 3)
    : 0;
}
function Ng(n) {
  return n.trim();
}
function y1(n, a) {
  return (n = a.exec(n)) ? n[0] : n;
}
function ke(n, a, i) {
  return n.replace(a, i);
}
function Sd(n, a) {
  return n.indexOf(a);
}
function ft(n, a) {
  return n.charCodeAt(a) | 0;
}
function qs(n, a, i) {
  return n.slice(a, i);
}
function xn(n) {
  return n.length;
}
function Qd(n) {
  return n.length;
}
function Mo(n, a) {
  return a.push(n), n;
}
function v1(n, a) {
  return n.map(a).join('');
}
var vu = 1,
  Sr = 1,
  Lg = 0,
  Ot = 0,
  tt = 0,
  Lr = '';
function gu(n, a, i, s, o, u, f) {
  return {
    value: n,
    root: a,
    parent: i,
    type: s,
    props: o,
    children: u,
    line: vu,
    column: Sr,
    length: f,
    return: '',
  };
}
function Ls(n, a) {
  return p1(gu('', null, null, '', null, null, 0), n, { length: -n.length }, a);
}
function g1() {
  return tt;
}
function b1() {
  return (tt = Ot > 0 ? ft(Lr, --Ot) : 0), Sr--, tt === 10 && ((Sr = 1), vu--), tt;
}
function Vt() {
  return (tt = Ot < Lg ? ft(Lr, Ot++) : 0), Sr++, tt === 10 && ((Sr = 1), vu++), tt;
}
function Tn() {
  return ft(Lr, Ot);
}
function Uo() {
  return Ot;
}
function cl(n, a) {
  return qs(Lr, n, a);
}
function Ps(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kg(n) {
  return (vu = Sr = 1), (Lg = xn((Lr = n))), (Ot = 0), [];
}
function zg(n) {
  return (Lr = ''), n;
}
function Bo(n) {
  return Ng(cl(Ot - 1, xd(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function _1(n) {
  for (; (tt = Tn()) && tt < 33; ) Vt();
  return Ps(n) > 2 || Ps(tt) > 3 ? '' : ' ';
}
function S1(n, a) {
  for (; --a && Vt() && !(tt < 48 || tt > 102 || (tt > 57 && tt < 65) || (tt > 70 && tt < 97)); );
  return cl(n, Uo() + (a < 6 && Tn() == 32 && Vt() == 32));
}
function xd(n) {
  for (; Vt(); )
    switch (tt) {
      case n:
        return Ot;
      case 34:
      case 39:
        n !== 34 && n !== 39 && xd(tt);
        break;
      case 40:
        n === 41 && xd(n);
        break;
      case 92:
        Vt();
        break;
    }
  return Ot;
}
function x1(n, a) {
  for (; Vt() && n + tt !== 57; ) if (n + tt === 84 && Tn() === 47) break;
  return '/*' + cl(a, Ot - 1) + '*' + yu(n === 47 ? n : Vt());
}
function E1(n) {
  for (; !Ps(Tn()); ) Vt();
  return cl(n, Ot);
}
function T1(n) {
  return zg(Ho('', null, null, null, [''], (n = kg(n)), 0, [0], n));
}
function Ho(n, a, i, s, o, u, f, h, m) {
  for (
    var p = 0,
      y = 0,
      v = f,
      b = 0,
      S = 0,
      x = 0,
      E = 1,
      R = 1,
      M = 1,
      L = 0,
      U = '',
      X = o,
      C = u,
      Z = s,
      H = U;
    R;

  )
    switch (((x = L), (L = Vt()))) {
      case 40:
        if (x != 108 && ft(H, v - 1) == 58) {
          Sd((H += ke(Bo(L), '&', '&\f')), '&\f') != -1 && (M = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        H += Bo(L);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        H += _1(x);
        break;
      case 92:
        H += S1(Uo() - 1, 7);
        continue;
      case 47:
        switch (Tn()) {
          case 42:
          case 47:
            Mo(w1(x1(Vt(), Uo()), a, i), m);
            break;
          default:
            H += '/';
        }
        break;
      case 123 * E:
        h[p++] = xn(H) * M;
      case 125 * E:
      case 59:
      case 0:
        switch (L) {
          case 0:
          case 125:
            R = 0;
          case 59 + y:
            M == -1 && (H = ke(H, /\f/g, '')),
              S > 0 &&
                xn(H) - v &&
                Mo(S > 32 ? Tv(H + ';', s, i, v - 1) : Tv(ke(H, ' ', '') + ';', s, i, v - 2), m);
            break;
          case 59:
            H += ';';
          default:
            if ((Mo((Z = Ev(H, a, i, p, y, o, h, U, (X = []), (C = []), v)), u), L === 123))
              if (y === 0) Ho(H, a, Z, Z, X, u, v, h, C);
              else
                switch (b === 99 && ft(H, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ho(
                      n,
                      Z,
                      Z,
                      s && Mo(Ev(n, Z, Z, 0, 0, o, h, U, o, (X = []), v), C),
                      o,
                      C,
                      v,
                      h,
                      s ? X : C,
                    );
                    break;
                  default:
                    Ho(H, Z, Z, Z, [''], C, 0, h, C);
                }
        }
        (p = y = S = 0), (E = M = 1), (U = H = ''), (v = f);
        break;
      case 58:
        (v = 1 + xn(H)), (S = x);
      default:
        if (E < 1) {
          if (L == 123) --E;
          else if (L == 125 && E++ == 0 && b1() == 125) continue;
        }
        switch (((H += yu(L)), L * E)) {
          case 38:
            M = y > 0 ? 1 : ((H += '\f'), -1);
            break;
          case 44:
            (h[p++] = (xn(H) - 1) * M), (M = 1);
            break;
          case 64:
            Tn() === 45 && (H += Bo(Vt())), (b = Tn()), (y = v = xn((U = H += E1(Uo())))), L++;
            break;
          case 45:
            x === 45 && xn(H) == 2 && (E = 0);
        }
    }
  return u;
}
function Ev(n, a, i, s, o, u, f, h, m, p, y) {
  for (var v = o - 1, b = o === 0 ? u : [''], S = Qd(b), x = 0, E = 0, R = 0; x < s; ++x)
    for (var M = 0, L = qs(n, v + 1, (v = h1((E = f[x])))), U = n; M < S; ++M)
      (U = Ng(E > 0 ? b[M] + ' ' + L : ke(L, /&\f/g, b[M]))) && (m[R++] = U);
  return gu(n, a, i, o === 0 ? Xd : h, m, p, y);
}
function w1(n, a, i) {
  return gu(n, a, i, Mg, yu(g1()), qs(n, 2, -2), 0);
}
function Tv(n, a, i, s) {
  return gu(n, a, i, Id, qs(n, 0, s), qs(n, s + 1, -1), s);
}
function mr(n, a) {
  for (var i = '', s = Qd(n), o = 0; o < s; o++) i += a(n[o], o, n, a) || '';
  return i;
}
function A1(n, a, i, s) {
  switch (n.type) {
    case d1:
      if (n.children.length) break;
    case f1:
    case Id:
      return (n.return = n.return || n.value);
    case Mg:
      return '';
    case Dg:
      return (n.return = n.value + '{' + mr(n.children, s) + '}');
    case Xd:
      n.value = n.props.join(',');
  }
  return xn((i = mr(n.children, s))) ? (n.return = n.value + '{' + i + '}') : '';
}
function R1(n) {
  var a = Qd(n);
  return function (i, s, o, u) {
    for (var f = '', h = 0; h < a; h++) f += n[h](i, s, o, u) || '';
    return f;
  };
}
function O1(n) {
  return function (a) {
    a.root || ((a = a.return) && n(a));
  };
}
function jg(n) {
  var a = Object.create(null);
  return function (i) {
    return a[i] === void 0 && (a[i] = n(i)), a[i];
  };
}
var C1 = function (a, i, s) {
    for (var o = 0, u = 0; (o = u), (u = Tn()), o === 38 && u === 12 && (i[s] = 1), !Ps(u); ) Vt();
    return cl(a, Ot);
  },
  M1 = function (a, i) {
    var s = -1,
      o = 44;
    do
      switch (Ps(o)) {
        case 0:
          o === 38 && Tn() === 12 && (i[s] = 1), (a[s] += C1(Ot - 1, i, s));
          break;
        case 2:
          a[s] += Bo(o);
          break;
        case 4:
          if (o === 44) {
            (a[++s] = Tn() === 58 ? '&\f' : ''), (i[s] = a[s].length);
            break;
          }
        default:
          a[s] += yu(o);
      }
    while ((o = Vt()));
    return a;
  },
  D1 = function (a, i) {
    return zg(M1(kg(a), i));
  },
  wv = new WeakMap(),
  N1 = function (a) {
    if (!(a.type !== 'rule' || !a.parent || a.length < 1)) {
      for (
        var i = a.value, s = a.parent, o = a.column === s.column && a.line === s.line;
        s.type !== 'rule';

      )
        if (((s = s.parent), !s)) return;
      if (!(a.props.length === 1 && i.charCodeAt(0) !== 58 && !wv.get(s)) && !o) {
        wv.set(a, !0);
        for (var u = [], f = D1(i, u), h = s.props, m = 0, p = 0; m < f.length; m++)
          for (var y = 0; y < h.length; y++, p++)
            a.props[p] = u[m] ? f[m].replace(/&\f/g, h[y]) : h[y] + ' ' + f[m];
      }
    }
  },
  L1 = function (a) {
    if (a.type === 'decl') {
      var i = a.value;
      i.charCodeAt(0) === 108 && i.charCodeAt(2) === 98 && ((a.return = ''), (a.value = ''));
    }
  };
function Ug(n, a) {
  switch (m1(n, a)) {
    case 5103:
      return Le + 'print-' + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Le + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Le + n + $o + n + mt + n + n;
    case 6828:
    case 4268:
      return Le + n + mt + n + n;
    case 6165:
      return Le + n + mt + 'flex-' + n + n;
    case 5187:
      return Le + n + ke(n, /(\w+).+(:[^]+)/, Le + 'box-$1$2' + mt + 'flex-$1$2') + n;
    case 5443:
      return Le + n + mt + 'flex-item-' + ke(n, /flex-|-self/, '') + n;
    case 4675:
      return Le + n + mt + 'flex-line-pack' + ke(n, /align-content|flex-|-self/, '') + n;
    case 5548:
      return Le + n + mt + ke(n, 'shrink', 'negative') + n;
    case 5292:
      return Le + n + mt + ke(n, 'basis', 'preferred-size') + n;
    case 6060:
      return Le + 'box-' + ke(n, '-grow', '') + Le + n + mt + ke(n, 'grow', 'positive') + n;
    case 4554:
      return Le + ke(n, /([^-])(transform)/g, '$1' + Le + '$2') + n;
    case 6187:
      return ke(ke(ke(n, /(zoom-|grab)/, Le + '$1'), /(image-set)/, Le + '$1'), n, '') + n;
    case 5495:
    case 3959:
      return ke(n, /(image-set\([^]*)/, Le + '$1$`$1');
    case 4968:
      return (
        ke(
          ke(n, /(.+:)(flex-)?(.*)/, Le + 'box-pack:$3' + mt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        Le +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(n, /(.+)-inline(.+)/, Le + '$1$2') + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xn(n) - 1 - a > 6)
        switch (ft(n, a + 1)) {
          case 109:
            if (ft(n, a + 4) !== 45) break;
          case 102:
            return (
              ke(
                n,
                /(.+:)(.+)-([^]+)/,
                '$1' + Le + '$2-$3$1' + $o + (ft(n, a + 3) == 108 ? '$3' : '$2-$3'),
              ) + n
            );
          case 115:
            return ~Sd(n, 'stretch') ? Ug(ke(n, 'stretch', 'fill-available'), a) + n : n;
        }
      break;
    case 4949:
      if (ft(n, a + 1) !== 115) break;
    case 6444:
      switch (ft(n, xn(n) - 3 - (~Sd(n, '!important') && 10))) {
        case 107:
          return ke(n, ':', ':' + Le) + n;
        case 101:
          return (
            ke(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Le +
                (ft(n, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Le +
                '$2$3$1' +
                mt +
                '$2box$3',
            ) + n
          );
      }
      break;
    case 5936:
      switch (ft(n, a + 11)) {
        case 114:
          return Le + n + mt + ke(n, /[svh]\w+-[tblr]{2}/, 'tb') + n;
        case 108:
          return Le + n + mt + ke(n, /[svh]\w+-[tblr]{2}/, 'tb-rl') + n;
        case 45:
          return Le + n + mt + ke(n, /[svh]\w+-[tblr]{2}/, 'lr') + n;
      }
      return Le + n + mt + n + n;
  }
  return n;
}
var k1 = function (a, i, s, o) {
    if (a.length > -1 && !a.return)
      switch (a.type) {
        case Id:
          a.return = Ug(a.value, a.length);
          break;
        case Dg:
          return mr([Ls(a, { value: ke(a.value, '@', '@' + Le) })], o);
        case Xd:
          if (a.length)
            return v1(a.props, function (u) {
              switch (y1(u, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return mr([Ls(a, { props: [ke(u, /:(read-\w+)/, ':' + $o + '$1')] })], o);
                case '::placeholder':
                  return mr(
                    [
                      Ls(a, { props: [ke(u, /:(plac\w+)/, ':' + Le + 'input-$1')] }),
                      Ls(a, { props: [ke(u, /:(plac\w+)/, ':' + $o + '$1')] }),
                      Ls(a, { props: [ke(u, /:(plac\w+)/, mt + 'input-$1')] }),
                    ],
                    o,
                  );
              }
              return '';
            });
      }
  },
  z1 = [k1],
  j1 = function (a) {
    var i = a.key;
    if (i === 'css') {
      var s = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(s, function (E) {
        var R = E.getAttribute('data-emotion');
        R.indexOf(' ') !== -1 && (document.head.appendChild(E), E.setAttribute('data-s', ''));
      });
    }
    var o = a.stylisPlugins || z1,
      u = {},
      f,
      h = [];
    (f = a.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
        function (E) {
          for (var R = E.getAttribute('data-emotion').split(' '), M = 1; M < R.length; M++)
            u[R[M]] = !0;
          h.push(E);
        },
      );
    var m,
      p = [N1, L1];
    {
      var y,
        v = [
          A1,
          O1(function (E) {
            y.insert(E);
          }),
        ],
        b = R1(p.concat(o, v)),
        S = function (R) {
          return mr(T1(R), b);
        };
      m = function (R, M, L, U) {
        (y = L), S(R ? R + '{' + M.styles + '}' : M.styles), U && (x.inserted[M.name] = !0);
      };
    }
    var x = {
      key: i,
      sheet: new c1({
        key: i,
        container: f,
        nonce: a.nonce,
        speedy: a.speedy,
        prepend: a.prepend,
        insertionPoint: a.insertionPoint,
      }),
      nonce: a.nonce,
      inserted: u,
      registered: {},
      insert: m,
    };
    return x.sheet.hydrate(h), x;
  };
function Ed() {
  return (
    (Ed = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a];
            for (var s in i) ({}).hasOwnProperty.call(i, s) && (n[s] = i[s]);
          }
          return n;
        }),
    Ed.apply(null, arguments)
  );
}
var Qf = { exports: {} },
  ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Av;
function U1() {
  if (Av) return ze;
  Av = 1;
  var n = typeof Symbol == 'function' && Symbol.for,
    a = n ? Symbol.for('react.element') : 60103,
    i = n ? Symbol.for('react.portal') : 60106,
    s = n ? Symbol.for('react.fragment') : 60107,
    o = n ? Symbol.for('react.strict_mode') : 60108,
    u = n ? Symbol.for('react.profiler') : 60114,
    f = n ? Symbol.for('react.provider') : 60109,
    h = n ? Symbol.for('react.context') : 60110,
    m = n ? Symbol.for('react.async_mode') : 60111,
    p = n ? Symbol.for('react.concurrent_mode') : 60111,
    y = n ? Symbol.for('react.forward_ref') : 60112,
    v = n ? Symbol.for('react.suspense') : 60113,
    b = n ? Symbol.for('react.suspense_list') : 60120,
    S = n ? Symbol.for('react.memo') : 60115,
    x = n ? Symbol.for('react.lazy') : 60116,
    E = n ? Symbol.for('react.block') : 60121,
    R = n ? Symbol.for('react.fundamental') : 60117,
    M = n ? Symbol.for('react.responder') : 60118,
    L = n ? Symbol.for('react.scope') : 60119;
  function U(C) {
    if (typeof C == 'object' && C !== null) {
      var Z = C.$$typeof;
      switch (Z) {
        case a:
          switch (((C = C.type), C)) {
            case m:
            case p:
            case s:
            case u:
            case o:
            case v:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case h:
                case y:
                case x:
                case S:
                case f:
                  return C;
                default:
                  return Z;
              }
          }
        case i:
          return Z;
      }
    }
  }
  function X(C) {
    return U(C) === p;
  }
  return (
    (ze.AsyncMode = m),
    (ze.ConcurrentMode = p),
    (ze.ContextConsumer = h),
    (ze.ContextProvider = f),
    (ze.Element = a),
    (ze.ForwardRef = y),
    (ze.Fragment = s),
    (ze.Lazy = x),
    (ze.Memo = S),
    (ze.Portal = i),
    (ze.Profiler = u),
    (ze.StrictMode = o),
    (ze.Suspense = v),
    (ze.isAsyncMode = function (C) {
      return X(C) || U(C) === m;
    }),
    (ze.isConcurrentMode = X),
    (ze.isContextConsumer = function (C) {
      return U(C) === h;
    }),
    (ze.isContextProvider = function (C) {
      return U(C) === f;
    }),
    (ze.isElement = function (C) {
      return typeof C == 'object' && C !== null && C.$$typeof === a;
    }),
    (ze.isForwardRef = function (C) {
      return U(C) === y;
    }),
    (ze.isFragment = function (C) {
      return U(C) === s;
    }),
    (ze.isLazy = function (C) {
      return U(C) === x;
    }),
    (ze.isMemo = function (C) {
      return U(C) === S;
    }),
    (ze.isPortal = function (C) {
      return U(C) === i;
    }),
    (ze.isProfiler = function (C) {
      return U(C) === u;
    }),
    (ze.isStrictMode = function (C) {
      return U(C) === o;
    }),
    (ze.isSuspense = function (C) {
      return U(C) === v;
    }),
    (ze.isValidElementType = function (C) {
      return (
        typeof C == 'string' ||
        typeof C == 'function' ||
        C === s ||
        C === p ||
        C === u ||
        C === o ||
        C === v ||
        C === b ||
        (typeof C == 'object' &&
          C !== null &&
          (C.$$typeof === x ||
            C.$$typeof === S ||
            C.$$typeof === f ||
            C.$$typeof === h ||
            C.$$typeof === y ||
            C.$$typeof === R ||
            C.$$typeof === M ||
            C.$$typeof === L ||
            C.$$typeof === E))
      );
    }),
    (ze.typeOf = U),
    ze
  );
}
var Rv;
function B1() {
  return Rv || ((Rv = 1), (Qf.exports = U1())), Qf.exports;
}
var Kf, Ov;
function H1() {
  if (Ov) return Kf;
  Ov = 1;
  var n = B1(),
    a = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    s = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    u = {};
  (u[n.ForwardRef] = s), (u[n.Memo] = o);
  function f(x) {
    return n.isMemo(x) ? o : u[x.$$typeof] || a;
  }
  var h = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    y = Object.getOwnPropertyDescriptor,
    v = Object.getPrototypeOf,
    b = Object.prototype;
  function S(x, E, R) {
    if (typeof E != 'string') {
      if (b) {
        var M = v(E);
        M && M !== b && S(x, M, R);
      }
      var L = m(E);
      p && (L = L.concat(p(E)));
      for (var U = f(x), X = f(E), C = 0; C < L.length; ++C) {
        var Z = L[C];
        if (!i[Z] && !(R && R[Z]) && !(X && X[Z]) && !(U && U[Z])) {
          var H = y(E, Z);
          try {
            h(x, Z, H);
          } catch {}
        }
      }
    }
    return x;
  }
  return (Kf = S), Kf;
}
H1();
var V1 = !0;
function Bg(n, a, i) {
  var s = '';
  return (
    i.split(' ').forEach(function (o) {
      n[o] !== void 0 ? a.push(n[o] + ';') : o && (s += o + ' ');
    }),
    s
  );
}
var Kd = function (a, i, s) {
    var o = a.key + '-' + i.name;
    (s === !1 || V1 === !1) && a.registered[o] === void 0 && (a.registered[o] = i.styles);
  },
  Hg = function (a, i, s) {
    Kd(a, i, s);
    var o = a.key + '-' + i.name;
    if (a.inserted[i.name] === void 0) {
      var u = i;
      do a.insert(i === u ? '.' + o : '', u, a.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function Z1(n) {
  for (var a = 0, i, s = 0, o = n.length; o >= 4; ++s, o -= 4)
    (i =
      (n.charCodeAt(s) & 255) |
      ((n.charCodeAt(++s) & 255) << 8) |
      ((n.charCodeAt(++s) & 255) << 16) |
      ((n.charCodeAt(++s) & 255) << 24)),
      (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
      (i ^= i >>> 24),
      (a =
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)) ^
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      a ^= (n.charCodeAt(s + 2) & 255) << 16;
    case 2:
      a ^= (n.charCodeAt(s + 1) & 255) << 8;
    case 1:
      (a ^= n.charCodeAt(s) & 255), (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16));
  }
  return (
    (a ^= a >>> 13),
    (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
    ((a ^ (a >>> 15)) >>> 0).toString(36)
  );
}
var Y1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  q1 = /[A-Z]|^ms/g,
  P1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Vg = function (a) {
    return a.charCodeAt(1) === 45;
  },
  Cv = function (a) {
    return a != null && typeof a != 'boolean';
  },
  Jf = jg(function (n) {
    return Vg(n) ? n : n.replace(q1, '-$&').toLowerCase();
  }),
  Mv = function (a, i) {
    switch (a) {
      case 'animation':
      case 'animationName':
        if (typeof i == 'string')
          return i.replace(P1, function (s, o, u) {
            return (En = { name: o, styles: u, next: En }), o;
          });
    }
    return Y1[a] !== 1 && !Vg(a) && typeof i == 'number' && i !== 0 ? i + 'px' : i;
  };
function Gs(n, a, i) {
  if (i == null) return '';
  var s = i;
  if (s.__emotion_styles !== void 0) return s;
  switch (typeof i) {
    case 'boolean':
      return '';
    case 'object': {
      var o = i;
      if (o.anim === 1) return (En = { name: o.name, styles: o.styles, next: En }), o.name;
      var u = i;
      if (u.styles !== void 0) {
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; ) (En = { name: f.name, styles: f.styles, next: En }), (f = f.next);
        var h = u.styles + ';';
        return h;
      }
      return G1(n, a, i);
    }
    case 'function': {
      if (n !== void 0) {
        var m = En,
          p = i(n);
        return (En = m), Gs(n, a, p);
      }
      break;
    }
  }
  var y = i;
  if (a == null) return y;
  var v = a[y];
  return v !== void 0 ? v : y;
}
function G1(n, a, i) {
  var s = '';
  if (Array.isArray(i)) for (var o = 0; o < i.length; o++) s += Gs(n, a, i[o]) + ';';
  else
    for (var u in i) {
      var f = i[u];
      if (typeof f != 'object') {
        var h = f;
        a != null && a[h] !== void 0
          ? (s += u + '{' + a[h] + '}')
          : Cv(h) && (s += Jf(u) + ':' + Mv(u, h) + ';');
      } else if (Array.isArray(f) && typeof f[0] == 'string' && (a == null || a[f[0]] === void 0))
        for (var m = 0; m < f.length; m++) Cv(f[m]) && (s += Jf(u) + ':' + Mv(u, f[m]) + ';');
      else {
        var p = Gs(n, a, f);
        switch (u) {
          case 'animation':
          case 'animationName': {
            s += Jf(u) + ':' + p + ';';
            break;
          }
          default:
            s += u + '{' + p + '}';
        }
      }
    }
  return s;
}
var Dv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  En;
function Zg(n, a, i) {
  if (n.length === 1 && typeof n[0] == 'object' && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var s = !0,
    o = '';
  En = void 0;
  var u = n[0];
  if (u == null || u.raw === void 0) (s = !1), (o += Gs(i, a, u));
  else {
    var f = u;
    o += f[0];
  }
  for (var h = 1; h < n.length; h++)
    if (((o += Gs(i, a, n[h])), s)) {
      var m = u;
      o += m[h];
    }
  Dv.lastIndex = 0;
  for (var p = '', y; (y = Dv.exec(o)) !== null; ) p += '-' + y[1];
  var v = Z1(o) + p;
  return { name: v, styles: o, next: En };
}
var $1 = function (a) {
    return a();
  },
  X1 = Go.useInsertionEffect ? Go.useInsertionEffect : !1,
  Yg = X1 || $1,
  qg = w.createContext(typeof HTMLElement < 'u' ? j1({ key: 'css' }) : null);
qg.Provider;
var Pg = function (a) {
    return w.forwardRef(function (i, s) {
      var o = w.useContext(qg);
      return a(i, o, s);
    });
  },
  Gg = w.createContext({}),
  bu = {}.hasOwnProperty,
  Td = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  $g = function (a, i) {
    var s = {};
    for (var o in i) bu.call(i, o) && (s[o] = i[o]);
    return (s[Td] = a), s;
  },
  I1 = function (a) {
    var i = a.cache,
      s = a.serialized,
      o = a.isStringTag;
    return (
      Kd(i, s, o),
      Yg(function () {
        return Hg(i, s, o);
      }),
      null
    );
  },
  Q1 = Pg(function (n, a, i) {
    var s = n.css;
    typeof s == 'string' && a.registered[s] !== void 0 && (s = a.registered[s]);
    var o = n[Td],
      u = [s],
      f = '';
    typeof n.className == 'string'
      ? (f = Bg(a.registered, u, n.className))
      : n.className != null && (f = n.className + ' ');
    var h = Zg(u, void 0, w.useContext(Gg));
    f += a.key + '-' + h.name;
    var m = {};
    for (var p in n) bu.call(n, p) && p !== 'css' && p !== Td && (m[p] = n[p]);
    return (
      (m.className = f),
      i && (m.ref = i),
      w.createElement(
        w.Fragment,
        null,
        w.createElement(I1, { cache: a, serialized: h, isStringTag: typeof o == 'string' }),
        w.createElement(o, m),
      )
    );
  }),
  Xg = Q1,
  q2 = ee.Fragment,
  ea = function (a, i, s) {
    return bu.call(i, 'css') ? ee.jsx(Xg, $g(a, i), s) : ee.jsx(a, i, s);
  },
  K1 = function (a, i, s) {
    return bu.call(i, 'css') ? ee.jsxs(Xg, $g(a, i), s) : ee.jsxs(a, i, s);
  },
  J1 = 'Invariant failed';
function ta(n, a) {
  if (!n) throw new Error(J1);
}
const yr = new WeakMap(),
  Vo = new WeakMap(),
  Xo = { current: [] };
let Ff = !1,
  Vs = 0;
const js = new Set(),
  Do = new Map();
function Ig(n) {
  const a = Array.from(n).sort((i, s) =>
    i instanceof vr && i.options.deps.includes(s)
      ? 1
      : s instanceof vr && s.options.deps.includes(i)
        ? -1
        : 0,
  );
  for (const i of a) {
    if (Xo.current.includes(i)) continue;
    Xo.current.push(i), i.recompute();
    const s = Vo.get(i);
    if (s)
      for (const o of s) {
        const u = yr.get(o);
        u && Ig(u);
      }
  }
}
function F1(n) {
  n.listeners.forEach((a) => a({ prevVal: n.prevState, currentVal: n.state }));
}
function W1(n) {
  n.listeners.forEach((a) => a({ prevVal: n.prevState, currentVal: n.state }));
}
function Qg(n) {
  if ((Vs > 0 && !Do.has(n) && Do.set(n, n.prevState), js.add(n), !(Vs > 0) && !Ff))
    try {
      for (Ff = !0; js.size > 0; ) {
        const a = Array.from(js);
        js.clear();
        for (const i of a) {
          const s = Do.get(i) ?? i.prevState;
          (i.prevState = s), F1(i);
        }
        for (const i of a) {
          const s = yr.get(i);
          s && (Xo.current.push(i), Ig(s));
        }
        for (const i of a) {
          const s = yr.get(i);
          if (s) for (const o of s) W1(o);
        }
      }
    } finally {
      (Ff = !1), (Xo.current = []), Do.clear();
    }
}
function Wf(n) {
  Vs++;
  try {
    n();
  } finally {
    if ((Vs--, Vs === 0)) {
      const a = Array.from(js)[0];
      a && Qg(a);
    }
  }
}
class wd {
  constructor(a, i) {
    (this.listeners = new Set()),
      (this.subscribe = (s) => {
        var o, u;
        this.listeners.add(s);
        const f =
          (u = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : u.call(o, s, this);
        return () => {
          this.listeners.delete(s), f == null || f();
        };
      }),
      (this.setState = (s) => {
        var o, u, f;
        (this.prevState = this.state),
          (this.state =
            (o = this.options) != null && o.updateFn
              ? this.options.updateFn(this.prevState)(s)
              : s(this.prevState)),
          (f = (u = this.options) == null ? void 0 : u.onUpdate) == null || f.call(u),
          Qg(this);
      }),
      (this.prevState = a),
      (this.state = a),
      (this.options = i);
  }
}
class vr {
  constructor(a) {
    (this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const i = [],
          s = [];
        for (const o of this.options.deps) i.push(o.prevState), s.push(o.state);
        return (
          (this.lastSeenDepValues = s),
          { prevDepVals: i, currDepVals: s, prevVal: this.prevState ?? void 0 }
        );
      }),
      (this.recompute = () => {
        var i, s;
        this.prevState = this.state;
        const { prevDepVals: o, currDepVals: u, prevVal: f } = this.getDepVals();
        (this.state = this.options.fn({ prevDepVals: o, currDepVals: u, prevVal: f })),
          (s = (i = this.options).onUpdate) == null || s.call(i);
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const u of this.options.deps) u instanceof vr && u.checkIfRecalculationNeededDeeply();
        let i = !1;
        const s = this.lastSeenDepValues,
          { currDepVals: o } = this.getDepVals();
        for (let u = 0; u < o.length; u++)
          if (o[u] !== s[u]) {
            i = !0;
            break;
          }
        i && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const i of this._subscriptions) i();
        }
      )),
      (this.subscribe = (i) => {
        var s, o;
        this.listeners.add(i);
        const u = (o = (s = this.options).onSubscribe) == null ? void 0 : o.call(s, i, this);
        return () => {
          this.listeners.delete(i), u == null || u();
        };
      }),
      (this.options = a),
      (this.state = a.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      }));
  }
  registerOnGraph(a = this.options.deps) {
    for (const i of a)
      if (i instanceof vr) i.registerOnGraph(), this.registerOnGraph(i.options.deps);
      else if (i instanceof wd) {
        let s = yr.get(i);
        s || ((s = new Set()), yr.set(i, s)), s.add(this);
        let o = Vo.get(this);
        o || ((o = new Set()), Vo.set(this, o)), o.add(i);
      }
  }
  unregisterFromGraph(a = this.options.deps) {
    for (const i of a)
      if (i instanceof vr) this.unregisterFromGraph(i.options.deps);
      else if (i instanceof wd) {
        const s = yr.get(i);
        s && s.delete(this);
        const o = Vo.get(this);
        o && o.delete(i);
      }
  }
}
const Ca = '__TSR_index',
  Nv = 'popstate',
  Lv = 'beforeunload';
function Kg(n) {
  let a = n.getLocation();
  const i = new Set(),
    s = (f) => {
      (a = n.getLocation()), i.forEach((h) => h({ location: a, action: f }));
    },
    o = (f) => {
      (n.notifyOnIndexChange ?? !0) ? s(f) : (a = n.getLocation());
    },
    u = async ({ task: f, navigateOpts: h, ...m }) => {
      var p, y;
      if ((h == null ? void 0 : h.ignoreBlocker) ?? !1) {
        f();
        return;
      }
      const b = ((p = n.getBlockers) == null ? void 0 : p.call(n)) ?? [],
        S = m.type === 'PUSH' || m.type === 'REPLACE';
      if (typeof document < 'u' && b.length && S)
        for (const x of b) {
          const E = $s(m.path, m.state);
          if (await x.blockerFn({ currentLocation: a, nextLocation: E, action: m.type })) {
            (y = n.onBlocked) == null || y.call(n);
            return;
          }
        }
      f();
    };
  return {
    get location() {
      return a;
    },
    get length() {
      return n.getLength();
    },
    subscribers: i,
    subscribe: (f) => (
      i.add(f),
      () => {
        i.delete(f);
      }
    ),
    push: (f, h, m) => {
      const p = a.state[Ca];
      (h = Ad(p + 1, h)),
        u({
          task: () => {
            n.pushState(f, h), s({ type: 'PUSH' });
          },
          navigateOpts: m,
          type: 'PUSH',
          path: f,
          state: h,
        });
    },
    replace: (f, h, m) => {
      const p = a.state[Ca];
      (h = Ad(p, h)),
        u({
          task: () => {
            n.replaceState(f, h), s({ type: 'REPLACE' });
          },
          navigateOpts: m,
          type: 'REPLACE',
          path: f,
          state: h,
        });
    },
    go: (f, h) => {
      u({
        task: () => {
          n.go(f), o({ type: 'GO', index: f });
        },
        navigateOpts: h,
        type: 'GO',
      });
    },
    back: (f) => {
      u({
        task: () => {
          n.back((f == null ? void 0 : f.ignoreBlocker) ?? !1), o({ type: 'BACK' });
        },
        navigateOpts: f,
        type: 'BACK',
      });
    },
    forward: (f) => {
      u({
        task: () => {
          n.forward((f == null ? void 0 : f.ignoreBlocker) ?? !1), o({ type: 'FORWARD' });
        },
        navigateOpts: f,
        type: 'FORWARD',
      });
    },
    canGoBack: () => a.state[Ca] !== 0,
    createHref: (f) => n.createHref(f),
    block: (f) => {
      var h;
      if (!n.setBlockers) return () => {};
      const m = ((h = n.getBlockers) == null ? void 0 : h.call(n)) ?? [];
      return (
        n.setBlockers([...m, f]),
        () => {
          var p, y;
          const v = ((p = n.getBlockers) == null ? void 0 : p.call(n)) ?? [];
          (y = n.setBlockers) == null ||
            y.call(
              n,
              v.filter((b) => b !== f),
            );
        }
      );
    },
    flush: () => {
      var f;
      return (f = n.flush) == null ? void 0 : f.call(n);
    },
    destroy: () => {
      var f;
      return (f = n.destroy) == null ? void 0 : f.call(n);
    },
    notify: s,
  };
}
function Ad(n, a) {
  return a || (a = {}), { ...a, key: Jd(), [Ca]: n };
}
function ex(n) {
  var a;
  const i = typeof document < 'u' ? window : void 0,
    s = i.history.pushState,
    o = i.history.replaceState;
  let u = [];
  const f = () => u,
    h = (V) => (u = V),
    m = (V) => V,
    p = () => $s(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state);
  ((a = i.history.state) != null && a.key) || i.history.replaceState({ [Ca]: 0, key: Jd() }, '');
  let y = p(),
    v,
    b = !1,
    S = !1,
    x = !1,
    E = !1;
  const R = () => y;
  let M, L;
  const U = () => {
      M &&
        ((Y._ignoreSubscribers = !0),
        (M.isPush ? i.history.pushState : i.history.replaceState)(M.state, '', M.href),
        (Y._ignoreSubscribers = !1),
        (M = void 0),
        (L = void 0),
        (v = void 0));
    },
    X = (V, F, ne) => {
      const W = m(F);
      L || (v = y),
        (y = $s(F, ne)),
        (M = { href: W, state: ne, isPush: (M == null ? void 0 : M.isPush) || V === 'push' }),
        L || (L = Promise.resolve().then(() => U()));
    },
    C = (V) => {
      (y = p()), Y.notify({ type: V });
    },
    Z = async () => {
      if (S) {
        S = !1;
        return;
      }
      const V = p(),
        F = V.state[Ca] - y.state[Ca],
        ne = F === 1,
        W = F === -1,
        te = (!ne && !W) || b;
      b = !1;
      const de = te ? 'GO' : W ? 'BACK' : 'FORWARD',
        le = te ? { type: 'GO', index: F } : { type: W ? 'BACK' : 'FORWARD' };
      if (x) x = !1;
      else {
        const N = f();
        if (typeof document < 'u' && N.length) {
          for (const G of N)
            if (await G.blockerFn({ currentLocation: y, nextLocation: V, action: de })) {
              (S = !0), i.history.go(1), Y.notify(le);
              return;
            }
        }
      }
      (y = p()), Y.notify(le);
    },
    H = (V) => {
      if (E) {
        E = !1;
        return;
      }
      let F = !1;
      const ne = f();
      if (typeof document < 'u' && ne.length)
        for (const W of ne) {
          const te = W.enableBeforeUnload ?? !0;
          if (te === !0) {
            F = !0;
            break;
          }
          if (typeof te == 'function' && te() === !0) {
            F = !0;
            break;
          }
        }
      if (F) return V.preventDefault(), (V.returnValue = '');
    },
    Y = Kg({
      getLocation: R,
      getLength: () => i.history.length,
      pushState: (V, F) => X('push', V, F),
      replaceState: (V, F) => X('replace', V, F),
      back: (V) => (V && (x = !0), (E = !0), i.history.back()),
      forward: (V) => {
        V && (x = !0), (E = !0), i.history.forward();
      },
      go: (V) => {
        (b = !0), i.history.go(V);
      },
      createHref: (V) => m(V),
      flush: U,
      destroy: () => {
        (i.history.pushState = s),
          (i.history.replaceState = o),
          i.removeEventListener(Lv, H, { capture: !0 }),
          i.removeEventListener(Nv, Z);
      },
      onBlocked: () => {
        v && y !== v && (y = v);
      },
      getBlockers: f,
      setBlockers: h,
      notifyOnIndexChange: !1,
    });
  return (
    i.addEventListener(Lv, H, { capture: !0 }),
    i.addEventListener(Nv, Z),
    (i.history.pushState = function (...V) {
      const F = s.apply(i.history, V);
      return Y._ignoreSubscribers || C('PUSH'), F;
    }),
    (i.history.replaceState = function (...V) {
      const F = o.apply(i.history, V);
      return Y._ignoreSubscribers || C('REPLACE'), F;
    }),
    Y
  );
}
function tx(n = { initialEntries: ['/'] }) {
  const a = n.initialEntries;
  let i = n.initialIndex ? Math.min(Math.max(n.initialIndex, 0), a.length - 1) : a.length - 1;
  const s = a.map((u, f) => Ad(f, void 0));
  return Kg({
    getLocation: () => $s(a[i], s[i]),
    getLength: () => a.length,
    pushState: (u, f) => {
      i < a.length - 1 && (a.splice(i + 1), s.splice(i + 1)),
        s.push(f),
        a.push(u),
        (i = Math.max(a.length - 1, 0));
    },
    replaceState: (u, f) => {
      (s[i] = f), (a[i] = u);
    },
    back: () => {
      i = Math.max(i - 1, 0);
    },
    forward: () => {
      i = Math.min(i + 1, a.length - 1);
    },
    go: (u) => {
      i = Math.min(Math.max(i + u, 0), a.length - 1);
    },
    createHref: (u) => u,
  });
}
function $s(n, a) {
  const i = n.indexOf('#'),
    s = n.indexOf('?');
  return {
    href: n,
    pathname: n.substring(0, i > 0 ? (s > 0 ? Math.min(i, s) : i) : s > 0 ? s : n.length),
    hash: i > -1 ? n.substring(i) : '',
    search: s > -1 ? n.slice(s, i === -1 ? void 0 : i) : '',
    state: a || { [Ca]: 0, key: Jd() },
  };
}
function Jd() {
  return (Math.random() + 1).toString(36).substring(7);
}
function fr(n) {
  return n[n.length - 1];
}
function nx(n) {
  return typeof n == 'function';
}
function Us(n, a) {
  return nx(n) ? n(a) : n;
}
function Rd(n, a) {
  return a.reduce((i, s) => ((i[s] = n[s]), i), {});
}
function tn(n, a) {
  if (n === a) return n;
  const i = a,
    s = zv(n) && zv(i);
  if (s || (Io(n) && Io(i))) {
    const o = s ? n : Object.keys(n),
      u = o.length,
      f = s ? i : Object.keys(i),
      h = f.length,
      m = s ? [] : {};
    let p = 0;
    for (let y = 0; y < h; y++) {
      const v = s ? y : f[y];
      ((!s && o.includes(v)) || s) && n[v] === void 0 && i[v] === void 0
        ? ((m[v] = void 0), p++)
        : ((m[v] = tn(n[v], i[v])), m[v] === n[v] && n[v] !== void 0 && p++);
    }
    return u === h && p === u ? n : m;
  }
  return i;
}
function Io(n) {
  if (!kv(n)) return !1;
  const a = n.constructor;
  if (typeof a > 'u') return !0;
  const i = a.prototype;
  return !(!kv(i) || !i.hasOwnProperty('isPrototypeOf'));
}
function kv(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
function zv(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function jv(n, a) {
  let i = Object.keys(n);
  return a && (i = i.filter((s) => n[s] !== void 0)), i;
}
function Zs(n, a, i) {
  if (n === a) return !0;
  if (typeof n != typeof a) return !1;
  if (Io(n) && Io(a)) {
    const s = (i == null ? void 0 : i.ignoreUndefined) ?? !0,
      o = jv(n, s),
      u = jv(a, s);
    return !(i != null && i.partial) && o.length !== u.length
      ? !1
      : u.every((f) => Zs(n[f], a[f], i));
  }
  return Array.isArray(n) && Array.isArray(a)
    ? n.length !== a.length
      ? !1
      : !n.some((s, o) => !Zs(s, a[o], i))
    : !1;
}
function lr(n) {
  let a, i;
  const s = new Promise((o, u) => {
    (a = o), (i = u);
  });
  return (
    (s.status = 'pending'),
    (s.resolve = (o) => {
      (s.status = 'resolved'), (s.value = o), a(o), n == null || n(o);
    }),
    (s.reject = (o) => {
      (s.status = 'rejected'), i(o);
    }),
    s
  );
}
function ax(n) {
  return /%[0-9A-Fa-f]{2}/.test(n);
}
function na(n) {
  return _u(n.filter((a) => a !== void 0).join('/'));
}
function _u(n) {
  return n.replace(/\/{2,}/g, '/');
}
function Fd(n) {
  return n === '/' ? n : n.replace(/^\/{1,}/, '');
}
function li(n) {
  return n === '/' ? n : n.replace(/\/{1,}$/, '');
}
function ix(n) {
  return li(Fd(n));
}
function rx({ basepath: n, base: a, to: i, trailingSlash: s = 'never', caseSensitive: o }) {
  var u, f;
  (a = Qo(n, a, o)), (i = Qo(n, i, o));
  let h = xr(a);
  const m = xr(i);
  h.length > 1 && ((u = fr(h)) == null ? void 0 : u.value) === '/' && h.pop(),
    m.forEach((y, v) => {
      y.value === '/'
        ? v
          ? v === m.length - 1 && h.push(y)
          : (h = [y])
        : y.value === '..'
          ? h.pop()
          : y.value === '.' || h.push(y);
    }),
    h.length > 1 &&
      (((f = fr(h)) == null ? void 0 : f.value) === '/'
        ? s === 'never' && h.pop()
        : s === 'always' && h.push({ type: 'pathname', value: '/' }));
  const p = na([n, ...h.map((y) => y.value)]);
  return _u(p);
}
function xr(n) {
  if (!n) return [];
  n = _u(n);
  const a = [];
  if (
    (n.slice(0, 1) === '/' && ((n = n.substring(1)), a.push({ type: 'pathname', value: '/' })), !n)
  )
    return a;
  const i = n.split('/').filter(Boolean);
  return (
    a.push(
      ...i.map((s) =>
        s === '$' || s === '*'
          ? { type: 'wildcard', value: s }
          : s.charAt(0) === '$'
            ? { type: 'param', value: s }
            : {
                type: 'pathname',
                value: s.includes('%25')
                  ? s
                      .split('%25')
                      .map((o) => decodeURI(o))
                      .join('%25')
                  : decodeURI(s),
              },
      ),
    ),
    n.slice(-1) === '/' && ((n = n.substring(1)), a.push({ type: 'pathname', value: '/' })),
    a
  );
}
function No({ path: n, params: a, leaveWildcards: i, leaveParams: s, decodeCharMap: o }) {
  const u = xr(n);
  function f(p) {
    const y = a[p],
      v = typeof y == 'string';
    return ['*', '_splat'].includes(p) ? (v ? encodeURI(y) : y) : v ? sx(y, o) : y;
  }
  const h = {},
    m = na(
      u.map((p) => {
        if (p.type === 'wildcard') {
          h._splat = a._splat;
          const y = f('_splat');
          return i ? `${p.value}${y ?? ''}` : y;
        }
        if (p.type === 'param') {
          const y = p.value.substring(1);
          if (((h[y] = a[y]), s)) {
            const v = f(p.value);
            return `${p.value}${v ?? ''}`;
          }
          return f(y) ?? 'undefined';
        }
        return p.value;
      }),
    );
  return { usedParams: h, interpolatedPath: m };
}
function sx(n, a) {
  let i = encodeURIComponent(n);
  if (a) for (const [s, o] of a) i = i.replaceAll(s, o);
  return i;
}
function Lo(n, a, i) {
  const s = lx(n, a, i);
  if (!(i.to && !s)) return s ?? {};
}
function Qo(n, a, i = !1) {
  const s = i ? n : n.toLowerCase(),
    o = i ? a : a.toLowerCase();
  switch (!0) {
    case s === '/':
      return a;
    case o === s:
      return '';
    case a.length < n.length:
      return a;
    case o[s.length] !== '/':
      return a;
    case o.startsWith(s):
      return a.slice(n.length);
    default:
      return a;
  }
}
function lx(n, a, i) {
  if (n !== '/' && !a.startsWith(n)) return;
  a = Qo(n, a, i.caseSensitive);
  const s = Qo(n, `${i.to ?? '$'}`, i.caseSensitive),
    o = xr(a),
    u = xr(s);
  a.startsWith('/') || o.unshift({ type: 'pathname', value: '/' }),
    s.startsWith('/') || u.unshift({ type: 'pathname', value: '/' });
  const f = {};
  return (() => {
    for (let m = 0; m < Math.max(o.length, u.length); m++) {
      const p = o[m],
        y = u[m],
        v = m >= o.length - 1,
        b = m >= u.length - 1;
      if (y) {
        if (y.type === 'wildcard') {
          const S = decodeURI(na(o.slice(m).map((x) => x.value)));
          return (f['*'] = S), (f._splat = S), !0;
        }
        if (y.type === 'pathname') {
          if (y.value === '/' && !(p != null && p.value)) return !0;
          if (p) {
            if (i.caseSensitive) {
              if (y.value !== p.value) return !1;
            } else if (y.value.toLowerCase() !== p.value.toLowerCase()) return !1;
          }
        }
        if (!p) return !1;
        if (y.type === 'param') {
          if (p.value === '/') return !1;
          p.value.charAt(0) !== '$' && (f[y.value.substring(1)] = decodeURIComponent(p.value));
        }
      }
      if (!v && b)
        return (
          (f['**'] = na(o.slice(m + 1).map((S) => S.value))),
          !!i.fuzzy && (y == null ? void 0 : y.value) !== '/'
        );
    }
    return !0;
  })()
    ? f
    : void 0;
}
function nn(n) {
  return !!(n != null && n.isNotFound);
}
const Ko = 'tsr-scroll-restoration-v1_3';
let Jg = !1;
try {
  Jg = typeof window < 'u' && typeof window.sessionStorage == 'object';
} catch {}
const ox = (n, a) => {
    let i;
    return (...s) => {
      i ||
        (i = setTimeout(() => {
          n(...s), (i = null);
        }, a));
    };
  },
  dr = Jg
    ? {
        state: JSON.parse(window.sessionStorage.getItem(Ko) || 'null') || {},
        set: (a) => (
          (dr.state = Us(a, dr.state) || dr.state),
          window.sessionStorage.setItem(Ko, JSON.stringify(dr.state))
        ),
      }
    : void 0,
  Od = (n) => n.state.key || n.href;
function ux(n) {
  const a = [];
  let i;
  for (; (i = n.parentNode); )
    a.unshift(`${n.tagName}:nth-child(${[].indexOf.call(i.children, n) + 1})`), (n = i);
  return `${a.join(' > ')}`.toLowerCase();
}
let Jo = !1;
function Fg(n, a, i, s, o) {
  var u;
  let f;
  try {
    f = JSON.parse(sessionStorage.getItem(n) || '{}');
  } catch (p) {
    console.error(p);
    return;
  }
  const h = a || ((u = window.history.state) == null ? void 0 : u.key),
    m = f[h];
  (Jo = !0),
    (() => {
      if (s && m) {
        for (const y in m) {
          const v = m[y];
          if (y === 'window') window.scrollTo({ top: v.scrollY, left: v.scrollX, behavior: i });
          else if (y) {
            const b = document.querySelector(y);
            b && ((b.scrollLeft = v.scrollX), (b.scrollTop = v.scrollY));
          }
        }
        return;
      }
      const p = window.location.hash.split('#')[1];
      if (p) {
        const y = (window.history.state || {}).__hashScrollIntoViewOptions ?? !0;
        if (y) {
          const v = document.getElementById(p);
          v && v.scrollIntoView(y);
        }
        return;
      }
      ['window', ...((o == null ? void 0 : o.filter((y) => y !== 'window')) ?? [])].forEach((y) => {
        const v = y === 'window' ? window : document.querySelector(y);
        v && v.scrollTo({ top: 0, left: 0, behavior: i });
      });
    })(),
    (Jo = !1);
}
function cx(n, a) {
  if (
    ((n.options.scrollRestoration ?? !1) && (n.isScrollRestoring = !0),
    typeof document > 'u' || n.isScrollRestorationSetup)
  )
    return;
  (n.isScrollRestorationSetup = !0), (Jo = !1);
  const s = n.options.getScrollRestorationKey || Od;
  window.history.scrollRestoration = 'manual';
  const o = (u) => {
    if (Jo || !n.isScrollRestoring) return;
    let f = '';
    if (u.target === document || u.target === window) f = 'window';
    else {
      const m = u.target.getAttribute('data-scroll-restoration-id');
      m ? (f = `[data-scroll-restoration-id="${m}"]`) : (f = ux(u.target));
    }
    const h = s(n.state.location);
    dr.set((m) => {
      const p = (m[h] = m[h] || {}),
        y = (p[f] = p[f] || {});
      if (f === 'window') (y.scrollX = window.scrollX || 0), (y.scrollY = window.scrollY || 0);
      else if (f) {
        const v = document.querySelector(f);
        v && ((y.scrollX = v.scrollLeft || 0), (y.scrollY = v.scrollTop || 0));
      }
      return m;
    });
  };
  typeof document < 'u' && document.addEventListener('scroll', ox(o, 100), !0),
    n.subscribe('onRendered', (u) => {
      const f = s(u.toLocation);
      if (!n.resetNextScroll) {
        n.resetNextScroll = !0;
        return;
      }
      Fg(
        Ko,
        f,
        n.options.scrollRestorationBehavior || void 0,
        n.isScrollRestoring || void 0,
        n.options.scrollToTopSelectors || void 0,
      ),
        n.isScrollRestoring && dr.set((h) => ((h[f] = h[f] || {}), h));
    });
}
function fx(n) {
  if (typeof document < 'u' && document.querySelector) {
    const a = n.state.location.state.__hashScrollIntoViewOptions ?? !0;
    if (a && n.state.location.hash !== '') {
      const i = document.getElementById(n.state.location.hash);
      i && i.scrollIntoView(a);
    }
  }
}
function dx(n, a) {
  const i = Object.entries(n).flatMap(([o, u]) =>
    Array.isArray(u) ? u.map((f) => [o, String(f)]) : [[o, String(u)]],
  );
  return '' + new URLSearchParams(i).toString();
}
function ed(n) {
  if (!n) return '';
  const a = ax(n) ? decodeURIComponent(n) : decodeURIComponent(encodeURIComponent(n));
  return a === 'false' ? !1 : a === 'true' ? !0 : +a * 0 === 0 && +a + '' === a ? +a : a;
}
function hx(n, a) {
  const i = n;
  return [...new URLSearchParams(i).entries()].reduce((u, [f, h]) => {
    const m = u[f];
    return m == null ? (u[f] = ed(h)) : (u[f] = Array.isArray(m) ? [...m, ed(h)] : [m, ed(h)]), u;
  }, {});
}
const px = yx(JSON.parse),
  mx = vx(JSON.stringify, JSON.parse);
function yx(n) {
  return (a) => {
    a.substring(0, 1) === '?' && (a = a.substring(1));
    const i = hx(a);
    for (const s in i) {
      const o = i[s];
      if (typeof o == 'string')
        try {
          i[s] = n(o);
        } catch {}
    }
    return i;
  };
}
function vx(n, a) {
  function i(s) {
    if (typeof s == 'object' && s !== null)
      try {
        return n(s);
      } catch {}
    else if (typeof s == 'string' && typeof a == 'function')
      try {
        return a(s), n(s);
      } catch {}
    return s;
  }
  return (s) => {
    (s = { ...s }),
      Object.keys(s).forEach((u) => {
        const f = s[u];
        typeof f > 'u' || f === void 0 ? delete s[u] : (s[u] = i(f));
      });
    const o = dx(s).toString();
    return o ? `?${o}` : '';
  };
}
const un = '__root__';
function ii(n) {
  return !!(n != null && n.isRedirect);
}
function td(n) {
  return !!(n != null && n.isRedirect) && n.href;
}
function ui(n) {
  const a = n.resolvedLocation,
    i = n.location,
    s = (a == null ? void 0 : a.pathname) !== i.pathname,
    o = (a == null ? void 0 : a.href) !== i.href,
    u = (a == null ? void 0 : a.hash) !== i.hash;
  return { fromLocation: a, toLocation: i, pathChanged: s, hrefChanged: o, hashChanged: u };
}
class gx {
  constructor(a) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.isScrollRestoring = !1),
      (this.isScrollRestorationSetup = !1),
      (this.startTransition = (i) => i()),
      (this.update = (i) => {
        var s;
        i.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.',
          );
        const o = this.options;
        (this.options = { ...this.options, ...i }),
          (this.isServer = this.options.isServer ?? typeof document > 'u'),
          (this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((u) => [encodeURIComponent(u), u]),
              )
            : void 0),
          (!this.basepath || (i.basepath && i.basepath !== o.basepath)) &&
            (i.basepath === void 0 || i.basepath === '' || i.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${ix(i.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer ? tx({ initialEntries: [this.basepath || '/'] }) : ex())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            ((this.__store = new wd(_x(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (u) => !['redirected'].includes(u.status),
                  ),
                };
              },
            })),
            cx(this)),
          typeof window < 'u' &&
            'CSS' in window &&
            typeof ((s = window.CSS) == null ? void 0 : s.supports) == 'function' &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              'selector(:active-view-transition-type(a)',
            ));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const i = this.options.notFoundRoute;
        i &&
          (i.init({ originalIndex: 99999999999, defaultSsr: this.options.defaultSsr }),
          (this.routesById[i.id] = i));
        const s = (f) => {
          f.forEach((h, m) => {
            h.init({ originalIndex: m, defaultSsr: this.options.defaultSsr });
            const p = this.routesById[h.id];
            if (
              (ta(!p, `Duplicate routes found with id: ${String(h.id)}`),
              (this.routesById[h.id] = h),
              !h.isRoot && h.path)
            ) {
              const v = li(h.fullPath);
              (!this.routesByPath[v] || h.fullPath.endsWith('/')) && (this.routesByPath[v] = h);
            }
            const y = h.children;
            y != null && y.length && s(y);
          });
        };
        s([this.routeTree]);
        const o = [];
        Object.values(this.routesById).forEach((f, h) => {
          var m;
          if (f.isRoot || !f.path) return;
          const p = Fd(f.fullPath),
            y = xr(p);
          for (; y.length > 1 && ((m = y[0]) == null ? void 0 : m.value) === '/'; ) y.shift();
          const v = y.map((b) =>
            b.value === '/' ? 0.75 : b.type === 'param' ? 0.5 : b.type === 'wildcard' ? 0.25 : 1,
          );
          o.push({ child: f, trimmed: p, parsed: y, index: h, scores: v });
        }),
          (this.flatRoutes = o
            .sort((f, h) => {
              const m = Math.min(f.scores.length, h.scores.length);
              for (let p = 0; p < m; p++)
                if (f.scores[p] !== h.scores[p]) return h.scores[p] - f.scores[p];
              if (f.scores.length !== h.scores.length) return h.scores.length - f.scores.length;
              for (let p = 0; p < m; p++)
                if (f.parsed[p].value !== h.parsed[p].value)
                  return f.parsed[p].value > h.parsed[p].value ? 1 : -1;
              return f.index - h.index;
            })
            .map((f, h) => ((f.child.rank = h), f.child)));
      }),
      (this.subscribe = (i, s) => {
        const o = { eventType: i, fn: s };
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o);
          }
        );
      }),
      (this.emit = (i) => {
        this.subscribers.forEach((s) => {
          s.eventType === i.type && s.fn(i);
        });
      }),
      (this.parseLocation = (i, s) => {
        const o = ({ pathname: m, search: p, hash: y, state: v }) => {
            const b = this.options.parseSearch(p),
              S = this.options.stringifySearch(b);
            return {
              pathname: m,
              searchStr: S,
              search: tn(i == null ? void 0 : i.search, b),
              hash: y.split('#').reverse()[0] ?? '',
              href: `${m}${S}${y}`,
              state: tn(i == null ? void 0 : i.state, v),
            };
          },
          u = o(s ?? this.history.location),
          { __tempLocation: f, __tempKey: h } = u.state;
        if (f && (!h || h === this.tempLocationKey)) {
          const m = o(f);
          return (
            (m.state.key = u.state.key), delete m.state.__tempLocation, { ...m, maskedLocation: u }
          );
        }
        return u;
      }),
      (this.resolvePathWithBase = (i, s) =>
        rx({
          basepath: this.basepath,
          base: i,
          to: _u(s),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.matchRoutes = (i, s, o) =>
        typeof i == 'string'
          ? this.matchRoutesInternal({ pathname: i, search: s }, o)
          : this.matchRoutesInternal(i, s)),
      (this.getMatchedRoutes = (i, s) => {
        let o = {};
        const u = li(i.pathname),
          f = (y) =>
            Lo(this.basepath, u, {
              to: y.fullPath,
              caseSensitive: y.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let h = (s == null ? void 0 : s.to) !== void 0 ? this.routesByPath[s.to] : void 0;
        h
          ? (o = f(h))
          : (h = this.flatRoutes.find((y) => {
              const v = f(y);
              return v ? ((o = v), !0) : !1;
            }));
        let m = h || this.routesById[un];
        const p = [m];
        for (; m.parentRoute; ) (m = m.parentRoute), p.unshift(m);
        return { matchedRoutes: p, routeParams: o, foundRoute: h };
      }),
      (this.cancelMatch = (i) => {
        const s = this.getMatch(i);
        s && (s.abortController.abort(), clearTimeout(s.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var i;
        (i = this.state.pendingMatches) == null ||
          i.forEach((s) => {
            this.cancelMatch(s.id);
          });
      }),
      (this.buildLocation = (i) => {
        const s = (u = {}, f) => {
            var h, m, p, y, v, b, S;
            const x = u._fromLocation
                ? this.matchRoutes(u._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              E =
                u.from != null
                  ? x.find((W) =>
                      Lo(this.basepath, li(W.pathname), {
                        to: u.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      }),
                    )
                  : void 0,
              R = (E == null ? void 0 : E.pathname) || this.latestLocation.pathname;
            ta(u.from == null || E != null, 'Could not find match for from: ' + u.from);
            const M =
                (h = this.state.pendingMatches) != null && h.length
                  ? (m = fr(this.state.pendingMatches)) == null
                    ? void 0
                    : m.search
                  : ((p = fr(x)) == null ? void 0 : p.search) || this.latestLocation.search,
              L =
                f == null
                  ? void 0
                  : f.matchedRoutes.filter((W) => x.find((te) => te.routeId === W.id));
            let U;
            if (u.to) {
              const W =
                (E == null ? void 0 : E.fullPath) ||
                ((y = fr(x)) == null ? void 0 : y.fullPath) ||
                this.latestLocation.pathname;
              U = this.resolvePathWithBase(W, `${u.to}`);
            } else {
              const W =
                this.routesById[
                  (v =
                    L == null
                      ? void 0
                      : L.find((te) => {
                          const de = No({
                            path: te.fullPath,
                            params: (f == null ? void 0 : f.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          }).interpolatedPath;
                          return na([this.basepath, de]) === R;
                        })) == null
                    ? void 0
                    : v.id
                ];
              U = this.resolvePathWithBase(R, (W == null ? void 0 : W.to) ?? R);
            }
            const X = { ...((b = fr(x)) == null ? void 0 : b.params) };
            let C = (u.params ?? !0) === !0 ? X : { ...X, ...Us(u.params, X) };
            Object.keys(C).length > 0 &&
              (f == null ||
                f.matchedRoutes
                  .map((W) => {
                    var te;
                    return (
                      ((te = W.options.params) == null ? void 0 : te.stringify) ??
                      W.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((W) => {
                    C = { ...C, ...W(C) };
                  })),
              (U = No({
                path: U,
                params: C ?? {},
                leaveWildcards: !1,
                leaveParams: i.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }).interpolatedPath);
            let Z = M;
            if (i._includeValidateSearch && (S = this.options.search) != null && S.strict) {
              let W = {};
              f == null ||
                f.matchedRoutes.forEach((te) => {
                  try {
                    te.options.validateSearch &&
                      (W = { ...W, ...(nd(te.options.validateSearch, { ...W, ...Z }) ?? {}) });
                  } catch {}
                }),
                (Z = W);
            }
            (Z = ((W) => {
              const te =
                  (f == null
                    ? void 0
                    : f.matchedRoutes.reduce((N, G) => {
                        var K;
                        const ce = [];
                        if ('search' in G.options)
                          (K = G.options.search) != null &&
                            K.middlewares &&
                            ce.push(...G.options.search.middlewares);
                        else if (G.options.preSearchFilters || G.options.postSearchFilters) {
                          const A = ({ search: q, next: ae }) => {
                            let Q = q;
                            'preSearchFilters' in G.options &&
                              G.options.preSearchFilters &&
                              (Q = G.options.preSearchFilters.reduce((ve, ue) => ue(ve), q));
                            const re = ae(Q);
                            return 'postSearchFilters' in G.options && G.options.postSearchFilters
                              ? G.options.postSearchFilters.reduce((ve, ue) => ue(ve), re)
                              : re;
                          };
                          ce.push(A);
                        }
                        if (i._includeValidateSearch && G.options.validateSearch) {
                          const A = ({ search: q, next: ae }) => {
                            const Q = ae(q);
                            try {
                              return { ...Q, ...(nd(G.options.validateSearch, Q) ?? {}) };
                            } catch {
                              return Q;
                            }
                          };
                          ce.push(A);
                        }
                        return N.concat(ce);
                      }, [])) ?? [],
                de = ({ search: N }) => (u.search ? (u.search === !0 ? N : Us(u.search, N)) : {});
              te.push(de);
              const le = (N, G) => {
                if (N >= te.length) return G;
                const K = te[N];
                return K({ search: G, next: (A) => le(N + 1, A) });
              };
              return le(0, W);
            })(Z)),
              (Z = tn(M, Z));
            const Y = this.options.stringifySearch(Z),
              V =
                u.hash === !0
                  ? this.latestLocation.hash
                  : u.hash
                    ? Us(u.hash, this.latestLocation.hash)
                    : void 0,
              F = V ? `#${V}` : '';
            let ne =
              u.state === !0
                ? this.latestLocation.state
                : u.state
                  ? Us(u.state, this.latestLocation.state)
                  : {};
            return (
              (ne = tn(this.latestLocation.state, ne)),
              {
                pathname: U,
                search: Z,
                searchStr: Y,
                state: ne,
                hash: V ?? '',
                href: `${U}${Y}${F}`,
                unmaskOnReload: u.unmaskOnReload,
              }
            );
          },
          o = (u = {}, f) => {
            var h;
            const m = s(u);
            let p = f ? s(f) : void 0;
            if (!p) {
              let b = {};
              const S =
                (h = this.options.routeMasks) == null
                  ? void 0
                  : h.find((x) => {
                      const E = Lo(this.basepath, m.pathname, {
                        to: x.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return E ? ((b = E), !0) : !1;
                    });
              if (S) {
                const { from: x, ...E } = S;
                (f = { ...Rd(i, ['from']), ...E, params: b }), (p = s(f));
              }
            }
            const y = this.getMatchedRoutes(m, u),
              v = s(u, y);
            if (p) {
              const b = this.getMatchedRoutes(p, f),
                S = s(f, b);
              v.maskedLocation = S;
            }
            return v;
          };
        return i.mask ? o(i, { ...Rd(i, ['from']), ...i.mask }) : o(i);
      }),
      (this.commitLocation = ({ viewTransition: i, ignoreBlocker: s, ...o }) => {
        const u = () => {
            const m = ['key', '__TSR_index', '__hashScrollIntoViewOptions'];
            m.forEach((y) => {
              o.state[y] = this.latestLocation.state[y];
            });
            const p = Zs(o.state, this.latestLocation.state);
            return (
              m.forEach((y) => {
                delete o.state[y];
              }),
              p
            );
          },
          f = this.latestLocation.href === o.href,
          h = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = lr(() => {
            h == null || h.resolve();
          })),
          f && u())
        )
          this.load();
        else {
          let { maskedLocation: m, hashScrollIntoView: p, ...y } = o;
          m &&
            ((y = {
              ...m,
              state: {
                ...m.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...y,
                  search: y.searchStr,
                  state: { ...y.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (y.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (y.state.__tempKey = this.tempLocationKey)),
            (y.state.__hashScrollIntoViewOptions =
              p ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = i),
            this.history[o.replace ? 'replace' : 'push'](y.href, y.state, { ignoreBlocker: s });
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: i,
        resetScroll: s,
        hashScrollIntoView: o,
        viewTransition: u,
        ignoreBlocker: f,
        href: h,
        ...m
      } = {}) => {
        if (h) {
          const y = this.history.location.state.__TSR_index,
            v = $s(h, { __TSR_index: i ? y : y + 1 });
          (m.to = v.pathname),
            (m.search = this.options.parseSearch(v.search)),
            (m.hash = v.hash.slice(1));
        }
        const p = this.buildLocation({ ...m, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...p,
          viewTransition: u,
          replace: i,
          resetScroll: s,
          hashScrollIntoView: o,
          ignoreBlocker: f,
        });
      }),
      (this.navigate = ({ to: i, reloadDocument: s, href: o, ...u }) => {
        if (s) {
          if (!o) {
            const f = this.buildLocation({ to: i, ...u });
            o = this.history.createHref(f.href);
          }
          u.replace ? window.location.replace(o) : (window.location.href = o);
          return;
        }
        return this.buildAndCommitLocation({ ...u, href: o, to: i });
      }),
      (this.load = async (i) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let s, o, u;
        for (
          u = new Promise((f) => {
            this.startTransition(async () => {
              var h;
              try {
                const m = this.latestLocation,
                  p = this.state.resolvedLocation;
                this.cancelMatches();
                let y;
                Wf(() => {
                  (y = this.matchRoutes(m)),
                    this.__store.setState((v) => ({
                      ...v,
                      status: 'pending',
                      isLoading: !0,
                      location: m,
                      pendingMatches: y,
                      cachedMatches: v.cachedMatches.filter((b) => !y.find((S) => S.id === b.id)),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: 'onBeforeNavigate',
                      ...ui({ resolvedLocation: p, location: m }),
                    }),
                  this.emit({ type: 'onBeforeLoad', ...ui({ resolvedLocation: p, location: m }) }),
                  await this.loadMatches({
                    sync: i == null ? void 0 : i.sync,
                    matches: y,
                    location: m,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let v, b, S;
                        Wf(() => {
                          this.__store.setState((x) => {
                            const E = x.matches,
                              R = x.pendingMatches || x.matches;
                            return (
                              (v = E.filter((M) => !R.find((L) => L.id === M.id))),
                              (b = R.filter((M) => !E.find((L) => L.id === M.id))),
                              (S = E.filter((M) => R.find((L) => L.id === M.id))),
                              {
                                ...x,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: R,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...x.cachedMatches,
                                  ...v.filter((M) => M.status !== 'error'),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [v, 'onLeave'],
                            [b, 'onEnter'],
                            [S, 'onStay'],
                          ].forEach(([x, E]) => {
                            x.forEach((R) => {
                              var M, L;
                              (L = (M = this.looseRoutesById[R.routeId].options)[E]) == null ||
                                L.call(M, R);
                            });
                          });
                      });
                    },
                  });
              } catch (m) {
                td(m)
                  ? ((s = m),
                    this.isServer || this.navigate({ ...s, replace: !0, ignoreBlocker: !0 }))
                  : nn(m) && (o = m),
                  this.__store.setState((p) => ({
                    ...p,
                    statusCode: s
                      ? s.statusCode
                      : o
                        ? 404
                        : p.matches.some((y) => y.status === 'error')
                          ? 500
                          : 200,
                    redirect: s,
                  }));
              }
              this.latestLoadPromise === u &&
                ((h = this.commitLocationPromise) == null || h.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                f();
            });
          }),
            this.latestLoadPromise = u,
            await u;
          this.latestLoadPromise && u !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
        this.hasNotFoundMatch() && this.__store.setState((f) => ({ ...f, statusCode: 404 }));
      }),
      (this.startViewTransition = (i) => {
        const s = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          s &&
            typeof document < 'u' &&
            'startViewTransition' in document &&
            typeof document.startViewTransition == 'function')
        ) {
          let o;
          if (typeof s == 'object' && this.isViewTransitionTypesSupported) {
            const u = this.latestLocation,
              f = this.state.resolvedLocation,
              h =
                typeof s.types == 'function'
                  ? s.types(ui({ resolvedLocation: f, location: u }))
                  : s.types;
            o = { update: i, types: h };
          } else o = i;
          document.startViewTransition(o);
        } else i();
      }),
      (this.updateMatch = (i, s) => {
        var o;
        let u;
        const f = (o = this.state.pendingMatches) == null ? void 0 : o.find((y) => y.id === i),
          h = this.state.matches.find((y) => y.id === i),
          m = this.state.cachedMatches.find((y) => y.id === i),
          p = f ? 'pendingMatches' : h ? 'matches' : m ? 'cachedMatches' : '';
        return (
          p &&
            this.__store.setState((y) => {
              var v;
              return {
                ...y,
                [p]: (v = y[p]) == null ? void 0 : v.map((b) => (b.id === i ? (u = s(b)) : b)),
              };
            }),
          u
        );
      }),
      (this.getMatch = (i) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((s) => s.id === i)),
      (this.loadMatches = async ({
        location: i,
        matches: s,
        preload: o,
        onReady: u,
        updateMatch: f = this.updateMatch,
        sync: h,
      }) => {
        let m,
          p = !1;
        const y = async () => {
            p || ((p = !0), await (u == null ? void 0 : u()));
          },
          v = (S) => !!(o && !this.state.matches.find((x) => x.id === S)),
          b = (S, x) => {
            var E, R, M, L;
            if (td(x) && !x.reloadDocument) throw x;
            if (ii(x) || nn(x)) {
              if (
                (f(S.id, (U) => ({
                  ...U,
                  status: ii(x) ? 'redirected' : nn(x) ? 'notFound' : 'error',
                  isFetching: !1,
                  error: x,
                  beforeLoadPromise: void 0,
                  loaderPromise: void 0,
                })),
                x.routeId || (x.routeId = S.routeId),
                (E = S.beforeLoadPromise) == null || E.resolve(),
                (R = S.loaderPromise) == null || R.resolve(),
                (M = S.loadPromise) == null || M.resolve(),
                ii(x))
              )
                throw ((p = !0), (x = this.resolveRedirect({ ...x, _fromLocation: i })), x);
              if (nn(x))
                throw (
                  (this._handleNotFound(s, x, { updateMatch: f }),
                  (L = this.serverSsr) == null ||
                    L.onMatchSettled({ router: this, match: this.getMatch(S.id) }),
                  x)
                );
            }
          };
        try {
          await new Promise((S, x) => {
            (async () => {
              var E, R, M, L;
              try {
                const U = (Z, H, Y) => {
                  var V, F;
                  const { id: ne, routeId: W } = s[Z],
                    te = this.looseRoutesById[W];
                  if (H instanceof Promise) throw H;
                  (H.routerCode = Y), (m = m ?? Z), b(this.getMatch(ne), H);
                  try {
                    (F = (V = te.options).onError) == null || F.call(V, H);
                  } catch (de) {
                    (H = de), b(this.getMatch(ne), H);
                  }
                  f(ne, (de) => {
                    var le, N;
                    return (
                      (le = de.beforeLoadPromise) == null || le.resolve(),
                      (N = de.loadPromise) == null || N.resolve(),
                      {
                        ...de,
                        error: H,
                        status: 'error',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [Z, { id: H, routeId: Y }] of s.entries()) {
                  const V = this.getMatch(H),
                    F = (E = s[Z - 1]) == null ? void 0 : E.id,
                    ne = this.looseRoutesById[Y],
                    W = ne.options.pendingMs ?? this.options.defaultPendingMs,
                    te = !!(
                      u &&
                      !this.isServer &&
                      !v(H) &&
                      (ne.options.loader || ne.options.beforeLoad || Uv(ne)) &&
                      typeof W == 'number' &&
                      W !== 1 / 0 &&
                      (ne.options.pendingComponent ??
                        ((R = this.options) == null ? void 0 : R.defaultPendingComponent))
                    );
                  let de = !0;
                  if (
                    ((V.beforeLoadPromise || V.loaderPromise) &&
                      (te &&
                        setTimeout(() => {
                          try {
                            y();
                          } catch {}
                        }, W),
                      await V.beforeLoadPromise,
                      (de = this.getMatch(H).status !== 'success')),
                    de)
                  ) {
                    try {
                      f(H, (Oe) => {
                        const pe = Oe.loadPromise;
                        return {
                          ...Oe,
                          loadPromise: lr(() => {
                            pe == null || pe.resolve();
                          }),
                          beforeLoadPromise: lr(),
                        };
                      });
                      const le = new AbortController();
                      let N;
                      te &&
                        (N = setTimeout(() => {
                          try {
                            y();
                          } catch {}
                        }, W));
                      const { paramsError: G, searchError: K } = this.getMatch(H);
                      G && U(Z, G, 'PARSE_PARAMS'), K && U(Z, K, 'VALIDATE_SEARCH');
                      const ce = () =>
                        F ? this.getMatch(F).context : (this.options.context ?? {});
                      f(H, (Oe) => ({
                        ...Oe,
                        isFetching: 'beforeLoad',
                        fetchCount: Oe.fetchCount + 1,
                        abortController: le,
                        pendingTimeout: N,
                        context: { ...ce(), ...Oe.__routeContext },
                      }));
                      const { search: A, params: q, context: ae, cause: Q } = this.getMatch(H),
                        re = v(H),
                        ve = {
                          search: A,
                          abortController: le,
                          params: q,
                          preload: re,
                          context: ae,
                          location: i,
                          navigate: (Oe) => this.navigate({ ...Oe, _fromLocation: i }),
                          buildLocation: this.buildLocation,
                          cause: re ? 'preload' : Q,
                          matches: s,
                        },
                        ue =
                          (await ((L = (M = ne.options).beforeLoad) == null
                            ? void 0
                            : L.call(M, ve))) ?? {};
                      (ii(ue) || nn(ue)) && U(Z, ue, 'BEFORE_LOAD'),
                        f(H, (Oe) => ({
                          ...Oe,
                          __beforeLoadContext: ue,
                          context: { ...ce(), ...Oe.__routeContext, ...ue },
                          abortController: le,
                        }));
                    } catch (le) {
                      U(Z, le, 'BEFORE_LOAD');
                    }
                    f(H, (le) => {
                      var N;
                      return (
                        (N = le.beforeLoadPromise) == null || N.resolve(),
                        { ...le, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const X = s.slice(0, m),
                  C = [];
                X.forEach(({ id: Z, routeId: H }, Y) => {
                  C.push(
                    (async () => {
                      const { loaderPromise: V } = this.getMatch(Z);
                      let F = !1,
                        ne = !1;
                      if (V) {
                        await V;
                        const W = this.getMatch(Z);
                        W.error && b(W, W.error);
                      } else {
                        const W = C[Y - 1],
                          te = this.looseRoutesById[H],
                          de = () => {
                            const {
                                params: Q,
                                loaderDeps: re,
                                abortController: ve,
                                context: ue,
                                cause: Oe,
                              } = this.getMatch(Z),
                              pe = v(Z);
                            return {
                              params: Q,
                              deps: re,
                              preload: !!pe,
                              parentMatchPromise: W,
                              abortController: ve,
                              context: ue,
                              location: i,
                              navigate: (Ze) => this.navigate({ ...Ze, _fromLocation: i }),
                              cause: pe ? 'preload' : Oe,
                              route: te,
                            };
                          },
                          le = Date.now() - this.getMatch(Z).updatedAt,
                          N = v(Z),
                          G = N
                            ? (te.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (te.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          K = te.options.shouldReload,
                          ce = typeof K == 'function' ? K(de()) : K;
                        f(Z, (Q) => ({
                          ...Q,
                          loaderPromise: lr(),
                          preload: !!N && !this.state.matches.find((re) => re.id === Z),
                        }));
                        const A = async () => {
                            var Q, re, ve, ue, Oe, pe, Ze, Pt, vt, rn, St;
                            try {
                              const gt = async () => {
                                const Fe = this.getMatch(Z);
                                Fe.minPendingPromise && (await Fe.minPendingPromise);
                              };
                              try {
                                this.loadRouteChunk(te),
                                  f(Z, (bi) => ({ ...bi, isFetching: 'loader' }));
                                const Fe = await ((re = (Q = te.options).loader) == null
                                  ? void 0
                                  : re.call(Q, de()));
                                b(this.getMatch(Z), Fe), await te._lazyPromise, await gt();
                                const Gt = {
                                    matches: s,
                                    match: this.getMatch(Z),
                                    params: this.getMatch(Z).params,
                                    loaderData: Fe,
                                  },
                                  qe =
                                    (ue = (ve = te.options).head) == null
                                      ? void 0
                                      : ue.call(ve, Gt),
                                  vi = qe == null ? void 0 : qe.meta,
                                  kn = qe == null ? void 0 : qe.links,
                                  ml = qe == null ? void 0 : qe.scripts,
                                  gi =
                                    (pe = (Oe = te.options).scripts) == null
                                      ? void 0
                                      : pe.call(Oe, Gt),
                                  ku =
                                    (Pt = (Ze = te.options).headers) == null
                                      ? void 0
                                      : Pt.call(Ze, { loaderData: Fe });
                                await te._componentsPromise,
                                  f(Z, (bi) => ({
                                    ...bi,
                                    error: void 0,
                                    status: 'success',
                                    isFetching: !1,
                                    updatedAt: Date.now(),
                                    loaderData: Fe,
                                    meta: vi,
                                    links: kn,
                                    headScripts: ml,
                                    headers: ku,
                                    scripts: gi,
                                  }));
                              } catch (Fe) {
                                let Gt = Fe;
                                await gt(), b(this.getMatch(Z), Fe);
                                try {
                                  (rn = (vt = te.options).onError) == null || rn.call(vt, Fe);
                                } catch (qe) {
                                  (Gt = qe), b(this.getMatch(Z), qe);
                                }
                                f(Z, (qe) => ({
                                  ...qe,
                                  error: Gt,
                                  status: 'error',
                                  isFetching: !1,
                                }));
                              }
                              (St = this.serverSsr) == null ||
                                St.onMatchSettled({ router: this, match: this.getMatch(Z) });
                            } catch (gt) {
                              f(Z, (Fe) => ({ ...Fe, loaderPromise: void 0 })),
                                b(this.getMatch(Z), gt);
                            }
                          },
                          { status: q, invalid: ae } = this.getMatch(Z);
                        (F = q === 'success' && (ae || (ce ?? le > G))),
                          (N && te.options.preload === !1) ||
                            (F && !h
                              ? ((ne = !0),
                                (async () => {
                                  try {
                                    await A();
                                    const { loaderPromise: Q, loadPromise: re } = this.getMatch(Z);
                                    Q == null || Q.resolve(),
                                      re == null || re.resolve(),
                                      f(Z, (ve) => ({ ...ve, loaderPromise: void 0 }));
                                  } catch (Q) {
                                    td(Q) && (await this.navigate(Q));
                                  }
                                })())
                              : (q !== 'success' || (F && h)) && (await A()));
                      }
                      if (!ne) {
                        const { loaderPromise: W, loadPromise: te } = this.getMatch(Z);
                        W == null || W.resolve(), te == null || te.resolve();
                      }
                      return (
                        f(Z, (W) => ({
                          ...W,
                          isFetching: ne ? W.isFetching : !1,
                          loaderPromise: ne ? W.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(Z)
                      );
                    })(),
                  );
                }),
                  await Promise.all(C),
                  S();
              } catch (U) {
                x(U);
              }
            })();
          }),
            await y();
        } catch (S) {
          if (ii(S) || nn(S)) throw (nn(S) && !o && (await y()), S);
        }
        return s;
      }),
      (this.invalidate = (i) => {
        const s = (o) => {
          var u;
          return (((u = i == null ? void 0 : i.filter) == null ? void 0 : u.call(i, o)) ?? !0)
            ? {
                ...o,
                invalid: !0,
                ...(o.status === 'error' ? { status: 'pending', error: void 0 } : {}),
              }
            : o;
        };
        return (
          this.__store.setState((o) => {
            var u;
            return {
              ...o,
              matches: o.matches.map(s),
              cachedMatches: o.cachedMatches.map(s),
              pendingMatches: (u = o.pendingMatches) == null ? void 0 : u.map(s),
            };
          }),
          this.load({ sync: i == null ? void 0 : i.sync })
        );
      }),
      (this.resolveRedirect = (i) => {
        const s = i;
        return s.href || (s.href = this.buildLocation(s).href), s;
      }),
      (this.clearCache = (i) => {
        const s = i == null ? void 0 : i.filter;
        s !== void 0
          ? this.__store.setState((o) => ({
              ...o,
              cachedMatches: o.cachedMatches.filter((u) => !s(u)),
            }))
          : this.__store.setState((o) => ({ ...o, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const i = (s) => {
          const o = this.looseRoutesById[s.routeId];
          if (!o.options.loader) return !0;
          const u =
            (s.preload
              ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (o.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3;
          return !(s.status !== 'error' && Date.now() - s.updatedAt < u);
        };
        this.clearCache({ filter: i });
      }),
      (this.loadRouteChunk = (i) => (
        i._lazyPromise === void 0 &&
          (i.lazyFn
            ? (i._lazyPromise = i.lazyFn().then((s) => {
                const { id: o, ...u } = s.options;
                Object.assign(i.options, u);
              }))
            : (i._lazyPromise = Promise.resolve())),
        i._componentsPromise === void 0 &&
          (i._componentsPromise = i._lazyPromise.then(() =>
            Promise.all(
              Wg.map(async (s) => {
                const o = i.options[s];
                o != null && o.preload && (await o.preload());
              }),
            ),
          )),
        i._componentsPromise
      )),
      (this.preloadRoute = async (i) => {
        const s = this.buildLocation(i);
        let o = this.matchRoutes(s, { throwOnError: !0, preload: !0, dest: i });
        const u = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map((h) => h.id),
          ),
          f = new Set([...u, ...this.state.cachedMatches.map((h) => h.id)]);
        Wf(() => {
          o.forEach((h) => {
            f.has(h.id) ||
              this.__store.setState((m) => ({ ...m, cachedMatches: [...m.cachedMatches, h] }));
          });
        });
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: s,
              preload: !0,
              updateMatch: (h, m) => {
                u.has(h) ? (o = o.map((p) => (p.id === h ? m(p) : p))) : this.updateMatch(h, m);
              },
            })),
            o
          );
        } catch (h) {
          if (ii(h))
            return h.reloadDocument ? void 0 : await this.preloadRoute({ ...h, _fromLocation: s });
          nn(h) || console.error(h);
          return;
        }
      }),
      (this.matchRoute = (i, s) => {
        const o = {
            ...i,
            to: i.to ? this.resolvePathWithBase(i.from || '', i.to) : void 0,
            params: i.params || {},
            leaveParams: !0,
          },
          u = this.buildLocation(o);
        if (s != null && s.pending && this.state.status !== 'pending') return !1;
        const h = ((s == null ? void 0 : s.pending) === void 0 ? !this.state.isLoading : s.pending)
            ? this.latestLocation
            : this.state.resolvedLocation || this.state.location,
          m = Lo(this.basepath, h.pathname, { ...s, to: u.pathname });
        return !m || (i.params && !Zs(m, i.params, { partial: !0 }))
          ? !1
          : m && ((s == null ? void 0 : s.includeSearch) ?? !0)
            ? Zs(h.search, u.search, { partial: !0 })
              ? m
              : !1
            : m;
      }),
      (this._handleNotFound = (i, s, { updateMatch: o = this.updateMatch } = {}) => {
        var u;
        const f = this.routesById[s.routeId ?? ''] ?? this.routeTree,
          h = {};
        for (const p of i) h[p.routeId] = p;
        !f.options.notFoundComponent &&
          (u = this.options) != null &&
          u.defaultNotFoundComponent &&
          (f.options.notFoundComponent = this.options.defaultNotFoundComponent),
          ta(f.options.notFoundComponent);
        const m = h[f.id];
        ta(m, 'Could not find match for route: ' + f.id),
          o(m.id, (p) => ({ ...p, status: 'notFound', error: s, isFetching: !1 })),
          s.routerCode === 'BEFORE_LOAD' &&
            f.parentRoute &&
            ((s.routeId = f.parentRoute.id), this._handleNotFound(i, s, { updateMatch: o }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((i) => i.status === 'notFound' || i.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...a,
        caseSensitive: a.caseSensitive ?? !1,
        notFoundMode: a.notFoundMode ?? 'fuzzy',
        stringifySearch: a.stringifySearch ?? mx,
        parseSearch: a.parseSearch ?? px,
      }),
      typeof document < 'u' && (window.__TSR_ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(a, i) {
    const {
      foundRoute: s,
      matchedRoutes: o,
      routeParams: u,
    } = this.getMatchedRoutes(a, i == null ? void 0 : i.dest);
    let f = !1;
    (s ? s.path !== '/' && u['**'] : li(a.pathname)) &&
      (this.options.notFoundRoute ? o.push(this.options.notFoundRoute) : (f = !0));
    const h = (() => {
        if (f) {
          if (this.options.notFoundMode !== 'root')
            for (let v = o.length - 1; v >= 0; v--) {
              const b = o[v];
              if (b.children) return b.id;
            }
          return un;
        }
      })(),
      m = o.map((v) => {
        var b;
        let S;
        const x = ((b = v.options.params) == null ? void 0 : b.parse) ?? v.options.parseParams;
        if (x)
          try {
            const E = x(u);
            Object.assign(u, E);
          } catch (E) {
            if (((S = new bx(E.message, { cause: E })), i != null && i.throwOnError)) throw S;
            return S;
          }
      }),
      p = [],
      y = (v) =>
        (v == null ? void 0 : v.id)
          ? (v.context ?? this.options.context ?? {})
          : (this.options.context ?? {});
    return (
      o.forEach((v, b) => {
        var S, x;
        const E = p[b - 1],
          [R, M, L] = (() => {
            const te = (E == null ? void 0 : E.search) ?? a.search,
              de = (E == null ? void 0 : E._strictSearch) ?? {};
            try {
              const le = nd(v.options.validateSearch, { ...te }) ?? {};
              return [{ ...te, ...le }, { ...de, ...le }, void 0];
            } catch (le) {
              let N = le;
              if (
                (le instanceof Fo || (N = new Fo(le.message, { cause: le })),
                i != null && i.throwOnError)
              )
                throw N;
              return [te, {}, N];
            }
          })(),
          U = ((x = (S = v.options).loaderDeps) == null ? void 0 : x.call(S, { search: R })) ?? '',
          X = U ? JSON.stringify(U) : '',
          { usedParams: C, interpolatedPath: Z } = No({
            path: v.fullPath,
            params: u,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          H =
            No({
              path: v.id,
              params: u,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }).interpolatedPath + X,
          Y = this.getMatch(H),
          V = this.state.matches.find((te) => te.routeId === v.id),
          F = V ? 'stay' : 'enter';
        let ne;
        if (Y)
          ne = {
            ...Y,
            cause: F,
            params: V ? tn(V.params, u) : u,
            _strictParams: C,
            search: tn(V ? V.search : Y.search, R),
            _strictSearch: M,
          };
        else {
          const te =
            v.options.loader || v.options.beforeLoad || v.lazyFn || Uv(v) ? 'pending' : 'success';
          ne = {
            id: H,
            index: b,
            routeId: v.id,
            params: V ? tn(V.params, u) : u,
            _strictParams: C,
            pathname: na([this.basepath, Z]),
            updatedAt: Date.now(),
            search: V ? tn(V.search, R) : R,
            _strictSearch: M,
            searchError: void 0,
            status: te,
            isFetching: !1,
            error: void 0,
            paramsError: m[b],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: F,
            loaderDeps: V ? tn(V.loaderDeps, U) : U,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: v.options.staticData || {},
            loadPromise: lr(),
            fullPath: v.fullPath,
          };
        }
        (i != null && i.preload) || (ne.globalNotFound = h === v.id), (ne.searchError = L);
        const W = y(E);
        (ne.context = { ...W, ...ne.__routeContext, ...ne.__beforeLoadContext }), p.push(ne);
      }),
      p.forEach((v, b) => {
        var S, x, E, R, M, L, U, X;
        const C = this.looseRoutesById[v.routeId];
        if (!this.getMatch(v.id) && (i == null ? void 0 : i._buildLocation) !== !0) {
          const H = p[b - 1],
            Y = y(H),
            V = {
              deps: v.loaderDeps,
              params: v.params,
              context: Y,
              location: a,
              navigate: (F) => this.navigate({ ...F, _fromLocation: a }),
              buildLocation: this.buildLocation,
              cause: v.cause,
              abortController: v.abortController,
              preload: !!v.preload,
              matches: p,
            };
          (v.__routeContext =
            ((x = (S = C.options).context) == null ? void 0 : x.call(S, V)) ?? {}),
            (v.context = { ...Y, ...v.__routeContext, ...v.__beforeLoadContext });
        }
        if (v.status === 'success') {
          v.headers =
            (R = (E = C.options).headers) == null
              ? void 0
              : R.call(E, { loaderData: v.loaderData });
          const H = { matches: p, match: v, params: v.params, loaderData: v.loaderData },
            Y = (L = (M = C.options).head) == null ? void 0 : L.call(M, H);
          (v.links = Y == null ? void 0 : Y.links),
            (v.headScripts = Y == null ? void 0 : Y.scripts),
            (v.meta = Y == null ? void 0 : Y.meta),
            (v.scripts = (X = (U = C.options).scripts) == null ? void 0 : X.call(U, H));
        }
      }),
      p
    );
  }
}
class Fo extends Error {}
class bx extends Error {}
function _x(n) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: void 0,
    location: n,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function nd(n, a) {
  if (n == null) return {};
  if ('~standard' in n) {
    const i = n['~standard'].validate(a);
    if (i instanceof Promise) throw new Fo('Async validation not supported');
    if (i.issues) throw new Fo(JSON.stringify(i.issues, void 0, 2), { cause: i });
    return i.value;
  }
  return 'parse' in n ? n.parse(a) : typeof n == 'function' ? n(a) : {};
}
const Wg = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent'];
function Uv(n) {
  var a;
  for (const i of Wg) if ((a = n.options[i]) != null && a.preload) return !0;
  return !1;
}
class e0 {
  constructor(a) {
    if (
      ((this.init = (i) => {
        var s, o;
        this.originalIndex = i.originalIndex;
        const u = this.options,
          f = !(u != null && u.path) && !(u != null && u.id);
        if (
          ((this.parentRoute =
            (o = (s = this.options).getParentRoute) == null ? void 0 : o.call(s)),
          f)
        )
          this._path = un;
        else if (!this.parentRoute)
          throw new Error(
            "Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.",
          );
        let h = f ? un : u == null ? void 0 : u.path;
        h && h !== '/' && (h = Fd(h));
        const m = (u == null ? void 0 : u.id) || h;
        let p = f ? un : na([this.parentRoute.id === un ? '' : this.parentRoute.id, m]);
        h === un && (h = '/'), p !== un && (p = na(['/', p]));
        const y = p === un ? '/' : na([this.parentRoute.fullPath, h]);
        (this._path = h),
          (this._id = p),
          (this._fullPath = y),
          (this._to = y),
          (this._ssr = (u == null ? void 0 : u.ssr) ?? i.defaultSsr ?? !0);
      }),
      (this.addChildren = (i) => this._addFileChildren(i)),
      (this._addFileChildren = (i) => (
        Array.isArray(i) && (this.children = i),
        typeof i == 'object' && i !== null && (this.children = Object.values(i)),
        this
      )),
      (this._addFileTypes = () => this),
      (this.updateLoader = (i) => (Object.assign(this.options, i), this)),
      (this.update = (i) => (Object.assign(this.options, i), this)),
      (this.lazy = (i) => ((this.lazyFn = i), this)),
      (this.options = a || {}),
      (this.isRoot = !(a != null && a.getParentRoute)),
      a != null && a.id && a != null && a.path)
    )
      throw new Error("Route cannot have both an 'id' and a 'path' option.");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
}
class Sx extends e0 {
  constructor(a) {
    super(a);
  }
}
function Wd(n) {
  const a = n.errorComponent ?? Su;
  return ee.jsx(xx, {
    getResetKey: n.getResetKey,
    onCatch: n.onCatch,
    children: ({ error: i, reset: s }) =>
      i ? w.createElement(a, { error: i, reset: s }) : n.children,
  });
}
class xx extends w.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(a) {
    return { resetKey: a.getResetKey() };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(a, i) {
    i.error && i.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(a, i) {
    this.props.onCatch && this.props.onCatch(a, i);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function Su({ error: n }) {
  const [a, i] = w.useState(!1);
  return ee.jsxs('div', {
    style: { padding: '.5rem', maxWidth: '100%' },
    children: [
      ee.jsxs('div', {
        style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
        children: [
          ee.jsx('strong', { style: { fontSize: '1rem' }, children: 'Something went wrong!' }),
          ee.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem',
            },
            onClick: () => i((s) => !s),
            children: a ? 'Hide Error' : 'Show Error',
          }),
        ],
      }),
      ee.jsx('div', { style: { height: '.25rem' } }),
      a
        ? ee.jsx('div', {
            children: ee.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto',
              },
              children: n.message ? ee.jsx('code', { children: n.message }) : null,
            }),
          })
        : null,
    ],
  });
}
var ad = { exports: {} },
  id = {},
  rd = { exports: {} },
  sd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bv;
function Ex() {
  if (Bv) return sd;
  Bv = 1;
  var n = ul();
  function a(v, b) {
    return (v === b && (v !== 0 || 1 / v === 1 / b)) || (v !== v && b !== b);
  }
  var i = typeof Object.is == 'function' ? Object.is : a,
    s = n.useState,
    o = n.useEffect,
    u = n.useLayoutEffect,
    f = n.useDebugValue;
  function h(v, b) {
    var S = b(),
      x = s({ inst: { value: S, getSnapshot: b } }),
      E = x[0].inst,
      R = x[1];
    return (
      u(
        function () {
          (E.value = S), (E.getSnapshot = b), m(E) && R({ inst: E });
        },
        [v, S, b],
      ),
      o(
        function () {
          return (
            m(E) && R({ inst: E }),
            v(function () {
              m(E) && R({ inst: E });
            })
          );
        },
        [v],
      ),
      f(S),
      S
    );
  }
  function m(v) {
    var b = v.getSnapshot;
    v = v.value;
    try {
      var S = b();
      return !i(v, S);
    } catch {
      return !0;
    }
  }
  function p(v, b) {
    return b();
  }
  var y =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? p
      : h;
  return (
    (sd.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y), sd
  );
}
var Hv;
function t0() {
  return Hv || ((Hv = 1), (rd.exports = Ex())), rd.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv;
function Tx() {
  if (Vv) return id;
  Vv = 1;
  var n = ul(),
    a = t0();
  function i(p, y) {
    return (p === y && (p !== 0 || 1 / p === 1 / y)) || (p !== p && y !== y);
  }
  var s = typeof Object.is == 'function' ? Object.is : i,
    o = a.useSyncExternalStore,
    u = n.useRef,
    f = n.useEffect,
    h = n.useMemo,
    m = n.useDebugValue;
  return (
    (id.useSyncExternalStoreWithSelector = function (p, y, v, b, S) {
      var x = u(null);
      if (x.current === null) {
        var E = { hasValue: !1, value: null };
        x.current = E;
      } else E = x.current;
      x = h(
        function () {
          function M(Z) {
            if (!L) {
              if (((L = !0), (U = Z), (Z = b(Z)), S !== void 0 && E.hasValue)) {
                var H = E.value;
                if (S(H, Z)) return (X = H);
              }
              return (X = Z);
            }
            if (((H = X), s(U, Z))) return H;
            var Y = b(Z);
            return S !== void 0 && S(H, Y) ? ((U = Z), H) : ((U = Z), (X = Y));
          }
          var L = !1,
            U,
            X,
            C = v === void 0 ? null : v;
          return [
            function () {
              return M(y());
            },
            C === null
              ? void 0
              : function () {
                  return M(C());
                },
          ];
        },
        [y, v, b, S],
      );
      var R = o(p, x[0], x[1]);
      return (
        f(
          function () {
            (E.hasValue = !0), (E.value = R);
          },
          [R],
        ),
        m(R),
        R
      );
    }),
    id
  );
}
var Zv;
function wx() {
  return Zv || ((Zv = 1), (ad.exports = Tx())), ad.exports;
}
var n0 = wx();
function Ax(n, a = (i) => i) {
  return n0.useSyncExternalStoreWithSelector(
    n.subscribe,
    () => n.state,
    () => n.state,
    a,
    Rx,
  );
}
function Rx(n, a) {
  if (Object.is(n, a)) return !0;
  if (typeof n != 'object' || n === null || typeof a != 'object' || a === null) return !1;
  if (n instanceof Map && a instanceof Map) {
    if (n.size !== a.size) return !1;
    for (const [s, o] of n) if (!a.has(s) || !Object.is(o, a.get(s))) return !1;
    return !0;
  }
  if (n instanceof Set && a instanceof Set) {
    if (n.size !== a.size) return !1;
    for (const s of n) if (!a.has(s)) return !1;
    return !0;
  }
  const i = Object.keys(n);
  if (i.length !== Object.keys(a).length) return !1;
  for (let s = 0; s < i.length; s++)
    if (!Object.prototype.hasOwnProperty.call(a, i[s]) || !Object.is(n[i[s]], a[i[s]])) return !1;
  return !0;
}
const ld = w.createContext(null);
function a0() {
  return typeof document > 'u'
    ? ld
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = ld), ld);
}
function Nn(n) {
  const a = w.useContext(a0());
  return n == null || n.warn, a;
}
function Zt(n) {
  const a = Nn({ warn: (n == null ? void 0 : n.router) === void 0 }),
    i = (n == null ? void 0 : n.router) || a,
    s = w.useRef(void 0);
  return Ax(i.__store, (o) => {
    if (n != null && n.select) {
      if (n.structuralSharing ?? i.options.defaultStructuralSharing) {
        const u = tn(s.current, n.select(o));
        return (s.current = u), u;
      }
      return n.select(o);
    }
    return o;
  });
}
const xu = w.createContext(void 0),
  Ox = w.createContext(void 0);
function Rn(n) {
  const a = w.useContext(n.from ? Ox : xu);
  return Zt({
    select: (s) => {
      const o = s.matches.find((u) => (n.from ? n.from === u.routeId : u.id === a));
      if (
        (ta(
          !((n.shouldThrow ?? !0) && !o),
          `Could not find ${n.from ? `an active match from "${n.from}"` : 'a nearest match!'}`,
        ),
        o !== void 0)
      )
        return n.select ? n.select(o) : o;
    },
    structuralSharing: n.structuralSharing,
  });
}
function eh(n) {
  return Rn({
    from: n.from,
    strict: n.strict,
    structuralSharing: n.structuralSharing,
    select: (a) => (n.select ? n.select(a.loaderData) : a.loaderData),
  });
}
function th(n) {
  const { select: a, ...i } = n;
  return Rn({ ...i, select: (s) => (a ? a(s.loaderDeps) : s.loaderDeps) });
}
function nh(n) {
  return Rn({
    from: n.from,
    strict: n.strict,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    select: (a) => (n.select ? n.select(a.params) : a.params),
  });
}
function ah(n) {
  return Rn({
    from: n.from,
    strict: n.strict,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    select: (a) => (n.select ? n.select(a.search) : a.search),
  });
}
function ih(n) {
  const { navigate: a } = Nn();
  return w.useCallback(
    (i) => a({ from: n == null ? void 0 : n.from, ...i }),
    [n == null ? void 0 : n.from, a],
  );
}
let Cx = class extends e0 {
  constructor(a) {
    super(a),
      (this.useMatch = (i) =>
        Rn({
          select: i == null ? void 0 : i.select,
          from: this.id,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
        })),
      (this.useRouteContext = (i) =>
        Rn({
          ...i,
          from: this.id,
          select: (s) => (i != null && i.select ? i.select(s.context) : s.context),
        })),
      (this.useSearch = (i) =>
        ah({
          select: i == null ? void 0 : i.select,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (i) =>
        nh({
          select: i == null ? void 0 : i.select,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (i) => th({ ...i, from: this.id })),
      (this.useLoaderData = (i) => eh({ ...i, from: this.id })),
      (this.useNavigate = () => ih({ from: this.fullPath })),
      (this.$$typeof = Symbol.for('react.memo'));
  }
};
function Mx(n) {
  return new Cx(n);
}
class Dx extends Sx {
  constructor(a) {
    super(a),
      (this.useMatch = (i) =>
        Rn({
          select: i == null ? void 0 : i.select,
          from: this.id,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
        })),
      (this.useRouteContext = (i) =>
        Rn({
          ...i,
          from: this.id,
          select: (s) => (i != null && i.select ? i.select(s.context) : s.context),
        })),
      (this.useSearch = (i) =>
        ah({
          select: i == null ? void 0 : i.select,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (i) =>
        nh({
          select: i == null ? void 0 : i.select,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (i) => th({ ...i, from: this.id })),
      (this.useLoaderData = (i) => eh({ ...i, from: this.id })),
      (this.useNavigate = () => ih({ from: this.fullPath })),
      (this.$$typeof = Symbol.for('react.memo'));
  }
}
function Nx(n) {
  return new Dx(n);
}
function Lx(n) {
  return new kx(n, { silent: !0 }).createRoute;
}
class kx {
  constructor(a, i) {
    (this.path = a),
      (this.createRoute = (s) => {
        this.silent;
        const o = Mx(s);
        return (o.isRoot = !1), o;
      }),
      (this.silent = i == null ? void 0 : i.silent);
  }
}
class zx {
  constructor(a) {
    (this.useMatch = (i) =>
      Rn({
        select: i == null ? void 0 : i.select,
        from: this.options.id,
        structuralSharing: i == null ? void 0 : i.structuralSharing,
      })),
      (this.useRouteContext = (i) =>
        Rn({
          from: this.options.id,
          select: (s) => (i != null && i.select ? i.select(s.context) : s.context),
        })),
      (this.useSearch = (i) =>
        ah({
          select: i == null ? void 0 : i.select,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
          from: this.options.id,
        })),
      (this.useParams = (i) =>
        nh({
          select: i == null ? void 0 : i.select,
          structuralSharing: i == null ? void 0 : i.structuralSharing,
          from: this.options.id,
        })),
      (this.useLoaderDeps = (i) => th({ ...i, from: this.options.id })),
      (this.useLoaderData = (i) => eh({ ...i, from: this.options.id })),
      (this.useNavigate = () => {
        const i = Nn();
        return ih({ from: i.routesById[this.options.id].fullPath });
      }),
      (this.options = a),
      (this.$$typeof = Symbol.for('react.memo'));
  }
}
function G2(n) {
  return (a) => new zx({ id: n, ...a });
}
function jx(n) {
  const a = Zt({ select: (i) => `not-found-${i.location.pathname}-${i.status}` });
  return ee.jsx(Wd, {
    getResetKey: () => a,
    onCatch: (i, s) => {
      var o;
      if (nn(i)) (o = n.onCatch) == null || o.call(n, i, s);
      else throw i;
    },
    errorComponent: ({ error: i }) => {
      var s;
      if (nn(i)) return (s = n.fallback) == null ? void 0 : s.call(n, i);
      throw i;
    },
    children: n.children,
  });
}
function Ux() {
  return ee.jsx('p', { children: 'Not Found' });
}
function Zo(n) {
  return ee.jsx(ee.Fragment, { children: n.children });
}
function i0(n, a, i) {
  return a.options.notFoundComponent
    ? ee.jsx(a.options.notFoundComponent, { data: i })
    : n.options.defaultNotFoundComponent
      ? ee.jsx(n.options.defaultNotFoundComponent, { data: i })
      : ee.jsx(Ux, {});
}
var od, Yv;
function Bx() {
  if (Yv) return od;
  Yv = 1;
  const n = {},
    a = n.hasOwnProperty,
    i = (Y, V) => {
      for (const F in Y) a.call(Y, F) && V(F, Y[F]);
    },
    s = (Y, V) => (
      V &&
        i(V, (F, ne) => {
          Y[F] = ne;
        }),
      Y
    ),
    o = (Y, V) => {
      const F = Y.length;
      let ne = -1;
      for (; ++ne < F; ) V(Y[ne]);
    },
    u = (Y) => '\\u' + ('0000' + Y).slice(-4),
    f = (Y, V) => {
      let F = Y.toString(16);
      return V ? F : F.toUpperCase();
    },
    h = n.toString,
    m = Array.isArray,
    p = (Y) => typeof Buffer == 'function' && Buffer.isBuffer(Y),
    y = (Y) => h.call(Y) == '[object Object]',
    v = (Y) => typeof Y == 'string' || h.call(Y) == '[object String]',
    b = (Y) => typeof Y == 'number' || h.call(Y) == '[object Number]',
    S = (Y) => typeof Y == 'bigint',
    x = (Y) => typeof Y == 'function',
    E = (Y) => h.call(Y) == '[object Map]',
    R = (Y) => h.call(Y) == '[object Set]',
    M = { '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '	': '\\t' },
    L = /[\\\b\f\n\r\t]/,
    U = /[0-9]/,
    X = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    C = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
    Z = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
    H = (Y, V) => {
      const F = () => {
          (G = N), ++V.indentLevel, (N = V.indent.repeat(V.indentLevel));
        },
        ne = {
          escapeEverything: !1,
          minimal: !1,
          isScriptContext: !1,
          quotes: 'single',
          wrap: !1,
          es6: !1,
          json: !1,
          compact: !0,
          lowercaseHex: !1,
          numbers: 'decimal',
          indent: '	',
          indentLevel: 0,
          __inline1__: !1,
          __inline2__: !1,
        },
        W = V && V.json;
      W && ((ne.quotes = 'double'), (ne.wrap = !0)),
        (V = s(ne, V)),
        V.quotes != 'single' &&
          V.quotes != 'double' &&
          V.quotes != 'backtick' &&
          (V.quotes = 'single');
      const te = V.quotes == 'double' ? '"' : V.quotes == 'backtick' ? '`' : "'",
        de = V.compact,
        le = V.lowercaseHex;
      let N = V.indent.repeat(V.indentLevel),
        G = '';
      const K = V.__inline1__,
        ce = V.__inline2__,
        A = de
          ? ''
          : `
`;
      let q,
        ae = !0;
      const Q = V.numbers == 'binary',
        re = V.numbers == 'octal',
        ve = V.numbers == 'decimal',
        ue = V.numbers == 'hexadecimal';
      if ((W && Y && x(Y.toJSON) && (Y = Y.toJSON()), !v(Y))) {
        if (E(Y))
          return Y.size == 0
            ? 'new Map()'
            : (de || ((V.__inline1__ = !0), (V.__inline2__ = !1)),
              'new Map(' + H(Array.from(Y), V) + ')');
        if (R(Y)) return Y.size == 0 ? 'new Set()' : 'new Set(' + H(Array.from(Y), V) + ')';
        if (p(Y))
          return Y.length == 0 ? 'Buffer.from([])' : 'Buffer.from(' + H(Array.from(Y), V) + ')';
        if (m(Y))
          return (
            (q = []),
            (V.wrap = !0),
            K && ((V.__inline1__ = !1), (V.__inline2__ = !0)),
            ce || F(),
            o(Y, (pe) => {
              (ae = !1), ce && (V.__inline2__ = !1), q.push((de || ce ? '' : N) + H(pe, V));
            }),
            ae
              ? '[]'
              : ce
                ? '[' + q.join(', ') + ']'
                : '[' + A + q.join(',' + A) + A + (de ? '' : G) + ']'
          );
        if (b(Y) || S(Y)) {
          if (W) return JSON.stringify(Number(Y));
          let pe;
          if (ve) pe = String(Y);
          else if (ue) {
            let Ze = Y.toString(16);
            le || (Ze = Ze.toUpperCase()), (pe = '0x' + Ze);
          } else Q ? (pe = '0b' + Y.toString(2)) : re && (pe = '0o' + Y.toString(8));
          return S(Y) ? pe + 'n' : pe;
        } else
          return S(Y)
            ? W
              ? JSON.stringify(Number(Y))
              : Y + 'n'
            : y(Y)
              ? ((q = []),
                (V.wrap = !0),
                F(),
                i(Y, (pe, Ze) => {
                  (ae = !1), q.push((de ? '' : N) + H(pe, V) + ':' + (de ? '' : ' ') + H(Ze, V));
                }),
                ae ? '{}' : '{' + A + q.join(',' + A) + A + (de ? '' : G) + '}')
              : W
                ? JSON.stringify(Y) || 'null'
                : String(Y);
      }
      const Oe = V.escapeEverything ? C : Z;
      return (
        (q = Y.replace(Oe, (pe, Ze, Pt, vt, rn, St) => {
          if (Ze) {
            if (V.minimal) return Ze;
            const Fe = Ze.charCodeAt(0),
              Gt = Ze.charCodeAt(1);
            if (V.es6) {
              const qe = (Fe - 55296) * 1024 + Gt - 56320 + 65536;
              return '\\u{' + f(qe, le) + '}';
            }
            return u(f(Fe, le)) + u(f(Gt, le));
          }
          if (Pt) return u(f(Pt.charCodeAt(0), le));
          if (pe == '\0' && !W && !U.test(St.charAt(rn + 1))) return '\\0';
          if (vt) return vt == te || V.escapeEverything ? '\\' + vt : vt;
          if (L.test(pe)) return M[pe];
          if (V.minimal && !X.test(pe)) return pe;
          const gt = f(pe.charCodeAt(0), le);
          return W || gt.length > 2 ? u(gt) : '\\x' + ('00' + gt).slice(-2);
        })),
        te == '`' && (q = q.replace(/\$\{/g, '\\${')),
        V.isScriptContext &&
          (q = q
            .replace(/<\/(script|style)/gi, '<\\/$1')
            .replace(/<!--/g, W ? '\\u003C!--' : '\\x3C!--')),
        V.wrap && (q = te + q + te),
        q
      );
    };
  return (H.version = '3.0.2'), (od = H), od;
}
Bx();
function Hx({ children: n, log: a }) {
  return typeof document < 'u'
    ? null
    : ee.jsx('script', {
        className: 'tsr-once',
        dangerouslySetInnerHTML: {
          __html: [
            n,
            '',
            'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()',
          ].filter(Boolean).join(`
`),
        },
      });
}
function Vx() {
  const n = Nn(),
    i = (n.options.getScrollRestorationKey || Od)(n.latestLocation),
    s = i !== Od(n.latestLocation) ? i : null;
  return !n.isScrollRestoring || !n.isServer
    ? null
    : ee.jsx(Hx, {
        children: `(${Fg.toString()})(${JSON.stringify(Ko)},${JSON.stringify(s)}, undefined, true)`,
        log: !1,
      });
}
const r0 = w.memo(function ({ matchId: a }) {
  var i, s;
  const o = Nn(),
    u = Zt({
      select: (M) => {
        var L;
        return (L = M.matches.find((U) => U.id === a)) == null ? void 0 : L.routeId;
      },
    });
  ta(u);
  const f = o.routesById[u],
    h = f.options.pendingComponent ?? o.options.defaultPendingComponent,
    m = h ? ee.jsx(h, {}) : null,
    p = f.options.errorComponent ?? o.options.defaultErrorComponent,
    y = f.options.onCatch ?? o.options.defaultOnCatch,
    v = f.isRoot
      ? (f.options.notFoundComponent ??
        ((i = o.options.notFoundRoute) == null ? void 0 : i.options.component))
      : f.options.notFoundComponent,
    b =
      (!f.isRoot || f.options.wrapInSuspense) &&
      (f.options.wrapInSuspense ??
        h ??
        ((s = f.options.errorComponent) == null ? void 0 : s.preload))
        ? w.Suspense
        : Zo,
    S = p ? Wd : Zo,
    x = v ? jx : Zo,
    E = Zt({ select: (M) => M.loadedAt }),
    R = Zt({
      select: (M) => {
        var L;
        const U = M.matches.findIndex((X) => X.id === a);
        return (L = M.matches[U - 1]) == null ? void 0 : L.routeId;
      },
    });
  return ee.jsxs(ee.Fragment, {
    children: [
      ee.jsx(xu.Provider, {
        value: a,
        children: ee.jsx(b, {
          fallback: m,
          children: ee.jsx(S, {
            getResetKey: () => E,
            errorComponent: p || Su,
            onCatch: (M, L) => {
              if (nn(M)) throw M;
              y == null || y(M, L);
            },
            children: ee.jsx(x, {
              fallback: (M) => {
                if (!v || (M.routeId && M.routeId !== u) || (!M.routeId && !f.isRoot)) throw M;
                return w.createElement(v, M);
              },
              children: ee.jsx(Yx, { matchId: a }),
            }),
          }),
        }),
      }),
      R === un && o.options.scrollRestoration
        ? ee.jsxs(ee.Fragment, { children: [ee.jsx(Zx, {}), ee.jsx(Vx, {})] })
        : null,
    ],
  });
});
function Zx() {
  const n = Nn(),
    a = w.useRef(void 0);
  return ee.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      ref: (i) => {
        i &&
          (a.current === void 0 || a.current.href !== n.latestLocation.href) &&
          (n.emit({ type: 'onRendered', ...ui(n.state) }), (a.current = n.latestLocation));
      },
    },
    n.latestLocation.state.key,
  );
}
const Yx = w.memo(function ({ matchId: a }) {
    var i, s, o;
    const u = Nn(),
      {
        match: f,
        key: h,
        routeId: m,
      } = Zt({
        select: (b) => {
          const S = b.matches.findIndex((U) => U.id === a),
            x = b.matches[S],
            E = x.routeId,
            R = u.routesById[E].options.remountDeps ?? u.options.defaultRemountDeps,
            M =
              R == null
                ? void 0
                : R({
                    routeId: E,
                    loaderDeps: x.loaderDeps,
                    params: x._strictParams,
                    search: x._strictSearch,
                  });
          return {
            key: M ? JSON.stringify(M) : void 0,
            routeId: E,
            match: Rd(x, ['id', 'status', 'error']),
          };
        },
        structuralSharing: !0,
      }),
      p = u.routesById[m],
      y = w.useMemo(() => {
        const b = p.options.component ?? u.options.defaultComponent;
        return b ? ee.jsx(b, {}, h) : ee.jsx(s0, {});
      }, [h, p.options.component, u.options.defaultComponent]),
      v = (p.options.errorComponent ?? u.options.defaultErrorComponent) || Su;
    if (f.status === 'notFound') return ta(nn(f.error)), i0(u, p, f.error);
    if (f.status === 'redirected')
      throw (ta(ii(f.error)), (i = u.getMatch(f.id)) == null ? void 0 : i.loadPromise);
    if (f.status === 'error') {
      if (u.isServer)
        return ee.jsx(v, { error: f.error, reset: void 0, info: { componentStack: '' } });
      throw f.error;
    }
    if (f.status === 'pending') {
      const b = p.options.pendingMinMs ?? u.options.defaultPendingMinMs;
      if (b && !((s = u.getMatch(f.id)) != null && s.minPendingPromise) && !u.isServer) {
        const S = lr();
        Promise.resolve().then(() => {
          u.updateMatch(f.id, (x) => ({ ...x, minPendingPromise: S }));
        }),
          setTimeout(() => {
            S.resolve(), u.updateMatch(f.id, (x) => ({ ...x, minPendingPromise: void 0 }));
          }, b);
      }
      throw (o = u.getMatch(f.id)) == null ? void 0 : o.loadPromise;
    }
    return y;
  }),
  s0 = w.memo(function () {
    const a = Nn(),
      i = w.useContext(xu),
      s = Zt({
        select: (p) => {
          var y;
          return (y = p.matches.find((v) => v.id === i)) == null ? void 0 : y.routeId;
        },
      }),
      o = a.routesById[s],
      u = Zt({
        select: (p) => {
          const v = p.matches.find((b) => b.id === i);
          return ta(v), v.globalNotFound;
        },
      }),
      f = Zt({
        select: (p) => {
          var y;
          const v = p.matches,
            b = v.findIndex((S) => S.id === i);
          return (y = v[b + 1]) == null ? void 0 : y.id;
        },
      });
    if (u) return i0(a, o, void 0);
    if (!f) return null;
    const h = ee.jsx(r0, { matchId: f }),
      m = a.options.defaultPendingComponent ? ee.jsx(a.options.defaultPendingComponent, {}) : null;
    return i === un ? ee.jsx(w.Suspense, { fallback: m, children: h }) : h;
  });
var ud = { exports: {} },
  pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qv;
function qx() {
  if (qv) return pt;
  qv = 1;
  var n = ul();
  function a(m) {
    var p = 'https://react.dev/errors/' + m;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++) p += '&args[]=' + encodeURIComponent(arguments[y]);
    }
    return (
      'Minified React error #' +
      m +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(a(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function u(m, p, y) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : '' + v,
      children: m,
      containerInfo: p,
      implementation: y,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (pt.createPortal = function (m, p) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(a(299));
      return u(m, p, null, y);
    }),
    (pt.flushSync = function (m) {
      var p = f.T,
        y = s.p;
      try {
        if (((f.T = null), (s.p = 2), m)) return m();
      } finally {
        (f.T = p), (s.p = y), s.d.f();
      }
    }),
    (pt.preconnect = function (m, p) {
      typeof m == 'string' &&
        (p
          ? ((p = p.crossOrigin),
            (p = typeof p == 'string' ? (p === 'use-credentials' ? p : '') : void 0))
          : (p = null),
        s.d.C(m, p));
    }),
    (pt.prefetchDNS = function (m) {
      typeof m == 'string' && s.d.D(m);
    }),
    (pt.preinit = function (m, p) {
      if (typeof m == 'string' && p && typeof p.as == 'string') {
        var y = p.as,
          v = h(y, p.crossOrigin),
          b = typeof p.integrity == 'string' ? p.integrity : void 0,
          S = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        y === 'style'
          ? s.d.S(m, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: S,
            })
          : y === 'script' &&
            s.d.X(m, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: S,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (pt.preinitModule = function (m, p) {
      if (typeof m == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var y = h(p.as, p.crossOrigin);
            s.d.M(m, {
              crossOrigin: y,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && s.d.M(m);
    }),
    (pt.preload = function (m, p) {
      if (typeof m == 'string' && typeof p == 'object' && p !== null && typeof p.as == 'string') {
        var y = p.as,
          v = h(y, p.crossOrigin);
        s.d.L(m, y, {
          crossOrigin: v,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (pt.preloadModule = function (m, p) {
      if (typeof m == 'string')
        if (p) {
          var y = h(p.as, p.crossOrigin);
          s.d.m(m, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: y,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else s.d.m(m);
    }),
    (pt.requestFormReset = function (m) {
      s.d.r(m);
    }),
    (pt.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (pt.useFormState = function (m, p, y) {
      return f.H.useFormState(m, p, y);
    }),
    (pt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (pt.version = '19.1.0'),
    pt
  );
}
var Pv;
function l0() {
  if (Pv) return ud.exports;
  Pv = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (ud.exports = qx()), ud.exports;
}
var rh = l0();
const Px = mu(rh),
  ko = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function cd(n) {
  const a = w.useRef({ value: n, prev: null }),
    i = a.current.value;
  return n !== i && (a.current = { value: n, prev: i }), a.current.prev;
}
function Gx() {
  const n = Nn(),
    a = w.useRef({ router: n, mounted: !1 }),
    i = Zt({ select: ({ isLoading: v }) => v }),
    [s, o] = w.useState(!1),
    u = Zt({ select: (v) => v.matches.some((b) => b.status === 'pending'), structuralSharing: !0 }),
    f = cd(i),
    h = i || s || u,
    m = cd(h),
    p = i || u,
    y = cd(p);
  return (
    n.isServer ||
      (n.startTransition = (v) => {
        o(!0),
          w.startTransition(() => {
            v(), o(!1);
          });
      }),
    w.useEffect(() => {
      const v = n.history.subscribe(n.load),
        b = n.buildLocation({
          to: n.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        li(n.latestLocation.href) !== li(b.href) && n.commitLocation({ ...b, replace: !0 }),
        () => {
          v();
        }
      );
    }, [n, n.history]),
    ko(() => {
      if ((typeof window < 'u' && n.clientSsr) || (a.current.router === n && a.current.mounted))
        return;
      (a.current = { router: n, mounted: !0 }),
        (async () => {
          try {
            await n.load();
          } catch (b) {
            console.error(b);
          }
        })();
    }, [n]),
    ko(() => {
      f && !i && n.emit({ type: 'onLoad', ...ui(n.state) });
    }, [f, n, i]),
    ko(() => {
      y && !p && n.emit({ type: 'onBeforeRouteMount', ...ui(n.state) });
    }, [p, y, n]),
    ko(() => {
      m &&
        !h &&
        (n.emit({ type: 'onResolved', ...ui(n.state) }),
        n.__store.setState((v) => ({ ...v, status: 'idle', resolvedLocation: v.location })),
        fx(n));
    }, [h, m, n]),
    null
  );
}
function $x() {
  const n = Nn(),
    a = n.options.defaultPendingComponent ? ee.jsx(n.options.defaultPendingComponent, {}) : null,
    i = n.isServer || (typeof document < 'u' && n.clientSsr) ? Zo : w.Suspense,
    s = ee.jsxs(i, { fallback: a, children: [ee.jsx(Gx, {}), ee.jsx(Xx, {})] });
  return n.options.InnerWrap ? ee.jsx(n.options.InnerWrap, { children: s }) : s;
}
function Xx() {
  const n = Zt({
      select: (i) => {
        var s;
        return (s = i.matches[0]) == null ? void 0 : s.id;
      },
    }),
    a = Zt({ select: (i) => i.loadedAt });
  return ee.jsx(xu.Provider, {
    value: n,
    children: ee.jsx(Wd, {
      getResetKey: () => a,
      errorComponent: Su,
      onCatch: (i) => {
        i.message || i.toString();
      },
      children: n ? ee.jsx(r0, { matchId: n }) : null,
    }),
  });
}
const Ix = (n) => new Qx(n);
class Qx extends gx {
  constructor(a) {
    super(a);
  }
}
function Kx({ router: n, children: a, ...i }) {
  n.update({ ...n.options, ...i, context: { ...n.options.context, ...i.context } });
  const s = a0(),
    o = ee.jsx(s.Provider, { value: n, children: a });
  return n.options.Wrap ? ee.jsx(n.options.Wrap, { children: o }) : o;
}
function Jx({ router: n, ...a }) {
  return ee.jsx(Kx, { router: n, ...a, children: ee.jsx($x, {}) });
}
var Gv = {},
  Fx = '@vercel/analytics',
  Wx = '1.5.0',
  eE = () => {
    window.va ||
      (window.va = function (...a) {
        (window.vaq = window.vaq || []).push(a);
      });
  };
function o0() {
  return typeof window < 'u';
}
function u0() {
  try {
    const n = 'production';
  } catch {}
  return 'production';
}
function tE(n = 'auto') {
  if (n === 'auto') {
    window.vam = u0();
    return;
  }
  window.vam = n;
}
function nE() {
  return (o0() ? window.vam : u0()) || 'production';
}
function Cd() {
  return nE() === 'development';
}
function aE(n) {
  return n.scriptSrc
    ? n.scriptSrc
    : Cd()
      ? 'https://va.vercel-scripts.com/v1/script.debug.js'
      : n.basePath
        ? `${n.basePath}/insights/script.js`
        : '/_vercel/insights/script.js';
}
function iE(n = { debug: !0 }) {
  var a;
  if (!o0()) return;
  tE(n.mode),
    eE(),
    n.beforeSend && ((a = window.va) == null || a.call(window, 'beforeSend', n.beforeSend));
  const i = aE(n);
  if (document.head.querySelector(`script[src*="${i}"]`)) return;
  const s = document.createElement('script');
  (s.src = i),
    (s.defer = !0),
    (s.dataset.sdkn = Fx + (n.framework ? `/${n.framework}` : '')),
    (s.dataset.sdkv = Wx),
    n.disableAutoTrack && (s.dataset.disableAutoTrack = '1'),
    n.endpoint
      ? (s.dataset.endpoint = n.endpoint)
      : n.basePath && (s.dataset.endpoint = `${n.basePath}/insights`),
    n.dsn && (s.dataset.dsn = n.dsn),
    (s.onerror = () => {
      const o = Cd()
        ? 'Please check if any ad blockers are enabled and try again.'
        : 'Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.';
      console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${o}`);
    }),
    Cd() && n.debug === !1 && (s.dataset.debug = 'false'),
    document.head.appendChild(s);
}
function rE({ route: n, path: a }) {
  var i;
  (i = window.va) == null || i.call(window, 'pageview', { route: n, path: a });
}
function sE() {
  if (!(typeof process > 'u' || typeof Gv > 'u')) return Gv.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function lE(n) {
  return (
    w.useEffect(() => {
      var a;
      n.beforeSend && ((a = window.va) == null || a.call(window, 'beforeSend', n.beforeSend));
    }, [n.beforeSend]),
    w.useEffect(() => {
      iE({
        framework: n.framework || 'react',
        basePath: n.basePath ?? sE(),
        ...(n.route !== void 0 && { disableAutoTrack: !0 }),
        ...n,
      });
    }, []),
    w.useEffect(() => {
      n.route && n.path && rE({ route: n.route, path: n.path });
    }, [n.route, n.path]),
    null
  );
}
var fd = { exports: {} },
  ks = {},
  dd = { exports: {} },
  hd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $v;
function oE() {
  return (
    $v ||
      (($v = 1),
      (function (n) {
        function a(N, G) {
          var K = N.length;
          N.push(G);
          e: for (; 0 < K; ) {
            var ce = (K - 1) >>> 1,
              A = N[ce];
            if (0 < o(A, G)) (N[ce] = G), (N[K] = A), (K = ce);
            else break e;
          }
        }
        function i(N) {
          return N.length === 0 ? null : N[0];
        }
        function s(N) {
          if (N.length === 0) return null;
          var G = N[0],
            K = N.pop();
          if (K !== G) {
            N[0] = K;
            e: for (var ce = 0, A = N.length, q = A >>> 1; ce < q; ) {
              var ae = 2 * (ce + 1) - 1,
                Q = N[ae],
                re = ae + 1,
                ve = N[re];
              if (0 > o(Q, K))
                re < A && 0 > o(ve, Q)
                  ? ((N[ce] = ve), (N[re] = K), (ce = re))
                  : ((N[ce] = Q), (N[ae] = K), (ce = ae));
              else if (re < A && 0 > o(ve, K)) (N[ce] = ve), (N[re] = K), (ce = re);
              else break e;
            }
          }
          return G;
        }
        function o(N, G) {
          var K = N.sortIndex - G.sortIndex;
          return K !== 0 ? K : N.id - G.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var u = performance;
          n.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var m = [],
          p = [],
          y = 1,
          v = null,
          b = 3,
          S = !1,
          x = !1,
          E = !1,
          R = !1,
          M = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          U = typeof setImmediate < 'u' ? setImmediate : null;
        function X(N) {
          for (var G = i(p); G !== null; ) {
            if (G.callback === null) s(p);
            else if (G.startTime <= N) s(p), (G.sortIndex = G.expirationTime), a(m, G);
            else break;
            G = i(p);
          }
        }
        function C(N) {
          if (((E = !1), X(N), !x))
            if (i(m) !== null) (x = !0), Z || ((Z = !0), W());
            else {
              var G = i(p);
              G !== null && le(C, G.startTime - N);
            }
        }
        var Z = !1,
          H = -1,
          Y = 5,
          V = -1;
        function F() {
          return R ? !0 : !(n.unstable_now() - V < Y);
        }
        function ne() {
          if (((R = !1), Z)) {
            var N = n.unstable_now();
            V = N;
            var G = !0;
            try {
              e: {
                (x = !1), E && ((E = !1), L(H), (H = -1)), (S = !0);
                var K = b;
                try {
                  t: {
                    for (X(N), v = i(m); v !== null && !(v.expirationTime > N && F()); ) {
                      var ce = v.callback;
                      if (typeof ce == 'function') {
                        (v.callback = null), (b = v.priorityLevel);
                        var A = ce(v.expirationTime <= N);
                        if (((N = n.unstable_now()), typeof A == 'function')) {
                          (v.callback = A), X(N), (G = !0);
                          break t;
                        }
                        v === i(m) && s(m), X(N);
                      } else s(m);
                      v = i(m);
                    }
                    if (v !== null) G = !0;
                    else {
                      var q = i(p);
                      q !== null && le(C, q.startTime - N), (G = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (b = K), (S = !1);
                }
                G = void 0;
              }
            } finally {
              G ? W() : (Z = !1);
            }
          }
        }
        var W;
        if (typeof U == 'function')
          W = function () {
            U(ne);
          };
        else if (typeof MessageChannel < 'u') {
          var te = new MessageChannel(),
            de = te.port2;
          (te.port1.onmessage = ne),
            (W = function () {
              de.postMessage(null);
            });
        } else
          W = function () {
            M(ne, 0);
          };
        function le(N, G) {
          H = M(function () {
            N(n.unstable_now());
          }, G);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (n.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Y = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_next = function (N) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = b;
            }
            var K = b;
            b = G;
            try {
              return N();
            } finally {
              b = K;
            }
          }),
          (n.unstable_requestPaint = function () {
            R = !0;
          }),
          (n.unstable_runWithPriority = function (N, G) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var K = b;
            b = N;
            try {
              return G();
            } finally {
              b = K;
            }
          }),
          (n.unstable_scheduleCallback = function (N, G, K) {
            var ce = n.unstable_now();
            switch (
              (typeof K == 'object' && K !== null
                ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? ce + K : ce))
                : (K = ce),
              N)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = K + A),
              (N = {
                id: y++,
                callback: G,
                priorityLevel: N,
                startTime: K,
                expirationTime: A,
                sortIndex: -1,
              }),
              K > ce
                ? ((N.sortIndex = K),
                  a(p, N),
                  i(m) === null && N === i(p) && (E ? (L(H), (H = -1)) : (E = !0), le(C, K - ce)))
                : ((N.sortIndex = A), a(m, N), x || S || ((x = !0), Z || ((Z = !0), W()))),
              N
            );
          }),
          (n.unstable_shouldYield = F),
          (n.unstable_wrapCallback = function (N) {
            var G = b;
            return function () {
              var K = b;
              b = G;
              try {
                return N.apply(this, arguments);
              } finally {
                b = K;
              }
            };
          });
      })(hd)),
    hd
  );
}
var Xv;
function uE() {
  return Xv || ((Xv = 1), (dd.exports = oE())), dd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Iv;
function cE() {
  if (Iv) return ks;
  Iv = 1;
  var n = uE(),
    a = ul(),
    i = l0();
  function s(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) t += '&args[]=' + encodeURIComponent(arguments[r]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e) throw Error(s(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = u(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var c = r.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((l = c.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === r) return h(c), e;
          if (d === l) return h(c), t;
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== l.return) (r = c), (l = d);
      else {
        for (var g = !1, _ = c.child; _; ) {
          if (_ === r) {
            (g = !0), (r = c), (l = d);
            break;
          }
          if (_ === l) {
            (g = !0), (l = c), (r = d);
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = d.child; _; ) {
            if (_ === r) {
              (g = !0), (r = d), (l = c);
              break;
            }
            if (_ === l) {
              (g = !0), (l = d), (r = c);
              break;
            }
            _ = _.sibling;
          }
          if (!g) throw Error(s(189));
        }
      }
      if (r.alternate !== l) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    v = Symbol.for('react.element'),
    b = Symbol.for('react.transitional.element'),
    S = Symbol.for('react.portal'),
    x = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    M = Symbol.for('react.provider'),
    L = Symbol.for('react.consumer'),
    U = Symbol.for('react.context'),
    X = Symbol.for('react.forward_ref'),
    C = Symbol.for('react.suspense'),
    Z = Symbol.for('react.suspense_list'),
    H = Symbol.for('react.memo'),
    Y = Symbol.for('react.lazy'),
    V = Symbol.for('react.activity'),
    F = Symbol.for('react.memo_cache_sentinel'),
    ne = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ne && e[ne]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var te = Symbol.for('react.client.reference');
  function de(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === te ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case x:
        return 'Fragment';
      case R:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case C:
        return 'Suspense';
      case Z:
        return 'SuspenseList';
      case V:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case S:
          return 'Portal';
        case U:
          return (e.displayName || 'Context') + '.Provider';
        case L:
          return (e._context.displayName || 'Context') + '.Consumer';
        case X:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case H:
          return (t = e.displayName || null), t !== null ? t : de(e.type) || 'Memo';
        case Y:
          (t = e._payload), (e = e._init);
          try {
            return de(e(t));
          } catch {}
      }
    return null;
  }
  var le = Array.isArray,
    N = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    ce = [],
    A = -1;
  function q(e) {
    return { current: e };
  }
  function ae(e) {
    0 > A || ((e.current = ce[A]), (ce[A] = null), A--);
  }
  function Q(e, t) {
    A++, (ce[A] = e.current), (e.current = t);
  }
  var re = q(null),
    ve = q(null),
    ue = q(null),
    Oe = q(null);
  function pe(e, t) {
    switch ((Q(ue, t), Q(ve, e), Q(re, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xy(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = Xy(t)), (e = Iy(t, e));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ae(re), Q(re, e);
  }
  function Ze() {
    ae(re), ae(ve), ae(ue);
  }
  function Pt(e) {
    e.memoizedState !== null && Q(Oe, e);
    var t = re.current,
      r = Iy(t, e.type);
    t !== r && (Q(ve, e), Q(re, r));
  }
  function vt(e) {
    ve.current === e && (ae(re), ae(ve)), Oe.current === e && (ae(Oe), (Rs._currentValue = K));
  }
  var rn = Object.prototype.hasOwnProperty,
    St = n.unstable_scheduleCallback,
    gt = n.unstable_cancelCallback,
    Fe = n.unstable_shouldYield,
    Gt = n.unstable_requestPaint,
    qe = n.unstable_now,
    vi = n.unstable_getCurrentPriorityLevel,
    kn = n.unstable_ImmediatePriority,
    ml = n.unstable_UserBlockingPriority,
    gi = n.unstable_NormalPriority,
    ku = n.unstable_LowPriority,
    bi = n.unstable_IdlePriority,
    Vb = n.log,
    Zb = n.unstable_setDisableYieldValue,
    zr = null,
    Ct = null;
  function ia(e) {
    if ((typeof Vb == 'function' && Zb(e), Ct && typeof Ct.setStrictMode == 'function'))
      try {
        Ct.setStrictMode(zr, e);
      } catch {}
  }
  var Mt = Math.clz32 ? Math.clz32 : Pb,
    Yb = Math.log,
    qb = Math.LN2;
  function Pb(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Yb(e) / qb) | 0)) | 0;
  }
  var yl = 256,
    vl = 4194304;
  function Va(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function gl(e, t, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var _ = l & 134217727;
    return (
      _ !== 0
        ? ((l = _ & ~d),
          l !== 0
            ? (c = Va(l))
            : ((g &= _), g !== 0 ? (c = Va(g)) : r || ((r = _ & ~e), r !== 0 && (c = Va(r)))))
        : ((_ = l & ~d),
          _ !== 0
            ? (c = Va(_))
            : g !== 0
              ? (c = Va(g))
              : r || ((r = l & ~e), r !== 0 && (c = Va(r)))),
      c === 0
        ? 0
        : t !== 0 &&
            t !== c &&
            (t & d) === 0 &&
            ((d = c & -c), (r = t & -t), d >= r || (d === 32 && (r & 4194048) !== 0))
          ? t
          : c
    );
  }
  function jr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Gb(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mh() {
    var e = yl;
    return (yl <<= 1), (yl & 4194048) === 0 && (yl = 256), e;
  }
  function Dh() {
    var e = vl;
    return (vl <<= 1), (vl & 62914560) === 0 && (vl = 4194304), e;
  }
  function zu(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Ur(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function $b(e, t, r, l, c, d) {
    var g = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var _ = e.entanglements,
      T = e.expirationTimes,
      z = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var P = 31 - Mt(r),
        I = 1 << P;
      (_[P] = 0), (T[P] = -1);
      var j = z[P];
      if (j !== null)
        for (z[P] = null, P = 0; P < j.length; P++) {
          var B = j[P];
          B !== null && (B.lane &= -536870913);
        }
      r &= ~I;
    }
    l !== 0 && Nh(e, l, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(g & ~t));
  }
  function Nh(e, t, r) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - Mt(t);
    (e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (r & 4194090));
  }
  function Lh(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var l = 31 - Mt(r),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (r &= ~c);
    }
  }
  function ju(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Uu(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function kh() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hv(e.type));
  }
  function Xb(e, t) {
    var r = G.p;
    try {
      return (G.p = e), t();
    } finally {
      G.p = r;
    }
  }
  var ra = Math.random().toString(36).slice(2),
    dt = '__reactFiber$' + ra,
    xt = '__reactProps$' + ra,
    _i = '__reactContainer$' + ra,
    Bu = '__reactEvents$' + ra,
    Ib = '__reactListeners$' + ra,
    Qb = '__reactHandles$' + ra,
    zh = '__reactResources$' + ra,
    Br = '__reactMarker$' + ra;
  function Hu(e) {
    delete e[dt], delete e[xt], delete e[Bu], delete e[Ib], delete e[Qb];
  }
  function Si(e) {
    var t = e[dt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[_i] || r[dt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Fy(e); e !== null; ) {
            if ((r = e[dt])) return r;
            e = Fy(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function xi(e) {
    if ((e = e[dt] || e[_i])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Hr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ei(e) {
    var t = e[zh];
    return t || (t = e[zh] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function it(e) {
    e[Br] = !0;
  }
  var jh = new Set(),
    Uh = {};
  function Za(e, t) {
    Ti(e, t), Ti(e + 'Capture', t);
  }
  function Ti(e, t) {
    for (Uh[e] = t, e = 0; e < t.length; e++) jh.add(t[e]);
  }
  var Kb = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Bh = {},
    Hh = {};
  function Jb(e) {
    return rn.call(Hh, e)
      ? !0
      : rn.call(Bh, e)
        ? !1
        : Kb.test(e)
          ? (Hh[e] = !0)
          : ((Bh[e] = !0), !1);
  }
  function bl(e, t, r) {
    if (Jb(t))
      if (r === null) e.removeAttribute(t);
      else {
        switch (typeof r) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + r);
      }
  }
  function _l(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + r);
    }
  }
  function zn(e, t, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(t, r, '' + l);
    }
  }
  var Vu, Vh;
  function wi(e) {
    if (Vu === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        (Vu = (t && t[1]) || ''),
          (Vh =
            -1 <
            r.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < r.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Vu +
      e +
      Vh
    );
  }
  var Zu = !1;
  function Yu(e, t) {
    if (!e || Zu) return '';
    Zu = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var I = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(I.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(I, []);
                } catch (B) {
                  var j = B;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (B) {
                  j = B;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                j = B;
              }
              (I = e()) && typeof I.catch == 'function' && I.catch(function () {});
            }
          } catch (B) {
            if (B && j && typeof B.stack == 'string') return [B.stack, j.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var d = l.DetermineComponentFrameRoot(),
        g = d[0],
        _ = d[1];
      if (g && _) {
        var T = g.split(`
`),
          z = _.split(`
`);
        for (c = l = 0; l < T.length && !T[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; c < z.length && !z[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (l === T.length || c === z.length)
          for (l = T.length - 1, c = z.length - 1; 1 <= l && 0 <= c && T[l] !== z[c]; ) c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (T[l] !== z[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || T[l] !== z[c])) {
                  var P =
                    `
` + T[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      P.includes('<anonymous>') &&
                      (P = P.replace('<anonymous>', e.displayName)),
                    P
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (Zu = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : '') ? wi(r) : '';
  }
  function Fb(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return wi(e.type);
      case 16:
        return wi('Lazy');
      case 13:
        return wi('Suspense');
      case 19:
        return wi('SuspenseList');
      case 0:
      case 15:
        return Yu(e.type, !1);
      case 11:
        return Yu(e.type.render, !1);
      case 1:
        return Yu(e.type, !0);
      case 31:
        return wi('Activity');
      default:
        return '';
    }
  }
  function Zh(e) {
    try {
      var t = '';
      do (t += Fb(e)), (e = e.return);
      while (e);
      return t;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function $t(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Yh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Wb(e) {
    var t = Yh(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var c = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            (l = '' + g), d.call(this, g);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = '' + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Sl(e) {
    e._valueTracker || (e._valueTracker = Wb(e));
  }
  function qh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      l = '';
    return (
      e && (l = Yh(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function xl(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var e_ = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(e_, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function qu(e, t, r, l, c, d, g, _) {
    (e.name = ''),
      g != null && typeof g != 'function' && typeof g != 'symbol' && typeof g != 'boolean'
        ? (e.type = g)
        : e.removeAttribute('type'),
      t != null
        ? g === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + $t(t))
          : e.value !== '' + $t(t) && (e.value = '' + $t(t))
        : (g !== 'submit' && g !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Pu(e, g, $t(t))
        : r != null
          ? Pu(e, g, $t(r))
          : l != null && e.removeAttribute('value'),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      _ != null && typeof _ != 'function' && typeof _ != 'symbol' && typeof _ != 'boolean'
        ? (e.name = '' + $t(_))
        : e.removeAttribute('name');
  }
  function Ph(e, t, r, l, c, d, g, _) {
    if (
      (d != null &&
        typeof d != 'function' &&
        typeof d != 'symbol' &&
        typeof d != 'boolean' &&
        (e.type = d),
      t != null || r != null)
    ) {
      if (!((d !== 'submit' && d !== 'reset') || t != null)) return;
      (r = r != null ? '' + $t(r) : ''),
        (t = t != null ? '' + $t(t) : r),
        _ || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? c),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = _ ? e.checked : !!l),
      (e.defaultChecked = !!l),
      g != null &&
        typeof g != 'function' &&
        typeof g != 'symbol' &&
        typeof g != 'boolean' &&
        (e.name = g);
  }
  function Pu(e, t, r) {
    (t === 'number' && xl(e.ownerDocument) === e) ||
      e.defaultValue === '' + r ||
      (e.defaultValue = '' + r);
  }
  function Ai(e, t, r, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < r.length; c++) t['$' + r[c]] = !0;
      for (r = 0; r < e.length; r++)
        (c = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== c && (e[r].selected = c),
          c && l && (e[r].defaultSelected = !0);
    } else {
      for (r = '' + $t(r), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === r) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gh(e, t, r) {
    if (t != null && ((t = '' + $t(t)), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? '' + $t(r) : '';
  }
  function $h(e, t, r, l) {
    if (t == null) {
      if (l != null) {
        if (r != null) throw Error(s(92));
        if (le(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ''), (t = r);
    }
    (r = $t(t)),
      (e.defaultValue = r),
      (l = e.textContent),
      l === r && l !== '' && l !== null && (e.value = l);
  }
  function Ri(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var t_ = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Xh(e, t, r) {
    var l = t.indexOf('--') === 0;
    r == null || typeof r == 'boolean' || r === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, r)
        : typeof r != 'number' || r === 0 || t_.has(t)
          ? t === 'float'
            ? (e.cssFloat = r)
            : (e[t] = ('' + r).trim())
          : (e[t] = r + 'px');
  }
  function Ih(e, t, r) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var l in r)
        !r.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var c in t) (l = t[c]), t.hasOwnProperty(c) && r[c] !== l && Xh(e, c, l);
    } else for (var d in t) t.hasOwnProperty(d) && Xh(e, d, t[d]);
  }
  function Gu(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var n_ = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    a_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function El(e) {
    return a_.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var $u = null;
  function Xu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Oi = null,
    Ci = null;
  function Qh(e) {
    var t = xi(e);
    if (t && (e = t.stateNode)) {
      var r = e[xt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (qu(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
            ),
            (t = r.name),
            r.type === 'radio' && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name="' + Xt('' + t) + '"][type="radio"]'), t = 0;
              t < r.length;
              t++
            ) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var c = l[xt] || null;
                if (!c) throw Error(s(90));
                qu(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (t = 0; t < r.length; t++) (l = r[t]), l.form === e.form && qh(l);
          }
          break e;
        case 'textarea':
          Gh(e, r.value, r.defaultValue);
          break e;
        case 'select':
          (t = r.value), t != null && Ai(e, !!r.multiple, t, !1);
      }
    }
  }
  var Iu = !1;
  function Kh(e, t, r) {
    if (Iu) return e(t, r);
    Iu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Iu = !1),
        (Oi !== null || Ci !== null) &&
          (oo(), Oi && ((t = Oi), (e = Ci), (Ci = Oi = null), Qh(t), e)))
      )
        for (t = 0; t < e.length; t++) Qh(e[t]);
    }
  }
  function Vr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[xt] || null;
    if (l === null) return null;
    r = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(s(231, t, typeof r));
    return r;
  }
  var jn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Qu = !1;
  if (jn)
    try {
      var Zr = {};
      Object.defineProperty(Zr, 'passive', {
        get: function () {
          Qu = !0;
        },
      }),
        window.addEventListener('test', Zr, Zr),
        window.removeEventListener('test', Zr, Zr);
    } catch {
      Qu = !1;
    }
  var sa = null,
    Ku = null,
    Tl = null;
  function Jh() {
    if (Tl) return Tl;
    var e,
      t = Ku,
      r = t.length,
      l,
      c = 'value' in sa ? sa.value : sa.textContent,
      d = c.length;
    for (e = 0; e < r && t[e] === c[e]; e++);
    var g = r - e;
    for (l = 1; l <= g && t[r - l] === c[d - l]; l++);
    return (Tl = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function wl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Al() {
    return !0;
  }
  function Fh() {
    return !1;
  }
  function Et(e) {
    function t(r, l, c, d, g) {
      (this._reactName = r),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = d),
        (this.target = g),
        (this.currentTarget = null);
      for (var _ in e) e.hasOwnProperty(_) && ((r = e[_]), (this[_] = r ? r(d) : d[_]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Al
          : Fh),
        (this.isPropagationStopped = Fh),
        this
      );
    }
    return (
      y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = Al));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = Al));
        },
        persist: function () {},
        isPersistent: Al,
      }),
      t
    );
  }
  var Ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Rl = Et(Ya),
    Yr = y({}, Ya, { view: 0, detail: 0 }),
    i_ = Et(Yr),
    Ju,
    Fu,
    qr,
    Ol = y({}, Yr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ec,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== qr &&
              (qr && e.type === 'mousemove'
                ? ((Ju = e.screenX - qr.screenX), (Fu = e.screenY - qr.screenY))
                : (Fu = Ju = 0),
              (qr = e)),
            Ju);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Fu;
      },
    }),
    Wh = Et(Ol),
    r_ = y({}, Ol, { dataTransfer: 0 }),
    s_ = Et(r_),
    l_ = y({}, Yr, { relatedTarget: 0 }),
    Wu = Et(l_),
    o_ = y({}, Ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u_ = Et(o_),
    c_ = y({}, Ya, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    f_ = Et(c_),
    d_ = y({}, Ya, { data: 0 }),
    ep = Et(d_),
    h_ = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    p_ = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    m_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function y_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = m_[e]) ? !!t[e] : !1;
  }
  function ec() {
    return y_;
  }
  var v_ = y({}, Yr, {
      key: function (e) {
        if (e.key) {
          var t = h_[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = wl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? p_[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ec,
      charCode: function (e) {
        return e.type === 'keypress' ? wl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? wl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    g_ = Et(v_),
    b_ = y({}, Ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tp = Et(b_),
    __ = y({}, Yr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ec,
    }),
    S_ = Et(__),
    x_ = y({}, Ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    E_ = Et(x_),
    T_ = y({}, Ol, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    w_ = Et(T_),
    A_ = y({}, Ya, { newState: 0, oldState: 0 }),
    R_ = Et(A_),
    O_ = [9, 13, 27, 32],
    tc = jn && 'CompositionEvent' in window,
    Pr = null;
  jn && 'documentMode' in document && (Pr = document.documentMode);
  var C_ = jn && 'TextEvent' in window && !Pr,
    np = jn && (!tc || (Pr && 8 < Pr && 11 >= Pr)),
    ap = ' ',
    ip = !1;
  function rp(e, t) {
    switch (e) {
      case 'keyup':
        return O_.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function sp(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Mi = !1;
  function M_(e, t) {
    switch (e) {
      case 'compositionend':
        return sp(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ip = !0), ap);
      case 'textInput':
        return (e = t.data), e === ap && ip ? null : e;
      default:
        return null;
    }
  }
  function D_(e, t) {
    if (Mi)
      return e === 'compositionend' || (!tc && rp(e, t))
        ? ((e = Jh()), (Tl = Ku = sa = null), (Mi = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return np && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var N_ = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!N_[e.type] : t === 'textarea';
  }
  function op(e, t, r, l) {
    Oi ? (Ci ? Ci.push(l) : (Ci = [l])) : (Oi = l),
      (t = mo(t, 'onChange')),
      0 < t.length &&
        ((r = new Rl('onChange', 'change', null, r, l)), e.push({ event: r, listeners: t }));
  }
  var Gr = null,
    $r = null;
  function L_(e) {
    Yy(e, 0);
  }
  function Cl(e) {
    var t = Hr(e);
    if (qh(t)) return e;
  }
  function up(e, t) {
    if (e === 'change') return t;
  }
  var cp = !1;
  if (jn) {
    var nc;
    if (jn) {
      var ac = 'oninput' in document;
      if (!ac) {
        var fp = document.createElement('div');
        fp.setAttribute('oninput', 'return;'), (ac = typeof fp.oninput == 'function');
      }
      nc = ac;
    } else nc = !1;
    cp = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function dp() {
    Gr && (Gr.detachEvent('onpropertychange', hp), ($r = Gr = null));
  }
  function hp(e) {
    if (e.propertyName === 'value' && Cl($r)) {
      var t = [];
      op(t, $r, e, Xu(e)), Kh(L_, t);
    }
  }
  function k_(e, t, r) {
    e === 'focusin'
      ? (dp(), (Gr = t), ($r = r), Gr.attachEvent('onpropertychange', hp))
      : e === 'focusout' && dp();
  }
  function z_(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Cl($r);
  }
  function j_(e, t) {
    if (e === 'click') return Cl(t);
  }
  function U_(e, t) {
    if (e === 'input' || e === 'change') return Cl(t);
  }
  function B_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Dt = typeof Object.is == 'function' ? Object.is : B_;
  function Xr(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var c = r[l];
      if (!rn.call(t, c) || !Dt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function pp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mp(e, t) {
    var r = pp(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= t && l >= t)) return { node: r, offset: t - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = pp(r);
    }
  }
  function yp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? yp(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function vp(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = xl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = xl(e.document);
    }
    return t;
  }
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var H_ = jn && 'documentMode' in document && 11 >= document.documentMode,
    Di = null,
    rc = null,
    Ir = null,
    sc = !1;
  function gp(e, t, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    sc ||
      Di == null ||
      Di !== xl(l) ||
      ((l = Di),
      'selectionStart' in l && ic(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ir && Xr(Ir, l)) ||
        ((Ir = l),
        (l = mo(rc, 'onSelect')),
        0 < l.length &&
          ((t = new Rl('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: l }),
          (t.target = Di))));
  }
  function qa(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var Ni = {
      animationend: qa('Animation', 'AnimationEnd'),
      animationiteration: qa('Animation', 'AnimationIteration'),
      animationstart: qa('Animation', 'AnimationStart'),
      transitionrun: qa('Transition', 'TransitionRun'),
      transitionstart: qa('Transition', 'TransitionStart'),
      transitioncancel: qa('Transition', 'TransitionCancel'),
      transitionend: qa('Transition', 'TransitionEnd'),
    },
    lc = {},
    bp = {};
  jn &&
    ((bp = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ni.animationend.animation,
      delete Ni.animationiteration.animation,
      delete Ni.animationstart.animation),
    'TransitionEvent' in window || delete Ni.transitionend.transition);
  function Pa(e) {
    if (lc[e]) return lc[e];
    if (!Ni[e]) return e;
    var t = Ni[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in bp) return (lc[e] = t[r]);
    return e;
  }
  var _p = Pa('animationend'),
    Sp = Pa('animationiteration'),
    xp = Pa('animationstart'),
    V_ = Pa('transitionrun'),
    Z_ = Pa('transitionstart'),
    Y_ = Pa('transitioncancel'),
    Ep = Pa('transitionend'),
    Tp = new Map(),
    oc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  oc.push('scrollEnd');
  function sn(e, t) {
    Tp.set(e, t), Za(t, [e]);
  }
  var wp = new WeakMap();
  function It(e, t) {
    if (typeof e == 'object' && e !== null) {
      var r = wp.get(e);
      return r !== void 0 ? r : ((t = { value: e, source: t, stack: Zh(t) }), wp.set(e, t), t);
    }
    return { value: e, source: t, stack: Zh(t) };
  }
  var Qt = [],
    Li = 0,
    uc = 0;
  function Ml() {
    for (var e = Li, t = (uc = Li = 0); t < e; ) {
      var r = Qt[t];
      Qt[t++] = null;
      var l = Qt[t];
      Qt[t++] = null;
      var c = Qt[t];
      Qt[t++] = null;
      var d = Qt[t];
      if (((Qt[t++] = null), l !== null && c !== null)) {
        var g = l.pending;
        g === null ? (c.next = c) : ((c.next = g.next), (g.next = c)), (l.pending = c);
      }
      d !== 0 && Ap(r, c, d);
    }
  }
  function Dl(e, t, r, l) {
    (Qt[Li++] = e),
      (Qt[Li++] = t),
      (Qt[Li++] = r),
      (Qt[Li++] = l),
      (uc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function cc(e, t, r, l) {
    return Dl(e, t, r, l), Nl(e);
  }
  function ki(e, t) {
    return Dl(e, null, null, t), Nl(e);
  }
  function Ap(e, t, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var c = !1, d = e.return; d !== null; )
      (d.childLanes |= r),
        (l = d.alternate),
        l !== null && (l.childLanes |= r),
        d.tag === 22 && ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - Mt(r)),
          (e = d.hiddenUpdates),
          (l = e[c]),
          l === null ? (e[c] = [t]) : l.push(t),
          (t.lane = r | 536870912)),
        d)
      : null;
  }
  function Nl(e) {
    if (50 < bs) throw ((bs = 0), (vf = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var zi = {};
  function q_(e, t, r, l) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Nt(e, t, r, l) {
    return new q_(e, t, r, l);
  }
  function fc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Un(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Nt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 65011712),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function Rp(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (t = r.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ll(e, t, r, l, c, d) {
    var g = 0;
    if (((l = e), typeof e == 'function')) fc(e) && (g = 1);
    else if (typeof e == 'string')
      g = GS(e, r, re.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case V:
          return (e = Nt(31, r, t, c)), (e.elementType = V), (e.lanes = d), e;
        case x:
          return Ga(r.children, c, d, t);
        case E:
          (g = 8), (c |= 24);
          break;
        case R:
          return (e = Nt(12, r, t, c | 2)), (e.elementType = R), (e.lanes = d), e;
        case C:
          return (e = Nt(13, r, t, c)), (e.elementType = C), (e.lanes = d), e;
        case Z:
          return (e = Nt(19, r, t, c)), (e.elementType = Z), (e.lanes = d), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case M:
              case U:
                g = 10;
                break e;
              case L:
                g = 9;
                break e;
              case X:
                g = 11;
                break e;
              case H:
                g = 14;
                break e;
              case Y:
                (g = 16), (l = null);
                break e;
            }
          (g = 29), (r = Error(s(130, e === null ? 'null' : typeof e, ''))), (l = null);
      }
    return (t = Nt(g, r, t, c)), (t.elementType = e), (t.type = l), (t.lanes = d), t;
  }
  function Ga(e, t, r, l) {
    return (e = Nt(7, e, l, t)), (e.lanes = r), e;
  }
  function dc(e, t, r) {
    return (e = Nt(6, e, null, t)), (e.lanes = r), e;
  }
  function hc(e, t, r) {
    return (
      (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ji = [],
    Ui = 0,
    kl = null,
    zl = 0,
    Kt = [],
    Jt = 0,
    $a = null,
    Bn = 1,
    Hn = '';
  function Xa(e, t) {
    (ji[Ui++] = zl), (ji[Ui++] = kl), (kl = e), (zl = t);
  }
  function Op(e, t, r) {
    (Kt[Jt++] = Bn), (Kt[Jt++] = Hn), (Kt[Jt++] = $a), ($a = e);
    var l = Bn;
    e = Hn;
    var c = 32 - Mt(l) - 1;
    (l &= ~(1 << c)), (r += 1);
    var d = 32 - Mt(t) + c;
    if (30 < d) {
      var g = c - (c % 5);
      (d = (l & ((1 << g) - 1)).toString(32)),
        (l >>= g),
        (c -= g),
        (Bn = (1 << (32 - Mt(t) + c)) | (r << c) | l),
        (Hn = d + e);
    } else (Bn = (1 << d) | (r << c) | l), (Hn = e);
  }
  function pc(e) {
    e.return !== null && (Xa(e, 1), Op(e, 1, 0));
  }
  function mc(e) {
    for (; e === kl; ) (kl = ji[--Ui]), (ji[Ui] = null), (zl = ji[--Ui]), (ji[Ui] = null);
    for (; e === $a; )
      ($a = Kt[--Jt]),
        (Kt[Jt] = null),
        (Hn = Kt[--Jt]),
        (Kt[Jt] = null),
        (Bn = Kt[--Jt]),
        (Kt[Jt] = null);
  }
  var bt = null,
    Ie = null,
    Ne = !1,
    Ia = null,
    vn = !1,
    yc = Error(s(519));
  function Qa(e) {
    var t = Error(s(418, ''));
    throw (Jr(It(t, e)), yc);
  }
  function Cp(e) {
    var t = e.stateNode,
      r = e.type,
      l = e.memoizedProps;
    switch (((t[dt] = e), (t[xt] = l), r)) {
      case 'dialog':
        Re('cancel', t), Re('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Re('load', t);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < Ss.length; r++) Re(Ss[r], t);
        break;
      case 'source':
        Re('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        Re('error', t), Re('load', t);
        break;
      case 'details':
        Re('toggle', t);
        break;
      case 'input':
        Re('invalid', t),
          Ph(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          Sl(t);
        break;
      case 'select':
        Re('invalid', t);
        break;
      case 'textarea':
        Re('invalid', t), $h(t, l.value, l.defaultValue, l.children), Sl(t);
    }
    (r = l.children),
      (typeof r != 'string' && typeof r != 'number' && typeof r != 'bigint') ||
      t.textContent === '' + r ||
      l.suppressHydrationWarning === !0 ||
      $y(t.textContent, r)
        ? (l.popover != null && (Re('beforetoggle', t), Re('toggle', t)),
          l.onScroll != null && Re('scroll', t),
          l.onScrollEnd != null && Re('scrollend', t),
          l.onClick != null && (t.onclick = yo),
          (t = !0))
        : (t = !1),
      t || Qa(e);
  }
  function Mp(e) {
    for (bt = e.return; bt; )
      switch (bt.tag) {
        case 5:
        case 13:
          vn = !1;
          return;
        case 27:
        case 3:
          vn = !0;
          return;
        default:
          bt = bt.return;
      }
  }
  function Qr(e) {
    if (e !== bt) return !1;
    if (!Ne) return Mp(e), (Ne = !0), !1;
    var t = e.tag,
      r;
    if (
      ((r = t !== 3 && t !== 27) &&
        ((r = t === 5) &&
          ((r = e.type), (r = !(r !== 'form' && r !== 'button') || Lf(e.type, e.memoizedProps))),
        (r = !r)),
      r && Ie && Qa(e),
      Mp(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === '/$')) {
              if (t === 0) {
                Ie = on(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          e = e.nextSibling;
        }
        Ie = null;
      }
    } else
      t === 27
        ? ((t = Ie), xa(e.type) ? ((e = Uf), (Uf = null), (Ie = e)) : (Ie = t))
        : (Ie = bt ? on(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Kr() {
    (Ie = bt = null), (Ne = !1);
  }
  function Dp() {
    var e = Ia;
    return e !== null && (At === null ? (At = e) : At.push.apply(At, e), (Ia = null)), e;
  }
  function Jr(e) {
    Ia === null ? (Ia = [e]) : Ia.push(e);
  }
  var vc = q(null),
    Ka = null,
    Vn = null;
  function la(e, t, r) {
    Q(vc, t._currentValue), (t._currentValue = r);
  }
  function Zn(e) {
    (e._currentValue = vc.current), ae(vc);
  }
  function gc(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function bc(e, t, r, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var g = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var _ = d;
          d = c;
          for (var T = 0; T < t.length; T++)
            if (_.context === t[T]) {
              (d.lanes |= r),
                (_ = d.alternate),
                _ !== null && (_.lanes |= r),
                gc(d.return, r, e),
                l || (g = null);
              break e;
            }
          d = _.next;
        }
      } else if (c.tag === 18) {
        if (((g = c.return), g === null)) throw Error(s(341));
        (g.lanes |= r), (d = g.alternate), d !== null && (d.lanes |= r), gc(g, r, e), (g = null);
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((c = g.sibling), c !== null)) {
            (c.return = g.return), (g = c);
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function Fr(e, t, r, l) {
    e = null;
    for (var c = t, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(s(387));
        if (((g = g.memoizedProps), g !== null)) {
          var _ = c.type;
          Dt(c.pendingProps.value, g.value) || (e !== null ? e.push(_) : (e = [_]));
        }
      } else if (c === Oe.current) {
        if (((g = c.alternate), g === null)) throw Error(s(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Rs) : (e = [Rs]));
      }
      c = c.return;
    }
    e !== null && bc(t, e, r, l), (t.flags |= 262144);
  }
  function jl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Dt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ja(e) {
    (Ka = e), (Vn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ht(e) {
    return Np(Ka, e);
  }
  function Ul(e, t) {
    return Ka === null && Ja(e), Np(e, t);
  }
  function Np(e, t) {
    var r = t._currentValue;
    if (((t = { context: t, memoizedValue: r, next: null }), Vn === null)) {
      if (e === null) throw Error(s(308));
      (Vn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else Vn = Vn.next = t;
    return r;
  }
  var P_ =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (r, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    G_ = n.unstable_scheduleCallback,
    $_ = n.unstable_NormalPriority,
    nt = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _c() {
    return { controller: new P_(), data: new Map(), refCount: 0 };
  }
  function Wr(e) {
    e.refCount--,
      e.refCount === 0 &&
        G_($_, function () {
          e.controller.abort();
        });
  }
  var es = null,
    Sc = 0,
    Bi = 0,
    Hi = null;
  function X_(e, t) {
    if (es === null) {
      var r = (es = []);
      (Sc = 0),
        (Bi = Tf()),
        (Hi = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            r.push(l);
          },
        });
    }
    return Sc++, t.then(Lp, Lp), t;
  }
  function Lp() {
    if (--Sc === 0 && es !== null) {
      Hi !== null && (Hi.status = 'fulfilled');
      var e = es;
      (es = null), (Bi = 0), (Hi = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function I_(e, t) {
    var r = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (c) {
          r.push(c);
        },
      };
    return (
      e.then(
        function () {
          (l.status = 'fulfilled'), (l.value = t);
          for (var c = 0; c < r.length; c++) (0, r[c])(t);
        },
        function (c) {
          for (l.status = 'rejected', l.reason = c, c = 0; c < r.length; c++) (0, r[c])(void 0);
        },
      ),
      l
    );
  }
  var kp = N.S;
  N.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && X_(e, t),
      kp !== null && kp(e, t);
  };
  var Fa = q(null);
  function xc() {
    var e = Fa.current;
    return e !== null ? e : Pe.pooledCache;
  }
  function Bl(e, t) {
    t === null ? Q(Fa, Fa.current) : Q(Fa, t.pool);
  }
  function zp() {
    var e = xc();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var ts = Error(s(460)),
    jp = Error(s(474)),
    Hl = Error(s(542)),
    Ec = { then: function () {} };
  function Up(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Vl() {}
  function Bp(e, t, r) {
    switch (
      ((r = e[r]), r === void 0 ? e.push(t) : r !== t && (t.then(Vl, Vl), (t = r)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Vp(e), e);
      default:
        if (typeof t.status == 'string') t.then(Vl, Vl);
        else {
          if (((e = Pe), e !== null && 100 < e.shellSuspendCounter)) throw Error(s(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var c = t;
                  (c.status = 'fulfilled'), (c.value = l);
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var c = t;
                  (c.status = 'rejected'), (c.reason = l);
                }
              },
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Vp(e), e);
        }
        throw ((ns = t), ts);
    }
  }
  var ns = null;
  function Hp() {
    if (ns === null) throw Error(s(459));
    var e = ns;
    return (ns = null), e;
  }
  function Vp(e) {
    if (e === ts || e === Hl) throw Error(s(483));
  }
  var oa = !1;
  function Tc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function wc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ua(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (je & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        (t = Nl(e)),
        Ap(e, null, r),
        t
      );
    }
    return Dl(e, l, t, r), Nl(e);
  }
  function as(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194048) !== 0))) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Lh(e, r);
    }
  }
  function Ac(e, t) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var c = null,
        d = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var g = { lane: r.lane, tag: r.tag, payload: r.payload, callback: null, next: null };
          d === null ? (c = d = g) : (d = d.next = g), (r = r.next);
        } while (r !== null);
        d === null ? (c = d = t) : (d = d.next = t);
      } else c = d = t;
      (r = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  var Rc = !1;
  function is() {
    if (Rc) {
      var e = Hi;
      if (e !== null) throw e;
    }
  }
  function rs(e, t, r, l) {
    Rc = !1;
    var c = e.updateQueue;
    oa = !1;
    var d = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var T = _,
        z = T.next;
      (T.next = null), g === null ? (d = z) : (g.next = z), (g = T);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (_ = P.lastBaseUpdate),
        _ !== g && (_ === null ? (P.firstBaseUpdate = z) : (_.next = z), (P.lastBaseUpdate = T)));
    }
    if (d !== null) {
      var I = c.baseState;
      (g = 0), (P = z = T = null), (_ = d);
      do {
        var j = _.lane & -536870913,
          B = j !== _.lane;
        if (B ? (Ce & j) === j : (l & j) === j) {
          j !== 0 && j === Bi && (Rc = !0),
            P !== null &&
              (P = P.next =
                { lane: 0, tag: _.tag, payload: _.payload, callback: null, next: null });
          e: {
            var be = e,
              me = _;
            j = t;
            var Ve = r;
            switch (me.tag) {
              case 1:
                if (((be = me.payload), typeof be == 'function')) {
                  I = be.call(Ve, I, j);
                  break e;
                }
                I = be;
                break e;
              case 3:
                be.flags = (be.flags & -65537) | 128;
              case 0:
                if (
                  ((be = me.payload),
                  (j = typeof be == 'function' ? be.call(Ve, I, j) : be),
                  j == null)
                )
                  break e;
                I = y({}, I, j);
                break e;
              case 2:
                oa = !0;
            }
          }
          (j = _.callback),
            j !== null &&
              ((e.flags |= 64),
              B && (e.flags |= 8192),
              (B = c.callbacks),
              B === null ? (c.callbacks = [j]) : B.push(j));
        } else
          (B = { lane: j, tag: _.tag, payload: _.payload, callback: _.callback, next: null }),
            P === null ? ((z = P = B), (T = I)) : (P = P.next = B),
            (g |= j);
        if (((_ = _.next), _ === null)) {
          if (((_ = c.shared.pending), _ === null)) break;
          (B = _), (_ = B.next), (B.next = null), (c.lastBaseUpdate = B), (c.shared.pending = null);
        }
      } while (!0);
      P === null && (T = I),
        (c.baseState = T),
        (c.firstBaseUpdate = z),
        (c.lastBaseUpdate = P),
        d === null && (c.shared.lanes = 0),
        (ga |= g),
        (e.lanes = g),
        (e.memoizedState = I);
    }
  }
  function Zp(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function Yp(e, t) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) Zp(r[e], t);
  }
  var Vi = q(null),
    Zl = q(0);
  function qp(e, t) {
    (e = In), Q(Zl, e), Q(Vi, t), (In = e | t.baseLanes);
  }
  function Oc() {
    Q(Zl, In), Q(Vi, Vi.current);
  }
  function Cc() {
    (In = Zl.current), ae(Vi), ae(Zl);
  }
  var fa = 0,
    Te = null,
    Be = null,
    We = null,
    Yl = !1,
    Zi = !1,
    Wa = !1,
    ql = 0,
    ss = 0,
    Yi = null,
    Q_ = 0;
  function Ke() {
    throw Error(s(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Dt(e[r], t[r])) return !1;
    return !0;
  }
  function Dc(e, t, r, l, c, d) {
    return (
      (fa = d),
      (Te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = e === null || e.memoizedState === null ? Am : Rm),
      (Wa = !1),
      (d = r(l, c)),
      (Wa = !1),
      Zi && (d = Gp(t, r, l, c)),
      Pp(e),
      d
    );
  }
  function Pp(e) {
    N.H = Ql;
    var t = Be !== null && Be.next !== null;
    if (((fa = 0), (We = Be = Te = null), (Yl = !1), (ss = 0), (Yi = null), t)) throw Error(s(300));
    e === null || rt || ((e = e.dependencies), e !== null && jl(e) && (rt = !0));
  }
  function Gp(e, t, r, l) {
    Te = e;
    var c = 0;
    do {
      if ((Zi && (Yi = null), (ss = 0), (Zi = !1), 25 <= c)) throw Error(s(301));
      if (((c += 1), (We = Be = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (N.H = nS), (d = t(r, l));
    } while (Zi);
    return d;
  }
  function K_() {
    var e = N.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ls(t) : t),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (Te.flags |= 1024),
      t
    );
  }
  function Nc() {
    var e = ql !== 0;
    return (ql = 0), e;
  }
  function Lc(e, t, r) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r);
  }
  function kc(e) {
    if (Yl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Yl = !1;
    }
    (fa = 0), (We = Be = Te = null), (Zi = !1), (ss = ql = 0), (Yi = null);
  }
  function Tt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return We === null ? (Te.memoizedState = We = e) : (We = We.next = e), We;
  }
  function et() {
    if (Be === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = We === null ? Te.memoizedState : We.next;
    if (t !== null) (We = t), (Be = e);
    else {
      if (e === null) throw Te.alternate === null ? Error(s(467)) : Error(s(310));
      (Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        We === null ? (Te.memoizedState = We = e) : (We = We.next = e);
    }
    return We;
  }
  function zc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ls(e) {
    var t = ss;
    return (
      (ss += 1),
      Yi === null && (Yi = []),
      (e = Bp(Yi, e, t)),
      (t = Te),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate), (N.H = t === null || t.memoizedState === null ? Am : Rm)),
      e
    );
  }
  function Pl(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ls(e);
      if (e.$$typeof === U) return ht(e);
    }
    throw Error(s(438, String(e)));
  }
  function jc(e) {
    var t = null,
      r = Te.updateQueue;
    if ((r !== null && (t = r.memoCache), t == null)) {
      var l = Te.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      r === null && ((r = zc()), (Te.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), l = 0; l < e; l++) r[l] = F;
    return t.index++, r;
  }
  function Yn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Gl(e) {
    var t = et();
    return Uc(t, Be, e);
  }
  function Uc(e, t, r) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = r;
    var c = e.baseQueue,
      d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        (c.next = d.next), (d.next = g);
      }
      (t.baseQueue = c = d), (l.pending = null);
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      t = c.next;
      var _ = (g = null),
        T = null,
        z = t,
        P = !1;
      do {
        var I = z.lane & -536870913;
        if (I !== z.lane ? (Ce & I) === I : (fa & I) === I) {
          var j = z.revertLane;
          if (j === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              I === Bi && (P = !0);
          else if ((fa & j) === j) {
            (z = z.next), j === Bi && (P = !0);
            continue;
          } else
            (I = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              T === null ? ((_ = T = I), (g = d)) : (T = T.next = I),
              (Te.lanes |= j),
              (ga |= j);
          (I = z.action), Wa && r(d, I), (d = z.hasEagerState ? z.eagerState : r(d, I));
        } else
          (j = {
            lane: I,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            T === null ? ((_ = T = j), (g = d)) : (T = T.next = j),
            (Te.lanes |= I),
            (ga |= I);
        z = z.next;
      } while (z !== null && z !== t);
      if (
        (T === null ? (g = d) : (T.next = _),
        !Dt(d, e.memoizedState) && ((rt = !0), P && ((r = Hi), r !== null)))
      )
        throw r;
      (e.memoizedState = d), (e.baseState = g), (e.baseQueue = T), (l.lastRenderedState = d);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Bc(e) {
    var t = et(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      c = r.pending,
      d = t.memoizedState;
    if (c !== null) {
      r.pending = null;
      var g = (c = c.next);
      do (d = e(d, g.action)), (g = g.next);
      while (g !== c);
      Dt(d, t.memoizedState) || (rt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (r.lastRenderedState = d);
    }
    return [d, l];
  }
  function $p(e, t, r) {
    var l = Te,
      c = et(),
      d = Ne;
    if (d) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = t();
    var g = !Dt((Be || c).memoizedState, r);
    g && ((c.memoizedState = r), (rt = !0)), (c = c.queue);
    var _ = Qp.bind(null, l, c, e);
    if (
      (os(2048, 8, _, [e]), c.getSnapshot !== t || g || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), qi(9, $l(), Ip.bind(null, l, c, r, t), null), Pe === null))
        throw Error(s(349));
      d || (fa & 124) !== 0 || Xp(l, t, r);
    }
    return r;
  }
  function Xp(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Te.updateQueue),
      t === null
        ? ((t = zc()), (Te.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Ip(e, t, r, l) {
    (t.value = r), (t.getSnapshot = l), Kp(t) && Jp(e);
  }
  function Qp(e, t, r) {
    return r(function () {
      Kp(t) && Jp(e);
    });
  }
  function Kp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Dt(e, r);
    } catch {
      return !0;
    }
  }
  function Jp(e) {
    var t = ki(e, 2);
    t !== null && Ut(t, e, 2);
  }
  function Hc(e) {
    var t = Tt();
    if (typeof e == 'function') {
      var r = e;
      if (((e = r()), Wa)) {
        ia(!0);
        try {
          r();
        } finally {
          ia(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Fp(e, t, r, l) {
    return (e.baseState = r), Uc(e, Be, typeof l == 'function' ? l : Yn);
  }
  function J_(e, t, r, l, c) {
    if (Il(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          d.listeners.push(g);
        },
      };
      N.T !== null ? r(!0) : (d.isTransition = !1),
        l(d),
        (r = t.pending),
        r === null
          ? ((d.next = t.pending = d), Wp(t, d))
          : ((d.next = r.next), (t.pending = r.next = d));
    }
  }
  function Wp(e, t) {
    var r = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var d = N.T,
        g = {};
      N.T = g;
      try {
        var _ = r(c, l),
          T = N.S;
        T !== null && T(g, _), em(e, t, _);
      } catch (z) {
        Vc(e, t, z);
      } finally {
        N.T = d;
      }
    } else
      try {
        (d = r(c, l)), em(e, t, d);
      } catch (z) {
        Vc(e, t, z);
      }
  }
  function em(e, t, r) {
    r !== null && typeof r == 'object' && typeof r.then == 'function'
      ? r.then(
          function (l) {
            tm(e, t, l);
          },
          function (l) {
            return Vc(e, t, l);
          },
        )
      : tm(e, t, r);
  }
  function tm(e, t, r) {
    (t.status = 'fulfilled'),
      (t.value = r),
      nm(t),
      (e.state = r),
      (t = e.pending),
      t !== null &&
        ((r = t.next), r === t ? (e.pending = null) : ((r = r.next), (t.next = r), Wp(e, r)));
  }
  function Vc(e, t, r) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = 'rejected'), (t.reason = r), nm(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function nm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function am(e, t) {
    return t;
  }
  function im(e, t) {
    if (Ne) {
      var r = Pe.formState;
      if (r !== null) {
        e: {
          var l = Te;
          if (Ne) {
            if (Ie) {
              t: {
                for (var c = Ie, d = vn; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = on(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === 'F!' || d === 'F' ? c : null);
              }
              if (c) {
                (Ie = on(c.nextSibling)), (l = c.data === 'F!');
                break e;
              }
            }
            Qa(l);
          }
          l = !1;
        }
        l && (t = r[0]);
      }
    }
    return (
      (r = Tt()),
      (r.memoizedState = r.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: am,
        lastRenderedState: t,
      }),
      (r.queue = l),
      (r = Em.bind(null, Te, l)),
      (l.dispatch = r),
      (l = Hc(!1)),
      (d = Gc.bind(null, Te, !1, l.queue)),
      (l = Tt()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (r = J_.bind(null, Te, c, d, r)),
      (c.dispatch = r),
      (l.memoizedState = e),
      [t, r, !1]
    );
  }
  function rm(e) {
    var t = et();
    return sm(t, Be, e);
  }
  function sm(e, t, r) {
    if (
      ((t = Uc(e, t, am)[0]),
      (e = Gl(Yn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = ls(t);
      } catch (g) {
        throw g === ts ? Hl : g;
      }
    else l = t;
    t = et();
    var c = t.queue,
      d = c.dispatch;
    return (
      r !== t.memoizedState && ((Te.flags |= 2048), qi(9, $l(), F_.bind(null, c, r), null)),
      [l, d, e]
    );
  }
  function F_(e, t) {
    e.action = t;
  }
  function lm(e) {
    var t = et(),
      r = Be;
    if (r !== null) return sm(t, r, e);
    et(), (t = t.memoizedState), (r = et());
    var l = r.queue.dispatch;
    return (r.memoizedState = e), [t, l, !1];
  }
  function qi(e, t, r, l) {
    return (
      (e = { tag: e, create: r, deps: l, inst: t, next: null }),
      (t = Te.updateQueue),
      t === null && ((t = zc()), (Te.updateQueue = t)),
      (r = t.lastEffect),
      r === null
        ? (t.lastEffect = e.next = e)
        : ((l = r.next), (r.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function $l() {
    return { destroy: void 0, resource: void 0 };
  }
  function om() {
    return et().memoizedState;
  }
  function Xl(e, t, r, l) {
    var c = Tt();
    (l = l === void 0 ? null : l), (Te.flags |= e), (c.memoizedState = qi(1 | t, $l(), r, l));
  }
  function os(e, t, r, l) {
    var c = et();
    l = l === void 0 ? null : l;
    var d = c.memoizedState.inst;
    Be !== null && l !== null && Mc(l, Be.memoizedState.deps)
      ? (c.memoizedState = qi(t, d, r, l))
      : ((Te.flags |= e), (c.memoizedState = qi(1 | t, d, r, l)));
  }
  function um(e, t) {
    Xl(8390656, 8, e, t);
  }
  function cm(e, t) {
    os(2048, 8, e, t);
  }
  function fm(e, t) {
    return os(4, 2, e, t);
  }
  function dm(e, t) {
    return os(4, 4, e, t);
  }
  function hm(e, t) {
    if (typeof t == 'function') {
      e = e();
      var r = t(e);
      return function () {
        typeof r == 'function' ? r() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function pm(e, t, r) {
    (r = r != null ? r.concat([e]) : null), os(4, 4, hm.bind(null, t, e), r);
  }
  function Zc() {}
  function mm(e, t) {
    var r = et();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return t !== null && Mc(t, l[1]) ? l[0] : ((r.memoizedState = [e, t]), e);
  }
  function ym(e, t) {
    var r = et();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    if (t !== null && Mc(t, l[1])) return l[0];
    if (((l = e()), Wa)) {
      ia(!0);
      try {
        e();
      } finally {
        ia(!1);
      }
    }
    return (r.memoizedState = [l, t]), l;
  }
  function Yc(e, t, r) {
    return r === void 0 || (fa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = by()), (Te.lanes |= e), (ga |= e), r);
  }
  function vm(e, t, r, l) {
    return Dt(r, t)
      ? r
      : Vi.current !== null
        ? ((e = Yc(e, r, l)), Dt(e, t) || (rt = !0), e)
        : (fa & 42) === 0
          ? ((rt = !0), (e.memoizedState = r))
          : ((e = by()), (Te.lanes |= e), (ga |= e), t);
  }
  function gm(e, t, r, l, c) {
    var d = G.p;
    G.p = d !== 0 && 8 > d ? d : 8;
    var g = N.T,
      _ = {};
    (N.T = _), Gc(e, !1, t, r);
    try {
      var T = c(),
        z = N.S;
      if (
        (z !== null && z(_, T), T !== null && typeof T == 'object' && typeof T.then == 'function')
      ) {
        var P = I_(T, l);
        us(e, t, P, jt(e));
      } else us(e, t, l, jt(e));
    } catch (I) {
      us(e, t, { then: function () {}, status: 'rejected', reason: I }, jt());
    } finally {
      (G.p = d), (N.T = g);
    }
  }
  function W_() {}
  function qc(e, t, r, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = bm(e).queue;
    gm(
      e,
      c,
      t,
      K,
      r === null
        ? W_
        : function () {
            return _m(e), r(l);
          },
    );
  }
  function bm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: K,
      },
      next: null,
    };
    var r = {};
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yn,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function _m(e) {
    var t = bm(e).next.queue;
    us(e, t, {}, jt());
  }
  function Pc() {
    return ht(Rs);
  }
  function Sm() {
    return et().memoizedState;
  }
  function xm() {
    return et().memoizedState;
  }
  function eS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = jt();
          e = ua(r);
          var l = ca(t, e, r);
          l !== null && (Ut(l, t, r), as(l, t, r)), (t = { cache: _c() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function tS(e, t, r) {
    var l = jt();
    (r = { lane: l, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null }),
      Il(e) ? Tm(t, r) : ((r = cc(e, t, r, l)), r !== null && (Ut(r, e, l), wm(r, t, l)));
  }
  function Em(e, t, r) {
    var l = jt();
    us(e, t, r, l);
  }
  function us(e, t, r, l) {
    var c = { lane: l, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Il(e)) Tm(t, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var g = t.lastRenderedState,
            _ = d(g, r);
          if (((c.hasEagerState = !0), (c.eagerState = _), Dt(_, g)))
            return Dl(e, t, c, 0), Pe === null && Ml(), !1;
        } catch {
        } finally {
        }
      if (((r = cc(e, t, c, l)), r !== null)) return Ut(r, e, l), wm(r, t, l), !0;
    }
    return !1;
  }
  function Gc(e, t, r, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Tf(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Il(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = cc(e, r, l, 2)), t !== null && Ut(t, e, 2);
  }
  function Il(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function Tm(e, t) {
    Zi = Yl = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
  }
  function wm(e, t, r) {
    if ((r & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Lh(e, r);
    }
  }
  var Ql = {
      readContext: ht,
      use: Pl,
      useCallback: Ke,
      useContext: Ke,
      useEffect: Ke,
      useImperativeHandle: Ke,
      useLayoutEffect: Ke,
      useInsertionEffect: Ke,
      useMemo: Ke,
      useReducer: Ke,
      useRef: Ke,
      useState: Ke,
      useDebugValue: Ke,
      useDeferredValue: Ke,
      useTransition: Ke,
      useSyncExternalStore: Ke,
      useId: Ke,
      useHostTransitionStatus: Ke,
      useFormState: Ke,
      useActionState: Ke,
      useOptimistic: Ke,
      useMemoCache: Ke,
      useCacheRefresh: Ke,
    },
    Am = {
      readContext: ht,
      use: Pl,
      useCallback: function (e, t) {
        return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ht,
      useEffect: um,
      useImperativeHandle: function (e, t, r) {
        (r = r != null ? r.concat([e]) : null), Xl(4194308, 4, hm.bind(null, t, e), r);
      },
      useLayoutEffect: function (e, t) {
        return Xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Tt();
        t = t === void 0 ? null : t;
        var l = e();
        if (Wa) {
          ia(!0);
          try {
            e();
          } finally {
            ia(!1);
          }
        }
        return (r.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, r) {
        var l = Tt();
        if (r !== void 0) {
          var c = r(t);
          if (Wa) {
            ia(!0);
            try {
              r(t);
            } finally {
              ia(!1);
            }
          }
        } else c = t;
        return (
          (l.memoizedState = l.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (l.queue = e),
          (e = e.dispatch = tS.bind(null, Te, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Hc(e);
        var t = e.queue,
          r = Em.bind(null, Te, t);
        return (t.dispatch = r), [e.memoizedState, r];
      },
      useDebugValue: Zc,
      useDeferredValue: function (e, t) {
        var r = Tt();
        return Yc(r, e, t);
      },
      useTransition: function () {
        var e = Hc(!1);
        return (e = gm.bind(null, Te, e.queue, !0, !1)), (Tt().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, t, r) {
        var l = Te,
          c = Tt();
        if (Ne) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), Pe === null)) throw Error(s(349));
          (Ce & 124) !== 0 || Xp(l, t, r);
        }
        c.memoizedState = r;
        var d = { value: r, getSnapshot: t };
        return (
          (c.queue = d),
          um(Qp.bind(null, l, d, e), [e]),
          (l.flags |= 2048),
          qi(9, $l(), Ip.bind(null, l, d, r, t), null),
          r
        );
      },
      useId: function () {
        var e = Tt(),
          t = Pe.identifierPrefix;
        if (Ne) {
          var r = Hn,
            l = Bn;
          (r = (l & ~(1 << (32 - Mt(l) - 1))).toString(32) + r),
            (t = '«' + t + 'R' + r),
            (r = ql++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += '»');
        } else (r = Q_++), (t = '«' + t + 'r' + r.toString(32) + '»');
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Pc,
      useFormState: im,
      useActionState: im,
      useOptimistic: function (e) {
        var t = Tt();
        t.memoizedState = t.baseState = e;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (t.queue = r), (t = Gc.bind(null, Te, !0, r)), (r.dispatch = t), [e, t];
      },
      useMemoCache: jc,
      useCacheRefresh: function () {
        return (Tt().memoizedState = eS.bind(null, Te));
      },
    },
    Rm = {
      readContext: ht,
      use: Pl,
      useCallback: mm,
      useContext: ht,
      useEffect: cm,
      useImperativeHandle: pm,
      useInsertionEffect: fm,
      useLayoutEffect: dm,
      useMemo: ym,
      useReducer: Gl,
      useRef: om,
      useState: function () {
        return Gl(Yn);
      },
      useDebugValue: Zc,
      useDeferredValue: function (e, t) {
        var r = et();
        return vm(r, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Gl(Yn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : ls(e), t];
      },
      useSyncExternalStore: $p,
      useId: Sm,
      useHostTransitionStatus: Pc,
      useFormState: rm,
      useActionState: rm,
      useOptimistic: function (e, t) {
        var r = et();
        return Fp(r, Be, e, t);
      },
      useMemoCache: jc,
      useCacheRefresh: xm,
    },
    nS = {
      readContext: ht,
      use: Pl,
      useCallback: mm,
      useContext: ht,
      useEffect: cm,
      useImperativeHandle: pm,
      useInsertionEffect: fm,
      useLayoutEffect: dm,
      useMemo: ym,
      useReducer: Bc,
      useRef: om,
      useState: function () {
        return Bc(Yn);
      },
      useDebugValue: Zc,
      useDeferredValue: function (e, t) {
        var r = et();
        return Be === null ? Yc(r, e, t) : vm(r, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Bc(Yn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : ls(e), t];
      },
      useSyncExternalStore: $p,
      useId: Sm,
      useHostTransitionStatus: Pc,
      useFormState: lm,
      useActionState: lm,
      useOptimistic: function (e, t) {
        var r = et();
        return Be !== null ? Fp(r, Be, e, t) : ((r.baseState = e), [e, r.queue.dispatch]);
      },
      useMemoCache: jc,
      useCacheRefresh: xm,
    },
    Pi = null,
    cs = 0;
  function Kl(e) {
    var t = cs;
    return (cs += 1), Pi === null && (Pi = []), Bp(Pi, e, t);
  }
  function fs(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Jl(e, t) {
    throw t.$$typeof === v
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e,
          ),
        ));
  }
  function Om(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Cm(e) {
    function t(D, O) {
      if (e) {
        var k = D.deletions;
        k === null ? ((D.deletions = [O]), (D.flags |= 16)) : k.push(O);
      }
    }
    function r(D, O) {
      if (!e) return null;
      for (; O !== null; ) t(D, O), (O = O.sibling);
      return null;
    }
    function l(D) {
      for (var O = new Map(); D !== null; )
        D.key !== null ? O.set(D.key, D) : O.set(D.index, D), (D = D.sibling);
      return O;
    }
    function c(D, O) {
      return (D = Un(D, O)), (D.index = 0), (D.sibling = null), D;
    }
    function d(D, O, k) {
      return (
        (D.index = k),
        e
          ? ((k = D.alternate),
            k !== null
              ? ((k = k.index), k < O ? ((D.flags |= 67108866), O) : k)
              : ((D.flags |= 67108866), O))
          : ((D.flags |= 1048576), O)
      );
    }
    function g(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function _(D, O, k, $) {
      return O === null || O.tag !== 6
        ? ((O = dc(k, D.mode, $)), (O.return = D), O)
        : ((O = c(O, k)), (O.return = D), O);
    }
    function T(D, O, k, $) {
      var oe = k.type;
      return oe === x
        ? P(D, O, k.props.children, $, k.key)
        : O !== null &&
            (O.elementType === oe ||
              (typeof oe == 'object' && oe !== null && oe.$$typeof === Y && Om(oe) === O.type))
          ? ((O = c(O, k.props)), fs(O, k), (O.return = D), O)
          : ((O = Ll(k.type, k.key, k.props, null, D.mode, $)), fs(O, k), (O.return = D), O);
    }
    function z(D, O, k, $) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== k.containerInfo ||
        O.stateNode.implementation !== k.implementation
        ? ((O = hc(k, D.mode, $)), (O.return = D), O)
        : ((O = c(O, k.children || [])), (O.return = D), O);
    }
    function P(D, O, k, $, oe) {
      return O === null || O.tag !== 7
        ? ((O = Ga(k, D.mode, $, oe)), (O.return = D), O)
        : ((O = c(O, k)), (O.return = D), O);
    }
    function I(D, O, k) {
      if ((typeof O == 'string' && O !== '') || typeof O == 'number' || typeof O == 'bigint')
        return (O = dc('' + O, D.mode, k)), (O.return = D), O;
      if (typeof O == 'object' && O !== null) {
        switch (O.$$typeof) {
          case b:
            return (k = Ll(O.type, O.key, O.props, null, D.mode, k)), fs(k, O), (k.return = D), k;
          case S:
            return (O = hc(O, D.mode, k)), (O.return = D), O;
          case Y:
            var $ = O._init;
            return (O = $(O._payload)), I(D, O, k);
        }
        if (le(O) || W(O)) return (O = Ga(O, D.mode, k, null)), (O.return = D), O;
        if (typeof O.then == 'function') return I(D, Kl(O), k);
        if (O.$$typeof === U) return I(D, Ul(D, O), k);
        Jl(D, O);
      }
      return null;
    }
    function j(D, O, k, $) {
      var oe = O !== null ? O.key : null;
      if ((typeof k == 'string' && k !== '') || typeof k == 'number' || typeof k == 'bigint')
        return oe !== null ? null : _(D, O, '' + k, $);
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case b:
            return k.key === oe ? T(D, O, k, $) : null;
          case S:
            return k.key === oe ? z(D, O, k, $) : null;
          case Y:
            return (oe = k._init), (k = oe(k._payload)), j(D, O, k, $);
        }
        if (le(k) || W(k)) return oe !== null ? null : P(D, O, k, $, null);
        if (typeof k.then == 'function') return j(D, O, Kl(k), $);
        if (k.$$typeof === U) return j(D, O, Ul(D, k), $);
        Jl(D, k);
      }
      return null;
    }
    function B(D, O, k, $, oe) {
      if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number' || typeof $ == 'bigint')
        return (D = D.get(k) || null), _(O, D, '' + $, oe);
      if (typeof $ == 'object' && $ !== null) {
        switch ($.$$typeof) {
          case b:
            return (D = D.get($.key === null ? k : $.key) || null), T(O, D, $, oe);
          case S:
            return (D = D.get($.key === null ? k : $.key) || null), z(O, D, $, oe);
          case Y:
            var we = $._init;
            return ($ = we($._payload)), B(D, O, k, $, oe);
        }
        if (le($) || W($)) return (D = D.get(k) || null), P(O, D, $, oe, null);
        if (typeof $.then == 'function') return B(D, O, k, Kl($), oe);
        if ($.$$typeof === U) return B(D, O, k, Ul(O, $), oe);
        Jl(O, $);
      }
      return null;
    }
    function be(D, O, k, $) {
      for (
        var oe = null, we = null, he = O, ye = (O = 0), lt = null;
        he !== null && ye < k.length;
        ye++
      ) {
        he.index > ye ? ((lt = he), (he = null)) : (lt = he.sibling);
        var De = j(D, he, k[ye], $);
        if (De === null) {
          he === null && (he = lt);
          break;
        }
        e && he && De.alternate === null && t(D, he),
          (O = d(De, O, ye)),
          we === null ? (oe = De) : (we.sibling = De),
          (we = De),
          (he = lt);
      }
      if (ye === k.length) return r(D, he), Ne && Xa(D, ye), oe;
      if (he === null) {
        for (; ye < k.length; ye++)
          (he = I(D, k[ye], $)),
            he !== null &&
              ((O = d(he, O, ye)), we === null ? (oe = he) : (we.sibling = he), (we = he));
        return Ne && Xa(D, ye), oe;
      }
      for (he = l(he); ye < k.length; ye++)
        (lt = B(he, D, ye, k[ye], $)),
          lt !== null &&
            (e && lt.alternate !== null && he.delete(lt.key === null ? ye : lt.key),
            (O = d(lt, O, ye)),
            we === null ? (oe = lt) : (we.sibling = lt),
            (we = lt));
      return (
        e &&
          he.forEach(function (Ra) {
            return t(D, Ra);
          }),
        Ne && Xa(D, ye),
        oe
      );
    }
    function me(D, O, k, $) {
      if (k == null) throw Error(s(151));
      for (
        var oe = null, we = null, he = O, ye = (O = 0), lt = null, De = k.next();
        he !== null && !De.done;
        ye++, De = k.next()
      ) {
        he.index > ye ? ((lt = he), (he = null)) : (lt = he.sibling);
        var Ra = j(D, he, De.value, $);
        if (Ra === null) {
          he === null && (he = lt);
          break;
        }
        e && he && Ra.alternate === null && t(D, he),
          (O = d(Ra, O, ye)),
          we === null ? (oe = Ra) : (we.sibling = Ra),
          (we = Ra),
          (he = lt);
      }
      if (De.done) return r(D, he), Ne && Xa(D, ye), oe;
      if (he === null) {
        for (; !De.done; ye++, De = k.next())
          (De = I(D, De.value, $)),
            De !== null &&
              ((O = d(De, O, ye)), we === null ? (oe = De) : (we.sibling = De), (we = De));
        return Ne && Xa(D, ye), oe;
      }
      for (he = l(he); !De.done; ye++, De = k.next())
        (De = B(he, D, ye, De.value, $)),
          De !== null &&
            (e && De.alternate !== null && he.delete(De.key === null ? ye : De.key),
            (O = d(De, O, ye)),
            we === null ? (oe = De) : (we.sibling = De),
            (we = De));
      return (
        e &&
          he.forEach(function (a1) {
            return t(D, a1);
          }),
        Ne && Xa(D, ye),
        oe
      );
    }
    function Ve(D, O, k, $) {
      if (
        (typeof k == 'object' &&
          k !== null &&
          k.type === x &&
          k.key === null &&
          (k = k.props.children),
        typeof k == 'object' && k !== null)
      ) {
        switch (k.$$typeof) {
          case b:
            e: {
              for (var oe = k.key; O !== null; ) {
                if (O.key === oe) {
                  if (((oe = k.type), oe === x)) {
                    if (O.tag === 7) {
                      r(D, O.sibling), ($ = c(O, k.props.children)), ($.return = D), (D = $);
                      break e;
                    }
                  } else if (
                    O.elementType === oe ||
                    (typeof oe == 'object' && oe !== null && oe.$$typeof === Y && Om(oe) === O.type)
                  ) {
                    r(D, O.sibling), ($ = c(O, k.props)), fs($, k), ($.return = D), (D = $);
                    break e;
                  }
                  r(D, O);
                  break;
                } else t(D, O);
                O = O.sibling;
              }
              k.type === x
                ? (($ = Ga(k.props.children, D.mode, $, k.key)), ($.return = D), (D = $))
                : (($ = Ll(k.type, k.key, k.props, null, D.mode, $)),
                  fs($, k),
                  ($.return = D),
                  (D = $));
            }
            return g(D);
          case S:
            e: {
              for (oe = k.key; O !== null; ) {
                if (O.key === oe)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === k.containerInfo &&
                    O.stateNode.implementation === k.implementation
                  ) {
                    r(D, O.sibling), ($ = c(O, k.children || [])), ($.return = D), (D = $);
                    break e;
                  } else {
                    r(D, O);
                    break;
                  }
                else t(D, O);
                O = O.sibling;
              }
              ($ = hc(k, D.mode, $)), ($.return = D), (D = $);
            }
            return g(D);
          case Y:
            return (oe = k._init), (k = oe(k._payload)), Ve(D, O, k, $);
        }
        if (le(k)) return be(D, O, k, $);
        if (W(k)) {
          if (((oe = W(k)), typeof oe != 'function')) throw Error(s(150));
          return (k = oe.call(k)), me(D, O, k, $);
        }
        if (typeof k.then == 'function') return Ve(D, O, Kl(k), $);
        if (k.$$typeof === U) return Ve(D, O, Ul(D, k), $);
        Jl(D, k);
      }
      return (typeof k == 'string' && k !== '') || typeof k == 'number' || typeof k == 'bigint'
        ? ((k = '' + k),
          O !== null && O.tag === 6
            ? (r(D, O.sibling), ($ = c(O, k)), ($.return = D), (D = $))
            : (r(D, O), ($ = dc(k, D.mode, $)), ($.return = D), (D = $)),
          g(D))
        : r(D, O);
    }
    return function (D, O, k, $) {
      try {
        cs = 0;
        var oe = Ve(D, O, k, $);
        return (Pi = null), oe;
      } catch (he) {
        if (he === ts || he === Hl) throw he;
        var we = Nt(29, he, null, D.mode);
        return (we.lanes = $), (we.return = D), we;
      } finally {
      }
    };
  }
  var Gi = Cm(!0),
    Mm = Cm(!1),
    Ft = q(null),
    gn = null;
  function da(e) {
    var t = e.alternate;
    Q(at, at.current & 1),
      Q(Ft, e),
      gn === null && (t === null || Vi.current !== null || t.memoizedState !== null) && (gn = e);
  }
  function Dm(e) {
    if (e.tag === 22) {
      if ((Q(at, at.current), Q(Ft, e), gn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (gn = e);
      }
    } else ha();
  }
  function ha() {
    Q(at, at.current), Q(Ft, Ft.current);
  }
  function qn(e) {
    ae(Ft), gn === e && (gn = null), ae(at);
  }
  var at = q(0);
  function Fl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || jf(r))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function $c(e, t, r, l) {
    (t = e.memoizedState),
      (r = r(l, t)),
      (r = r == null ? t : y({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Xc = {
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var l = jt(),
        c = ua(l);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = ca(e, c, l)),
        t !== null && (Ut(t, e, l), as(t, e, l));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var l = jt(),
        c = ua(l);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = ca(e, c, l)),
        t !== null && (Ut(t, e, l), as(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = jt(),
        l = ua(r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = ca(e, l, r)),
        t !== null && (Ut(t, e, r), as(t, e, r));
    },
  };
  function Nm(e, t, r, l, c, d, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, d, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xr(r, l) || !Xr(c, d)
          : !0
    );
  }
  function Lm(e, t, r, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, l),
      t.state !== e && Xc.enqueueReplaceState(t, t.state, null);
  }
  function ei(e, t) {
    var r = t;
    if ('ref' in t) {
      r = {};
      for (var l in t) l !== 'ref' && (r[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      r === t && (r = y({}, r));
      for (var c in e) r[c] === void 0 && (r[c] = e[c]);
    }
    return r;
  }
  var Wl =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function km(e) {
    Wl(e);
  }
  function zm(e) {
    console.error(e);
  }
  function jm(e) {
    Wl(e);
  }
  function eo(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Um(e, t, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, { componentStack: r.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Ic(e, t, r) {
    return (
      (r = ua(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        eo(e, t);
      }),
      r
    );
  }
  function Bm(e) {
    return (e = ua(e)), (e.tag = 3), e;
  }
  function Hm(e, t, r, l) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var d = l.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          Um(t, r, l);
        });
    }
    var g = r.stateNode;
    g !== null &&
      typeof g.componentDidCatch == 'function' &&
      (e.callback = function () {
        Um(t, r, l),
          typeof c != 'function' && (ba === null ? (ba = new Set([this])) : ba.add(this));
        var _ = l.stack;
        this.componentDidCatch(l.value, { componentStack: _ !== null ? _ : '' });
      });
  }
  function aS(e, t, r, l, c) {
    if (((r.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = r.alternate), t !== null && Fr(t, r, c, !0), (r = Ft.current), r !== null)) {
        switch (r.tag) {
          case 13:
            return (
              gn === null ? bf() : r.alternate === null && Qe === 0 && (Qe = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = c),
              l === Ec
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null ? (r.updateQueue = new Set([l])) : t.add(l),
                  Sf(e, l, c)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              l === Ec
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue), r === null ? (t.retryQueue = new Set([l])) : r.add(l)),
                  Sf(e, l, c)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return Sf(e, l, c), bf(), !1;
    }
    if (Ne)
      return (
        (t = Ft.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== yc && ((e = Error(s(422), { cause: l })), Jr(It(e, r))))
          : (l !== yc && ((t = Error(s(423), { cause: l })), Jr(It(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = It(l, r)),
            (c = Ic(e.stateNode, l, c)),
            Ac(e, c),
            Qe !== 4 && (Qe = 2)),
        !1
      );
    var d = Error(s(520), { cause: l });
    if (((d = It(d, r)), gs === null ? (gs = [d]) : gs.push(d), Qe !== 4 && (Qe = 2), t === null))
      return !0;
    (l = It(l, r)), (r = t);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = c & -c),
            (r.lanes |= e),
            (e = Ic(r.stateNode, l, e)),
            Ac(r, e),
            !1
          );
        case 1:
          if (
            ((t = r.type),
            (d = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (d !== null &&
                  typeof d.componentDidCatch == 'function' &&
                  (ba === null || !ba.has(d)))))
          )
            return (
              (r.flags |= 65536),
              (c &= -c),
              (r.lanes |= c),
              (c = Bm(c)),
              Hm(c, e, r, l),
              Ac(r, c),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Vm = Error(s(461)),
    rt = !1;
  function ot(e, t, r, l) {
    t.child = e === null ? Mm(t, null, r, l) : Gi(t, e.child, r, l);
  }
  function Zm(e, t, r, l, c) {
    r = r.render;
    var d = t.ref;
    if ('ref' in l) {
      var g = {};
      for (var _ in l) _ !== 'ref' && (g[_] = l[_]);
    } else g = l;
    return (
      Ja(t),
      (l = Dc(e, t, r, g, d, c)),
      (_ = Nc()),
      e !== null && !rt
        ? (Lc(e, t, c), Pn(e, t, c))
        : (Ne && _ && pc(t), (t.flags |= 1), ot(e, t, l, c), t.child)
    );
  }
  function Ym(e, t, r, l, c) {
    if (e === null) {
      var d = r.type;
      return typeof d == 'function' && !fc(d) && d.defaultProps === void 0 && r.compare === null
        ? ((t.tag = 15), (t.type = d), qm(e, t, d, l, c))
        : ((e = Ll(r.type, null, l, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((d = e.child), !nf(e, c))) {
      var g = d.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Xr), r(g, l) && e.ref === t.ref))
        return Pn(e, t, c);
    }
    return (t.flags |= 1), (e = Un(d, l)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function qm(e, t, r, l, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Xr(d, l) && e.ref === t.ref)
        if (((rt = !1), (t.pendingProps = l = d), nf(e, c))) (e.flags & 131072) !== 0 && (rt = !0);
        else return (t.lanes = e.lanes), Pn(e, t, c);
    }
    return Qc(e, t, r, l, c);
  }
  function Pm(e, t, r) {
    var l = t.pendingProps,
      c = l.children,
      d = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((l = d !== null ? d.baseLanes | r : r), e !== null)) {
          for (c = t.child = e.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = d & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return Gm(e, t, l, r);
      }
      if ((r & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Bl(t, d !== null ? d.cachePool : null),
          d !== null ? qp(t, d) : Oc(),
          Dm(t);
      else
        return (t.lanes = t.childLanes = 536870912), Gm(e, t, d !== null ? d.baseLanes | r : r, r);
    } else
      d !== null
        ? (Bl(t, d.cachePool), qp(t, d), ha(), (t.memoizedState = null))
        : (e !== null && Bl(t, null), Oc(), ha());
    return ot(e, t, c, r), t.child;
  }
  function Gm(e, t, r, l) {
    var c = xc();
    return (
      (c = c === null ? null : { parent: nt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: r, cachePool: c }),
      e !== null && Bl(t, null),
      Oc(),
      Dm(t),
      e !== null && Fr(e, t, l, !0),
      null
    );
  }
  function to(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != 'function' && typeof r != 'object') throw Error(s(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function Qc(e, t, r, l, c) {
    return (
      Ja(t),
      (r = Dc(e, t, r, l, void 0, c)),
      (l = Nc()),
      e !== null && !rt
        ? (Lc(e, t, c), Pn(e, t, c))
        : (Ne && l && pc(t), (t.flags |= 1), ot(e, t, r, c), t.child)
    );
  }
  function $m(e, t, r, l, c, d) {
    return (
      Ja(t),
      (t.updateQueue = null),
      (r = Gp(t, l, r, c)),
      Pp(e),
      (l = Nc()),
      e !== null && !rt
        ? (Lc(e, t, d), Pn(e, t, d))
        : (Ne && l && pc(t), (t.flags |= 1), ot(e, t, r, d), t.child)
    );
  }
  function Xm(e, t, r, l, c) {
    if ((Ja(t), t.stateNode === null)) {
      var d = zi,
        g = r.contextType;
      typeof g == 'object' && g !== null && (d = ht(g)),
        (d = new r(l, d)),
        (t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Xc),
        (t.stateNode = d),
        (d._reactInternals = t),
        (d = t.stateNode),
        (d.props = l),
        (d.state = t.memoizedState),
        (d.refs = {}),
        Tc(t),
        (g = r.contextType),
        (d.context = typeof g == 'object' && g !== null ? ht(g) : zi),
        (d.state = t.memoizedState),
        (g = r.getDerivedStateFromProps),
        typeof g == 'function' && ($c(t, r, g, l), (d.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function' ||
          (typeof d.UNSAFE_componentWillMount != 'function' &&
            typeof d.componentWillMount != 'function') ||
          ((g = d.state),
          typeof d.componentWillMount == 'function' && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == 'function' && d.UNSAFE_componentWillMount(),
          g !== d.state && Xc.enqueueReplaceState(d, d.state, null),
          rs(t, l, d, c),
          is(),
          (d.state = t.memoizedState)),
        typeof d.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      d = t.stateNode;
      var _ = t.memoizedProps,
        T = ei(r, _);
      d.props = T;
      var z = d.context,
        P = r.contextType;
      (g = zi), typeof P == 'object' && P !== null && (g = ht(P));
      var I = r.getDerivedStateFromProps;
      (P = typeof I == 'function' || typeof d.getSnapshotBeforeUpdate == 'function'),
        (_ = t.pendingProps !== _),
        P ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((_ || z !== g) && Lm(t, d, l, g)),
        (oa = !1);
      var j = t.memoizedState;
      (d.state = j),
        rs(t, l, d, c),
        is(),
        (z = t.memoizedState),
        _ || j !== z || oa
          ? (typeof I == 'function' && ($c(t, r, I, l), (z = t.memoizedState)),
            (T = oa || Nm(t, r, T, l, j, z, g))
              ? (P ||
                  (typeof d.UNSAFE_componentWillMount != 'function' &&
                    typeof d.componentWillMount != 'function') ||
                  (typeof d.componentWillMount == 'function' && d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == 'function' &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof d.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = z)),
            (d.props = l),
            (d.state = z),
            (d.context = g),
            (l = T))
          : (typeof d.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1));
    } else {
      (d = t.stateNode),
        wc(e, t),
        (g = t.memoizedProps),
        (P = ei(r, g)),
        (d.props = P),
        (I = t.pendingProps),
        (j = d.context),
        (z = r.contextType),
        (T = zi),
        typeof z == 'object' && z !== null && (T = ht(z)),
        (_ = r.getDerivedStateFromProps),
        (z = typeof _ == 'function' || typeof d.getSnapshotBeforeUpdate == 'function') ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((g !== I || j !== T) && Lm(t, d, l, T)),
        (oa = !1),
        (j = t.memoizedState),
        (d.state = j),
        rs(t, l, d, c),
        is();
      var B = t.memoizedState;
      g !== I || j !== B || oa || (e !== null && e.dependencies !== null && jl(e.dependencies))
        ? (typeof _ == 'function' && ($c(t, r, _, l), (B = t.memoizedState)),
          (P =
            oa ||
            Nm(t, r, P, l, j, B, T) ||
            (e !== null && e.dependencies !== null && jl(e.dependencies)))
            ? (z ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' && d.componentWillUpdate(l, B, T),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(l, B, T)),
              typeof d.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof d.componentDidUpdate != 'function' ||
                (g === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != 'function' ||
                (g === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = B)),
          (d.props = l),
          (d.state = B),
          (d.context = T),
          (l = P))
        : (typeof d.componentDidUpdate != 'function' ||
            (g === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (g === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (d = l),
      to(e, t),
      (l = (t.flags & 128) !== 0),
      d || l
        ? ((d = t.stateNode),
          (r = l && typeof r.getDerivedStateFromError != 'function' ? null : d.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Gi(t, e.child, null, c)), (t.child = Gi(t, null, r, c)))
            : ot(e, t, r, c),
          (t.memoizedState = d.state),
          (e = t.child))
        : (e = Pn(e, t, c)),
      e
    );
  }
  function Im(e, t, r, l) {
    return Kr(), (t.flags |= 256), ot(e, t, r, l), t.child;
  }
  var Kc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Jc(e) {
    return { baseLanes: e, cachePool: zp() };
  }
  function Fc(e, t, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), t && (e |= Wt), e;
  }
  function Qm(e, t, r) {
    var l = t.pendingProps,
      c = !1,
      d = (t.flags & 128) !== 0,
      g;
    if (
      ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0),
      g && ((c = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ne) {
        if ((c ? da(t) : ha(), Ne)) {
          var _ = Ie,
            T;
          if ((T = _)) {
            e: {
              for (T = _, _ = vn; T.nodeType !== 8; ) {
                if (!_) {
                  _ = null;
                  break e;
                }
                if (((T = on(T.nextSibling)), T === null)) {
                  _ = null;
                  break e;
                }
              }
              _ = T;
            }
            _ !== null
              ? ((t.memoizedState = {
                  dehydrated: _,
                  treeContext: $a !== null ? { id: Bn, overflow: Hn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Nt(18, null, null, 0)),
                (T.stateNode = _),
                (T.return = t),
                (t.child = T),
                (bt = t),
                (Ie = null),
                (T = !0))
              : (T = !1);
          }
          T || Qa(t);
        }
        if (((_ = t.memoizedState), _ !== null && ((_ = _.dehydrated), _ !== null)))
          return jf(_) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        qn(t);
      }
      return (
        (_ = l.children),
        (l = l.fallback),
        c
          ? (ha(),
            (c = t.mode),
            (_ = no({ mode: 'hidden', children: _ }, c)),
            (l = Ga(l, c, r, null)),
            (_.return = t),
            (l.return = t),
            (_.sibling = l),
            (t.child = _),
            (c = t.child),
            (c.memoizedState = Jc(r)),
            (c.childLanes = Fc(e, g, r)),
            (t.memoizedState = Kc),
            l)
          : (da(t), Wc(t, _))
      );
    }
    if (((T = e.memoizedState), T !== null && ((_ = T.dehydrated), _ !== null))) {
      if (d)
        t.flags & 256
          ? (da(t), (t.flags &= -257), (t = ef(e, t, r)))
          : t.memoizedState !== null
            ? (ha(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ha(),
              (c = l.fallback),
              (_ = t.mode),
              (l = no({ mode: 'visible', children: l.children }, _)),
              (c = Ga(c, _, r, null)),
              (c.flags |= 2),
              (l.return = t),
              (c.return = t),
              (l.sibling = c),
              (t.child = l),
              Gi(t, e.child, null, r),
              (l = t.child),
              (l.memoizedState = Jc(r)),
              (l.childLanes = Fc(e, g, r)),
              (t.memoizedState = Kc),
              (t = c));
      else if ((da(t), jf(_))) {
        if (((g = _.nextSibling && _.nextSibling.dataset), g)) var z = g.dgst;
        (g = z),
          (l = Error(s(419))),
          (l.stack = ''),
          (l.digest = g),
          Jr({ value: l, source: null, stack: null }),
          (t = ef(e, t, r));
      } else if ((rt || Fr(e, t, r, !1), (g = (r & e.childLanes) !== 0), rt || g)) {
        if (
          ((g = Pe),
          g !== null &&
            ((l = r & -r),
            (l = (l & 42) !== 0 ? 1 : ju(l)),
            (l = (l & (g.suspendedLanes | r)) !== 0 ? 0 : l),
            l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), ki(e, l), Ut(g, e, l), Vm);
        _.data === '$?' || bf(), (t = ef(e, t, r));
      } else
        _.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = T.treeContext),
            (Ie = on(_.nextSibling)),
            (bt = t),
            (Ne = !0),
            (Ia = null),
            (vn = !1),
            e !== null &&
              ((Kt[Jt++] = Bn),
              (Kt[Jt++] = Hn),
              (Kt[Jt++] = $a),
              (Bn = e.id),
              (Hn = e.overflow),
              ($a = t)),
            (t = Wc(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (ha(),
        (c = l.fallback),
        (_ = t.mode),
        (T = e.child),
        (z = T.sibling),
        (l = Un(T, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        z !== null ? (c = Un(z, c)) : ((c = Ga(c, _, r, null)), (c.flags |= 2)),
        (c.return = t),
        (l.return = t),
        (l.sibling = c),
        (t.child = l),
        (l = c),
        (c = t.child),
        (_ = e.child.memoizedState),
        _ === null
          ? (_ = Jc(r))
          : ((T = _.cachePool),
            T !== null
              ? ((z = nt._currentValue), (T = T.parent !== z ? { parent: z, pool: z } : T))
              : (T = zp()),
            (_ = { baseLanes: _.baseLanes | r, cachePool: T })),
        (c.memoizedState = _),
        (c.childLanes = Fc(e, g, r)),
        (t.memoizedState = Kc),
        l)
      : (da(t),
        (r = e.child),
        (e = r.sibling),
        (r = Un(r, { mode: 'visible', children: l.children })),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((g = t.deletions), g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r);
  }
  function Wc(e, t) {
    return (t = no({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function no(e, t) {
    return (
      (e = Nt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function ef(e, t, r) {
    return (
      Gi(t, e.child, null, r),
      (e = Wc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Km(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), gc(e.return, t, r);
  }
  function tf(e, t, r, l, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: c,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = r),
        (d.tailMode = c));
  }
  function Jm(e, t, r) {
    var l = t.pendingProps,
      c = l.revealOrder,
      d = l.tail;
    if ((ot(e, t, l.children, r), (l = at.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Km(e, r, t);
          else if (e.tag === 19) Km(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((Q(at, l), c)) {
      case 'forwards':
        for (r = t.child, c = null; r !== null; )
          (e = r.alternate), e !== null && Fl(e) === null && (c = r), (r = r.sibling);
        (r = c),
          r === null ? ((c = t.child), (t.child = null)) : ((c = r.sibling), (r.sibling = null)),
          tf(t, !1, c, r, d);
        break;
      case 'backwards':
        for (r = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Fl(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = r), (r = c), (c = e);
        }
        tf(t, !0, r, null, d);
        break;
      case 'together':
        tf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ga |= t.lanes), (r & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Fr(e, t, r, !1), (r & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = Un(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        (e = e.sibling), (r = r.sibling = Un(e, e.pendingProps)), (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function nf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && jl(e)));
  }
  function iS(e, t, r) {
    switch (t.tag) {
      case 3:
        pe(t, t.stateNode.containerInfo), la(t, nt, e.memoizedState.cache), Kr();
        break;
      case 27:
      case 5:
        Pt(t);
        break;
      case 4:
        pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        la(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (da(t), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Qm(e, t, r)
              : (da(t), (e = Pn(e, t, r)), e !== null ? e.sibling : null);
        da(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((l = (r & t.childLanes) !== 0),
          l || (Fr(e, t, r, !1), (l = (r & t.childLanes) !== 0)),
          c)
        ) {
          if (l) return Jm(e, t, r);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Q(at, at.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Pm(e, t, r);
      case 24:
        la(t, nt, e.memoizedState.cache);
    }
    return Pn(e, t, r);
  }
  function Fm(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) rt = !0;
      else {
        if (!nf(e, r) && (t.flags & 128) === 0) return (rt = !1), iS(e, t, r);
        rt = (e.flags & 131072) !== 0;
      }
    else (rt = !1), Ne && (t.flags & 1048576) !== 0 && Op(t, zl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            c = l._init;
          if (((l = c(l._payload)), (t.type = l), typeof l == 'function'))
            fc(l)
              ? ((e = ei(l, e)), (t.tag = 1), (t = Xm(null, t, l, e, r)))
              : ((t.tag = 0), (t = Qc(null, t, l, e, r)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === X)) {
                (t.tag = 11), (t = Zm(null, t, l, e, r));
                break e;
              } else if (c === H) {
                (t.tag = 14), (t = Ym(null, t, l, e, r));
                break e;
              }
            }
            throw ((t = de(l) || l), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return Qc(e, t, t.type, t.pendingProps, r);
      case 1:
        return (l = t.type), (c = ei(l, t.pendingProps)), Xm(e, t, l, c, r);
      case 3:
        e: {
          if ((pe(t, t.stateNode.containerInfo), e === null)) throw Error(s(387));
          l = t.pendingProps;
          var d = t.memoizedState;
          (c = d.element), wc(e, t), rs(t, l, null, r);
          var g = t.memoizedState;
          if (
            ((l = g.cache),
            la(t, nt, l),
            l !== d.cache && bc(t, [nt], r, !0),
            is(),
            (l = g.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: l, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              t = Im(e, t, l, r);
              break e;
            } else if (l !== c) {
              (c = It(Error(s(424)), t)), Jr(c), (t = Im(e, t, l, r));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Ie = on(e.firstChild),
                  bt = t,
                  Ne = !0,
                  Ia = null,
                  vn = !0,
                  r = Mm(t, null, l, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            }
          else {
            if ((Kr(), l === c)) {
              t = Pn(e, t, r);
              break e;
            }
            ot(e, t, l, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          to(e, t),
          e === null
            ? (r = nv(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : Ne ||
                ((r = t.type),
                (e = t.pendingProps),
                (l = vo(ue.current).createElement(r)),
                (l[dt] = t),
                (l[xt] = e),
                ct(l, r, e),
                it(l),
                (t.stateNode = l))
            : (t.memoizedState = nv(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Pt(t),
          e === null &&
            Ne &&
            ((l = t.stateNode = Wy(t.type, t.pendingProps, ue.current)),
            (bt = t),
            (vn = !0),
            (c = Ie),
            xa(t.type) ? ((Uf = c), (Ie = on(l.firstChild))) : (Ie = c)),
          ot(e, t, t.pendingProps.children, r),
          to(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ne &&
            ((c = l = Ie) &&
              ((l = NS(l, t.type, t.pendingProps, vn)),
              l !== null
                ? ((t.stateNode = l), (bt = t), (Ie = on(l.firstChild)), (vn = !1), (c = !0))
                : (c = !1)),
            c || Qa(t)),
          Pt(t),
          (c = t.type),
          (d = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (l = d.children),
          Lf(c, d) ? (l = null) : g !== null && Lf(c, g) && (t.flags |= 32),
          t.memoizedState !== null && ((c = Dc(e, t, K_, null, null, r)), (Rs._currentValue = c)),
          to(e, t),
          ot(e, t, l, r),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ne &&
            ((e = r = Ie) &&
              ((r = LS(r, t.pendingProps, vn)),
              r !== null ? ((t.stateNode = r), (bt = t), (Ie = null), (e = !0)) : (e = !1)),
            e || Qa(t)),
          null
        );
      case 13:
        return Qm(e, t, r);
      case 4:
        return (
          pe(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Gi(t, null, l, r)) : ot(e, t, l, r),
          t.child
        );
      case 11:
        return Zm(e, t, t.type, t.pendingProps, r);
      case 7:
        return ot(e, t, t.pendingProps, r), t.child;
      case 8:
        return ot(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return ot(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return (l = t.pendingProps), la(t, t.type, l.value), ot(e, t, l.children, r), t.child;
      case 9:
        return (
          (c = t.type._context),
          (l = t.pendingProps.children),
          Ja(t),
          (c = ht(c)),
          (l = l(c)),
          (t.flags |= 1),
          ot(e, t, l, r),
          t.child
        );
      case 14:
        return Ym(e, t, t.type, t.pendingProps, r);
      case 15:
        return qm(e, t, t.type, t.pendingProps, r);
      case 19:
        return Jm(e, t, r);
      case 31:
        return (
          (l = t.pendingProps),
          (r = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((r = no(l, r)), (r.ref = t.ref), (t.child = r), (r.return = t), (t = r))
            : ((r = Un(e.child, l)), (r.ref = t.ref), (t.child = r), (r.return = t), (t = r)),
          t
        );
      case 22:
        return Pm(e, t, r);
      case 24:
        return (
          Ja(t),
          (l = ht(nt)),
          e === null
            ? ((c = xc()),
              c === null &&
                ((c = Pe),
                (d = _c()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= r),
                (c = d)),
              (t.memoizedState = { parent: l, cache: c }),
              Tc(t),
              la(t, nt, c))
            : ((e.lanes & r) !== 0 && (wc(e, t), rs(t, null, null, r), is()),
              (c = e.memoizedState),
              (d = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c),
                  la(t, nt, l))
                : ((l = d.cache), la(t, nt, l), l !== c.cache && bc(t, [nt], r, !0))),
          ot(e, t, t.pendingProps.children, r),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Gn(e) {
    e.flags |= 4;
  }
  function Wm(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !lv(t))) {
      if (
        ((t = Ft.current),
        t !== null &&
          ((Ce & 4194048) === Ce
            ? gn !== null
            : ((Ce & 62914560) !== Ce && (Ce & 536870912) === 0) || t !== gn))
      )
        throw ((ns = Ec), jp);
      e.flags |= 8192;
    }
  }
  function ao(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Dh() : 536870912), (e.lanes |= t), (Qi |= t));
  }
  function ds(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var l = null; r !== null; ) r.alternate !== null && (l = r), (r = r.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (r |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (r |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = r), t;
  }
  function rS(e, t, r) {
    var l = t.pendingProps;
    switch ((mc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return $e(t), null;
      case 3:
        return (
          (r = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Zn(nt),
          Ze(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Qr(t)
              ? Gn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Dp())),
          $e(t),
          null
        );
      case 26:
        return (
          (r = t.memoizedState),
          e === null
            ? (Gn(t), r !== null ? ($e(t), Wm(t, r)) : ($e(t), (t.flags &= -16777217)))
            : r
              ? r !== e.memoizedState
                ? (Gn(t), $e(t), Wm(t, r))
                : ($e(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && Gn(t), $e(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        vt(t), (r = ue.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return $e(t), null;
          }
          (e = re.current), Qr(t) ? Cp(t) : ((e = Wy(c, l, r)), (t.stateNode = e), Gn(t));
        }
        return $e(t), null;
      case 5:
        if ((vt(t), (r = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return $e(t), null;
          }
          if (((e = re.current), Qr(t))) Cp(t);
          else {
            switch (((c = vo(ue.current)), e)) {
              case 1:
                e = c.createElementNS('http://www.w3.org/2000/svg', r);
                break;
              case 2:
                e = c.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                break;
              default:
                switch (r) {
                  case 'svg':
                    e = c.createElementNS('http://www.w3.org/2000/svg', r);
                    break;
                  case 'math':
                    e = c.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                    break;
                  case 'script':
                    (e = c.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof l.is == 'string'
                        ? c.createElement('select', { is: l.is })
                        : c.createElement('select')),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == 'string'
                        ? c.createElement(r, { is: l.is })
                        : c.createElement(r);
                }
            }
            (e[dt] = t), (e[xt] = l);
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = e;
            e: switch ((ct(e, r, l), r)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Gn(t);
          }
        }
        return $e(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Gn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(s(166));
          if (((e = ue.current), Qr(t))) {
            if (((e = t.stateNode), (r = t.memoizedProps), (l = null), (c = bt), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[dt] = t),
              (e = !!(
                e.nodeValue === r ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                $y(e.nodeValue, r)
              )),
              e || Qa(t);
          } else (e = vo(e).createTextNode(l)), (e[dt] = t), (t.stateNode = e);
        }
        return $e(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = Qr(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(s(317));
              c[dt] = t;
            } else Kr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            $e(t), (c = !1);
          } else
            (c = Dp()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return t.flags & 256 ? (qn(t), t) : (qn(t), null);
        }
        if ((qn(t), (t.flags & 128) !== 0)) return (t.lanes = r), t;
        if (((r = l !== null), (e = e !== null && e.memoizedState !== null), r)) {
          (l = t.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var d = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (d = l.memoizedState.cachePool.pool),
            d !== c && (l.flags |= 2048);
        }
        return r !== e && r && (t.child.flags |= 8192), ao(t, t.updateQueue), $e(t), null;
      case 4:
        return Ze(), e === null && Of(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return Zn(t.type), $e(t), null;
      case 19:
        if ((ae(at), (c = t.memoizedState), c === null)) return $e(t), null;
        if (((l = (t.flags & 128) !== 0), (d = c.rendering), d === null))
          if (l) ds(c, !1);
          else {
            if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Fl(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      ds(c, !1),
                      e = d.updateQueue,
                      t.updateQueue = e,
                      ao(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;

                  )
                    Rp(r, e), (r = r.sibling);
                  return Q(at, (at.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              qe() > so &&
              ((t.flags |= 128), (l = !0), ds(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Fl(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ao(t, e),
                ds(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !d.alternate && !Ne)
              )
                return $e(t), null;
            } else
              2 * qe() - c.renderingStartTime > so &&
                r !== 536870912 &&
                ((t.flags |= 128), (l = !0), ds(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((e = c.last), e !== null ? (e.sibling = d) : (t.child = d), (c.last = d));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = qe()),
            (t.sibling = null),
            (e = at.current),
            Q(at, l ? (e & 1) | 2 : e & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          qn(t),
          Cc(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (r & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          (r = t.updateQueue),
          r !== null && ao(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== r && (t.flags |= 2048),
          e !== null && ae(Fa),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          Zn(nt),
          $e(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function sS(e, t) {
    switch ((mc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          Zn(nt),
          Ze(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return vt(t), null;
      case 13:
        if ((qn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Kr();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ae(at), null;
      case 4:
        return Ze(), null;
      case 10:
        return Zn(t.type), null;
      case 22:
      case 23:
        return (
          qn(t),
          Cc(),
          e !== null && ae(Fa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Zn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ey(e, t) {
    switch ((mc(t), t.tag)) {
      case 3:
        Zn(nt), Ze();
        break;
      case 26:
      case 27:
      case 5:
        vt(t);
        break;
      case 4:
        Ze();
        break;
      case 13:
        qn(t);
        break;
      case 19:
        ae(at);
        break;
      case 10:
        Zn(t.type);
        break;
      case 22:
      case 23:
        qn(t), Cc(), e !== null && ae(Fa);
        break;
      case 24:
        Zn(nt);
    }
  }
  function hs(e, t) {
    try {
      var r = t.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var d = r.create,
              g = r.inst;
            (l = d()), (g.destroy = l);
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (_) {
      Ye(t, t.return, _);
    }
  }
  function pa(e, t, r) {
    try {
      var l = t.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var g = l.inst,
              _ = g.destroy;
            if (_ !== void 0) {
              (g.destroy = void 0), (c = t);
              var T = r,
                z = _;
              try {
                z();
              } catch (P) {
                Ye(c, T, P);
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (P) {
      Ye(t, t.return, P);
    }
  }
  function ty(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Yp(t, r);
      } catch (l) {
        Ye(e, e.return, l);
      }
    }
  }
  function ny(e, t, r) {
    (r.props = ei(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (l) {
      Ye(e, t, l);
    }
  }
  function ps(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof r == 'function' ? (e.refCleanup = r(l)) : (r.current = l);
      }
    } catch (c) {
      Ye(e, t, c);
    }
  }
  function bn(e, t) {
    var r = e.ref,
      l = e.refCleanup;
    if (r !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (c) {
          Ye(e, t, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof r == 'function')
        try {
          r(null);
        } catch (c) {
          Ye(e, t, c);
        }
      else r.current = null;
  }
  function ay(e) {
    var t = e.type,
      r = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          r.autoFocus && l.focus();
          break e;
        case 'img':
          r.src ? (l.src = r.src) : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (c) {
      Ye(e, e.return, c);
    }
  }
  function af(e, t, r) {
    try {
      var l = e.stateNode;
      RS(l, e.type, r, t), (l[xt] = t);
    } catch (c) {
      Ye(e, e.return, c);
    }
  }
  function iy(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && xa(e.type)) || e.tag === 4
    );
  }
  function rf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || iy(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && xa(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sf(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === 'HTML'
                ? r.ownerDocument.body
                : r
            ).insertBefore(e, t)
          : ((t = r.nodeType === 9 ? r.body : r.nodeName === 'HTML' ? r.ownerDocument.body : r),
            t.appendChild(e),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = yo));
    else if (
      l !== 4 &&
      (l === 27 && xa(e.type) && ((r = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (sf(e, t, r), e = e.sibling; e !== null; ) sf(e, t, r), (e = e.sibling);
  }
  function io(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && (l === 27 && xa(e.type) && (r = e.stateNode), (e = e.child), e !== null))
      for (io(e, t, r), e = e.sibling; e !== null; ) io(e, t, r), (e = e.sibling);
  }
  function ry(e) {
    var t = e.stateNode,
      r = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; ) t.removeAttributeNode(c[0]);
      ct(t, l, r), (t[dt] = e), (t[xt] = r);
    } catch (d) {
      Ye(e, e.return, d);
    }
  }
  var $n = !1,
    Je = !1,
    lf = !1,
    sy = typeof WeakSet == 'function' ? WeakSet : Set,
    st = null;
  function lS(e, t) {
    if (((e = e.containerInfo), (Df = Eo), (e = vp(e)), ic(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var c = l.anchorOffset,
              d = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, d.nodeType;
            } catch {
              r = null;
              break e;
            }
            var g = 0,
              _ = -1,
              T = -1,
              z = 0,
              P = 0,
              I = e,
              j = null;
            t: for (;;) {
              for (
                var B;
                I !== r || (c !== 0 && I.nodeType !== 3) || (_ = g + c),
                  I !== d || (l !== 0 && I.nodeType !== 3) || (T = g + l),
                  I.nodeType === 3 && (g += I.nodeValue.length),
                  (B = I.firstChild) !== null;

              )
                (j = I), (I = B);
              for (;;) {
                if (I === e) break t;
                if (
                  (j === r && ++z === c && (_ = g),
                  j === d && ++P === l && (T = g),
                  (B = I.nextSibling) !== null)
                )
                  break;
                (I = j), (j = I.parentNode);
              }
              I = B;
            }
            r = _ === -1 || T === -1 ? null : { start: _, end: T };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Nf = { focusedElem: e, selectionRange: r }, Eo = !1, st = t; st !== null; )
      if (((t = st), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = t), (st = e);
      else
        for (; st !== null; ) {
          switch (((t = st), (d = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (r = t),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (l = r.stateNode);
                try {
                  var be = ei(r.type, c, r.elementType === r.type);
                  (e = l.getSnapshotBeforeUpdate(be, d)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (me) {
                  Ye(r, r.return, me);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)) zf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      zf(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (st = e);
            break;
          }
          st = t.return;
        }
  }
  function ly(e, t, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ma(e, r), l & 4 && hs(5, r);
        break;
      case 1:
        if ((ma(e, r), l & 4))
          if (((e = r.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              Ye(r, r.return, g);
            }
          else {
            var c = ei(r.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Ye(r, r.return, g);
            }
          }
        l & 64 && ty(r), l & 512 && ps(r, r.return);
        break;
      case 3:
        if ((ma(e, r), l & 64 && ((e = r.updateQueue), e !== null))) {
          if (((t = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                t = r.child.stateNode;
                break;
              case 1:
                t = r.child.stateNode;
            }
          try {
            Yp(e, t);
          } catch (g) {
            Ye(r, r.return, g);
          }
        }
        break;
      case 27:
        t === null && l & 4 && ry(r);
      case 26:
      case 5:
        ma(e, r), t === null && l & 4 && ay(r), l & 512 && ps(r, r.return);
        break;
      case 12:
        ma(e, r);
        break;
      case 13:
        ma(e, r),
          l & 4 && cy(e, r),
          l & 64 &&
            ((e = r.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((r = yS.bind(null, r)), kS(e, r))));
        break;
      case 22:
        if (((l = r.memoizedState !== null || $n), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Je), (c = $n);
          var d = Je;
          ($n = l),
            (Je = t) && !d ? ya(e, r, (r.subtreeFlags & 8772) !== 0) : ma(e, r),
            ($n = c),
            (Je = d);
        }
        break;
      case 30:
        break;
      default:
        ma(e, r);
    }
  }
  function oy(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), oy(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Hu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ge = null,
    wt = !1;
  function Xn(e, t, r) {
    for (r = r.child; r !== null; ) uy(e, t, r), (r = r.sibling);
  }
  function uy(e, t, r) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount(zr, r);
      } catch {}
    switch (r.tag) {
      case 26:
        Je || bn(r, t),
          Xn(e, t, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        Je || bn(r, t);
        var l = Ge,
          c = wt;
        xa(r.type) && ((Ge = r.stateNode), (wt = !1)),
          Xn(e, t, r),
          Es(r.stateNode),
          (Ge = l),
          (wt = c);
        break;
      case 5:
        Je || bn(r, t);
      case 6:
        if (((l = Ge), (c = wt), (Ge = null), Xn(e, t, r), (Ge = l), (wt = c), Ge !== null))
          if (wt)
            try {
              (Ge.nodeType === 9
                ? Ge.body
                : Ge.nodeName === 'HTML'
                  ? Ge.ownerDocument.body
                  : Ge
              ).removeChild(r.stateNode);
            } catch (d) {
              Ye(r, t, d);
            }
          else
            try {
              Ge.removeChild(r.stateNode);
            } catch (d) {
              Ye(r, t, d);
            }
        break;
      case 18:
        Ge !== null &&
          (wt
            ? ((e = Ge),
              Jy(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                r.stateNode,
              ),
              Ds(e))
            : Jy(Ge, r.stateNode));
        break;
      case 4:
        (l = Ge),
          (c = wt),
          (Ge = r.stateNode.containerInfo),
          (wt = !0),
          Xn(e, t, r),
          (Ge = l),
          (wt = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Je || pa(2, r, t), Je || pa(4, r, t), Xn(e, t, r);
        break;
      case 1:
        Je ||
          (bn(r, t), (l = r.stateNode), typeof l.componentWillUnmount == 'function' && ny(r, t, l)),
          Xn(e, t, r);
        break;
      case 21:
        Xn(e, t, r);
        break;
      case 22:
        (Je = (l = Je) || r.memoizedState !== null), Xn(e, t, r), (Je = l);
        break;
      default:
        Xn(e, t, r);
    }
  }
  function cy(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ds(e);
      } catch (r) {
        Ye(t, t.return, r);
      }
  }
  function oS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new sy()), t;
      case 22:
        return (
          (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new sy()), t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function of(e, t) {
    var r = oS(e);
    t.forEach(function (l) {
      var c = vS.bind(null, e, l);
      r.has(l) || (r.add(l), l.then(c, c));
    });
  }
  function Lt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var c = r[l],
          d = e,
          g = t,
          _ = g;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (xa(_.type)) {
                (Ge = _.stateNode), (wt = !1);
                break e;
              }
              break;
            case 5:
              (Ge = _.stateNode), (wt = !1);
              break e;
            case 3:
            case 4:
              (Ge = _.stateNode.containerInfo), (wt = !0);
              break e;
          }
          _ = _.return;
        }
        if (Ge === null) throw Error(s(160));
        uy(d, g, c),
          (Ge = null),
          (wt = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) fy(t, e), (t = t.sibling);
  }
  var ln = null;
  function fy(e, t) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Lt(t, e), kt(e), l & 4 && (pa(3, e, e.return), hs(3, e), pa(5, e, e.return));
        break;
      case 1:
        Lt(t, e),
          kt(e),
          l & 512 && (Je || r === null || bn(r, r.return)),
          l & 64 &&
            $n &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? l : r.concat(l)))));
        break;
      case 26:
        var c = ln;
        if ((Lt(t, e), kt(e), l & 512 && (Je || r === null || bn(r, r.return)), l & 4)) {
          var d = r !== null ? r.memoizedState : null;
          if (((l = e.memoizedState), r === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type), (r = e.memoizedProps), (c = c.ownerDocument || c);
                  t: switch (l) {
                    case 'title':
                      (d = c.getElementsByTagName('title')[0]),
                        (!d ||
                          d[Br] ||
                          d[dt] ||
                          d.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          d.hasAttribute('itemprop')) &&
                          ((d = c.createElement(l)),
                          c.head.insertBefore(d, c.querySelector('head > title'))),
                        ct(d, l, r),
                        (d[dt] = e),
                        it(d),
                        (l = d);
                      break e;
                    case 'link':
                      var g = rv('link', 'href', c).get(l + (r.href || ''));
                      if (g) {
                        for (var _ = 0; _ < g.length; _++)
                          if (
                            ((d = g[_]),
                            d.getAttribute('href') ===
                              (r.href == null || r.href === '' ? null : r.href) &&
                              d.getAttribute('rel') === (r.rel == null ? null : r.rel) &&
                              d.getAttribute('title') === (r.title == null ? null : r.title) &&
                              d.getAttribute('crossorigin') ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            g.splice(_, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(l)), ct(d, l, r), c.head.appendChild(d);
                      break;
                    case 'meta':
                      if ((g = rv('meta', 'content', c).get(l + (r.content || '')))) {
                        for (_ = 0; _ < g.length; _++)
                          if (
                            ((d = g[_]),
                            d.getAttribute('content') ===
                              (r.content == null ? null : '' + r.content) &&
                              d.getAttribute('name') === (r.name == null ? null : r.name) &&
                              d.getAttribute('property') ===
                                (r.property == null ? null : r.property) &&
                              d.getAttribute('http-equiv') ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              d.getAttribute('charset') === (r.charSet == null ? null : r.charSet))
                          ) {
                            g.splice(_, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(l)), ct(d, l, r), c.head.appendChild(d);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (d[dt] = e), it(d), (l = d);
                }
                e.stateNode = l;
              } else sv(c, e.type, e.stateNode);
            else e.stateNode = iv(c, l, e.memoizedProps);
          else
            d !== l
              ? (d === null
                  ? r.stateNode !== null && ((r = r.stateNode), r.parentNode.removeChild(r))
                  : d.count--,
                l === null ? sv(c, e.type, e.stateNode) : iv(c, l, e.memoizedProps))
              : l === null && e.stateNode !== null && af(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        Lt(t, e),
          kt(e),
          l & 512 && (Je || r === null || bn(r, r.return)),
          r !== null && l & 4 && af(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if ((Lt(t, e), kt(e), l & 512 && (Je || r === null || bn(r, r.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            Ri(c, '');
          } catch (B) {
            Ye(e, e.return, B);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), af(e, c, r !== null ? r.memoizedProps : c)),
          l & 1024 && (lf = !0);
        break;
      case 6:
        if ((Lt(t, e), kt(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = l;
          } catch (B) {
            Ye(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          ((_o = null),
          (c = ln),
          (ln = go(t.containerInfo)),
          Lt(t, e),
          (ln = c),
          kt(e),
          l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Ds(t.containerInfo);
          } catch (B) {
            Ye(e, e.return, B);
          }
        lf && ((lf = !1), dy(e));
        break;
      case 4:
        (l = ln), (ln = go(e.stateNode.containerInfo)), Lt(t, e), kt(e), (ln = l);
        break;
      case 12:
        Lt(t, e), kt(e);
        break;
      case 13:
        Lt(t, e),
          kt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (r !== null && r.memoizedState !== null) &&
            (pf = qe()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), of(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var T = r !== null && r.memoizedState !== null,
          z = $n,
          P = Je;
        if ((($n = z || c), (Je = P || T), Lt(t, e), (Je = P), ($n = z), kt(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (r === null || T || $n || Je || ti(e)),
              r = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                T = r = t;
                try {
                  if (((d = T.stateNode), c))
                    (g = d.style),
                      typeof g.setProperty == 'function'
                        ? g.setProperty('display', 'none', 'important')
                        : (g.display = 'none');
                  else {
                    _ = T.stateNode;
                    var I = T.memoizedProps.style,
                      j = I != null && I.hasOwnProperty('display') ? I.display : null;
                    _.style.display = j == null || typeof j == 'boolean' ? '' : ('' + j).trim();
                  }
                } catch (B) {
                  Ye(T, T.return, B);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = c ? '' : T.memoizedProps;
                } catch (B) {
                  Ye(T, T.return, B);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              r === t && (r = null), (t = t.return);
            }
            r === t && (r = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null && ((r = l.retryQueue), r !== null && ((l.retryQueue = null), of(e, r))));
        break;
      case 19:
        Lt(t, e),
          kt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), of(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Lt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (iy(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(s(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode,
              d = rf(e);
            io(e, d, c);
            break;
          case 5:
            var g = r.stateNode;
            r.flags & 32 && (Ri(g, ''), (r.flags &= -33));
            var _ = rf(e);
            io(e, _, g);
            break;
          case 3:
          case 4:
            var T = r.stateNode.containerInfo,
              z = rf(e);
            sf(e, z, T);
            break;
          default:
            throw Error(s(161));
        }
      } catch (P) {
        Ye(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dy(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        dy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function ma(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) ly(e, t.alternate, t), (t = t.sibling);
  }
  function ti(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pa(4, t, t.return), ti(t);
          break;
        case 1:
          bn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == 'function' && ny(t, t.return, r), ti(t);
          break;
        case 27:
          Es(t.stateNode);
        case 26:
        case 5:
          bn(t, t.return), ti(t);
          break;
        case 22:
          t.memoizedState === null && ti(t);
          break;
        case 30:
          ti(t);
          break;
        default:
          ti(t);
      }
      e = e.sibling;
    }
  }
  function ya(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        c = e,
        d = t,
        g = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ya(c, d, r), hs(4, d);
          break;
        case 1:
          if ((ya(c, d, r), (l = d), (c = l.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (z) {
              Ye(l, l.return, z);
            }
          if (((l = d), (c = l.updateQueue), c !== null)) {
            var _ = l.stateNode;
            try {
              var T = c.shared.hiddenCallbacks;
              if (T !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < T.length; c++) Zp(T[c], _);
            } catch (z) {
              Ye(l, l.return, z);
            }
          }
          r && g & 64 && ty(d), ps(d, d.return);
          break;
        case 27:
          ry(d);
        case 26:
        case 5:
          ya(c, d, r), r && l === null && g & 4 && ay(d), ps(d, d.return);
          break;
        case 12:
          ya(c, d, r);
          break;
        case 13:
          ya(c, d, r), r && g & 4 && cy(c, d);
          break;
        case 22:
          d.memoizedState === null && ya(c, d, r), ps(d, d.return);
          break;
        case 30:
          break;
        default:
          ya(c, d, r);
      }
      t = t.sibling;
    }
  }
  function uf(e, t) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Wr(r));
  }
  function cf(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Wr(e));
  }
  function _n(e, t, r, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) hy(e, t, r, l), (t = t.sibling);
  }
  function hy(e, t, r, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _n(e, t, r, l), c & 2048 && hs(9, t);
        break;
      case 1:
        _n(e, t, r, l);
        break;
      case 3:
        _n(e, t, r, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Wr(e)));
        break;
      case 12:
        if (c & 2048) {
          _n(e, t, r, l), (e = t.stateNode);
          try {
            var d = t.memoizedProps,
              g = d.id,
              _ = d.onPostCommit;
            typeof _ == 'function' &&
              _(g, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (T) {
            Ye(t, t.return, T);
          }
        } else _n(e, t, r, l);
        break;
      case 13:
        _n(e, t, r, l);
        break;
      case 23:
        break;
      case 22:
        (d = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? d._visibility & 2
              ? _n(e, t, r, l)
              : ms(e, t)
            : d._visibility & 2
              ? _n(e, t, r, l)
              : ((d._visibility |= 2), $i(e, t, r, l, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && uf(g, t);
        break;
      case 24:
        _n(e, t, r, l), c & 2048 && cf(t.alternate, t);
        break;
      default:
        _n(e, t, r, l);
    }
  }
  function $i(e, t, r, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e,
        g = t,
        _ = r,
        T = l,
        z = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          $i(d, g, _, T, c), hs(8, g);
          break;
        case 23:
          break;
        case 22:
          var P = g.stateNode;
          g.memoizedState !== null
            ? P._visibility & 2
              ? $i(d, g, _, T, c)
              : ms(d, g)
            : ((P._visibility |= 2), $i(d, g, _, T, c)),
            c && z & 2048 && uf(g.alternate, g);
          break;
        case 24:
          $i(d, g, _, T, c), c && z & 2048 && cf(g.alternate, g);
          break;
        default:
          $i(d, g, _, T, c);
      }
      t = t.sibling;
    }
  }
  function ms(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            ms(r, l), c & 2048 && uf(l.alternate, l);
            break;
          case 24:
            ms(r, l), c & 2048 && cf(l.alternate, l);
            break;
          default:
            ms(r, l);
        }
        t = t.sibling;
      }
  }
  var ys = 8192;
  function Xi(e) {
    if (e.subtreeFlags & ys) for (e = e.child; e !== null; ) py(e), (e = e.sibling);
  }
  function py(e) {
    switch (e.tag) {
      case 26:
        Xi(e), e.flags & ys && e.memoizedState !== null && XS(ln, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Xi(e);
        break;
      case 3:
      case 4:
        var t = ln;
        (ln = go(e.stateNode.containerInfo)), Xi(e), (ln = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ys), (ys = 16777216), Xi(e), (ys = t))
            : Xi(e));
        break;
      default:
        Xi(e);
    }
  }
  function my(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function vs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          (st = l), vy(l, e);
        }
      my(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) yy(e), (e = e.sibling);
  }
  function yy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vs(e), e.flags & 2048 && pa(9, e, e.return);
        break;
      case 3:
        vs(e);
        break;
      case 12:
        vs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ro(e))
          : vs(e);
        break;
      default:
        vs(e);
    }
  }
  function ro(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          (st = l), vy(l, e);
        }
      my(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          pa(8, t, t.return), ro(t);
          break;
        case 22:
          (r = t.stateNode), r._visibility & 2 && ((r._visibility &= -3), ro(t));
          break;
        default:
          ro(t);
      }
      e = e.sibling;
    }
  }
  function vy(e, t) {
    for (; st !== null; ) {
      var r = st;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          pa(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Wr(r.memoizedState.cache);
      }
      if (((l = r.child), l !== null)) (l.return = r), (st = l);
      else
        e: for (r = e; st !== null; ) {
          l = st;
          var c = l.sibling,
            d = l.return;
          if ((oy(l), l === r)) {
            st = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (st = c);
            break e;
          }
          st = d;
        }
    }
  }
  var uS = {
      getCacheForType: function (e) {
        var t = ht(nt),
          r = t.data.get(e);
        return r === void 0 && ((r = e()), t.data.set(e, r)), r;
      },
    },
    cS = typeof WeakMap == 'function' ? WeakMap : Map,
    je = 0,
    Pe = null,
    Ae = null,
    Ce = 0,
    Ue = 0,
    zt = null,
    va = !1,
    Ii = !1,
    ff = !1,
    In = 0,
    Qe = 0,
    ga = 0,
    ni = 0,
    df = 0,
    Wt = 0,
    Qi = 0,
    gs = null,
    At = null,
    hf = !1,
    pf = 0,
    so = 1 / 0,
    lo = null,
    ba = null,
    ut = 0,
    _a = null,
    Ki = null,
    Ji = 0,
    mf = 0,
    yf = null,
    gy = null,
    bs = 0,
    vf = null;
  function jt() {
    if ((je & 2) !== 0 && Ce !== 0) return Ce & -Ce;
    if (N.T !== null) {
      var e = Bi;
      return e !== 0 ? e : Tf();
    }
    return kh();
  }
  function by() {
    Wt === 0 && (Wt = (Ce & 536870912) === 0 || Ne ? Mh() : 536870912);
    var e = Ft.current;
    return e !== null && (e.flags |= 32), Wt;
  }
  function Ut(e, t, r) {
    ((e === Pe && (Ue === 2 || Ue === 9)) || e.cancelPendingCommit !== null) &&
      (Fi(e, 0), Sa(e, Ce, Wt, !1)),
      Ur(e, r),
      ((je & 2) === 0 || e !== Pe) &&
        (e === Pe && ((je & 2) === 0 && (ni |= r), Qe === 4 && Sa(e, Ce, Wt, !1)), Sn(e));
  }
  function _y(e, t, r) {
    if ((je & 6) !== 0) throw Error(s(327));
    var l = (!r && (t & 124) === 0 && (t & e.expiredLanes) === 0) || jr(e, t),
      c = l ? hS(e, t) : _f(e, t, !0),
      d = l;
    do {
      if (c === 0) {
        Ii && !l && Sa(e, t, 0, !1);
        break;
      } else {
        if (((r = e.current.alternate), d && !fS(r))) {
          (c = _f(e, t, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = t), e.errorRecoveryDisabledLanes & d)) var g = 0;
          else (g = e.pendingLanes & -536870913), (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var _ = e;
              c = gs;
              var T = _.current.memoizedState.isDehydrated;
              if ((T && (Fi(_, g).flags |= 256), (g = _f(_, g, !1)), g !== 2)) {
                if (ff && !T) {
                  (_.errorRecoveryDisabledLanes |= d), (ni |= d), (c = 4);
                  break e;
                }
                (d = At), (At = c), d !== null && (At === null ? (At = d) : At.push.apply(At, d));
              }
              c = g;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Fi(e, 0), Sa(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (d = c), d)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Sa(l, t, Wt, !va);
              break e;
            case 2:
              At = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((c = pf + 300 - qe()), 10 < c)) {
            if ((Sa(l, t, Wt, !va), gl(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Qy(
              Sy.bind(null, l, r, At, lo, hf, t, Wt, ni, Qi, va, d, 2, -0, 0),
              c,
            );
            break e;
          }
          Sy(l, r, At, lo, hf, t, Wt, ni, Qi, va, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Sn(e);
  }
  function Sy(e, t, r, l, c, d, g, _, T, z, P, I, j, B) {
    if (
      ((e.timeoutHandle = -1),
      (I = t.subtreeFlags),
      (I & 8192 || (I & 16785408) === 16785408) &&
        ((As = { stylesheets: null, count: 0, unsuspend: $S }), py(t), (I = IS()), I !== null))
    ) {
      (e.cancelPendingCommit = I(Oy.bind(null, e, t, d, r, l, c, g, _, T, P, 1, j, B))),
        Sa(e, d, g, !z);
      return;
    }
    Oy(e, t, d, r, l, c, g, _, T);
  }
  function fS(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        t.flags & 16384 &&
        ((r = t.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var l = 0; l < r.length; l++) {
          var c = r[l],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!Dt(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Sa(e, t, r, l) {
    (t &= ~df),
      (t &= ~ni),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var d = 31 - Mt(c),
        g = 1 << d;
      (l[d] = -1), (c &= ~g);
    }
    r !== 0 && Nh(e, r, t);
  }
  function oo() {
    return (je & 6) === 0 ? (_s(0), !1) : !0;
  }
  function gf() {
    if (Ae !== null) {
      if (Ue === 0) var e = Ae.return;
      else (e = Ae), (Vn = Ka = null), kc(e), (Pi = null), (cs = 0), (e = Ae);
      for (; e !== null; ) ey(e.alternate, e), (e = e.return);
      Ae = null;
    }
  }
  function Fi(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), CS(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      gf(),
      (Pe = e),
      (Ae = r = Un(e.current, null)),
      (Ce = t),
      (Ue = 0),
      (zt = null),
      (va = !1),
      (Ii = jr(e, t)),
      (ff = !1),
      (Qi = Wt = df = ni = ga = Qe = 0),
      (At = gs = null),
      (hf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - Mt(l),
          d = 1 << c;
        (t |= e[c]), (l &= ~d);
      }
    return (In = t), Ml(), r;
  }
  function xy(e, t) {
    (Te = null),
      (N.H = Ql),
      t === ts || t === Hl
        ? ((t = Hp()), (Ue = 3))
        : t === jp
          ? ((t = Hp()), (Ue = 4))
          : (Ue =
              t === Vm
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (zt = t),
      Ae === null && ((Qe = 1), eo(e, It(t, e.current)));
  }
  function Ey() {
    var e = N.H;
    return (N.H = Ql), e === null ? Ql : e;
  }
  function Ty() {
    var e = N.A;
    return (N.A = uS), e;
  }
  function bf() {
    (Qe = 4),
      va || ((Ce & 4194048) !== Ce && Ft.current !== null) || (Ii = !0),
      ((ga & 134217727) === 0 && (ni & 134217727) === 0) || Pe === null || Sa(Pe, Ce, Wt, !1);
  }
  function _f(e, t, r) {
    var l = je;
    je |= 2;
    var c = Ey(),
      d = Ty();
    (Pe !== e || Ce !== t) && ((lo = null), Fi(e, t)), (t = !1);
    var g = Qe;
    e: do
      try {
        if (Ue !== 0 && Ae !== null) {
          var _ = Ae,
            T = zt;
          switch (Ue) {
            case 8:
              gf(), (g = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ft.current === null && (t = !0);
              var z = Ue;
              if (((Ue = 0), (zt = null), Wi(e, _, T, z), r && Ii)) {
                g = 0;
                break e;
              }
              break;
            default:
              (z = Ue), (Ue = 0), (zt = null), Wi(e, _, T, z);
          }
        }
        dS(), (g = Qe);
        break;
      } catch (P) {
        xy(e, P);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Vn = Ka = null),
      (je = l),
      (N.H = c),
      (N.A = d),
      Ae === null && ((Pe = null), (Ce = 0), Ml()),
      g
    );
  }
  function dS() {
    for (; Ae !== null; ) wy(Ae);
  }
  function hS(e, t) {
    var r = je;
    je |= 2;
    var l = Ey(),
      c = Ty();
    Pe !== e || Ce !== t ? ((lo = null), (so = qe() + 500), Fi(e, t)) : (Ii = jr(e, t));
    e: do
      try {
        if (Ue !== 0 && Ae !== null) {
          t = Ae;
          var d = zt;
          t: switch (Ue) {
            case 1:
              (Ue = 0), (zt = null), Wi(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (Up(d)) {
                (Ue = 0), (zt = null), Ay(t);
                break;
              }
              (t = function () {
                (Ue !== 2 && Ue !== 9) || Pe !== e || (Ue = 7), Sn(e);
              }),
                d.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              Up(d) ? ((Ue = 0), (zt = null), Ay(t)) : ((Ue = 0), (zt = null), Wi(e, t, d, 7));
              break;
            case 5:
              var g = null;
              switch (Ae.tag) {
                case 26:
                  g = Ae.memoizedState;
                case 5:
                case 27:
                  var _ = Ae;
                  if (!g || lv(g)) {
                    (Ue = 0), (zt = null);
                    var T = _.sibling;
                    if (T !== null) Ae = T;
                    else {
                      var z = _.return;
                      z !== null ? ((Ae = z), uo(z)) : (Ae = null);
                    }
                    break t;
                  }
              }
              (Ue = 0), (zt = null), Wi(e, t, d, 5);
              break;
            case 6:
              (Ue = 0), (zt = null), Wi(e, t, d, 6);
              break;
            case 8:
              gf(), (Qe = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        pS();
        break;
      } catch (P) {
        xy(e, P);
      }
    while (!0);
    return (
      (Vn = Ka = null),
      (N.H = l),
      (N.A = c),
      (je = r),
      Ae !== null ? 0 : ((Pe = null), (Ce = 0), Ml(), Qe)
    );
  }
  function pS() {
    for (; Ae !== null && !Fe(); ) wy(Ae);
  }
  function wy(e) {
    var t = Fm(e.alternate, e, In);
    (e.memoizedProps = e.pendingProps), t === null ? uo(e) : (Ae = t);
  }
  function Ay(e) {
    var t = e,
      r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = $m(r, t, t.pendingProps, t.type, void 0, Ce);
        break;
      case 11:
        t = $m(r, t, t.pendingProps, t.type.render, t.ref, Ce);
        break;
      case 5:
        kc(t);
      default:
        ey(r, t), (t = Ae = Rp(t, In)), (t = Fm(r, t, In));
    }
    (e.memoizedProps = e.pendingProps), t === null ? uo(e) : (Ae = t);
  }
  function Wi(e, t, r, l) {
    (Vn = Ka = null), kc(t), (Pi = null), (cs = 0);
    var c = t.return;
    try {
      if (aS(e, c, t, r, Ce)) {
        (Qe = 1), eo(e, It(r, e.current)), (Ae = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((Ae = c), d);
      (Qe = 1), eo(e, It(r, e.current)), (Ae = null);
      return;
    }
    t.flags & 32768
      ? (Ne || l === 1
          ? (e = !0)
          : Ii || (Ce & 536870912) !== 0
            ? (e = !1)
            : ((va = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Ft.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Ry(t, e))
      : uo(t);
  }
  function uo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ry(t, va);
        return;
      }
      e = t.return;
      var r = rS(t.alternate, t, In);
      if (r !== null) {
        Ae = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Ry(e, t) {
    do {
      var r = sS(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (Ae = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null && ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ae = e;
        return;
      }
      Ae = e = r;
    } while (e !== null);
    (Qe = 6), (Ae = null);
  }
  function Oy(e, t, r, l, c, d, g, _, T) {
    e.cancelPendingCommit = null;
    do co();
    while (ut !== 0);
    if ((je & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((d = t.lanes | t.childLanes),
        (d |= uc),
        $b(e, r, d, g, _, T),
        e === Pe && ((Ae = Pe = null), (Ce = 0)),
        (Ki = t),
        (_a = e),
        (Ji = r),
        (mf = d),
        (yf = c),
        (gy = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            gS(gi, function () {
              return Ly(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = N.T), (N.T = null), (c = G.p), (G.p = 2), (g = je), (je |= 4);
        try {
          lS(e, t, r);
        } finally {
          (je = g), (G.p = c), (N.T = l);
        }
      }
      (ut = 1), Cy(), My(), Dy();
    }
  }
  function Cy() {
    if (ut === 1) {
      ut = 0;
      var e = _a,
        t = Ki,
        r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        (r = N.T), (N.T = null);
        var l = G.p;
        G.p = 2;
        var c = je;
        je |= 4;
        try {
          fy(t, e);
          var d = Nf,
            g = vp(e.containerInfo),
            _ = d.focusedElem,
            T = d.selectionRange;
          if (g !== _ && _ && _.ownerDocument && yp(_.ownerDocument.documentElement, _)) {
            if (T !== null && ic(_)) {
              var z = T.start,
                P = T.end;
              if ((P === void 0 && (P = z), 'selectionStart' in _))
                (_.selectionStart = z), (_.selectionEnd = Math.min(P, _.value.length));
              else {
                var I = _.ownerDocument || document,
                  j = (I && I.defaultView) || window;
                if (j.getSelection) {
                  var B = j.getSelection(),
                    be = _.textContent.length,
                    me = Math.min(T.start, be),
                    Ve = T.end === void 0 ? me : Math.min(T.end, be);
                  !B.extend && me > Ve && ((g = Ve), (Ve = me), (me = g));
                  var D = mp(_, me),
                    O = mp(_, Ve);
                  if (
                    D &&
                    O &&
                    (B.rangeCount !== 1 ||
                      B.anchorNode !== D.node ||
                      B.anchorOffset !== D.offset ||
                      B.focusNode !== O.node ||
                      B.focusOffset !== O.offset)
                  ) {
                    var k = I.createRange();
                    k.setStart(D.node, D.offset),
                      B.removeAllRanges(),
                      me > Ve
                        ? (B.addRange(k), B.extend(O.node, O.offset))
                        : (k.setEnd(O.node, O.offset), B.addRange(k));
                  }
                }
              }
            }
            for (I = [], B = _; (B = B.parentNode); )
              B.nodeType === 1 && I.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
            for (typeof _.focus == 'function' && _.focus(), _ = 0; _ < I.length; _++) {
              var $ = I[_];
              ($.element.scrollLeft = $.left), ($.element.scrollTop = $.top);
            }
          }
          (Eo = !!Df), (Nf = Df = null);
        } finally {
          (je = c), (G.p = l), (N.T = r);
        }
      }
      (e.current = t), (ut = 2);
    }
  }
  function My() {
    if (ut === 2) {
      ut = 0;
      var e = _a,
        t = Ki,
        r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        (r = N.T), (N.T = null);
        var l = G.p;
        G.p = 2;
        var c = je;
        je |= 4;
        try {
          ly(e, t.alternate, t);
        } finally {
          (je = c), (G.p = l), (N.T = r);
        }
      }
      ut = 3;
    }
  }
  function Dy() {
    if (ut === 4 || ut === 3) {
      (ut = 0), Gt();
      var e = _a,
        t = Ki,
        r = Ji,
        l = gy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ut = 5)
        : ((ut = 0), (Ki = _a = null), Ny(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (ba = null),
        Uu(r),
        (t = t.stateNode),
        Ct && typeof Ct.onCommitFiberRoot == 'function')
      )
        try {
          Ct.onCommitFiberRoot(zr, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = N.T), (c = G.p), (G.p = 2), (N.T = null);
        try {
          for (var d = e.onRecoverableError, g = 0; g < l.length; g++) {
            var _ = l[g];
            d(_.value, { componentStack: _.stack });
          }
        } finally {
          (N.T = t), (G.p = c);
        }
      }
      (Ji & 3) !== 0 && co(),
        Sn(e),
        (c = e.pendingLanes),
        (r & 4194090) !== 0 && (c & 42) !== 0 ? (e === vf ? bs++ : ((bs = 0), (vf = e))) : (bs = 0),
        _s(0);
    }
  }
  function Ny(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Wr(t)));
  }
  function co(e) {
    return Cy(), My(), Dy(), Ly();
  }
  function Ly() {
    if (ut !== 5) return !1;
    var e = _a,
      t = mf;
    mf = 0;
    var r = Uu(Ji),
      l = N.T,
      c = G.p;
    try {
      (G.p = 32 > r ? 32 : r), (N.T = null), (r = yf), (yf = null);
      var d = _a,
        g = Ji;
      if (((ut = 0), (Ki = _a = null), (Ji = 0), (je & 6) !== 0)) throw Error(s(331));
      var _ = je;
      if (
        ((je |= 4),
        yy(d.current),
        hy(d, d.current, g, r),
        (je = _),
        _s(0, !1),
        Ct && typeof Ct.onPostCommitFiberRoot == 'function')
      )
        try {
          Ct.onPostCommitFiberRoot(zr, d);
        } catch {}
      return !0;
    } finally {
      (G.p = c), (N.T = l), Ny(e, t);
    }
  }
  function ky(e, t, r) {
    (t = It(r, t)), (t = Ic(e.stateNode, t, 2)), (e = ca(e, t, 2)), e !== null && (Ur(e, 2), Sn(e));
  }
  function Ye(e, t, r) {
    if (e.tag === 3) ky(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ky(t, e, r);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (ba === null || !ba.has(l)))
          ) {
            (e = It(r, e)),
              (r = Bm(2)),
              (l = ca(t, r, 2)),
              l !== null && (Hm(r, l, t, e), Ur(l, 2), Sn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sf(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new cS();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(r) || ((ff = !0), c.add(r), (e = mS.bind(null, e, t, r)), t.then(e, e));
  }
  function mS(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      Pe === e &&
        (Ce & r) === r &&
        (Qe === 4 || (Qe === 3 && (Ce & 62914560) === Ce && 300 > qe() - pf)
          ? (je & 2) === 0 && Fi(e, 0)
          : (df |= r),
        Qi === Ce && (Qi = 0)),
      Sn(e);
  }
  function zy(e, t) {
    t === 0 && (t = Dh()), (e = ki(e, t)), e !== null && (Ur(e, t), Sn(e));
  }
  function yS(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), zy(e, r);
  }
  function vS(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (r = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(t), zy(e, r);
  }
  function gS(e, t) {
    return St(e, t);
  }
  var fo = null,
    er = null,
    xf = !1,
    ho = !1,
    Ef = !1,
    ai = 0;
  function Sn(e) {
    e !== er && e.next === null && (er === null ? (fo = er = e) : (er = er.next = e)),
      (ho = !0),
      xf || ((xf = !0), _S());
  }
  function _s(e, t) {
    if (!Ef && ho) {
      Ef = !0;
      do
        for (var r = !1, l = fo; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var g = l.suspendedLanes,
                _ = l.pingedLanes;
              (d = (1 << (31 - Mt(42 | e) + 1)) - 1),
                (d &= c & ~(g & ~_)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((r = !0), Hy(l, d));
          } else
            (d = Ce),
              (d = gl(
                l,
                l === Pe ? d : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || jr(l, d) || ((r = !0), Hy(l, d));
          l = l.next;
        }
      while (r);
      Ef = !1;
    }
  }
  function bS() {
    jy();
  }
  function jy() {
    ho = xf = !1;
    var e = 0;
    ai !== 0 && (OS() && (e = ai), (ai = 0));
    for (var t = qe(), r = null, l = fo; l !== null; ) {
      var c = l.next,
        d = Uy(l, t);
      d === 0
        ? ((l.next = null), r === null ? (fo = c) : (r.next = c), c === null && (er = r))
        : ((r = l), (e !== 0 || (d & 3) !== 0) && (ho = !0)),
        (l = c);
    }
    _s(e);
  }
  function Uy(e, t) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var g = 31 - Mt(d),
        _ = 1 << g,
        T = c[g];
      T === -1
        ? ((_ & r) === 0 || (_ & l) !== 0) && (c[g] = Gb(_, t))
        : T <= t && (e.expiredLanes |= _),
        (d &= ~_);
    }
    if (
      ((t = Pe),
      (r = Ce),
      (r = gl(e, e === t ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      r === 0 || (e === t && (Ue === 2 || Ue === 9)) || e.cancelPendingCommit !== null)
    )
      return l !== null && l !== null && gt(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((r & 3) === 0 || jr(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t;
      switch ((l !== null && gt(l), Uu(r))) {
        case 2:
        case 8:
          r = ml;
          break;
        case 32:
          r = gi;
          break;
        case 268435456:
          r = bi;
          break;
        default:
          r = gi;
      }
      return (
        (l = By.bind(null, e)), (r = St(r, l)), (e.callbackPriority = t), (e.callbackNode = r), t
      );
    }
    return l !== null && l !== null && gt(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function By(e, t) {
    if (ut !== 0 && ut !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var r = e.callbackNode;
    if (co() && e.callbackNode !== r) return null;
    var l = Ce;
    return (
      (l = gl(e, e === Pe ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : (_y(e, l, t),
          Uy(e, qe()),
          e.callbackNode != null && e.callbackNode === r ? By.bind(null, e) : null)
    );
  }
  function Hy(e, t) {
    if (co()) return null;
    _y(e, t, !0);
  }
  function _S() {
    MS(function () {
      (je & 6) !== 0 ? St(kn, bS) : jy();
    });
  }
  function Tf() {
    return ai === 0 && (ai = Mh()), ai;
  }
  function Vy(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : El('' + e);
  }
  function Zy(e, t) {
    var r = t.ownerDocument.createElement('input');
    return (
      (r.name = t.name),
      (r.value = t.value),
      e.id && r.setAttribute('form', e.id),
      t.parentNode.insertBefore(r, t),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function SS(e, t, r, l, c) {
    if (t === 'submit' && r && r.stateNode === c) {
      var d = Vy((c[xt] || null).action),
        g = l.submitter;
      g &&
        ((t = (t = g[xt] || null) ? Vy(t.formAction) : g.getAttribute('formAction')),
        t !== null && ((d = t), (g = null)));
      var _ = new Rl('action', 'action', null, l, c);
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ai !== 0) {
                  var T = g ? Zy(c, g) : new FormData(c);
                  qc(r, { pending: !0, data: T, method: c.method, action: d }, null, T);
                }
              } else
                typeof d == 'function' &&
                  (_.preventDefault(),
                  (T = g ? Zy(c, g) : new FormData(c)),
                  qc(r, { pending: !0, data: T, method: c.method, action: d }, d, T));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var wf = 0; wf < oc.length; wf++) {
    var Af = oc[wf],
      xS = Af.toLowerCase(),
      ES = Af[0].toUpperCase() + Af.slice(1);
    sn(xS, 'on' + ES);
  }
  sn(_p, 'onAnimationEnd'),
    sn(Sp, 'onAnimationIteration'),
    sn(xp, 'onAnimationStart'),
    sn('dblclick', 'onDoubleClick'),
    sn('focusin', 'onFocus'),
    sn('focusout', 'onBlur'),
    sn(V_, 'onTransitionRun'),
    sn(Z_, 'onTransitionStart'),
    sn(Y_, 'onTransitionCancel'),
    sn(Ep, 'onTransitionEnd'),
    Ti('onMouseEnter', ['mouseout', 'mouseover']),
    Ti('onMouseLeave', ['mouseout', 'mouseover']),
    Ti('onPointerEnter', ['pointerout', 'pointerover']),
    Ti('onPointerLeave', ['pointerout', 'pointerover']),
    Za('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Za(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Za('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Za('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Za(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Za(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var Ss =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    TS = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ss),
    );
  function Yy(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g],
              T = _.instance,
              z = _.currentTarget;
            if (((_ = _.listener), T !== d && c.isPropagationStopped())) break e;
            (d = _), (c.currentTarget = z);
            try {
              d(c);
            } catch (P) {
              Wl(P);
            }
            (c.currentTarget = null), (d = T);
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((_ = l[g]),
              (T = _.instance),
              (z = _.currentTarget),
              (_ = _.listener),
              T !== d && c.isPropagationStopped())
            )
              break e;
            (d = _), (c.currentTarget = z);
            try {
              d(c);
            } catch (P) {
              Wl(P);
            }
            (c.currentTarget = null), (d = T);
          }
      }
    }
  }
  function Re(e, t) {
    var r = t[Bu];
    r === void 0 && (r = t[Bu] = new Set());
    var l = e + '__bubble';
    r.has(l) || (qy(t, e, 2, !1), r.add(l));
  }
  function Rf(e, t, r) {
    var l = 0;
    t && (l |= 4), qy(r, e, l, t);
  }
  var po = '_reactListening' + Math.random().toString(36).slice(2);
  function Of(e) {
    if (!e[po]) {
      (e[po] = !0),
        jh.forEach(function (r) {
          r !== 'selectionchange' && (TS.has(r) || Rf(r, !1, e), Rf(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[po] || ((t[po] = !0), Rf('selectionchange', !1, t));
    }
  }
  function qy(e, t, r, l) {
    switch (hv(t)) {
      case 2:
        var c = JS;
        break;
      case 8:
        c = FS;
        break;
      default:
        c = Yf;
    }
    (r = c.bind(null, t, r, e)),
      (c = void 0),
      !Qu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: c })
          : e.addEventListener(t, r, !0)
        : c !== void 0
          ? e.addEventListener(t, r, { passive: c })
          : e.addEventListener(t, r, !1);
  }
  function Cf(e, t, r, l, c) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var g = l.tag;
        if (g === 3 || g === 4) {
          var _ = l.stateNode.containerInfo;
          if (_ === c) break;
          if (g === 4)
            for (g = l.return; g !== null; ) {
              var T = g.tag;
              if ((T === 3 || T === 4) && g.stateNode.containerInfo === c) return;
              g = g.return;
            }
          for (; _ !== null; ) {
            if (((g = Si(_)), g === null)) return;
            if (((T = g.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = d = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    Kh(function () {
      var z = d,
        P = Xu(r),
        I = [];
      e: {
        var j = Tp.get(e);
        if (j !== void 0) {
          var B = Rl,
            be = e;
          switch (e) {
            case 'keypress':
              if (wl(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = g_;
              break;
            case 'focusin':
              (be = 'focus'), (B = Wu);
              break;
            case 'focusout':
              (be = 'blur'), (B = Wu);
              break;
            case 'beforeblur':
            case 'afterblur':
              B = Wu;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              B = Wh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              B = s_;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              B = S_;
              break;
            case _p:
            case Sp:
            case xp:
              B = u_;
              break;
            case Ep:
              B = E_;
              break;
            case 'scroll':
            case 'scrollend':
              B = i_;
              break;
            case 'wheel':
              B = w_;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              B = f_;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              B = tp;
              break;
            case 'toggle':
            case 'beforetoggle':
              B = R_;
          }
          var me = (t & 4) !== 0,
            Ve = !me && (e === 'scroll' || e === 'scrollend'),
            D = me ? (j !== null ? j + 'Capture' : null) : j;
          me = [];
          for (var O = z, k; O !== null; ) {
            var $ = O;
            if (
              ((k = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                k === null ||
                D === null ||
                (($ = Vr(O, D)), $ != null && me.push(xs(O, $, k))),
              Ve)
            )
              break;
            O = O.return;
          }
          0 < me.length && ((j = new B(j, be, null, r, P)), I.push({ event: j, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (B = e === 'mouseout' || e === 'pointerout'),
            j && r !== $u && (be = r.relatedTarget || r.fromElement) && (Si(be) || be[_i]))
          )
            break e;
          if (
            (B || j) &&
            ((j =
              P.window === P
                ? P
                : (j = P.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            B
              ? ((be = r.relatedTarget || r.toElement),
                (B = z),
                (be = be ? Si(be) : null),
                be !== null &&
                  ((Ve = u(be)), (me = be.tag), be !== Ve || (me !== 5 && me !== 27 && me !== 6)) &&
                  (be = null))
              : ((B = null), (be = z)),
            B !== be)
          ) {
            if (
              ((me = Wh),
              ($ = 'onMouseLeave'),
              (D = 'onMouseEnter'),
              (O = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = tp), ($ = 'onPointerLeave'), (D = 'onPointerEnter'), (O = 'pointer')),
              (Ve = B == null ? j : Hr(B)),
              (k = be == null ? j : Hr(be)),
              (j = new me($, O + 'leave', B, r, P)),
              (j.target = Ve),
              (j.relatedTarget = k),
              ($ = null),
              Si(P) === z &&
                ((me = new me(D, O + 'enter', be, r, P)),
                (me.target = k),
                (me.relatedTarget = Ve),
                ($ = me)),
              (Ve = $),
              B && be)
            )
              t: {
                for (me = B, D = be, O = 0, k = me; k; k = tr(k)) O++;
                for (k = 0, $ = D; $; $ = tr($)) k++;
                for (; 0 < O - k; ) (me = tr(me)), O--;
                for (; 0 < k - O; ) (D = tr(D)), k--;
                for (; O--; ) {
                  if (me === D || (D !== null && me === D.alternate)) break t;
                  (me = tr(me)), (D = tr(D));
                }
                me = null;
              }
            else me = null;
            B !== null && Py(I, j, B, me, !1), be !== null && Ve !== null && Py(I, Ve, be, me, !0);
          }
        }
        e: {
          if (
            ((j = z ? Hr(z) : window),
            (B = j.nodeName && j.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && j.type === 'file'))
          )
            var oe = up;
          else if (lp(j))
            if (cp) oe = U_;
            else {
              oe = z_;
              var we = k_;
            }
          else
            (B = j.nodeName),
              !B || B.toLowerCase() !== 'input' || (j.type !== 'checkbox' && j.type !== 'radio')
                ? z && Gu(z.elementType) && (oe = up)
                : (oe = j_);
          if (oe && (oe = oe(e, z))) {
            op(I, oe, r, P);
            break e;
          }
          we && we(e, j, z),
            e === 'focusout' &&
              z &&
              j.type === 'number' &&
              z.memoizedProps.value != null &&
              Pu(j, 'number', j.value);
        }
        switch (((we = z ? Hr(z) : window), e)) {
          case 'focusin':
            (lp(we) || we.contentEditable === 'true') && ((Di = we), (rc = z), (Ir = null));
            break;
          case 'focusout':
            Ir = rc = Di = null;
            break;
          case 'mousedown':
            sc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (sc = !1), gp(I, r, P);
            break;
          case 'selectionchange':
            if (H_) break;
          case 'keydown':
          case 'keyup':
            gp(I, r, P);
        }
        var he;
        if (tc)
          e: {
            switch (e) {
              case 'compositionstart':
                var ye = 'onCompositionStart';
                break e;
              case 'compositionend':
                ye = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ye = 'onCompositionUpdate';
                break e;
            }
            ye = void 0;
          }
        else
          Mi
            ? rp(e, r) && (ye = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (ye = 'onCompositionStart');
        ye &&
          (np &&
            r.locale !== 'ko' &&
            (Mi || ye !== 'onCompositionStart'
              ? ye === 'onCompositionEnd' && Mi && (he = Jh())
              : ((sa = P), (Ku = 'value' in sa ? sa.value : sa.textContent), (Mi = !0))),
          (we = mo(z, ye)),
          0 < we.length &&
            ((ye = new ep(ye, e, null, r, P)),
            I.push({ event: ye, listeners: we }),
            he ? (ye.data = he) : ((he = sp(r)), he !== null && (ye.data = he)))),
          (he = C_ ? M_(e, r) : D_(e, r)) &&
            ((ye = mo(z, 'onBeforeInput')),
            0 < ye.length &&
              ((we = new ep('onBeforeInput', 'beforeinput', null, r, P)),
              I.push({ event: we, listeners: ye }),
              (we.data = he))),
          SS(I, e, z, r, P);
      }
      Yy(I, t);
    });
  }
  function xs(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function mo(e, t) {
    for (var r = t + 'Capture', l = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = Vr(e, r)),
          c != null && l.unshift(xs(e, c, d)),
          (c = Vr(e, t)),
          c != null && l.push(xs(e, c, d))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function tr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Py(e, t, r, l, c) {
    for (var d = t._reactName, g = []; r !== null && r !== l; ) {
      var _ = r,
        T = _.alternate,
        z = _.stateNode;
      if (((_ = _.tag), T !== null && T === l)) break;
      (_ !== 5 && _ !== 26 && _ !== 27) ||
        z === null ||
        ((T = z),
        c
          ? ((z = Vr(r, d)), z != null && g.unshift(xs(r, z, T)))
          : c || ((z = Vr(r, d)), z != null && g.push(xs(r, z, T)))),
        (r = r.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var wS = /\r\n?/g,
    AS = /\u0000|\uFFFD/g;
  function Gy(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        wS,
        `
`,
      )
      .replace(AS, '');
  }
  function $y(e, t) {
    return (t = Gy(t)), Gy(e) === t;
  }
  function yo() {}
  function He(e, t, r, l, c, d) {
    switch (r) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || Ri(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && Ri(e, '' + l);
        break;
      case 'className':
        _l(e, 'class', l);
        break;
      case 'tabIndex':
        _l(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        _l(e, r, l);
        break;
      case 'style':
        Ih(e, l, d);
        break;
      case 'data':
        if (t !== 'object') {
          _l(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || r !== 'href')) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        (l = El('' + l)), e.setAttribute(r, l);
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == 'function' &&
            (r === 'formAction'
              ? (t !== 'input' && He(e, t, 'name', c.name, c, null),
                He(e, t, 'formEncType', c.formEncType, c, null),
                He(e, t, 'formMethod', c.formMethod, c, null),
                He(e, t, 'formTarget', c.formTarget, c, null))
              : (He(e, t, 'encType', c.encType, c, null),
                He(e, t, 'method', c.method, c, null),
                He(e, t, 'target', c.target, c, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        (l = El('' + l)), e.setAttribute(r, l);
        break;
      case 'onClick':
        l != null && (e.onclick = yo);
        break;
      case 'onScroll':
        l != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Re('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(s(61));
          if (((r = l.__html), r != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (r = El('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', r);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(r, '' + l)
          : e.removeAttribute(r);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(r, '')
          : e.removeAttribute(r);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(r, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(r, l)
            : e.removeAttribute(r);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? e.setAttribute(r, l)
          : e.removeAttribute(r);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(r)
          : e.setAttribute(r, l);
        break;
      case 'popover':
        Re('beforetoggle', e), Re('toggle', e), bl(e, 'popover', l);
        break;
      case 'xlinkActuate':
        zn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        zn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        zn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        zn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        zn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        zn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        zn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        zn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        zn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        bl(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
          ((r = n_.get(r) || r), bl(e, r, l));
    }
  }
  function Mf(e, t, r, l, c, d) {
    switch (r) {
      case 'style':
        Ih(e, l, d);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(s(61));
          if (((r = l.__html), r != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Ri(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Ri(e, '' + l);
        break;
      case 'onScroll':
        l != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Re('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = yo);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Uh.hasOwnProperty(r))
          e: {
            if (
              r[0] === 'o' &&
              r[1] === 'n' &&
              ((c = r.endsWith('Capture')),
              (t = r.slice(2, c ? r.length - 7 : void 0)),
              (d = e[xt] || null),
              (d = d != null ? d[r] : null),
              typeof d == 'function' && e.removeEventListener(t, d, c),
              typeof l == 'function')
            ) {
              typeof d != 'function' &&
                d !== null &&
                (r in e ? (e[r] = null) : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(t, l, c);
              break e;
            }
            r in e ? (e[r] = l) : l === !0 ? e.setAttribute(r, '') : bl(e, r, l);
          }
    }
  }
  function ct(e, t, r) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        Re('error', e), Re('load', e);
        var l = !1,
          c = !1,
          d;
        for (d in r)
          if (r.hasOwnProperty(d)) {
            var g = r[d];
            if (g != null)
              switch (d) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  c = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t));
                default:
                  He(e, t, d, g, r, null);
              }
          }
        c && He(e, t, 'srcSet', r.srcSet, r, null), l && He(e, t, 'src', r.src, r, null);
        return;
      case 'input':
        Re('invalid', e);
        var _ = (d = g = c = null),
          T = null,
          z = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var P = r[l];
            if (P != null)
              switch (l) {
                case 'name':
                  c = P;
                  break;
                case 'type':
                  g = P;
                  break;
                case 'checked':
                  T = P;
                  break;
                case 'defaultChecked':
                  z = P;
                  break;
                case 'value':
                  d = P;
                  break;
                case 'defaultValue':
                  _ = P;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (P != null) throw Error(s(137, t));
                  break;
                default:
                  He(e, t, l, P, r, null);
              }
          }
        Ph(e, d, _, T, z, g, c, !1), Sl(e);
        return;
      case 'select':
        Re('invalid', e), (l = g = d = null);
        for (c in r)
          if (r.hasOwnProperty(c) && ((_ = r[c]), _ != null))
            switch (c) {
              case 'value':
                d = _;
                break;
              case 'defaultValue':
                g = _;
                break;
              case 'multiple':
                l = _;
              default:
                He(e, t, c, _, r, null);
            }
        (t = d),
          (r = g),
          (e.multiple = !!l),
          t != null ? Ai(e, !!l, t, !1) : r != null && Ai(e, !!l, r, !0);
        return;
      case 'textarea':
        Re('invalid', e), (d = c = l = null);
        for (g in r)
          if (r.hasOwnProperty(g) && ((_ = r[g]), _ != null))
            switch (g) {
              case 'value':
                l = _;
                break;
              case 'defaultValue':
                c = _;
                break;
              case 'children':
                d = _;
                break;
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(s(91));
                break;
              default:
                He(e, t, g, _, r, null);
            }
        $h(e, l, c, d), Sl(e);
        return;
      case 'option':
        for (T in r)
          if (r.hasOwnProperty(T) && ((l = r[T]), l != null))
            switch (T) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                He(e, t, T, l, r, null);
            }
        return;
      case 'dialog':
        Re('beforetoggle', e), Re('toggle', e), Re('cancel', e), Re('close', e);
        break;
      case 'iframe':
      case 'object':
        Re('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Ss.length; l++) Re(Ss[l], e);
        break;
      case 'image':
        Re('error', e), Re('load', e);
        break;
      case 'details':
        Re('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Re('error', e), Re('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (z in r)
          if (r.hasOwnProperty(z) && ((l = r[z]), l != null))
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                He(e, t, z, l, r, null);
            }
        return;
      default:
        if (Gu(t)) {
          for (P in r)
            r.hasOwnProperty(P) && ((l = r[P]), l !== void 0 && Mf(e, t, P, l, r, void 0));
          return;
        }
    }
    for (_ in r) r.hasOwnProperty(_) && ((l = r[_]), l != null && He(e, t, _, l, r, null));
  }
  function RS(e, t, r, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var c = null,
          d = null,
          g = null,
          _ = null,
          T = null,
          z = null,
          P = null;
        for (B in r) {
          var I = r[B];
          if (r.hasOwnProperty(B) && I != null)
            switch (B) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                T = I;
              default:
                l.hasOwnProperty(B) || He(e, t, B, null, l, I);
            }
        }
        for (var j in l) {
          var B = l[j];
          if (((I = r[j]), l.hasOwnProperty(j) && (B != null || I != null)))
            switch (j) {
              case 'type':
                d = B;
                break;
              case 'name':
                c = B;
                break;
              case 'checked':
                z = B;
                break;
              case 'defaultChecked':
                P = B;
                break;
              case 'value':
                g = B;
                break;
              case 'defaultValue':
                _ = B;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (B != null) throw Error(s(137, t));
                break;
              default:
                B !== I && He(e, t, j, B, l, I);
            }
        }
        qu(e, g, _, T, z, P, d, c);
        return;
      case 'select':
        B = g = _ = j = null;
        for (d in r)
          if (((T = r[d]), r.hasOwnProperty(d) && T != null))
            switch (d) {
              case 'value':
                break;
              case 'multiple':
                B = T;
              default:
                l.hasOwnProperty(d) || He(e, t, d, null, l, T);
            }
        for (c in l)
          if (((d = l[c]), (T = r[c]), l.hasOwnProperty(c) && (d != null || T != null)))
            switch (c) {
              case 'value':
                j = d;
                break;
              case 'defaultValue':
                _ = d;
                break;
              case 'multiple':
                g = d;
              default:
                d !== T && He(e, t, c, d, l, T);
            }
        (t = _),
          (r = g),
          (l = B),
          j != null
            ? Ai(e, !!r, j, !1)
            : !!l != !!r && (t != null ? Ai(e, !!r, t, !0) : Ai(e, !!r, r ? [] : '', !1));
        return;
      case 'textarea':
        B = j = null;
        for (_ in r)
          if (((c = r[_]), r.hasOwnProperty(_) && c != null && !l.hasOwnProperty(_)))
            switch (_) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                He(e, t, _, null, l, c);
            }
        for (g in l)
          if (((c = l[g]), (d = r[g]), l.hasOwnProperty(g) && (c != null || d != null)))
            switch (g) {
              case 'value':
                j = c;
                break;
              case 'defaultValue':
                B = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== d && He(e, t, g, c, l, d);
            }
        Gh(e, j, B);
        return;
      case 'option':
        for (var be in r)
          if (((j = r[be]), r.hasOwnProperty(be) && j != null && !l.hasOwnProperty(be)))
            switch (be) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                He(e, t, be, null, l, j);
            }
        for (T in l)
          if (((j = l[T]), (B = r[T]), l.hasOwnProperty(T) && j !== B && (j != null || B != null)))
            switch (T) {
              case 'selected':
                e.selected = j && typeof j != 'function' && typeof j != 'symbol';
                break;
              default:
                He(e, t, T, j, l, B);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var me in r)
          (j = r[me]),
            r.hasOwnProperty(me) && j != null && !l.hasOwnProperty(me) && He(e, t, me, null, l, j);
        for (z in l)
          if (((j = l[z]), (B = r[z]), l.hasOwnProperty(z) && j !== B && (j != null || B != null)))
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (j != null) throw Error(s(137, t));
                break;
              default:
                He(e, t, z, j, l, B);
            }
        return;
      default:
        if (Gu(t)) {
          for (var Ve in r)
            (j = r[Ve]),
              r.hasOwnProperty(Ve) &&
                j !== void 0 &&
                !l.hasOwnProperty(Ve) &&
                Mf(e, t, Ve, void 0, l, j);
          for (P in l)
            (j = l[P]),
              (B = r[P]),
              !l.hasOwnProperty(P) ||
                j === B ||
                (j === void 0 && B === void 0) ||
                Mf(e, t, P, j, l, B);
          return;
        }
    }
    for (var D in r)
      (j = r[D]),
        r.hasOwnProperty(D) && j != null && !l.hasOwnProperty(D) && He(e, t, D, null, l, j);
    for (I in l)
      (j = l[I]),
        (B = r[I]),
        !l.hasOwnProperty(I) || j === B || (j == null && B == null) || He(e, t, I, j, l, B);
  }
  var Df = null,
    Nf = null;
  function vo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xy(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Iy(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Lf(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var kf = null;
  function OS() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === kf ? !1 : ((kf = e), !0)) : ((kf = null), !1);
  }
  var Qy = typeof setTimeout == 'function' ? setTimeout : void 0,
    CS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ky = typeof Promise == 'function' ? Promise : void 0,
    MS =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ky < 'u'
          ? function (e) {
              return Ky.resolve(null).then(e).catch(DS);
            }
          : Qy;
  function DS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xa(e) {
    return e === 'head';
  }
  function Jy(e, t) {
    var r = t,
      l = 0,
      c = 0;
    do {
      var d = r.nextSibling;
      if ((e.removeChild(r), d && d.nodeType === 8))
        if (((r = d.data), r === '/$')) {
          if (0 < l && 8 > l) {
            r = l;
            var g = e.ownerDocument;
            if ((r & 1 && Es(g.documentElement), r & 2 && Es(g.body), r & 4))
              for (r = g.head, Es(r), g = r.firstChild; g; ) {
                var _ = g.nextSibling,
                  T = g.nodeName;
                g[Br] ||
                  T === 'SCRIPT' ||
                  T === 'STYLE' ||
                  (T === 'LINK' && g.rel.toLowerCase() === 'stylesheet') ||
                  r.removeChild(g),
                  (g = _);
              }
          }
          if (c === 0) {
            e.removeChild(d), Ds(t);
            return;
          }
          c--;
        } else r === '$' || r === '$?' || r === '$!' ? c++ : (l = r.charCodeAt(0) - 48);
      else l = 0;
      r = d;
    } while (r);
    Ds(t);
  }
  function zf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (((t = t.nextSibling), r.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          zf(r), Hu(r);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (r.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(r);
    }
  }
  function NS(e, t, r, l) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Br])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((d = e.getAttribute('rel')),
                d === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute('href') !== (c.href == null || c.href === '' ? null : c.href) ||
                e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute('title') !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((d = e.getAttribute('src')),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var d = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === d) return e;
      } else return e;
      if (((e = on(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function LS(e, t, r) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !r) ||
        ((e = on(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function jf(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function kS(e, t) {
    var r = e.ownerDocument;
    if (e.data !== '$?' || r.readyState === 'complete') t();
    else {
      var l = function () {
        t(), r.removeEventListener('DOMContentLoaded', l);
      };
      r.addEventListener('DOMContentLoaded', l), (e._reactRetry = l);
    }
  }
  function on(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var Uf = null;
  function Fy(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wy(e, t, r) {
    switch (((t = vo(r)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Es(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Hu(e);
  }
  var en = new Map(),
    ev = new Set();
  function go(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Qn = G.d;
  G.d = { f: zS, r: jS, D: US, C: BS, L: HS, m: VS, X: YS, S: ZS, M: qS };
  function zS() {
    var e = Qn.f(),
      t = oo();
    return e || t;
  }
  function jS(e) {
    var t = xi(e);
    t !== null && t.tag === 5 && t.type === 'form' ? _m(t) : Qn.r(e);
  }
  var nr = typeof document > 'u' ? null : document;
  function tv(e, t, r) {
    var l = nr;
    if (l && typeof t == 'string' && t) {
      var c = Xt(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof r == 'string' && (c += '[crossorigin="' + r + '"]'),
        ev.has(c) ||
          (ev.add(c),
          (e = { rel: e, crossOrigin: r, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement('link')), ct(t, 'link', e), it(t), l.head.appendChild(t)));
    }
  }
  function US(e) {
    Qn.D(e), tv('dns-prefetch', e, null);
  }
  function BS(e, t) {
    Qn.C(e, t), tv('preconnect', e, t);
  }
  function HS(e, t, r) {
    Qn.L(e, t, r);
    var l = nr;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === 'image' && r && r.imageSrcSet
        ? ((c += '[imagesrcset="' + Xt(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == 'string' && (c += '[imagesizes="' + Xt(r.imageSizes) + '"]'))
        : (c += '[href="' + Xt(e) + '"]');
      var d = c;
      switch (t) {
        case 'style':
          d = ar(e);
          break;
        case 'script':
          d = ir(e);
      }
      en.has(d) ||
        ((e = y(
          { rel: 'preload', href: t === 'image' && r && r.imageSrcSet ? void 0 : e, as: t },
          r,
        )),
        en.set(d, e),
        l.querySelector(c) !== null ||
          (t === 'style' && l.querySelector(Ts(d))) ||
          (t === 'script' && l.querySelector(ws(d))) ||
          ((t = l.createElement('link')), ct(t, 'link', e), it(t), l.head.appendChild(t)));
    }
  }
  function VS(e, t) {
    Qn.m(e, t);
    var r = nr;
    if (r && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        c = 'link[rel="modulepreload"][as="' + Xt(l) + '"][href="' + Xt(e) + '"]',
        d = c;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          d = ir(e);
      }
      if (
        !en.has(d) &&
        ((e = y({ rel: 'modulepreload', href: e }, t)), en.set(d, e), r.querySelector(c) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (r.querySelector(ws(d))) return;
        }
        (l = r.createElement('link')), ct(l, 'link', e), it(l), r.head.appendChild(l);
      }
    }
  }
  function ZS(e, t, r) {
    Qn.S(e, t, r);
    var l = nr;
    if (l && e) {
      var c = Ei(l).hoistableStyles,
        d = ar(e);
      t = t || 'default';
      var g = c.get(d);
      if (!g) {
        var _ = { loading: 0, preload: null };
        if ((g = l.querySelector(Ts(d)))) _.loading = 5;
        else {
          (e = y({ rel: 'stylesheet', href: e, 'data-precedence': t }, r)),
            (r = en.get(d)) && Bf(e, r);
          var T = (g = l.createElement('link'));
          it(T),
            ct(T, 'link', e),
            (T._p = new Promise(function (z, P) {
              (T.onload = z), (T.onerror = P);
            })),
            T.addEventListener('load', function () {
              _.loading |= 1;
            }),
            T.addEventListener('error', function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            bo(g, t, l);
        }
        (g = { type: 'stylesheet', instance: g, count: 1, state: _ }), c.set(d, g);
      }
    }
  }
  function YS(e, t) {
    Qn.X(e, t);
    var r = nr;
    if (r && e) {
      var l = Ei(r).hoistableScripts,
        c = ir(e),
        d = l.get(c);
      d ||
        ((d = r.querySelector(ws(c))),
        d ||
          ((e = y({ src: e, async: !0 }, t)),
          (t = en.get(c)) && Hf(e, t),
          (d = r.createElement('script')),
          it(d),
          ct(d, 'link', e),
          r.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        l.set(c, d));
    }
  }
  function qS(e, t) {
    Qn.M(e, t);
    var r = nr;
    if (r && e) {
      var l = Ei(r).hoistableScripts,
        c = ir(e),
        d = l.get(c);
      d ||
        ((d = r.querySelector(ws(c))),
        d ||
          ((e = y({ src: e, async: !0, type: 'module' }, t)),
          (t = en.get(c)) && Hf(e, t),
          (d = r.createElement('script')),
          it(d),
          ct(d, 'link', e),
          r.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        l.set(c, d));
    }
  }
  function nv(e, t, r, l) {
    var c = (c = ue.current) ? go(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof r.precedence == 'string' && typeof r.href == 'string'
          ? ((t = ar(r.href)),
            (r = Ei(c).hoistableStyles),
            (l = r.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), r.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          r.rel === 'stylesheet' &&
          typeof r.href == 'string' &&
          typeof r.precedence == 'string'
        ) {
          e = ar(r.href);
          var d = Ei(c).hoistableStyles,
            g = d.get(e);
          if (
            (g ||
              ((c = c.ownerDocument || c),
              (g = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, g),
              (d = c.querySelector(Ts(e))) && !d._p && ((g.instance = d), (g.state.loading = 5)),
              en.has(e) ||
                ((r = {
                  rel: 'preload',
                  as: 'style',
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                en.set(e, r),
                d || PS(c, e, r, g.state))),
            t && l === null)
          )
            throw Error(s(528, ''));
          return g;
        }
        if (t && l !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (t = r.async),
          (r = r.src),
          typeof r == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = ir(r)),
              (r = Ei(c).hoistableScripts),
              (l = r.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), r.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function ar(e) {
    return 'href="' + Xt(e) + '"';
  }
  function Ts(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function av(e) {
    return y({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function PS(e, t, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        ct(t, 'link', r),
        it(t),
        e.head.appendChild(t));
  }
  function ir(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function ws(e) {
    return 'script[async]' + e;
  }
  function iv(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Xt(r.href) + '"]');
          if (l) return (t.instance = l), it(l), l;
          var c = y({}, r, {
            'data-href': r.href,
            'data-precedence': r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            it(l),
            ct(l, 'style', c),
            bo(l, r.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          c = ar(r.href);
          var d = e.querySelector(Ts(c));
          if (d) return (t.state.loading |= 4), (t.instance = d), it(d), d;
          (l = av(r)),
            (c = en.get(c)) && Bf(l, c),
            (d = (e.ownerDocument || e).createElement('link')),
            it(d);
          var g = d;
          return (
            (g._p = new Promise(function (_, T) {
              (g.onload = _), (g.onerror = T);
            })),
            ct(d, 'link', l),
            (t.state.loading |= 4),
            bo(d, r.precedence, e),
            (t.instance = d)
          );
        case 'script':
          return (
            (d = ir(r.src)),
            (c = e.querySelector(ws(d)))
              ? ((t.instance = c), it(c), c)
              : ((l = r),
                (c = en.get(d)) && ((l = y({}, r)), Hf(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                it(c),
                ct(c, 'link', l),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), bo(l, r.precedence, e));
    return t.instance;
  }
  function bo(e, t, r) {
    for (
      var l = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        c = l.length ? l[l.length - 1] : null,
        d = c,
        g = 0;
      g < l.length;
      g++
    ) {
      var _ = l[g];
      if (_.dataset.precedence === t) d = _;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild));
  }
  function Bf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Hf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var _o = null;
  function rv(e, t, r) {
    if (_o === null) {
      var l = new Map(),
        c = (_o = new Map());
      c.set(r, l);
    } else (c = _o), (l = c.get(r)), l || ((l = new Map()), c.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), c = 0; c < r.length; c++) {
      var d = r[c];
      if (
        !(d[Br] || d[dt] || (e === 'link' && d.getAttribute('rel') === 'stylesheet')) &&
        d.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var g = d.getAttribute(t) || '';
        g = e + g;
        var _ = l.get(g);
        _ ? _.push(d) : l.set(g, [d]);
      }
    }
    return l;
  }
  function sv(e, t, r) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(r, t === 'title' ? e.querySelector('head > title') : null);
  }
  function GS(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (e = t.disabled), typeof t.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function lv(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var As = null;
  function $S() {}
  function XS(e, t, r) {
    if (As === null) throw Error(s(475));
    var l = As;
    if (
      t.type === 'stylesheet' &&
      (typeof r.media != 'string' || matchMedia(r.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = ar(r.href),
          d = e.querySelector(Ts(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = So.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = d),
            it(d);
          return;
        }
        (d = e.ownerDocument || e),
          (r = av(r)),
          (c = en.get(c)) && Bf(r, c),
          (d = d.createElement('link')),
          it(d);
        var g = d;
        (g._p = new Promise(function (_, T) {
          (g.onload = _), (g.onerror = T);
        })),
          ct(d, 'link', r),
          (t.instance = d);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = So.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function IS() {
    if (As === null) throw Error(s(475));
    var e = As;
    return (
      e.stylesheets && e.count === 0 && Vf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Vf(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function So() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var xo = null;
  function Vf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (xo = new Map()), t.forEach(QS, e), (xo = null), So.call(e));
  }
  function QS(e, t) {
    if (!(t.state.loading & 4)) {
      var r = xo.get(e);
      if (r) var l = r.get(null);
      else {
        (r = new Map()), xo.set(e, r);
        for (
          var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), d = 0;
          d < c.length;
          d++
        ) {
          var g = c[d];
          (g.nodeName === 'LINK' || g.getAttribute('media') !== 'not all') &&
            (r.set(g.dataset.precedence, g), (l = g));
        }
        l && r.set(null, l);
      }
      (c = t.instance),
        (g = c.getAttribute('data-precedence')),
        (d = r.get(g) || l),
        d === l && r.set(null, c),
        r.set(g, c),
        this.count++,
        (l = So.bind(this)),
        c.addEventListener('load', l),
        c.addEventListener('error', l),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Rs = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0,
  };
  function KS(e, t, r, l, c, d, g, _) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = zu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zu(0)),
      (this.hiddenUpdates = zu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = _),
      (this.incompleteTransitions = new Map());
  }
  function ov(e, t, r, l, c, d, g, _, T, z, P, I) {
    return (
      (e = new KS(e, t, r, g, _, T, z, I)),
      (t = 1),
      d === !0 && (t |= 24),
      (d = Nt(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (t = _c()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (d.memoizedState = { element: l, isDehydrated: r, cache: t }),
      Tc(d),
      e
    );
  }
  function uv(e) {
    return e ? ((e = zi), e) : zi;
  }
  function cv(e, t, r, l, c, d) {
    (c = uv(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = ua(t)),
      (l.payload = { element: r }),
      (d = d === void 0 ? null : d),
      d !== null && (l.callback = d),
      (r = ca(e, l, t)),
      r !== null && (Ut(r, e, t), as(r, e, t));
  }
  function fv(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Zf(e, t) {
    fv(e, t), (e = e.alternate) && fv(e, t);
  }
  function dv(e) {
    if (e.tag === 13) {
      var t = ki(e, 67108864);
      t !== null && Ut(t, e, 67108864), Zf(e, 67108864);
    }
  }
  var Eo = !0;
  function JS(e, t, r, l) {
    var c = N.T;
    N.T = null;
    var d = G.p;
    try {
      (G.p = 2), Yf(e, t, r, l);
    } finally {
      (G.p = d), (N.T = c);
    }
  }
  function FS(e, t, r, l) {
    var c = N.T;
    N.T = null;
    var d = G.p;
    try {
      (G.p = 8), Yf(e, t, r, l);
    } finally {
      (G.p = d), (N.T = c);
    }
  }
  function Yf(e, t, r, l) {
    if (Eo) {
      var c = qf(l);
      if (c === null) Cf(e, t, l, To, r), pv(e, l);
      else if (e1(c, e, t, r, l)) l.stopPropagation();
      else if ((pv(e, l), t & 4 && -1 < WS.indexOf(e))) {
        for (; c !== null; ) {
          var d = xi(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var g = Va(d.pendingLanes);
                  if (g !== 0) {
                    var _ = d;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; g; ) {
                      var T = 1 << (31 - Mt(g));
                      (_.entanglements[1] |= T), (g &= ~T);
                    }
                    Sn(d), (je & 6) === 0 && ((so = qe() + 500), _s(0));
                  }
                }
                break;
              case 13:
                (_ = ki(d, 2)), _ !== null && Ut(_, d, 2), oo(), Zf(d, 2);
            }
          if (((d = qf(l)), d === null && Cf(e, t, l, To, r), d === c)) break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else Cf(e, t, l, null, r);
    }
  }
  function qf(e) {
    return (e = Xu(e)), Pf(e);
  }
  var To = null;
  function Pf(e) {
    if (((To = null), (e = Si(e)), e !== null)) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (To = e), null;
  }
  function hv(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (vi()) {
          case kn:
            return 2;
          case ml:
            return 8;
          case gi:
          case ku:
            return 32;
          case bi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gf = !1,
    Ea = null,
    Ta = null,
    wa = null,
    Os = new Map(),
    Cs = new Map(),
    Aa = [],
    WS =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function pv(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ea = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ta = null;
        break;
      case 'mouseover':
      case 'mouseout':
        wa = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Os.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Cs.delete(t.pointerId);
    }
  }
  function Ms(e, t, r, l, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: d,
          targetContainers: [c],
        }),
        t !== null && ((t = xi(t)), t !== null && dv(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function e1(e, t, r, l, c) {
    switch (t) {
      case 'focusin':
        return (Ea = Ms(Ea, e, t, r, l, c)), !0;
      case 'dragenter':
        return (Ta = Ms(Ta, e, t, r, l, c)), !0;
      case 'mouseover':
        return (wa = Ms(wa, e, t, r, l, c)), !0;
      case 'pointerover':
        var d = c.pointerId;
        return Os.set(d, Ms(Os.get(d) || null, e, t, r, l, c)), !0;
      case 'gotpointercapture':
        return (d = c.pointerId), Cs.set(d, Ms(Cs.get(d) || null, e, t, r, l, c)), !0;
    }
    return !1;
  }
  function mv(e) {
    var t = Si(e.target);
    if (t !== null) {
      var r = u(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = f(r)), t !== null)) {
            (e.blockedOn = t),
              Xb(e.priority, function () {
                if (r.tag === 13) {
                  var l = jt();
                  l = ju(l);
                  var c = ki(r, l);
                  c !== null && Ut(c, r, l), Zf(r, l);
                }
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function wo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = qf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        ($u = l), r.target.dispatchEvent(l), ($u = null);
      } else return (t = xi(r)), t !== null && dv(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function yv(e, t, r) {
    wo(e) && r.delete(t);
  }
  function t1() {
    (Gf = !1),
      Ea !== null && wo(Ea) && (Ea = null),
      Ta !== null && wo(Ta) && (Ta = null),
      wa !== null && wo(wa) && (wa = null),
      Os.forEach(yv),
      Cs.forEach(yv);
  }
  function Ao(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gf || ((Gf = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, t1)));
  }
  var Ro = null;
  function vv(e) {
    Ro !== e &&
      ((Ro = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Ro === e && (Ro = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != 'function') {
            if (Pf(l || r) === null) continue;
            break;
          }
          var d = xi(r);
          d !== null &&
            (e.splice(t, 3),
            (t -= 3),
            qc(d, { pending: !0, data: c, method: r.method, action: l }, l, c));
        }
      }));
  }
  function Ds(e) {
    function t(T) {
      return Ao(T, e);
    }
    Ea !== null && Ao(Ea, e),
      Ta !== null && Ao(Ta, e),
      wa !== null && Ao(wa, e),
      Os.forEach(t),
      Cs.forEach(t);
    for (var r = 0; r < Aa.length; r++) {
      var l = Aa[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Aa.length && ((r = Aa[0]), r.blockedOn === null); )
      mv(r), r.blockedOn === null && Aa.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (l = 0; l < r.length; l += 3) {
        var c = r[l],
          d = r[l + 1],
          g = c[xt] || null;
        if (typeof d == 'function') g || vv(r);
        else if (g) {
          var _ = null;
          if (d && d.hasAttribute('formAction')) {
            if (((c = d), (g = d[xt] || null))) _ = g.formAction;
            else if (Pf(c) !== null) continue;
          } else _ = g.action;
          typeof _ == 'function' ? (r[l + 1] = _) : (r.splice(l, 3), (l -= 3)), vv(r);
        }
      }
  }
  function $f(e) {
    this._internalRoot = e;
  }
  (Oo.prototype.render = $f.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var r = t.current,
        l = jt();
      cv(r, l, e, t, null, null);
    }),
    (Oo.prototype.unmount = $f.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cv(e.current, 2, null, e, null, null), oo(), (t[_i] = null);
        }
      });
  function Oo(e) {
    this._internalRoot = e;
  }
  Oo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = kh();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Aa.length && t !== 0 && t < Aa[r].priority; r++);
      Aa.splice(r, 0, e), r === 0 && mv(e);
    }
  };
  var gv = a.version;
  if (gv !== '19.1.0') throw Error(s(527, gv, '19.1.0'));
  G.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(s(188))
        : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return (e = m(t)), (e = e !== null ? p(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var n1 = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Co.isDisabled && Co.supportsFiber)
      try {
        (zr = Co.inject(n1)), (Ct = Co);
      } catch {}
  }
  return (
    (ks.createRoot = function (e, t) {
      if (!o(e)) throw Error(s(299));
      var r = !1,
        l = '',
        c = km,
        d = zm,
        g = jm,
        _ = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (d = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (_ = t.unstable_transitionCallbacks)),
        (t = ov(e, 1, !1, null, null, r, l, c, d, g, _, null)),
        (e[_i] = t.current),
        Of(e),
        new $f(t)
      );
    }),
    (ks.hydrateRoot = function (e, t, r) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        c = '',
        d = km,
        g = zm,
        _ = jm,
        T = null,
        z = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (d = r.onUncaughtError),
          r.onCaughtError !== void 0 && (g = r.onCaughtError),
          r.onRecoverableError !== void 0 && (_ = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 && (T = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (z = r.formState)),
        (t = ov(e, 1, !0, t, r ?? null, l, c, d, g, _, T, z)),
        (t.context = uv(null)),
        (r = t.current),
        (l = jt()),
        (l = ju(l)),
        (c = ua(l)),
        (c.callback = null),
        ca(r, c, l),
        (r = l),
        (t.current.lanes = r),
        Ur(t, r),
        Sn(t),
        (e[_i] = t.current),
        Of(e),
        new Oo(t)
      );
    }),
    (ks.version = '19.1.0'),
    ks
  );
}
var Qv;
function fE() {
  if (Qv) return fd.exports;
  Qv = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (fd.exports = cE()), fd.exports;
}
var dE = fE();
const hE = mu(dE),
  pE = 'modulepreload',
  mE = function (n) {
    return '/' + n;
  },
  Kv = {},
  yE = function (a, i, s) {
    let o = Promise.resolve();
    if (i && i.length > 0) {
      let f = function (p) {
        return Promise.all(
          p.map((y) =>
            Promise.resolve(y).then(
              (v) => ({ status: 'fulfilled', value: v }),
              (v) => ({ status: 'rejected', reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName('link');
      const h = document.querySelector('meta[property=csp-nonce]'),
        m = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute('nonce'));
      o = f(
        i.map((p) => {
          if (((p = mE(p)), p in Kv)) return;
          Kv[p] = !0;
          const y = p.endsWith('.css'),
            v = y ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${p}"]${v}`)) return;
          const b = document.createElement('link');
          if (
            ((b.rel = y ? 'stylesheet' : pE),
            y || (b.as = 'script'),
            (b.crossOrigin = ''),
            (b.href = p),
            m && b.setAttribute('nonce', m),
            document.head.appendChild(b),
            y)
          )
            return new Promise((S, x) => {
              b.addEventListener('load', S),
                b.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${p}`)));
            });
        }),
      );
    }
    function u(f) {
      const h = new Event('vite:preloadError', { cancelable: !0 });
      if (((h.payload = f), window.dispatchEvent(h), !h.defaultPrevented)) throw f;
    }
    return o.then((f) => {
      for (const h of f || []) h.status === 'rejected' && u(h.reason);
      return a().catch(u);
    });
  };
var Me;
(function (n) {
  n.assertEqual = (o) => o;
  function a(o) {}
  n.assertIs = a;
  function i(o) {
    throw new Error();
  }
  (n.assertNever = i),
    (n.arrayToEnum = (o) => {
      const u = {};
      for (const f of o) u[f] = f;
      return u;
    }),
    (n.getValidEnumValues = (o) => {
      const u = n.objectKeys(o).filter((h) => typeof o[o[h]] != 'number'),
        f = {};
      for (const h of u) f[h] = o[h];
      return n.objectValues(f);
    }),
    (n.objectValues = (o) =>
      n.objectKeys(o).map(function (u) {
        return o[u];
      })),
    (n.objectKeys =
      typeof Object.keys == 'function'
        ? (o) => Object.keys(o)
        : (o) => {
            const u = [];
            for (const f in o) Object.prototype.hasOwnProperty.call(o, f) && u.push(f);
            return u;
          }),
    (n.find = (o, u) => {
      for (const f of o) if (u(f)) return f;
    }),
    (n.isInteger =
      typeof Number.isInteger == 'function'
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == 'number' && isFinite(o) && Math.floor(o) === o);
  function s(o, u = ' | ') {
    return o.map((f) => (typeof f == 'string' ? `'${f}'` : f)).join(u);
  }
  (n.joinValues = s),
    (n.jsonStringifyReplacer = (o, u) => (typeof u == 'bigint' ? u.toString() : u));
})(Me || (Me = {}));
var Md;
(function (n) {
  n.mergeShapes = (a, i) => ({ ...a, ...i });
})(Md || (Md = {}));
const se = Me.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  Fn = (n) => {
    switch (typeof n) {
      case 'undefined':
        return se.undefined;
      case 'string':
        return se.string;
      case 'number':
        return isNaN(n) ? se.nan : se.number;
      case 'boolean':
        return se.boolean;
      case 'function':
        return se.function;
      case 'bigint':
        return se.bigint;
      case 'symbol':
        return se.symbol;
      case 'object':
        return Array.isArray(n)
          ? se.array
          : n === null
            ? se.null
            : n.then && typeof n.then == 'function' && n.catch && typeof n.catch == 'function'
              ? se.promise
              : typeof Map < 'u' && n instanceof Map
                ? se.map
                : typeof Set < 'u' && n instanceof Set
                  ? se.set
                  : typeof Date < 'u' && n instanceof Date
                    ? se.date
                    : se.object;
      default:
        return se.unknown;
    }
  },
  J = Me.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  vE = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, '$1:');
class Yt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(a) {
    super(),
      (this.issues = []),
      (this.addIssue = (s) => {
        this.issues = [...this.issues, s];
      }),
      (this.addIssues = (s = []) => {
        this.issues = [...this.issues, ...s];
      });
    const i = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, i) : (this.__proto__ = i),
      (this.name = 'ZodError'),
      (this.issues = a);
  }
  format(a) {
    const i =
        a ||
        function (u) {
          return u.message;
        },
      s = { _errors: [] },
      o = (u) => {
        for (const f of u.issues)
          if (f.code === 'invalid_union') f.unionErrors.map(o);
          else if (f.code === 'invalid_return_type') o(f.returnTypeError);
          else if (f.code === 'invalid_arguments') o(f.argumentsError);
          else if (f.path.length === 0) s._errors.push(i(f));
          else {
            let h = s,
              m = 0;
            for (; m < f.path.length; ) {
              const p = f.path[m];
              m === f.path.length - 1
                ? ((h[p] = h[p] || { _errors: [] }), h[p]._errors.push(i(f)))
                : (h[p] = h[p] || { _errors: [] }),
                (h = h[p]),
                m++;
            }
          }
      };
    return o(this), s;
  }
  static assert(a) {
    if (!(a instanceof Yt)) throw new Error(`Not a ZodError: ${a}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Me.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(a = (i) => i.message) {
    const i = {},
      s = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((i[o.path[0]] = i[o.path[0]] || []), i[o.path[0]].push(a(o)))
        : s.push(a(o));
    return { formErrors: s, fieldErrors: i };
  }
  get formErrors() {
    return this.flatten();
  }
}
Yt.create = (n) => new Yt(n);
const Er = (n, a) => {
  let i;
  switch (n.code) {
    case J.invalid_type:
      n.received === se.undefined
        ? (i = 'Required')
        : (i = `Expected ${n.expected}, received ${n.received}`);
      break;
    case J.invalid_literal:
      i = `Invalid literal value, expected ${JSON.stringify(n.expected, Me.jsonStringifyReplacer)}`;
      break;
    case J.unrecognized_keys:
      i = `Unrecognized key(s) in object: ${Me.joinValues(n.keys, ', ')}`;
      break;
    case J.invalid_union:
      i = 'Invalid input';
      break;
    case J.invalid_union_discriminator:
      i = `Invalid discriminator value. Expected ${Me.joinValues(n.options)}`;
      break;
    case J.invalid_enum_value:
      i = `Invalid enum value. Expected ${Me.joinValues(n.options)}, received '${n.received}'`;
      break;
    case J.invalid_arguments:
      i = 'Invalid function arguments';
      break;
    case J.invalid_return_type:
      i = 'Invalid function return type';
      break;
    case J.invalid_date:
      i = 'Invalid date';
      break;
    case J.invalid_string:
      typeof n.validation == 'object'
        ? 'includes' in n.validation
          ? ((i = `Invalid input: must include "${n.validation.includes}"`),
            typeof n.validation.position == 'number' &&
              (i = `${i} at one or more positions greater than or equal to ${n.validation.position}`))
          : 'startsWith' in n.validation
            ? (i = `Invalid input: must start with "${n.validation.startsWith}"`)
            : 'endsWith' in n.validation
              ? (i = `Invalid input: must end with "${n.validation.endsWith}"`)
              : Me.assertNever(n.validation)
        : n.validation !== 'regex'
          ? (i = `Invalid ${n.validation}`)
          : (i = 'Invalid');
      break;
    case J.too_small:
      n.type === 'array'
        ? (i = `Array must contain ${n.exact ? 'exactly' : n.inclusive ? 'at least' : 'more than'} ${n.minimum} element(s)`)
        : n.type === 'string'
          ? (i = `String must contain ${n.exact ? 'exactly' : n.inclusive ? 'at least' : 'over'} ${n.minimum} character(s)`)
          : n.type === 'number'
            ? (i = `Number must be ${n.exact ? 'exactly equal to ' : n.inclusive ? 'greater than or equal to ' : 'greater than '}${n.minimum}`)
            : n.type === 'date'
              ? (i = `Date must be ${n.exact ? 'exactly equal to ' : n.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(n.minimum))}`)
              : (i = 'Invalid input');
      break;
    case J.too_big:
      n.type === 'array'
        ? (i = `Array must contain ${n.exact ? 'exactly' : n.inclusive ? 'at most' : 'less than'} ${n.maximum} element(s)`)
        : n.type === 'string'
          ? (i = `String must contain ${n.exact ? 'exactly' : n.inclusive ? 'at most' : 'under'} ${n.maximum} character(s)`)
          : n.type === 'number'
            ? (i = `Number must be ${n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'} ${n.maximum}`)
            : n.type === 'bigint'
              ? (i = `BigInt must be ${n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'} ${n.maximum}`)
              : n.type === 'date'
                ? (i = `Date must be ${n.exact ? 'exactly' : n.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(n.maximum))}`)
                : (i = 'Invalid input');
      break;
    case J.custom:
      i = 'Invalid input';
      break;
    case J.invalid_intersection_types:
      i = 'Intersection results could not be merged';
      break;
    case J.not_multiple_of:
      i = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case J.not_finite:
      i = 'Number must be finite';
      break;
    default:
      (i = a.defaultError), Me.assertNever(n);
  }
  return { message: i };
};
let c0 = Er;
function gE(n) {
  c0 = n;
}
function Wo() {
  return c0;
}
const eu = (n) => {
    const { data: a, path: i, errorMaps: s, issueData: o } = n,
      u = [...i, ...(o.path || [])],
      f = { ...o, path: u };
    if (o.message !== void 0) return { ...o, path: u, message: o.message };
    let h = '';
    const m = s
      .filter((p) => !!p)
      .slice()
      .reverse();
    for (const p of m) h = p(f, { data: a, defaultError: h }).message;
    return { ...o, path: u, message: h };
  },
  bE = [];
function ie(n, a) {
  const i = Wo(),
    s = eu({
      issueData: a,
      data: n.data,
      path: n.path,
      errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, i, i === Er ? void 0 : Er].filter(
        (o) => !!o,
      ),
    });
  n.common.issues.push(s);
}
class yt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(a, i) {
    const s = [];
    for (const o of i) {
      if (o.status === 'aborted') return _e;
      o.status === 'dirty' && a.dirty(), s.push(o.value);
    }
    return { status: a.value, value: s };
  }
  static async mergeObjectAsync(a, i) {
    const s = [];
    for (const o of i) {
      const u = await o.key,
        f = await o.value;
      s.push({ key: u, value: f });
    }
    return yt.mergeObjectSync(a, s);
  }
  static mergeObjectSync(a, i) {
    const s = {};
    for (const o of i) {
      const { key: u, value: f } = o;
      if (u.status === 'aborted' || f.status === 'aborted') return _e;
      u.status === 'dirty' && a.dirty(),
        f.status === 'dirty' && a.dirty(),
        u.value !== '__proto__' && (typeof f.value < 'u' || o.alwaysSet) && (s[u.value] = f.value);
    }
    return { status: a.value, value: s };
  }
}
const _e = Object.freeze({ status: 'aborted' }),
  hr = (n) => ({ status: 'dirty', value: n }),
  _t = (n) => ({ status: 'valid', value: n }),
  Dd = (n) => n.status === 'aborted',
  Nd = (n) => n.status === 'dirty',
  fi = (n) => n.status === 'valid',
  Xs = (n) => typeof Promise < 'u' && n instanceof Promise;
function tu(n, a, i, s) {
  if (typeof a == 'function' ? n !== a || !0 : !a.has(n))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return a.get(n);
}
function f0(n, a, i, s, o) {
  if (typeof a == 'function' ? n !== a || !0 : !a.has(n))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return a.set(n, i), i;
}
var fe;
(function (n) {
  (n.errToObj = (a) => (typeof a == 'string' ? { message: a } : a || {})),
    (n.toString = (a) => (typeof a == 'string' ? a : a == null ? void 0 : a.message));
})(fe || (fe = {}));
var Bs, Hs;
class On {
  constructor(a, i, s, o) {
    (this._cachedPath = []), (this.parent = a), (this.data = i), (this._path = s), (this._key = o);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Jv = (n, a) => {
  if (fi(a)) return { success: !0, data: a.value };
  if (!n.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const i = new Yt(n.common.issues);
      return (this._error = i), this._error;
    },
  };
};
function Se(n) {
  if (!n) return {};
  const { errorMap: a, invalid_type_error: i, required_error: s, description: o } = n;
  if (a && (i || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return a
    ? { errorMap: a, description: o }
    : {
        errorMap: (f, h) => {
          var m, p;
          const { message: y } = n;
          return f.code === 'invalid_enum_value'
            ? { message: y ?? h.defaultError }
            : typeof h.data > 'u'
              ? { message: (m = y ?? s) !== null && m !== void 0 ? m : h.defaultError }
              : f.code !== 'invalid_type'
                ? { message: h.defaultError }
                : { message: (p = y ?? i) !== null && p !== void 0 ? p : h.defaultError };
        },
        description: o,
      };
}
class Ee {
  get description() {
    return this._def.description;
  }
  _getType(a) {
    return Fn(a.data);
  }
  _getOrReturnCtx(a, i) {
    return (
      i || {
        common: a.parent.common,
        data: a.data,
        parsedType: Fn(a.data),
        schemaErrorMap: this._def.errorMap,
        path: a.path,
        parent: a.parent,
      }
    );
  }
  _processInputParams(a) {
    return {
      status: new yt(),
      ctx: {
        common: a.parent.common,
        data: a.data,
        parsedType: Fn(a.data),
        schemaErrorMap: this._def.errorMap,
        path: a.path,
        parent: a.parent,
      },
    };
  }
  _parseSync(a) {
    const i = this._parse(a);
    if (Xs(i)) throw new Error('Synchronous parse encountered promise.');
    return i;
  }
  _parseAsync(a) {
    const i = this._parse(a);
    return Promise.resolve(i);
  }
  parse(a, i) {
    const s = this.safeParse(a, i);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(a, i) {
    var s;
    const o = {
        common: {
          issues: [],
          async: (s = i == null ? void 0 : i.async) !== null && s !== void 0 ? s : !1,
          contextualErrorMap: i == null ? void 0 : i.errorMap,
        },
        path: (i == null ? void 0 : i.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: a,
        parsedType: Fn(a),
      },
      u = this._parseSync({ data: a, path: o.path, parent: o });
    return Jv(o, u);
  }
  '~validate'(a) {
    var i, s;
    const o = {
      common: { issues: [], async: !!this['~standard'].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: a,
      parsedType: Fn(a),
    };
    if (!this['~standard'].async)
      try {
        const u = this._parseSync({ data: a, path: [], parent: o });
        return fi(u) ? { value: u.value } : { issues: o.common.issues };
      } catch (u) {
        !(
          (s =
            (i = u == null ? void 0 : u.message) === null || i === void 0
              ? void 0
              : i.toLowerCase()) === null || s === void 0
        ) &&
          s.includes('encountered') &&
          (this['~standard'].async = !0),
          (o.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: a, path: [], parent: o }).then((u) =>
      fi(u) ? { value: u.value } : { issues: o.common.issues },
    );
  }
  async parseAsync(a, i) {
    const s = await this.safeParseAsync(a, i);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(a, i) {
    const s = {
        common: { issues: [], contextualErrorMap: i == null ? void 0 : i.errorMap, async: !0 },
        path: (i == null ? void 0 : i.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: a,
        parsedType: Fn(a),
      },
      o = this._parse({ data: a, path: s.path, parent: s }),
      u = await (Xs(o) ? o : Promise.resolve(o));
    return Jv(s, u);
  }
  refine(a, i) {
    const s = (o) =>
      typeof i == 'string' || typeof i > 'u' ? { message: i } : typeof i == 'function' ? i(o) : i;
    return this._refinement((o, u) => {
      const f = a(o),
        h = () => u.addIssue({ code: J.custom, ...s(o) });
      return typeof Promise < 'u' && f instanceof Promise
        ? f.then((m) => (m ? !0 : (h(), !1)))
        : f
          ? !0
          : (h(), !1);
    });
  }
  refinement(a, i) {
    return this._refinement((s, o) =>
      a(s) ? !0 : (o.addIssue(typeof i == 'function' ? i(s, o) : i), !1),
    );
  }
  _refinement(a) {
    return new hn({
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: 'refinement', refinement: a },
    });
  }
  superRefine(a) {
    return this._refinement(a);
  }
  constructor(a) {
    (this.spa = this.safeParseAsync),
      (this._def = a),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this['~standard'] = { version: 1, vendor: 'zod', validate: (i) => this['~validate'](i) });
  }
  optional() {
    return wn.create(this, this._def);
  }
  nullable() {
    return La.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return fn.create(this);
  }
  promise() {
    return wr.create(this, this._def);
  }
  or(a) {
    return Js.create([this, a], this._def);
  }
  and(a) {
    return Fs.create(this, a, this._def);
  }
  transform(a) {
    return new hn({
      ...Se(this._def),
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: 'transform', transform: a },
    });
  }
  default(a) {
    const i = typeof a == 'function' ? a : () => a;
    return new al({ ...Se(this._def), innerType: this, defaultValue: i, typeName: ge.ZodDefault });
  }
  brand() {
    return new sh({ typeName: ge.ZodBranded, type: this, ...Se(this._def) });
  }
  catch(a) {
    const i = typeof a == 'function' ? a : () => a;
    return new il({ ...Se(this._def), innerType: this, catchValue: i, typeName: ge.ZodCatch });
  }
  describe(a) {
    const i = this.constructor;
    return new i({ ...this._def, description: a });
  }
  pipe(a) {
    return fl.create(this, a);
  }
  readonly() {
    return rl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const _E = /^c[^\s-]{8,}$/i,
  SE = /^[0-9a-z]+$/,
  xE = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  EE = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  TE = /^[a-z0-9_-]{21}$/i,
  wE = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  AE =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  RE = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  OE = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let pd;
const CE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ME =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  DE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  NE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  LE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  kE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  d0 =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  zE = new RegExp(`^${d0}$`);
function h0(n) {
  let a = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    n.precision
      ? (a = `${a}\\.\\d{${n.precision}}`)
      : n.precision == null && (a = `${a}(\\.\\d+)?`),
    a
  );
}
function jE(n) {
  return new RegExp(`^${h0(n)}$`);
}
function p0(n) {
  let a = `${d0}T${h0(n)}`;
  const i = [];
  return (
    i.push(n.local ? 'Z?' : 'Z'),
    n.offset && i.push('([+-]\\d{2}:?\\d{2})'),
    (a = `${a}(${i.join('|')})`),
    new RegExp(`^${a}$`)
  );
}
function UE(n, a) {
  return !!(((a === 'v4' || !a) && CE.test(n)) || ((a === 'v6' || !a) && DE.test(n)));
}
function BE(n, a) {
  if (!wE.test(n)) return !1;
  try {
    const [i] = n.split('.'),
      s = i
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(i.length + ((4 - (i.length % 4)) % 4), '='),
      o = JSON.parse(atob(s));
    return !(typeof o != 'object' || o === null || !o.typ || !o.alg || (a && o.alg !== a));
  } catch {
    return !1;
  }
}
function HE(n, a) {
  return !!(((a === 'v4' || !a) && ME.test(n)) || ((a === 'v6' || !a) && NE.test(n)));
}
class cn extends Ee {
  _parse(a) {
    if ((this._def.coerce && (a.data = String(a.data)), this._getType(a) !== se.string)) {
      const u = this._getOrReturnCtx(a);
      return ie(u, { code: J.invalid_type, expected: se.string, received: u.parsedType }), _e;
    }
    const s = new yt();
    let o;
    for (const u of this._def.checks)
      if (u.kind === 'min')
        a.data.length < u.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, {
            code: J.too_small,
            minimum: u.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          s.dirty());
      else if (u.kind === 'max')
        a.data.length > u.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, {
            code: J.too_big,
            maximum: u.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          s.dirty());
      else if (u.kind === 'length') {
        const f = a.data.length > u.value,
          h = a.data.length < u.value;
        (f || h) &&
          ((o = this._getOrReturnCtx(a, o)),
          f
            ? ie(o, {
                code: J.too_big,
                maximum: u.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: u.message,
              })
            : h &&
              ie(o, {
                code: J.too_small,
                minimum: u.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: u.message,
              }),
          s.dirty());
      } else if (u.kind === 'email')
        RE.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, { validation: 'email', code: J.invalid_string, message: u.message }),
          s.dirty());
      else if (u.kind === 'emoji')
        pd || (pd = new RegExp(OE, 'u')),
          pd.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ie(o, { validation: 'emoji', code: J.invalid_string, message: u.message }),
            s.dirty());
      else if (u.kind === 'uuid')
        EE.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, { validation: 'uuid', code: J.invalid_string, message: u.message }),
          s.dirty());
      else if (u.kind === 'nanoid')
        TE.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, { validation: 'nanoid', code: J.invalid_string, message: u.message }),
          s.dirty());
      else if (u.kind === 'cuid')
        _E.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, { validation: 'cuid', code: J.invalid_string, message: u.message }),
          s.dirty());
      else if (u.kind === 'cuid2')
        SE.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, { validation: 'cuid2', code: J.invalid_string, message: u.message }),
          s.dirty());
      else if (u.kind === 'ulid')
        xE.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, { validation: 'ulid', code: J.invalid_string, message: u.message }),
          s.dirty());
      else if (u.kind === 'url')
        try {
          new URL(a.data);
        } catch {
          (o = this._getOrReturnCtx(a, o)),
            ie(o, { validation: 'url', code: J.invalid_string, message: u.message }),
            s.dirty();
        }
      else
        u.kind === 'regex'
          ? ((u.regex.lastIndex = 0),
            u.regex.test(a.data) ||
              ((o = this._getOrReturnCtx(a, o)),
              ie(o, { validation: 'regex', code: J.invalid_string, message: u.message }),
              s.dirty()))
          : u.kind === 'trim'
            ? (a.data = a.data.trim())
            : u.kind === 'includes'
              ? a.data.includes(u.value, u.position) ||
                ((o = this._getOrReturnCtx(a, o)),
                ie(o, {
                  code: J.invalid_string,
                  validation: { includes: u.value, position: u.position },
                  message: u.message,
                }),
                s.dirty())
              : u.kind === 'toLowerCase'
                ? (a.data = a.data.toLowerCase())
                : u.kind === 'toUpperCase'
                  ? (a.data = a.data.toUpperCase())
                  : u.kind === 'startsWith'
                    ? a.data.startsWith(u.value) ||
                      ((o = this._getOrReturnCtx(a, o)),
                      ie(o, {
                        code: J.invalid_string,
                        validation: { startsWith: u.value },
                        message: u.message,
                      }),
                      s.dirty())
                    : u.kind === 'endsWith'
                      ? a.data.endsWith(u.value) ||
                        ((o = this._getOrReturnCtx(a, o)),
                        ie(o, {
                          code: J.invalid_string,
                          validation: { endsWith: u.value },
                          message: u.message,
                        }),
                        s.dirty())
                      : u.kind === 'datetime'
                        ? p0(u).test(a.data) ||
                          ((o = this._getOrReturnCtx(a, o)),
                          ie(o, {
                            code: J.invalid_string,
                            validation: 'datetime',
                            message: u.message,
                          }),
                          s.dirty())
                        : u.kind === 'date'
                          ? zE.test(a.data) ||
                            ((o = this._getOrReturnCtx(a, o)),
                            ie(o, {
                              code: J.invalid_string,
                              validation: 'date',
                              message: u.message,
                            }),
                            s.dirty())
                          : u.kind === 'time'
                            ? jE(u).test(a.data) ||
                              ((o = this._getOrReturnCtx(a, o)),
                              ie(o, {
                                code: J.invalid_string,
                                validation: 'time',
                                message: u.message,
                              }),
                              s.dirty())
                            : u.kind === 'duration'
                              ? AE.test(a.data) ||
                                ((o = this._getOrReturnCtx(a, o)),
                                ie(o, {
                                  validation: 'duration',
                                  code: J.invalid_string,
                                  message: u.message,
                                }),
                                s.dirty())
                              : u.kind === 'ip'
                                ? UE(a.data, u.version) ||
                                  ((o = this._getOrReturnCtx(a, o)),
                                  ie(o, {
                                    validation: 'ip',
                                    code: J.invalid_string,
                                    message: u.message,
                                  }),
                                  s.dirty())
                                : u.kind === 'jwt'
                                  ? BE(a.data, u.alg) ||
                                    ((o = this._getOrReturnCtx(a, o)),
                                    ie(o, {
                                      validation: 'jwt',
                                      code: J.invalid_string,
                                      message: u.message,
                                    }),
                                    s.dirty())
                                  : u.kind === 'cidr'
                                    ? HE(a.data, u.version) ||
                                      ((o = this._getOrReturnCtx(a, o)),
                                      ie(o, {
                                        validation: 'cidr',
                                        code: J.invalid_string,
                                        message: u.message,
                                      }),
                                      s.dirty())
                                    : u.kind === 'base64'
                                      ? LE.test(a.data) ||
                                        ((o = this._getOrReturnCtx(a, o)),
                                        ie(o, {
                                          validation: 'base64',
                                          code: J.invalid_string,
                                          message: u.message,
                                        }),
                                        s.dirty())
                                      : u.kind === 'base64url'
                                        ? kE.test(a.data) ||
                                          ((o = this._getOrReturnCtx(a, o)),
                                          ie(o, {
                                            validation: 'base64url',
                                            code: J.invalid_string,
                                            message: u.message,
                                          }),
                                          s.dirty())
                                        : Me.assertNever(u);
    return { status: s.value, value: a.data };
  }
  _regex(a, i, s) {
    return this.refinement((o) => a.test(o), {
      validation: i,
      code: J.invalid_string,
      ...fe.errToObj(s),
    });
  }
  _addCheck(a) {
    return new cn({ ...this._def, checks: [...this._def.checks, a] });
  }
  email(a) {
    return this._addCheck({ kind: 'email', ...fe.errToObj(a) });
  }
  url(a) {
    return this._addCheck({ kind: 'url', ...fe.errToObj(a) });
  }
  emoji(a) {
    return this._addCheck({ kind: 'emoji', ...fe.errToObj(a) });
  }
  uuid(a) {
    return this._addCheck({ kind: 'uuid', ...fe.errToObj(a) });
  }
  nanoid(a) {
    return this._addCheck({ kind: 'nanoid', ...fe.errToObj(a) });
  }
  cuid(a) {
    return this._addCheck({ kind: 'cuid', ...fe.errToObj(a) });
  }
  cuid2(a) {
    return this._addCheck({ kind: 'cuid2', ...fe.errToObj(a) });
  }
  ulid(a) {
    return this._addCheck({ kind: 'ulid', ...fe.errToObj(a) });
  }
  base64(a) {
    return this._addCheck({ kind: 'base64', ...fe.errToObj(a) });
  }
  base64url(a) {
    return this._addCheck({ kind: 'base64url', ...fe.errToObj(a) });
  }
  jwt(a) {
    return this._addCheck({ kind: 'jwt', ...fe.errToObj(a) });
  }
  ip(a) {
    return this._addCheck({ kind: 'ip', ...fe.errToObj(a) });
  }
  cidr(a) {
    return this._addCheck({ kind: 'cidr', ...fe.errToObj(a) });
  }
  datetime(a) {
    var i, s;
    return typeof a == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: a })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (a == null ? void 0 : a.precision) > 'u'
              ? null
              : a == null
                ? void 0
                : a.precision,
          offset: (i = a == null ? void 0 : a.offset) !== null && i !== void 0 ? i : !1,
          local: (s = a == null ? void 0 : a.local) !== null && s !== void 0 ? s : !1,
          ...fe.errToObj(a == null ? void 0 : a.message),
        });
  }
  date(a) {
    return this._addCheck({ kind: 'date', message: a });
  }
  time(a) {
    return typeof a == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: a })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (a == null ? void 0 : a.precision) > 'u'
              ? null
              : a == null
                ? void 0
                : a.precision,
          ...fe.errToObj(a == null ? void 0 : a.message),
        });
  }
  duration(a) {
    return this._addCheck({ kind: 'duration', ...fe.errToObj(a) });
  }
  regex(a, i) {
    return this._addCheck({ kind: 'regex', regex: a, ...fe.errToObj(i) });
  }
  includes(a, i) {
    return this._addCheck({
      kind: 'includes',
      value: a,
      position: i == null ? void 0 : i.position,
      ...fe.errToObj(i == null ? void 0 : i.message),
    });
  }
  startsWith(a, i) {
    return this._addCheck({ kind: 'startsWith', value: a, ...fe.errToObj(i) });
  }
  endsWith(a, i) {
    return this._addCheck({ kind: 'endsWith', value: a, ...fe.errToObj(i) });
  }
  min(a, i) {
    return this._addCheck({ kind: 'min', value: a, ...fe.errToObj(i) });
  }
  max(a, i) {
    return this._addCheck({ kind: 'max', value: a, ...fe.errToObj(i) });
  }
  length(a, i) {
    return this._addCheck({ kind: 'length', value: a, ...fe.errToObj(i) });
  }
  nonempty(a) {
    return this.min(1, fe.errToObj(a));
  }
  trim() {
    return new cn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new cn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new cn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((a) => a.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((a) => a.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((a) => a.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((a) => a.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((a) => a.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((a) => a.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((a) => a.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((a) => a.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((a) => a.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((a) => a.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((a) => a.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((a) => a.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((a) => a.kind === 'ip');
  }
  get isCIDR() {
    return !!this._def.checks.find((a) => a.kind === 'cidr');
  }
  get isBase64() {
    return !!this._def.checks.find((a) => a.kind === 'base64');
  }
  get isBase64url() {
    return !!this._def.checks.find((a) => a.kind === 'base64url');
  }
  get minLength() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a;
  }
  get maxLength() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a;
  }
}
cn.create = (n) => {
  var a;
  return new cn({
    checks: [],
    typeName: ge.ZodString,
    coerce: (a = n == null ? void 0 : n.coerce) !== null && a !== void 0 ? a : !1,
    ...Se(n),
  });
};
function VE(n, a) {
  const i = (n.toString().split('.')[1] || '').length,
    s = (a.toString().split('.')[1] || '').length,
    o = i > s ? i : s,
    u = parseInt(n.toFixed(o).replace('.', '')),
    f = parseInt(a.toFixed(o).replace('.', ''));
  return (u % f) / Math.pow(10, o);
}
class Ma extends Ee {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(a) {
    if ((this._def.coerce && (a.data = Number(a.data)), this._getType(a) !== se.number)) {
      const u = this._getOrReturnCtx(a);
      return ie(u, { code: J.invalid_type, expected: se.number, received: u.parsedType }), _e;
    }
    let s;
    const o = new yt();
    for (const u of this._def.checks)
      u.kind === 'int'
        ? Me.isInteger(a.data) ||
          ((s = this._getOrReturnCtx(a, s)),
          ie(s, {
            code: J.invalid_type,
            expected: 'integer',
            received: 'float',
            message: u.message,
          }),
          o.dirty())
        : u.kind === 'min'
          ? (u.inclusive ? a.data < u.value : a.data <= u.value) &&
            ((s = this._getOrReturnCtx(a, s)),
            ie(s, {
              code: J.too_small,
              minimum: u.value,
              type: 'number',
              inclusive: u.inclusive,
              exact: !1,
              message: u.message,
            }),
            o.dirty())
          : u.kind === 'max'
            ? (u.inclusive ? a.data > u.value : a.data >= u.value) &&
              ((s = this._getOrReturnCtx(a, s)),
              ie(s, {
                code: J.too_big,
                maximum: u.value,
                type: 'number',
                inclusive: u.inclusive,
                exact: !1,
                message: u.message,
              }),
              o.dirty())
            : u.kind === 'multipleOf'
              ? VE(a.data, u.value) !== 0 &&
                ((s = this._getOrReturnCtx(a, s)),
                ie(s, { code: J.not_multiple_of, multipleOf: u.value, message: u.message }),
                o.dirty())
              : u.kind === 'finite'
                ? Number.isFinite(a.data) ||
                  ((s = this._getOrReturnCtx(a, s)),
                  ie(s, { code: J.not_finite, message: u.message }),
                  o.dirty())
                : Me.assertNever(u);
    return { status: o.value, value: a.data };
  }
  gte(a, i) {
    return this.setLimit('min', a, !0, fe.toString(i));
  }
  gt(a, i) {
    return this.setLimit('min', a, !1, fe.toString(i));
  }
  lte(a, i) {
    return this.setLimit('max', a, !0, fe.toString(i));
  }
  lt(a, i) {
    return this.setLimit('max', a, !1, fe.toString(i));
  }
  setLimit(a, i, s, o) {
    return new Ma({
      ...this._def,
      checks: [...this._def.checks, { kind: a, value: i, inclusive: s, message: fe.toString(o) }],
    });
  }
  _addCheck(a) {
    return new Ma({ ...this._def, checks: [...this._def.checks, a] });
  }
  int(a) {
    return this._addCheck({ kind: 'int', message: fe.toString(a) });
  }
  positive(a) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: fe.toString(a) });
  }
  negative(a) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: fe.toString(a) });
  }
  nonpositive(a) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: fe.toString(a) });
  }
  nonnegative(a) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: fe.toString(a) });
  }
  multipleOf(a, i) {
    return this._addCheck({ kind: 'multipleOf', value: a, message: fe.toString(i) });
  }
  finite(a) {
    return this._addCheck({ kind: 'finite', message: fe.toString(a) });
  }
  safe(a) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: fe.toString(a),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: fe.toString(a),
    });
  }
  get minValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a;
  }
  get maxValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a;
  }
  get isInt() {
    return !!this._def.checks.find(
      (a) => a.kind === 'int' || (a.kind === 'multipleOf' && Me.isInteger(a.value)),
    );
  }
  get isFinite() {
    let a = null,
      i = null;
    for (const s of this._def.checks) {
      if (s.kind === 'finite' || s.kind === 'int' || s.kind === 'multipleOf') return !0;
      s.kind === 'min'
        ? (i === null || s.value > i) && (i = s.value)
        : s.kind === 'max' && (a === null || s.value < a) && (a = s.value);
    }
    return Number.isFinite(i) && Number.isFinite(a);
  }
}
Ma.create = (n) =>
  new Ma({
    checks: [],
    typeName: ge.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...Se(n),
  });
class Da extends Ee {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(a) {
    if (this._def.coerce)
      try {
        a.data = BigInt(a.data);
      } catch {
        return this._getInvalidInput(a);
      }
    if (this._getType(a) !== se.bigint) return this._getInvalidInput(a);
    let s;
    const o = new yt();
    for (const u of this._def.checks)
      u.kind === 'min'
        ? (u.inclusive ? a.data < u.value : a.data <= u.value) &&
          ((s = this._getOrReturnCtx(a, s)),
          ie(s, {
            code: J.too_small,
            type: 'bigint',
            minimum: u.value,
            inclusive: u.inclusive,
            message: u.message,
          }),
          o.dirty())
        : u.kind === 'max'
          ? (u.inclusive ? a.data > u.value : a.data >= u.value) &&
            ((s = this._getOrReturnCtx(a, s)),
            ie(s, {
              code: J.too_big,
              type: 'bigint',
              maximum: u.value,
              inclusive: u.inclusive,
              message: u.message,
            }),
            o.dirty())
          : u.kind === 'multipleOf'
            ? a.data % u.value !== BigInt(0) &&
              ((s = this._getOrReturnCtx(a, s)),
              ie(s, { code: J.not_multiple_of, multipleOf: u.value, message: u.message }),
              o.dirty())
            : Me.assertNever(u);
    return { status: o.value, value: a.data };
  }
  _getInvalidInput(a) {
    const i = this._getOrReturnCtx(a);
    return ie(i, { code: J.invalid_type, expected: se.bigint, received: i.parsedType }), _e;
  }
  gte(a, i) {
    return this.setLimit('min', a, !0, fe.toString(i));
  }
  gt(a, i) {
    return this.setLimit('min', a, !1, fe.toString(i));
  }
  lte(a, i) {
    return this.setLimit('max', a, !0, fe.toString(i));
  }
  lt(a, i) {
    return this.setLimit('max', a, !1, fe.toString(i));
  }
  setLimit(a, i, s, o) {
    return new Da({
      ...this._def,
      checks: [...this._def.checks, { kind: a, value: i, inclusive: s, message: fe.toString(o) }],
    });
  }
  _addCheck(a) {
    return new Da({ ...this._def, checks: [...this._def.checks, a] });
  }
  positive(a) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(a),
    });
  }
  negative(a) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(a),
    });
  }
  nonpositive(a) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(a),
    });
  }
  nonnegative(a) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(a),
    });
  }
  multipleOf(a, i) {
    return this._addCheck({ kind: 'multipleOf', value: a, message: fe.toString(i) });
  }
  get minValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a;
  }
  get maxValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a;
  }
}
Da.create = (n) => {
  var a;
  return new Da({
    checks: [],
    typeName: ge.ZodBigInt,
    coerce: (a = n == null ? void 0 : n.coerce) !== null && a !== void 0 ? a : !1,
    ...Se(n),
  });
};
class Is extends Ee {
  _parse(a) {
    if ((this._def.coerce && (a.data = !!a.data), this._getType(a) !== se.boolean)) {
      const s = this._getOrReturnCtx(a);
      return ie(s, { code: J.invalid_type, expected: se.boolean, received: s.parsedType }), _e;
    }
    return _t(a.data);
  }
}
Is.create = (n) =>
  new Is({ typeName: ge.ZodBoolean, coerce: (n == null ? void 0 : n.coerce) || !1, ...Se(n) });
class di extends Ee {
  _parse(a) {
    if ((this._def.coerce && (a.data = new Date(a.data)), this._getType(a) !== se.date)) {
      const u = this._getOrReturnCtx(a);
      return ie(u, { code: J.invalid_type, expected: se.date, received: u.parsedType }), _e;
    }
    if (isNaN(a.data.getTime())) {
      const u = this._getOrReturnCtx(a);
      return ie(u, { code: J.invalid_date }), _e;
    }
    const s = new yt();
    let o;
    for (const u of this._def.checks)
      u.kind === 'min'
        ? a.data.getTime() < u.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ie(o, {
            code: J.too_small,
            message: u.message,
            inclusive: !0,
            exact: !1,
            minimum: u.value,
            type: 'date',
          }),
          s.dirty())
        : u.kind === 'max'
          ? a.data.getTime() > u.value &&
            ((o = this._getOrReturnCtx(a, o)),
            ie(o, {
              code: J.too_big,
              message: u.message,
              inclusive: !0,
              exact: !1,
              maximum: u.value,
              type: 'date',
            }),
            s.dirty())
          : Me.assertNever(u);
    return { status: s.value, value: new Date(a.data.getTime()) };
  }
  _addCheck(a) {
    return new di({ ...this._def, checks: [...this._def.checks, a] });
  }
  min(a, i) {
    return this._addCheck({ kind: 'min', value: a.getTime(), message: fe.toString(i) });
  }
  max(a, i) {
    return this._addCheck({ kind: 'max', value: a.getTime(), message: fe.toString(i) });
  }
  get minDate() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a != null ? new Date(a) : null;
  }
  get maxDate() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a != null ? new Date(a) : null;
  }
}
di.create = (n) =>
  new di({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: ge.ZodDate,
    ...Se(n),
  });
class nu extends Ee {
  _parse(a) {
    if (this._getType(a) !== se.symbol) {
      const s = this._getOrReturnCtx(a);
      return ie(s, { code: J.invalid_type, expected: se.symbol, received: s.parsedType }), _e;
    }
    return _t(a.data);
  }
}
nu.create = (n) => new nu({ typeName: ge.ZodSymbol, ...Se(n) });
class Qs extends Ee {
  _parse(a) {
    if (this._getType(a) !== se.undefined) {
      const s = this._getOrReturnCtx(a);
      return ie(s, { code: J.invalid_type, expected: se.undefined, received: s.parsedType }), _e;
    }
    return _t(a.data);
  }
}
Qs.create = (n) => new Qs({ typeName: ge.ZodUndefined, ...Se(n) });
class Ks extends Ee {
  _parse(a) {
    if (this._getType(a) !== se.null) {
      const s = this._getOrReturnCtx(a);
      return ie(s, { code: J.invalid_type, expected: se.null, received: s.parsedType }), _e;
    }
    return _t(a.data);
  }
}
Ks.create = (n) => new Ks({ typeName: ge.ZodNull, ...Se(n) });
class Tr extends Ee {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(a) {
    return _t(a.data);
  }
}
Tr.create = (n) => new Tr({ typeName: ge.ZodAny, ...Se(n) });
class ci extends Ee {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(a) {
    return _t(a.data);
  }
}
ci.create = (n) => new ci({ typeName: ge.ZodUnknown, ...Se(n) });
class aa extends Ee {
  _parse(a) {
    const i = this._getOrReturnCtx(a);
    return ie(i, { code: J.invalid_type, expected: se.never, received: i.parsedType }), _e;
  }
}
aa.create = (n) => new aa({ typeName: ge.ZodNever, ...Se(n) });
class au extends Ee {
  _parse(a) {
    if (this._getType(a) !== se.undefined) {
      const s = this._getOrReturnCtx(a);
      return ie(s, { code: J.invalid_type, expected: se.void, received: s.parsedType }), _e;
    }
    return _t(a.data);
  }
}
au.create = (n) => new au({ typeName: ge.ZodVoid, ...Se(n) });
class fn extends Ee {
  _parse(a) {
    const { ctx: i, status: s } = this._processInputParams(a),
      o = this._def;
    if (i.parsedType !== se.array)
      return ie(i, { code: J.invalid_type, expected: se.array, received: i.parsedType }), _e;
    if (o.exactLength !== null) {
      const f = i.data.length > o.exactLength.value,
        h = i.data.length < o.exactLength.value;
      (f || h) &&
        (ie(i, {
          code: f ? J.too_big : J.too_small,
          minimum: h ? o.exactLength.value : void 0,
          maximum: f ? o.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (o.minLength !== null &&
        i.data.length < o.minLength.value &&
        (ie(i, {
          code: J.too_small,
          minimum: o.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        s.dirty()),
      o.maxLength !== null &&
        i.data.length > o.maxLength.value &&
        (ie(i, {
          code: J.too_big,
          maximum: o.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        s.dirty()),
      i.common.async)
    )
      return Promise.all(
        [...i.data].map((f, h) => o.type._parseAsync(new On(i, f, i.path, h))),
      ).then((f) => yt.mergeArray(s, f));
    const u = [...i.data].map((f, h) => o.type._parseSync(new On(i, f, i.path, h)));
    return yt.mergeArray(s, u);
  }
  get element() {
    return this._def.type;
  }
  min(a, i) {
    return new fn({ ...this._def, minLength: { value: a, message: fe.toString(i) } });
  }
  max(a, i) {
    return new fn({ ...this._def, maxLength: { value: a, message: fe.toString(i) } });
  }
  length(a, i) {
    return new fn({ ...this._def, exactLength: { value: a, message: fe.toString(i) } });
  }
  nonempty(a) {
    return this.min(1, a);
  }
}
fn.create = (n, a) =>
  new fn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ge.ZodArray,
    ...Se(a),
  });
function or(n) {
  if (n instanceof Xe) {
    const a = {};
    for (const i in n.shape) {
      const s = n.shape[i];
      a[i] = wn.create(or(s));
    }
    return new Xe({ ...n._def, shape: () => a });
  } else
    return n instanceof fn
      ? new fn({ ...n._def, type: or(n.element) })
      : n instanceof wn
        ? wn.create(or(n.unwrap()))
        : n instanceof La
          ? La.create(or(n.unwrap()))
          : n instanceof Cn
            ? Cn.create(n.items.map((a) => or(a)))
            : n;
}
class Xe extends Ee {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const a = this._def.shape(),
      i = Me.objectKeys(a);
    return (this._cached = { shape: a, keys: i });
  }
  _parse(a) {
    if (this._getType(a) !== se.object) {
      const p = this._getOrReturnCtx(a);
      return ie(p, { code: J.invalid_type, expected: se.object, received: p.parsedType }), _e;
    }
    const { status: s, ctx: o } = this._processInputParams(a),
      { shape: u, keys: f } = this._getCached(),
      h = [];
    if (!(this._def.catchall instanceof aa && this._def.unknownKeys === 'strip'))
      for (const p in o.data) f.includes(p) || h.push(p);
    const m = [];
    for (const p of f) {
      const y = u[p],
        v = o.data[p];
      m.push({
        key: { status: 'valid', value: p },
        value: y._parse(new On(o, v, o.path, p)),
        alwaysSet: p in o.data,
      });
    }
    if (this._def.catchall instanceof aa) {
      const p = this._def.unknownKeys;
      if (p === 'passthrough')
        for (const y of h)
          m.push({
            key: { status: 'valid', value: y },
            value: { status: 'valid', value: o.data[y] },
          });
      else if (p === 'strict')
        h.length > 0 && (ie(o, { code: J.unrecognized_keys, keys: h }), s.dirty());
      else if (p !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const p = this._def.catchall;
      for (const y of h) {
        const v = o.data[y];
        m.push({
          key: { status: 'valid', value: y },
          value: p._parse(new On(o, v, o.path, y)),
          alwaysSet: y in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const p = [];
            for (const y of m) {
              const v = await y.key,
                b = await y.value;
              p.push({ key: v, value: b, alwaysSet: y.alwaysSet });
            }
            return p;
          })
          .then((p) => yt.mergeObjectSync(s, p))
      : yt.mergeObjectSync(s, m);
  }
  get shape() {
    return this._def.shape();
  }
  strict(a) {
    return (
      fe.errToObj,
      new Xe({
        ...this._def,
        unknownKeys: 'strict',
        ...(a !== void 0
          ? {
              errorMap: (i, s) => {
                var o, u, f, h;
                const m =
                  (f =
                    (u = (o = this._def).errorMap) === null || u === void 0
                      ? void 0
                      : u.call(o, i, s).message) !== null && f !== void 0
                    ? f
                    : s.defaultError;
                return i.code === 'unrecognized_keys'
                  ? { message: (h = fe.errToObj(a).message) !== null && h !== void 0 ? h : m }
                  : { message: m };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Xe({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new Xe({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(a) {
    return new Xe({ ...this._def, shape: () => ({ ...this._def.shape(), ...a }) });
  }
  merge(a) {
    return new Xe({
      unknownKeys: a._def.unknownKeys,
      catchall: a._def.catchall,
      shape: () => ({ ...this._def.shape(), ...a._def.shape() }),
      typeName: ge.ZodObject,
    });
  }
  setKey(a, i) {
    return this.augment({ [a]: i });
  }
  catchall(a) {
    return new Xe({ ...this._def, catchall: a });
  }
  pick(a) {
    const i = {};
    return (
      Me.objectKeys(a).forEach((s) => {
        a[s] && this.shape[s] && (i[s] = this.shape[s]);
      }),
      new Xe({ ...this._def, shape: () => i })
    );
  }
  omit(a) {
    const i = {};
    return (
      Me.objectKeys(this.shape).forEach((s) => {
        a[s] || (i[s] = this.shape[s]);
      }),
      new Xe({ ...this._def, shape: () => i })
    );
  }
  deepPartial() {
    return or(this);
  }
  partial(a) {
    const i = {};
    return (
      Me.objectKeys(this.shape).forEach((s) => {
        const o = this.shape[s];
        a && !a[s] ? (i[s] = o) : (i[s] = o.optional());
      }),
      new Xe({ ...this._def, shape: () => i })
    );
  }
  required(a) {
    const i = {};
    return (
      Me.objectKeys(this.shape).forEach((s) => {
        if (a && !a[s]) i[s] = this.shape[s];
        else {
          let u = this.shape[s];
          for (; u instanceof wn; ) u = u._def.innerType;
          i[s] = u;
        }
      }),
      new Xe({ ...this._def, shape: () => i })
    );
  }
  keyof() {
    return m0(Me.objectKeys(this.shape));
  }
}
Xe.create = (n, a) =>
  new Xe({
    shape: () => n,
    unknownKeys: 'strip',
    catchall: aa.create(),
    typeName: ge.ZodObject,
    ...Se(a),
  });
Xe.strictCreate = (n, a) =>
  new Xe({
    shape: () => n,
    unknownKeys: 'strict',
    catchall: aa.create(),
    typeName: ge.ZodObject,
    ...Se(a),
  });
Xe.lazycreate = (n, a) =>
  new Xe({
    shape: n,
    unknownKeys: 'strip',
    catchall: aa.create(),
    typeName: ge.ZodObject,
    ...Se(a),
  });
class Js extends Ee {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a),
      s = this._def.options;
    function o(u) {
      for (const h of u) if (h.result.status === 'valid') return h.result;
      for (const h of u)
        if (h.result.status === 'dirty')
          return i.common.issues.push(...h.ctx.common.issues), h.result;
      const f = u.map((h) => new Yt(h.ctx.common.issues));
      return ie(i, { code: J.invalid_union, unionErrors: f }), _e;
    }
    if (i.common.async)
      return Promise.all(
        s.map(async (u) => {
          const f = { ...i, common: { ...i.common, issues: [] }, parent: null };
          return { result: await u._parseAsync({ data: i.data, path: i.path, parent: f }), ctx: f };
        }),
      ).then(o);
    {
      let u;
      const f = [];
      for (const m of s) {
        const p = { ...i, common: { ...i.common, issues: [] }, parent: null },
          y = m._parseSync({ data: i.data, path: i.path, parent: p });
        if (y.status === 'valid') return y;
        y.status === 'dirty' && !u && (u = { result: y, ctx: p }),
          p.common.issues.length && f.push(p.common.issues);
      }
      if (u) return i.common.issues.push(...u.ctx.common.issues), u.result;
      const h = f.map((m) => new Yt(m));
      return ie(i, { code: J.invalid_union, unionErrors: h }), _e;
    }
  }
  get options() {
    return this._def.options;
  }
}
Js.create = (n, a) => new Js({ options: n, typeName: ge.ZodUnion, ...Se(a) });
const Jn = (n) =>
  n instanceof el
    ? Jn(n.schema)
    : n instanceof hn
      ? Jn(n.innerType())
      : n instanceof tl
        ? [n.value]
        : n instanceof Na
          ? n.options
          : n instanceof nl
            ? Me.objectValues(n.enum)
            : n instanceof al
              ? Jn(n._def.innerType)
              : n instanceof Qs
                ? [void 0]
                : n instanceof Ks
                  ? [null]
                  : n instanceof wn
                    ? [void 0, ...Jn(n.unwrap())]
                    : n instanceof La
                      ? [null, ...Jn(n.unwrap())]
                      : n instanceof sh || n instanceof rl
                        ? Jn(n.unwrap())
                        : n instanceof il
                          ? Jn(n._def.innerType)
                          : [];
class Eu extends Ee {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    if (i.parsedType !== se.object)
      return ie(i, { code: J.invalid_type, expected: se.object, received: i.parsedType }), _e;
    const s = this.discriminator,
      o = i.data[s],
      u = this.optionsMap.get(o);
    return u
      ? i.common.async
        ? u._parseAsync({ data: i.data, path: i.path, parent: i })
        : u._parseSync({ data: i.data, path: i.path, parent: i })
      : (ie(i, {
          code: J.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [s],
        }),
        _e);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(a, i, s) {
    const o = new Map();
    for (const u of i) {
      const f = Jn(u.shape[a]);
      if (!f.length)
        throw new Error(
          `A discriminator value for key \`${a}\` could not be extracted from all schema options`,
        );
      for (const h of f) {
        if (o.has(h))
          throw new Error(`Discriminator property ${String(a)} has duplicate value ${String(h)}`);
        o.set(h, u);
      }
    }
    return new Eu({
      typeName: ge.ZodDiscriminatedUnion,
      discriminator: a,
      options: i,
      optionsMap: o,
      ...Se(s),
    });
  }
}
function Ld(n, a) {
  const i = Fn(n),
    s = Fn(a);
  if (n === a) return { valid: !0, data: n };
  if (i === se.object && s === se.object) {
    const o = Me.objectKeys(a),
      u = Me.objectKeys(n).filter((h) => o.indexOf(h) !== -1),
      f = { ...n, ...a };
    for (const h of u) {
      const m = Ld(n[h], a[h]);
      if (!m.valid) return { valid: !1 };
      f[h] = m.data;
    }
    return { valid: !0, data: f };
  } else if (i === se.array && s === se.array) {
    if (n.length !== a.length) return { valid: !1 };
    const o = [];
    for (let u = 0; u < n.length; u++) {
      const f = n[u],
        h = a[u],
        m = Ld(f, h);
      if (!m.valid) return { valid: !1 };
      o.push(m.data);
    }
    return { valid: !0, data: o };
  } else return i === se.date && s === se.date && +n == +a ? { valid: !0, data: n } : { valid: !1 };
}
class Fs extends Ee {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a),
      o = (u, f) => {
        if (Dd(u) || Dd(f)) return _e;
        const h = Ld(u.value, f.value);
        return h.valid
          ? ((Nd(u) || Nd(f)) && i.dirty(), { status: i.value, value: h.data })
          : (ie(s, { code: J.invalid_intersection_types }), _e);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({ data: s.data, path: s.path, parent: s }),
        ]).then(([u, f]) => o(u, f))
      : o(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s }),
        );
  }
}
Fs.create = (n, a, i) => new Fs({ left: n, right: a, typeName: ge.ZodIntersection, ...Se(i) });
class Cn extends Ee {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== se.array)
      return ie(s, { code: J.invalid_type, expected: se.array, received: s.parsedType }), _e;
    if (s.data.length < this._def.items.length)
      return (
        ie(s, {
          code: J.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        _e
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (ie(s, {
        code: J.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      i.dirty());
    const u = [...s.data]
      .map((f, h) => {
        const m = this._def.items[h] || this._def.rest;
        return m ? m._parse(new On(s, f, s.path, h)) : null;
      })
      .filter((f) => !!f);
    return s.common.async ? Promise.all(u).then((f) => yt.mergeArray(i, f)) : yt.mergeArray(i, u);
  }
  get items() {
    return this._def.items;
  }
  rest(a) {
    return new Cn({ ...this._def, rest: a });
  }
}
Cn.create = (n, a) => {
  if (!Array.isArray(n)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new Cn({ items: n, typeName: ge.ZodTuple, rest: null, ...Se(a) });
};
class Ws extends Ee {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== se.object)
      return ie(s, { code: J.invalid_type, expected: se.object, received: s.parsedType }), _e;
    const o = [],
      u = this._def.keyType,
      f = this._def.valueType;
    for (const h in s.data)
      o.push({
        key: u._parse(new On(s, h, s.path, h)),
        value: f._parse(new On(s, s.data[h], s.path, h)),
        alwaysSet: h in s.data,
      });
    return s.common.async ? yt.mergeObjectAsync(i, o) : yt.mergeObjectSync(i, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(a, i, s) {
    return i instanceof Ee
      ? new Ws({ keyType: a, valueType: i, typeName: ge.ZodRecord, ...Se(s) })
      : new Ws({ keyType: cn.create(), valueType: a, typeName: ge.ZodRecord, ...Se(i) });
  }
}
class iu extends Ee {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== se.map)
      return ie(s, { code: J.invalid_type, expected: se.map, received: s.parsedType }), _e;
    const o = this._def.keyType,
      u = this._def.valueType,
      f = [...s.data.entries()].map(([h, m], p) => ({
        key: o._parse(new On(s, h, s.path, [p, 'key'])),
        value: u._parse(new On(s, m, s.path, [p, 'value'])),
      }));
    if (s.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const m of f) {
          const p = await m.key,
            y = await m.value;
          if (p.status === 'aborted' || y.status === 'aborted') return _e;
          (p.status === 'dirty' || y.status === 'dirty') && i.dirty(), h.set(p.value, y.value);
        }
        return { status: i.value, value: h };
      });
    } else {
      const h = new Map();
      for (const m of f) {
        const p = m.key,
          y = m.value;
        if (p.status === 'aborted' || y.status === 'aborted') return _e;
        (p.status === 'dirty' || y.status === 'dirty') && i.dirty(), h.set(p.value, y.value);
      }
      return { status: i.value, value: h };
    }
  }
}
iu.create = (n, a, i) => new iu({ valueType: a, keyType: n, typeName: ge.ZodMap, ...Se(i) });
class hi extends Ee {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== se.set)
      return ie(s, { code: J.invalid_type, expected: se.set, received: s.parsedType }), _e;
    const o = this._def;
    o.minSize !== null &&
      s.data.size < o.minSize.value &&
      (ie(s, {
        code: J.too_small,
        minimum: o.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      i.dirty()),
      o.maxSize !== null &&
        s.data.size > o.maxSize.value &&
        (ie(s, {
          code: J.too_big,
          maximum: o.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        i.dirty());
    const u = this._def.valueType;
    function f(m) {
      const p = new Set();
      for (const y of m) {
        if (y.status === 'aborted') return _e;
        y.status === 'dirty' && i.dirty(), p.add(y.value);
      }
      return { status: i.value, value: p };
    }
    const h = [...s.data.values()].map((m, p) => u._parse(new On(s, m, s.path, p)));
    return s.common.async ? Promise.all(h).then((m) => f(m)) : f(h);
  }
  min(a, i) {
    return new hi({ ...this._def, minSize: { value: a, message: fe.toString(i) } });
  }
  max(a, i) {
    return new hi({ ...this._def, maxSize: { value: a, message: fe.toString(i) } });
  }
  size(a, i) {
    return this.min(a, i).max(a, i);
  }
  nonempty(a) {
    return this.min(1, a);
  }
}
hi.create = (n, a) =>
  new hi({ valueType: n, minSize: null, maxSize: null, typeName: ge.ZodSet, ...Se(a) });
class gr extends Ee {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    if (i.parsedType !== se.function)
      return ie(i, { code: J.invalid_type, expected: se.function, received: i.parsedType }), _e;
    function s(h, m) {
      return eu({
        data: h,
        path: i.path,
        errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, Wo(), Er].filter((p) => !!p),
        issueData: { code: J.invalid_arguments, argumentsError: m },
      });
    }
    function o(h, m) {
      return eu({
        data: h,
        path: i.path,
        errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, Wo(), Er].filter((p) => !!p),
        issueData: { code: J.invalid_return_type, returnTypeError: m },
      });
    }
    const u = { errorMap: i.common.contextualErrorMap },
      f = i.data;
    if (this._def.returns instanceof wr) {
      const h = this;
      return _t(async function (...m) {
        const p = new Yt([]),
          y = await h._def.args.parseAsync(m, u).catch((S) => {
            throw (p.addIssue(s(m, S)), p);
          }),
          v = await Reflect.apply(f, this, y);
        return await h._def.returns._def.type.parseAsync(v, u).catch((S) => {
          throw (p.addIssue(o(v, S)), p);
        });
      });
    } else {
      const h = this;
      return _t(function (...m) {
        const p = h._def.args.safeParse(m, u);
        if (!p.success) throw new Yt([s(m, p.error)]);
        const y = Reflect.apply(f, this, p.data),
          v = h._def.returns.safeParse(y, u);
        if (!v.success) throw new Yt([o(y, v.error)]);
        return v.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...a) {
    return new gr({ ...this._def, args: Cn.create(a).rest(ci.create()) });
  }
  returns(a) {
    return new gr({ ...this._def, returns: a });
  }
  implement(a) {
    return this.parse(a);
  }
  strictImplement(a) {
    return this.parse(a);
  }
  static create(a, i, s) {
    return new gr({
      args: a || Cn.create([]).rest(ci.create()),
      returns: i || ci.create(),
      typeName: ge.ZodFunction,
      ...Se(s),
    });
  }
}
class el extends Ee {
  get schema() {
    return this._def.getter();
  }
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    return this._def.getter()._parse({ data: i.data, path: i.path, parent: i });
  }
}
el.create = (n, a) => new el({ getter: n, typeName: ge.ZodLazy, ...Se(a) });
class tl extends Ee {
  _parse(a) {
    if (a.data !== this._def.value) {
      const i = this._getOrReturnCtx(a);
      return ie(i, { received: i.data, code: J.invalid_literal, expected: this._def.value }), _e;
    }
    return { status: 'valid', value: a.data };
  }
  get value() {
    return this._def.value;
  }
}
tl.create = (n, a) => new tl({ value: n, typeName: ge.ZodLiteral, ...Se(a) });
function m0(n, a) {
  return new Na({ values: n, typeName: ge.ZodEnum, ...Se(a) });
}
class Na extends Ee {
  constructor() {
    super(...arguments), Bs.set(this, void 0);
  }
  _parse(a) {
    if (typeof a.data != 'string') {
      const i = this._getOrReturnCtx(a),
        s = this._def.values;
      return (
        ie(i, { expected: Me.joinValues(s), received: i.parsedType, code: J.invalid_type }), _e
      );
    }
    if ((tu(this, Bs) || f0(this, Bs, new Set(this._def.values)), !tu(this, Bs).has(a.data))) {
      const i = this._getOrReturnCtx(a),
        s = this._def.values;
      return ie(i, { received: i.data, code: J.invalid_enum_value, options: s }), _e;
    }
    return _t(a.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const a = {};
    for (const i of this._def.values) a[i] = i;
    return a;
  }
  get Values() {
    const a = {};
    for (const i of this._def.values) a[i] = i;
    return a;
  }
  get Enum() {
    const a = {};
    for (const i of this._def.values) a[i] = i;
    return a;
  }
  extract(a, i = this._def) {
    return Na.create(a, { ...this._def, ...i });
  }
  exclude(a, i = this._def) {
    return Na.create(
      this.options.filter((s) => !a.includes(s)),
      { ...this._def, ...i },
    );
  }
}
Bs = new WeakMap();
Na.create = m0;
class nl extends Ee {
  constructor() {
    super(...arguments), Hs.set(this, void 0);
  }
  _parse(a) {
    const i = Me.getValidEnumValues(this._def.values),
      s = this._getOrReturnCtx(a);
    if (s.parsedType !== se.string && s.parsedType !== se.number) {
      const o = Me.objectValues(i);
      return (
        ie(s, { expected: Me.joinValues(o), received: s.parsedType, code: J.invalid_type }), _e
      );
    }
    if (
      (tu(this, Hs) || f0(this, Hs, new Set(Me.getValidEnumValues(this._def.values))),
      !tu(this, Hs).has(a.data))
    ) {
      const o = Me.objectValues(i);
      return ie(s, { received: s.data, code: J.invalid_enum_value, options: o }), _e;
    }
    return _t(a.data);
  }
  get enum() {
    return this._def.values;
  }
}
Hs = new WeakMap();
nl.create = (n, a) => new nl({ values: n, typeName: ge.ZodNativeEnum, ...Se(a) });
class wr extends Ee {
  unwrap() {
    return this._def.type;
  }
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    if (i.parsedType !== se.promise && i.common.async === !1)
      return ie(i, { code: J.invalid_type, expected: se.promise, received: i.parsedType }), _e;
    const s = i.parsedType === se.promise ? i.data : Promise.resolve(i.data);
    return _t(
      s.then((o) =>
        this._def.type.parseAsync(o, { path: i.path, errorMap: i.common.contextualErrorMap }),
      ),
    );
  }
}
wr.create = (n, a) => new wr({ type: n, typeName: ge.ZodPromise, ...Se(a) });
class hn extends Ee {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ge.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a),
      o = this._def.effect || null,
      u = {
        addIssue: (f) => {
          ie(s, f), f.fatal ? i.abort() : i.dirty();
        },
        get path() {
          return s.path;
        },
      };
    if (((u.addIssue = u.addIssue.bind(u)), o.type === 'preprocess')) {
      const f = o.transform(s.data, u);
      if (s.common.async)
        return Promise.resolve(f).then(async (h) => {
          if (i.value === 'aborted') return _e;
          const m = await this._def.schema._parseAsync({ data: h, path: s.path, parent: s });
          return m.status === 'aborted'
            ? _e
            : m.status === 'dirty' || i.value === 'dirty'
              ? hr(m.value)
              : m;
        });
      {
        if (i.value === 'aborted') return _e;
        const h = this._def.schema._parseSync({ data: f, path: s.path, parent: s });
        return h.status === 'aborted'
          ? _e
          : h.status === 'dirty' || i.value === 'dirty'
            ? hr(h.value)
            : h;
      }
    }
    if (o.type === 'refinement') {
      const f = (h) => {
        const m = o.refinement(h, u);
        if (s.common.async) return Promise.resolve(m);
        if (m instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return h;
      };
      if (s.common.async === !1) {
        const h = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return h.status === 'aborted'
          ? _e
          : (h.status === 'dirty' && i.dirty(), f(h.value), { status: i.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((h) =>
            h.status === 'aborted'
              ? _e
              : (h.status === 'dirty' && i.dirty(),
                f(h.value).then(() => ({ status: i.value, value: h.value }))),
          );
    }
    if (o.type === 'transform')
      if (s.common.async === !1) {
        const f = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        if (!fi(f)) return f;
        const h = o.transform(f.value, u);
        if (h instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return { status: i.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((f) =>
            fi(f)
              ? Promise.resolve(o.transform(f.value, u)).then((h) => ({
                  status: i.value,
                  value: h,
                }))
              : f,
          );
    Me.assertNever(o);
  }
}
hn.create = (n, a, i) => new hn({ schema: n, typeName: ge.ZodEffects, effect: a, ...Se(i) });
hn.createWithPreprocess = (n, a, i) =>
  new hn({
    schema: a,
    effect: { type: 'preprocess', transform: n },
    typeName: ge.ZodEffects,
    ...Se(i),
  });
class wn extends Ee {
  _parse(a) {
    return this._getType(a) === se.undefined ? _t(void 0) : this._def.innerType._parse(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
wn.create = (n, a) => new wn({ innerType: n, typeName: ge.ZodOptional, ...Se(a) });
class La extends Ee {
  _parse(a) {
    return this._getType(a) === se.null ? _t(null) : this._def.innerType._parse(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
La.create = (n, a) => new La({ innerType: n, typeName: ge.ZodNullable, ...Se(a) });
class al extends Ee {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    let s = i.data;
    return (
      i.parsedType === se.undefined && (s = this._def.defaultValue()),
      this._def.innerType._parse({ data: s, path: i.path, parent: i })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
al.create = (n, a) =>
  new al({
    innerType: n,
    typeName: ge.ZodDefault,
    defaultValue: typeof a.default == 'function' ? a.default : () => a.default,
    ...Se(a),
  });
class il extends Ee {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a),
      s = { ...i, common: { ...i.common, issues: [] } },
      o = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return Xs(o)
      ? o.then((u) => ({
          status: 'valid',
          value:
            u.status === 'valid'
              ? u.value
              : this._def.catchValue({
                  get error() {
                    return new Yt(s.common.issues);
                  },
                  input: s.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Yt(s.common.issues);
                  },
                  input: s.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
il.create = (n, a) =>
  new il({
    innerType: n,
    typeName: ge.ZodCatch,
    catchValue: typeof a.catch == 'function' ? a.catch : () => a.catch,
    ...Se(a),
  });
class ru extends Ee {
  _parse(a) {
    if (this._getType(a) !== se.nan) {
      const s = this._getOrReturnCtx(a);
      return ie(s, { code: J.invalid_type, expected: se.nan, received: s.parsedType }), _e;
    }
    return { status: 'valid', value: a.data };
  }
}
ru.create = (n) => new ru({ typeName: ge.ZodNaN, ...Se(n) });
const ZE = Symbol('zod_brand');
class sh extends Ee {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a),
      s = i.data;
    return this._def.type._parse({ data: s, path: i.path, parent: i });
  }
  unwrap() {
    return this._def.type;
  }
}
class fl extends Ee {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.common.async)
      return (async () => {
        const u = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
        return u.status === 'aborted'
          ? _e
          : u.status === 'dirty'
            ? (i.dirty(), hr(u.value))
            : this._def.out._parseAsync({ data: u.value, path: s.path, parent: s });
      })();
    {
      const o = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return o.status === 'aborted'
        ? _e
        : o.status === 'dirty'
          ? (i.dirty(), { status: 'dirty', value: o.value })
          : this._def.out._parseSync({ data: o.value, path: s.path, parent: s });
    }
  }
  static create(a, i) {
    return new fl({ in: a, out: i, typeName: ge.ZodPipeline });
  }
}
class rl extends Ee {
  _parse(a) {
    const i = this._def.innerType._parse(a),
      s = (o) => (fi(o) && (o.value = Object.freeze(o.value)), o);
    return Xs(i) ? i.then((o) => s(o)) : s(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rl.create = (n, a) => new rl({ innerType: n, typeName: ge.ZodReadonly, ...Se(a) });
function Fv(n, a) {
  const i = typeof n == 'function' ? n(a) : typeof n == 'string' ? { message: n } : n;
  return typeof i == 'string' ? { message: i } : i;
}
function y0(n, a = {}, i) {
  return n
    ? Tr.create().superRefine((s, o) => {
        var u, f;
        const h = n(s);
        if (h instanceof Promise)
          return h.then((m) => {
            var p, y;
            if (!m) {
              const v = Fv(a, s),
                b =
                  (y = (p = v.fatal) !== null && p !== void 0 ? p : i) !== null && y !== void 0
                    ? y
                    : !0;
              o.addIssue({ code: 'custom', ...v, fatal: b });
            }
          });
        if (!h) {
          const m = Fv(a, s),
            p =
              (f = (u = m.fatal) !== null && u !== void 0 ? u : i) !== null && f !== void 0
                ? f
                : !0;
          o.addIssue({ code: 'custom', ...m, fatal: p });
        }
      })
    : Tr.create();
}
const YE = { object: Xe.lazycreate };
var ge;
(function (n) {
  (n.ZodString = 'ZodString'),
    (n.ZodNumber = 'ZodNumber'),
    (n.ZodNaN = 'ZodNaN'),
    (n.ZodBigInt = 'ZodBigInt'),
    (n.ZodBoolean = 'ZodBoolean'),
    (n.ZodDate = 'ZodDate'),
    (n.ZodSymbol = 'ZodSymbol'),
    (n.ZodUndefined = 'ZodUndefined'),
    (n.ZodNull = 'ZodNull'),
    (n.ZodAny = 'ZodAny'),
    (n.ZodUnknown = 'ZodUnknown'),
    (n.ZodNever = 'ZodNever'),
    (n.ZodVoid = 'ZodVoid'),
    (n.ZodArray = 'ZodArray'),
    (n.ZodObject = 'ZodObject'),
    (n.ZodUnion = 'ZodUnion'),
    (n.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (n.ZodIntersection = 'ZodIntersection'),
    (n.ZodTuple = 'ZodTuple'),
    (n.ZodRecord = 'ZodRecord'),
    (n.ZodMap = 'ZodMap'),
    (n.ZodSet = 'ZodSet'),
    (n.ZodFunction = 'ZodFunction'),
    (n.ZodLazy = 'ZodLazy'),
    (n.ZodLiteral = 'ZodLiteral'),
    (n.ZodEnum = 'ZodEnum'),
    (n.ZodEffects = 'ZodEffects'),
    (n.ZodNativeEnum = 'ZodNativeEnum'),
    (n.ZodOptional = 'ZodOptional'),
    (n.ZodNullable = 'ZodNullable'),
    (n.ZodDefault = 'ZodDefault'),
    (n.ZodCatch = 'ZodCatch'),
    (n.ZodPromise = 'ZodPromise'),
    (n.ZodBranded = 'ZodBranded'),
    (n.ZodPipeline = 'ZodPipeline'),
    (n.ZodReadonly = 'ZodReadonly');
})(ge || (ge = {}));
const qE = (n, a = { message: `Input not instance of ${n.name}` }) => y0((i) => i instanceof n, a),
  v0 = cn.create,
  g0 = Ma.create,
  PE = ru.create,
  GE = Da.create,
  b0 = Is.create,
  $E = di.create,
  XE = nu.create,
  IE = Qs.create,
  QE = Ks.create,
  KE = Tr.create,
  JE = ci.create,
  FE = aa.create,
  WE = au.create,
  eT = fn.create,
  tT = Xe.create,
  nT = Xe.strictCreate,
  aT = Js.create,
  iT = Eu.create,
  rT = Fs.create,
  sT = Cn.create,
  lT = Ws.create,
  oT = iu.create,
  uT = hi.create,
  cT = gr.create,
  fT = el.create,
  dT = tl.create,
  hT = Na.create,
  pT = nl.create,
  mT = wr.create,
  Wv = hn.create,
  yT = wn.create,
  vT = La.create,
  gT = hn.createWithPreprocess,
  bT = fl.create,
  _T = () => v0().optional(),
  ST = () => g0().optional(),
  xT = () => b0().optional(),
  ET = {
    string: (n) => cn.create({ ...n, coerce: !0 }),
    number: (n) => Ma.create({ ...n, coerce: !0 }),
    boolean: (n) => Is.create({ ...n, coerce: !0 }),
    bigint: (n) => Da.create({ ...n, coerce: !0 }),
    date: (n) => di.create({ ...n, coerce: !0 }),
  },
  TT = _e;
var Yo = Object.freeze({
  __proto__: null,
  defaultErrorMap: Er,
  setErrorMap: gE,
  getErrorMap: Wo,
  makeIssue: eu,
  EMPTY_PATH: bE,
  addIssueToContext: ie,
  ParseStatus: yt,
  INVALID: _e,
  DIRTY: hr,
  OK: _t,
  isAborted: Dd,
  isDirty: Nd,
  isValid: fi,
  isAsync: Xs,
  get util() {
    return Me;
  },
  get objectUtil() {
    return Md;
  },
  ZodParsedType: se,
  getParsedType: Fn,
  ZodType: Ee,
  datetimeRegex: p0,
  ZodString: cn,
  ZodNumber: Ma,
  ZodBigInt: Da,
  ZodBoolean: Is,
  ZodDate: di,
  ZodSymbol: nu,
  ZodUndefined: Qs,
  ZodNull: Ks,
  ZodAny: Tr,
  ZodUnknown: ci,
  ZodNever: aa,
  ZodVoid: au,
  ZodArray: fn,
  ZodObject: Xe,
  ZodUnion: Js,
  ZodDiscriminatedUnion: Eu,
  ZodIntersection: Fs,
  ZodTuple: Cn,
  ZodRecord: Ws,
  ZodMap: iu,
  ZodSet: hi,
  ZodFunction: gr,
  ZodLazy: el,
  ZodLiteral: tl,
  ZodEnum: Na,
  ZodNativeEnum: nl,
  ZodPromise: wr,
  ZodEffects: hn,
  ZodTransformer: hn,
  ZodOptional: wn,
  ZodNullable: La,
  ZodDefault: al,
  ZodCatch: il,
  ZodNaN: ru,
  BRAND: ZE,
  ZodBranded: sh,
  ZodPipeline: fl,
  ZodReadonly: rl,
  custom: y0,
  Schema: Ee,
  ZodSchema: Ee,
  late: YE,
  get ZodFirstPartyTypeKind() {
    return ge;
  },
  coerce: ET,
  any: KE,
  array: eT,
  bigint: GE,
  boolean: b0,
  date: $E,
  discriminatedUnion: iT,
  effect: Wv,
  enum: hT,
  function: cT,
  instanceof: qE,
  intersection: rT,
  lazy: fT,
  literal: dT,
  map: oT,
  nan: PE,
  nativeEnum: pT,
  never: FE,
  null: QE,
  nullable: vT,
  number: g0,
  object: tT,
  oboolean: xT,
  onumber: ST,
  optional: yT,
  ostring: _T,
  pipeline: bT,
  preprocess: gT,
  promise: mT,
  record: lT,
  set: uT,
  strictObject: nT,
  string: v0,
  symbol: XE,
  transformer: Wv,
  tuple: sT,
  undefined: IE,
  union: aT,
  unknown: JE,
  void: WE,
  NEVER: TT,
  ZodIssueCode: J,
  quotelessJson: vE,
  ZodError: Yt,
});
const wT = (n) => {
    const a = 'input' in n ? n.input : 'input',
      i = 'output' in n ? n.output : 'output',
      s = 'schema' in n ? n.schema._input : n._input,
      o = 'schema' in n ? n.schema._output : n._output;
    return {
      types: { input: a === 'output' ? o : s, output: i === 'input' ? s : o },
      parse: (u) => ('schema' in n ? n.schema.parse(u) : n.parse(u)),
    };
  },
  eg = (n, a) => Yo.custom().pipe(n.catch(a));
var AT = w.useLayoutEffect;
function RT() {
  if (typeof globalThis < 'u') return globalThis;
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
}
function OT() {
  const n = RT();
  if (n.__xstate__) return n.__xstate__;
}
const CT = (n) => {
  if (typeof window > 'u') return;
  const a = OT();
  a && a.register(n);
};
class tg {
  constructor(a) {
    (this._process = a), (this._active = !1), (this._current = null), (this._last = null);
  }
  start() {
    (this._active = !0), this.flush();
  }
  clear() {
    this._current && ((this._current.next = null), (this._last = this._current));
  }
  enqueue(a) {
    const i = { value: a, next: null };
    if (this._current) {
      (this._last.next = i), (this._last = i);
      return;
    }
    (this._current = i), (this._last = i), this._active && this.flush();
  }
  flush() {
    for (; this._current; ) {
      const a = this._current;
      this._process(a.value), (this._current = a.next);
    }
    this._last = null;
  }
}
const _0 = '.',
  MT = '',
  S0 = '',
  DT = '#',
  NT = '*',
  x0 = 'xstate.init',
  LT = 'xstate.error',
  kd = 'xstate.stop';
function kT(n, a) {
  return { type: `xstate.after.${n}.${a}` };
}
function zd(n, a) {
  return { type: `xstate.done.state.${n}`, output: a };
}
function zT(n, a) {
  return { type: `xstate.done.actor.${n}`, output: a, actorId: n };
}
function E0(n, a) {
  return { type: `xstate.error.actor.${n}`, error: a, actorId: n };
}
function T0(n) {
  return { type: x0, input: n };
}
function Kn(n) {
  setTimeout(() => {
    throw n;
  });
}
const jT = (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
function w0(n, a) {
  const i = ng(n),
    s = ng(a);
  return typeof s == 'string'
    ? typeof i == 'string'
      ? s === i
      : !1
    : typeof i == 'string'
      ? i in s
      : Object.keys(i).every((o) => (o in s ? w0(i[o], s[o]) : !1));
}
function lh(n) {
  if (R0(n)) return n;
  const a = [];
  let i = '';
  for (let s = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 92:
        (i += n[s + 1]), s++;
        continue;
      case 46:
        a.push(i), (i = '');
        continue;
    }
    i += n[s];
  }
  return a.push(i), a;
}
function ng(n) {
  if (pw(n)) return n.value;
  if (typeof n != 'string') return n;
  const a = lh(n);
  return UT(a);
}
function UT(n) {
  if (n.length === 1) return n[0];
  const a = {};
  let i = a;
  for (let s = 0; s < n.length - 1; s++)
    if (s === n.length - 2) i[n[s]] = n[s + 1];
    else {
      const o = i;
      (i = {}), (o[n[s]] = i);
    }
  return a;
}
function ag(n, a) {
  const i = {},
    s = Object.keys(n);
  for (let o = 0; o < s.length; o++) {
    const u = s[o];
    i[u] = a(n[u], u, n, o);
  }
  return i;
}
function A0(n) {
  return R0(n) ? n : [n];
}
function Oa(n) {
  return n === void 0 ? [] : A0(n);
}
function jd(n, a, i, s) {
  return typeof n == 'function' ? n({ context: a, event: i, self: s }) : n;
}
function R0(n) {
  return Array.isArray(n);
}
function BT(n) {
  return n.type.startsWith('xstate.error.actor');
}
function ur(n) {
  return A0(n).map((a) => (typeof a > 'u' || typeof a == 'string' ? { target: a } : a));
}
function O0(n) {
  if (!(n === void 0 || n === MT)) return Oa(n);
}
function su(n, a, i) {
  var u, f, h;
  const s = typeof n == 'object',
    o = s ? n : void 0;
  return {
    next: (u = s ? n.next : n) == null ? void 0 : u.bind(o),
    error: (f = s ? n.error : a) == null ? void 0 : f.bind(o),
    complete: (h = s ? n.complete : i) == null ? void 0 : h.bind(o),
  };
}
function ig(n, a) {
  return `${a}.${n}`;
}
function oh(n, a) {
  const i = a.match(/^xstate\.invoke\.(\d+)\.(.*)/);
  if (!i) return n.implementations.actors[a];
  const [, s, o] = i,
    f = n.getStateNodeById(o).config.invoke;
  return (Array.isArray(f) ? f[s] : f).src;
}
function rg(n, a) {
  return `${n.sessionId}.${a}`;
}
let HT = 0;
function VT(n, a) {
  const i = new Map(),
    s = new Map(),
    o = new WeakMap(),
    u = new Set(),
    f = {},
    { clock: h, logger: m } = a,
    p = {
      schedule: (b, S, x, E, R = Math.random().toString(36).slice(2)) => {
        const M = { source: b, target: S, event: x, delay: E, id: R, startedAt: Date.now() },
          L = rg(b, R);
        v._snapshot._scheduledEvents[L] = M;
        const U = h.setTimeout(() => {
          delete f[L], delete v._snapshot._scheduledEvents[L], v._relay(b, S, x);
        }, E);
        f[L] = U;
      },
      cancel: (b, S) => {
        const x = rg(b, S),
          E = f[x];
        delete f[x], delete v._snapshot._scheduledEvents[x], E !== void 0 && h.clearTimeout(E);
      },
      cancelAll: (b) => {
        for (const S in v._snapshot._scheduledEvents) {
          const x = v._snapshot._scheduledEvents[S];
          x.source === b && p.cancel(b, x.id);
        }
      },
    },
    y = (b) => {
      if (!u.size) return;
      const S = { ...b, rootId: n.sessionId };
      u.forEach((x) => {
        var E;
        return (E = x.next) == null ? void 0 : E.call(x, S);
      });
    },
    v = {
      _snapshot: {
        _scheduledEvents: ((a == null ? void 0 : a.snapshot) && a.snapshot.scheduler) ?? {},
      },
      _bookId: () => `x:${HT++}`,
      _register: (b, S) => (i.set(b, S), b),
      _unregister: (b) => {
        i.delete(b.sessionId);
        const S = o.get(b);
        S !== void 0 && (s.delete(S), o.delete(b));
      },
      get: (b) => s.get(b),
      _set: (b, S) => {
        const x = s.get(b);
        if (x && x !== S) throw new Error(`Actor with system ID '${b}' already exists.`);
        s.set(b, S), o.set(S, b);
      },
      inspect: (b) => {
        const S = su(b);
        return (
          u.add(S),
          {
            unsubscribe() {
              u.delete(S);
            },
          }
        );
      },
      _sendInspectionEvent: y,
      _relay: (b, S, x) => {
        v._sendInspectionEvent({ type: '@xstate.event', sourceRef: b, actorRef: S, event: x }),
          S._send(x);
      },
      scheduler: p,
      getSnapshot: () => ({ _scheduledEvents: { ...v._snapshot._scheduledEvents } }),
      start: () => {
        const b = v._snapshot._scheduledEvents;
        v._snapshot._scheduledEvents = {};
        for (const S in b) {
          const { source: x, target: E, event: R, delay: M, id: L } = b[S];
          p.schedule(x, E, R, M, L);
        }
      },
      _clock: h,
      _logger: m,
    };
  return v;
}
let md = !1;
const uh = 1;
let Rt = (function (n) {
  return (
    (n[(n.NotStarted = 0)] = 'NotStarted'),
    (n[(n.Running = 1)] = 'Running'),
    (n[(n.Stopped = 2)] = 'Stopped'),
    n
  );
})({});
const ZT = {
  clock: { setTimeout: (n, a) => setTimeout(n, a), clearTimeout: (n) => clearTimeout(n) },
  logger: console.log.bind(console),
  devTools: !1,
};
class YT {
  constructor(a, i) {
    (this.logic = a),
      (this._snapshot = void 0),
      (this.clock = void 0),
      (this.options = void 0),
      (this.id = void 0),
      (this.mailbox = new tg(this._process.bind(this))),
      (this.observers = new Set()),
      (this.eventListeners = new Map()),
      (this.logger = void 0),
      (this._processingStatus = Rt.NotStarted),
      (this._parent = void 0),
      (this._syncSnapshot = void 0),
      (this.ref = void 0),
      (this._actorScope = void 0),
      (this._systemId = void 0),
      (this.sessionId = void 0),
      (this.system = void 0),
      (this._doneEvent = void 0),
      (this.src = void 0),
      (this._deferred = []);
    const s = { ...ZT, ...i },
      { clock: o, logger: u, parent: f, syncSnapshot: h, id: m, systemId: p, inspect: y } = s;
    (this.system = f ? f.system : VT(this, { clock: o, logger: u })),
      y && !f && this.system.inspect(su(y)),
      (this.sessionId = this.system._bookId()),
      (this.id = m ?? this.sessionId),
      (this.logger = (i == null ? void 0 : i.logger) ?? this.system._logger),
      (this.clock = (i == null ? void 0 : i.clock) ?? this.system._clock),
      (this._parent = f),
      (this._syncSnapshot = h),
      (this.options = s),
      (this.src = s.src ?? a),
      (this.ref = this),
      (this._actorScope = {
        self: this,
        id: this.id,
        sessionId: this.sessionId,
        logger: this.logger,
        defer: (v) => {
          this._deferred.push(v);
        },
        system: this.system,
        stopChild: (v) => {
          if (v._parent !== this)
            throw new Error(
              `Cannot stop child actor ${v.id} of ${this.id} because it is not a child`,
            );
          v._stop();
        },
        emit: (v) => {
          const b = this.eventListeners.get(v.type),
            S = this.eventListeners.get('*');
          if (!b && !S) return;
          const x = [...(b ? b.values() : []), ...(S ? S.values() : [])];
          for (const E of x) E(v);
        },
        actionExecutor: (v) => {
          const b = () => {
            if (
              (this._actorScope.system._sendInspectionEvent({
                type: '@xstate.action',
                actorRef: this,
                action: { type: v.type, params: v.params },
              }),
              !v.exec)
            )
              return;
            const S = md;
            try {
              (md = !0), v.exec(v.info, v.params);
            } finally {
              md = S;
            }
          };
          this._processingStatus === Rt.Running ? b() : this._deferred.push(b);
        },
      }),
      (this.send = this.send.bind(this)),
      this.system._sendInspectionEvent({ type: '@xstate.actor', actorRef: this }),
      p && ((this._systemId = p), this.system._set(p, this)),
      this._initState((i == null ? void 0 : i.snapshot) ?? (i == null ? void 0 : i.state)),
      p && this._snapshot.status !== 'active' && this.system._unregister(this);
  }
  _initState(a) {
    var i;
    try {
      this._snapshot = a
        ? this.logic.restoreSnapshot
          ? this.logic.restoreSnapshot(a, this._actorScope)
          : a
        : this.logic.getInitialSnapshot(
            this._actorScope,
            (i = this.options) == null ? void 0 : i.input,
          );
    } catch (s) {
      this._snapshot = { status: 'error', output: void 0, error: s };
    }
  }
  update(a, i) {
    var o, u;
    this._snapshot = a;
    let s;
    for (; (s = this._deferred.shift()); )
      try {
        s();
      } catch (f) {
        (this._deferred.length = 0), (this._snapshot = { ...a, status: 'error', error: f });
      }
    switch (this._snapshot.status) {
      case 'active':
        for (const f of this.observers)
          try {
            (o = f.next) == null || o.call(f, a);
          } catch (h) {
            Kn(h);
          }
        break;
      case 'done':
        for (const f of this.observers)
          try {
            (u = f.next) == null || u.call(f, a);
          } catch (h) {
            Kn(h);
          }
        this._stopProcedure(),
          this._complete(),
          (this._doneEvent = zT(this.id, this._snapshot.output)),
          this._parent && this.system._relay(this, this._parent, this._doneEvent);
        break;
      case 'error':
        this._error(this._snapshot.error);
        break;
    }
    this.system._sendInspectionEvent({
      type: '@xstate.snapshot',
      actorRef: this,
      event: i,
      snapshot: a,
    });
  }
  subscribe(a, i, s) {
    var u;
    const o = su(a, i, s);
    if (this._processingStatus !== Rt.Stopped) this.observers.add(o);
    else
      switch (this._snapshot.status) {
        case 'done':
          try {
            (u = o.complete) == null || u.call(o);
          } catch (f) {
            Kn(f);
          }
          break;
        case 'error': {
          const f = this._snapshot.error;
          if (!o.error) Kn(f);
          else
            try {
              o.error(f);
            } catch (h) {
              Kn(h);
            }
          break;
        }
      }
    return {
      unsubscribe: () => {
        this.observers.delete(o);
      },
    };
  }
  on(a, i) {
    let s = this.eventListeners.get(a);
    s || ((s = new Set()), this.eventListeners.set(a, s));
    const o = i.bind(void 0);
    return (
      s.add(o),
      {
        unsubscribe: () => {
          s.delete(o);
        },
      }
    );
  }
  start() {
    if (this._processingStatus === Rt.Running) return this;
    this._syncSnapshot &&
      this.subscribe({
        next: (s) => {
          s.status === 'active' &&
            this.system._relay(this, this._parent, {
              type: `xstate.snapshot.${this.id}`,
              snapshot: s,
            });
        },
        error: () => {},
      }),
      this.system._register(this.sessionId, this),
      this._systemId && this.system._set(this._systemId, this),
      (this._processingStatus = Rt.Running);
    const a = T0(this.options.input);
    switch (
      (this.system._sendInspectionEvent({
        type: '@xstate.event',
        sourceRef: this._parent,
        actorRef: this,
        event: a,
      }),
      this._snapshot.status)
    ) {
      case 'done':
        return this.update(this._snapshot, a), this;
      case 'error':
        return this._error(this._snapshot.error), this;
    }
    if ((this._parent || this.system.start(), this.logic.start))
      try {
        this.logic.start(this._snapshot, this._actorScope);
      } catch (s) {
        return (
          (this._snapshot = { ...this._snapshot, status: 'error', error: s }), this._error(s), this
        );
      }
    return (
      this.update(this._snapshot, a),
      this.options.devTools && this.attachDevTools(),
      this.mailbox.start(),
      this
    );
  }
  _process(a) {
    let i, s;
    try {
      i = this.logic.transition(this._snapshot, a, this._actorScope);
    } catch (o) {
      s = { err: o };
    }
    if (s) {
      const { err: o } = s;
      (this._snapshot = { ...this._snapshot, status: 'error', error: o }), this._error(o);
      return;
    }
    this.update(i, a), a.type === kd && (this._stopProcedure(), this._complete());
  }
  _stop() {
    return this._processingStatus === Rt.Stopped
      ? this
      : (this.mailbox.clear(),
        this._processingStatus === Rt.NotStarted
          ? ((this._processingStatus = Rt.Stopped), this)
          : (this.mailbox.enqueue({ type: kd }), this));
  }
  stop() {
    if (this._parent) throw new Error('A non-root actor cannot be stopped directly.');
    return this._stop();
  }
  _complete() {
    var a;
    for (const i of this.observers)
      try {
        (a = i.complete) == null || a.call(i);
      } catch (s) {
        Kn(s);
      }
    this.observers.clear();
  }
  _reportError(a) {
    if (!this.observers.size) {
      this._parent || Kn(a);
      return;
    }
    let i = !1;
    for (const s of this.observers) {
      const o = s.error;
      i || (i = !o);
      try {
        o == null || o(a);
      } catch (u) {
        Kn(u);
      }
    }
    this.observers.clear(), i && Kn(a);
  }
  _error(a) {
    this._stopProcedure(),
      this._reportError(a),
      this._parent && this.system._relay(this, this._parent, E0(this.id, a));
  }
  _stopProcedure() {
    return this._processingStatus !== Rt.Running
      ? this
      : (this.system.scheduler.cancelAll(this),
        this.mailbox.clear(),
        (this.mailbox = new tg(this._process.bind(this))),
        (this._processingStatus = Rt.Stopped),
        this.system._unregister(this),
        this);
  }
  _send(a) {
    this._processingStatus !== Rt.Stopped && this.mailbox.enqueue(a);
  }
  send(a) {
    this.system._relay(void 0, this, a);
  }
  attachDevTools() {
    const { devTools: a } = this.options;
    a && (typeof a == 'function' ? a : CT)(this);
  }
  toJSON() {
    return { xstate$$type: uh, id: this.id };
  }
  getPersistedSnapshot(a) {
    return this.logic.getPersistedSnapshot(this._snapshot, a);
  }
  [jT]() {
    return this;
  }
  getSnapshot() {
    return this._snapshot;
  }
}
function Ar(n, ...[a]) {
  return new YT(n, a);
}
function qT(n, a, i, s, { sendId: o }) {
  const u = typeof o == 'function' ? o(i, s) : o;
  return [a, { sendId: u }, void 0];
}
function PT(n, a) {
  n.defer(() => {
    n.system.scheduler.cancel(n.self, a.sendId);
  });
}
function C0(n) {
  function a(i, s) {}
  return (a.type = 'xstate.cancel'), (a.sendId = n), (a.resolve = qT), (a.execute = PT), a;
}
function GT(n, a, i, s, { id: o, systemId: u, src: f, input: h, syncSnapshot: m }) {
  const p = typeof f == 'string' ? oh(a.machine, f) : f,
    y = typeof o == 'function' ? o(i) : o;
  let v, b;
  return (
    p &&
      ((b = typeof h == 'function' ? h({ context: a.context, event: i.event, self: n.self }) : h),
      (v = Ar(p, { id: y, src: f, parent: n.self, syncSnapshot: m, systemId: u, input: b }))),
    [
      pi(a, { children: { ...a.children, [y]: v } }),
      { id: o, systemId: u, actorRef: v, src: f, input: b },
      void 0,
    ]
  );
}
function $T(n, { actorRef: a }) {
  a &&
    n.defer(() => {
      a._processingStatus !== Rt.Stopped && a.start();
    });
}
function M0(...[n, { id: a, systemId: i, input: s, syncSnapshot: o = !1 } = {}]) {
  function u(f, h) {}
  return (
    (u.type = 'xstate.spawnChild'),
    (u.id = a),
    (u.systemId = i),
    (u.src = n),
    (u.input = s),
    (u.syncSnapshot = o),
    (u.resolve = GT),
    (u.execute = $T),
    u
  );
}
function XT(n, a, i, s, { actorRef: o }) {
  const u = typeof o == 'function' ? o(i, s) : o,
    f = typeof u == 'string' ? a.children[u] : u;
  let h = a.children;
  return f && ((h = { ...h }), delete h[f.id]), [pi(a, { children: h }), f, void 0];
}
function IT(n, a) {
  if (a) {
    if ((n.system._unregister(a), a._processingStatus !== Rt.Running)) {
      n.stopChild(a);
      return;
    }
    n.defer(() => {
      n.stopChild(a);
    });
  }
}
function Tu(n) {
  function a(i, s) {}
  return (a.type = 'xstate.stopChild'), (a.actorRef = n), (a.resolve = XT), (a.execute = IT), a;
}
function wu(n, a, i, s) {
  const { machine: o } = s,
    u = typeof n == 'function',
    f = u ? n : o.implementations.guards[typeof n == 'string' ? n : n.type];
  if (!u && !f)
    throw new Error(`Guard '${typeof n == 'string' ? n : n.type}' is not implemented.'.`);
  if (typeof f != 'function') return wu(f, a, i, s);
  const h = { context: a, event: i },
    m =
      u || typeof n == 'string'
        ? void 0
        : 'params' in n
          ? typeof n.params == 'function'
            ? n.params({ context: a, event: i })
            : n.params
          : void 0;
  return 'check' in f ? f.check(s, h, f) : f(h, m);
}
const ch = (n) => n.type === 'atomic' || n.type === 'final';
function Rr(n) {
  return Object.values(n.states).filter((a) => a.type !== 'history');
}
function dl(n, a) {
  const i = [];
  if (a === n) return i;
  let s = n.parent;
  for (; s && s !== a; ) i.push(s), (s = s.parent);
  return i;
}
function lu(n) {
  const a = new Set(n),
    i = N0(a);
  for (const s of a)
    if (s.type === 'compound' && (!i.get(s) || !i.get(s).length)) sg(s).forEach((o) => a.add(o));
    else if (s.type === 'parallel') {
      for (const o of Rr(s))
        if (o.type !== 'history' && !a.has(o)) {
          const u = sg(o);
          for (const f of u) a.add(f);
        }
    }
  for (const s of a) {
    let o = s.parent;
    for (; o; ) a.add(o), (o = o.parent);
  }
  return a;
}
function D0(n, a) {
  const i = a.get(n);
  if (!i) return {};
  if (n.type === 'compound') {
    const o = i[0];
    if (o) {
      if (ch(o)) return o.key;
    } else return {};
  }
  const s = {};
  for (const o of i) s[o.key] = D0(o, a);
  return s;
}
function N0(n) {
  const a = new Map();
  for (const i of n)
    a.has(i) || a.set(i, []),
      i.parent && (a.has(i.parent) || a.set(i.parent, []), a.get(i.parent).push(i));
  return a;
}
function L0(n, a) {
  const i = lu(a);
  return D0(n, N0(i));
}
function fh(n, a) {
  return a.type === 'compound'
    ? Rr(a).some((i) => i.type === 'final' && n.has(i))
    : a.type === 'parallel'
      ? Rr(a).every((i) => fh(n, i))
      : a.type === 'final';
}
const Au = (n) => n[0] === DT;
function QT(n, a) {
  return (
    n.transitions.get(a) ||
    [...n.transitions.keys()]
      .filter((s) => {
        if (s === NT) return !0;
        if (!s.endsWith('.*')) return !1;
        const o = s.split('.'),
          u = a.split('.');
        for (let f = 0; f < o.length; f++) {
          const h = o[f],
            m = u[f];
          if (h === '*') return f === o.length - 1;
          if (h !== m) return !1;
        }
        return !0;
      })
      .sort((s, o) => o.length - s.length)
      .flatMap((s) => n.transitions.get(s))
  );
}
function KT(n) {
  const a = n.config.after;
  if (!a) return [];
  const i = (o) => {
    const u = kT(o, n.id),
      f = u.type;
    return n.entry.push(Z0(u, { id: f, delay: o })), n.exit.push(C0(f)), f;
  };
  return Object.keys(a)
    .flatMap((o) => {
      const u = a[o],
        f = typeof u == 'string' ? { target: u } : u,
        h = Number.isNaN(+o) ? o : +o,
        m = i(h);
      return Oa(f).map((p) => ({ ...p, event: m, delay: h }));
    })
    .map((o) => {
      const { delay: u } = o;
      return { ...si(n, o.event, o), delay: u };
    });
}
function si(n, a, i) {
  const s = O0(i.target),
    o = i.reenter ?? !1,
    u = WT(n, s),
    f = {
      ...i,
      actions: Oa(i.actions),
      guard: i.guard,
      target: u,
      source: n,
      reenter: o,
      eventType: a,
      toJSON: () => ({ ...f, source: `#${n.id}`, target: u ? u.map((h) => `#${h.id}`) : void 0 }),
    };
  return f;
}
function JT(n) {
  const a = new Map();
  if (n.config.on)
    for (const i of Object.keys(n.config.on)) {
      if (i === S0)
        throw new Error(
          'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
        );
      const s = n.config.on[i];
      a.set(
        i,
        ur(s).map((o) => si(n, i, o)),
      );
    }
  if (n.config.onDone) {
    const i = `xstate.done.state.${n.id}`;
    a.set(
      i,
      ur(n.config.onDone).map((s) => si(n, i, s)),
    );
  }
  for (const i of n.invoke) {
    if (i.onDone) {
      const s = `xstate.done.actor.${i.id}`;
      a.set(
        s,
        ur(i.onDone).map((o) => si(n, s, o)),
      );
    }
    if (i.onError) {
      const s = `xstate.error.actor.${i.id}`;
      a.set(
        s,
        ur(i.onError).map((o) => si(n, s, o)),
      );
    }
    if (i.onSnapshot) {
      const s = `xstate.snapshot.${i.id}`;
      a.set(
        s,
        ur(i.onSnapshot).map((o) => si(n, s, o)),
      );
    }
  }
  for (const i of n.after) {
    let s = a.get(i.eventType);
    s || ((s = []), a.set(i.eventType, s)), s.push(i);
  }
  return a;
}
function FT(n, a) {
  const i = typeof a == 'string' ? n.states[a] : a ? n.states[a.target] : void 0;
  if (!i && a) throw new Error(`Initial state node "${a}" not found on parent state node #${n.id}`);
  const s = {
    source: n,
    actions: !a || typeof a == 'string' ? [] : Oa(a.actions),
    eventType: null,
    reenter: !1,
    target: i ? [i] : [],
    toJSON: () => ({ ...s, source: `#${n.id}`, target: i ? [`#${i.id}`] : [] }),
  };
  return s;
}
function WT(n, a) {
  if (a !== void 0)
    return a.map((i) => {
      if (typeof i != 'string') return i;
      if (Au(i)) return n.machine.getStateNodeById(i);
      const s = i[0] === _0;
      if (s && !n.parent) return sl(n, i.slice(1));
      const o = s ? n.key + i : i;
      if (n.parent)
        try {
          return sl(n.parent, o);
        } catch (u) {
          throw new Error(`Invalid transition definition for state node '${n.id}':
${u.message}`);
        }
      else
        throw new Error(
          `Invalid target: "${i}" is not a valid target from the root node. Did you mean ".${i}"?`,
        );
    });
}
function k0(n) {
  const a = O0(n.config.target);
  return a
    ? { target: a.map((i) => (typeof i == 'string' ? sl(n.parent, i) : i)) }
    : n.parent.initial;
}
function oi(n) {
  return n.type === 'history';
}
function sg(n) {
  const a = z0(n);
  for (const i of a) for (const s of dl(i, n)) a.add(s);
  return a;
}
function z0(n) {
  const a = new Set();
  function i(s) {
    if (!a.has(s)) {
      if ((a.add(s), s.type === 'compound')) i(s.initial.target[0]);
      else if (s.type === 'parallel') for (const o of Rr(s)) i(o);
    }
  }
  return i(n), a;
}
function Or(n, a) {
  if (Au(a)) return n.machine.getStateNodeById(a);
  if (!n.states)
    throw new Error(`Unable to retrieve child state '${a}' from '${n.id}'; no child states exist.`);
  const i = n.states[a];
  if (!i) throw new Error(`Child state '${a}' does not exist on '${n.id}'`);
  return i;
}
function sl(n, a) {
  if (typeof a == 'string' && Au(a))
    try {
      return n.machine.getStateNodeById(a);
    } catch {}
  const i = lh(a).slice();
  let s = n;
  for (; i.length; ) {
    const o = i.shift();
    if (!o.length) break;
    s = Or(s, o);
  }
  return s;
}
function ou(n, a) {
  if (typeof a == 'string') {
    const o = n.states[a];
    if (!o) throw new Error(`State '${a}' does not exist on '${n.id}'`);
    return [n, o];
  }
  const i = Object.keys(a),
    s = i.map((o) => Or(n, o)).filter(Boolean);
  return [n.machine.root, n].concat(
    s,
    i.reduce((o, u) => {
      const f = Or(n, u);
      if (!f) return o;
      const h = ou(f, a[u]);
      return o.concat(h);
    }, []),
  );
}
function ew(n, a, i, s) {
  const u = Or(n, a).next(i, s);
  return !u || !u.length ? n.next(i, s) : u;
}
function tw(n, a, i, s) {
  const o = Object.keys(a),
    u = Or(n, o[0]),
    f = dh(u, a[o[0]], i, s);
  return !f || !f.length ? n.next(i, s) : f;
}
function nw(n, a, i, s) {
  const o = [];
  for (const u of Object.keys(a)) {
    const f = a[u];
    if (!f) continue;
    const h = Or(n, u),
      m = dh(h, f, i, s);
    m && o.push(...m);
  }
  return o.length ? o : n.next(i, s);
}
function dh(n, a, i, s) {
  return typeof a == 'string'
    ? ew(n, a, i, s)
    : Object.keys(a).length === 1
      ? tw(n, a, i, s)
      : nw(n, a, i, s);
}
function aw(n) {
  return Object.keys(n.states)
    .map((a) => n.states[a])
    .filter((a) => a.type === 'history');
}
function ka(n, a) {
  let i = n;
  for (; i.parent && i.parent !== a; ) i = i.parent;
  return i.parent === a;
}
function iw(n, a) {
  const i = new Set(n),
    s = new Set(a);
  for (const o of i) if (s.has(o)) return !0;
  for (const o of s) if (i.has(o)) return !0;
  return !1;
}
function j0(n, a, i) {
  const s = new Set();
  for (const o of n) {
    let u = !1;
    const f = new Set();
    for (const h of s)
      if (iw(Ud([o], a, i), Ud([h], a, i)))
        if (ka(o.source, h.source)) f.add(h);
        else {
          u = !0;
          break;
        }
    if (!u) {
      for (const h of f) s.delete(h);
      s.add(o);
    }
  }
  return Array.from(s);
}
function rw(n) {
  const [a, ...i] = n;
  for (const s of dl(a, void 0)) if (i.every((o) => ka(o, s))) return s;
}
function hh(n, a) {
  if (!n.target) return [];
  const i = new Set();
  for (const s of n.target)
    if (oi(s))
      if (a[s.id]) for (const o of a[s.id]) i.add(o);
      else for (const o of hh(k0(s), a)) i.add(o);
    else i.add(s);
  return [...i];
}
function U0(n, a) {
  const i = hh(n, a);
  if (!i) return;
  if (!n.reenter && i.every((o) => o === n.source || ka(o, n.source))) return n.source;
  const s = rw(i.concat(n.source));
  if (s) return s;
  if (!n.reenter) return n.source.machine.root;
}
function Ud(n, a, i) {
  var o;
  const s = new Set();
  for (const u of n)
    if ((o = u.target) != null && o.length) {
      const f = U0(u, i);
      u.reenter && u.source === f && s.add(f);
      for (const h of a) ka(h, f) && s.add(h);
    }
  return [...s];
}
function sw(n, a) {
  if (n.length !== a.size) return !1;
  for (const i of n) if (!a.has(i)) return !1;
  return !0;
}
function Bd(n, a, i, s, o, u) {
  if (!n.length) return a;
  const f = new Set(a._nodes);
  let h = a.historyValue;
  const m = j0(n, f, h);
  let p = a;
  o || ([p, h] = cw(p, s, i, m, f, h, u, i.actionExecutor)),
    (p = Cr(
      p,
      s,
      i,
      m.flatMap((v) => v.actions),
      u,
      void 0,
    )),
    (p = ow(p, s, i, m, f, u, h, o));
  const y = [...f];
  p.status === 'done' &&
    (p = Cr(
      p,
      s,
      i,
      y.sort((v, b) => b.order - v.order).flatMap((v) => v.exit),
      u,
      void 0,
    ));
  try {
    return h === a.historyValue && sw(a._nodes, f) ? p : pi(p, { _nodes: y, historyValue: h });
  } catch (v) {
    throw v;
  }
}
function lw(n, a, i, s, o) {
  if (s.output === void 0) return;
  const u = zd(o.id, o.output !== void 0 && o.parent ? jd(o.output, n.context, a, i.self) : void 0);
  return jd(s.output, n.context, u, i.self);
}
function ow(n, a, i, s, o, u, f, h) {
  let m = n;
  const p = new Set(),
    y = new Set();
  uw(s, f, y, p), h && y.add(n.machine.root);
  const v = new Set();
  for (const b of [...p].sort((S, x) => S.order - x.order)) {
    o.add(b);
    const S = [];
    S.push(...b.entry);
    for (const x of b.invoke) S.push(M0(x.src, { ...x, syncSnapshot: !!x.onSnapshot }));
    if (y.has(b)) {
      const x = b.initial.actions;
      S.push(...x);
    }
    if (
      ((m = Cr(
        m,
        a,
        i,
        S,
        u,
        b.invoke.map((x) => x.id),
      )),
      b.type === 'final')
    ) {
      const x = b.parent;
      let E = (x == null ? void 0 : x.type) === 'parallel' ? x : x == null ? void 0 : x.parent,
        R = E || b;
      for (
        (x == null ? void 0 : x.type) === 'compound' &&
        u.push(zd(x.id, b.output !== void 0 ? jd(b.output, m.context, a, i.self) : void 0));
        (E == null ? void 0 : E.type) === 'parallel' && !v.has(E) && fh(o, E);

      )
        v.add(E), u.push(zd(E.id)), (R = E), (E = E.parent);
      if (E) continue;
      m = pi(m, { status: 'done', output: lw(m, a, i, m.machine.root, R) });
    }
  }
  return m;
}
function uw(n, a, i, s) {
  for (const o of n) {
    const u = U0(o, a);
    for (const h of o.target || [])
      !oi(h) && (o.source !== h || o.source !== u || o.reenter) && (s.add(h), i.add(h)),
        pr(h, a, i, s);
    const f = hh(o, a);
    for (const h of f) {
      const m = dl(h, u);
      (u == null ? void 0 : u.type) === 'parallel' && m.push(u),
        B0(s, a, i, m, !o.source.parent && o.reenter ? void 0 : u);
    }
  }
}
function pr(n, a, i, s) {
  var o;
  if (oi(n))
    if (a[n.id]) {
      const u = a[n.id];
      for (const f of u) s.add(f), pr(f, a, i, s);
      for (const f of u) yd(f, n.parent, s, a, i);
    } else {
      const u = k0(n);
      for (const f of u.target)
        s.add(f),
          u === ((o = n.parent) == null ? void 0 : o.initial) && i.add(n.parent),
          pr(f, a, i, s);
      for (const f of u.target) yd(f, n.parent, s, a, i);
    }
  else if (n.type === 'compound') {
    const [u] = n.initial.target;
    oi(u) || (s.add(u), i.add(u)), pr(u, a, i, s), yd(u, n, s, a, i);
  } else if (n.type === 'parallel')
    for (const u of Rr(n).filter((f) => !oi(f)))
      [...s].some((f) => ka(f, u)) || (oi(u) || (s.add(u), i.add(u)), pr(u, a, i, s));
}
function B0(n, a, i, s, o) {
  for (const u of s)
    if (((!o || ka(u, o)) && n.add(u), u.type === 'parallel'))
      for (const f of Rr(u).filter((h) => !oi(h)))
        [...n].some((h) => ka(h, f)) || (n.add(f), pr(f, a, i, n));
}
function yd(n, a, i, s, o) {
  B0(i, s, o, dl(n, a));
}
function cw(n, a, i, s, o, u, f, h) {
  let m = n;
  const p = Ud(s, o, u);
  p.sort((v, b) => b.order - v.order);
  let y;
  for (const v of p)
    for (const b of aw(v)) {
      let S;
      b.history === 'deep' ? (S = (x) => ch(x) && ka(x, v)) : (S = (x) => x.parent === v),
        y ?? (y = { ...u }),
        (y[b.id] = Array.from(o).filter(S));
    }
  for (const v of p)
    (m = Cr(m, a, i, [...v.exit, ...v.invoke.map((b) => Tu(b.id))], f, void 0)), o.delete(v);
  return [m, y || u];
}
function fw(n, a) {
  return n.implementations.actions[a];
}
function H0(n, a, i, s, o, u) {
  const { machine: f } = n;
  let h = n;
  for (const m of s) {
    const p = typeof m == 'function',
      y = p ? m : fw(f, typeof m == 'string' ? m : m.type),
      v = { context: h.context, event: a, self: i.self, system: i.system },
      b =
        p || typeof m == 'string'
          ? void 0
          : 'params' in m
            ? typeof m.params == 'function'
              ? m.params({ context: h.context, event: a })
              : m.params
            : void 0;
    if (!y || !('resolve' in y)) {
      i.actionExecutor({
        type: typeof m == 'string' ? m : typeof m == 'object' ? m.type : m.name || '(anonymous)',
        info: v,
        params: b,
        exec: y,
      });
      continue;
    }
    const S = y,
      [x, E, R] = S.resolve(i, h, v, b, y, o);
    (h = x),
      'retryResolve' in S && (u == null || u.push([S, E])),
      'execute' in S &&
        i.actionExecutor({ type: S.type, info: v, params: E, exec: S.execute.bind(null, i, E) }),
      R && (h = H0(h, a, i, R, o, u));
  }
  return h;
}
function Cr(n, a, i, s, o, u) {
  const f = u ? [] : void 0,
    h = H0(n, a, i, s, { internalQueue: o, deferredActorIds: u }, f);
  return (
    f == null ||
      f.forEach(([m, p]) => {
        m.retryResolve(i, h, p);
      }),
    h
  );
}
function vd(n, a, i, s) {
  let o = n;
  const u = [];
  function f(p, y, v) {
    i.system._sendInspectionEvent({
      type: '@xstate.microstep',
      actorRef: i.self,
      event: y,
      snapshot: p,
      _transitions: v,
    }),
      u.push(p);
  }
  if (a.type === kd)
    return (
      (o = pi(lg(o, a, i), { status: 'stopped' })), f(o, a, []), { snapshot: o, microstates: u }
    );
  let h = a;
  if (h.type !== x0) {
    const p = h,
      y = BT(p),
      v = og(p, o);
    if (y && !v.length)
      return (
        (o = pi(n, { status: 'error', error: p.error })),
        f(o, p, []),
        { snapshot: o, microstates: u }
      );
    (o = Bd(v, n, i, h, !1, s)), f(o, p, v);
  }
  let m = !0;
  for (; o.status === 'active'; ) {
    let p = m ? dw(o, h) : [];
    const y = p.length ? o : void 0;
    if (!p.length) {
      if (!s.length) break;
      (h = s.shift()), (p = og(h, o));
    }
    (o = Bd(p, o, i, h, !1, s)), (m = o !== y), f(o, h, p);
  }
  return o.status !== 'active' && lg(o, h, i), { snapshot: o, microstates: u };
}
function lg(n, a, i) {
  return Cr(
    n,
    a,
    i,
    Object.values(n.children).map((s) => Tu(s)),
    [],
    void 0,
  );
}
function og(n, a) {
  return a.machine.getTransitionData(a, n);
}
function dw(n, a) {
  const i = new Set(),
    s = n._nodes.filter(ch);
  for (const o of s)
    e: for (const u of [o].concat(dl(o, void 0)))
      if (u.always) {
        for (const f of u.always)
          if (f.guard === void 0 || wu(f.guard, n.context, a, n)) {
            i.add(f);
            break e;
          }
      }
  return j0(Array.from(i), new Set(n._nodes), n.historyValue);
}
function hw(n, a) {
  const i = lu(ou(n, a));
  return L0(n, [...i]);
}
function pw(n) {
  return !!n && typeof n == 'object' && 'machine' in n && 'value' in n;
}
const mw = function (a) {
    return w0(a, this.value);
  },
  yw = function (a) {
    return this.tags.has(a);
  },
  vw = function (a) {
    const i = this.machine.getTransitionData(this, a);
    return !!(i != null && i.length) && i.some((s) => s.target !== void 0 || s.actions.length);
  },
  gw = function () {
    const {
      _nodes: a,
      tags: i,
      machine: s,
      getMeta: o,
      toJSON: u,
      can: f,
      hasTag: h,
      matches: m,
      ...p
    } = this;
    return { ...p, tags: Array.from(i) };
  },
  bw = function () {
    return this._nodes.reduce((a, i) => (i.meta !== void 0 && (a[i.id] = i.meta), a), {});
  };
function qo(n, a) {
  return {
    status: n.status,
    output: n.output,
    error: n.error,
    machine: a,
    context: n.context,
    _nodes: n._nodes,
    value: L0(a.root, n._nodes),
    tags: new Set(n._nodes.flatMap((i) => i.tags)),
    children: n.children,
    historyValue: n.historyValue || {},
    matches: mw,
    hasTag: yw,
    can: vw,
    getMeta: bw,
    toJSON: gw,
  };
}
function pi(n, a = {}) {
  return qo({ ...n, ...a }, n.machine);
}
function _w(n) {
  if (typeof n != 'object' || n === null) return {};
  const a = {};
  for (const i in n) {
    const s = n[i];
    Array.isArray(s) && (a[i] = s.map((o) => ({ id: o.id })));
  }
  return a;
}
function Sw(n, a) {
  const {
      _nodes: i,
      tags: s,
      machine: o,
      children: u,
      context: f,
      can: h,
      hasTag: m,
      matches: p,
      getMeta: y,
      toJSON: v,
      ...b
    } = n,
    S = {};
  for (const E in u) {
    const R = u[E];
    S[E] = {
      snapshot: R.getPersistedSnapshot(a),
      src: R.src,
      systemId: R._systemId,
      syncSnapshot: R._syncSnapshot,
    };
  }
  return { ...b, context: V0(f), children: S, historyValue: _w(b.historyValue) };
}
function V0(n) {
  let a;
  for (const i in n) {
    const s = n[i];
    if (s && typeof s == 'object')
      if ('sessionId' in s && 'send' in s && 'ref' in s)
        a ?? (a = Array.isArray(n) ? n.slice() : { ...n }), (a[i] = { xstate$$type: uh, id: s.id });
      else {
        const o = V0(s);
        o !== s && (a ?? (a = Array.isArray(n) ? n.slice() : { ...n }), (a[i] = o));
      }
  }
  return a ?? n;
}
function xw(n, a, i, s, { event: o, id: u, delay: f }, { internalQueue: h }) {
  const m = a.machine.implementations.delays;
  if (typeof o == 'string')
    throw new Error(
      `Only event objects may be used with raise; use raise({ type: "${o}" }) instead`,
    );
  const p = typeof o == 'function' ? o(i, s) : o;
  let y;
  if (typeof f == 'string') {
    const v = m && m[f];
    y = typeof v == 'function' ? v(i, s) : v;
  } else y = typeof f == 'function' ? f(i, s) : f;
  return typeof y != 'number' && h.push(p), [a, { event: p, id: u, delay: y }, void 0];
}
function Ew(n, a) {
  const { event: i, delay: s, id: o } = a;
  if (typeof s == 'number') {
    n.defer(() => {
      const u = n.self;
      n.system.scheduler.schedule(u, u, i, s, o);
    });
    return;
  }
}
function Z0(n, a) {
  function i(s, o) {}
  return (
    (i.type = 'xstate.raise'),
    (i.event = n),
    (i.id = a == null ? void 0 : a.id),
    (i.delay = a == null ? void 0 : a.delay),
    (i.resolve = xw),
    (i.execute = Ew),
    i
  );
}
function Tw(n, { machine: a, context: i }, s, o) {
  const u = (f, h) => {
    if (typeof f == 'string') {
      const m = oh(a, f);
      if (!m) throw new Error(`Actor logic '${f}' not implemented in machine '${a.id}'`);
      const p = Ar(m, {
        id: h == null ? void 0 : h.id,
        parent: n.self,
        syncSnapshot: h == null ? void 0 : h.syncSnapshot,
        input:
          typeof (h == null ? void 0 : h.input) == 'function'
            ? h.input({ context: i, event: s, self: n.self })
            : h == null
              ? void 0
              : h.input,
        src: f,
        systemId: h == null ? void 0 : h.systemId,
      });
      return (o[p.id] = p), p;
    } else
      return Ar(f, {
        id: h == null ? void 0 : h.id,
        parent: n.self,
        syncSnapshot: h == null ? void 0 : h.syncSnapshot,
        input: h == null ? void 0 : h.input,
        src: f,
        systemId: h == null ? void 0 : h.systemId,
      });
  };
  return (f, h) => {
    const m = u(f, h);
    return (
      (o[m.id] = m),
      n.defer(() => {
        m._processingStatus !== Rt.Stopped && m.start();
      }),
      m
    );
  };
}
function ww(n, a, i, s, { assignment: o }) {
  if (!a.context)
    throw new Error(
      'Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.',
    );
  const u = {},
    f = {
      context: a.context,
      event: i.event,
      spawn: Tw(n, a, i.event, u),
      self: n.self,
      system: n.system,
    };
  let h = {};
  if (typeof o == 'function') h = o(f, s);
  else
    for (const p of Object.keys(o)) {
      const y = o[p];
      h[p] = typeof y == 'function' ? y(f, s) : y;
    }
  const m = Object.assign({}, a.context, h);
  return [
    pi(a, { context: m, children: Object.keys(u).length ? { ...a.children, ...u } : a.children }),
    void 0,
    void 0,
  ];
}
function Ru(n) {
  function a(i, s) {}
  return (a.type = 'xstate.assign'), (a.assignment = n), (a.resolve = ww), a;
}
function Aw(n, a, i, s, { event: o }) {
  const u = typeof o == 'function' ? o(i, s) : o;
  return [a, { event: u }, void 0];
}
function Rw(n, { event: a }) {
  n.defer(() => n.emit(a));
}
function cr(n) {
  function a(i, s) {}
  return (a.type = 'xstate.emit'), (a.event = n), (a.resolve = Aw), (a.execute = Rw), a;
}
let Hd = (function (n) {
  return (n.Parent = '#_parent'), (n.Internal = '#_internal'), n;
})({});
function Ow(n, a, i, s, { to: o, event: u, id: f, delay: h }, m) {
  var x;
  const p = a.machine.implementations.delays;
  if (typeof u == 'string')
    throw new Error(
      `Only event objects may be used with sendTo; use sendTo({ type: "${u}" }) instead`,
    );
  const y = typeof u == 'function' ? u(i, s) : u;
  let v;
  if (typeof h == 'string') {
    const E = p && p[h];
    v = typeof E == 'function' ? E(i, s) : E;
  } else v = typeof h == 'function' ? h(i, s) : h;
  const b = typeof o == 'function' ? o(i, s) : o;
  let S;
  if (typeof b == 'string') {
    if (
      (b === Hd.Parent
        ? (S = n.self._parent)
        : b === Hd.Internal
          ? (S = n.self)
          : b.startsWith('#_')
            ? (S = a.children[b.slice(2)])
            : (S = (x = m.deferredActorIds) != null && x.includes(b) ? b : a.children[b]),
      !S)
    )
      throw new Error(`Unable to send event to actor '${b}' from machine '${a.machine.id}'.`);
  } else S = b || n.self;
  return [
    a,
    { to: S, targetId: typeof b == 'string' ? b : void 0, event: y, id: f, delay: v },
    void 0,
  ];
}
function Cw(n, a, i) {
  typeof i.to == 'string' && (i.to = a.children[i.to]);
}
function Mw(n, a) {
  n.defer(() => {
    const { to: i, event: s, delay: o, id: u } = a;
    if (typeof o == 'number') {
      n.system.scheduler.schedule(n.self, i, s, o, u);
      return;
    }
    n.system._relay(n.self, i, s.type === LT ? E0(n.self.id, s.data) : s);
  });
}
function Y0(n, a, i) {
  function s(o, u) {}
  return (
    (s.type = 'xstate.sendTo'),
    (s.to = n),
    (s.event = a),
    (s.id = i == null ? void 0 : i.id),
    (s.delay = i == null ? void 0 : i.delay),
    (s.resolve = Ow),
    (s.retryResolve = Cw),
    (s.execute = Mw),
    s
  );
}
function Dw(n, a) {
  return Y0(Hd.Parent, n, a);
}
function Nw(n, a, i, s, { collect: o }) {
  const u = [],
    f = function (m) {
      u.push(m);
    };
  return (
    (f.assign = (...h) => {
      u.push(Ru(...h));
    }),
    (f.cancel = (...h) => {
      u.push(C0(...h));
    }),
    (f.raise = (...h) => {
      u.push(Z0(...h));
    }),
    (f.sendTo = (...h) => {
      u.push(Y0(...h));
    }),
    (f.sendParent = (...h) => {
      u.push(Dw(...h));
    }),
    (f.spawnChild = (...h) => {
      u.push(M0(...h));
    }),
    (f.stopChild = (...h) => {
      u.push(Tu(...h));
    }),
    (f.emit = (...h) => {
      u.push(cr(...h));
    }),
    o(
      {
        context: i.context,
        event: i.event,
        enqueue: f,
        check: (h) => wu(h, a.context, i.event, a),
        self: n.self,
        system: n.system,
      },
      s,
    ),
    [a, void 0, u]
  );
}
function an(n) {
  function a(i, s) {}
  return (a.type = 'xstate.enqueueActions'), (a.collect = n), (a.resolve = Nw), a;
}
const ug = new WeakMap();
function rr(n, a, i) {
  let s = ug.get(n);
  return s ? a in s || (s[a] = i()) : ((s = { [a]: i() }), ug.set(n, s)), s[a];
}
const Lw = {},
  zs = (n) =>
    typeof n == 'string'
      ? { type: n }
      : typeof n == 'function'
        ? 'resolve' in n
          ? { type: n.type }
          : { type: n.name }
        : n;
class Ys {
  constructor(a, i) {
    if (
      ((this.config = a),
      (this.key = void 0),
      (this.id = void 0),
      (this.type = void 0),
      (this.path = void 0),
      (this.states = void 0),
      (this.history = void 0),
      (this.entry = void 0),
      (this.exit = void 0),
      (this.parent = void 0),
      (this.machine = void 0),
      (this.meta = void 0),
      (this.output = void 0),
      (this.order = -1),
      (this.description = void 0),
      (this.tags = []),
      (this.transitions = void 0),
      (this.always = void 0),
      (this.parent = i._parent),
      (this.key = i._key),
      (this.machine = i._machine),
      (this.path = this.parent ? this.parent.path.concat(this.key) : []),
      (this.id = this.config.id || [this.machine.id, ...this.path].join(_0)),
      (this.type =
        this.config.type ||
        (this.config.states && Object.keys(this.config.states).length
          ? 'compound'
          : this.config.history
            ? 'history'
            : 'atomic')),
      (this.description = this.config.description),
      (this.order = this.machine.idMap.size),
      this.machine.idMap.set(this.id, this),
      (this.states = this.config.states
        ? ag(
            this.config.states,
            (s, o) => new Ys(s, { _parent: this, _key: o, _machine: this.machine }),
          )
        : Lw),
      this.type === 'compound' && !this.config.initial)
    )
      throw new Error(
        `No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
      );
    (this.history = this.config.history === !0 ? 'shallow' : this.config.history || !1),
      (this.entry = Oa(this.config.entry).slice()),
      (this.exit = Oa(this.config.exit).slice()),
      (this.meta = this.config.meta),
      (this.output = this.type === 'final' || !this.parent ? this.config.output : void 0),
      (this.tags = Oa(a.tags).slice());
  }
  _initialize() {
    (this.transitions = JT(this)),
      this.config.always && (this.always = ur(this.config.always).map((a) => si(this, S0, a))),
      Object.keys(this.states).forEach((a) => {
        this.states[a]._initialize();
      });
  }
  get definition() {
    return {
      id: this.id,
      key: this.key,
      version: this.machine.version,
      type: this.type,
      initial: this.initial
        ? {
            target: this.initial.target,
            source: this,
            actions: this.initial.actions.map(zs),
            eventType: null,
            reenter: !1,
            toJSON: () => ({
              target: this.initial.target.map((a) => `#${a.id}`),
              source: `#${this.id}`,
              actions: this.initial.actions.map(zs),
              eventType: null,
            }),
          }
        : void 0,
      history: this.history,
      states: ag(this.states, (a) => a.definition),
      on: this.on,
      transitions: [...this.transitions.values()]
        .flat()
        .map((a) => ({ ...a, actions: a.actions.map(zs) })),
      entry: this.entry.map(zs),
      exit: this.exit.map(zs),
      meta: this.meta,
      order: this.order || -1,
      output: this.output,
      invoke: this.invoke,
      description: this.description,
      tags: this.tags,
    };
  }
  toJSON() {
    return this.definition;
  }
  get invoke() {
    return rr(this, 'invoke', () =>
      Oa(this.config.invoke).map((a, i) => {
        const { src: s, systemId: o } = a,
          u = a.id ?? ig(this.id, i),
          f = typeof s == 'string' ? s : `xstate.invoke.${ig(this.id, i)}`;
        return {
          ...a,
          src: f,
          id: u,
          systemId: o,
          toJSON() {
            const { onDone: h, onError: m, ...p } = a;
            return { ...p, type: 'xstate.invoke', src: f, id: u };
          },
        };
      }),
    );
  }
  get on() {
    return rr(this, 'on', () =>
      [...this.transitions]
        .flatMap(([i, s]) => s.map((o) => [i, o]))
        .reduce((i, [s, o]) => ((i[s] = i[s] || []), i[s].push(o), i), {}),
    );
  }
  get after() {
    return rr(this, 'delayedTransitions', () => KT(this));
  }
  get initial() {
    return rr(this, 'initial', () => FT(this, this.config.initial));
  }
  next(a, i) {
    const s = i.type,
      o = [];
    let u;
    const f = rr(this, `candidates-${s}`, () => QT(this, s));
    for (const h of f) {
      const { guard: m } = h,
        p = a.context;
      let y = !1;
      try {
        y = !m || wu(m, p, i, a);
      } catch (v) {
        const b = typeof m == 'string' ? m : typeof m == 'object' ? m.type : void 0;
        throw new Error(`Unable to evaluate guard ${b ? `'${b}' ` : ''}in transition for event '${s}' in state node '${this.id}':
${v.message}`);
      }
      if (y) {
        o.push(...h.actions), (u = h);
        break;
      }
    }
    return u ? [u] : void 0;
  }
  get events() {
    return rr(this, 'events', () => {
      const { states: a } = this,
        i = new Set(this.ownEvents);
      if (a)
        for (const s of Object.keys(a)) {
          const o = a[s];
          if (o.states) for (const u of o.events) i.add(`${u}`);
        }
      return Array.from(i);
    });
  }
  get ownEvents() {
    const a = new Set(
      [...this.transitions.keys()].filter((i) =>
        this.transitions.get(i).some((s) => !(!s.target && !s.actions.length && !s.reenter)),
      ),
    );
    return Array.from(a);
  }
}
const kw = '#';
class ph {
  constructor(a, i) {
    (this.config = a),
      (this.version = void 0),
      (this.schemas = void 0),
      (this.implementations = void 0),
      (this.__xstatenode = !0),
      (this.idMap = new Map()),
      (this.root = void 0),
      (this.id = void 0),
      (this.states = void 0),
      (this.events = void 0),
      (this.id = a.id || '(machine)'),
      (this.implementations = {
        actors: (i == null ? void 0 : i.actors) ?? {},
        actions: (i == null ? void 0 : i.actions) ?? {},
        delays: (i == null ? void 0 : i.delays) ?? {},
        guards: (i == null ? void 0 : i.guards) ?? {},
      }),
      (this.version = this.config.version),
      (this.schemas = this.config.schemas),
      (this.transition = this.transition.bind(this)),
      (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
      (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
      (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
      (this.start = this.start.bind(this)),
      (this.root = new Ys(a, { _key: this.id, _machine: this })),
      this.root._initialize(),
      (this.states = this.root.states),
      (this.events = this.root.events);
  }
  provide(a) {
    const { actions: i, guards: s, actors: o, delays: u } = this.implementations;
    return new ph(this.config, {
      actions: { ...i, ...a.actions },
      guards: { ...s, ...a.guards },
      actors: { ...o, ...a.actors },
      delays: { ...u, ...a.delays },
    });
  }
  resolveState(a) {
    const i = hw(this.root, a.value),
      s = lu(ou(this.root, i));
    return qo(
      {
        _nodes: [...s],
        context: a.context || {},
        children: {},
        status: fh(s, this.root) ? 'done' : a.status || 'active',
        output: a.output,
        error: a.error,
        historyValue: a.historyValue,
      },
      this,
    );
  }
  transition(a, i, s) {
    return vd(a, i, s, []).snapshot;
  }
  microstep(a, i, s) {
    return vd(a, i, s, []).microstates;
  }
  getTransitionData(a, i) {
    return dh(this.root, a.value, a, i) || [];
  }
  getPreInitialState(a, i, s) {
    const { context: o } = this.config,
      u = qo(
        {
          context: typeof o != 'function' && o ? o : {},
          _nodes: [this.root],
          children: {},
          status: 'active',
        },
        this,
      );
    return typeof o == 'function'
      ? Cr(
          u,
          i,
          a,
          [Ru(({ spawn: h, event: m, self: p }) => o({ spawn: h, input: m.input, self: p }))],
          s,
          void 0,
        )
      : u;
  }
  getInitialSnapshot(a, i) {
    const s = T0(i),
      o = [],
      u = this.getPreInitialState(a, s, o),
      f = Bd(
        [
          {
            target: [...z0(this.root)],
            source: this.root,
            reenter: !0,
            actions: [],
            eventType: null,
            toJSON: null,
          },
        ],
        u,
        a,
        s,
        !0,
        o,
      ),
      { snapshot: h } = vd(f, s, a, o);
    return h;
  }
  start(a) {
    Object.values(a.children).forEach((i) => {
      i.getSnapshot().status === 'active' && i.start();
    });
  }
  getStateNodeById(a) {
    const i = lh(a),
      s = i.slice(1),
      o = Au(i[0]) ? i[0].slice(kw.length) : i[0],
      u = this.idMap.get(o);
    if (!u) throw new Error(`Child state node '#${o}' does not exist on machine '${this.id}'`);
    return sl(u, s);
  }
  get definition() {
    return this.root.definition;
  }
  toJSON() {
    return this.definition;
  }
  getPersistedSnapshot(a, i) {
    return Sw(a, i);
  }
  restoreSnapshot(a, i) {
    const s = {},
      o = a.children;
    Object.keys(o).forEach((v) => {
      const b = o[v],
        S = b.snapshot,
        x = b.src,
        E = typeof x == 'string' ? oh(this, x) : x;
      if (!E) return;
      const R = Ar(E, {
        id: v,
        parent: i.self,
        syncSnapshot: b.syncSnapshot,
        snapshot: S,
        src: x,
        systemId: b.systemId,
      });
      s[v] = R;
    });
    function u(v, b) {
      try {
        return b.machine.getStateNodeById(v);
      } catch {
        try {
          return sl(b, v.split('.'));
        } catch {
          return v;
        }
      }
    }
    function f(v, b) {
      if (!v || typeof v != 'object') return {};
      const S = {};
      for (const x in v) {
        const E = v[x];
        (S[x] = E.map((R) => {
          if (R instanceof Ys) return R;
          if (typeof R == 'object' && 'id' in R && typeof R.id == 'string') {
            const M = u(R.id, b);
            if (M instanceof Ys) return M;
          }
        }).filter((R) => R !== void 0)),
          S[x].length === 0 && delete S[x];
      }
      return S;
    }
    const h = f(a.historyValue, this.root),
      m = qo(
        { ...a, children: s, _nodes: Array.from(lu(ou(this.root, a.value))), historyValue: h },
        this,
      ),
      p = new Set();
    function y(v, b) {
      if (!p.has(v)) {
        p.add(v);
        for (const S in v) {
          const x = v[S];
          if (x && typeof x == 'object') {
            if ('xstate$$type' in x && x.xstate$$type === uh) {
              v[S] = b[x.id];
              continue;
            }
            y(x, b);
          }
        }
      }
    }
    return y(m.context, s), m;
  }
}
function zw(n, a) {
  return new ph(n, a);
}
function mh({ schemas: n, actors: a, actions: i, guards: s, delays: o }) {
  return {
    createMachine: (u) => zw({ ...u, schemas: n }, { actors: a, actions: i, guards: s, delays: o }),
  };
}
var $2 = t0();
const q0 = (n, a) => {
  a(n);
  const i = n.getSnapshot().children;
  i &&
    Object.values(i).forEach((s) => {
      q0(s, a);
    });
};
function jw(n) {
  var s, o;
  const a = [];
  q0(n, (u) => {
    a.push([u, u.getSnapshot()]), (u.observers = new Set());
  });
  const i = (o = (s = n.system).getSnapshot) == null ? void 0 : o.call(s);
  n.stop(),
    (n.system._snapshot = i),
    a.forEach(([u, f]) => {
      (u._processingStatus = 0), (u._snapshot = f);
    });
}
function Uw(n, ...[a]) {
  let [[i, s], o] = w.useState(() => {
    const u = Ar(n, a);
    return [n.config, u];
  });
  if (n.config !== i) {
    const u = Ar(n, { ...a, snapshot: s.getPersistedSnapshot({ __unsafeAllowInlineActors: !0 }) });
    o([n.config, u]), (s = u);
  }
  return (
    AT(() => {
      s.logic.implementations = n.implementations;
    }),
    s
  );
}
function Bw(n, ...[a, i]) {
  const s = Uw(n, a);
  return (
    w.useEffect(() => {
      if (!i) return;
      const o = s.subscribe(su(i));
      return () => {
        o.unsubscribe();
      };
    }, [i]),
    w.useEffect(
      () => (
        s.start(),
        () => {
          jw(s);
        }
      ),
      [s],
    ),
    s
  );
}
function Hw(n, a) {
  return n === a;
}
function Vw(n, a, i = Hw) {
  const s = w.useCallback(
      (f) => {
        if (!n) return () => {};
        const { unsubscribe: h } = n.subscribe(f);
        return h;
      },
      [n],
    ),
    o = w.useCallback(() => (n == null ? void 0 : n.getSnapshot()), [n]);
  return n0.useSyncExternalStoreWithSelector(s, o, o, a, i);
}
function Zw(n, a) {
  const i = w.createContext(null),
    s = i.Provider;
  function o({ children: h, logic: m = n, machine: p, options: y }) {
    if (p) throw new Error('The "machine" prop has been deprecated. Please use "logic" instead.');
    const v = Bw(m, { ...a, ...y });
    return w.createElement(s, { value: v, children: h });
  }
  o.displayName = 'ActorProvider';
  function u() {
    const h = w.useContext(i);
    if (!h)
      throw new Error(
        `You used a hook from "${o.displayName}" but it's not inside a <${o.displayName}> component.`,
      );
    return h;
  }
  function f(h, m) {
    const p = u();
    return Vw(p, h, m);
  }
  return { Provider: o, useActorRef: u, useSelector: f };
}
function Yw(n) {
  const { parentRef: a } = n.layerActor.getSnapshot().context;
  a && a.send({ type: 'LAYERS.REMOVE_CHILD', id: n.layerActor.id });
}
function qw(n, a) {
  return {
    layers: n.layers.filter((i) => i.layerActor.id !== a),
    childLayerOrder: n.childLayerOrder.filter((i) => i !== a),
  };
}
function Pw(n) {
  return n.getSnapshot().context.layerType === 'layerGroup';
}
function Gw(n, a, i) {
  return n.layerType === 'layerGroup' && n.parentId && !i
    ? (console.warn('Nested group layers are not allowed.'), !1)
    : a.layers.some((s) => s.layerActor.id === n.layerId)
      ? (console.warn(`Layer with ID ${n.layerId} already exists. Layer not added.`), !1)
      : !0;
}
function $w(n, a) {
  return n.parentId && !a
    ? (console.warn('Unable to find valid parent layer. Layer not added.'), !1)
    : !0;
}
function Xw(n, a) {
  return n >= 0 && n <= a;
}
function Iw(n) {
  if (!n) return console.warn('Unable to find layer to remove.'), !1;
  const { layerType: a } = n.layerActor.getSnapshot().context;
  if (a === 'layerGroup') {
    const { children: i } = n.layerActor.getSnapshot().context;
    if (i.length > 0) return console.warn('Layer group has children. Not removed.'), !1;
  }
  return !0;
}
function cg(n, a) {
  const i = [],
    s = (o) => {
      o.forEach((u) => {
        const f = n.find((m) => m.layerActor.id === u);
        if (!f) return;
        i.push(u);
        const h = f.layerActor.getSnapshot();
        if (h.context.layerType === 'layerGroup') {
          const m = h.context;
          s(m.childLayerOrder);
        }
      });
    };
  return s(a), i;
}
function P0(n, a, i, s) {
  const o = [...n];
  return (
    i !== void 0 && Xw(i, n.length) ? o.splice(i, 0, a) : s === 'top' ? o.push(a) : o.unshift(a), o
  );
}
function X2(n, a) {
  return n.map((i) => a.find((s) => s.layerActor.id === i)).filter((i) => i !== void 0);
}
function ri(n, a) {
  return n.find((i) => i.layerActor.id === a);
}
function Qw(n, a) {
  const i = ri(n, a);
  return !i || !Pw(i.layerActor) ? null : i.layerActor;
}
function Kw(n, a) {
  return a.parentId ? Qw(n, a.parentId) : null;
}
function Jw(n, a, i, s, o) {
  return i ? Fw(n.layers, a, i, s, o) : Ww(n.layers, a, n.childLayerOrder, s, o);
}
function Fw(n, a, i, s, o) {
  return (
    i.send({ type: 'LAYERS.ADD_CHILD', child: a.layerActor, index: s, position: o }),
    { layers: [...n, a] }
  );
}
function Ww(n, a, i, s, o) {
  const u = P0(i, a.layerActor.id, s, o);
  return { layers: [...n, a], childLayerOrder: u };
}
function eA(n) {
  return n.getSnapshot().matches({ enabled: 'visible' });
}
function tA() {
  return mh({
    actions: {
      'Notify children of visibility change': an(({ context: n, enqueue: a }, i) => {
        n.children.forEach((s) => {
          a.sendTo(s, { type: i.visible ? 'PARENT.VISIBLE' : 'PARENT.HIDDEN' });
        });
      }),
      'Notify Parent of visibility change': an(({ context: n, enqueue: a }) => {
        n.parentRef && a.sendTo(n.parentRef, { type: 'CHILD.VISIBLE', layerId: n.layerId });
      }),
      'Notify Manager of visibility change': an(({ context: n, enqueue: a }, i) => {
        a.sendTo(n.layerManagerRef, {
          type: 'LAYER.UPDATE_VISIBILITY',
          layerId: n.layerId,
          visible: i.visible,
        });
      }),
      'Change Layer Data': an(({ context: n, enqueue: a }, i) => {
        a.assign({ layerData: i.layerData }),
          a.sendTo(n.layerManagerRef, {
            type: 'LAYER.UPDATE_LAYER_DATA',
            layerId: n.layerId,
            layerData: i.layerData,
          });
      }),
      'Update Children': Ru(({ context: n }, a) => {
        const i = P0(n.childLayerOrder, a.child.id, a.index, a.position);
        return { children: [...n.children, a.child], childLayerOrder: i };
      }),
      'Remove Child': an(({ context: n, enqueue: a }, i) => {
        a.assign({
          children: n.children.filter((s) => s.id !== i.id),
          childLayerOrder: n.childLayerOrder.filter((s) => s !== i.id),
        });
      }),
    },
  }).createMachine({
    id: 'layerGroup',
    description: 'A machine that represents a collection of layers that can be toggled as a group',
    initial: 'disabled',
    context: ({ input: n }) => ({
      layerManagerRef: n.layerManagerRef,
      layerId: n.layerId,
      parentRef: n.parentRef,
      children: [],
      childLayerOrder: [],
      layerName: n.layerName,
      layerType: 'layerGroup',
      listMode: n.listMode ?? 'show',
      layerData: n.layerData,
    }),
    states: {
      enabled: {
        initial: 'visible',
        description: 'The layer group is enabled',
        states: {
          visible: {
            description: 'The layer group should appear visible on the map',
            entry: [
              { type: 'Notify Parent of visibility change' },
              {
                type: 'Notify children of visibility change',
                params: ({ context: n }) => ({ children: n.children, visible: !0 }),
              },
              {
                type: 'Notify Manager of visibility change',
                params: ({ context: n }) => ({
                  layerManagerRef: n.layerManagerRef,
                  layerId: n.layerId,
                  visible: !0,
                }),
              },
            ],
            exit: [
              {
                type: 'Notify Manager of visibility change',
                params: ({ context: n }) => ({
                  layerManagerRef: n.layerManagerRef,
                  layerId: n.layerId,
                  visible: !1,
                }),
              },
              {
                type: 'Notify children of visibility change',
                params: ({ context: n }) => ({ children: n.children, visible: !1 }),
              },
            ],
            on: { 'PARENT.HIDDEN': { target: 'hidden' } },
          },
          hidden: {
            description: 'The layer group should appear hidden on the map as its parent is hidden',
            on: { 'PARENT.VISIBLE': { target: 'visible' } },
          },
        },
        on: { 'LAYER.DISABLED': { target: 'disabled' } },
      },
      disabled: {
        description: 'The layer group is disabled',
        initial: 'hidden',
        states: { hidden: {} },
        on: { 'LAYER.ENABLED': { target: 'enabled' }, 'CHILD.VISIBLE': { target: 'enabled' } },
      },
    },
    on: {
      'CHILD.VISIBLE': { actions: [{ type: 'Notify Parent of visibility change' }] },
      'LAYERS.ADD_CHILD': {
        actions: [
          {
            type: 'Update Children',
            params: ({ event: n }) => ({ child: n.child, index: n.index, position: n.position }),
          },
        ],
      },
      'LAYERS.REMOVE_CHILD': {
        actions: [{ type: 'Remove Child', params: ({ event: n }) => ({ id: n.id }) }],
      },
      'LAYER.SET_LAYER_DATA': {
        actions: [
          { type: 'Change Layer Data', params: ({ event: n }) => ({ layerData: n.layerData }) },
        ],
      },
    },
  });
}
function nA() {
  return mh({
    actions: {
      'Notify Parent that layer is visible': an(({ context: n, enqueue: a }) => {
        n.parentRef && a.sendTo(n.parentRef, { type: 'CHILD.VISIBLE', layerId: n.layerId });
      }),
      'Notify Manager of visibility change': an(({ context: n, enqueue: a }, i) =>
        a.sendTo(n.layerManagerRef, {
          type: 'LAYER.UPDATE_VISIBILITY',
          layerId: n.layerId,
          visible: i.visible,
        }),
      ),
      'Change Layer Opacity': an(({ context: n, enqueue: a }, i) => {
        a.sendTo(n.layerManagerRef, {
          type: 'LAYER.UPDATE_OPACITY',
          layerId: n.layerId,
          opacity: i.opacity,
        }),
          a.assign({ opacity: i.opacity });
      }),
      'Change Layer Time Info': an(({ context: n, enqueue: a }, i) => {
        a.assign({ timeInfo: i.timeInfo }),
          a.sendTo(n.layerManagerRef, {
            type: 'LAYER.UPDATE_TIME_INFO',
            layerId: n.layerId,
            timeInfo: i.timeInfo,
          });
      }),
      'Change Layer Data': an(({ context: n, enqueue: a }, i) => {
        a.assign({ layerData: i.layerData }),
          a.sendTo(n.layerManagerRef, {
            type: 'LAYER.UPDATE_LAYER_DATA',
            layerId: n.layerId,
            layerData: i.layerData,
          });
      }),
    },
  }).createMachine({
    id: 'layer',
    description: 'A machine that represents a layer on the map.',
    context: ({ input: n }) => ({
      layerManagerRef: n.layerManagerRef,
      parentRef: n.parentRef,
      layerId: n.layerId,
      layerName: n.layerName,
      listMode: n.listMode ?? 'show',
      opacity: n.opacity ?? 1,
      layerType: 'layer',
      timeInfo: n.timeInfo,
      layerData: n.layerData,
    }),
    initial: 'disabled',
    states: {
      enabled: {
        initial: 'visible',
        description: 'The layer is enabled',
        states: {
          visible: {
            description: 'The layer should appear visible on the map',
            entry: [
              { type: 'Notify Parent that layer is visible' },
              { type: 'Notify Manager of visibility change', params: { visible: !0 } },
            ],
            exit: [{ type: 'Notify Manager of visibility change', params: { visible: !1 } }],
            on: { 'PARENT.HIDDEN': { target: 'hidden' } },
          },
          hidden: {
            description: 'The layer should appear hidden on the map as its parent is hidden',
            on: { 'PARENT.VISIBLE': { target: 'visible' } },
          },
        },
        on: { 'LAYER.DISABLED': { target: 'disabled' } },
      },
      disabled: {
        description: 'The layer is disabled',
        initial: 'hidden',
        states: { hidden: { description: 'The layer should always appear hidden on the map' } },
        on: { 'LAYER.ENABLED': { target: 'enabled' } },
      },
    },
    on: {
      'LAYER.SET_OPACITY': {
        actions: [
          { type: 'Change Layer Opacity', params: ({ event: n }) => ({ opacity: n.opacity }) },
        ],
      },
      'LAYER.SET_TIME_INFO': {
        actions: [
          { type: 'Change Layer Time Info', params: ({ event: n }) => ({ timeInfo: n.timeInfo }) },
        ],
      },
      'LAYER.SET_LAYER_DATA': {
        actions: [
          { type: 'Change Layer Data', params: ({ event: n }) => ({ layerData: n.layerData }) },
        ],
      },
    },
  });
}
function aA() {
  return mh({
    actors: { layerMachine: nA(), layerGroupMachine: tA() },
    guards: {
      'validate new layer configuration': ({ context: n }, a) =>
        Gw(a.layerConfig, n, n.allowNestedGroupLayers),
    },
    actions: {
      'Add new layer': an(({ enqueue: n, check: a, context: i, self: s }, o) => {
        const { layerConfig: u, index: f, position: h, visible: m } = o;
        let p = !1;
        if (!a({ type: 'validate new layer configuration', params: o })) return;
        const y = Kw(i.layers, u);
        $w(u, y) &&
          (n.assign(({ spawn: v }) => {
            let b;
            return (
              u.layerType === 'layerGroup'
                ? (b = {
                    type: 'layerGroup',
                    layerActor: v('layerGroupMachine', {
                      id: u.layerId,
                      input: { layerManagerRef: s, parentRef: y, ...u },
                    }),
                  })
                : (b = {
                    type: 'layer',
                    layerActor: v('layerMachine', {
                      id: u.layerId,
                      input: { layerManagerRef: s, parentRef: y, ...u },
                    }),
                  }),
              m === 'inherit' && y && (p = eA(y)),
              m && (b.layerActor.send({ type: 'LAYER.ENABLED' }), (p = !0)),
              Jw(i, b, y, f, h)
            );
          }),
          n.emit(({ context: v }) => ({
            type: 'LAYER.ADDED',
            layerId: u.layerId,
            visible: p,
            layerActor: ri(v.layers, u.layerId).layerActor,
          })));
      }),
      'Remove layer': an(({ enqueue: n, context: a }, i) => {
        const { layerId: s } = i,
          o = ri(a.layers, s);
        !o ||
          !Iw(o) ||
          (Yw(o),
          n.stopChild(s),
          n.assign(() => qw(a, s)),
          n.emit({ type: 'LAYER.REMOVED', layerId: s }),
          n.emit({ type: 'LAYER.ORDER_CHANGED', layerOrder: cg(a.layers, a.childLayerOrder) }));
      }),
      'Emit update layer order': cr(({ context: n }) => ({
        type: 'LAYER.ORDER_CHANGED',
        layerOrder: cg(n.layers, n.childLayerOrder),
      })),
      'Reset layer manager': Ru(
        ({ context: n }) => (
          n.layers.forEach((a) => {
            Tu(a.layerActor.id);
          }),
          { layers: [], childLayerOrder: [] }
        ),
      ),
    },
  }).createMachine({
    id: 'layerManager',
    context: ({ input: n }) => ({
      layers: [],
      childLayerOrder: [],
      allowNestedGroupLayers: n.allowNestedGroupLayers,
    }),
    on: {
      'LAYER.UPDATE_VISIBILITY': {
        actions: cr(({ event: n, context: a }) => ({
          type: 'LAYER.VISIBILITY_CHANGED',
          layerId: n.layerId,
          visible: n.visible,
          layerActor: ri(a.layers, n.layerId).layerActor,
        })),
      },
      'LAYER.REORDER': { actions: [{ type: 'Emit update layer order' }] },
      'LAYER.UPDATE_OPACITY': {
        actions: cr(({ event: n, context: a }) => ({
          type: 'LAYER.OPACITY_CHANGED',
          layerId: n.layerId,
          opacity: n.opacity,
          layerActor: ri(a.layers, n.layerId).layerActor,
        })),
      },
      'LAYER.UPDATE_TIME_INFO': {
        actions: cr(({ event: n, context: a }) => ({
          type: 'LAYER.TIME_INFO_CHANGED',
          layerId: n.layerId,
          timeInfo: n.timeInfo,
          layerActor: ri(a.layers, n.layerId).layerActor,
        })),
      },
      'LAYER.UPDATE_LAYER_DATA': {
        actions: cr(({ event: n, context: a }) => ({
          type: 'LAYER.LAYER_DATA_CHANGED',
          layerId: n.layerId,
          layerData: n.layerData,
          layerActor: ri(a.layers, n.layerId).layerActor,
        })),
      },
      'LAYER.ADD': {
        actions: [
          { type: 'Add new layer', params: ({ event: n }) => n.params },
          { type: 'Emit update layer order' },
        ],
      },
      'LAYER.REMOVE': {
        actions: [
          { type: 'Remove layer', params: ({ event: n }) => ({ layerId: n.layerId }) },
          { type: 'Emit update layer order' },
        ],
      },
      RESET: { actions: ['Reset layer manager'] },
    },
  });
}
const iA = Zw(aA(), { input: { allowNestedGroupLayers: !1 } }),
  rA = _r.memo(({ children: n }) => ea(iA.Provider, { children: n }));
var sA =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  lA = jg(function (n) {
    return (
      sA.test(n) || (n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91)
    );
  }),
  oA = lA,
  uA = function (a) {
    return a !== 'theme';
  },
  fg = function (a) {
    return typeof a == 'string' && a.charCodeAt(0) > 96 ? oA : uA;
  },
  dg = function (a, i, s) {
    var o;
    if (i) {
      var u = i.shouldForwardProp;
      o =
        a.__emotion_forwardProp && u
          ? function (f) {
              return a.__emotion_forwardProp(f) && u(f);
            }
          : u;
    }
    return typeof o != 'function' && s && (o = a.__emotion_forwardProp), o;
  },
  cA = function (a) {
    var i = a.cache,
      s = a.serialized,
      o = a.isStringTag;
    return (
      Kd(i, s, o),
      Yg(function () {
        return Hg(i, s, o);
      }),
      null
    );
  },
  fA = function n(a, i) {
    var s = a.__emotion_real === a,
      o = (s && a.__emotion_base) || a,
      u,
      f;
    i !== void 0 && ((u = i.label), (f = i.target));
    var h = dg(a, i, s),
      m = h || fg(o),
      p = !m('as');
    return function () {
      var y = arguments,
        v = s && a.__emotion_styles !== void 0 ? a.__emotion_styles.slice(0) : [];
      if ((u !== void 0 && v.push('label:' + u + ';'), y[0] == null || y[0].raw === void 0))
        v.push.apply(v, y);
      else {
        var b = y[0];
        v.push(b[0]);
        for (var S = y.length, x = 1; x < S; x++) v.push(y[x], b[x]);
      }
      var E = Pg(function (R, M, L) {
        var U = (p && R.as) || o,
          X = '',
          C = [],
          Z = R;
        if (R.theme == null) {
          Z = {};
          for (var H in R) Z[H] = R[H];
          Z.theme = w.useContext(Gg);
        }
        typeof R.className == 'string'
          ? (X = Bg(M.registered, C, R.className))
          : R.className != null && (X = R.className + ' ');
        var Y = Zg(v.concat(C), M.registered, Z);
        (X += M.key + '-' + Y.name), f !== void 0 && (X += ' ' + f);
        var V = p && h === void 0 ? fg(U) : m,
          F = {};
        for (var ne in R) (p && ne === 'as') || (V(ne) && (F[ne] = R[ne]));
        return (
          (F.className = X),
          L && (F.ref = L),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(cA, { cache: M, serialized: Y, isStringTag: typeof U == 'string' }),
            w.createElement(U, F),
          )
        );
      });
      return (
        (E.displayName =
          u !== void 0
            ? u
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (E.defaultProps = a.defaultProps),
        (E.__emotion_real = E),
        (E.__emotion_base = o),
        (E.__emotion_styles = v),
        (E.__emotion_forwardProp = h),
        Object.defineProperty(E, 'toString', {
          value: function () {
            return '.' + f;
          },
        }),
        (E.withComponent = function (R, M) {
          var L = n(R, Ed({}, i, M, { shouldForwardProp: dg(E, M, !0) }));
          return L.apply(void 0, v);
        }),
        E
      );
    };
  },
  dA = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Vd = fA.bind(null);
dA.forEach(function (n) {
  Vd[n] = Vd(n);
});
function hg(n, a) {
  if (typeof n == 'function') return n(a);
  n != null && (n.current = a);
}
function G0(...n) {
  return (a) => {
    let i = !1;
    const s = n.map((o) => {
      const u = hg(o, a);
      return !i && typeof u == 'function' && (i = !0), u;
    });
    if (i)
      return () => {
        for (let o = 0; o < s.length; o++) {
          const u = s[o];
          typeof u == 'function' ? u() : hg(n[o], null);
        }
      };
  };
}
function yi(...n) {
  return w.useCallback(G0(...n), n);
}
function $0(n) {
  const a = pA(n),
    i = w.forwardRef((s, o) => {
      const { children: u, ...f } = s,
        h = w.Children.toArray(u),
        m = h.find(mA);
      if (m) {
        const p = m.props.children,
          y = h.map((v) =>
            v === m
              ? w.Children.count(p) > 1
                ? w.Children.only(null)
                : w.isValidElement(p)
                  ? p.props.children
                  : null
              : v,
          );
        return ee.jsx(a, {
          ...f,
          ref: o,
          children: w.isValidElement(p) ? w.cloneElement(p, void 0, y) : null,
        });
      }
      return ee.jsx(a, { ...f, ref: o, children: u });
    });
  return (i.displayName = `${n}.Slot`), i;
}
var hA = $0('Slot');
function pA(n) {
  const a = w.forwardRef((i, s) => {
    const { children: o, ...u } = i;
    if (w.isValidElement(o)) {
      const f = vA(o),
        h = yA(u, o.props);
      return o.type !== w.Fragment && (h.ref = s ? G0(s, f) : f), w.cloneElement(o, h);
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (a.displayName = `${n}.SlotClone`), a;
}
var X0 = Symbol('radix.slottable');
function I0(n) {
  const a = ({ children: i }) => ee.jsx(ee.Fragment, { children: i });
  return (a.displayName = `${n}.Slottable`), (a.__radixId = X0), a;
}
var I2 = I0('Slottable');
function mA(n) {
  return (
    w.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === X0
  );
}
function yA(n, a) {
  const i = { ...a };
  for (const s in a) {
    const o = n[s],
      u = a[s];
    /^on[A-Z]/.test(s)
      ? o && u
        ? (i[s] = (...h) => {
            u(...h), o(...h);
          })
        : o && (i[s] = o)
      : s === 'style'
        ? (i[s] = { ...o, ...u })
        : s === 'className' && (i[s] = [o, u].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function vA(n) {
  var s, o;
  let a = (s = Object.getOwnPropertyDescriptor(n.props, 'ref')) == null ? void 0 : s.get,
    i = a && 'isReactWarning' in a && a.isReactWarning;
  return i
    ? n.ref
    : ((a = (o = Object.getOwnPropertyDescriptor(n, 'ref')) == null ? void 0 : o.get),
      (i = a && 'isReactWarning' in a && a.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var gA = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  Ha = gA.reduce((n, a) => {
    const i = $0(`Primitive.${a}`),
      s = w.forwardRef((o, u) => {
        const { asChild: f, ...h } = o,
          m = f ? i : a;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), ee.jsx(m, { ...h, ref: u })
        );
      });
    return (s.displayName = `Primitive.${a}`), { ...n, [a]: s };
  }, {});
function bA(n, a) {
  n && rh.flushSync(() => n.dispatchEvent(a));
}
var _A = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  SA = 'VisuallyHidden',
  Q0 = w.forwardRef((n, a) => ee.jsx(Ha.span, { ...n, ref: a, style: { ..._A, ...n.style } }));
Q0.displayName = SA;
var xA = Q0;
function Q2(n, a) {
  const i = w.createContext(a),
    s = (u) => {
      const { children: f, ...h } = u,
        m = w.useMemo(() => h, Object.values(h));
      return ee.jsx(i.Provider, { value: m, children: f });
    };
  s.displayName = n + 'Provider';
  function o(u) {
    const f = w.useContext(i);
    if (f) return f;
    if (a !== void 0) return a;
    throw new Error(`\`${u}\` must be used within \`${n}\``);
  }
  return [s, o];
}
function K0(n, a = []) {
  let i = [];
  function s(u, f) {
    const h = w.createContext(f),
      m = i.length;
    i = [...i, f];
    const p = (v) => {
      var M;
      const { scope: b, children: S, ...x } = v,
        E = ((M = b == null ? void 0 : b[n]) == null ? void 0 : M[m]) || h,
        R = w.useMemo(() => x, Object.values(x));
      return ee.jsx(E.Provider, { value: R, children: S });
    };
    p.displayName = u + 'Provider';
    function y(v, b) {
      var E;
      const S = ((E = b == null ? void 0 : b[n]) == null ? void 0 : E[m]) || h,
        x = w.useContext(S);
      if (x) return x;
      if (f !== void 0) return f;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return [p, y];
  }
  const o = () => {
    const u = i.map((f) => w.createContext(f));
    return function (h) {
      const m = (h == null ? void 0 : h[n]) || u;
      return w.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: m } }), [h, m]);
    };
  };
  return (o.scopeName = n), [s, EA(o, ...a)];
}
function EA(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const i = () => {
    const s = n.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (u) {
      const f = s.reduce((h, { useScope: m, scopeName: p }) => {
        const v = m(u)[`__scope${p}`];
        return { ...h, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${a.scopeName}`]: f }), [f]);
    };
  };
  return (i.scopeName = a.scopeName), i;
}
function Wn(n, a, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (o) {
    if ((n == null || n(o), i === !1 || !o.defaultPrevented)) return a == null ? void 0 : a(o);
  };
}
var za = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  TA = Go[' useInsertionEffect '.trim().toString()] || za;
function wA({ prop: n, defaultProp: a, onChange: i = () => {}, caller: s }) {
  const [o, u, f] = AA({ defaultProp: a, onChange: i }),
    h = n !== void 0,
    m = h ? n : o;
  {
    const y = w.useRef(n !== void 0);
    w.useEffect(() => {
      const v = y.current;
      v !== h &&
        console.warn(
          `${s} is changing from ${v ? 'controlled' : 'uncontrolled'} to ${h ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (y.current = h);
    }, [h, s]);
  }
  const p = w.useCallback(
    (y) => {
      var v;
      if (h) {
        const b = RA(y) ? y(n) : y;
        b !== n && ((v = f.current) == null || v.call(f, b));
      } else u(y);
    },
    [h, n, u, f],
  );
  return [m, p];
}
function AA({ defaultProp: n, onChange: a }) {
  const [i, s] = w.useState(n),
    o = w.useRef(i),
    u = w.useRef(a);
  return (
    TA(() => {
      u.current = a;
    }, [a]),
    w.useEffect(() => {
      var f;
      o.current !== i && ((f = u.current) == null || f.call(u, i), (o.current = i));
    }, [i, o]),
    [i, s, u]
  );
}
function RA(n) {
  return typeof n == 'function';
}
function OA(n, a) {
  return w.useReducer((i, s) => a[i][s] ?? i, n);
}
var yh = (n) => {
  const { present: a, children: i } = n,
    s = CA(a),
    o = typeof i == 'function' ? i({ present: s.isPresent }) : w.Children.only(i),
    u = yi(s.ref, MA(o));
  return typeof i == 'function' || s.isPresent ? w.cloneElement(o, { ref: u }) : null;
};
yh.displayName = 'Presence';
function CA(n) {
  const [a, i] = w.useState(),
    s = w.useRef(null),
    o = w.useRef(n),
    u = w.useRef('none'),
    f = n ? 'mounted' : 'unmounted',
    [h, m] = OA(f, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    w.useEffect(() => {
      const p = zo(s.current);
      u.current = h === 'mounted' ? p : 'none';
    }, [h]),
    za(() => {
      const p = s.current,
        y = o.current;
      if (y !== n) {
        const b = u.current,
          S = zo(p);
        n
          ? m('MOUNT')
          : S === 'none' || (p == null ? void 0 : p.display) === 'none'
            ? m('UNMOUNT')
            : m(y && b !== S ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = n);
      }
    }, [n, m]),
    za(() => {
      if (a) {
        let p;
        const y = a.ownerDocument.defaultView ?? window,
          v = (S) => {
            const E = zo(s.current).includes(S.animationName);
            if (S.target === a && E && (m('ANIMATION_END'), !o.current)) {
              const R = a.style.animationFillMode;
              (a.style.animationFillMode = 'forwards'),
                (p = y.setTimeout(() => {
                  a.style.animationFillMode === 'forwards' && (a.style.animationFillMode = R);
                }));
            }
          },
          b = (S) => {
            S.target === a && (u.current = zo(s.current));
          };
        return (
          a.addEventListener('animationstart', b),
          a.addEventListener('animationcancel', v),
          a.addEventListener('animationend', v),
          () => {
            y.clearTimeout(p),
              a.removeEventListener('animationstart', b),
              a.removeEventListener('animationcancel', v),
              a.removeEventListener('animationend', v);
          }
        );
      } else m('ANIMATION_END');
    }, [a, m]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(h),
      ref: w.useCallback((p) => {
        (s.current = p ? getComputedStyle(p) : null), i(p);
      }, []),
    }
  );
}
function zo(n) {
  return (n == null ? void 0 : n.animationName) || 'none';
}
function MA(n) {
  var s, o;
  let a = (s = Object.getOwnPropertyDescriptor(n.props, 'ref')) == null ? void 0 : s.get,
    i = a && 'isReactWarning' in a && a.isReactWarning;
  return i
    ? n.ref
    : ((a = (o = Object.getOwnPropertyDescriptor(n, 'ref')) == null ? void 0 : o.get),
      (i = a && 'isReactWarning' in a && a.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var DA = Go[' useId '.trim().toString()] || (() => {}),
  NA = 0;
function LA(n) {
  const [a, i] = w.useState(DA());
  return (
    za(() => {
      i((s) => s ?? String(NA++));
    }, [n]),
    n || (a ? `radix-${a}` : '')
  );
}
var J0 = w.createContext(void 0),
  kA = (n) => {
    const { dir: a, children: i } = n;
    return ee.jsx(J0.Provider, { value: a, children: i });
  };
function K2(n) {
  const a = w.useContext(J0);
  return n || a || 'ltr';
}
var zA = kA;
function Ou(n) {
  const a = w.useRef(n);
  return (
    w.useEffect(() => {
      a.current = n;
    }),
    w.useMemo(
      () =>
        (...i) => {
          var s;
          return (s = a.current) == null ? void 0 : s.call(a, ...i);
        },
      [],
    )
  );
}
function jA(n, a = globalThis == null ? void 0 : globalThis.document) {
  const i = Ou(n);
  w.useEffect(() => {
    const s = (o) => {
      o.key === 'Escape' && i(o);
    };
    return (
      a.addEventListener('keydown', s, { capture: !0 }),
      () => a.removeEventListener('keydown', s, { capture: !0 })
    );
  }, [i, a]);
}
var UA = 'DismissableLayer',
  Zd = 'dismissableLayer.update',
  BA = 'dismissableLayer.pointerDownOutside',
  HA = 'dismissableLayer.focusOutside',
  pg,
  F0 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  W0 = w.forwardRef((n, a) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: u,
        onInteractOutside: f,
        onDismiss: h,
        ...m
      } = n,
      p = w.useContext(F0),
      [y, v] = w.useState(null),
      b =
        (y == null ? void 0 : y.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, S] = w.useState({}),
      x = yi(a, (H) => v(H)),
      E = Array.from(p.layers),
      [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = E.indexOf(R),
      L = y ? E.indexOf(y) : -1,
      U = p.layersWithOutsidePointerEventsDisabled.size > 0,
      X = L >= M,
      C = YA((H) => {
        const Y = H.target,
          V = [...p.branches].some((F) => F.contains(Y));
        !X || V || (o == null || o(H), f == null || f(H), H.defaultPrevented || h == null || h());
      }, b),
      Z = qA((H) => {
        const Y = H.target;
        [...p.branches].some((F) => F.contains(Y)) ||
          (u == null || u(H), f == null || f(H), H.defaultPrevented || h == null || h());
      }, b);
    return (
      jA((H) => {
        L === p.layers.size - 1 &&
          (s == null || s(H), !H.defaultPrevented && h && (H.preventDefault(), h()));
      }, b),
      w.useEffect(() => {
        if (y)
          return (
            i &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((pg = b.body.style.pointerEvents), (b.body.style.pointerEvents = 'none')),
              p.layersWithOutsidePointerEventsDisabled.add(y)),
            p.layers.add(y),
            mg(),
            () => {
              i &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = pg);
            }
          );
      }, [y, b, i, p]),
      w.useEffect(
        () => () => {
          y && (p.layers.delete(y), p.layersWithOutsidePointerEventsDisabled.delete(y), mg());
        },
        [y, p],
      ),
      w.useEffect(() => {
        const H = () => S({});
        return document.addEventListener(Zd, H), () => document.removeEventListener(Zd, H);
      }, []),
      ee.jsx(Ha.div, {
        ...m,
        ref: x,
        style: { pointerEvents: U ? (X ? 'auto' : 'none') : void 0, ...n.style },
        onFocusCapture: Wn(n.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Wn(n.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Wn(n.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
W0.displayName = UA;
var VA = 'DismissableLayerBranch',
  ZA = w.forwardRef((n, a) => {
    const i = w.useContext(F0),
      s = w.useRef(null),
      o = yi(a, s);
    return (
      w.useEffect(() => {
        const u = s.current;
        if (u)
          return (
            i.branches.add(u),
            () => {
              i.branches.delete(u);
            }
          );
      }, [i.branches]),
      ee.jsx(Ha.div, { ...n, ref: o })
    );
  });
ZA.displayName = VA;
function YA(n, a = globalThis == null ? void 0 : globalThis.document) {
  const i = Ou(n),
    s = w.useRef(!1),
    o = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const u = (h) => {
          if (h.target && !s.current) {
            let m = function () {
              eb(BA, i, p, { discrete: !0 });
            };
            const p = { originalEvent: h };
            h.pointerType === 'touch'
              ? (a.removeEventListener('click', o.current),
                (o.current = m),
                a.addEventListener('click', o.current, { once: !0 }))
              : m();
          } else a.removeEventListener('click', o.current);
          s.current = !1;
        },
        f = window.setTimeout(() => {
          a.addEventListener('pointerdown', u);
        }, 0);
      return () => {
        window.clearTimeout(f),
          a.removeEventListener('pointerdown', u),
          a.removeEventListener('click', o.current);
      };
    }, [a, i]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function qA(n, a = globalThis == null ? void 0 : globalThis.document) {
  const i = Ou(n),
    s = w.useRef(!1);
  return (
    w.useEffect(() => {
      const o = (u) => {
        u.target && !s.current && eb(HA, i, { originalEvent: u }, { discrete: !1 });
      };
      return a.addEventListener('focusin', o), () => a.removeEventListener('focusin', o);
    }, [a, i]),
    { onFocusCapture: () => (s.current = !0), onBlurCapture: () => (s.current = !1) }
  );
}
function mg() {
  const n = new CustomEvent(Zd);
  document.dispatchEvent(n);
}
function eb(n, a, i, { discrete: s }) {
  const o = i.originalEvent.target,
    u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: i });
  a && o.addEventListener(n, a, { once: !0 }), s ? bA(o, u) : o.dispatchEvent(u);
}
var PA = 'Portal',
  vh = w.forwardRef((n, a) => {
    var h;
    const { container: i, ...s } = n,
      [o, u] = w.useState(!1);
    za(() => u(!0), []);
    const f =
      i ||
      (o && ((h = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : h.body));
    return f ? Px.createPortal(ee.jsx(Ha.div, { ...s, ref: a }), f) : null;
  });
vh.displayName = PA;
var J2 = vh;
function GA(n) {
  const [a, i] = w.useState(void 0);
  return (
    za(() => {
      if (n) {
        i({ width: n.offsetWidth, height: n.offsetHeight });
        const s = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const u = o[0];
          let f, h;
          if ('borderBoxSize' in u) {
            const m = u.borderBoxSize,
              p = Array.isArray(m) ? m[0] : m;
            (f = p.inlineSize), (h = p.blockSize);
          } else (f = n.offsetWidth), (h = n.offsetHeight);
          i({ width: f, height: h });
        });
        return s.observe(n, { box: 'border-box' }), () => s.unobserve(n);
      } else i(void 0);
    }, [n]),
    a
  );
}
const tb = ['top', 'right', 'bottom', 'left'],
  yg = ['start', 'end'],
  vg = tb.reduce((n, a) => n.concat(a, a + '-' + yg[0], a + '-' + yg[1]), []),
  ja = Math.min,
  Ht = Math.max,
  uu = Math.round,
  jo = Math.floor,
  An = (n) => ({ x: n, y: n }),
  $A = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  XA = { start: 'end', end: 'start' };
function Yd(n, a, i) {
  return Ht(n, ja(a, i));
}
function Mn(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function pn(n) {
  return n.split('-')[0];
}
function dn(n) {
  return n.split('-')[1];
}
function gh(n) {
  return n === 'x' ? 'y' : 'x';
}
function bh(n) {
  return n === 'y' ? 'height' : 'width';
}
function Ua(n) {
  return ['top', 'bottom'].includes(pn(n)) ? 'y' : 'x';
}
function _h(n) {
  return gh(Ua(n));
}
function nb(n, a, i) {
  i === void 0 && (i = !1);
  const s = dn(n),
    o = _h(n),
    u = bh(o);
  let f =
    o === 'x' ? (s === (i ? 'end' : 'start') ? 'right' : 'left') : s === 'start' ? 'bottom' : 'top';
  return a.reference[u] > a.floating[u] && (f = fu(f)), [f, fu(f)];
}
function IA(n) {
  const a = fu(n);
  return [cu(n), a, cu(a)];
}
function cu(n) {
  return n.replace(/start|end/g, (a) => XA[a]);
}
function QA(n, a, i) {
  const s = ['left', 'right'],
    o = ['right', 'left'],
    u = ['top', 'bottom'],
    f = ['bottom', 'top'];
  switch (n) {
    case 'top':
    case 'bottom':
      return i ? (a ? o : s) : a ? s : o;
    case 'left':
    case 'right':
      return a ? u : f;
    default:
      return [];
  }
}
function KA(n, a, i, s) {
  const o = dn(n);
  let u = QA(pn(n), i === 'start', s);
  return o && ((u = u.map((f) => f + '-' + o)), a && (u = u.concat(u.map(cu)))), u;
}
function fu(n) {
  return n.replace(/left|right|bottom|top/g, (a) => $A[a]);
}
function JA(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function ab(n) {
  return typeof n != 'number' ? JA(n) : { top: n, right: n, bottom: n, left: n };
}
function du(n) {
  const { x: a, y: i, width: s, height: o } = n;
  return { width: s, height: o, top: i, left: a, right: a + s, bottom: i + o, x: a, y: i };
}
function gg(n, a, i) {
  let { reference: s, floating: o } = n;
  const u = Ua(a),
    f = _h(a),
    h = bh(f),
    m = pn(a),
    p = u === 'y',
    y = s.x + s.width / 2 - o.width / 2,
    v = s.y + s.height / 2 - o.height / 2,
    b = s[h] / 2 - o[h] / 2;
  let S;
  switch (m) {
    case 'top':
      S = { x: y, y: s.y - o.height };
      break;
    case 'bottom':
      S = { x: y, y: s.y + s.height };
      break;
    case 'right':
      S = { x: s.x + s.width, y: v };
      break;
    case 'left':
      S = { x: s.x - o.width, y: v };
      break;
    default:
      S = { x: s.x, y: s.y };
  }
  switch (dn(a)) {
    case 'start':
      S[f] -= b * (i && p ? -1 : 1);
      break;
    case 'end':
      S[f] += b * (i && p ? -1 : 1);
      break;
  }
  return S;
}
const FA = async (n, a, i) => {
  const { placement: s = 'bottom', strategy: o = 'absolute', middleware: u = [], platform: f } = i,
    h = u.filter(Boolean),
    m = await (f.isRTL == null ? void 0 : f.isRTL(a));
  let p = await f.getElementRects({ reference: n, floating: a, strategy: o }),
    { x: y, y: v } = gg(p, s, m),
    b = s,
    S = {},
    x = 0;
  for (let E = 0; E < h.length; E++) {
    const { name: R, fn: M } = h[E],
      {
        x: L,
        y: U,
        data: X,
        reset: C,
      } = await M({
        x: y,
        y: v,
        initialPlacement: s,
        placement: b,
        strategy: o,
        middlewareData: S,
        rects: p,
        platform: f,
        elements: { reference: n, floating: a },
      });
    (y = L ?? y),
      (v = U ?? v),
      (S = { ...S, [R]: { ...S[R], ...X } }),
      C &&
        x <= 50 &&
        (x++,
        typeof C == 'object' &&
          (C.placement && (b = C.placement),
          C.rects &&
            (p =
              C.rects === !0
                ? await f.getElementRects({ reference: n, floating: a, strategy: o })
                : C.rects),
          ({ x: y, y: v } = gg(p, b, m))),
        (E = -1));
  }
  return { x: y, y: v, placement: b, strategy: o, middlewareData: S };
};
async function Mr(n, a) {
  var i;
  a === void 0 && (a = {});
  const { x: s, y: o, platform: u, rects: f, elements: h, strategy: m } = n,
    {
      boundary: p = 'clippingAncestors',
      rootBoundary: y = 'viewport',
      elementContext: v = 'floating',
      altBoundary: b = !1,
      padding: S = 0,
    } = Mn(a, n),
    x = ab(S),
    R = h[b ? (v === 'floating' ? 'reference' : 'floating') : v],
    M = du(
      await u.getClippingRect({
        element:
          (i = await (u.isElement == null ? void 0 : u.isElement(R))) == null || i
            ? R
            : R.contextElement ||
              (await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating))),
        boundary: p,
        rootBoundary: y,
        strategy: m,
      }),
    ),
    L =
      v === 'floating'
        ? { x: s, y: o, width: f.floating.width, height: f.floating.height }
        : f.reference,
    U = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)),
    X = (await (u.isElement == null ? void 0 : u.isElement(U)))
      ? (await (u.getScale == null ? void 0 : u.getScale(U))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = du(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: L,
            offsetParent: U,
            strategy: m,
          })
        : L,
    );
  return {
    top: (M.top - C.top + x.top) / X.y,
    bottom: (C.bottom - M.bottom + x.bottom) / X.y,
    left: (M.left - C.left + x.left) / X.x,
    right: (C.right - M.right + x.right) / X.x,
  };
}
const WA = (n) => ({
  name: 'arrow',
  options: n,
  async fn(a) {
    const { x: i, y: s, placement: o, rects: u, platform: f, elements: h, middlewareData: m } = a,
      { element: p, padding: y = 0 } = Mn(n, a) || {};
    if (p == null) return {};
    const v = ab(y),
      b = { x: i, y: s },
      S = _h(o),
      x = bh(S),
      E = await f.getDimensions(p),
      R = S === 'y',
      M = R ? 'top' : 'left',
      L = R ? 'bottom' : 'right',
      U = R ? 'clientHeight' : 'clientWidth',
      X = u.reference[x] + u.reference[S] - b[S] - u.floating[x],
      C = b[S] - u.reference[S],
      Z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p));
    let H = Z ? Z[U] : 0;
    (!H || !(await (f.isElement == null ? void 0 : f.isElement(Z)))) &&
      (H = h.floating[U] || u.floating[x]);
    const Y = X / 2 - C / 2,
      V = H / 2 - E[x] / 2 - 1,
      F = ja(v[M], V),
      ne = ja(v[L], V),
      W = F,
      te = H - E[x] - ne,
      de = H / 2 - E[x] / 2 + Y,
      le = Yd(W, de, te),
      N =
        !m.arrow &&
        dn(o) != null &&
        de !== le &&
        u.reference[x] / 2 - (de < W ? F : ne) - E[x] / 2 < 0,
      G = N ? (de < W ? de - W : de - te) : 0;
    return {
      [S]: b[S] + G,
      data: { [S]: le, centerOffset: de - le - G, ...(N && { alignmentOffset: G }) },
      reset: N,
    };
  },
});
function eR(n, a, i) {
  return (
    n
      ? [...i.filter((o) => dn(o) === n), ...i.filter((o) => dn(o) !== n)]
      : i.filter((o) => pn(o) === o)
  ).filter((o) => (n ? dn(o) === n || (a ? cu(o) !== o : !1) : !0));
}
const tR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'autoPlacement',
        options: n,
        async fn(a) {
          var i, s, o;
          const { rects: u, middlewareData: f, placement: h, platform: m, elements: p } = a,
            {
              crossAxis: y = !1,
              alignment: v,
              allowedPlacements: b = vg,
              autoAlignment: S = !0,
              ...x
            } = Mn(n, a),
            E = v !== void 0 || b === vg ? eR(v || null, S, b) : b,
            R = await Mr(a, x),
            M = ((i = f.autoPlacement) == null ? void 0 : i.index) || 0,
            L = E[M];
          if (L == null) return {};
          const U = nb(L, u, await (m.isRTL == null ? void 0 : m.isRTL(p.floating)));
          if (h !== L) return { reset: { placement: E[0] } };
          const X = [R[pn(L)], R[U[0]], R[U[1]]],
            C = [
              ...(((s = f.autoPlacement) == null ? void 0 : s.overflows) || []),
              { placement: L, overflows: X },
            ],
            Z = E[M + 1];
          if (Z) return { data: { index: M + 1, overflows: C }, reset: { placement: Z } };
          const H = C.map((F) => {
              const ne = dn(F.placement);
              return [
                F.placement,
                ne && y ? F.overflows.slice(0, 2).reduce((W, te) => W + te, 0) : F.overflows[0],
                F.overflows,
              ];
            }).sort((F, ne) => F[1] - ne[1]),
            V =
              ((o = H.filter((F) => F[2].slice(0, dn(F[0]) ? 2 : 3).every((ne) => ne <= 0))[0]) ==
              null
                ? void 0
                : o[0]) || H[0][0];
          return V !== h ? { data: { index: M + 1, overflows: C }, reset: { placement: V } } : {};
        },
      }
    );
  },
  nR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'flip',
        options: n,
        async fn(a) {
          var i, s;
          const {
              placement: o,
              middlewareData: u,
              rects: f,
              initialPlacement: h,
              platform: m,
              elements: p,
            } = a,
            {
              mainAxis: y = !0,
              crossAxis: v = !0,
              fallbackPlacements: b,
              fallbackStrategy: S = 'bestFit',
              fallbackAxisSideDirection: x = 'none',
              flipAlignment: E = !0,
              ...R
            } = Mn(n, a);
          if ((i = u.arrow) != null && i.alignmentOffset) return {};
          const M = pn(o),
            L = Ua(h),
            U = pn(h) === h,
            X = await (m.isRTL == null ? void 0 : m.isRTL(p.floating)),
            C = b || (U || !E ? [fu(h)] : IA(h)),
            Z = x !== 'none';
          !b && Z && C.push(...KA(h, E, x, X));
          const H = [h, ...C],
            Y = await Mr(a, R),
            V = [];
          let F = ((s = u.flip) == null ? void 0 : s.overflows) || [];
          if ((y && V.push(Y[M]), v)) {
            const de = nb(o, f, X);
            V.push(Y[de[0]], Y[de[1]]);
          }
          if (((F = [...F, { placement: o, overflows: V }]), !V.every((de) => de <= 0))) {
            var ne, W;
            const de = (((ne = u.flip) == null ? void 0 : ne.index) || 0) + 1,
              le = H[de];
            if (le) return { data: { index: de, overflows: F }, reset: { placement: le } };
            let N =
              (W = F.filter((G) => G.overflows[0] <= 0).sort(
                (G, K) => G.overflows[1] - K.overflows[1],
              )[0]) == null
                ? void 0
                : W.placement;
            if (!N)
              switch (S) {
                case 'bestFit': {
                  var te;
                  const G =
                    (te = F.filter((K) => {
                      if (Z) {
                        const ce = Ua(K.placement);
                        return ce === L || ce === 'y';
                      }
                      return !0;
                    })
                      .map((K) => [
                        K.placement,
                        K.overflows.filter((ce) => ce > 0).reduce((ce, A) => ce + A, 0),
                      ])
                      .sort((K, ce) => K[1] - ce[1])[0]) == null
                      ? void 0
                      : te[0];
                  G && (N = G);
                  break;
                }
                case 'initialPlacement':
                  N = h;
                  break;
              }
            if (o !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function bg(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width,
  };
}
function _g(n) {
  return tb.some((a) => n[a] >= 0);
}
const aR = function (n) {
  return (
    n === void 0 && (n = {}),
    {
      name: 'hide',
      options: n,
      async fn(a) {
        const { rects: i } = a,
          { strategy: s = 'referenceHidden', ...o } = Mn(n, a);
        switch (s) {
          case 'referenceHidden': {
            const u = await Mr(a, { ...o, elementContext: 'reference' }),
              f = bg(u, i.reference);
            return { data: { referenceHiddenOffsets: f, referenceHidden: _g(f) } };
          }
          case 'escaped': {
            const u = await Mr(a, { ...o, altBoundary: !0 }),
              f = bg(u, i.floating);
            return { data: { escapedOffsets: f, escaped: _g(f) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function iR(n, a) {
  const { placement: i, platform: s, elements: o } = n,
    u = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)),
    f = pn(i),
    h = dn(i),
    m = Ua(i) === 'y',
    p = ['left', 'top'].includes(f) ? -1 : 1,
    y = u && m ? -1 : 1,
    v = Mn(a, n);
  let {
    mainAxis: b,
    crossAxis: S,
    alignmentAxis: x,
  } = typeof v == 'number'
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: v.mainAxis || 0, crossAxis: v.crossAxis || 0, alignmentAxis: v.alignmentAxis };
  return (
    h && typeof x == 'number' && (S = h === 'end' ? x * -1 : x),
    m ? { x: S * y, y: b * p } : { x: b * p, y: S * y }
  );
}
const rR = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: 'offset',
        options: n,
        async fn(a) {
          var i, s;
          const { x: o, y: u, placement: f, middlewareData: h } = a,
            m = await iR(a, n);
          return f === ((i = h.offset) == null ? void 0 : i.placement) &&
            (s = h.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: o + m.x, y: u + m.y, data: { ...m, placement: f } };
        },
      }
    );
  },
  sR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'shift',
        options: n,
        async fn(a) {
          const { x: i, y: s, placement: o } = a,
            {
              mainAxis: u = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (R) => {
                  let { x: M, y: L } = R;
                  return { x: M, y: L };
                },
              },
              ...m
            } = Mn(n, a),
            p = { x: i, y: s },
            y = await Mr(a, m),
            v = Ua(pn(o)),
            b = gh(v);
          let S = p[b],
            x = p[v];
          if (u) {
            const R = b === 'y' ? 'top' : 'left',
              M = b === 'y' ? 'bottom' : 'right',
              L = S + y[R],
              U = S - y[M];
            S = Yd(L, S, U);
          }
          if (f) {
            const R = v === 'y' ? 'top' : 'left',
              M = v === 'y' ? 'bottom' : 'right',
              L = x + y[R],
              U = x - y[M];
            x = Yd(L, x, U);
          }
          const E = h.fn({ ...a, [b]: S, [v]: x });
          return { ...E, data: { x: E.x - i, y: E.y - s, enabled: { [b]: u, [v]: f } } };
        },
      }
    );
  },
  lR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(a) {
          const { x: i, y: s, placement: o, rects: u, middlewareData: f } = a,
            { offset: h = 0, mainAxis: m = !0, crossAxis: p = !0 } = Mn(n, a),
            y = { x: i, y: s },
            v = Ua(o),
            b = gh(v);
          let S = y[b],
            x = y[v];
          const E = Mn(h, a),
            R =
              typeof E == 'number'
                ? { mainAxis: E, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...E };
          if (m) {
            const U = b === 'y' ? 'height' : 'width',
              X = u.reference[b] - u.floating[U] + R.mainAxis,
              C = u.reference[b] + u.reference[U] - R.mainAxis;
            S < X ? (S = X) : S > C && (S = C);
          }
          if (p) {
            var M, L;
            const U = b === 'y' ? 'width' : 'height',
              X = ['top', 'left'].includes(pn(o)),
              C =
                u.reference[v] -
                u.floating[U] +
                ((X && ((M = f.offset) == null ? void 0 : M[v])) || 0) +
                (X ? 0 : R.crossAxis),
              Z =
                u.reference[v] +
                u.reference[U] +
                (X ? 0 : ((L = f.offset) == null ? void 0 : L[v]) || 0) -
                (X ? R.crossAxis : 0);
            x < C ? (x = C) : x > Z && (x = Z);
          }
          return { [b]: S, [v]: x };
        },
      }
    );
  },
  oR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'size',
        options: n,
        async fn(a) {
          var i, s;
          const { placement: o, rects: u, platform: f, elements: h } = a,
            { apply: m = () => {}, ...p } = Mn(n, a),
            y = await Mr(a, p),
            v = pn(o),
            b = dn(o),
            S = Ua(o) === 'y',
            { width: x, height: E } = u.floating;
          let R, M;
          v === 'top' || v === 'bottom'
            ? ((R = v),
              (M =
                b === ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((M = v), (R = b === 'end' ? 'top' : 'bottom'));
          const L = E - y.top - y.bottom,
            U = x - y.left - y.right,
            X = ja(E - y[R], L),
            C = ja(x - y[M], U),
            Z = !a.middlewareData.shift;
          let H = X,
            Y = C;
          if (
            ((i = a.middlewareData.shift) != null && i.enabled.x && (Y = U),
            (s = a.middlewareData.shift) != null && s.enabled.y && (H = L),
            Z && !b)
          ) {
            const F = Ht(y.left, 0),
              ne = Ht(y.right, 0),
              W = Ht(y.top, 0),
              te = Ht(y.bottom, 0);
            S
              ? (Y = x - 2 * (F !== 0 || ne !== 0 ? F + ne : Ht(y.left, y.right)))
              : (H = E - 2 * (W !== 0 || te !== 0 ? W + te : Ht(y.top, y.bottom)));
          }
          await m({ ...a, availableWidth: Y, availableHeight: H });
          const V = await f.getDimensions(h.floating);
          return x !== V.width || E !== V.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function Cu() {
  return typeof window < 'u';
}
function kr(n) {
  return ib(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function qt(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Ln(n) {
  var a;
  return (a = (ib(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : a.documentElement;
}
function ib(n) {
  return Cu() ? n instanceof Node || n instanceof qt(n).Node : !1;
}
function mn(n) {
  return Cu() ? n instanceof Element || n instanceof qt(n).Element : !1;
}
function Dn(n) {
  return Cu() ? n instanceof HTMLElement || n instanceof qt(n).HTMLElement : !1;
}
function Sg(n) {
  return !Cu() || typeof ShadowRoot > 'u'
    ? !1
    : n instanceof ShadowRoot || n instanceof qt(n).ShadowRoot;
}
function hl(n) {
  const { overflow: a, overflowX: i, overflowY: s, display: o } = yn(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + s + i) && !['inline', 'contents'].includes(o);
}
function uR(n) {
  return ['table', 'td', 'th'].includes(kr(n));
}
function Mu(n) {
  return [':popover-open', ':modal'].some((a) => {
    try {
      return n.matches(a);
    } catch {
      return !1;
    }
  });
}
function Sh(n) {
  const a = xh(),
    i = mn(n) ? yn(n) : n;
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((s) =>
      i[s] ? i[s] !== 'none' : !1,
    ) ||
    (i.containerType ? i.containerType !== 'normal' : !1) ||
    (!a && (i.backdropFilter ? i.backdropFilter !== 'none' : !1)) ||
    (!a && (i.filter ? i.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((s) =>
      (i.willChange || '').includes(s),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((s) => (i.contain || '').includes(s))
  );
}
function cR(n) {
  let a = Ba(n);
  for (; Dn(a) && !Dr(a); ) {
    if (Sh(a)) return a;
    if (Mu(a)) return null;
    a = Ba(a);
  }
  return null;
}
function xh() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Dr(n) {
  return ['html', 'body', '#document'].includes(kr(n));
}
function yn(n) {
  return qt(n).getComputedStyle(n);
}
function Du(n) {
  return mn(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Ba(n) {
  if (kr(n) === 'html') return n;
  const a = n.assignedSlot || n.parentNode || (Sg(n) && n.host) || Ln(n);
  return Sg(a) ? a.host : a;
}
function rb(n) {
  const a = Ba(n);
  return Dr(a) ? (n.ownerDocument ? n.ownerDocument.body : n.body) : Dn(a) && hl(a) ? a : rb(a);
}
function ll(n, a, i) {
  var s;
  a === void 0 && (a = []), i === void 0 && (i = !0);
  const o = rb(n),
    u = o === ((s = n.ownerDocument) == null ? void 0 : s.body),
    f = qt(o);
  if (u) {
    const h = qd(f);
    return a.concat(f, f.visualViewport || [], hl(o) ? o : [], h && i ? ll(h) : []);
  }
  return a.concat(o, ll(o, [], i));
}
function qd(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function sb(n) {
  const a = yn(n);
  let i = parseFloat(a.width) || 0,
    s = parseFloat(a.height) || 0;
  const o = Dn(n),
    u = o ? n.offsetWidth : i,
    f = o ? n.offsetHeight : s,
    h = uu(i) !== u || uu(s) !== f;
  return h && ((i = u), (s = f)), { width: i, height: s, $: h };
}
function Eh(n) {
  return mn(n) ? n : n.contextElement;
}
function br(n) {
  const a = Eh(n);
  if (!Dn(a)) return An(1);
  const i = a.getBoundingClientRect(),
    { width: s, height: o, $: u } = sb(a);
  let f = (u ? uu(i.width) : i.width) / s,
    h = (u ? uu(i.height) : i.height) / o;
  return (
    (!f || !Number.isFinite(f)) && (f = 1), (!h || !Number.isFinite(h)) && (h = 1), { x: f, y: h }
  );
}
const fR = An(0);
function lb(n) {
  const a = qt(n);
  return !xh() || !a.visualViewport
    ? fR
    : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop };
}
function dR(n, a, i) {
  return a === void 0 && (a = !1), !i || (a && i !== qt(n)) ? !1 : a;
}
function mi(n, a, i, s) {
  a === void 0 && (a = !1), i === void 0 && (i = !1);
  const o = n.getBoundingClientRect(),
    u = Eh(n);
  let f = An(1);
  a && (s ? mn(s) && (f = br(s)) : (f = br(n)));
  const h = dR(u, i, s) ? lb(u) : An(0);
  let m = (o.left + h.x) / f.x,
    p = (o.top + h.y) / f.y,
    y = o.width / f.x,
    v = o.height / f.y;
  if (u) {
    const b = qt(u),
      S = s && mn(s) ? qt(s) : s;
    let x = b,
      E = qd(x);
    for (; E && s && S !== x; ) {
      const R = br(E),
        M = E.getBoundingClientRect(),
        L = yn(E),
        U = M.left + (E.clientLeft + parseFloat(L.paddingLeft)) * R.x,
        X = M.top + (E.clientTop + parseFloat(L.paddingTop)) * R.y;
      (m *= R.x), (p *= R.y), (y *= R.x), (v *= R.y), (m += U), (p += X), (x = qt(E)), (E = qd(x));
    }
  }
  return du({ width: y, height: v, x: m, y: p });
}
function Th(n, a) {
  const i = Du(n).scrollLeft;
  return a ? a.left + i : mi(Ln(n)).left + i;
}
function ob(n, a, i) {
  i === void 0 && (i = !1);
  const s = n.getBoundingClientRect(),
    o = s.left + a.scrollLeft - (i ? 0 : Th(n, s)),
    u = s.top + a.scrollTop;
  return { x: o, y: u };
}
function hR(n) {
  let { elements: a, rect: i, offsetParent: s, strategy: o } = n;
  const u = o === 'fixed',
    f = Ln(s),
    h = a ? Mu(a.floating) : !1;
  if (s === f || (h && u)) return i;
  let m = { scrollLeft: 0, scrollTop: 0 },
    p = An(1);
  const y = An(0),
    v = Dn(s);
  if ((v || (!v && !u)) && ((kr(s) !== 'body' || hl(f)) && (m = Du(s)), Dn(s))) {
    const S = mi(s);
    (p = br(s)), (y.x = S.x + s.clientLeft), (y.y = S.y + s.clientTop);
  }
  const b = f && !v && !u ? ob(f, m, !0) : An(0);
  return {
    width: i.width * p.x,
    height: i.height * p.y,
    x: i.x * p.x - m.scrollLeft * p.x + y.x + b.x,
    y: i.y * p.y - m.scrollTop * p.y + y.y + b.y,
  };
}
function pR(n) {
  return Array.from(n.getClientRects());
}
function mR(n) {
  const a = Ln(n),
    i = Du(n),
    s = n.ownerDocument.body,
    o = Ht(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth),
    u = Ht(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -i.scrollLeft + Th(n);
  const h = -i.scrollTop;
  return (
    yn(s).direction === 'rtl' && (f += Ht(a.clientWidth, s.clientWidth) - o),
    { width: o, height: u, x: f, y: h }
  );
}
function yR(n, a) {
  const i = qt(n),
    s = Ln(n),
    o = i.visualViewport;
  let u = s.clientWidth,
    f = s.clientHeight,
    h = 0,
    m = 0;
  if (o) {
    (u = o.width), (f = o.height);
    const p = xh();
    (!p || (p && a === 'fixed')) && ((h = o.offsetLeft), (m = o.offsetTop));
  }
  return { width: u, height: f, x: h, y: m };
}
function vR(n, a) {
  const i = mi(n, !0, a === 'fixed'),
    s = i.top + n.clientTop,
    o = i.left + n.clientLeft,
    u = Dn(n) ? br(n) : An(1),
    f = n.clientWidth * u.x,
    h = n.clientHeight * u.y,
    m = o * u.x,
    p = s * u.y;
  return { width: f, height: h, x: m, y: p };
}
function xg(n, a, i) {
  let s;
  if (a === 'viewport') s = yR(n, i);
  else if (a === 'document') s = mR(Ln(n));
  else if (mn(a)) s = vR(a, i);
  else {
    const o = lb(n);
    s = { x: a.x - o.x, y: a.y - o.y, width: a.width, height: a.height };
  }
  return du(s);
}
function ub(n, a) {
  const i = Ba(n);
  return i === a || !mn(i) || Dr(i) ? !1 : yn(i).position === 'fixed' || ub(i, a);
}
function gR(n, a) {
  const i = a.get(n);
  if (i) return i;
  let s = ll(n, [], !1).filter((h) => mn(h) && kr(h) !== 'body'),
    o = null;
  const u = yn(n).position === 'fixed';
  let f = u ? Ba(n) : n;
  for (; mn(f) && !Dr(f); ) {
    const h = yn(f),
      m = Sh(f);
    !m && h.position === 'fixed' && (o = null),
      (
        u
          ? !m && !o
          : (!m && h.position === 'static' && !!o && ['absolute', 'fixed'].includes(o.position)) ||
            (hl(f) && !m && ub(n, f))
      )
        ? (s = s.filter((y) => y !== f))
        : (o = h),
      (f = Ba(f));
  }
  return a.set(n, s), s;
}
function bR(n) {
  let { element: a, boundary: i, rootBoundary: s, strategy: o } = n;
  const f = [...(i === 'clippingAncestors' ? (Mu(a) ? [] : gR(a, this._c)) : [].concat(i)), s],
    h = f[0],
    m = f.reduce(
      (p, y) => {
        const v = xg(a, y, o);
        return (
          (p.top = Ht(v.top, p.top)),
          (p.right = ja(v.right, p.right)),
          (p.bottom = ja(v.bottom, p.bottom)),
          (p.left = Ht(v.left, p.left)),
          p
        );
      },
      xg(a, h, o),
    );
  return { width: m.right - m.left, height: m.bottom - m.top, x: m.left, y: m.top };
}
function _R(n) {
  const { width: a, height: i } = sb(n);
  return { width: a, height: i };
}
function SR(n, a, i) {
  const s = Dn(a),
    o = Ln(a),
    u = i === 'fixed',
    f = mi(n, !0, u, a);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const m = An(0);
  if (s || (!s && !u))
    if (((kr(a) !== 'body' || hl(o)) && (h = Du(a)), s)) {
      const b = mi(a, !0, u, a);
      (m.x = b.x + a.clientLeft), (m.y = b.y + a.clientTop);
    } else o && (m.x = Th(o));
  const p = o && !s && !u ? ob(o, h) : An(0),
    y = f.left + h.scrollLeft - m.x - p.x,
    v = f.top + h.scrollTop - m.y - p.y;
  return { x: y, y: v, width: f.width, height: f.height };
}
function gd(n) {
  return yn(n).position === 'static';
}
function Eg(n, a) {
  if (!Dn(n) || yn(n).position === 'fixed') return null;
  if (a) return a(n);
  let i = n.offsetParent;
  return Ln(n) === i && (i = i.ownerDocument.body), i;
}
function cb(n, a) {
  const i = qt(n);
  if (Mu(n)) return i;
  if (!Dn(n)) {
    let o = Ba(n);
    for (; o && !Dr(o); ) {
      if (mn(o) && !gd(o)) return o;
      o = Ba(o);
    }
    return i;
  }
  let s = Eg(n, a);
  for (; s && uR(s) && gd(s); ) s = Eg(s, a);
  return s && Dr(s) && gd(s) && !Sh(s) ? i : s || cR(n) || i;
}
const xR = async function (n) {
  const a = this.getOffsetParent || cb,
    i = this.getDimensions,
    s = await i(n.floating);
  return {
    reference: SR(n.reference, await a(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function ER(n) {
  return yn(n).direction === 'rtl';
}
const TR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hR,
  getDocumentElement: Ln,
  getClippingRect: bR,
  getOffsetParent: cb,
  getElementRects: xR,
  getClientRects: pR,
  getDimensions: _R,
  getScale: br,
  isElement: mn,
  isRTL: ER,
};
function fb(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function wR(n, a) {
  let i = null,
    s;
  const o = Ln(n);
  function u() {
    var h;
    clearTimeout(s), (h = i) == null || h.disconnect(), (i = null);
  }
  function f(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), u();
    const p = n.getBoundingClientRect(),
      { left: y, top: v, width: b, height: S } = p;
    if ((h || a(), !b || !S)) return;
    const x = jo(v),
      E = jo(o.clientWidth - (y + b)),
      R = jo(o.clientHeight - (v + S)),
      M = jo(y),
      U = {
        rootMargin: -x + 'px ' + -E + 'px ' + -R + 'px ' + -M + 'px',
        threshold: Ht(0, ja(1, m)) || 1,
      };
    let X = !0;
    function C(Z) {
      const H = Z[0].intersectionRatio;
      if (H !== m) {
        if (!X) return f();
        H
          ? f(!1, H)
          : (s = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      H === 1 && !fb(p, n.getBoundingClientRect()) && f(), (X = !1);
    }
    try {
      i = new IntersectionObserver(C, { ...U, root: o.ownerDocument });
    } catch {
      i = new IntersectionObserver(C, U);
    }
    i.observe(n);
  }
  return f(!0), u;
}
function AR(n, a, i, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: u = !0,
      elementResize: f = typeof ResizeObserver == 'function',
      layoutShift: h = typeof IntersectionObserver == 'function',
      animationFrame: m = !1,
    } = s,
    p = Eh(n),
    y = o || u ? [...(p ? ll(p) : []), ...ll(a)] : [];
  y.forEach((M) => {
    o && M.addEventListener('scroll', i, { passive: !0 }), u && M.addEventListener('resize', i);
  });
  const v = p && h ? wR(p, i) : null;
  let b = -1,
    S = null;
  f &&
    ((S = new ResizeObserver((M) => {
      let [L] = M;
      L &&
        L.target === p &&
        S &&
        (S.unobserve(a),
        cancelAnimationFrame(b),
        (b = requestAnimationFrame(() => {
          var U;
          (U = S) == null || U.observe(a);
        }))),
        i();
    })),
    p && !m && S.observe(p),
    S.observe(a));
  let x,
    E = m ? mi(n) : null;
  m && R();
  function R() {
    const M = mi(n);
    E && !fb(E, M) && i(), (E = M), (x = requestAnimationFrame(R));
  }
  return (
    i(),
    () => {
      var M;
      y.forEach((L) => {
        o && L.removeEventListener('scroll', i), u && L.removeEventListener('resize', i);
      }),
        v == null || v(),
        (M = S) == null || M.disconnect(),
        (S = null),
        m && cancelAnimationFrame(x);
    }
  );
}
const RR = rR,
  F2 = tR,
  OR = sR,
  CR = nR,
  MR = oR,
  DR = aR,
  Tg = WA,
  NR = lR,
  LR = (n, a, i) => {
    const s = new Map(),
      o = { platform: TR, ...i },
      u = { ...o.platform, _c: s };
    return FA(n, a, { ...o, platform: u });
  };
var Po = typeof document < 'u' ? w.useLayoutEffect : w.useEffect;
function hu(n, a) {
  if (n === a) return !0;
  if (typeof n != typeof a) return !1;
  if (typeof n == 'function' && n.toString() === a.toString()) return !0;
  let i, s, o;
  if (n && a && typeof n == 'object') {
    if (Array.isArray(n)) {
      if (((i = n.length), i !== a.length)) return !1;
      for (s = i; s-- !== 0; ) if (!hu(n[s], a[s])) return !1;
      return !0;
    }
    if (((o = Object.keys(n)), (i = o.length), i !== Object.keys(a).length)) return !1;
    for (s = i; s-- !== 0; ) if (!{}.hasOwnProperty.call(a, o[s])) return !1;
    for (s = i; s-- !== 0; ) {
      const u = o[s];
      if (!(u === '_owner' && n.$$typeof) && !hu(n[u], a[u])) return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function db(n) {
  return typeof window > 'u' ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wg(n, a) {
  const i = db(n);
  return Math.round(a * i) / i;
}
function bd(n) {
  const a = w.useRef(n);
  return (
    Po(() => {
      a.current = n;
    }),
    a
  );
}
function kR(n) {
  n === void 0 && (n = {});
  const {
      placement: a = 'bottom',
      strategy: i = 'absolute',
      middleware: s = [],
      platform: o,
      elements: { reference: u, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: m,
      open: p,
    } = n,
    [y, v] = w.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: a,
      middlewareData: {},
      isPositioned: !1,
    }),
    [b, S] = w.useState(s);
  hu(b, s) || S(s);
  const [x, E] = w.useState(null),
    [R, M] = w.useState(null),
    L = w.useCallback((K) => {
      K !== Z.current && ((Z.current = K), E(K));
    }, []),
    U = w.useCallback((K) => {
      K !== H.current && ((H.current = K), M(K));
    }, []),
    X = u || x,
    C = f || R,
    Z = w.useRef(null),
    H = w.useRef(null),
    Y = w.useRef(y),
    V = m != null,
    F = bd(m),
    ne = bd(o),
    W = bd(p),
    te = w.useCallback(() => {
      if (!Z.current || !H.current) return;
      const K = { placement: a, strategy: i, middleware: b };
      ne.current && (K.platform = ne.current),
        LR(Z.current, H.current, K).then((ce) => {
          const A = { ...ce, isPositioned: W.current !== !1 };
          de.current &&
            !hu(Y.current, A) &&
            ((Y.current = A),
            rh.flushSync(() => {
              v(A);
            }));
        });
    }, [b, a, i, ne, W]);
  Po(() => {
    p === !1 &&
      Y.current.isPositioned &&
      ((Y.current.isPositioned = !1), v((K) => ({ ...K, isPositioned: !1 })));
  }, [p]);
  const de = w.useRef(!1);
  Po(
    () => (
      (de.current = !0),
      () => {
        de.current = !1;
      }
    ),
    [],
  ),
    Po(() => {
      if ((X && (Z.current = X), C && (H.current = C), X && C)) {
        if (F.current) return F.current(X, C, te);
        te();
      }
    }, [X, C, te, F, V]);
  const le = w.useMemo(
      () => ({ reference: Z, floating: H, setReference: L, setFloating: U }),
      [L, U],
    ),
    N = w.useMemo(() => ({ reference: X, floating: C }), [X, C]),
    G = w.useMemo(() => {
      const K = { position: i, left: 0, top: 0 };
      if (!N.floating) return K;
      const ce = wg(N.floating, y.x),
        A = wg(N.floating, y.y);
      return h
        ? {
            ...K,
            transform: 'translate(' + ce + 'px, ' + A + 'px)',
            ...(db(N.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: i, left: ce, top: A };
    }, [i, h, N.floating, y.x, y.y]);
  return w.useMemo(
    () => ({ ...y, update: te, refs: le, elements: N, floatingStyles: G }),
    [y, te, le, N, G],
  );
}
const zR = (n) => {
    function a(i) {
      return {}.hasOwnProperty.call(i, 'current');
    }
    return {
      name: 'arrow',
      options: n,
      fn(i) {
        const { element: s, padding: o } = typeof n == 'function' ? n(i) : n;
        return s && a(s)
          ? s.current != null
            ? Tg({ element: s.current, padding: o }).fn(i)
            : {}
          : s
            ? Tg({ element: s, padding: o }).fn(i)
            : {};
      },
    };
  },
  jR = (n, a) => ({ ...RR(n), options: [n, a] }),
  UR = (n, a) => ({ ...OR(n), options: [n, a] }),
  BR = (n, a) => ({ ...NR(n), options: [n, a] }),
  HR = (n, a) => ({ ...CR(n), options: [n, a] }),
  VR = (n, a) => ({ ...MR(n), options: [n, a] }),
  ZR = (n, a) => ({ ...DR(n), options: [n, a] }),
  YR = (n, a) => ({ ...zR(n), options: [n, a] });
var qR = 'Arrow',
  hb = w.forwardRef((n, a) => {
    const { children: i, width: s = 10, height: o = 5, ...u } = n;
    return ee.jsx(Ha.svg, {
      ...u,
      ref: a,
      width: s,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: n.asChild ? i : ee.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
hb.displayName = qR;
var PR = hb,
  wh = 'Popper',
  [pb, mb] = K0(wh),
  [GR, yb] = pb(wh),
  vb = (n) => {
    const { __scopePopper: a, children: i } = n,
      [s, o] = w.useState(null);
    return ee.jsx(GR, { scope: a, anchor: s, onAnchorChange: o, children: i });
  };
vb.displayName = wh;
var gb = 'PopperAnchor',
  bb = w.forwardRef((n, a) => {
    const { __scopePopper: i, virtualRef: s, ...o } = n,
      u = yb(gb, i),
      f = w.useRef(null),
      h = yi(a, f);
    return (
      w.useEffect(() => {
        u.onAnchorChange((s == null ? void 0 : s.current) || f.current);
      }),
      s ? null : ee.jsx(Ha.div, { ...o, ref: h })
    );
  });
bb.displayName = gb;
var Ah = 'PopperContent',
  [$R, XR] = pb(Ah),
  _b = w.forwardRef((n, a) => {
    var Oe, pe, Ze, Pt, vt, rn;
    const {
        __scopePopper: i,
        side: s = 'bottom',
        sideOffset: o = 0,
        align: u = 'center',
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: m = !0,
        collisionBoundary: p = [],
        collisionPadding: y = 0,
        sticky: v = 'partial',
        hideWhenDetached: b = !1,
        updatePositionStrategy: S = 'optimized',
        onPlaced: x,
        ...E
      } = n,
      R = yb(Ah, i),
      [M, L] = w.useState(null),
      U = yi(a, (St) => L(St)),
      [X, C] = w.useState(null),
      Z = GA(X),
      H = (Z == null ? void 0 : Z.width) ?? 0,
      Y = (Z == null ? void 0 : Z.height) ?? 0,
      V = s + (u !== 'center' ? '-' + u : ''),
      F = typeof y == 'number' ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      ne = Array.isArray(p) ? p : [p],
      W = ne.length > 0,
      te = { padding: F, boundary: ne.filter(QR), altBoundary: W },
      {
        refs: de,
        floatingStyles: le,
        placement: N,
        isPositioned: G,
        middlewareData: K,
      } = kR({
        strategy: 'fixed',
        placement: V,
        whileElementsMounted: (...St) => AR(...St, { animationFrame: S === 'always' }),
        elements: { reference: R.anchor },
        middleware: [
          jR({ mainAxis: o + Y, alignmentAxis: f }),
          m && UR({ mainAxis: !0, crossAxis: !1, limiter: v === 'partial' ? BR() : void 0, ...te }),
          m && HR({ ...te }),
          VR({
            ...te,
            apply: ({ elements: St, rects: gt, availableWidth: Fe, availableHeight: Gt }) => {
              const { width: qe, height: vi } = gt.reference,
                kn = St.floating.style;
              kn.setProperty('--radix-popper-available-width', `${Fe}px`),
                kn.setProperty('--radix-popper-available-height', `${Gt}px`),
                kn.setProperty('--radix-popper-anchor-width', `${qe}px`),
                kn.setProperty('--radix-popper-anchor-height', `${vi}px`);
            },
          }),
          X && YR({ element: X, padding: h }),
          KR({ arrowWidth: H, arrowHeight: Y }),
          b && ZR({ strategy: 'referenceHidden', ...te }),
        ],
      }),
      [ce, A] = Eb(N),
      q = Ou(x);
    za(() => {
      G && (q == null || q());
    }, [G, q]);
    const ae = (Oe = K.arrow) == null ? void 0 : Oe.x,
      Q = (pe = K.arrow) == null ? void 0 : pe.y,
      re = ((Ze = K.arrow) == null ? void 0 : Ze.centerOffset) !== 0,
      [ve, ue] = w.useState();
    return (
      za(() => {
        M && ue(window.getComputedStyle(M).zIndex);
      }, [M]),
      ee.jsx('div', {
        ref: de.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...le,
          transform: G ? le.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: ve,
          '--radix-popper-transform-origin': [
            (Pt = K.transformOrigin) == null ? void 0 : Pt.x,
            (vt = K.transformOrigin) == null ? void 0 : vt.y,
          ].join(' '),
          ...(((rn = K.hide) == null ? void 0 : rn.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: n.dir,
        children: ee.jsx($R, {
          scope: i,
          placedSide: ce,
          onArrowChange: C,
          arrowX: ae,
          arrowY: Q,
          shouldHideArrow: re,
          children: ee.jsx(Ha.div, {
            'data-side': ce,
            'data-align': A,
            ...E,
            ref: U,
            style: { ...E.style, animation: G ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
_b.displayName = Ah;
var Sb = 'PopperArrow',
  IR = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  xb = w.forwardRef(function (a, i) {
    const { __scopePopper: s, ...o } = a,
      u = XR(Sb, s),
      f = IR[u.placedSide];
    return ee.jsx('span', {
      ref: u.onArrowChange,
      style: {
        position: 'absolute',
        left: u.arrowX,
        top: u.arrowY,
        [f]: 0,
        transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
          u.placedSide
        ],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[u.placedSide],
        visibility: u.shouldHideArrow ? 'hidden' : void 0,
      },
      children: ee.jsx(PR, { ...o, ref: i, style: { ...o.style, display: 'block' } }),
    });
  });
xb.displayName = Sb;
function QR(n) {
  return n !== null;
}
var KR = (n) => ({
  name: 'transformOrigin',
  options: n,
  fn(a) {
    var R, M, L;
    const { placement: i, rects: s, middlewareData: o } = a,
      f = ((R = o.arrow) == null ? void 0 : R.centerOffset) !== 0,
      h = f ? 0 : n.arrowWidth,
      m = f ? 0 : n.arrowHeight,
      [p, y] = Eb(i),
      v = { start: '0%', center: '50%', end: '100%' }[y],
      b = (((M = o.arrow) == null ? void 0 : M.x) ?? 0) + h / 2,
      S = (((L = o.arrow) == null ? void 0 : L.y) ?? 0) + m / 2;
    let x = '',
      E = '';
    return (
      p === 'bottom'
        ? ((x = f ? v : `${b}px`), (E = `${-m}px`))
        : p === 'top'
          ? ((x = f ? v : `${b}px`), (E = `${s.floating.height + m}px`))
          : p === 'right'
            ? ((x = `${-m}px`), (E = f ? v : `${S}px`))
            : p === 'left' && ((x = `${s.floating.width + m}px`), (E = f ? v : `${S}px`)),
      { data: { x, y: E } }
    );
  },
});
function Eb(n) {
  const [a, i = 'center'] = n.split('-');
  return [a, i];
}
var JR = vb,
  FR = bb,
  WR = _b,
  e2 = xb,
  [Nu, W2] = K0('Tooltip', [mb]),
  Lu = mb(),
  Tb = 'TooltipProvider',
  t2 = 700,
  Pd = 'tooltip.open',
  [n2, Rh] = Nu(Tb),
  wb = (n) => {
    const {
        __scopeTooltip: a,
        delayDuration: i = t2,
        skipDelayDuration: s = 300,
        disableHoverableContent: o = !1,
        children: u,
      } = n,
      f = w.useRef(!0),
      h = w.useRef(!1),
      m = w.useRef(0);
    return (
      w.useEffect(() => {
        const p = m.current;
        return () => window.clearTimeout(p);
      }, []),
      ee.jsx(n2, {
        scope: a,
        isOpenDelayedRef: f,
        delayDuration: i,
        onOpen: w.useCallback(() => {
          window.clearTimeout(m.current), (f.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => (f.current = !0), s));
        }, [s]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: w.useCallback((p) => {
          h.current = p;
        }, []),
        disableHoverableContent: o,
        children: u,
      })
    );
  };
wb.displayName = Tb;
var ol = 'Tooltip',
  [a2, pl] = Nu(ol),
  Ab = (n) => {
    const {
        __scopeTooltip: a,
        children: i,
        open: s,
        defaultOpen: o,
        onOpenChange: u,
        disableHoverableContent: f,
        delayDuration: h,
      } = n,
      m = Rh(ol, n.__scopeTooltip),
      p = Lu(a),
      [y, v] = w.useState(null),
      b = LA(),
      S = w.useRef(0),
      x = f ?? m.disableHoverableContent,
      E = h ?? m.delayDuration,
      R = w.useRef(!1),
      [M, L] = wA({
        prop: s,
        defaultProp: o ?? !1,
        onChange: (H) => {
          H ? (m.onOpen(), document.dispatchEvent(new CustomEvent(Pd))) : m.onClose(),
            u == null || u(H);
        },
        caller: ol,
      }),
      U = w.useMemo(() => (M ? (R.current ? 'delayed-open' : 'instant-open') : 'closed'), [M]),
      X = w.useCallback(() => {
        window.clearTimeout(S.current), (S.current = 0), (R.current = !1), L(!0);
      }, [L]),
      C = w.useCallback(() => {
        window.clearTimeout(S.current), (S.current = 0), L(!1);
      }, [L]),
      Z = w.useCallback(() => {
        window.clearTimeout(S.current),
          (S.current = window.setTimeout(() => {
            (R.current = !0), L(!0), (S.current = 0);
          }, E));
      }, [E, L]);
    return (
      w.useEffect(
        () => () => {
          S.current && (window.clearTimeout(S.current), (S.current = 0));
        },
        [],
      ),
      ee.jsx(JR, {
        ...p,
        children: ee.jsx(a2, {
          scope: a,
          contentId: b,
          open: M,
          stateAttribute: U,
          trigger: y,
          onTriggerChange: v,
          onTriggerEnter: w.useCallback(() => {
            m.isOpenDelayedRef.current ? Z() : X();
          }, [m.isOpenDelayedRef, Z, X]),
          onTriggerLeave: w.useCallback(() => {
            x ? C() : (window.clearTimeout(S.current), (S.current = 0));
          }, [C, x]),
          onOpen: X,
          onClose: C,
          disableHoverableContent: x,
          children: i,
        }),
      })
    );
  };
Ab.displayName = ol;
var Gd = 'TooltipTrigger',
  Rb = w.forwardRef((n, a) => {
    const { __scopeTooltip: i, ...s } = n,
      o = pl(Gd, i),
      u = Rh(Gd, i),
      f = Lu(i),
      h = w.useRef(null),
      m = yi(a, h, o.onTriggerChange),
      p = w.useRef(!1),
      y = w.useRef(!1),
      v = w.useCallback(() => (p.current = !1), []);
    return (
      w.useEffect(() => () => document.removeEventListener('pointerup', v), [v]),
      ee.jsx(FR, {
        asChild: !0,
        ...f,
        children: ee.jsx(Ha.button, {
          'aria-describedby': o.open ? o.contentId : void 0,
          'data-state': o.stateAttribute,
          ...s,
          ref: m,
          onPointerMove: Wn(n.onPointerMove, (b) => {
            b.pointerType !== 'touch' &&
              !y.current &&
              !u.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (y.current = !0));
          }),
          onPointerLeave: Wn(n.onPointerLeave, () => {
            o.onTriggerLeave(), (y.current = !1);
          }),
          onPointerDown: Wn(n.onPointerDown, () => {
            o.open && o.onClose(),
              (p.current = !0),
              document.addEventListener('pointerup', v, { once: !0 });
          }),
          onFocus: Wn(n.onFocus, () => {
            p.current || o.onOpen();
          }),
          onBlur: Wn(n.onBlur, o.onClose),
          onClick: Wn(n.onClick, o.onClose),
        }),
      })
    );
  });
Rb.displayName = Gd;
var Oh = 'TooltipPortal',
  [i2, r2] = Nu(Oh, { forceMount: void 0 }),
  Ob = (n) => {
    const { __scopeTooltip: a, forceMount: i, children: s, container: o } = n,
      u = pl(Oh, a);
    return ee.jsx(i2, {
      scope: a,
      forceMount: i,
      children: ee.jsx(yh, {
        present: i || u.open,
        children: ee.jsx(vh, { asChild: !0, container: o, children: s }),
      }),
    });
  };
Ob.displayName = Oh;
var Nr = 'TooltipContent',
  Cb = w.forwardRef((n, a) => {
    const i = r2(Nr, n.__scopeTooltip),
      { forceMount: s = i.forceMount, side: o = 'top', ...u } = n,
      f = pl(Nr, n.__scopeTooltip);
    return ee.jsx(yh, {
      present: s || f.open,
      children: f.disableHoverableContent
        ? ee.jsx(Mb, { side: o, ...u, ref: a })
        : ee.jsx(s2, { side: o, ...u, ref: a }),
    });
  }),
  s2 = w.forwardRef((n, a) => {
    const i = pl(Nr, n.__scopeTooltip),
      s = Rh(Nr, n.__scopeTooltip),
      o = w.useRef(null),
      u = yi(a, o),
      [f, h] = w.useState(null),
      { trigger: m, onClose: p } = i,
      y = o.current,
      { onPointerInTransitChange: v } = s,
      b = w.useCallback(() => {
        h(null), v(!1);
      }, [v]),
      S = w.useCallback(
        (x, E) => {
          const R = x.currentTarget,
            M = { x: x.clientX, y: x.clientY },
            L = c2(M, R.getBoundingClientRect()),
            U = f2(M, L),
            X = d2(E.getBoundingClientRect()),
            C = p2([...U, ...X]);
          h(C), v(!0);
        },
        [v],
      );
    return (
      w.useEffect(() => () => b(), [b]),
      w.useEffect(() => {
        if (m && y) {
          const x = (R) => S(R, y),
            E = (R) => S(R, m);
          return (
            m.addEventListener('pointerleave', x),
            y.addEventListener('pointerleave', E),
            () => {
              m.removeEventListener('pointerleave', x), y.removeEventListener('pointerleave', E);
            }
          );
        }
      }, [m, y, S, b]),
      w.useEffect(() => {
        if (f) {
          const x = (E) => {
            const R = E.target,
              M = { x: E.clientX, y: E.clientY },
              L = (m == null ? void 0 : m.contains(R)) || (y == null ? void 0 : y.contains(R)),
              U = !h2(M, f);
            L ? b() : U && (b(), p());
          };
          return (
            document.addEventListener('pointermove', x),
            () => document.removeEventListener('pointermove', x)
          );
        }
      }, [m, y, f, p, b]),
      ee.jsx(Mb, { ...n, ref: u })
    );
  }),
  [l2, o2] = Nu(ol, { isInside: !1 }),
  u2 = I0('TooltipContent'),
  Mb = w.forwardRef((n, a) => {
    const {
        __scopeTooltip: i,
        children: s,
        'aria-label': o,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        ...h
      } = n,
      m = pl(Nr, i),
      p = Lu(i),
      { onClose: y } = m;
    return (
      w.useEffect(
        () => (document.addEventListener(Pd, y), () => document.removeEventListener(Pd, y)),
        [y],
      ),
      w.useEffect(() => {
        if (m.trigger) {
          const v = (b) => {
            const S = b.target;
            S != null && S.contains(m.trigger) && y();
          };
          return (
            window.addEventListener('scroll', v, { capture: !0 }),
            () => window.removeEventListener('scroll', v, { capture: !0 })
          );
        }
      }, [m.trigger, y]),
      ee.jsx(W0, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: y,
        children: ee.jsxs(WR, {
          'data-state': m.stateAttribute,
          ...p,
          ...h,
          ref: a,
          style: {
            ...h.style,
            '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
          },
          children: [
            ee.jsx(u2, { children: s }),
            ee.jsx(l2, {
              scope: i,
              isInside: !0,
              children: ee.jsx(xA, { id: m.contentId, role: 'tooltip', children: o || s }),
            }),
          ],
        }),
      })
    );
  });
Cb.displayName = Nr;
var Db = 'TooltipArrow',
  Nb = w.forwardRef((n, a) => {
    const { __scopeTooltip: i, ...s } = n,
      o = Lu(i);
    return o2(Db, i).isInside ? null : ee.jsx(e2, { ...o, ...s, ref: a });
  });
Nb.displayName = Db;
function c2(n, a) {
  const i = Math.abs(a.top - n.y),
    s = Math.abs(a.bottom - n.y),
    o = Math.abs(a.right - n.x),
    u = Math.abs(a.left - n.x);
  switch (Math.min(i, s, o, u)) {
    case u:
      return 'left';
    case o:
      return 'right';
    case i:
      return 'top';
    case s:
      return 'bottom';
    default:
      throw new Error('unreachable');
  }
}
function f2(n, a, i = 5) {
  const s = [];
  switch (a) {
    case 'top':
      s.push({ x: n.x - i, y: n.y + i }, { x: n.x + i, y: n.y + i });
      break;
    case 'bottom':
      s.push({ x: n.x - i, y: n.y - i }, { x: n.x + i, y: n.y - i });
      break;
    case 'left':
      s.push({ x: n.x + i, y: n.y - i }, { x: n.x + i, y: n.y + i });
      break;
    case 'right':
      s.push({ x: n.x - i, y: n.y - i }, { x: n.x - i, y: n.y + i });
      break;
  }
  return s;
}
function d2(n) {
  const { top: a, right: i, bottom: s, left: o } = n;
  return [
    { x: o, y: a },
    { x: i, y: a },
    { x: i, y: s },
    { x: o, y: s },
  ];
}
function h2(n, a) {
  const { x: i, y: s } = n;
  let o = !1;
  for (let u = 0, f = a.length - 1; u < a.length; f = u++) {
    const h = a[u],
      m = a[f],
      p = h.x,
      y = h.y,
      v = m.x,
      b = m.y;
    y > s != b > s && i < ((v - p) * (s - y)) / (b - y) + p && (o = !o);
  }
  return o;
}
function p2(n) {
  const a = n.slice();
  return (
    a.sort((i, s) => (i.x < s.x ? -1 : i.x > s.x ? 1 : i.y < s.y ? -1 : i.y > s.y ? 1 : 0)), m2(a)
  );
}
function m2(n) {
  if (n.length <= 1) return n.slice();
  const a = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    for (; a.length >= 2; ) {
      const u = a[a.length - 1],
        f = a[a.length - 2];
      if ((u.x - f.x) * (o.y - f.y) >= (u.y - f.y) * (o.x - f.x)) a.pop();
      else break;
    }
    a.push(o);
  }
  a.pop();
  const i = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const o = n[s];
    for (; i.length >= 2; ) {
      const u = i[i.length - 1],
        f = i[i.length - 2];
      if ((u.x - f.x) * (o.y - f.y) >= (u.y - f.y) * (o.x - f.x)) i.pop();
      else break;
    }
    i.push(o);
  }
  return (
    i.pop(),
    a.length === 1 && i.length === 1 && a[0].x === i[0].x && a[0].y === i[0].y ? a : a.concat(i)
  );
}
var y2 = wb,
  eO = Ab,
  tO = Rb,
  nO = Ob,
  aO = Cb,
  iO = Nb,
  _d = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Ag;
function v2() {
  return (
    Ag ||
      ((Ag = 1),
      (function (n) {
        (function () {
          var a = {}.hasOwnProperty;
          function i() {
            for (var u = '', f = 0; f < arguments.length; f++) {
              var h = arguments[f];
              h && (u = o(u, s(h)));
            }
            return u;
          }
          function s(u) {
            if (typeof u == 'string' || typeof u == 'number') return u;
            if (typeof u != 'object') return '';
            if (Array.isArray(u)) return i.apply(null, u);
            if (
              u.toString !== Object.prototype.toString &&
              !u.toString.toString().includes('[native code]')
            )
              return u.toString();
            var f = '';
            for (var h in u) a.call(u, h) && u[h] && (f = o(f, h));
            return f;
          }
          function o(u, f) {
            return f ? (u ? u + ' ' + f : u + f) : u;
          }
          n.exports ? ((i.default = i), (n.exports = i)) : (window.classNames = i);
        })();
      })(_d)),
    _d.exports
  );
}
var g2 = v2();
const b2 = mu(g2);
function _2(n) {
  switch (n) {
    case 'tomato':
    case 'red':
    case 'ruby':
    case 'crimson':
    case 'pink':
    case 'plum':
    case 'purple':
    case 'violet':
      return 'mauve';
    case 'iris':
    case 'indigo':
    case 'blue':
    case 'sky':
    case 'cyan':
      return 'slate';
    case 'teal':
    case 'jade':
    case 'mint':
    case 'green':
      return 'sage';
    case 'grass':
    case 'lime':
      return 'olive';
    case 'yellow':
    case 'amber':
    case 'orange':
    case 'brown':
    case 'gold':
    case 'bronze':
      return 'sand';
    case 'gray':
      return 'gray';
  }
}
const Bt = {
    hasBackground: { default: !0 },
    appearance: { default: 'inherit' },
    accentColor: { default: 'indigo' },
    grayColor: { default: 'auto' },
    panelBackground: { default: 'translucent' },
    radius: { default: 'medium' },
    scaling: { default: '100%' },
  },
  sr = () => {},
  pu = w.createContext(void 0);
function rO() {
  const n = w.useContext(pu);
  if (n === void 0) throw new Error('`useThemeContext` must be used within a `Theme`');
  return n;
}
const Lb = w.forwardRef((n, a) =>
  w.useContext(pu) === void 0
    ? w.createElement(
        y2,
        { delayDuration: 200 },
        w.createElement(zA, { dir: 'ltr' }, w.createElement(kb, { ...n, ref: a })),
      )
    : w.createElement(Ch, { ...n, ref: a }),
);
Lb.displayName = 'Theme';
const kb = w.forwardRef((n, a) => {
  const {
      appearance: i = Bt.appearance.default,
      accentColor: s = Bt.accentColor.default,
      grayColor: o = Bt.grayColor.default,
      panelBackground: u = Bt.panelBackground.default,
      radius: f = Bt.radius.default,
      scaling: h = Bt.scaling.default,
      hasBackground: m = Bt.hasBackground.default,
      ...p
    } = n,
    [y, v] = w.useState(i);
  w.useEffect(() => v(i), [i]);
  const [b, S] = w.useState(s);
  w.useEffect(() => S(s), [s]);
  const [x, E] = w.useState(o);
  w.useEffect(() => E(o), [o]);
  const [R, M] = w.useState(u);
  w.useEffect(() => M(u), [u]);
  const [L, U] = w.useState(f);
  w.useEffect(() => U(f), [f]);
  const [X, C] = w.useState(h);
  return (
    w.useEffect(() => C(h), [h]),
    w.createElement(Ch, {
      ...p,
      ref: a,
      isRoot: !0,
      hasBackground: m,
      appearance: y,
      accentColor: b,
      grayColor: x,
      panelBackground: R,
      radius: L,
      scaling: X,
      onAppearanceChange: v,
      onAccentColorChange: S,
      onGrayColorChange: E,
      onPanelBackgroundChange: M,
      onRadiusChange: U,
      onScalingChange: C,
    })
  );
});
kb.displayName = 'ThemeRoot';
const Ch = w.forwardRef((n, a) => {
  const i = w.useContext(pu),
    {
      asChild: s,
      isRoot: o,
      hasBackground: u,
      appearance: f = (i == null ? void 0 : i.appearance) ?? Bt.appearance.default,
      accentColor: h = (i == null ? void 0 : i.accentColor) ?? Bt.accentColor.default,
      grayColor: m = (i == null ? void 0 : i.resolvedGrayColor) ?? Bt.grayColor.default,
      panelBackground: p = (i == null ? void 0 : i.panelBackground) ?? Bt.panelBackground.default,
      radius: y = (i == null ? void 0 : i.radius) ?? Bt.radius.default,
      scaling: v = (i == null ? void 0 : i.scaling) ?? Bt.scaling.default,
      onAppearanceChange: b = sr,
      onAccentColorChange: S = sr,
      onGrayColorChange: x = sr,
      onPanelBackgroundChange: E = sr,
      onRadiusChange: R = sr,
      onScalingChange: M = sr,
      ...L
    } = n,
    U = s ? hA : 'div',
    X = m === 'auto' ? _2(h) : m,
    C = n.appearance === 'light' || n.appearance === 'dark',
    Z = u === void 0 ? o || C : u;
  return w.createElement(
    pu.Provider,
    {
      value: w.useMemo(
        () => ({
          appearance: f,
          accentColor: h,
          grayColor: m,
          resolvedGrayColor: X,
          panelBackground: p,
          radius: y,
          scaling: v,
          onAppearanceChange: b,
          onAccentColorChange: S,
          onGrayColorChange: x,
          onPanelBackgroundChange: E,
          onRadiusChange: R,
          onScalingChange: M,
        }),
        [f, h, m, X, p, y, v, b, S, x, E, R, M],
      ),
    },
    w.createElement(U, {
      'data-is-root-theme': o ? 'true' : 'false',
      'data-accent-color': h,
      'data-gray-color': X,
      'data-has-background': Z ? 'true' : 'false',
      'data-panel-background': p,
      'data-radius': y,
      'data-scaling': v,
      ref: a,
      ...L,
      className: b2('radix-themes', { light: f === 'light', dark: f === 'dark' }, L.className),
    }),
  );
});
Ch.displayName = 'ThemeImpl';
const zb = w.createContext({ theme: {}, toggleColorMode: () => {} });
function S2() {
  const n = _r.useContext(zb);
  if (!n) throw new Error('useThemeContext must be used within a ThemeProvider');
  return n;
}
const x2 = Vd(Lb, { target: 'ex7a8nt0' })(
  'padding:0;margin:0;min-height:0% !important;height:100%;width:100%;background-color:transparent !important;--cursor-button:pointer;--default-font-family:var(--font-roboto) !important;--heading-font-family:var(--font-roboto) !important;--code-font-family:var(--font-roboto) !important;--strong-font-family:var(--font-roboto) !important;--em-font-family:var(--font-roboto) !important;--quote-font-family:var(--font-roboto) !important;--river-blue:#0954a5;--light-river-blue:#52a9ff;.light &,.radix-themes.light{--wave-brown:#997c74;--wave-blue:var(--blue-4);--blue-1:#fdfdfe;--blue-2:#f6fafe;--blue-3:#ecf3fc;--blue-4:#ddebfd;--blue-5:#cde1fc;--blue-6:#b8d4fa;--blue-7:#a1c3f0;--blue-8:#7faae4;--blue-9:#0954a5;--blue-10:#004494;--blue-11:#2065b7;--blue-12:#153155;--blue-a1:#00008002;--blue-a2:#0072e309;--blue-a3:#005ed713;--blue-a4:#0069f022;--blue-a5:#0066f032;--blue-a6:#0065ee47;--blue-a7:#005dd75e;--blue-a8:#0056ca80;--blue-a9:#004ea2f6;--blue-a10:#004494;--blue-a11:#004faddf;--blue-a12:#001f46ea;--blue-contrast:#fff;--blue-surface:#f4f9fecc;--blue-indicator:#0954a5;--blue-track:#0954a5;}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){.light &,.radix-themes.light{--blue-1:oklch(99.4% 0.0013 255.7);--blue-2:oklch(98.3% 0.0068 255.7);--blue-3:oklch(96.1% 0.0146 255.7);--blue-4:oklch(93.5% 0.0287 255.7);--blue-5:oklch(90.3% 0.0434 255.7);--blue-6:oklch(86.3% 0.0606 255.7);--blue-7:oklch(80.7% 0.0737 255.7);--blue-8:oklch(73% 0.0962 255.7);--blue-9:oklch(45.3% 0.1467 255.7);--blue-10:oklch(39.9% 0.1467 255.7);--blue-11:oklch(51% 0.1467 255.7);--blue-12:oklch(31.3% 0.0726 255.7);--blue-a1:color(display-p3 0.0196 0.0196 0.5098 / 0.008);--blue-a2:color(display-p3 0.0196 0.3882 0.8784 / 0.032);--blue-a3:color(display-p3 0.0078 0.3373 0.7804 / 0.071);--blue-a4:color(display-p3 0.0039 0.3608 0.8745 / 0.122);--blue-a5:color(display-p3 0.0039 0.3294 0.8706 / 0.181);--blue-a6:color(display-p3 0.0039 0.3373 0.8824 / 0.259);--blue-a7:color(display-p3 0.0039 0.302 0.7843 / 0.342);--blue-a8:color(display-p3 0.0039 0.2784 0.7333 / 0.467);--blue-a9:color(display-p3 0 0.2157 0.5608 / 0.859);--blue-a10:color(display-p3 0 0.1804 0.5098 / 0.899);--blue-a11:color(display-p3 0 0.2314 0.6118 / 0.793);--blue-a12:color(display-p3 0 0.0902 0.2392 / 0.891);--blue-contrast:#fff;--blue-surface:color(display-p3 0.9608 0.9765 0.9961 / 0.8);--blue-indicator:oklch(45.3% 0.1467 255.7);--blue-track:oklch(45.3% 0.1467 255.7);}}}.dark &,.radix-themes.dark{--wave-brown:#765d57;--wave-blue:var(--blue-3);--blue-1:#08111e;--blue-2:#0d1928;--blue-3:#05264e;--blue-4:#002f6c;--blue-5:#003b80;--blue-6:#044992;--blue-7:#1058aa;--blue-8:#1269ca;--blue-9:#0954a5;--blue-10:#00458e;--blue-11:#75b7ff;--blue-12:#c8e3ff;--blue-a1:#0012fe0e;--blue-a2:#0063fc19;--blue-a3:#0062fd42;--blue-a4:#0060fe62;--blue-a5:#006bff77;--blue-a6:#0078fe8b;--blue-a7:#1080ffa4;--blue-a8:#1282fec7;--blue-a9:#057dff9f;--blue-a10:#0074ff86;--blue-a11:#75b7ff;--blue-a12:#c8e3ff;--blue-contrast:#fff;--blue-surface:#0a213f80;--blue-indicator:#0954a5;--blue-track:#0954a5;}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){.dark &,.radix-themes.dark{--blue-1:oklch(17.8% 0.0308 255.7);--blue-2:oklch(20.9% 0.036 255.7);--blue-3:oklch(27.2% 0.0821 255.7);--blue-4:oklch(31.7% 0.1188 255.7);--blue-5:oklch(36.4% 0.13 255.7);--blue-6:oklch(41.2% 0.1357 255.7);--blue-7:oklch(46.8% 0.1467 255.7);--blue-8:oklch(53% 0.1687 255.7);--blue-9:oklch(45.3% 0.1467 255.7);--blue-10:oklch(39.9% 0.1357 255.7);--blue-11:oklch(77.1% 0.1579 255.7);--blue-12:oklch(90.8% 0.058 255.7);--blue-a1:color(display-p3 0 0.0706 0.9922 / 0.051);--blue-a2:color(display-p3 0.0275 0.4078 0.9961 / 0.093);--blue-a3:color(display-p3 0.0353 0.3882 1 / 0.244);--blue-a4:color(display-p3 0.0588 0.3765 1 / 0.366);--blue-a5:color(display-p3 0.1137 0.4275 1 / 0.446);--blue-a6:color(display-p3 0.1647 0.4824 1 / 0.522);--blue-a7:color(display-p3 0.2157 0.5137 1 / 0.618);--blue-a8:color(display-p3 0.2314 0.5176 1 / 0.748);--blue-a9:color(display-p3 0.1922 0.502 1 / 0.597);--blue-a10:color(display-p3 0.1373 0.4627 1 / 0.505);--blue-a11:color(display-p3 0.5294 0.7294 1 / 0.975);--blue-a12:color(display-p3 0.8118 0.898 1 / 0.988);--blue-contrast:#fff;--blue-surface:color(display-p3 0.051 0.1176 0.2353 / 0.5);--blue-indicator:oklch(45.3% 0.1467 255.7);--blue-track:oklch(45.3% 0.1467 255.7);}}}',
);
function E2({ children: n, className: a, appearanceOverride: i }) {
  const { theme: s } = S2(),
    o = { ...s, appearance: i };
  return ea(x2, { className: a ?? '', ...o, children: n });
}
function Rg(n) {
  const a = w.useRef(n);
  return (
    w.useEffect(() => {
      a.current = n;
    }),
    w.useMemo(
      () =>
        (...i) => {
          var s;
          return (s = a.current) == null ? void 0 : s.call(a, ...i);
        },
      [],
    )
  );
}
function T2(n, a) {
  try {
    return n.addEventListener('change', a), () => n.removeEventListener('change', a);
  } catch {
    return n.addListener(a), () => n.removeListener(a);
  }
}
function w2(n, a) {
  return typeof window < 'u' && 'matchMedia' in window ? window.matchMedia(n).matches : !1;
}
function A2(n, a, { getInitialValueInEffect: i } = { getInitialValueInEffect: !0 }) {
  const [s, o] = w.useState(i ? a : w2(n)),
    u = w.useRef(null);
  return (
    w.useEffect(() => {
      if ('matchMedia' in window)
        return (
          (u.current = window.matchMedia(n)),
          o(u.current.matches),
          T2(u.current, (f) => o(f.matches))
        );
    }, [n]),
    s
  );
}
function R2(n, a) {
  return A2('(prefers-color-scheme: dark)', n === 'dark', a) ? 'dark' : 'light';
}
function Og(n, a, i) {
  w.useEffect(
    () => (window.addEventListener(n, a, i), () => window.removeEventListener(n, a, i)),
    [n, a],
  );
}
function O2(n, a = 'use-local-storage') {
  try {
    return JSON.stringify(n);
  } catch {
    throw new Error(`@mantine/hooks ${a}: Failed to serialize the value`);
  }
}
function jb(n) {
  try {
    return n && JSON.parse(n);
  } catch {
    return n;
  }
}
function Ub(n) {
  return {
    getItem: (o) => {
      try {
        return window[n].getItem(o);
      } catch {
        return (
          console.warn(
            'use-local-storage: Failed to get value from storage, localStorage is blocked',
          ),
          null
        );
      }
    },
    setItem: (o, u) => {
      try {
        window[n].setItem(o, u);
      } catch {
        console.warn('use-local-storage: Failed to set value to storage, localStorage is blocked');
      }
    },
    removeItem: (o) => {
      try {
        window[n].removeItem(o);
      } catch {
        console.warn(
          'use-local-storage: Failed to remove value from storage, localStorage is blocked',
        );
      }
    },
  };
}
function C2(n, a) {
  const i = 'mantine-local-storage',
    { getItem: s, setItem: o, removeItem: u } = Ub(n);
  return function ({
    key: h,
    defaultValue: m,
    getInitialValueInEffect: p = !0,
    sync: y = !0,
    deserialize: v = jb,
    serialize: b = (S) => O2(S, a),
  }) {
    const S = w.useCallback(
        (L) => {
          let U;
          try {
            U = typeof window > 'u' || !(n in window) || window[n] === null || !!L;
          } catch {
            U = !0;
          }
          if (U) return m;
          const X = s(h);
          return X !== null ? v(X) : m;
        },
        [h, m],
      ),
      [x, E] = w.useState(S(p)),
      R = w.useCallback(
        (L) => {
          L instanceof Function
            ? E((U) => {
                const X = L(U);
                return (
                  o(h, b(X)),
                  window.dispatchEvent(new CustomEvent(i, { detail: { key: h, value: L(U) } })),
                  X
                );
              })
            : (o(h, b(L)),
              window.dispatchEvent(new CustomEvent(i, { detail: { key: h, value: L } })),
              E(L));
        },
        [h],
      ),
      M = w.useCallback(() => {
        u(h), window.dispatchEvent(new CustomEvent(i, { detail: { key: h, value: m } }));
      }, []);
    return (
      Og('storage', (L) => {
        y && L.storageArea === window[n] && L.key === h && E(v(L.newValue ?? void 0));
      }),
      Og(i, (L) => {
        y && L.detail.key === h && E(L.detail.value);
      }),
      w.useEffect(() => {
        m !== void 0 && x === void 0 && R(m);
      }, [m, x, R]),
      w.useEffect(() => {
        const L = S();
        L !== void 0 && R(L);
      }, [h]),
      [x === void 0 ? m : x, R, M]
    );
  };
}
function M2(n) {
  const { getItem: a } = Ub(n);
  return function ({ key: s, defaultValue: o, deserialize: u = jb }) {
    let f;
    try {
      f = typeof window > 'u' || !(n in window) || window[n] === null;
    } catch {
      f = !0;
    }
    if (f) return o;
    const h = a(s);
    return h !== null ? u(h) : o;
  };
}
function D2(n) {
  return C2('localStorage', 'use-local-storage')(n);
}
const N2 = M2('localStorage');
function L2(n, a) {
  const i = R2(N2({ key: n ?? 'theme' }) ?? a ?? 'light'),
    [s, o] = D2({ key: n ?? 'theme', defaultValue: i });
  return { theme: s, setTheme: o };
}
function k2(n) {
  return n === 'light' || n === 'dark';
}
function Cg(n) {
  document.body.classList.remove('light', 'dark'),
    document.body.classList.add(n),
    document.body.setAttribute('data-color-mode', n),
    (document.documentElement.style.colorScheme = n);
  const a = {
    dark: document.querySelector('#arcgis-maps-sdk-theme-dark'),
    light: document.querySelector('#arcgis-maps-sdk-theme-light'),
  };
  a.dark &&
    a.light &&
    ((a.dark.media = n === 'dark' ? 'all' : 'not all'),
    (a.light.media = n === 'light' ? 'all' : 'not all'));
  const i = n === 'dark' ? 'light' : 'dark',
    s = document.querySelector(`.calcite-mode-${i}`);
  s &&
    (s.classList.remove('calcite-mode-dark', 'calcite-mode-light'),
    s.classList.add(`calcite-mode-${n}`));
}
const z2 = 'undefined:theme';
function Bb() {
  const { theme: n, setTheme: a } = L2(z2),
    i = Rg(() => {
      const o = n === 'light' ? 'dark' : 'light';
      a(o), Cg(o);
    }),
    s = Rg(() => {
      Cg(n);
    });
  return _r.useMemo(() => ({ currentTheme: n, toggleTheme: i, initialiseTheme: s }), [n, i, s]);
}
function sO() {
  const { currentTheme: n } = Bb(),
    a = _r.useRef(void 0);
  return (
    _r.useEffect(() => {
      k2(n) && a.current !== n && (a.current = n);
    }, [n]),
    a
  );
}
const j2 = ({ theme: n, isChild: a, children: i }) => {
    const { currentTheme: s, toggleTheme: o, initialiseTheme: u } = Bb();
    w.useEffect(() => {
      a || u();
    }, [a, u]);
    const f = w.useMemo(() => ({ toggleColorMode: o, theme: { ...n, appearance: s } }), [o, n, s]);
    return ea(zb.Provider, { value: f, children: i });
  },
  U2 = Yo.object({
    asset_id: eg(Yo.string().optional(), void 0),
    company: eg(Yo.string().optional(), void 0),
  }),
  Hb = Nx({
    component: () =>
      ea(rA, {
        children: ea(j2, {
          theme: { accentColor: 'blue', grayColor: 'gray', panelBackground: 'solid' },
          isChild: !1,
          children: ea(E2, { children: ea(s0, {}) }),
        }),
      }),
    validateSearch: wT(U2),
  }),
  B2 = Lx('/')(),
  H2 = B2.update({ id: '/', path: '/', getParentRoute: () => Hb }).lazy(() =>
    yE(() => import('./index.lazy-BHTpPf8X.js').then((n) => n.wi), __vite__mapDeps([0, 1])).then(
      (n) => n.Route,
    ),
  ),
  V2 = { IndexLazyRoute: H2 },
  Z2 = Hb._addFileChildren(V2)._addFileTypes(),
  Y2 = Ix({ routeTree: Z2, basepath: void 0 }),
  $d = document.getElementById('root');
if (!$d) throw new Error('No root element found');
$d.innerHTML ||
  hE.createRoot($d).render(K1(w.StrictMode, { children: [ea(Jx, { router: Y2 }), ea(lE, {})] }));
export {
  Sh as $,
  FR as A,
  nO as B,
  WR as C,
  W0 as D,
  aO as E,
  iO as F,
  ea as G,
  rO as H,
  Vd as I,
  K1 as J,
  A2 as K,
  Yo as L,
  q2 as M,
  $2 as N,
  dE as O,
  Ha as P,
  j2 as Q,
  _r as R,
  hA as S,
  tO as T,
  E2 as U,
  rh as V,
  iA as W,
  sO as X,
  Nn as Y,
  Rg as Z,
  yE as _,
  $0 as a,
  AR as a0,
  LR as a1,
  OR as a2,
  DR as a3,
  CR as a4,
  RR as a5,
  F2 as a6,
  Tg as a7,
  TR as a8,
  Q0 as a9,
  Bb as aa,
  Vw as ab,
  X2 as ac,
  Hb as ad,
  G2 as ae,
  Ou as b,
  K0 as c,
  Q2 as d,
  Wn as e,
  yh as f,
  wA as g,
  LA as h,
  vh as i,
  ee as j,
  GA as k,
  K2 as l,
  mb as m,
  JR as n,
  bA as o,
  e2 as p,
  G0 as q,
  w as r,
  za as s,
  xA as t,
  yi as u,
  I2 as v,
  Lb as w,
  J2 as x,
  b2 as y,
  eO as z,
};
