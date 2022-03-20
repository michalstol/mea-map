import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ROUTES } from '@configs/routes';
import { FEATURE_FLAGS } from '@configs/featureFlags';

import { store } from '@redux/store';

import { theme } from '@styles/Theme';
import { GlobalStyles } from '@styles/GlobalStyles';

import { AuthProvider } from '@hooks/useAuth';

import { HomePage } from '@pages/HomePage';
import { SettingsPage } from '@pages/SettingsPage';

import { MapBox } from '@ui/Organisms/MapBox';

import { TempNav } from '@temps/TempNav';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AuthProvider>
                    <GlobalStyles />
                    {/* <SignInForm /> */}

                    {/* <HomePage> */}
                    {/* <Menu /> */}

                    {FEATURE_FLAGS.MAPBOX_ENABLED && <MapBox />}
                    {/* {FEATURE_FLAGS.MAPBOX_ENABLED && <Markers />} */}
                    {/* {FEATURE_FLAGS.MAPBOX_ENABLED && <MapNavigation />} */}
                    {/* </HomePage> */}

                    <BrowserRouter>
                        {/* TEMPS */}
                        <TempNav />
                        {/* END TEMPS */}

                        <HomePage />

                        <Routes>
                            <Route
                                path={ROUTES.SETTINGS}
                                element={<SettingsPage />}
                            />

                            {/* HANDLE ISSUE WITH MATCHING LOCATIONS / ROUTES */}
                            <Route
                                path={ROUTES.HOME_PAGE}
                                element={<React.Fragment />}
                            >
                                <Route index element={<React.Fragment />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
