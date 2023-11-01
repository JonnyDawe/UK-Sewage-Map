export { render };
// See https://vike.dev/data-fetching
export const passToClient = ["pageProps", "urlPathname", "urlParsed"];

import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import type { PageContextServer } from "./types";

import React from "react";

async function render(pageContext: PageContextServer) {
    const { Page, pageProps } = pageContext;
    // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
    if (!Page) throw new Error("My render() hook expects pageContext.Page to be defined");
    const pageHtml = ReactDOMServer.renderToString(
        <PageShell pageContext={pageContext}>
            <Page {...pageProps} />
        </PageShell>
    );

    // See https://vike.dev/head
    // const { documentProps } = pageContext.exports;
    // const title = (documentProps && documentProps.title) || "Vite SSR app";
    // const desc = (documentProps && documentProps.description) || "App using Vite + Vike";
    const PermitNumber = pageContext.urlParsed.search?.["PermitNumber"] ?? "";
    const BaseUrl = "https://www.sewagemap.co.uk";

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <link
        disabled
        id="arcgis-maps-sdk-theme-dark"
        rel="stylesheet"
        href="https://js.arcgis.com/4.28/esri/themes/dark/main.css"
    />
    <link
        id="arcgis-maps-sdk-theme-light"
        rel="stylesheet"
        href="https://js.arcgis.com/4.28/esri/themes/light/main.css"
    />



  <!-- HTML Meta Tags -->
  <title>Sewage Map</title>
  <meta name="description" content="Real-Time Thames Sewage Discharge Monitoring | Sewage Map - Stay Updated on Sewage Pollution">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="${BaseUrl}${
        PermitNumber ? `?PermitNumber=${PermitNumber}` : ""
    }">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Sewage Map">
  <meta property="og:description" content="Real-Time Thames Sewage Discharge Monitoring | Sewage Map - Stay Updated on Sewage Pollution">
  <meta property="og:image" content="${BaseUrl}/api/og${
        PermitNumber ? `?PermitNumber=${PermitNumber}` : ""
    }">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="sewagemap-git-ogimagetests-jonny-dawe.vercel.app">
  <meta property="twitter:url" content="${BaseUrl}${
        PermitNumber ? `?PermitNumber=${PermitNumber}` : ""
    }">
  <meta name="twitter:title" content="Sewage Map">
  <meta name="twitter:description" content="Real-Time Thames Sewage Discharge Monitoring | Sewage Map - Stay Updated on Sewage Pollution">
  <meta name="twitter:image" content="${BaseUrl}/api/og${
        PermitNumber ? `?PermitNumber=${PermitNumber}` : ""
    }">
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
        }
    };
}
