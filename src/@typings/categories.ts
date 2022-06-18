import { Timestamp } from 'firebase/firestore';

import { Uuid, Microtimestamp } from './common';
import { ICONS } from './icons';
import { SharedUser, SharedUserDTO } from './shared';

export interface CategoryDTO {
    name: string;
    color: string;
    icon: string;
    order: number;
    createdBy: Uuid;
    createAt: Timestamp;
    updatedOn: Timestamp;
    sharedFor: SharedUserDTO[];
}

export interface Category {
    uuid: Uuid | null;
    name: string;
    color: string;
    icon: ICONS;
    order: number;
    createdBy: Uuid;
    createAt: Microtimestamp;
    updatedOn: Microtimestamp;
    sharedFor: SharedUser[];
}
