import React, { useEffect } from 'react';

import { Listing, PostSorting, Thing } from '@coconut/models';
import { Resource, useFetchResource, useSelectResourceFetchData } from '@coconut/resource';

const postSortingOptions = Object.values(PostSorting).filter((item) => isNaN(Number(item)));

export const useManageSubreddit = (subreddit: string) => {
    const [postSorting, setPostSorting] = React.useState(postSortingOptions[0]);
    const listings = useSelectResourceFetchData(Resource.SUBREDDIT) as Thing<Listing> | undefined;
    const fetchSubreddit = useFetchResource(Resource.SUBREDDIT);

    useEffect(() => {
        fetchSubreddit({ type: postSorting, subreddit });
    }, [fetchSubreddit, postSorting, subreddit]);

    const onRefresh = () =>
        fetchSubreddit({
            subreddit,
            type: postSorting,
            after: listings?.data.children[listings.data.children.length - 1]?.data.name,
        });

    return {
        listings,
        postSorting,
        postSortingOptions,
        onRefresh,
        setPostSorting,
    };
};
