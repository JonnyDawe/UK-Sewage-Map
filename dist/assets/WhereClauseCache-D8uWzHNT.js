import { cO as r } from './index.lazy-BFilFZ3v.js';
import { D as a } from './WhereClause-CwCHdxIr.js';
import './index-DShQM7Xx.js';
class o {
  constructor(e, t) {
    (this._cache = new r(e)), (this._invalidCache = new r(t));
  }
  get(e, t) {
    const i = `${t == null ? void 0 : t.uid}:${e}`,
      n = this._cache.get(i);
    if (n) return n;
    if (this._invalidCache.get(i) != null) return null;
    try {
      const c = a.create(e, { fieldsIndex: t });
      return this._cache.put(i, c), c;
    } catch (c) {
      return this._invalidCache.put(i, c), null;
    }
  }
  getError(e, t) {
    const i = `${t == null ? void 0 : t.uid}:${e}`;
    return this._invalidCache.get(i) ?? null;
  }
}
export { o as WhereClauseCache };
