import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/Theme';
import { GlobalStyle } from '@styles/GlobalStyle';
import '@styles/Typography/typography.css';

import { store } from '@redux/store';

import { AuthProvider } from '@hooks/useAuth';
import { MapProvider } from '@hooks/useMap';
import { ControlButtonProvider } from '@hooks/useControlButton';

import { AppState } from '@temps/AppState';
import { SignIn } from '@temps/SignIn';

import { AddMarker } from '@temps/AddMarker';
import { FetchMarkers } from '@temps/FetchMarkers';
import { ListOfMarkers } from '@temps/ListOfMarkers';

import { FetchCategories } from '@temps/FetchCategories';
import { AddCategory } from '@temps/AddCategory';
import { ListOfCategories } from '@temps/ListOfCategories';
import { Map } from '@temps/Map';
import { SearchPlace } from '@temps/SearchPlace';

import { ControlButton } from '@features/ControlButton';
import Search from '@features/Search';

import Grid from '@atoms/Grid';

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ControlButtonProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />

                        <AppState />
                        <SignIn />

                        <Grid.Container>
                            <Grid.Row>
                                <Grid.Column size="min">
                                    <ControlButton />
                                </Grid.Column>

                                <Grid.Column size="max">
                                    <Search.Field />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Container>

                        <Search.Results />

                        {/* <MapProvider>
                        <SearchPlace />
                        <Map />

                        <FetchCategories />
                        <AddCategory />

                        <FetchMarkers />
                        <AddMarker />

                        <ListOfCategories />
                        <ListOfMarkers />
                    </MapProvider> */}
                    </ThemeProvider>
                </ControlButtonProvider>
            </AuthProvider>
        </Provider>
    );
}

export default App;
