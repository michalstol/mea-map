import styled from 'styled-components';

const Backdrop = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(${props => props.theme.pallete.black}, 0.1);
    z-index: -1;
`;

export { Backdrop };
