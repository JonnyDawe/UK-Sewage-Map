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
 * Uses a quadratic ease-out function to create a more gradual transition between zoom levels,
 * with more size changes happening in the middle zoom ranges rather than at the extremes.
 * The scale is normalized between baseScale and zoomedScale, then mapped to symbol sizes.
 * Symbols get larger as the scale decreases (zooming in).
 *
 * @param {number} scale - The current map scale
 * @param {number} [minScale=32] - The minimum symbol size
 * @param {number} [maxScale=10] - The maximum symbol size
 * @param {number} [baseScale=100000000] - The scale at which symbols are smallest (zoomed out)
 * @param {number} [zoomedScale=10000] - The scale at which symbols are largest (zoomed in)
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

  // Normalize the zoom level between 0 and 1, inverted so 0 is zoomed out and 1 is zoomed in
  const normalizedZoom = 1 - (zoomLevel - baseZoomLevel) / (zoomedZoomLevel - baseZoomLevel);

  // Apply quadratic ease-out function for more gradual transition
  // This will distribute size changes more evenly across the zoom range
  const easedZoom = 1 - Math.pow(1 - normalizedZoom, 2);

  // Interpolate between min and max sizes
  const calculatedSize = minScale + (maxScale - minScale) * easedZoom;

  // Clamp to ensure within bounds
  return Math.max(maxScale, Math.min(minScale, calculatedSize));
}

const MIN_SYMBOL_SIZE = 10;
const MAX_SYMBOL_SIZE = 42;
// Scale steps follow a 2x progression for more gradual zoom level changes
// Adjusted to focus on the main zoom range between 5,000 and 5,000,000
const SCALE_STEPS = [
  5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1280000, 2560000, 5000000,
];
export const STEPS = SCALE_STEPS.map((scale) => ({
  size: createSmoothScaledSymbolSize(scale, MAX_SYMBOL_SIZE, MIN_SYMBOL_SIZE, 5000000, 5000),
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
