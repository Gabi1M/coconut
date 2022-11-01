import React, { useEffect } from 'react';

import { Message, Thing } from '@coconut/models';
import {
    Resource,
    useFetchResource,
    useSelectResourceFetchData,
    useSelectResourceFetchInLoadingState,
} from '@coconut/resource';

export const useManageInbox = () => {
    const messages = useSelectResourceFetchData(Resource.MESSAGES) as Thing<Message> | undefined;
    const isLoading = useSelectResourceFetchInLoadingState(Resource.MESSAGES);
    const fetchMessages = useFetchResource(Resource.MESSAGES);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);

    const onRefresh = () => {
        if (messages && messages.data.children.length < 5) {
            return;
        }

        fetchMessages({
            after: messages?.data.children[messages.data.children.length - 1]?.data.name,
        });
    };

    return {
        messages,
        isLoading,
        onRefresh,
    };
};
