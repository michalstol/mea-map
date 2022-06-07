import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';
import { Marker } from '@typings/markers';

import { MarkersState } from '../markers.typings';
import { updateMarkerAction } from './updateMarker.action';

const updateMarkerReducer = (builder: ActionReducerMapBuilder<MarkersState>) =>
    builder
        .addCase(updateMarkerAction.pending, state => {
            state.markerState = LOADING_STATE.PENDING;
        })
        .addCase(updateMarkerAction.rejected, state => {
            state.markerState = LOADING_STATE.REJECTED;
        })
        .addCase(updateMarkerAction.fulfilled, (state, action) => {
            state.markerState = LOADING_STATE.FULFILLED;

            if (!action.payload || !action.payload.uuid) return;

            state.data = state.data.map(marker => {
                if (marker.uuid == action.payload!.uuid) {
                    return action.payload as Marker;
                }

                return marker;
            });
        });

export { updateMarkerReducer };
