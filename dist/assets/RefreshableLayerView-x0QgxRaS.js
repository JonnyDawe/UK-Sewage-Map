import { A as i, R as t, f3 as h, bL as l, a8 as d } from './index.lazy-BHTpPf8X.js';
const f = (s) => {
  let e = class extends s {
    initialize() {
      this.addHandles(
        h(
          () => this.layer,
          'refresh',
          (r) => {
            this.doRefresh(r.dataChanged).catch((a) => {
              l(a) || d.getLogger(this).error(a);
            });
          },
        ),
        'RefreshableLayerView',
      );
    }
  };
  return (e = i([t('esri.views.layers.RefreshableLayerView')], e)), e;
};
export { f as i };
