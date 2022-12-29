import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { ReactComponent as NavigationIcon } from '@svg/iconic/send.svg';

import Grid from '@atoms/Grid';

import { getIconSize } from '@helpers/getIconSize';

interface Props {}

function Navigate(props: Props): React.ReactElement {
    const theme = useTheme();
    return (
        <Grid.Container>
            <NavButton isActive={false}>
                <NavigationIcon style={getIconSize(theme, 32)} />
            </NavButton>
        </Grid.Container>
    );
}

export { Navigate };

const NavButton = styled.button<{ isActive: boolean }>`
    --mea-nav-button-size: ${props => props.theme.sizes.base_x6};

    padding: 0;
    width: var(--mea-nav-button-size);
    height: var(--mea-nav-button-size);
    color: currentColor;
    border: none;
    border-radius: 100%;
    background-color: rgb(${props => props.theme.pallete.white});
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
        props.isActive &&
        css`
            color: rgb(${props => props.theme.pallete.primary});
        `}
`;
