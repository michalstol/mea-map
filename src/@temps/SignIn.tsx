import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@configs/firebase';

import { useAuth } from '@hooks/useAuth';

function SignIn(): React.ReactElement {
    const { connected, loggedIn } = useAuth();

    return (
        <div>
            <button
                disabled={connected && loggedIn}
                onClick={() =>
                    signInWithEmailAndPassword(
                        auth,
                        'test@test.test',
                        'testtest'
                    )
                }
            >
                Sign in
            </button>
        </div>
    );
}

export { SignIn };
