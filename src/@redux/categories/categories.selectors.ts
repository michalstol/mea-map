import { LOADING_STATE } from '@typings/loadingState';
import { Category } from '@typings/categories';

import { RootState } from '../store';

const getFetchStatus = (state: RootState): LOADING_STATE =>
    state.categories.fetchState;

const getCategoryState = (state: RootState): LOADING_STATE =>
    state.categories.categoryState;

const getCategories = (state: RootState): Category[] => state.categories.data;

export { getFetchStatus, getCategoryState, getCategories };
