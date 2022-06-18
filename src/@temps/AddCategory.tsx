import { Timestamp } from 'firebase/firestore';

import { useAppDispatch } from '@redux/hooks';
import { addCategoryAction } from '@redux/categories';

import { Category } from '@typings/categories';
import { useAuth } from '@hooks/useAuth';
import { ICONS } from '@typings/icons';

function AddCategory(): React.ReactElement | null {
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    const createCategory = () => {
        const timestamp = Timestamp.now().toMillis();

        const newCategory: Category = {
            uuid: null,
            name: 'test category',
            color: '#fff000',
            icon: ICONS.FAVORITE,
            order: 1,
            createdBy: user!.uid,
            createAt: timestamp,
            updatedOn: timestamp,
            sharedFor: [],
        };

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
            <button onClick={createCategory}>Create Category</button>
        </div>
    );
}

export { AddCategory };
