import { t as r } from './OperatorOverlaps-HF4Qao06.js';
import { fromGeometry as m, fromGeometryToGXGeometry as i } from './jsonConverter-kXdRGJAn.js';
import './ProjectionTransformation-DO3Gv-47.js';
import './Transformation2D-Bb72B6CZ.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
const n = new r();
function y(t, o) {
  const e = m(t);
  return n.execute(e.getGeometry(), i(o), e.getSpatialReference(), null);
}
export { y as execute };
