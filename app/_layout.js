import { Slot } from 'expo-router';
import { AuthProvider } from '../contexts';

export default function Index() {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}
