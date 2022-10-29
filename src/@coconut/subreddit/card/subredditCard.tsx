import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Card } from '@coconut/generic';
import { PostSorting, Subreddit } from '@coconut/models';
import { useNavigateToSubreddit } from '@coconut/navigation';
import { Resource, useClearResource, useFetchResource } from '@coconut/resource';

interface Props {
    subreddit: Subreddit;
}

const SubredditCard = ({ subreddit }: Props) => {
    const navigateToSubreddit = useNavigateToSubreddit();
    const clearSubreddit = useClearResource(Resource.SUBREDDIT);
    const fetchSubreddit = useFetchResource(Resource.SUBREDDIT);
    const onPress = () => {
        clearSubreddit();
        fetchSubreddit({
            subreddit: subreddit.data.display_name_prefixed,
            type: PostSorting.HOT,
        });
        navigateToSubreddit(subreddit.data.display_name_prefixed);
    };
    return (
        <Card onPress={onPress}>
            <Text style={styles.name}>{subreddit.data.display_name_prefixed}</Text>
            <Text>{subreddit.data.title}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    name: {
        marginBottom: Dimensions.ternarySpacing,
    },
});

export default SubredditCard;
