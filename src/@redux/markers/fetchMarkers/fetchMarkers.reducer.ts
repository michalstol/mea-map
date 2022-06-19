import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';

import { MarkersState } from '../markers.typings';
import { fetchMarkersAction } from './fetchMarkers.action';
import { groupMarkersByCategory } from '../markers.factories';

const fetchMarkersReducer = (builder: ActionReducerMapBuilder<MarkersState>) =>
    builder
        .addCase(fetchMarkersAction.pending, state => {
            state.fetchState = LOADING_STATE.PENDING;
        })
        .addCase(fetchMarkersAction.rejected, state => {
            state.fetchState = LOADING_STATE.REJECTED;
        })
        .addCase(fetchMarkersAction.fulfilled, (state, action) => {
            state.fetchState = LOADING_STATE.FULFILLED;

            if (Array.isArray(action.payload)) {
                state.data = action.payload;
                state.groupedByCategory = groupMarkersByCategory(
                    action.payload
                );
            }
        });

export { fetchMarkersReducer };
