import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Formik, Form } from 'formik';

import { CATEGORY_FIELDS } from '@typings/categories';
import { ICON_NAME } from '@typings/icons';

import { Icon } from '@atoms/Icon';
import { Button } from '@atoms/Button';

import { Field } from '@molecules/Field';
import { TextArea } from '@molecules/TextArea';
import { BottomSheet } from '@molecules/BottomSheet';

type UpdateCategoryFormValues = {
    [key in CATEGORY_FIELDS]: string;
};

interface Props {
    testId?: string;
    className?: string;
    onClose: () => void;
    onSubmit: (values: UpdateCategoryFormValues) => void;
}

function UpdateCategoryComponent(props: Props): React.ReactElement {
    const theme = useTheme();

    return (
        <Formik<UpdateCategoryFormValues>
            initialValues={{
                [CATEGORY_FIELDS.COLOR]: '',
                [CATEGORY_FIELDS.ICON]: '',
                [CATEGORY_FIELDS.NAME]: '',
                [CATEGORY_FIELDS.DESCRIPTION]: '',
            }}
            onSubmit={props.onSubmit}
        >
            {() => (
                <Form>
                    <BottomSheet
                        onClosed={() => undefined}
                        footer={
                            <ButtonContainer>
                                <ButtonBack
                                    type="button"
                                    version="secondary"
                                    onClick={props.onClose}
                                >
                                    <Icon size={theme.icons.sizes.small}>
                                        {ICON_NAME.ARROW_BACK}
                                    </Icon>
                                </ButtonBack>
                                <Button
                                    type="submit"
                                    version="primary"
                                    onClick={() => undefined}
                                >
                                    Save
                                </Button>
                            </ButtonContainer>
                        }
                    >
                        <Field
                            name={CATEGORY_FIELDS.COLOR}
                            label="Color hash"
                        />
                        <Field name={CATEGORY_FIELDS.ICON} label="Icon name" />
                        <Field
                            name={CATEGORY_FIELDS.NAME}
                            label="Category name"
                        />
                        <TextArea
                            name={CATEGORY_FIELDS.DESCRIPTION}
                            label="Description"
                            rows={3}
                        />
                    </BottomSheet>
                </Form>
            )}
        </Formik>
    );
}

const UpdateCategory = React.memo(UpdateCategoryComponent);
UpdateCategory.displayName = 'UpdateCategory';

export { UpdateCategory };

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: ${props => props.theme.sizes.base_x1_5};
`;

const ButtonBack = styled(Button)`
    font-size: 0;
    line-height: 0;
    display: grid;
`;
