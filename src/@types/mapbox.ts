import { FeatureCollection, Feature, Geometry } from 'geojson';

type MapBoxBbox = [number, number, number, number];

export enum MAPBOX_PLACE_TYPES {
    country = 'country',
    region = 'region',
    postcode = 'postcode',
    district = 'district',
    place = 'place',
    locality = 'locality',
    neighborhood = 'neighborhood',
    address = 'address',
    poi = 'poi',
}

export interface MapBoxFeature extends GeoJSON.Feature<GeoJSON.Point> {
    bbox: MapBoxBbox;
    center: number[];
    matching_place_name?: string;
    place_name: string;
    place_type: MAPBOX_PLACE_TYPES[];
    relevance: number;
    text: string;
}

export interface MapBoxFeatureCollection
    extends GeoJSON.FeatureCollection<GeoJSON.Point> {
    attribution: string;
    query: string[];
    features: MapBoxFeature[];
}
