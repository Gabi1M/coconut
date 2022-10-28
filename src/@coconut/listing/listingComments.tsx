import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Spinner, Text } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Comment, ListingAndComments } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';

import CommentItem from './commentItem';

const renderItem: ListRenderItem<Comment> = ({ item }) => <CommentItem comment={item} />;
const keyExtractor = (item: Comment) => item.data.name;

const ListingComments = () => {
    const listingAndComments = useSelectResourceFetchData(Resource.LISTING) as
        | ListingAndComments
        | undefined;
    if (!listingAndComments) {
        return <Spinner />;
    }

    const comments = listingAndComments.comments.data.children;
    return (
        <View style={styles.root}>
            <View style={styles.divider} />
            <Text style={styles.text}>Comments</Text>
            <FlashList
                renderItem={renderItem}
                estimatedItemSize={100}
                data={comments}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    text: {
        marginVertical: Dimensions.ternarySpacing,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
});

export default ListingComments;
