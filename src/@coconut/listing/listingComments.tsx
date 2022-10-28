import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Spinner } from '@ui-kitten/components';

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
        <FlashList
            renderItem={renderItem}
            estimatedItemSize={100}
            data={comments}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ListingComments;
