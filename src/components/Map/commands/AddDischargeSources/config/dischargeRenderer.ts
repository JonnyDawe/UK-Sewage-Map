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
 * @param {number} scale - The current map scale.
 * @param {number} [minScale=32] - The minimum scale value.
 * @param {number} [maxScale=10] - The maximum scale value.
 * @param {number} [baseScale=100000000] - The base scale for normalization.
 * @param {number} [zoomedScale=10000] - The zoomed scale for normalization.
 * @returns {number} The calculated symbol size.
 */
export function createSmoothScaledSymbolSize(
  scale: number,
  minScale: number = 32,
  maxScale: number = 10,
  baseScale = 100000000,
  zoomedScale = 10000,
): number {
  const logBase4Scale = Math.log(scale) / Math.log(4);

  // Normalize the scale between a large zoom scale (e.g., 1,000,000) and a smaller zoom scale (e.g., 100)
  const normalizedScale =
    (logBase4Scale - Math.log(baseScale) / Math.log(4)) /
    (Math.log(zoomedScale) / Math.log(4) - Math.log(baseScale) / Math.log(4));

  // Ensure the size changes smoothly between minScale and maxScale
  const calculatedSize = minScale + (maxScale - minScale) * (1 - normalizedScale);

  // Clamp to ensure within bounds
  return Math.max(maxScale, Math.min(minScale, calculatedSize));
}

const MIN_SYMBOL_SIZE = 6;
const MAX_SYMBOL_SIZE = 32;
const SCALE_STEPS = [6000, 36000, 230000, 920000, 2300000, 9200000];
export const STEPS = SCALE_STEPS.map((scale) => ({
  size: createSmoothScaledSymbolSize(scale, MAX_SYMBOL_SIZE, MIN_SYMBOL_SIZE, 5000000, 6000),
  value: scale,
}));

const sizeVariable = new SizeVariable({
  valueExpression: '$view.scale',
  stops: STEPS,
});

export const thamesWaterAlertStatusRenderer = new UniqueValueRenderer({
  valueExpression: thamesWaterAlertStatusSymbolArcade,
  uniqueValueGroups,
  visualVariables: [sizeVariable],
});

export const otherWaterAlertStatusRenderer = new UniqueValueRenderer({
  valueExpression: otherWaterAlertStatusSymbolArcade,
  uniqueValueGroups,
  visualVariables: [sizeVariable],
});
