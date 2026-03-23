import { C as $i } from './BidiEngine-QXap_35O.js';
import {
  y as Ai,
  bv as Me,
  rb as we,
  bw as R,
  bx as F,
  by as ye,
  du as N,
  bu as Xe,
  ap as ut,
  tC as ct,
  tD as Pe,
  tE as ft,
  W as je,
  tF as C,
  p4 as Ei,
  it as Ri,
  tG as E,
  tH as Pt,
  tI as ke,
  tJ as ie,
  tK as Z,
  sK as at,
  tL as Le,
  m$ as Os,
  tM as xt,
  tN as Gi,
  tO as Oi,
  b5 as _t,
  tP as Fi,
  tQ as Ni,
  tR as re,
  tS as Di,
  a8 as Ze,
  cW as H,
  tT as Xi,
  or as Kt,
  oq as Fs,
  rD as He,
  tU as Hi,
  ot as mt,
  kf as ne,
  n_ as hs,
  os as $e,
  rk as ls,
  gq as j,
  bQ as Bi,
  rf as Yi,
  re as Vi,
  cH as Ke,
  tV as Ui,
  sU as Wi,
  sZ as S,
  iE as Y,
  rg as Ns,
  rh as Ds,
  dv as Qe,
  bB as qi,
  tW as pt,
  cI as Ji,
  tX as It,
  r0 as cs,
  tY as bt,
  nO as ji,
  nP as Zi,
  tZ as Ki,
  gs as V,
  gr as st,
  ln as Qi,
  n3 as tr,
  nS as er,
  ts as sr,
  t3 as Xs,
  t4 as Hs,
  t6 as ir,
  t5 as rr,
  t1 as Ae,
  t2 as us,
  t0 as fs,
  t_ as nr,
  t$ as ar,
  ab as or,
  u0 as ae,
  u1 as hr,
  u2 as lr,
  u3 as _s,
  u4 as cr,
  u5 as ur,
  u6 as fr,
  u7 as _r,
  u8 as pr,
  ky as mr,
  u9 as dr,
  t9 as gr,
  ua as yr,
  ub as Pr,
  bH as xr,
  g3 as br,
  c0 as Mr,
  cv as Sr,
  A as Ee,
  B as ps,
  R as Cr,
} from './index.lazy-BHTpPf8X.js';
import { i as ms, g as wr, r as oe } from './GeometryUtils-CELdmOaY.js';
import { p as he } from './rasterizingUtils-7XTZfmJg.js';
import { t as kr } from './Rect-CUzevAry.js';
import { a as zt } from './dataViewUtils-5KhH7jWv.js';
const ts = 'arial-unicode-ms',
  ds = 'woff2',
  gs = new Map(),
  Bs = new Set();
let vr = class {
  constructor(t, e) {
    (this.fontFace = t), (this.promise = e);
  }
};
async function ya(l) {
  const t = Tr(l),
    e = zr(l),
    s = gs.get(t);
  if (s) return s.promise;
  const i = new FontFace(l.family, `url('${Ai.fontsUrl}/woff2/${e}.${ds}') format('${ds}')`, {
      style: l.style,
      weight: l.weight,
    }),
    a = document.fonts;
  if (a.has(i) && i.status === 'loading') return i.loaded;
  const n = i.load().then(() => (a.add(i), i));
  return gs.set(t, new vr(i, n)), Bs.add(i), n;
}
function Pa(l) {
  return Bs.has(l);
}
function Ir(l) {
  if (!l) return ts;
  const t = l.toLowerCase().split(' ').join('-');
  switch (t) {
    case 'serif':
      return 'noto-serif';
    case 'sans-serif':
      return 'arial-unicode-ms';
    case 'monospace':
      return 'ubuntu-mono';
    case 'fantasy':
      return 'cabin-sketch';
    case 'cursive':
      return 'redressed';
    default:
      return t;
  }
}
function zr(l) {
  const t = Ys(l) + Vs(l);
  return Ir(l.family) + (t.length > 0 ? t : '-regular');
}
function Tr(l) {
  const t = Ys(l) + Vs(l);
  return (l.family || ts) + (t.length > 0 ? t : '-regular');
}
function Ys(l) {
  if (!l.weight) return '';
  switch (l.weight.toLowerCase()) {
    case 'bold':
    case 'bolder':
      return '-bold';
  }
  return '';
}
function Vs(l) {
  if (!l.style) return '';
  switch (l.style.toLowerCase()) {
    case 'italic':
    case 'oblique':
      return '-italic';
  }
  return '';
}
var ys;
(function (l) {
  (l.Local = 'Local'), (l.Global = 'Global');
})(ys || (ys = {}));
let dt = class {
    generateSource(t) {
      const e = [];
      for (let i = 1; i < this.length; i++)
        e.push(`vec4 atom${i} = texture(${t.animationTexture}, (pointer + 0.5) / size);`),
          e.push('pointer.x += 1.0;');
      for (let i = 0; i < this.ins; i++)
        e.push('top--;'), e.push(`vec4 in${this.ins - i - 1} = stack[top];`);
      for (let i = 0; i < this.outs; i++) e.push(`vec4 out${i};`);
      const { microcode: s } = this;
      for (const i of s) e.push(i);
      for (let i = 0; i < this.outs; i++)
        e.push(`stack[top] = out${i};`),
          e.push('top++;'),
          e.push(`if (top >= ${Be}) { top = ${Be - 1}; }`);
      return e;
    }
  },
  gt = 128,
  Lr = class extends dt {
    constructor() {
      super(...arguments),
        (this.opcode = ++gt),
        (this.length = 1),
        (this.ins = 0),
        (this.outs = 0),
        (this.microcode = ['break;']);
    }
    encode() {
      return [[this.opcode, 0, 0, 0]];
    }
  },
  $r = class extends dt {
    constructor() {
      super(...arguments),
        (this.opcode = ++gt),
        (this.length = 1),
        (this.ins = 0),
        (this.outs = 1),
        (this.microcode = ['out0 = vec4(atom0.y, atom0.y, atom0.y, atom0.y);']);
    }
    encode(t) {
      return [[this.opcode, t, 0, 0]];
    }
  },
  Ar = class extends dt {
    constructor() {
      super(...arguments),
        (this.opcode = ++gt),
        (this.length = 1),
        (this.ins = 0),
        (this.outs = 1),
        (this.microcode = ['out0 = vec4(atom0.yzw, 0.0);']);
    }
    encode(t) {
      return [[this.opcode, t[0] || 0, t[1] || 0, t[2] || 0]];
    }
  },
  Er = class extends dt {
    constructor() {
      super(...arguments),
        (this.opcode = ++gt),
        (this.length = 2),
        (this.ins = 0),
        (this.outs = 1),
        (this.microcode = ['out0 = atom1;']);
    }
    encode(t) {
      return [[this.opcode, 0, 0, 0], t];
    }
  };
function Qt(l) {
  return [
    `float duration = clamp(${l.duration}, 0.05, 3600.0);`,
    `float startTimeOffset = ${l.startTimeOffset};`,
    `float repeatDelay = ${l.repeatDelay};`,
    `float timeOriginSelector = ${l.timeOriginSelector};`,
    `float repeatType = ${l.repeatType};`,
    `float easing = ${l.easing};`,
    `float playAnimation = ${l.playAnimation} * (1.0 - step(0.0, -${l.duration}));`,
    `float reverseAnimation = ${l.reverseAnimation};`,
    'float time = globalTime - (timeOriginSelector == 1.0 ? localTimeOrigin : 0.0);',
    'time *= playAnimation;',
    'time *= 1.0 - reverseAnimation * 2.0;',
    'float period = duration + repeatDelay;',
    'time += reverseAnimation == 1.0 ? (period - startTimeOffset - 0.001) : startTimeOffset + 0.001;',
    'float omega = time / period;',
    'float oi = floor(omega);',
    'omega = repeatType == 1.0 || repeatType == 3.0 ? omega - oi : omega;',
    'float of = omega * period;',
    'of = (clamp(of, reverseAnimation * repeatDelay, period - (1.0 - reverseAnimation) * repeatDelay) - reverseAnimation * repeatDelay) / duration;',
    'of = easing == 2.0 ? pow(of, 3.0) : of;',
    'of = easing == 3.0 ? 1.0 - pow(1.0 - of, 3.0) : of;',
    'of = easing == 4.0 ? of < 0.5 ? 4.0 * pow(of, 3.0) : 1.0 - pow(-2.0 * of + 2.0, 3.0) / 2.0 : of;',
    'bool oscillate = repeatType == 3.0 && mod(oi, 2.0) == 1.0;',
    `${l.out} = oscillate ? 1.0 - of : of;`,
  ];
}
const Rr = { Linear: 1, EaseIn: 2, EaseOut: 3, EaseInOut: 4 },
  Gr = { Loop: 1, None: 2, Oscillate: 3 },
  Or = { Local: 1, Global: 2 };
function te(l) {
  const t = Rr[l.easing],
    e = Gr[l.repeatType],
    s = Or[l.timeOriginSelector];
  return [
    [l.duration, l.startTimeOffset, l.repeatDelay, s],
    [e, t, l.playAnimation, l.reverseAnimation],
  ];
}
let Fr = class extends dt {
    constructor() {
      super(...arguments),
        (this.opcode = ++gt),
        (this.length = 10),
        (this.ins = 1),
        (this.outs = 1),
        (this.microcode = [
          'vec2 fromTranslation = atom1.xy;',
          'vec2 toTranslation = atom1.zw;',
          'float fromRotation = atom2.x;',
          'float toRotation = atom2.y;',
          'float fromScale = atom2.z;',
          'float toScale = atom2.w;',
          'bool relativeTranslation = atom9.x == 1.0;',
          'bool absoluteScale = atom9.y == 1.0;',
          'vec2 translationMultiplier = relativeTranslation ? pixelDimensions : vec2(1.0, 1.0);',
          'float scaleDivisor = absoluteScale ? pixelDimensions.y : 1.0;',
          'float fTranslation;',
          '{',
          ...Qt({
            duration: 'atom3.x',
            startTimeOffset: 'atom3.y',
            repeatDelay: 'atom3.z',
            timeOriginSelector: 'atom3.w',
            repeatType: 'atom4.x',
            easing: 'atom4.y',
            playAnimation: 'atom4.z',
            reverseAnimation: 'atom4.w',
            out: 'fTranslation',
          }),
          '}',
          'float fRotation;',
          '{',
          ...Qt({
            duration: 'atom5.x',
            startTimeOffset: 'atom5.y',
            repeatDelay: 'atom5.z',
            timeOriginSelector: 'atom5.w',
            repeatType: 'atom6.x',
            easing: 'atom6.y',
            playAnimation: 'atom6.z',
            reverseAnimation: 'atom6.w',
            out: 'fRotation',
          }),
          '}',
          'float fScale;',
          '{',
          ...Qt({
            duration: 'atom7.x',
            startTimeOffset: 'atom7.y',
            repeatDelay: 'atom7.z',
            timeOriginSelector: 'atom7.w',
            repeatType: 'atom8.x',
            easing: 'atom8.y',
            playAnimation: 'atom8.z',
            reverseAnimation: 'atom8.w',
            out: 'fScale',
          }),
          '}',
          'vec2 aTranslation = mix(fromTranslation, toTranslation, fTranslation);',
          'float aRotation = mix(fromRotation, toRotation, fRotation);',
          'float aScale = mix(fromScale, toScale, fScale);',
          'vec2 pTranslation = in0.xy;',
          'float pRotation = in0.z;',
          'float pScale = in0.w;',
          'aTranslation *= translationMultiplier;',
          'aScale /= scaleDivisor;',
          'float rotation = pRotation + aRotation;',
          'float scale = pScale * aScale;',
          'float sin1 = sin(pRotation);',
          'float cos1 = cos(pRotation);',
          'float s1 = pScale;',
          'float x1 = pTranslation.x;',
          'float y1 = pTranslation.y;',
          'float x2 = aTranslation.x;',
          'float y2 = aTranslation.y;',
          `
    vec2 translation = vec2(
      cos1 * s1 * x2 - sin1 * s1 * y2 + x1,
      sin1 * s1 * x2 + cos1 * s1 * y2 + y1
    );
    `,
          'out0 = vec4(translation, rotation, scale);',
        ]);
    }
    encode(t) {
      return [
        [this.opcode, 0, 0, 0],
        [t.translation.from[0], t.translation.from[1], t.translation.to[0], t.translation.to[1]],
        [t.rotation.from, t.rotation.to, t.scale.from, t.scale.to],
        ...te(t.translation.timing),
        ...te(t.rotation.timing),
        ...te(t.scale.timing),
        [t.relativeTranslation ? 1 : 0, t.absoluteScale ? 1 : 0, 0, 0],
      ];
    }
  },
  Nr = class extends dt {
    constructor() {
      super(...arguments),
        (this.opcode = ++gt),
        (this.length = 7),
        (this.ins = 1),
        (this.outs = 1),
        (this.microcode = [
          'float fromOpacity = atom0.y;',
          'float toOpacity = atom0.z;',
          'vec4 fromColor = atom1;',
          'vec4 toColor = atom2;',
          'float fColor;',
          '{',
          ...Qt({
            duration: 'atom3.x',
            startTimeOffset: 'atom3.y',
            repeatDelay: 'atom3.z',
            timeOriginSelector: 'atom3.w',
            repeatType: 'atom4.x',
            easing: 'atom4.y',
            playAnimation: 'atom4.z',
            reverseAnimation: 'atom4.w',
            out: 'fColor',
          }),
          '}',
          'float fOpacity;',
          '{',
          ...Qt({
            duration: 'atom5.x',
            startTimeOffset: 'atom5.y',
            repeatDelay: 'atom5.z',
            timeOriginSelector: 'atom5.w',
            repeatType: 'atom6.x',
            easing: 'atom6.y',
            playAnimation: 'atom6.z',
            reverseAnimation: 'atom6.w',
            out: 'fOpacity',
          }),
          '}',
          'vec4 aColor = mix(fromColor, toColor, fColor);',
          'aColor.a *= mix(fromOpacity, toOpacity, fOpacity);',
          'vec4 pColor = in0;',
          'out0 = aColor * pColor;',
        ]);
    }
    encode(t) {
      return [
        [this.opcode, t.opacity.from, t.opacity.to, 0],
        [t.color.from[0], t.color.from[1], t.color.from[2], t.color.from[3]],
        [t.color.to[0], t.color.to[1], t.color.to[2], t.color.to[3]],
        ...te(t.color.timing),
        ...te(t.opacity.timing),
      ];
    }
  };
const Ps = {
    scalar: new $r(),
    vector3: new Ar(),
    vector4: new Er(),
    animatedTransform: new Fr(),
    animatedColor: new Nr(),
    ret: new Lr(),
  },
  Dr = 40,
  Be = 4;
function va(l) {
  const t = [];
  t.push(`float globalTime = ${l.globalTime};`),
    t.push(`float localTimeOrigin = ${l.localTimeOrigin};`),
    t.push(`vec2 pointer = ${l.animationPointer};`),
    t.push(`vec2 size = ${l.animationTextureSize};`),
    t.push('int top = 0;'),
    t.push(`vec4 stack[${Be}];`),
    t.push(`for (int counter = 0; counter < ${Dr}; counter++) {`),
    t.push(`vec4 atom0 = texture(${l.animationTexture}, (pointer + 0.5) / size);`),
    t.push('pointer.x += 1.0;'),
    t.push(`vec2 pixelDimensions = ${l.pixelDimensions};`),
    t.push('if (false) {');
  for (const e in Ps) {
    const s = Ps[e];
    t.push(`} else if (int(atom0.x) == ${s.opcode}) {`);
    for (const i of s.generateSource(l)) t.push(i);
  }
  return (
    t.push('} // End if-else.'),
    t.push('} // End for.'),
    t.push(`${l.out} = top > 0 ? stack[top - 1] : vec4(0.0);`),
    t.join(`
`)
  );
}
let Us = class Tt {
  static local() {
    return Tt.instance === null && (Tt.instance = new Tt()), Tt.instance;
  }
  execute(t, e, s, i, a) {
    return new Xr(t, e, s);
  }
};
Us.instance = null;
let Xr = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._angleTolerance = e.angleTolerance !== void 0 ? e.angleTolerance : 120),
        (this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI));
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (t.geometryType === 'esriGeometryPolygon') this._isClosed = !0;
        else if (t.geometryType === 'esriGeometryPolyline') this._isClosed = !1;
        else {
          if (t.geometryType !== 'esriGeometryEnvelope') {
            t = this._inputGeometries.next();
            continue;
          }
          if (this._maxCosAngle) return t;
          this._isClosed = !0;
        }
        for (; t.nextPath(); ) this._processPath(t);
        return t.reset(), t;
      }
      return null;
    }
    _processPath(t) {
      if (t.nextPoint()) {
        const e = t.x,
          s = t.y;
        let i = e,
          a = s,
          n = t.pathSize,
          r = 0,
          o = 0,
          h = 0,
          c = 0,
          u = 0,
          f = 0;
        this._isClosed && ++n;
        for (let p = 1; t.nextPoint() || p < n; ++p) {
          let m, _;
          this._isClosed && p === n - 1 ? ((m = e), (_ = s)) : ((m = t.x), (_ = t.y));
          const d = m - i,
            g = _ - a,
            y = Math.sqrt(d * d + g * g);
          p > 1 &&
            y > 0 &&
            h > 0 &&
            (r * d + o * g) / y / h <= this._maxCosAngle &&
            t.setControlPointAt(p - 1),
            p === 1 && ((c = d), (u = g), (f = y)),
            y > 0 && ((i = m), (a = _), (r = d), (o = g), (h = y));
        }
        this._isClosed &&
          h > 0 &&
          f > 0 &&
          (r * c + o * u) / f / h <= this._maxCosAngle &&
          t.setControlPointAt(0);
      }
    }
  },
  z = class {
    static fromOptimized(t, e, s = !1, i = !1, a = 1) {
      return new Ye().initialize(t, e, s, i, a);
    }
    static fromJSON(t, e = !1, s = !1) {
      const [i, a] = xs(t);
      return new Ue().initialize(i, a, e, s, 1);
    }
    static fromOptimizedCIM(t, e, s = !1, i = !1, a = 1) {
      return new bs().initialize(t, e, s, i, a);
    }
    static fromJSONCIM(t, e = !1, s = !1, i = 1) {
      const [a, n] = xs(t);
      return new Ms().initialize(a, n, e, s, i);
    }
    static fromFeatureSetReader(t) {
      const e = t.readGeometryForDisplay(),
        s = t.geometryType;
      return e && s ? this.fromOptimized(e, s) : null;
    }
    static fromFeatureSetReaderCIM(t) {
      const e = t.readGeometryForDisplay(),
        s = t.geometryType;
      return e && s ? this.fromOptimizedCIM(e, s) : null;
    }
    static createEmptyOptimized(t, e = !1, s = !1, i = 1) {
      return new Ye().initialize(new Me(), t, e, s, i);
    }
    static createEmptyJSON(t, e = !1, s = !1) {
      return new Ue().initialize([], t, e, s, 1);
    }
    static createEmptyOptimizedCIM(t, e = !1, s = !1, i = 1) {
      return new bs().initialize(new Me(), t, e, s, i);
    }
    static createEmptyJSONCIM(t, e = !1, s = !1, i = 1) {
      return new Ms().initialize([], t, e, s, i);
    }
    asJSON() {
      const t = we(this);
      return this.geometryType === 'esriGeometryEnvelope'
        ? { xmin: t[0][0][0], ymin: t[0][0][1], xmax: t[0][2][0], ymax: t[0][2][1] }
        : this.geometryType === 'esriGeometryMultipoint'
          ? { points: t.flat() }
          : this.geometryType === 'esriGeometryPoint'
            ? { x: t[0][0][0], y: t[0][0][1] }
            : this.geometryType === 'esriGeometryPolygon'
              ? { rings: t }
              : { paths: t };
    }
    getCurrentRingArea() {
      if (this.pathSize < 3) return 0;
      let t,
        e,
        s = 0;
      if ((this.seekPathStart(), !this.nextPoint())) return 0;
      (t = this.x), (e = this.y);
      const i = t,
        a = e;
      for (; this.nextPoint(); ) (s += (t - this.x) * (e + this.y)), (t = this.x), (e = this.y);
      return (s += (t - i) * (e + a)), -0.5 * s;
    }
    invertY() {
      this.yFactor *= -1;
    }
  },
  Ye = class Ve extends z {
    constructor() {
      super(...arguments), (this._end = -1);
    }
    initialize(t, e, s, i, a) {
      return (
        (this.hasZ = s),
        (this.hasM = i),
        (this.geometryType = e),
        (this._stride = 2 + Number(s) + Number(i)),
        (this._geometry = t),
        (this._pathIndex = -1),
        (this._pathOffset = 0),
        (this._pointOffset = -this._stride),
        (this._end = -1),
        (this.yFactor = a),
        this
      );
    }
    reset() {
      this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
    }
    seekPath(t) {
      if (t >= 0 && t < this.totalSize) {
        if (this._pathIndex < t) for (; this._pathIndex < t && this.nextPath(); );
        else if (this._pathIndex > t) for (; this._pathIndex > t && this.prevPath(); );
        return !0;
      }
      return !1;
    }
    seekPathStart() {
      this._pointOffset = this._pathOffset - this._stride;
    }
    seekPathEnd() {
      this._pointOffset = this._end;
    }
    seekInPath(t) {
      const e = this._pathOffset + t * this._stride;
      return e >= 0 && e < this._end && ((this._pointOffset = e), !0);
    }
    nextPoint() {
      return (this._pointOffset += this._stride) < this._end;
    }
    prevPoint() {
      return (this._pointOffset -= this._stride) >= this._pathOffset;
    }
    nextPath() {
      return (
        !(this.pathIndex >= this.totalSize - 1) &&
        (this._pathIndex >= 0 && (this._pathOffset += this._stride * this.pathSize),
        this._pathIndex++,
        (this._pointOffset = this._pathOffset - this._stride),
        (this._end = this._pointOffset + this._stride + this._stride * this.pathSize),
        !0)
      );
    }
    prevPath() {
      return (
        !(this.pathIndex <= 0) &&
        (this._pathIndex--,
        (this._end = this._pathOffset),
        (this._pathOffset -= this._stride * this.pathSize),
        (this._pointOffset = this._pathOffset - this._stride),
        !0)
      );
    }
    getCurrentPath() {
      const t = this._end,
        e = this._geometry.coords,
        s = this._pathOffset;
      return new Ve().initialize(
        new Me([this.pathSize], e.slice(s, t)),
        this.geometryType,
        this.hasZ,
        this.hasM,
        this.yFactor,
      );
    }
    pathLength() {
      const t = this._end,
        e = this._stride,
        s = this._geometry.coords;
      let i = 0;
      for (let a = this._pathOffset + e; a < t; a += e) {
        const n = s[a - e],
          r = s[a - e + 1],
          o = s[a] - n,
          h = s[a + 1] - r;
        i += Math.sqrt(o * o + h * h);
      }
      return i;
    }
    startPath() {
      this._geometry.lengths.push(0);
    }
    pushPath(t) {
      this.startPath(), this.pushPoints(t);
    }
    pushPoint(t) {
      for (let e = 0; e < this._stride; ++e) this._geometry.coords.push(t[e]);
      this._geometry.lengths[this.totalSize - 1]++;
    }
    pushXY(t, e) {
      this._geometry.coords.push(t, e), this._geometry.lengths[this.totalSize - 1]++;
    }
    pushPoints(t) {
      for (const e of t) for (let s = 0; s < this._stride; ++s) this._geometry.coords.push(e[s]);
      this._geometry.lengths[this.totalSize - 1] += t.length;
    }
    pushCursor(t) {
      const e = t.asOptimized();
      this._geometry.coords.push(...e.coords), this._geometry.lengths.push(...e.lengths);
    }
    asOptimized() {
      const t = this._geometry.clone();
      if (this.yFactor !== 1)
        for (let e = 1; e < t.coords.length; e += this._stride) t.coords[e] *= this.yFactor;
      return this.geometryType === 'esriGeometryPoint' && (t.lengths.length = 0), t;
    }
    isClosed() {
      const t = this._geometry.coords,
        e = this._pathOffset,
        s = this._end - this._stride;
      for (let i = 0; i < this._stride; i++) if (t[e + i] !== t[s + i]) return !1;
      return !0;
    }
    clone() {
      return new Ve().initialize(
        this._geometry.clone(),
        this.geometryType,
        this.hasZ,
        this.hasM,
        this.yFactor,
      );
    }
    get totalPoints() {
      return this._geometry.isPoint ? 1 : this._geometry.lengths.reduce((t, e) => t + e);
    }
    get pathSize() {
      const { lengths: t } = this._geometry;
      return this._geometry.isPoint
        ? 1
        : this._pathIndex < 0 || this._pathIndex > t.length - 1
          ? 0
          : t[this._pathIndex];
    }
    get totalSize() {
      return this._geometry.isPoint ? 1 : this._geometry.lengths.length;
    }
    get x() {
      return this._geometry.coords[this._pointOffset];
    }
    set x(t) {
      this._geometry.coords[this._pointOffset] = t;
    }
    get y() {
      return this.yFactor * this._geometry.coords[this._pointOffset + 1];
    }
    set y(t) {
      this._geometry.coords[this._pointOffset + 1] = this.yFactor * t;
    }
    get z() {
      return this._geometry.coords[this._pointOffset + 2];
    }
    set z(t) {
      this._geometry.coords[this._pointOffset + 2] = t;
    }
    get m() {
      const t = this.hasZ ? 3 : 2;
      return this._geometry.coords[this._pointOffset + t];
    }
    set m(t) {
      this._geometry.coords[this._pointOffset + 3] = t;
    }
    get pathIndex() {
      return this._pathIndex;
    }
    get _coordIndex() {
      return this._pointOffset / this._stride;
    }
  };
function Hr(l) {
  const t = [l.x, l.y];
  return l.z && t.push(l.z), l.m && t.push(l.m), t;
}
function xs(l) {
  return R(l)
    ? [l.rings, 'esriGeometryPolygon']
    : F(l)
      ? [l.paths, 'esriGeometryPolyline']
      : ye(l)
        ? [[l.points], 'esriGeometryMultipoint']
        : N(l)
          ? [
              [
                [
                  [l.xmin, l.ymin],
                  [l.xmin, l.ymax],
                  [l.xmax, l.ymax],
                  [l.xmax, l.ymin],
                  [l.xmin, l.ymin],
                ],
              ],
              'esriGeometryEnvelope',
            ]
          : Xe(l)
            ? [[[Hr(l)]], 'esriGeometryPoint']
            : [[], 'esriGeometryPolyline'];
}
let Ue = class We extends z {
  initialize(t, e, s, i, a) {
    return (
      (this._paths = t),
      (this.geometryType = e),
      (this.hasZ = s),
      (this.hasM = i),
      (this._pathIndex = this._pointIndex = -1),
      (this.yFactor = a),
      (this._mIndex = this.hasZ ? 3 : 2),
      this
    );
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPath(t) {
    return (
      (this._pathIndex = t),
      (this._pointIndex = -1),
      t >= 0 && t < this.totalSize && ((this._currentPath = this._paths[t]), !0)
    );
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t) {
    return (
      t >= 0 &&
      t < this._currentPath.length &&
      ((this._pointIndex = t), (this._currentPoint = this._currentPath[this._pointIndex]), !0)
    );
  }
  nextPoint() {
    return (
      (this._currentPoint = this._currentPath[++this._pointIndex]),
      this._pointIndex < this._currentPath.length
    );
  }
  prevPoint() {
    return (this._currentPoint = this._currentPath[--this._pointIndex]), this._pointIndex >= 0;
  }
  nextPath() {
    return (
      (this._pointIndex = -1),
      (this._currentPath = this._paths[++this._pathIndex]),
      this._pathIndex < this.totalSize
    );
  }
  prevPath() {
    return (
      this.pathIndex > 0 &&
      ((this._pointIndex = -1),
      this._pathIndex--,
      (this._currentPath = this._paths[this._pathIndex]),
      !0)
    );
  }
  pathLength() {
    const t = this._currentPath.length,
      e = this._currentPath;
    let s = 0;
    for (let i = 1; i < t; i++) {
      const a = e[i - 1],
        n = e[i],
        r = a[0],
        o = a[1],
        h = n[0] - r,
        c = n[1] - o;
      s += Math.sqrt(h * h + c * c);
    }
    return s;
  }
  startPath() {
    this._paths.push([]);
  }
  getCurrentPath() {
    return new We().initialize(
      [this._currentPath],
      this.geometryType,
      this.hasZ,
      this.hasM,
      this.yFactor,
    );
  }
  pushPath(t) {
    this._paths.push(t);
  }
  pushPoint(t) {
    this._paths[this.totalSize - 1].push(t);
  }
  pushXY(t, e) {
    this._paths[this.totalSize - 1].push([t, e]);
  }
  pushPoints(t) {
    this._paths[this.totalSize - 1].push(...t);
  }
  pushCursor(t) {
    const e = we(t);
    for (const s of e) this.pushPath(s);
  }
  asOptimized() {
    const t = new Me();
    if (this.geometryType === 'esriGeometryPoint')
      t.coords.push(...this._paths[0][0]), (t.lengths.length = 0);
    else
      for (const e of this._paths) {
        for (const s of e)
          t.coords.push(s[0]),
            t.coords.push(s[1] * this.yFactor),
            this.hasZ && t.coords.push(s[2]),
            this.hasM && t.coords.push(s[this._mIndex]);
        t.lengths.push(e.length);
      }
    return t;
  }
  isClosed() {
    const t = this._currentPath[0],
      e = this._currentPath[this._currentPath.length - 1];
    for (let s = 0; s < t.length; s++) if (t[s] !== e[s]) return !1;
    return !0;
  }
  clone() {
    return new We().initialize(
      ut(this._paths),
      this.geometryType,
      this.hasZ,
      this.hasM,
      this.yFactor,
    );
  }
  get totalPoints() {
    return this._paths.map((t) => t.length).reduce((t, e) => t + e);
  }
  get pathSize() {
    return this._pathIndex < 0 || this._pathIndex > this.totalSize - 1
      ? -1
      : this._paths[this._pathIndex].length;
  }
  get totalSize() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t) {
    this._currentPoint[0] = t;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t) {
    this._currentPoint[1] = this.yFactor * t;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t) {
    this._currentPoint[2] = t;
  }
  get m() {
    return this._currentPoint[this._mIndex];
  }
  set m(t) {
    this._currentPoint[this._mIndex] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
};
const le = 4,
  ce = 1;
let bs = class Ws extends Ye {
    initialize(t, e, s, i, a) {
      return (
        super.initialize(t, e, s, i, a),
        this._controlPoints ||
          (this._controlPoints = this._controlPoints =
            new Array(this.totalSize).fill(void 0).map((n) => new Set())),
        this
      );
    }
    startPath() {
      super.startPath(), this._controlPoints.push(new Set());
    }
    clone() {
      const t = new Ws().initialize(
        this._geometry.clone(),
        this.geometryType,
        this.hasZ,
        this.hasM,
        this.yFactor,
      );
      return (t._controlPoints = this._controlPoints), t;
    }
    setControlPoint() {
      this._controlPoints[this.pathIndex].add(this._coordIndex);
    }
    getControlPoint() {
      return this._controlPoints[this.pathIndex].has(this._coordIndex);
    }
    setControlPointAt(t) {
      this._controlPoints[this.pathIndex].add(t);
    }
    getControlPointAt(t) {
      return this._controlPoints[this.pathIndex].has(t);
    }
  },
  Ms = class qs extends Ue {
    initialize(t, e, s, i, a) {
      return super.initialize(t, e, s, i, a);
    }
    clone() {
      return new qs().initialize(
        ut(this._paths),
        this.geometryType,
        this.hasZ,
        this.hasM,
        this.yFactor,
      );
    }
    setControlPoint() {
      this._paths[this.pathIndex][this._pointIndex][le] = ce;
    }
    getControlPoint() {
      return this._paths[this.pathIndex][this._pointIndex][le] === ce;
    }
    setControlPointAt(t) {
      this._paths[this.pathIndex][t][le] = ce;
    }
    getControlPointAt(t) {
      return this._paths[this.pathIndex][t][le] === ce;
    }
  },
  yt = class {
    constructor() {
      this.setIdentity();
    }
    getAngle() {
      return (
        (this.rz == null || (this.rz === 0 && this.rzCos !== 1 && this.rzSin !== 0)) &&
          (this.rz = Math.atan2(this.rzSin, this.rzCos)),
        this.rz
      );
    }
    setIdentity() {
      (this.tx = 0),
        (this.ty = 0),
        (this.tz = 0),
        (this.s = 1),
        (this.rx = 0),
        (this.ry = 0),
        (this.rz = 0),
        (this.rzCos = 1),
        (this.rzSin = 0);
    }
    setTranslate(t, e) {
      (this.tx = t), (this.ty = e);
    }
    setTranslateZ(t) {
      this.tz = t;
    }
    setRotateCS(t, e) {
      (this.rz = void 0), (this.rzCos = t), (this.rzSin = e);
    }
    setRotate(t) {
      (this.rz = t), (this.rzCos = void 0), (this.rzSin = void 0);
    }
    setRotateY(t) {
      this.ry = t;
    }
    setScale(t) {
      this.s = t;
    }
    setMeasure(t) {
      this.m = t;
    }
  };
function Mt(l, t) {
  l[4] = t;
}
let se = class {
    constructor(t, e = !0, s = !0, i = 0) {
      (this.isClosed = !1),
        (this.geometryCursor = null),
        (this.geometryCursor =
          (!e && t.geometryType === 'esriGeometryPolygon') ||
          (!s && t.geometryType === 'esriGeometryPolyline')
            ? null
            : t),
        (this.geomUnitsPerPoint = i),
        (this.iterateMultiPath = !1),
        (this.iteratePath = !1),
        (this.internalPlacement = new yt());
    }
    next() {
      if (!this.geometryCursor) return null;
      const t = this.processMultiPath(this.geometryCursor);
      return (this.iterateMultiPath && t) || (this.geometryCursor = null), t;
    }
    processMultiPath(t) {
      for (; this.iteratePath || t.pathIndex < t.totalSize - 1; ) {
        this.iteratePath || t.nextPath(), (this.iterateMultiPath = !0);
        const e = this.processPath(t);
        if (e) return e;
      }
      return (this.iterateMultiPath = !1), null;
    }
  },
  ve = class {
    constructor(t, e, s, i = 0) {
      (this.isClosed = !1),
        (this.inputGeometries = t),
        (this.acceptPolygon = e),
        (this.acceptPolyline = s),
        (this.geomUnitsPerPoint = i),
        (this.iteratePath = !1),
        (this.multiPathCursor = null);
    }
    next() {
      for (;;) {
        if (!this.multiPathCursor) {
          let t = this.inputGeometries.next();
          for (
            ;
            t &&
            ((this.isClosed =
              (this.acceptPolygon && t.geometryType === 'esriGeometryPolygon') ||
              t.geometryType === 'esriGeometryEnvelope'),
            (this.multiPathCursor = t),
            !this.multiPathCursor);

          )
            t = this.inputGeometries.next();
          if (!this.multiPathCursor) return null;
        }
        for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
          this.multiPathCursor.seekPathStart();
          const t = this.processPath(this.multiPathCursor);
          if (t) return t;
        }
        this.multiPathCursor = null;
      }
    }
  };
