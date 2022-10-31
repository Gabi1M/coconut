import React from 'react';

import { useManageFeed } from '@coconut/feed';
import { SafeAreaScreen } from '@coconut/generic';
import { ListingList, ListingListHeader } from '@coconut/listing';

const FeedScreen = () => {
    const { feed, filter, onRefresh, setFilter } = useManageFeed();

    return (
        <SafeAreaScreen>
            <ListingListHeader filter={filter} onListingFilterChange={setFilter} />
            <ListingList listings={feed?.data.children} onRefresh={onRefresh} />
        </SafeAreaScreen>
    );
};

export default FeedScreen;
