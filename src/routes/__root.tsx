import { createRootRoute, Outlet } from '@tanstack/react-router';
import { fallback, zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';

import { LayerManagerProvider } from '@/components/Map/layermanagement/LayerManagerProvider';
import { AppTheme } from '@/components/Theme/AppTheme';

import { AppThemeProvider } from '../components/Theme/ThemeProvider';

const assetIDSchema = z.object({
  asset_id: fallback(z.string().optional(), undefined),
  company: fallback(z.string().optional(), undefined),
});

export const Route = createRootRoute({
  component: () => (
    <LayerManagerProvider>
      <AppThemeProvider
        theme={{
          accentColor: 'blue',
          grayColor: 'gray',
          panelBackground: 'solid',
        }}
        isChild={false}
      >
        <AppTheme>
          <Outlet />
        </AppTheme>
      </AppThemeProvider>
    </LayerManagerProvider>
  ),
  validateSearch: zodValidator(assetIDSchema),
});
