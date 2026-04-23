import {
  iX as ne,
  iY as ae,
  iZ as k,
  uR as re,
  j2 as V,
  E as o,
  j3 as se,
  i as K,
  L as G,
  g as q,
  s as p,
  uS as oe,
  uT as J,
  x as h,
  S as X,
  fs as M,
  j5 as le,
  a as ce,
  c as S,
  iN as j,
  m as ue,
  gH as de,
  j7 as pe,
  j8 as he,
  uU as R,
  iO as L,
  d as me,
  jb as be,
  jc as ge,
  je as ve,
  uV as fe,
  fu as O,
  e as ye,
  uW as P,
  n as N,
  nk as U,
  nl as xe,
  p as $e,
  jf as ke,
} from './index.lazy-BFilFZ3v.js';
import './index-BLD5-BxV.js';
import { e as D } from './key-ak3_eHKH.js';
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const _ = ne(
  class extends ae {
    constructor(i) {
      if (
        (super(i),
        i.type !== k.PROPERTY && i.type !== k.ATTRIBUTE && i.type !== k.BOOLEAN_ATTRIBUTE)
      )
        throw Error('The `live` directive is not allowed on child or event bindings');
      if (!re(i)) throw Error('`live` bindings can only contain a single expression');
    }
    render(i) {
      return i;
    }
    update(i, [e]) {
      if (e === V || e === o) return e;
      const t = i.element,
        n = i.name;
      if (i.type === k.PROPERTY) {
        if (e === t[n]) return V;
      } else if (i.type === k.BOOLEAN_ATTRIBUTE) {
        if (!!e === t.hasAttribute(n)) return V;
      } else if (i.type === k.ATTRIBUTE && t.getAttribute(n) === e + '') return V;
      return se(i), e;
    }
  },
);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const we = K`:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%,0,0)}50%{inline-size:40%}to{transform:translate3d(600%,0,0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%,0,0)}50%{inline-size:40%}to{transform:translate3d(-600%,0,0)}}:host([hidden]){display:none}[hidden]{display:none}`;
var $;
let Ie =
  (($ = class extends G {
    constructor() {
      super(...arguments), (this.reversed = !1), (this.type = 'determinate'), (this.value = 0);
    }
    render() {
      const e = this.type === 'determinate',
        t = e ? { width: `${this.value}%` } : {},
        n = q(this.el);
      return h`<div .ariaLabel=${this.label || this.text} .ariaValueMax=${e ? '100' : void 0} .ariaValueMin=${e ? '0' : void 0} .ariaValueNow=${e ? this.value : void 0} role=progressbar><div class="track"><div class=${p({ bar: !0, indeterminate: this.type === 'indeterminate', [J.rtl]: n === 'rtl', reversed: this.reversed })} style=${oe(t)}></div></div>${this.text ? h`<div class="text">${this.text}</div>` : null}</div>`;
    }
  }),
  ($.properties = { label: 1, reversed: 7, text: 1, type: 3, value: 9 }),
  ($.styles = we),
  $);
X('calcite-progress', Ie);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const ze = new RegExp('\\.(0+)?$'),
  Ee = new RegExp('0+$'),
  s = class s {
    constructor(e) {
      if (e instanceof s) return e;
      const [t, n] = Fe(e).split('.').concat('');
      (this.value =
        BigInt(t + n.padEnd(s.DECIMALS, '0').slice(0, s.DECIMALS)) +
        BigInt(s.ROUNDED && n[s.DECIMALS] >= '5')),
        (this.isNegative = e.charAt(0) === '-');
    }
    getIntegersAndDecimals() {
      const e = this.value
          .toString()
          .replace('-', '')
          .padStart(s.DECIMALS + 1, '0'),
        t = e.slice(0, -s.DECIMALS),
        n = e.slice(-s.DECIMALS).replace(Ee, '');
      return { integers: t, decimals: n };
    }
    toString() {
      const { integers: e, decimals: t } = this.getIntegersAndDecimals();
      return `${this.isNegative ? '-' : ''}${e}${t.length ? '.' + t : ''}`;
    }
    formatToParts(e) {
      const { integers: t, decimals: n } = this.getIntegersAndDecimals(),
        a = e.numberFormatter.formatToParts(BigInt(t));
      return (
        this.isNegative && a.unshift({ type: 'minusSign', value: e.minusSign }),
        n.length &&
          (a.push({ type: 'decimal', value: e.decimal }),
          n.split('').forEach((r) => a.push({ type: 'fraction', value: r }))),
        a
      );
    }
    format(e) {
      const { integers: t, decimals: n } = this.getIntegersAndDecimals(),
        a = `${this.isNegative ? e.minusSign : ''}${e.numberFormatter.format(BigInt(t))}`,
        r = n.length
          ? `${e.decimal}${n
              .split('')
              .map((l) => e.numberFormatter.format(Number(l)))
              .join('')}`
          : '';
      return `${a}${r}`;
    }
    add(e) {
      return s.fromBigInt(this.value + new s(e).value);
    }
    subtract(e) {
      return s.fromBigInt(this.value - new s(e).value);
    }
    multiply(e) {
      return s._divRound(this.value * new s(e).value, s.SHIFT);
    }
    divide(e) {
      return s._divRound(this.value * s.SHIFT, new s(e).value);
    }
  };
