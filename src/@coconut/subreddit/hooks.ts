import React, { useEffect } from 'react';

import { Listing, ListingFilter, Thing } from '@coconut/models';
import { Resource, useFetchResource, useSelectResourceFetchData } from '@coconut/resource';

export const useManageSubreddit = (subreddit: string) => {
    const [filter, setFilter] = React.useState(ListingFilter.BEST);
    const listings = useSelectResourceFetchData(Resource.SUBREDDIT) as Thing<Listing> | undefined;
    const fetchSubreddit = useFetchResource(Resource.SUBREDDIT);

    useEffect(() => {
        fetchSubreddit({ type: filter, subreddit });
    }, [fetchSubreddit, filter, subreddit]);

    const onRefresh = () =>
        fetchSubreddit({
            subreddit,
            type: filter,
            after: listings?.data.children[listings.data.children.length - 1]?.data.name,
        });

    return {
        listings,
        filter,
        onRefresh,
        setFilter,
    };
};
