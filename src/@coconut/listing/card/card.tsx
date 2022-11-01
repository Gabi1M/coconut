import React from 'react';

import { Card } from '@coconut/generic';
import { Listing } from '@coconut/models';
import { useNavigateToComments as useNavigateToListing } from '@coconut/navigation';
import { Resource, useClearResource, useFetchResource } from '@coconut/resource';

import PostDetails from './details';
import PostThumbnail from './thumbnail';
import PostTitle from './title';

interface Props {
    listing: Listing;
}

const PostCard = ({ listing }: Props) => {
    const fetchListing = useFetchResource(Resource.LISTING);
    const clearListing = useClearResource(Resource.LISTING);
    const navigateToListing = useNavigateToListing();
    const onPress = () => {
        clearListing();
        fetchListing({
            subreddit: listing.data.subreddit_name_prefixed,
            id: listing.data.id,
        });
        navigateToListing();
    };

    return (
        <Card onPress={onPress}>
            <PostTitle title={listing.data.title} />
            <PostThumbnail thumbnail={listing.data.thumbnail} />
            <PostDetails
                upvotes={listing.data.ups}
                voteRatio={listing.data.upvote_ratio}
                subredditName={listing.data.subreddit_name_prefixed}
            />
        </Card>
    );
};

export default PostCard;
