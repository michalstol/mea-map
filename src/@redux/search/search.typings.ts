import { Coordinates } from '@typings/coordinates';
import { LOADING_STATE } from '@typings/loadingState';
import { MapBoxFeature } from '@typings/mapbox';

export const SEARCH_PREFIX = 'SEARCH';

export enum SEARCH_ACTIONS {
    FETCH_RESULTS = 'FETCH_RESULTS',
    SET_SELECTED_POI = 'SET_SELECTED_POI',
    SET_IS_ACTIVE = 'SET_IS_ACTIVE',
}

export interface SearchResultPoi {}

export interface SearchState {
    selectedPoi: {
        address: string | null;
        coordinates: Coordinates | null;
    };
    results: MapBoxFeature[];
    fetchState: LOADING_STATE;
    isActive: boolean;
}
