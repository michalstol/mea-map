import React from 'react';

import { ROUTES, Query } from '@uTypes/routing';

interface Location {
    path: ROUTES;
    queries: Query[];
}

function createQueries(queries?: Query[]): string {
    if (!queries) {
        return '';
    }

    return `?${queries
        .map(query => `${query.key}=${encodeURIComponent(query.value)}`)
        .join('&')}`;
}

const initLocation: Location = (function () {
    const { pathname, searchParams } = new URL(window.location.href);
    const stringifyQueries = searchParams.toString();

    const path: ROUTES = Object.values(ROUTES).includes(pathname as any)
        ? (pathname as ROUTES)
        : ROUTES.HOMEPAGE;
    const queries: Query[] =
        (!!stringifyQueries &&
            stringifyQueries.split('&').map(query => {
                const temp = query.split('=');

                return {
                    key: temp[0],
                    value: decodeURIComponent(temp[1]),
                };
            })) ||
        [];

    return {
        path,
        queries,
    };
})();

interface RouteContextProps extends Location {
    history: Location[];
    change: (
        path: ROUTES,
        query?: Query[],
        state?: { [key: string]: any }
    ) => void;
}

const RouteContext = React.createContext<RouteContextProps>({
    ...initLocation,
    history: [{ ...initLocation }],
    change: () => {},
});

interface RouteProviderProps {
    children: React.ReactNode;
}

function RouteProvider(props: RouteProviderProps): React.ReactElement {
    const [history, setHistory] = React.useState<Location[]>(() => [
        { ...initLocation },
    ]);
    const [path, setPath] = React.useState<ROUTES>(() => initLocation.path);
    const [queries, setQueries] = React.useState<Query[]>(
        () => initLocation.queries
    );

    return (
        <RouteContext.Provider
            value={{
                path,
                queries,
                history,
                change: (
                    newPath: ROUTES,
                    newQueries?: Query[],
                    state: { [key: string]: any } = {}
                ) => {
                    setPath(newPath);
                    setQueries(newQueries ?? []);
                    setHistory(current => [
                        ...current,
                        { path: newPath, queries: newQueries ?? [] },
                    ]);

                    window.history.pushState(
                        state,
                        '',
                        window.location.origin +
                            newPath +
                            createQueries(newQueries)
                    );
                },
            }}
        >
            {props.children}
        </RouteContext.Provider>
    );
}

function useRoute(): RouteContextProps {
    const context = React.useContext(RouteContext);

    return { ...context };
}

export { RouteProvider, useRoute };