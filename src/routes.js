import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as SplashScreen from 'expo-splash-screen';

import { View, Text } from 'react-native';

import { isSignedIn } from './services/auth';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {

    const [isLoading, setIsLoading] = useState(true);

    const [isSigned, setIsSigned] = useState(false);

    useEffect(() => {

        async function checkUser() {
            await SplashScreen.preventAutoHideAsync();
            const result = await isSignedIn();
            setIsSigned(result);
            setIsLoading(false);
            await SplashScreen.hideAsync();
        }
        checkUser();

    }, [isSigned]);


    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {isSigned ? (
                    <AppStack.Screen name="home" component={Home} initialParams={{ setIsSigned }} />
                ) : (
                    <AppStack.Screen name="login" component={Login} initialParams={{ setIsSigned }} />
                )
                }
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
