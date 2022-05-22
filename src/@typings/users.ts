import { User, UserInfo } from 'firebase/auth';

export enum USER_PERMISSIONS {
    OWNER = 'OWNER',
    EDITOR = 'EDITOR',
    VIEWER = 'VIEWER',
}

export type FirebaseUser = User;
export type FirebaseUserInfo = UserInfo;
