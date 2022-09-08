import { apply, call, put } from 'redux-saga/effects';

import { AsyncStorage, AsyncStorageKeys } from '@reddit/asyncStorage';
import { AccessToken } from '@reddit/models';
import { navigateToFeed } from '@reddit/navigation';
import { Resource, createResourceFetchSuccessAction } from '@reddit/resource';

export function* startupSaga() {
    const accessToken: AccessToken | undefined = yield apply(AsyncStorage, AsyncStorage.getValue, [
        AsyncStorageKeys.ACCESS_TOKEN,
    ]);
    if (!accessToken) {
        return;
    }

    yield put(createResourceFetchSuccessAction(Resource.ACCESS_TOKEN, accessToken));
    yield call(navigateToFeed);
}
