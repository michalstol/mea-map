import 'styled-components';

import Colors from './colors.d';
import Pallete from './pallete.d';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            family: {
                poppins: string;
                materialSymbols: string;
            };
            weight: {
                light: number;
                regular: number;
                semibold: number;
            };
            size: {
                body: string;
                bodySmall: string;
                heading: string;
                headingSmall: string;
                caption: string;
            };
            lineHeight: {
                body: string;
                bodySmall: string;
                heading: string;
                headingSmall: string;
                caption: string;
            };
        };
        sizes: {
            half: string;
            base: string;
            base_x1_5: string;
            base_x2: string;
            base_x2_5: string;
            base_x3: string;
            base_x3_5: string;
            base_x4: string;
            base_x4_5: string;
            base_x5: string;
            base_x6: string;
            base_x7: string;
            base_x8: string;
            base_x9: string;
            base_x10: string;
        };
        icons: {
            sizes: {
                normal: string;
                small: string;
                tiny: string;
            };
            weight: {
                normal: number;
                semibold: number;
                bold: number;
            };
        };
        pallete: Pallete;
        colors: Colors;
        shadows: {
            normal: string;
        };
        transition: {
            speed: {
                fast: string;
                normal: string;
                slow: string;
            };
            easing: {
                slideIn: string;
            };
        };
        zIndexes: {
            controlButton: number;
            search: number;
        };
    }
}
