import { DefaultTheme } from 'styled-components';

interface Return {
    width: string;
    height: string;
}

function getIconSize(
    theme: DefaultTheme,
    size: keyof DefaultTheme['icons']['sizes']
): Return {
    return {
        width: theme.icons.sizes[size],
        height: theme.icons.sizes[size],
    };
}

export { getIconSize };
