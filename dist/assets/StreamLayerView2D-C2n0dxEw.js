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
} from './index.lazy-BHTpPf8X.js';
import { n as S, d as C } from './FeatureLayerView2D-CGHXOwgG.js';
import './index-DqxZnyqH.js';
import './Container-C7rRVI4T.js';
import './featureConversionUtils-VaE6vOn5.js';
import './timeSupport-BvvjsfUu.js';
import './AttributeBinsFeatureSet-CUF6bWHg.js';
import './AttributeBinsQuery-DsxUxBMj.js';
import './queryUtils-BQJHb1Wr.js';
import './json-Wa8cmqdu.js';
import './FixedIntervalBinParameters-CKrks9ad.js';
import './LayerView-DyLUQry8.js';
import './TechniqueInstance-B6XeE7un.js';
import './UpdateTracking2D-DyH6ccIi.js';
import './BidiEngine-QXap_35O.js';
import './GeometryUtils-CELdmOaY.js';
import './rasterizingUtils-7XTZfmJg.js';
import './floatRGBA-zr9iyZUb.js';
import './Rect-CUzevAry.js';
import './dataViewUtils-5KhH7jWv.js';
import './VertexElementDescriptor-BLyltQyJ.js';
import './FramebufferObject-5Em36vKP.js';
import './VertexArrayObject-D1MxHjFY.js';
import './TileContainer-CI-QS1wH.js';
import './WGLContainer-GeLJ7UJ1.js';
import './ProgramTemplate-YbO5C86v.js';
import './vec3f32-nZdmKIgz.js';
import './StyleDefinition-BrictxHk.js';
import './config-BOD8--da.js';
import './earcut-D9gy186-.js';
import './FeatureCommandQueue-CYjn6XOO.js';
import './TechniqueType-uMFRS8dR.js';
import './GraphShaderModule-BYUbwtin.js';
import './ShaderBuilder-BRSlH2aw.js';
import './BindType-BBwFZqyN.js';
import './streamLayerUtils-CKwt2uXH.js';
import './QueueProcessor-B6WA7qpe.js';
import './CircularArray-CujHzHWW.js';
import './SDFHelper-DMVafzV1.js';
import './constants-B4mRqufT.js';
import './parquet-CGfJbsoQ.js';
import './floorFilterUtils-DZ5C6FQv.js';
import './popupUtils-DSw4WkC7.js';
import './RefreshableLayerView-x0QgxRaS.js';
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
