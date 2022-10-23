import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    testId?: string;
    className?: string;
    children: React.ReactNode;
    columns?: number;
}

/**
 * @param columns `number` - as a default is `2`. Can not be `0` or `null`
 */
function Row({ columns = 2, ...props }: Props): React.ReactElement {
    if (!columns) {
        throw new Error('Row - "columns" property can not be 0 or null!');
    }

    return (
        <StyledRow
            className={props.className}
            data-testid={props.testId}
            columns={columns}
        >
            {props.children}
        </StyledRow>
    );
}

export { Row };

const StyledRow = styled.div<{ columns: number }>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: var(--mea-grid-gap);
`;
