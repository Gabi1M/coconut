import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { Layout, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { ListItem } from '@coconut/generic';
import { SettingsItem, useSettingsItems } from '@coconut/settings';

const renderItem: ListRenderItem<SettingsItem> = ({ item }) => <ListItem {...item} />;

const keyExtractor = (item: SettingsItem) => item.title;

const SettingsScreen = () => {
    const styles = useStyles();
    const settingsItems = useSettingsItems();

    return (
        <Layout style={styles.root}>
            <FlatList
                data={settingsItems}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </Layout>
    );
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        root: {
            flex: 1,
            paddingHorizontal: Dimensions.ternarySpacing,
        },
        title: {
            color: theme['color-basic-100'],
        },
    });
};

export default SettingsScreen;
