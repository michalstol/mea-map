import React from 'react';
import styled, { useTheme, css } from 'styled-components';

import { ICON_NAME } from '../../../@types/icons';

import { Icon } from '@atoms/Icon';

interface Props {
    testId?: string;
    className?: string;
    icon: 'empty' | ICON_NAME;
    color: string;
    bgColor: string;
    children: React.ReactNode;
    value?: string;
    onClick?: (value?: string) => void;
}

function CategoryOption(props: Props): React.ReactElement {
    const theme = useTheme();
    const onClick = () => props.onClick?.(props.value);

    return (
        <Container
            className={props.className}
            data-testid={props.testId}
            onClick={onClick}
        >
            <span>{props.children}</span>

            <IconWrapper>
                <Circle
                    color={props.color}
                    bgColor={props.bgColor}
                    isEmpty={props.icon === 'empty'}
                >
                    {props.icon !== 'empty' && (
                        <Icon size={theme.icons.sizes.tiny}>{props.icon}</Icon>
                    )}
                </Circle>
            </IconWrapper>
        </Container>
    );
}

export { CategoryOption, IconWrapper, Circle };

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: ${props => props.theme.sizes.base_x2};
    justify-content: space-between;
    align-items: center;
`;

const IconWrapper = styled.div`
    --mea-category-option-icon-wrapper-size: ${props =>
        props.theme.sizes.base_x4};

    position: relative;
    width: var(--mea-category-option-icon-wrapper-size);
`;

const Circle = styled.div<{
    color: string;
    bgColor: string;
    isEmpty: boolean;
}>`
    position: relative;
    width: var(--mea-category-option-icon-wrapper-size);
    height: var(--mea-category-option-icon-wrapper-size);
    color: ${props => props.color};
    border-radius: var(--mea-category-option-icon-wrapper-size);
    background-color: ${props => props.bgColor};
    display: grid;
    justify-content: center;
    align-items: center;

    ${props =>
        props.isEmpty &&
        css`
            border: 1px solid rgb(${props => props.theme.pallete.gray_E7});
            background-color: transparent;
        `}
`;
