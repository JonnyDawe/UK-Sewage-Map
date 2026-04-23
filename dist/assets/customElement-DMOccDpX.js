import {
  i as r,
  L as d,
  b as h,
  a as m,
  aa as g,
  s as a,
  n as p,
  x as n,
  S as b,
} from './index.lazy-BFilFZ3v.js';
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */ const l = { scrim: 'scrim', content: 'content' },
  c = { s: 72, l: 480 },
  u = r`:host{position:absolute;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity: 0 }to{--tw-text-opacity: 1 }}.scrim{position:absolute;inset:0;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`,
  s = class s extends d {
    constructor() {
      super(...arguments),
        (this.resizeObserver = h('resize', () => this.handleResize())),
        (this.hasContent = !1),
        (this.loading = !1),
        (this.messages = m());
    }
    connectedCallback() {
      var e;
      super.connectedCallback(), (e = this.resizeObserver) == null || e.observe(this.el);
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(), (e = this.resizeObserver) == null || e.disconnect();
    }
    handleDefaultSlotChange(e) {
      this.hasContent = g(e);
    }
    storeLoaderEl(e) {
      (this.loaderEl = e), this.handleResize();
    }
    getScale(e) {
      return e < c.s ? 's' : e >= c.l ? 'l' : 'm';
    }
    handleResize() {
      const { loaderEl: e, el: t } = this;
      e && (this.loaderScale = this.getScale(Math.min(t.clientHeight, t.clientWidth) ?? 0));
    }
    render() {
      const { hasContent: e, loading: t, messages: o } = this;
      return n`<div class=${a(l.scrim)}>${t ? n`<calcite-loader .label=${o.loading} .scale=${this.loaderScale} ${p(this.storeLoaderEl)}></calcite-loader>` : null}<div class=${a(l.content)} .hidden=${!e}><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div>`;
    }
  };
(s.properties = { hasContent: 16, loaderScale: 16, loading: 7, messageOverrides: 0 }),
  (s.styles = u);
let i = s;
b('calcite-scrim', i);
