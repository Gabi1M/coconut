import React from 'react';
import { useDispatch } from 'react-redux';

import { useNavigateToDebug } from '@coconut/navigation';
import { createLogoutAction } from '@coconut/profile';

export interface SettingsItem {
    title: string;
    description?: string;
    icon?: string;
    onPress: () => void;
}

const useSettingsItems = (): SettingsItem[] => {
    const dispatch = useDispatch();
    const navigateToDebug = useNavigateToDebug();

    const onLogout = () => {
        dispatch(createLogoutAction());
    };

    return [
        {
            title: 'Logout',
            description: 'Logout of your account',
            icon: 'person',
            onPress: onLogout,
        },
        {
            title: 'Debug',
            description: 'View debug informations',
            icon: 'alert-circle-outline',
            onPress: navigateToDebug,
        },
    ];
};

export default useSettingsItems;
