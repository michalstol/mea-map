import { GenericObject } from '@typings/genericObject';
import { LOADING_STATE } from '@typings/loadingState';
import { MapBoxFeature } from '@typings/mapbox';

import { RootState } from '../store';

const getSearchFetchStatus = (state: RootState): LOADING_STATE =>
    state.search.fetchState;

const getSearchIsActive = (state: RootState): boolean => state.search.isActive;

const getSearchResults = (state: RootState): MapBoxFeature[] =>
    state.search.results;

export { getSearchFetchStatus, getSearchIsActive, getSearchResults };
