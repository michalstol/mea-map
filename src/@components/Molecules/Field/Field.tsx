import React from 'react';
import { useField } from 'formik';

import { FieldPropsBasic, Field as FieldAtom, Input } from '@atoms/Field';

interface Props extends FieldPropsBasic {
    testId?: string;
    className?: string;
}

function Field({ type = 'text', ...props }: Props): React.ReactElement {
    const [field, meta, helper] = useField(props.name);

    return (
        <FieldAtom
            className={props.className}
            data-testid={props.testId}
            name={props.name}
            label={props.label}
            disabled={props.disabled}
            error={meta.error}
            isTouched={meta.initialTouched || meta.touched}
            setTouched={helper.setTouched}
        >
            <Input type={type} disabled={props.disabled} {...field} />
        </FieldAtom>
    );
}

export { Field };
