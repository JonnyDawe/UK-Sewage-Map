import {
  g as D,
  E as O,
  n as L,
  x,
  L as B,
  b as w,
  gG as S,
  a as T,
  c as k,
  m as W,
  gH as M,
  ft as E,
  gI as P,
  s as q,
  i as R,
  gJ as U,
  S as I,
} from './index.lazy-BHTpPf8X.js';
import './index-CRlkHDG6.js';
import { e as j } from './customElement-Bb68R58M.js';
import { n as g } from './index-DN1YOFTt.js';
import './index-DqxZnyqH.js';
import './key-ak3_eHKH.js';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const F = 2,
  $ = (i) => i.reduce((t, e) => t + e, 0) / i.length,
  J = (i) => {
    const t = i.filter((o) => o.slot !== g.menuActions),
      e = t == null ? void 0 : t.length;
    return {
      actionWidth: e ? $(t.map((o) => o.clientWidth || 0)) : 0,
      actionHeight: e ? $(t.map((o) => o.clientHeight || 0)) : 0,
    };
  },
  N = ({ width: i, actionWidth: t, layout: e, height: o, actionHeight: s, groupCount: l }) => {
    const a = e === 'horizontal' ? i : o,
      n = e === 'horizontal' ? t : s;
    return Math.floor((a - l * F) / n);
  },
  K = ({
    layout: i,
    actionCount: t,
    actionWidth: e,
    width: o,
    actionHeight: s,
    height: l,
    groupCount: a,
  }) =>
    Math.max(
      t - N({ width: o, actionWidth: e, layout: i, height: l, actionHeight: s, groupCount: a }),
      0,
    ),
  A = (i) =>
    Array.from(i.querySelectorAll('calcite-action')).filter((t) =>
      t.closest('calcite-action-menu') ? t.slot === j.trigger : !0,
    ),
  Q = ({ actionGroups: i, expanded: t, overflowCount: e }) => {
    let o = e;
    i.reverse().forEach((s) => {
      let l = 0;
      const a = A(s).reverse();
      a.forEach((n) => {
        n.slot === g.menuActions && (n.removeAttribute('slot'), (n.textEnabled = t));
      }),
        o > 0 &&
          a.some(
            (n) => (
              a.filter((c) => !c.slot).length > 1 &&
                a.length > 2 &&
                !n.closest('calcite-action-menu') &&
                ((n.textEnabled = !0), n.setAttribute('slot', g.menuActions), l++, l > 1 && o--),
              o < 1
            ),
          ),
        s.manager.component.requestUpdate();
    });
  },
  z = { chevronsLeft: 'chevrons-left', chevronsRight: 'chevrons-right' };
