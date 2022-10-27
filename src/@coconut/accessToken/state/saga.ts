import { apply, call, delay, put, select, takeLatest } from 'redux-saga/effects';

import { AsyncStorage, AsyncStorageKeys } from '@coconut/asyncStorage';
import { AccessToken } from '@coconut/models';
import { navigateToFeed } from '@coconut/navigation';
import {
    Resource,
    ResourceFetchAction,
    createResourceFetchAction,
    createResourceFetchSaga,
    selectResourceFetchData,
} from '@coconut/resource';

import { AccessTokenActions } from './reducer';

function* fetchAccessTokenSaga(action: ResourceFetchAction<Resource.ACCESS_TOKEN>) {
    yield call(createResourceFetchSaga(Resource.ACCESS_TOKEN), action);
    yield delay(1000);
    const accessToken: AccessToken | undefined = yield select(
        selectResourceFetchData(Resource.ACCESS_TOKEN),
    );
    if (accessToken) {
        yield apply(AsyncStorage, AsyncStorage.setValue, [
            AsyncStorageKeys.ACCESS_TOKEN,
            accessToken,
        ]);
        yield put(createResourceFetchAction(Resource.PROFILE));
        yield call(navigateToFeed);
    }
}

export function* accessTokenSaga() {
    yield takeLatest(AccessTokenActions.FETCH, fetchAccessTokenSaga);
}
