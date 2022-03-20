import { Coordinates } from './coordinates';

interface LocationDTO {
    owner: string;
    name: string;
    description: null | string;
    address: string;
    category: null | string;
    coordinates: Coordinates;
    isPrivate: boolean;
}

interface Location {
    owner: string;
    name: string;
    description: null | string;
    address: string;
    category: null | string;
    coordinates: Coordinates;
    isPrivate: boolean;
}

export type { Location, LocationDTO };
