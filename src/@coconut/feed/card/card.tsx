import React from 'react';

import { Card } from '@coconut/generic';
import { Listing } from '@coconut/models';

import PostDetails from './details';
import PostThumbnail from './thumbnail';
import PostTitle from './title';

interface Props {
    listing: Listing;
}

const PostCard = ({ listing }: Props) => (
    <Card>
        <PostTitle title={listing.data.title} />
        <PostThumbnail listing={listing} />
        <PostDetails
            upvotes={listing.data.ups}
            voteRatio={listing.data.upvote_ratio}
            subredditName={listing.data.subreddit_name_prefixed}
        />
    </Card>
);

export default PostCard;
