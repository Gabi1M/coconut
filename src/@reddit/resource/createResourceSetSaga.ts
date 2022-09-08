/* eslint-disable no-restricted-imports */
import { apply, put } from 'redux-saga/effects';

import { Api } from '@reddit/api';

import {
    ResourceSetAction,
    createResourceSetFailAction,
    createResourceSetSuccessAction,
} from './createResourceReducer';
import { Resource } from './types';

export const createResourceSetSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* setResource(action: ResourceSetAction<T>) {
        const api = new Api();
        try {
            yield apply(api, api.setResource, [resourceName, action.params]);
            yield put(createResourceSetSuccessAction(resourceName, action.params));
        } catch (error) {
            yield put(createResourceSetFailAction(resourceName, action.params, error as Error));
        }
    }

    return setResource;
};
