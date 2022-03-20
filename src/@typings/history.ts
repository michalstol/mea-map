import { Timestamp } from 'firebase/firestore';

import { Coordinates } from './coordinates';

interface HistoryLocationDTO {
    date: Timestamp;
    coordinates: Coordinates;
    category?: string;
    name?: string;
    address: string;
}

interface HistoryLocation {
    date: Timestamp;
    coordinates: Coordinates;
    category?: string;
    name?: string;
    address: string;
}

export type { HistoryLocation, HistoryLocationDTO };
