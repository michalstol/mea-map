import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    leftColumn: React.ReactNode;
    rightColumn: React.ReactNode;
}

function DrawerHeading(props: Props): React.ReactElement {
    return (
        <DrawerHeadingContainer className={props.className}>
            <DrawerHeadingContent>{props.leftColumn}</DrawerHeadingContent>

            {!!props.rightColumn && (
                <DrawerHeadingButton>{props.rightColumn}</DrawerHeadingButton>
            )}
        </DrawerHeadingContainer>
    );
}

export { DrawerHeading };

const DrawerHeadingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.margins.base_x2};
`;

const DrawerHeadingContent = styled.div`
    flex: 1 1 100%;
`;

const DrawerHeadingButton = styled.div`
    flex: 0 0 auto;
`;
