import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '@styles/Theme';
import { GlobalStyle } from '@styles/GlobalStyle';
import '@styles/Typography/typography.css';

import { queryClient } from '@query/client';
import { AuthProvider } from '@hooks/useAuth';
import { AppState } from '@temps/AppState';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />

                <AuthProvider>
                    <AppState />

                    <div>welcome</div>
                </AuthProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
