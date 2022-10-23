import { createAction } from '@reduxjs/toolkit';

import { SEARCH_ACTIONS, SEARCH_PREFIX, SearchState } from '../search.typings';

const setIsActiveAction = createAction(
    `${SEARCH_PREFIX}/${SEARCH_ACTIONS.SET_IS_ACTIVE}`,
    (isActive: SearchState['isActive']) => ({
        payload: isActive,
    })
);

export { setIsActiveAction };
