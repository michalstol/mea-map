import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';

import { MarkersState } from '../markers.typings';
import { deleteMarkerAction } from './deleteMarker.action';

const deleteMarkerReducer = (builder: ActionReducerMapBuilder<MarkersState>) =>
    builder
        .addCase(deleteMarkerAction.pending, state => {
            state.fetchState = LOADING_STATE.PENDING;
        })
        .addCase(deleteMarkerAction.rejected, state => {
            state.fetchState = LOADING_STATE.REJECTED;
        })
        .addCase(deleteMarkerAction.fulfilled, (state, action) => {
            state.fetchState = LOADING_STATE.FULFILLED;

            if (!action.payload) return;

            state.data = state.data.filter(
                marker => marker.uuid !== action.payload
            );
        });

export { deleteMarkerReducer };
