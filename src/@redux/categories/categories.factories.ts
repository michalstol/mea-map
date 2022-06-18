import { Timestamp } from 'firebase/firestore';

import { Uuid } from '@typings/common';
import { ICONS } from '@typings/icons';
import { Category, CategoryDTO } from '@typings/categories';
import { SharedUser, SharedUserDTO } from '@typings/shared';
import { USER_PERMISSIONS } from '@typings/users';

function categoryFactoryFromDTO(
    categoryUuid: Uuid,
    categoryrDTO: CategoryDTO
): Category {
    const { icon, createAt, updatedOn, sharedFor, ...rest } = categoryrDTO;
    const category: Category = {
        ...rest,
        uuid: categoryUuid,
        icon: icon as ICONS,
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
