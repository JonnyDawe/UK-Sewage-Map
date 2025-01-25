import { ThemeProps } from '@radix-ui/themes';

export type ColorMode = 'light' | 'dark';

export interface ThemeContextProps {
  theme: Partial<ThemeProps>;
  toggleColorMode: () => void;
}
