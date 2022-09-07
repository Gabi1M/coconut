import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRoutes, RootStackParamList } from './types';
import { HomeScreen, LoginScreen, RegisterScreen } from '@reddit/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const noHeaderOptions = {
    headerShown: false,
};

const MainNavigator = () => (
    <Stack.Navigator initialRouteName={MainRoutes.LOGIN}>
        <Stack.Screen name={MainRoutes.HOME} component={HomeScreen} options={noHeaderOptions} />
        <Stack.Screen name={MainRoutes.LOGIN} component={LoginScreen} options={noHeaderOptions} />
        <Stack.Screen
            name={MainRoutes.REGISTER}
            component={RegisterScreen}
            options={noHeaderOptions}
        />
    </Stack.Navigator>
);

export default MainNavigator;
