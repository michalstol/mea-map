import styled, { css } from 'styled-components';

type Version = 'primary' | 'secondary';

/**
 * Square button should be using with icons only
 */
const SquareButton = styled.button<{ version?: Version }>`
    --mea-square-button-size: ${props => props.theme.sizes.base_x8};
    --mea-square-button-color: rgb(${props => props.theme.pallete.white});
    --mea-square-button-border-color: rgb(
        ${props => props.theme.pallete.primary}
    );
    --mea-square-button-radius: ${props => props.theme.sizes.base_x3};
    --mea-square-button-background: rgb(
        ${props => props.theme.pallete.primary}
    );

    position: relative;
    width: var(--mea-square-button-size);
    height: var(--mea-square-button-size);
    padding: 0;
    color: var(--mea-square-button-color);
    border: 1px solid var(--mea-square-button-border-color);
    border-radius: var(--mea-square-button-radius);
    background-color: var(--mea-square-button-background);
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;

    ${props =>
        props.version === 'secondary' &&
        css`
            --mea-square-button-color: rgb(
                ${props => props.theme.pallete.primary}
            );
            --mea-square-button-border-color: rgb(
                ${props => props.theme.pallete.white}
            );
            --mea-square-button-background: rgb(
                ${props => props.theme.pallete.white}
            );
        `}
`;

export { SquareButton };
