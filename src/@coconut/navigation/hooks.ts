import { NavigationProp, useNavigation as libUseNavigation } from '@react-navigation/native';

import { BottomRoutes, StackParamList, StackRoutes } from './types';

export const useNavigation = () => libUseNavigation<NavigationProp<StackParamList>>();

export const useNavigateToLogin = () => {
    const navigation = useNavigation();
    return () => navigation.navigate(StackRoutes.LOGIN);
};

export const useNavigateToLoginWebview = () => {
    const navigation = useNavigation();
    return () => navigation.navigate(StackRoutes.LOGIN_WEBVIEW);
};

export const useNavigateToSubreddits = () => {
    const navigation = useNavigation();
    return () => navigation.navigate(StackRoutes.SUBREDDITS);
};

export const useNavigateToComments = () => {
    const navigation = useNavigation();
    return () => navigation.navigate(StackRoutes.LISTING);
};

export const useNavigateToFeed = () => {
    const navigation = useNavigation();
    return () =>
        navigation.navigate(StackRoutes.HOME, {
            screen: BottomRoutes.FEED,
        });
};

export const useNavigateToInbox = () => {
    const navigation = useNavigation();
    return () =>
        navigation.navigate(StackRoutes.HOME, {
            screen: BottomRoutes.INBOX,
        });
};

export const useNavigateToProfile = () => {
    const navigation = useNavigation();
    return () =>
        navigation.navigate(StackRoutes.HOME, {
            screen: BottomRoutes.PROFILE,
        });
};

export const useNavigateToSearch = () => {
    const navigation = useNavigation();
    return () =>
        navigation.navigate(StackRoutes.HOME, {
            screen: BottomRoutes.SEARCH,
        });
};

export const useNavigateToSettings = () => {
    const navigation = useNavigation();
    return () =>
        navigation.navigate(StackRoutes.HOME, {
            screen: BottomRoutes.SETTINGS,
        });
};
