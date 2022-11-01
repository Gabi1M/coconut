import { apply, call, takeLatest } from 'redux-saga/effects';

import { AsyncStorage, AsyncStorageKeys } from '@coconut/asyncStorage';
import { keepOnlyCurrentRoute, navigateToLogin } from '@coconut/navigation';
import { Resource, createResourceFetchSaga } from '@coconut/resource';

import { ProfileActions } from './reducer';

function* logoutSaga() {
    yield apply(AsyncStorage, AsyncStorage.removeValue, [AsyncStorageKeys.ACCESS_TOKEN]);
    yield call(navigateToLogin);
    yield call(keepOnlyCurrentRoute);
}

export function* profileSaga() {
    yield takeLatest(ProfileActions.FETCH, createResourceFetchSaga(Resource.PROFILE));
    yield takeLatest(ProfileActions.LOGOUT, logoutSaga);
}
