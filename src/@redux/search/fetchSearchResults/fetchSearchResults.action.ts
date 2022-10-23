import { createAsyncThunk } from '@reduxjs/toolkit';

import { MAPBOX_FORWARD_GEOCODING_ENDPOINT } from '@configs/const';

import { MAPBOX_PLACE_TYPES } from '@typings/mapbox';

import { buildUrl } from '@helpers/buildUrl';
import { fetchAPI } from '@helpers/fetchAPI';

import { SEARCH_ACTIONS, SEARCH_PREFIX } from '../search.typings';

interface Props {
    query: string;
    options?: RequestInit;
}

const fetchSearchResultsAction = createAsyncThunk(
    `${SEARCH_PREFIX}/${SEARCH_ACTIONS.FETCH_RESULTS}`,
    async (props: Props) => {
        return await fetchAPI(
            buildUrl(MAPBOX_FORWARD_GEOCODING_ENDPOINT)
                .setValue('query', props.query.trim())
                .addQuery('proximity', 'ip')
                .addQuery(
                    'types',
                    `${MAPBOX_PLACE_TYPES.place},${MAPBOX_PLACE_TYPES.postcode},${MAPBOX_PLACE_TYPES.address}`
                )
                .getUrl(),
            {
                method: 'GET',
                ...(props.options && props.options),
            }
        );
    }
);

export { fetchSearchResultsAction };
