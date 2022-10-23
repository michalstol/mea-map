import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    testId?: string;
    className?: string;
    children: React.ReactNode;
}

function Cell(props: Props): React.ReactElement {
    return (
        <StyledCell className={props.className} data-testid={props.testId}>
            {props.children}
        </StyledCell>
    );
}

export { Cell };

const StyledCell = styled.div``;
