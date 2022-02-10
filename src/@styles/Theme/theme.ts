import { DefaultTheme } from 'styled-components';

import { rem } from '@helpers/rem';

const theme: DefaultTheme = {
    fonts: {
        families: {
            sansSerif: "'Poppins', sans-serif",
        },
        weights: {
            extraLight: 200,
            light: 300,
            medium: 400,
            semiBold: 500,
            bold: 600,
        },
        // SIZES TO SET
        sizes: {
            h1: rem(50),
            h2: rem(50),
            h3: rem(50),
            body: rem(14),
            caption: rem(16),
            field: rem(16),
            button: rem(24),
        },
        // HEIGHTS TO SET
        lineHeights: {
            h1: rem(72),
            h2: rem(72),
            h3: rem(72),
            body: rem(18),
            caption: rem(22),
            field: rem(22),
            button: rem(32),
        },
    },
    colors: {
        white: '#ffffff',
        whiteBlue: '#d7e8fe',
        // black: '#000000',
        black: '#1e1e1e',
        blue: '#0269fb',
        lightBlue: '#66a6fc',
        gray: '#999999',
        lightGray: '#d5d5d5',
        midGray: '#dedede',
        semiMidGray: '#a2a2a2',
        red: '#fb6c6c',
    },
    margins: {
        half: rem(4),
        base: rem(8),
        base_x2: rem(16),
        base_x3: rem(24),
        base_x4: rem(32),
        base_x5: rem(40),
        base_x6: rem(46),
    },
    borders: {
        radious: {
            huge: rem(45),
            big: rem(35),
            medium: rem(25),
            small: rem(15),
            tiny: rem(8),
        },
    },
    diameters: {
        huge: rem(60),
        big: rem(56),
        medium: rem(48),
        small: rem(40),
        tiny: rem(36),
    },
};

export { theme };
