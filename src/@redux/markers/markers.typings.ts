import { GenericObject } from '@typings/genericObject';
import { LOADING_STATE } from '@typings/loadingState';
import { Marker } from '@typings/markers';

export const MARKERS_PREFIX = 'MARKERS';

export enum MARKERS_ACTIONS {
    FETCH_MARKERS = 'FETCH_MARKERS',
    ADD_MARKER = 'ADD_MARKER',
    UPDATE_MARKER = 'UPDATE_MARKER',
    DELETE_MARKER = 'DELETE_MARKER',
}

export interface MarkersState {
    fetchState: LOADING_STATE;
    markerState: LOADING_STATE;

    // sorted markers by category
    data: Marker[];
    groupedByCategory: GenericObject<Marker[]>;
}
