import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { DebugItem, useAuthDebugItems } from '@coconut/debug';
import { ListItem, SafeAreaScreen } from '@coconut/generic';

const renderItem: ListRenderItem<DebugItem> = ({ item }) => (
    <ListItem title={item.name} description={item.data} onPress={item.onPress} />
);
const keyExtractor = (item: DebugItem) => item.name;

const DebugScreen = () => {
    const authDebugItems = useAuthDebugItems();

    const data: DebugItem[] = [...authDebugItems];

    return (
        <SafeAreaScreen>
            <FlashList
                data={data}
                renderItem={renderItem}
                estimatedItemSize={50}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaScreen>
    );
};

export default DebugScreen;
