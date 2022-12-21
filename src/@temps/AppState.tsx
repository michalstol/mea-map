import React from 'react';
import styled from 'styled-components';

import { useAuth } from '@hooks/useAuth';

function AppState(): React.ReactElement {
    const { user, loggedIn, connected } = useAuth();

    return (
        <Container>
            <div>
                <strong>connected:</strong> {connected ? 1 : 0}
            </div>
            <div>
                <strong>loggedIn:</strong> {loggedIn ? 1 : 0}
            </div>
            <div>
                <strong>userUid:</strong> {user ? user.uid : 'null'}
            </div>
        </Container>
    );
}

export { AppState };

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.3;
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 20px;

    &:hover {
        opacity: 1;
    }
`;
