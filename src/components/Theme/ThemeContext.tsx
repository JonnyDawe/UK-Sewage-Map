'use client';
import { ThemeProps } from '@radix-ui/themes';
import * as React from 'react';

export type ColorMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: Partial<ThemeProps>;
  toggleColorMode: () => void;
}

export const AppThemeContext = React.createContext<ThemeContextProps>({
  theme: {},
  toggleColorMode: () => undefined,
});
