import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useAuthSignInWithRedirect } from '@react-query-firebase/auth';

import { auth } from '@configs/firebase';

import { SignInViaGoogle } from '@atoms/SignInViaGoogle';

function GoogleAuth(): React.ReactElement {
    const mutation = useAuthSignInWithRedirect(auth);

    const onSignIn = () => {
        mutation.mutate({
            provider: new GoogleAuthProvider(),
        });
    };

    return <SignInViaGoogle onClick={onSignIn} />;
}

export { GoogleAuth };
