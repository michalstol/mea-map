import React from 'react';
import { useSelector } from 'react-redux';

import { useAuth } from '@hooks/useAuth';

import { useAppDispatch } from '@redux/hooks';
import { getCategories } from '@redux/categories/categories.selectors';
// import { deleteMarkerAction, updateMarkerAction } from '@redux/markers';

function ListOfCategories(): React.ReactElement {
    const dispatch = useAppDispatch();
    const { user, connected } = useAuth();

    const categories = useSelector(getCategories);

    return (
        <ul>
            {categories.map(categories => (
                <li key={categories.uuid}>
                    <pre>{JSON.stringify(categories, null, 4)}</pre>

                    {/* <button
                        disabled={!user || !connected}
                        onClick={() =>
                            dispatch(
                                deleteMarkerAction({
                                    uuid: marker.uuid as string,
                                })
                            )
                        }
                    >
                        Delete
                    </button>
                    <button
                        disabled={!user || !connected}
                        onClick={() =>
                            dispatch(
                                updateMarkerAction({
                                    marker: {
                                        ...marker,
                                        address:
                                            'Stefana Okrzei 2/56, 03-710 Warszawa',
                                    },
                                })
                            )
                        }
                    >
                        Update
                    </button> */}
                </li>
            ))}
        </ul>
    );
}

export { ListOfCategories };
