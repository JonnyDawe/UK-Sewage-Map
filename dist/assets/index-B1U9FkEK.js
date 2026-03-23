import {
  L as c,
  c as n,
  d as o,
  p as d,
  s as i,
  x as r,
  i as h,
  S as g,
} from './index.lazy-BHTpPf8X.js';
import { t as p } from './resources5-B_fF8ZZV.js';
import './index-DqxZnyqH.js';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const t = { container: 'container', heading: 'heading' },
  f = h`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0;display:flex;flex:1 1 0%;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1));color:var(--calcite-list-color, var(--calcite-color-text-2))}.heading{font-weight:var(--calcite-font-weight-medium)}:host([scale=s]) .container{padding-inline:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size-sm);line-height:var(--calcite-font-line-height-fixed-base);padding-block:var(--calcite-spacing-sm) var(--calcite-spacing-xxs)}:host([scale=s]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-inline:var(--calcite-spacing-md)}:host([scale=m]) .heading{font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-fixed-base);padding-block:var(--calcite-spacing-lg) var(--calcite-spacing-sm)}:host([scale=m]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-inline:var(--calcite-spacing-lg)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-md);line-height:var(--calcite-font-line-height-fixed-lg);padding-block:var(--calcite-spacing-xl) var(--calcite-spacing-sm-plus, .625rem)}:host([scale=l]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-md-plus, .875rem)}.heading{padding:0}:host([hidden]){display:none}[hidden]{display:none}`,
  e = class e extends c {
    constructor() {
      super(...arguments),
        (this.disabled = !1),
        (this.filterHidden = !1),
        (this.scale = 'm'),
        (this.calciteInternalListItemGroupDefaultSlotChange = n({ cancelable: !1 }));
    }
    updated() {
      o(this);
    }
    handleDefaultSlotChange() {
      this.calciteInternalListItemGroupDefaultSlotChange.emit();
    }
    render() {
      const { disabled: s, heading: l } = this;
      return d({
        disabled: s,
        children: r`<div class=${i(t.container)} role=row><div .ariaColSpan=${p} class=${i(t.heading)} role=cell>${l}</div></div><slot @slotchange=${this.handleDefaultSlotChange}></slot>`,
      });
    }
  };
(e.properties = { disabled: 7, filterHidden: 7, heading: 3, scale: 3 }), (e.styles = f);
let a = e;
g('calcite-list-item-group', a);
export { a as ListItemGroup };
