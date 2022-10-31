import React from 'react';

import { SafeAreaScreen } from '@coconut/generic';
import { ListingList } from '@coconut/listing';
import { StackRoutes, StackScreenProps } from '@coconut/navigation';
import { SubredditScreenHeader, useManageSubreddit } from '@coconut/subreddit';

const SubredditScreen = (props: StackScreenProps[StackRoutes.SUBREDDIT]) => {
    const { listings, filter, isLoading, onRefresh, onFilterChange } = useManageSubreddit(
        props.route.params.subreddit,
    );

    return (
        <SafeAreaScreen>
            <SubredditScreenHeader
                subreddit={props.route.params.subreddit}
                filter={filter}
                onListingFilterChange={onFilterChange}
            />
            <ListingList listings={listings} isLoading={isLoading} onRefresh={onRefresh} />
        </SafeAreaScreen>
    );
};

export default SubredditScreen;
