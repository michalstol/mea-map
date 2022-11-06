import styled, { css } from 'styled-components';

type Version = 'primary' | 'secondary';

const Button = styled.button<{ version?: Version }>`
    --mea-button-padding: ${props => props.theme.sizes.base_x2};
    --mea-button-line-height: ${props => props.theme.fonts.lineHeight.body};
    --mea-button-color: rgb(${props => props.theme.pallete.white});
    --mea-button-border: rgb(${props => props.theme.pallete.primary});
    --mea-button-border-radius: ${props => props.theme.sizes.base_x3};
    --mea-button-background: rgb(${props => props.theme.pallete.primary});
    --mea-button-transition: ${props => props.theme.transition.speed.normal}
        ease-out;

    ${props =>
        props.disabled &&
        css`
            --mea-button-color: rgb(${props => props.theme.pallete.gray_82});
            --mea-button-border: rgb(${props => props.theme.pallete.gray_E7});
            --mea-button-background: rgb(
                ${props => props.theme.pallete.gray_E7}
            );
        `}

    ${props =>
        props.version === 'secondary' &&
        css`
            --mea-button-color: rgb(${props => props.theme.pallete.primary});
            --mea-button-background: transparent;
        `}

    ${props =>
        props.version === 'secondary' &&
        props.disabled &&
        css`
            --mea-button-color: rgb(${props => props.theme.pallete.gray_82});
            --mea-button-border: rgb(${props => props.theme.pallete.gray_82});
            --mea-button-background: transparent;
        `}

    width: 100%;
    padding: var(--mea-button-padding);
    font-family: ${props => props.theme.fonts.family.poppins};
    font-size: ${props => props.theme.fonts.size.body};
    font-weight: ${props => props.theme.fonts.weight.semibold};
    line-height: var(--mea-button-line-height);
    letter-spacing: 0.02em;
    color: var(--mea-button-color);
    text-decoration: none;
    text-align: center;
    border: 2px solid var(--mea-button-border);
    border-radius: var(--mea-button-border-radius);
    background-color: var(--mea-button-background);
    transition: color var(--mea-button-transition),
        border-color var(--mea-button-transition),
        background-color var(--mea-button-transition);
    display: inline-block;
`;

export { Button };
