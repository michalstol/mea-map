import { UseQueryResult } from 'react-query';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import {
    query,
    collection,
    where,
    QuerySnapshot,
    FirestoreError,
    CollectionReference,
} from 'firebase/firestore';

import { COLLECTIONS, firestore } from '@configs/firebase';

import { CategoryDTO, Category } from '@uTypes/categories';
import { categoryFactoryFromDTO } from '@query/factories';

interface Return {
    query: UseQueryResult<QuerySnapshot<CategoryDTO>, FirestoreError> | null;
    data: Category[];
}

export const useCategories = (userUuid: string): Return => {
    if (!userUuid) {
        console.warn(
            'Fetching categories is only possible for authorized users!'
        );

        return {
            query: null,
            data: [],
        };
    }

    const data: Return['data'] = [];
    const ref = query<CategoryDTO>(
        collection(
            firestore,
            COLLECTIONS.CATEGORIES
        ) as CollectionReference<CategoryDTO>,
        where('createdBy', '==', userUuid)
    );

    // for realtime updates
    // https://react-query-firebase.invertase.dev/firestore/querying-collections#realtime-updates
    const reactQuery = useFirestoreQuery<CategoryDTO>(
        COLLECTIONS.CATEGORIES,
        ref
    );

    if (!!reactQuery.data && !reactQuery.data.empty) {
        reactQuery.data.forEach(doc => {
            data.push(categoryFactoryFromDTO(doc.id, doc.data()));
        });
    }

    return {
        query: reactQuery,
        data,
    };
};
