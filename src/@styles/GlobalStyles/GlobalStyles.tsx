import { createGlobalStyle } from 'styled-components';

import { BASE_SIZE } from '@configs/styles';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: ${BASE_SIZE}px;
    }

    body {
        margin: 0;
        font-family: ${props => props.theme.fonts.families.sansSerif};
        font-size: ${props => props.theme.fonts.sizes.body};
        font-weight: ${props => props.theme.fonts.weights.medium};
        line-height: ${props => props.theme.fonts.lineHeights.body};
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.white};
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    * {
        outline: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    strong {
        font-weight: ${props => props.theme.fonts.weights.bold};
    }
`;

export { GlobalStyles };
