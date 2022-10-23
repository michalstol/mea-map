import React from 'react';

import { LOADING_STATE } from '@typings/loadingState';

export interface UseFetchReturn<R = unknown> {
    fetch: (url: string, init?: RequestInit) => Promise<void>;
    abort: () => void;
    state: LOADING_STATE;
    counter: number;
    results: R | null;
    error: Error | null;
    reset: () => void;
}

function useFetch<R = unknown>(): UseFetchReturn<R> {
    const [controller, setController] = React.useState<AbortController | null>(
        null
    );
    const [loadingState, setLoadingState] = React.useState<LOADING_STATE>(
        LOADING_STATE.IDLE
    );
    const [results, setResults] = React.useState<R | null>(null);
    const [error, setError] = React.useState<Error | null>(null);
    const [counter, setCounter] = React.useState(0);

    const fetchData = async (
        url: string,
        init?: RequestInit
    ): Promise<void> => {
        controller?.abort();

        const newController = new AbortController();

        setLoadingState(LOADING_STATE.PENDING);
        setController(newController);

        try {
            const response = await fetch(url, {
                ...init,
                signal: newController.signal,
            })
                .then(resp => resp.json())
                .then(data => data);

            setResults(response as R);
            setLoadingState(LOADING_STATE.FULFILLED);
        } catch (err) {
            setError(err as Error);
            setLoadingState(LOADING_STATE.REJECTED);
        } finally {
            setController(null);
            setCounter(counter + 1);
        }
    };

    const reset = () => {
        setResults(null);
        setError(null);
        setCounter(0);
    };

    return {
        fetch: fetchData,
        abort: controller?.abort || (() => undefined),
        state: loadingState,
        counter,
        results,
        error,
        reset,
    };
}

export { useFetch };
