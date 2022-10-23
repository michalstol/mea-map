import { createAction, PrepareAction } from '@reduxjs/toolkit';

import { SEARCH_ACTIONS, SEARCH_PREFIX, SearchState } from '../search.typings';

const setSelectedPoiAction = createAction(
    `${SEARCH_PREFIX}/${SEARCH_ACTIONS.SET_SELECTED_POI}`,
    (data: SearchState['selectedPoi']) => {
        return {
            payload: {
                ...data,
            },
        };
    }
);

export { setSelectedPoiAction };
