export function throttleAsync<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let timerId: number | undefined;
    let lastArgs: Parameters<T> | undefined;
    let promise: Promise<ReturnType<T>> | undefined;

    const execute = async () => {
        if (lastArgs) {
            promise = func(...lastArgs);
            lastArgs = undefined;
        }

        timerId = undefined;
    };

    return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
        lastArgs = args;

        if (!timerId) {
            promise = func(...args);
            timerId = window.setTimeout(execute, wait);
        }

        return promise!;
    };
}
