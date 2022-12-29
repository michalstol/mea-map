import { rem } from '@styles/helpers';
import { DefaultTheme } from 'styled-components';

function getIconSize(
    theme: DefaultTheme,
    size: keyof DefaultTheme['icons']['sizes'] | number
): {
    width: string;
    height: string;
} {
    const iSize =
        typeof size === 'number' ? rem(size) : theme.icons.sizes[size];

    return {
        width: iSize,
        height: iSize,
    };
}

export { getIconSize };
