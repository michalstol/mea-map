import React from 'react';

import { STORAGE_NAMES } from '../../@types/storage';
import { FirebaseUser } from '../../@types/users';

import { storageFacade } from '@facades/storageFacade';

import { useAuth as useAuthQuery } from '@query/hooks/useAuth';

interface BaseAuthContextProps {
    user: FirebaseUser | null;
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
    const user = useAuthQuery(initialState.user || undefined);

    React.useEffect(() => {
        if (!user.isFetched) return;

        storageFacade.set(STORAGE_NAMES.AUTH, {
            user: user.data || null,
            loggedIn: !!user.data,
        });
    }, [user.isFetched || user.data]);

    return (
        <AuthContext.Provider
            value={{
                ...initialState,
                ...(user.isFetched && {
                    connected: true,
                    user: user.data || null,
                    loggedIn: !!user.data,
                }),
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
