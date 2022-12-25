import React from 'react';
import styled, { css } from 'styled-components';

import { ROUTES } from '@uTypes/routing';

import { useWindow } from '@hooks/useWindow';
import { useRoute } from '@hooks/useRoute';
import { useAuth } from '@hooks/useAuth';

import { Page } from '@atoms/Page';

import { MenuPage } from '@pages/MenuPage';
import { MapPage } from '@pages/MapPage';

// every page must be mounted after initialized app
function Router() {
    const { height } = useWindow();
    const { user } = useAuth();

    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    const isUserLoggedIn = !!user;
    const toggleMenu = React.useCallback(() => {
        if (!isUserLoggedIn) return;

        setIsMenuOpened(state => !state);
    }, [isUserLoggedIn]);

    return (
        // Main page must have viewport size
        <Container height={height}>
            {/* User pages rotates - z-index 3 */}
            {/* These pages are depend from current route */}
            <Route path={ROUTES.SETTINGS}>
                <div>SETTINGS</div>
            </Route>
            <Route path={ROUTES.LOCATIONS}>
                <div>LOCATIONS</div>
            </Route>
            <Route path={ROUTES.CATEGORIES}>
                <div>CATEGORIES</div>
            </Route>

            {/* Page but it always under - z-index 1 */}
            <MenuPage />

            {/* App page "/" - z-index 2 */}
            <MapPageTransform isOnStage={!isMenuOpened}>
                <MapPage onShowMenu={toggleMenu} />
            </MapPageTransform>
            <MapPageBackground isOnStage={!isMenuOpened} />
        </Container>
    );
}

interface RouteProps {
    path: ROUTES;
    children: React.ReactElement;
}

function Route(props: RouteProps): React.ReactElement {
    const { path } = useRoute();

    return <RoutePage isOnStage={props.path === path}></RoutePage>;
}

export default Router;

const Container = styled(Page)<{ height: number }>`
    height: ${props => props.height}px;
    overflow: hidden;
`;

const RoutePage = styled(Page)<{ isOnStage: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(${props => props.theme.pallete.white});
    transform-origin: center left;
    transition: transform var(--mea-page-transition),
        border-radius var(--mea-page-transition);
    scroll-behavior: smooth;
    z-index: 4;

    ${props =>
        !props.isOnStage &&
        css`
            border-radius: var(--mea-page-border-radius);
            transform: translate(-101%, 0) scale(var(--mea-page-scale));
        `}
`;

const MapPageTransform = styled(Page)<{ isOnStage: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(${props => props.theme.pallete.white});
    transform-origin: center left;
    transition: transform var(--mea-page-transition),
        border-radius var(--mea-page-transition);
    scroll-behavior: smooth;
    z-index: 3;

    ${props =>
        !props.isOnStage &&
        css`
            border-radius: var(--mea-page-border-radius);
            transform: translate(
                    calc(
                        100% - var(--mea-map-page-side-size) +
                            ${props => props.theme.sizes.base_x2_5}
                    ),
                    0
                )
                scale(var(--mea-page-scale));
        `}
`;

const MapPageBackground = styled.aside<{ isOnStage: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(${props => props.theme.pallete.white}, 0.5);
    transform-origin: center left;
    transition: transform var(--mea-page-transition),
        border-radius var(--mea-page-transition);
    z-index: 2;

    ${props =>
        !props.isOnStage &&
        css`
            border-radius: ${props => props.theme.sizes.base_x3};
            transform: translate(calc(100% - var(--mea-map-page-side-size)), 0)
                scale(calc(var(--mea-page-scale) - 0.05));
        `}
`;
