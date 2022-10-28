import React from 'react';
import { StyleSheet } from 'react-native';

import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomNavigation, BottomNavigationTab, Icon, useTheme } from '@ui-kitten/components';

import {
    FeedScreen,
    InboxScreen,
    ProfileScreen,
    SearchScreen,
    SettingsScreen,
} from '@coconut/screens';

import { BottomRoutes, BottomTabParamList } from './types';
import { noHeaderOptions } from './utils';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => (
    <Tab.Navigator
        screenOptions={noHeaderOptions}
        initialRouteName={BottomRoutes.FEED}
        tabBar={(props) => <BottomTabBar {...props} />}
    >
        <Tab.Screen name={BottomRoutes.FEED} component={FeedScreen} />
        <Tab.Screen name={BottomRoutes.INBOX} component={InboxScreen} />
        <Tab.Screen name={BottomRoutes.PROFILE} component={ProfileScreen} />
        <Tab.Screen name={BottomRoutes.SEARCH} component={SearchScreen} />
        <Tab.Screen name={BottomRoutes.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
);

const IconMapping = {
    [BottomRoutes.FEED]: 'list-outline',
    [BottomRoutes.INBOX]: 'email-outline',
    [BottomRoutes.PROFILE]: 'person-outline',
    [BottomRoutes.SEARCH]: 'search-outline',
    [BottomRoutes.SETTINGS]: 'settings-outline',
};

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {
    const styles = useStyles();
    return (
        <BottomNavigation
            style={styles.tabBar}
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            {state.routeNames.map((route, index) => (
                <BottomNavigationTab
                    key={index}
                    title={route}
                    icon={(props) => <Icon name={IconMapping[route as BottomRoutes]} {...props} />}
                />
            ))}
        </BottomNavigation>
    );
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        tabBar: {
            backgroundColor: theme['color-basic-1100'],
        },
    });
};

export default BottomNavigator;
