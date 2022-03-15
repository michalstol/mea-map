import React from 'react';
import styled from 'styled-components';

import { Container, Row, Cell } from '@ui/Atoms/Grid';
import { Image } from '@ui/Atoms/Image';

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
                <Cell size={12}>
                    <Image
                        src="https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=400&q=80"
                        alt="face"
                        size="50px"
                        rounded="50px"
                        isWide
                        isCircle
                    />
                </Cell>
            </Row>
        </Container>
    );
}

export { HomePage };

const CellStyled = styled(Cell)`
    background-color: rgba(0, 0, 0, 0.1);
`;
