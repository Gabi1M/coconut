import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '@ui-kitten/components';

import PostVotes from './upvotes';
import PostVoteRatio from './voteRatio';

interface Props {
    upvotes: number;
    voteRatio: number;
    subredditName: string;
}

const PostDetails = ({ upvotes, voteRatio, subredditName }: Props) => (
    <View style={styles.root}>
        <View style={styles.votesContainer}>
            <PostVotes votes={upvotes} />
            <PostVoteRatio ratio={voteRatio} />
        </View>
        <Text category='c2'>{subredditName}</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    votesContainer: {
        flexDirection: 'row',
    },
});

export default PostDetails;
