import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@coconut/resource';

import { ProfileActions } from './reducer';

export function* profileSaga() {
    yield takeLatest(ProfileActions.FETCH, createResourceFetchSaga(Resource.PROFILE));
}
