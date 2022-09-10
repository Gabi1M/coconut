import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';

import { Layout, Spinner } from '@ui-kitten/components';

import { ListingCard, useManageFeed } from '@reddit/feed';
import { Select } from '@reddit/generic';
import { Listing, ListingResult, PostSorting } from '@reddit/models';

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.id;
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
        <FlatList
            data={feed.data.children}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReached={onRefresh}
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
