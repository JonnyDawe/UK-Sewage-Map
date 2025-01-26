import React from 'react';

import { AppThemeContext } from '../ThemeContext';

export function useAppTheme() {
  const context = React.useContext(AppThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
