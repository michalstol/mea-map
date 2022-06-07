import { LOADING_STATE } from '@typings/loadingState';
import { Marker } from '@typings/markers';

import { RootState } from '../store';

const getFetchStatus = (state: RootState): LOADING_STATE =>
    state.markers.fetchState;

const getMarkerState = (state: RootState): LOADING_STATE =>
    state.markers.markerState;

const getMarkers = (state: RootState): Marker[] => state.markers.data;

export { getFetchStatus, getMarkerState, getMarkers };
