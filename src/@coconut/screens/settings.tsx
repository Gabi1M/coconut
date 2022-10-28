import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { ListItem, Screen } from '@coconut/generic';
import { SettingsItem, useSettingsItems } from '@coconut/settings';

const renderItem: ListRenderItem<SettingsItem> = ({ item }) => <ListItem {...item} />;

const keyExtractor = (item: SettingsItem) => item.title;

const SettingsScreen = () => {
    const settingsItems = useSettingsItems();

    return (
        <Screen>
            <FlatList
                data={settingsItems}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    );
};

export default SettingsScreen;
