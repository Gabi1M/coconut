/* eslint-disable no-restricted-imports */
import { GlobalState } from '@coconut/state/types';

import { Resource } from './types';

export const selectResourceFetchData =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].fetch.data;
export const selectResourceSetData =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].set.data;
export const selectResourceUpdateData =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].update.data;
export const selectResourceDeleteData =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].delete.data;

export const selectResourceFetchInLoadingState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].fetch.isLoading;
export const selectResourceSetInLoadingState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].set.isLoading;
export const selectResourceUpdateInLoadingState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].update.isLoading;
export const selectResourceDeleteInLoadingState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        state[resource].delete.isLoading;

export const selectResourceFetchInErrorState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        !!state[resource].fetch.error;
export const selectResourceSetInErrorState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        !!state[resource].set.error;
export const selectResourceUpdateInErrorState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        !!state[resource].update.error;
export const selectResourceDeleteInErrorState =
    <T extends Resource = Resource>(resource: T) =>
    (state: GlobalState) =>
        !!state[resource].delete.error;