(s.DECIMALS = 100),
  (s.ROUNDED = !0),
  (s.SHIFT = BigInt('1' + '0'.repeat(s.DECIMALS))),
  (s._divRound = (e, t) =>
    s.fromBigInt(e / t + (s.ROUNDED ? ((e * BigInt(2)) / t) % BigInt(2) : BigInt(0)))),
  (s.fromBigInt = (e) =>
    Object.assign(Object.create(s.prototype), { value: e, isNegative: e < BigInt(0) }));
let I = s;
function y(i) {
  return !(!i || isNaN(Number(i)));
}
function Ve(i) {
  return !i || !Ae(i)
    ? ''
    : T(i, (e) => {
        let t = !1;
        const n = e
          .split('')
          .filter((a, r) =>
            a.match(/\./g) && !t ? ((t = !0), !0) : a.match(/-/g) && r === 0 ? !0 : D.includes(a),
          )
          .join('');
        return y(n) ? new I(n).toString() : '';
      });
}
const Y = /^([-0])0+(?=\d)/,
  Se = /(?!^\.)\.$/,
  Oe = /(?!^-)-/g,
  Ne = /^-\b0\b\.?0*$/,
  Te = /0*$/,
  Be = (i) =>
    T(i, (e) => {
      const t = e.replace(Oe, '').replace(Se, '').replace(Y, '$1');
      return y(t) ? (Ne.test(t) ? t : Ce(t)) : e;
    });
function Ce(i) {
  const e = i.split('.')[1],
    t = new I(i).toString(),
    [n, a] = t.split('.');
  return e && a !== e ? `${n}.${e}` : t;
}
function T(i, e) {
  if (!i) return i;
  const t = i.toLowerCase().indexOf('e') + 1;
  return t
    ? i
        .replace(/[eE]*$/g, '')
        .substring(0, t)
        .concat(i.slice(t).replace(/[eE]/g, ''))
        .split(/[eE]/)
        .map((n, a) => e(a === 1 ? n.replace(/\./g, '') : n))
        .join('e')
        .replace(/^e/, '1e')
    : e(i);
}
function Fe(i) {
  const e = i.split(/[eE]/);
  if (e.length === 1) return i;
  const t = +i;
  if (Number.isSafeInteger(t)) return `${t}`;
  const n = i.charAt(0) === '-',
    a = +e[1],
    r = e[0].split('.'),
    l = (n ? r[0].substring(1) : r[0]) || '',
    m = r[1] || '',
    b = (c, d) => {
      const x = Math.abs(d) - c.length,
        E = x > 0 ? `${'0'.repeat(x)}${c}` : c;
      return `${E.slice(0, d)}.${E.slice(d)}`;
    },
    v = (c, d) => {
      const x = d > c.length ? `${c}${'0'.repeat(d - c.length)}` : c;
      return `${x.slice(0, d)}.${x.slice(d)}`;
    },
    f = a > 0 ? `${l}${v(m, a)}` : `${b(l, a)}${m}`;
  return `${n ? '-' : ''}${f.charAt(0) === '.' ? '0' : ''}${f.replace(ze, '').replace(Y, '')}`;
}
function Ae(i) {
  return D.some((e) => i.includes(e));
}
function De(i, e, t) {
  const n = e.split('.')[1];
  if (n) {
    const a = n.match(Te)[0];
    if (a && t.delocalize(i).length !== e.length && n.indexOf('e') === -1) {
      const r = t.decimal;
      return (i = i.includes(r) ? i : `${i}${r}`), i.padEnd(i.length + a.length, t.localize('0'));
    }
  }
  return i;
}
const z = 'en',
  Z = [
    'ar',
    'bg',
    'bs',
    'ca',
    'cs',
    'da',
    'de',
    'el',
    z,
    'es',
    'et',
    'fi',
    'fr',
    'he',
    'hr',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'no',
    'nl',
    'pl',
    'pt-BR',
    'pt-PT',
    'ro',
    'ru',
    'sk',
    'sl',
    'sr',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-CN',
    'zh-HK',
    'zh-TW',
  ],
  Q = [
    'ar',
    'bg',
    'bs',
    'ca',
    'cs',
    'da',
    'de',
    'de-AT',
    'de-CH',
    'el',
    z,
    'en-AU',
    'en-CA',
    'en-GB',
    'es',
    'es-MX',
    'et',
    'fi',
    'fr',
    'fr-CH',
    'he',
    'hi',
    'hr',
    'hu',
    'id',
    'it',
    'it-CH',
    'ja',
    'ko',
    'lt',
    'lv',
    'mk',
    'no',
    'nl',
    'pl',
    'pt',
    'pt-PT',
    'ro',
    'ru',
    'sk',
    'sl',
    'sr',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-CN',
    'zh-HK',
    'zh-TW',
  ];
