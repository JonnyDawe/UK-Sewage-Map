import React from 'react';
import { useTernaryDarkMode } from 'usehooks-ts';

import { useCallbackRef } from '@/hooks/useCallbackRef';

import { isValidTheme } from '../utils/themeValidation';
import { updateEsriTheme } from '../utils/updateEsriTheme';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = `${import.meta.env.VITE_CACHE_ID}:theme`;

export function useTheme() {
  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode({
    defaultValue: 'system',
    initializeWithValue: true,
    localStorageKey: THEME_STORAGE_KEY,
  });
  const theme: Theme = isDarkMode ? 'dark' : 'light';

  const toggleTheme = useCallbackRef(() => {
    const newMode = theme === 'light' ? 'dark' : 'light';
    setTernaryDarkMode(isDarkMode ? 'light' : 'dark');
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
