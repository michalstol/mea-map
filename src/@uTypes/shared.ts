import { Uuid } from './common';
import { USER_PERMISSIONS } from './users';

export interface SharedUserDTO {
    uuid: Uuid;
    permission: string;
}

export interface SharedUser {
    uuid: Uuid;
    permission: USER_PERMISSIONS;
}

// export { SharedUser, SharedUserDTO };
