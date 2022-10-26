import React from 'react';
import { useField } from 'formik';

import { Field as FieldAtom, Input } from '@atoms/Field';

interface Props {
    testId?: string;
    className?: string;
    name: string;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    disabled?: boolean;
}

function Field({ type = 'text', ...props }: Props): React.ReactElement {
    const [field, meta] = useField(props.name);

    return (
        <FieldAtom
            className={props.className}
            data-testid={props.testId}
            name={props.name}
            label={props.label}
            disabled={props.disabled}
            error={meta.error}
            isInitiallyTouched={!!field.value}
        >
            <Input type={type} disabled={props.disabled} {...field} />
        </FieldAtom>
    );
}

export { Field };
