import React from 'react';

import { AsyncStorage, AsyncStorageKeys } from '@reddit/asyncStorage';
import { useNavigateToLogin } from '@reddit/navigation';

export interface SettingsItem {
    title: string;
    description?: string;
    icon?: string;
    onPress: () => void;
}

const useSettingsItems = (): SettingsItem[] => {
    const navigateToLogin = useNavigateToLogin();

    return [
        {
            title: 'Logout',
            description: 'Logout of your account',
            icon: 'person',
            onPress: async () => {
                await AsyncStorage.removeValue(AsyncStorageKeys.ACCESS_TOKEN);
                navigateToLogin();
            },
        },
    ];
};

export default useSettingsItems;
