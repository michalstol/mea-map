import React from 'react';
import { FeatureCollection, Feature } from 'geojson';

import { MAPBOX_FORWARD_GEOCODING_ENDPOINT } from '@configs/const';

import { buildUrl } from '@helpers/buildUrl';

function SearchPlace(): React.ReactElement {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<Feature[] | null>(null);
    const [controller, setController] = React.useState<AbortController | null>(
        null
    );
    const [timeoutNo, setTimeoutNo] = React.useState<NodeJS.Timeout | null>(
        null
    );

    const onSearch = (e: React.SyntheticEvent<HTMLInputElement>): void => {
        setQuery(e.currentTarget.value);
    };

    React.useEffect(() => {
        if (timeoutNo) {
            controller?.abort();

            clearTimeout(timeoutNo);
            setTimeoutNo(null);
        }

        setTimeoutNo(
            setTimeout(async () => {
                const url = buildUrl(MAPBOX_FORWARD_GEOCODING_ENDPOINT)
                    .setValue('query', encodeURIComponent(query.trim()))
                    .getUrl();

                const fetchController = new AbortController();

                setController(fetchController);

                const fetchResults = await fetch(url, {
                    method: 'GET',
                    signal: fetchController.signal,
                })
                    .then(resp => resp.json())
                    .then(r => r as FeatureCollection);

                setResults(fetchResults.features);
            }, 500)
        );
    }, [query]);

    return (
        <div>
            <div>
                <input placeholder="Search" value={query} onChange={onSearch} />
            </div>

            <ul>
                {results?.map(place => (
                    // fix place type
                    <li key={place.id}>{place.place_name}</li>
                ))}
            </ul>
        </div>
    );
}

export { SearchPlace };
