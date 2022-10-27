import React, { useEffect } from 'react';

import { Listing, PostSorting, Thing } from '@coconut/models';
import { Resource, useFetchResource, useSelectResourceFetchData } from '@coconut/resource';

const postSortingOptions = Object.values(PostSorting).filter((item) => isNaN(Number(item)));

export const useManageFeed = () => {
    const [postSorting, setPostSorting] = React.useState(postSortingOptions[0]);
    const feed = useSelectResourceFetchData(Resource.FEED) as Thing<Listing> | undefined;
    const fetchFeed = useFetchResource(Resource.FEED);

    useEffect(() => {
        fetchFeed({ type: postSorting });
    }, [fetchFeed, postSorting]);

    const onRefresh = () =>
        fetchFeed({
            type: postSorting,
            after: feed?.data.children[feed.data.children.length - 1]?.data.name,
        });

    return {
        feed,
        postSorting,
        postSortingOptions,
        onRefresh,
        setPostSorting,
    };
};