new Map(
  Object.entries({
    bg: { am: 'пр.об.', pm: 'сл.об.' },
    bs: { am: 'prijepodne', pm: 'popodne' },
    ca: { am: 'a. m.', pm: 'p. m.' },
    cs: { am: 'dop.', pm: 'odp.' },
    es: { am: 'a. m.', pm: 'p. m.' },
    'es-mx': { am: 'a.m.', pm: 'p.m.' },
    'es-MX': { am: 'a.m.', pm: 'p.m.' },
    fi: { am: 'ap.', pm: 'ip.' },
    he: { am: 'לפנה״צ', pm: 'אחה״צ' },
    hu: { am: 'de. ', pm: 'du.' },
    lt: { am: 'priešpiet', pm: 'popiet' },
    lv: { am: 'priekšpusdienā', pm: 'pēcpusdienā' },
    mk: { am: 'претпл.', pm: 'попл.' },
    no: { am: 'a.m.', pm: 'p.m.' },
    nl: { am: 'a.m.', pm: 'p.m.' },
    'pt-pt': { am: 'da manhã', pm: 'da tarde' },
    'pt-PT': { am: 'da manhã', pm: 'da tarde' },
    ro: { am: 'a.m.', pm: 'p.m.' },
    sl: { am: 'dop.', pm: 'pop.' },
    sv: { am: 'fm', pm: 'em' },
    th: { am: 'ก่อนเที่ยง', pm: 'หลังเที่ยง' },
    tr: { am: 'ÖÖ', pm: 'ÖS' },
    uk: { am: 'дп', pm: 'пп' },
    vi: { am: 'SA', pm: 'CH' },
  }),
);
const He = ['arab', 'arabext', 'latn'];
[...new Set([...Z, ...Q])];
const ee = (i) => He.includes(i),
  F = new Intl.NumberFormat().resolvedOptions().numberingSystem,
  te = F === 'arab' || !ee(F) ? 'latn' : F,
  Me = (i) => (ee(i) ? i : te);
function je(i, e = 'cldr') {
  const t = e === 'cldr' ? Q : Z;
  return i
    ? t.includes(i)
      ? i
      : ((i = i.toLowerCase()),
        i === 'nb'
          ? 'no'
          : e === 't9n' && i === 'pt'
            ? 'pt-BR'
            : (i.includes('-') &&
                ((i = i.replace(/(\w+)-(\w+)/, (n, a, r) => `${a}-${r.toUpperCase()}`)),
                t.includes(i) || (i = i.split('-')[0])),
              i === 'zh'
                ? 'zh-CN'
                : t.includes(i)
                  ? i
                  : (console.warn(
                      `Translations for the "${i}" locale are not available and will fall back to the default, English (en).`,
                    ),
                    z)))
    : z;
}
class Re {
  constructor() {
    (this.delocalize = (e) =>
      this._numberFormatOptions
        ? T(e, (t) =>
            t
              .replace(new RegExp(`[${this._minusSign}]`, 'g'), '-')
              .replace(new RegExp(`[${this._group}]`, 'g'), '')
              .replace(new RegExp(`[${this._decimal}]`, 'g'), '.')
              .replace(new RegExp(`[${this._digits.join('')}]`, 'g'), this._getDigitIndex),
          )
        : e),
      (this.localize = (e) =>
        this._numberFormatOptions
          ? T(e, (t) =>
              y(t.trim())
                ? new I(t.trim())
                    .format(this)
                    .replace(new RegExp(`[${this._actualGroup}]`, 'g'), this._group)
                : t,
            )
          : e);
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  set numberFormatOptions(e) {
    if (
      ((e.locale = je(e == null ? void 0 : e.locale)),
      (e.numberingSystem = Me(e == null ? void 0 : e.numberingSystem)),
      (!this._numberFormatOptions &&
        e.locale === z &&
        e.numberingSystem === te &&
        Object.keys(e).length === 2) ||
        JSON.stringify(this._numberFormatOptions) === JSON.stringify(e))
    )
      return;
    (this._numberFormatOptions = e),
      (this._numberFormatter = new Intl.NumberFormat(
        this._numberFormatOptions.locale,
        this._numberFormatOptions,
      )),
      (this._digits = [
        ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
          useGrouping: !1,
          numberingSystem: this._numberFormatOptions.numberingSystem,
        }).format(9876543210),
      ].reverse());
    const t = new Map(this._digits.map((a, r) => [a, r])),
      n = new Intl.NumberFormat(this._numberFormatOptions.locale, {
        numberingSystem: this._numberFormatOptions.numberingSystem,
      }).formatToParts(-123456789e-1);
    (this._actualGroup = n.find((a) => a.type === 'group').value),
      (this._group =
        this._actualGroup.trim().length === 0 || this._actualGroup == ' '
          ? ' '
          : this._actualGroup),
      (this._decimal =
        e.locale === 'bs' || e.locale === 'mk' ? ',' : n.find((a) => a.type === 'decimal').value),
      (this._minusSign = n.find((a) => a.type === 'minusSign').value),
      (this._getDigitIndex = (a) => t.get(a));
  }
}
const g = new Re();
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const Le = { validationContainer: 'validation-container' },
  Pe = ({ scale: i, status: e, id: t, icon: n, message: a }) =>
    h`<div class=${p(Le.validationContainer)}><calcite-input-message aria-live=polite .icon=${n} id=${t ?? o} .scale=${i} .status=${e}>${a}</calcite-input-message></div>`;
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const Ue = ['date', 'datetime-local', 'month', 'number', 'range', 'time', 'week'],
  _e = ['email', 'password', 'search', 'tel', 'text', 'url'],
  We = ['email', 'password', 'search', 'tel', 'text', 'textarea', 'url'];
