import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@reddit/resource';

import { AccessTokenActions } from './reducer';

export function* accessTokenSaga() {
    yield takeLatest(AccessTokenActions.FETCH, createResourceFetchSaga(Resource.ACCESS_TOKEN));
}
