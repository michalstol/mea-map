import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { auth } from '@configs/firebase';

import { rem } from '@styles/helpers';

import { ROUTES } from '@uTypes/routing';

import { getIconSize } from '@helpers/getIconSize';

import { useAuth } from '@hooks/useAuth';
import { useRoute } from '@hooks/useRoute';

import { ReactComponent as PinIcon } from '@svg/iconic/pin.svg';
import { ReactComponent as GridIcon } from '@svg/iconic/grid.svg';
import { ReactComponent as SettingsIcon } from '@svg/iconic/settings.svg';
import { ReactComponent as LogOutIcon } from '@svg/iconic/log-out.svg';

import { Page } from '@atoms/Page';
import Grid from '@atoms/Grid';
import { NormalizeList } from '@atoms/NormalizeList';
import { MenuLink } from '@molecules/MenuLink';

import { Avatar } from '@molecules/Avatar';

interface Props {
    testId?: string;
}

function MenuPage(props: Props): React.ReactElement {
    const theme = useTheme();
    const { change } = useRoute();
    const { user } = useAuth();

    const iconSize = React.useCallback(() => getIconSize(theme, 'small'), []);

    return (
        <MenuPageContainer data-testid={props.testId}>
            <Container>
                <Avatar
                    src={user!.photoURL || ''}
                    name={user!.displayName || ''}
                    email={user!.email || ''}
                />

                <Navigation>
                    <NavList>
                        <li>
                            <MenuLink
                                href={ROUTES.LOCATIONS}
                                icon={<PinIcon style={iconSize()} />}
                                onClick={change}
                            >
                                My Locations
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink
                                href={ROUTES.CATEGORIES}
                                icon={<GridIcon style={iconSize()} />}
                                onClick={change}
                            >
                                Categories
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink
                                href={ROUTES.SETTINGS}
                                icon={<SettingsIcon style={iconSize()} />}
                                onClick={change}
                            >
                                Settings
                            </MenuLink>
                        </li>
                    </NavList>
                </Navigation>

                <div>
                    <MenuLink<string>
                        href="#"
                        icon={<LogOutIcon style={iconSize()} />}
                        onClick={() => auth.signOut()}
                    >
                        Signout
                    </MenuLink>
                </div>
            </Container>
        </MenuPageContainer>
    );
}

export { MenuPage };

const MenuPageContainer = styled(Page)`
    position: relative;
    padding: ${({ theme }) =>
        `${theme.sizes.base_x10} var(--mea-map-page-side-size) ${theme.sizes.base_x10} 0`};
    color: rgb(${props => props.theme.pallete.white});
    background-color: rgb(${props => props.theme.pallete.primary});
    z-index: 1;
`;

const AnimationContainer = styled(Page)<{ isMenuOpened: boolean }>`
    --mea-menu-children-gap: ${props => props.theme.sizes.base_x2_5};

    transform-origin: center left;
    transition: all
        ${({ theme }) =>
            `${theme.transition.speed.slow} ${theme.transition.easing.slideIn}`};
    z-index: 2;

    ${props =>
        props.isMenuOpened &&
        css`
            transform: translate(
                    calc(100% - ${rem(115)} + var(--mea-menu-children-gap)),
                    0
                )
                scale(0.8);
        `}

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(${props => props.theme.pallete.white}, 0.5);
        transform-origin: center left;
        transition: all
            ${({ theme }) =>
                `${theme.transition.speed.slow} ${theme.transition.easing.slideIn}`};
        z-index: -1;

        ${props =>
            props.isMenuOpened &&
            css`
                border-radius: ${props => props.theme.sizes.base_x3};
                transform: translate(calc(-1 * var(--mea-menu-children-gap)), 0)
                    scale(0.8);
            `}
    }
`;

const ChildrenPage = styled(Page)<{ isMenuOpened: boolean }>`
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToymQOZyGULw8FFGmI4AE5N-UQIm_b0p-0qQ&usqp=CAU');
    background-color: rgb(${props => props.theme.pallete.white});
    transition: all
        ${({ theme }) =>
            `${theme.transition.speed.slow} ${theme.transition.easing.slideIn}`};
    overflow: hidden;

    ${props =>
        props.isMenuOpened &&
        css`
            border-radius: ${props => props.theme.sizes.base_x4};
        `}

    > * {
    }
`;

const Container = styled(Grid.Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--mea-grid-gap);
`;

const Navigation = styled.nav`
    padding-top: ${props => props.theme.sizes.base_x8};
    flex: 1 1 100%;
`;

const NavList = styled(NormalizeList)`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.sizes.base_x3};
`;
