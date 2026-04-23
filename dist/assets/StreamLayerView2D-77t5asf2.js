import {
  A as s,
  B as o,
  iS as _,
  R as m,
  cv as u,
  a7 as h,
  i6 as g,
  bM as f,
  cs as l,
  fT as v,
} from './index.lazy-BFilFZ3v.js';
import { n as S, d as C } from './FeatureLayerView2D-BQNifWSj.js';
import './index-DShQM7Xx.js';
import './Container-JJ8D-RVy.js';
import './featureConversionUtils-GdT3zBJg.js';
import './timeSupport-BYd6FGru.js';
import './AttributeBinsFeatureSet-CGcDoN76.js';
import './AttributeBinsQuery-DeSngTPC.js';
import './queryUtils-DePK7lxY.js';
import './json-Wa8cmqdu.js';
import './FixedIntervalBinParameters-CKl391iV.js';
import './LayerView-DO8JWPob.js';
import './TechniqueInstance-ORh6ZjaS.js';
import './UpdateTracking2D-FxGawpd5.js';
import './BidiEngine-QXap_35O.js';
import './GeometryUtils-BZmtlwi1.js';
import './rasterizingUtils-01n90i7R.js';
import './floatRGBA-B-1sPYTQ.js';
import './Rect-CUzevAry.js';
import './dataViewUtils-Dzpw_nGB.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './FramebufferObject-CkZvVgCW.js';
import './VertexArrayObject-B9LXzLl2.js';
import './TileContainer-DUIdLrEG.js';
import './WGLContainer-CljHC-xu.js';
import './ProgramTemplate-BU9lAWen.js';
import './vec3f32-nZdmKIgz.js';
import './StyleDefinition-x3fS7pcj.js';
import './config-BOD8--da.js';
import './earcut-D9gy186-.js';
import './FeatureCommandQueue-BbqTKNbG.js';
import './TechniqueType-uMFRS8dR.js';
import './GraphShaderModule-B9XcBcNV.js';
import './ShaderBuilder-C7-5kguK.js';
import './BindType-BBwFZqyN.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-ErTuyLry.js';
import './CircularArray-CujHzHWW.js';
import './SDFHelper-lUmGGtMZ.js';
import './constants-B4mRqufT.js';
import './parquet-NbhOgLSk.js';
import './floorFilterUtils-DZ5C6FQv.js';
import './popupUtils-7mh6XgqI.js';
import './RefreshableLayerView-eBNYOMvq.js';
const P = (e) => {
  let t = class extends e {
    resume() {
      (this._isUserPaused = !1), this.suspended || this._doResume();
    }
    pause() {
      (this._isUserPaused = !0), this.suspended || this._doPause();
    }
    disconnect() {
      this._doDisconnect();
    }
    connect() {
      this._doConnect();
    }
    clear() {
      this._doClear();
    }
    constructor(...r) {
      super(...r), (this._isUserPaused = !1), (this.filter = null);
    }
    get connectionStatus() {
      return (this._isUserPaused || this.suspended) && this._streamConnectionStatus === 'connected'
        ? 'paused'
        : this._streamConnectionStatus;
    }
    _onSuspendedChange(r) {
      r ? this._doPause() : this._isUserPaused || this._doResume();
    }
  };
  return (
    s([o()], t.prototype, '_isUserPaused', void 0),
    s([o({ readOnly: !0 })], t.prototype, 'connectionStatus', null),
    s([o({ type: _ })], t.prototype, 'filter', void 0),
    (t = s([m('esri.views.layers.StreamLayerView')], t)),
    t
  );
};
let n = class extends P(C) {
  constructor() {
    super(...arguments),
      (this.pipelineConnectionStatus = 'disconnected'),
      (this.pipelineErrorString = null);
  }
  initialize() {
    this.addHandles(
      [
        u(
          () => this.layer.customParameters,
          async (e) => {
            (await this.getWorker()).streamMessenger.updateCustomParameters(e);
          },
        ),
        this.layer.on('send-message-to-socket', async (e) => {
          (await this.getWorker()).streamMessenger.sendMessageToSocket(e);
        }),
        this.layer.on('send-message-to-client', async (e) => {
          (await this.getWorker()).streamMessenger.sendMessageToClient(e),
            this._isUserPaused &&
              'type' in e &&
              e.type === 'clear' &&
              this.incrementSourceRefreshVersion();
        }),
        u(
          () => this.layer.purgeOptions,
          () => this._update(),
        ),
        u(() => this.suspended, this._onSuspendedChange.bind(this)),
      ],
      'constructor',
    ),
      this._doResume();
  }
  destroy() {
    this._doPause();
  }
  get connectionError() {
    return this.pipelineErrorString ? new h('stream-controller', this.pipelineErrorString) : null;
  }
  on(e, t) {
    if (Array.isArray(e)) return g(e.map((i) => this.on(i, t)));
    const r = ['data-received', 'message-received'].includes(e);
    r && this.getWorker().then((i) => i.streamMessenger.enableEvent(e, !0));
    const p = super.on(e, t),
      a = this;
    return f(() => {
      p.remove(),
        r &&
          (a._workerProxy.closed ||
            a.hasEventListener(e) ||
            a.getWorker().then((i) => i.streamMessenger.enableEvent(e, !1)));
    });
  }
  async queryLatestObservations(e, t) {
    var p, a, i;
    if (
      !(
        ((p = this.layer.timeInfo) != null && p.endField) ||
        ((a = this.layer.timeInfo) != null && a.startField) ||
        ((i = this.layer.timeInfo) != null && i.trackIdField)
      )
    )
      throw new h(
        'streamlayer-no-timeField',
        'queryLatestObservation can only be used with services that define a TrackIdField',
      );
    const r = await this.getWorker();
    return S(
      r.features.executeQueryForLatestObservations(this._cleanUpQuery(e), t).then((y) => {
        const c = l.fromJSON(y);
        return (
          c.features.forEach((d) => {
            (d.layer = this.layer), (d.sourceLayer = this.layer);
          }),
          c
        );
      }),
      new l({ features: [] }),
    );
  }
  detach() {
    super.detach(), (this.pipelineConnectionStatus = 'disconnected');
  }
  async queryObjectIds(e, t) {
    return (await super.queryObjectIds(e, t)).filter(v);
  }
  get _streamConnectionStatus() {
    return this.pipelineConnectionStatus;
  }
  _doPause() {
    this._refreshInterval != null &&
      (clearInterval(this._refreshInterval), (this._refreshInterval = null));
  }
  _doResume() {
    this._refreshInterval = setInterval(
      () => this.incrementSourceRefreshVersion(),
      this.layer.updateInterval,
    );
  }
  _doDisconnect() {
    this.getWorker().then((e) => e.streamMessenger.disconnect()), this._doPause();
  }
  _doConnect() {
    this.getWorker().then((e) => e.streamMessenger.connect()), this.resume();
  }
  _doClear() {
    this.getWorker().then((e) => e.streamMessenger.clear()),
      this._refreshInterval == null && this.incrementSourceRefreshVersion();
  }
  _createClientOptions() {
    const e = super._createClientOptions(),
      t = this;
    return {
      ...e,
      get container() {
        return t.featureContainer;
      },
      setProperty: (r) => {
        this.set(r.propertyName, r.value);
      },
    };
  }
};
s([o()], n.prototype, 'pipelineConnectionStatus', void 0),
  s([o()], n.prototype, 'pipelineErrorString', void 0),
  s([o({ readOnly: !0 })], n.prototype, 'connectionError', null),
  s([o({ readOnly: !0 })], n.prototype, '_streamConnectionStatus', null),
  (n = s([m('esri.views.2d.layers.StreamLayerView2D')], n));
const le = n;
export { le as default };
