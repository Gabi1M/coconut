import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Resource, useFetchResource } from '@coconut/resource';

import { selectMessages } from './state';

export const useManageInbox = () => {
    const messages = useSelector(selectMessages);
    const fetchMessages = useFetchResource(Resource.MESSAGES);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);

    const onRefresh = () =>
        fetchMessages({
            after: messages?.data.children[messages.data.children.length - 1]?.data.name,
        });

    return {
        messages,
        onRefresh,
    };
};