const ee = 0.03;
let it = class {
  constructor(t = 0, e = !1) {}
  isEmpty(t) {
    if (!t.nextPoint()) return !0;
    let e, s, i, a;
    for (e = t.x, s = t.y; t.nextPoint(); e = s, s = a)
      if (((i = t.x), (a = t.y), i !== e || a !== s)) return t.seekPathStart(), !1;
    return t.seekPathStart(), !0;
  }
  normalize(t) {
    const e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    e !== 0 && ((t[0] /= e), (t[1] /= e));
  }
  getLength(t, e, s, i) {
    const a = s - t,
      n = i - e;
    return Math.sqrt(a * a + n * n);
  }
  getSegLength(t) {
    const [[e, s], [i, a]] = t;
    return this.getLength(e, s, i, a);
  }
  getCoord2D(t, e, s, i, a) {
    return [t + (s - t) * a, e + (i - e) * a];
  }
  getSegCoord2D(t, e) {
    const [[s, i], [a, n]] = t;
    return this.getCoord2D(s, i, a, n, e);
  }
  getAngle(t, e, s, i, a) {
    const n = s - t,
      r = i - e;
    return Math.atan2(r, n);
  }
  getAngleCS(t, e, s, i, a) {
    const n = s - t,
      r = i - e,
      o = Math.sqrt(n * n + r * r);
    return o > 0 ? [n / o, r / o] : [1, 0];
  }
  getSegAngleCS(t, e) {
    const [[s, i], [a, n]] = t;
    return this.getAngleCS(s, i, a, n, e);
  }
  cut(t, e, s, i, a, n) {
    return [
      a <= 0 ? [t, e] : this.getCoord2D(t, e, s, i, a),
      n >= 1 ? [s, i] : this.getCoord2D(t, e, s, i, n),
    ];
  }
  getSubCurve(t, e, s) {
    const i = z.createEmptyOptimizedCIM('esriGeometryPolyline');
    return this.appendSubCurve(i, t, e, s) ? i : null;
  }
  appendSubCurve(t, e, s, i) {
    t.startPath(), e.seekPathStart();
    let a = 0,
      n = !0;
    if (!e.nextPoint()) return !1;
    let r = e.x,
      o = e.y;
    for (; e.nextPoint(); ) {
      const h = this.getLength(r, o, e.x, e.y);
      if (h !== 0) {
        if (n) {
          if (a + h > s) {
            const c = (s - a) / h;
            let u = 1,
              f = !1;
            a + h >= i && ((u = (i - a) / h), (f = !0));
            const p = this.cut(r, o, e.x, e.y, c, u);
            if ((p && t.pushPoints(p), f)) break;
            n = !1;
          }
        } else {
          if (a + h > i) {
            const c = this.cut(r, o, e.x, e.y, 0, (i - a) / h);
            c && t.pushPoint(c[1]);
            break;
          }
          t.pushXY(e.x, e.y);
        }
        (a += h), (r = e.x), (o = e.y);
      } else (r = e.x), (o = e.y);
    }
    return !0;
  }
  getCIMPointAlong(t, e) {
    if (!t.nextPoint()) return null;
    let s,
      i,
      a,
      n,
      r = 0;
    for (s = t.x, i = t.y; t.nextPoint(); s = a, i = n) {
      (a = t.x), (n = t.y);
      const o = this.getLength(s, i, a, n);
      if (o !== 0) {
        if (r + o > e) {
          const h = (e - r) / o;
          return this.getCoord2D(s, i, a, n, h);
        }
        r += o;
      }
    }
    return null;
  }
  offset(t, e, s, i, a) {
    if (!t || t.length < 2) return null;
    let n = 0,
      r = t[n++],
      o = n;
    for (; n < t.length; ) {
      const f = t[n];
      (f[0] === r[0] && f[1] === r[1]) || (n !== o && (t[o] = t[n]), (r = t[o++])), n++;
    }
    const h = t[0][0] === t[o - 1][0] && t[0][1] === t[o - 1][1];
    if ((h && --o, o < (h ? 3 : 2))) return null;
    const c = [];
    r = h ? t[o - 1] : null;
    let u = t[0];
    for (let f = 0; f < o; f++) {
      const p = f === o - 1 ? (h ? t[0] : null) : t[f + 1];
      if (r)
        if (p) {
          const m = [p[0] - u[0], p[1] - u[1]];
          this.normalize(m);
          const _ = [u[0] - r[0], u[1] - r[1]];
          this.normalize(_);
          const d = _[0] * m[1] - _[1] * m[0],
            g = _[0] * m[0] + _[1] * m[1];
          if (d === 0 && g === 1) {
            u = p;
            continue;
          }
          if (d >= 0 == e <= 0) {
            if (g < 1) {
              const y = [m[0] - _[0], m[1] - _[1]];
              this.normalize(y);
              const P = Math.sqrt((1 + g) / 2);
              if (P > 1 / i) {
                const x = -Math.abs(e) / P;
                c.push([u[0] - y[0] * x, u[1] - y[1] * x]);
              }
            }
          } else
            switch (s) {
              case ct.Mitered: {
                const y = Math.sqrt((1 + g) / 2);
                if (y > 0 && 1 / y < i) {
                  const P = [m[0] - _[0], m[1] - _[1]];
                  this.normalize(P);
                  const x = Math.abs(e) / y;
                  c.push([u[0] - P[0] * x, u[1] - P[1] * x]);
                  break;
                }
              }
              case ct.Bevelled:
                c.push([u[0] + _[1] * e, u[1] - _[0] * e]),
                  c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
                break;
              case ct.Rounded:
                if (g < 1) {
                  c.push([u[0] + _[1] * e, u[1] - _[0] * e]);
                  const y = Math.floor(2.5 * (1 - g));
                  if (y > 0) {
                    const P = 1 / y;
                    let x = P;
                    for (let b = 1; b < y; b++, x += P) {
                      const M = [_[1] * (1 - x) + m[1] * x, -_[0] * (1 - x) - m[0] * x];
                      this.normalize(M), c.push([u[0] + M[0] * e, u[1] + M[1] * e]);
                    }
                  }
                  c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
                }
                break;
              case ct.Square:
              default:
                if (d < 0)
                  c.push([u[0] + (_[1] + _[0]) * e, u[1] + (_[1] - _[0]) * e]),
                    c.push([u[0] + (m[1] - m[0]) * e, u[1] - (m[0] + m[1]) * e]);
                else {
                  const y = Math.sqrt((1 + Math.abs(g)) / 2),
                    P = [m[0] - _[0], m[1] - _[1]];
                  this.normalize(P);
                  const x = e / y;
                  c.push([u[0] - P[0] * x, u[1] - P[1] * x]);
                }
            }
        } else {
          const m = [u[0] - r[0], u[1] - r[1]];
          this.normalize(m), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
        }
      else {
        const m = [p[0] - u[0], p[1] - u[1]];
        this.normalize(m), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
      }
      (r = u), (u = p);
    }
    return c.length < (h ? 3 : 2) ? null : (h && c.push([c[0][0], c[0][1]]), c);
  }
};
const Re = 1.7320508075688772,
  Br = 5,
  Yr = Pe.OpenEnded;
let Js = class Lt {
  static local() {
    return Lt.instance === null && (Lt.instance = new Lt()), Lt.instance;
  }
  execute(t, e, s, i, a) {
    return new Vr(t, e, s);
  }
};
Js.instance = null;
let Vr = class extends ve {
  constructor(t, e, s) {
    super(t, !1, !0),
      (this._curveHelper = new it()),
      (this._width = (e.width !== void 0 ? e.width : Br) * s),
      (this._arrowType =
        e.geometricEffectArrowType !== void 0
          ? e.geometricEffectArrowType
          : e.arrowType !== void 0
            ? e.arrowType
            : Yr),
      (this._offsetFlattenError = ee * s);
  }
  processPath(t) {
    const e = z.createEmptyOptimizedCIM(t.geometryType);
    switch (this._arrowType) {
      case Pe.OpenEnded:
      default:
        this._constructSimpleArrow(e, t, !0);
        break;
      case Pe.Block:
        this._constructSimpleArrow(e, t, !1);
        break;
      case Pe.Crossed:
        this._constructCrossedArrow(e, t);
    }
    return e;
  }
  _constructSimpleArrow(t, e, s) {
    const i = e.pathLength();
    let a = this._width;
    i < 2 * a && (a = i / 2);
    const n = this._curveHelper.getSubCurve(e, 0, i - a);
    if (!n || !n.nextPath()) return;
    n.seekPathStart();
    const r = a / 2;
    if (this._curveHelper.isEmpty(n)) return;
    const o = ft(n),
      h = this._constructOffset(o, -r);
    if (!h) return;
    const c = this._constructOffset(o, r);
    if (!c) return;
    const u = this._constructArrowBasePoint(h, -r / 2);
    if (!u) return;
    const f = this._constructArrowBasePoint(c, r / 2);
    if (!f) return;
    e.seekInPath(e.pathSize - 1);
    const p = [e.x, e.y];
    t.pushPath(c),
      t.nextPath(),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(f),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(p),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(u),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoints(h.reverse()),
      t.setControlPoint(),
      s || (t.setControlPointAt(0), t.setControlPointAt(t.pathSize - 1), t.pushPoint(c[0])),
      t.reset();
  }
  _constructCrossedArrow(t, e) {
    const s = e.pathLength();
    let i = this._width;
    s < i * (1 + Re + 1) && (i = s / (1 + Re + 1)), e.seekPathStart();
    const a = this._curveHelper.getSubCurve(e, 0, s - i * (1 + Re));
    if (!a) return;
    a.nextPath();
    const n = i / 2;
    if (this._curveHelper.isEmpty(a)) return;
    const r = ft(a),
      o = this._constructOffset(r, n);
    if (!o) return;
    const h = this._constructOffset(r, -n);
    if (!h) return;
    const c = this._curveHelper.getSubCurve(e, 0, s - i);
    if (!c || (c.nextPath(), this._curveHelper.isEmpty(c))) return;
    const u = ft(c),
      f = this._constructOffset(u, n);
    if (!f) return;
    const p = this._constructOffset(u, -n);
    if (!p) return;
    const m = f[f.length - 1],
      _ = this._constructArrowBasePoint(f, n / 2);
    if (!_) return;
    const d = p[p.length - 1],
      g = this._constructArrowBasePoint(p, -n / 2);
    if (!g) return;
    e.seekInPath(e.pathSize - 1);
    const y = [e.x, e.y];
    t.pushPath(o),
      t.nextPath(),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(d),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(g),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(y),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(_),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoint(m),
      t.nextPoint(),
      t.setControlPoint(),
      t.pushPoints(h.reverse()),
      t.nextPoint(),
      t.setControlPoint(),
      t.reset();
  }
  _constructOffset(t, e) {
    return this._curveHelper.offset(t, e, ct.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t, e) {
    if (!t || t.length < 2) return null;
    const s = t[t.length - 2],
      i = t[t.length - 1],
      a = [i[0] - s[0], i[1] - s[1]];
    return this._curveHelper.normalize(a), [i[0] + a[1] * e, i[1] - a[0] * e];
  }
};
const Ur = 512;
let K,
  Wr = class {
    constructor(t) {
      this._geometry = t;
    }
    next() {
      const t = this._geometry;
      return (this._geometry = null), t;
    }
  };
function es(l, t) {
  K || (K = new wr(0, 0, 0, 1));
  const e = l.geometryType === 'esriGeometryPolygon',
    s = e ? ms.Polygon : ms.LineString,
    i = e ? 3 : 2;
  let a, n;
  for (K.reset(s), K.setPixelMargin(t + 1), K.setExtent(Ur); l.nextPath(); )
    if (!(l.pathSize < i)) {
      for (l.nextPoint(), a = l.x, n = -l.y, K.moveTo(a, n); l.nextPoint(); )
        (a = l.x), (n = -l.y), K.lineTo(a, n);
      e && K.close();
    }
  const r = K.result(!1);
  if (r) {
    const o = z.createEmptyOptimizedCIM(l.geometryType);
    for (const h of r) {
      o.startPath();
      for (const c of h) o.pushXY(c.x, -c.y);
    }
    return o.reset(), o;
  }
  return null;
}
let js = class $t {
  static local() {
    return $t.instance === null && ($t.instance = new $t()), $t.instance;
  }
  execute(t, e, s, i, a, n, r) {
    return new qr(t, e, s, i, a, n, r);
  }
};
js.instance = null;
let qr = class {
    constructor(t, e, s, i, a, n, r) {
      (this._preventClipping = r),
        (this._inputGeometries = t),
        (this._tileKey = i),
        (this._geometryEngine = a),
        (this._curveHelper = new it()),
        (this._size = (e.size !== void 0 ? e.size : 1) * s),
        (this._maxInflateSize = n * s),
        (this._offsetFlattenError = ee * s);
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        if (this._size === 0) return t;
        if (t.geometryType === 'esriGeometryEnvelope') {
          if (this._size > 0) {
            const a = z.createEmptyOptimizedCIM(t.geometryType),
              n = we(t)[0],
              r = this._curveHelper.offset(n, this._size, ct.Rounded, 4, this._offsetFlattenError);
            if (r) return a.pushPath(r), a;
          } else if (this._size < 0) {
            const a = t.asJSON();
            if (Math.min(a.xmax - a.xmin, a.ymax - a.ymin) + 2 * this._size > 0)
              return z.fromJSONCIM({
                xmin: a.xmin - this._size,
                xmax: a.xmax + this._size,
                ymin: a.ymin - this._size,
                ymax: a.ymax + this._size,
              });
          }
        }
        const e = this._geometryEngine;
        if (e == null) return null;
        const s = !this._preventClipping && this._tileKey ? es(t, this._maxInflateSize) : t;
        if (!s) continue;
        const i = e.buffer(je.WebMercator, s.asJSON(), this._size, 1);
        return i ? z.fromJSONCIM(i) : null;
      }
      return null;
    }
  },
  Zs = class At {
    static local() {
      return At.instance === null && (At.instance = new At()), At.instance;
    }
    execute(t, e, s, i, a) {
      return new Jr(t, e, s);
    }
  };
