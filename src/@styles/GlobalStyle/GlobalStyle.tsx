import { createGlobalStyle } from 'styled-components';

import { defaultFontSize } from '@configs/const';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
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
`;

export { GlobalStyle };
