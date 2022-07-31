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
        scale: {
            half: string;
            base: string;
            base_x2: string;
            base_x3: string;
            base_x4: string;
            base_x5: string;
            base_x6: string;
            base_x7: string;
            base_x8: string;
            base_x9: string;
            base_x10: string;
        };
    }
}
