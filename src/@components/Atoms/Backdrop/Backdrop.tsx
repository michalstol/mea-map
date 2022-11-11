import styled from 'styled-components';

/**
 * --mea-backdrop-color - `background-color`
 */
const Backdrop = styled.div`
    --mea-backdrop-color: rgba(${props => props.theme.pallete.black}, 0.1);

    position: absolute;
    inset: 0;
    background-color: var(--mea-backdrop-color);
    z-index: -1;
`;

export { Backdrop };
