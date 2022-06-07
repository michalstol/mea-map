import React from 'react';
import { useSelector } from 'react-redux';

import { useAuth } from '@hooks/useAuth';

import { useAppDispatch } from '@redux/hooks';
import { getMarkers } from '@redux/markers/markers.selectors';
import { deleteMarkerAction, updateMarkerAction } from '@redux/markers';

function ListOfMarkers(): React.ReactElement {
    const dispatch = useAppDispatch();
    const { user, connected } = useAuth();

    const markers = useSelector(getMarkers);

    return (
        <ul>
            {markers.map(marker => (
                <li key={marker.uuid}>
                    <pre>{JSON.stringify(marker, null, 4)}</pre>

                    <button
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
                    </button>
                </li>
            ))}
        </ul>
    );
}

export { ListOfMarkers };
