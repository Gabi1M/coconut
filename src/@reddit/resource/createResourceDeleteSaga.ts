/* eslint-disable no-restricted-imports */
import { apply, put } from 'redux-saga/effects';

import { Api } from '@reddit/api';

import {
    ResourceDeleteAction,
    createResourceDeleteFailAction,
    createResourceDeleteSuccessAction,
} from './createResourceReducer';
import { Resource } from './types';

export const createResourceDeleteSaga = <T extends Resource = Resource>(resourceName: T) => {
    function* deleteResource(action: ResourceDeleteAction<T>) {
        const api = new Api();
        try {
            yield apply(api, api.deleteResource, [resourceName, action.params]);
            yield put(createResourceDeleteSuccessAction(resourceName, action.params));
        } catch (error) {
            yield put(createResourceDeleteFailAction(resourceName, action.params, error as Error));
        }
    }

    return deleteResource;
};
