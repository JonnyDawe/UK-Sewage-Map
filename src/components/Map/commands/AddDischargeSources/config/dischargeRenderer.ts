import DisplayFilterInfo from '@arcgis/core/layers/support/DisplayFilterInfo';
import UniqueValueClass from '@arcgis/core/renderers/support/UniqueValueClass';
import UniqueValueGroup from '@arcgis/core/renderers/support/UniqueValueGroup';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SizeVariable from '@arcgis/core/renderers/visualVariables/SizeVariable';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';

import { ERRORICON, GREENTICKICON, POOICON, UNKNOWNICON } from '@/constants/hostedImages';

import {
  otherWaterAlertStatusSymbolArcade,
  thamesWaterAlertStatusSymbolArcade,
} from './dischargeSourceRendererArcade';

/**
 * Defines the visual representation for different discharge statuses.
 * Uses different icons and sizes to distinguish between states:
 * - Discharging: Large poo icon (40x40)
 * - Not Discharging: Small green tick (20x20)
 * - Recent Discharge: Medium error icon (24x24)
 * - Unknown Status: Small unknown icon (20x20)
 */
const uniqueValueGroups = [
  new UniqueValueGroup({
    classes: [
      new UniqueValueClass({
        label: 'Discharging',
        symbol: new PictureMarkerSymbol({ url: POOICON, width: '40', height: '40' }),
        values: 3,
      }),
      new UniqueValueClass({
        label: 'Not Discharging',
        symbol: new PictureMarkerSymbol({ url: GREENTICKICON, width: '20', height: '20' }),
        values: 0,
      }),
      new UniqueValueClass({
        label: 'Recent Discharge',
        symbol: new PictureMarkerSymbol({ url: ERRORICON, width: '24', height: '24' }),
        values: 2,
      }),
      new UniqueValueClass({
        label: 'Unknown Status',
        symbol: new PictureMarkerSymbol({ url: UNKNOWNICON, width: '20', height: '20' }),
        values: 1,
      }),
    ],
  }),
];

/**
 * Creates a smooth scaled symbol size based on the current map scale.
 * Uses a cubic ease-out function to create a natural-feeling transition between zoom levels.
 * The scale is normalized between baseScale and zoomedScale, then mapped to symbol sizes.
 *
 * @param {number} scale - The current map scale
 * @param {number} [minScale=32] - The minimum symbol size
 * @param {number} [maxScale=10] - The maximum symbol size
 * @param {number} [baseScale=100000000] - The scale at which symbols are largest
 * @param {number} [zoomedScale=10000] - The scale at which symbols are smallest
 * @returns {number} The calculated symbol size
 */
export function createSmoothScaledSymbolSize(
  scale: number,
  minScale: number = 32,
  maxScale: number = 10,
  baseScale = 100000000,
  zoomedScale = 10000,
): number {
  // Calculate the zoom level (log base 4 of the scale)
  const zoomLevel = Math.log(scale) / Math.log(4);

  // Calculate the base zoom level and zoomed zoom level
  const baseZoomLevel = Math.log(baseScale) / Math.log(4);
  const zoomedZoomLevel = Math.log(zoomedScale) / Math.log(4);

  // Normalize the zoom level between 0 and 1
  const normalizedZoom = (zoomLevel - baseZoomLevel) / (zoomedZoomLevel - baseZoomLevel);

  // Apply smooth easing function (cubic ease-out)
  const easedZoom = 1 - Math.pow(1 - normalizedZoom, 3);

  // Interpolate between min and max sizes
  const calculatedSize = minScale + (maxScale - minScale) * easedZoom;

  // Clamp to ensure within bounds
  return Math.max(maxScale, Math.min(minScale, calculatedSize));
}

const MIN_SYMBOL_SIZE = 6;
const MAX_SYMBOL_SIZE = 32;
// Scale steps follow a 4x progression for consistent zoom level changes
const SCALE_STEPS = [6000, 24000, 96000, 384000, 1536000, 6144000];
export const STEPS = SCALE_STEPS.map((scale) => ({
  size: createSmoothScaledSymbolSize(scale, MAX_SYMBOL_SIZE, MIN_SYMBOL_SIZE, 5000000, 6000),
  value: scale,
}));

const sizeVariable = new SizeVariable({
  valueExpression: '$view.scale',
  stops: STEPS,
});

/**
 * Renderer for Thames Water discharge sources.
 * Uses unique value rendering with scale-based symbol sizing.
 */
export const thamesWaterAlertStatusRenderer = new UniqueValueRenderer({
  valueExpression: thamesWaterAlertStatusSymbolArcade,
  uniqueValueGroups,
  visualVariables: [sizeVariable],
});

/**
 * Renderer for other water company discharge sources.
 * Uses unique value rendering with scale-based symbol sizing.
 */
export const otherWaterAlertStatusRenderer = new UniqueValueRenderer({
  valueExpression: otherWaterAlertStatusSymbolArcade,
  uniqueValueGroups,
  visualVariables: [sizeVariable],
});

const SWITCH_TO_SHOW_ALL_SCALE = 2000000;

/**
 * Display filter for Thames Water sources that switches between showing all sources
 * and only alerting sources based on zoom level.
 * - Below 1:2,000,000 scale: Shows all sources
 * - Above 1:2,000,000 scale: Shows only discharging or recently discharged sources
 */
export const thamesWaterDisplayFilterInfo = new DisplayFilterInfo({
  mode: 'scale',
  filters: [
    {
      title: 'display all',
      minScale: SWITCH_TO_SHOW_ALL_SCALE,
      maxScale: 0,
      where: '1=1',
    },
    {
      title: 'display only alerting sources',
      minScale: Infinity,
      maxScale: SWITCH_TO_SHOW_ALL_SCALE,
      where:
        "LOWER(TRIM(AlertStatus)) = 'discharging' OR (AlertPast48Hours = 'true' AND LOWER(TRIM(AlertStatus)) NOT IN ('discharging', 'offline'))",
    },
  ],
});

/**
 * Display filter for other water company sources that switches between showing all sources
 * and only alerting sources based on zoom level.
 * - Below 1:2,000,000 scale: Shows all sources
 * - Above 1:2,000,000 scale: Shows only active or recently active sources
 */
export const otherWaterDisplayFilterInfo = new DisplayFilterInfo({
  mode: 'scale',
  filters: [
    {
      title: 'display all',
      minScale: SWITCH_TO_SHOW_ALL_SCALE,
      maxScale: 0,
      where: '1=1',
    },
    {
      title: 'display only alerting sources',
      minScale: Infinity,
      maxScale: SWITCH_TO_SHOW_ALL_SCALE,
      where: 'status = 1 OR (status = 0 AND latestEventEnd >= CURRENT_TIMESTAMP - 48/24)',
    },
  ],
});
