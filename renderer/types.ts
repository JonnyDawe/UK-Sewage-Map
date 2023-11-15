/* eslint-disable @typescript-eslint/no-namespace */
export type {
    PageContextWithServerRouting as PageContext,
    PageContextClientWithServerRouting as PageContextClient,
    PageContextServer
} from "vike/types";
export type { PageProps };

// https://vike.dev/pageContext#typescript
declare global {
    namespace Vike {
        interface PageContext {
            Page: Page;
            pageProps?: PageProps;
            urlPathname: string;
            urlParsed: {
                origin: null | string;
                pathname: string;
                pathnameOriginal: string;
                search: Record<string, string>; // (AKA query parameters)
                searchAll: Record<string, string[]>;
                searchOriginal: null | string;
                hash: string;
                hashOriginal: null | string;
            };
            exports: {
                documentProps?: {
                    title?: string;
                    description?: string;
                };
            };
        }
    }
}

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;
