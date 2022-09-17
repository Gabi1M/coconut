import { createNavigationContainerRef } from '@react-navigation/native';

import { BottomRoutes, StackParamList, StackRoutes } from './types';

export const navigationRef = createNavigationContainerRef<StackParamList>();

export const navigateToFeed = () =>
    navigationRef.navigate(StackRoutes.HOME, {
        screen: BottomRoutes.FEED,
    });
