export function asJST(time) {
    const offset = -9;

    return new Date(time - (offset * 60 - time.getTimezoneOffset()) * 60 * 1000);
}
