import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';
import { MapBoxFeatureCollection } from '@typings/mapbox';

import { SearchState } from '../search.typings';
import { fetchSearchResultsAction } from './fetchSearchResults.action';

const fetchSearchResultsReducer = (
    builder: ActionReducerMapBuilder<SearchState>
) =>
    builder
        .addCase(fetchSearchResultsAction.pending, state => {
            state.fetchState = LOADING_STATE.PENDING;
        })
        .addCase(fetchSearchResultsAction.rejected, (state, action) => {
            state.fetchState = LOADING_STATE.REJECTED;
            console.warn(action.error);
        })
        .addCase(fetchSearchResultsAction.fulfilled, (state, action) => {
            state.fetchState = LOADING_STATE.FULFILLED;

            if (action.payload) {
                const results = action.payload as MapBoxFeatureCollection;
                state.results = results.features;
            }
        });

export { fetchSearchResultsReducer };
