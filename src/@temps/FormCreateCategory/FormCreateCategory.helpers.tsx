import * as Yup from 'yup';

import { ICON_NAME } from '@uTypes/icons';

export enum CATEGORY_FIELDS {
    NAME = 'name',
    COLOR = 'color',
    ICON = 'icon',
}

export interface CategoryFormValues {
    [CATEGORY_FIELDS.NAME]: string;
    [CATEGORY_FIELDS.COLOR]: string;
    [CATEGORY_FIELDS.ICON]: ICON_NAME | '';
}

export const categoryInitialValues: CategoryFormValues = {
    [CATEGORY_FIELDS.NAME]: '',
    [CATEGORY_FIELDS.COLOR]: '',
    [CATEGORY_FIELDS.ICON]: '',
};

export const createCategorySchema = Yup.object().shape({
    [CATEGORY_FIELDS.NAME]: Yup.string()
        .required()
        .trim()
        .max(128, 'max value is 128'),
    [CATEGORY_FIELDS.COLOR]: Yup.string()
        .required()
        .trim()
        .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    [CATEGORY_FIELDS.ICON]: Yup.string().required().trim(),
});
