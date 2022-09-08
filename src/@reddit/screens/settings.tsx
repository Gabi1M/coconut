import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { Layout, Text } from '@ui-kitten/components';

import { ListItem } from '@reddit/generic';
import { SettingsItem, useSettingsItems } from '@reddit/settings';

const renderItem: ListRenderItem<SettingsItem> = ({ item }) => <ListItem {...item} />;

const keyExtractor = (item: SettingsItem) => item.title;

const SettingsScreen = () => {
    const settingsItems = useSettingsItems();

    return (
        <Layout style={styles.root}>
            <Text category='h2'>Settings</Text>
            <FlatList
                data={settingsItems}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 10,
    },
});

export default SettingsScreen;
