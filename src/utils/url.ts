export function updateURLParameter(paramName: string, paramValue: string): void {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set(paramName, paramValue);
    url.search = searchParams.toString();
    window.history.replaceState(null, "", url.toString());
}

export function removeURLParameter(paramName: string): void {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.delete(paramName);
    url.search = searchParams.toString();
    window.history.replaceState(null, "", url.toString());
}
