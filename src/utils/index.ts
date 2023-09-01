export function isUserFirstVisit(): boolean {
    try {
        const hasVisited = localStorage.getItem("visitedPage");
        if (!hasVisited) {
            localStorage.setItem("visitedPage", "true");
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error accessing local storage:", error);
        return false;
    }
}
