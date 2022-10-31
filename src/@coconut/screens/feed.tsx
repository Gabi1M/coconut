import React from 'react';

import { useManageFeed } from '@coconut/feed';
import { SafeAreaScreen } from '@coconut/generic';
import { ListingList, ListingListHeader } from '@coconut/listing';

const FeedScreen = () => {
    const { listings, filter, isLoading, onRefresh, onFilterChange } = useManageFeed();

    return (
        <SafeAreaScreen>
            <ListingListHeader filter={filter} onListingFilterChange={onFilterChange} />
            <ListingList listings={listings} isLoading={isLoading} onRefresh={onRefresh} />
        </SafeAreaScreen>
    );
};

export default FeedScreen;
