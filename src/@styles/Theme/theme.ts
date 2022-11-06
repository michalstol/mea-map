import { DefaultTheme } from 'styled-components';

import { baseScale } from '@configs/const';

import { rem } from '@styles/helpers';

import colors from './colors';
import pallete from './pallete';

const theme: DefaultTheme = {
    fonts: {
        family: {
            poppins: `'Poppins', sans-serif`,
            materialSymbols: 'Material Symbols Sharp',
        },
        weight: {
            light: 300,
            regular: 400,
            semibold: 600,
        },
        size: {
            body: rem(16),
            bodySmall: rem(14),
            heading: rem(26),
            headingSmall: rem(20),
            caption: rem(12),
        },
        lineHeight: {
            body: rem(24),
            bodySmall: rem(18),
            heading: rem(33),
            headingSmall: rem(30),
            caption: rem(18),
        },
    },
    sizes: {
        half: rem(baseScale / 2),
        base: rem(baseScale),
        base_x1_5: rem(baseScale * 1.5),
        base_x2: rem(baseScale * 2),
        base_x2_5: rem(baseScale * 2.5),
        base_x3: rem(baseScale * 3),
        base_x4: rem(baseScale * 4),
        base_x5: rem(baseScale * 5),
        base_x6: rem(baseScale * 6),
        base_x7: rem(baseScale * 7),
        base_x8: rem(baseScale * 8),
        base_x9: rem(baseScale * 9),
        base_x10: rem(baseScale * 10),
    },
    icons: {
        sizes: {
            normal: rem(40),
            small: rem(24),
            tiny: rem(20),
        },
    },
    pallete,
    colors,
    shadows: {
        normal: `4px 6px 24px rgba(${pallete.black}, 0.15)`,
    },
    transition: {
        speed: {
            fast: '150ms',
            normal: '300ms',
            slow: '500ms',
        },
        easing: {
            slideIn: 'cubic-bezier(0.24, 0.6, 0.11, 1)',
        },
    },
    zIndexes: {
        controlButton: 101,
        search: 100,
    },
};

export { theme };