Zs.instance = null;
let Jr = class {
    constructor(t, e, s) {
      (this._defaultPointSize = 20),
        (this._inputGeometries = t),
        (this._geomUnitsPerPoint = s),
        (this._rule = e.rule ?? C.FullGeometry),
        (this._defaultSize = this._defaultPointSize * s);
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        const e = this._processGeom(we(t));
        if (e != null && e.length) return z.fromJSONCIM({ paths: e });
      }
      return null;
    }
    _clone(t) {
      return [t[0], t[1]];
    }
    _mid(t, e) {
      return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
    }
    _mix(t, e, s, i) {
      return [t[0] * e + s[0] * i, t[1] * e + s[1] * i];
    }
    _add(t, e) {
      return [t[0] + e[0], t[1] + e[1]];
    }
    _add2(t, e, s) {
      return [t[0] + e, t[1] + s];
    }
    _sub(t, e) {
      return [t[0] - e[0], t[1] - e[1]];
    }
    _dist(t, e) {
      return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    _norm(t) {
      return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }
    _normalize(t, e = 1) {
      const s = e / this._norm(t);
      (t[0] *= s), (t[1] *= s);
    }
    _leftPerpendicular(t) {
      const e = -t[1],
        s = t[0];
      (t[0] = e), (t[1] = s);
    }
    _leftPerp(t) {
      return [-t[1], t[0]];
    }
    _rightPerpendicular(t) {
      const e = t[1],
        s = -t[0];
      (t[0] = e), (t[1] = s);
    }
    _rightPerp(t) {
      return [t[1], -t[0]];
    }
    _dotProduct(t, e) {
      return t[0] * e[0] + t[1] * e[1];
    }
    _crossProduct(t, e) {
      return t[0] * e[1] - t[1] * e[0];
    }
    _rotateDirect(t, e, s) {
      const i = t[0] * e - t[1] * s,
        a = t[0] * s + t[1] * e;
      (t[0] = i), (t[1] = a);
    }
    _makeCtrlPt(t) {
      const e = [t[0], t[1]];
      return Mt(e, 1), e;
    }
    _addAngledTicks(t, e, s, i) {
      const a = this._sub(s, e);
      this._normalize(a);
      const n = this._crossProduct(a, this._sub(i, e));
      let r;
      r = n > 0 ? this._rightPerp(a) : this._leftPerp(a);
      const o = Math.abs(n) / 2,
        h = [];
      h.push([e[0] + (r[0] - a[0]) * o, e[1] + (r[1] - a[1]) * o]),
        h.push(e),
        h.push(s),
        h.push([s[0] + (r[0] + a[0]) * o, s[1] + (r[1] + a[1]) * o]),
        t.push(h);
    }
    _addBezier2(t, e, s, i, a) {
      if (a-- == 0) return void t.push(i);
      const n = this._mid(e, s),
        r = this._mid(s, i),
        o = this._mid(n, r);
      this._addBezier2(t, e, n, o, a), this._addBezier2(t, o, r, i, a);
    }
    _addBezier3(t, e, s, i, a, n) {
      if (n-- == 0) return void t.push(a);
      const r = this._mid(e, s),
        o = this._mid(s, i),
        h = this._mid(i, a),
        c = this._mid(r, o),
        u = this._mid(o, h),
        f = this._mid(c, u);
      this._addBezier3(t, e, r, c, f, n), this._addBezier3(t, f, u, h, a, n);
    }
    _add90DegArc(t, e, s, i, a) {
      const n = a ?? this._crossProduct(this._sub(s, e), this._sub(i, e)) > 0,
        r = this._mid(e, s),
        o = this._sub(r, e);
      n ? this._leftPerpendicular(o) : this._rightPerpendicular(o),
        (r[0] += o[0]),
        (r[1] += o[1]),
        this._addBezier3(
          t,
          e,
          this._mix(e, 0.33333, r, 0.66667),
          this._mix(s, 0.33333, r, 0.66667),
          s,
          4,
        );
    }
    _addArrow(t, e, s) {
      const i = e[0],
        a = e[1],
        n = e[e.length - 1],
        r = this._sub(i, a),
        o = this._norm(r);
      this._normalize(r);
      const h = Math.abs(this._crossProduct(r, this._sub(n, a)));
      let c = this._dotProduct(r, this._sub(n, a));
      c < 0.05 * o ? (c = 0.05 * o) : c > 0.95 * o && (c = 0.95 * o);
      const u = 0.5 * h,
        f = this._leftPerp(r),
        p = [a[0] + r[0] * c, a[1] + r[1] * c],
        m = e.length - 1,
        _ = [];
      _.push(s ? [-f[0], -f[1]] : f);
      let d = [-r[0], -r[1]];
      for (let g = 1; g < m - 1; g++) {
        const y = this._sub(e[g + 1], e[g]);
        this._normalize(y);
        const P = this._dotProduct(y, d),
          x = this._crossProduct(y, d),
          b = Math.sqrt((1 + P) / 2),
          M = this._sub(y, d);
        this._normalize(M), (M[0] /= b), (M[1] /= b), _.push(x < 0 ? [-M[0], -M[1]] : M), (d = y);
      }
      _.push(this._rightPerp(d));
      for (let g = _.length - 1; g > 0; g--) t.push([e[g][0] + _[g][0] * u, e[g][1] + _[g][1] * u]);
      t.push([p[0] + _[0][0] * u, p[1] + _[0][1] * u]),
        t.push([p[0] + _[0][0] * h, p[1] + _[0][1] * h]),
        t.push(i),
        t.push([p[0] - _[0][0] * h, p[1] - _[0][1] * h]),
        t.push([p[0] - _[0][0] * u, p[1] - _[0][1] * u]);
      for (let g = 1; g < _.length; g++) t.push([e[g][0] - _[g][0] * u, e[g][1] - _[g][1] * u]);
    }
    _addDash(t, e, s) {
      const i = this._norm(s) / 7;
      this._normalize(s);
      let a = [];
      for (let n = 0; n <= 7; n++)
        a.push([e[0] + s[0] * n * i, e[1] + s[1] * n * i]), 1 & n && (t.push(a), (a = []));
    }
    _cp2(t, e, s) {
      return t.length >= 2 ? t[1] : this._add2(t[0], e * this._defaultSize, s * this._defaultSize);
    }
    _cp3(t, e, s, i) {
      if (t.length >= 3) return t[2];
      const a = this._mix(t[0], 1 - s, e, s),
        n = this._sub(e, t[0]);
      return (
        this._normalize(n),
        this._rightPerpendicular(n),
        [a[0] + n[0] * i * this._defaultSize, a[1] + n[1] * i * this._defaultSize]
      );
    }
    _arrowPath(t) {
      if (t.length > 2) return t;
      const e = t[0],
        s = this._cp2(t, -4, 0),
        i = this._sub(e, s);
      this._normalize(i);
      const a = this._rightPerp(i);
      return [
        e,
        s,
        [e[0] + (a[0] - i[0]) * this._defaultSize, e[1] + (a[1] - i[1]) * this._defaultSize],
      ];
    }
    _arrowLastSeg(t) {
      const e = t[0],
        s = this._cp2(t, -4, 0);
      let i;
      if (t.length >= 3) i = t[t.length - 1];
      else {
        const a = this._sub(e, s);
        this._normalize(a);
        const n = this._rightPerp(a);
        i = [e[0] + (n[0] - a[0]) * this._defaultSize, e[1] + (n[1] - a[1]) * this._defaultSize];
      }
      return [s, i];
    }
    _processGeom(t) {
      if (!t) return null;
      const e = [];
      for (const s of t) {
        const i = s.length > 1 && Ei(s) < this._defaultSize;
        if (!s || s.length === 0 || i) continue;
        const a = s.length;
        let n = s[0];
        switch (this._rule) {
          case C.PerpendicularFromFirstSegment: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 4),
              h = [];
            h.push(o), h.push(this._mid(n, r)), e.push(h);
            break;
          }
          case C.ReversedFirstSegment: {
            const r = this._cp2(s, 0, -1);
            e.push([r, n]);
            break;
          }
          case C.PerpendicularToSecondSegment: {
            if (s.length < 3) return [];
            const r = this._cp2(s, -4, 1),
              o = this._cp3(s, r, 0.882353, -1.94),
              h = [];
            h.push(this._mid(r, o)), h.push(n), e.push(h);
            break;
          }
          case C.SecondSegmentWithTicks: {
            if (s.length < 3) return [];
            const r = this._cp2(s, -4, 1),
              o = this._cp3(s, r, 0.882353, -1.94),
              h = this._sub(o, r);
            let c;
            c = this._crossProduct(h, this._sub(n, r)) > 0 ? this._rightPerp(h) : this._leftPerp(h);
            const u = [];
            u.push([r[0] + (c[0] - h[0]) / 3, r[1] + (c[1] - h[1]) / 3]),
              u.push(r),
              u.push(o),
              u.push([o[0] + (c[0] + h[0]) / 3, o[1] + (c[1] + h[1]) / 3]),
              e.push(u);
            break;
          }
          case C.DoublePerpendicular: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 3),
              h = this._mid(n, r),
              c = this._sub(h, o);
            this._normalize(c);
            const u = this._crossProduct(c, this._sub(n, o));
            this._leftPerpendicular(c);
            const f = [];
            f.push(n), f.push([o[0] + c[0] * u, o[1] + c[1] * u]), e.push(f);
            const p = [];
            p.push([o[0] - c[0] * u, o[1] - c[1] * u]), p.push(r), e.push(p);
            break;
          }
          case C.OppositeToFirstSegment: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 3),
              h = this._mid(n, r),
              c = this._sub(h, o);
            this._normalize(c);
            const u = this._crossProduct(c, this._sub(n, o));
            this._leftPerpendicular(c);
            const f = [];
            f.push([o[0] + c[0] * u, o[1] + c[1] * u]),
              f.push([o[0] - c[0] * u, o[1] - c[1] * u]),
              e.push(f);
            break;
          }
          case C.TriplePerpendicular: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 4),
              h = this._mid(n, r),
              c = this._sub(h, o);
            this._normalize(c);
            const u = this._crossProduct(c, this._sub(n, o));
            this._leftPerpendicular(c);
            const f = [];
            f.push([o[0] + c[0] * u * 0.8, o[1] + c[1] * u * 0.8]),
              f.push([h[0] + 0.8 * (n[0] - h[0]), h[1] + 0.8 * (n[1] - h[1])]),
              e.push(f),
              e.push([o, h]);
            const p = [];
            p.push([o[0] - c[0] * u * 0.8, o[1] - c[1] * u * 0.8]),
              p.push([h[0] + 0.8 * (r[0] - h[0]), h[1] + 0.8 * (r[1] - h[1])]),
              e.push(p);
            break;
          }
          case C.HalfCircleFirstSegment: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 4),
              h = this._mid(n, r);
            let c = this._sub(r, n);
            const u = Math.cos(Math.PI / 18),
              f = Math.sin(Math.PI / 18),
              p = Math.sqrt((1 + u) / 2),
              m = Math.sqrt((1 - u) / 2),
              _ = [];
            let d;
            this._crossProduct(c, this._sub(o, n)) > 0
              ? (_.push(n), (c = this._sub(n, h)), (d = r))
              : (_.push(r), (c = this._sub(r, h)), (d = n)),
              this._rotateDirect(c, p, m),
              (c[0] /= p),
              (c[1] /= p);
            for (let g = 1; g <= 18; g++) _.push(this._add(h, c)), this._rotateDirect(c, u, f);
            _.push(d), e.push(_);
            break;
          }
          case C.HalfCircleSecondSegment: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 1, -1);
            let h = this._sub(n, r);
            this._normalize(h);
            const c = this._crossProduct(h, this._sub(o, r)) / 2;
            this._leftPerpendicular(h);
            const u = [r[0] + h[0] * c, r[1] + h[1] * c];
            h = this._sub(r, u);
            const f = Math.cos(Math.PI / 18);
            let p = Math.sin(Math.PI / 18);
            c > 0 && (p = -p);
            const m = [r];
            for (let _ = 1; _ <= 18; _++) this._rotateDirect(h, f, p), m.push(this._add(u, h));
            e.push(m);
            break;
          }
          case C.HalfCircleExtended: {
            const r = this._cp2(s, 0, -2),
              o = this._cp3(s, r, 1, -1);
            let h;
            if (a >= 4) h = s[3];
            else {
              const _ = this._sub(n, r);
              h = this._add(o, _);
            }
            const c = this._dist(r, o) / 2 / 0.75,
              u = this._sub(r, n);
            this._normalize(u, c);
            const f = this._sub(o, h);
            this._normalize(f, c);
            const p = [h, o];
            e.push(p);
            const m = [this._clone(o)];
            this._addBezier3(m, o, this._add(o, f), this._add(r, u), r, 4), m.push(n), e.push(m);
            break;
          }
          case C.OpenCircle: {
            const r = this._cp2(s, -2, 0),
              o = this._sub(r, n),
              h = Math.cos(Math.PI / 18),
              c = -Math.sin(Math.PI / 18),
              u = [r];
            for (let f = 1; f <= 33; f++) this._rotateDirect(o, h, c), u.push(this._add(n, o));
            e.push(u);
            break;
          }
          case C.CoverageEdgesWithTicks: {
            const r = this._cp2(s, 0, -1);
            let o, h;
            if (a >= 3) o = s[2];
            else {
              const p = this._sub(r, n),
                m = this._leftPerp(p);
              o = [n[0] + m[0] - 0.25 * p[0], n[1] + m[1] - 0.25 * p[1]];
            }
            if (a >= 4) h = s[3];
            else {
              const p = this._mid(n, r),
                m = this._sub(n, r);
              this._normalize(m), this._leftPerpendicular(m);
              const _ = this._crossProduct(m, this._sub(o, p));
              this._rightPerpendicular(m), (h = [o[0] + m[0] * _ * 2, o[1] + m[1] * _ * 2]);
            }
            const c = this._sub(r, n);
            let u, f;
            (u =
              this._crossProduct(c, this._sub(o, n)) > 0 ? this._rightPerp(c) : this._leftPerp(c)),
              (f = []),
              f.push(o),
              f.push(n),
              f.push([n[0] + (u[0] - c[0]) / 3, n[1] + (u[1] - c[1]) / 3]),
              e.push(f),
              (u =
                this._crossProduct(c, this._sub(h, r)) > 0
                  ? this._rightPerp(c)
                  : this._leftPerp(c)),
              (f = []),
              f.push([r[0] + (u[0] + c[0]) / 3, r[1] + (u[1] + c[1]) / 3]),
              f.push(r),
              f.push(h),
              e.push(f);
            break;
          }
          case C.GapExtentWithDoubleTicks: {
            const r = this._cp2(s, 0, 2),
              o = this._cp3(s, r, 0, 1);
            let h;
            if (a >= 4) h = s[3];
            else {
              const c = this._sub(r, n);
              h = this._add(o, c);
            }
            this._addAngledTicks(e, n, r, this._mid(o, h)),
              this._addAngledTicks(e, o, h, this._mid(n, r));
            break;
          }
          case C.GapExtentMidline: {
            const r = this._cp2(s, 2, 0),
              o = this._cp3(s, r, 0, 1);
            let h;
            if (a >= 4) h = s[3];
            else {
              const u = this._sub(r, n);
              h = this._add(o, u);
            }
            const c = [];
            c.push(this._mid(n, o)), c.push(this._mid(r, h)), e.push(c);
            break;
          }
          case C.Chevron: {
            const r = this._cp2(s, -1, -1);
            let o;
            if (a >= 3) o = s[2];
            else {
              const h = this._sub(r, n);
              this._leftPerpendicular(h), (o = this._add(n, h));
            }
            e.push([r, this._makeCtrlPt(n), o]);
            break;
          }
          case C.PerpendicularWithArc: {
            const r = this._cp2(s, 0, -2),
              o = this._cp3(s, r, 0.5, -1),
              h = this._sub(r, n),
              c = this._norm(h);
            (h[0] /= c), (h[1] /= c);
            const u = this._crossProduct(h, this._sub(o, n));
            let f = this._dotProduct(h, this._sub(o, n));
            f < 0.05 * c ? (f = 0.05 * c) : f > 0.95 * c && (f = 0.95 * c);
            const p = [n[0] + h[0] * f, n[1] + h[1] * f];
            let m = this._leftPerp(h),
              _ = [];
            if (
              (_.push([p[0] - m[0] * u, p[1] - m[1] * u]),
              _.push([p[0] + m[0] * u, p[1] + m[1] * u]),
              e.push(_),
              a >= 4)
            ) {
              const P = s[3];
              let x = this._dotProduct(h, this._sub(P, n));
              x < 0.1 * c ? (x = 0.1 * c) : x > 0.9 * c && (x = 0.9 * c);
              const b = [n[0] + h[0] * x, n[1] + h[1] * x],
                M = this._crossProduct(h, this._sub(P, n)),
                w = [];
              w.push([b[0] - m[0] * M, b[1] - m[1] * M]),
                w.push([b[0] + m[0] * M, b[1] + m[1] * M]),
                e.push(w);
            }
            const d = [r[0] + m[0] * u, r[1] + m[1] * u];
            m = this._sub(r, d);
            const g = Math.cos(Math.PI / 18);
            let y = Math.sin(Math.PI / 18);
            u < 0 && (y = -y), (_ = [n, r]);
            for (let P = 1; P <= 9; P++) this._rotateDirect(m, g, y), _.push(this._add(d, m));
            e.push(_);
            break;
          }
          case C.ClosedHalfCircle: {
            const r = this._cp2(s, 2, 0),
              o = this._mid(n, r),
              h = this._sub(r, o),
              c = Math.cos(Math.PI / 18),
              u = Math.sin(Math.PI / 18),
              f = [n, r];
            for (let p = 1; p <= 18; p++) this._rotateDirect(h, c, u), f.push(this._add(o, h));
            e.push(f);
            break;
          }
          case C.TripleParallelExtended: {
            const r = this._cp2(s, 0, -2),
              o = this._cp3(s, r, 1, -2),
              h = this._mid(n, r),
              c = this._sub(o, r);
            this._normalize(c);
            const u = Math.abs(this._crossProduct(c, this._sub(h, r))) / 2,
              f = this._dist(r, o),
              p = [r, n];
            p.push([n[0] + c[0] * f * 0.5, n[1] + c[1] * f * 0.5]), e.push(p);
            const m = [];
            m.push([h[0] - c[0] * u, h[1] - c[1] * u]),
              m.push([h[0] + c[0] * f * 0.375, h[1] + c[1] * f * 0.375]),
              Mt(m[m.length - 1], 1),
              m.push([h[0] + c[0] * f * 0.75, h[1] + c[1] * f * 0.75]),
              e.push(m);
            const _ = [r, o];
            e.push(_);
            break;
          }
          case C.ParallelWithTicks: {
            const r = this._cp2(s, 3, 0),
              o = this._cp3(s, r, 0.5, -1),
              h = this._sub(o, r);
            this._normalize(h);
            const c = this._crossProduct(h, this._sub(o, n));
            this._leftPerpendicular(h),
              this._addAngledTicks(e, n, r, o),
              this._addAngledTicks(
                e,
                this._mix(n, 1, h, c),
                this._mix(r, 1, h, c),
                this._mid(n, r),
              );
            break;
          }
          case C.Parallel: {
            const r = this._cp2(s, 3, 0),
              o = this._cp3(s, r, 0.5, -1),
              h = this._sub(r, n);
            this._normalize(h);
            const c = this._leftPerp(h),
              u = this._crossProduct(h, this._sub(o, n));
            let f = [n, r];
            e.push(f),
              (f = []),
              f.push([n[0] + c[0] * u, n[1] + c[1] * u]),
              f.push([r[0] + c[0] * u, r[1] + c[1] * u]),
              e.push(f);
            break;
          }
          case C.PerpendicularToFirstSegment: {
            const r = this._cp2(s, 3, 0),
              o = this._cp3(s, r, 0.5, -1),
              h = this._mid(n, r),
              c = this._sub(r, n);
            this._normalize(c);
            const u = this._crossProduct(c, this._sub(o, n));
            this._leftPerpendicular(c);
            const f = [];
            f.push([h[0] - c[0] * u * 0.25, h[1] - c[1] * u * 0.25]),
              f.push([h[0] + c[0] * u * 1.25, h[1] + c[1] * u * 1.25]),
              e.push(f);
            break;
          }
          case C.ParallelOffset: {
            const r = this._cp2(s, 3, 0),
              o = this._cp3(s, r, 0.5, -1),
              h = this._sub(r, n);
            this._normalize(h);
            const c = this._crossProduct(h, this._sub(o, n));
            this._leftPerpendicular(h);
            const u = [];
            u.push([n[0] - h[0] * c, n[1] - h[1] * c]),
              u.push([r[0] - h[0] * c, r[1] - h[1] * c]),
              e.push(u);
            const f = [];
            f.push([n[0] + h[0] * c, n[1] + h[1] * c]),
              f.push([r[0] + h[0] * c, r[1] + h[1] * c]),
              e.push(f);
            break;
          }
          case C.OffsetOpposite: {
            const r = this._cp2(s, 3, 0),
              o = this._cp3(s, r, 0.5, -1),
              h = this._sub(r, n);
            this._normalize(h);
            const c = this._crossProduct(h, this._sub(o, n));
            this._leftPerpendicular(h);
            const u = [];
            u.push([n[0] - h[0] * c, n[1] - h[1] * c]),
              u.push([r[0] - h[0] * c, r[1] - h[1] * c]),
              e.push(u);
            break;
          }
          case C.OffsetSame: {
            const r = this._cp2(s, 3, 0),
              o = this._cp3(s, r, 0.5, -1),
              h = this._sub(r, n);
            this._normalize(h);
            const c = this._crossProduct(h, this._sub(o, n));
            this._leftPerpendicular(h);
            const u = [];
            u.push([n[0] + h[0] * c, n[1] + h[1] * c]),
              u.push([r[0] + h[0] * c, r[1] + h[1] * c]),
              e.push(u);
            break;
          }
          case C.CircleWithArc: {
            let r = this._cp2(s, 3, 0);
            const o = this._cp3(s, r, 0.5, -1);
            let h, c;
            if (a >= 4) (h = s[3]), (c = this._crossProduct(this._sub(h, r), this._sub(o, r)) > 0);
            else {
              (h = r), (c = this._crossProduct(this._sub(h, n), this._sub(o, n)) > 0);
              const _ = 24 * this._geomUnitsPerPoint,
                d = this._sub(h, n);
              this._normalize(d, _);
              const g = Math.sqrt(2) / 2;
              this._rotateDirect(d, g, c ? g : -g), (r = this._add(n, d));
            }
            const u = this._sub(r, n),
              f = Math.cos(Math.PI / 18),
              p = Math.sin(Math.PI / 18),
              m = [r];
            for (let _ = 1; _ <= 36; _++) this._rotateDirect(u, f, p), m.push(this._add(n, u));
            this._add90DegArc(m, r, h, o, c), Mt(m[m.length - 8], 1), e.push(m);
            break;
          }
          case C.DoubleJog: {
            let r,
              o = this._cp2(s, -3, 1),
              h = this._cp3(s, o, -1, -0.5);
            if (a >= 4) r = s[3];
            else {
              const y = n;
              (n = o), (r = h);
              const P = this._dist(n, y),
                x = this._dist(r, y);
              let b = 30 * this._geomUnitsPerPoint;
              0.5 * P < b && (b = 0.5 * P),
                0.5 * x < b && (b = 0.5 * x),
                (o = this._mix(n, b / P, y, (P - b) / P)),
                (h = this._mix(r, b / x, y, (x - b) / x));
            }
            const c = this._mid(n, o),
              u = this._mid(r, h),
              f = this._dist(n, o),
              p = this._dist(h, r);
            let m = Math.min(f, p) / 8;
            m = Math.min(m, 24 * this._geomUnitsPerPoint);
            const _ = Math.cos(Math.PI / 4);
            let d = this._sub(n, o);
            this._normalize(d, m),
              this._crossProduct(d, this._sub(r, o)) > 0
                ? this._rotateDirect(d, _, -_)
                : this._rotateDirect(d, _, _);
            let g = [];
            g.push(o),
              g.push(this._add(c, d)),
              g.push(this._sub(c, d)),
              g.push(n),
              e.push(g),
              (d = this._sub(r, h)),
              this._normalize(d, m),
              this._crossProduct(d, this._sub(n, h)) < 0
                ? this._rotateDirect(d, _, _)
                : this._rotateDirect(d, _, -_),
              (g = []),
              g.push(h),
              g.push(this._add(u, d)),
              g.push(this._sub(u, d)),
              g.push(r),
              e.push(g);
            break;
          }
          case C.PerpendicularOffset: {
            const r = this._cp2(s, -4, 1),
              o = this._cp3(s, r, 0.882353, -1.94),
              h = this._sub(o, r);
            this._crossProduct(h, this._sub(n, r)) > 0
              ? this._rightPerpendicular(h)
              : this._leftPerpendicular(h);
            const c = [h[0] / 8, h[1] / 8],
              u = this._sub(this._mid(r, o), c);
            e.push([u, n]);
            break;
          }
          case C.LineExcludingLastSegment: {
            const r = this._arrowPath(s),
              o = [];
            let h = r.length - 2;
            for (; h--; ) o.push(r[h]);
            e.push(o);
            break;
          }
          case C.MultivertexArrow: {
            const r = this._arrowPath(s),
              o = [];
            this._addArrow(o, r, !1), e.push(o);
            break;
          }
          case C.CrossedArrow: {
            const r = this._arrowPath(s),
              o = [];
            this._addArrow(o, r, !0), e.push(o);
            break;
          }
          case C.ChevronArrow: {
            const [r, o] = this._arrowLastSeg(s),
              h = 10 * this._geomUnitsPerPoint,
              c = this._sub(n, r),
              u = this._norm(c);
            this._normalize(c);
            const f = this._crossProduct(c, this._sub(o, r));
            let p = this._dotProduct(c, this._sub(o, r));
            p < 0.05 * u ? (p = 0.05 * u) : p > 0.95 * u - h && (p = 0.95 * u - h);
            const m = [r[0] + c[0] * p, r[1] + c[1] * p],
              _ = this._leftPerp(c),
              d = [];
            d.push([m[0] + _[0] * f + c[0] * h, m[1] + _[1] * f + c[1] * h]),
              d.push(n),
              d.push([m[0] - _[0] * f + c[0] * h, m[1] - _[1] * f + c[1] * h]),
              e.push(d);
            break;
          }
          case C.ChevronArrowOffset: {
            const [r, o] = this._arrowLastSeg(s),
              h = this._sub(n, r),
              c = this._norm(h);
            this._normalize(h);
            const u = this._crossProduct(h, this._sub(o, r));
            let f = this._dotProduct(h, this._sub(o, r));
            f < 0.05 * c ? (f = 0.05 * c) : f > 0.95 * c && (f = 0.95 * c);
            const p = [r[0] + h[0] * f, r[1] + h[1] * f];
            this._leftPerpendicular(h);
            const m = [];
            m.push([p[0] + h[0] * u * 0.5, p[1] + h[1] * u * 0.5]),
              m.push(this._mid(p, n)),
              m.push([p[0] - h[0] * u * 0.5, p[1] - h[1] * u * 0.5]),
              e.push(m);
            break;
          }
          case C.PartialFirstSegment: {
            const [r, o] = this._arrowLastSeg(s),
              h = this._sub(n, r),
              c = this._norm(h);
            this._normalize(h);
            let u = this._dotProduct(h, this._sub(o, r));
            u < 0.05 * c ? (u = 0.05 * c) : u > 0.95 * c && (u = 0.95 * c);
            const f = [r[0] + h[0] * u, r[1] + h[1] * u];
            e.push([r, f]);
            break;
          }
          case C.Arch: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 1),
              h = this._sub(n, r),
              c = this._mix(o, 1, h, 0.55),
              u = this._mix(o, 1, h, -0.55),
              f = [n];
            this._addBezier2(f, n, c, o, 4), this._addBezier2(f, o, u, r, 4), e.push(f);
            break;
          }
          case C.CurvedParallelTicks: {
            const r = this._cp2(s, -4, 1),
              o = this._cp3(s, r, 0.882353, -1.94),
              h = this._sub(o, r);
            this._crossProduct(h, this._sub(n, r)) > 0
              ? this._rightPerpendicular(h)
              : this._leftPerpendicular(h);
            const c = [h[0] / 8, h[1] / 8],
              u = this._sub(this._mid(r, o), c),
              f = this._sub(this._mix(r, 0.75, o, 0.25), c),
              p = this._sub(this._mix(r, 0.25, o, 0.75), c),
              m = [r];
            this._addBezier2(m, r, f, u, 3), this._addBezier2(m, u, p, o, 3), e.push(m);
            for (let _ = 0; _ < 8; _++) {
              const d = m[2 * _ + 1],
                g = [this._clone(d)];
              g.push(this._add(d, [h[0] / 4, h[1] / 4])), e.push(g);
            }
            break;
          }
          case C.Arc90Degrees: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 1),
              h = [r];
            this._add90DegArc(h, r, n, o), e.push(h);
            break;
          }
          case C.TipWithPerpendicularAndTicks: {
            const [r, o] = this._arrowLastSeg(s),
              h = 10 * this._geomUnitsPerPoint,
              c = this._sub(n, r),
              u = this._norm(c);
            this._normalize(c);
            let f = this._crossProduct(c, this._sub(o, r)),
              p = this._dotProduct(c, this._sub(o, r));
            p < 0.05 * u ? (p = 0.05 * u) : p > 0.95 * u - h && (p = 0.95 * u - h);
            const m = this._leftPerp(c),
              _ = [n[0] - c[0] * h, n[1] - c[1] * h],
              d = 0.5 * Math.max(u - p - h, h);
            f = Math.abs(f);
            const g = [];
            g.push([_[0] + m[0] * (f + d) - c[0] * d, _[1] + m[1] * (f + d) - c[1] * d]),
              g.push([_[0] + m[0] * f, _[1] + m[1] * f]),
              g.push([_[0] - m[0] * f, _[1] - m[1] * f]),
              g.push([_[0] - m[0] * (f + d) - c[0] * d, _[1] - m[1] * (f + d) - c[1] * d]),
              e.push(g),
              e.push([_, n]);
            break;
          }
          case C.ConcentricCircles: {
            const r = this._cp2(s, 1, 0),
              o = this._cp3(s, r, 2, 0),
              h = Math.cos(Math.PI / 18),
              c = Math.sin(Math.PI / 18);
            let u = this._dist(r, n),
              f = [u, 0],
              p = [];
            for (let m = 0; m <= 36; m++) p.push(this._add(n, f)), this._rotateDirect(f, h, c);
            if ((e.push(p), a >= 4)) {
              p = [];
              const m = s[3];
              (u = this._dist(m, n)), (f = [u, 0]);
              for (let _ = 0; _ <= 36; _++)
                p.push(this._add(n, f)),
                  _ === 0 && (p.push(this._add(n, f)), Mt(p[1], 1)),
                  this._rotateDirect(f, h, c);
              e.push(p);
            }
            (p = []), (u = this._dist(o, n)), (f = [u, 0]);
            for (let m = 0; m <= 36; m++) p.push(this._add(n, f)), this._rotateDirect(f, h, c);
            e.push(p);
            break;
          }
          case C.DoubleJogArrow: {
            n = this._arrowPath(s)[0];
            const [r, o] = this._arrowLastSeg(s),
              h = this._sub(n, r),
              c = this._norm(h);
            this._normalize(h);
            const u = Math.abs(this._crossProduct(h, this._sub(o, n)));
            let f = Math.abs(this._dotProduct(h, this._sub(o, n)));
            f < 0.05 * c ? (f = 0.05 * c) : f > 0.95 * c && (f = 0.95 * c);
            const p = Math.max(u, f),
              m = this._leftPerp(h);
            let _ = [];
            const d = [
              n[0] - h[0] * f * 0.5 + m[0] * u * 0.5,
              n[1] - h[1] * f * 0.5 + m[1] * u * 0.5,
            ];
            _.push([d[0], d[1]]),
              (d[0] += h[0] * p * 0.5 + m[0] * p * 0.4),
              (d[1] += h[1] * p * 0.5 + m[1] * p * 0.4),
              _.push([d[0], d[1]]),
              (d[0] -= m[0] * p * 0.25),
              (d[1] -= m[1] * p * 0.25),
              _.push([d[0], d[1]]),
              (d[0] += h[0] * p * 0.5 + m[0] * p * 0.4),
              (d[1] += h[1] * p * 0.5 + m[1] * p * 0.4),
              _.push([d[0], d[1]]),
              e.push(_),
              (_ = []),
              (d[0] = n[0] - h[0] * f * 0.5 - m[0] * u * 0.5),
              (d[1] = n[1] - h[1] * f * 0.5 - m[1] * u * 0.5),
              _.push([d[0], d[1]]),
              (d[0] += h[0] * p * 0.5 - m[0] * p * 0.4),
              (d[1] += h[1] * p * 0.5 - m[1] * p * 0.4),
              _.push([d[0], d[1]]),
              (d[0] += m[0] * p * 0.25),
              (d[1] += m[1] * p * 0.25),
              _.push([d[0], d[1]]),
              (d[0] += h[0] * p * 0.5 - m[0] * p * 0.4),
              (d[1] += h[1] * p * 0.5 - m[1] * p * 0.4),
              _.push([d[0], d[1]]),
              e.push(_);
            break;
          }
          case C.LinkedChevrons: {
            const r = this._cp2(s, -5, 0),
              o = this._cp3(s, r, -0.2, 1),
              h = this._sub(n, r);
            this._normalize(h);
            const c = this._leftPerp(h),
              u = Math.abs(this._crossProduct(h, this._sub(o, r)));
            e.push([r, n]);
            const f = [];
            f.push([n[0] - h[0] * u + c[0] * u, n[1] - h[1] * u + c[1] * u]),
              f.push(n),
              f.push([n[0] - h[0] * u - c[0] * u, n[1] - h[1] * u - c[1] * u]),
              e.push(f),
              this._addDash(e, r, [-h[0] * u + c[0] * u, -h[1] * u + c[1] * u]),
              this._addDash(e, r, [-h[0] * u - c[0] * u, -h[1] * u - c[1] * u]);
            break;
          }
          case C.SegmentThenHalfCircle: {
            const r = this._cp2(s, 2, 0),
              o = this._cp3(s, r, 1.5, 0);
            let h;
            h = a >= 4 ? s[3] : this._cp3(s, r, 1.25, -0.5);
            const c = this._sub(r, n);
            this._normalize(c);
            const u = 0.5 * this._dist(r, o),
              f = this._crossProduct(c, this._sub(h, n)) > 0,
              p = Math.cos(Math.PI / 18);
            let m = Math.sin(Math.PI / 18);
            f && (m = -m);
            const _ = [n, r];
            (c[0] *= u), (c[1] *= u);
            const d = this._add(r, c);
            (c[0] = -c[0]), (c[1] = -c[1]);
            for (let g = 1; g <= 18; g++) this._rotateDirect(c, p, m), _.push(this._add(d, c));
            e.push(_);
            break;
          }
          case C.LineWithStraightTicks: {
            const r = this._cp2(s, -2, 1),
              o = this._cp3(s, r, -1, -0.5),
              h = this._sub(o, r);
            this._normalize(h);
            const c = this._dotProduct(h, this._sub(r, n)),
              u = this._dotProduct(h, this._sub(o, n));
            let f = [n];
            f.push([n[0] + h[0] * c, n[1] + h[1] * c]),
              f.push(r),
              e.push(f),
              (f = [n]),
              f.push([n[0] + h[0] * u, n[1] + h[1] * u]),
              f.push(o),
              e.push(f);
            break;
          }
          case C.DoubleCurve: {
            const r = this._cp2(s, -5, -1),
              o = this._cp3(s, r, 2, 0),
              h = Math.atan2(1, 5),
              c = Math.cos(h),
              u = Math.sin(h),
              f = this._sub(r, n),
              p = this._dist(n, r);
            this._normalize(f), this._rotateDirect(f, c, -u);
            const m = [n];
            m.push([n[0] + f[0] * p * 0.5, n[1] + f[1] * p * 0.5]),
              Mt(m[1], 1),
              m.push([n[0] + f[0] * p * 0.8, n[1] + f[1] * p * 0.8]),
              this._addBezier2(m, m[2], [n[0] + f[0] * p, n[1] + f[1] * p], r, 3);
            const _ = this._sub(o, r),
              d = this._dist(r, o);
            this._normalize(_),
              this._rotateDirect(_, c, -u),
              this._addBezier2(
                m,
                r,
                [o[0] - _[0] * d, o[1] - _[1] * d],
                [o[0] - _[0] * d * 0.8, o[1] - _[1] * d * 0.8],
                3,
              ),
              m.push(o),
              e.push(m);
            break;
          }
          case C.ParallelWithTicksByWidth: {
            const r = this._cp2(s, 0, -1),
              o = this._cp3(s, r, 0.5, 3),
              h = this._sub(r, n);
            this._normalize(h);
            const c = this._crossProduct(h, this._sub(o, n));
            this._leftPerpendicular(h),
              c > 0
                ? (this._addAngledTicks(e, n, [n[0] + h[0] * c, n[1] + h[1] * c], r),
                  this._addAngledTicks(e, r, [r[0] + h[0] * c, r[1] + h[1] * c], n))
                : (this._addAngledTicks(e, [n[0] + h[0] * c, n[1] + h[1] * c], n, r),
                  this._addAngledTicks(e, [r[0] + h[0] * c, r[1] + h[1] * c], n, r));
            break;
          }
          case C.EnclosingRoundedRectangle: {
            const r = this._cp2(s, 3, -2),
              o = [Math.min(n[0], r[0]), Math.max(n[1], r[1])],
              h = [Math.max(n[0], r[0]), Math.min(n[1], r[1])],
              c = h[0] - o[0],
              u = o[1] - h[1],
              f = Math.min(c, u) / 10,
              p = [];
            p.push([o[0] + f + 0.75 * (c - 2 * f), o[1]]),
              p.push([h[0] - f, o[1]]),
              this._add90DegArc(p, [h[0] - f, o[1]], [h[0], o[1] - f], [h[0], o[1]]),
              p.push([h[0], h[1] + f]),
              this._add90DegArc(p, [h[0], h[1] + f], [h[0] - f, h[1]], h),
              p.push([o[0] + f, h[1]]),
              this._add90DegArc(p, [o[0] + f, h[1]], [o[0], h[1] + f], [o[0], h[1]]),
              p.push([o[0], o[1] - f]),
              this._add90DegArc(p, [o[0], o[1] - f], [o[0] + f, o[1]], o),
              p.push([o[0] + f + 0.75 * (c - 2 * f), o[1]]);
            break;
          }
          case C.FullGeometry:
          default:
            e.push(s);
        }
      }
      return e;
    }
  },
  Ks = class Et {
    static local() {
      return Et.instance === null && (Et.instance = new Et()), Et.instance;
    }
    execute(t, e, s, i, a) {
      return new jr(t, e, s);
    }
  };
Ks.instance = null;
let jr = class extends ve {
  constructor(t, e, s) {
    super(t, !0, !0),
      (this._curveHelper = new it()),
      (this._beginCut = (e.beginCut !== void 0 ? e.beginCut : 1) * s),
      (this._endCut = (e.endCut !== void 0 ? e.endCut : 1) * s),
      (this._middleCut = (e.middleCut !== void 0 ? e.middleCut : 0) * s),
      (this._invert = e.invert !== void 0 && e.invert),
      this._beginCut < 0 && (this._beginCut = 0),
      this._endCut < 0 && (this._endCut = 0),
      this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t) {
    const { _beginCut: e, _endCut: s, _middleCut: i } = this,
      a = t.pathLength(),
      n = z.createEmptyOptimizedCIM('esriGeometryPolyline');
    if (this._invert) {
      if (e !== 0 || s !== 0 || i !== 0)
        if (e + s + i >= a) for (n.startPath(); t.nextPoint(); ) n.pushXY(t.x, t.y);
        else
          this._curveHelper.appendSubCurve(n, t, 0, e),
            this._curveHelper.appendSubCurve(n, t, 0.5 * (a - i), 0.5 * (a + i)),
            this._curveHelper.appendSubCurve(n, t, a - s, s);
    } else if (e === 0 && s === 0 && i === 0)
      for (n.startPath(); t.nextPoint(); ) n.pushXY(t.x, t.y);
    else
      e + s + i < a &&
        (i === 0
          ? this._curveHelper.appendSubCurve(n, t, e, a - s)
          : (this._curveHelper.appendSubCurve(n, t, e, 0.5 * (a - i)),
            this._curveHelper.appendSubCurve(n, t, 0.5 * (a + i), a - s)));
    return n.totalSize === 0 ? null : n;
  }
};
const Ss = 1e-7;
let Ie = class {
    constructor() {
      (this._values = []),
        (this.extPtGap = 0),
        (this.ctrlPtGap = 0),
        (this._length = 0),
        (this._currentValue = 0);
    }
    isEmpty() {
      return this._values.length === 0;
    }
    size() {
      return this._values.length;
    }
    init(t, e, s = !0) {
      if ((this._setEmpty(), !t || t.length === 0)) return !1;
      for (let i = 0; i < t.length; i++) {
        let a = Math.abs(t[i]);
        s && a < Ss && (a = Ss), this._values.push(a), (this._length += a);
      }
      return (
        e && 1 & t.length && (this._length *= 2),
        this._length !== 0 && ((this.ctrlPtGap = this.extPtGap = 0), (this._currentValue = -1), !0)
      );
    }
    scale(t) {
      const e = this._values ? this._values.length : 0;
      for (let s = 0; s < e; ++s) this._values[s] *= t;
      (this._length *= t), (this.extPtGap *= t), (this.ctrlPtGap *= t);
    }
    addValue(t) {
      (this._length += t), this._values.push(t);
    }
    firstValue() {
      return this._values[0];
    }
    lastValue() {
      return this._values[this._values.length - 1];
    }
    nextValue() {
      return (
        this._currentValue++,
        this._currentValue === this._values.length && (this._currentValue = 0),
        this._values[this._currentValue]
      );
    }
    reset() {
      this._currentValue = -1;
    }
    length() {
      return this._length;
    }
    _setEmpty() {
      (this.extPtGap = this.ctrlPtGap = this._length = 0),
        (this._currentValue = -1),
        (this._values.length = 0);
    }
  },
  tt = class {
    constructor() {
      (this.pt = null), (this.ca = 0), (this.sa = 0);
    }
  };
var nt;
(function (l) {
  (l[(l.FAIL = 0)] = 'FAIL'), (l[(l.END = 1)] = 'END'), (l[(l.CONTINUE = 2)] = 'CONTINUE');
})(nt || (nt = {}));
let ue = class {
    constructor() {
      this.reset();
    }
    reset() {
      (this.segment = null),
        (this.segmentLength = 0),
        (this.abscissa = 0),
        (this.isPathEnd = !1),
        (this.isPartEnd = !1);
    }
    isValid() {
      return this.segment !== null;
    }
    copyTo(t) {
      (t.segment = this.segment),
        (t.segmentLength = this.segmentLength),
        (t.abscissa = this.abscissa),
        (t.isPathEnd = this.isPathEnd),
        (t.isPartEnd = this.isPartEnd);
    }
  },
  ze = class extends it {
    constructor(t = 0, e = !1) {
      super(t, e), (this._tolerance = ee), (this._currentPosition = new ue());
    }
    updateTolerance(t) {
      this._tolerance = ee * t;
    }
    init(t, e, s = !0) {
      return (
        s
          ? ((this._patternLength = e.length()),
            (this._partExtPtGap = e.extPtGap),
            (this._partCtrlPtGap = e.ctrlPtGap))
          : ((this._patternLength = 0), (this._partExtPtGap = 0), (this._partCtrlPtGap = 0)),
        this._currentPosition.reset(),
        (this._partSegCount = 0),
        (this._pathCursor = t),
        (this._seg = -1),
        this._setPosAtNextPart()
      );
    }
    curPositionIsValid() {
      return this._currentPosition.isValid();
    }
    nextPosition(t, e = nt.FAIL) {
      const s = new ue();
      return !!this._nextPosition(t, s, null, e) && (s.copyTo(this._currentPosition), !0);
    }
    curPointAndAngle(t) {
      t.pt = this._getPoint(this._currentPosition);
      const [e, s] = this._getAngleCS(this._currentPosition);
      (t.ca = e), (t.sa = s);
    }
    nextPointAndAngle(t, e, s = nt.FAIL) {
      const i = new ue();
      if (!this._nextPosition(t, i, null, s)) return !1;
      i.copyTo(this._currentPosition), (e.pt = this._getPoint(i));
      const [a, n] = this._getAngleCS(i);
      return (e.ca = a), (e.sa = n), !0;
    }
    nextCurve(t) {
      if (t === 0) return null;
      const e = z.createEmptyOptimizedCIM('esriGeometryPolyline');
      e.startPath(), e.nextPath();
      const s = new ue();
      return this._nextPosition(t, s, e, nt.END) ? (s.copyTo(this._currentPosition), e) : null;
    }
    isPathEnd() {
      return this._currentPosition.isPathEnd;
    }
    getPathEnd() {
      return this._currentPosition.segment[1];
    }
    getPt(t) {
      return this._pathCursor.seekInPath(t), [this._pathCursor.x, this._pathCursor.y];
    }
    getSeg(t) {
      return [this.getPt(t), this.getPt(t + 1)];
    }
    _nextPosition(t, e, s, i) {
      if (this._currentPosition.isPathEnd) return !1;
      let a = this._currentPosition.abscissa;
      for (
        this._currentPosition.segmentLength > 0 && (a /= this._currentPosition.segmentLength),
          this._currentPosition.copyTo(e);
        e.abscissa + t * this._partLengthRatio > e.segmentLength + this._tolerance;

      ) {
        if (s) {
          if (s.pathSize === 0)
            if (a === 0) {
              const r = e.segment[0];
              s.pushXY(r[0], r[1]);
            } else s.pushPoint(this.getSegCoord2D(e.segment, a));
          const n = e.segment[1];
          s.pushXY(n[0], n[1]);
        }
        if (
          ((a = 0),
          (t -= (e.segmentLength - e.abscissa) / this._partLengthRatio),
          this._partSegCount)
        )
          (e.segment = this._nextSegment()),
            (e.segmentLength = this.getSegLength(e.segment)),
            (e.abscissa = 0),
            this._partSegCount--;
        else {
          if (!this._setPosAtNextPart())
            return (
              i !== nt.FAIL &&
              ((e.segmentLength = this.getSegLength(e.segment)),
              (e.isPartEnd = !0),
              i === nt.END
                ? ((e.abscissa = e.segmentLength), (e.isPathEnd = !0))
                : (e.abscissa = e.segmentLength + t),
              !0)
            );
          this._currentPosition.copyTo(e);
        }
      }
      if (((e.abscissa += t * this._partLengthRatio), s)) {
        s.pathSize === 0 &&
          (a === 0 ? s.pushPoint(e.segment[0]) : s.pushPoint(this.getSegCoord2D(e.segment, a)));
        const n = e.abscissa / e.segmentLength;
        n === 1 ? s.pushPoint(e.segment[1]) : s.pushPoint(this.getSegCoord2D(e.segment, n));
      }
      return (
        this._partSegCount ||
          (Math.abs(e.abscissa - e.segmentLength) < this._tolerance &&
            ((e.isPathEnd = this._partIsLast), (e.isPartEnd = !0))),
        !0
      );
    }
    _getPoint(t) {
      const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
      return this.getSegCoord2D(this._currentPosition.segment, e);
    }
    _getAngleCS(t) {
      const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
      return this.getSegAngleCS(this._currentPosition.segment, e);
    }
    _setPosAtNextPart() {
      for (; this._partSegCount; )
        this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
      if (!this._hasNextSegment()) return !1;
      for (
        this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0;
        this._hasNextSegment();

      )
        if (
          ((this._partLength += this.getSegLength(this._nextSegment())),
          this._partSegCount++,
          this._pathCursor.getControlPointAt(this._getEndPointIndex()))
        ) {
          this._partIsLast = !this._hasNextSegment();
          break;
        }
      let t = this._partSegCount;
      for (; t; ) this._previousSegment(), --t;
      (this._currentPosition.segment = this._nextSegment()),
        (this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment)),
        (this._currentPosition.abscissa = 0),
        (this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = !1),
        --this._partSegCount;
      const e = this._getStartPointIndex();
      this._ctrlPtBegin = this._pathCursor.getControlPointAt(e);
      let s = e + this._partSegCount + 1;
      if (
        (s >= this._pathCursor.pathSize && (s = 0),
        (this._ctrlPtEnd = this._pathCursor.getControlPointAt(s)),
        this._patternLength > 0)
      ) {
        const i = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap,
          a = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
        let n = Math.round((this._partLength - (i + a)) / this._patternLength);
        n <= 0 && (n = i + a > 0 ? 0 : 1),
          (this._partLengthRatio = this._partLength / (i + a + n * this._patternLength)),
          this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
      } else this._partLengthRatio = 1;
      return !0;
    }
    _hasNextSegment() {
      return this._seg < this._pathCursor.pathSize - 2;
    }
    _previousSegment() {
      return this.getSeg(--this._seg);
    }
    _nextSegment() {
      return this.getSeg(++this._seg);
    }
    _getStartPointIndex() {
      return this._seg;
    }
    _getEndPointIndex() {
      return this._seg + 1;
    }
  },
  Qs = class Rt {
    static local() {
      return Rt.instance === null && (Rt.instance = new Rt()), Rt.instance;
    }
    execute(t, e, s, i, a) {
      return new Zr(t, e, s);
    }
  };
Qs.instance = null;
let Zr = class extends ve {
    constructor(t, e, s) {
      super(t, !0, !0),
        (this._firstCurve = null),
        (this._walker = new ze()),
        this._walker.updateTolerance(s),
        (this._endings = e.lineDashEnding),
        (this._customDashPos = -(e.offsetAlongLine ?? 0) * s),
        (this._offsetAtEnd = (e.customEndingOffset ?? 0) * s);
      let i = Ri(e).dashTemplate;
      i == null && (i = []),
        i.length % 2 && (i = [...i, ...i]),
        (this._pattern = new Ie()),
        this._pattern.init(i, !0),
        this._pattern.scale(s);
    }
    processPath(t) {
      if (this._pattern.length() === 0) {
        this.iteratePath = !1;
        const i = ft(t);
        return z.fromJSONCIM({ paths: [i] });
      }
      if (!this.iteratePath) {
        let i = !0;
        switch (this._endings) {
          case E.HalfPattern:
          case E.HalfGap:
          default:
            this._pattern.extPtGap = 0;
            break;
          case E.FullPattern:
            this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
            break;
          case E.FullGap:
            this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
            break;
          case E.NoConstraint:
            this.isClosed || (i = !1);
            break;
          case E.Custom:
            this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
        }
        const a = t.pathLength();
        if (this._pattern.isEmpty() || a < 0.1 * this._pattern.length()) {
          const n = ft(t);
          return z.fromJSONCIM({ paths: [n] });
        }
        if (!this._walker.init(t, this._pattern, i)) {
          const n = ft(t);
          return z.fromJSONCIM({ paths: [n] });
        }
      }
      let e;
      if (this.iteratePath) e = this._pattern.nextValue();
      else {
        let i;
        switch (this._endings) {
          case E.HalfPattern:
          default:
            i = 0.5 * this._pattern.firstValue();
            break;
          case E.HalfGap:
            i = 0.5 * -this._pattern.lastValue();
            break;
          case E.FullGap:
            i = -this._pattern.lastValue();
            break;
          case E.FullPattern:
            i = 0;
            break;
          case E.NoConstraint:
          case E.Custom:
            i = -this._customDashPos;
        }
        let a = i / this._pattern.length();
        (a -= Math.floor(a)),
          (i = a * this._pattern.length()),
          this._pattern.reset(),
          (e = this._pattern.nextValue());
        let n = !1;
        for (; i >= e; ) (i -= e), (e = this._pattern.nextValue()), (n = !n);
        (e -= i),
          n
            ? (this._walker.nextPosition(e), (e = this._pattern.nextValue()))
            : this.isClosed &&
              ((this._firstCurve = this._walker.nextCurve(e)),
              (e = this._pattern.nextValue()),
              this._walker.nextPosition(e),
              (e = this._pattern.nextValue()));
      }
      let s = this._walker.nextCurve(e);
      if (s)
        if (this._walker.isPathEnd()) {
          if (((this.iteratePath = !1), this._firstCurve)) {
            for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); )
              s.pushXY(this._firstCurve.x, this._firstCurve.y);
            this._firstCurve = null;
          }
        } else
          (e = this._pattern.nextValue()),
            !this._walker.nextPosition(e) || this._walker.isPathEnd()
              ? ((this.iteratePath = !1),
                this._firstCurve && (s.pushCursor(this._firstCurve), (this._firstCurve = null)))
              : (this.iteratePath = !0);
      else (this.iteratePath = !1), (s = this._firstCurve), (this._firstCurve = null);
      return s == null || s.reset(), s;
    }
  },
  ti = class Gt {
    static local() {
      return Gt.instance === null && (Gt.instance = new Gt()), Gt.instance;
    }
    execute(t, e, s, i, a, n, r) {
      return new Kr(t, e, s, i, a, n, r);
    }
  };
