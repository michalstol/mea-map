import { ROUTES } from '@configs/routes';

function buildUrl(userPath: string | ROUTES) {
    let path = userPath;

    return {
        setQuery: function (query: string, value: string) {
            path = path.replace(`{${query}Value}`, value);

            return this;
        },
        addQuery: function (query: string, value: string) {
            const newPath: string[] = [path];

            newPath.push(path.includes('?') ? '&' : '?');
            newPath.push(`${query}=${value}`);

            path = newPath.join('');

            return this;
        },
        done: function () {
            return path;
        },
    };
}

export { buildUrl };
