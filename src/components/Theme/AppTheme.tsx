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

  .light & {
    --wave-brown: #997c74;
    --wave-blue: #e6f5ff;

    --blue-1: #f2f6fb;
    --blue-2: #d4e2f2;
    --blue-3: #b6cee9;
    --blue-4: #97b9de;
    --blue-5: #7aa5d4;
    --blue-6: #5d91c9;
    --blue-7: #417dbd;
    --blue-8: #2568b1;
    --blue-9: var(--river-blue);
    --blue-10: #05468d;
    --blue-11: #013873;
    --blue-12: #002a58;

    --blue-a1: #f2f6fb04;
    --blue-a2: #d4e2f20b;
    --blue-a3: #b6cee919;
    --blue-a4: #97b9de2a;
    --blue-a5: #7aa5d43d;
    --blue-a6: #5d91c953;
    --blue-a7: #417dbd71;
    --blue-a8: #2568b1a1;
    --blue-a9: #0954a5ff;
    --blue-a10: #05468dfa;
    --blue-a11: #013873f2;
    --blue-a12: #002a58ee;
  }

  .dark & {
    --wave-brown: #765d57;
    --wave-blue: #012d5c;

    --blue-1: #00162e;
    --blue-2: #001e3e;
    --blue-3: #00254d;
    --blue-4: #012d5c;
    --blue-5: #02356b;
    --blue-6: #043d7a;
    --blue-7: #054489;
    --blue-8: #074c97;
    --blue-9: var(--river-blue);
    --blue-10: #538ac5;
    --blue-11: #a2c0e2;
    --blue-12: #f2f6fb;

    --blue-a1: #00162e11;
    --blue-a2: #001e3e18;
    --blue-a3: #00254d3a;
    --blue-a4: #012d5c57;
    --blue-a5: #02356b6b;
    --blue-a6: #043d7a7f;
    --blue-a7: #05448998;
    --blue-a8: #074c97b9;
    --blue-a9: var(--river-blue);
    --blue-a10: #538ac5;
    --blue-a11: #a2c0e2;
    --blue-a12: #f2f6fb;
  }
`;

export function AppTheme({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  const { theme } = useAppTheme();
  return (
    <Theme className={className ?? ''} {...theme}>
      {children}
    </Theme>
  );
}
