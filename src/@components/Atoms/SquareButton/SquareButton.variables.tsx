import styled from 'styled-components';

const SquareButtonVariables = styled.button`
    --mea-square-button-size: ${props => props.theme.sizes.base_x8};
    --mea-square-button-color: rgb(${props => props.theme.pallete.white});
    --mea-square-button-border-color: rgb(
        ${props => props.theme.pallete.primary}
    );
    --mea-square-button-radius: ${props => props.theme.sizes.base_x3};
    --mea-square-button-background: rgb(
        ${props => props.theme.pallete.primary}
    );
`;

export { SquareButtonVariables };
