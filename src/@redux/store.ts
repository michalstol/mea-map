import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { markersReducer } from './markers';

export const store = configureStore({
    reducer: {
        ...markersReducer,
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
