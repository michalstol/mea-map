import { Timestamp } from 'firebase/firestore';

import { Coordinates } from './coordinates';
import { SharedUser, SharedUserDTO } from './shared';

export interface MarkerDTO {
    name: string;
    address: string;
    coordinates: Coordinates;
    category: string; // uuid
    createdBy: string;
    createAt: Timestamp;
    sharedFor: [SharedUserDTO];
}

export interface Marker {
    name: string;
    address: string;
    coordinates: Coordinates;
    category: string; // uuid
    createdBy: string;
    createAt: Timestamp;
    sharedFor: [SharedUser];
}
