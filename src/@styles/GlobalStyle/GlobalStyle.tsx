import { createGlobalStyle } from 'styled-components';

import { rem } from '@styles/helpers';

import { defaultFontSize } from '@configs/const';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    html {
        font-size: ${defaultFontSize}px;
    }

    body {
        font-family: ${props => props.theme.fonts.family.poppins};
        font-size: ${props => props.theme.fonts.size.body};
        font-weight: ${props => props.theme.fonts.weight.regular};
        line-height: ${props => props.theme.fonts.lineHeight.body};
        color: rgb(${props => props.theme.pallete.black});
        background-color: rgb(${props => props.theme.pallete.white});
    }

    * {
        box-sizing: border-box;
        
        &:focus,
        &:active,
        &:visited {
            outline: none;
        }
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    :root {
        // GRID VARS
        --mea-grid-padding: ${props => props.theme.sizes.base_x5};

        // PAGE VARS
        --mea-page-scale: 0.8;
        --mea-page-border-radius: ${props => props.theme.sizes.base_x4};
        --mea-page-transition: ${({ theme }) =>
            `${theme.transition.speed.slow} ${theme.transition.easing.slideIn}`};
        --mea-map-page-side-size: ${rem(115)};

        // SKELETON VARS
    }
`;

export { GlobalStyle };
