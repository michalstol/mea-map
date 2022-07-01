import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { appTheme } from '@styles/Theme';

import { store } from '@redux/store';

import { AuthProvider } from '@hooks/useAuth';
import { MapProvider } from '@hooks/useMap';

import { AppState } from '@temps/AppState';
import { SignIn } from '@temps/SignIn';

import { AddMarker } from '@temps/AddMarker';
import { FetchMarkers } from '@temps/FetchMarkers';
import { ListOfMarkers } from '@temps/ListOfMarkers';

import { FetchCategories } from '@temps/FetchCategories';
import { AddCategory } from '@temps/AddCategory';
import { ListOfCategories } from '@temps/ListOfCategories';
import { Map } from '@temps/Map';

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider theme={appTheme}>
                    <AppState />
                    <SignIn />

                    <MapProvider>
                        <Map />

                        <FetchCategories />
                        <AddCategory />

                        <FetchMarkers />
                        <AddMarker />

                        <ListOfCategories />
                        <ListOfMarkers />
                    </MapProvider>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    );
}

export default App;
