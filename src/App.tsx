import { AuthProvider } from '@hooks/useAuth';

function App() {
    return (
        <AuthProvider>
            <div>App</div>
        </AuthProvider>
    );
}

export default App;
