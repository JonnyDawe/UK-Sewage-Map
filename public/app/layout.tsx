// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck - This file is not type checked as the link tag is allowed to have a disabled property
import '@/styles/index.css';

import { Analytics } from '@vercel/analytics/react';
import { Roboto_Flex } from 'next/font/google';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Providers } from './providers';

const LexendFont = Roboto_Flex({
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-roboto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.31/esri/themes/light/main.css"
          id="arcgis-maps-sdk-theme-light"
          disabled
        />
        <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.31/esri/themes/dark/main.css"
          id="arcgis-maps-sdk-theme-dark"
          disabled
        />
      </head>
      <body className={LexendFont.className}>
        <NextThemesProvider attribute="class">
          <Providers>{children}</Providers>
        </NextThemesProvider>
        <Analytics />
      </body>
    </html>
  );
}