ti.instance = null;
let Kr = class {
    constructor(t, e, s, i, a, n, r) {
      switch (
        ((this._preventClipping = r),
        (this._inputGeometries = t),
        (this._tileKey = i),
        (this._geometryEngine = a),
        (this._maxInflateSize = n * s),
        (this._width = (e.width !== void 0 ? e.width : 2) * s),
        e.method)
      ) {
        case Pt.Mitered:
        case Pt.Bevelled:
        case Pt.Rounded:
        case Pt.TrueBuffer:
        case Pt.Square:
      }
      this._option = e.option;
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        if (t.geometryType === 'esriGeometryEnvelope' && this._width > 0) {
          const e = t.asJSON();
          return Math.min(e.xmax - e.xmin, e.ymax - e.ymin) - 2 * this._width < 0
            ? t
            : z.fromJSONCIM({
                paths: [
                  [
                    [e.xmin + this._width, e.ymin + this._width],
                    [e.xmax - this._width, e.ymin + this._width],
                    [e.xmax - this._width, e.ymax - this._width],
                    [e.xmin + this._width, e.ymax - this._width],
                    [e.xmin + this._width, e.ymin + this._width],
                  ],
                  [
                    [e.xmin, e.ymin],
                    [e.xmin, e.ymax],
                    [e.xmax, e.ymax],
                    [e.xmax, e.ymin],
                    [e.xmin, e.ymin],
                  ],
                ],
              });
        }
        if (t.geometryType === 'esriGeometryPolygon') {
          if (this._width === 0) return t.clone();
          const e = this._geometryEngine;
          if (e == null) return null;
          const s =
            !this._preventClipping && this._tileKey ? es(t, this._maxInflateSize) : t.clone();
          if (!s) continue;
          const i = e.buffer(je.WebMercator, s.asJSON(), -this._width, 1);
          if (i) {
            for (const a of i.rings)
              if (a) {
                s.startPath();
                for (const n of a.reverse()) s.pushXY(n[0], s.yFactor * n[1]);
              }
          }
          return s;
        }
      }
      return null;
    }
  },
  ei = class Ot {
    static local() {
      return Ot.instance === null && (Ot.instance = new Ot()), Ot.instance;
    }
    execute(t, e, s, i, a) {
      return new Qr(t, e, s);
    }
  };
ei.instance = null;
let Qr = class extends ve {
    constructor(t, e, s) {
      super(t, !1, !0),
        (this._curveHelper = new it()),
        (this._length = (e.length !== void 0 ? e.length : 20) * s),
        (this._angle = e.angle !== void 0 ? e.angle : 225),
        (this._position = e.position !== void 0 ? e.position : 50),
        this._length < 0 && (this._length = -this._length),
        this._position < 20 && (this._position = 20),
        this._position > 80 && (this._position = 80),
        (this._mirror = !1);
    }
    processPath(t) {
      const e = z.createEmptyOptimizedCIM('esriGeometryPolyline');
      if (this._curveHelper.isEmpty(t)) return null;
      t.seekInPath(0);
      const s = t.x,
        i = t.y;
      t.seekInPath(t.pathSize - 1);
      const a = t.x,
        n = t.y,
        r = [a - s, n - i];
      this._curveHelper.normalize(r);
      const o = s + ((a - s) * this._position) / 100,
        h = i + ((n - i) * this._position) / 100,
        c = Math.cos(((90 - this._angle) / 180) * Math.PI);
      let u = Math.sin(((90 - this._angle) / 180) * Math.PI);
      this._mirror && (u = -u), (this._mirror = !this._mirror);
      const f = [o - (this._length / 2) * c, h - (this._length / 2) * u],
        p = [o + (this._length / 2) * c, h + (this._length / 2) * u];
      return e.pushPath([[s, i], f, p, [a, n]]), e;
    }
  },
  si = class Ft {
    static local() {
      return Ft.instance === null && (Ft.instance = new Ft()), Ft.instance;
    }
    execute(t, e, s, i, a) {
      return new tn(t, e, s);
    }
  };
si.instance = null;
let tn = class {
  constructor(t, e, s) {
    (this._inputGeometries = t),
      (this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0),
      (this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.totalSize > 0) return this._move(t.clone(), this._offsetX, this._offsetY);
      t = this._inputGeometries.next();
    }
    return null;
  }
  _move(t, e, s) {
    for (; t.nextPath(); ) for (; t.nextPoint(); ) (t.x = t.x + e), (t.y = t.y + s);
    return t.reset(), t;
  }
};
const en = 10;
let ii = class Nt {
  static local() {
    return Nt.instance === null && (Nt.instance = new Nt()), Nt.instance;
  }
  execute(t, e, s, i, a, n, r) {
    return new sn(t, e, s, i, a, n, r);
  }
};
ii.instance = null;
let sn = class {
    constructor(t, e, s, i, a, n, r) {
      (this._preventClipping = r),
        (this._inputGeometries = t),
        (this._tileKey = i),
        (this._geometryEngine = a),
        (this._curveHelper = new it()),
        (this._offset = (e.offset ?? 1) * s),
        (this._method = e.method),
        (this._maxInflateSize = Math.max(Math.abs(n * s), en)),
        (this._option = e.option),
        (this._offsetFlattenError = ee * s);
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        if (this._offset === 0) return t.clone();
        if (t.geometryType === 'esriGeometryEnvelope') {
          if (this._method === ct.Rounded && this._offset > 0) {
            const n = ft(t),
              r = this._curveHelper.offset(
                n,
                -this._offset,
                this._method,
                4,
                this._offsetFlattenError,
              );
            if (r) {
              const o = z.createEmptyOptimizedCIM(t.geometryType);
              return o.pushPath(r), o;
            }
            return null;
          }
          const a = t.asJSON();
          if (N(a) && Math.min(a.xmax - a.xmin, a.ymax - a.ymin) + 2 * this._offset > 0)
            return z.fromJSONCIM({
              xmin: a.xmin - this._offset,
              xmax: a.xmax + this._offset,
              ymin: a.ymin - this._offset,
              ymax: a.ymax + this._offset,
            });
        }
        const e = this._geometryEngine;
        if (e == null) continue;
        const s = !this._preventClipping && this._tileKey ? es(t, this._maxInflateSize) : t.clone();
        if (!s) continue;
        const i = e.offset(
          je.WebMercator,
          s.asJSON(),
          -this._offset,
          1,
          this._method,
          4,
          this._offsetFlattenError,
        );
        return i ? z.fromJSONCIM(i) : null;
      }
      return null;
    }
  },
  ri = class Dt {
    static local() {
      return Dt.instance === null && (Dt.instance = new Dt()), Dt.instance;
    }
    execute(t, e, s, i, a) {
      return new rn(t, e, s);
    }
  };
ri.instance = null;
let rn = class {
  constructor(t, e, s) {
    (this._inputGeometries = t), (this._reverse = e.reverse === void 0 || e.reverse);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (!this._reverse) return t;
      if (t.geometryType === 'esriGeometryPolyline') return nn(t.clone());
      t = this._inputGeometries.next();
    }
    return null;
  }
};
function nn(l) {
  for (; l.nextPath(); )
    for (let t = 0; t < l.pathSize / 2; t++) {
      l.seekInPath(t);
      const e = l.x,
        s = l.y;
      l.seekInPath(l.pathSize - t - 1);
      const i = l.x,
        a = l.y;
      (l.x = e), (l.y = s), l.seekInPath(t), (l.x = i), (l.y = a);
    }
  return l.reset(), l;
}
let ni = class Xt {
  static local() {
    return Xt.instance === null && (Xt.instance = new Xt()), Xt.instance;
  }
  execute(t, e, s, i, a) {
    return new an(t, e, s);
  }
};
ni.instance = null;
let an = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._rotateAngle = e.angle !== void 0 ? (e.angle * Math.PI) / 180 : 0);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (this._rotateAngle === 0 || t.geometryType === 'esriGeometryPoint') return t;
        if (t.totalSize > 0) {
          const e = ke(t),
            s = (e[2] + e[0]) / 2,
            i = (e[3] + e[1]) / 2;
          return t.reset(), this._rotate(t.clone(), s, i);
        }
        t = this._inputGeometries.next();
      }
      return null;
    }
    _rotate(t, e, s) {
      const i = Math.cos(this._rotateAngle),
        a = Math.sin(this._rotateAngle);
      for (; t.nextPath(); )
        for (; t.nextPoint(); ) {
          const n = t.x - e,
            r = t.y - s;
          (t.x = e + n * i - r * a), (t.y = s + n * a + r * i);
        }
      return t.reset(), t;
    }
  },
  ai = class Ht {
    static local() {
      return Ht.instance === null && (Ht.instance = new Ht()), Ht.instance;
    }
    execute(t, e, s, i, a) {
      return new on(t, e, s);
    }
  };
ai.instance = null;
let on = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._xFactor = e.xScaleFactor !== void 0 ? e.xScaleFactor : 1.15),
        (this._yFactor = e.yScaleFactor !== void 0 ? e.yScaleFactor : 1.15);
    }
    next() {
      const t = this._inputGeometries.next();
      if (t) {
        if ((this._xFactor === 1 && this._yFactor === 1) || t.geometryType === 'esriGeometryPoint')
          return t;
        if (t.totalSize > 0) {
          const e = ke(t),
            s = (e[2] + e[0]) / 2,
            i = (e[3] + e[1]) / 2;
          return t.reset(), this._scaleCursor(t.clone(), s, i);
        }
      }
      return null;
    }
    _scaleCursor(t, e, s) {
      for (; t.nextPath(); )
        for (; t.nextPoint(); )
          (t.x = e + (t.x - e) * this._xFactor), (t.y = s + (t.y - s) * this._yFactor);
      return t.reset(), t;
    }
  },
  oi = class Bt {
    static local() {
      return Bt.instance === null && (Bt.instance = new Bt()), Bt.instance;
    }
    execute(t, e, s, i, a) {
      return new hn(t, e, s);
    }
  };
oi.instance = null;
let hn = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._height = (e.amplitude !== void 0 ? e.amplitude : 2) * s),
        (this._period = (e.period !== void 0 ? e.period : 3) * s),
        (this._style = e.waveform),
        this._height <= 0 && (this._height = Math.abs(this._height)),
        this._period <= 0 && (this._period = Math.abs(this._period)),
        (this._pattern = new Ie()),
        this._pattern.addValue(this._period),
        this._pattern.addValue(this._period),
        (this._walker = new ze()),
        this._walker.updateTolerance(s);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (this._height === 0 || this._period === 0) return t;
        const e = this._processGeom(t);
        if (e) return e;
        t = this._inputGeometries.next();
      }
      return null;
    }
    _processGeom(t) {
      const e = z.createEmptyOptimizedCIM(t.geometryType);
      for (; t.nextPath(); ) {
        e.startPath();
        const s = t.pathLength();
        if (this._walker.init(t, this._pattern))
          switch (this._style) {
            case ie.Sinus:
            default:
              this._constructCurve(e, s, !1);
              break;
            case ie.Square:
              this._constructSquare(e, s);
              break;
            case ie.Triangle:
              this._constructTriangle(e, s);
              break;
            case ie.Random:
              this._constructCurve(e, s, !0);
          }
        else for (; t.nextPoint(); ) e.pushXY(t.x, t.y);
      }
      return e;
    }
    _constructCurve(t, e, s) {
      let i = Math.round(e / this._period);
      i === 0 && (i = 1);
      const a = i * 16 + 1,
        n = e / i,
        r = this._period / 16,
        o = 1 / a,
        h = (2 * Math.PI * e) / n,
        c = 2 * Math.PI * Math.random(),
        u = 2 * Math.PI * Math.random(),
        f = 2 * Math.PI * Math.random(),
        p = 0.75 - Math.random() / 2,
        m = 0.75 - Math.random() / 2,
        _ = new tt();
      this._walker.curPointAndAngle(_), t.pushPoint(_.pt);
      let d = 0;
      for (;;) {
        if (!this._walker.nextPointAndAngle(r, _)) {
          t.pushPoint(this._walker.getPathEnd());
          break;
        }
        {
          const g = d;
          let y;
          if (((d += o), s)) {
            const P = (this._height / 2) * (1 + 0.3 * Math.sin(p * h * g + c));
            (y = P * Math.sin(h * g + u)), (y += P * Math.sin(m * h * g + f)), (y /= 2);
          } else y = 0.5 * this._height * Math.sin(0.5 * h * g);
          t.pushXY(_.pt[0] - y * _.sa, _.pt[1] + y * _.ca);
        }
      }
    }
    _constructSquare(t, e) {
      Math.round(e / this._period);
      let s = !0;
      for (;;) {
        let i = !1;
        if (this._walker.curPositionIsValid()) {
          const a = new tt();
          this._walker.curPointAndAngle(a);
          const n = new tt();
          if (this._walker.nextPointAndAngle(this._period, n)) {
            const r = new tt();
            this._walker.nextPointAndAngle(this._period, r) &&
              (s ? (t.pushPoint(a.pt), (s = !1)) : t.pushPoint(a.pt),
              t.pushXY(a.pt[0] - (this._height / 2) * a.sa, a.pt[1] + (this._height / 2) * a.ca),
              t.pushXY(n.pt[0] - (this._height / 2) * n.sa, n.pt[1] + (this._height / 2) * n.ca),
              t.pushXY(n.pt[0] + (this._height / 2) * n.sa, n.pt[1] - (this._height / 2) * n.ca),
              t.pushXY(r.pt[0] + (this._height / 2) * r.sa, r.pt[1] - (this._height / 2) * r.ca),
              (i = !0));
          }
        }
        if (!i) {
          t.pushPoint(this._walker.getPathEnd());
          break;
        }
      }
    }
    _constructTriangle(t, e) {
      Math.round(e / this._period);
      let s = !0;
      for (;;) {
        let i = !1;
        if (this._walker.curPositionIsValid()) {
          const a = new tt();
          this._walker.curPointAndAngle(a);
          const n = new tt();
          if (this._walker.nextPointAndAngle(this._period / 2, n)) {
            const r = new tt();
            this._walker.nextPointAndAngle(this._period, r) &&
              (this._walker.nextPosition(this._period / 2) &&
                (s ? (t.pushPoint(a.pt), (s = !1)) : t.pushPoint(a.pt),
                t.pushXY(n.pt[0] - (this._height / 2) * n.sa, n.pt[1] + (this._height / 2) * n.ca),
                t.pushXY(r.pt[0] + (this._height / 2) * r.sa, r.pt[1] - (this._height / 2) * r.ca)),
              (i = !0));
          }
        }
        if (!i) {
          t.pushPoint(this._walker.getPathEnd());
          break;
        }
      }
    }
  },
  hi = class Yt {
    static local() {
      return Yt.instance === null && (Yt.instance = new Yt()), Yt.instance;
    }
    execute(t, e, s, i, a) {
      return new ln(t, e, s);
    }
  };
