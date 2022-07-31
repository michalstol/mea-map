import { createGlobalStyle } from 'styled-components';

import { defaultFontSize } from '@configs/const';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: ${defaultFontSize}px;
    }

    body {
        font-family: ${props => props.theme.fonts.family.poppins};
        font-size: 1rem;
        font-weight: ${props => props.theme.fonts.weight.light};
    }
`;

export { GlobalStyle };
