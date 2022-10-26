import { useField } from 'formik';
import React from 'react';

import { Field as FieldAtom, Input } from '@atoms/Field';

interface Props {
    testId?: string;
    className?: string;
    name: string;
    label: string;
    rows?: number;
    disabled?: boolean;
}

function TextArea({ rows = 5, ...props }: Props): React.ReactElement {
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
            <Input
                as="textarea"
                rows={rows}
                disabled={props.disabled}
                {...field}
            />
        </FieldAtom>
    );
}

export { TextArea };
