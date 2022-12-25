import styled from 'styled-components';

/**
 * Use ICON_NAMES from `@types/icons`.
 * Example usage: `<Icon size={24}>search</Icon>`
 */
const Icon = styled.div<{ size: string; weight?: number }>`
    font-family: ${props => props.theme.fonts.family.materialSymbols};
    font-size: ${props => props.size};
    line-height: ${props => props.size};
    font-variation-settings: 'FILL' 0, 'wght' ${props => props.weight ?? 400},
        'GRAD' 0, 'opsz' 48;
    color: currentColor;
    display: inline-block;
`;

export { Icon };
