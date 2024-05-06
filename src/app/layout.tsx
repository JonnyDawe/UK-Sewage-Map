// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck - This file is not type checked as the link tag is allowed to have a disabled property
import "@/styles/index.css";

import { Lexend_Exa } from "next/font/google";

import { NextThemeProvider } from "@/components/Theme/ThemeProvider";

import { Providers } from "./providers";

const LexendFont = Lexend_Exa({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lexend"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://js.arcgis.com/4.29/esri/themes/light/main.css"
                    id="arcgis-maps-sdk-theme-light"
                    disabled
                />
                <link
                    rel="stylesheet"
                    href="https://js.arcgis.com/4.29/esri/themes/dark/main.css"
                    id="arcgis-maps-sdk-theme-dark"
                    disabled
                />
            </head>

            <body className={LexendFont.className}>
                <NextThemeProvider>
                    <Providers>{children}</Providers>
                </NextThemeProvider>
            </body>
        </html>
    );
}
