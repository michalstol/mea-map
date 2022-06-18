import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    collection,
    query,
    where,
    getDocs,
    CollectionReference,
} from 'firebase/firestore';

import { db, COLLECTIONS } from '@configs/firebase';

import { Category, CategoryDTO } from '@typings/categories';

import { CATEGORIES_PREFIX, CATEGORIES_ACTIONS } from '../categories.typings';
import { categoryFactoryFromDTO } from '../categories.factories';

interface Props {
    userUuid: string;
}

const fetchCategoriesAction = createAsyncThunk(
    `${CATEGORIES_PREFIX}/${CATEGORIES_ACTIONS.FETCH_CATEGORIES}`,
    async (props: Props) => {
        if (!props.userUuid) {
            console.warn(
                'Fetching categories is only possible for authorized users!'
            );

            return;
        }

        // Fishing only documents created by the user
        const qSnapshot = await query(
            collection(
                db,
                COLLECTIONS.CATEGORIES
            ) as CollectionReference<CategoryDTO>,
            where('createdBy', '==', props.userUuid)
        );
        const snapshot = await getDocs<CategoryDTO>(qSnapshot);
        const data: Category[] = [];

        snapshot.forEach(doc =>
            data.push(categoryFactoryFromDTO(doc.id, doc.data()))
        );

        return data;
    }
);

export { fetchCategoriesAction };
