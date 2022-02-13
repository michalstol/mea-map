import React from 'react';
import styled from 'styled-components';

import { Container, Row, Cell } from '@ui/Atoms/Grid';

function HomePage(): React.ReactElement {
    return (
        <Container>
            <Row>
                <CellStyled size={4}>asd</CellStyled>
                <CellStyled size={4}>asd</CellStyled>
                <CellStyled size={4}>asd</CellStyled>
            </Row>
            <Row>
                <CellStyled size={6}>asd</CellStyled>
                <CellStyled size={6}>asd</CellStyled>
            </Row>
            <Row>
                <CellStyled size={12}>asd</CellStyled>
            </Row>
        </Container>
    );
}

export { HomePage };

const CellStyled = styled(Cell)`
    background-color: rgba(0, 0, 0, 0.1);
`;
