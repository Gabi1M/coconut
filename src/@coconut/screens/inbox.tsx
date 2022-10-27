import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Layout, Spinner } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { MessageCard, useManageInbox } from '@coconut/messages';
import { Message } from '@coconut/models';

const renderItem: ListRenderItem<Message> = ({ item }) => <MessageCard message={item} />;
const keyExtractor = (item: Message) => item.data.name;

const InboxScreen = () => {
    const { messages, onRefresh } = useManageInbox();
    return (
        <Layout style={styles.root}>
            {messages ? (
                <FlashList
                    renderItem={renderItem}
                    estimatedItemSize={250}
                    data={messages?.data.children}
                    onEndReached={onRefresh}
                    onEndReachedThreshold={2}
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.spinnerContainer}>
                    <Spinner />
                </View>
            )}
        </Layout>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: Dimensions.ternarySpacing,
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InboxScreen;
