import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, deleteDoc } from 'firebase/firestore';

import { db, COLLECTIONS } from '@configs/firebase';

import { Uuid } from '@typings/common';

import { MARKERS_PREFIX, MARKERS_ACTIONS } from '../markers.typings';

interface Props {
    uuid: Uuid;
}

const deleteMarkerAction = createAsyncThunk(
    `${MARKERS_PREFIX}/${MARKERS_ACTIONS.DELETE_MARKER}`,
    async (props: Props) => {
        if (!props.uuid) {
            console.warn('Delete marker action can not be done without uuid!');

            return;
        }

        await deleteDoc(doc(db, COLLECTIONS.MARKERS, props.uuid));

        return props.uuid;
    }
);

export { deleteMarkerAction };
