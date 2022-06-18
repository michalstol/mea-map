import { createSlice } from '@reduxjs/toolkit';

import { LOADING_STATE } from '@typings/loadingState';

import { CategoriesState, CATEGORIES_PREFIX } from './categories.typings';
import { fetchCategoriesReducer } from './fetchCategories/fetchCategories.reducer';
import { addCategoryReducer } from './addCategory/addCategory.reducer';

const categoriesInitialState: CategoriesState = {
    fetchState: LOADING_STATE.IDLE,
    categoryState: LOADING_STATE.IDLE,
    data: [],
};

const categoriesSlice = createSlice({
    name: CATEGORIES_PREFIX,
    initialState: categoriesInitialState,
    reducers: {},
    extraReducers: builder => {
        fetchCategoriesReducer(builder);
        addCategoryReducer(builder);
    },
});

const {} = categoriesSlice.actions;
const categoriesReducer = {
    categories: categoriesSlice.reducer,
};

export { categoriesReducer };