hi.instance = null;
let ln = class extends se {
    constructor(t, e, s) {
      super(t),
        (this._geometryWalker = new ze()),
        this._geometryWalker.updateTolerance(s),
        (this._angleToLine = e.angleToLine ?? !0),
        (this._offset = (e.offset ? e.offset : 0) * s),
        (this._originalEndings = e.endings),
        (this._offsetAtEnd = (e.customEndingOffset ? e.customEndingOffset : 0) * s),
        (this._position = -(e.offsetAlongLine ? e.offsetAlongLine : 0) * s),
        (this._pattern = new Ie()),
        this._pattern.init(e.placementTemplate, !1),
        this._pattern.scale(s),
        (this._endings = this._originalEndings);
    }
    processPath(t) {
      if (this._pattern.isEmpty()) return null;
      let e;
      if (this.iteratePath) e = this._pattern.nextValue();
      else {
        this._originalEndings === Z.WithFullGap && this.isClosed
          ? (this._endings = Z.WithMarkers)
          : (this._endings = this._originalEndings),
          (this._pattern.extPtGap = 0);
        let i,
          a = !0;
        switch (this._endings) {
          case Z.NoConstraint:
            (i = -this._position), (i = this._adjustPosition(i)), (a = !1);
            break;
          case Z.WithHalfGap:
          default:
            i = -this._pattern.lastValue() / 2;
            break;
          case Z.WithFullGap:
            (i = -this._pattern.lastValue()), (this._pattern.extPtGap = this._pattern.lastValue());
            break;
          case Z.WithMarkers:
            i = 0;
            break;
          case Z.Custom:
            (i = -this._position),
              (i = this._adjustPosition(i)),
              (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
        }
        if (!this._geometryWalker.init(t, this._pattern, a)) return null;
        this._pattern.reset();
        let n = 0;
        for (; i > n; ) (i -= n), (n = this._pattern.nextValue());
        (n -= i), (e = n), (this.iteratePath = !0);
      }
      const s = new tt();
      return this._geometryWalker.nextPointAndAngle(e, s)
        ? this._endings === Z.WithFullGap && this._geometryWalker.isPathEnd()
          ? ((this.iteratePath = !1), null)
          : this._endings === Z.WithMarkers &&
              this._geometryWalker.isPathEnd() &&
              ((this.iteratePath = !1), this.isClosed)
            ? null
            : (this.internalPlacement.setTranslate(
                s.pt[0] - this._offset * s.sa,
                s.pt[1] + this._offset * s.ca,
              ),
              this._angleToLine && this.internalPlacement.setRotateCS(s.ca, s.sa),
              this.internalPlacement)
        : ((this.iteratePath = !1), null);
    }
    _adjustPosition(t) {
      let e = t / this._pattern.length();
      return (e -= Math.floor(e)), e * this._pattern.length();
    }
  },
  li = class Vt {
    static local() {
      return Vt.instance === null && (Vt.instance = new Vt()), Vt.instance;
    }
    execute(t, e, s, i, a) {
      return new cn(t, e, s);
    }
  };
li.instance = null;
let cn = class extends se {
    constructor(t, e, s) {
      super(t, !1, !0),
        (this._curveHelper = new it()),
        (this._placePerPart = e.placePerPart ?? !1),
        (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
        (this._offset = e.offset !== void 0 ? e.offset * s : 0),
        (this._type = e.extremityPlacement),
        (this._position = e.offsetAlongLine !== void 0 ? e.offsetAlongLine * s : 0),
        (this._beginProcessed = !1);
    }
    processMultiPath(t) {
      return this._placePerPart ? super.processMultiPath(t) : this.processPath(t);
    }
    processPath(t) {
      let e;
      switch (this._type) {
        case at.Both:
        default:
          this._beginProcessed
            ? ((e = this._atExtremities(t, this._position, !1)),
              (this._beginProcessed = !1),
              (this.iterateMultiPath = !1),
              (this.iteratePath = !1))
            : ((e = this._atExtremities(t, this._position, !0)),
              (this._beginProcessed = !0),
              (this.iterateMultiPath = !0),
              (this.iteratePath = !0));
          break;
        case at.JustBegin:
          e = this._atExtremities(t, this._position, !0);
          break;
        case at.JustEnd:
          e = this._atExtremities(t, this._position, !1);
        case at.None:
      }
      return e;
    }
    _atExtremities(t, e, s) {
      if (
        (this._placePerPart || (s ? t.seekPath(0) : t.seekPath(t.totalSize - 1)),
        s || t.seekPathEnd(),
        s ? t.nextPoint() : t.prevPoint())
      ) {
        let i = 0,
          [a, n] = [0, 0],
          [r, o] = [t.x, t.y];
        for (; s ? t.nextPoint() : t.prevPoint(); ) {
          (a = r), (n = o), (r = t.x), (o = t.y);
          const h = this._curveHelper.getLength(a, n, r, o);
          if (i + h > e) {
            const c = (e - i) / h,
              [u, f] = this._curveHelper.getAngleCS(a, n, r, o, c),
              p = this._curveHelper.getCoord2D(a, n, r, o, c);
            return (
              this.internalPlacement.setTranslate(p[0] - this._offset * f, p[1] + this._offset * u),
              this._angleToLine && this.internalPlacement.setRotateCS(-u, -f),
              this.internalPlacement
            );
          }
          i += h;
        }
      }
      return null;
    }
  },
  ci = class Ut {
    static local() {
      return Ut.instance === null && (Ut.instance = new Ut()), Ut.instance;
    }
    execute(t, e, s, i, a) {
      return new un(t, e, s);
    }
  };
ci.instance = null;
let un = class extends se {
  constructor(t, e, s) {
    super(t),
      (this._walker = new ze()),
      this._walker.updateTolerance(s),
      (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
      (this._offset = e.offset !== void 0 ? e.offset * s : 0),
      (this._beginGap = e.beginPosition !== void 0 ? e.beginPosition * s : 0),
      (this._endGap = e.endPosition !== void 0 ? e.endPosition * s : 0),
      (this._flipFirst = e.flipFirst === void 0 || e.flipFirst),
      (this._pattern = new Ie()),
      this._pattern.init(e.positionArray, !1, !1),
      (this._subPathLen = 0),
      (this._posCount = this._pattern.size()),
      (this._isFirst = !0),
      (this._prevPos = 0);
  }
  processPath(t) {
    if (this._pattern.isEmpty()) return null;
    let e;
    if (this.iteratePath) {
      const r = this._pattern.nextValue() * this._subPathLen,
        o = this._beginGap + r;
      (e = o - this._prevPos), (this._prevPos = o);
    } else {
      if (
        ((this._posCount = this._pattern.size()),
        (this._isFirst = !0),
        (this._prevPos = 0),
        (this._subPathLen = t.pathLength() - this._beginGap - this._endGap),
        this._subPathLen < 0)
      )
        return (this.iteratePath = !1), null;
      if (!this._walker.init(t, this._pattern, !1)) return null;
      this._pattern.reset();
      const r = this._pattern.nextValue() * this._subPathLen,
        o = this._beginGap + r;
      (e = o - this._prevPos), (this._prevPos = o), (this.iteratePath = !0);
    }
    const s = new tt();
    if (!this._walker.nextPointAndAngle(e, s, nt.END)) return (this.iteratePath = !1), null;
    this.internalPlacement.setTranslate(
      s.pt[0] - this._offset * s.sa,
      s.pt[1] + this._offset * s.ca,
    );
    const i = this._isFirst && this._flipFirst;
    let a, n;
    return (
      this._angleToLine ? ((a = s.ca), (n = s.sa)) : ((a = 1), (n = 0)),
      i && ((a = -a), (n = -n)),
      this.internalPlacement.setRotateCS(a, n),
      (this._isFirst = !1),
      this._posCount--,
      this._posCount === 0 && (this.iteratePath = !1),
      this.internalPlacement
    );
  }
};
const St = 512,
  fn = 10,
  U = 24,
  Se = 1e-6;
let ui = class Wt {
  static local() {
    return Wt.instance === null && (Wt.instance = new Wt()), Wt.instance;
  }
  execute(t, e, s, i, a) {
    return new _n(t, e, s, i, a);
  }
};
ui.instance = null;
let _n = class ot {
  constructor(t, e, s, i, a) {
    if (
      ((this._xMin = 0),
      (this._xMax = 0),
      (this._yMin = 0),
      (this._yMax = 0),
      (this._currentX = 0),
      (this._currentY = 0),
      (this._accelerationMap = null),
      (this._testInsidePolygon = !1),
      (this._verticalSubdivision = !0),
      (this._stepX = Math.abs(e.stepX ?? 16) * s),
      (this._stepY = Math.abs(e.stepY ?? 16) * s),
      (this._stepX = Math.round(128 * this._stepX) / 128),
      (this._stepY = Math.round(128 * this._stepY) / 128),
      this._stepX !== 0 && this._stepY !== 0)
    ) {
      if (((this._gridType = e.gridType ?? Le.Fixed), this._gridType === Le.Random)) {
        const n = e.seed ?? 13,
          r = 1;
        (this._randomLCG = new Os(n * r)),
          (this._randomness = (e.randomness ?? 100) / 100),
          (this._gridAngle = 0),
          (this._shiftOddRows = !1),
          (this._cosAngle = 1),
          (this._sinAngle = 0),
          (this._offsetX = 0),
          (this._offsetY = 0),
          this._buildRandomValues();
      } else {
        if (
          ((this._randomness = 0),
          (this._gridAngle = e.gridAngle ?? 0),
          (this._shiftOddRows = e.shiftOddRows ?? !1),
          (this._offsetX = (e.offsetX ?? 0) * s),
          (this._offsetY = (e.offsetY ?? 0) * s),
          (this._cosAngle = Math.cos((this._gridAngle / 180) * Math.PI)),
          (this._sinAngle = -Math.sin((this._gridAngle / 180) * Math.PI)),
          this._stepX)
        )
          if (this._offsetX < 0)
            for (; this._offsetX < -0.5 * this._stepX; ) this._offsetX += this._stepX;
          else for (; this._offsetX >= 0.5 * this._stepX; ) this._offsetX -= this._stepX;
        if (this._stepY)
          if (this._offsetY < 0)
            for (; this._offsetY < -0.5 * this._stepY; ) this._offsetY += this._stepY;
          else for (; this._offsetY >= 0.5 * this._stepY; ) this._offsetY -= this._stepY;
      }
      if (((this._graphicOriginX = 0), (this._graphicOriginY = 0), i != null)) {
        const [n, r, o, h] = i.split('/'),
          c = parseFloat(n),
          u = parseFloat(r),
          f = parseFloat(o),
          p = parseFloat(h);
        (this._graphicOriginX = -(p * 2 ** c + f) * St),
          (this._graphicOriginY = u * St),
          (this._testInsidePolygon = !0);
      }
      (this._internalPlacement = new yt()), this._calculateMinMax(t), (this._geometryCursor = t);
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!ot._randValues) {
      ot._randValues = [];
      for (let t = 0; t < U; t++)
        for (let e = 0; e < U; e++)
          ot._randValues.push(this._randomLCG.getFloat()),
            ot._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t) {
    let e, s, i, a, n, r, o, h, c, u, f, p, m, _;
    (this._xMin = 0),
      (this._xMax = 0),
      (this._yMin = 0),
      (this._yMax = 0),
      (o = h = m = f = Number.MAX_VALUE),
      (c = u = _ = p = -Number.MAX_VALUE);
    const d = this._cosAngle !== 1;
    for (t.reset(); t.nextPath(); )
      for (; t.nextPoint(); )
        (r = t.x),
          (n = t.y),
          (e = r - this._graphicOriginX - this._offsetX),
          (s = n - this._graphicOriginY - this._offsetY),
          d
            ? ((i = this._cosAngle * e - this._sinAngle * s),
              (a = this._sinAngle * e + this._cosAngle * s))
            : ((i = e), (a = s)),
          (o = Math.min(o, i)),
          (c = Math.max(c, i)),
          (h = Math.min(h, a)),
          (u = Math.max(u, a)),
          (f = Math.min(f, n)),
          (p = Math.max(p, n)),
          (m = Math.min(m, r)),
          (_ = Math.max(_, r));
    (f = f !== Number.MAX_VALUE ? f : -512 - this._stepY),
      (p = p !== -Number.MAX_VALUE ? p : this._stepY),
      (m = m !== Number.MAX_VALUE ? m : -this._stepX),
      (_ = _ !== -Number.MAX_VALUE ? _ : St + this._stepX);
    const g = p - f,
      y = _ - m;
    if (
      ((this._verticalSubdivision = g >= y),
      (this._polygonMin = this._verticalSubdivision ? f : m),
      this._testInsidePolygon)
    ) {
      let P = 0 - this._graphicOriginX - this._offsetX - this._stepX,
        x = St - this._graphicOriginX - this._offsetX + this._stepX,
        b = -512 - this._graphicOriginY - this._offsetY - this._stepY,
        M = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (d) {
        const w = [
          [P, b],
          [P, M],
          [x, b],
          [x, M],
        ];
        (P = b = Number.MAX_VALUE), (x = M = -Number.MAX_VALUE);
        for (const I of w) {
          const v = this._cosAngle * I[0] - this._sinAngle * I[1],
            k = this._sinAngle * I[0] + this._cosAngle * I[1];
          (P = Math.min(P, v)), (x = Math.max(x, v)), (b = Math.min(b, k)), (M = Math.max(M, k));
        }
      }
      (o = o !== Number.MAX_VALUE ? Math.max(o, P) : P),
        (h = h !== Number.MAX_VALUE ? Math.max(h, b) : b),
        (c = c !== -Number.MAX_VALUE ? Math.min(c, x) : x),
        (u = u !== -Number.MAX_VALUE ? Math.min(u, M) : M);
    }
    (this._xMin = Math.round(o / this._stepX)),
      (this._xMax = Math.round(c / this._stepX)),
      (this._yMin = Math.round(h / this._stepY)),
      (this._yMax = Math.round(u / this._stepY)),
      (this._currentX = this._xMax + 1),
      (this._currentY = this._yMin - 1),
      this._buildAccelerationMap(t, m, _, f, p);
  }
  _buildAccelerationMap(t, e, s, i, a) {
    t.reset();
    const n = new Map(),
      r = this._verticalSubdivision,
      o = r ? a - i : s - e;
    let h = Math.ceil(o / fn);
    if (h <= 1) return;
    const c = Math.floor(o / h);
    let u, f, p, m, _, d, g, y, P, x, b;
    for (
      h++,
        this._delta = c,
        r
          ? ((P = -512 - 2 * this._stepY), (x = 2 * this._stepY), (b = i))
          : ((P = -2 * this._stepX), (x = St + 2 * this._stepX), (b = e));
      t.nextPath();

    )
      if (!(t.pathSize < 2) && t.nextPoint())
        for (u = t.x, f = t.y; t.nextPoint(); u = p, f = m) {
          if (((p = t.x), (m = t.y), r)) {
            if (f === m || (f < P && m < P) || (f > x && m > x)) continue;
            (_ = Math.min(f, m)), (d = Math.max(f, m));
          } else {
            if (u === p || (u < P && p < P) || (u > x && p > x)) continue;
            (_ = Math.min(u, p)), (d = Math.max(u, p));
          }
          for (; _ < d; ) (g = Math.floor((_ - b) / c)), Cs(g, u, f, p, m, n), (_ += c);
          (y = Math.floor((d - b) / c)), y > g && Cs(y, u, f, p, m, n);
        }
    this._accelerationMap = n;
  }
  _nextInside() {
    for (;;) {
      if (this._currentX > this._xMax) {
        if ((this._currentY++, this._currentY > this._yMax)) return null;
        (this._currentX = this._xMin), this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t += 0.5 * this._stepX);
      const e = this._currentY * this._stepY + this._offsetY;
      let s, i;
      if ((this._currentX++, this._gridType === Le.Random)) {
        const a = ((this._currentX % U) + U) % U,
          n = ((this._currentY % U) + U) % U;
        (s =
          this._graphicOriginX +
          t +
          (this._stepX * this._randomness * (0.5 - ot._randValues[n * U + a]) * 2) / 3),
          (i =
            this._graphicOriginY +
            e +
            (this._stepY * this._randomness * (0.5 - ot._randValues[n * U + a + 1]) * 2) / 3);
      } else
        (s = this._graphicOriginX + this._cosAngle * t + this._sinAngle * e),
          (i = this._graphicOriginY - this._sinAngle * t + this._cosAngle * e);
      if (!this._testInsidePolygon || this._isInsidePolygon(s, i, this._geometryCursor))
        return this._internalPlacement.setTranslate(s, i), this._internalPlacement;
    }
  }
  _isInsidePolygon(t, e, s) {
    if (this._accelerationMap == null) return pn(t, e, s);
    (t += Se), (e += Se);
    const i = this._verticalSubdivision,
      a = i ? e : t,
      n = Math.floor((a - this._polygonMin) / this._delta),
      r = this._accelerationMap.get(n);
    if (!r) return !1;
    let o,
      h,
      c,
      u = 0;
    for (const f of r) {
      if (((o = f[0]), (h = f[1]), i)) {
        if (o[1] > e == h[1] > e) continue;
        c = (h[0] - o[0]) * (e - o[1]) - (h[1] - o[1]) * (t - o[0]);
      } else {
        if (o[0] > t == h[0] > t) continue;
        c = (h[1] - o[1]) * (t - o[0]) - (h[0] - o[0]) * (e - o[1]);
      }
      c > 0 ? u++ : u--;
    }
    return u !== 0;
  }
};
function pn(l, t, e) {
  let s,
    i,
    a,
    n,
    r = 0;
  for (l += Se, t += Se, e.reset(); e.nextPath(); )
    if (e.nextPoint())
      for (s = e.x, i = e.y; e.nextPoint(); s = a, i = n)
        (a = e.x),
          (n = e.y),
          i > t != n > t && ((a - s) * (t - i) - (n - i) * (l - s) > 0 ? r++ : r--);
  return r !== 0;
}
function Cs(l, t, e, s, i, a) {
  let n = a.get(l);
  n || ((n = []), a.set(l, n)),
    n.push([
      [t, e],
      [s, i],
    ]);
}
const mn = 0.001;
let fi = class qt {
  static local() {
    return qt.instance === null && (qt.instance = new qt()), qt.instance;
  }
  execute(t, e, s, i, a) {
    return new dn(t, e, s);
  }
};
fi.instance = null;
let dn = class extends se {
  constructor(t, e, s) {
    super(t),
      (this._curveHelper = new it()),
      (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
      (this._offset = e.offset !== void 0 ? e.offset * s : 0),
      (this._relativeTo = e.relativeTo),
      (this._position = e.startPointOffset !== void 0 ? e.startPointOffset * s : 0),
      (this._epsilon = mn * s);
  }
  processPath(t) {
    const e = this._position;
    if (this._relativeTo === xt.SegmentMidpoint) {
      if ((this.iteratePath || (this.iteratePath = !0), t.nextPoint())) {
        let [i, a] = [t.x, t.y],
          [n, r] = [0, 0];
        for (; t.nextPoint(); ) {
          (n = t.x), (r = t.y);
          const o = this._curveHelper.getLength(i, a, n, r);
          if (o < this._epsilon) {
            (i = n), (a = r);
            continue;
          }
          const h = 0.5 + this._position / o,
            [c, u] = this._curveHelper.getAngleCS(i, a, n, r, h),
            f = this._curveHelper.getCoord2D(i, a, n, r, h);
          return (
            this.internalPlacement.setTranslate(f[0] - this._offset * u, f[1] + this._offset * c),
            this._angleToLine && this.internalPlacement.setRotateCS(c, u),
            this.internalPlacement
          );
        }
      }
      return (this.iteratePath = !1), null;
    }
    const s = this._relativeTo === xt.LineEnd;
    return this.onLine(t, e, s);
  }
  onLine(t, e, s) {
    let i,
      a = !1;
    switch (this._relativeTo) {
      case xt.LineMiddle:
      default:
        t.seekPathStart(), (i = t.pathLength() / 2 + e);
        break;
      case xt.LineBeginning:
        i = e;
        break;
      case xt.LineEnd:
        (i = e), (a = !0);
    }
    s ? t.seekPathEnd() : t.seekPathStart();
    let n = 0;
    if (s ? t.prevPoint() : t.nextPoint()) {
      let [r, o] = [t.x, t.y],
        [h, c] = [0, 0];
      for (; s ? t.prevPoint() : t.nextPoint(); ) {
        (h = t.x), (c = t.y);
        const u = this._curveHelper.getLength(r, o, h, c);
        if (n + u > i) {
          const f = (i - n) / u,
            [p, m] = this._curveHelper.getAngleCS(r, o, h, c, f),
            _ = this._curveHelper.getCoord2D(r, o, h, c, f),
            d = a ? -this._offset : this._offset;
          return (
            this.internalPlacement.setTranslate(_[0] - d * m, _[1] + d * p),
            this._angleToLine &&
              (a
                ? this.internalPlacement.setRotateCS(-p, -m)
                : this.internalPlacement.setRotateCS(p, m)),
            this.internalPlacement
          );
        }
        (r = h), (o = c), (n += u);
      }
    }
    return null;
  }
};
const gn = 1e-15;
let _i = class Jt {
  static local() {
    return Jt.instance === null && (Jt.instance = new Jt()), Jt.instance;
  }
  execute(t, e, s, i, a) {
    return new yn(t, e, s);
  }
};
_i.instance = null;
let yn = class extends se {
  constructor(t, e, s) {
    super(t),
      (this._curveHelper = new it()),
      (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
      (this._offset = e.offset !== void 0 ? e.offset * s : 0),
      (this._endPoints = e.placeOnEndPoints === void 0 || e.placeOnEndPoints),
      (this._controlPoints = e.placeOnControlPoints === void 0 || e.placeOnControlPoints),
      (this._regularVertices = e.placeOnRegularVertices === void 0 || e.placeOnRegularVertices),
      (this._tags = []),
      (this._tagIterator = 0);
  }
  processPath(t) {
    if (
      (this.iteratePath || (this._preparePath(t), (this.iteratePath = !0)),
      this._tagIterator >= this._tags.length)
    )
      return (this._tags.length = 0), (this._tagIterator = 0), (this.iteratePath = !1), null;
    const e = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e[2]);
    let s = e[0],
      i = e[1];
    if (this._offset !== 0) {
      const a = Math.cos(e[2]),
        n = Math.sin(e[2]);
      (s -= this._offset * n), (i += this._offset * a);
    }
    return this.internalPlacement.setTranslate(s, i), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t) {
    (this._tags.length = 0), (this._tagIterator = 0), t.seekPathStart();
    const e = t.isClosed();
    let s = 0,
      i = !1,
      a = 0,
      n = 0;
    if ((t.seekPathStart(), t.nextPoint())) {
      let r = t.x,
        o = t.y,
        h = t.getControlPoint(),
        c = !0,
        u = t.nextPoint();
      for (; u; ) {
        const f = t.x,
          p = t.y,
          m = t.getControlPoint();
        (this._angleToLine || this._offset !== 0) &&
          (a = this._curveHelper.getAngle(r, o, f, p, 0)),
          c
            ? ((c = !1),
              e
                ? ((s = a), (i = h))
                : (this._endPoints || (this._controlPoints && h)) && this._tags.push([r, o, a]))
            : h
              ? this._controlPoints && this._tags.push([r, o, fe(n, a)])
              : this._regularVertices && this._tags.push([r, o, fe(n, a)]),
          (this._angleToLine || this._offset !== 0) &&
            (n = this._curveHelper.getAngle(r, o, f, p, 1)),
          (u = t.nextPoint()),
          u ||
            (e
              ? m || i
                ? this._controlPoints && this._tags.push([f, p, fe(n, s)])
                : this._regularVertices && this._tags.push([f, p, fe(n, s)])
              : (this._endPoints || (this._controlPoints && m)) && this._tags.push([f, p, n])),
          (r = f),
          (o = p),
          (h = m);
      }
    }
    this._tagIterator = 0;
  }
};
function fe(l, t) {
  const e = Math.PI;
  for (; Math.abs(t - l) > e + 2 * gn; ) t - l > e ? (t -= 2 * e) : (t += 2 * e);
  return (l + t) / 2;
}
const Pn = 100 * 222045e-21;
function xn(l) {
  if (l.totalSize === 0) return null;
  const t = ke(l);
  if (!t) return null;
  const e = 4 * (Math.abs(t[0]) + Math.abs(t[2]) + Math.abs(t[1]) + Math.abs(t[3]) + 1) * Pn;
  let s = 0,
    i = 0;
  l.reset();
  for (let v = 0; l.nextPath(); v++) {
    const k = l.getCurrentRingArea();
    k > i && ((i = k), (s = v));
  }
  if ((l.seekPath(s), l.pathSize === 0)) return null;
  l.seekPathStart();
  const a = Gi(l);
  if (Math.abs(i) <= 2 * e * e) return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2];
  l.seekPathStart();
  const n = Oi(l, _t());
  if (n === null) return null;
  if (l.totalPoints < 4) return n;
  const r = [
      [NaN, NaN],
      [NaN, NaN],
      [NaN, NaN],
      [NaN, NaN],
    ],
    o = [NaN, NaN, NaN, NaN],
    h = [NaN, NaN, NaN, NaN];
  let c = !1,
    u = Ct(n, l, !0);
  u.distance === 0 && ((c = !0), (r[0][0] = n[0]), (r[0][1] = n[1]), (u = Ct(n, l, !1))),
    (o[0] = u.distance),
    (h[0] = 0);
  const f = [NaN, NaN];
  let p = !1,
    m = 0.25,
    _ = -1,
    d = NaN;
  do
    if (
      ((d = NaN),
      (r[1] = Ge(l, Oe(a[0], a[2], m), e, t)),
      isNaN(r[1][0]) || isNaN(r[1][1]) || ((u = Ct(r[1], l, !1)), (d = u.distance)),
      !isNaN(d) && d > e && xe(r[1], l))
    )
      (p = !0), (o[1] = d), (h[1] = ht(r[1], n));
    else if (
      (!isNaN(d) && d > _ && ((_ = d), (f[0] = r[1][0]), (f[1] = r[1][1])), (m -= 0.01), m < 0.1)
    ) {
      if (!(_ >= 0)) break;
      (p = !0), (o[1] = _), (r[1][0] = f[0]), (r[1][1] = f[1]), (h[1] = ht(r[1], n));
    }
  while (!p);
  (p = !1), (m = 0.5), (_ = -1);
  let g = 0.01,
    y = 1;
  do
    if (
      ((d = NaN),
      (r[2] = Ge(l, Oe(a[0], a[2], m), e, t)),
      isNaN(r[2][0]) || isNaN(r[2][1]) || ((u = Ct(r[2], l, !1)), (d = u.distance)),
      !isNaN(d) && d > e && xe(r[2], l))
    )
      (p = !0), (o[2] = d), (h[2] = ht(r[2], n));
    else if (!isNaN(d) && d > _) (_ = d), (f[0] = r[2][0]), (f[1] = r[2][1]);
    else if (
      (d > _ && ((_ = d), (f[0] = r[2][0]), (f[1] = r[2][1])),
      (m = 0.5 + g * y),
      (g += 0.01),
      (y *= -1),
      m < 0.3 || m > 0.7)
    ) {
      if (!(_ >= 0)) break;
      (p = !0), (o[2] = _), (r[2][0] = f[0]), (r[2][1] = f[1]), (h[2] = ht(r[2], n));
    }
  while (!p);
  (p = !1), (m = 0.75), (_ = -1);
  do
    if (
      ((d = NaN),
      (r[3] = Ge(l, Oe(a[0], a[2], m), e, t)),
      isNaN(r[3][0]) || isNaN(r[3][1]) || ((u = Ct(r[3], l, !1)), (d = u.distance)),
      !isNaN(d) && d > e && xe(r[3], l))
    )
      (p = !0), (o[3] = d), (h[3] = ht(r[3], n));
    else if ((d > _ && ((_ = d), (f[0] = r[3][0]), (f[1] = r[3][1])), (m += 0.01), m > 0.9)) {
      if (!(_ >= 0)) break;
      (p = !0), (o[3] = _), (r[3][0] = f[0]), (r[3][1] = f[1]), (h[3] = ht(r[3], n));
    }
  while (!p);
  const P = [0, 1, 2, 3],
    x = c ? 0 : 1;
  let b;
  for (let v = x; v < 4; v++)
    for (let k = x; k < 3; k++) {
      const T = h[k],
        G = h[k + 1];
      Sn(T, G) > 0 && ((b = P[k]), (P[k] = P[k + 1]), (P[k + 1] = b), (h[k] = G), (h[k + 1] = T));
    }
  let M = x,
    w = 0,
    I = 0;
  for (let v = x; v < 4; v++) {
    switch (v) {
      case 0:
        I = 2 * o[P[v]];
        break;
      case 1:
        I = 1.66666666 * o[P[v]];
        break;
      case 2:
        I = 1.33333333 * o[P[v]];
        break;
      case 3:
        I = o[P[v]];
    }
    I > w && ((w = I), (M = P[v]));
  }
  return r[M];
}
function xe(l, t) {
  let e,
    s,
    i,
    a,
    n = 0;
  for (t.reset(); t.nextPath() && t.nextPoint(); )
    for (e = t.x, s = t.y; t.nextPoint(); e = i, s = a)
      (i = t.x),
        (a = t.y),
        s > l[1] != a > l[1] && ((i - e) * (l[1] - s) - (a - s) * (l[0] - e) > 0 ? n++ : n--);
  return n !== 0;
}
function Ct(l, t, e) {
  if (e && xe(l, t)) return { coord: l, distance: 0 };
  let s = 1 / 0,
    i = 0,
    a = 0,
    n = [0, 0],
    r = [0, 0];
  const o = [0, 0];
  for (t.reset(); t.nextPath() && t.nextPoint(); )
    if (!(t.pathSize < 2))
      for (n[0] = t.x, n[1] = t.y; t.nextPoint(); n = r) {
        (r = [t.x, t.y]), Fi(o, l, n, r);
        const h = ht(l, o);
        h < s && ((s = h), (i = o[0]), (a = o[1]));
      }
  return { coord: [i, a], distance: Math.sqrt(s) };
}
function Ge(l, t, e, s) {
  const i = [t, 0];
  let a = 1 / 0,
    n = 1 / 0,
    r = !1,
    o = !1;
  const h = [
      [t, s[1] - 1],
      [t, s[3] + 1],
    ],
    c = [0, 0],
    u = [0, 0],
    f = [0, 0],
    p = [
      [0, 0],
      [0, 0],
    ],
    m = _t();
  for (l.reset(); l.nextPath() && l.nextPoint(); )
    if (!(l.pathSize < 2))
      for (p[0][0] = l.x, p[0][1] = l.y; l.nextPoint(); p[0][0] = p[1][0], p[0][1] = p[1][1]) {
        if (
          ((p[1][0] = l.x),
          (p[1][1] = l.y),
          bn(m, p) === null ||
            ((u[0] = h[0][0]),
            (u[1] = h[0][1]),
            (f[0] = h[1][0]),
            (f[1] = h[1][1]),
            Mn(m, u, f) === 0) ||
            !Ni(h[0], h[1], p[0], p[1], c))
        )
          continue;
        const _ = c[1];
        a > n ? _ < a && ((a = _), (r = !0)) : _ < n && ((n = _), (o = !0));
      }
  return r && o ? (i[1] = (a + n) / 2) : (i[0] = i[1] = NaN), i;
}
function bn(l, t) {
  if (t.length < 2) return null;
  l || (l = _t());
  const [e, s] = t[0],
    [i, a] = t[1];
  return (
    (l[0] = Math.min(e, i)),
    (l[1] = Math.min(s, a)),
    (l[2] = Math.max(e, i)),
    (l[3] = Math.max(s, a)),
    l
  );
}
const _e = 1,
  pe = 4,
  ws = 3,
  ks = 12;
function Mn(l, t, e) {
  let s = W(t, l),
    i = W(e, l);
  const a = l[0],
    n = l[1],
    r = l[2],
    o = l[3];
  if (s & i) return 0;
  if (!(s | i)) return 4;
  const h = (s ? 1 : 0) | (i ? 2 : 0);
  do {
    const c = e[0] - t[0],
      u = e[1] - t[1];
    if (c > u)
      s & ws
        ? (s & _e
            ? ((t[1] += (u * (a - t[0])) / c), (t[0] = a))
            : ((t[1] += (u * (r - t[0])) / c), (t[0] = r)),
          (s = W(t, l)))
        : i & ws
          ? (i & _e
              ? ((e[1] += (u * (a - e[0])) / c), (e[0] = a))
              : ((e[1] += (u * (r - e[0])) / c), (e[0] = r)),
            (i = W(e, l)))
          : s
            ? (s & pe
                ? ((t[0] += (c * (n - t[1])) / u), (t[1] = n))
                : ((t[0] += (c * (o - t[1])) / u), (t[1] = o)),
              (s = W(t, l)))
            : (i & pe
                ? ((e[0] += (c * (n - e[1])) / u), (e[1] = n))
                : ((e[0] += (c * (o - e[1])) / u), (e[1] = o)),
              (i = W(e, l)));
    else if (
      (s & ks
        ? (s & pe
            ? ((t[0] += (c * (n - t[1])) / u), (t[1] = n))
            : ((t[0] += (c * (o - t[1])) / u), (t[1] = o)),
          (s = W(t, l)))
        : i & ks
          ? (i & pe
              ? ((e[0] += (c * (n - e[1])) / u), (e[1] = n))
              : ((e[0] += (c * (o - e[1])) / u), (e[1] = o)),
            (i = W(e, l)))
          : s
            ? (s & _e
                ? ((t[1] += (u * (a - t[0])) / c), (t[0] = a))
                : ((t[1] += (u * (r - t[0])) / c), (t[0] = r)),
              (s = W(t, l)))
            : (i & _e
                ? ((e[1] += (u * (a - e[0])) / c), (e[0] = a))
                : ((e[1] += (u * (r - e[0])) / c), (e[0] = r)),
              (i = W(e, l))),
      s & i)
    )
      return 0;
  } while (s | i);
  return h;
}
function W(l, t) {
  return (
    (l[0] < t[0] ? 1 : 0) |
    ((l[0] > t[2] ? 1 : 0) << 1) |
    ((l[1] < t[1] ? 1 : 0) << 2) |
    ((l[1] > t[3] ? 1 : 0) << 3)
  );
}
function Oe(l, t, e) {
  return l + (t - l) * e;
}
function ht(l, t) {
  return (l[0] - t[0]) * (l[0] - t[0]) + (l[1] - t[1]) * (l[1] - t[1]);
}
function Sn(l, t) {
  if (l < t) return -1;
  if (l > t) return 1;
  if (l === t) return 0;
  const e = isNaN(l),
    s = isNaN(t);
  return e < s ? -1 : e > s ? 1 : 0;
}
let pi = class jt {
  static local() {
    return jt.instance === null && (jt.instance = new jt()), jt.instance;
  }
  execute(t, e, s, i, a) {
    return new Cn(t, e, s);
  }
};
pi.instance = null;
let Cn = class {
  constructor(t, e, s) {
    (this._geometryCursor = t),
      (this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0),
      (this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0),
      (this._method = e.method !== void 0 ? e.method : re.OnPolygon),
      (this._placementPerPart = e.placePerPart !== void 0 && e.placePerPart),
      (this._internalPlacement = new yt());
  }
  next() {
    const t = this._geometryCursor;
    if (!t) return null;
    if (!this._placementPerPart) return (this._geometryCursor = null), this._polygonCenter(t);
    for (; t.nextPath(); )
      if (!(t.getCurrentRingArea() < 0)) return this._polygonCenter(t.getCurrentPath());
    return (this._geometryCursor = null), null;
  }
  _polygonCenter(t) {
    let e = !1;
    switch (this._method) {
      case re.CenterOfMass:
        {
          const s = Di(t);
          s &&
            (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY),
            (e = !0));
        }
        break;
      case re.BoundingBoxCenter:
        {
          const s = ke(t);
          s &&
            (this._internalPlacement.setTranslate(
              (s[2] + s[0]) / 2 + this._offsetX,
              (s[3] + s[1]) / 2 + this._offsetY,
            ),
            (e = !0));
        }
        break;
      case re.OnPolygon:
      default: {
        const s = xn(t);
        s !== null &&
          (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY),
          (e = !0));
      }
    }
    return e ? this._internalPlacement : null;
  }
};
const wn = () => Ze.getLogger('esri.views.2d.engine.webgl.alignmentUtils');
var J, B;
function kn(l) {
  if (!l) return J.Center;
  switch (l) {
    case 'Left':
    case 'left':
      return J.Left;
    case 'Right':
    case 'right':
      return J.Right;
    case 'Justify':
      return (
        wn().warnOnce(
          "Horizontal alignment 'justify' is not implemented. Falling back to 'center'.",
        ),
        J.Center
      );
    case 'Center':
    case 'center':
      return J.Center;
  }
}
function vn(l) {
  if (!l) return B.Center;
  switch (l) {
    case 'Top':
    case 'top':
      return B.Top;
    case 'Center':
    case 'middle':
      return B.Center;
    case 'Baseline':
    case 'baseline':
      return B.Baseline;
    case 'Bottom':
    case 'bottom':
      return B.Bottom;
  }
}
function ro(l) {
  switch (l) {
    case 'above-left':
    case 'esriServerPointLabelPlacementAboveLeft':
      return ['right', 'bottom'];
    case 'above-center':
    case 'above-along':
    case 'esriServerPointLabelPlacementAboveCenter':
    case 'esriServerLinePlacementAboveAlong':
      return ['center', 'bottom'];
    case 'above-right':
    case 'esriServerPointLabelPlacementAboveRight':
      return ['left', 'bottom'];
    case 'center-left':
    case 'esriServerPointLabelPlacementCenterLeft':
      return ['right', 'middle'];
    case 'center-center':
    case 'center-along':
    case 'esriServerPointLabelPlacementCenterCenter':
    case 'esriServerLinePlacementCenterAlong':
    case 'always-horizontal':
    case 'esriServerPolygonPlacementAlwaysHorizontal':
      return ['center', 'middle'];
    case 'center-right':
    case 'esriServerPointLabelPlacementCenterRight':
      return ['left', 'middle'];
    case 'below-left':
    case 'esriServerPointLabelPlacementBelowLeft':
      return ['right', 'top'];
    case 'below-center':
    case 'below-along':
    case 'esriServerPointLabelPlacementBelowCenter':
    case 'esriServerLinePlacementBelowAlong':
      return ['center', 'top'];
    case 'below-right':
    case 'esriServerPointLabelPlacementBelowRight':
      return ['left', 'top'];
    default:
      return console.debug(`Found invalid placement type ${l}`), ['center', 'middle'];
  }
}
function no(l) {
  switch (l) {
    case J.Right:
    case 'right':
      return -1;
    case J.Center:
    case 'center':
      return 0;
    case J.Left:
    case 'left':
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${l}`), 0;
  }
}
function ao(l) {
  switch (l) {
    case B.Top:
    case 'top':
      return 1;
    case B.Center:
    case 'middle':
      return 0;
    case B.Bottom:
    case B.Baseline:
    case 'baseline':
    case 'bottom':
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${l}`), 0;
  }
}
(function (l) {
  (l[(l.Left = -1)] = 'Left'), (l[(l.Center = 0)] = 'Center'), (l[(l.Right = 1)] = 'Right');
})(J || (J = {})),
  (function (l) {
    (l[(l.Top = 1)] = 'Top'),
      (l[(l.Center = 0)] = 'Center'),
      (l[(l.Bottom = -1)] = 'Bottom'),
      (l[(l.Baseline = 2)] = 'Baseline');
  })(B || (B = {}));
var vs;
(function (l) {
  (l[(l.Geographic = 0)] = 'Geographic'), (l[(l.Arithmatic = 1)] = 'Arithmatic');
})(vs || (vs = {}));
const oo = 3.14159265359 / 180,
  ho = 3.14159265359 / 128,
  lo = 1,
  co = 1.1,
  uo = 1,
  fo = 24,
  _o = 8,
  po = 1e-5,
  mo = 0.05,
  go = 1e-30,
  yo = 4,
  Po = 0,
  xo = 2,
  bo = 2,
  Mo = 3,
  So = 0,
  Co = 3,
  wo = 16777216,
  ko = 1.1,
  vo = 16,
  Io = 128,
  zo = {
    bitset: {
      isSDF: 0,
      isMapAligned: 1,
      scaleSymbolsProportionally: 2,
      overrideOutlineColor: 3,
      colorLocked: 4,
      isStroke: 5,
    },
  },
  To = { linear: 0, rectangular: 1, circular: 2 },
  Lo = { isAbsolute: 0, isDiscrete: 1 },
  $o = { isAlongLine: 0, isAbsoluteSize: 1, isDiscrete: 2 };
function In(l) {
  if (!l) return null;
  switch (l.type) {
    case 'CIMGeometricEffectAddControlPoints':
      return Us.local();
    case 'CIMGeometricEffectArrow':
      return Js.local();
    case 'CIMGeometricEffectBuffer':
      return js.local();
    case 'CIMGeometricEffectControlMeasureLine':
      return Zs.local();
    case 'CIMGeometricEffectCut':
      return Ks.local();
    case 'CIMGeometricEffectDashes':
      return Qs.local();
    case 'CIMGeometricEffectDonut':
      return ti.local();
    case 'CIMGeometricEffectJog':
      return ei.local();
    case 'CIMGeometricEffectMove':
      return si.local();
    case 'CIMGeometricEffectOffset':
      return ii.local();
    case 'CIMGeometricEffectReverse':
      return ri.local();
    case 'CIMGeometricEffectRotate':
      return ni.local();
    case 'CIMGeometricEffectScale':
      return ai.local();
    case 'CIMGeometricEffectWave':
      return oi.local();
  }
  return null;
}
function zn(l) {
  if (!l) return null;
  switch (l.type) {
    case 'CIMMarkerPlacementAlongLineSameSize':
      return hi.local();
    case 'CIMMarkerPlacementAtExtremities':
      return li.local();
    case 'CIMMarkerPlacementAtRatioPositions':
      return ci.local();
    case 'CIMMarkerPlacementInsidePolygon':
      return ui.local();
    case 'CIMMarkerPlacementOnLine':
      return fi.local();
    case 'CIMMarkerPlacementOnVertices':
      return _i.local();
    case 'CIMMarkerPlacementPolygonCenter':
      return pi.local();
  }
  return null;
}
const Fe = new $i();
function Tn(l) {
  if (l == null) return ['', !1];
  if (!Fe.hasBidiChar(l)) return [l, !1];
  let t;
  return (
    (t = Fe.checkContextual(l) === 'rtl' ? 'IDNNN' : 'ICNNN'), [Fe.bidiTransform(l, t, 'VLYSN'), !0]
  );
}
let Ln = class {
  applyColorSubstitution(t, e) {
    if (!e) return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement('canvas'));
    const { width: s, height: i } = t,
      a = this._rasterizationCanvas,
      n = a.getContext('2d', { willReadFrequently: !0 });
    t !== a && ((a.width = s), (a.height = i), n.drawImage(t, 0, 0, s, i));
    const r = n.getImageData(0, 0, s, i).data;
    if (e) {
      for (const h of e)
        if (h && h.oldColor && h.oldColor.length === 4 && h.newColor && h.newColor.length === 4) {
          const [c, u, f, p] = h.oldColor,
            [m, _, d, g] = h.newColor;
          if (c === m && u === _ && f === d && p === g) continue;
          for (let y = 0; y < r.length; y += 4)
            c === r[y] &&
              u === r[y + 1] &&
              f === r[y + 2] &&
              p === r[y + 3] &&
              ((r[y] = m), (r[y + 1] = _), (r[y + 2] = d), (r[y + 3] = g));
        }
    }
    const o = new ImageData(r, s, i);
    return n.putImageData(o, 0, 0), a;
  }
  tintImageData(t, e) {
    if (!e || e.length < 4) return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement('canvas'));
    const { width: s, height: i } = t,
      a = this._rasterizationCanvas,
      n = a.getContext('2d', { willReadFrequently: !0 });
    t !== a && ((a.width = s), (a.height = i), n.drawImage(t, 0, 0, s, i));
    const r = n.getImageData(0, 0, s, i),
      o = new Uint8Array(r.data),
      h = [e[0] / 255, e[1] / 255, e[2] / 255, e[3] / 255];
    for (let u = 0; u < o.length; u += 4)
      (o[u] *= h[0]), (o[u + 1] *= h[1]), (o[u + 2] *= h[2]), (o[u + 3] *= h[3]);
    const c = new ImageData(new Uint8ClampedArray(o.buffer), s, i);
    return n.putImageData(c, 0, 0), a;
  }
};
function Ne(l) {
  const t = l.getFrame(0);
  if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) return t;
  const e = document.createElement('canvas');
  (e.width = l.width), (e.height = l.height);
  const s = e.getContext('2d');
  return t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0), e;
}
function Q(l, t = 0) {
  if (t === 0) return l;
  const e = Math.cos(t),
    s = Math.sin(t),
    [i, a] = l;
  return [i * e + a * -s, i * s + a * e];
}
let $n = class mi {
  constructor(t = 0, e = 0, s = 0, i = 0) {
    (this.x = t), (this.y = e), (this.width = s), (this.height = i);
  }
  static fromExtent(t) {
    return new mi(t.xmin, -t.ymax, t.xmax - t.xmin, t.ymax - t.ymin);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t) {
    (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.width = Math.max(this.width, t.width)),
      (this.height = Math.max(this.height, t.height));
  }
};
function An(l) {
  return `rgb(${l.slice(0, 3).toString()})`;
}
function me(l) {
  return `rgba(${l.slice(0, 3).toString()},${l[3]})`;
}
let di = class {
  constructor(t) {
    t && (this._textRasterizationCanvas = t);
  }
  rasterizeText(t, e) {
    var D, X;
    this._textRasterizationCanvas ||
      (this._textRasterizationCanvas = document.createElement('canvas'));
    const s = this._textRasterizationCanvas,
      i = s.getContext('2d', { willReadFrequently: !0 });
    wt(i, e),
      (this._parameters = e),
      (this._textLines = t.split(/\r?\n/)),
      (this._lineHeight = this._computeLineHeight());
    const { decoration: a, weight: n } = e.font;
    this._lineThroughWidthOffset = a && a === 'line-through' ? 0.1 * this._lineHeight : 0;
    const r = e.backgroundColor != null || e.borderLine != null,
      o = r ? Xi : 0,
      h = this._computeTextWidth(i, e) + 2 * o,
      c = this._lineHeight * this._textLines.length + 2 * o;
    if (
      ((s.width = h + 2 * this._lineThroughWidthOffset),
      (s.height = c),
      s.width === 0 || s.height === 0)
    )
      return (
        (s.width = s.height = 1),
        {
          size: [0, 0],
          image: new Uint32Array(0),
          sdf: !1,
          simplePattern: !1,
          anchorX: 0,
          anchorY: 0,
          canvas: s,
        }
      );
    (this._renderedLineHeight = Math.round(this._lineHeight)),
      (this._renderedOutlineSize = (e.outline.size || 0) * e.pixelRatio),
      (this._renderedHaloSize = (e.halo.size || 0) * e.pixelRatio),
      (this._renderedWidth = h),
      (this._renderedHeight = c),
      (this._lineThroughWidthOffset *= e.pixelRatio);
    const u = (e.outline && e.outline.color) ?? [0, 0, 0, 0],
      f = e.color ?? [0, 0, 0, 0],
      p = e.halo && e.halo.color ? e.halo.color : [0, 0, 0, 0];
    (this._fillStyle = me(f)), (this._outlineStyle = me(u)), (this._haloStyle = An(p));
    const m = this._renderedLineHeight,
      _ = this._renderedOutlineSize,
      d = this._renderedHaloSize;
    i.save(), i.clearRect(0, 0, s.width, s.height), wt(i, e);
    const g = o * e.pixelRatio,
      y =
        En(
          i.textAlign,
          this._renderedWidth - 2 * g,
          this._renderedHaloSize + this._renderedOutlineSize,
        ) + g,
      P = d + _ + g,
      x = d > 0;
    let b = this._lineThroughWidthOffset,
      M = 0;
    if (r) {
      i.save();
      const A = e.backgroundColor ?? [0, 0, 0, 0],
        $ = ((D = e.borderLine) == null ? void 0 : D.color) ?? [0, 0, 0, 0],
        Te = 2 * (((X = e.borderLine) == null ? void 0 : X.size) ?? 0);
      (i.fillStyle = me(A)),
        (i.strokeStyle = me($)),
        (i.lineWidth = Te),
        i.fillRect(0, 0, s.width, s.height),
        i.strokeRect(0, 0, s.width, s.height),
        i.restore();
    }
    x && this._renderHalo(i, y, P, b, M, e),
      _ > 0 && this._renderOutline(i, y, P, b, M, e),
      (M += P),
      (b += y);
    for (const A of this._textLines)
      x
        ? ((i.globalCompositeOperation = 'destination-out'),
          (i.fillStyle = 'rgb(0, 0, 0)'),
          i.fillText(A, b, M),
          (i.globalCompositeOperation = 'source-over'),
          (i.fillStyle = this._fillStyle),
          i.fillText(A, b, M))
        : ((i.fillStyle = this._fillStyle), i.fillText(A, b, M)),
        a && a !== 'none' && this._renderDecoration(i, b, M, a, n),
        (M += m);
    i.restore();
    const w = this._renderedWidth + 2 * this._lineThroughWidthOffset,
      I = this._renderedHeight,
      v = i.getImageData(0, 0, w, I),
      k = new Uint8Array(v.data);
    if (e.premultiplyColors) {
      let A;
      for (let $ = 0; $ < k.length; $ += 4)
        (A = k[$ + 3] / 255),
          (k[$] = k[$] * A),
          (k[$ + 1] = k[$ + 1] * A),
          (k[$ + 2] = k[$ + 2] * A);
    }
    let T, G;
    switch (e.horizontalAlignment) {
      case 'left':
        T = -0.5;
        break;
      case 'right':
        T = 0.5;
        break;
      default:
        T = 0;
    }
    switch (e.verticalAlignment) {
      case 'bottom':
        G = -0.5;
        break;
      case 'top':
        G = 0.5;
        break;
      case 'baseline':
        G = -1 / 6;
        break;
      default:
        G = 0;
    }
    return {
      size: [w, I],
      image: new Uint32Array(k.buffer),
      sdf: !1,
      simplePattern: !1,
      anchorX: T,
      anchorY: G,
      canvas: s,
    };
  }
  _renderHalo(t, e, s, i, a, n) {
    const r = this._renderedWidth,
      o = this._renderedHeight;
    this._outlineRasterizationCanvas ||
      (this._outlineRasterizationCanvas = document.createElement('canvas')),
      (this._outlineRasterizationCanvas.width = r),
      (this._outlineRasterizationCanvas.height = o);
    const h = this._outlineRasterizationCanvas,
      c = h.getContext('2d');
    c.clearRect(0, 0, r, o), wt(c, n);
    const { decoration: u, weight: f } = n.font;
    (c.fillStyle = this._haloStyle),
      (c.strokeStyle = this._haloStyle),
      (c.lineJoin = 'round'),
      this._renderOutlineNative(c, e, s, u, f, this._renderedHaloSize + this._renderedOutlineSize),
      (t.globalAlpha = this._parameters.halo.color[3]),
      t.drawImage(h, 0, 0, r, o, i, a, r, o),
      (t.globalAlpha = 1);
  }
  _renderOutline(t, e, s, i, a, n) {
    const r = this._renderedWidth,
      o = this._renderedHeight;
    this._outlineRasterizationCanvas ||
      (this._outlineRasterizationCanvas = document.createElement('canvas')),
      (this._outlineRasterizationCanvas.width = r),
      (this._outlineRasterizationCanvas.height = o);
    const h = this._outlineRasterizationCanvas,
      c = h.getContext('2d');
    c.clearRect(0, 0, r, o), wt(c, n);
    const { decoration: u, weight: f } = n.font;
    (c.fillStyle = this._outlineStyle),
      (c.strokeStyle = this._outlineStyle),
      (c.lineJoin = 'round'),
      this._renderOutlineNative(c, e, s, u, f, this._renderedOutlineSize),
      (t.globalAlpha = this._parameters.outline.color[3]),
      t.drawImage(h, 0, 0, r, o, i, a, r, o),
      (t.globalAlpha = 1);
  }
  _renderOutlineNative(t, e, s, i, a, n) {
    const r = this._renderedLineHeight;
    for (const o of this._textLines) {
      const h = 2 * n,
        c = 5,
        u = 0.1;
      for (let f = 0; f < c; f++) {
        const p = (1 - (c - 1) * u + f * u) * h;
        (t.lineWidth = p),
          t.strokeText(o, e, s),
          i && i !== 'none' && this._renderDecoration(t, e, s, i, a, p);
      }
      s += r;
    }
  }
  computeTextSize(t, e) {
    this._textRasterizationCanvas ||
      (this._textRasterizationCanvas = document.createElement('canvas'));
    const s = this._textRasterizationCanvas,
      i = s.getContext('2d');
    wt(i, e),
      (this._parameters = e),
      (this._textLines = t.split(/\r?\n/)),
      (this._lineHeight = this._computeLineHeight());
    const a = this._computeTextWidth(i, e),
      n = this._lineHeight * this._textLines.length;
    return (s.width = a), (s.height = n), [a * e.pixelRatio, n * e.pixelRatio];
  }
  _computeTextWidth(t, e) {
    let s = 0;
    for (const a of this._textLines) s = Math.max(s, t.measureText(a).width);
    const i = e.font;
    return (
      (i.style === 'italic' ||
        i.style === 'oblique' ||
        (typeof i.weight == 'string' && (i.weight === 'bold' || i.weight === 'bolder')) ||
        (typeof i.weight == 'number' && i.weight > 600)) &&
        (s += 0.3 * t.measureText('w').width),
      (s += 2 * H(this._parameters.halo.size)),
      Math.round(s)
    );
  }
  _computeLineHeightBase() {
    return 1.275 * this._parameters.size;
  }
  _computeLineHeight() {
    let t = this._computeLineHeightBase();
    const e = this._parameters.font.decoration;
    return e && e === 'underline' && (t *= 1.3), Math.round(t + 2 * H(this._parameters.halo.size));
  }
  _renderDecoration(t, e, s, i, a, n) {
    let r = 0.9 * this._lineHeight;
    const o = a === 'bold' ? 0.06 : a === 'bolder' ? 0.09 : 0.04;
    switch (t.textAlign) {
      case 'center':
        e -= this._renderedWidth / 2;
        break;
      case 'right':
        e -= this._renderedWidth;
    }
    const h = t.textBaseline;
    if (i === 'underline')
      switch (((r = 0.9 * this._computeLineHeightBase()), h)) {
        case 'top':
          s += r;
          break;
        case 'middle':
          s += r / 2;
      }
    else if (i === 'line-through')
      switch (h) {
        case 'top':
          s += r / 1.5;
          break;
        case 'middle':
          s += r / 3;
      }
    const c = n ? 1.5 * n : Math.ceil(r * o);
    t.save(),
      t.beginPath(),
      (t.strokeStyle = t.fillStyle),
      (t.lineWidth = c),
      t.moveTo(e - this._lineThroughWidthOffset, s),
      t.lineTo(e + this._renderedWidth + 2 * this._lineThroughWidthOffset, s),
      t.stroke(),
      t.restore();
  }
};
function wt(l, t) {
  const e = Math.max(t.size, 0.5),
    s = t.font,
    i = `${s.style} ${s.weight} ${H(e).toFixed(1)}px ${s.family}, sans-serif`;
  let a;
  switch (((l.font = i), (l.textBaseline = 'top'), t.horizontalAlignment)) {
    case 'left':
    default:
      a = 'left';
      break;
    case 'right':
      a = 'right';
      break;
    case 'center':
      a = 'center';
  }
  l.textAlign = a;
}
function En(l, t, e) {
  return l === 'center' ? 0.5 * t : l === 'right' ? t - e : e;
}
function gi(l) {
  return document.createElementNS('http://www.w3.org/2000/svg', l);
}
function Rn() {
  const l = gi('svg');
  return (
    l.setAttribute('style', 'position: absolute;'),
    l.setAttribute('width', '0'),
    l.setAttribute('height', '0'),
    l.setAttribute('aria-hidden', 'true'),
    l.setAttribute('role', 'presentation'),
    document.body.appendChild(l),
    l
  );
}
function Gn(l) {
  return l != null && document.body.removeChild(l), null;
}
const yi = 22,
  Pi = 4,
  On = yi + Pi,
  Fn = yi - 6,
  Is = 3,
  Nn = Math.PI / 180,
  rt = 8,
  Dn = 1.5;
