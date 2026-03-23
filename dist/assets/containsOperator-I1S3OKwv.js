import { X as r } from './ProjectionTransformation-DO3Gv-47.js';
import { fromGeometry as m, fromGeometryToGXGeometry as n } from './jsonConverter-kXdRGJAn.js';
import './Transformation2D-Bb72B6CZ.js';
import './SimpleGeometryCursor-B92kdZ15.js';
import './index.lazy-BHTpPf8X.js';
import './index-DqxZnyqH.js';
const i = new r();
function G(t, o) {
  const e = m(t);
  return i.execute(e.getGeometry(), n(o), e.getSpatialReference(), null);
}
export { G as execute };
