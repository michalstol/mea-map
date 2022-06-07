import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    collection,
    query,
    where,
    getDocs,
    CollectionReference,
} from 'firebase/firestore';

import { db, COLLECTIONS } from '@configs/firebase';

import { Marker, MarkerDTO } from '@typings/markers';

import { MARKERS_PREFIX, MARKERS_ACTIONS } from '../markers.typings';
import { markerFactoryFromDTO } from '../markers.factories';

interface Props {
    userUuid: string;
}

const fetchMarkersAction = createAsyncThunk(
    `${MARKERS_PREFIX}/${MARKERS_ACTIONS.FETCH_MARKERS}`,
    async (props: Props) => {
        if (!props.userUuid) {
            console.warn(
                'Fetching markers is only possible for authorized users!'
            );

            return;
        }

        // Fishing only documents created by the user
        const qSnapshot = await query(
            collection(
                db,
                COLLECTIONS.MARKERS
            ) as CollectionReference<MarkerDTO>,
            where('createdBy', '==', props.userUuid)
        );
        const snapshot = await getDocs<MarkerDTO>(qSnapshot);
        const data: Marker[] = [];

        snapshot.forEach(doc =>
            data.push(markerFactoryFromDTO(doc.id, doc.data()))
        );

        return data;
    }
);

export { fetchMarkersAction };
