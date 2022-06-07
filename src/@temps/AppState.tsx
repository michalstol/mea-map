import React from 'react';

import { useAuth } from '@hooks/useAuth';

function AppState(): React.ReactElement {
    const { user, loggedIn, connected } = useAuth();

    return (
        <div>
            <div>
                <strong>connected:</strong> {connected ? 1 : 0}
            </div>
            <div>
                <strong>loggedIn:</strong> {loggedIn ? 1 : 0}
            </div>
            <div>
                <strong>user:</strong> {user ? user.displayName : 'null'}
            </div>
        </div>
    );
}

export { AppState };
