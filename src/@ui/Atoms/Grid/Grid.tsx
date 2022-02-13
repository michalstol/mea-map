import React from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    isNoGap?: boolean;
}

function Container(props: ContainerProps): React.ReactElement {
    return (
        <ContainerStyled className={props.className} isNoGap={props.isNoGap}>
            {props.children}
        </ContainerStyled>
    );
}

interface RowProps {
    children: React.ReactNode;
    className?: string;
    isNoGap?: boolean;
}

function Row(props: RowProps): React.ReactElement {
    return (
        <RowStyled className={props.className} isNoGap={props.isNoGap}>
            {props.children}
        </RowStyled>
    );
}

type CellSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface CellProps {
    children: React.ReactNode;
    className?: string;
    size: CellSize;
}

function Cell(props: CellProps): React.ReactElement {
    return (
        <CellStyled className={props.className} size={props.size}>
            {props.children}
        </CellStyled>
    );
}

export { Container, Row, Cell };

const ContainerStyled = styled.div<{ isNoGap?: boolean }>`
    padding-left: ${props => props.theme.margins.base_x5};
    padding-right: ${props => props.theme.margins.base_x5};
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.margins.base_x3};

    ${props =>
        props.isNoGap &&
        css`
            gap: none;
        `}
`;

const RowStyled = styled.div<{ isNoGap?: boolean }>`
    display: flex;
    gap: ${props => props.theme.margins.base_x5};

    ${props =>
        props.isNoGap &&
        css`
            gap: none;
        `}
`;

const CellStyled = styled.div<{ size: CellSize }>`
    flex: 0 1 ${props => (props.size * 100) / 12}%;
`;
