import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { LoadingSpinner, NoContent, SafeAreaScreen } from '@coconut/generic';
import { Subreddit, Thing } from '@coconut/models';
import { NavigationHeader } from '@coconut/navigation';
import {
    Resource,
    useSelectResourceFetchData,
    useSelectResourceFetchInLoadingState,
} from '@coconut/resource';
import { SubredditCard } from '@coconut/subreddit';

const renderItem: ListRenderItem<Subreddit> = ({ item }) => <SubredditCard subreddit={item} />;
const keyExtractor = (item: Subreddit) => item.data.name;

const SubredditsScreen = () => {
    const subreddits = useSelectResourceFetchData(Resource.SUBREDDITS) as
        | Thing<Subreddit>
        | undefined;
    const isLoading = useSelectResourceFetchInLoadingState(Resource.SUBREDDITS);

    if (isLoading) {
        return (
            <SafeAreaScreen>
                <NavigationHeader />
                <LoadingSpinner />
            </SafeAreaScreen>
        );
    }

    if (!subreddits || !subreddits.data.children.length) {
        return (
            <SafeAreaScreen>
                <NavigationHeader />
                <NoContent />
            </SafeAreaScreen>
        );
    }

    return (
        <SafeAreaScreen>
            <NavigationHeader />
            <FlashList
                data={subreddits.data.children}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                estimatedItemSize={50}
            />
        </SafeAreaScreen>
    );
};

export default SubredditsScreen;
