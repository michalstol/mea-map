import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const DrawerHeader = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <DrawerHeaderContainer ref={ref} className={props.className}>
            {props.children}
        </DrawerHeaderContainer>
    );
});

DrawerHeader.displayName = 'DrawerHeader';

export { DrawerHeader };

const DrawerHeaderContainer = styled.div`
    padding: ${props => props.theme.margins.base_x5} 0
        ${props => props.theme.margins.base_x3};
`;
