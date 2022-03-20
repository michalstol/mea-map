import React from 'react';
import styled from 'styled-components';

import { rem } from '@helpers/rem';
import { hexToRgb } from '@helpers/hexToRgb';

interface Props {
    className?: string;
    headerHeight: number | undefined;
    children: React.ReactNode;
}

function Drawer(props: Props): React.ReactElement {
    return (
        <DrawerContainer className={props.className} isMinimise>
            <DrawerBar onClick={() => console.log('click')} />

            <div>{props.children}</div>
        </DrawerContainer>
    );
}

export { Drawer };

const DrawerContainer = styled.div<{
    isMinimise: boolean;
}>`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    padding: 0 ${props => props.theme.margins.base_x5}
        ${props => props.theme.margins.base_x5};
    background-color: ${props => props.theme.colors.white};
    transform: translate3d(0px, 35vh, 0px);
    filter: drop-shadow(
        0px 5px 10px rgba(${props => hexToRgb(props.theme.colors.black)}, 0.15)
    );
    z-index: ${props => props.theme.zIndexes.modal};
`;

const DrawerBar = styled.div`
    position: absolute;
    top: calc(${props => props.theme.margins.base_x5} / 2);
    left: 50%;
    width: 33%;
    height: ${rem(20)};
    transform: translate(-50%, -50%);

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: ${rem(3)};
        border-radius: ${rem(2)};
        background-color: ${props => props.theme.colors.lightGray};
        transform: translateY(-50%);
    }
`;
