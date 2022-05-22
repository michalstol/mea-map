import { Timestamp } from 'firebase/firestore';

import { ICONS } from './icons';
import { SharedUser, SharedUserDTO } from './shared';

export interface CategoryDTO {
    name: string;
    color: string;
    icon: string;
    order: number;
    createdBy: string;
    createAt: Timestamp;
    updatedOn: Timestamp;
    sharedFor: [SharedUserDTO];
}

export interface Category {
    uuid: string;
    name: string;
    color: string;
    icon: ICONS;
    order: number;
    createdBy: string;
    createAt: Timestamp;
    updatedOn: Timestamp;
    sharedFor: [SharedUser];
}
