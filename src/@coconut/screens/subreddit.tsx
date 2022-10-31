import React from 'react';

import { SafeAreaScreen } from '@coconut/generic';
import { ListingList, ListingListHeader } from '@coconut/listing';
import { StackRoutes, StackScreenProps } from '@coconut/navigation';
import { useManageSubreddit } from '@coconut/subreddit';

const SubredditScreen = (props: StackScreenProps[StackRoutes.SUBREDDIT]) => {
    const { listings, filter, onRefresh, setFilter } = useManageSubreddit(
        props.route.params.subreddit,
    );

    return (
        <SafeAreaScreen>
            <ListingListHeader filter={filter} onListingFilterChange={setFilter} />
            <ListingList listings={listings?.data.children} onRefresh={onRefresh} />
        </SafeAreaScreen>
    );
};

export default SubredditScreen;
