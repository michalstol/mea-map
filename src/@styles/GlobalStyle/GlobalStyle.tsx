import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.fonts.family.poppins};
        font-weight: ${props => props.theme.fonts.weight.light};
    }
`;

export { GlobalStyle };
