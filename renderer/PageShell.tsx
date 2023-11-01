import React from "react";

import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "../src/styles/index.css";
import "@radix-ui/themes/styles.css";
import { ClientOnly } from "./ClientOnly";

export { PageShell };

function PageShell({
    children,
    pageContext
}: {
    children: React.ReactNode;
    pageContext: PageContext;
}) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
        </React.StrictMode>
    );
}
