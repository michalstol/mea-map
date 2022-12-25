import React from 'react';
import styled, { css } from 'styled-components';

import { ROUTES } from '@uTypes/routing';

import { useWindow } from '@hooks/useWindow';
import { useRoute } from '@hooks/useRoute';
import { useAuth } from '@hooks/useAuth';

import { Page } from '@atoms/Page';

import { MenuPage } from '@pages/MenuPage';
import { MapPage } from '@pages/MapPage';

function Router() {
    const { height } = useWindow();
    const { user } = useAuth();

    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    const isUserLoggedIn = !!user;

    const toggleMenu = React.useCallback(() => {
        if (!isUserLoggedIn) return;

        setIsMenuOpened(state => !state);
    }, [isUserLoggedIn]);

    // hide menu when user logged out
    React.useEffect(() => {
        if (isUserLoggedIn) return;
        if (!isMenuOpened) return;

        setIsMenuOpened(false);
    }, [isUserLoggedIn, isMenuOpened]);

    return (
        <Container height={height}>
            {isUserLoggedIn && (
                <React.Fragment>
                    <Route path={ROUTES.SETTINGS}>
                        <div>SETTINGS</div>
                    </Route>
                    <Route path={ROUTES.LOCATIONS}>
                        <div>LOCATIONS</div>
                    </Route>
                    <Route path={ROUTES.CATEGORIES}>
                        <div>CATEGORIES</div>
                    </Route>

                    <MenuPage />
                </React.Fragment>
            )}

            <MapPageTransform isOnStage={!isMenuOpened}>
                <MapOverlay isOnStage={!isMenuOpened} onClick={toggleMenu} />
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
    background-color: rgb(${props => props.theme.pallete.primary});
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

const MapOverlay = styled.aside<{ isOnStage: boolean }>`
    position: absolute;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    background-color: transparent;
    pointer-events: none;

    ${props =>
        !props.isOnStage &&
        css`
            pointer-events: all;
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
