import { DefaultTheme } from 'styled-components';

import { baseScale } from '@configs/const';

import { rem } from '@styles/helpers';

const theme: DefaultTheme = {
    fonts: {
        family: {
            poppins: `'Poppins', sans-serif`,
            materialSymbols: 'Material Symbols Sharp',
        },
        weight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
        },
    },
    scale: {
        half: rem(baseScale / 2),
        base: rem(baseScale),
        base_x2: rem(baseScale * 2),
        base_x3: rem(baseScale * 3),
        base_x4: rem(baseScale * 4),
        base_x5: rem(baseScale * 5),
        base_x6: rem(baseScale * 6),
        base_x7: rem(baseScale * 7),
        base_x8: rem(baseScale * 8),
        base_x9: rem(baseScale * 9),
        base_x10: rem(baseScale * 10),
    },
};

export { theme };
