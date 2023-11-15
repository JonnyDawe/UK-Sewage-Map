import React from "react";

import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

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
