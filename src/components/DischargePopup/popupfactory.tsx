import '@radix-ui/themes/styles.css';

import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { getRenderPropsFromGraphic } from '../../utils/discharge/discharge.utils';
import { AppTheme } from '../Theme/AppTheme';
import { AppThemeProvider } from '../Theme/ThemeProvider';
import { PopUpBody } from './PopUpContent/PopUpBody';
import { PopUpHeader } from './PopUpContent/PopUpHeader';

export function setEsriPopupHTMLContent({ graphic }: { graphic: __esri.Graphic }) {
  const container = document.createElement('div');
  const root = createRoot(container);
  const { dischargeInterval, alertStatus, location, company } = getRenderPropsFromGraphic(graphic);

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
          <PopUpBody
            company={company ?? ''}
            dischargeInterval={dischargeInterval}
            alertStatus={alertStatus}
            locationName={location ?? ''}
          ></PopUpBody>
        </AppTheme>
      </AppThemeProvider>
    </React.StrictMode>,
  );
  return container;
}

export function setEsriPopupTitle({ graphic }: { graphic: __esri.Graphic }) {
  const container = document.createElement('div');
  const root = createRoot(container);
  const { alertStatus, feeds, location, company, id } = getRenderPropsFromGraphic(graphic);
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
            <PopUpHeader
              alertStatus={alertStatus}
              location={location ?? ''}
              feeds={feeds ?? ''}
              company={company ?? ''}
              id={id ?? ''}
            ></PopUpHeader>
          </AppTheme>
        </AppThemeProvider>
      </React.StrictMode>,
    );
  });

  return container.innerHTML;
}
