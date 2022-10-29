import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum StackRoutes {
    HOME = 'Home',
    LOGIN = 'Login',
    LOGIN_WEBVIEW = 'Login_Webview',
    SUBREDDITS = 'Subreddits',
    LISTING = 'Listing',
    DEBUG = 'Debug',
}

export enum BottomRoutes {
    FEED = 'Feed',
    INBOX = 'Inbox',
    PROFILE = 'Profile',
    SEARCH = 'Search',
    SETTINGS = 'Settings',
}

export type StackParamList = {
    [StackRoutes.HOME]: NavigatorScreenParams<BottomTabParamList>;
    [StackRoutes.LOGIN]: undefined;
    [StackRoutes.LOGIN_WEBVIEW]: undefined;
    [StackRoutes.SUBREDDITS]: undefined;
    [StackRoutes.LISTING]: undefined;
    [StackRoutes.DEBUG]: undefined;
};

export type BottomTabParamList = {
    [BottomRoutes.FEED]: undefined;
    [BottomRoutes.INBOX]: undefined;
    [BottomRoutes.PROFILE]: undefined;
    [BottomRoutes.SEARCH]: undefined;
    [BottomRoutes.SETTINGS]: undefined;
};

export type StackScreenProps = {
    [StackRoutes.HOME]: NativeStackScreenProps<StackParamList, StackRoutes.HOME>;
    [StackRoutes.LOGIN]: NativeStackScreenProps<StackParamList, StackRoutes.LOGIN>;
    [StackRoutes.LOGIN_WEBVIEW]: NativeStackScreenProps<StackParamList, StackRoutes.LOGIN_WEBVIEW>;
    [StackRoutes.SUBREDDITS]: NativeStackScreenProps<StackParamList, StackRoutes.SUBREDDITS>;
    [StackRoutes.LISTING]: NativeStackScreenProps<StackParamList, StackRoutes.LISTING>;
    [StackRoutes.DEBUG]: NativeStackScreenProps<StackParamList, StackRoutes.DEBUG>;
};

export type BottomScreenProps = {
    [BottomRoutes.FEED]: CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, BottomRoutes.FEED>,
        StackScreenProps[StackRoutes.HOME]
    >;
    [BottomRoutes.INBOX]: CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, BottomRoutes.INBOX>,
        StackScreenProps[StackRoutes.HOME]
    >;
    [BottomRoutes.PROFILE]: CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, BottomRoutes.PROFILE>,
        StackScreenProps[StackRoutes.HOME]
    >;
    [BottomRoutes.SEARCH]: CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, BottomRoutes.SEARCH>,
        StackScreenProps[StackRoutes.HOME]
    >;
    [BottomRoutes.SETTINGS]: CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, BottomRoutes.SETTINGS>,
        StackScreenProps[StackRoutes.HOME]
    >;
};