class xi {
  constructor(t, e, s, i) {
    (this._rotationT = Kt()),
      (this._xBounds = 0),
      (this._yBounds = 0),
      (this.minZoom = 0),
      (this.maxZoom = 255),
      (this._bounds = null);
    const a = s.rect,
      n = new Float32Array(8);
    (t *= i), (e *= i);
    const r = s.code ? a.width * i : s.metrics.width,
      o = s.code ? a.height * i : s.metrics.height;
    (this.width = r),
      (this.height = o),
      (n[0] = t),
      (n[1] = e),
      (n[2] = t + r),
      (n[3] = e),
      (n[4] = t),
      (n[5] = e + o),
      (n[6] = t + r),
      (n[7] = e + o),
      (this._data = n),
      this._setTextureCoords(a),
      (this._scale = i),
      (this._mosaic = s),
      (this.x = t),
      (this.y = e),
      (this.maxOffset = Math.max(t + r, e + o));
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t) {
    (this._angle = t), Fs(this._rotationT, -t), this._setOffsets();
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t, width: e } = this._mosaic.metrics,
        s = e * this._scale,
        i = Math.abs(t) * this._scale,
        a = new Float32Array(8);
      (a[0] = this.x),
        (a[1] = this.y),
        (a[2] = this.x + s),
        (a[3] = this.y),
        (a[4] = this.x),
        (a[5] = this.y + i),
        (a[6] = this.x + s),
        (a[7] = this.y + i);
      const n = He(Kt(), this._rotationT, this._transform);
      Hi(a, a, n);
      let r = 1 / 0,
        o = 1 / 0,
        h = -1 / 0,
        c = -1 / 0;
      for (let _ = 0; _ < 4; _++) {
        const d = a[2 * _],
          g = a[2 * _ + 1];
        (r = Math.min(r, d)), (o = Math.min(o, g)), (h = Math.max(h, d)), (c = Math.max(c, g));
      }
      const u = h - r,
        f = c - o,
        p = r + u / 2,
        m = o + f / 2;
      this._bounds = new zt(p, m, u, f);
    }
    return this._bounds;
  }
  setTransform(t) {
    (this._transform = t), (this._offsets = null);
  }
  _setOffsets() {
    this._offsets ||
      (this._offsets = {
        topLeft: [0, 0],
        topRight: [0, 0],
        bottomLeft: [0, 0],
        bottomRight: [0, 0],
      });
    const t = He(Kt(), this._rotationT, this._transform);
    (this._offsets.topLeft[0] = this._data[0]),
      (this._offsets.topLeft[1] = this._data[1]),
      (this._offsets.topRight[0] = this._data[2]),
      (this._offsets.topRight[1] = this._data[3]),
      (this._offsets.bottomLeft[0] = this._data[4]),
      (this._offsets.bottomLeft[1] = this._data[5]),
      (this._offsets.bottomRight[0] = this._data[6]),
      (this._offsets.bottomRight[1] = this._data[7]),
      mt(this._offsets.topLeft, this._offsets.topLeft, t),
      mt(this._offsets.topRight, this._offsets.topRight, t),
      mt(this._offsets.bottomLeft, this._offsets.bottomLeft, t),
      mt(this._offsets.bottomRight, this._offsets.bottomRight, t);
  }
  _setTextureCoords({ x: t, y: e, width: s, height: i }) {
    this._texcoords = {
      topLeft: [t, e],
      topRight: [t + s, e],
      bottomLeft: [t, e + i],
      bottomRight: [t + s, e + i],
    };
  }
}
const Xn = (l, t) => ({
  code: 0,
  page: 0,
  sdf: !0,
  rect: new kr(0, 0, 11, 8),
  textureBinding: t,
  metrics: { advance: 0, height: 4, width: l, left: 0, top: 0 },
});
function kt(l, t) {
  return (
    l.forEach((e) => mt(e, e, t)),
    { topLeft: l[0], topRight: l[1], bottomLeft: l[2], bottomRight: l[3] }
  );
}
class Hn {
  constructor(t, e, s) {
    (this._rotation = 0),
      this._decorate(t, e, s),
      (this.glyphs = t),
      (this.bounds = this._createBounds(t)),
      (this.isMultiline = e.length > 1),
      (this._hasRotation = s.angle !== 0),
      (this._transform = this._createGlyphTransform(this.bounds, s)),
      (this._borderLineSizePx = s.borderLineSizePx),
      (s.borderLineSizePx || s.hasBackground) &&
        ([this.bounds, this.textBox] = this.shapeBackground(this._transform));
    for (const i of t) i.setTransform(this._transform);
  }
  setRotation(t) {
    if (t === 0 && this._rotation === 0) return;
    this._rotation = t;
    const e = this._transform,
      s = Fs(Kt(), t);
    He(e, s, e);
    for (const i of this.glyphs) i.setTransform(this._transform);
  }
  _decorate(t, e, s) {
    if (!s.decoration || s.decoration === 'none' || !t.length) return;
    const i = s.scale,
      a = s.decoration === 'underline' ? On : Fn,
      n = t[0].textureBinding;
    for (const r of e) {
      const o = r.startX * i,
        h = r.startY * i,
        c = (r.width + r.glyphWidthEnd) * i;
      t.push(new xi(o, h + a * i, Xn(c, n), 1));
    }
  }
  shapeBackground(t) {
    const e = this._borderLineSizePx || 0,
      s = (Dn + e) / 2,
      i = this._borderLineSizePx ? s : 0,
      { xmin: a, ymin: n, xmax: r, ymax: o, x: h, y: c, width: u, height: f } = this.bounds,
      p = [a - rt, n - rt],
      m = [r + rt, n - rt],
      _ = [a - rt, o + rt],
      d = [r + rt, o + rt],
      g = kt(
        [
          [p[0] - s, p[1] - s],
          [m[0] + s, m[1] - s],
          [p[0] + i, p[1] + i],
          [m[0] - i, m[1] + i],
        ],
        t,
      ),
      y = kt(
        [
          [_[0] + i, _[1] - i],
          [d[0] - i, d[1] - i],
          [_[0] - s, _[1] + s],
          [d[0] + s, d[1] + s],
        ],
        t,
      ),
      P = kt(
        [
          [p[0] - s, p[1] - s],
          [p[0] + i, p[1] + i],
          [_[0] - s, _[1] + s],
          [_[0] + i, _[1] - i],
        ],
        t,
      ),
      x = kt(
        [
          [m[0] - i, m[1] + i],
          [m[0] + s, m[1] - s],
          [d[0] - i, d[1] - i],
          [d[0] + s, d[1] + s],
        ],
        t,
      ),
      b = { main: kt([p, m, _, d], t), top: g, bot: y, left: P, right: x };
    return [new zt(h, c, u + 2 * s, f + 2 * s), b];
  }
  get boundsT() {
    const t = this.bounds,
      e = ne(hs(), t.x, t.y);
    if ((mt(e, e, this._transform), this._hasRotation)) {
      const s = Math.max(t.width, t.height);
      return new zt(e[0], e[1], s, s);
    }
    return new zt(e[0], e[1], t.width, t.height);
  }
  _createBounds(t) {
    let e = 1 / 0,
      s = 1 / 0,
      i = 0,
      a = 0;
    for (const o of t)
      (e = Math.min(e, o.xTopLeft)),
        (s = Math.min(s, o.yTopLeft)),
        (i = Math.max(i, o.xBottomRight)),
        (a = Math.max(a, o.yBottomRight));
    const n = i - e,
      r = a - s;
    return new zt(e + n / 2, s + r / 2, n, r);
  }
  _createGlyphTransform(t, e) {
    const s = Nn * e.angle,
      i = Kt(),
      a = hs();
    return (
      $e(i, i, ne(a, e.xOffset, -e.yOffset)),
      e.useCIMAngleBehavior
        ? ls(i, i, s)
        : ($e(i, i, ne(a, t.x, t.y)), ls(i, i, s), $e(i, i, ne(a, -t.x, -t.y))),
      i
    );
  }
}
class de {
  constructor(t, e, s, i, a, n) {
    (this.glyphWidthEnd = 0),
      (this.startX = 0),
      (this.startY = 0),
      (this.start = Math.max(0, Math.min(e, s))),
      (this.end = Math.max(0, Math.max(e, s))),
      this.end < t.length && (this.glyphWidthEnd = t[this.end].metrics.width),
      (this.width = i),
      (this.yMin = a),
      (this.yMax = n);
  }
}
const qe = (l) => l === 10,
  zs = (l) => l === 32;
function Bn(l, t, e) {
  const s = new Array(),
    i = 1 / e.scale,
    a = e.maxLineWidth * i,
    n = t ? l.length - 1 : 0,
    r = t ? -1 : l.length,
    o = t ? -1 : 1;
  let h = n,
    c = 0,
    u = 0,
    f = h,
    p = f,
    m = 0,
    _ = 1 / 0,
    d = 0;
  for (; h !== r; ) {
    const { code: y, metrics: P } = l[h],
      x = Math.abs(P.top);
    if ((qe(y) || zs(y) || ((_ = Math.min(_, x)), (d = Math.max(d, x + P.height))), qe(y)))
      h !== n && (s.push(new de(l, f, h - o, c, _ === 1 / 0 ? 0 : _, d)), (_ = 1 / 0), (d = 0)),
        (c = 0),
        (f = h + o),
        (p = h + o),
        (u = 0);
    else if (zs(y)) (p = h + o), (u = 0), (m = P.advance), (c += P.advance);
    else if (c > a) {
      if (p !== f) {
        const b = p - 2 * o;
        (c -= m), s.push(new de(l, f, b, c - u, _, d)), (_ = 1 / 0), (d = 0), (f = p), (c = u);
      } else s.push(new de(l, f, h - o, c, _, d)), (_ = 1 / 0), (d = 0), (f = h), (p = h), (c = 0);
      (c += P.advance), (u += P.advance);
    } else (c += P.advance), (u += P.advance);
    h += o;
  }
  const g = new de(l, f, h - o, c, _, d);
  return g.start >= 0 && g.end < l.length && s.push(g), s;
}
function Yn(l, t) {
  let e = 0;
  for (let a = 0; a < l.length; a++) {
    const { width: n } = l[a];
    e = Math.max(n, e);
  }
  const s = t.decoration === 'underline' ? Pi : 0,
    i = l[0].yMin;
  return {
    x: 0,
    y: i,
    height: l[l.length - 1].yMax + t.lineHeight * (l.length - 1) + s - i,
    width: e,
  };
}
function bi(l, t) {
  const e = t.scale,
    s = new Array(),
    { glyphs: i, isRightToLeft: a } = l,
    n = Bn(i, a, t),
    r = n.length ? Yn(n, t) : { y: 0, height: 0 },
    o = kn(t.horizontalAlignment),
    h = vn(t.verticalAlignment),
    c = h === B.Baseline ? 1 : 0,
    u = c ? 0 : h - 1,
    f = (1 - c) * -r.y + u * (r.height / 2) + -22 * (c ? 1 : 0);
  for (let p = 0; p < n.length; p++) {
    const { start: m, end: _, width: d } = n[p];
    let g = -1 * (o + 1) * (d / 2) - Is;
    const y = (l.isRightToLeft ? n.length - 1 - p : p) * t.lineHeight + f - Is;
    (n[p].startX = g), (n[p].startY = y);
    for (let P = m; P <= _; P++) {
      const x = i[P];
      if (qe(x.code)) continue;
      const b = new xi(g + x.metrics.left, y - x.metrics.top, x, e);
      (g += x.metrics.advance), s.push(b);
    }
  }
  return new Hn(s, n, t);
}
const Ro = 50;
function Go(l) {
  if (!l) return null;
  const { xmin: t, ymin: e, xmax: s, ymax: i, spatialReference: a } = l;
  return new Bi({
    rings: [
      [
        [t, e],
        [t, i],
        [s, i],
        [s, e],
        [t, e],
      ],
    ],
    spatialReference: a,
  });
}
function Mi(l) {
  return j(Math.round(H(l)));
}
function Si(l) {
  const t = j(Yi),
    e = j(Vi);
  return Math.max(t, Math.min(l || e, e));
}
const lt = Math.PI / 180,
  Ci = 0.5,
  Zt = () => Ze.getLogger('esri.symbols.cim.CIMSymbolDrawHelper');
