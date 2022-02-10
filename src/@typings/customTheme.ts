import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            families: {
                sansSerif: string;
            };
            weights: {
                extraLight: number;
                light: number;
                medium: number;
                semiBold: number;
                bold: number;
            };
            sizes: {
                h1: string;
                h2: string;
                h3: string;
                body: string;
                caption: string;
                field: string;
                button: string;
            };
            lineHeights: {
                h1: string;
                h2: string;
                h3: string;
                body: string;
                caption: string;
                field: string;
                button: string;
            };
        };
        colors: {
            white: string;
            whiteBlue: string;
            black: string;
            blue: string;
            lightBlue: string;
            gray: string;
            lightGray: string;
            midGray: string;
            semiMidGray: string;
            red: string;
        };
        margins: {
            half: string;
            base: string;
            base_x2: string;
            base_x3: string;
            base_x4: string;
            base_x5: string;
            base_x6: string;
        };
        borders: {
            radious: {
                huge: string;
                big: string;
                medium: string;
                small: string;
                tiny: string;
            };
        };
        diameters: {
            huge: string;
            big: string;
            medium: string;
            small: string;
            tiny: string;
        };
    }
}
