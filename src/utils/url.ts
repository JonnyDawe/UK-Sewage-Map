export function updateURLParameter(paramName: string, paramValue: string): void {
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    searchParams.set(paramName, paramValue);
    url.search = searchParams.toString();
    window.history.replaceState(null, "", url.toString());
}

export function removeURLParameter(paramName: string): void {
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    searchParams.delete(paramName);
    url.search = searchParams.toString();
    window.history.replaceState(null, "", url.toString());
}
