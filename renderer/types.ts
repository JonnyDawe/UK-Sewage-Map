export type {
    PageContextServer,
    /*
  // When using Client Routing https://vike.dev/clientRouting
  PageContextClient,
  PageContext,
  /*/
    // When using Server Routing
    PageContextClientWithServerRouting as PageContextClient,
    PageContextWithServerRouting as PageContext
    //*/
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
