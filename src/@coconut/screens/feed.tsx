import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Spinner } from '@ui-kitten/components';

import { ListingCard, useManageFeed } from '@coconut/feed';
import { PopupMenu, Screen } from '@coconut/generic';
import { Listing, PostSorting } from '@coconut/models';

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.name;
const labelExtractor = (value: PostSorting) => value.toUpperCase();

const FeedScreen = () => {
    const { feed, postSorting, postSortingOptions, onRefresh, setPostSorting } = useManageFeed();
    return (
        <Screen>
            <View style={styles.header}>
                <PopupMenu
                    data={postSortingOptions}
                    value={postSorting}
                    onChange={setPostSorting}
                    labelExtractor={labelExtractor}
                />
                <View style={styles.spacer} />
            </View>
            {feed ? (
                <FlashList
                    renderItem={renderItem}
                    estimatedItemSize={310}
                    data={feed?.data.children}
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
        </Screen>
    );
};

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
    },
    spacer: {
        flexGrow: 1,
    },
});

export default FeedScreen;
