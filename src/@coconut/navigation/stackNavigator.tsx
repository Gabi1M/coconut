import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    DebugScreen,
    HomeScreen,
    ListingScreen,
    LoginScreen,
    LoginWebviewScreen,
    SubredditsScreen,
} from '@coconut/screens';

import { StackParamList, StackRoutes } from './types';
import { noHeaderOptions, withNavigationHeaderOptions } from './utils';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => (
    <Stack.Navigator screenOptions={noHeaderOptions} initialRouteName={StackRoutes.LOGIN}>
        <Stack.Screen name={StackRoutes.HOME} component={HomeScreen} />
        <Stack.Screen name={StackRoutes.LOGIN} component={LoginScreen} />
        <Stack.Screen
            name={StackRoutes.LOGIN_WEBVIEW}
            component={LoginWebviewScreen}
            options={withNavigationHeaderOptions}
        />
        <Stack.Screen name={StackRoutes.SUBREDDITS} component={SubredditsScreen} />
        <Stack.Screen
            name={StackRoutes.LISTING}
            component={ListingScreen}
            options={withNavigationHeaderOptions}
        />
        <Stack.Screen
            name={StackRoutes.DEBUG}
            component={DebugScreen}
            options={withNavigationHeaderOptions}
        />
    </Stack.Navigator>
);

export default StackNavigator;