class L {
  constructor(t) {
    this._t = t;
  }
  static createIdentity() {
    return new L([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t = this._t;
    return new L(t.slice());
  }
  transform(t) {
    const e = this._t;
    return [e[0] * t[0] + e[1] * t[1] + e[2], e[3] * t[0] + e[4] * t[1] + e[5]];
  }
  static createScale(t, e) {
    return new L([t, 0, 0, 0, e, 0]);
  }
  scale(t, e) {
    const s = this._t;
    return (s[0] *= t), (s[1] *= t), (s[2] *= t), (s[3] *= e), (s[4] *= e), (s[5] *= e), this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t, e) {
    return new L([0, 0, t, 0, 0, e]);
  }
  translate(t, e) {
    const s = this._t;
    return (s[2] += t), (s[5] += e), this;
  }
  static createRotate(t) {
    const e = Math.cos(t),
      s = Math.sin(t);
    return new L([e, -s, 0, s, e, 0]);
  }
  rotate(t) {
    return L.multiply(this, L.createRotate(t), this);
  }
  angle() {
    const t = this._t[0],
      e = this._t[3],
      s = Math.sqrt(t * t + e * e);
    return [t / s, e / s];
  }
  static multiply(t, e, s) {
    const i = t._t,
      a = e._t,
      n = i[0] * a[0] + i[3] * a[1],
      r = i[1] * a[0] + i[4] * a[1],
      o = i[2] * a[0] + i[5] * a[1] + a[2],
      h = i[0] * a[3] + i[3] * a[4],
      c = i[1] * a[3] + i[4] * a[4],
      u = i[2] * a[3] + i[5] * a[4] + a[5],
      f = s._t;
    return (f[0] = n), (f[1] = r), (f[2] = o), (f[3] = h), (f[4] = c), (f[5] = u), s;
  }
  invert() {
    const t = this._t;
    let e = t[0] * t[4] - t[1] * t[3];
    if (e === 0) return new L([0, 0, 0, 0, 0, 0]);
    e = 1 / e;
    const s = (t[1] * t[5] - t[2] * t[4]) * e,
      i = (t[2] * t[3] - t[0] * t[5]) * e,
      a = t[4] * e,
      n = -t[1] * e,
      r = -t[3] * e,
      o = t[0] * e;
    return new L([a, n, s, r, o, i]);
  }
}
class ss {
  constructor(t, e) {
    (this._resourceManager = t),
      (this._transfos = []),
      (this._sizeTransfos = []),
      (this._geomUnitsPerPoint = 1),
      (this._placementPool = new Qi(yt, void 0, void 0, 100)),
      (this._earlyReturn = !1),
      (this._mapRotation = 0),
      this._transfos.push(e || L.createIdentity()),
      this._sizeTransfos.push(e ? e.scaleRatio() : 1);
  }
  setTransform(t, e) {
    (this._transfos = [t || L.createIdentity()]),
      (this._sizeTransfos = [e || (t ? t.scaleRatio() : 1)]);
  }
  setGeomUnitsPerPoint(t) {
    this._geomUnitsPerPoint = t;
  }
  transformPt(t) {
    return this._transfos[this._transfos.length - 1].transform(t);
  }
  transformSize(t) {
    return t * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t) {
    return this._transfos[this._transfos.length - 1].invert().transform(t);
  }
  reverseTransformSize(t) {
    return t / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformScalar(t) {
    return t / this._transfos[this._transfos.length - 1].scaleRatio();
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  prevGeomUnitsPerPoint() {
    return this._transfos.length > 2 ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t, e) {
    const s = e ? t.scaleRatio() : 1;
    L.multiply(t, this.back(), t),
      this._transfos.push(t),
      this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * s);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t, e, s) {
    if (t)
      switch (t.type) {
        case 'CIMPointSymbol':
        case 'CIMLineSymbol':
        case 'CIMPolygonSymbol':
          this.drawMultiLayerSymbol(t, e);
          break;
        case 'CIMTextSymbol':
          this.drawTextSymbol(t, e, s);
      }
  }
  drawMultiLayerSymbol(t, e) {
    if (!t || !e) return;
    const s = t.symbolLayers;
    if (!s) return;
    const i = t.effects;
    if (i && i.length > 0) {
      const a = this.executeEffects(i, e);
      if (a) {
        let n = a.next();
        for (; n; ) this.drawSymbolLayers(s, n.asJSON()), (n = a.next());
      }
    } else this.drawSymbolLayers(s, e);
  }
  executeEffects(t, e) {
    const s = this._resourceManager.geometryEngine;
    let i = new Wr(z.fromJSONCIM(e));
    for (const a of t) {
      const n = In(a);
      n && (i = n.execute(i, a, this.geomUnitsPerPoint(), null, s));
    }
    return i;
  }
  drawSymbolLayers(t, e) {
    let s = t.length;
    for (; s--; ) {
      const i = t[s];
      if (!i || i.enable === !1) continue;
      const a = i.effects;
      if (a && a.length > 0) {
        const n = this.executeEffects(a, e);
        if (n) {
          let r = null;
          for (; (r = n.next()) && (this.drawSymbolLayer(i, r.asJSON()), !this._earlyReturn); );
        }
      } else this.drawSymbolLayer(i, e);
      if (this._earlyReturn) return;
    }
  }
  drawSymbolLayer(t, e) {
    switch (t.type) {
      case 'CIMSolidFill':
        this.drawSolidFill(e, t.color, t.path);
        break;
      case 'CIMHatchFill':
        this.drawHatchFill(e, t);
        break;
      case 'CIMPictureFill':
        this.drawPictureFill(e, t);
        break;
      case 'CIMGradientFill':
        this.drawGradientFill(e, t);
        break;
      case 'CIMSolidStroke':
        this.drawSolidStroke(e, t.color, t.width, t.capStyle, t.joinStyle, t.miterLimit, t.path);
        break;
      case 'CIMPictureStroke':
        this.drawPictureStroke(e, t);
        break;
      case 'CIMGradientStroke':
        this.drawGradientStroke(e, t);
        break;
      case 'CIMCharacterMarker':
      case 'CIMPictureMarker':
      case 'CIMVectorMarker':
        this.drawMarkerLayer(t, e);
    }
  }
  drawHatchFill(t, e) {
    const s = Wn(e, t, this.geomUnitsPerPoint());
    s && (this.pushClipPath(t), this.drawMultiLayerSymbol(e.lineSymbol, s), this.popClipPath());
  }
  drawPictureFill(t, e) {}
  drawGradientFill(t, e) {}
  drawPictureStroke(t, e) {}
  drawGradientStroke(t, e) {}
  drawMarkerLayer(t, e) {
    const s = t.markerPlacement;
    if (s) {
      const i = zn(s);
      if (i) {
        const a =
          s.type === 'CIMMarkerPlacementInsidePolygon' ||
          (s.type === 'CIMMarkerPlacementPolygonCenter' && s.clipAtBoundary);
        a && this.pushClipPath(e);
        const n = i.execute(
          z.fromJSONCIM(e),
          s,
          this.geomUnitsPerPoint(),
          null,
          this._resourceManager.geometryEngine,
        );
        if (n) {
          let r = null;
          for (; (r = n.next()) && (this.drawMarker(t, r), !this._earlyReturn); );
        }
        a && this.popClipPath();
      }
    } else {
      const i = this._placementPool.acquire();
      if (Xe(e)) (i.tx = e.x), (i.ty = e.y), this.drawMarker(t, i);
      else if (R(e)) {
        const a = tr(e);
        a && (([i.tx, i.ty] = a), this.drawMarker(t, i));
      } else if (F(e)) {
        for (const a of e.paths)
          for (const n of a)
            if (((i.tx = n[0]), (i.ty = n[1]), this.drawMarker(t, i), this._earlyReturn)) break;
      } else
        for (const a of e.points)
          if (((i.tx = a[0]), (i.ty = a[1]), this.drawMarker(t, i), this._earlyReturn)) break;
      this._placementPool.release(i);
    }
  }
  drawMarker(t, e) {
    switch (t.type) {
      case 'CIMCharacterMarker':
      case 'CIMPictureMarker':
        this.drawPictureMarker(t, e);
        break;
      case 'CIMVectorMarker':
        this.drawVectorMarker(t, e);
    }
  }
  drawPictureMarker(t, e) {
    if (!t) return;
    const s = this._resourceManager.getResource(t.url),
      i = S(t.size, Y.CIMPictureMarker.size);
    if (s == null || i <= 0) return;
    const a = s.width,
      n = s.height;
    if (!a || !n) return;
    const r = a / n,
      o = S(t.scaleX, 1),
      h = L.createIdentity(),
      c = t.anchorPoint;
    if (c) {
      let d = c.x,
        g = c.y;
      t.anchorPointUnits !== 'Absolute' && ((d *= i * r * o), (g *= i)), h.translate(-d, -g);
    }
    let u = S(t.rotation);
    t.rotateClockwise && (u = -u),
      this._mapRotation && (u += this._mapRotation),
      u && h.rotate(u * lt);
    let f = S(t.offsetX),
      p = S(t.offsetY);
    if (f || p) {
      if (this._mapRotation) {
        const d = lt * this._mapRotation,
          g = Math.cos(d),
          y = Math.sin(d),
          P = f * y + p * g;
        (f = f * g - p * y), (p = P);
      }
      h.translate(f, p);
    }
    const m = this.geomUnitsPerPoint();
    m !== 1 && h.scale(m, m);
    const _ = e.getAngle();
    _ && h.rotate(_), h.translate(e.tx, e.ty), this.push(h, !1), this.drawImage(t, i), this.pop();
  }
  drawVectorMarker(t, e) {
    if (!t) return;
    const s = t.markerGraphics;
    if (!s) return;
    const i = S(t.size, Y.CIMVectorMarker.size),
      a = t.frame,
      n = a ? a.ymax - a.ymin : 0,
      r = i && n ? i / n : 1,
      o = L.createIdentity();
    a && o.translate(0.5 * -(a.xmax + a.xmin), 0.5 * -(a.ymax + a.ymin));
    const h = t.anchorPoint;
    if (h) {
      let _ = h.x,
        d = h.y;
      t.anchorPointUnits !== 'Absolute'
        ? a && ((_ *= a.xmax - a.xmin), (d *= a.ymax - a.ymin))
        : ((_ /= r), (d /= r)),
        o.translate(-_, -d);
    }
    r !== 1 && o.scale(r, r);
    let c = S(t.rotation);
    t.rotateClockwise && (c = -c),
      this._mapRotation && (c += this._mapRotation),
      c && o.rotate(c * lt);
    let u = S(t.offsetX),
      f = S(t.offsetY);
    if (u || f) {
      if (this._mapRotation) {
        const _ = lt * this._mapRotation,
          d = Math.cos(_),
          g = Math.sin(_),
          y = u * g + f * d;
        (u = u * d - f * g), (f = y);
      }
      o.translate(u, f);
    }
    const p = this.geomUnitsPerPoint();
    p !== 1 && o.scale(p, p);
    const m = e.getAngle();
    m && o.rotate(m), o.translate(e.tx, e.ty), this.push(o, t.scaleSymbolsProportionally);
    for (const _ of s) {
      (_ != null && _.symbol && _.geometry) || Zt().error('Invalid marker graphic', _);
      let d = _.textString;
      if (
        (typeof d == 'number' && (d = d.toString()),
        this.drawSymbol(_.symbol, _.geometry, d),
        this._earlyReturn)
      )
        break;
    }
    this.pop();
  }
  drawTextSymbol(t, e, s) {
    if (!t || !Xe(e) || S(t.height, Y.CIMTextSymbol.height) <= 0) return;
    const i = L.createIdentity();
    let a = S(t.angle);
    (a = -a), a && i.rotate(a * lt);
    const n = S(t.offsetX),
      r = S(t.offsetY);
    (n || r) && i.translate(n, r);
    const o = this.geomUnitsPerPoint();
    o !== 1 && i.scale(o, o),
      i.translate(e.x, e.y),
      this.push(i, !1),
      this.drawText(t, s),
      this.pop();
  }
}
class Vn extends ss {
  constructor(t, e) {
    super(t, e), this.reset();
  }
  reset() {
    (this._xmin = this._ymin = 1 / 0), (this._xmax = this._ymax = -1 / 0), (this._clipCount = 0);
  }
  envelope() {
    return new $n(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return qi(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t) {
    if (t && !(this._clipCount > 0))
      if (R(t)) this._processPath(t.rings, 0);
      else if (F(t)) this._processPath(t.paths, 0);
      else if (N(t)) {
        const e = et(t);
        e && this._processPath(e.rings, 0);
      } else console.error('drawSolidFill Unexpected geometry type!');
  }
  drawSolidStroke(t, e, s) {
    if (!t || this._clipCount > 0 || s == null || s <= 0) return;
    const i = Math.max(0.5 * this.transformSize(S(s, Y.CIMSolidStroke.width)), 0.5 * Ci);
    if (R(t)) this._processPath(t.rings, i);
    else if (F(t)) this._processPath(t.paths, i);
    else if (N(t)) {
      const a = et(t);
      a && this._processPath(a.rings, i);
    } else console.error('drawSolidStroke unexpected geometry type!');
  }
  drawMarkerLayer(t, e) {
    R(e) &&
    t.markerPlacement &&
    (t.markerPlacement.type === 'CIMMarkerPlacementInsidePolygon' ||
      (t.markerPlacement.type === 'CIMMarkerPlacementPolygonCenter' &&
        t.markerPlacement.clipAtBoundary))
      ? this._processPath(e.rings, 0)
      : super.drawMarkerLayer(t, e);
  }
  drawHatchFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureFill(t, e) {
    this.drawSolidFill(t);
  }
  drawGradientFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  drawGradientStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  pushClipPath(t) {
    this.drawSolidFill(t), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t, e) {
    const { url: s } = t,
      i = S(t.scaleX, 1);
    let a = i * e,
      n = e;
    const r = this._resourceManager.getResource(s);
    if (r != null) {
      const o = r.height / r.width;
      (a = i * (e ? (o > 1 ? e : e / o) : r.width)), (n = e ? (o > 1 ? e * o : e) : r.height);
    }
    this._merge(this.transformPt([-a / 2, -n / 2]), 0),
      this._merge(this.transformPt([-a / 2, n / 2]), 0),
      this._merge(this.transformPt([a / 2, -n / 2]), 0),
      this._merge(this.transformPt([a / 2, n / 2]), 0);
  }
  drawText(t, e) {
    if (!e || e.length === 0) return;
    this._textRasterizer || (this._textRasterizer = new di());
    const s = ki(t);
    let [i, a] = this._textRasterizer.computeTextSize(e, s);
    (i = j(i)), (a = j(a));
    const n = this.transformSize(1) * this.reverseTransformScalar(1);
    (i *= n), (a *= n);
    let r = 0;
    switch (t.horizontalAlignment) {
      case 'Left':
        r = i / 2;
        break;
      case 'Right':
        r = -i / 2;
    }
    let o = 0;
    switch (t.verticalAlignment) {
      case 'Bottom':
        o = a / 2;
        break;
      case 'Top':
        o = -a / 2;
        break;
      case 'Baseline':
        o = a / 6;
    }
    this._merge(this.transformPt([-i / 2 + r, -a / 2 + o]), 0),
      this._merge(this.transformPt([-i / 2 + r, a / 2 + o]), 0),
      this._merge(this.transformPt([i / 2 + r, -a / 2 + o]), 0),
      this._merge(this.transformPt([i / 2 + r, a / 2 + o]), 0);
  }
  _processPath(t, e) {
    if (t)
      for (const s of t) {
        const i = s ? s.length : 0;
        if (i > 1) {
          this._merge(this.transformPt(s[0]), e);
          for (let a = 1; a < i; a++) this._merge(this.transformPt(s[a]), e);
        }
      }
  }
  _merge(t, e) {
    t[0] - e < this._xmin && (this._xmin = t[0] - e),
      t[0] + e > this._xmax && (this._xmax = t[0] + e),
      t[1] - e < this._ymin && (this._ymin = t[1] - e),
      t[1] + e > this._ymax && (this._ymax = t[1] + e);
  }
}
class Oo extends ss {
  constructor() {
    super(...arguments),
      (this._searchPoint = [0, 0]),
      (this._searchDistPoint = 0),
      (this._textInfo = null),
      (this._svg = null),
      (this._path = null),
      (this._canvas = null);
  }
  destroy() {
    (this._svg = Gn(this._svg)), (this._path = null), (this._canvas = null);
  }
  hitTest(t, e, s, i, a, n) {
    var h;
    const r = n * H(1);
    this.setTransform(),
      this.setGeomUnitsPerPoint(r),
      (this._searchPoint = [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2]),
      (this._searchDistPoint = (t[2] - t[0]) / 2 / r),
      (this._textInfo = i);
    const o =
      e &&
      ((e.type === 'CIMPointSymbol' && e.angleAlignment !== 'Map') || e.type === 'CIMTextSymbol');
    if (((this._mapRotation = o ? a : 0), !Ke('esri-mobile'))) {
      const c = j(er * window.devicePixelRatio),
        u = j(sr);
      !(
        ((e == null ? void 0 : e.type) === 'CIMLineSymbol' ||
          (e == null ? void 0 : e.type) === 'CIMPolygonSymbol') &&
        (h = e.symbolLayers) != null &&
        h.some(Ui)
      ) &&
        (e == null ? void 0 : e.type) !== 'CIMMeshSymbol' &&
        (Wi(e) ?? 0) < u &&
        (this._searchDistPoint = c);
    }
    return (this._earlyReturn = !1), this.drawSymbol(e, s), this._earlyReturn;
  }
  executeEffects(t, e) {
    var s;
    return (
      ((s = t.at(-1)) == null ? void 0 : s.type) === 'CIMGeometricEffectDashes' &&
        (t = t.slice(0, -1)),
      super.executeEffects(t, e)
    );
  }
  drawSolidFill(t, e, s) {
    s != null ? this._hittestSvgPath(t, s, !0) : this._hitTestFill(t);
  }
  drawHatchFill(t, e) {
    this._hitTestFill(t);
  }
  drawPictureFill(t, e) {
    this._hitTestFill(t);
  }
  drawGradientFill(t, e) {
    this._hitTestFill(t);
  }
  drawSolidStroke(t, e, s, i, a, n, r) {
    r != null ? this._hittestSvgPath(t, r, !1, s) : this._hitTestStroke(t, s);
  }
  drawPictureStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawGradientStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawMarkerLayer(t, e) {
    t.markerPlacement &&
    (t.markerPlacement.type === 'CIMMarkerPlacementInsidePolygon' ||
      (t.markerPlacement.type === 'CIMMarkerPlacementPolygonCenter' &&
        t.markerPlacement.clipAtBoundary))
      ? this._hitTestFill(e)
      : super.drawMarkerLayer(t, e);
  }
  pushClipPath(t) {}
  popClipPath() {}
  drawImage(t, e) {
    const { url: s } = t,
      i = S(t.scaleX, 1),
      a = this._resourceManager.getResource(s);
    if (a == null || a.height === 0 || e === 0) return;
    const n = e * this.geomUnitsPerPoint(),
      r = n * i * (a.width / a.height),
      o = this.reverseTransformPt(this._searchPoint),
      h = this._searchDistPoint;
    Math.abs(o[0]) < r / 2 + h && Math.abs(o[1]) < n / 2 + h && (this._earlyReturn = !0);
  }
  drawText(t, e) {
    var m;
    const s = this._textInfo;
    if (!s) return;
    const i = s.get(t);
    if (!i || !i.glyphMosaicItems.glyphs.length) return;
    const a = Mi(S(t.height, Y.CIMTextSymbol.height)),
      { lineGapType: n, lineGap: r } = t,
      o = n ? wi(n, S(r), a) : 0,
      h = ((m = t.callout) == null ? void 0 : m.type) === 'CIMBackgroundCallout',
      c = bi(i.glyphMosaicItems, {
        scale: a / Ds,
        angle: 0,
        xOffset: 0,
        yOffset: 0,
        horizontalAlignment: t.horizontalAlignment,
        verticalAlignment: t.verticalAlignment,
        maxLineWidth: Si(t.lineWidth),
        lineHeight: Ns * Math.max(0.25, Math.min(o || 1, 4)),
        decoration: t.font.decoration || 'none',
        useCIMAngleBehavior: !0,
        hasBackground: h,
      }),
      u = this.reverseTransformPt(this._searchPoint),
      f = u[0],
      p = u[1];
    for (const _ of c.glyphs)
      if (f > _.xTopLeft && f < _.xBottomRight && p > -_.yBottomRight && p < -_.yTopLeft) {
        this._earlyReturn = !0;
        break;
      }
  }
  _hitTestFill(t) {
    let e = null;
    if (N(t)) {
      const i = t;
      e = [
        [
          [i.xmin, i.ymin],
          [i.xmin, i.ymax],
          [i.xmax, i.ymax],
          [i.xmax, i.ymin],
          [i.xmin, i.ymin],
        ],
      ];
    } else if (R(t)) e = t.rings;
    else {
      if (!F(t)) return;
      e = t.paths;
    }
    const s = this.reverseTransformPt(this._searchPoint);
    qn(s, e) && (this._earlyReturn = !0),
      !this._earlyReturn &&
        Ts(
          s,
          e,
          this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint(),
        ) &&
        (this._earlyReturn = !0);
  }
  _getSvgPath() {
    return (
      (this._svg != null && this._path != null) ||
        (this._svg ?? (this._svg = Rn()),
        this._path ?? (this._path = gi('path')),
        this._svg.appendChild(this._path)),
      this._path
    );
  }
  _getCanvasContext(t, e) {
    return (
      this._canvas ?? (this._canvas = document.createElement('canvas')),
      (this._canvas.width = t),
      (this._canvas.height = e),
      this._canvas.getContext('2d', { willReadFrequently: !0 })
    );
  }
  _hittestSvgPath(t, e, s, i = 0) {
    const a = this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint(),
      n = this.reverseTransformPt(this._searchPoint),
      r = _t();
    Qe(r, t);
    const o = { x: r[0], y: r[1], width: r[2] - r[0], height: r[3] - r[1] },
      h = this._getSvgPath();
    h.setAttribute('d', e);
    const c = h.getBBox();
    let u = Math.max(c.width / o.width, c.height / o.height),
      f = 1;
    const p = 2 * a * u;
    p < 1 && ((f = 2 / p), (u *= f), (c.x *= f), (c.y *= f), (c.width *= f), (c.height *= f));
    const m = 1 + (i * u) / 2,
      _ = this._getCanvasContext(c.width + 2 * m, c.height + 2 * m);
    _.setTransform(f, 0, 0, f, -c.x + m, -c.y + m);
    const d = new Path2D(e);
    s ? _.fill(d) : ((_.lineWidth = i * (u / f)), _.stroke(d));
    const g = (o.width * u - c.width) / 2,
      y = (o.height * u - c.height) / 2,
      P = Math.floor((n[0] - o.x - a) * u - g + m),
      x = Math.floor((o.height - (n[1] - o.y) - a) * u + y + m),
      b = Math.ceil(2 * a * u),
      M = Math.ceil(2 * a * u),
      w = _.getImageData(P, x, b, M).data;
    for (let I = 3; I < w.length; I += 4) if (w[I] > 127.5) return void (this._earlyReturn = !0);
  }
  _hitTestStroke(t, e) {
    let s = null;
    if (N(t)) {
      const i = t;
      s = [
        [
          [i.xmin, i.ymin],
          [i.xmin, i.ymax],
          [i.xmax, i.ymax],
          [i.xmax, i.ymin],
          [i.xmin, i.ymin],
        ],
      ];
    } else if (R(t)) s = t.rings;
    else {
      if (!F(t)) return;
      s = t.paths;
    }
    Ts(
      this.reverseTransformPt(this._searchPoint),
      s,
      (S(e, Y.CIMSolidStroke.width) * this.geomUnitsPerPoint()) / 2 +
        this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint(),
    ) && (this._earlyReturn = !0);
  }
}
class Un extends ss {
  constructor(t, e, s, i) {
    super(e, s),
      (this._applyAdditionalRenderProps = i),
      (this._colorSubstitutionHelper = new Ln()),
      (this._ctx = t);
  }
  drawSolidFill(t, e) {
    if (!t) return;
    if (R(t)) this._buildPath(t.rings, !0);
    else if (F(t)) this._buildPath(t.paths, !0);
    else if (N(t)) this._buildPath(et(t).rings, !0);
    else {
      if (!ye(t)) return;
      console.log('CanvasDrawHelper.drawSolidFill - No implementation!');
    }
    const s = this._ctx;
    (s.fillStyle =
      typeof e == 'string'
        ? e
        : 'rgba(' +
          Math.round(e[0]) +
          ',' +
          Math.round(e[1]) +
          ',' +
          Math.round(e[2]) +
          ',' +
          (e[3] ?? 255) / 255 +
          ')'),
      s.fill('evenodd');
  }
  drawSolidStroke(t, e, s, i, a, n) {
    if (!t || !e || s === 0) return;
    if (R(t)) this._buildPath(t.rings, !0);
    else if (F(t)) this._buildPath(t.paths, !1);
    else {
      if (!N(t)) return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(et(t).rings, !0);
    }
    const r = this._ctx;
    (r.strokeStyle =
      typeof e == 'string'
        ? e
        : 'rgba(' +
          Math.round(e[0]) +
          ',' +
          Math.round(e[1]) +
          ',' +
          Math.round(e[2]) +
          ',' +
          (e[3] ?? 255) / 255 +
          ')'),
      (r.lineWidth = Math.max(this.transformSize(s), Ci)),
      this._setCapStyle(i),
      this._setJoinStyle(a),
      (r.miterLimit = n),
      r.stroke();
  }
  pushClipPath(t) {
    if ((this._ctx.save(), R(t))) this._buildPath(t.rings, !0);
    else if (F(t)) this._buildPath(t.paths, !0);
    else {
      if (!N(t)) return;
      this._buildPath(et(t).rings, !0);
    }
    this._ctx.clip('evenodd');
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t, e) {
    const { colorSubstitutions: s, url: i, tintColor: a } = t,
      n = S(t.scaleX, 1),
      r = this._resourceManager.getResource(i);
    if (r == null) return;
    let o = e * (r.width / r.height),
      h = e;
    e || ((o = r.width), (h = r.height));
    const c = pt(i) || ('src' in r && pt(r.src));
    let u = 'getFrame' in r ? Ne(r) : r;
    s && (u = this._colorSubstitutionHelper.applyColorSubstitution(u, s)),
      this._applyAdditionalRenderProps &&
        !c &&
        a &&
        (u = this._colorSubstitutionHelper.tintImageData(u, a));
    const f = this.transformPt([0, 0]),
      [p, m] = this.getTransformAngle(),
      _ = this.transformSize(1),
      d = this._ctx;
    d.save(),
      d.setTransform({
        m11: n * _ * p,
        m12: n * _ * m,
        m21: -_ * m,
        m22: _ * p,
        m41: f[0],
        m42: f[1],
      }),
      d.drawImage(u, -o / 2, -h / 2, o, h),
      d.restore();
  }
  drawText(t, e) {
    if (!e || e.length === 0) return;
    this._textRasterizer || (this._textRasterizer = new di());
    const s = ki(t, this.transformSize(j(1))),
      i = this._textRasterizer.rasterizeText(e, s);
    if (!i) return;
    const { size: a, anchorX: n, anchorY: r, canvas: o } = i,
      h = a[0] * (n + 0.5),
      c = a[1] * (r - 0.5),
      u = this._ctx,
      f = this.transformPt([0, 0]),
      [p, m] = this.getTransformAngle(),
      _ = 1;
    u.save(),
      u.setTransform({
        m11: _ * p,
        m12: _ * m,
        m21: -1 * m,
        m22: _ * p,
        m41: f[0] - _ * h,
        m42: f[1] + _ * c,
      }),
      u.drawImage(o, 0, 0),
      u.restore();
  }
  drawPictureFill(t, e) {
    if (!t) return;
    let {
      colorSubstitutions: s,
      height: i,
      offsetX: a,
      offsetY: n,
      rotation: r,
      scaleX: o,
      tintColor: h,
      url: c,
    } = e;
    const u = this._resourceManager.getResource(c);
    if (u == null) return;
    if (R(t)) this._buildPath(t.rings, !0);
    else if (F(t)) this._buildPath(t.paths, !0);
    else if (N(t)) this._buildPath(et(t).rings, !0);
    else {
      if (!ye(t)) return;
      console.log('CanvasDrawHelper.drawPictureFill - No implementation!');
    }
    const f = this._ctx,
      p = pt(c) || ('src' in u && pt(u.src));
    let m,
      _ = 'getFrame' in u ? Ne(u) : u;
    if (
      (s && (_ = this._colorSubstitutionHelper.applyColorSubstitution(_, s)),
      this._applyAdditionalRenderProps)
    ) {
      p || (h && (_ = this._colorSubstitutionHelper.tintImageData(_, h))),
        (m = f.createPattern(_, 'repeat'));
      const d = this.transformSize(1);
      r || (r = 0), a ? (a *= d) : (a = 0), n ? (n *= d) : (n = 0), i && (i *= d);
      const g = i ? i / u.height : 1,
        y = o && i ? (o * i) / u.width : 1;
      if (r !== 0 || g !== 1 || y !== 1 || a !== 0 || n !== 0) {
        const P = new DOMMatrix();
        P.rotateSelf(0, 0, -r).translateSelf(a, n).scaleSelf(y, g, 1), m.setTransform(P);
      }
    } else m = f.createPattern(_, 'repeat');
    f.save(), (f.fillStyle = m), f.fill('evenodd'), f.restore();
  }
  drawPictureStroke(t, e) {
    if (!t) return;
    let {
      colorSubstitutions: s,
      capStyle: i,
      joinStyle: a,
      miterLimit: n,
      tintColor: r,
      url: o,
      width: h,
    } = e;
    const c = this._resourceManager.getResource(o);
    if (c == null) return;
    let u;
    if (R(t)) u = t.rings;
    else if (F(t)) u = t.paths;
    else {
      if (!N(t))
        return ye(t)
          ? void console.log('CanvasDrawHelper.drawPictureStroke - No implementation!')
          : void 0;
      u = et(t).rings;
    }
    h || (h = c.width);
    const f = pt(o) || ('src' in c && pt(c.src));
    let p = 'getFrame' in c ? Ne(c) : c;
    s && (p = this._colorSubstitutionHelper.applyColorSubstitution(p, s)),
      this._applyAdditionalRenderProps &&
        (f || (r && (p = this._colorSubstitutionHelper.tintImageData(p, r))));
    const m = Math.max(this.transformSize(H(h)), 0.5),
      _ = m / p.width,
      d = this._ctx,
      g = d.createPattern(p, 'repeat-y');
    let y, P;
    d.save(),
      this._setCapStyle(i),
      this._setJoinStyle(a),
      n !== void 0 && (d.miterLimit = n),
      (d.lineWidth = m);
    for (let x of u)
      if (((x = ut(x)), Ls(x), x && !(x.length <= 1))) {
        y = this.transformPt(x[0]);
        for (let b = 1; b < x.length; b++) {
          P = this.transformPt(x[b]);
          const M = Jn(y, P),
            w = new DOMMatrix();
          w
            .translateSelf(0, y[1] - m / 2)
            .scaleSelf(_, _, 1)
            .rotateSelf(0, 0, 90 - M),
            g.setTransform(w),
            (d.strokeStyle = g),
            d.beginPath(),
            d.moveTo(y[0], y[1]),
            d.lineTo(P[0], P[1]),
            d.stroke(),
            (y = P);
        }
      }
    d.restore();
  }
  drawGradientFill(t, e) {
    if (!t) return;
    let s;
    if (R(t)) s = t.rings;
    else if (F(t)) s = t.paths;
    else {
      if (!N(t)) return void Zt().error('Unable to draw gradient fill');
      s = et(t).rings;
    }
    this._buildPath(s, !0);
    const { angle: i, gradientMethod: a, gradientSize: n, gradientSizeUnits: r } = e,
      o = Y.CIMGradientFill,
      h = e.gradientType ?? o.gradientType,
      c = -or(i ?? 0),
      u = Ji();
    for (const g of s) {
      const y = g ? g.length : 0;
      if (y > 1)
        for (let P = 0; P < y; P++) {
          let x = this.transformPt(g[P]);
          (a !== 'Linear' && a !== 'Rectangular') || (x = Q(x, -c)), It(u, x);
        }
    }
    const [f, p, m, _] = u,
      d = this._ctx;
    switch ((d.save(), a)) {
      case 'Buffered':
        Zt().error(`Gradient method "${a}" currently unsupported.`);
        break;
      case 'Linear': {
        const g = (p + _) / 2,
          y = r === 'Absolute' ? this.transformSize(H(n)) : bt(n, o.gradientSize) * (m - f),
          [P, x] = h === 'Discrete' ? [m, m - y] : [f + y, f],
          b = Q([P, g], c),
          M = Q([x, g], c),
          w = d.createLinearGradient(b[0], b[1], M[0], M[1]);
        he(w, e), (d.fillStyle = w), d.fill('evenodd');
        break;
      }
      case 'Circular': {
        const g = cs(u),
          y = Ki(u) / 2,
          P = r === 'Absolute' ? this.transformSize(H(n)) : bt(n, o.gradientSize) * y,
          [x, b] = h === 'Discrete' ? [y, y - P] : [P, 0],
          M = d.createRadialGradient(g[0], g[1], x, g[0], g[1], b);
        he(M, e), (d.fillStyle = M), d.fill('evenodd');
        break;
      }
      case 'Rectangular': {
        const g = cs(u),
          y = g[0],
          P = g[1],
          x = Q(g, c),
          b = (T, G, D, X, A, $, Te, Li) => {
            d.save(), this.pushClipPath(t);
            const is = Q([A, $], c),
              rs = Q([Te, Li], c);
            d.beginPath(),
              d.moveTo(x[0], x[1]),
              d.lineTo(is[0], is[1]),
              d.lineTo(rs[0], rs[1]),
              d.lineTo(x[0], x[1]),
              d.clip();
            const ns = Q([T, G], c),
              as = Q([D, X], c),
              os = d.createLinearGradient(ns[0], ns[1], as[0], as[1]);
            he(os, e), (d.fillStyle = os), d.fill('evenodd'), d.restore();
          };
        let M = r === 'Absolute' ? this.transformSize(H(n)) : bt(n, o.gradientSize) * (ji(u) / 2),
          [w, I] = h === 'Discrete' ? [m, m - M] : [y + M, y];
        b(w, P, I, P, m, p, m, _),
          ([w, I] = h === 'Discrete' ? [f, f + M] : [y - M, y]),
          b(w, P, I, P, f, _, f, p),
          (M = r === 'Absolute' ? this.transformSize(H(n)) : bt(n, o.gradientSize) * (Zi(u) / 2));
        let [v, k] = h === 'Discrete' ? [_, _ - M] : [P + M, P];
        b(y, v, y, k, m, _, f, _),
          ([v, k] = h === 'Discrete' ? [p, p + M] : [P - M, P]),
          b(y, v, y, k, f, p, m, p);
        break;
      }
    }
    d.restore();
  }
  drawGradientStroke(t, e) {
    const {
      capStyle: s,
      gradientMethod: i,
      gradientSize: a,
      gradientSizeUnits: n,
      joinStyle: r,
      miterLimit: o,
      width: h,
    } = e;
    if (!t || h === 0) return;
    let c;
    if (R(t)) c = t.rings;
    else if (F(t)) c = t.paths;
    else {
      if (!N(t)) return void Zt().error('Unable to draw gradient stroke');
      c = et(t).rings;
    }
    const u = e.gradientType ?? Y.CIMGradientStroke.gradientType,
      f = Math.max(this.transformSize(H(h)), 0.5),
      p = this._ctx;
    let m, _;
    p.save(),
      this._setCapStyle(s),
      this._setJoinStyle(r),
      o !== void 0 && (p.miterLimit = o),
      (p.lineWidth = f);
    for (let d of c) {
      if (((d = ut(d)), Ls(d), !d || d.length <= 1)) continue;
      let g = 0;
      m = this.transformPt(d[0]);
      for (let x = 1; x < d.length; x++) {
        _ = this.transformPt(d[x]);
        const b = _[0] - m[0],
          M = _[1] - m[1];
        (g += Math.sqrt(b * b + M * M)), (m = _);
      }
      const y =
        n === 'Absolute'
          ? this.transformSize(H(a))
          : bt(a, Y.CIMGradientStroke.gradientSize) * (i === 'AcrossLine' ? f : g);
      let P = 0;
      m = this.transformPt(d[0]);
      for (let x = 1; x < d.length; x++) {
        _ = this.transformPt(d[x]);
        const b = _[0] - m[0],
          M = _[1] - m[1],
          w = Math.sqrt(b * b + M * M);
        let I, v, k, T;
        switch (i) {
          case 'AcrossLine': {
            const [D, X] = Q([b / w, M / w], -Math.PI / 2),
              A = f / 2,
              $ = u === 'Discrete' ? A : y - A;
            (I = (m[0] + _[0]) / 2 + D * $),
              (v = (m[1] + _[1]) / 2 + X * $),
              (k = I - D * y),
              (T = v - X * y);
            break;
          }
          case 'AlongLine': {
            const D = b / w,
              X = M / w;
            u === 'Discrete'
              ? ((I = m[0] - D * P), (v = m[1] - X * P), (k = I + D * y), (T = v + X * y))
              : ((k = m[0] + D * (g - P)),
                (T = m[1] + X * (g - P)),
                (I = k - D * y),
                (v = T - X * y));
            break;
          }
          default:
            return Zt().error('Unrecognized gradient method:', i), void p.restore();
        }
        const G = p.createLinearGradient(I, v, k, T);
        he(G, e),
          (p.strokeStyle = G),
          p.beginPath(),
          p.moveTo(m[0], m[1]),
          p.lineTo(_[0], _[1]),
          p.stroke(),
          (P += w),
          (m = _);
      }
    }
    p.restore();
  }
  _buildPath(t, e) {
    const s = this._ctx;
    if ((s.beginPath(), t))
      for (const i of t) {
        const a = i ? i.length : 0;
        if (a > 1) {
          let n = this.transformPt(i[0]);
          s.moveTo(n[0], n[1]);
          for (let r = 1; r < a; r++) (n = this.transformPt(i[r])), s.lineTo(n[0], n[1]);
          e && s.closePath();
        }
      }
  }
  _setCapStyle(t) {
    switch (t) {
      case V.Butt:
        this._ctx.lineCap = 'butt';
        break;
      case V.Round:
        this._ctx.lineCap = 'round';
        break;
      case V.Square:
        this._ctx.lineCap = 'square';
    }
  }
  _setJoinStyle(t) {
    switch (t) {
      case st.Bevel:
        this._ctx.lineJoin = 'bevel';
        break;
      case st.Round:
        this._ctx.lineJoin = 'round';
        break;
      case st.Miter:
        this._ctx.lineJoin = 'miter';
    }
  }
}
function Wn(l, t, e) {
  let s = S(l.separation, Y.CIMHatchFill.separation) * e,
    i = S(l.rotation);
  if (s === 0) return null;
  s < 0 && (s = -s);
  let a = 0;
  const n = 0.5 * s;
  for (; a > n; ) a -= s;
  for (; a < -n; ) a += s;
  const r = _t();
  Qe(r, t), (r[0] -= n), (r[1] -= n), (r[2] += n), (r[3] += n);
  const o = [
    [r[0], r[1]],
    [r[0], r[3]],
    [r[2], r[3]],
    [r[2], r[1]],
  ];
  for (; i > 180; ) i -= 180;
  for (; i < 0; ) i += 180;
  const h = Math.cos(i * lt),
    c = Math.sin(i * lt),
    u = -s * c,
    f = s * h;
  let p, m, _, d;
  (a = S(l.offsetX) * e * c - S(l.offsetY) * e * h),
    (p = _ = Number.MAX_VALUE),
    (m = d = -Number.MAX_VALUE);
  for (const w of o) {
    const I = w[0],
      v = w[1],
      k = h * I + c * v,
      T = -c * I + h * v;
    (p = Math.min(p, k)), (_ = Math.min(_, T)), (m = Math.max(m, k)), (d = Math.max(d, T));
  }
  _ = Math.floor(_ / s) * s;
  let g = h * p - c * _ - (u * a) / s,
    y = c * p + h * _ - (f * a) / s,
    P = h * m - c * _ - (u * a) / s,
    x = c * m + h * _ - (f * a) / s;
  const b = 1 + Math.round((d - _) / s),
    M = [];
  for (let w = 0; w < b; w++)
    (g += u),
      (y += f),
      (P += u),
      (x += f),
      M.push([
        [g, y],
        [P, x],
      ]);
  return { paths: M };
}
function qn(l, t) {
  let e = 0;
  for (const s of t) {
    const i = s.length;
    for (let a = 1; a < i; a++) {
      const n = s[a - 1],
        r = s[a];
      n[1] > l[1] != r[1] > l[1] &&
        ((r[0] - n[0]) * (l[1] - n[1]) - (r[1] - n[1]) * (l[0] - n[0]) > 0 ? e++ : e--);
    }
  }
  return e !== 0;
}
function Ts(l, t, e) {
  for (const s of t) {
    const i = s.length;
    for (let a = 1; a < i; a++) {
      const n = s[a - 1],
        r = s[a];
      let o = (r[0] - n[0]) * (r[0] - n[0]) + (r[1] - n[1]) * (r[1] - n[1]);
      if (o === 0) continue;
      o = Math.sqrt(o);
      const h = ((r[0] - n[0]) * (l[1] - n[1]) - (r[1] - n[1]) * (l[0] - n[0])) / o;
      if (Math.abs(h) < e) {
        const c = ((r[0] - n[0]) * (l[0] - n[0]) + (r[1] - n[1]) * (l[1] - n[1])) / o;
        if (c > -e && c < o + e) return !0;
      }
    }
  }
  return !1;
}
function Jn(l, t) {
  const e = t[0] - l[0],
    s = t[1] - l[1];
  return (180 / Math.PI) * Math.atan2(s, e);
}
const et = (l) =>
    l
      ? {
          spatialReference: l.spatialReference,
          rings: [
            [
              [l.xmin, l.ymin],
              [l.xmin, l.ymax],
              [l.xmax, l.ymax],
              [l.xmax, l.ymin],
              [l.xmin, l.ymin],
            ],
          ],
        }
      : null,
  wi = (l, t, e) => {
    switch (l) {
      case 'ExtraLeading':
        return 1 + t / e;
      case 'Multiple':
        return t;
      case 'Exact':
        return t / e;
    }
  };
function ki(l, t = 1) {
  var P;
  const e = Xs(l),
    s = Hs(l.fontStyleName),
    i = l.fontFamilyName ?? ts,
    { weight: a, style: n } = s,
    r = t * (l.height || 5),
    o = ir(l.horizontalAlignment),
    h = rr(l.verticalAlignment),
    c = Ae(l),
    u = Ae(l.haloSymbol),
    f = u != null ? t * (l.haloSize ?? 0) : 0,
    p = us(l.symbol),
    m = t * (fs(l.symbol) || 0),
    _ =
      ((P = l.callout) == null ? void 0 : P.type) === 'CIMBackgroundCallout'
        ? l.callout.backgroundSymbol
        : null,
    d = Ae(_),
    g = fs(_),
    y = us(_);
  return {
    color: c,
    size: r,
    horizontalAlignment: o,
    verticalAlignment: h,
    font: { family: i, style: ar(n), weight: nr(a), decoration: e },
    outline: { size: m || 0, color: p },
    halo: { size: f || 0, color: u, style: n },
    backgroundColor: d,
    borderLine: g != null && y != null ? { size: g, color: y } : null,
    pixelRatio: 1,
    premultiplyColors: !0,
  };
}
const jn = 1e-4;
function Ls(l) {
  let t,
    e,
    s,
    i,
    a,
    n = l[0],
    r = 1;
  for (; r < l.length; )
    (t = l[r][0] - n[0]),
      (e = l[r][1] - n[1]),
      (i = t !== 0 ? e / t : Math.PI / 2),
      s !== void 0 && Math.abs(i - s) <= jn
        ? (l.splice(r - 1, 1), (n = a))
        : ((a = n), (n = l[r]), r++),
      (s = i);
}
const vi = Math.PI,
  Zn = vi / 2,
  $s = Math.PI / 180,
  De = 96 / 72,
  Kn = 1.4142135623730951,
  As = 2,
  Es = 4,
  Ce = () => Ze.getLogger('esri.symbols.cim.CIMSymbolHelper');
function Fo(l) {
  let t;
  switch (l.type) {
    case 'cim':
      return l.data;
    case 'web-style':
      return l;
    case 'simple-marker': {
      const e = q.fromSimpleMarker(l);
      if (!e) throw new Error('InternalError: Cannot convert symbol to CIM');
      t = e;
      break;
    }
    case 'picture-marker':
      t = q.fromPictureMarker(l);
      break;
    case 'simple-line':
      t = q.fromSimpleLineSymbol(l);
      break;
    case 'simple-fill':
      t = q.fromSimpleFillSymbol(l);
      break;
    case 'picture-fill':
      t = q.fromPictureFillSymbol(l);
      break;
    case 'text':
      t = q.fromTextSymbol(l);
  }
  return { type: 'CIMSymbolReference', symbol: t };
}
function be(l, t, e) {
  switch (t.type) {
    case 'CIMSymbolReference':
      return be(l, t.symbol, e);
    case 'CIMPointSymbol':
      e == null && (e = { x: 0, y: 0 }), l.drawSymbol(t, e);
      break;
    case 'CIMLineSymbol':
      e == null &&
        (e = {
          paths: [
            [
              [0, 0],
              [10, 0],
            ],
          ],
        }),
        l.drawSymbol(t, e);
      break;
    case 'CIMPolygonSymbol':
      e == null &&
        (e = {
          rings: [
            [
              [0, 0],
              [0, 10],
              [10, 10],
              [10, 0],
              [0, 0],
            ],
          ],
        }),
        l.drawSymbol(t, e);
      break;
    case 'CIMTextSymbol': {
      const s = { x: 0, y: 0 };
      l.drawSymbol(t, s);
      break;
    }
    case 'CIMVectorMarker': {
      const s = new yt();
      l.drawMarker(t, s);
      break;
    }
  }
  return l.envelope();
}
function Qn(l) {
  if (!l) return 0;
  switch (l.type) {
    case 'CIMMarkerPlacementAlongLineSameSize':
    case 'CIMMarkerPlacementAlongLineRandomSize':
    case 'CIMMarkerPlacementAtExtremities':
    case 'CIMMarkerPlacementAtMeasuredUnits':
    case 'CIMMarkerPlacementAtRatioPositions':
    case 'CIMMarkerPlacementOnLine':
    case 'CIMMarkerPlacementOnVertices':
      return Math.abs(l.offset);
    default:
      return 0;
  }
}
function ta(l) {
  if (!l) return 0;
  switch (l.type) {
    case 'CIMGeometricEffectArrow':
      return Math.abs(0.5 * l.width);
    case 'CIMGeometricEffectBuffer':
      return Math.abs(l.size);
    case 'CIMGeometricEffectControlMeasureLine':
      return 500;
    case 'CIMGeometricEffectExtension':
    case 'CIMGeometricEffectRadial':
      return Math.abs(l.length);
    case 'CIMGeometricEffectJog':
      return Math.abs(0.5 * l.length);
    case 'CIMGeometricEffectMove':
      return Math.max(Math.abs(S(l.offsetX)), Math.abs(S(l.offsetY)));
    case 'CIMGeometricEffectOffset':
    case 'CIMGeometricEffectOffsetTangent':
      return Math.abs(l.offset);
    case 'CIMGeometricEffectRegularPolygon':
      return Math.abs(l.radius);
    case 'CIMGeometricEffectRotate':
    case 'CIMGeometricEffectScale':
    default:
      return 0;
    case 'CIMGeometricEffectTaperedPolygon':
      return 0.5 * Math.max(Math.abs(l.fromWidth), Math.abs(l.toWidth));
    case 'CIMGeometricEffectWave':
      return Math.abs(l.amplitude);
    case 'CIMGeometricEffectDonut':
      return Math.abs(l.width);
  }
}
function Rs(l) {
  if (!l) return 0;
  let t = 0;
  for (const e of l) t += ta(e);
  return t;
}
class No {
  static getSymbolInflateSize(t, e, s, i, a) {
    return t || (t = [0, 0, 0, 0]), e ? this._getInflateSize(t, e, s, i, a) : t;
  }
  static safeSize(t) {
    const e = Math.max(Math.abs(t[0]), Math.abs(t[2])),
      s = Math.max(Math.abs(t[1]), Math.abs(t[3]));
    return Math.sqrt(e * e + s * s);
  }
  static _vectorMarkerBounds(t, e, s, i) {
    let a = !0;
    const n = _t();
    if (e != null && e.markerGraphics)
      for (const r of e.markerGraphics) {
        const o = [0, 0, 0, 0];
        r.geometry &&
          (Qe(n, r.geometry),
          (o[0] = 0),
          (o[1] = 0),
          (o[2] = 0),
          (o[3] = 0),
          this.getSymbolInflateSize(o, r.symbol, s, 0, i),
          (n[0] += o[0]),
          (n[1] += o[1]),
          (n[2] += o[2]),
          (n[3] += o[3]),
          a
            ? ((t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (a = !1))
            : ((t[0] = Math.min(t[0], n[0])),
              (t[1] = Math.min(t[1], n[1])),
              (t[2] = Math.max(t[2], n[2])),
              (t[3] = Math.max(t[3], n[3]))));
      }
    return t;
  }
  static _getInflateSize(t, e, s, i, a) {
    if (aa(e)) {
      const n = this._getLayersInflateSize(t, e.symbolLayers, s, i, a),
        r = Rs(e.effects);
      return r > 0 && ((n[0] -= r), (n[1] -= r), (n[2] += r), (n[3] += r)), n;
    }
    return this._getTextInflatedSize(t, e, a);
  }
  static _getLayersInflateSize(t, e, s, i, a) {
    let n = !0;
    if (!e) return t;
    for (const r of e) {
      if (!r) continue;
      let o = [0, 0, 0, 0];
      switch (r.type) {
        case 'CIMSolidFill':
        case 'CIMPictureFill':
        case 'CIMHatchFill':
        case 'CIMGradientFill':
          break;
        case 'CIMSolidStroke':
        case 'CIMPictureStroke':
        case 'CIMGradientStroke': {
          const c = r;
          let u = c.width;
          u != null &&
            (c.capStyle === V.Square || c.joinStyle === st.Miter ? (u /= Kn) : (u /= 2),
            (o[0] = -u),
            (o[1] = -u),
            (o[2] = u),
            (o[3] = u));
          break;
        }
        case 'CIMCharacterMarker':
        case 'CIMVectorMarker':
        case 'CIMPictureMarker': {
          const c = r;
          if (r.type === 'CIMVectorMarker') {
            const _ = r;
            if (((o = this._vectorMarkerBounds(o, _, s, a)), _.frame)) {
              const d = (_.frame.xmin + _.frame.xmax) / 2,
                g = (_.frame.ymin + _.frame.ymax) / 2;
              if (((o[0] -= d), (o[1] -= g), (o[2] -= d), (o[3] -= g), _.size != null)) {
                const y = _.size / (_.frame.ymax - _.frame.ymin);
                (o[0] *= y), (o[1] *= y), (o[2] *= y), (o[3] *= y);
              }
            }
          } else if (r.type === 'CIMPictureMarker') {
            const _ = r,
              d = s.getResource(_.url);
            let g = 1;
            if ((d != null && d.height && (g = d.width / d.height), c.size != null)) {
              const y = c.size / 2,
                P = (c.size * g * _.scaleX) / 2;
              o = [-P, -y, P, y];
            }
          } else if (c.size != null) {
            const _ = c.size / 2;
            o = [-_, -_, _, _];
          }
          if (c.anchorPoint) {
            let _, d;
            c.anchorPointUnits === 'Absolute'
              ? ((_ = c.anchorPoint.x), (d = c.anchorPoint.y))
              : ((_ = c.anchorPoint.x * (o[2] - o[0])), (d = c.anchorPoint.y * (o[3] - o[1])));
            const g = 1.25 * Math.sqrt(_ * _ + d * d);
            (o[0] -= g), (o[1] -= g), (o[2] += g), (o[3] += g);
          }
          let u = S(c.rotation);
          if ((c.rotateClockwise && (u = -u), i && (u -= i), u)) {
            const _ = $s * u,
              d = Math.cos(_),
              g = Math.sin(_),
              y = _t([oe, oe, -oe, -oe]);
            It(y, [o[0] * d - o[1] * g, o[0] * g + o[1] * d]),
              It(y, [o[0] * d - o[3] * g, o[0] * g + o[3] * d]),
              It(y, [o[2] * d - o[1] * g, o[2] * g + o[1] * d]),
              It(y, [o[2] * d - o[3] * g, o[2] * g + o[3] * d]),
              (o = y);
          }
          let f = S(c.offsetX),
            p = S(c.offsetY);
          if (i) {
            const _ = $s * i,
              d = Math.cos(_),
              g = Math.sin(_),
              y = f * g + p * d;
            (f = f * d - p * g), (p = y);
          }
          (o[0] += f), (o[1] += p), (o[2] += f), (o[3] += p);
          const m = Qn(c.markerPlacement);
          m > 0 && ((o[0] -= m), (o[1] -= m), (o[2] += m), (o[3] += m));
          break;
        }
      }
      const h = Rs(r.effects);
      h > 0 && ((o[0] -= h), (o[1] -= h), (o[2] += h), (o[3] += h)),
        n
          ? ((t[0] = o[0]), (t[1] = o[1]), (t[2] = o[2]), (t[3] = o[3]), (n = !1))
          : ((t[0] = Math.min(t[0], o[0])),
            (t[1] = Math.min(t[1], o[1])),
            (t[2] = Math.max(t[2], o[2])),
            (t[3] = Math.max(t[3], o[3])));
    }
    return t;
  }
  static _getTextInflatedSize(t, e, s) {
    var f;
    const i = Mi(e.height ?? Y.CIMTextSymbol.height);
    if (((t[0] = -i / 2), (t[1] = -i / 2), (t[2] = i / 2), (t[3] = i / 2), !s)) return t;
    const a = s.get(e);
    if (!a || !a.glyphMosaicItems.glyphs.length) return t;
    const { lineGapType: n, lineGap: r } = e,
      o = n ? wi(n, r ?? 0, i) : 0,
      h = ((f = e.callout) == null ? void 0 : f.type) === 'CIMBackgroundCallout',
      c = bi(a.glyphMosaicItems, {
        scale: i / Ds,
        angle: S(e.angle),
        xOffset: S(e.offsetX),
        yOffset: S(e.offsetY),
        horizontalAlignment: e.horizontalAlignment,
        verticalAlignment: e.verticalAlignment,
        maxLineWidth: Si(e.lineWidth),
        lineHeight: Ns * Math.max(0.25, Math.min(o || 1, 4)),
        decoration: e.font.decoration || 'none',
        useCIMAngleBehavior: !0,
        hasBackground: h,
      }).boundsT,
      u = Math.sqrt(c.width * c.width + c.height * c.height);
    return (t[0] -= c.x + u), (t[1] -= c.y - u), (t[2] += c.x + u), (t[3] += -c.y + u), t;
  }
}
class q {
  static getEnvelope(t, e, s) {
    if (!t) return null;
    const i = new Vn(s);
    if (Array.isArray(t)) {
      let a;
      for (const n of t) a ? a.union(be(i, n, e)) : (a = be(i, n, e));
      return a;
    }
    return be(i, t, e);
  }
  static getTextureInfo(t, e, s, i, a) {
    const n = i ?? this.getEnvelope(t, null, e);
    if (!n) return [0, 0, 0, 0, 1];
    const r = Math.max(n.width, n.height) * De;
    let o = a != null ? Math.max(a / r, 1) : 1;
    (o *= De),
      (n.x *= o),
      (n.y *= o),
      (n.width *= o),
      (n.height *= o),
      (n.width = Math.max(Math.ceil(n.x + n.width) - Math.floor(n.x), 1) - 1),
      (n.height = Math.max(Math.ceil(n.y + n.height) - Math.floor(n.y), 1) - 1);
    let h = n.x + 0.5 * n.width,
      c = n.y + 0.5 * n.height;
    return (
      (h += n.x - Math.floor(n.x)),
      (c += n.y - Math.floor(n.y)),
      i || ((n.width += s), (n.height += s), (h += s / 2), (c += s / 2)),
      [n.width, n.height, h, c, o]
    );
  }
  static getTextureAnchor(t, e, s) {
    const [i, a, n, r, o] = this.getTextureInfo(t, e, As, null, s);
    return [-n / i, -r / a, (a / o) * De];
  }
  static rasterize(t, e, s, i, a = !0, n) {
    const [r, o, h, c, u] = this.getTextureInfo(e, i, As, s, n);
    (t.width = r), (t.height = o);
    const f = t.getContext('2d', { willReadFrequently: !0 }),
      p = L.createScale(u, -u);
    p.translate(0.5 * r - h, 0.5 * o + c);
    const m = new Un(f, i, p);
    switch (e.type) {
      case 'CIMPointSymbol': {
        const g = { type: 'point', x: 0, y: 0 };
        m.drawSymbol(e, g);
        break;
      }
      case 'CIMVectorMarker': {
        const g = new yt();
        m.drawMarker(e, g);
        break;
      }
    }
    const _ = f.getImageData(0, 0, t.width, t.height),
      d = new Uint8Array(_.data);
    if (a) {
      let g;
      for (let y = 0; y < d.length; y += 4)
        (g = d[y + 3] / 255),
          (d[y] = d[y] * g),
          (d[y + 1] = d[y + 1] * g),
          (d[y + 2] = d[y + 2] * g);
    }
    return [d, t.width, t.height, -h / r, -c / o];
  }
  static fromTextSymbol(t) {
    const { text: e } = t;
    return {
      type: 'CIMPointSymbol',
      symbolLayers: [
        {
          type: 'CIMVectorMarker',
          enable: !0,
          anchorPointUnits: 'Relative',
          dominantSizeAxis3D: 'Y',
          size: 10,
          billboardMode3D: 'FaceNearPlane',
          frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 },
          markerGraphics: [
            {
              type: 'CIMMarkerGraphic',
              geometry: { x: 0, y: 0 },
              symbol: q.createCIMTextSymbolfromTextSymbol(t),
              textString: e,
            },
          ],
          scaleSymbolsProportionally: !0,
          respectFrame: !0,
        },
      ],
      scaleX: 1,
      angleAlignment: 'Display',
    };
  }
  static fromPictureFillSymbol(t) {
    const { height: e, outline: s, width: i, xoffset: a, xscale: n, yoffset: r, yscale: o } = t,
      h = [],
      c = { type: 'CIMPolygonSymbol', symbolLayers: h };
    if (s) {
      const _ = Gs(s);
      _ && h.push(_);
    }
    let u = t.url;
    t.type === 'esriPFS' && t.imageData && (u = t.imageData);
    const f = 'angle' in t ? (t.angle ?? 0) : 0,
      p = (i ?? 0) * (n || 1),
      m = (e ?? 0) * (o || 1);
    return (
      h.push({
        type: 'CIMPictureFill',
        invertBackfaceTexture: !1,
        scaleX: 1,
        textureFilter: ae.Picture,
        tintColor: null,
        url: u,
        height: m,
        width: p,
        offsetX: S(a),
        offsetY: S(r),
        rotation: S(-f),
        colorSubstitutions: null,
      }),
      c
    );
  }
  static fromSimpleFillSymbol(t) {
    const { color: e, style: s, outline: i } = t,
      a = [],
      n = { type: 'CIMPolygonSymbol', symbolLayers: a };
    if (i) {
      const r = Gs(i);
      r && a.push(r);
    }
    if (s && s !== 'solid' && s !== 'none' && s !== 'esriSFSSolid' && s !== 'esriSFSNull') {
      const r = {
        type: 'CIMLineSymbol',
        symbolLayers: [
          {
            type: 'CIMSolidStroke',
            color: O(e),
            capStyle: V.Butt,
            joinStyle: st.Miter,
            width: 0.75,
          },
        ],
      };
      let o = 0;
      const h = j(oa(s) ? 8 : 10);
      switch (s) {
        case 'vertical':
        case 'esriSFSVertical':
          o = 90;
          break;
        case 'forward-diagonal':
        case 'esriSFSForwardDiagonal':
        case 'diagonal-cross':
        case 'esriSFSDiagonalCross':
          o = -45;
          break;
        case 'backward-diagonal':
        case 'esriSFSBackwardDiagonal':
          o = 45;
          break;
        case 'cross':
        case 'esriSFSCross':
          o = 0;
      }
      a.push({
        type: 'CIMHatchFill',
        lineSymbol: r,
        offsetX: 0,
        offsetY: 0,
        rotation: o,
        separation: h,
      }),
        s === 'cross' || s === 'esriSFSCross'
          ? a.push({
              type: 'CIMHatchFill',
              lineSymbol: ut(r),
              offsetX: 0,
              offsetY: 0,
              rotation: 90,
              separation: h,
            })
          : (s !== 'diagonal-cross' && s !== 'esriSFSDiagonalCross') ||
            a.push({
              type: 'CIMHatchFill',
              lineSymbol: ut(r),
              offsetX: 0,
              offsetY: 0,
              rotation: 45,
              separation: h,
            });
    } else
      !s ||
        (s !== 'solid' && s !== 'esriSFSSolid') ||
        a.push({ type: 'CIMSolidFill', enable: !0, color: O(e) });
    return n;
  }
  static fromSimpleLineSymbol(t) {
    const { cap: e, color: s, join: i, marker: a, miterLimit: n, style: r, width: o } = t;
    let h = null;
    r !== 'solid' &&
      r !== 'none' &&
      r !== 'esriSLSSolid' &&
      r !== 'esriSLSNull' &&
      (h = [
        {
          type: 'CIMGeometricEffectDashes',
          dashTemplate: Je(r, e),
          lineDashEnding: 'NoConstraint',
          scaleDash: !0,
          offsetAlongLine: null,
        },
      ]);
    const c = [];
    if (a) {
      let u;
      switch (a.placement) {
        case 'begin-end':
          u = at.Both;
          break;
        case 'begin':
          u = at.JustBegin;
          break;
        case 'end':
          u = at.JustEnd;
          break;
        default:
          u = at.None;
      }
      const f = q.fromSimpleMarker(a, o, s).symbolLayers[0];
      (f.markerPlacement = {
        type: 'CIMMarkerPlacementAtExtremities',
        placePerPart: !1,
        angleToLine: !0,
        offset: 0,
        extremityPlacement: u,
        offsetAlongLine: 0,
      }),
        c.push(f);
    }
    return (
      c.push({
        type: 'CIMSolidStroke',
        color: r !== 'none' && r !== 'esriSLSNull' ? O(s) : [0, 0, 0, 0],
        capStyle: zi(e),
        joinStyle: Ti(i),
        miterLimit: n,
        width: o,
        effects: h,
      }),
      { type: 'CIMLineSymbol', symbolLayers: c }
    );
  }
  static fromPictureMarker(t) {
    const { angle: e, height: s, width: i, xoffset: a, yoffset: n } = t;
    let r = t.url;
    return (
      t.type === 'esriPMS' && t.imageData && (r = t.imageData),
      {
        type: 'CIMPointSymbol',
        symbolLayers: [
          {
            type: 'CIMPictureMarker',
            invertBackfaceTexture: !1,
            scaleX: 1,
            textureFilter: ae.Picture,
            tintColor: null,
            url: r,
            size: s,
            width: i,
            offsetX: S(a),
            offsetY: S(n),
            rotation: S(-e),
          },
        ],
      }
    );
  }
  static createCIMTextSymbolfromTextSymbol(t) {
    const {
      angle: e,
      color: s,
      font: i,
      haloColor: a,
      haloSize: n,
      horizontalAlignment: r,
      kerning: o,
      lineWidth: h,
      text: c,
      verticalAlignment: u,
      xoffset: f,
      yoffset: p,
      backgroundColor: m,
      borderLineColor: _,
      borderLineSize: d,
    } = t;
    let g, y, P, x, b, M;
    i && ((g = i.family), (y = i.style), (P = i.weight), (x = i.size), (b = i.decoration));
    let w = !1;
    return (
      c && (w = Tn(c)[1]),
      (m || d) &&
        (M = {
          type: 'CIMBackgroundCallout',
          margin: null,
          backgroundSymbol: {
            type: 'CIMPolygonSymbol',
            symbolLayers: [
              { type: 'CIMSolidFill', color: O(m) },
              { type: 'CIMSolidStroke', color: O(_), width: d },
            ],
          },
          accentBarSymbol: null,
          gap: null,
          leaderLineSymbol: null,
          lineStyle: null,
        }),
      {
        type: 'CIMTextSymbol',
        angle: e,
        blockProgression: pr.BTT,
        depth3D: 1,
        extrapolateBaselines: !0,
        fontEffects: _r.Normal,
        fontEncoding: fr.Unicode,
        fontFamilyName: g || 'Arial',
        fontStyleName: ia(y, P),
        fontType: ur.Unspecified,
        haloSize: n,
        height: x,
        hinting: cr.Default,
        horizontalAlignment: ea(r ?? 'center'),
        kerning: o,
        letterWidth: 100,
        ligatures: !0,
        lineGapType: 'Multiple',
        lineWidth: h,
        offsetX: S(f),
        offsetY: S(p),
        strikethrough: b === 'line-through',
        underline: b === 'underline',
        symbol: {
          type: 'CIMPolygonSymbol',
          symbolLayers: [{ type: 'CIMSolidFill', enable: !0, color: O(s) }],
        },
        haloSymbol: {
          type: 'CIMPolygonSymbol',
          symbolLayers: [{ type: 'CIMSolidFill', enable: !0, color: O(a) }],
        },
        shadowColor: [0, 0, 0, 255],
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textCase: 'Normal',
        textDirection: w ? _s.RTL : _s.LTR,
        verticalAlignment: sa(u ?? 'baseline'),
        verticalGlyphOrientation: lr.Right,
        wordSpacing: 100,
        billboardMode3D: hr.FaceNearPlane,
        callout: M,
      }
    );
  }
  static createPictureMarkerRasterizationParam(t) {
    var o, h;
    const { angle: e, height: s, width: i, xoffset: a, yoffset: n } = t,
      r =
        t.url ??
        ((o = t.source) == null ? void 0 : o.url) ??
        ((h = t.source) == null ? void 0 : h.imageData);
    return r
      ? {
          type: 'sprite-rasterization-param',
          overrides: [],
          resource: {
            type: 'CIMPictureMarker',
            invertBackfaceTexture: !1,
            scaleX: 1,
            textureFilter: ae.Picture,
            tintColor: null,
            url: r,
            size: s,
            width: i,
            offsetX: S(a),
            offsetY: S(n),
            rotation: S(-e),
          },
        }
      : null;
  }
  static createPictureFillRasterizationParam(t) {
    const { width: e, height: s, xoffset: i, yoffset: a, url: n } = t;
    return n
      ? {
          type: 'sprite-rasterization-param',
          overrides: [],
          resource: {
            type: 'CIMPictureFill',
            scaleX: 1,
            textureFilter: ae.Picture,
            tintColor: null,
            url: n,
            width: e,
            height: s,
            offsetX: S(i),
            offsetY: S(a),
            rotation: 0,
          },
        }
      : null;
  }
  static fromSimpleMarker(t, e, s) {
    const { style: i } = t,
      a = t.color ?? s;
    if (i === 'path' || i === 'esriSMSPath') {
      const u = [];
      if ('outline' in t && t.outline) {
        const m = t.outline;
        u.push({
          type: 'CIMSolidStroke',
          enable: !0,
          width: m.width,
          color: O(m.color),
          path: t.path,
        });
      }
      u.push({ type: 'CIMSolidFill', enable: !0, color: O(a), path: t.path });
      const [f, p] = vt('square');
      return {
        type: 'CIMPointSymbol',
        symbolLayers: [
          {
            type: 'CIMVectorMarker',
            enable: !0,
            rotation: -S(t.angle),
            size: S(t.size || 6),
            offsetX: S(t.xoffset),
            offsetY: S(t.yoffset),
            scaleSymbolsProportionally: !1,
            frame: f,
            markerGraphics: [
              {
                type: 'CIMMarkerGraphic',
                geometry: p,
                symbol: { type: 'CIMPolygonSymbol', symbolLayers: u },
              },
            ],
          },
        ],
      };
    }
    const n = [];
    let r,
      o,
      h = t.size;
    if (
      'outline' in t &&
      t.outline &&
      t.outline.style !== 'none' &&
      t.outline.style !== 'esriSLSNull'
    ) {
      const u = t.outline,
        f = u.style !== 'solid' && u.style !== 'esriSLSSolid';
      [r, o] = f ? vt(i, t.size) : vt(i);
      const p = u.width ?? mr.width;
      if (f) {
        const d = p / t.size,
          g = ((r.xmax - r.xmin) * d) / 2,
          y = ((r.ymax - r.ymin) * d) / 2;
        (r.xmin -= g), (r.xmax += g), (r.ymin -= y), (r.ymax += y), h && (h += p);
      }
      const m =
          (t.style !== 'cross' && t.style !== 'x') ||
          (t == null ? void 0 : t.outline.style) === 'dot' ||
          (t == null ? void 0 : t.outline.style) === 'short-dot'
            ? E.HalfGap
            : E.FullPattern,
        _ = f
          ? [
              { type: 'CIMGeometricEffectAddControlPoints' },
              {
                type: 'CIMGeometricEffectDashes',
                dashTemplate: Je(u.style, null).map((d) =>
                  u.width && u.width > 0 ? d * u.width : d,
                ),
                lineDashEnding: m,
                controlPointEnding: E.FullPattern,
              },
            ]
          : void 0;
      n.push({
        type: 'CIMSolidStroke',
        capStyle: f ? V.Round : V.Butt,
        enable: !0,
        width: p,
        color: O(u.color),
        effects: _,
      });
    } else
      !e || t.type !== 'line-marker' || (t.style !== 'cross' && t.style !== 'x')
        ? ([r, o] = vt(i))
        : (([r, o] = vt(i)), n.push({ type: 'CIMSolidStroke', enable: !0, width: e, color: O(a) }));
    n.push({ type: 'CIMSolidFill', enable: !0, color: O(a) });
    const c = { type: 'CIMPolygonSymbol', symbolLayers: n };
    return {
      type: 'CIMPointSymbol',
      symbolLayers: [
        {
          type: 'CIMVectorMarker',
          enable: !0,
          rotation: S(-t.angle),
          size: S(h || 6 * e),
          offsetX: S(t.xoffset),
          offsetY: S(t.yoffset),
          scaleSymbolsProportionally: !1,
          frame: r,
          markerGraphics: [{ type: 'CIMMarkerGraphic', geometry: o, symbol: c }],
        },
      ],
    };
  }
  static fromCIMHatchFill(t, e) {
    var o;
    const s = e * (t.separation ?? Y.CIMHatchFill.separation),
      i = s / 2,
      a = ut(t.lineSymbol);
    (o = a.symbolLayers) == null ||
      o.forEach((h) => {
        var c;
        switch (h.type) {
          case 'CIMSolidStroke':
            h.width != null && (h.width *= e),
              (c = h.effects) == null ||
                c.forEach((u) => {
                  if (u.type === 'CIMGeometricEffectDashes') {
                    const f = u.dashTemplate;
                    u.dashTemplate = f == null ? void 0 : f.map((p) => p * e);
                  }
                });
            break;
          case 'CIMVectorMarker': {
            h.size != null && (h.size *= e);
            const u = h.markerPlacement;
            u != null &&
              'placementTemplate' in u &&
              (u.placementTemplate = u.placementTemplate.map((f) => f * e));
            break;
          }
        }
      });
    let n = this._getLineSymbolPeriod(a) || Es;
    for (; n < Es; ) n *= 2;
    const r = n / 2;
    return {
      type: 'CIMVectorMarker',
      frame: { xmin: -r, xmax: r, ymin: -i, ymax: i },
      markerGraphics: [
        {
          type: 'CIMMarkerGraphic',
          geometry: {
            paths: [
              [
                [-r, 0],
                [r, 0],
              ],
            ],
          },
          symbol: a,
        },
      ],
      size: s,
    };
  }
  static fetchResources(t, e, s, i = null) {
    return (
      t &&
        e &&
        Ii(t, (a) => {
          ha(a, e, s), 'url' in a && a.url && s.push(e.fetchResource(a.url, { signal: i }));
        }),
      s
    );
  }
  static fetchFonts(t, e, s) {
    if (t && e) {
      if ('symbolLayers' in t && t.symbolLayers) {
        for (const i of t.symbolLayers)
          if (i.type === 'CIMVectorMarker' && i.markerGraphics)
            for (const a of i.markerGraphics) a != null && a.symbol && q.fetchFonts(a.symbol, e, s);
      } else if (t.type === 'CIMTextSymbol') {
        const { fontFamilyName: i, fontStyleName: a } = t;
        if (!i || i.toLowerCase() === 'calcitewebcoreicons') return;
        const { style: n, weight: r } = Hs(a),
          o = Xs(t),
          h = new dr({ family: i, style: n, weight: r, decoration: o });
        s.push(
          e.loadFont(h).catch(() => {
            Ce().error(`Unsupported font ${i} in CIM symbol`);
          }),
        );
      }
    }
  }
  static _getLineSymbolPeriod(t) {
    if (t) {
      const e = this._getEffectsRepeat(t.effects);
      if (e) return e;
      if (t.symbolLayers) {
        for (const s of t.symbolLayers)
          if (s) {
            const i = this._getEffectsRepeat(s.effects);
            if (i) return i;
            switch (s.type) {
              case 'CIMCharacterMarker':
              case 'CIMPictureMarker':
              case 'CIMVectorMarker':
              case 'CIMObjectMarker3D':
              case 'CIMglTFMarker3D': {
                const a = this._getPlacementRepeat(s.markerPlacement);
                if (a) return a;
              }
            }
          }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(t) {
    if (t) {
      for (const e of t)
        if (e)
          switch (e.type) {
            case 'CIMGeometricEffectDashes': {
              const s = e.dashTemplate;
              if (s && s.length) {
                let i = 0;
                for (const a of s) i += a;
                return 1 & s.length && (i *= 2), i;
              }
              break;
            }
            case 'CIMGeometricEffectWave':
              return e.period;
            default:
              Ce().error(`unsupported geometric effect type ${e.type}`);
          }
    }
    return 0;
  }
  static _getPlacementRepeat(t) {
    if (t)
      switch (t.type) {
        case 'CIMMarkerPlacementAlongLineSameSize':
        case 'CIMMarkerPlacementAlongLineRandomSize':
        case 'CIMMarkerPlacementAlongLineVariableSize': {
          const e = t.placementTemplate;
          if (e && e.length) {
            let s = 0;
            for (const i of e) s += +i;
            return 1 & e.length && (s *= 2), s;
          }
          break;
        }
      }
    return 0;
  }
  static fromCIMInsidePolygon(t) {
    const e = t.markerPlacement,
      s = { ...t };
    (s.markerPlacement = null), (s.anchorPoint = null);
    const i = Math.abs(e.stepX),
      a = Math.abs(e.stepY),
      n = (e.randomness ?? 100) / 100;
    let r, o, h, c;
    if (e.gridType === 'Random') {
      const u = j(gr),
        f = Math.max(Math.floor(u / i), 1),
        p = Math.max(Math.floor(u / a), 1);
      (r = (f * i) / 2), (o = (p * a) / 2), (h = 2 * o);
      const m = new Os(e.seed),
        _ = (n * i) / 1.5,
        d = (n * a) / 1.5;
      c = [];
      for (let g = 0; g < f; g++)
        for (let y = 0; y < p; y++) {
          const P = g * i - r + _ * (0.5 - m.getFloat()),
            x = y * a - o + d * (0.5 - m.getFloat());
          c.push({ x: P, y: x }),
            g === 0 && c.push({ x: P + 2 * r, y: x }),
            y === 0 && c.push({ x: P, y: x + 2 * o });
        }
    } else
      e.shiftOddRows === !0
        ? ((r = i / 2),
          (o = a),
          (h = 2 * a),
          (c = [
            { x: -r, y: 0 },
            { x: r, y: 0 },
            { x: 0, y: o },
            { x: 0, y: -o },
          ]))
        : ((r = i / 2),
          (o = a / 2),
          (h = a),
          (c = [
            { x: -i, y: 0 },
            { x: 0, y: -a },
            { x: -i, y: -a },
            { x: 0, y: 0 },
            { x: i, y: 0 },
            { x: 0, y: a },
            { x: i, y: a },
            { x: -i, y: a },
            { x: i, y: -a },
          ]));
    return {
      type: 'CIMVectorMarker',
      frame: { xmin: -r, xmax: r, ymin: -o, ymax: o },
      markerGraphics: c.map((u) => ({
        type: 'CIMMarkerGraphic',
        geometry: u,
        symbol: { type: 'CIMPointSymbol', symbolLayers: [s] },
      })),
      size: h,
    };
  }
}
function Ii(l, t) {
  if (l)
    switch (l.type) {
      case 'CIMPointSymbol':
      case 'CIMLineSymbol':
      case 'CIMPolygonSymbol': {
        const e = l.symbolLayers;
        if (!e) return;
        for (const s of e)
          if ((t(s), s.type === 'CIMVectorMarker')) {
            const i = s.markerGraphics;
            if (!i) continue;
            for (const a of i)
              if (a) {
                const n = a.symbol;
                n && Ii(n, t);
              }
          }
        break;
      }
    }
}
const zi = (l) => {
    if (!l) return V.Butt;
    switch (l) {
      case 'butt':
        return V.Butt;
      case 'square':
        return V.Square;
      case 'round':
        return V.Round;
    }
  },
  Ti = (l) => {
    if (!l) return st.Miter;
    switch (l) {
      case 'miter':
        return st.Miter;
      case 'round':
        return st.Round;
      case 'bevel':
        return st.Bevel;
    }
  },
  ea = (l) => {
    if (l == null) return 'Center';
    switch (l) {
      case 'left':
        return 'Left';
      case 'right':
        return 'Right';
      case 'center':
        return 'Center';
    }
  },
  sa = (l) => {
    if (l == null) return 'Center';
    switch (l) {
      case 'baseline':
        return 'Baseline';
      case 'top':
        return 'Top';
      case 'middle':
        return 'Center';
      case 'bottom':
        return 'Bottom';
    }
  },
  O = (l) => {
    if (!l) return [0, 0, 0, 0];
    const { r: t, g: e, b: s, a: i } = l;
    return [t, e, s, 255 * i];
  },
  ia = (l, t) => {
    const e = ra(t),
      s = na(l);
    return e && s ? `${e}-${s}` : `${e}${s}`;
  },
  ra = (l) => {
    if (!l) return '';
    switch (l.toLowerCase()) {
      case 'bold':
      case 'bolder':
        return 'bold';
    }
    return '';
  },
  na = (l) => {
    if (!l) return '';
    switch (l.toLowerCase()) {
      case 'italic':
      case 'oblique':
        return 'italic';
    }
    return '';
  },
  Je = (l, t) => {
    const e = Ke('safari') ? 0.001 : 0,
      s = t === 'butt';
    switch (l) {
      case 'dash':
      case 'esriSLSDash':
        return s ? [4, 3] : [3, 4];
      case 'dash-dot':
      case 'esriSLSDashDot':
        return s ? [4, 3, 1, 3] : [3, 4, e, 4];
      case 'dot':
      case 'esriSLSDot':
        return s ? [1, 3] : [e, 4];
      case 'long-dash':
      case 'esriSLSLongDash':
        return s ? [8, 3] : [7, 4];
      case 'long-dash-dot':
      case 'esriSLSLongDashDot':
        return s ? [8, 3, 1, 3] : [7, 4, e, 4];
      case 'long-dash-dot-dot':
      case 'esriSLSDashDotDot':
        return s ? [8, 3, 1, 3, 1, 3] : [7, 4, e, 4, e, 4];
      case 'short-dash':
      case 'esriSLSShortDash':
        return s ? [4, 1] : [3, 2];
      case 'short-dash-dot':
      case 'esriSLSShortDashDot':
        return s ? [4, 1, 1, 1] : [3, 2, e, 2];
      case 'short-dash-dot-dot':
      case 'esriSLSShortDashDotDot':
        return s ? [4, 1, 1, 1, 1, 1] : [3, 2, e, 2, e, 2];
      case 'short-dot':
      case 'esriSLSShortDot':
        return s ? [1, 1] : [e, 2];
      case 'solid':
      case 'esriSLSSolid':
      case 'none':
        return Ce().error('Unexpected: style does not require rasterization'), [0, 0];
      default:
        return Ce().error(`Tried to rasterize SLS, but found an unexpected style: ${l}!`), [0, 0];
    }
  };
function aa(l) {
  return l.symbolLayers !== void 0;
}
const vt = (l, t = 100) => {
    const e = t / 2;
    let s, i;
    const a = l;
    if (a === 'circle' || a === 'esriSMSCircle') {
      let r = Math.acos(1 - 0.25 / e),
        o = Math.ceil(vi / r / 4);
      o === 0 && (o = 1), (r = Zn / o), (o *= 4);
      const h = [];
      h.push([e, 0]);
      for (let c = 1; c < o; c++) h.push([e * Math.cos(c * r), -e * Math.sin(c * r)]);
      h.push([e, 0]), (s = { rings: [h] }), (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
    } else if (a === 'cross' || a === 'esriSMSCross')
      (s = {
        paths: [
          [
            [0, e],
            [0, -e],
          ],
          [
            [e, 0],
            [-e, 0],
          ],
        ],
      }),
        (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
    else if (a === 'diamond' || a === 'esriSMSDiamond')
      (s = {
        rings: [
          [
            [-e, 0],
            [0, e],
            [e, 0],
            [0, -e],
            [-e, 0],
          ],
        ],
      }),
        (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
    else if (a === 'square' || a === 'esriSMSSquare')
      (s = {
        rings: [
          [
            [-e, -e],
            [-e, e],
            [e, e],
            [e, -e],
            [-e, -e],
          ],
        ],
      }),
        (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
    else if (a === 'x' || a === 'esriSMSX')
      (s = {
        paths: [
          [
            [e, e],
            [-e, -e],
          ],
          [
            [e, -e],
            [-e, e],
          ],
        ],
      }),
        (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
    else if (a === 'triangle' || a === 'esriSMSTriangle') {
      const n = t * 0.5773502691896257,
        r = -n,
        o = (2 / 3) * t,
        h = o - t;
      (s = {
        rings: [
          [
            [r, h],
            [0, o],
            [n, h],
            [r, h],
          ],
        ],
      }),
        (i = { xmin: r, ymin: h, xmax: n, ymax: o });
    } else
      a === 'arrow' &&
        ((s = {
          rings: [
            [
              [-50, 50],
              [50, 0],
              [-50, -50],
              [-33, -20],
              [-33, 20],
              [-50, 50],
            ],
          ],
        }),
        (i = { xmin: -e, ymin: -e, xmax: e, ymax: e }));
    return [i, s];
  },
  oa = (l) =>
    l === 'vertical' ||
    l === 'horizontal' ||
    l === 'cross' ||
    l === 'esriSFSCross' ||
    l === 'esriSFSVertical' ||
    l === 'esriSFSHorizontal';
function ha(l, t, e) {
  if (!(!l.effects || t.geometryEngine != null)) {
    if (t.geometryEnginePromise) return void e.push(t.geometryEnginePromise);
    yr(l.effects) &&
      ((t.geometryEnginePromise = Pr()),
      e.push(t.geometryEnginePromise),
      t.geometryEnginePromise.then((s) => (t.geometryEngine = s)));
  }
}
function Gs(l) {
  if (!l) return null;
  let t = null;
  const { cap: e, color: s, join: i, miterLimit: a, style: n, width: r } = l;
  return (
    n !== 'solid' &&
      n !== 'none' &&
      n !== 'esriSLSSolid' &&
      n !== 'esriSLSNull' &&
      (t = [
        {
          type: 'CIMGeometricEffectDashes',
          dashTemplate: Je(n, e),
          lineDashEnding: 'NoConstraint',
          scaleDash: !0,
          offsetAlongLine: null,
        },
      ]),
    {
      type: 'CIMSolidStroke',
      color: n !== 'esriSLSNull' && n !== 'none' ? O(s) : [0, 0, 0, 0],
      capStyle: zi(e),
      joinStyle: Ti(i),
      miterLimit: a,
      width: r,
      effects: t,
    }
  );
}
const la = 8388607,
  ca = 8388608,
  Do = (l) => l & la;
function Xo(l, t) {
  return ((t ? ca : 0) | l) >>> 0;
}
let ge = class extends xr {
  constructor(l) {
    super(l),
      (this.debugName = ''),
      (this._updatingHandles = new br()),
      (this._idToUpdatingState = new Mr());
  }
  get updating() {
    const l =
      this._updatingHandles.updating || Array.from(this._idToUpdatingState.values()).some((t) => t);
    if (Ke('esri-2d-log-updating')) {
      const t = Array.from(this._idToUpdatingState.entries()).map(([e, s]) => `-> ${e}: ${s}`)
        .join(`
`);
      console.log(`${this.debugName}: Updating: ${l}
-> Handles: ${this._updatingHandles.updating}
${t}`);
    }
    return l;
  }
  addUpdateTracking(l, t) {
    const e = Sr(
      () => t.updating,
      (s) => this._idToUpdatingState.set(l, s),
      { sync: !0 },
    );
    this.addHandles(e);
  }
  addPromise(l) {
    return this._updatingHandles.addPromise(l);
  }
};
Ee([ps({ constructOnly: !0 })], ge.prototype, 'debugName', void 0),
  Ee([ps({ readOnly: !0 })], ge.prototype, 'updating', null),
  (ge = Ee([Cr('esri.views.2d.layers.support.UpdateTracking2D')], ge));
export {
  Fo as $,
  In as A,
  Po as B,
  xo as C,
  no as D,
  ao as E,
  So as F,
  $o as G,
  Co as H,
  bo as I,
  ko as J,
  vo as K,
  Io as L,
  Mo as M,
  Je as N,
  bi as O,
  ro as P,
  ys as Q,
  Ir as R,
  Gn as S,
  Rn as T,
  gi as U,
  zr as V,
  Tn as W,
  oo as X,
  vs as Y,
  Rs as Z,
  lo as _,
  q as a,
  va as a0,
  mo as a1,
  wo as a2,
  po as a3,
  co as a4,
  uo as a5,
  fo as a6,
  _o as a7,
  Pa as a8,
  Oo as b,
  ya as c,
  ge as d,
  No as e,
  Do as f,
  ho as g,
  L as h,
  Ro as i,
  kn as j,
  vn as k,
  Ps as l,
  Go as m,
  z as n,
  zo as o,
  xn as p,
  go as q,
  la as r,
  Xo as s,
  $n as t,
  Un as u,
  Wr as v,
  yo as w,
  To as x,
  Lo as y,
  zn as z,
};
