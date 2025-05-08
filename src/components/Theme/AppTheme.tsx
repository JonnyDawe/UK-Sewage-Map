'use client';
import styled from '@emotion/styled';
import { Theme as ThemePrimitive } from '@radix-ui/themes';
import React from 'react';

import { useAppTheme } from './hooks/useAppTheme';

/**  This is where we might define different themes and color overides. 

import styled from "@emotion/styled";

const Theme = styled(GenericTheme)`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

    // CSS overides would allow us to manipulate a base theme we are using.
    --accent-9: #3300ff
`;

*/

const Theme = styled(ThemePrimitive)`
  padding: 0;
  margin: 0;
  min-height: 0% !important;
  height: 100%;
  width: 100%;
  background-color: transparent !important;
  --cursor-button: pointer;

  --default-font-family: var(--font-roboto) !important;
  --heading-font-family: var(--font-roboto) !important;
  --code-font-family: var(--font-roboto) !important;
  --strong-font-family: var(--font-roboto) !important;
  --em-font-family: var(--font-roboto) !important;
  --quote-font-family: var(--font-roboto) !important;

  --river-blue: #0954a5;
  --light-river-blue: #52a9ff;

  .light &,
  .radix-themes.light {
    --wave-brown: #997c74;
    --wave-blue: var(--blue-4);

    --blue-1: #fdfdfe;
    --blue-2: #f6fafe;
    --blue-3: #ecf3fc;
    --blue-4: #ddebfd;
    --blue-5: #cde1fc;
    --blue-6: #b8d4fa;
    --blue-7: #a1c3f0;
    --blue-8: #7faae4;
    --blue-9: #0954a5;
    --blue-10: #004494;
    --blue-11: #2065b7;
    --blue-12: #153155;

    --blue-a1: #00008002;
    --blue-a2: #0072e309;
    --blue-a3: #005ed713;
    --blue-a4: #0069f022;
    --blue-a5: #0066f032;
    --blue-a6: #0065ee47;
    --blue-a7: #005dd75e;
    --blue-a8: #0056ca80;
    --blue-a9: #004ea2f6;
    --blue-a10: #004494;
    --blue-a11: #004faddf;
    --blue-a12: #001f46ea;

    --blue-contrast: #fff;
    --blue-surface: #f4f9fecc;
    --blue-indicator: #0954a5;
    --blue-track: #0954a5;
  }

  @supports (color: color(display-p3 1 1 1)) {
    @media (color-gamut: p3) {
      .light &,
      .radix-themes.light {
        --blue-1: oklch(99.4% 0.0013 255.7);
        --blue-2: oklch(98.3% 0.0068 255.7);
        --blue-3: oklch(96.1% 0.0146 255.7);
        --blue-4: oklch(93.5% 0.0287 255.7);
        --blue-5: oklch(90.3% 0.0434 255.7);
        --blue-6: oklch(86.3% 0.0606 255.7);
        --blue-7: oklch(80.7% 0.0737 255.7);
        --blue-8: oklch(73% 0.0962 255.7);
        --blue-9: oklch(45.3% 0.1467 255.7);
        --blue-10: oklch(39.9% 0.1467 255.7);
        --blue-11: oklch(51% 0.1467 255.7);
        --blue-12: oklch(31.3% 0.0726 255.7);

        --blue-a1: color(display-p3 0.0196 0.0196 0.5098 / 0.008);
        --blue-a2: color(display-p3 0.0196 0.3882 0.8784 / 0.032);
        --blue-a3: color(display-p3 0.0078 0.3373 0.7804 / 0.071);
        --blue-a4: color(display-p3 0.0039 0.3608 0.8745 / 0.122);
        --blue-a5: color(display-p3 0.0039 0.3294 0.8706 / 0.181);
        --blue-a6: color(display-p3 0.0039 0.3373 0.8824 / 0.259);
        --blue-a7: color(display-p3 0.0039 0.302 0.7843 / 0.342);
        --blue-a8: color(display-p3 0.0039 0.2784 0.7333 / 0.467);
        --blue-a9: color(display-p3 0 0.2157 0.5608 / 0.859);
        --blue-a10: color(display-p3 0 0.1804 0.5098 / 0.899);
        --blue-a11: color(display-p3 0 0.2314 0.6118 / 0.793);
        --blue-a12: color(display-p3 0 0.0902 0.2392 / 0.891);

        --blue-contrast: #fff;
        --blue-surface: color(display-p3 0.9608 0.9765 0.9961 / 0.8);
        --blue-indicator: oklch(45.3% 0.1467 255.7);
        --blue-track: oklch(45.3% 0.1467 255.7);
      }
    }
  }

  .dark &,
  .radix-themes.dark {
    --wave-brown: #765d57;
    --wave-blue: var(--blue-3);

    --blue-1: #08111e;
    --blue-2: #0d1928;
    --blue-3: #05264e;
    --blue-4: #002f6c;
    --blue-5: #003b80;
    --blue-6: #044992;
    --blue-7: #1058aa;
    --blue-8: #1269ca;
    --blue-9: #0954a5;
    --blue-10: #00458e;
    --blue-11: #75b7ff;
    --blue-12: #c8e3ff;

    --blue-a1: #0012fe0e;
    --blue-a2: #0063fc19;
    --blue-a3: #0062fd42;
    --blue-a4: #0060fe62;
    --blue-a5: #006bff77;
    --blue-a6: #0078fe8b;
    --blue-a7: #1080ffa4;
    --blue-a8: #1282fec7;
    --blue-a9: #057dff9f;
    --blue-a10: #0074ff86;
    --blue-a11: #75b7ff;
    --blue-a12: #c8e3ff;

    --blue-contrast: #fff;
    --blue-surface: #0a213f80;
    --blue-indicator: #0954a5;
    --blue-track: #0954a5;
  }

  @supports (color: color(display-p3 1 1 1)) {
    @media (color-gamut: p3) {
      .dark &,
      .radix-themes.dark {
        --blue-1: oklch(17.8% 0.0308 255.7);
        --blue-2: oklch(20.9% 0.036 255.7);
        --blue-3: oklch(27.2% 0.0821 255.7);
        --blue-4: oklch(31.7% 0.1188 255.7);
        --blue-5: oklch(36.4% 0.13 255.7);
        --blue-6: oklch(41.2% 0.1357 255.7);
        --blue-7: oklch(46.8% 0.1467 255.7);
        --blue-8: oklch(53% 0.1687 255.7);
        --blue-9: oklch(45.3% 0.1467 255.7);
        --blue-10: oklch(39.9% 0.1357 255.7);
        --blue-11: oklch(77.1% 0.1579 255.7);
        --blue-12: oklch(90.8% 0.058 255.7);

        --blue-a1: color(display-p3 0 0.0706 0.9922 / 0.051);
        --blue-a2: color(display-p3 0.0275 0.4078 0.9961 / 0.093);
        --blue-a3: color(display-p3 0.0353 0.3882 1 / 0.244);
        --blue-a4: color(display-p3 0.0588 0.3765 1 / 0.366);
        --blue-a5: color(display-p3 0.1137 0.4275 1 / 0.446);
        --blue-a6: color(display-p3 0.1647 0.4824 1 / 0.522);
        --blue-a7: color(display-p3 0.2157 0.5137 1 / 0.618);
        --blue-a8: color(display-p3 0.2314 0.5176 1 / 0.748);
        --blue-a9: color(display-p3 0.1922 0.502 1 / 0.597);
        --blue-a10: color(display-p3 0.1373 0.4627 1 / 0.505);
        --blue-a11: color(display-p3 0.5294 0.7294 1 / 0.975);
        --blue-a12: color(display-p3 0.8118 0.898 1 / 0.988);

        --blue-contrast: #fff;
        --blue-surface: color(display-p3 0.051 0.1176 0.2353 / 0.5);
        --blue-indicator: oklch(45.3% 0.1467 255.7);
        --blue-track: oklch(45.3% 0.1467 255.7);
      }
    }
  }
`;

export function AppTheme({
  children,
  className,
  appearanceOverride,
}: React.PropsWithChildren<{ className?: string; appearanceOverride?: 'light' | 'dark' }>) {
  const { theme } = useAppTheme();

  const appliedTheme = { ...theme, appearance: appearanceOverride };

  return (
    <Theme className={className ?? ''} {...appliedTheme}>
      {children}
    </Theme>
  );
}
