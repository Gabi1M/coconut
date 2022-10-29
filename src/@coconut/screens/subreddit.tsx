import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Spinner, Text } from '@ui-kitten/components';

import { SafeAreaScreen, SelectMenu } from '@coconut/generic';
import { ListingCard } from '@coconut/listing';
import { Listing, PostSorting } from '@coconut/models';
import { StackRoutes, StackScreenProps } from '@coconut/navigation';
import { useManageSubreddit } from '@coconut/subreddit';

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.name;
const labelExtractor = (value: PostSorting) => value.toUpperCase();

const SubredditScreen = (props: StackScreenProps[StackRoutes.SUBREDDIT]) => {
    const { listings, postSorting, postSortingOptions, onRefresh, setPostSorting } =
        useManageSubreddit(props.route.params.subreddit);

    return (
        <SafeAreaScreen>
            <View style={styles.header}>
                <SelectMenu
                    data={postSortingOptions}
                    value={postSorting}
                    onChange={setPostSorting}
                    labelExtractor={labelExtractor}
                />
                <Text>{props.route.params.subreddit}</Text>
            </View>
            {listings ? (
                <FlashList
                    renderItem={renderItem}
                    estimatedItemSize={310}
                    data={listings.data.children}
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
        </SafeAreaScreen>
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default SubredditScreen;
