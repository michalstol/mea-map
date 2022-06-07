import { createSlice } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';

import { MarkersState, MARKERS_PREFIX } from './markers.typings';
import { fetchMarkersReducer } from './fetchMarkers/fetchMarkers.reducer';
import { addMarkerReducer } from './addMarker/addMarker.reducer';
import { updateMarkerReducer } from './updateMarker/updateMarker.reducer';
import { deleteMarkerReducer } from './deleteMarker/deleteMarker.reducer';

const markersInitialState: MarkersState = {
    fetchState: LOADING_STATE.IDLE,
    markerState: LOADING_STATE.IDLE,
    data: [],
};

const markersSlice = createSlice({
    name: MARKERS_PREFIX,
    initialState: markersInitialState,
    reducers: {},
    extraReducers: builder => {
        fetchMarkersReducer(builder);
        addMarkerReducer(builder);
        updateMarkerReducer(builder);
        deleteMarkerReducer(builder);
    },
});

const {} = markersSlice.actions;
const markersReducer = {
    markers: markersSlice.reducer,
};

export { markersReducer };
