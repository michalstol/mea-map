import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { searchReducer } from './search';
import { markersReducer } from './markers';
import { categoriesReducer } from './categories';

export const store = configureStore({
    reducer: {
        ...searchReducer,
        ...markersReducer,
        ...categoriesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
