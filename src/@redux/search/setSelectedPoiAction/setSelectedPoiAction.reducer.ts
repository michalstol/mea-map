import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { SearchState } from '../search.typings';
import { setSelectedPoiAction } from './setSelectedPoiAction.action';

const setSelectedPoiReducer = (builder: ActionReducerMapBuilder<SearchState>) =>
    builder.addCase(setSelectedPoiAction, (state, action) => {
        if (!action.payload) return;

        state.selectedPoi = action.payload;
    });

export { setSelectedPoiReducer };
