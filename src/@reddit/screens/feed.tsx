import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Layout, Spinner } from '@ui-kitten/components';

import { ListingCard, useManageFeed } from '@reddit/feed';
import { Select } from '@reddit/generic';
import { Listing, ListingResult, PostSorting } from '@reddit/models';

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.name;
const labelExtractor = (value: PostSorting) => value.toUpperCase();

const FeedScreen = () => {
    const { feed, postSorting, postSortingOptions, onRefresh, setPostSorting } = useManageFeed();
    return (
        <Layout style={styles.root}>
            <Select
                data={postSortingOptions}
                value={postSorting}
                onChange={setPostSorting}
                labelExtractor={labelExtractor}
            />
            <Content feed={feed} onRefresh={onRefresh} />
        </Layout>
    );
};

const Content = ({
    feed,
    onRefresh,
}: {
    feed: ListingResult | undefined;
    onRefresh: () => void;
}) => {
    if (!feed) {
        return (
            <View style={styles.spinnerContainer}>
                <Spinner />
            </View>
        );
    }

    return (
        <FlashList
            renderItem={renderItem}
            estimatedItemSize={310}
            data={feed?.data.children}
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

export default FeedScreen;
