import React, { useEffect } from 'react';

import { Listing, ListingFilter, Thing } from '@coconut/models';
import {
    Resource,
    useFetchResource,
    useSelectResourceFetchData,
    useSelectResourceFetchInLoadingState,
} from '@coconut/resource';

export const useManageFeed = () => {
    const [filter, setFilter] = React.useState(ListingFilter.HOT);
    const [isLoading, setIsLoading] = React.useState(false);
    const feed = useSelectResourceFetchData(Resource.FEED) as Thing<Listing> | undefined;
    const loading = useSelectResourceFetchInLoadingState(Resource.FEED);
    const fetchFeed = useFetchResource(Resource.FEED);

    useEffect(() => {
        fetchFeed({ type: filter });
    }, [fetchFeed, filter]);

    useEffect(() => {
        if (feed && !loading) {
            setIsLoading(false);
        }
    }, [feed, loading, setIsLoading]);

    const onRefresh = () => {
        if (feed && feed.data.children.length < 5) {
            return;
        }

        fetchFeed({
            type: filter,
            after: feed?.data.children[feed.data.children.length - 1]?.data.name,
        });
    };

    const onFilterChange = (filter: ListingFilter) => {
        setFilter(filter);
        setIsLoading(true);
    };

    return {
        listings: feed?.data.children,
        filter,
        isLoading,
        onRefresh,
        onFilterChange,
    };
};
