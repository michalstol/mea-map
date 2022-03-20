import { buildUrl } from '@helpers/buildUrl';

describe('buildUrl test', () => {
    const pathWithoutQuery = '/foo';
    const pathWithQuery = '/foo?test={testValue}';
    const queryKey = 'test';
    const queryValue = 'test-value';
    const results = `${pathWithoutQuery}?${queryKey}=${queryValue}`;

    it('Test if buildUrl add query correctly', () => {
        expect(
            buildUrl(pathWithoutQuery).addQuery(queryKey, queryValue).done()
        ).toBe(results);
    });

    it('Test if buildUrl set query correctly', () => {
        expect(
            buildUrl(pathWithQuery).setQuery(queryKey, queryValue).done()
        ).toBe(results);
    });

    it('Test if buildUrl set and add query correctly', () => {
        expect(
            buildUrl(pathWithQuery)
                .setQuery(queryKey, queryValue)
                .addQuery(queryKey, queryValue)
                .done()
        ).toBe(results + `&${queryKey}=${queryValue}`);
    });
});
