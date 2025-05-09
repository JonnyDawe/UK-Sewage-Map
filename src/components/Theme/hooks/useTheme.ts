import React from 'react';

import { useCallbackRef } from '@/lib/hooks/useCallbackRef';
import { useColorMode } from '@/lib/hooks/useColorMode';

import { isValidTheme } from '../utils/themeValidation';
import { updateEsriTheme } from '../utils/updateEsriTheme';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = `${import.meta.env.VITE_CACHE_ID}:theme`;

export function useTheme() {
  const { theme, setTheme } = useColorMode(THEME_STORAGE_KEY);

  const toggleTheme = useCallbackRef(() => {
    const newMode = theme === 'light' ? 'dark' : 'light';
    setTheme(newMode);
    updateEsriTheme(newMode);
  });

  const initialiseTheme = useCallbackRef(() => {
    updateEsriTheme(theme);
  });

  return React.useMemo(
    () => ({
      currentTheme: theme,
      toggleTheme,
      initialiseTheme,
    }),
    [theme, toggleTheme, initialiseTheme],
  );
}

export function useThemeRef() {
  const { currentTheme } = useTheme();
  const themeRef = React.useRef<Theme | undefined>(undefined);

  React.useEffect(() => {
    if (isValidTheme(currentTheme) && themeRef.current !== currentTheme) {
      themeRef.current = currentTheme;
    }
  }, [currentTheme]);
  return themeRef;
}
