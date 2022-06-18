import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';

import { CategoriesState } from '../categories.typings';
import { addCategoryAction } from './addCategory.action';

const addCategoryReducer = (
    builder: ActionReducerMapBuilder<CategoriesState>
) =>
    builder
        .addCase(addCategoryAction.pending, state => {
            state.categoryState = LOADING_STATE.PENDING;
        })
        .addCase(addCategoryAction.rejected, state => {
            state.categoryState = LOADING_STATE.REJECTED;
        })
        .addCase(addCategoryAction.fulfilled, (state, action) => {
            state.categoryState = LOADING_STATE.FULFILLED;

            if (action.payload) {
                state.data.push(action.payload);
            }
        });

export { addCategoryReducer };
