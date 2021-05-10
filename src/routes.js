import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { isSignedIn } from './services/auth';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {
    return (
        <NavigationContainer>
            {!isSignedIn ? (
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="home" component={Home} />
                </AppStack.Navigator>
            ) : (
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="login" component={Login} />
                </AppStack.Navigator>
            )
            }
        </NavigationContainer>
    );
}
