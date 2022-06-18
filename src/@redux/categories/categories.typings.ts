import { LOADING_STATE } from '@typings/loadingState';
import { Category } from '@typings/categories';

export const CATEGORIES_PREFIX = 'CATEGORIES';

export enum CATEGORIES_ACTIONS {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    ADD_CATEGORY = 'ADD_CATEGORY',
    UPDATE_CATEGORY = 'UPDATE_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY',
}

export interface CategoriesState {
    fetchState: LOADING_STATE;
    categoryState: LOADING_STATE;
    data: Category[];
}
