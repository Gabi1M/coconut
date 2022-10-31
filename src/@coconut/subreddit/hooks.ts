import React, { useEffect } from 'react';

import { Listing, ListingFilter, Thing } from '@coconut/models';
import {
    Resource,
    useFetchResource,
    useSelectResourceFetchData,
    useSelectResourceFetchInLoadingState,
} from '@coconut/resource';

export const useManageSubreddit = (subreddit: string) => {
    const [filter, setFilter] = React.useState(ListingFilter.BEST);
    const [isLoading, setIsLoading] = React.useState(false);
    const listings = useSelectResourceFetchData(Resource.SUBREDDIT) as Thing<Listing> | undefined;
    const loading = useSelectResourceFetchInLoadingState(Resource.SUBREDDIT);
    const fetchSubreddit = useFetchResource(Resource.SUBREDDIT);

    useEffect(() => {
        fetchSubreddit({ type: filter, subreddit });
    }, [fetchSubreddit, filter, subreddit]);

    useEffect(() => {
        if (listings && !loading) {
            setIsLoading(false);
        }
    }, [listings, loading, setIsLoading]);

    const onRefresh = () =>
        fetchSubreddit({
            subreddit,
            type: filter,
            after: listings?.data.children[listings.data.children.length - 1]?.data.name,
        });

    const onFilterChange = (filter: ListingFilter) => {
        setFilter(filter);
        setIsLoading(true);
    };

    return {
        listings: listings?.data.children,
        filter,
        isLoading,
        onRefresh,
        onFilterChange,
    };
};
