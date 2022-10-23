import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

import { MapBoxFeatureCollection } from '@typings/mapbox';

import { setIsActiveAction } from '@redux/search';

import { useAppDispatch } from '@redux/hooks';
import { useFetch } from '@hooks/useFetch/useFetch';
import {
    CONTROL_BUTTON_STATES,
    useControlButton,
} from '@hooks/useControlButton';

import { SEARCH_FIELDS, SearchFormFields, initValues } from './Search.helpers';
import { FetchQuery, ResetForm } from './Search.components';

function SearchField(): React.ReactElement {
    const dispatch = useAppDispatch();
    const fetchQuery = useFetch<MapBoxFeatureCollection>();
    const controlButton = useControlButton();

    const fieldRef = React.useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = React.useState(false);

    React.useEffect(() => {
        if (isFocused) return;
        if (!fieldRef.current) return;

        const onFocus = () => {
            setIsFocused(true);
            controlButton.setState(CONTROL_BUTTON_STATES.BACK);
        };

        const onBack = () => {
            setIsFocused(false);
            controlButton.reset();
            fetchQuery.reset();
        };

        fieldRef.current.addEventListener('focus', onFocus);
        controlButton.ref?.current?.addEventListener('click', onBack);

        return () => {
            fieldRef.current?.removeEventListener('focus', onFocus);
            controlButton.ref?.current?.removeEventListener('click', onBack);
        };
    }, []);

    React.useEffect(() => {
        dispatch(setIsActiveAction(isFocused));
    }, [isFocused]);

    return (
        <Formik<SearchFormFields>
            initialValues={{ ...initValues }}
            validateOnBlur={false}
            validateOnChange={false}
            validateOnMount={false}
            onSubmit={() => {}}
        >
            {() => (
                <React.Fragment>
                    <Form>
                        <ResetForm isReady={isFocused} />
                        <FetchQuery
                            fetchData={fetchQuery.fetch}
                            isReady={isFocused}
                        />

                        <FieldUI
                            innerRef={fieldRef}
                            name={SEARCH_FIELDS.SEARCH}
                            placeholder="Search location"
                        />
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    );
}

export { SearchField };

const FieldUI = styled(Field)`
    width: 100%;
    height: ${props => props.theme.sizes.base_x5};
    margin: 0;
    padding: 0 ${props => props.theme.sizes.base_x2};
    border: none;
    border-radius: ${props => props.theme.sizes.base_x2};
    background-color: var(
        --mea-default--background,
        ${props => props.theme.colors.white}
    );
    box-shadow: ${props => props.theme.shadows.normal};

    &::placeholder {
        opacity: 0.5;
    }
`;
