import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useField } from 'formik';

import { Category } from '@typings/categories';

import { FieldPropsBasic, Field } from '@atoms/Field';
import { CategoryOption, Circle } from '@atoms/CategoryOption';
import { Button } from '@atoms/Button';

import { BottomSheet } from '@molecules/BottomSheet';

interface Props extends FieldPropsBasic {
    testId?: string;
    className?: string;
    categories: Category[];
    onCreate?: () => void;
}

function SelectCategoryComponent({
    testId,
    className,
    categories,
    onCreate,
    ...fieldProps
}: Props): React.ReactElement {
    const theme = useTheme();
    const [field, meta, helper] = useField(fieldProps.name);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState<Category | null>(
        () => categories.find(category => category.uuid === field.value) || null
    );

    const color = `rgb(${theme.pallete.white})`;

    const getCategories = React.useCallback(
        () => categories.filter(category => !!category.uuid),
        [categories]
    );
    const openBottomSheet = () => setIsOpen(true);
    const pickOption = (value: string): void => {
        if (!meta.touched) {
            helper.setTouched(true);
        }

        helper.setValue(value);
        setSelectedOption(
            categories.find(category => category.uuid === value) || null
        );
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            <Field
                isTouched={meta.touched || meta.initialTouched}
                {...fieldProps}
            >
                <StyledCategoryOption
                    icon={selectedOption?.icon || 'empty'}
                    color={color}
                    bgColor={selectedOption?.color || ''}
                    onClick={openBottomSheet}
                >
                    {selectedOption?.name || (
                        <React.Fragment>&nbsp;</React.Fragment>
                    )}
                </StyledCategoryOption>
            </Field>

            {isOpen && (
                <BottomSheet
                    onClosed={() => setIsOpen(false)}
                    footer={
                        <Button
                            version="secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                    }
                >
                    {getCategories().map(category => (
                        <CategoryOption
                            key={category.uuid}
                            icon={category.icon}
                            color={color}
                            bgColor={category.color}
                            onClick={() => pickOption(category.uuid as string)}
                        >
                            {category.name}
                        </CategoryOption>
                    ))}

                    {!!onCreate && (
                        <NewCategoryOption
                            icon="empty"
                            color=""
                            bgColor=""
                            onClick={() => {
                                setIsOpen(false);
                                onCreate();
                            }}
                        >
                            New category
                        </NewCategoryOption>
                    )}
                </BottomSheet>
            )}
        </React.Fragment>
    );
}

const SelectCategory = React.memo(SelectCategoryComponent);
SelectCategory.displayName = 'SelectCategory';

export { SelectCategory };

const StyledCategoryOption = styled(CategoryOption)`
    ${Circle} {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
    }
`;

const NewCategoryOption = styled(CategoryOption)`
    color: rgb(${props => props.theme.pallete.gray_82});
`;
