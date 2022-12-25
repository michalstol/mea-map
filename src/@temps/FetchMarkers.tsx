import React from 'react';
import { useSelector } from 'react-redux';

import { LOADING_STATE } from '@uTypes/loadingState';

import { useAppDispatch } from '@redux/hooks';
import { fetchMarkersAction } from '@redux/markers/markers.actions';
import { getFetchStatus } from '@redux/markers/markers.selectors';

import { useAuth } from '@hooks/useAuth';

function FetchMarkers(): React.ReactElement | null {
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
                    dispatch(fetchMarkersAction({ userUuid: user.uid }))
                }
            >
                Fetch markers
            </button>
        </div>
    );
}

export { FetchMarkers };
