import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, CollectionReference } from 'firebase/firestore';

import { db, COLLECTIONS } from '@configs/firebase';

import { Marker, MarkerDTO } from '@typings/markers';

import { MARKERS_PREFIX, MARKERS_ACTIONS } from '../markers.typings';
import { markerFactoryToDTO } from '../markers.factories';

interface Props {
    marker: Marker;
}

const addMarkerAction = createAsyncThunk(
    `${MARKERS_PREFIX}/${MARKERS_ACTIONS.ADD_MARKER}`,
    async (props: Props) => {
        if (!props.marker) {
            console.warn('Can not be added an empty marker!');

            return;
        }

        const doc = await addDoc(
            collection(
                db,
                COLLECTIONS.MARKERS
            ) as CollectionReference<MarkerDTO>,
            markerFactoryToDTO(props.marker)
        );

        return { ...props.marker, uuid: doc.id };
    }
);

export { addMarkerAction };
