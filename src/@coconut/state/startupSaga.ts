import { apply, call, put } from 'redux-saga/effects';

import { AsyncStorage, AsyncStorageKeys } from '@coconut/asyncStorage';
import { AccessToken } from '@coconut/models';
import { navigateToFeed, removeAuthRoutes } from '@coconut/navigation';
import {
    Resource,
    createResourceFetchAction,
    createResourceFetchSuccessAction,
} from '@coconut/resource';

export function* startupSaga() {
    const accessToken: AccessToken | undefined = yield apply(AsyncStorage, AsyncStorage.getValue, [
        AsyncStorageKeys.ACCESS_TOKEN,
    ]);
    if (!accessToken) {
        return;
    }

    yield put(createResourceFetchSuccessAction(Resource.ACCESS_TOKEN, accessToken));
    yield put(createResourceFetchAction(Resource.PROFILE));
    yield put(createResourceFetchAction(Resource.SUBREDDITS));
    yield call(navigateToFeed);
    yield call(removeAuthRoutes);
}
