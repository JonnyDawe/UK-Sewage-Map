const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index.lazy-BFilFZ3v.js',
      'assets/index-DShQM7Xx.js',
      'assets/index-OKt58BsC.css',
      'assets/index-Bz5HPDxq.css',
      'assets/index-n0HCXfwO.js',
      'assets/index-BLD5-BxV.js',
      'assets/key-ak3_eHKH.js',
      'assets/index-BaIJp3Yf.js',
      'assets/index-BMPXI0Gn.js',
      'assets/index-C-QbB4jb.js',
      'assets/customElement-DMOccDpX.js',
      'assets/escapeRegExp-CMkgM69Y.js',
      'assets/utils-DRV1Kuur.js',
      'assets/index-DBBuUUiX.js',
      'assets/index-Cc3w-_ug.js',
      'assets/dynamicClasses-Dlk4kLaw.js',
      'assets/index-B_EzslSY.js',
      'assets/index-DHrGTPkp.js',
      'assets/resources6-C-XXGpuo.js',
      'assets/index-4M3Ny60H.js',
      'assets/resources5-B_fF8ZZV.js',
    ]),
) => i.map((i) => d[i]);
import { _ as u } from './index-DShQM7Xx.js';
import {
  ms as V,
  c0 as O,
  mt as y,
  mu as L,
  mv as a,
  mw as T,
  cv as N,
  A as s,
  B as r,
  mx as b,
  R as P,
  my as k,
  mz as g,
  mA as R,
  mB as $,
  mC as F,
  hH as M,
} from './index.lazy-BFilFZ3v.js';
const m = 'esri-utility-network-association-list',
  _ = {
    featureObserver: `${m}__feature-observer`,
    filterContainer: `${m}__filter-container`,
    limitNoticeContainer: `${m}__limit-notice-container`,
    loadingContainer: `${m}__loading-container`,
  };
