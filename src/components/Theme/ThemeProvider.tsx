'use client';
import { ThemeProps } from '@radix-ui/themes';
import * as React from 'react';

import { useTheme } from './hooks/useTheme';
import { AppThemeContext } from './ThemeContext';

interface AppThemeProviderProps {
  theme: Partial<ThemeProps>;
  isChild: boolean;
  children: React.ReactNode;
}

export const AppThemeProvider = ({ theme, isChild, children }: AppThemeProviderProps) => {
  const { currentTheme, toggleTheme, initialiseTheme } = useTheme();
  React.useEffect(() => {
    if (!isChild) {
      initialiseTheme();
    }
  }, [isChild, initialiseTheme]);

  const contextValue = React.useMemo(
    () => ({
      toggleColorMode: toggleTheme,
      theme: { ...theme, appearance: currentTheme },
    }),
    [toggleTheme, theme, currentTheme],
  );

  return <AppThemeContext.Provider value={contextValue}>{children}</AppThemeContext.Provider>;
};
