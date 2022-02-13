import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@configs/firebase';

import { UserDTO } from '@typings/user';

import { STORAGE_NAMES, storageFacade } from '@facades/storageFacade';

interface BaseAuthContextProps {
    user: UserDTO;
    loggedIn: boolean;
}

interface AuthContextProps extends BaseAuthContextProps {
    connected: boolean;
}

const initialState: AuthContextProps = {
    user: null,
    connected: false,
    loggedIn: false,
    ...storageFacade.get<BaseAuthContextProps>(STORAGE_NAMES.AUTH),
};

const AuthContext = React.createContext<AuthContextProps>(initialState);

interface AuthProviderProps {
    children: React.ReactNode;
}

function AuthProvider(props: AuthProviderProps): React.ReactElement {
    const [user, setUser] = React.useState<UserDTO>(initialState.user);
    const [connected, setConnected] = React.useState(false);

    React.useEffect(() => {
        const subscription = onAuthStateChanged(auth, newUser => {
            setUser(newUser);

            if (!connected) {
                setConnected(true);
            }
        });

        return subscription;
    }, [connected]);

    React.useEffect(() => {
        storageFacade.set(STORAGE_NAMES.AUTH, {
            user,
            loggedIn: !!user,
        });
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user: user,
                connected: true,
                loggedIn: !!user,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextProps {
    const context = React.useContext(AuthContext);

    return { ...context };
}

export { AuthProvider, useAuth };
