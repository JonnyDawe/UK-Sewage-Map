import {
  i as E,
  L as F,
  b as B,
  gY as P,
  a as T,
  c as $,
  m as M,
  gH as j,
  d as I,
  ft as s,
  gI as A,
  s as i,
  x as o,
  e as d,
  E as y,
  n as k,
  p as L,
  S as O,
} from './index.lazy-BHTpPf8X.js';
import { h as N, e as U } from './customElement-Bb68R58M.js';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const n = {
    actionBarContainer: 'action-bar-container',
    container: 'container',
    contentBottom: 'content-bottom',
    contentTop: 'content-top',
    header: 'header',
    headerContainer: 'header-container',
    headerContainerBorderEnd: 'header-container--border-end',
    heading: 'heading',
    description: 'description',
    headerContent: 'header-content',
    headerActions: 'header-actions',
    headerActionsEnd: 'header-actions--end',
    headerActionsStart: 'header-actions--start',
    contentWrapper: 'content-wrapper',
    fabContainer: 'fab-container',
    footer: 'footer',
    footerContent: 'footer-content',
    footerActions: 'footer-actions',
    footerStart: 'footer-start',
    footerEnd: 'footer-end',
    headerSlottedContent: 'header-slotted-content',
  },
  H = { close: 'close', collapse: 'collapse' },
  u = { close: 'x', menu: 'ellipsis', expand: 'chevron-down', collapse: 'chevron-up' },
  r = {
    actionBar: 'action-bar',
    alerts: 'alerts',
    contentBottom: 'content-bottom',
    contentTop: 'content-top',
    headerActionsStart: 'header-actions-start',
    headerActionsEnd: 'header-actions-end',
    headerMenuActions: 'header-menu-actions',
    headerContent: 'header-content',
    fab: 'fab',
    footer: 'footer',
    footerEnd: 'footer-end',
    footerStart: 'footer-start',
    footerActions: 'footer-actions',
  };
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const D = E`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height: calc(var(--calcite-icon-size) * 3);border-radius:var(--calcite-panel-corner-radius, var(--calcite-corner-radius-sharp))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0;padding:0;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:.5rem}:host([scale=s]){--calcite-internal-panel-default-space: var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-sm-plus)}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1)}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-panel-default-space: var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-md-plus)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0)}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-panel-default-space: var(--calcite-spacing-lg);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-xl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1)}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;padding:var(--calcite-internal-panel-default-space);border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));background-color:var(--calcite-panel-background-color, var(--calcite-color-foreground-1))}.container{position:relative;margin:0;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;overflow:hidden;background-color:var(--calcite-color-background);padding:0;color:var(--calcite-color-text-2);transition:max-block-size var(--calcite-animation-timing),inline-size var(--calcite-animation-timing);box-sizing:border-box;font-size:var(--calcite-font-size--1)}.container *{box-sizing:border-box}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-panel-header-background-color, var(--calcite-color-foreground-1));border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-panel-header-border-block-end, var(--calcite-color-border-3)))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3))}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:.75rem;padding-block:.875rem;margin-inline-end:auto;justify-content:center}.header-content .heading,.header-content .description{display:block;flex:none;overflow-wrap:break-word;padding:0;line-height:var(--calcite-font-line-height-relative-snug)}.header-content .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-panel-heading-text-color, var(--calcite-color-text-1))}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-panel-description-text-color, var(--calcite-color-text-2))}#close,#collapse,.back-button,calcite-action-menu{--calcite-action-background-color: var(--calcite-panel-header-action-background-color);--calcite-action-background-color-hover: var(--calcite-panel-header-action-background-color-hover);--calcite-action-background-color-press: var(--calcite-panel-header-action-background-color-press);--calcite-action-text-color: var(--calcite-panel-header-action-text-color);--calcite-action-text-color-pressed: var(--calcite-panel-header-action-text-color-pressed)}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-panel-border-color, var(--calcite-color-border-3))}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;color:var(--calcite-color-text-2);outline-color:transparent;padding:var(--calcite-panel-space, var(--calcite-panel-content-space, 0));background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.header-content{flex:1 1 auto;justify-content:center;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-space)}.header-content.header-slotted-content{padding:var(--calcite-panel-header-content-space, var(--calcite-internal-panel-header-vertical-padding) var(--calcite-internal-panel-default-space))}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));padding:var(--calcite-panel-footer-space, var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-space)));background-color:var(--calcite-panel-footer-background-color, var(--calcite-color-foreground-1))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-space)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-space)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-space)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:.5rem;inset-inline:0;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`,
  v = class v extends F {
    constructor() {
      super(),
        (this.resizeObserver = B('resize', () => this.resizeHandler())),
        (this.hasActionBar = !1),
        (this.hasContentBottom = !1),
        (this.hasContentTop = !1),
        (this.hasEndActions = !1),
        (this.hasFab = !1),
        (this.hasFooterActions = !1),
        (this.hasFooterContent = !1),
        (this.hasFooterEndContent = !1),
        (this.hasFooterStartContent = !1),
        (this.hasHeaderContent = !1),
        (this.hasMenuItems = !1),
        (this.hasStartActions = !1),
        (this.isClosed = !1),
        (this.showHeaderContent = !1),
        (this.closable = !1),
        (this.closed = !1),
        (this.collapseDirection = 'down'),
        (this.collapsed = !1),
        (this.collapsible = !1),
        (this.disabled = !1),
        (this.loading = !1),
        (this.menuOpen = !1),
        (this.menuPlacement = P),
        (this.messages = T()),
        (this.overlayPositioning = 'absolute'),
        (this.scale = 'm'),
        (this.calcitePanelClose = $({ cancelable: !1 })),
        (this.calcitePanelScroll = $({ cancelable: !1 })),
        (this.calcitePanelToggle = $({ cancelable: !1 })),
        this.listen('keydown', this.panelKeyDownHandler);
    }
    async scrollContentTo(e) {
      var a;
      (a = this.panelScrollEl) == null || a.scrollTo(e);
    }
    async setFocus() {
      await M(this), j(this.containerEl);
    }
    async load() {
      this.isClosed = this.closed;
    }
    willUpdate(e) {
      e.has('closed') && this.hasUpdated && (this.closed ? this.close() : this.open());
    }
    updated() {
      I(this);
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(), (e = this.resizeObserver) == null || e.disconnect();
    }
    resizeHandler() {
      const { panelScrollEl: e } = this;
      !e ||
        typeof e.scrollHeight != 'number' ||
        typeof e.offsetHeight != 'number' ||
        (e.scrollHeight > e.offsetHeight
          ? e.setAttribute('tabindex', '0')
          : e.removeAttribute('tabindex'));
    }
    setContainerRef(e) {
      this.containerEl = e;
    }
    panelKeyDownHandler(e) {
      this.closable &&
        e.key === 'Escape' &&
        !e.defaultPrevented &&
        (this.handleUserClose(), e.preventDefault());
    }
    handleUserClose() {
      (this.closed = !0), this.calcitePanelClose.emit();
    }
    open() {
      this.isClosed = !1;
    }
    async close() {
      const e = this.beforeClose ?? (() => Promise.resolve());
      try {
        await e();
      } catch {
        requestAnimationFrame(() => {
          this.closed = !1;
        });
        return;
      }
      this.isClosed = !0;
    }
    collapse() {
      (this.collapsed = !this.collapsed), this.calcitePanelToggle.emit();
    }
    panelScrollHandler() {
      this.calcitePanelScroll.emit();
    }
    handleHeaderActionsStartSlotChange(e) {
      this.hasStartActions = s(e);
    }
    handleHeaderActionsEndSlotChange(e) {
      this.hasEndActions = s(e);
    }
    handleHeaderMenuActionsSlotChange(e) {
      this.hasMenuItems = s(e);
    }
    handleActionBarSlotChange(e) {
      const a = A(e).filter((t) => (t == null ? void 0 : t.matches('calcite-action-bar')));
      a.forEach((t) => (t.layout = 'horizontal')), (this.hasActionBar = !!a.length);
    }
    handleHeaderContentSlotChange(e) {
      this.hasHeaderContent = s(e);
    }
    handleFabSlotChange(e) {
      this.hasFab = s(e);
    }
    handleFooterActionsSlotChange(e) {
      this.hasFooterActions = s(e);
    }
    handleFooterEndSlotChange(e) {
      this.hasFooterEndContent = s(e);
    }
    handleFooterStartSlotChange(e) {
      this.hasFooterStartContent = s(e);
    }
    handleFooterSlotChange(e) {
      this.hasFooterContent = s(e);
    }
    contentBottomSlotChangeHandler(e) {
      this.hasContentBottom = s(e);
    }
    contentTopSlotChangeHandler(e) {
      this.hasContentTop = s(e);
    }
    setPanelScrollEl(e) {
      var a, t;
      (this.panelScrollEl = e),
        (a = this.resizeObserver) == null || a.disconnect(),
        e && ((t = this.resizeObserver) == null || t.observe(e), this.resizeHandler());
    }
    handleAlertsSlotChange(e) {
      var a;
      (a = A(e)) == null ||
        a.map((t) => {
          t.nodeName === 'CALCITE-ALERT' && (t.embedded = !0);
        });
    }
    renderHeaderContent() {
      const { heading: e, headingLevel: a, description: t, hasHeaderContent: l } = this,
        c = e ? N({ class: n.heading, level: a, children: e }) : null,
        h = t ? o`<span class=${i(n.description)}>${t}</span>` : null;
      return !l && (c || h)
        ? d('header-content', o`<div class=${i(n.headerContent)}>${c}${h}</div>`)
        : null;
    }
    renderActionBar() {
      return o`<div class=${i(n.actionBarContainer)} .hidden=${!this.hasActionBar}><slot name=${r.actionBar} @slotchange=${this.handleActionBarSlotChange}></slot></div>`;
    }
    renderHeaderSlottedContent() {
      return d(
        'slotted-header-content',
        o`<div class=${i({ [n.headerContent]: !0, [n.headerSlottedContent]: !0 })} .hidden=${!this.hasHeaderContent}><slot name=${r.headerContent} @slotchange=${this.handleHeaderContentSlotChange}></slot></div>`,
      );
    }
    renderHeaderStartActions() {
      const { hasStartActions: e } = this;
      return d(
        'header-actions-start',
        o`<div class=${i({ [n.headerActionsStart]: !0, [n.headerActions]: !0 })} .hidden=${!e}><slot name=${r.headerActionsStart} @slotchange=${this.handleHeaderActionsStartSlotChange}></slot></div>`,
      );
    }
    renderHeaderActionsEnd() {
      const {
          hasEndActions: e,
          messages: a,
          closable: t,
          collapsed: l,
          collapseDirection: c,
          collapsible: h,
          hasMenuItems: g,
        } = this,
        { collapse: p, expand: f, close: b } = a,
        m = [u.expand, u.collapse];
      c === 'up' && m.reverse();
      const x = h
          ? o`<calcite-action .ariaExpanded=${!l} .ariaLabel=${p} .icon=${l ? m[0] : m[1]} id=${H.collapse} @click=${this.collapse} .scale=${this.scale} .text=${p} title=${(l ? f : p) ?? y}></calcite-action>`
          : null,
        S = t
          ? o`<calcite-action .ariaLabel=${b} .icon=${u.close} id=${H.close} @click=${this.handleUserClose} .scale=${this.scale} .text=${b} title=${b ?? y}></calcite-action>`
          : null,
        z = o`<slot name=${r.headerActionsEnd} @slotchange=${this.handleHeaderActionsEndSlotChange}></slot>`,
        w = e || x || S || g;
      return d(
        'header-actions-end',
        o`<div class=${i({ [n.headerActionsEnd]: !0, [n.headerActions]: !0 })} .hidden=${!w}>${z}${this.renderMenu()}${x}${S}</div>`,
      );
    }
    renderMenu() {
      const {
        hasMenuItems: e,
        messages: a,
        menuOpen: t,
        menuFlipPlacements: l,
        menuPlacement: c,
      } = this;
      return d(
        'menu',
        o`<calcite-action-menu .flipPlacements=${l ?? ['top', 'bottom']} .hidden=${!e} .label=${a.options} .open=${t} .overlayPositioning=${this.overlayPositioning} .placement=${c}><calcite-action .icon=${u.menu} .scale=${this.scale} slot=${U.trigger} .text=${a.options}></calcite-action><slot name=${r.headerMenuActions} @slotchange=${this.handleHeaderMenuActionsSlotChange}></slot></calcite-action-menu>`,
      );
    }
    renderHeaderNode() {
      const {
          hasHeaderContent: e,
          hasStartActions: a,
          hasEndActions: t,
          closable: l,
          collapsible: c,
          hasMenuItems: h,
          hasActionBar: g,
        } = this,
        p = this.renderHeaderContent(),
        f = e || !!p || a || t || c || l || h;
      return (
        (this.showHeaderContent = f),
        o`<header class=${i(n.header)} .hidden=${!(f || g)}><div class=${i({ [n.headerContainer]: !0, [n.headerContainerBorderEnd]: g })} .hidden=${!f}>${this.renderHeaderStartActions()}${this.renderHeaderSlottedContent()}${p}${this.renderHeaderActionsEnd()}</div>${this.renderActionBar()}${this.renderContentTop()}</header>`
      );
    }
    renderFooterNode() {
      const {
          hasFooterEndContent: e,
          hasFooterStartContent: a,
          hasFooterContent: t,
          hasFooterActions: l,
        } = this,
        c = a || e || t || l;
      return o`<footer class=${i(n.footer)} .hidden=${!c}><div class=${i(n.footerContent)} .hidden=${!t}><slot name=${r.footer} @slotchange=${this.handleFooterSlotChange}></slot></div><div class=${i(n.footerStart)} .hidden=${t || !a}><slot name=${r.footerStart} @slotchange=${this.handleFooterStartSlotChange}></slot></div><div class=${i(n.footerEnd)} .hidden=${t || !e}><slot name=${r.footerEnd} @slotchange=${this.handleFooterEndSlotChange}></slot></div><div class=${i(n.footerActions)} .hidden=${t || !l}>${d('footer-actions-slot', o`<slot name=${r.footerActions} @slotchange=${this.handleFooterActionsSlotChange}></slot>`)}</div></footer>`;
    }
    renderContent() {
      return o`<div class=${i(n.contentWrapper)} .hidden=${this.collapsible && this.collapsed} @scroll=${this.panelScrollHandler} ${k(this.setPanelScrollEl)}><slot></slot>${this.renderFab()}</div>`;
    }
    renderContentBottom() {
      return o`<div class=${i(n.contentBottom)} .hidden=${!this.hasContentBottom}><slot name=${r.contentBottom} @slotchange=${this.contentBottomSlotChangeHandler}></slot></div>`;
    }
    renderContentTop() {
      return o`<div class=${i(n.contentTop)} .hidden=${!this.hasContentTop}><slot name=${r.contentTop} @slotchange=${this.contentTopSlotChangeHandler}></slot></div>`;
    }
    renderFab() {
      return o`<div class=${i(n.fabContainer)} .hidden=${!this.hasFab}><slot name=${r.fab} @slotchange=${this.handleFabSlotChange}></slot></div>`;
    }
    render() {
      const { disabled: e, loading: a, isClosed: t } = this,
        l = o`<article .ariaBusy=${a} class=${i(n.container)} .hidden=${t} ${k(this.setContainerRef)}>${this.renderHeaderNode()}${this.renderContent()}${this.renderContentBottom()}${this.renderFooterNode()}${d('alerts', o`<slot name=${r.alerts} @slotchange=${this.handleAlertsSlotChange}></slot>`)}</article>`;
      return L({
        disabled: e,
        children: o`${a ? o`<calcite-scrim .loading=${a}></calcite-scrim>` : null}${l}`,
      });
    }
  };
(v.properties = {
  hasActionBar: 16,
  hasContentBottom: 16,
  hasContentTop: 16,
  hasEndActions: 16,
  hasFab: 16,
  hasFooterActions: 16,
  hasFooterContent: 16,
  hasFooterEndContent: 16,
  hasFooterStartContent: 16,
  hasHeaderContent: 16,
  hasMenuItems: 16,
  hasStartActions: 16,
  isClosed: 16,
  showHeaderContent: 16,
  beforeClose: 0,
  closable: 7,
  closed: 7,
  collapseDirection: 1,
  collapsed: 7,
  collapsible: 7,
  description: 1,
  disabled: 7,
  heading: 1,
  headingLevel: 11,
  loading: 7,
  menuFlipPlacements: 0,
  menuOpen: 7,
  menuPlacement: 3,
  messageOverrides: 0,
  overlayPositioning: 3,
  scale: 3,
}),
  (v.styles = D);
let C = v;
O('calcite-panel', C);
export { r as n };
