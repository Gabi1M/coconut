import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Listing } from '@reddit/models';

import PostDetails from './details';
import PostThumbnail from './thumbnail';
import PostTitle from './title';

interface Props {
    listing: Listing;
}

const PostCard = ({ listing }: Props) => (
    <View style={styles.root}>
        <PostTitle title={listing.data.title} />
        <PostThumbnail listing={listing} />
        <PostDetails
            upvotes={listing.data.ups}
            voteRatio={listing.data.upvote_ratio}
            subredditName={listing.data.subreddit_name_prefixed}
        />
    </View>
);

const styles = StyleSheet.create({
    root: {
        marginVertical: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#1F2428',
    },
});

export default PostCard;
