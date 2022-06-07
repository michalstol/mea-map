import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, updateDoc, DocumentReference } from 'firebase/firestore';

import { db, COLLECTIONS } from '@configs/firebase';

import { Marker, MarkerDTO } from '@typings/markers';

import { MARKERS_PREFIX, MARKERS_ACTIONS } from '../markers.typings';
import { markerFactoryToDTO } from '../markers.factories';

interface Props {
    marker: Marker;
}

const updateMarkerAction = createAsyncThunk(
    `${MARKERS_PREFIX}/${MARKERS_ACTIONS.UPDATE_MARKER}`,
    async (props: Props) => {
        if (!props.marker || !props.marker.uuid) {
            console.warn(
                'Can not be updated an empty marker or marker without uuid!'
            );

            return;
        }

        await updateDoc(
            doc(
                db,
                COLLECTIONS.MARKERS,
                props.marker.uuid as string
            ) as DocumentReference<MarkerDTO>,
            markerFactoryToDTO(props.marker)
        );

        return { ...props.marker };
    }
);

export { updateMarkerAction };
