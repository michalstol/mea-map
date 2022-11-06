import React from 'react';
import styled, { css } from 'styled-components';

import { Backdrop } from '@atoms/Backdrop';
import { NormalizeList } from '@atoms/NormalizeList';
import {
    BottomSheet as BottomSheetMolecule,
    BottomSheetWrapper,
} from '@atoms/BottomSheet';

interface Props {
    testId?: string;
    className?: string;
    children: React.ReactNode;
    footer: React.ReactNode;
    onClosed: () => void;
}

function BottomSheet(props: Props): React.ReactElement {
    const ref = React.useRef<HTMLDivElement | null>(null);

    return (
        <Container
            ref={ref}
            className={props.className}
            data-testid={props.testId}
        >
            <Backdrop onClick={props.onClosed} />

            <StyledBottomSheet>
                <Wrapper>
                    <StyledNormalizeList>{props.children}</StyledNormalizeList>

                    <Footer>{props.footer}</Footer>
                </Wrapper>
            </StyledBottomSheet>
        </Container>
    );
}

export { BottomSheet };

const Container = styled.div`
    --mea-bottom-sheet-organizm-gap: ${props => props.theme.sizes.base_x3};

    @keyframes bottom-sheet-animation {
        from {
            transform: translate(0, 100%);
        }
        to {
            transform: translate(0, 0);
        }
    }

    @keyframes backdrop-animation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    position: fixed;
    inset: 0;
    z-index: 100;

    ${Backdrop} {
        opacity: 0;
        animation: backdrop-animation
            ${props => props.theme.transition.speed.fast} ease-out alternate
            forwards;
    }
`;

const StyledBottomSheet = styled(BottomSheetMolecule)`
    transform: translate(0, 100%);
    animation: bottom-sheet-animation
        ${props => props.theme.transition.speed.normal}
        ${props => props.theme.transition.speed.fast}
        ${props => props.theme.transition.easing.slideIn} alternate forwards;

    ${BottomSheetWrapper} {
        padding-bottom: ${props => props.theme.sizes.base_x3};
    }
`;

const Wrapper = styled.div`
    position: relative;
    max-height: 70vh;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: ${props => props.theme.sizes.base_x4};
`;

const StyledNormalizeList = styled(NormalizeList)`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: var(--mea-bottom-sheet-organizm-gap);
    overflow: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y;

    > * {
        scroll-snap-align: start;

        &:last-child {
            scroll-snap-align: end;
        }
    }
`;

const Footer = styled.div``;
