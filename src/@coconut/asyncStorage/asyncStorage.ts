import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageKeys } from './types';

class AppAsyncStorage {
    static setValue = async <T>(key: AsyncStorageKeys, value: T) => {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    };

    static getValue = async <T>(key: AsyncStorageKeys) => {
        const value = await AsyncStorage.getItem(key);
        return value ? (JSON.parse(value) as T) : undefined;
    };

    static removeValue = async (key: AsyncStorageKeys) => {
        await AsyncStorage.removeItem(key);
    };
}

export default AppAsyncStorage;
