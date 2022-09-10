import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PostSorting } from '@reddit/models';
import { Resource, useFetchResource } from '@reddit/resource';

import { selectFeed } from './state';

const postSortingOptions = Object.values(PostSorting).filter((item) => isNaN(Number(item)));

export const useManageFeed = () => {
    const [postSorting, setPostSorting] = React.useState(postSortingOptions[0]);
    const feed = useSelector(selectFeed);
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
