import {
  L as h,
  a as g,
  m as x,
  gH as b,
  ft as $,
  x as s,
  s as f,
  i as y,
  S as v,
} from './index.lazy-BHTpPf8X.js';
import './index-CRlkHDG6.js';
import { e as l } from './customElement-Bb68R58M.js';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const c = { menuActions: 'menu-actions', menuTooltip: 'menu-tooltip' },
  O = { menu: 'ellipsis' },
  z = { container: 'container' };
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const A = y`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns: 1}:host([columns="2"]){--calcite-internal-action-group-columns: 2}:host([columns="3"]){--calcite-internal-action-group-columns: 3}:host([columns="4"]){--calcite-internal-action-group-columns: 4}:host([columns="5"]){--calcite-internal-action-group-columns: 5}:host([columns="6"]){--calcite-internal-action-group-columns: 6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)),auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-inline-end:var(--calcite-size-px)}:host([hidden]){display:none}[hidden]{display:none}`,
  e = class e extends h {
    constructor() {
      super(...arguments),
        (this.hasMenuActions = !1),
        (this.expanded = !1),
        (this.layout = 'vertical'),
        (this.menuOpen = !1),
        (this.messages = g()),
        (this.overlayPositioning = 'absolute'),
        (this.scale = 'm');
    }
    async setFocus() {
      await x(this), b(this.el);
    }
    willUpdate(t) {
      t.has('expanded') && (this.hasUpdated || this.expanded !== !1) && (this.menuOpen = !1);
    }
    setMenuOpen(t) {
      this.menuOpen = !!t.currentTarget.open;
    }
    handleMenuActionsSlotChange(t) {
      this.hasMenuActions = $(t);
    }
    renderMenu() {
      const {
        expanded: t,
        menuOpen: r,
        scale: n,
        layout: a,
        messages: i,
        overlayPositioning: u,
        hasMenuActions: p,
        menuFlipPlacements: d,
        menuPlacement: m,
      } = this;
      return s`<calcite-action-menu .expanded=${t} .flipPlacements=${d ?? (a === 'horizontal' ? ['top', 'bottom'] : ['left', 'right'])} .hidden=${!p} .label=${i.more} @calciteActionMenuOpen=${this.setMenuOpen} .open=${r} .overlayPositioning=${u} .placement=${m ?? (a === 'horizontal' ? 'bottom-start' : 'leading-start')} .scale=${n}><calcite-action .icon=${O.menu} .scale=${n} slot=${l.trigger} .text=${i.more} .textEnabled=${t}></calcite-action><slot name=${c.menuActions} @slotchange=${this.handleMenuActionsSlotChange}></slot><slot name=${c.menuTooltip} slot=${l.tooltip}></slot></calcite-action-menu>`;
    }
    render() {
      return s`<div .ariaLabel=${this.label} class=${f(z.container)} role=group><slot></slot>${this.renderMenu()}</div>`;
    }
  };
(e.properties = {
  hasMenuActions: 16,
  columns: 11,
  expanded: 7,
  label: 1,
  layout: 3,
  menuFlipPlacements: 0,
  menuOpen: 7,
  menuPlacement: 3,
  messageOverrides: 0,
  overlayPositioning: 3,
  scale: 3,
}),
  (e.shadowRootOptions = { mode: 'open', delegatesFocus: !0 }),
  (e.styles = A);
let o = e;
v('calcite-action-group', o);
const S = Object.freeze(
  Object.defineProperty({ __proto__: null, ActionGroup: o }, Symbol.toStringTag, {
    value: 'Module',
  }),
);
export { S as i, c as n };
