import React from 'react';
import styled from 'styled-components';

import { QUERY_LOADING_STATE } from '@uTypes/loadingState';

import { useCategories } from '@query/hooks';

import { useAuth } from '@hooks/useAuth';

import { CategoryPicker } from '@organizms/CategoryPicker';

function CategoriesFilter(): React.ReactElement | null {
    const { user } = useAuth();
    const { data, query } = useCategories(user!.uid);

    if (!user) {
        return null;
    }

    return (
        <CategoryPicker
            categories={data}
            status={query?.status as QUERY_LOADING_STATE}
        />
    );
}

export { CategoriesFilter };
