import React from 'react';
import styled from 'styled-components';

import Grid from '@atoms/Grid';

interface Props {
    testId?: string;
    className?: string;
    children: React.ReactNode;
}

function BottomSheet(props: Props): React.ReactElement {
    return (
        <Container className={props.className} data-testid={props.testId}>
            <Sheet>
                <Grid.Container>
                    <Grid.Row columns={1}>
                        <Grid.Cell>{props.children}</Grid.Cell>
                    </Grid.Row>
                </Grid.Container>
            </Sheet>
        </Container>
    );
}

export { BottomSheet, Sheet as BottomSheetWrapper };

const Container = styled.div`
    --mea-bottom-sheet-border-radius: ${props => props.theme.sizes.base_x4};

    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    pointer-events: none;
`;

const Sheet = styled.div`
    position: relative;
    width: 100%;
    padding: ${props => props.theme.sizes.base_x4} 0
        ${props => props.theme.sizes.base_x5};
    border-radius: var(--mea-bottom-sheet-border-radius)
        var(--mea-bottom-sheet-border-radius) 0 0;
    background-color: rgb(${props => props.theme.pallete.white});
    pointer-events: all;
`;
