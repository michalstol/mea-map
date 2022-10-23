async function fetchAPI<T = unknown>(
    url: string,
    options?: RequestInit
): Promise<T | unknown> {
    return await fetch(url, options).then(r => r.json());
}

export { fetchAPI };
