import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';

import { CategoriesState } from '../categories.typings';
import { fetchCategoriesAction } from './fetchCategories.action';

const fetchCategoriesReducer = (
    builder: ActionReducerMapBuilder<CategoriesState>
) =>
    builder
        .addCase(fetchCategoriesAction.pending, state => {
            state.fetchState = LOADING_STATE.PENDING;
        })
        .addCase(fetchCategoriesAction.rejected, state => {
            state.fetchState = LOADING_STATE.REJECTED;
        })
        .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
            state.fetchState = LOADING_STATE.FULFILLED;

            if (Array.isArray(action.payload)) {
                state.data = action.payload;
            }
        });

export { fetchCategoriesReducer };
