import React from 'react';
import { useDispatch } from 'react-redux';

import { createLogoutAction } from '@coconut/profile';

export interface SettingsItem {
    title: string;
    description?: string;
    icon?: string;
    onPress: () => void;
}

const useSettingsItems = (): SettingsItem[] => {
    const dispatch = useDispatch();

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
    ];
};

export default useSettingsItems;
