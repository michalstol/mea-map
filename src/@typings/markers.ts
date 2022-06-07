import { Timestamp } from 'firebase/firestore';

import { Uuid, Microtimestamp } from './common';
import { Coordinates } from './coordinates';
import { SharedUser, SharedUserDTO } from './shared';

export interface MarkerDTO {
    name: string;
    address: string;
    coordinates: Coordinates;
    category: Uuid;
    createdBy: Uuid;
    createAt: Timestamp;
    sharedFor: SharedUserDTO[];
}

export interface Marker {
    uuid: Uuid | null;
    name: string;
    address: string;
    coordinates: Coordinates;
    category: Uuid;
    createdBy: Uuid;
    createAt: Microtimestamp;
    sharedFor: SharedUser[];
}
