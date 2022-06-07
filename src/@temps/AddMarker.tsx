import { Timestamp } from 'firebase/firestore';

import { useAppDispatch } from '@redux/hooks';
import { addMarkerAction } from '@redux/markers';

import { Marker } from '@typings/markers';
import { useAuth } from '@hooks/useAuth';

function AddMarker(): React.ReactElement | null {
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    const createMarker = () => {
        const newMarker: Marker = {
            uuid: null,
            name: 'test marker',
            address: 'Broniwoja 6/80, 02-655 Warszawa',
            coordinates: {
                lat: 50.02123,
                lng: 12.54354,
            },
            category: 'test category',
            createdBy: user!.uid,
            createAt: Timestamp.now().toMillis(),
            sharedFor: [],
        };

        dispatch(
            addMarkerAction({
                marker: newMarker,
            })
        );
    };

    if (!user) {
        return null;
    }

    return (
        <div>
            <button onClick={createMarker}>Create Marker</button>
        </div>
    );
}

export { AddMarker };
