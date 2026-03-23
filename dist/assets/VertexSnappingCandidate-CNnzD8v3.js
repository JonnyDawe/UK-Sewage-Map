import { g as r } from './SketchOptions-B_OdQfgz.js';
import { n } from './RouteLayerInteraction-DEhpUOu7.js';
import { n as o } from './PointSnappingHint-CLIQKZ-U.js';
class m extends n {
  constructor(t) {
    super({ ...t, constraint: new r(t.targetPoint) });
  }
  get hints() {
    return [new o(this.targetPoint, this.isDraped, this.domain)];
  }
}
export { m as r };
