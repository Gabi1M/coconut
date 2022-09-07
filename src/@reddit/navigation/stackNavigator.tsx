import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, LoginScreen, RegisterScreen } from '@reddit/screens';

import { StackParamList, StackRoutes } from './types';
import { noHeaderOptions } from './utils';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => (
    <Stack.Navigator screenOptions={noHeaderOptions} initialRouteName={StackRoutes.LOGIN}>
        <Stack.Screen name={StackRoutes.HOME} component={HomeScreen} />
        <Stack.Screen name={StackRoutes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={StackRoutes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
);

export default StackNavigator;
