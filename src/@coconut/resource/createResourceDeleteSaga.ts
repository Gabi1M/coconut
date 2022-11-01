/* eslint-disable no-restricted-imports */
import { apply, put, select } from 'redux-saga/effects';

import { Api } from '@coconut/api';
import { AccessToken } from '@coconut/models';

import {
    ResourceDeleteAction,
    createResourceDeleteFailAction,
    createResourceDeleteSuccessAction,
} from './createResourceReducer';
import { selectResourceFetchData } from './selectors';
import { Resource, ResourceDeleteDataType } from './types';

export const createResourceDeleteSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* deleteResource(action: ResourceDeleteAction<T>) {
        const accessToken: AccessToken | undefined = yield select(
            selectResourceFetchData(Resource.ACCESS_TOKEN),
        );
        const api = new Api(accessToken?.access_token);
        try {
            const data: ResourceDeleteDataType[T] = yield apply(api, api.deleteResource, [
                resourceName,
                action.params,
            ]);
            yield put(createResourceDeleteSuccessAction(resourceName, data, action.params));
        } catch (error) {
            yield put(createResourceDeleteFailAction(resourceName, action.params, error as Error));
        }
    }

    return deleteResource;
};
