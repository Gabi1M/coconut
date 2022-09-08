/* eslint-disable no-restricted-imports */
import { apply, put } from 'redux-saga/effects';

import { Api } from '@reddit/api';

import {
    ResourceFetchAction,
    createResourceFetchFailAction,
    createResourceFetchSuccessAction,
} from './createResourceReducer';
import { Resource, ResourceDataType } from './types';

export const createResourceFetchSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* fetchResource(action: ResourceFetchAction<T>) {
        const api = new Api();
        try {
            const data: ResourceDataType[T] = yield apply(api, api.fetchResource, [
                resourceName,
                action.params,
            ]);
            yield put(createResourceFetchSuccessAction(resourceName, data, action.params));
        } catch (error) {
            yield put(createResourceFetchFailAction(resourceName, error as Error, action.params));
        }
    }

    return fetchResource;
};
