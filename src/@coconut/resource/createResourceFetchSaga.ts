/* eslint-disable no-restricted-imports */
import { apply, put, select } from 'redux-saga/effects';

import { selectAccessToken } from '@coconut/accessToken/state/selectors';
import { Api } from '@coconut/api';
import { AccessToken } from '@coconut/models';

import {
    ResourceFetchAction,
    createResourceFetchFailAction,
    createResourceFetchSuccessAction,
} from './createResourceReducer';
import { Resource, ResourceDataType } from './types';

export const createResourceFetchSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* fetchResource(action: ResourceFetchAction<T>) {
        const accessToken: AccessToken | undefined = yield select(selectAccessToken);
        const api = new Api(accessToken?.access_token);
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
