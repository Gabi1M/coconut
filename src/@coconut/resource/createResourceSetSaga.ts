/* eslint-disable no-restricted-imports */
import { apply, put, select } from 'redux-saga/effects';

import { Api } from '@coconut/api';
import { AccessToken } from '@coconut/models';

import {
    ResourceSetAction,
    createResourceSetFailAction,
    createResourceSetSuccessAction,
} from './createResourceReducer';
import { selectResourceFetchData } from './selectors';
import { Resource, ResourceSetDataType } from './types';

export const createResourceSetSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* setResource(action: ResourceSetAction<T>) {
        const accessToken: AccessToken | undefined = yield select(
            selectResourceFetchData(Resource.ACCESS_TOKEN),
        );
        const api = new Api(accessToken?.access_token);
        try {
            const data: ResourceSetDataType[T] = yield apply(api, api.setResource, [
                resourceName,
                action.params,
            ]);
            yield put(createResourceSetSuccessAction(resourceName, data, action.params));
        } catch (error) {
            yield put(createResourceSetFailAction(resourceName, action.params, error as Error));
        }
    }

    return setResource;
};
