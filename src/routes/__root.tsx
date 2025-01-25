import { createRootRoute, Outlet } from '@tanstack/react-router';
import { fallback, zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';

import { AppTheme } from '@/components/Theme/AppTheme';

import { AppThemeProvider } from '../components/Theme/ThemeProvider';

const assetIDSchema = z.object({
  asset_id: fallback(z.string().optional(), undefined),
  company: fallback(z.string().optional(), undefined),
});

export const Route = createRootRoute({
  component: () => (
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
  ),
  validateSearch: zodValidator(assetIDSchema),
});
