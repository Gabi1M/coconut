import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Layout, Spinner } from '@ui-kitten/components';

import { MessageCard, useManageInbox } from '@coconut/messages';
import { Message, Thing } from '@coconut/models';

const renderItem: ListRenderItem<Message> = ({ item }) => <MessageCard message={item} />;
const keyExtractor = (item: Message) => item.data.name;

const InboxScreen = () => {
    const { messages, onRefresh } = useManageInbox();
    return (
        <Layout style={styles.root}>
            <Content messages={messages} onRefresh={onRefresh} />
        </Layout>
    );
};

const Content = ({
    messages,
    onRefresh,
}: {
    messages: Thing<Message> | undefined;
    onRefresh: () => void;
}) => {
    if (!messages) {
        return (
            <View style={styles.spinnerContainer}>
                <Spinner />
            </View>
        );
    }

    return (
        <FlashList
            renderItem={renderItem}
            estimatedItemSize={250}
            data={messages?.data.children}
            onEndReached={onRefresh}
            onEndReachedThreshold={2}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 10,
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InboxScreen;
