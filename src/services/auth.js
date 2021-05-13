import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';

export const TOKEN_KEY = "@neoXFatec:token";

export const onSignIn = (token) => AsyncStorage.setItem(TOKEN_KEY, token);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null);
}

export const getToken = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token) ? `Bearer ${token}` : null
}
export const AuthContext = createContext();