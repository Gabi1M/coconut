import { createNavigationContainerRef } from '@react-navigation/native';

import { BottomRoutes, StackParamList, StackRoutes } from './types';

const authRoutes = [StackRoutes.LOGIN, StackRoutes.LOGIN_WEBVIEW];

export const navigationRef = createNavigationContainerRef<StackParamList>();

export const navigateToFeed = () =>
    navigationRef.navigate(StackRoutes.HOME, {
        screen: BottomRoutes.FEED,
    });

export const navigateToLogin = () => {
    navigationRef.navigate(StackRoutes.LOGIN);
};

export const removeAuthRoutes = () => {
    const rootState = navigationRef.getRootState();
    const newRootState = {
        ...rootState,
        routes: rootState.routes.filter((route) => !authRoutes.includes(route.name as StackRoutes)),
        index:
            rootState.index -
            rootState.routes.filter((route) => authRoutes.includes(route.name as StackRoutes))
                .length,
    };
    navigationRef.resetRoot(newRootState);
};

export const keepOnlyCurrentRoute = () => {
    const rootState = navigationRef.getRootState();
    navigationRef.resetRoot({
        ...rootState,
        routes: [rootState.routes[rootState.routes.length - 1]],
        index: 0,
    });
};
