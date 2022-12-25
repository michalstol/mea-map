import React from 'react';
import styled, { css } from 'styled-components';

type Variant = 'normal' | 'no-padding';

interface Props {
    as?: string;
    testId?: string;
    className?: string;
    children: React.ReactNode;
    variant?: Variant;
}

function Container(props: Props): React.ReactElement {
    return (
        <StyledContainer
            as={props.as as any}
            className={props.className}
            data-testid={props.testId}
            variant={props.variant}
        >
            {props.children}
        </StyledContainer>
    );
}

export { Container };

const StyledContainer = styled.div<{ variant?: Variant }>`
    --mea-grid-gap: ${props => props.theme.sizes.base_x2_5};

    width: 100%;
    padding-left: var(--mea-grid-padding);
    padding-right: var(--mea-grid-padding);

    ${props =>
        props.variant === 'no-padding' &&
        css`
            padding-left: 0;
            padding-right: 0;
        `}
`;