function V(i, t) {
  var e;
  return i || ((e = t.closest('calcite-shell-panel')) == null ? void 0 : e.position) || 'start';
}
function X({ el: i, expanded: t }) {
  A(i)
    .filter((e) => e.slot !== g.menuActions)
    .forEach((e) => (e.textEnabled = t)),
    i
      .querySelectorAll('calcite-action-group, calcite-action-menu')
      .forEach((e) => (e.expanded = t));
}
const Y = ({ tooltip: i, referenceElement: t, expanded: e, ref: o }) => (
    i && (i.referenceElement = !e && t ? t : null), o && o(t), t
  ),
  Z = ({
    expanded: i,
    expandText: t,
    collapseText: e,
    expandLabel: o,
    collapseLabel: s,
    toggle: l,
    el: a,
    position: n,
    tooltip: c,
    ref: r,
    scale: d,
  }) => {
    const p = D(a) === 'rtl',
      u = i ? e : t,
      b = i ? s : o,
      h = [z.chevronsLeft, z.chevronsRight];
    p && h.reverse();
    const y = V(n, a) === 'end',
      H = y ? h[1] : h[0],
      C = y ? h[0] : h[1];
    return x`<calcite-action .icon=${i ? H : C} id=expand-toggle .label=${b} @click=${l} .scale=${d} .text=${u} .textEnabled=${i} title=${(!i && !c ? u : null) ?? O} ${L((G) => Y({ tooltip: c, referenceElement: G, expanded: i, ref: r }))}></calcite-action>`;
  };
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const _ = { actionGroupEnd: 'action-group--end' },
  m = {
    actionsEnd: 'actions-end',
    bottomActions: 'bottom-actions',
    expandTooltip: 'expand-tooltip',
  },
  tt = R`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}`,
  f = class f extends B {
    constructor() {
      super(),
        (this.mutationObserver = w('mutation', () => this.mutationObserverHandler())),
        (this.resize = S(({ width: t, height: e }) => {
          const {
            el: o,
            expanded: s,
            expandDisabled: l,
            layout: a,
            overflowActionsDisabled: n,
            actionGroups: c,
          } = this;
          if (n || (a === 'vertical' && !e) || (a === 'horizontal' && !t)) return;
          const r = A(o),
            d = l ? r.length : r.length + 1;
          this.updateGroups();
          const p = this.hasActionsEnd || this.hasBottomActions || !l ? c.length + 1 : c.length,
            { actionHeight: u, actionWidth: b } = J(r),
            h = K({
              layout: a,
              actionCount: d,
              actionHeight: u,
              actionWidth: b,
              height: e,
              width: t,
              groupCount: p,
            });
          Q({ actionGroups: c, expanded: s, overflowCount: h });
        }, U.resize)),
        (this.resizeHandler = (t) => {
          const { width: e, height: o } = t.contentRect;
          this.resize({ width: e, height: o });
        }),
        (this.resizeObserver = w('resize', (t) => this.resizeHandlerEntries(t))),
        (this.toggleExpand = () => {
          (this.expanded = !this.expanded), this.calciteActionBarToggle.emit();
        }),
        (this.hasActionsEnd = !1),
        (this.hasBottomActions = !1),
        (this.expandDisabled = !1),
        (this.expanded = !1),
        (this.layout = 'vertical'),
        (this.messages = T()),
        (this.overflowActionsDisabled = !1),
        (this.overlayPositioning = 'absolute'),
        (this.scale = 'm'),
        (this.calciteActionBarToggle = k({ cancelable: !1 })),
        this.listen('calciteActionMenuOpen', this.actionMenuOpenHandler);
    }
    async overflowActions() {
      this.resize({ width: this.el.clientWidth, height: this.el.clientHeight });
    }
    async setFocus() {
      await W(this), M(this.el);
    }
    connectedCallback() {
      var t;
      super.connectedCallback(),
        this.updateGroups(),
        this.overflowActions(),
        (t = this.mutationObserver) == null || t.observe(this.el, { childList: !0, subtree: !0 }),
        this.overflowActionsDisabledHandler(this.overflowActionsDisabled);
    }
    willUpdate(t) {
      t.has('expandDisabled') &&
        (this.hasUpdated || this.expandDisabled !== !1) &&
        this.overflowActions(),
        t.has('expanded') && this.hasUpdated && this.expandedHandler(),
        t.has('layout') && (this.hasUpdated || this.layout !== 'vertical') && this.updateGroups(),
        t.has('overflowActionsDisabled') &&
          (this.hasUpdated || this.overflowActionsDisabled !== !1) &&
          this.overflowActionsDisabledHandler(this.overflowActionsDisabled);
    }
    loaded() {
      this.overflowActions();
    }
    disconnectedCallback() {
      var t, e;
      super.disconnectedCallback(),
        (t = this.mutationObserver) == null || t.disconnect(),
        (e = this.resizeObserver) == null || e.disconnect();
    }
    expandedHandler() {
      const { el: t, expanded: e } = this;
      X({ el: t, expanded: e }), this.overflowActions();
    }
    overflowActionsDisabledHandler(t) {
      var e, o;
      if (t) {
        (e = this.resizeObserver) == null || e.disconnect();
        return;
      }
      (o = this.resizeObserver) == null || o.observe(this.el), this.overflowActions();
    }
    actionMenuOpenHandler(t) {
      var e;
      if (t.target.menuOpen) {
        const o = t.composedPath();
        (e = this.actionGroups) == null ||
          e.forEach((s) => {
            o.includes(s) || (s.menuOpen = !1);
          });
      }
    }
    mutationObserverHandler() {
      this.updateGroups(), this.overflowActions();
    }
    resizeHandlerEntries(t) {
      t.forEach(this.resizeHandler);
    }
    updateGroups() {
      const t = Array.from(this.el.querySelectorAll('calcite-action-group'));
      (this.actionGroups = t), this.setGroupLayout(t);
    }
    setGroupLayout(t) {
      t.forEach((e) => (e.layout = this.layout));
    }
    handleDefaultSlotChange() {
      this.updateGroups();
    }
    handleActionsEndSlotChange(t) {
      this.hasActionsEnd = E(t);
    }
    handleBottomActionsSlotChange(t) {
      this.hasBottomActions = E(t);
    }
    handleTooltipSlotChange(t) {
      const e = P(t).filter((o) => (o == null ? void 0 : o.matches('calcite-tooltip')));
      this.expandTooltip = e[0];
    }
    renderBottomActionGroup() {
      const {
          expanded: t,
          expandDisabled: e,
          el: o,
          position: s,
          toggleExpand: l,
          scale: a,
          layout: n,
          messages: c,
          actionsEndGroupLabel: r,
          overlayPositioning: d,
        } = this,
        p = e
          ? null
          : Z({
              collapseLabel: c.collapseLabel,
              collapseText: c.collapse,
              el: o,
              expandLabel: c.expandLabel,
              expandText: c.expand,
              expanded: t,
              position: s,
              scale: a,
              toggle: l,
              tooltip: this.expandTooltip,
            });
      return x`<calcite-action-group class=${q(_.actionGroupEnd)} .hidden=${this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions)} .label=${r} .layout=${n} .overlayPositioning=${d} .scale=${a}><slot name=${m.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot><slot name=${m.bottomActions} @slotchange=${this.handleBottomActionsSlotChange}></slot><slot name=${m.expandTooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${p}</calcite-action-group>`;
    }
    render() {
      return x`<slot @slotchange=${this.handleDefaultSlotChange}></slot>${this.renderBottomActionGroup()}`;
    }
  };
(f.properties = {
  expandTooltip: 16,
  hasActionsEnd: 16,
  hasBottomActions: 16,
  actionsEndGroupLabel: 1,
  expandDisabled: 7,
  expanded: 7,
  layout: 3,
  messageOverrides: 0,
  overflowActionsDisabled: 7,
  overlayPositioning: 3,
  position: 3,
  scale: 3,
}),
  (f.styles = tt);
let v = f;
I('calcite-action-bar', v);
export { v as ActionBar };
