import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '@styles/Theme';
import { GlobalStyle } from '@styles/GlobalStyle';
import '@styles/Typography/typography.css';

import { queryClient } from '@query/client';

import { AuthProvider } from '@hooks/useAuth';
import { RouteProvider } from '@hooks/useRoute';
import { WindowProvider } from '@hooks/useWindow';

import Router from '@pages/Router/Router';

import { AppState } from '@temps/AppState';

function App() {
    return (
        <WindowProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />

                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />

                    <AuthProvider>
                        <RouteProvider>
                            <AppState />

                            <Router />
                        </RouteProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </WindowProvider>
    );
}

export default App;
