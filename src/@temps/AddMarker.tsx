import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@redux/hooks';
import { addMarkerAction } from '@redux/markers';
import { getFetchStatus, getCategories } from '@redux/categories';

import { Marker } from '@typings/markers';
import { LOADING_STATE } from '@typings/loadingState';

import { useAuth } from '@hooks/useAuth';

import { FormCreateMarker } from './FormCreateMarker';

function AddMarker(): React.ReactElement | null {
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    const [showForm, setShowForm] = React.useState(false);

    const isCategoriesFetched =
        useSelector(getFetchStatus) === LOADING_STATE.FULFILLED;
    const categories = useSelector(getCategories);

    const toggleForm = () => setShowForm(!showForm);

    const createMarker = (newMarker: Marker) => {
        dispatch(addMarkerAction({ marker: newMarker }));
    };

    if (!user) {
        return null;
    }

    return (
        <div>
            <button onClick={toggleForm} disabled={!isCategoriesFetched}>
                Create Marker
            </button>

            {showForm && (
                <FormCreateMarker
                    userUuid={user.uid}
                    categories={categories}
                    create={createMarker}
                />
            )}
        </div>
    );
}

export { AddMarker };
