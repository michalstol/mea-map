import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATE } from '@typings/loadingState';

import { SearchState, SEARCH_PREFIX } from './search.typings';

import { fetchSearchResultsReducer } from './fetchSearchResults/fetchSearchResults.reducer';
import { setSelectedPoiReducer } from './setSelectedPoiAction/setSelectedPoiAction.reducer';
import { setIsActiveReducer } from './setIsActive/setIsActive.reducer';

const searchInitialState: SearchState = {
    fetchState: LOADING_STATE.IDLE,
    results: [],
    selectedPoi: {
        address: null,
        coordinates: null,
    },
    isActive: false,
};

const searchSlice = createSlice({
    name: SEARCH_PREFIX,
    initialState: searchInitialState,
    reducers: {},
    extraReducers: builder => {
        fetchSearchResultsReducer(builder);
        setSelectedPoiReducer(builder);
        setIsActiveReducer(builder);
    },
});

const {} = searchSlice.actions;
const searchReducer = {
    search: searchSlice.reducer,
};

export { searchReducer };
