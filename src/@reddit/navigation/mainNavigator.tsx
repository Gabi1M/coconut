import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRoutes } from './types';
import { HomeScreen, LoginScreen } from '@reddit/screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={MainRoutes.HOME} component={HomeScreen} />
        <Stack.Screen name={MainRoutes.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
);

export default MainNavigator;