let l = class extends V {
  constructor(e, t) {
    super(e, t),
      (this._isFeatureCountNoticeOpen = !0),
      (this._observer = new IntersectionObserver(
        ([o]) => {
          o != null && o.isIntersecting && this._increaseFeaturePage();
        },
        { root: window.document },
      )),
      (this._observerNode = null),
      (this.featuresPerPage = 50),
      (this.filterText = ''),
      (this.headingLevel = 5),
      (this.maxFeatureCount = 1e3),
      (this.messagesFeature = null),
      (this.messagesCommon = null),
      (this.selectedLayer = null),
      (this.tooltipReferenceMap = new O()),
      (this.viewModel = new y());
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return L({
      icon: () =>
        u(
          () => import('./index.lazy-BFilFZ3v.js').then((e) => e.we),
          __vite__mapDeps([0, 1, 2, 3]),
        ),
      input: () =>
        u(
          () => import('./index-n0HCXfwO.js').then((e) => e.i),
          __vite__mapDeps([4, 0, 1, 2, 3, 5, 6]),
        ),
      loader: () =>
        u(
          () => import('./index.lazy-BFilFZ3v.js').then((e) => e.wd),
          __vite__mapDeps([0, 1, 2, 3]),
        ),
      notice: () => u(() => import('./index-BaIJp3Yf.js'), __vite__mapDeps([7, 0, 1, 2, 3])),
    });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  get associatedFeatureCount() {
    const e = this.viewModel.associationViewModels,
      t = this.selectedLayer ? e.get(this.selectedLayer) : null;
    return t ? t.length : 0;
  }
  set currentFeaturePage(e) {
    const { featuresPerPage: t, associatedFeatureCount: o } = this,
      i = Math.ceil(o / t) || 1,
      n = Math.max(Math.min(e, i), 1);
    this._set('currentFeaturePage', n);
  }
  get currentFeaturePage() {
    return this._get('currentFeaturePage') ?? 1;
  }
  get endIndex() {
    const { currentFeaturePage: e, featuresPerPage: t, maxFeatureCount: o } = this;
    return Math.min(e * t, o);
  }
  renderConnectivityIcon(e, t) {
    const { tooltipReferenceMap: o } = this;
    let i;
    switch (e) {
      case 'junction-edge-from-connectivity':
        i = 'connection-end-left';
        break;
      case 'junction-edge-to-connectivity':
        i = 'connection-end-right';
        break;
      case 'junction-edge-midspan-connectivity':
        i = 'connection-middle';
        break;
      default:
        i = 'connection-to-connection';
    }
    return a('calcite-icon', {
      afterCreate: (n) => o.set(t, n),
      afterRemoved: () => o.delete(t),
      icon: i,
      scale: 's',
      slot: 'content-start',
    });
  }
  renderFeatureCountWarning() {
    const { associatedFeatureCount: e, maxFeatureCount: t, messagesFeature: o } = this;
    return e > t
      ? a(
          'calcite-notice',
          {
            class: this._isFeatureCountNoticeOpen ? _.limitNoticeContainer : void 0,
            closable: !0,
            icon: 'information',
            kind: 'info',
            open: !0,
            scale: 's',
            width: 'full',
            onCalciteNoticeBeforeOpen: () => (this._isFeatureCountNoticeOpen = !0),
            onCalciteNoticeClose: () => (this._isFeatureCountNoticeOpen = !1),
          },
          a('div', { slot: 'title' }, o.associationsLimitNoticeTitle),
          a('div', { slot: 'message' }, T(o.associationsLimitNoticeMessage, { number: t })),
        )
      : null;
  }
  renderFeatureObserver() {
    return a('div', {
      afterCreate: this._onObserverCreate,
      bind: this,
      class: _.featureObserver,
      key: 'feature-observer',
    });
  }
  renderFilter() {
    return a(
      'div',
      { class: _.filterContainer, key: 'filter' },
      a('calcite-input', {
        icon: 'search',
        placeholder: this.messagesFeature.associationFilterPlaceholder,
        type: 'search',
        onCalciteInputInput: (e) => {
          (this.filterText = e.currentTarget.value.trim().toLowerCase()),
            (this.currentFeaturePage = 1);
        },
      }),
    );
  }
  renderLoading() {
    return a(
      'div',
      { class: _.loadingContainer, key: 'loading-container' },
      this.renderLoadingIcon(),
    );
  }
  renderLoadingIcon() {
    return a('calcite-loader', { inline: !0, label: this.messagesCommon.loading });
  }
  getConnectivityTooltip(e) {
    const { messagesFeature: t } = this;
    switch (e) {
      case 'connectivity':
      case 'junction-junction-connectivity':
        return t.associationsJunctionJunction;
      case 'junction-edge-from-connectivity':
        return t.associationsJunctionEdgeFrom;
      case 'junction-edge-midspan-connectivity':
        return t.associationsJunctionEdgeMidspan;
      case 'junction-edge-to-connectivity':
        return t.associationsJunctionEdgeTo;
      default:
        return '';
    }
  }
  setUpObserver() {
    this.addHandles(
      N(
        () => this._observerNode,
        () => this._onObserverChange(),
      ),
    );
  }
  _increaseFeaturePage() {
    this.currentFeaturePage++;
  }
  async _onObserverChange() {
    this._observerNode && this._observer.unobserve(this._observerNode);
    const { state: e, showAllEnabled: t } = this.viewModel;
    this._observerNode && e === 'ready' && t && this._observer.observe(this._observerNode);
  }
  _onObserverCreate(e) {
    this._observerNode = e;
  }
};
s([r()], l.prototype, '_observer', void 0),
  s([r()], l.prototype, '_observerNode', void 0),
  s([r()], l.prototype, 'associatedFeatureCount', null),
  s([r()], l.prototype, 'currentFeaturePage', null),
  s([r()], l.prototype, 'endIndex', null),
  s([r()], l.prototype, 'featuresPerPage', void 0),
  s([r()], l.prototype, 'filterText', void 0),
  s([r()], l.prototype, 'headingLevel', void 0),
  s([r()], l.prototype, 'maxFeatureCount', void 0),
  s([r(), b('esri/widgets/Feature/t9n/Feature')], l.prototype, 'messagesFeature', void 0),
  s([r(), b('esri/t9n/common')], l.prototype, 'messagesCommon', void 0),
  s([r()], l.prototype, 'selectedLayer', void 0),
  s([r()], l.prototype, 'tooltipReferenceMap', void 0),
  s([r({ type: y })], l.prototype, 'viewModel', void 0),
  (l = s([P('esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList')], l));
const x = l;
function I(e) {
  const { percentAlong: t } = e;
  return t == null ? '' : k(t, { style: 'percent', maximumFractionDigits: 2 });
}
function C(e) {
  const { associationType: t } = e;
  return (
    t === 'connectivity' ||
    t === 'junction-junction-connectivity' ||
    t === 'junction-edge-from-connectivity' ||
    t === 'junction-edge-midspan-connectivity' ||
    t === 'junction-edge-to-connectivity'
  );
}
function j(e) {
  return e.associationType === 'junction-edge-midspan-connectivity';
}
var w;
const A = 'esri-feature-utility-network-associations',
  E = { base: A, listItemHidden: `${A}__list-item--hidden` },
  D = 'nested';
let c = (w = class extends x {
  constructor(e, t) {
    super(e, t),
      (this.description = null),
      (this.flowItems = null),
      (this.flowType = 'feature-utility-network-association-type'),
      (this.listType = null),
      (this.parentFeatureViewModel = null),
      (this.title = null),
      (this.viewModel = new y()),
      (this.visibleElements = new g());
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return L({
      chip: () => u(() => import('./index-BMPXI0Gn.js'), __vite__mapDeps([8, 0, 1, 2, 3, 6])),
      icon: () =>
        u(
          () => import('./index.lazy-BFilFZ3v.js').then((e) => e.we),
          __vite__mapDeps([0, 1, 2, 3]),
        ),
      list: () =>
        u(
          () => import('./index-C-QbB4jb.js'),
          __vite__mapDeps([9, 0, 1, 2, 3, 10, 5, 4, 6, 11, 12]),
        ),
      'list-item': () =>
        u(
          () => import('./index-DBBuUUiX.js'),
          __vite__mapDeps([13, 0, 1, 2, 3, 14, 6, 15, 16, 17, 18, 19, 12, 20]),
        ),
      tooltip: () =>
        u(
          () => import('./index.lazy-BFilFZ3v.js').then((e) => e.wg),
          __vite__mapDeps([0, 1, 2, 3]),
        ),
    });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  render() {
    var n;
    const e = this.viewModel.associationViewModels,
      { state: t, showAllEnabled: o } = this.viewModel,
      { state: i } = this.parentFeatureViewModel ?? {};
    return a(
      'div',
      { class: this.classes(E.base, $.widget) },
      t === 'loading' || t === 'querying' || i === 'loading'
        ? this.renderLoading()
        : a(
            'calcite-list',
            {
              displayMode: D,
              label:
                ((n = this.selectedLayer) == null ? void 0 : n.title) ??
                this.messagesCommon.untitled,
            },
            o && this.selectedLayer
              ? a(
                  R,
                  null,
                  this.renderFilter(),
                  this.renderFeatureCountWarning(),
                  this._renderAssociatedFeatureListPage(),
                  this.renderFeatureObserver(),
                )
              : Array.from(e.keys(), (d) => this._renderTypeList(d, e.get(d))),
          ),
    );
  }
  _showAllAssociations(e) {
    const { flowItems: t, viewModel: o, description: i } = this;
    if (!t || !e) return;
    o.showAllEnabled = !0;
    const n = new w({
      selectedLayer: e,
      title: e == null ? void 0 : e.title,
      flowItems: t,
      parentFeatureViewModel: this.parentFeatureViewModel,
      featureVisibleElements: this.featureVisibleElements,
      description: i,
      visibleElements: new g({ title: !1, description: !1 }),
      viewModel: o,
    });
    t.push(n);
  }
  _renderAssociatedFeatureListPage() {
    const e = this.viewModel.associationViewModels
      .get(this.selectedLayer)
      .filter((t) => F(t.featureViewModel).toLowerCase().includes(this.filterText))
      .slice(0, this.endIndex);
    return [...this._renderTooltips(e), ...this._renderAssociatedFeatureList(e)];
  }
  _renderItemTooltip(e) {
    const { tooltipReferenceMap: t } = this;
    return C(e.association)
      ? a(
          'calcite-tooltip',
          {
            key: `tooltip-${e.featureViewModel.uid}`,
            overlayPositioning: 'fixed',
            referenceElement: t.get(e.featureViewModel.uid),
          },
          this.getConnectivityTooltip(e.association.associationType),
        )
      : null;
  }
  _renderAssociatedFeature(e) {
    const { featureViewModel: t } = e,
      o = F(t),
      i = t.state === 'loading',
      n = this._findFlowItem(t),
      d = n < 0 && this._isParentFeature(t),
      p = d || n >= 0;
    return a(
      'calcite-list-item',
      {
        class: i ? E.listItemHidden : void 0,
        description: M(e.terminalName ?? ''),
        key: `associated-feature-type-${t.uid}`,
        label: M(o),
        onCalciteListItemSelect: () => this._handleFeatureClick(d, n, t),
      },
      C(e.association)
        ? this.renderConnectivityIcon(e.association.associationType, e.featureViewModel.uid)
        : null,
      j(e.association)
        ? a(
            'calcite-chip',
            { label: I(e.association), scale: 's', slot: 'content-end' },
            I(e.association),
          )
        : null,
      this._renderChevronIconNode(p),
    );
  }
  async _selectAssociation(e) {
    const { flowItems: t, featureVisibleElements: o } = this;
    if (!t) return;
    e.abilities = { utilityNetworkAssociationsContent: !0 };
    const { default: i } = await u(
      () => import('./index.lazy-BFilFZ3v.js').then((n) => n.wb),
      __vite__mapDeps([0, 1, 2, 3]),
    );
    t.push(
      new i({ flowItems: t, flowType: 'feature-association', viewModel: e, visibleElements: o }),
    );
  }
  _handleFeatureClick(e, t, o) {
    if (e)
      this.flowItems.drain((i) => {
        'showAllEnabled' in i.viewModel && (i.viewModel.showAllEnabled = !1),
          (i.viewModel = null),
          i.destroy();
      });
    else if (t < 0 || !this.flowItems) this._selectAssociation(o);
    else
      for (; this.flowItems.length > t + 1; ) {
        const i = this.flowItems.pop();
        i &&
          ('showAllEnabled' in i.viewModel && (i.viewModel.showAllEnabled = !1),
          (i.viewModel = null),
          i.destroy());
      }
  }
  _featureViewModelMatch(e, t) {
    const o = e.graphic,
      i = o == null ? void 0 : o.layer;
    let n = null;
    (i == null ? void 0 : i.type) === 'subtype-sublayer' && i.parent
      ? (n = i.parent.globalIdField ?? null)
      : i && 'globalIdField' in i && (n = i.globalIdField);
    const d = n ? (o == null ? void 0 : o.attributes[n]) : null,
      p = t.graphic,
      h = p == null ? void 0 : p.layer;
    let v = null;
    (h == null ? void 0 : h.type) === 'subtype-sublayer' && h.parent
      ? (v = h.parent.globalIdField ?? null)
      : h && 'globalIdField' in h && (v = h.globalIdField);
    const f = v ? (p == null ? void 0 : p.attributes[v]) : null;
    return d && f && d === f;
  }
  _isParentFeature(e) {
    var i;
    const t = (i = this.flowItems) == null ? void 0 : i.getItemAt(0);
    if (!t) return !1;
    const o = t.parentFeatureViewModel;
    return this._featureViewModelMatch(o, e);
  }
  _findFlowItem(e) {
    var t;
    return (
      ((t = this.flowItems) == null
        ? void 0
        : t.findIndex((o) => {
            if (o.flowType !== 'feature-association') return !1;
            const i = o.viewModel;
            return this._featureViewModelMatch(i, e);
          })) ?? -1
    );
  }
  _renderTooltips(e) {
    return e.toArray().map((t) => this._renderItemTooltip(t));
  }
  _renderAssociatedFeatureList(e) {
    return e.toArray().map((t) => this._renderAssociatedFeature(t));
  }
  _renderChevronIconNode(e) {
    return a('calcite-icon', {
      flipRtl: !0,
      icon: e ? 'move-up' : 'chevron-right',
      scale: 's',
      slot: 'content-end',
    });
  }
  _renderTypeList(e, t) {
    const { messagesFeature: o } = this,
      { displayCount: i } = this.viewModel,
      n = t.slice(0, i),
      d = n.length < t.length;
    return a(
      'calcite-list-item',
      { key: 'show-all', label: e.title, open: !0, value: e.id },
      a('calcite-chip', { label: String(t.length), scale: 's', slot: 'content-end' }, t.length),
      a(
        'calcite-list',
        { group: e.id, label: e.title ?? '' },
        [this._renderTooltips(n), this._renderAssociatedFeatureList(n)],
        d
          ? a(
              'calcite-list-item',
              {
                description: T(o == null ? void 0 : o.numberRecords, {
                  number: t.length.toString(),
                }),
                key: 'show-all-item',
                label: o.showAll,
                onCalciteListItemSelect: () => this._showAllAssociations(e),
              },
              a('calcite-icon', { icon: 'list', scale: 's', slot: 'content-end' }),
            )
          : null,
      ),
    );
  }
});
s([r()], c.prototype, 'description', void 0),
  s([r()], c.prototype, 'featureVisibleElements', void 0),
  s([r()], c.prototype, 'flowItems', void 0),
  s([r()], c.prototype, 'flowType', void 0),
  s([r()], c.prototype, 'listType', void 0),
  s([r()], c.prototype, 'parentFeatureViewModel', void 0),
  s([r()], c.prototype, 'title', void 0),
  s([r({ type: y })], c.prototype, 'viewModel', void 0),
  s([r({ type: g, nonNullable: !0 })], c.prototype, 'visibleElements', void 0),
  (c = w = s([P('esri.widgets.Feature.FeatureUtilityNetworkAssociationList')], c));
const H = c;
export { H as default };
