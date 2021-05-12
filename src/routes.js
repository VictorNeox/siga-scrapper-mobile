import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';

import Login from './pages/Login/';
import Home from './pages/Home/';

import { TOKEN_KEY, AuthContext } from './services/auth';

const Stack = createStackNavigator();

export const Routes = () => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            await SplashScreen.preventAutoHideAsync();
            let userToken;

            try {
                userToken = await AsyncStorage.getItem(TOKEN_KEY);
            } catch (e) {
            }

            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
            await SplashScreen.hideAsync();
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (token) => {
                // store token in Async storage
                dispatch({ type: 'SIGN_IN', token });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
        }),
        []
    );

    if (state.isLoading) {
        return null;
    }

    return (
        <NavigationContainer>

            <AuthContext.Provider value={authContext}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {state.userToken == null ? (
                        <Stack.Screen name="Login" component={Login} />
                    ) : (
                        <Stack.Screen name="Home" component={Home} />
                    )}
                </Stack.Navigator>
            </AuthContext.Provider>
        </NavigationContainer>
    );
}