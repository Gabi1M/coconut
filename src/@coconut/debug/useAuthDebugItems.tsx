import React from 'react';

import Clipboard from '@react-native-clipboard/clipboard';

import { AsyncStorage, AsyncStorageKeys } from '@coconut/asyncStorage';
import { AccessToken } from '@coconut/models';

import { DebugItem } from './types';

const useAuthDebugItems = (): DebugItem[] => {
    const [accessToken, setAccessToken] = React.useState<AccessToken>();
    React.useEffect(() => {
        AsyncStorage.getValue(AsyncStorageKeys.ACCESS_TOKEN).then((result) =>
            setAccessToken(result as AccessToken | undefined),
        );
    }, []);

    const addToClipboard = (data: string) => Clipboard.setString(data);

    return React.useMemo((): DebugItem[] => {
        if (!accessToken) {
            return [];
        }

        return [
            {
                name: 'Access token',
                data: accessToken?.access_token || 'None',
                onPress: () => addToClipboard(accessToken.access_token),
            },
            {
                name: 'Refresh token',
                data: accessToken?.refresh_token || 'None',
                onPress: () => addToClipboard(accessToken.refresh_token),
            },
            {
                name: 'Expires in',
                data: accessToken?.expires_in.toString() || 'None',
                onPress: () => addToClipboard(accessToken.expires_in.toString()),
            },
            {
                name: 'Scope',
                data: accessToken?.scope || 'None',
                onPress: () => addToClipboard(accessToken.scope),
            },
            {
                name: 'Token type',
                data: accessToken?.token_type || 'None',
                onPress: () => addToClipboard(accessToken.token_type),
            },
        ];
    }, [accessToken]);
};

export default useAuthDebugItems;
