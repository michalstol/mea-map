function buildUrl(url: string) {
    let urlTemp = url;

    return {
        setValue: function (name: string, value: string) {
            if (urlTemp.includes(name)) {
                urlTemp = urlTemp.replace(
                    `{${name}}`,
                    encodeURIComponent(value)
                );
            }

            return this;
        },
        addQuery: function (name: string, value: string) {
            if (
                !urlTemp.includes(`?${name}=`) &&
                !urlTemp.includes(`&${name}=`)
            ) {
                urlTemp = `${urlTemp}&${name}=${encodeURIComponent(value)}`;
            }

            return this;
        },
        getUrl: function () {
            return urlTemp;
        },
    };
}

export { buildUrl };
