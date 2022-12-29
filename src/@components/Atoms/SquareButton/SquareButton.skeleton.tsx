import styled from 'styled-components';

import { SquareButtonVariables } from './SquareButton.variables';

const SquareButtonSkeleton = styled(SquareButtonVariables)`
    width: var(--mea-square-button-size);
    height: var(--mea-square-button-size);
    padding: 0;
    border: 1px solid rgb(${props => props.theme.pallete.white});
    border-radius: var(--mea-square-button-radius);
    background: rgb(${props => props.theme.pallete.white});
    display: grid;
    overflow: hidden;
    pointer-events: none;
`;

export { SquareButtonSkeleton };
