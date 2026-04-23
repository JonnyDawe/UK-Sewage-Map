import '@radix-ui/themes/styles.css';

import Point from '@arcgis/core/geometry/Point';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { AppTheme } from '../Theme/AppTheme';
import { AppThemeProvider } from '../Theme/ThemeProvider';
import { DownstreamImpactPopupBody } from './DownstreamImpactPopupBody';
import { DownstreamImpactPopupHeader } from './DownstreamImpactPopupHeader';
import { DownstreamImpactProperties } from './types';

function getPropertiesFromGraphic(graphic: __esri.Graphic): DownstreamImpactProperties {
  const attrs = graphic.attributes as Record<string, unknown>;

  let CSOs: string[] = [];
  const rawCSOs = attrs['CSOs'];
  if (Array.isArray(rawCSOs)) {
    CSOs = rawCSOs as string[];
  } else if (typeof rawCSOs === 'string' && rawCSOs.trim().length > 0) {
    try {
      const parsed = JSON.parse(rawCSOs) as unknown;
      if (Array.isArray(parsed)) {
        CSOs = parsed as string[];
      }
    } catch {
      // ArcGIS may serialise Python-style lists with single quotes; normalise and retry
      try {
        const normalised = rawCSOs.replace(/'/g, '"');
        const parsed = JSON.parse(normalised) as unknown;
        if (Array.isArray(parsed)) {
          CSOs = parsed as string[];
        }
      } catch {
        // Fall back to treating the whole string as a comma-separated list
        CSOs = rawCSOs
          .replace(/^\[|\]$/g, '')
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean);
      }
    }
  }

  return {
    CSOs,
    number_upstream_CSOs: Number(attrs['number_upstream_CSOs'] ?? 0),
    number_CSOs_per_km2: Number(attrs['number_CSOs_per_km2'] ?? 0),
  };
}

function getCoordinatesFromGraphic(graphic: __esri.Graphic): {
  longitude: number;
  latitude: number;
} {
  const point = graphic.geometry as Point | null;
  return {
    longitude: point?.longitude ?? 0,
    latitude: point?.latitude ?? 0,
  };
}

function createHTMLContentFn() {
  return function ({ graphic }: { graphic: __esri.Graphic }) {
    const container = document.createElement('div');
    const root = createRoot(container);
    const properties = getPropertiesFromGraphic(graphic);

    root.render(
      <React.StrictMode>
        <AppThemeProvider
          theme={{
            accentColor: 'blue',
            grayColor: 'gray',
            panelBackground: 'solid',
          }}
          isChild={true}
        >
          <AppTheme>
            <DownstreamImpactPopupBody
              CSOs={properties.CSOs}
              number_upstream_CSOs={properties.number_upstream_CSOs}
              number_CSOs_per_km2={properties.number_CSOs_per_km2}
            />
          </AppTheme>
        </AppThemeProvider>
      </React.StrictMode>,
    );
    return container;
  };
}

function createTitleFn(companyName: string) {
  return function ({ graphic }: { graphic: __esri.Graphic }) {
    const container = document.createElement('div');
    const root = createRoot(container);
    const { longitude, latitude } = getCoordinatesFromGraphic(graphic);

    flushSync(() => {
      root.render(
        <React.StrictMode>
          <AppThemeProvider
            theme={{
              accentColor: 'blue',
              grayColor: 'gray',
              panelBackground: 'solid',
            }}
            isChild={true}
          >
            <AppTheme>
              <DownstreamImpactPopupHeader
                company={companyName}
                longitude={longitude}
                latitude={latitude}
              />
            </AppTheme>
          </AppThemeProvider>
        </React.StrictMode>,
      );
    });

    return container.innerHTML;
  };
}

export function createDownstreamImpactPopupTemplate(companyName: string): PopupTemplate {
  return new PopupTemplate({
    title: createTitleFn(companyName),
    returnGeometry: true,
    content: createHTMLContentFn(),
  });
}
