import { Provider } from 'react-redux';

import { store } from '@redux/store';

import { AuthProvider } from '@hooks/useAuth';

import { AddMarker } from '@temps/AddMarker';
import { AppState } from '@temps/AppState';
import { FetchMarkers } from '@temps/FetchMarkers';
import { SignIn } from '@temps/SignIn';
import { ListOfMarkers } from '@temps/ListOfMarkers';

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <AppState />
                <SignIn />
                <FetchMarkers />
                <AddMarker />
                <ListOfMarkers />
            </AuthProvider>
        </Provider>
    );
}

export default App;
