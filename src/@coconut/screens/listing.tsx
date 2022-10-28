import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { PostThumbnail, PostTitle } from '@coconut/feed';
import { LoadingSpinner, Screen } from '@coconut/generic';
import { CommentItem } from '@coconut/listing';
import { Comment, Listing, ListingAndComments } from '@coconut/models';
import {
    Resource,
    useSelectResourceFetchData,
    useSelectResourceFetchInLoadingState,
} from '@coconut/resource';

const renderItem: ListRenderItem<Comment> = ({ item }) => <CommentItem comment={item} />;
const keyExtractor = (item: Comment) => item.data.name;

const ListingScreen = () => {
    const listing = useSelectResourceFetchData(Resource.LISTING) as ListingAndComments | undefined;
    const isLoading = useSelectResourceFetchInLoadingState(Resource.LISTING);

    if (!listing && isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <Screen>
            <PostThumbnail listing={listing?.[0].data.children[0] as Listing} />
            <PostTitle category='h5' title={listing?.[0].data.children[0].data.title as string} />
            <FlashList
                renderItem={renderItem}
                estimatedItemSize={100}
                data={listing?.[1].data.children}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    );
};

export default ListingScreen;
