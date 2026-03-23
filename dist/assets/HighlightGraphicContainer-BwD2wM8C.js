import { er as s, et as a, es as i, A as h, R as n } from './index.lazy-BHTpPf8X.js';
import { i as l } from './AGraphicContainer-C_lgpK-h.js';
let t = class extends l {
  get hasHighlight() {
    return this.children.some((e) => e.hasData);
  }
  renderChildren(e) {
    this.attributeView.update(),
      e.drawPhase === s.HIGHLIGHT &&
        this.children.some((r) => r.hasData) &&
        (super.renderChildren(e),
        e.context.setColorMask(!0, !0, !0, !0),
        a(e, !1, (r) => {
          this._renderChildren(r, i.Highlight);
        }));
  }
};
t = h([n('esri.views.2d.layers.graphics.HighlightGraphicContainer')], t);
const g = t;
export { g as h };
