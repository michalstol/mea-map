import styled, { css } from 'styled-components';

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
    --mea-grid-padding: ${props => props.theme.sizes.base_x4};
    --mea-grid-gap: ${props => props.theme.sizes.base_x2};

    padding-left: var(--mea-grid-padding);
    padding-right: var(--mea-grid-padding);
`;

interface RowProps {
    variant?: 'full';
}

const Row = styled.div<RowProps>`
    display: flex;
    gap: var(--mea-grid-gap);

    ${props =>
        props.variant === 'full' &&
        css`
            padding-left: calc(var(--mea-grid-padding) * -1);
            padding-right: calc(var(--mea-grid-padding) * -1);
        `}
`;

interface ColumnProps {
    size?: number | 'auto' | 'min' | 'max';
}

const Column = styled.div<ColumnProps>`
    width: 100%;
    flex: 0 0 100%;

    ${props =>
        !!props.size &&
        props.size !== 'auto' &&
        css`
            width: calc(100% / 12 * ${props.size});
            flex: 0 0 calc(100% / 12 * ${props.size});
        `}

    ${props =>
        props.size === 'auto' &&
        css`
            width: auto;
            flex: 1 1 auto;
        `}

    ${props =>
        props.size === 'min' &&
        css`
            width: auto;
            flex: 0 1 auto;
        `}

    ${props =>
        props.size === 'max' &&
        css`
            width: 100%;
            flex: 1 1 100%;
        `}
`;

export { Container, Row, Column };
