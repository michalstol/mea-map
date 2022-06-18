import React from 'react';
import { useSelector } from 'react-redux';

import { LOADING_STATE } from '@typings/loadingState';

import { useAppDispatch } from '@redux/hooks';
import { fetchCategoriesAction } from '@redux/categories/categories.actions';
import { getFetchStatus } from '@redux/categories/categories.selectors';

import { useAuth } from '@hooks/useAuth';

function FetchCategories(): React.ReactElement | null {
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    const fetched = useSelector(getFetchStatus);

    if (!user) {
        return null;
    }

    return (
        <div>
            <button
                disabled={fetched === LOADING_STATE.PENDING}
                onClick={() =>
                    dispatch(fetchCategoriesAction({ userUuid: user.uid }))
                }
            >
                Fetch categories
            </button>
        </div>
    );
}

export { FetchCategories };
