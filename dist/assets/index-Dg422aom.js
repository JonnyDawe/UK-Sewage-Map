import {
  L as D,
  j4 as E,
  b as d,
  gK as h,
  c as a,
  j6 as y,
  m as O,
  gH as x,
  j9 as n,
  d as k,
  jd as I,
  iP as C,
  uQ as l,
  nr as P,
  nu as S,
  np as p,
  p as $,
  n as r,
  s as m,
  jg as f,
  x as z,
  i as H,
  S as T,
} from './index.lazy-BHTpPf8X.js';
import { t as A } from './key-ak3_eHKH.js';
import { r as L } from './dynamicClasses-Dlk4kLaw.js';
import './index-DqxZnyqH.js';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const F = { dropdownTrigger: 'trigger' },
  u = { content: 'calcite-dropdown-content', wrapper: 'calcite-dropdown-wrapper' },
  B = H`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}.calcite-dropdown-wrapper{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;max-inline-size:100vw;max-block-size:100vh;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-dropdown-content{max-height:45vh;width:auto;overflow-y:auto;overflow-x:hidden;inline-size:var(--calcite-dropdown-width, var(--calcite-internal-dropdown-width));background-color:var(--calcite-dropdown-background-color, var(--calcite-color-foreground-1))}.calcite-trigger-container{position:relative;display:flex;height:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}.width-s{--calcite-internal-dropdown-width: 12rem}.width-m{--calcite-internal-dropdown-width: 14rem}.width-l{--calcite-internal-dropdown-width: 16rem}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:var(--calcite-border-width-sm) solid canvasText}}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,
  o = class o extends D {
    constructor() {
      super(),
        (this.focusLastDropdownItem = !1),
        (this.groups = []),
        (this.guid = `calcite-dropdown-${E()}`),
        (this.items = []),
        (this.mutationObserver = d('mutation', () => this.updateItems())),
        (this.onOpenEnd = () => {
          this.focusOnFirstActiveOrDefaultItem(),
            this.el.removeEventListener('calciteDropdownOpen', this.onOpenEnd);
        }),
        (this.transitionProp = 'opacity'),
        (this.resizeObserver = d('resize', (e) => this.resizeObserverCallback(e))),
        (this.closeOnSelectDisabled = !1),
        (this.disabled = !1),
        (this.maxItems = 0),
        (this.offsetDistance = 0),
        (this.offsetSkidding = 0),
        (this.open = !1),
        (this.overlayPositioning = 'absolute'),
        (this.placement = h),
        (this.scale = 'm'),
        (this.selectedItems = []),
        (this.type = 'click'),
        (this.calciteDropdownBeforeClose = a({ cancelable: !1 })),
        (this.calciteDropdownBeforeOpen = a({ cancelable: !1 })),
        (this.calciteDropdownClose = a({ cancelable: !1 })),
        (this.calciteDropdownOpen = a({ cancelable: !1 })),
        (this.calciteDropdownSelect = a({ cancelable: !1 })),
        this.listenOn(window, 'click', this.closeCalciteDropdownOnClick),
        this.listen('calciteInternalDropdownCloseRequest', this.closeCalciteDropdownOnEvent),
        this.listenOn(window, 'calciteDropdownOpen', this.closeCalciteDropdownOnOpenEvent),
        this.listen('pointerenter', this.pointerEnterHandler),
        this.listen('pointerleave', this.pointerLeaveHandler),
        this.listen(
          'calciteInternalDropdownItemKeyEvent',
          this.calciteInternalDropdownItemKeyEvent,
        ),
        this.listen('calciteInternalDropdownItemSelect', this.handleItemSelect);
    }
    async reposition(e = !1) {
      const {
        filteredFlipPlacements: t,
        floatingEl: i,
        offsetDistance: s,
        offsetSkidding: w,
        overlayPositioning: g,
        placement: b,
        referenceEl: v,
      } = this;
      return y(
        this,
        {
          floatingEl: i,
          referenceEl: v,
          offsetDistance: s,
          offsetSkidding: w,
          overlayPositioning: g,
          placement: b,
          flipPlacements: t,
          type: 'menu',
        },
        e,
      );
    }
    async setFocus() {
      await O(this), x(this.referenceEl);
    }
    connectedCallback() {
      var e;
      super.connectedCallback(),
        (e = this.mutationObserver) == null || e.observe(this.el, { childList: !0, subtree: !0 }),
        this.setFilteredPlacements(),
        this.updateItems(),
        n(this);
    }
    willUpdate(e) {
      e.has('open') && (this.hasUpdated || this.open !== !1) && this.openHandler(),
        e.has('disabled') &&
          (this.hasUpdated || this.disabled !== !1) &&
          this.handleDisabledChange(this.disabled),
        e.has('flipPlacements') && this.flipPlacementsHandler(),
        e.has('maxItems') && this.hasUpdated && this.setMaxScrollerHeight(),
        this.hasUpdated &&
          ((e.has('offsetDistance') && this.offsetDistance !== 0) ||
            (e.has('offsetSkidding') && this.offsetSkidding !== 0) ||
            (e.has('overlayPositioning') && this.overlayPositioning !== 'absolute') ||
            (e.has('placement') && this.placement !== h)) &&
          this.reposition(!0),
        e.has('scale') && (this.hasUpdated || this.scale !== 'm') && this.handlePropsChange();
    }
    updated() {
      k(this);
    }
    loaded() {
      this.updateSelectedItems(), n(this);
    }
    disconnectedCallback() {
      var e, t;
      super.disconnectedCallback(),
        (e = this.mutationObserver) == null || e.disconnect(),
        (t = this.resizeObserver) == null || t.disconnect(),
        I(this);
    }
    openHandler() {
      C(this), !this.disabled && this.reposition(!0);
    }
    handleDisabledChange(e) {
      e || (this.open = !1);
    }
    flipPlacementsHandler() {
      this.setFilteredPlacements(), this.reposition(!0);
    }
    handlePropsChange() {
      this.updateItems(), this.updateGroupProps();
    }
    closeCalciteDropdownOnClick(e) {
      this.disabled ||
        !this.open ||
        e.composedPath().includes(this.el) ||
        this.closeCalciteDropdown(!1);
    }
    closeCalciteDropdownOnEvent(e) {
      this.closeCalciteDropdown(), e.stopPropagation();
    }
    closeCalciteDropdownOnOpenEvent(e) {
      e.composedPath().includes(this.el) || (this.open = !1);
    }
    pointerEnterHandler() {
      this.disabled || this.type !== 'hover' || this.toggleDropdown();
    }
    pointerLeaveHandler() {
      this.disabled || this.type !== 'hover' || this.closeCalciteDropdown();
    }
    getTraversableItems() {
      return this.items.filter((e) => !e.disabled && !e.hidden);
    }
    calciteInternalDropdownItemKeyEvent(e) {
      const { keyboardEvent: t } = e.detail,
        i = t.target,
        s = this.getTraversableItems();
      switch (t.key) {
        case 'Tab':
          (this.open = !1), this.updateTabIndexOfItems(i);
          break;
        case 'ArrowDown':
          l(s, i, 'next');
          break;
        case 'ArrowUp':
          l(s, i, 'previous');
          break;
        case 'Home':
          l(s, i, 'first');
          break;
        case 'End':
          l(s, i, 'last');
          break;
      }
      e.stopPropagation();
    }
    handleItemSelect(e) {
      this.updateSelectedItems(),
        e.stopPropagation(),
        this.calciteDropdownSelect.emit(),
        (!this.closeOnSelectDisabled || e.detail.requestedDropdownGroup.selectionMode === 'none') &&
          this.closeCalciteDropdown(),
        e.stopPropagation();
    }
    setFilteredPlacements() {
      const { el: e, flipPlacements: t } = this;
      this.filteredFlipPlacements = t ? P(t, e) : null;
    }
    updateTriggers(e) {
      (this.triggers = e.target.assignedElements({ flatten: !0 })), this.reposition(!0);
    }
    updateItems() {
      (this.items = this.groups
        .map((e) => Array.from(e == null ? void 0 : e.querySelectorAll('calcite-dropdown-item')))
        .reduce((e, t) => [...e, ...t], [])),
        this.updateSelectedItems(),
        this.reposition(!0),
        this.items.forEach((e) => (e.scale = this.scale));
    }
    updateGroups(e) {
      const t = e.target
        .assignedElements({ flatten: !0 })
        .filter((i) => (i == null ? void 0 : i.matches('calcite-dropdown-group')));
      (this.groups = t), this.updateItems(), this.updateGroupProps();
    }
    updateGroupProps() {
      this.groups.forEach((e, t) => {
        (e.scale = this.scale), (e.position = t);
      });
    }
    resizeObserverCallback(e) {
      e.forEach((t) => {
        const { target: i } = t;
        this.hasUpdated &&
          (i === this.referenceEl
            ? this.setDropdownWidth()
            : i === this.scrollerEl && this.setMaxScrollerHeight());
      });
    }
    setDropdownWidth() {
      const { referenceEl: e, scrollerEl: t } = this,
        i = e == null ? void 0 : e.clientWidth;
      t.style.minWidth = `${i}px`;
    }
    setMaxScrollerHeight() {
      const e = this.getMaxScrollerHeight();
      (this.scrollerEl.style.maxBlockSize = e > 0 ? `${e}px` : ''), this.reposition(!0);
    }
    setScrollerAndTransitionEl(e) {
      var t;
      e &&
        ((t = this.resizeObserver) == null || t.observe(e),
        (this.scrollerEl = e),
        (this.transitionEl = e));
    }
    onBeforeOpen() {
      this.calciteDropdownBeforeOpen.emit();
    }
    onOpen() {
      this.calciteDropdownOpen.emit();
    }
    onBeforeClose() {
      this.calciteDropdownBeforeClose.emit();
    }
    onClose() {
      this.calciteDropdownClose.emit(), S(this);
    }
    setReferenceEl(e) {
      var t;
      (this.referenceEl = e), n(this), e && ((t = this.resizeObserver) == null || t.observe(e));
    }
    setFloatingEl(e) {
      (this.floatingEl = e), n(this);
    }
    keyDownHandler(e) {
      if (!e.composedPath().includes(this.referenceEl)) return;
      const { defaultPrevented: t, key: i } = e;
      if (!t) {
        if (i === 'Escape') {
          this.closeCalciteDropdown(), e.preventDefault();
          return;
        }
        if (this.open && e.shiftKey && i === 'Tab') {
          this.closeCalciteDropdown(), e.preventDefault();
          return;
        }
        A(i)
          ? (this.toggleDropdown(), e.preventDefault())
          : (i === 'ArrowDown' || i === 'ArrowUp') &&
            (e.preventDefault(),
            (this.focusLastDropdownItem = i === 'ArrowUp'),
            (this.open = !0),
            this.el.addEventListener('calciteDropdownOpen', this.onOpenEnd));
      }
    }
    updateSelectedItems() {
      this.selectedItems = this.items.filter((e) => e.selected);
    }
    getMaxScrollerHeight() {
      const { maxItems: e, items: t } = this;
      return t.length >= e && e > 0 ? this.getYDistance(this.scrollerEl, t[e - 1]) : 0;
    }
    getYDistance(e, t) {
      const i = e.getBoundingClientRect();
      return t.getBoundingClientRect().bottom - i.top;
    }
    closeCalciteDropdown(e = !0) {
      (this.open = !1), e && p(this.triggers[0]);
    }
    focusOnFirstActiveOrDefaultItem() {
      const e =
        this.getTraversableItems().find((t) => t.selected) ||
        (this.focusLastDropdownItem ? this.items[this.items.length - 1] : this.items[0]);
      (this.focusLastDropdownItem = !1), e && p(e);
    }
    toggleDropdown() {
      (this.open = !this.open),
        this.open && this.el.addEventListener('calciteDropdownOpen', this.onOpenEnd);
    }
    updateTabIndexOfItems(e) {
      this.items.forEach((t) => {
        t.tabIndex = e !== t ? -1 : 0;
      });
    }
    render() {
      const { open: e, guid: t } = this;
      return $({
        disabled: this.disabled,
        children: z`<div class="calcite-trigger-container" .id=${`${t}-menubutton`} @click=${this.toggleDropdown} @keydown=${this.keyDownHandler} ${r(this.setReferenceEl)}><slot aria-controls=${`${t}-menu`} .ariaExpanded=${e} aria-haspopup=menu name=${F.dropdownTrigger} @slotchange=${this.updateTriggers}></slot></div><div .ariaHidden=${!e} class=${m({ [u.wrapper]: !0, [L('width', this.width, this.widthScale)]: !!(this.width || this.widthScale) })} ${r(this.setFloatingEl)}><div aria-labelledby=${`${t}-menubutton`} class=${m({ [u.content]: !0, [f.animation]: !0, [f.animationActive]: e })} .id=${`${t}-menu`} role=menu ${r(this.setScrollerAndTransitionEl)}><slot @slotchange=${this.updateGroups}></slot></div></div>`,
      });
    }
  };
(o.properties = {
  closeOnSelectDisabled: 7,
  disabled: 7,
  flipPlacements: 0,
  maxItems: 11,
  offsetDistance: 11,
  offsetSkidding: 11,
  open: 7,
  overlayPositioning: 3,
  placement: 3,
  scale: 3,
  selectedItems: 0,
  type: 3,
  widthScale: 3,
  width: 3,
}),
  (o.shadowRootOptions = { mode: 'open', delegatesFocus: !0 }),
  (o.styles = B);
let c = o;
T('calcite-dropdown', c);
export { c as Dropdown };
