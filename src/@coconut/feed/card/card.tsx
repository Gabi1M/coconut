import React from 'react';

import { Card } from '@coconut/generic';
import { Listing } from '@coconut/models';
import { useNavigateToComments } from '@coconut/navigation';
import { Resource, useClearResource, useFetchResource } from '@coconut/resource';

import PostDetails from './details';
import PostThumbnail from './thumbnail';
import PostTitle from './title';

interface Props {
    listing: Listing;
}

const PostCard = ({ listing }: Props) => {
    const fetchComments = useFetchResource(Resource.COMMENTS);
    const clearComments = useClearResource(Resource.COMMENTS);
    const navigateToComments = useNavigateToComments();
    const onPress = () => {
        clearComments();
        fetchComments({
            subreddit: listing.data.subreddit_name_prefixed,
            id: listing.data.id,
        });
        navigateToComments();
    };

    return (
        <Card onPress={onPress}>
            <PostTitle title={listing.data.title} />
            <PostThumbnail listing={listing} />
            <PostDetails
                upvotes={listing.data.ups}
                voteRatio={listing.data.upvote_ratio}
                subredditName={listing.data.subreddit_name_prefixed}
            />
        </Card>
    );
};

export default PostCard;
