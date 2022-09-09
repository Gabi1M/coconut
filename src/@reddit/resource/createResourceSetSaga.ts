/* eslint-disable no-restricted-imports */
import { apply, put, select } from 'redux-saga/effects';

import { selectAccessToken } from '@reddit/accessToken/state/selectors';
import { Api } from '@reddit/api';
import { AccessToken } from '@reddit/models';

import {
    ResourceSetAction,
    createResourceSetFailAction,
    createResourceSetSuccessAction,
} from './createResourceReducer';
import { Resource } from './types';

export const createResourceSetSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* setResource(action: ResourceSetAction<T>) {
        const accessToken: AccessToken | undefined = yield select(selectAccessToken);
        const api = new Api(accessToken?.access_token);
        try {
            yield apply(api, api.setResource, [resourceName, action.params]);
            yield put(createResourceSetSuccessAction(resourceName, action.params));
        } catch (error) {
            yield put(createResourceSetFailAction(resourceName, action.params, error as Error));
        }
    }

    return setResource;
};
