import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    FeedScreen,
    InboxScreen,
    ProfileScreen,
    SearchScreen,
    SettingsScreen,
} from '@reddit/screens';
import React from 'react';
import { BottomRoutes, BottomTabParamList } from './types';
import { noHeaderOptions } from './utils';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => (
    <Tab.Navigator
        screenOptions={noHeaderOptions}
        initialRouteName={BottomRoutes.FEED}
        tabBar={BottomTabBar}
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

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
    <BottomNavigation
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

export default BottomNavigator;
