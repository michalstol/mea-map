import React from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import styled from 'styled-components';

import { auth } from '@configs/firebase';

import { useAuth } from '@hooks/useAuth';

type FieldType = 'email' | 'password';

function SignInForm(): React.ReactElement {
    const { loggedIn } = useAuth();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onChange =
        (type: FieldType) =>
        (event: React.SyntheticEvent<HTMLInputElement>): void => {
            switch (type) {
                case 'email': {
                    setEmail(event.currentTarget.value);
                    break;
                }
                case 'password': {
                    setPassword(event.currentTarget.value);
                    break;
                }
                default: {
                    break;
                }
            }
        };

    const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        event.stopPropagation();

        signInWithEmailAndPassword(auth, email, password).then(() => {
            setPassword('');
            setEmail('');
        });
    };

    return (
        <Wrapper>
            {loggedIn && (
                <button type="button" onClick={() => signOut(auth)}>
                    Sign out
                </button>
            )}
            {!loggedIn && (
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            onChange={onChange('email')}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange('password')}
                        />
                    </fieldset>

                    <button type="submit">Sign In</button>
                </form>
            )}
        </Wrapper>
    );
}

export { SignInForm };

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 14px;
`;
