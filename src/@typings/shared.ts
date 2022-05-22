import { USER_PERMISSIONS } from './users';

export interface SharedUserDTO {
    uuid: string;
    permission: string;
}

export interface SharedUser {
    uuid: string;
    permission: USER_PERMISSIONS;
}

// export { SharedUser, SharedUserDTO };
