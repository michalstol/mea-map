import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from '@configs/routes';

import { store } from '@redux/store';

import { GlobalStyles } from '@styles/GlobalStyles';

import { AuthProvider } from '@hooks/useAuth';

import { SignInForm } from '@ui/Organisms/SignInForm';

import { HomePage } from '@pages/HomePage';
import { SettingsPage } from '@pages/SettingsPage';
import { MapBox } from '@ui/Organisms/MapBox';

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <GlobalStyles />
                <SignInForm />
                <MapBox />

                <BrowserRouter>
                    <Routes>
                        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
                        <Route
                            path={ROUTES.SETTINGS}
                            element={<SettingsPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    );
}

export default App;
