import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Timestamp } from 'firebase/firestore';

import { Uuid } from '@typings/common';
import { Category } from '@typings/categories';
import { ICON_NAME } from '@typings/icons';

import {
    CATEGORY_FIELDS,
    CategoryFormValues,
    categoryInitialValues,
    createCategorySchema,
} from './FormCreateCategory.helpers';

interface Props {
    userUuid: Uuid;
    nextOrder: number;
    create: (category: Category) => void;
}

function FormCreateCategory(props: Props): React.ReactElement {
    return (
        <Formik<CategoryFormValues>
            initialValues={categoryInitialValues}
            validationSchema={createCategorySchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={({ icon, ...data }) => {
                const timestamp = Timestamp.now().toMillis();
                const newCategory: Category = {
                    ...data,
                    uuid: null,
                    icon: icon as ICON_NAME,
                    order: props.nextOrder,
                    createdBy: props.userUuid,
                    createAt: timestamp,
                    updatedOn: timestamp,
                    sharedFor: [],
                };

                props.create(newCategory);
            }}
        >
            {({ errors, values, handleChange }) => (
                <Form>
                    <fieldset>
                        <Field
                            type="text"
                            name={CATEGORY_FIELDS.NAME}
                            placeholder={CATEGORY_FIELDS.NAME}
                        />
                        {errors[CATEGORY_FIELDS.NAME] && (
                            <p>{errors[CATEGORY_FIELDS.NAME]}</p>
                        )}
                    </fieldset>
                    <fieldset>
                        <Field
                            type="color"
                            name={CATEGORY_FIELDS.COLOR}
                            placeholder={CATEGORY_FIELDS.COLOR}
                        />
                        {errors[CATEGORY_FIELDS.COLOR] && (
                            <p>{errors[CATEGORY_FIELDS.COLOR]}</p>
                        )}
                    </fieldset>
                    <fieldset>
                        <select
                            name={CATEGORY_FIELDS.ICON}
                            value={values[CATEGORY_FIELDS.ICON]}
                            onChange={handleChange}
                        >
                            <option
                                disabled
                                value={
                                    categoryInitialValues[CATEGORY_FIELDS.COLOR]
                                }
                            >
                                Select icon
                            </option>

                            {Object.keys(ICON_NAME).map(
                                key =>
                                    ICON_NAME[key as ICON_NAME] !==
                                        ICON_NAME.FAVORITE && (
                                        <option
                                            key={key}
                                            value={ICON_NAME[key as ICON_NAME]}
                                        >
                                            {key}
                                        </option>
                                    )
                            )}
                        </select>

                        {errors[CATEGORY_FIELDS.ICON] && (
                            <p>{errors[CATEGORY_FIELDS.ICON]}</p>
                        )}
                    </fieldset>

                    <button type="submit">Create</button>
                </Form>
            )}
        </Formik>
    );
}

export { FormCreateCategory };
