import React, { useEffect } from 'react';

import { Listing, ListingFilter, Thing } from '@coconut/models';
import { Resource, useFetchResource, useSelectResourceFetchData } from '@coconut/resource';

export const useManageFeed = () => {
    const [filter, setFilter] = React.useState(ListingFilter.HOT);
    const feed = useSelectResourceFetchData(Resource.FEED) as Thing<Listing> | undefined;
    const fetchFeed = useFetchResource(Resource.FEED);

    useEffect(() => {
        fetchFeed({ type: filter });
    }, [fetchFeed, filter]);

    const onRefresh = () =>
        fetchFeed({
            type: filter,
            after: feed?.data.children[feed.data.children.length - 1]?.data.name,
        });

    return {
        feed,
        filter,
        onRefresh,
        setFilter,
    };
};
