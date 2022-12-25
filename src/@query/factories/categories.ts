import { Timestamp } from 'firebase/firestore';

import { Uuid } from '@uTypes/common';
import { ICON_NAME } from '@uTypes/icons';
import { Category, CategoryDTO } from '@uTypes/categories';
import { SharedUser, SharedUserDTO } from '@uTypes/shared';
import { USER_PERMISSIONS } from '@uTypes/users';

function categoryFactoryFromDTO(
    categoryUuid: Uuid,
    categoryrDTO: CategoryDTO
): Category {
    const { icon, createAt, updatedOn, sharedFor, ...rest } = categoryrDTO;
    const category: Category = {
        ...rest,
        uuid: categoryUuid,
        icon: icon as ICON_NAME,
        createAt: createAt.toMillis(),
        updatedOn: updatedOn.toMillis(),
        sharedFor: sharedFor.map(
            (user: SharedUserDTO): SharedUser => ({
                uuid: user.uuid,
                permission: user.permission as USER_PERMISSIONS,
            })
        ),
    };

    return category;
}

function categoryFactoryToDTO(category: Category): CategoryDTO {
    const { uuid, createAt, updatedOn, ...rest } = category;
    const categoryDTO: CategoryDTO = {
        ...rest,
        createAt: Timestamp.fromMillis(createAt),
        updatedOn: Timestamp.fromMillis(updatedOn),
    };

    return categoryDTO;
}

export { categoryFactoryFromDTO, categoryFactoryToDTO };
