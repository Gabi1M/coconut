/* eslint-disable no-restricted-imports */
import { apply, put, select } from 'redux-saga/effects';

import { selectAccessToken } from '@reddit/accessToken/state/selectors';
import { Api } from '@reddit/api';
import { AccessToken } from '@reddit/models';

import {
    ResourceDeleteAction,
    createResourceDeleteFailAction,
    createResourceDeleteSuccessAction,
} from './createResourceReducer';
import { Resource } from './types';

export const createResourceDeleteSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* deleteResource(action: ResourceDeleteAction<T>) {
        const accessToken: AccessToken | undefined = yield select(selectAccessToken);
        const api = new Api(accessToken?.access_token);
        try {
            yield apply(api, api.deleteResource, [resourceName, action.params]);
            yield put(createResourceDeleteSuccessAction(resourceName, action.params));
        } catch (error) {
            yield put(createResourceDeleteFailAction(resourceName, action.params, error as Error));
        }
    }

    return deleteResource;
};
