import type { JSX as ArcGisJSX } from '@arcgis/map-components';

type TransformEventNames<T> = {
  [K in keyof T as K extends `onArcgis${infer Rest}` ? `onarcgis${Rest}` : K]: T[K];
};

declare module 'react' {
  export namespace JSX {
    interface IntrinsicElements {
      'arcgis-map': TransformEventNames<ArcGisJSX.ArcgisMap> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-scene': TransformEventNames<ArcGisJSX.ArcgisScene> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-legend': TransformEventNames<ArcGisJSX.ArcgisLegend> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-placement': TransformEventNames<ArcGisJSX.ArcgisPlacement> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-scale-bar': TransformEventNames<ArcGisJSX.ArcgisScaleBar> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-locate': TransformEventNames<ArcGisJSX.ArcgisLocate> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-search': TransformEventNames<ArcGisJSX.ArcgisSearch> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'arcgis-zoom': TransformEventNames<ArcGisJSX.ArcgisZoom> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
