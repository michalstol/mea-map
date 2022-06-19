import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';
import { groupMarkersByCategory } from '../markers.factories';

import { MarkersState } from '../markers.typings';
import { addMarkerAction } from './addMarker.action';

const addMarkerReducer = (builder: ActionReducerMapBuilder<MarkersState>) =>
    builder
        .addCase(addMarkerAction.pending, state => {
            state.markerState = LOADING_STATE.PENDING;
        })
        .addCase(addMarkerAction.rejected, state => {
            state.markerState = LOADING_STATE.REJECTED;
        })
        .addCase(addMarkerAction.fulfilled, (state, action) => {
            state.markerState = LOADING_STATE.FULFILLED;

            if (action.payload) {
                state.data.push(action.payload);
                state.groupedByCategory = groupMarkersByCategory(state.data);
            }
        });

export { addMarkerReducer };
