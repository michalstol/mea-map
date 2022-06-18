import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, CollectionReference } from 'firebase/firestore';

import { db, COLLECTIONS } from '@configs/firebase';

import { Category, CategoryDTO } from '@typings/categories';

import { CATEGORIES_PREFIX, CATEGORIES_ACTIONS } from '../categories.typings';
import { categoryFactoryToDTO } from '../categories.factories';

interface Props {
    category: Category;
}

const addCategoryAction = createAsyncThunk(
    `${CATEGORIES_PREFIX}/${CATEGORIES_ACTIONS.ADD_CATEGORY}`,
    async (props: Props) => {
        if (!props.category) {
            console.warn('Can not be added an empty category!');

            return;
        }

        const doc = await addDoc(
            collection(
                db,
                COLLECTIONS.CATEGORIES
            ) as CollectionReference<CategoryDTO>,
            categoryFactoryToDTO(props.category)
        );

        return { ...props.category, uuid: doc.id };
    }
);

export { addCategoryAction };
