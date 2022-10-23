import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { SearchState } from '../search.typings';
import { setIsActiveAction } from './setIsActive.action';

const setIsActiveReducer = (builder: ActionReducerMapBuilder<SearchState>) =>
    builder.addCase(setIsActiveAction, (state, action) => {
        state.isActive = action.payload;
    });

export { setIsActiveReducer };
