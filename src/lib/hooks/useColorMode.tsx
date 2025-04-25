import { readLocalStorageValue, useColorScheme, useLocalStorage } from '@mantine/hooks';

export function useColorMode(storageKey?: string, initialValue?: 'dark' | 'light') {
  const colorScheme = useColorScheme(
    readLocalStorageValue({ key: storageKey ?? 'theme' }) ?? initialValue ?? 'light',
  );
  const [theme, setTheme] = useLocalStorage({
    key: storageKey ?? 'theme',
    defaultValue: colorScheme,
  });
  return { theme, setTheme };
}
