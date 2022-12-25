import React from 'react';
import styled, { useTheme } from 'styled-components';

import { getIconSize } from '@helpers/getIconSize';

import { ReactComponent as GoogleIcon } from '@svg/other/google.svg';

import { Button } from '@atoms/Button';

interface Props {
    onClick: () => void;
}

function SignInViaGoogle(props: Props): React.ReactElement {
    const theme = useTheme();

    return (
        <Button version="primary" onClick={props.onClick}>
            <Wrapper>
                <GoogleIcon style={getIconSize(theme, 'small')} />
                <Content>Continue with Google</Content>
            </Wrapper>
        </Button>
    );
}

export { SignInViaGoogle };

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.sizes.base};
`;

const Content = styled.span`
    transform: translate(0, 1px);
`;
