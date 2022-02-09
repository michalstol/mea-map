import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@configs/firebase';

import { UserDTO } from '@typings/user';

const AuthContext = React.createContext<UserDTO>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

function AuthProvider(props: AuthProviderProps): React.ReactElement {
    const [user, setUser] = React.useState<UserDTO>(auth?.currentUser || null);

    React.useEffect(() => {
        const subscription = onAuthStateChanged(auth, newUser => {
            setUser(newUser);
        });

        return subscription;
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    );
}

function useAuth(): UserDTO {
    const context = React.useContext(AuthContext);

    if (!context) return null;

    return { ...context };
}

export { AuthProvider, useAuth };
