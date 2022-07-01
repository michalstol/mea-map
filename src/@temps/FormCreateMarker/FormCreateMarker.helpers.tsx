import * as Yup from 'yup';

export enum MARKER_FIELDS {
    LAT = 'lat',
    LNG = 'lng',
    NAME = 'name',
    ADDRESS = 'address',
    DESCRIPTION = 'description',
    CATEGORY = 'category',
}

export interface MarkerFormValues {
    [MARKER_FIELDS.LAT]: number | '';
    [MARKER_FIELDS.LNG]: number | '';
    [MARKER_FIELDS.NAME]: string;
    [MARKER_FIELDS.ADDRESS]: string;
    [MARKER_FIELDS.DESCRIPTION]: string;
    [MARKER_FIELDS.CATEGORY]: string;
}

export const markerInitialValues: MarkerFormValues = {
    [MARKER_FIELDS.LAT]: '',
    [MARKER_FIELDS.LNG]: '',
    [MARKER_FIELDS.NAME]: '',
    [MARKER_FIELDS.ADDRESS]: '',
    [MARKER_FIELDS.DESCRIPTION]: '',
    [MARKER_FIELDS.CATEGORY]: '',
};

export const createMarkerSchema = Yup.object().shape({
    [MARKER_FIELDS.LAT]: Yup.number()
        .required()
        .min(-180, 'min value is 180')
        .max(180, 'max value is 180'),
    [MARKER_FIELDS.LNG]: Yup.number()
        .required()
        .min(-180, 'min value is 180')
        .max(180, 'max value is 180'),
    [MARKER_FIELDS.NAME]: Yup.string()
        .required()
        .trim()
        .max(128, 'max value is 128'),
    [MARKER_FIELDS.ADDRESS]: Yup.string()
        .required()
        .trim()
        .max(128, 'max value is 128'),
    [MARKER_FIELDS.DESCRIPTION]: Yup.string()
        .trim()
        .max(256, 'max value is 256'),
    [MARKER_FIELDS.CATEGORY]: Yup.string()
        .required()
        .trim()
        .max(64, 'max value is 64'),
});

export const coordinateStep = '0.00000001';