function w(i, e, t, n) {
  const a = t.toLowerCase(),
    r = i[t];
  n && r != null ? e.setAttribute(a, `${r}`) : e.removeAttribute(a);
}
function Ke(i, e, t) {
  t.type = i === 'textarea' ? 'text' : i;
  const n = Ue.includes(i),
    a = e;
  w(a, t, 'min', n), w(a, t, 'max', n), w(a, t, 'step', n);
  const r = We.includes(i),
    l = e;
  w(l, t, 'minLength', r), w(l, t, 'maxLength', r);
  const m = _e.includes(i);
  w(l, t, 'pattern', m);
}
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const u = {
    loader: 'loader',
    clearButton: 'clear-button',
    editingEnabled: 'editing-enabled',
    inlineChild: 'inline-child',
    inputIcon: 'icon',
    prefix: 'prefix',
    suffix: 'suffix',
    numberButtonWrapper: 'number-button-wrapper',
    buttonItemHorizontal: 'number-button-item--horizontal',
    wrapper: 'element-wrapper',
    inputWrapper: 'wrapper',
    actionWrapper: 'action-wrapper',
    numberButtonItem: 'number-button-item',
    hasSuffix: 'has-suffix',
    hasPrefix: 'has-prefix',
  },
  A = { validationMessage: 'inputValidationMessage' },
  W = {
    tel: 'phone',
    password: 'lock',
    email: 'email-address',
    date: 'calendar',
    time: 'clock',
    search: 'search',
  },
  Ge = { action: 'action' },
  qe = K`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) input[type=file],:host([scale=s]) textarea{min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea,:host([scale=m]) input[type=file]{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea,:host([scale=l]) input[type=file]{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{position:relative;margin:0;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-width:1px;border-style:solid;font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-background-color, var(--calcite-color-foreground-1));color:var(--calcite-input-text-color, var(--calcite-color-text-1));transition:var(--calcite-animation-timing),block-size 0,outline-offset 0s;-webkit-appearance:none}textarea:placeholder-shown,input:placeholder-shown{text-overflow:ellipsis}::placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-input-placeholder-text-color, var(--calcite-color-text-3))}textarea{border-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}input{border-start-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}.has-prefix input{border-start-start-radius:0;border-end-start-radius:0}.has-suffix input,.element-wrapper:has(.clear-button) input,:host([number-button-type=vertical][type=number]) input,:host([number-button-type=horizontal]) .has-suffix .suffix,:host([number-button-type=vertical][type=number]) .has-suffix .suffix,:host([number-button-type=vertical][type=number]) .clear-button,:host([number-button-type=horizontal][type=number]) .clear-button{border-start-end-radius:0;border-end-end-radius:0}:host([number-button-type=horizontal]) input{border-start-start-radius:0;border-start-end-radius:0;border-end-start-radius:0;border-end-end-radius:0}.has-prefix .prefix:first-child,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=down]{border-start-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}.has-suffix .suffix,:host([number-button-type=vertical][type=number][read-only]) .has-suffix .suffix,:host([clearable]) .clear-button,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=up]{border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}:host([clearable]) .has-suffix .clear-button{border-end-end-radius:0;border-start-end-radius:0}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px;border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]{border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-input-text-color, var(--calcite-color-text-1))}input[readonly],textarea[readonly]{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-input-background-color, var(--calcite-color-background))}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-input-text-color, var(--calcite-color-text-1))}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .icon{inset-inline-start:.5rem}:host([scale=m]) .icon{inset-inline-start:.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-icon-color, var(--calcite-color-text-3));z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.clear-button calcite-icon{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}.clear-button:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.clear-button:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.clear-button:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.clear-button:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.clear-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block;--calcite-progress-background-color: var(--calcite-input-loading-background-color);--calcite-progress-fill-color: var(--calcite-input-loading-fill-color)}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-medium);line-height:1;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input))}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto);background-color:var(--calcite-input-prefix-background-color, var(--calcite-color-background));color:var(--calcite-input-prefix-text-color, var(--calcite-color-text-2))}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto);background-color:var(--calcite-input-suffix-background-color, var(--calcite-color-background));color:var(--calcite-input-suffix-text-color, var(--calcite-color-text-2))}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal{border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));order:1;max-block-size:100%;min-block-size:100%;align-self:stretch;border-width:1px;border-style:solid}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=up]{border-inline-start-width:0px;order:5}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:.5rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}.number-button-item:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.number-button-item:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.number-button-item:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.number-button-item:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center;border-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));box-shadow:var(--calcite-input-shadow, var(--calcite-shadow-none))}input[type=date]::-webkit-input-placeholder{visibility:hidden!important}:host([type=color]) input{padding:.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;background-color:var(--calcite-color-foreground-1);text-align:center;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));block-size:initial}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:.5rem}:host([type=file][scale=m]) input{padding-block:.25rem;padding-inline:.75rem}:host([type=file][scale=l]) input{padding-block:.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`,
  C = class C extends G {
    constructor() {
      super(),
        (this.actionWrapperEl = M()),
        (this.attributeWatch = le(
          ['autofocus', 'enterkeyhint', 'inputmode', 'spellcheck'],
          this.handleGlobalAttributesChanged,
        )),
        (this.childElType = 'input'),
        (this.inputWrapperEl = M()),
        (this.onHiddenFormInputInput = (e) => {
          e.target.name === this.name && this.setValue({ value: e.target.value, origin: 'direct' }),
            this.setFocus(),
            e.stopPropagation();
        }),
        (this.previousValueOrigin = 'initial'),
        (this.userChangedValue = !1),
        (this._value = ''),
        (this.slottedActionElDisabledInternally = !1),
        (this.alignment = 'start'),
        (this.clearable = !1),
        (this.disabled = !1),
        (this.editingEnabled = !1),
        (this.groupSeparator = !1),
        (this.iconFlipRtl = !1),
        (this.loading = !1),
        (this.localeFormat = !1),
        (this.messages = ce()),
        (this.multiple = !1),
        (this.numberButtonType = 'vertical'),
        (this.readOnly = !1),
        (this.required = !1),
        (this.scale = 'm'),
        (this.status = 'idle'),
        (this.type = 'text'),
        (this.validity = {
          valid: !1,
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
        }),
        (this.calciteInputChange = S({ cancelable: !1 })),
        (this.calciteInputInput = S()),
        (this.calciteInternalInputBlur = S({ cancelable: !1 })),
        (this.calciteInternalInputFocus = S({ cancelable: !1 })),
        this.listen('click', this.clickHandler),
        this.listen('keydown', this.keyDownHandler);
    }
    get isClearable() {
      var e;
      return (
        !this.isTextarea &&
        (this.clearable || this.type === 'search') &&
        ((e = this.value) == null ? void 0 : e.length) > 0
      );
    }
    get isTextarea() {
      return this.childElType === 'textarea';
    }
    get value() {
      return this._value;
    }
    set value(e) {
      const t = this._value;
      e !== t &&
        ((this._value = e),
        this.valueWatcher(e, t),
        e && this._value === '' && this.setValue({ origin: 'reset', value: t }));
    }
    async selectText() {
      var e, t;
      this.type === 'number'
        ? (e = this.childNumberEl) == null || e.select()
        : (t = this.childEl) == null || t.select();
    }
    async setFocus() {
      await ue(this), de(this.type === 'number' ? this.childNumberEl : this.childEl);
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.inlineEditableEl = this.el.closest('calcite-inline-editable')),
        this.inlineEditableEl && (this.editingEnabled = this.inlineEditableEl.editingEnabled || !1),
        pe(this),
        he(this),
        this.el.addEventListener(R, this.onHiddenFormInputInput);
    }
    async load() {
      var e, t;
      (this.childElType = this.type === 'textarea' ? 'textarea' : 'input'),
        (this.maxString = (e = this.max) == null ? void 0 : e.toString()),
        (this.minString = (t = this.min) == null ? void 0 : t.toString()),
        (this.requestedIcon = L(W, this.icon, this.type)),
        this.setPreviousEmittedValue(this.value),
        this.setPreviousValue(this.value),
        this.type === 'number' &&
          (this.value === 'Infinity' || this.value === '-Infinity'
            ? ((this.displayedValue = this.value), (this.previousEmittedValue = this.value))
            : (this.warnAboutInvalidNumberValue(this.value),
              this.setValue({ origin: 'connected', value: y(this.value) ? this.value : '' })));
    }
    willUpdate(e) {
      var t, n;
      e.has('max') && (this.maxString = ((t = this.max) == null ? void 0 : t.toString()) || null),
        e.has('min') && (this.minString = ((n = this.min) == null ? void 0 : n.toString()) || null),
        (e.has('icon') || (e.has('type') && (this.hasUpdated || this.type !== 'text'))) &&
          (this.requestedIcon = L(W, this.icon, this.type));
    }
    updated() {
      me(this);
    }
    disconnectedCallback() {
      super.disconnectedCallback(),
        be(this),
        ge(this),
        this.el.removeEventListener(R, this.onHiddenFormInputInput);
    }
    handleGlobalAttributesChanged() {
      this.requestUpdate();
    }
    valueWatcher(e, t) {
      if (!this.userChangedValue) {
        if (this.type === 'number' && (e === 'Infinity' || e === '-Infinity')) {
          (this.displayedValue = e), (this.previousEmittedValue = e);
          return;
        }
        this.setValue({
          origin: 'direct',
          previousValue: t,
          value:
            e == null || e == ''
              ? ''
              : this.type === 'number'
                ? y(e)
                  ? e
                  : this.previousValue || ''
                : e,
        }),
          this.warnAboutInvalidNumberValue(e);
      }
      this.userChangedValue = !1;
    }
    keyDownHandler(e) {
      this.readOnly ||
        this.disabled ||
        e.defaultPrevented ||
        (this.isClearable && e.key === 'Escape' && (this.clearInputValue(e), e.preventDefault()),
        e.key === 'Enter' && ve(this) && e.preventDefault());
    }
    onLabelClick() {
      this.setFocus();
    }
    incrementOrDecrementNumberValue(e, t, n, a) {
      const { value: r } = this;
      if (r === 'Infinity' || r === '-Infinity') return;
      const l = e === 'up' ? 1 : -1,
        m = this.step === 'any' ? 1 : Math.abs(this.step || 1),
        b = new I(r !== '' ? r : '0').add(`${m * l}`),
        v = () => typeof n == 'number' && !isNaN(n) && b.subtract(`${n}`).isNegative,
        f = () => typeof t == 'number' && !isNaN(t) && !b.subtract(`${t}`).isNegative,
        c = v() ? `${n}` : f() ? `${t}` : b.toString();
      this.setValue({ committing: !0, nativeEvent: a, origin: 'user', value: c });
    }
    clearInputValue(e) {
      this.setValue({ committing: !0, nativeEvent: e, origin: 'user', value: '' });
    }
    emitChangeIfUserModified() {
      this.previousValueOrigin === 'user' &&
        this.value !== this.previousEmittedValue &&
        (this.calciteInputChange.emit(), this.setPreviousEmittedValue(this.value));
    }
    inputBlurHandler() {
      window.clearInterval(this.nudgeNumberValueIntervalId),
        this.calciteInternalInputBlur.emit(),
        this.emitChangeIfUserModified();
    }
    clickHandler(e) {
      if (this.disabled) return;
      const t = e.composedPath();
      !t.includes(this.inputWrapperEl.value) ||
        t.includes(this.actionWrapperEl.value) ||
        this.setFocus();
    }
    inputFocusHandler() {
      this.calciteInternalInputFocus.emit();
    }
    inputInputHandler(e) {
      this.disabled ||
        this.readOnly ||
        (this.type === 'file' && (this.files = this.childEl.files),
        this.setValue({ nativeEvent: e, origin: 'user', value: e.target.value }));
    }
    inputKeyDownHandler(e) {
      this.disabled || this.readOnly || (e.key === 'Enter' && this.emitChangeIfUserModified());
    }
    inputNumberInputHandler(e) {
      if (this.disabled || this.readOnly || this.value === 'Infinity' || this.value === '-Infinity')
        return;
      const t = e.target.value;
      g.numberFormatOptions = {
        locale: this.messages._lang,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
      };
      const n = g.delocalize(t);
      e.inputType === 'insertFromPaste'
        ? (y(n) || e.preventDefault(),
          this.setValue({ nativeEvent: e, origin: 'user', value: Ve(n) }),
          (this.childNumberEl.value = this.displayedValue))
        : this.setValue({ nativeEvent: e, origin: 'user', value: n });
    }
    inputNumberKeyDownHandler(e) {
      if (this.type !== 'number' || this.disabled || this.readOnly) return;
      if (this.value === 'Infinity' || this.value === '-Infinity') {
        e.preventDefault(),
          (e.key === 'Backspace' || e.key === 'Delete') && this.clearInputValue(e);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault(), this.nudgeNumberValue('up', e);
        return;
      }
      if (e.key === 'ArrowDown') {
        this.nudgeNumberValue('down', e);
        return;
      }
      const t = [...D, 'ArrowLeft', 'ArrowRight', 'Backspace', 'Delete', 'Enter', 'Escape', 'Tab'];
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const n = e.shiftKey && e.key === 'Tab';
      if (t.includes(e.key) || n) {
        e.key === 'Enter' && this.emitChangeIfUserModified();
        return;
      }
      (g.numberFormatOptions = {
        locale: this.messages._lang,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
      }),
        !(
          e.key === g.decimal &&
          ((!this.value && !this.childNumberEl.value) ||
            (this.value && this.childNumberEl.value.indexOf(g.decimal) === -1))
        ) &&
          ((/[eE]/.test(e.key) &&
            ((!this.value && !this.childNumberEl.value) ||
              (this.value && !/[eE]/.test(this.childNumberEl.value)))) ||
            (e.key === '-' &&
              ((!this.value && !this.childNumberEl.value) ||
                (this.value && this.childNumberEl.value.split('-').length <= 2))) ||
            e.preventDefault());
    }
    nudgeNumberValue(e, t) {
      if ((t instanceof KeyboardEvent && t.repeat) || this.type !== 'number') return;
      const n = this.maxString ? parseFloat(this.maxString) : null,
        a = this.minString ? parseFloat(this.minString) : null,
        r = 150;
      this.incrementOrDecrementNumberValue(e, n, a, t),
        this.nudgeNumberValueIntervalId && window.clearInterval(this.nudgeNumberValueIntervalId);
      let l = !0;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (l) {
          l = !1;
          return;
        }
        this.incrementOrDecrementNumberValue(e, n, a, t);
      }, r);
    }
    numberButtonPointerUpAndOutHandler() {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }
    numberButtonPointerDownHandler(e) {
      if (!fe(e)) return;
      e.preventDefault();
      const t = e.target.dataset.adjustment;
      this.disabled || this.nudgeNumberValue(t, e);
    }
    syncHiddenFormInput(e) {
      Ke(this.type, this, e);
    }
    setChildElRef(e) {
      this.childEl = e;
    }
    setChildNumberElRef(e) {
      this.childNumberEl = e;
    }
    setInputValue(e) {
      this.type === 'number' && this.childNumberEl
        ? (this.childNumberEl.value = e)
        : this.childEl && (this.childEl.value = e);
    }
    setPreviousEmittedValue(e) {
      this.previousEmittedValue = this.normalizeValue(e);
    }
    normalizeValue(e) {
      return this.type === 'number' ? (y(e) ? e : '') : e;
    }
    setPreviousValue(e) {
      this.previousValue = this.normalizeValue(e);
    }
    setValue({ committing: e = !1, nativeEvent: t, origin: n, previousValue: a, value: r }) {
      var l, m;
      if (
        (this.setPreviousValue(a ?? this.value),
        (this.previousValueOrigin = n),
        this.type === 'number')
      ) {
        g.numberFormatOptions = {
          locale: this.messages._lang,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: 'never',
        };
        const b =
            ((l = this.previousValue) == null ? void 0 : l.length) > r.length ||
            ((m = this.value) == null ? void 0 : m.length) > r.length,
          v = r.charAt(r.length - 1) === '.',
          f = v && b ? r : Be(r),
          c = r && !f ? (y(this.previousValue) ? this.previousValue : '') : f;
        let d = g.localize(c);
        n !== 'connected' && !v && (d = De(d, c, g)),
          (this.displayedValue = v && b ? `${d}${g.decimal}` : d),
          (this.userChangedValue = n === 'user' && this.value !== c),
          (this.value = ['-', '.'].includes(c) ? '' : c);
      } else (this.userChangedValue = n === 'user' && this.value !== r), (this.value = r);
      n === 'direct' && (this.setInputValue(r), (this.previousEmittedValue = r)),
        t &&
          (this.calciteInputInput.emit().defaultPrevented
            ? ((this.value = this.previousValue),
              (this.displayedValue =
                this.type === 'number' ? g.localize(this.previousValue) : this.previousValue))
            : e && this.emitChangeIfUserModified());
    }
    inputKeyUpHandler() {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }
    warnAboutInvalidNumberValue(e) {
      this.type === 'number' &&
        e &&
        !y(e) &&
        console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`);
    }
    render() {
      const e = q(this.el),
        t = h`<div class=${p(u.loader)}><calcite-progress .label=${this.messages.loading} type=indeterminate></calcite-progress></div>`,
        n = h`<button .ariaLabel=${this.messages.clear} class=${p(u.clearButton)} .disabled=${this.disabled || this.readOnly} @click=${this.clearInputValue} tabindex=-1 type=button><calcite-icon icon=x .scale=${O(this.scale)}></calcite-icon></button>`,
        a = h`<calcite-icon class=${p(u.inputIcon)} .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${O(this.scale)}></calcite-icon>`,
        r = this.numberButtonType === 'horizontal',
        l = h`<button aria-hidden=true class=${p({ [u.numberButtonItem]: !0, [u.buttonItemHorizontal]: r })} data-adjustment=up .disabled=${this.disabled || this.readOnly} @pointerdown=${this.numberButtonPointerDownHandler} @pointerout=${this.numberButtonPointerUpAndOutHandler} @pointerup=${this.numberButtonPointerUpAndOutHandler} tabindex=-1 type=button><calcite-icon icon=chevron-up .scale=${O(this.scale)}></calcite-icon></button>`,
        m = h`<button aria-hidden=true class=${p({ [u.numberButtonItem]: !0, [u.buttonItemHorizontal]: r })} data-adjustment=down .disabled=${this.disabled || this.readOnly} @pointerdown=${this.numberButtonPointerDownHandler} @pointerout=${this.numberButtonPointerUpAndOutHandler} @pointerup=${this.numberButtonPointerUpAndOutHandler} tabindex=-1 type=button><calcite-icon icon=chevron-down .scale=${O(this.scale)}></calcite-icon></button>`,
        b = h`<div class=${p(u.numberButtonWrapper)}>${l}${m}</div>`,
        v = h`<div class=${p(u.prefix)}>${this.prefixText}</div>`,
        f = h`<div class=${p(u.suffix)}>${this.suffixText}</div>`,
        c = this.el.autofocus,
        d = this.el.enterKeyHint,
        x = this.el.inputMode,
        E =
          this.type === 'number'
            ? ye(
                'localized-input',
                h`<input accept=${this.accept ?? o} aria-errormessage=${A.validationMessage} .ariaInvalid=${this.status === 'invalid'} .ariaLabel=${P(this)} autocomplete=${this.autocomplete ?? o} .autofocus=${c} value=${this.defaultValue ?? o} .disabled=${this.disabled ? !0 : null} enterkeyhint=${d ?? o} inputmode=${x ?? o} maxlength=${this.maxLength ?? o} minlength=${this.minLength ?? o} .multiple=${this.multiple} name=${o} @blur=${this.inputBlurHandler} @focus=${this.inputFocusHandler} @input=${this.inputNumberInputHandler} @keydown=${this.inputNumberKeyDownHandler} @keyup=${this.inputKeyUpHandler} pattern=${this.pattern ?? o} placeholder=${(this.placeholder || '') ?? o} .readOnly=${this.readOnly} type=text .value=${_(this.displayedValue ?? '')} ${N(this.setChildNumberElRef)}>`,
              )
            : null,
        H = this.childElType === 'input' ? U`input` : U`textarea`,
        ie =
          this.type !== 'number'
            ? xe`<${H} accept=${this.accept ?? o} aria-errormessage=${A.validationMessage} .ariaInvalid=${this.status === 'invalid'} .ariaLabel=${P(this)} autocomplete=${this.autocomplete ?? o} .autofocus=${c} class=${p({ [u.editingEnabled]: this.editingEnabled, [u.inlineChild]: !!this.inlineEditableEl })} .defaultValue=${this.defaultValue ?? ''} .disabled=${this.disabled ? !0 : null} enterkeyhint=${d ?? o} inputmode=${x ?? o} max=${this.maxString ?? o} maxlength=${this.maxLength ?? o} min=${this.minString ?? o} minlength=${this.minLength ?? o} .multiple=${this.multiple} name=${this.name ?? o} @blur=${this.inputBlurHandler} @focus=${this.inputFocusHandler} @input=${this.inputInputHandler} @keydown=${this.inputKeyDownHandler} @keyup=${this.inputKeyUpHandler} pattern=${this.pattern ?? o} placeholder=${(this.placeholder || '') ?? o} .readOnly=${this.readOnly} .required=${this.required ? !0 : null} spellcheck=${this.el.spellcheck ?? o} step=${this.step ?? o} tabindex=${(this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null) ?? o} type=${this.type ?? o} .value=${_(this.value ?? '')} ${N(this.setChildElRef)}></${H}>`
            : null;
      return $e({
        disabled: this.disabled,
        children: h`<div class=${p({ [u.inputWrapper]: !0, [J.rtl]: e === 'rtl', [u.hasSuffix]: this.suffixText, [u.hasPrefix]: this.prefixText })} ${N(this.inputWrapperEl)}>${this.type === 'number' && this.numberButtonType === 'horizontal' && !this.readOnly ? m : null}${this.prefixText ? v : null}<div class=${p(u.wrapper)}>${E}${ie}${this.isClearable ? n : null}${this.requestedIcon ? a : null}${this.loading ? t : null}</div><div class=${p(u.actionWrapper)} ${N(this.actionWrapperEl)}><slot name=${Ge.action}></slot></div>${this.type === 'number' && this.numberButtonType === 'vertical' && !this.readOnly ? b : null}${this.suffixText ? f : null}${this.type === 'number' && this.numberButtonType === 'horizontal' && !this.readOnly ? l : null}${ke({ component: this })}</div>${this.validationMessage && this.status === 'invalid' ? Pe({ icon: this.validationIcon, id: A.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}`,
      });
    }
  };
(C.properties = {
  displayedValue: 16,
  slottedActionElDisabledInternally: 16,
  accept: 1,
  alignment: 3,
  autocomplete: 0,
  clearable: 7,
  disabled: 7,
  editingEnabled: 7,
  files: 0,
  form: 3,
  groupSeparator: 7,
  icon: [3, { converter: j }],
  iconFlipRtl: 7,
  label: 1,
  loading: 7,
  localeFormat: 5,
  max: 11,
  maxLength: 11,
  messageOverrides: 0,
  min: 11,
  minLength: 11,
  multiple: 5,
  name: 3,
  numberButtonType: 3,
  numberingSystem: 3,
  pattern: 1,
  placeholder: 1,
  prefixText: 1,
  readOnly: 7,
  required: 7,
  scale: 3,
  status: 3,
  step: 3,
  suffixText: 1,
  type: 3,
  validationIcon: [3, { converter: j }],
  validationMessage: 1,
  validity: 0,
  value: 1,
}),
  (C.styles = qe);
let B = C;
X('calcite-input', B);
const Ze = Object.freeze(
  Object.defineProperty({ __proto__: null, Input: B }, Symbol.toStringTag, { value: 'Module' }),
);
export { Ze as i, Pe as m, g as q };
