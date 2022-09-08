import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
    createResourceDeleteAction,
    createResourceFetchAction,
    createResourceSetAction,
} from './createResourceReducer';
import { Resource, ResourceDeleteParams, ResourceFetchParams, ResourceSetParams } from './types';

export const useCreateResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(
        (params: ResourceSetParams[T]) => {
            dispatch(createResourceSetAction(resourceName, params));
        },
        [dispatch, resourceName],
    );
};

export const useFetchResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(
        (params?: ResourceFetchParams[T]) => {
            dispatch(createResourceFetchAction(resourceName, params));
        },
        [dispatch, resourceName],
    );
};

export const useDeleteResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(
        (params: ResourceDeleteParams[T]) => {
            dispatch(createResourceDeleteAction(resourceName, params));
        },
        [dispatch, resourceName],
    );
};
