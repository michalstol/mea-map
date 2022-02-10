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

import { SignInForm } from '@ui/Organisms/SignInForm';

import { HomePage } from '@pages/HomePage';
import { SettingsPage } from '@pages/SettingsPage';
import { MapBox } from '@ui/Organisms/MapBox';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AuthProvider>
                    <GlobalStyles />
                    <SignInForm />

                    {FEATURE_FLAGS.MAPBOX_ENABLED && <MapBox />}

                    <BrowserRouter>
                        <Routes>
                            <Route
                                path={ROUTES.HOME_PAGE}
                                element={<HomePage />}
                            />
                            <Route
                                path={ROUTES.SETTINGS}
                                element={<SettingsPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
