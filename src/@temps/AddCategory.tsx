import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@redux/hooks';
import {
    addCategoryAction,
    getFetchStatus,
    getCategories,
} from '@redux/categories';

import { Category } from '@uTypes/categories';
import { useAuth } from '@hooks/useAuth';

import { FormCreateCategory } from '@temps/FormCreateCategory';
import { LOADING_STATE } from '@uTypes/loadingState';

function AddCategory(): React.ReactElement | null {
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    const [showForm, setShowForm] = React.useState(false);

    const isCategoriesFetched =
        useSelector(getFetchStatus) === LOADING_STATE.FULFILLED;
    const categories = useSelector(getCategories);

    const toggleForm = () => setShowForm(!showForm);

    const createCategory = (newCategory: Category) => {
        dispatch(
            addCategoryAction({
                category: newCategory,
            })
        );
    };

    if (!user) {
        return null;
    }

    return (
        <div>
            <button onClick={toggleForm} disabled={!isCategoriesFetched}>
                Create Category
            </button>

            {showForm && (
                <FormCreateCategory
                    userUuid={user.uid}
                    nextOrder={categories.length}
                    create={createCategory}
                />
            )}
        </div>
    );
}

export { AddCategory };
