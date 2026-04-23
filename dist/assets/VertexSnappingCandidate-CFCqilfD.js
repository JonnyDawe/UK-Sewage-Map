import { g as r } from './SketchOptions-C5ta2Z9F.js';
import { n } from './RouteLayerInteraction-KMUBv1U3.js';
import { n as o } from './PointSnappingHint-CiCc_ndE.js';
class m extends n {
  constructor(t) {
    super({ ...t, constraint: new r(t.targetPoint) });
  }
  get hints() {
    return [new o(this.targetPoint, this.isDraped, this.domain)];
  }
}
export { m as r };
