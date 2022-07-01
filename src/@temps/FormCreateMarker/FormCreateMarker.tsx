import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Timestamp } from 'firebase/firestore';

import { Uuid } from '@typings/common';
import { Marker } from '@typings/markers';
import { Category } from '@typings/categories';

import {
    MARKER_FIELDS,
    MarkerFormValues,
    markerInitialValues,
    createMarkerSchema,
    coordinateStep,
} from './FormCreateMarker.helpers';

interface Props {
    userUuid: Uuid;
    categories: Category[];
    create: (marker: Marker) => void;
}

function FormCreateMarker(props: Props): React.ReactElement {
    return (
        <Formik<MarkerFormValues>
            initialValues={{ ...markerInitialValues }}
            validationSchema={createMarkerSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={({ lat, lng, description, ...data }) => {
                const newMarker: Marker = {
                    ...data,
                    uuid: null,
                    description: description || null,
                    coordinates: {
                        lat: lat as number,
                        lng: lng as number,
                    },
                    createdBy: props.userUuid,
                    createAt: Timestamp.now().toMillis(),
                    sharedFor: [],
                };

                props.create(newMarker);
            }}
        >
            {({ errors, values, handleChange }) => (
                <Form>
                    <fieldset>
                        <Field
                            type="number"
                            name={MARKER_FIELDS.LAT}
                            placeholder={MARKER_FIELDS.LAT}
                            step={coordinateStep}
                        />
                        {errors[MARKER_FIELDS.LAT] && (
                            <p>{errors[MARKER_FIELDS.LAT]}</p>
                        )}
                    </fieldset>

                    <fieldset>
                        <Field
                            type="number"
                            name={MARKER_FIELDS.LNG}
                            placeholder={MARKER_FIELDS.LNG}
                            step={coordinateStep}
                        />
                        {errors[MARKER_FIELDS.LNG] && (
                            <p>{errors[MARKER_FIELDS.LNG]}</p>
                        )}
                    </fieldset>

                    <fieldset>
                        <Field
                            type="text"
                            name={MARKER_FIELDS.NAME}
                            placeholder={MARKER_FIELDS.NAME}
                        />
                        {errors[MARKER_FIELDS.NAME] && (
                            <p>{errors[MARKER_FIELDS.NAME]}</p>
                        )}
                    </fieldset>

                    <fieldset>
                        <Field
                            type="text"
                            name={MARKER_FIELDS.ADDRESS}
                            placeholder={MARKER_FIELDS.ADDRESS}
                        />
                        {errors[MARKER_FIELDS.ADDRESS] && (
                            <p>{errors[MARKER_FIELDS.ADDRESS]}</p>
                        )}
                    </fieldset>

                    <fieldset>
                        <Field
                            as="textarea"
                            name={MARKER_FIELDS.DESCRIPTION}
                            placeholder={MARKER_FIELDS.DESCRIPTION}
                        />
                        {errors[MARKER_FIELDS.DESCRIPTION] && (
                            <p>{errors[MARKER_FIELDS.DESCRIPTION]}</p>
                        )}
                    </fieldset>

                    <fieldset>
                        <select
                            name={MARKER_FIELDS.CATEGORY}
                            value={values[MARKER_FIELDS.CATEGORY]}
                            onChange={handleChange}
                        >
                            <option
                                disabled
                                value={
                                    markerInitialValues[MARKER_FIELDS.CATEGORY]
                                }
                            >
                                Select category
                            </option>

                            {props.categories.map(
                                category =>
                                    !!category.uuid && (
                                        <option
                                            key={category.uuid}
                                            value={category.uuid}
                                        >
                                            {category.name}
                                        </option>
                                    )
                            )}
                        </select>
                        {errors[MARKER_FIELDS.CATEGORY] && (
                            <p>{errors[MARKER_FIELDS.CATEGORY]}</p>
                        )}
                    </fieldset>

                    <button type="submit">Create</button>
                </Form>
            )}
        </Formik>
    );
}

export { FormCreateMarker };
