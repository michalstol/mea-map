import { useAuthUser } from '@react-query-firebase/auth';

import { auth } from '@configs/firebase';

import { FirebaseUser } from '@uTypes/users';

export const useAuth = (initialData?: FirebaseUser) =>
    useAuthUser('user', auth, {
        initialData,
    });
