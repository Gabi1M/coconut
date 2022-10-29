import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { LoadingSpinner, SafeAreaScreen } from '@coconut/generic';
import { MessageCard, useManageInbox } from '@coconut/messages';
import { Message } from '@coconut/models';

const renderItem: ListRenderItem<Message> = ({ item }) => <MessageCard message={item} />;
const keyExtractor = (item: Message) => item.data.name;

const InboxScreen = () => {
    const { messages, onRefresh } = useManageInbox();

    if (!messages) {
        return <LoadingSpinner />;
    }

    return (
        <SafeAreaScreen>
            <FlashList
                renderItem={renderItem}
                estimatedItemSize={250}
                data={messages?.data.children}
                onEndReached={onRefresh}
                onEndReachedThreshold={2}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaScreen>
    );
};

export default InboxScreen;
