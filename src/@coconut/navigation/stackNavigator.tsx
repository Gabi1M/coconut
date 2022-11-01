import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    DebugScreen,
    HomeScreen,
    ListingScreen,
    LoginScreen,
    LoginWebviewScreen,
    SubredditScreen,
    SubredditsScreen,
} from '@coconut/screens';

import { StackParamList, StackRoutes } from './types';
import { noHeaderOptions } from './utils';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => (
    <Stack.Navigator screenOptions={noHeaderOptions} initialRouteName={StackRoutes.LOGIN}>
        <Stack.Screen name={StackRoutes.HOME} component={HomeScreen} />
        <Stack.Screen name={StackRoutes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={StackRoutes.LOGIN_WEBVIEW} component={LoginWebviewScreen} />
        <Stack.Screen name={StackRoutes.SUBREDDITS} component={SubredditsScreen} />
        <Stack.Screen name={StackRoutes.LISTING} component={ListingScreen} />
        <Stack.Screen name={StackRoutes.DEBUG} component={DebugScreen} />
        <Stack.Screen name={StackRoutes.SUBREDDIT} component={SubredditScreen} />
    </Stack.Navigator>
);

export default StackNavigator;
