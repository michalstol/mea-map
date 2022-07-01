import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            family: {
                poppins: string;
                materialSymbols: string;
            };
            weight: {
                thin: number;
                extraLight: number;
                light: number;
                regular: number;
                medium: number;
                semiBold: number;
                bold: number;
                extraBold: number;
            };
        };
    }
}
