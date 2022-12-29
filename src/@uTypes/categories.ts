import { Timestamp } from 'firebase/firestore';

import { Uuid, Microtimestamp } from './common';
import { CATEGORIES_ICON_NAME } from './icons';
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
    icon: CATEGORIES_ICON_NAME;
    order: number;
    createdBy: Uuid;
    createAt: Microtimestamp;
    updatedOn: Microtimestamp;
    sharedFor: SharedUser[];
}

export enum CATEGORY_FIELDS {
    COLOR = 'COLOR',
    ICON = 'ICON',
    NAME = 'NAME',
    DESCRIPTION = 'DESCRIPTION',
}
