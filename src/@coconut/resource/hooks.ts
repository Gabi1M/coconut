import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    createResourceClearAction,
    createResourceDeleteAction,
    createResourceFetchAction,
    createResourceSetAction,
    createResourceUpdateAction,
} from './createResourceReducer';
import {
    selectResourceDeleteData,
    selectResourceDeleteInErrorState,
    selectResourceDeleteInLoadingState,
    selectResourceFetchData,
    selectResourceFetchInErrorState,
    selectResourceFetchInLoadingState,
    selectResourceSetData,
    selectResourceSetInErrorState,
    selectResourceSetInLoadingState,
    selectResourceUpdateData,
    selectResourceUpdateInErrorState,
    selectResourceUpdateInLoadingState,
} from './selectors';
import {
    Resource,
    ResourceDeleteParams,
    ResourceFetchParams,
    ResourceSetParams,
    ResourceUpdateParams,
} from './types';

export const useFetchResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(
        (params?: ResourceFetchParams[T]) => {
            dispatch(createResourceFetchAction(resourceName, params));
        },
        [dispatch, resourceName],
    );
};

export const useSetResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(
        (params: ResourceSetParams[T]) => {
            dispatch(createResourceSetAction(resourceName, params));
        },
        [dispatch, resourceName],
    );
};

export const useUpdateResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(
        (params: ResourceUpdateParams[T]) => {
            dispatch(createResourceUpdateAction(resourceName, params));
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

export const useClearResource = <T extends Resource = Resource>(resourceName: T) => {
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(createResourceClearAction(resourceName));
    }, [dispatch, resourceName]);
};

export const useSelectResourceFetchData = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceFetchData(resource));
export const useSelectResourceSetData = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceSetData(resource));
export const useSelectResourceUpdateData = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceUpdateData(resource));
export const useSelectResourceDeleteData = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceDeleteData(resource));

export const useSelectResourceFetchInLoadingState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceFetchInLoadingState(resource));
export const useSelectResourceSetInLoadingState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceSetInLoadingState(resource));
export const useSelectResourceUpdateInLoadingState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceUpdateInLoadingState(resource));
export const useSelectResourceDeleteInLoadingState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceDeleteInLoadingState(resource));

export const useSelectResourceFetchInErrorState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceFetchInErrorState(resource));
export const useSelectResourceSetInErrorState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceSetInErrorState(resource));
export const useSelectResourceUpdateInErrorState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceUpdateInErrorState(resource));
export const useSelectResourceDeleteInErrorState = <T extends Resource = Resource>(resource: T) =>
    useSelector(selectResourceDeleteInErrorState(resource));
