import {
  iX as H,
  iY as L,
  iZ as S,
  i_ as j,
  i$ as g,
  j0 as x,
  j1 as C,
  j2 as U,
  j3 as R,
  L as G,
  j4 as q,
  j5 as W,
  a as K,
  gK as z,
  c as v,
  b as D,
  gG as Y,
  iN as P,
  j6 as N,
  j7 as X,
  j8 as Z,
  j9 as y,
  d as J,
  ja as Q,
  jb as _,
  jc as tt,
  jd as et,
  iP as it,
  ft as B,
  je as at,
  p as nt,
  s as b,
  E as m,
  n as A,
  jf as st,
  jg as M,
  x as w,
  i as ot,
  S as lt,
} from './index.lazy-BHTpPf8X.js';
import './index-BXhxFG7-.js';
import { m as ct } from './index-C8TmRuL7.js';
import { e as rt } from './escapeRegExp-CEZwNgWI.js';
import './index-DqxZnyqH.js';
import './key-ak3_eHKH.js';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const V = (c, t, e) => {
    const l = new Map();
    for (let i = t; i <= e; i++) l.set(c[i], i);
    return l;
  },
  ut = H(
    class extends L {
      constructor(c) {
        if ((super(c), c.type !== S.CHILD))
          throw Error('repeat() can only be used in text expressions');
      }
      dt(c, t, e) {
        let l;
        e === void 0 ? (e = t) : t !== void 0 && (l = t);
        const i = [],
          n = [];
        let a = 0;
        for (const r of c) (i[a] = l ? l(r, a) : a), (n[a] = e(r, a)), a++;
        return { values: n, keys: i };
      }
      render(c, t, e) {
        return this.dt(c, t, e).values;
      }
      update(c, [t, e, l]) {
        const i = j(c),
          { values: n, keys: a } = this.dt(t, e, l);
        if (!Array.isArray(i)) return (this.ut = a), n;
        const r = this.ut ?? (this.ut = []),
          p = [];
        let $,
          T,
          s = 0,
          u = i.length - 1,
          o = 0,
          h = n.length - 1;
        for (; s <= u && o <= h; )
          if (i[s] === null) s++;
          else if (i[u] === null) u--;
          else if (r[s] === a[o]) (p[o] = g(i[s], n[o])), s++, o++;
          else if (r[u] === a[h]) (p[h] = g(i[u], n[h])), u--, h--;
          else if (r[s] === a[h]) (p[h] = g(i[s], n[h])), x(c, p[h + 1], i[s]), s++, h--;
          else if (r[u] === a[o]) (p[o] = g(i[u], n[o])), x(c, i[s], i[u]), u--, o++;
          else if (($ === void 0 && (($ = V(a, o, h)), (T = V(r, s, u))), $.has(r[s])))
            if ($.has(r[u])) {
              const d = T.get(a[o]),
                k = d !== void 0 ? i[d] : null;
              if (k === null) {
                const O = x(c, i[s]);
                g(O, n[o]), (p[o] = O);
              } else (p[o] = g(k, n[o])), x(c, i[s], k), (i[d] = null);
              o++;
            } else C(i[u]), u--;
          else C(i[s]), s++;
        for (; o <= h; ) {
          const d = x(c, p[h + 1]);
          g(d, n[o]), (p[o++] = d);
        }
        for (; s <= u; ) {
          const d = i[s++];
          d !== null && C(d);
        }
        return (this.ut = a), R(c, p), U;
      }
    },
  );
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const ht = ot`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}.input-container{position:relative;display:flex;flex:1 1 auto;flex-wrap:nowrap}.input{width:100%;--calcite-input-prefix-size: var(--calcite-autocomplete-input-prefix-size);--calcite-input-suffix-size: var(--calcite-autocomplete-input-suffix-size);--calcite-input-background-color: var(--calcite-autocomplete-input-background-color);--calcite-input-border-color: var(--calcite-autocomplete-input-border-color);--calcite-input-corner-radius: var(--calcite-autocomplete-input-corner-radius);--calcite-input-shadow: var(--calcite-autocomplete-input-shadow);--calcite-input-icon-color: var(--calcite-autocomplete-input-icon-color);--calcite-input-text-color: var(--calcite-autocomplete-input-text-color);--calcite-input-placeholder-text-color: var(--calcite-autocomplete-input-placeholder-text-color);--calcite-input-actions-background-color: var(--calcite-autocomplete-input-actions-background-color);--calcite-input-actions-background-color-hover: var(--calcite-autocomplete-input-actions-background-color-hover);--calcite-input-actions-background-color-press: var(--calcite-autocomplete-input-actions-background-color-press);--calcite-input-actions-icon-color: var(--calcite-autocomplete-input-actions-icon-color);--calcite-input-actions-icon-color-hover: var(--calcite-autocomplete-input-actions-icon-color-hover);--calcite-input-actions-icon-color-press: var(--calcite-autocomplete-input-actions-icon-color-press);--calcite-input-loading-background-color: var(--calcite-autocomplete-input-loading-background-color);--calcite-input-loading-fill-color: var(--calcite-autocomplete-input-loading-fill-color);--calcite-input-prefix-background-color: var(--calcite-autocomplete-input-prefix-background-color);--calcite-input-prefix-text-color: var(--calcite-autocomplete-input-prefix-text-color);--calcite-input-suffix-background-color: var(--calcite-autocomplete-input-suffix-background-color);--calcite-input-suffix-text-color: var(--calcite-autocomplete-input-suffix-text-color)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.content-container{box-sizing:border-box;width:100%}.floating-ui-container{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;max-inline-size:100vw;max-block-size:100vh;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.content-container .calcite-floating-ui-anim{max-height:45vh;width:100%;overflow-y:auto;color:var(--calcite-autocomplete-text-color, var(--calcite-color-text-1));background-color:var(--calcite-autocomplete-background-color, var(--calcite-color-foreground-1));border-radius:var(--calcite-autocomplete-corner-radius, var(--calcite-corner-radius-round))}.content--hidden{display:none}@media (forced-colors: active){.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`,
  F = { contentBottom: 'content-bottom', contentTop: 'content-top' },
  f = {
    inputContainer: 'input-container',
    input: 'input',
    contentContainer: 'content-container',
    contentAnimation: 'content-animation',
    content: 'content',
    contentHidden: 'content--hidden',
    floatingUIContainer: 'floating-ui-container',
    floatingUIContainerActive: 'floating-ui-container--active',
    screenReadersOnly: 'screen-readers-only',
  },
  pt = { validationMessage: 'autocompleteValidationMessage' },
  dt = 'calcite-autocomplete-item-group',
  mt = 'calcite-autocomplete-item',
  I = class I extends G {
    constructor() {
      super(),
        (this.guid = q()),
        (this.attributeWatch = W(
          ['autofocus', 'enterkeyhint', 'inputmode'],
          this.handleGlobalAttributesChanged,
        )),
        (this.inputId = `autocomplete-input-${this.guid}`),
        (this.listId = `autocomplete-list-${this.guid}`),
        (this.messages = K()),
        (this.transitionProp = 'opacity'),
        (this.activeDescendant = ''),
        (this.activeIndex = -1),
        (this.hasContentBottom = !1),
        (this.hasContentTop = !1),
        (this.items = []),
        (this.groups = []),
        (this.alignment = 'start'),
        (this.disabled = !1),
        (this.iconFlipRtl = !1),
        (this.loading = !1),
        (this.open = !1),
        (this.overlayPositioning = 'absolute'),
        (this.placement = z),
        (this.readOnly = !1),
        (this.required = !1),
        (this.scale = 'm'),
        (this.status = 'idle'),
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
        (this.value = ''),
        (this.calciteAutocompleteBeforeClose = v({ cancelable: !1 })),
        (this.calciteAutocompleteBeforeOpen = v({ cancelable: !1 })),
        (this.calciteAutocompleteChange = v({ cancelable: !1 })),
        (this.calciteAutocompleteClose = v({ cancelable: !1 })),
        (this.calciteAutocompleteOpen = v({ cancelable: !1 })),
        (this.calciteAutocompleteTextChange = v({ cancelable: !1 })),
        (this.calciteAutocompleteTextInput = v({ cancelable: !1 })),
        (this.mutationObserver = D('mutation', () => this.getAllItemsDebounced())),
        (this.resizeObserver = D('resize', () => {
          this.setFloatingElSize();
        })),
        (this.getAllItemsDebounced = Y(this.getAllItems, 0)),
        this.listenOn(document, 'click', this.documentClickHandler),
        this.listen(
          'calciteInternalAutocompleteItemSelect',
          this.handleInternalAutocompleteItemSelect,
        );
    }
    get isOpen() {
      return this.open && (this.hasContentTop || this.hasContentBottom || this.items.length > 0);
    }
    get enabledItems() {
      return this.items.filter((t) => !t.disabled);
    }
    async reposition(t = !1) {
      const {
        floatingEl: e,
        referenceEl: l,
        placement: i,
        overlayPositioning: n,
        flipPlacements: a,
      } = this;
      return N(
        this,
        {
          floatingEl: e,
          referenceEl: l,
          overlayPositioning: n,
          placement: i,
          flipPlacements: a,
          type: 'menu',
        },
        t,
      );
    }
    async scrollContentTo(t) {
      var e;
      (e = this.transitionEl) == null || e.scrollTo(t);
    }
    async selectText() {
      return this.referenceEl.selectText();
    }
    async setFocus() {
      return this.referenceEl.setFocus();
    }
    connectedCallback() {
      var t;
      super.connectedCallback(),
        (t = this.mutationObserver) == null || t.observe(this.el, { childList: !0, subtree: !0 }),
        X(this),
        Z(this),
        (this.defaultInputValue = this.inputValue || ''),
        this.getAllItemsDebounced(),
        y(this);
    }
    async load() {
      this.getAllItemsDebounced();
    }
    willUpdate(t) {
      t.has('disabled') &&
        (this.hasUpdated || this.disabled !== !1) &&
        this.handleDisabledChange(this.disabled),
        t.has('flipPlacements') && this.reposition(!0),
        t.has('open') && (this.hasUpdated || this.open !== !1) && this.openHandler(),
        t.has('overlayPositioning') &&
          (this.hasUpdated || this.overlayPositioning !== 'absolute') &&
          this.reposition(!0),
        t.has('placement') && (this.hasUpdated || this.placement !== z) && this.reposition(!0);
      let e = !1;
      t.has('inputValue') &&
        (this.hasUpdated || this.inputValue) &&
        ((this.inputValueMatchPattern =
          this.inputValue && new RegExp(`(${rt(this.inputValue)})`, 'i')),
        this.updateItems(),
        this.updateGroups(),
        (e = !0)),
        !e &&
          t.has('scale') &&
          (this.hasUpdated || this.scale !== 'm') &&
          (this.updateItems(), this.updateGroups(), (e = !0)),
        !e &&
          t.has('activeIndex') &&
          (this.hasUpdated || this.activeIndex !== -1) &&
          this.updateItems();
    }
    updated() {
      J(this);
    }
    loaded() {
      Q(this, this.value || ''), (this.defaultInputValue = this.inputValue || ''), y(this);
    }
    disconnectedCallback() {
      var t, e;
      super.disconnectedCallback(),
        (t = this.mutationObserver) == null || t.disconnect(),
        (e = this.resizeObserver) == null || e.disconnect(),
        _(this),
        tt(this),
        et(this);
    }
    setFloatingElSize() {
      const { referenceEl: t, floatingEl: e } = this;
      !t || !e || (e.style.inlineSize = `${t.clientWidth}px`);
    }
    handleGlobalAttributesChanged() {
      this.requestUpdate();
    }
    handleDisabledChange(t) {
      t || (this.open = !1);
    }
    openHandler() {
      if ((it(this), this.open || (this.activeIndex = -1), this.disabled)) {
        this.open = !1;
        return;
      }
      this.setFloatingElSize(), this.reposition(!0);
    }
    async documentClickHandler(t) {
      this.disabled || t.composedPath().includes(this.el) || (this.open = !1);
    }
    async handleInternalAutocompleteItemSelect(t) {
      (this.value = t.target.value),
        t.stopPropagation(),
        this.emitChange(),
        await this.setFocus(),
        (this.open = !1);
    }
    onLabelClick() {
      this.setFocus();
    }
    onFormReset() {
      this.inputValue = this.defaultInputValue;
    }
    onBeforeOpen() {
      this.calciteAutocompleteBeforeOpen.emit();
    }
    onOpen() {
      this.calciteAutocompleteOpen.emit();
    }
    onBeforeClose() {
      this.calciteAutocompleteBeforeClose.emit();
    }
    onClose() {
      this.calciteAutocompleteClose.emit();
    }
    emitChange() {
      this.calciteAutocompleteChange.emit();
    }
    updateGroups() {
      this.groups.forEach((t, e, l) => {
        (t.scale = this.scale), e === 0 && (t.disableSpacing = !0);
        const i = l[e + 1];
        i && (i.disableSpacing = t.children.length === 0);
      });
    }
    updateItems() {
      let t = null;
      this.items.forEach((e) => {
        (e.scale = this.scale), (e.inputValueMatchPattern = this.inputValueMatchPattern);
      }),
        this.enabledItems.forEach((e, l) => {
          const i = l === this.activeIndex;
          i && (t = e.guid), (e.active = i);
        }),
        (this.activeDescendant = t);
    }
    handleInputFocus() {
      this.open = !0;
    }
    handleContentTopSlotChange(t) {
      this.hasContentTop = B(t);
    }
    handleContentBottomSlotChange(t) {
      this.hasContentBottom = B(t);
    }
    getAllItems() {
      const { el: t } = this;
      (this.groups = Array.from(t.querySelectorAll(dt))),
        (this.items = Array.from(t.querySelectorAll(mt))),
        this.updateItems(),
        this.updateGroups();
    }
    setReferenceEl(t) {
      var e;
      (this.referenceEl = t), t && ((e = this.resizeObserver) == null || e.observe(t), y(this));
    }
    keyDownHandler(t) {
      const { defaultPrevented: e, key: l } = t;
      if (e) return;
      const { open: i, activeIndex: n, enabledItems: a } = this,
        r = a.length && n > -1 ? a[n] : null;
      switch (l) {
        case 'Escape':
          i && ((this.open = !1), t.preventDefault());
          break;
        case 'Tab':
          this.open = !1;
          break;
        case 'Enter':
          i && r
            ? ((this.value = r.value), this.emitChange(), (this.open = !1), t.preventDefault())
            : t.defaultPrevented || (at(this) && t.preventDefault());
          break;
        case 'ArrowDown':
          a.length &&
            ((this.open = !0),
            (this.activeIndex = n !== -1 ? Math.min(n + 1, a.length - 1) : 0),
            this.scrollToActiveItem(),
            t.preventDefault());
          break;
        case 'ArrowUp':
          a.length &&
            ((this.open = !0),
            (this.activeIndex = n !== -1 ? Math.max(n - 1, 0) : a.length - 1),
            this.scrollToActiveItem(),
            t.preventDefault());
          break;
        case 'Home':
          a.length &&
            ((this.open = !0),
            (this.activeIndex = 0),
            this.scrollToActiveItem(),
            t.preventDefault());
          break;
        case 'End':
          a.length &&
            ((this.open = !0),
            (this.activeIndex = a.length - 1),
            this.scrollToActiveItem(),
            t.preventDefault());
          break;
      }
    }
    scrollToActiveItem() {
      var t;
      (t = this.enabledItems[this.activeIndex]) == null || t.scrollIntoView({ block: 'nearest' });
    }
    changeHandler(t) {
      t.stopPropagation(),
        (this.inputValue = t.target.value),
        this.calciteAutocompleteTextChange.emit();
    }
    inputClickHandler(t) {
      t.defaultPrevented || (this.open = !0);
    }
    inputHandler(t) {
      t.stopPropagation(),
        (this.inputValue = t.target.value),
        this.calciteAutocompleteTextInput.emit();
    }
    setFloatingEl(t) {
      (this.floatingEl = t), y(this);
    }
    setTransitionEl(t) {
      t && (this.transitionEl = t);
    }
    render() {
      const { disabled: t, listId: e, inputId: l, isOpen: i } = this,
        n = this.el.autofocus,
        a = this.el.enterKeyHint,
        r = this.el.inputMode;
      return nt({
        disabled: t,
        children: w`<div class=${b(f.inputContainer)}><calcite-input .alignment=${this.alignment} aria-activedescendant=${this.activeDescendant ?? m} aria-controls=${e ?? m} aria-owns=${e ?? m} aria-autocomplete=list .ariaExpanded=${i} aria-haspopup=listbox .autocomplete=${this.autocomplete} .autofocus=${n} class=${b(f.input)} clearable .disabled=${t} enterkeyhint=${a ?? m} .form=${this.form} .icon=${this.icon ?? !0} .iconFlipRtl=${this.iconFlipRtl} id=${l ?? m} inputmode=${r ?? m} .label=${this.label} .loading=${this.loading} .maxLength=${this.maxLength} .messageOverrides=${this.messages} .minLength=${this.minLength} .name=${this.name} @click=${this.inputClickHandler} @keydown=${this.keyDownHandler} @calciteInputChange=${this.changeHandler} @calciteInputInput=${this.inputHandler} @calciteInternalInputFocus=${this.handleInputFocus} .pattern=${this.pattern} .placeholder=${this.placeholder} .prefixText=${this.prefixText} .readOnly=${this.readOnly} role=combobox .scale=${this.scale} .status=${this.status} .suffixText=${this.suffixText} type=search .value=${this.inputValue} ${A(this.setReferenceEl)}></calcite-input>${this.renderListBox()}<div class=${b({ [f.contentContainer]: !0, [f.floatingUIContainer]: !0, [f.floatingUIContainerActive]: i })} ${A(this.setFloatingEl)}><div class=${b({ [f.contentAnimation]: !0, [M.animation]: !0, [M.animationActive]: i })} ${A(this.setTransitionEl)}><div class=${b({ [f.content]: !0, [f.contentHidden]: !i })}><slot name=${F.contentTop} @slotchange=${this.handleContentTopSlotChange}></slot><slot aria-hidden=true></slot><slot name=${F.contentBottom} @slotchange=${this.handleContentBottomSlotChange}></slot></div></div></div></div>${st({ component: this })}${this.validationMessage && this.status === 'invalid' ? ct({ icon: this.validationIcon, id: pt.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}`,
      });
    }
    renderListBox() {
      return w`<ul aria-labelledby=${this.inputId ?? m} class=${b(f.screenReadersOnly)} id=${this.listId ?? m} role=listbox tabindex=-1>${this.renderListBoxOptions()}</ul>`;
    }
    renderListBoxOptions() {
      return ut(
        this.items.filter((t) => !!(t.label || t.heading)),
        (t) => t.guid,
        (t) =>
          w`<li .ariaDisabled=${t.disabled} .ariaLabel=${t.label} id=${t.guid ?? m} role=option tabindex=-1>${t.heading}${t.description}</li>`,
      );
    }
  };
(I.properties = {
  activeDescendant: 16,
  activeIndex: 16,
  hasContentBottom: 16,
  hasContentTop: 16,
  items: 16,
  groups: 16,
  isOpen: 16,
  enabledItems: 16,
  alignment: 3,
  autocomplete: 0,
  disabled: 7,
  flipPlacements: 0,
  form: 3,
  icon: [3, { converter: P }],
  iconFlipRtl: 7,
  inputValue: 1,
  label: 1,
  loading: 7,
  maxLength: 11,
  messageOverrides: 0,
  minLength: 11,
  name: 3,
  open: 7,
  overlayPositioning: 3,
  pattern: 1,
  placeholder: 1,
  placement: 3,
  prefixText: 1,
  readOnly: 7,
  required: 7,
  scale: 3,
  status: 3,
  suffixText: 1,
  validationIcon: [3, { converter: P }],
  validationMessage: 1,
  validity: 0,
  value: 1,
}),
  (I.styles = ht);
let E = I;
lt('calcite-autocomplete', E);
export { E as Autocomplete };
